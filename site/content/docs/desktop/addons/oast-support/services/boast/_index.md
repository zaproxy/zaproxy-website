---
# This page was generated from the add-on.
title: BOAST
type: userguide
weight: 1
---

# BOAST


BOAST is a server built to receive and report Out-of-Band Application Security Testing interactions.


BOAST features DNS, HTTP, and HTTPS protocol receivers with support for multiple simultaneous ports for each
receiver.


Requests made to BOAST by the target web application can be viewed in the [OAST Callbacks
Tab](/docs/desktop/addons/oast-support/tab/) in the ZAP GUI.

## Scripts

If the *Script Console* and the *GraalVM JavaScript* add-ons are installed, a new script called "OAST Get BOAST Servers.js" is added to ZAP. This script prints all the available information related to the registered BOAST servers. The primary purpose of this script is to demonstrate how to interact with BOAST from a script. This will enable you to write other scripts that make use of BOAST payloads and canary values to perform out-of-band attacks.

## See also

|   |                                                                            |   |
|---|----------------------------------------------------------------------------|---|
|   | [BOAST Options](/docs/desktop/addons/oast-support/services/boast/options/) |   |
|   | [BOAST on GitHub](https://github.com/marcoagner/boast)                     |   |
|   | [OAST Tab](/docs/desktop/addons/oast-support/tab/)                         |   |
