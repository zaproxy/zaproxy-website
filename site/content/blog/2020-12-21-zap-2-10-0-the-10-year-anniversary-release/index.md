---
title: "ZAP 2.10.0 - The 10 Year Anniversary Release"
description: "ZAP 2.10.0 Anniversary Release"
summary: "ZAP 2.10.0 has just been released so we're treating this as a belated 10 year anniversary release!"
images:
- https://www.zaproxy.org/blog/2020-12-21-zap-2-10-0-the-10-year-anniversary-release/images/2-10-0-loading.png
type: post
tags:
- blog
date: "2020-12-21"
addSocialPreview: true
authors:
 - simon
---

As you hopefully already know ZAP was released on [September 6th 2010](/blog/2020-09-06-zap-is-ten-years-old/).

ZAP 2.10.0 has just been released and is now available to download via the [Downloads](/download/) page so we're treating this as a belated 10 year anniversary release!

I've recorded a training video in which I go through many of the new features:

{{<youtube uuid="rrVr-_-y6Xo">}}

You will see that there is one demo that I was unable to run as I hit some issues. We investigated those and have now released fixes for them.
Luckily we were able to fix them in add-ons rather than the core - if they had been in the latter then we would have had to release ZAP 2.10.1!
So when you start using ZAP 2.10.0 make sure you [check for updates](/docs/desktop/start/features/marketplace/) and install any add-ons that have newer versions.

## The Changes

Some of the more significant enhancements in this release include:

### Custom Pages

[Custom Pages](/docs/desktop/start/features/custompages/) can be defined on a per context basis - 
these allow ZAP to identify various non-standard error handling conditions such as custom error pages and handle them more effectively.

### Authentication Polling

The concept of [Authentication Verification Strategies](/docs/desktop/start/features/authstrategies/) has been introduced which allows ZAP to handle
a wider range of authentication mechanisms including the option to poll a specified page for the authentication status of a user.

### Site Tree Control

Scripts and add-ons now have full access to how nodes are represented in the [Sites Tree](/docs/desktop/start/features/sitestree/).
Both [Input Vector Scripts](https://github.com/zaproxy/community-scripts/tree/main/variant/) and add-ons which include implementations of the 
[Variant](https://static.javadoc.io/org.zaproxy/zap/2.10.0/org/parosproxy/paros/core/scanner/Variant.html) class can change both the tree
structure and names used for new nodes.

For more details see the [Site Tree Modifiers](/blog/2020-09-22-sites-tree-modifiers/) Blog post.

### Dynamic Look and Feel including Dark Mode

The Desktop UI includes a new set of open source Look and Feel's c/o [FlatLaf](https://github.com/JFormDesigner/FlatLaf) including 2 Dark Mode options.

You can also dynamically switch the Look and Feel via a button on the [Top Level Toolbar](/docs/desktop/ui/tltoolbar/).

For more details of the dark mode see the [Dark Mode in the Weekly Release](/blog/2020-03-04-dark-mode-in-the-weekly-release/) Blog post.

### Authentication Headers via Env Vars

A new set of environmental variables are available which allow you to easily add an authentication header to all of the requests that are proxied through ZAP or initiated by the ZAP tools, including the spiders and active scanner.
These are documented on the [Authentication](/docs/desktop/start/features/authentication/#envvars) page.

### SOCKS Proxy Configuration
It is now possible to dynamically configure the outgoing SOCKS proxy in the [Options' Connection screen](/docs/desktop/ui/dialogs/options/connection/).
By default the SOCKS proxy configuration applies to all connections made by ZAP.

### Cached Scripts
The following script types are now cached between invocations reducing the time it takes to reuse them:

* Active Rules
* HTTP Sender
* Input Vectors, when used for the Sites tree
* Passive Rules
* Proxy

### New Add-Ons
The following add-ons are included by default in this release for the first time:

  * [Advanced Encode / Decode / Hash dialog](/docs/desktop/addons/encode-decode-hash/) - this replaces the old core encode/decode/hash dialog
  * [DOM XSS Scan Rule](/docs/desktop/addons/dom-xss-active-scan-rule/) - an Active Scan rule for detecting DOM XSS vulnerabilities
  * [Form Handler](/docs/desktop/addons/form-handler/) - allows for the custom configuration of values used in forms based on field names
  * [GraalVM JavaScript](/docs/desktop/addons/graalvm-javascript/) - included as Java 15+ no longer includes the Oracle Nashorn JavaScript engine
  * [GraphQL Support](/docs/desktop/addons/graphql-support/) - allows you to import and active scan GraphQL definitions
  * [Retire.js](/docs/desktop/addons/retire.js/) - a Passive Scan rule which implements checks provided by [Retire.js](https://retirejs.github.io/retire.js/) in order to identify vulnerable or out-dated JavaScript packages
  * [SOAP Support](/docs/desktop/addons/soap-support/) - allows you to import and active scan WSDL files containing SOAP endpoints

For the full set of changes, including changes to the Docker images, the updated add-ons, smaller enhancements and bug fixes see the [Release Notes](/docs/desktop/releases/2.10.0/).

A big thank you to everyone who has contributed to this release or has supported the ZAP project in any way!