---
# This page was generated from the add-on.
title: Views
type: userguide
---

# Views


ZAP provides a set of plugable views which allows you to display the requests and responses in different ways.  

The following views are included by default:

|   |                |                                                                                                                                                                                                                                                                                                                   |
|---|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   | Text           | The data in text format                                                                                                                                                                                                                                                                                           |
|   | Hex            | A table showing the hex representation of all of the characters in the header and body. For editable screens this allows you to add control characters via their hex codes. You cannot add or delete characters in this view - to do that switch to one of the other views and then back to carry on in hex view. |
|   | Image          | The image - only available for bodys containing images                                                                                                                                                                                                                                                            |
|   | Table          | A table with one row per attribute and value. For editable screens all values will automatically be URL encoded when they are submitted.                                                                                                                                                                          |
|   | Table (adv)    | A table with one row per attribute and value plus additional functions. For editable screens values will not be automatically be URL encoded when they are submitted, but this can be done 'manually' via 'URLEncode' function.                                                                                   |
|   | Large Request  | A placeholder view used to prevent the UI trying to load a very large request body. You will need to switch to a different view to display the actual contents. The threshold for the view can be changed via the [Display Options screen](/docs/desktop/ui/dialogs/options/view/)                                |
|   | Large Response | A placeholder view used to prevent the UI trying to load a very large response body. You will need to switch to a different view to display the actual contents. The threshold for the view can be changed via the [Display Options screen](/docs/desktop/ui/dialogs/options/view/)                               |


Note that [add-ons](/docs/desktop/start/features/addons/) can add additional views.

## Used in

|   |                                                 |   |
|---|-------------------------------------------------|---|
|   | [Break tab](/docs/desktop/ui/tabs/break/)       |   |
|   | [Request tab](/docs/desktop/ui/tabs/request/)   |   |
|   | [Response tab](/docs/desktop/ui/tabs/response/) |   |

## See also

|   |                                  |                                       |
|---|----------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/) | for an overview of the user interface |
