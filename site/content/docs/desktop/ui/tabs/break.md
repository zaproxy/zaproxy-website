---
# This page was generated from the add-on.
title: Break tab
type: userguide
weight: 4
---

# Break tab

The Break tab allows you to change a request or response when it has been caught by ZAP via
a [breakpoint](/docs/desktop/start/features/breakpoints/).  
It allows you to change elements that you would not normally be able to change via your
browser, including:

|   |                                                             |
|---|-------------------------------------------------------------|
|   | The header                                                  |
|   | Hidden fields                                               |
|   | Disabled fields                                             |
|   | Fields that use javascript to filter out illegal characters |

This functionality is key to effectively pen testing your application.

The 2 panels will only contain anything if ZAP has caught a request or response.  
You can change anything in these 2 panels and then forward the request or response using
the buttons on the [Top Level Toolbar](/docs/desktop/ui/tltoolbar/).

Pull downs allow you to select different [Views](/docs/desktop/ui/views/) for the request or response header and body.

While the Break tab is not in use its icon is a grey cross:
![](/docs/desktop/images/16/101grey.png) .  
When a [breakpoint](/docs/desktop/start/features/breakpoints/) is hit the tab icon is changed
to a red cross:
![](/docs/desktop/images/16/101.png) .  

## Right click menu

Right clicking on a node will bring up a menu which will allow you to:

### Find...

This will bring up the [Find dialog](/docs/desktop/ui/dialogs/find/).

### Encode/Decode/Hash...

This will bring up the [Encode/Decode/Hash dialog](/docs/desktop/ui/dialogs/enc_dec/).  
If you have highlighted any text then this will be automatically included in the dialog.

### Copy

This will copy the selected string to the clipboard.

## See also

|   |                                                       |                                                    |
|---|-------------------------------------------------------|----------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                      | for an overview of the user interface              |
|   | [Breakpoints tab](/docs/desktop/ui/tabs/breakpoints/) | for details of how to change or delete breakpoints |
