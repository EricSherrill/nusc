(function() {

  var app = angular.module('app', ['ui.bootstrap'])

  .controller('MainController', function($scope) {

    // import from arrays.js
    $scope.drives = drives;
    $scope.outputUnits = outputUnits;
    $scope.raidTypes = raidTypes;
    $scope.alerts = alerts;
    $scope.tooltips = tooltips;

    // drive_table.html settings
    $scope.sortType = "-mkt_size";
    $scope.sortReverse = true;

    // set some defaults for calculator
    $scope.totalDrives = 24;
    $scope.spareDrives = 1;
    $scope.rootDrives = 0;
    $scope.selectedDrive = $scope.drives[14];
    $scope.selectedRaidType = $scope.raidTypes[0];
    $scope.selectedOutputUnit = $scope.outputUnits[8].iec;
    $scope.snapReserve = 0;
    $scope.waflReserve = 10;
    $scope.aggrReserve = 0;
    $scope.rgSize = $scope.selectedDrive.rg_size_dp_default;
    // number of aggregates (future use)


    // calculated properties
    $scope.usableDrives = function() {
      return $scope.totalDrives - ($scope.spareDrives + $scope.rootDrives);
    };

    $scope.numRaidGroups = function () {
      return $scope.usableDrives() / $scope.rgSize;
    };

    $scope.rgDeficiency = function () {
      return (Math.ceil($scope.numRaidGroups()) * $scope.rgSize) - $scope.usableDrives();
    };

    $scope.partialRG = function () {
      return $scope.rgSize - $scope.rgDeficiency();
    };

    $scope.parityDrives = function() {
      if ($scope.partialRG() < $scope.selectedRaidType.parity_drives) {
        return Math.floor(($scope.numRaidGroups() * $scope.selectedRaidType.parity_drives) + 1);
      } else {
        return Math.ceil($scope.numRaidGroups()) * $scope.selectedRaidType.parity_drives;
      }
    };

    $scope.dataDrives = function() {
      return $scope.usableDrives() - $scope.parityDrives();
    };

    $scope.totalDriveEfficiency = function() {
      return ($scope.dataDrives() / $scope.totalDrives) * 100;
    };

    $scope.usableDriveEfficiency = function() {
      return ($scope.dataDrives() / $scope.usableDrives()) * 100;
    };
    // total base 10 capacity
    $scope.totalRawCapacity = function () {
      return $scope.totalDrives * $scope.selectedDrive.mkt_size;
    };
    // total physical capacity, base 2, before right-sizing
    $scope.totalPhysicalCapacity = function () {
      return $scope.totalDrives * $scope.selectedDrive.physical_size_mib;
    };
    // total right-size capacity, base 2
    $scope.totalRightSizeCapacity = function () {
      return $scope.totalDrives * $scope.selectedDrive.right_size_mib;
    };
    // TR-3838, page 8
    $scope.driveOverhead = function () {
      return $scope.dataDrives() * 20.5;
    };

    $scope.aggrTotalCapacity = function () {
      return ($scope.dataDrives() * $scope.selectedDrive.right_size_mib) - $scope.driveOverhead();
    };
    // account for aggr reserve
    $scope.aggrUsableCapacity = function () {
      if ($scope.aggrReserve == 0) {
        return $scope.aggrTotalCapacity();
      } else {
        return $scope.aggrTotalCapacity() * (1 - ($scope.aggrReserve / 100));
      }
    };
    // TR-3838, page 9
    $scope.volTotalCapacity = function () {
      return ($scope.aggrUsableCapacity() * 0.9) * 0.995;
    };
    // account for snap reserve
    $scope.volUsableCapacity = function () {
      if ($scope.snapReserve == 0) {
        return $scope.volTotalCapacity();
      } else {
        return $scope.volTotalCapacity() * (1 - ($scope.snapReserve / 100));
      }
    };

    $scope.volUsableEfficiency = function () {
      return ($scope.volUsableCapacity() / $scope.totalRightSizeCapacity()) * 100;
    };

    $scope.rgSizeMin = function () {
      return $scope.selectedRaidType.parity_drives + 1;
    };

    $scope.rgSizeMax = function () {
      if ($scope.selectedRaidType.name === "raid4") {
        return $scope.selectedDrive.rg_size_4_max;
      } else {
        return $scope.selectedDrive.rg_size_dp_max;
      }
    };

    $scope.rgSizeDefault = function () {
      if ($scope.selectedRaidType.name === "raid4") {
        return $scope.selectedDrive.rg_size_4_default;
      } else {
        return $scope.selectedDrive.rg_size_dp_default;
      }
    };

    $scope.dataDrivesPerRaidGroup = function () {
      return $scope.rgSize - $scope.selectedRaidType.parity_drives;
    };

    $scope.smallRgWarning = function () {
      if ($scope.partialRG() <= $scope.selectedRaidType.parity_drives) {
        return true;
      } else {
        return false;
      }
    };

    $scope.usableCapacityEfficiency = function () {
      return ($scope.volUsableCapacity() / $scope.totalPhysicalCapacity()) * 100;
    };


  }); // close controller

  // http://stackoverflow.com/questions/18381944/ng-options-and-unique-filter-not-displaying-angular-js
  app.filter('unique', function() {
    return function(input, key) {
      var unique = {};
      var uniqueList = [];
      for (var i = 0; i < input.length; i++) {
        if (typeof unique[input[i][key]] == "undefined") {
          unique[input[i][key]] = "";
          uniqueList.push(input[i]);
        }
      }
      return uniqueList;
    };
  });

  /* filters mostly derived from https://gist.github.com/thomseddon/3511330 &
  http://stackoverflow.com/a/25651291/4793917 */

  app.filter('base2orig', function() {
    return function(bytes, precision, inputUnit) {
      if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
      if (typeof precision === 'undefined') precision = 2;
      var units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
        number = Math.floor(Math.log(bytes) / Math.log(1024)),
        offset = (units.indexOf(inputUnit));
      return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number + offset];
    };
  });

  // modified to add ability to specify input and output units
  app.filter('base2convert', function() {
    return function(input, precision, inUnit, outUnit) {
      if (isNaN(parseFloat(input)) || !isFinite(input)) return '-';
      if (typeof precision === 'undefined') precision = 2;
      var units = ['bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
      var exp = Math.floor(Math.log(input) / Math.log(1024));
      var offset = (typeof inUnit === 'undefined') ? 0 : units.indexOf(inUnit);
      if (typeof outUnit === 'undefined' || outUnit === '' || outUnit === null) {
        return (input / Math.pow(1024, Math.floor(exp))).toFixed(precision) + ' ' + units[exp + offset];
      } else {
        exp = (units.indexOf(outUnit) - units.indexOf(inUnit));
        return (input / Math.pow(1024, Math.floor(exp))).toFixed(precision) + ' ' + units[units.indexOf(outUnit)];
      }
    }
  });

  app.filter('base10convert', function() {
    return function(bytes, precision, inputUnit) {
      if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
      if (typeof precision === 'undefined') precision = 2;
      var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        number = Math.floor(Math.log(bytes) / Math.log(1000)),
        offset = (units.indexOf(inputUnit));
      return (bytes / Math.pow(1000, Math.floor(number))).toFixed(precision) + ' ' + units[number + offset];
    };
  });



}()); // close IIFE
