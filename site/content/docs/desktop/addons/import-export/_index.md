---
# This page was generated from the add-on.
title: Import/Export
type: userguide
weight: 1
cascade:
  addon:
    id: exim
    version: 0.16.0
---

# Import/Export

This add-on allows you to import and export ZAP data in a range of formats.


It supports the [Automation Framework](/docs/desktop/addons/import-export/automation/).

## Menus

### Copy URLs

A context menu item to Copy URLs to the system clipboard.

### Save Selected Entries as HAR (HTTP Archive File)

A context menu item to save the selected HTTP messages in HAR format.

### Save Raw Message

Provides a context menu to save content of HTTP messages as binary. (While the files will probably open in a simple editor it may have null characters or malformed bytes.)

### Save XML Message

Provides a context menu to save content of HTTP messages as XML.

### Import HAR (HTTP Archive File)

An option to import messages from a HTTP Archive (HAR), available via the 'Import' menu. **Note** : The following modifications may be made when importing a HAR (HTTP Archive File):

* Missing HTTP Version - If the message is missing the httpVersion attribute it will be set to "HTTP/1.1".
* HTTP Version 3 - If the message has its httpVersion attribute set as "h3", "http/3", "http/3.0" it will be set to "HTTP/2".
* Carriage return (CR) or Line feed (LF) in Headers - If the message contains headers with CR or LF, the CRLF(s) will be removed.

### Import Log File

Allows you to import log files from ModSecurity and files previously exported from ZAP.

### Import URLs

An option to import a file of URLs is available via the 'Import' menu ('Import a File Containing URLs'). The file must be plain text with one URL per line. Blank lines and lines starting with # will be ignored.

### Tools / Prune Sites Tree...

This allows you to prune URLs from the Sites Tree using a file in the [Sites Tree format](/docs/desktop/addons/import-export/sitestreeformat/)

## Export

The add-on also adds a top level "Export" menu, providing the following functionality.

### Save Messages...

This allows you to save requests and responses to a text file.   
Select the messages to save in the History tab (including multi-select).

### Save Responses...

This allows you to save a specific responses to a file.   
Select the relevant message in the History tab - note that binary responses (such as images) can be saved as well as text responses.

### Save Sites Tree...

This allows you to save the Sites Tree in the [Sites Tree format](/docs/desktop/addons/import-export/sitestreeformat/)

### Save All URLs...

This allows you to save all the accessed URLs to a text or HTML file.   
This can be used, amongst other things, to compare the URLs available to users with different roles or permissions on the same system. (Also consider leveraging the Access Control Testing add-on.) This functionality is also available via the right-click context menu in the Sites tree panel.

### Save URLs...

All URLs in the Sites tree that fall within the selected node are exported. This functionality is also available from the right-click menu when used on a Site or Context node in the Sites tree panel.

## ZAP API

This add-on also exposes various ZAP API endpoints to facilitate programmatic use of the functionality.

### Actions

* `exportSitesTree (filePath* )` Exports the Sites Tree in the Sites Tree YAML format.
* `importHar (filePath* )` Imports a HAR file.
* `importModsec2Logs (filePath* )` Imports ModSecurity2 logs from the file with the given file system path.
* `importUrls (filePath* )` Imports URLs (one per line) from the file with the given file system path.
* `importZapLogs (filePath* )` Imports previously exported ZAP messages from the file with the given file system path.
* `pruneSitesTree (filePath* )` Prunes the Sites Tree based on a file in the Sites Tree YAML format.

### Others

* `exportHar (baseurl start count )` Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages
* `exportHarById (ids* )` Gets the HTTP messages with the given IDs, in HAR format.
* `sendHarRequest (request* followRedirects )` Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope.
