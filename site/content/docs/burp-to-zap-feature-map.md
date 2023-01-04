---
title: Burp to ZAP Feature Map
type: page
EditableContent: true
addSocialPreview: true
images:
- https://www.zaproxy.org/img/burp2zap.png
---

![ZAP to Burp](/img/burp2zap.png)

Burp Suite is a popular commercial web app pentesting tool.
It provides a free (closed source) Community edition and a paid for Professional edition.
Many people are unaware that ZAP provides most of the features available in both the Professional and Community editions of Burp.

It should be noted that ZAP is not intended to be a Burp clone and as such has a different way of working.
ZAP and Burp features may well not provide exactly the same functionality - 
in some cases Burp may provide more options but in other cases ZAP may exceed Burp's capabilities. 

An ongoing series of blog posts show how to use ZAP to solve some of the [PortSwigger labs](/tags/portswigger-lab/).

### Feature Map

A mapping from Burp features to their ZAP equivalents.
All Burp features are available in the Professional edition but some features are not available in the Community edition, or are throttled like the Intruder.

{{< burp2zap >}}

### ZAP Missing Features

The following significant features are available in Burp but currently not in ZAP:

* HTTP Host Header manipulation
  * due to limitations in the current ZAP networking stack it was not possible to manipulate some part of the HTTP header
    * __Update:__ this is now possible programmatically but not in the desktop UI - this is being worked on so this restriction will be removed
* HTTP/2 Support
  * __Update:__ this is now supported in the weekly / development versions

### Burp Missing Features

The following significant features are available in ZAP but currently not in Burp:

* [Automation Framework](/docs/automate/automation-framework/)
* [The Heads Up Display (HUD)](https://github.com/zaproxy/zap-hud)
