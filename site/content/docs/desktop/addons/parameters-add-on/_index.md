---
# This page was generated from the add-on.
title: Params
type: userguide
weight: 1
cascade:
  addon:
    id: params
    version: 0.1.0
---

# Params

The Params add-on allows you to view and analyse the parameters and response header fields a site uses.

Sites can be selected via the toolbar or the Sites tab.

## Params tab

This shows a summary of the parameters and response header fields a site uses.
Sites can be selected via the toolbar or the Sites tab.


For each parameter you can see:

|   |                                                                                                       |
|---|-------------------------------------------------------------------------------------------------------|
|   | The type - Cookie, Form, URL, or Header                                                               |
|   | The name of the parameter (or response header)                                                        |
|   | The number of times it has been used                                                                  |
|   | The number of unique values                                                                           |
|   | The percentage change, where 0 means only one value has been used and 100 means all values are unique |
|   | The flags - including cookie flags and anticsrf and session                                           |
|   | Some of the values - the full set of values may not all be visible                                    |

## Right click menu

Right clicking on a node will bring up a menu which will allow you to:

### Search

This will show all examples of the parameter selected in the Search tab.

### Flag as Anti CSRF token

This will flag the parameter as an Anti CSRF token.

### Unflag as Anti CSRF token

This will remove the Anti CSRF token flag from the parameter.  

### Flag as Session token

This will mark the parameter as a Session token for the current Site and will notify the HTTP Sessions tool accordingly.   

### Unflag as Session token

This will unmark the parameter as a Session token for the current site and will notify the HTTP Sessions tool accordingly.   

## Automation

This add-on supports the [Automation Framework](/docs/desktop/addons/parameters-add-on/automation/).
