---
# This page was generated from the add-on.
title: Network API
type: userguide
weight: 1
---

# Network API

The following operations are added to the API:

### Actions

* generateRootCaCert: Generates a new Root CA certificate, used to issue server certificates.
* importRootCaCert (filePath\*): Imports a Root CA certificate to be used to issue server certificates.
    * filePath: The file system path to the PEM file, containing the certificate and private key.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    setRootCaCertValidity (validity\*): Sets the Root CA certificate validity. Used when generating a new Root CA certificate.
    * validity: The number of days that the generated Root CA certificate will be valid for.
* **Note:** This endpoint is only available in weekly releases and versions after 2.11.   
    setServerCertValidity (validity\*): Sets the server certificate validity. Used when generating server certificates.
    * validity: The number of days that the generated server certificates will be valid for.

### Views

**Note:** These endpoints are only available in weekly releases and versions after 2.11.

* getRootCaCertValidity: Gets the Root CA certificate validity, in days. Used when generating a new Root CA certificate.
* getServerCertValidity: Gets the server certificate validity, in days. Used when generating server certificates.

### Other

* rootCaCert: Gets the Root CA certificate used to issue server certificates. Suitable to import into client applications (e.g. browsers).

## See also

|   |                                          |                                    |
|---|------------------------------------------|------------------------------------|
|   | [Network](/docs/desktop/addons/network/) | the introduction to Network add-on |
