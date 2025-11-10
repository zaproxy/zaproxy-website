---
# This page was generated from the add-on.
title: Forced Browse
type: userguide
weight: 1
cascade:
  addon:
    id: bruteforce
    version: 19.0.0
---

# Forced Browse


ZAP allows you to try to discover directories and files using forced browsing.  

A set of files are provided which contain a large number of file and directory names.  

ZAP attempts to directly access all of the files and directories listed in the selected
file directly rather than relying on finding links to them.


Forced Browse is configured using the [Options
Forced Browse screen](/docs/desktop/addons/forced-browse/options/).  

This functionality is based on code from the now retired OWASP DirBuster project.

## Accessed via

|   |                                                              |                                                                       |
|---|--------------------------------------------------------------|-----------------------------------------------------------------------|
|   | [Forced Browse tab](/docs/desktop/addons/forced-browse/tab/) |                                                                       |
|   | *Sites tab*                                                  | 'Attack/Forced Browse site' right click menu item                     |
|   | *Sites tab*                                                  | 'Attack/Forced Browse directory' right click menu item                |
|   | *Sites tab*                                                  | 'Attack/Forced Browse directory (and children)' right click menu item |
