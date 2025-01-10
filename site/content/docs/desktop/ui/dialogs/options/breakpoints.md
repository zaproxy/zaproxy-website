---
# This page was generated from the add-on.
title: Options Breakpoints screen
type: userguide
weight: 6
---

# Options Breakpoints screen


This screen allows you to configure the [breakpoint](/docs/desktop/start/features/breakpoints/) options:

### Confirm drop trapped message

Asks for confirmation when a request or response is dropped.

### Only break on messages in scope

The 'global' breakpoint will only be triggered by requests that are in [scope](/docs/desktop/start/features/scope/).  
Custom breakpoints will not be affected.

### ZAP always on top when breakpoint hit

If selected this will mean that ZAP stays on top of all other windows whenever a breakpoint is hit.  

### Show buttons to select the requests you don't want ZAP to break on

This controls whether the buttons to select the file types you don't want ZAP to break on and the scope filter appear in the break panel.  

#### Javascript URL regex

This sets the regex used to predict if the content in the response will be a Javascript file.

#### CSS and Fonts URL regex

This sets the regex used to predict if the content in the response will be a CSS or a Font file.

#### Multimedia URL regex

This sets the regex used to predict if the content in the response will be a multimedia file (images, videos or sounds).

### Break buttons mode

This controls whether there is a single combined break button on the [Top Level Toolbar](/docs/desktop/ui/tltoolbar/) or separate ones for Requests and Responses.

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
