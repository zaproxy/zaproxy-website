---
# This page was generated from the add-on.
title: Options Connection screen
type: userguide
weight: 10
---

# Options Connection screen

The Options Connection screen allows you to configure the ZAP connection options:

### Timeout (in seconds)

This makes is easier to test slow applications.

### Default User Agent

The user agent that ZAP should use when creating HTTP messages (for example, spider messages or CONNECT requests to outgoing proxy).

### Single Cookie Request Header

Controls whether the ZAP's managed cookies (Enable (Global) HTTP State) should be set on a single "Cookie" request header or multiple "Cookie" request headers, when sending an HTTP request to the server.

### Enable (Global) HTTP State

This allows session details stored in cookies to be tracked.  
This option must be selected to enable the "Use current tracking session" checkbox in the [Manual Request Editor dialogs](/docs/desktop/ui/dialogs/man_req/).  
Session tracking ensures that any requests are sent with the latest session details.  
For example you may record a session when logged in as one user and then logout and login as another user.  
If you resend a request from the first session without session tracking then it will use the cookies from the first session.  
If you resend the same request with session tracking then it will use the cookies from the second session.

### DNS

#### TTL Successful Queries

Defines for how long the successful DNS queries should be cached:

* Negative number, cache forever;
* Zero, disables caching;
* Positive number, the number of seconds the queries will be cached.

**Note:** Changes are applied after a restart.

The option can also be set using the `-config` command line argument with the key `connection.dnsTtlSuccessfulQueries`.

### Security Protocols

Allows to choose the SSL/TLS versions enabled for outgoing connections (for example, to servers). At least one version must be enabled, versions unsupported by the JRE will be unselected and disabled.   
The option SSLv2Hello must be selected in conjunction with at least one SSL/TLS version.

### Use Proxy Chain

This section allows you to connect to another proxy for outgoing connections.  
This is often required in a corporate environment.

### Proxy Authentication

This section allows you to configure the outgoing proxy authentication.

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
|   | [Command Line](/docs/desktop/cmdline/)               | for details of the Command Line                 |
