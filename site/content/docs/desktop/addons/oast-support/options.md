---
# This page was generated from the add-on.
title: OAST Options
type: userguide
weight: 3
---

# OAST Options

A tabbed pane allows you to configure the available OAST services.

## General Settings

These are options not specific to a single OAST service.

### Active Scan Service

A dropdown menu that allows you to select the out-of-band service that will be used by active scan rules.

### Permanent Database

Enabling the "Use Permanent Database" option will allow you to persist registered out-of-band payloads in ZAP's permanent database. The persisted payloads will be loaded into memory and polled along with other payloads as per the set polling interval. The permanent database is currently only supported by the BOAST service. **NOTE** : This means that Alerts may appear in a ZAP session which is not directly or specifically related to the original assessment/scan.

### Days to Keep Records

The number of days records will be kept in the Permanent Database.  
Records will only be deleted when ZAP starts up, or if you save the options with a lower "Days to Keep Records" value.

### Clear All Records

This button will delete all records from the Permanent Database. You will not get any OOB alerts for any records that have been deleted.

## Service-Specific Configurations

Look at the individual options page of each service for more information about the available settings for that service.

## See also

|   |                                                              |   |
|---|--------------------------------------------------------------|---|
|   | [OAST Services](/docs/desktop/addons/oast-support/services/) |   |
