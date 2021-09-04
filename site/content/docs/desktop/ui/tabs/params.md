---
# This page was generated from the add-on.
title: Params tab
type: userguide
weight: 11
---

# Params tab

This shows a summary of the parameters and response header fields a site uses.
Sites can be selected via the toolbar or the [Sites tab](/docs/desktop/ui/tabs/sites/).

For each parameter you can see:

|     |                                                                                                       |
| --- | ----------------------------------------------------------------------------------------------------- |
|     | The type - Cookie, FORM, URL, or Header                                                               |
|     | The name of the parameter (or response header)                                                        |
|     | The number of times it has been used                                                                  |
|     | The number of unique values                                                                           |
|     | The percentage change, where 0 means only one value has been used and 100 means all values are unique |
|     | The flags - including cookie flags and anticsrf and session                                           |
|     | Some of the values - the full set of values may not all be visible                                    |

## Right click menu

Right clicking on a node will bring up a menu which will allow you to:

### Search

This will show all examples of the parameter selected in the [Search tab](/docs/desktop/ui/tabs/search/).

### Flag as Anti CSRF token

This will flag the parameter as an [Anti CSRF token](/docs/desktop/start/features/anticsrf/).

### Unflag as Anti CSRF token

This will remove the Anti CSRF token flag from the parameter.

### Flag as Session token

This will mark the parameter as a Session token for the current Site and will notify the [HTTP Sessions](/docs/desktop/start/features/httpsessions/) tool accordingly.

### Unflag as Session token

This will unmark the parameter as a Session token for the current site and will notify the [HTTP Sessions](/docs/desktop/start/features/httpsessions/) tool accordingly.

## See also

|     |                                  |                                       |
| --- | -------------------------------- | ------------------------------------- |
|     | [UI Overview](/docs/desktop/ui/) | for an overview of the user interface |
