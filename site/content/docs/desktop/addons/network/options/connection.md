---
# This page was generated from the add-on.
title: Connection
type: userguide
weight: 2
---

# Connection

## General

This tab allows you to configure the general connection options.

### Timeout (in seconds)

Allows to configure the connection and read timeout, a higher timeout allows to test slower applications.   
Default: `20`.

### Default User Agent

The user agent that should be used when creating HTTP messages (for example, spider messages or CONNECT requests to the HTTP proxy).

### Use Global HTTP State

Allows the usage of a global HTTP state, to keep track of cookies and HTTP authentication.  
This option must be selected to enable the "Use current tracking session" option in the Manual Request Editor dialogs.  
Session tracking ensures that any requests are sent with the latest session details.  
For example you may record a session when logged in as one user and then logout and login as another user.  
If you resend a request from the first session without session tracking then it will use the cookies from the first session.  
If you resend the same request with session tracking then it will use the cookies from the second session.   
Default: `unselected`.

### DNS

#### TTL Successful Queries (in seconds)

Defines for how long the successful DNS queries should be cached:

* Negative number, cache forever;
* Zero, disables caching;
* Positive number, the number of seconds the queries will be cached.


Default: `30`.   
**Note:** Changes are applied after a restart.

### Security Protocols

Allows to choose the SSL/TLS versions enabled for outgoing connections (for example, to servers). At least one version must be enabled, versions unsupported by the JRE will be unselected and disabled.   
The option SSLv2Hello must be selected in conjunction with at least one SSL/TLS version.   
Default: All protocols supported.

### Enable unsafe SSL/TLS renegotiation

Allows unsafe SSL/TLS renegotiations ([CVE-2009-3555](https://nvd.nist.gov/vuln/detail/CVE-2009-3555)) for compatibility with older servers.  
**Note:** The option must be set before establishing any HTTPS connection, a ZAP restart might be required.   
Default: `unselected`.

## HTTP Proxy

This tab allows you to configure an outgoing HTTP proxy. This is often required in a corporate environment.

### Enabled

Enables the usage of the configured HTTP proxy.   
Default: `unselected`.

### Host

The host name or address of the HTTP proxy.   
Default: `localhost`.

### Port

The port of the HTTP proxy.   
Default: `8090`.

### Authenticate

Enables the usage of the authentication credentials, to authenticate to the HTTP proxy.

### Realm

The authentication realm.   
Default: none.

### User Name

The user name. It is required.   
Default: none.

### Password

The password.   
Default: none.   
**Note:** Stored in clear text in the configuration file, if allowed.

### Store Password

Allows to store the password in the configuration file. If not allowed ZAP prompts for the password during start up, it can still be changed in this panel.   
Default: `selected`.

### Exclusions

The hosts that should be excluded from the HTTP proxy. The `host` is a regular expression matched against the requested host name.

## SOCKS Proxy

This tab allows you to configure an outgoing SOCKS proxy, by default the SOCKS proxy configuration applies to all connections made by ZAP, taking precedence over the HTTP proxy.


The SOCKS proxy system properties (e.g. `socksProxyHost`, `socksProxyPort`) take precedence over the persisted
configurations for compatibility with older ZAP versions. ZAP will use and display the values of the system's properties when defined at
startup, the configurations can still be changed in this panel.

**Note:** Loopback addresses (e.g. `localhost`, `127.0.01`, `::1`) are not proxied through
the SOCKS proxy, the connections will be done directly.

### Enabled

Enables the usage of the configured SOCKS proxy.   
Default: `unselected`, unless the SOCKS proxy system properties are defined, in which case it is `selected`.

### Host

The host name or address of the SOCKS proxy.   
Default: `localhost`.

### Port

The port of the SOCKS proxy.   
Default: `1080`.

### Version

The version of the SOCKS proxy.   
Default: `5`.

### Use SOCKS' DNS

If the host names should be resolved by the SOCKS proxy. Requires a version 5 SOCKS proxy.   
This might lead to connection failures if the SOCKS proxy is not able to resolve the host name (e.g. use of names that are defined in a `hosts` file).   
Default: `selected`.

### Authentication

The following fields allow to configure the authentication credentials for the SOCKS proxy.

#### User Name

The user name.   
Default: none.

#### Password

The password.   
Default: none.   
**Note:** Stored in clear text in the configuration file.

## See also

|   |                                          |                                    |
|---|------------------------------------------|------------------------------------|
|   | [Network](/docs/desktop/addons/network/) | the introduction to Network add-on |
