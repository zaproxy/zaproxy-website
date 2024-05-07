---
# This page was generated from the add-on.
title: Fuzzing
type: userguide
weight: 1
cascade:
  addon:
    id: fuzz
    version: 13.13.0
---

# Fuzzing

Fuzzing is a technique of submitting lots of data to a target (often in the form of invalid or unexpected inputs).

ZAP allows you to fuzz any request using:

* A built-in set of payloads
* Payloads defined by optional add-ons
* Custom scripts


To access the [Fuzzer dialog](/docs/desktop/addons/fuzzer/dialogue/) you can either:

* Right click a request in one of the ZAP tabs (such as the History or Sites) and select “Attack / Fuzz…”
* Highlight a string in the Request tab, right click it and select “Fuzz…”
* Select the “Tools / Fuzz…” menu item and then select the request you want to fuzz

### Payload Generators

Payload Generators generate the raw values or attacks that the fuzzer submits to the target application.   

They are managed via the [Payloads dialog](/docs/desktop/addons/fuzzer/payloads/).

### Payload Processors

Payload Processors can be used to change specific payloads before they are submitted.   

They are managed via the [Payload Processors dialog](/docs/desktop/addons/fuzzer/processors/).

### Fuzz Location Processors

Fuzz Location Processors can be used to change all of the payloads before they are submitted.   

They are managed via the [Location Processors dialog](/docs/desktop/addons/fuzzer/locations/).

### Message Processors

Message Processors can access and change the messages being fuzzed, control the fuzzing process, and interact with the ZAP UI.   

They are managed via the [Fuzzer dialog](/docs/desktop/addons/fuzzer/dialogue/) 'Message Processors' tab.

Some of this functionality is based on code from the OWASP JBroFuzz project and includes files from the fuzzdb project.  
Note that some fuzzdb files have been left out as they cause common anti-virus scanners to flag them as containing viruses.  
You can replace them (and upgrade fuzzdb) by downloading the latest version of fuzzdb and expanding it in the 'fuzzers' library.

## See also

|   |                                                               |
|---|---------------------------------------------------------------|
|   | [Fuzzer options screen](/docs/desktop/addons/fuzzer/options/) |
