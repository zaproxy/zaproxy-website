---
# This page was generated from the add-on.
title: Passive Scanner API
type: userguide
weight: 1
---

# Passive Scanner API

The following operations are added to the API:

### Actions

* clearQueue: Clears the passive scan queue.
* disableAllScanners: Disables all passive scan rules.
* disableAllTags: Disables all passive scan tags.
* disableScanners (ids\*): Disables passive scan rules.
    * ids: A comma separated list of scan rule IDs.
* enableAllScanners: Enables all passive scan rules.
* enableAllTags: Enables all passive scan tags.
* enableScanners (ids\*): Enables passive scan rules.
    * ids: A comma separated list of scan rule IDs.
* setEnabled (enabled\*): Sets whether or not the passive scanning is enabled (Note: the enabled state is not persisted).
    * enabled: The enabled state, true or false.
* setMaxAlertsPerRule (maxAlerts\*): Sets the maximum number of alerts a passive scan rule can raise.
    * maxAlerts: The maximum number of alerts.
* setMaxBodySizeInBytes (maxSize\*): Sets the maximum body size in bytes that the passive scanner will scan.
    * maxSize: The maximum size in bytes, 0 to unset.
* setScanOnlyInScope (onlyInScope\*): Sets whether or not the passive scan should be performed only on messages that are in scope.
    * onlyInScope: The scan state, true or false.
* setScannerAlertThreshold (id\* alertThreshold\*): Sets the alert threshold of a passive scan rule.
    * id: The ID of the scan rule.
    * alertThreshold: The alert threshold: OFF, DEFAULT, LOW, MEDIUM and HIGH

### Views

* currentTasks: Shows information about the passive scan tasks currently being run (if any).
* maxAlertsPerRule: Gets the maximum number of alerts a passive scan rule should raise.
* maxBodySizeInBytes: Gets the maximum body size in bytes that the passive scanner will scan.
* recordsToScan: The number of records the passive scanner still has to scan.
* scanOnlyInScope: Tells whether or not the passive scan should be performed only on messages that are in scope.
* scanners: Lists all passive scan rules with their ID, name, enabled state, and alert threshold.

## See also

|   |                                                          |                                            |
|---|----------------------------------------------------------|--------------------------------------------|
|   | [Passive Scanner](/docs/desktop/addons/passive-scanner/) | the introduction to Passive Scanner add-on |
