---
# This page was generated from the add-on.
title: Active Scan dialog
type: userguide
weight: 1
---

# Active Scan dialog


This dialog launches the [active scanner](/docs/desktop/start/features/ascan/).  


### Scope

The first tab allows you to select or change the starting point.  
If you have more that one [scan policies](/docs/desktop/start/features/scanpolicy/) then you will be able to select the one to use.  
If the starting point is in one or more [Contexts](/docs/desktop/start/features/contexts/) then you will be able to choose one of them.  
If that context has any [Users](/docs/desktop/start/features/users/) defined then you will be able to select one of them.  
If you select one of the users then the active scan will be performed as that user, with ZAP (re)authenticating as that user whenever necessary.   

If you select 'Recurse' then all of the nodes underneath the one selected will also be scanned.  
Custom input vectors are only supported if this option is not selected.   

If you select 'Show Advanced Options' then the following tabs will be shown which provide fine grain control over the active scanning process.   

Clicking on the 'Reset' button will reset all of the options to their default values.

### Input Vectors

The Input Vectors tab allows you override the default input vectors which are defined in the [Options Active Scan Input Vectors screen](/docs/desktop/ui/dialogs/options/ascaninput/).  
Clicking on the 'Reset' button will reset the input vectors to the default options.

### Custom Vectors

The Custom Vectors tab allows you specify specific locations in the request to attack.  
Custom Vectors are only available if the 'Recurse' option on the first tab is not selected.  
To add custom input vectors highlight the characters you want to attack in the request and click the 'Add' button.  
You can add as many custom input vectors as you want.  
To remove custom input vectors highlight any of the selected characters and click the 'Remove' button.  
Checking the 'Disable non custom input vectors' box disables all of the input vectors except those you manually define on this tab.

### Technology

The Technology tab allows you to specify which types of technologies to scan.  
Un-selecting technologies that you know are not present in the target application may speed up the scan as rules which target that technology can skip those tests.

### Policy

The Policy tab allows you to override any of the settings specified in the selected [scan policy](/docs/desktop/start/features/scanpolicy/).

### Filter

The Filter tab allows you to specify filter criteria and active scan will filter requests based on these criteria's.   
There are four filter criteria's available in the filter tab   

* HTTP method
* Status code
* Tags
* URL pattern

HTTP method and Status code filter criteria are only applied to check if a request can be included in active scan or not,  
where as Tags and URL pattern filter criteria can be applied to include or exclude a request.   

## Accessed via

|   |                                                        |                                                 |
|---|--------------------------------------------------------|-------------------------------------------------|
|   | [Active Scan tab](/docs/desktop/ui/tabs/ascan/)        | 'New Scan' button                               |
|   | [Top level Tools menu](/docs/desktop/ui/tlmenu/tools/) | 'Active Scan...' menu item                      |
|   | [Sites tab](/docs/desktop/ui/tabs/sites/)              | 'Attack / Active Scan... right click menu item  |
|   | [History tab](/docs/desktop/ui/tabs/history/)          | 'Attack / Active Scan...' right click menu item |

## See also

|   |                                      |                                       |
|---|--------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|   | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |
