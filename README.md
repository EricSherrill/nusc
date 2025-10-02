# NetApp Usable Space Calculator
## Forked from https://github.com/jpl1079/nusc & http://jpl1079.github.io/nusc/ originally
### user & repo unfortunately no longer available but all credit due to JOLAY_ARROW @ https://community.netapp.com/t5/user/viewprofilepage/user-id/1829
#### See also: https://community.netapp.com/t5/ONTAP-Discussions/Web-based-Usable-Space-Calculator/m-p/105300#M21574 

#### **This is not an official NetApp tool.**

Based on the NetApp Technical Report [TR-3838](http://www.netapp.com/us/media/tr-3838.pdf), Storage Subsystem Configuration Guide.

This is to help with capacity sizings for various drive, protection and reserve configurations on Data ONTAP and uses the calculations from that document.

Please use the GitHub Issues tool to report any issues.

#### Known Issues:
- You might see some JavaScript "NaN", "Infinite" or "undefined" in the output.  This is because there isn't much input validation going on (other than simple HTML form validation).  This should only occur in the lower/upper bounds of some inputs and not with any normal configurations.

- Some drive configurations will produce an aggregate with only parity drives in the last RAID Group.  The tool will warn of these conditions, but this may not be a valid aggregate layout.  In most situations, a Data ONTAP system will omit this incomplete final RAID Group and only use the full RG's for the aggregate.

- WAFL Reserve has been set to read-only at 10%.  This is because this is not configurable in Data ONTAP.

- Snapshot Reserve (aka Volume Reserve) is set to 0% in this tool by default.  This may not be the default when creating volumes in Data ONTAP.  This tool also does not account for any additional capacity other tools may take into consideration when using these various reserve capacities.  For example: some tools may ask for a _usable_ volume size and then calculate the _actual_ volume size based on the reserve settings.

- LUN sizing is not available.

- Advanced Drive Partitioning (ADP) is not available.



Deployed via GitHub Pages to https://ericsherrill.github.io/nusc/
