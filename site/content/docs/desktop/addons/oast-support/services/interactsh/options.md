---
# This page was generated from the add-on.
title: Interactsh Options
type: userguide
weight: 1
---

# Interactsh Options


The Interactsh Options screen allows you to configure the settings that affect how ZAP interacts with Interactsh.

### Server URL

This address should point to the URL that will be used for registrations and polling.

A valid URI will include at least the scheme and the host. The host must be running a working instance of
Interactsh.

An example of a valid URI is: `https://interact.sh`.

### Authorization Token

A value for this token must be specified if the Interactsh server at the specified Server URL requires
authentication. This token is added as the Authorization header value to all requests made to the server.

### Polling Frequency

This option allows you to change the frequency of polling Interactsh. It takes values in seconds. The minimum allowed
value is 10 seconds and the maximum is 21600 seconds (6 hours). The default value is 60 seconds.

### Active Payloads

This table lists all the generated Payloads and corresponding Canary values. An entry is added each time you create a
new payload. The 'New Payload' Button is disabled if you change the Server URL and/or the Authorization Token.
To create new payloads in that case either revert the changes or save the settings and reopen the options screen.

#### Payload

The Payload is the address that can be used in out-of-band attacks.

#### Canary

The Canary value is a string that is returned to the target web application when it makes a request to the
corresponding Payload address. It is obtained by reversing the subdomain in the Payload.

A web application that ends up using the canary value somewhere may be susceptible to injection attacks.

## See also

|   |                                                                           |   |
|---|---------------------------------------------------------------------------|---|
|   | [Interactsh Help](/docs/desktop/addons/oast-support/services/interactsh/) |   |
|   | [Interactsh on GitHub](https://github.com/projectdiscovery/interactsh)    |   |
