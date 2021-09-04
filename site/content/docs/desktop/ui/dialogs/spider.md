---
# This page was generated from the add-on.
title: Spider dialog
type: userguide
weight: 15
---

# Spider dialog

This dialog launches the [spider](/docs/desktop/start/features/spider/).

## Scope

The first tab allows you to select or change the starting point.  
If the starting point is in one or more [Contexts](/docs/desktop/start/features/contexts/) then you will be able to choose one of them.  
If that context has any [Users](/docs/desktop/start/features/users/) defined then you will be able to select one of them.  
If you select one of the users then the spider will be performed as that user, with ZAP (re)authenticating as that user whenever necessary.

If you select 'Recurse' then all of the nodes underneath the one selected will also be used to seed the spider.

If you select 'Spider Subtree Only' the spider will only access resources that are under the starting point (URI). When evaluating if a resource is found within the specified subtree, the spider considers only the scheme, host, port, and path components of the URI.

If you select 'Show Advanced Options' then the following tab will be shown which provide fine grain control over the spider process.

Clicking on the 'Reset' button will reset all of the options to their default values.

## Advanced

The parameters on this tab correspond to the same parameters on the [Options Spider screen](/docs/desktop/ui/dialogs/options/spider/).

## Accessed via

|     |                                               |                                            |
| --- | --------------------------------------------- | ------------------------------------------ |
|     | [Spider tab](/docs/desktop/ui/tabs/spider/)   | 'New Scan' button                          |
|     | [Sites tab](/docs/desktop/ui/tabs/sites/)     | 'Attack / Spider...' right click menu item |
|     | [History tab](/docs/desktop/ui/tabs/history/) | 'Attack / Spider...' right click menu item |

## See also

|     |                                      |                                       |
| --- | ------------------------------------ | ------------------------------------- |
|     | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|     | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |
