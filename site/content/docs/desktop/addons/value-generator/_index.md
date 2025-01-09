---
# This page was generated from the add-on.
title: Value Generator
type: userguide
weight: 1
cascade:
  addon:
    id: formhandler
    version: 6.7.0
---

# Value Generator


This Value Generator extension allows for the custom configuration of values used in sites/apps based on field/input names.


**Note:** The word "Field" is used throughout this help documentation interchangeably with parameter or input.

## Description


With this add-on the user can create new fields for inputs that they wish to control the
value of. Additionally, the user can modify any existing field's name and value to fit the fields that
they are trying to customize/control. Any field can also be disabled or removed by the user so that the custom values
are not used. Field names, values, enabled state, and regex status will be stored even after a ZAP session has
concluded.


The add-on provides a set of default field names and patterns that may be found in an app/system and a corresponding
value for each default field. These default values can be disabled, modified, and deleted if the
user desires.

## Using the Value Generator


The Value Generator can be configured thought ZAP's Options. Selecting the Value Generator tab will display a table
with all existing inputs that are currently defined. An example is shown below.

![A screenshot of the Value Generator's main table](/docs/desktop/addons/value-generator/images/formHandlerTable.PNG)

### Adding a New Field


To define additional input values the **Add** button can be clicked. This will bring up a dialog
for the user to provide field information.
![A screenshot of the Value Generator's add dialog](/docs/desktop/addons/value-generator/images/formHandlerAddDialog.PNG)


Please take note of the following when adding a new field:

* A field name or regex pattern must be provided.
* The field name cannot already exist in the table or a warning will occur.
* The field name supplied to the Value Generator must match the field ID in the input that you wish to define/control.
* The field name is not case sensitive, unless using regex.
* Simple name matches will be attempted before regex matches.
* A value does not have to be provided. This will result in an empty string being used.
* The value field is case sensitive, and will be seen in subsequent traffic.


### Modifying an Existing Field


The add-on allows the user to modify the values and names of existing fields. This can be done
by selecting the field that you wish to modify and clicking on the **Modify** button.

![A screenshot of the Value Generator's modify dialog](/docs/desktop/addons/value-generator/images/formHandlerModDialog.PNG)


When modifying a field the user is constrained by the same rules as creating a new one. The most
common constraint when modifying a field is that the name cannot be the same as an existing field.
(i.e. No duplicate fields)

### Removing Fields


The user can remove fields at any time. To do so simply select the field that you wish to remove and
click on the **Remove** button. *Please note that you will be prompted to confirm removal before
proceeding unless the **Remove without Confirmation** box is checked.*

## Fields/Parameters That Are Not Defined


A user may find that they do not want to define everything, but rather define a select few within
the expected input.


Any field that is not defined in the Value Generator add-on will use a ZAP default value that is generated to match
each field type.(For example: A text field will have the value "ZAP".)

## Statistics


A number of statistics are exposed via the add-on for add, modify, and remove operations.  

In the following examples `{name}` will be the actual name of the Value Generator field.

* stats.formhandler.add
* stats.formhandler.add.{name}
* stats.formhandler.modify
* stats.formhandler.modify.{name}
* stats.formhandler.remove
* stats.formhandler.remove.{name}

