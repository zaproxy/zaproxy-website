---
# This page was generated from the add-on.
title: Network API
type: userguide
weight: 1
---

# Network API

The following operations are added to the API:

### Actions

* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    addAlias (name\* enabled): Adds an alias for the local servers/proxies.
    * name: The name of the alias.
    * enabled: The enabled state, true or false.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    addPassThrough (authority\* enabled): Adds an authority to pass-through the local proxies.
    * authority: The value of the authority, can be a regular expression.
    * enabled: The enabled state, true or false.
* generateRootCaCert: Generates a new Root CA certificate, used to issue server certificates.
* importRootCaCert (filePath\*): Imports a Root CA certificate to be used to issue server certificates.
    * filePath: The file system path to the PEM file, containing the certificate and private key.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    removeAlias (name\*): Removes an alias.
    * name: The name of the alias.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    removePassThrough (authority\*): Removes a pass-through.
    * authority: The value of the authority.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    setAliasEnabled (name\* enabled): Sets whether or not an alias is enabled.
    * name: The name of the alias.
    * enabled: The enabled state, true or false.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    setPassThroughEnabled (authority\* enabled): Sets whether or not a pass-through is enabled.
    * authority: The value of the authority.
    * enabled: The enabled state, true or false.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    setRootCaCertValidity (validity\*): Sets the Root CA certificate validity. Used when generating a new Root CA certificate.
    * validity: The number of days that the generated Root CA certificate will be valid for.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    setServerCertValidity (validity\*): Sets the server certificate validity. Used when generating server certificates.
    * validity: The number of days that the generated server certificates will be valid for.

### Views

**Note:** These endpoints are only available in weekly releases and versions after 2.11.

* getAliases: Gets the aliases used to identify the local servers/proxies.
* getPassThroughs: Gets the authorities that will pass-through the local proxies.
* getRootCaCertValidity: Gets the Root CA certificate validity, in days. Used when generating a new Root CA certificate.
* getServerCertValidity: Gets the server certificate validity, in days. Used when generating server certificates.

### Other

* rootCaCert: Gets the Root CA certificate used to issue server certificates. Suitable to import into client applications (e.g. browsers).

## See also

|   |                                          |                                    |
|---|------------------------------------------|------------------------------------|
|   | [Network](/docs/desktop/addons/network/) | the introduction to Network add-on |
