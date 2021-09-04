---
# This page was generated from the add-on.
title: Options Client Certificate screen
type: userguide
weight: 8
---

# Options Client Certificate screen

The Client Certificate screen allows you to add a client certificate for ZAP to use when testing applications
protected using mutual SSL.
It is also possible to set the Client Certificate from the command line with the following switches:

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

## See also

|     |                                                      |                                                 |
| --- | ---------------------------------------------------- | ----------------------------------------------- |
|     | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|     | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
|     | [Command Line](/docs/desktop/cmdline/)               | for details of the Command Line                 |
