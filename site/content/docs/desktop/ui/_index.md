---
# This page was generated from the add-on.
title: Desktop UI Overview
type: userguide
weight: 3
---

# Desktop UI Overview

The Desktop UI is made up of:

|   |                                                           |   |
|---|-----------------------------------------------------------|---|
|   | [Top Level Menu](/docs/desktop/ui/tlmenu/)                |   |
|   | [Top Level Toolbar](/docs/desktop/ui/tltoolbar/)          |   |
|   | Three windows which contain multiple tabs, detailed below |   |
|   | [Footer](/docs/desktop/ui/footer/)                        |   |

Each of the three windows has a set of one or more tabs.  
By default only the essential tabs are now shown when ZAP starts up.  
The remaining tabs are revealed when they are used (e.g. for the spider and active scanner) or when you display them via the special tab on the far right of each window with the green '+' icon. This special tab disappears if there are no hidden tabs.  
Tabs can be closed via a small 'x' icon which is shown when the tab is selected.  
Tabs can also be 'pinned' using a small 'pin' icon that is also shown when the tab is selected - pinned tabs will be shown when ZAP next starts up.

### The 'tree' window

This is displayed on the left hand side and allows you to navigate around the URLs visited.

|   |                                           |                                                        |
|---|-------------------------------------------|--------------------------------------------------------|
|   | [Sites tab](/docs/desktop/ui/tabs/sites/) | This shows all of the URLs visited in a tree structure |

### The 'workspace' window

This is displayed on the top right hand side and is where requests and responses are displayed. You can also make changes here when a [breakpoint](/docs/desktop/start/features/breakpoints/) has been hit.

|   |                                                 |                                                                |
|---|-------------------------------------------------|----------------------------------------------------------------|
|   | [Request tab](/docs/desktop/ui/tabs/request/)   | This shows the data your browser sends to the application      |
|   | [Response tab](/docs/desktop/ui/tabs/response/) | This shows the data the application sends back to your browser |
|   | [Break tab](/docs/desktop/ui/tabs/break/)       | This allows you to manipulate the data                         |

### The 'information' window

This is displayed on the bottom and is where useful information is displayed.

|   |                                                       |                                                             |
|---|-------------------------------------------------------|-------------------------------------------------------------|
|   | [History tab](/docs/desktop/ui/tabs/history/)         | This shows the requests in the order they were made         |
|   | [Search tab](/docs/desktop/ui/tabs/search/)           | This allows you to search all of the requests and responses |
|   | [Breakpoints tab](/docs/desktop/ui/tabs/breakpoints/) | This shows the Breakpoints set                              |
|   | [Alerts tab](/docs/desktop/ui/tabs/alerts/)           | This shows the alerts raised on the application             |
|   | [Active Scan tab](/docs/desktop/ui/tabs/ascan/)       | This shows the active scans                                 |
|   | Spider tab                                            | This shows the URLs not yet visited                         |
|   | [Params tab](/docs/desktop/ui/tabs/params/)           | This shows a summary of the parameters a site uses          |
|   | [Output tab](/docs/desktop/ui/tabs/output/)           | This shows various informational messages                   |


All but the most essential tabs can be hidden by clicking on the grey 'x' on the tab title.  

You can display tabs you have hidden via the [View Menu](/docs/desktop/ui/tlmenu/view/).  

Hidden tabs may also appear when 'activated' by another action.

## See also

|   |                                         |                                       |
|---|-----------------------------------------|---------------------------------------|
|   | [Getting Started](/docs/desktop/start/) | for details of how to start using ZAP |
|   | [Dialogs](/docs/desktop/ui/dialogs/)    | for details of the dialogs or popups  |
|   | [Introduction](/docs/desktop/)          | the introduction to ZAP               |
