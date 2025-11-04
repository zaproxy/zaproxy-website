---
# This page was generated from the add-on.
title: AJAX Spider tab
type: userguide
weight: 5
---

# AJAX Spider tab


The AJAX Spider tab shows you the set of unique URIs found by [AJAX
Spider](/docs/desktop/addons/ajax-spider/).

For each request you can see:

|   |                                                             |
|---|-------------------------------------------------------------|
|   | The request index - each request is numbered, starting at 1 |
|   | The request timestamp                                       |
|   | The HTML method, e.g. GET or POST                           |
|   | The URL requested                                           |
|   | The HTTP response status code                               |
|   | A short summary of what the HTTP response code means        |
|   | The length of time the whole request took                   |
|   | The size of the response header                             |
|   | The size of the response body                               |
|   | Any *Alerts* on the request                                 |
|   | Any *Notes* you have added to request                       |
|   | Any *Tags* you have added to request                        |

Selecting a requests will display it in the *Request tab* and *Response tab* above.   

## Right click menu

Right clicking on a node will bring up a menu which will allow you to:

### Attack

The Attack menu has the following submenus:

#### Active Scan Site


This will initiate an
*Active Scan* of the whole of the site containing the selected node.

The
*Active Scan tab* will be display and will show the progress of the scan.

#### Active Scan Node


This will initiate an
*Active Scan* of just the node selected.

The
*Active Scan tab* will be display and will show the progress of the scan.

#### Spider Site


This will initiate a
*spider* of the whole of the site containing the selected node.

The
*Spider tab* will be display and will show the progress of the scan.

#### Forced Browse Site


This will initiate a
*forced browse* of the whole of the site containing the selected node.

The
*Forced Browse tab* will be display and will show the progress of the scan.

#### Forced Browse Directory


This will initiate a
*forced browse* on the selected directory.

The
*Forced Browse tab* will be displayed and will show the progress of the scan.

#### Forced Browse Directory (and children)


This will initiate a
*forced browse* on the selected directory and all children found.

The
*Forced Browse tab* will be displayed and will show the progress of the scan.

### Exclude from

This menu has the following submenus:

#### Proxy


This will exclude the selected nodes from the proxy. They will still be proxied via ZAP
but will not be shown in any of the tabs.

This can be used to ignore URLs that you know are not relevant to the system you
are currently testing.

The nodes can be included again via the
*Session Properties* dialog

#### Scanner


This will prevent the selected nodes from being actively scanned.

The nodes can be included again via the
*Session Properties* dialog

#### Spider


This will prevent the selected nodes from being spidered.

The nodes can be included again via the
*Session Properties* dialog

### Run application


This menu allows you to
*invoke applications* that you have configured via the
*Options Applications screen* which is also accessible via the 'Configure
applications...' submenu.

### Manage Tags...


This will bring up the
*Manage Tags dialog* which allows you to change the
*tags* associated with the request.

### Note...


This will bring up the
*Add Note dialog* which allows you to record
*notes* related to the request.

### Break...


This will bring up the
*Add Break Point dialog* which allows you to set a break point on that URL.

### Alerts for this node


If the URL selected has
*alerts* associated with it then they will be listed under this menu.

Selecting one of the alerts will cause it to be displayed.

### Resend...


This will bring up the
*Resend dialog* which allows you to resend the request after making any changes to
it that you want to.

### New Alert...


This will bring up the
*Add Alert dialog* which allows you to manually record a new
*Alert* against this request.

### Open URL in Browser

This will open the URL of the selected node in your default browser.

## See also

|   |                                                                         |                                            |
|---|-------------------------------------------------------------------------|--------------------------------------------|
|   | [AJAX Spider](/docs/desktop/addons/ajax-spider/)                        | for an overview of the AJAX Spider         |
|   | [Options AJAX Spider screen](/docs/desktop/addons/ajax-spider/options/) | for an overview of the AJAX Spider Options |
|   | [AJAX Spider dialog](/docs/desktop/addons/ajax-spider/scandialog/)      | for an overview of the AJAX Spider Dialog  |
