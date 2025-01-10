---
# This page was generated from the add-on.
title: Active Scan
type: userguide
weight: 1
---

# Active Scan


Active scanning attempts to find potential vulnerabilities by using
known attacks against the selected targets.


Active scanning is an attack on those targets.   

You should NOT use it on web applications that you do not own.


In order to facilitate identifying ZAP traffic and Web Application Firewall exceptions, ZAP is accompanied
by a script "AddZapHeader.js" which can be used to add a specific header to all traffic that passes through
or originates from ZAP. eg: X-ZAP-Initiator: 3


It should be noted that active scanning can only find certain types of vulnerabilities.  

Logical vulnerabilities, such as broken access control, will not be found by
any active or automated vulnerability scanning.  

Manual penetration testing should always be performed in addition to active
scanning to find all types of vulnerabilities.


Active scanning is configured using the
[Options Active Scan screen](/docs/desktop/ui/dialogs/options/ascan/).  

The rules that run are configured via [Scan Policies](/docs/desktop/start/features/scanpolicy/) - you can have as many of these as you like.

## Accessed via

|   |                                                 |                                               |
|---|-------------------------------------------------|-----------------------------------------------|
|   | [Active Scan tab](/docs/desktop/ui/tabs/ascan/) | 'New Scan' button                             |
|   | [Sites tab](/docs/desktop/ui/tabs/sites/)       | 'Attack/Active Scan...' right click menu item |
|   | [History tab](/docs/desktop/ui/tabs/history/)   | 'Attack/Active Scan...' right click menu item |

## See also

|   |                                                                       |                                              |
|---|-----------------------------------------------------------------------|----------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                      | for an overview of the user interface        |
|   | [Features](/docs/desktop/start/features/)                             | provided by ZAP                              |
|   | [Passive scanning](/docs/desktop/start/features/pscan/)               |                                              |
|   | [Scan Policy Manager Dialog](/docs/desktop/ui/dialogs/scanpolicymgr/) | which allows you to manage the scan policies |
|   | [Scanner Rules](/docs/desktop/start/checks/)                          | supported by default                         |

## Official Videos

|   |                                                                                              |
|---|----------------------------------------------------------------------------------------------|
|   | [ZAP In Ten: Active Scanning](https://play.sonatype.com/watch/ZcEfSihgQSzuthJi4qEeW3) (9:47) |
|   | [ZAP In Ten: Active Scan Scripts](https://play.vidyard.com/aEwqErXFMTYdDDQbTgnJeA) (11:37)   |
|   | [Deep Dive: Active Scanning](https://www.youtube.com/watch?v=z2r4xGMQlys) (31:26)            |
