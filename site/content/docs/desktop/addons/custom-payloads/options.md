---
# This page was generated from the add-on.
title: Options Custom Payloads screen
type: userguide
weight: 2
---

# Options Custom Payloads screen


This screen/table allows you to configure [Custom Payload](/docs/desktop/addons/custom-payloads/) options:

## Custom Payloads Table

### Enabled

A checkbox indicating whether or not the particular custom payload is to be used or not.

### Category

Indicates the category and by association the scan rule for which the custpm payload value should be used. The categories are also mentioned in the help entry for the applicable scan rules.

### Payload

The value of the specific custom payload.

## Custom Payloads Buttons

### Add

Allows users to add a custom payload, setting the enable state, category, and payload value.


**Note** : Payload categories which are not listed in the table may be available via the Add button as not all rules which support custom payloads have default payloads.

### Modify/Remove

Either modify or remove the custom payload defined by the selected row.

### Enable All/Disable All

Sets the enable state of all custom payloads as applicable.

### Add Missing Defaults

Facilitates restoration of missing default custom payloads if they've been previously removed.

### Reset to Defaults

Removes all payloads and restores just the defaults. **Note** : User added payloads will be lost.

### Add Multiple Payloads

Allows the user to import a text file of payloads (one payload per line) for the selected category.
