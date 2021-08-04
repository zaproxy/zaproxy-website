---
# This page was generated from the add-on.
title: BOAST
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

### ID

A non-editable field that is filled in when you register with a BOAST instance.

This ID can be used to craft an address that can be specified in relevant attacks.

For example, if an ID is `cxcjyaf5wahkidrp2zvhxe6ola`, and the Server URI host is `example.com`,
then the payload URI host will be `cxcjyaf5wahkidrp2zvhxe6ola.example.com`.

### Canary

The Canary value is a random string that is returned to the target web application when it makes a request to the
registered BOAST server.

Consider an example of how this value could be used: if the target web application ends up using the canary value
somewhere, then it may be vulnerable to out of band injection attacks.

### Other Configuration Options

By default, ZAP polls all the registered BOAST servers once per minute. This setting will be made configurable in
future versions of this add-on.

Along with the *Polling Frequency* setting, there is also a plan to introduce a *Registered Servers*
panel that will display all registered BOAST servers.


## See also

|   |                                                                 |   |
|---|-----------------------------------------------------------------|---|
|   | [BOAST Help](/docs/desktop/addons/oast-support/services/boast/) |   |
|   | [BOAST on GitHub](https://github.com/marcoagner/boast)          |   |
