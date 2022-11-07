---
# This page was generated from the add-on.
title: Network API
type: userguide
weight: 1
---

# Network API

The following operations are added to the API:

### Actions

* addAlias (name\* enabled): Adds an alias for the local servers/proxies.
    * name: The name of the alias.
    * enabled: The enabled state, true or false.
* addHttpProxyExclusion (host\* enabled): Adds a host to be excluded from the HTTP proxy.
    * host: The value of the host, a regular expression.
    * enabled: The enabled state, true or false.
* addLocalServer (address\* port\* api proxy behindNat decodeResponse removeAcceptEncoding): Adds a local server/proxy.
    * address: The address of the local server/proxy.
    * port: The port of the local server/proxy.
    * api: If the ZAP API is available, true or false.
    * proxy: If the local server should proxy, true or false.
    * behindNat: If the local server is behind NAT, true or false.
    * decodeResponse: If the response should be decoded, true or false.
    * removeAcceptEncoding: If the request header Accept-Encoding should be removed, true or false.
* addPassThrough (authority\* enabled): Adds an authority to pass-through the local proxies.
    * authority: The value of the authority, can be a regular expression.
    * enabled: The enabled state, true or false.
* addPkcs12ClientCertificate (filePath\* password\* index): Adds a client certificate contained in a PKCS#12 file, the certificate is automatically set as active and used.
    * filePath: The file path.
    * password: The password for the file.
    * index: The index of the certificate in the file, defaults to 0.
* generateRootCaCert: Generates a new Root CA certificate, used to issue server certificates.
* importRootCaCert (filePath\*): Imports a Root CA certificate to be used to issue server certificates.
    * filePath: The file system path to the PEM file, containing the certificate and private key.
* removeAlias (name\*): Removes an alias.
    * name: The name of the alias.
* removeHttpProxyExclusion (host\*): Removes an HTTP proxy exclusion.
    * host: The value of the host.
* removeLocalServer (address\* port\*): Removes a local server/proxy.
    * address: The address of the local server/proxy.
    * port: The port of the local server/proxy.
* removePassThrough (authority\*): Removes a pass-through.
    * authority: The value of the authority.
* setAliasEnabled (name\* enabled): Sets whether or not an alias is enabled.
    * name: The name of the alias.
    * enabled: The enabled state, true or false.
* setConnectionTimeout (timeout\*): Sets the timeout, for reads and connects.
    * timeout: The timeout, in seconds.
* setDefaultUserAgent (userAgent\*): Sets the default user-agent.
    * userAgent: The default user-agent.
* setDnsTtlSuccessfulQueries (ttl\*): Sets the TTL of successful DNS queries.
    * ttl: The TTL, in seconds. Negative number, cache forever. Zero, disables caching. Positive number, the number of seconds the successful DNS queries will be cached.
* setHttpProxy (host\* port\* realm username password): Sets the HTTP proxy configuration.
    * host: The host, name or address.
    * port: The port.
    * realm: The authentication realm.
    * username: The user name.
    * password: The password.
* setHttpProxyAuthEnabled (enabled\*): Sets whether or not the HTTP proxy authentication is enabled.
    * enabled: The enabled state, true or false.
* setHttpProxyEnabled (enabled\*): Sets whether or not the HTTP proxy is enabled.
    * enabled: The enabled state, true or false.
* setHttpProxyExclusionEnabled (host\* enabled\*): Sets whether or not an HTTP proxy exclusion is enabled.
    * host: The value of the host.
    * enabled: The enabled state, true or false.
* setPassThroughEnabled (authority\* enabled): Sets whether or not a pass-through is enabled.
    * authority: The value of the authority.
    * enabled: The enabled state, true or false.
* setRootCaCertValidity (validity\*): Sets the Root CA certificate validity. Used when generating a new Root CA certificate.
    * validity: The number of days that the generated Root CA certificate will be valid for.
* setServerCertValidity (validity\*): Sets the server certificate validity. Used when generating server certificates.
    * validity: The number of days that the generated server certificates will be valid for.
* setSocksProxy (host\* port\* version useDns username password): Sets the SOCKS proxy configuration.
    * host: The host, name or address.
    * port: The port.
    * version: The SOCKS version.
    * useDns: If the names should be resolved by the SOCKS proxy, true or false.
    * username: The user name.
    * password: The password.
* setSocksProxyEnabled (enabled\*): Sets whether or not the SOCKS proxy is enabled.
    * enabled: The enabled state, true or false.
* setUseClientCertificate (use\*): Sets whether or not to use the active client certificate.
    * use: The use state, true or false.
* setUseGlobalHttpState (use\*): Sets whether or not to use the global HTTP state.
    * use: The use state, true or false.

### Views

* getAliases: Gets the aliases used to identify the local servers/proxies.
* getConnectionTimeout: Gets the connection timeout, in seconds.
* getDefaultUserAgent: Gets the default user-agent.
* getDnsTtlSuccessfulQueries: Gets the TTL (in seconds) of successful DNS queries.
* getHttpProxy: Gets the HTTP proxy.
* getHttpProxyExclusions: Gets the HTTP proxy exclusions.
* getLocalServers: Gets the local servers/proxies.
* getPassThroughs: Gets the authorities that will pass-through the local proxies.
* getRootCaCertValidity: Gets the Root CA certificate validity, in days. Used when generating a new Root CA certificate.
* getServerCertValidity: Gets the server certificate validity, in days. Used when generating server certificates.
* getSocksProxy: Gets the SOCKS proxy.
* isHttpProxyAuthEnabled: Tells whether or not the HTTP proxy authentication is enabled.
* isHttpProxyEnabled: Tells whether or not the HTTP proxy is enabled.
* isSocksProxyEnabled: Tells whether or not the SOCKS proxy is enabled.
* isUseGlobalHttpState: Tells whether or not to use global HTTP state.

### Other

* proxy.pac: Provides a PAC file, proxying through the main proxy.
* rootCaCert: Gets the Root CA certificate used to issue server certificates. Suitable to import into client applications (e.g. browsers).
* setProxy (proxy\*): Sets the HTTP proxy configuration.
    * proxy: The JSON object containing the HTTP proxy configuration.

### Shortcuts

* proxy.pac: Provides a PAC file, proxying through the main proxy.
* setproxy: Sets the HTTP proxy configuration.
    * Request body: The JSON object containing the HTTP proxy configuration.

## See also

|   |                                          |                                    |
|---|------------------------------------------|------------------------------------|
|   | [Network](/docs/desktop/addons/network/) | the introduction to Network add-on |
