---
# This page was generated from the add-on.
title: Passive Scanner Add-on
type: userguide
weight: 1
cascade:
  addon:
    id: pscan
    version: 0.5.0
---

# Passive Scanner Add-on

An add-on that provides core passive scanning capabilities.


This add-on supports the [Automation Framework](/docs/desktop/addons/passive-scanner/automation/).

## Passive Scan


ZAP by default passively scans all messages (e.g. HTTP, WebSocket) sent to the web application being tested.  

Passive scanning does not change the messages in any way and is therefore safe to use.  

Scanning is performed in the background to ensure that it does not slow down the exploration of an application.


The (main) behaviour of the passive scanner can be configured using the [Options Passive Scanner Screen](/docs/desktop/addons/passive-scanner/options/scanner/).


Passive scanning can also be used for automatically adding [tags](/docs/desktop/start/features/tags/)
and raising [alerts](/docs/desktop/start/features/alerts/) for potential issues.  

A set of rules for automatic tagging are provided by default. These can be changed, deleted or
added to via the [Options Passive Scan Tags screen](/docs/desktop/addons/passive-scanner/options/tags/).


The alerts raised by passive scan rules can be configured using the [Options Passive Scan Rules screen](/docs/desktop/addons/passive-scanner/options/rules/).

## Official Videos

|   |                                                                                                |
|---|------------------------------------------------------------------------------------------------|
|   | [ZAP In Ten: Passive Scanning](https://play.sonatype.com/watch/vDWpoYjHi7fSLYFDQPWgMF) (10:27) |
|   | [ZAP In Ten: Passive Scan Scripts](https://play.vidyard.com/HfENJ3GJB3zbD6sMscDrjD) (11:53)    |
|   | [Deep Dive: Passive Scanning](https://www.youtube.com/watch?v=Rx42kyrB0nk) (27:35)             |

## See also

|   |                                                                  |                                                |
|---|------------------------------------------------------------------|------------------------------------------------|
|   | [Passive Scanner API](/docs/desktop/addons/passive-scanner/api/) | for more details about the Passive Scanner API |
|   | [Options](/docs/desktop/addons/passive-scanner/options/)         | for the provided options screens               |
