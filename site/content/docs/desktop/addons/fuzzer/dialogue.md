---
# This page was generated from the add-on.
title: Fuzzer dialog
type: userguide
weight: 2
---

# Fuzzer dialog

This allows you to select the fuzzers to use when [fuzzing](/docs/desktop/addons/fuzzer/) a request.

### Fuzz Locations tab

To configure the fuzzing:  

* Highlight a string you wish to fuzz in the Fuzz Locations tab
* Click the 'Add...' button to launch the [Payloads dialog](/docs/desktop/addons/fuzzer/payloads/)
* Add the payloads you want to use
* Click on the 'Processors...' button to launch the [Location Processors dialog](/docs/desktop/addons/fuzzer/locations/) (if required)
* Click on the 'Start Fuzzer' button to start the fuzzing
* The results will then be listed in the [Fuzzer tab](/docs/desktop/addons/fuzzer/tab/) select them to see the full requests and responses.

You can also search for strings in the fuzz results using the 'Search' tab.


Click on the 'Edit' button to edit the message you have selected for fuzzing.
Note that this will remove all of the fuzz locations that you have defined.


You will need to 'Save' the message before you can define new fuzz locations.

### Options tab

This tab allows you to configure the options to be used when fuzzing. See the main [options help](/docs/desktop/addons/fuzzer/options/) for more details.

#### Follow Redirects

Indicates whether or not the Fuzzer should follow redirect responses (only visible for HTTP messages).

### Message Processors tab

Message Processors can access and change the messages being fuzzed, control the fuzzing process, and interact with the ZAP UI.  
The message processors available depend on the type of message being fuzzed, this add-on includes the [default HTTP Messages processors](/docs/desktop/addons/fuzzer/httpmessageprocessors/).


Add-ons can also define additional payload generators.

## Accessed via

|   |                       |                                 |
|---|-----------------------|---------------------------------|
|   | Request tab           | 'Fuzz...' right click menu item |
|   | Sites and History tab | Attack \> Fuzz... menu items    |
|   | Tools menu            | Attack \> Fuzz... menu item     |

## See also

|   |                                                 |
|---|-------------------------------------------------|
|   | [Fuzzer concepts](/docs/desktop/addons/fuzzer/) |
