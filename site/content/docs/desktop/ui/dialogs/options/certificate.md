---
# This page was generated from the add-on.
title: Options Client Certificate screen
type: userguide
weight: 7
---

# Options Client Certificate screen

The Client Certificate screen allows you to add a client certificate for ZAP to use when testing applications
protected using mutual SSL. Currently supported ways to utilize certificates are PKCS12 and PKCS11.

## Using PKCS12

It is possible to set the Client Certificate from the command line with the following switches:

```
-config certificate.use=true
-config certificate.pkcs12.path=/path/to/file.p12
-config certificate.pkcs12.password=WhateverThePasswordIs
-config certificate.pkcs12.index=1
-config certificate.persist=true
```

`-config certificate.pkcs12.index` is only necessary if the file contains multiple certificates
and you wish to use one other than the first. Index values start at zero (0) which is the first certificate
in the file.  

`-config certificate.persist=true` is only necessary if you would like the settings persisted in ZAP's regular
configuration file (so that they apply for subsequent ZAP use).

## Using PKCS11

PKCS11 is one of the Public-Key Cryptography Standards. Usually PKCS11 is used with Hardware Tokens (mostly USB style)
that store the cryptographic material in a secure way. Thus usually a driver is needed. The drivers are most commonly provided
by the Issuer of the Certificate stored on the token or the provider of the token. Certain tokens (especially if running
under Linux) are supported by opensc/libccid combination.

It is possible to set the Client Certificate from the command line with the following switches:

```
-config certificate.use=true
-config certificate.experimentalSlotListIndex=true
```


Setting PKCS11 Driver, Pin, and active certificate is not possible from the command line for the moment. Using `certificate.experimentalSlotListIndex=true` is only required for some cards. If without does not work try adding it.


## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
|   | [Command Line](/docs/desktop/cmdline/)               | for details of the Command Line                 |
