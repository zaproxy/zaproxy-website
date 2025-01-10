---
# This page was generated from the add-on.
title: Add/Edit Breakpoint dialog
type: userguide
weight: 3
---

# Add/Edit Breakpoint dialog


This dialogue allows you to add and edit [HTTP breakpoints](/docs/desktop/start/features/breakpoints/).


A breakpoint is defined by the following fields:

* **Location** - where the `String` is checked in the HTTP message: `URL`, `Request Header`, `Request Body`, `Response Header`, or `Response Body`.
* **Match** - how the `String` is interpreted, `Regex` or `Contains`, for regular expression or exact match, respectively, in the `Location`. The regular expression does not need to match the whole content of the `Location`.
* **String** - the string that triggers the breakpoint.
* **Inverse** - if the result of the `Match` should be the inverse.
* **Ignore case** - if the case of the `String` should be ignored.

If you proxy a HTTP message that matches a breakpoint then ZAP will intercept it and allow you to change either the request or the response.


**Note:** ZAP will warn and prevent adding breakpoints with a fragment identifier component (`#`), if
the breakpoint has match `Contains` and location `URL`. Such breakpoint would not work because the
fragment identifier is not sent to the server.

## Accessed via

|   |                                               |                                  |
|---|-----------------------------------------------|----------------------------------|
|   | [History tab](/docs/desktop/ui/tabs/history/) | 'Break...' right click menu item |
|   | [Sites tab](/docs/desktop/ui/tabs/sites/)     | 'Break...' right click menu item |

## See also

|   |                                      |                                       |
|---|--------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|   | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |
