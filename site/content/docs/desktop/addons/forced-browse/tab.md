---
# This page was generated from the add-on.
title: Forced Browse tab
type: userguide
weight: 2
---

# Forced Browse tab

The Forced Browse tab allows you to perform a [Forced Browse](/docs/desktop/addons/forced-browse/) scan on any of the sites that have been accessed.   

Sites can be selected via the toolbar or the *Sites tab* .   
Any sites that have have been or are currently being scanned are marked in bold in the toolbar Sites pulldown control.   
The toolbar provides a set of buttons which allow you to start, stop, pause and resume the scan.   
A progress bar shows how far the scan of the selected site has progressed.   
The 'Current scans' value shows how many scans are currently active - hovering over this value will show a list of the sites being scanned in a popup.   
The toolbar also includes a button to export the displayed content as CSV.

## Right click menu

Right clicking on one or more rows will bring up a menu which will allow you to:

### Exclude from

This menu has the following submenus:

#### Proxy

This will exclude the selected nodes from the proxy. They will still be proxied via ZAP but will not be shown in any of the tabs.   
This can be used to ignore URLs that you know are not relevant to the system you are currently testing.   
The nodes can be included again via the *Session Properties* dialog

#### Scanner

This will prevent the selected notes from being actively scanned.   
The nodes can be included again via the *Session Properties* dialog

#### Spider

This will prevent the selected nodes from being spidered.   
The nodes can be included again via the *Session Properties* dialog

### Copy

This will copy the selected URLs to the clipboard.

### Resend...

This will bring up the *Resend dialog* which allows you to resend the request after making any changes to it that you want to.

### New Alert...

This will bring up the *Add Alert dialog* which allows you to manually record a new *alert* against this request.

### Open URL in Browser

This will open the URL of the selected node in your default browser.

### Generate anti CSRF test form

This will open a URL which will give you a generated form for testing for CSRF issues.   
It will only be enabled for POST requests, if the API is enabled and if Java supports the opening of URLs in a browser on your platform.

## See also

|   |                                                                             |                                                |
|---|-----------------------------------------------------------------------------|------------------------------------------------|
|   | [Options Forced Browse screen](/docs/desktop/addons/forced-browse/options/) | for details of the forced browse configuration |
