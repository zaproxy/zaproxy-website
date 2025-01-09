---
# This page was generated from the add-on.
title: Callback Options
type: userguide
weight: 1
---

# Callback Options


The Callback Options screen allows you to configure the address used to detect vulnerabilities that allow an
attacker to call remote URLs.  

In previous versions the ZAP API was used for this purpose, but from 2.6.0 onwards a separate endpoint is used so
that target systems no longer need access to the API.

### Local Address (e.g. 0.0.0.0)

The local address that ZAP will listen on for incoming connections. The default value of '0.0.0.0' means that ZAP will listen on all available local addresses.

### Remote Address

The address that will be specified in the relevant attacks. This address must be accessible from the target system. You can use the Test URL to check that this is the case.

### Random Port

By default ZAP will use a different port each time it is run. If you need to use the same port (for example to allow access through firewalls) then uncheck this option.

### Specify Port

If the Random Port option is unchecked then this is the port that ZAP will listen on. It must be different to the other ports ZAP uses, for example the port it uses for proxying connections.

### Test URL

This is the test URL that you can try to access from remote systems. All accesses to the Test URL will be recorded in the ZAP log file at INFO level. If you are using the ZAP UI then accesses will also be shown in the Output tab, as well as the [OAST tab](/docs/desktop/addons/oast-support/tab/).

## See also

|   |                                                    |   |
|---|----------------------------------------------------|---|
|   | [OAST Tab](/docs/desktop/addons/oast-support/tab/) |   |
