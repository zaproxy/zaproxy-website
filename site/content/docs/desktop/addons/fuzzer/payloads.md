---
# This page was generated from the add-on.
title: Payloads dialog
type: userguide
weight: 5
---

# Payloads dialog

This allows you to select the payload generators to use when [fuzzing](/docs/desktop/addons/fuzzer/) a request.   

Payload generators generate the raw values or attacks that the fuzzer submits to the target application.   

The following types of generators are provided by default:

* Empty/Null - generates the selected payload multiple times, leaving the message without changes. This payload generator is useful to send multiple messages that are later processed, for example, with a [Fuzzer HTTP Processor (Script)](/docs/desktop/addons/fuzzer/httpmessageprocessors/).
* File - select any local file for one off attacks
* File Fuzzers - select any combination of the fuzzing files registered with ZAP, e.g. via add-ons like fuzzdb
* Numberzz - allows to easily generate a sequence of numbers, with custom increment
* Regex - generate attacks based on regex patterns
* Strings - raw strings, which can be entered manually or pasted in
* Script - custom scripts that can generate any payloads required
* Json - generate attacks by fuzzing the provided json

You can write custom payload generator scripts - these can supply any payloads that you need.   

Add-ons can also define additional payload generators.   

The 'Processors...' button launches the [Payload Processors dialog](/docs/desktop/addons/fuzzer/processors/) which allows you to configure payload processors that just apply to the payload generator you have selected.   

## Accessed via

|   |                                                                        |
|---|------------------------------------------------------------------------|
|   | [Fuzzer dialog](/docs/desktop/addons/fuzzer/dialogue/) 'Add...' button |

## See also

|   |                                                 |
|---|-------------------------------------------------|
|   | [Fuzzer concepts](/docs/desktop/addons/fuzzer/) |
