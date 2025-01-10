---
# This page was generated from the add-on.
title: Add Alert dialog
type: userguide
weight: 2
---

# Add Alert dialog


This dialog allows you to manually add or change an [Alert](/docs/desktop/start/features/alerts/) associated
with a specific request.  

## Fields

The dialog has the following fields:

### Type

The type of the alert is a pull down field which allows you to select one of a prepopulated set of issue types.  
You can also enter your own text or change the text of one of the items you selected.  
If you select one of the existing types then the Description, Solution and Other Info fields will be populated with text associated with the item you chose.

### Risk

A pull down field which allows you to specify how serious you think the risk is:

|   |               |   |
|---|---------------|---|
|   | Informational |   |
|   | Low           |   |
|   | Medium        |   |
|   | High          |   |

### Confidence

A pull down field which allows you to specify how confident you are in the validity of the finding:

|   |                |                                                              |
|---|----------------|--------------------------------------------------------------|
|   | False Positive | for potential issues that you later find are not exploitable |
|   | Low            | for unconfirmed issues                                       |
|   | Medium         | for issues you are somewhat confident of                     |
|   | High           | for findings you are highly confident in                     |
|   | Confirmed      | for confirmed issues                                         |

### Parameter

A pull down field which allows you to specify which parameter the issue is associated with.  
The field is prepopulated with any URL and FORM parameters found, but you can also enter your own parameter name.  
Array parameters (in URL query component and `x-www-form-urlencoded` request body) are identified with its index. For example, for a request containing `choices[]=ChoiceA&choices[]=ChoiceB` the first parameter would be identified as `choices[0]` and the second as `choices[1]`.

### Attack

The payload that was supplied to the *Parameter* . This is expected to be set only by active scan rules which are the ones that send payloads/attacks.

### Evidence

The available information in the message request or response (header or body) that indicates that the issue is present.

### CWE ID

The relevant Common Weakness Enumeration (CWE) ID associated with the flagged vulnerability. This field can only be an integer.

### WASC ID

The relevant Web Application Security Consortium (WASC) ID associated with the flagged vulnerability. This field can only be an integer.

### Description

A general description of the type of issue found.  
This is populated when you select one of the predefined types, but you can also change it as required.  
Note that any changes you make will be lost if you select another type.

### Other Info

Information specific to the particular issue you have found.  
This is not prepopulated.

### Solution

Recommendations about how to fix the issue.  
This is populated when you select one of the predefined types, but you can also change it as required.  
Note that any changes you make will be lost if you select another type.

### Reference

One or more URLs pointing to more information on the internet about the selected type of alert.  
This is populated when you select one of the predefined types, but you can also change it as required.  
Note that any changes you make will be lost if you select another type.

### Alert Tags

Alerts can be tagged with arbitrary keys or key=value pairs.  
You can add as many tags as you want to each alert. However,

* You cannot have two tags with the same key.
* The key must be limited to 1024 characters and the value must be limited to 4000 characters for each tag.

## Accessed via

|   |                                               |                                      |
|---|-----------------------------------------------|--------------------------------------|
|   | [History tab](/docs/desktop/ui/tabs/history/) | 'New Alert...' right click menu item |
|   | [Alerts tab](/docs/desktop/ui/tabs/alerts/)   | double clicking on an existing alert |

## See also

|   |                                      |                                       |
|---|--------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|   | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |
