---
# This page was generated from the add-on.
title: Passive Scan
type: userguide
weight: 19
---

# Passive Scan

ZAP by default passively scans all HTTP messages (requests and responses) sent to the web application being tested.  
Passive scanning does not change the requests nor the responses in any way and is therefore safe to use.  
Scanning is performed in a background thread to ensure that it does not slow down the exploration
of an application.

The (main) behaviour of the passive scanner can be configured using the
[Options Passive Scanner Screen](/docs/desktop/ui/dialogs/options/pscanner/).

Passive scanning can also be used for automatically adding [tags](/docs/desktop/start/features/tags/)
and raising [alerts](/docs/desktop/start/features/alerts/) for potential issues.  
A set of rules for automatic tagging are provided by default. These can be changed, deleted or
added to via the [Options Passive Scan Tags screen](/docs/desktop/ui/dialogs/options/pscan/).

The alerts raised by passive scanners can be configured using the
[Options Passive Scan Rules screen](/docs/desktop/ui/dialogs/options/pscanrules/).  

## See also

|   |                                                        |                                       |
|---|--------------------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                       | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/)              | provided by ZAP                       |
|   | [Active scanning](/docs/desktop/start/features/ascan/) |                                       |
|   | [Scanner Rules](/docs/desktop/start/checks/)           | supported by default                  |

## Official Videos

|   |                                                                                                |
|---|------------------------------------------------------------------------------------------------|
|   | [ZAP In Ten: Passive Scanning](https://play.sonatype.com/watch/vDWpoYjHi7fSLYFDQPWgMF) (10:27) |
