---
# This page was generated from the add-on.
title: Options Passive Scan Tags screen
type: userguide
weight: 17
---

# Options Passive Scan Tags screen


This screen allows you to configure the [tags](/docs/desktop/start/features/tags/) 
that are added by the [passive scanner](/docs/desktop/start/features/pscan/).
You can add, modify and remove the tags via the appropriate buttons.

## Tag Interpolation

In order to allow some flexibility in Tag creation and content it is possible for the user to specify a regular expression with capturing groups which will be used to replace the group identifiers (ex: $1) in the resulting tag.


For example, a tag could be defined as follows:

|        Field         |   Value    |                                 Note                                 |
|----------------------|------------|----------------------------------------------------------------------|
| Name:                | Test       |                                                                      |
| Tag:                 | $1-SOMETAG |                                                                      |
| Response Body Regex: | (\\d{3})   | Find strings of 3 numbers, using a capturing group (round brackets). |

**Result:** When 3 digit strings are passively identified in response body content (the regex matches) the messages will be tagged such as "123-SOMETAG", "345-SOMETAG", etc.

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
