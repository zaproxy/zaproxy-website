---
# This page was generated from the add-on.
title: Import/Export
type: userguide
weight: 1
cascade:
  addon:
    id: exim
    version: 0.1.0
---

# Save Selected Entries as HAR (HTTP Archive File)

A context menu item to save the selected HTTP messages in HAR format.

# Save Raw Message

Provides a context menu to save content of HTTP messages as binary.

# Save XML Message

Provides a context menu to save content of HTTP messages as XML.

# Import HAR (HTTP Archive File)

An option to import messages from a HTTP Archive (HAR), available via the 'Import' menu.

# Import Log File

Allows you to import log files from ModSecurity and files previously exported from ZAP.

# Import URLs

An option to import a file of URLs is available via the 'Import' menu ('Import a File Containing URLs'). The file must be plain text with one URL per line. Blank lines and lines starting with # will be ignored.   

It also supports the [Automation Framework](/docs/desktop/addons/import-export/automation/).

# ZAP API

This add-on also exposes various ZAP API endpoints to facilitate programmatic use of the functionality.

* `/exim/importHar (filePath*)`
* `/exim/importModsec2Logs (filePath*)`
* `/exim/importUrls (filePath*)`
* `/exim/importZapLogs (filePath*)`
