---
title: "ZAP and Log4Shell"
summary: >
  ZAP appears to be impacted by the Log4Shell vulnerability - CVE-2021-44228.
  We have released ZAP 2.11.1 which fixes the problem, this blog post gives more information and the impact on older versions of ZAP.
type: post
tags:
- blog
- advisory
- log4shell
date: "2021-12-10"
authors: 
    - simon
---
## Overview

A vulnerability has been found in Log4j which can result in Remote Code Execution (RCE):
[CVE-2021-44228](https://www.lunasec.io/docs/blog/log4j-zero-day/) also known as [Log4Shell](https://www.randori.com/blog/cve-2021-44228/).

ZAP 2.11.0 and the previous weekly and dev versions of ZAP use Log4j 2.14.1 which is known to be vulnerable. There may well be ways to abuse ZAP versions <=2.11.0 that we have not yet discovered or anticipated, please upgrade at your earliest opportunity.

## ZAP 2.11.1

ZAP 2.11.1 has been released. This upgrades to use a non-vulnerable version of the Log4J library.

We strongly recommend that all users [upgrade](/download/) to this release ASAP.

All of the packages maintained by the core team have been updated and we have notified all of the 
[3rd Party Package Maintainers](/3rd-party-package-maintenance/) that we are aware of.

## Updated Advice for Older Versions

First the good news - ZAP does __not typically__ log strings that could be used to exploit this vulnerability out of the box,
so the exposure to this vulnerability __should__ be limited.

If you have not changed the default ZAP Log4j settings and have not exposed the ZAP API to untrusted addresses (which we do not advise) 
then at this stage we believe that you will not be vulnerable.

In particular if you are running ZAP in a container like Docker and have not exposed the ZAP API outside of the container then you 
should be fine.

If you cannot update to 2.11.1 right now then we do recommend that you:

* Do not expose the ZAP API to untrusted addresses
* Do not run ZAP with debug logging on, unless you are only testing trusted websites
* Turn logging off, just to be safe

To turn ZAP logging off see the FAQ: [How do you configure ZAP logging?](https://www.zaproxy.org/faq/how-do-you-configure-zap-logging/)
and change all logging levels to "off" e.g.

```text
rootLogger.level = off

logger.paros.level = off

logger.zap.level = off
```
