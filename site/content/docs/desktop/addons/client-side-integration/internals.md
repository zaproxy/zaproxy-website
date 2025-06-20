---
# This page was generated from the add-on.
title: Client Side Integration - Internals
type: userguide
weight: 8
---

# Client Side Integration - Internals

## Browser Extension

This [add-on](/docs/desktop/addons/client-side-integration/) depends on a [ZAP browser extension](https://github.com/zaproxy/browser-extension) which runs in Firefox and Chrome - if this extension is not present then this add-on will not be able to do anything.


The browser extension needs to be able to communicate with ZAP,
but it must do it in a secure way so that malicious targets cannot abuse the API end points that this add-on defines.
Passing configuration details to browser extensions can be tricky,
and so this is done in 2 different ways depending on how the browsers are launched.

## ZAP Browser Launch

If Firefox or Chrome are launched from ZAP with this add-on enabled then it automatically adds the ZAP browser extension. The add-on also opens a callback URL like:

```
http://zap/zapCallBackUrl/12345678901234567890
```

- this URL is regenerated every time ZAP is started and is considered safe as it is impractical for malicious targets to discover.


The browser extension detects URLs of this format in the context script
[index.ts](https://github.com/zaproxy/browser-extension/blob/main/source/ContentScript/index.ts)
and then uses this URL to pass data from the browser back to ZAP.

## Manual Browser Launch

If you launch Firefox or Chrome in any other way then you will need to install the browser extension yourself from:

* [Firefox Add-Ons](https://addons.mozilla.org/en-GB/firefox/addon/zap-browser-extension/)
* [Chrome Web Store](https://chrome.google.com/webstore/detail/zap-browser-extension/oeadiegekjdlhpooeidmimgnmbfllehp)

Once installed you will need to configure the ZAP browser extension manually. In Firefox or Chrome:


* Click the Extensions button
* Select the 'ZAP Browser Extension'
* Update the extension Preferences screen

You will need to configure:


* ZAP API URL: the default is

    ```
    http://zap/
    ```

    and should work in all cases, but you can also use the host and port ZAP is listening on, e.g.

    ```
    http://localhost:8080
    ```

* ZAP API Key: you can find this in the ZAP API Options screen
You can leave the ZAP API Key blank if you have turned off the API Key in ZAP, but this is only recommended in a safe environment where you trust the websites you will be accessing via ZAP.
