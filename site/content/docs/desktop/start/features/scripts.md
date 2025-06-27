---
# This page was generated from the add-on.
title: Scripts
type: userguide
weight: 22
---

# Scripts


ZAP supports scripts that can be embedded within ZAP and can access internal ZAP data structures and classes.
These scripts allow you to dynamically enhance ZAP from within ZAP.


ZAP supports any scripting language that supports [JSR 223](https://www.jcp.org/en/jsr/detail?id=223), including:

* ECMAScript / JavaScript (through the [GraalVM JavaScript add-on](/docs/desktop/addons/graalvm-javascript/))
* [Zest](/docs/desktop/addons/zest/)
* Groovy <https://groovy-lang.org/>
* Kotlin <https://kotlinlang.org/>
* Python <https://www.jython.org>
* Ruby - <https://jruby.org/>
* and many more...

**WARNING - scripts run with the same permissions as ZAP, so do not run any scripts that you do not trust!**

## Script Types

Different types of scripts are supported:

* Active Rules - these run as part of the Active Scanner and can be individually enabled
* Authentication - scripts that are invoked when authentication is performed for a Context. To be used, they need to be selected when configuring the Script-Based Authentication Method for a Context.
* Extender - scripts which can add new functionality, including graphical elements and new API end points
* HTTP Sender - scripts that run against every request/response sent/received by ZAP. This includes the proxied messages, messages sent during active scan, fuzzer, ...
* Input Vector - scripts for defining exactly what ZAP should attack. They can also change how any URL is represented in the Sites Tree
* Passive Rules - these run as part of the Passive Scanner and can be individually enabled
* Proxy - these run 'inline', can change every request and response and can be individually enabled. They can also trigger break points
* Session Management - scripts that define how an application manages sessions
* Stand Alone - scripts that are self contained and are only run when your start them manually
* Targeted - scripts that are invoked with a target URL and are only run when your start them manually

**Note:** Add-ons can add additional types of scripts, which should be described in the help of the corresponding add-on.


For more details on how to run ZAP scripts see the Script Console add-on help pages.

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |

## External links

|   |                                                                            |
|---|----------------------------------------------------------------------------|
|   | [ZAP Community Scripts repo](https://github.com/zaproxy/community-scripts) |

## Official Videos

|   |                                                                                                                            |
|---|----------------------------------------------------------------------------------------------------------------------------|
|   | [ZAP In Ten: ZAP Scripting - An Introduction](https://play.sonatype.com/watch/7gR4qYzUZ686wEDMBfxGdf) (9:33)               |
|   | [ZAP In Ten: ZAP Scripting - Targeted Scripts](https://play.sonatype.com/watch/JzX1YkJqdk7BYTMHikh433) (10:01)             |
|   | [ZAP In Ten: ZAP Scripting - Proxy and HttpSender Scripts](https://play.sonatype.com/watch/4no8EY1iB8RdnQLPFpYi2a) (10:14) |
|   | [ZAP In Ten: ZAP Scripting - Passive Scan Scripts](https://play.sonatype.com/watch/HfENJ3GJB3zbD6sMscDrjD) (11:55)         |
|   | [ZAP In Ten: ZAP Scripting - Active Scan Scripts](https://play.sonatype.com/watch/aEwqErXFMTYdDDQbTgnJeA) (11:38)          |
