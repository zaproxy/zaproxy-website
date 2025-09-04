---
# This page was generated from the add-on.
title: Breakpoints
type: userguide
weight: 9
---

# Breakpoints

A breakpoint allows you to intercept a request from your browser and to change it before
it is submitted to the web application you are testing.  

You can also change the responses received from the application  

The request or response will be displayed in the [Break tab](/docs/desktop/ui/tabs/break/)
which allows you to change disabled or hidden fields, and will allow you to bypass
client side validation (often enforced using javascript).  

It is an essential penetration testing technique.


You can set a 'global' breakpoint on requests or responses using the buttons on the
[top level toolbar](/docs/desktop/ui/tltoolbar/).  

All requests or responses will then be intercepted by ZAP allowing you to change anything before
allowing the request or response to continue.


You can also set breakpoints on specific criteria using the "Break..." right click menu on the
[Sites](/docs/desktop/ui/tabs/sites/) and [History tabs](/docs/desktop/ui/tabs/history/)
and the 'Add a custom HTTP breakpoint' button on the [top level toolbar](/docs/desktop/ui/tltoolbar/).  

Only requests and responses which match those criteria will be intercepted by ZAP.  

Custom breakpoints are shown in the [Breakpoints tab](/docs/desktop/ui/tabs/breakpoints/)


Breakpoint option are configured using the
[Options Breakpoints screen](/docs/desktop/ui/dialogs/options/breakpoints/).  

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by the UI                    |
