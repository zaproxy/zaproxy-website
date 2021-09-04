---
# This page was generated from the add-on.
title: AJAX Spider tab
type: userguide
weight: 4
---

# AJAX Spider tab

The AJAX Spider tab shows you the set of unique URIs found by [AJAX
Spider](/docs/desktop/addons/ajax-spider/).

For each request you can see:

|     |                                                             |
| --- | ----------------------------------------------------------- |
|     | The request index - each request is numbered, starting at 1 |
|     | The request timestamp                                       |
|     | The HTML method, e.g. GET or POST                           |
|     | The URL requested                                           |
|     | The HTTP response status code                               |
|     | A short summary of what the HTTP response code means        |
|     | The length of time the whole request took                   |
|     | The size of the response header                             |
|     | The size of the response body                               |
|     | Any _Alerts_ on the request                                 |
|     | Any _Notes_ you have added to request                       |
|     | Any _Tags_ you have added to request                        |

Selecting a requests will display it in the _Request tab_ and _Response tab_ above.

## Right click menu

Right clicking on a node will bring up a menu which will allow you to:

### Attack

The Attack menu has the following submenus:

#### Active Scan Site

This will initiate an _Active Scan_ of the whole of the site containing the selected node.  
The _Active Scan tab_ will be display and will show the progress of the scan.

#### Active Scan Node

This will initiate an _Active Scan_ of just the node selected.  
The _Active Scan tab_ will be display and will show the progress of the scan.

#### Spider Site

This will initiate a _spider_ of the whole of the site containing the selected node.  
The _Spider tab_ will be display and will show the progress of the scan.

#### Forced Browse Site

This will initiate a _forced browse_ of the whole of the site containing the selected node.  
The _Forced Browse tab_ will be display and will show the progress of the scan.

#### Forced Browse Directory

This will initiate a _forced browse_ on the selected directory.  
The _Forced Browse tab_ will be displayed and will show the progress of the scan.

#### Forced Browse Directory (and children)

This will initiate a _forced browse_ on the selected directory and all children found.  
The _Forced Browse tab_ will be displayed and will show the progress of the scan.

### Exclude from

This menu has the following submenus:

#### Proxy

This will exclude the selected nodes from the proxy. They will still be proxied via ZAP but will not be shown in any of the tabs.  
This can be used to ignore URLs that you know are not relevant to the system you are currently testing.  
The nodes can be included again via the _Session Properties_ dialog

#### Scanner

This will prevent the selected nodes from being actively scanned.  
The nodes can be included again via the _Session Properties_ dialog

#### Spider

This will prevent the selected nodes from being spidered.  
The nodes can be included again via the _Session Properties_ dialog

### Run application

This menu allows you to _invoke applications_ that you have configured via the _Options Applications screen_ which is also accessible via the 'Configure applications...' submenu.

### Manage Tags...

This will bring up the _Manage Tags dialog_ which allows you to change the _tags_ associated with the request.

### Note...

This will bring up the _Add Note dialog_ which allows you to record _notes_ related to the request.

### Break...

This will bring up the _Add Break Point dialog_ which allows you to set a break point on that URL.

### Alerts for this node

If the URL selected has _alerts_ associated with it then they will be listed under this menu.  
Selecting one of the alerts will cause it to be displayed.

### Resend...

This will bring up the _Resend dialog_ which allows you to resend the request after making any changes to it that you want to.

### New Alert...

This will bring up the _Add Alert dialog_ which allows you to manually record a new _Alert_ against this request.

### Open URL in Browser

This will open the URL of the selected node in your default browser.

## See also

|     |                                                                         |                                            |
| --- | ----------------------------------------------------------------------- | ------------------------------------------ |
|     | [AJAX Spider](/docs/desktop/addons/ajax-spider/)                        | for an overview of the AJAX Spider         |
|     | [Options AJAX Spider screen](/docs/desktop/addons/ajax-spider/options/) | for an overview of the AJAX Spider Options |
|     | [AJAX Spider dialog](/docs/desktop/addons/ajax-spider/scandialog/)      | for an overview of the AJAX Spider Dialog  |
