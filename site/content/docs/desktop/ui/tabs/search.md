---
# This page was generated from the add-on.
title: Search tab
type: userguide
weight: 6
---

# Search tab

The Search tab allows you to search for regular expressions in all of the
URLs, requests, responses, headers and in other functionalities provided by add-ons.

Enter the regular expression you would like to search for in the search
box and either press return or click on the search button:
![](/docs/desktop/images/16/049.png)

A pull down allows you to choose whether to search across the URLs,
the requests, the responses or everything.

All URLs, requests or responses which contain the search pattern will
be displayed in the tab.  

You may find it useful to add .\* to your search term -
this will give you more context e.g. password.\*

You can use the
![](/docs/desktop/images/16/107.png) Next and
![](/docs/desktop/images/16/108.png) Previous
buttons to view found search terms in the [Request](/docs/desktop/ui/tabs/request/)
and [Response tabs](/docs/desktop/ui/tabs/response/).   

You can also go directly to a specific instance by clicking on the relevant
line in the results list.

## Right click menu

Right clicking on a node will bring up a menu which will allow you to:

### Attack

The Attack menu has the following submenus:

#### Active Scan...

This will launch the [Active Scan dialog](/docs/desktop/ui/dialogs/advascan/) which allows you to initiate an [active scan](/docs/desktop/start/features/ascan/) with the starting point set to the request you selected.  

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

### New Alert...

This will bring up the [Add Alert dialog](/docs/desktop/ui/dialogs/addalert/) which allows you to manually record a new [alert](/docs/desktop/start/features/alerts/) against this request.

### Show in History tab

This will show the selected node in the [History tab](/docs/desktop/ui/tabs/history/).

### Show in Sites tab

This will show the selected message in the [Sites tab](/docs/desktop/ui/tabs/sites/).

### Open URL in Browser

This will open the URL of the selected node in your default browser.

## See also

|   |                                  |                                       |
|---|----------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/) | for an overview of the user interface |
