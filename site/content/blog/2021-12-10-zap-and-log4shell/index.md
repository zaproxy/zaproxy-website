---
title: "ZAP and Log4Shell"
summary: >
  ZAP appears to be impacted by the Log4Shell vulnerability - CVE-2021-44228.
  This blog post details our initial advice and the ongoing investigations we are making.
type: post
tags:
- blog
date: "2021-12-10"
authors: 
    - simon
---
## Overview
A vulnerability has been found in Log4j which can result in Remote Code Execution (RCE):
[CVE-2021-44228](https://www.lunasec.io/docs/blog/log4j-zero-day/) also known as [Log4Shell](https://www.randori.com/blog/cve-2021-44228/).

ZAP 2.11.0 and the previous weekly and dev versions of ZAP use Log4j 2.14.1 which is known to be vulnerable.

This blog post details our initial advice and the ongoing investigations we are making.

## Initial Advice

First the good news - ZAP does __not__ typically log strings that could be used to exploit this vulnerability out of the box,
so the exposure to this vulnerability should be limited.

If you have not changed the default ZAP Log4j settings and have not exposed the ZAP API to untrusted addresses (which we do not advise) 
then at this stage we believe that you will not be vulnerable.

In particular if you are running ZAP in a container like Docker and have not exposed the ZAP API outside of the container then you 
should be fine.

However we do recommend that you:

* Do not expose the ZAP API to untrusted addresses
* Do not run ZAP with debug logging on, unless you are only testing trusted websites
* Turn logging off, just to be safe

To turn ZAP logging off see the FAQ: [How do you configure ZAP logging?](https://www.zaproxy.org/faq/how-do-you-configure-zap-logging/)
and change all logging levels to "off" e.g.
```
rootLogger.level = off

logger.paros.level = off

logger.zap.level = off
```

## Patching

We are working on patching and releasing new versions of ZAP and will update this blog as soon as those versions are available.

The ZAP core has been [patched](https://github.com/zaproxy/zaproxy/pull/6965) and we can confirm that it is not vulnerable to this vulnerability.

The Live and Weekly docker releases have also now been updated.

We are in the process of generating and releasing ZAP 2.11.1.

## Ongoing Investigations

We are continuing our investigations and will update this blog as soon as we have more information to share.
