---
title: "How can you import POST requests?"
type: faq
category: Howtos
weight: 4
---

GET requests can be easily imported into ZAP using the "Import URLs" option which is included in ZAP by default. 
However this only supports GET requests.

If you need to import POST requests, or requests using other HTTP methods like PUT and DELETE, then you have a selection of options:

### Import HAR (HTTP Archive File)

The same add-on which provides the "Import URLs" option, the [Import/Export](/docs/desktop/addons/import-export/) 
add-on also provides an option to import HAR files. This format supports all of the HTTP methods, including POST, PUT etc.

### Import API Definition

If you have an API definition then you may well be able to import that as per the FAQ:
[How can you use ZAP to scan APIs?](/faq/how-can-you-use-zap-to-scan-apis/).

If ZAP does not currently support your API format then let us know via the [User Group](https://groups.google.com/group/zaproxy-users).

### Import Logs

The [Import/Export](/docs/desktop/addons/import-export/) add-on also provides an option to import ModSecurity logs
and files previously exported from ZAP.

### Proxy Your Tests

Proxying unit tests through ZAP is an ideal way to effectively import all of the requests made by your tests, and hopefully includes
suitable test data.

### Proxy Another Tool

Any tool that supports proxying can be used to effectively import requests into ZAP, 
all you need to do is to configure that tool to proxy via ZAP and then to configure it to make the requests you want.

[curl](https://curl.se/) is a popular tool which is ideal for this purpose and it installed on most systems.

On *nix systems you can proxy a POST request from curl through ZAP using a command like:

```bash
export http_proxy=http://localhost:8080/
export https_proxy=http://localhost:8080/

curl -k -X POST -H "Content-Type: application/json" \
    -d '{"name": "ZAP", "reason": "test"}' \
    https://www.example.com
``` 

You may need to change details such as the ZAP port for your environment.

The `-k` option for curl is important - this tells curl to ignore certificate warnings, which is easier than importing the ZAP root CA certificate.
For other curl options see the curl documentation.
