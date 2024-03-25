---
# This page was generated from the add-on.
title: Manual Request Editor dialog
type: userguide
weight: 1
---

# Manual Request Editor dialog

This dialog allows you to create a HTTP request from scratch which will be submitted to the specified target, or resend an existing HTTP request after making any changes to it that you want to.

## Request tab

This shows the request header and data, either in one or two panels depending on the options chosen.   

A 'Method' pull down allows you to switch between the HTTP methods.   
Note that when the method is changed to a POST then any URL parameters are moved into the body, and when the method is changed from a POST then any parameters in the body are moved to the URL.   

Pull downs allow you to select different Views for the Request header and body.

### ![](/docs/desktop/addons/requester/images/view-split.png) Split display for header and body

This changes the display so that separate panes are used for the header and body.   

### ![](/docs/desktop/addons/requester/images/view-all.png) Combined display for header and body

This changes the display so that the header and body are shown in one pane.   

### ![](/docs/desktop/addons/requester/images/fugue/globe-green.png) Use current tracking session

See the 'Use Global HTTP State' option in Options \> Network \> Connection options screen.   

### :cookie: Accept cookies

This option controls whether encountered cookies should be added to subsequent requests. For example if a request is sent that results in a response with Set-Cookie header(s) should those cookies values be added to subsequent send attempts from the Manual Request dialog?   

### ![](/docs/desktop/addons/requester/images/follow-redirect.png) Follow redirect

If selected automatically follows any redirects sent to the browser.   

### ![](/docs/desktop/addons/requester/images/fugue/application-resize.png) Update Content Length

By default ZAP will automatically update (or add) the Content-Length header to match the size of the data submitted. If this option is unselected then ZAP will not update the header allowing you to specify any value you like.   

### ![](/docs/desktop/addons/requester/images/fugue/server.png) Update Host Header

By default ZAP will automatically update (or add) the Host header to match the URL specified. If this option is unselected then ZAP will not update the header allowing you to specify any value you like.   

### ![](/docs/desktop/addons/requester/images/csrf-button.png) Regenerate Anti-CSRF Token

If selected automatically regenerates Anti-CSRF tokens if any exist. Currently only supported in the message body and requires that the Anti-CSRF extension is enabled.   

### ![](/docs/desktop/addons/requester/images/lowercase-header-button.png) Lowercase Header Names

This will lowercase all the header names, making them compliant with HTTP/2.   

### ![](/docs/desktop/addons/requester/images/layout-tabbed.png) Request and Response tabs side by side

This changes the display so that the request and response tabs are side by side.   
This increases the information that can be displayed but means you cannot see both the request and response at the same time.

### ![](/docs/desktop/addons/requester/images/layout-vertical-split.png) Request shown above Response

This changes the display so that the request panel is shown above the response panel.   
This decreases the information that can be displayed but means you can see both the request and response at the same time.

### ![](/docs/desktop/addons/requester/images/layout-horizontal-split.png) Request and Response panels side by side

This changes the display so that the request panel is shown to the left of the response panel.   
This decreases the information that can be displayed but means you can see both the request and response at the same time.

## Response tab

This shows the data sent to your browser in response to the request that you submitted, either in one or two panels depending on the options chosen.   

Pull downs allow you to select different Views for the Response header and body.

## Accessed via

|   |                                              |                                                        |
|---|----------------------------------------------|--------------------------------------------------------|
|   | Top level Tools menu                         | 'Manual Request Editor...' menu item                   |
|   | In any GUI component that has a HTTP message | 'Open/Resend with Request Editor...' context menu item |

## See also

|   |                                              |                                      |
|---|----------------------------------------------|--------------------------------------|
|   | [Requester](/docs/desktop/addons/requester/) | the introduction to Requester add-on |
