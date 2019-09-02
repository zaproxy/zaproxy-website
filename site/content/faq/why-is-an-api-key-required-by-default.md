---
title: "Why is an API key required by default?"
type: faq
category: API
---

Since version 2.4.1 ZAP has required an API key by default in order to invoke
API operations that make changes to ZAP. Since version 2.6.0 an API key is
required by default in order to invoke any of the API operations. This is a
security feature to prevent malicious sites from invoking the ZAP API. ZAP
Version 2.6.0 also introduced additional security options. All of the API
security options, including the API key, can be found in the [API Options
screen](https://github.com/zaproxy/zap-core-
help/wiki/HelpUiDialogsOptionsApi).

You can also set the API key from the command line using an option like:

    
    
    -config api.key=change-me-9203935709

This is not recommended unless you are using ZAP in a completely isolated
environment, as it allows malicious sites to access the ZAP API. However, you
can disable it via the UI or via the command line option:

    
    
    -config api.disablekey=true

By default ZAP will now also only allow connections from the local machine. To
connect to ZAP remotely see the FAQ: [How can I connect to ZAP
remotely?](faq/how-can-i-connect-to-zap-remotely/)
