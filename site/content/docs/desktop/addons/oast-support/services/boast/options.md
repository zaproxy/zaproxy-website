---
# This page was generated from the add-on.
title: BOAST Options
type: userguide
weight: 1
---

# BOAST Options


The BOAST Options screen allows you to configure the settings that affect how ZAP interacts with BOAST servers.

### Server URI

This address should point to the URI that will be used for registrations and polling.

A valid URI will include the scheme, the host, the port, and the `/events` endpoint. The host must be
running a working instance of BOAST.

An example of a valid URI is: `https://example.com:1337/events`.

### Polling Frequency

This option allows you to change the frequency of polling the registered BOAST servers. It takes values in
seconds. The minimum allowed value is 10 seconds and the maximum is 21600 seconds (6 hours). The default value is 60
seconds.

### Active Servers

This table lists the Payloads and Canary values of all registered BOAST Servers. An entry is added each time you
register a new BOAST server.

#### Payload

The Payload is the address of an active BOAST server that can be used in out-of-band attacks.

#### Canary

The Canary value is a random string that is returned to the target web application when it makes a request to the
corresponding Payload address.

Consider an example of how this value could be used: if the target web application ends up using the canary value
somewhere, then it may be vulnerable to out-of-band injection attacks.

## See also

|   |                                                                 |   |
|---|-----------------------------------------------------------------|---|
|   | [BOAST Help](/docs/desktop/addons/oast-support/services/boast/) |   |
|   | [BOAST on GitHub](https://github.com/ciphermarco/BOAST)         |   |
