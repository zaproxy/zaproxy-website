---
title: "ZAP Browser Extension Integration"
description: "How you can create an add-on which automatically adds your browser extension to the browsers ZAP launches."
tags:
- guide
- tutorial
type: page
---

## Using Browser Extensions in ZAP

If you just want to get ZAP to inject one or more browser extensions in any of the browsers that ZAP launches then 
you can do that via the [Selenium Options Screen](/docs/desktop/addons/selenium/options/#browser-extensions).

## Creating a ZAP Add-on for your Browser Extension

If you would like to make it easier for all ZAP users to use your browser extension then 
you can create a ZAP add-on wrapping your extension and submit that to the [ZAP Marketplace](/addons/).

To register your add-on with ZAP then all you need to do is to include the extension in the directory:

* src / main / zapHomeFiles / selenium

See the [evalvillain](https://github.com/zaproxy/zap-extensions/tree/main/addOns/evalvillain/src/main/zapHomeFiles/selenium/extensions) add-on as an example.

Note that you should create a new repo as per the [How to Publish a ZAP Add-on](/docs/guides/how-to-publish-a-zap-addon/) guide.

You will also need to add Chrome / Edge extensions unpacked.

## Communicating with ZAP

If your browser extension needs to communicate back to ZAP then there are 3 options, only 2 of which are actually supported:

* ZAP Pluggable Browser Extension Integration
* Roll Your Own Integration
* Accessing the ZAP API Directly (Unsupported)

In theory browser extensions can just call the ZAP API.

The problem is that the ZAP API is extremely powerful, and if a malicious web app is able to access the ZAP API then it effectively gives RCE on the machine running ZAP!

For this reason this is the unsupported option, and add-ons that use this option will not be permitted in the ZAP Marketplace.

The remaining 2 supported options are:

### ZAP Pluggable Browser Extension Integration

The ZAP client add-on already communicates securely with ZAP, and the add-on now allows other add-ons to piggyback onto this mechanism.

#### ZAP Add-on Requirements

In order to do that your add-on will need to depend on the client add-on.
This can be achieved by adding the following dependency to your add-on's “register” section in the `<addon-id>.gradle.kts` file:
```
dependencies {
    addOns {
        register("client") {
            version.set(">=0.21.0")
        }
    }
}
```
You may need to update the version of the client add-on if you need any features added after this guide was written.

When your add-on starts then it will need to register with the client add-on, using code like this in the extension `hook(ExtensionHook extensionHook)` method:

```
Control.getSingleton().getExtensionLoader().
    getExtension(ExtensionClient.class).
    registerClientCallBack(callbackImplementor);
```

Your add-on will need to provide an object which implements the interface:
* [org.zaproxy.addon.client.ClientCallbackImplementor](https://github.com/zaproxy/zap-extensions/blob/main/addOns/client/src/main/java/org/zaproxy/addon/client/ClientCallbackImplementor.java)

The `getImplementorName()` method should return the name of your add-on.

When your browser extension sends data to the client add-on then the `handleCallBack` method will be called, and you can then do what you need to do with the request.

#### Browser Extension Requirements
When ZAP launches browsers with the [ZAP browser extension](/docs/desktop/addons/client-side-integration/#browser-extensions) it redirects the browsers to the `https://zap` domain using a URL like:
* `https://zap/zapCallBackUrl/2112441882306487418?zapenable=true`

This URL uses the ZAP callback mechanism.

Any add-on can register a callback, and the calllbacks include a random element which cannot be guessed by malicious web apps.

Browser extensions can then use this callback URL to send data to ZAP, as detailed below.
The browser extensions must keep this URL secret and not expose it to any target web apps.

Data can be sent to the callback via the same callback URL with the path set to the name of your add-on, which must be the same string that you return via `ClientCallBackImplementor.getImplementorName()`.

For example, with the callback URL given above and an add-on name as “testapp” you need to use the url:
* `https://zap/zapCallBackUrl/2112441882306487418/testapp`

You can now send any data you like from your browser extension and process it in your ZAP add-on.

#### WebSockets Support

If you need to send data from your ZAP add-on to your browser extension then we recommend using WebSockets.

Once your browser extension has obtained details of the callback URL, it can set up a WebSocket directly with your add-on.

For more information about this option contact us via the [ZAP Developer Group](https://groups.google.com/group/zaproxy-develop).

### Roll Your Own Integration

You are also allowed to set up your own proprietary mechanism for communicating between your browser extension and ZAP.

If you do this then you must ensure that it cannot be abused by malicious web apps.
Your mechanism must also only give access to the ZAP functionality that you need, and no more.

You must also document how it works, including how secrets are shared.

The implementation will be reviewed by the ZAP team when you submit it to the ZAP Marketplace.
