---
# This page was generated from the add-on.
title: Manual Request Editor dialog
type: userguide
weight: 7
---

# Manual Request Editor dialog

This dialog allows you to create a request from scratch which will be submitted to the specified target, or resend an existing request after making any changes to it that you want to.

## Request tab

This shows the request header and data, either in one or two panels depending on the options chosen.

A 'Method' pull down allows you to switch between the HTTP methods.  
Note that when the method is changed to a POST then any URL parameters are moved into the body, and when the method is changed from a POST then any parameters in the body are moved to the URL.

Pull downs allow you to select different [Views](/docs/desktop/ui/views/) for the Request header and body.

### ![](/docs/desktop/images/view_split.png) Split display for header and body

This changes the display so that separate panes are used for the header and body.

### ![](/docs/desktop/images/view_all.png) Combined display for header and body

This changes the display so that the header and body are shown in one pane.

### ![](/docs/desktop/images/fugue/globe-green.png) Use current tracking session

See the 'Enable (Global) HTTP State' option in the [Options Connection screen](/docs/desktop/ui/dialogs/options/connection/).

### :cookie: Accept cookies

This option controls whether encountered cookies should be added to subsequent requests. For example if a request is sent that results in a response with Set-Cookie header(s) should those cookies values be added to subsequent send attempts from the Manual Request dialog?

### ![](/docs/desktop/images/16/118.png) Follow redirect

If selected automatically follows any redirects sent to the browser.

### ![](/docs/desktop/images/fugue/application-resize.png) Update Content Length

By default ZAP will automatically update (or add) the Content-Length header to match the size of the data submitted. If this option is unselected then ZAP will not update the header allowing you to specify any value you like.

### ![](/docs/desktop/images/csrf-button.png) Regenerate Anti-CSRF

If selected automatically regenerates Anti-CSRF tokens if any exist. Currently only supported in the message body and requires that the Anti-CSRF extension is enabled.

### ![](/docs/desktop/images/layout_tabbed.png) Request and Response tabs side by side

This changes the display so that the request and response tabs are side by side.  
This increases the information that can be displayed but means you cannot see both the request and response at the same time.

### ![](/docs/desktop/images/layout_vertical_split.png) Request shown above Response

This changes the display so that the request panel is shown above the response panel.  
This decreases the information that can be displayed but means you can see both the request and response at the same time.

### ![](/docs/desktop/images/layout_horizontal_split.png) Request and Response panels side by side

This changes the display so that the request panel is shown to the left of the response panel.  
This decreases the information that can be displayed but means you can see both the request and response at the same time.

## Response tab

This shows the data sent to your browser in response to the request that you submitted, either in one or two panels depending on the options chosen.

Pull downs allow you to select different [Views](/docs/desktop/ui/views/) for the Response header and body.

## Right click menu

Right clicking will bring up a menu which will allow you to:

### Find...

This will bring up the [Find dialog](/docs/desktop/ui/dialogs/find/).

## Accessed via

|     |                                                        |                                                            |
| --- | ------------------------------------------------------ | ---------------------------------------------------------- |
|     | [Top level Tools menu](/docs/desktop/ui/tlmenu/tools/) | 'Manual Request Editor ...' menu item                      |
|     | [Sites tab](/docs/desktop/ui/tabs/sites/)              | 'Open/Resend with Request Editor...' right click menu item |
|     | [History tab](/docs/desktop/ui/tabs/history/)          | 'Open/Resend with Request Editor...' right click menu item |

## See also

|     |                                      |                                       |
| --- | ------------------------------------ | ------------------------------------- |
|     | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|     | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |
