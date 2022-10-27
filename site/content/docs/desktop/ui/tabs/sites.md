---
# This page was generated from the add-on.
title: Sites tab
type: userguide
weight: 1
---

# Sites tab

The sites tab contains two trees, one for [Contexts](/docs/desktop/start/features/contexts/) and the other for the [Sites Tree](/docs/desktop/start/features/sitestree/).

## Contexts tree

Shows the contexts contained in the current session. It allows to quickly access its properties by double clicking them and provides access to other functionality through the component's context menu.

### Right click menu

Right clicking on a context will bring up a menu which will allow you to:

#### Active Scan...

This will launch the [Active Scan dialog](/docs/desktop/ui/dialogs/advascan/) which allows you to initiate an [active scan](/docs/desktop/start/features/ascan/) with the starting point set to the context you selected.  

#### Spider...

This will launch the Spider dialog which allows you to initiate the spider with the starting point set to the context you selected.  

#### Add to Scope/Remove from Scope

Allows to add or remove the selected context from the [scope](/docs/desktop/start/features/scope/).

#### Delete

Allows to delete the selected context.

#### ![](/docs/desktop/images/fugue/application-blue-export.png)Export Context...

Allows to export the selected context.

#### Export URLs for Context

Allows to export the URLs of the selected context.

## Sites tree

Shows all of the URLs visited in a tree structure.   
You can select any of the nodes in the tree to display the request and response for that URL in the relevant tabs.  

### Right click menu

Right clicking on a node will bring up a menu which will allow you to:

#### Attack

The Attack menu has the following submenus:

##### Active Scan...

This will launch the [Active Scan](/docs/desktop/ui/dialogs/advascan/) dialog which allows you to initiate an [active scan](/docs/desktop/start/features/ascan/) with the starting point set to the request you selected.  

##### Spider...

This will launch the Spider dialog which allows you to initiate the spider with the starting point set to the request you selected.  

#### Include in Context

This menu allows you to include the selected nodes and all of their subordinates in the specified [context](/docs/desktop/start/features/contexts/).  
You also have the option to create a new context.  
The [Session Contexts](/docs/desktop/ui/dialogs/session/contexts/) dialog will be displayed to allow you to make any additional changes.

#### Exclude from Context

This menu allows you to exclude the selected nodes and all of their subordinates from the specified [context](/docs/desktop/start/features/contexts/).  
The [Session Contexts](/docs/desktop/ui/dialogs/session/contexts/) dialog will be displayed to allow you to make any additional changes.

#### Flag as context

This menu has the following submenus for each of the [contexts](/docs/desktop/start/features/contexts/) you have defined:

##### *Context name* Form-based Auth Login request

This identifies the specified node as a login request for the specified context.  
You may only have one node identified as such in any one context.  
The [Session Context Authentication](/docs/desktop/ui/dialogs/session/context-auth/) screen will be displayed to allow you to make any additional changes.

#### *Context name* JSON-based Auth Login request

This identifies the specified node as a login request for the specified context.  
You may only have one node identified as such in any one context.  
The [Session Context Authentication](/docs/desktop/ui/dialogs/session/context-auth/) screen will be displayed to allow you to make any additional changes.

##### *Context name* Data driven node

This identifies the specified node as [Data driven content](/docs/desktop/start/features/ddc/) for the specified context.  
The [Session Context Structure](/docs/desktop/ui/dialogs/session/context-struct/) screen will be displayed to allow you to make any additional changes.

#### Exclude from

This menu has the following submenus:

##### Proxy

This will exclude the selected nodes from the proxy. They will still be proxied via ZAP but will not be shown in any of the tabs.  
This can be used to ignore URLs that you know are not relevant to the system you are currently testing.  
The nodes can be included again via the [Session Properties](/docs/desktop/ui/dialogs/session/) dialog

##### Scanner

This will prevent the selected nodes from being actively scanned.  
The nodes can be included again via the [Session Properties](/docs/desktop/ui/dialogs/session/) dialog

##### Spider

This will prevent the selected nodes from being spidered.  
The nodes can be included again via the [Session Properties](/docs/desktop/ui/dialogs/session/) dialog

#### Delete

This will remove the node and all of its children from ZAP.  
However they can be added back in, to prevent this use the 'Exclude from' menus.

#### Break...

This will bring up a new window which will allow you to set a [breakpoint](/docs/desktop/start/features/breakpoints/) on that URL.  
The breakpoint is defined via a regular expression. If you visit a URL which matches this expression then ZAP will intercept it and allow you to change either the request or the response.

#### Alerts for this node

If the URL selected has [alerts](/docs/desktop/start/features/alerts/) associated with it then they will be listed under this menu.  
Selecting one of the alerts will cause it to be displayed.

#### New Alert...

This will bring up the [Add Alert dialog](/docs/desktop/ui/dialogs/addalert/) which allows you to manually record a new [alert](/docs/desktop/start/features/alerts/) against this request.

#### Show in History tab

This will show the selected node in the [History tab](/docs/desktop/ui/tabs/history/).

#### Open URL in Browser

This will open the URL of the selected node in your default browser.

#### Generate anti CSRF test form

This will open a URL which will give you a generated form for testing for CSRF issues.  
It will only be enabled for POST requests, if the API is enabled and if Java supports the opening of URLs in a browser on your platform.

#### Refresh Sites tree

Occasionally the Sites tree can be displayed incorrectly - this option will redraw it.

## See also

|   |                                  |                                       |
|---|----------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/) | for an overview of the user interface |
