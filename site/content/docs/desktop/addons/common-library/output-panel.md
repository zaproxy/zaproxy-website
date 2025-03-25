---
# This page was generated from the add-on.
title: Tabbed Output Panel
type: userguide
weight: 1
---

# Tabbed Output Panel

The Common Library add-on provides a tabbed output panel that replaces the default output panel in ZAP. This allows other add-ons to optionally log messages under named tabs in the output panel. If a name is not provided, messages are shown under the "General" tab and exceptions are shown under the "Errors" tab by default.


While the Output tab itself can be detached, the tabs within the Output tab can also be detached if desired.
To detach a tab, right click on it and select "Move Tab to New Window" in the context menu that pops up.


Right-clicking within the body of a tab will display a context menu with relevant options such as Copy and Find.
All standard shortcuts (such as Ctrl/Cmd + A/C/F), should work as expected too.


Whenever new output is appended to any tab, a green dot will appear over the tab icon as well as the output panel
icon to indicate that there is new content.
The green dot will disappear from the tab when the content is viewed, and from the output panel when new content
from all tabs (including detached tabs) has been seen.
