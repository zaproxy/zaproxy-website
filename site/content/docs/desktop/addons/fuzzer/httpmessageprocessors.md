---
# This page was generated from the add-on.
title: HTTP Message Processors
type: userguide
weight: 3
---

# HTTP Message Processors

HTTP Message Processors can access and change the HTTP messages being fuzzed, control the fuzzing process, and interact with the ZAP UI.


Built-in HTTP Message Processors include:

### Anti-CSRF Token Refresher

Allows to refresh anti-CSRF tokens contained in the request. The anti-CSRF tokens must be properly detected by ZAP to be able to use this processor.  
For more information consult the help page "Getting Started" \> "Features" \> "Anti CSRF Tokens".  
**Note:** This processor is automatically added to the list of processors, if anti-CSRF tokens were detected.

### Fuzzer HTTP Processor (Script)

Allows to select the enabled Fuzzer HTTP Processor scripts. The scripts allow you to:

* Obtain the list of payloads
* Stop fuzzing
* Increase the error count
* Send new messages
* Add messages to the Results tab
* Set custom ‘state’ messages in the [Fuzzer tab](/docs/desktop/addons/fuzzer/tab/)
* Raise alerts

Scripts can include both Required and Optional parameters the values for which the user will be prompted to provide when the Processor is added to the fuzzer. The parameter names are defined within the script(s) via the methods `getRequiredParamsNames` and `getOptionalParamsNames`, each of which simply return an array of strings representing the parameters names.

### Payload Reflection Detector

Indicates in the State column of results table if one of the injected payloads were found in the response, using "![](/docs/desktop/addons/fuzzer/images/reflected_icon.png) Reflected".  
**Note:** This processor is automatically added to the list of processors.

### Request Content-Length Updater

Updates (or adds, if not already present) the `Content-Length` request header with the length of the request body, for all request methods. No change is done if the size of the request body is zero and the header is not already present.  
**Note:** This processor is automatically added to the list of processors.

### Tag Creator

Allows to add custom ‘tags’, based on contents of the response, to the State column of the results table.

### User Message Processor

Allows to fuzz as a user, using one of the users defined in the Contexts that include the HTTP message being fuzzed. Users must exist to be able to select and add this processor.


Other add-ons can define additional HTTP Message Processors.

## Accessed via

|   |                                                                                     |
|---|-------------------------------------------------------------------------------------|
|   | [Fuzzer dialog](/docs/desktop/addons/fuzzer/dialogue/) under Message Processors tab |

## See also

|   |                                                 |
|---|-------------------------------------------------|
|   | [Fuzzer concepts](/docs/desktop/addons/fuzzer/) |
