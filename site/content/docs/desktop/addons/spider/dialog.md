---
# This page was generated from the add-on.
title: Spider dialog
type: userguide
weight: 2
---

# Spider dialog


This dialog launches the [Spider](/docs/desktop/addons/spider/).  


## Scope

The first tab allows you to select or change the starting point.  
If the starting point is in one or more Contexts then you will be able to choose one of them.  
If that context has any Users defined then you will be able to select one of them.  
If you select one of the users then the spider will be performed as that user, with ZAP (re)authenticating as that user whenever necessary.   

If you select 'Recurse' then all of the nodes underneath the one selected will also be used to seed the Spider.   

If you select 'Spider Subtree Only' the Spider will only access resources that are under the starting point (URI). When evaluating if a resource is found within the specified subtree, the Spider considers only the scheme, host, port, and path components of the URI.   

If you select 'Show Advanced Options' then the following tab will be shown which provides fine grain control over the spider process.   

Clicking on the 'Reset' button will reset all of the options to their default values.

## Advanced

The parameters on this tab correspond to the same parameters on the [Options Spider screen](/docs/desktop/addons/spider/options/).

## Accessed via

|   |                                                |                                            |
|---|------------------------------------------------|--------------------------------------------|
|   | [Spider tab](/docs/desktop/addons/spider/tab/) | 'New Scan' button                          |
|   | Sites tab                                      | 'Attack / Spider...' right click menu item |
|   | History tab                                    | 'Attack / Spider...' right click menu item |
