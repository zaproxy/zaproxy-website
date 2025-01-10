---
# This page was generated from the add-on.
title: Scan Policy
type: userguide
weight: 20
---

# Scan Policy


A scan policy defines exactly which [rules](/docs/desktop/start/checks/) are run as part of an [active scan](/docs/desktop/start/features/ascan/).  

It also defines how these rules run influencing how many requests are made and how likely potential issues are to be flagged.  

You can define as many scan policies as you like and select the most appropriate one when you start the scan via
the [Active Scan Dialog](/docs/desktop/ui/dialogs/advascan/).  

You can define the default scan policy to be used for active scans and for the [Attack mode](/docs/desktop/start/features/modes/) via the
[Options Active Scan screen](/docs/desktop/ui/dialogs/options/ascan/).  


Active scanning is an attack on those targets.   

You should NOT use it on web applications that you do not own.


It should be noted that active scanning can only find certain types of vulnerabilities.  

Logical vulnerabilities, such as broken access control, will not be found by
any active or automated vulnerability scanning.  

Manual penetration testing should always be performed in addition to active
scanning to find all types of vulnerabilities.


Active scanning is configured using the
[Options Active Scan screen](/docs/desktop/ui/dialogs/options/ascan/).  

You can also define as many scan policies as you like - these define exactly which rules are run and how they work.

## Configured via

|   |                                                                       |                                              |
|---|-----------------------------------------------------------------------|----------------------------------------------|
|   | [Scan Policy Manager Dialog](/docs/desktop/ui/dialogs/scanpolicymgr/) | which allows you to manage the scan policies |

## See also

|   |                                                         |                                       |
|---|---------------------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                        | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/)               | provided by ZAP                       |
|   | [Passive scanning](/docs/desktop/start/features/pscan/) |                                       |
|   | [Scanner Rules](/docs/desktop/start/checks/)            | supported by default                  |
