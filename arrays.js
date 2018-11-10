// Taken from TR-3838
var drives = [
{"model_num":"X410A-R5","mkt_size":300,"type":"SAS","rpm_speed":10000,"encrypted":false,"checksum":"BCS","approx_iops":140,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":16,"rg_size_dp_max":28,"physical_size_mib":280104,"right_size_mib":272000,"rg_suggested_dp_min":12,"rg_suggested_dp_max":20},
{"model_num":"X421A-R5","mkt_size":450,"type":"SAS","rpm_speed":10000,"encrypted":false,"checksum":"BCS","approx_iops":140,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":16,"rg_size_dp_max":28,"physical_size_mib":420156,"right_size_mib":418000,"rg_suggested_dp_min":12,"rg_suggested_dp_max":20},
{"model_num":"X422A-R5","mkt_size":600,"type":"SAS","rpm_speed":10000,"encrypted":false,"checksum":"BCS","approx_iops":140,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":16,"rg_size_dp_max":28,"physical_size_mib":560208,"right_size_mib":560000,"rg_suggested_dp_min":12,"rg_suggested_dp_max":20},
{"model_num":"X423A-R5","mkt_size":900,"type":"SAS","rpm_speed":10000,"encrypted":false,"checksum":"BCS","approx_iops":140,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":16,"rg_size_dp_max":28,"physical_size_mib":858483,"right_size_mib":857000,"rg_suggested_dp_min":12,"rg_suggested_dp_max":20},
{"model_num":"X425A-R6","mkt_size":1200,"type":"SAS","rpm_speed":10000,"encrypted":false,"checksum":"BCS","approx_iops":140,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":16,"rg_size_dp_max":28,"physical_size_mib":1144641,"right_size_mib":1142352,"rg_suggested_dp_min":12,"rg_suggested_dp_max":20},
{"model_num":"X416A-R5","mkt_size":600,"type":"SAS","rpm_speed":10000,"encrypted":true,"checksum":"BCS","approx_iops":140,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":16,"rg_size_dp_max":28,"physical_size_mib":560208,"right_size_mib":560000,"rg_suggested_dp_min":12,"rg_suggested_dp_max":20},
{"model_num":"X417A-R6","mkt_size":900,"type":"SAS","rpm_speed":10000,"encrypted":true,"checksum":"BCS","approx_iops":140,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":16,"rg_size_dp_max":28,"physical_size_mib":858483,"right_size_mib":857000,"rg_suggested_dp_min":12,"rg_suggested_dp_max":20},
{"model_num":"X441A-R5","mkt_size":100,"type":"SSD","rpm_speed":0,"encrypted":false,"checksum":"BCS","approx_iops":6000,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":23,"rg_size_dp_max":28,"physical_size_mib":95396,"right_size_mib":95146,"rg_suggested_dp_min":20,"rg_suggested_dp_max":28},
{"model_num":"X442A-R5","mkt_size":100,"type":"SSD","rpm_speed":0,"encrypted":false,"checksum":"BCS","approx_iops":6000,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":23,"rg_size_dp_max":28,"physical_size_mib":84796,"right_size_mib":84574,"rg_suggested_dp_min":20,"rg_suggested_dp_max":28},
{"model_num":"X446B-R6","mkt_size":200,"type":"SSD","rpm_speed":0,"encrypted":false,"checksum":"BCS","approx_iops":6000,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":23,"rg_size_dp_max":28,"physical_size_mib":190782,"right_size_mib":190532,"rg_suggested_dp_min":20,"rg_suggested_dp_max":28},
{"model_num":"X438A-R6","mkt_size":400,"type":"SSD","rpm_speed":0,"encrypted":false,"checksum":"BCS","approx_iops":6000,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":23,"rg_size_dp_max":28,"physical_size_mib":381554,"right_size_mib":381304,"rg_suggested_dp_min":20,"rg_suggested_dp_max":28},
{"model_num":"X447A-R6","mkt_size":800,"type":"SSD","rpm_speed":0,"encrypted":false,"checksum":"BCS","approx_iops":6000,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":23,"rg_size_dp_max":28,"physical_size_mib":763097,"right_size_mib":762847,"rg_suggested_dp_min":20,"rg_suggested_dp_max":28},
{"model_num":"X440A-R6","mkt_size":800,"type":"SSD","rpm_speed":0,"encrypted":true,"checksum":"BCS","approx_iops":6000,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":23,"rg_size_dp_max":28,"physical_size_mib":763097,"right_size_mib":762847,"rg_suggested_dp_min":20,"rg_suggested_dp_max":28},
{"model_num":"X439A-R6","mkt_size":1600,"type":"SSD","rpm_speed":0,"encrypted":false,"checksum":"BCS","approx_iops":6000,"rg_size_4_default":8,"rg_size_4_max":14,"rg_size_dp_default":23,"rg_size_dp_max":28,"physical_size_mib":1526185,"right_size_mib":1525935,"rg_suggested_dp_min":20,"rg_suggested_dp_max":28},
{"model_num":"X302A-R5","mkt_size":1000,"type":"SATA","rpm_speed":7200,"encrypted":false,"checksum":"BCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":20,"physical_size_mib":847884,"right_size_mib":847555,"rg_suggested_dp_min":12,"rg_suggested_dp_max":16},
{"model_num":"X306A-R5","mkt_size":2000,"type":"SATA","rpm_speed":7200,"encrypted":false,"checksum":"BCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":20,"physical_size_mib":1695702,"right_size_mib":1695466,"rg_suggested_dp_min":12,"rg_suggested_dp_max":16},
{"model_num":"X308A-R5","mkt_size":3000,"type":"SATA","rpm_speed":7200,"encrypted":false,"checksum":"BCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":20,"physical_size_mib":2543634,"right_size_mib":2538546,"rg_suggested_dp_min":12,"rg_suggested_dp_max":16},
{"model_num":"X309A-R6","mkt_size":3000,"type":"NL-SAS","rpm_speed":7200,"encrypted":true,"checksum":"BCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":20,"physical_size_mib":2861588,"right_size_mib":2855865,"rg_suggested_dp_min":12,"rg_suggested_dp_max":16},
{"model_num":"X315A-R6","mkt_size":4000,"type":"NL-SAS","rpm_speed":7200,"encrypted":true,"checksum":"BCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":20,"physical_size_mib":3815447,"right_size_mib":3807816,"rg_suggested_dp_min":12,"rg_suggested_dp_max":16},
{"model_num":"X477A-R6","mkt_size":4000,"type":"NL-SAS","rpm_speed":7200,"encrypted":false,"checksum":"BCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":20,"physical_size_mib":3815447,"right_size_mib":3807816,"rg_suggested_dp_min":12,"rg_suggested_dp_max":16},
{"model_num":"X316A-R6","mkt_size":6000,"type":"NL-SAS","rpm_speed":7200,"encrypted":false,"checksum":"BCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":14,"physical_size_mib":5625872,"right_size_mib":5614621,"rg_suggested_dp_min":12,"rg_suggested_dp_max":14},
{"model_num":"X478A-R5","mkt_size":3000,"type":"MSATA","rpm_speed":7200,"encrypted":false,"checksum":"AZCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":20,"physical_size_mib":2891588,"right_size_mib":2811241,"rg_suggested_dp_min":12,"rg_suggested_dp_max":16},
{"model_num":"X480A-R5","mkt_size":4000,"type":"MSATA","rpm_speed":7200,"encrypted":false,"checksum":"AZCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":20,"physical_size_mib":3815447,"right_size_mib":3748319,"rg_suggested_dp_min":12,"rg_suggested_dp_max":16},
{"model_num":"X481A-R6","mkt_size":6000,"type":"MSATA","rpm_speed":7200,"encrypted":false,"checksum":"BCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":14,"physical_size_mib":5723166,"right_size_mib":5622471,"rg_suggested_dp_min":12,"rg_suggested_dp_max":14},
{"model_num":"X483A-R6","mkt_size":8000,"type":"MSATA","rpm_speed":7200,"encrypted":false,"checksum":"AZCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":14,"physical_size_mib":7630894,"right_size_mib":7496638,"rg_suggested_dp_min":12,"rg_suggested_dp_max":14},
{"model_num":"X381A-R6","mkt_size":10000,"type":"MSATA","rpm_speed":7200,"encrypted":false,"checksum":"AZCS","approx_iops":75,"rg_size_4_default":7,"rg_size_4_max":7,"rg_size_dp_default":14,"rg_size_dp_max":14,"physical_size_mib":9538613,"right_size_mib":9370790,"rg_suggested_dp_min":12,"rg_suggested_dp_max":14}
];

var outputUnits = [
{"name": "kb", "base": 10, "displayName": "kB", "si": "kB", "iec": "KiB"},
{"name": "mb", "base": 10, "displayName": "MB", "si": "MB", "iec": "MiB"},
{"name": "gb", "base": 10, "displayName": "GB", "si": "GB", "iec": "GiB"},
{"name": "tb", "base": 10, "displayName": "TB", "si": "TB", "iec": "TiB"},
{"name": "pb", "base": 10, "displayName": "PB", "si": "PB", "iec": "PiB"},
{"name": "eb", "base": 10, "displayName": "EB", "si": "EB", "iec": "EiB"},
{"name": "zb", "base": 10, "displayName": "ZB", "si": "ZB", "iec": "ZiB"},
{"name": "yb", "base": 10, "displayName": "YB", "si": "YB", "iec": "YiB"},
{"name": "Auto", "base": 2, "displayName": "Auto", "si": "", "iec": ""},
{"name": "bytes", "base": 2, "displayName": "bytes", "si": "bytes", "iec": "bytes"},
{"name": "kib", "base": 2, "displayName": "KiB", "si": "kB", "iec": "KiB"},
{"name": "mib", "base": 2, "displayName": "MiB", "si": "MB", "iec": "MiB"},
{"name": "gib", "base": 2, "displayName": "GiB", "si": "GB", "iec": "GiB"},
{"name": "tib", "base": 2, "displayName": "TiB", "si": "TB", "iec": "TiB"},
{"name": "pib", "base": 2, "displayName": "PiB", "si": "PB", "iec": "PiB"},
{"name": "eib", "base": 2, "displayName": "EiB", "si": "EB", "iec": "EiB"},
{"name": "zib", "base": 2, "displayName": "ZiB", "si": "ZB", "iec": "ZiB"},
{"name": "yib", "base": 2, "displayName": "YiB", "si": "YB", "iec": "YiB"}
];

var raidTypes = [
{"displayName": "RAID-DP", "name": "raidDP", "parity_drives": 2},
{"displayName": "RAID-4", "name": "raid4", "parity_drives": 1}
];

var alerts = [
  {"name": "smallRgWarning", "type": "danger", "msg": "Last Raid Group contains only Parity Drives! Change number of usable drives and/or raid group size." },
  {"name": "testAlert", "type": "warning", "msg": "This is a test alert!"}
];

var tooltips = {
  "modelNum": "NetApp Drive Model Number",
  "mkt_size": "Manufacturer Marketed Size (Base 10)",
  "physical_size": "Manufacturer Physical Size (Base 2)",
  "right_size": "NetApp Right Size (Base 2)",
  "type": "Drive Type / Interface",
  "rpm_speed": "Drive Speed (RPM)",
  "encrypted": "Whether the selected drive is encrypted.",
  "rgSizeMin": "Minimum RAID Group Size for the selected Drive Type and RAID Level",
  "rgSizeDefault": "Default RAID Group Size for the selected Drive Type and RAID Level",
  "rgSizeMax": "Maximum RAID Group Size for the selected Drive Type and RAID Level",
  "rgSuggestedRange": "NetApp Suggested RAID Group Size Range",
  "totalMarketedCapacity": "Total Base 10 Marketed Capacity (Total Drives * Marketed Size)",
  "totalPhysicalCapacity": "Total Base 2 Physical Capacity (Total Drives * Physical Size)",
  "totalRightSizeCapacity": "Total Base 2 NetApp Right Size Capacity (Total Drives * Right Size)",
  "usableDrives": "(Total Drives - Spare Drives - Root Drives)",
  "numRGs": "Calculated Number of RAID Groups (Usable Drives / RG Size)",
  "parityDrives": "Calculated Number of Parity Drives",
  "dataDrives": "Calculated Number of Data Drives (Usable Drives - Parity Drives)",
  "usableDriveEfficiency": "Efficiency of Data Drives from Usable Drives (Data Drives / Usable Drives * 100)",
  "usableCapacityEfficiency": "Efficiency of Usable Volume Capacity from Total Physical Capacity (Volume Usable Capacity / Total Physical Capacity * 100)",
  "aggrUsableCapacity": "Total Aggregate Capacity after Reserve Overhead",
  "volUsableCapacity": "Usable Volume Capacity After All Overhead"
};
