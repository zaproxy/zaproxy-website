---
# This page was generated from the add-on.
title: History tab
type: userguide
weight: 5
---

# History tab


The History tab shows a list of all of the requests in the order in which they were made.  

For each request you can see:

|   |                                                                            |
|---|----------------------------------------------------------------------------|
|   | The request index - each request is numbered, starting at 1                |
|   | The HTML method, e.g. GET or POST                                          |
|   | The URL requested                                                          |
|   | The HTTP response code                                                     |
|   | A short summary of what the HTTP response code means                       |
|   | The length of time the whole request took                                  |
|   | Any [Alerts](/docs/desktop/start/features/alerts/) on the request          |
|   | Any [Notes](/docs/desktop/start/features/notes/) you have added to request |
|   | Any [Tags](/docs/desktop/start/features/tags/) on the request              |

Selecting a requests will display it in the [Request tab](/docs/desktop/ui/tabs/request/) and [Response tab](/docs/desktop/ui/tabs/response/) above.  

## The filter toolbar

A filter toolbar is provided which allows you to restrict which requests are displayed.  
Clicking on the ![](/docs/desktop/images/16/054.png) Filter button displays the [History Filter dialog](/docs/desktop/ui/dialogs/hist_filter/).  
A summary of the filter currently applied is displayed to the right of the button.

## Right click menu

Right clicking on a node will bring up a menu which will allow you to:

### Attack

The Attack menu has the following submenus:

#### Active Scan...

This will launch the [Active Scan](/docs/desktop/ui/dialogs/advascan/) dialog which allows you to initiate an [active scan](/docs/desktop/start/features/ascan/) with the starting point set to the request you selected.  

#### Spider...

This will launch the Spider dialog which allows you to initiate the spider with the starting point set to the request you selected.  

### Include in Context

This menu allows you to include the selected nodes and all of their subordinates in the specified [context](/docs/desktop/start/features/contexts/).  
You also have the option to create a new context.  
The [Session Contexts](/docs/desktop/ui/dialogs/session/contexts/) dialog will be displayed to allow you to make any additional changes.

### Exclude from Context

This menu allows you to exclude the selected nodes and all of their subordinates from the specified [context](/docs/desktop/start/features/contexts/).  
The [Session Contexts](/docs/desktop/ui/dialogs/session/contexts/) dialog will be displayed to allow you to make any additional changes.

### Flag as context

This menu has the following submenus for each of the [contexts](/docs/desktop/start/features/contexts/) you have defined:

#### *Context name* Form-based Auth Login request

This identifies the specified node as a login request for the specified context.  
You may only have one node identified as such in any one context.  
The [Session Context Authentication](/docs/desktop/ui/dialogs/session/context-auth/) screen will be displayed to allow you to make any additional changes.

#### *Context name* JSON-based Auth Login request

This identifies the specified node as a login request for the specified context.  
You may only have one node identified as such in any one context.  
The [Session Context Authentication](/docs/desktop/ui/dialogs/session/context-auth/) screen will be displayed to allow you to make any additional changes.

#### *Context name* Data driven node

This identifies the specified node as [Data driven content](/docs/desktop/start/features/ddc/) for the specified context.  
The [Session Context Structure](/docs/desktop/ui/dialogs/session/context-struct/) screen will be displayed to allow you to make any additional changes.

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

### Manage History Tags...

This will bring up the [Manage History Tags dialog](/docs/desktop/ui/dialogs/managetags/) which allows you to change the [tags](/docs/desktop/start/features/tags/) associated with the request.

### Jump to History ID...

This will bring up a dialog prompting for the ID (number) of a history entry you wish to jump to. If the entered ID value is not a visible history item then the nearest ID above the entry will be displayed, if it is beyond the end of the list then the last item in the table will be displayed. Also accessible via CTRL + ALT + J.

### Note...

This will bring up the [Add Note dialog](/docs/desktop/ui/dialogs/addnote/) which allows you to record [notes](/docs/desktop/start/features/notes/) related to the request.

### Delete

This will remove the node and all of its children from ZAP.  
However they can be added back in, to prevent this use the 'Exclude from' menus.

### Break...

This will bring up the [Add Breakpoint dialog](/docs/desktop/ui/dialogs/addbreak/) which allows you to set a breakpoint on that URL.  

### Alerts for this node

If the URL selected has [alerts](/docs/desktop/start/features/alerts/) associated with it then they will be listed under this menu.  
Selecting one of the alerts will cause it to be displayed.

### New Alert...

This will bring up the [Add Alert dialog](/docs/desktop/ui/dialogs/addalert/) which allows you to manually record a new [alert](/docs/desktop/start/features/alerts/) against this request.

### Show in Sites tab

This will show the selected message in the [Sites tab](/docs/desktop/ui/tabs/sites/).

### Open URL in Browser

This will open the URL of the selected node in your default browser.

### Generate anti CSRF test form

This will open a URL which will give you a generated form for testing for CSRF issues.  
It will only be enabled for POST requests, if the API is enabled and if Java supports the opening of URLs in a browser on your platform.

## See also

|   |                                  |                                       |
|---|----------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/) | for an overview of the user interface |
