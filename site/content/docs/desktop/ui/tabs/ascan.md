---
# This page was generated from the add-on.
title: Active Scan tab
type: userguide
weight: 9
---

# Active Scan tab

The Active Scan tab allows you to perform an [active scan](/docs/desktop/start/features/ascan/).

The 'Scan Policy Manager' button ![](/docs/desktop/images/fugue/equalizer.png) shows the [Scan Policy Manager](/docs/desktop/ui/dialogs/scanpolicymgr/) dialog which allows configuration of [scan policies](/docs/desktop/start/features/scanpolicy/).

The 'New Scan' button launches the [Active Scan dialog](/docs/desktop/ui/dialogs/advascan/) which allows you to specify exactly what should be scanned.

The toolbar provides a set of buttons which allow you to start, stop, pause and resume the scan selected.  
A progress bar shows how far the scan of the selected site has progressed.  
The 'Current scans' value shows how many scans are currently active - hovering over this value will show a list of the sites being scanned in a popup.  
The 'Show scan progress details' button ![](/docs/desktop/images/fugue/system-monitor.png) launches the [Scan Progress dialog](/docs/desktop/ui/dialogs/scanprogress/) which allows you to see details about which rules are running, skip individual rules and see a chart of the responses.

## Right click menu

Right clicking on a node will bring up a menu which will allow you to:

### Exclude from

This menu has the following submenus:

#### Proxy

This will exclude the selected nodes from the proxy. They will still be proxied via ZAP but will not be shown in any of the tabs.  
This can be used to ignore URLs that you know are not relevant to the system you are currently testing.  
The nodes can be included again via the [Session Properties](/docs/desktop/ui/dialogs/session/) dialog

#### Scanner

This will prevent the selected nodes from being actively scanned.  
The nodes can be included again via the [Session Properties](/docs/desktop/ui/dialogs/session/) dialog

#### Spider

This will prevent the selected nodes from being spidered.  
The nodes can be included again via the [Session Properties](/docs/desktop/ui/dialogs/session/) dialog

### Open/Resend with Request Editor...

This will bring up the [Manual Request Editor dialog](/docs/desktop/ui/dialogs/man_req/) which allows you to resend the request after making any changes to it that you want to.

### New Alert...

This will bring up the [Add Alert dialog](/docs/desktop/ui/dialogs/addalert/) which allows you to manually record a new [alert](/docs/desktop/start/features/alerts/) against this request.

### Show in Sites tab

This will show the selected message in the [Sites tab](/docs/desktop/ui/tabs/sites/).

### Open URL in Browser

This will open the URL of the selected node in your default browser.

## See also

|     |                                                                       |                                              |
| --- | --------------------------------------------------------------------- | -------------------------------------------- |
|     | [UI Overview](/docs/desktop/ui/)                                      | for an overview of the user interface        |
|     | [Options Active Scan screen](/docs/desktop/ui/dialogs/options/ascan/) | for details of the active scan configuration |
