---
# This page was generated from the add-on.
title: Custom Payloads API
type: userguide
weight: 1
---

# Custom Payloads API

The following views are available via the API:

### Views

* customPayloads(category): Lists all the payloads currently loaded (category, payload, enabled state). Optionally filtered by category.
* customPayloadsCategories: Lists all the available categories.

### Actions

* addCustomPayload (category\*, payload): Adds a custom payload (enabled when added).
* disableCustomPayloads(category): Disables custom payloads. Optionally limited by category. (No category means all)
* enableCustomPayloads(category): Enables custom payloads. Optionally limited by category. (No category means all)
* enableCustomPayload (category\*, payload): Enables a custom payload.
* disableCustomPayload (category\*, payload): Disables a custom payload.
* removeCustomPayload (category\*, payload): Removes a custom payload.

**Note: \*** Required parameter.


## See also

|   |                                                          |   |
|---|----------------------------------------------------------|---|
|   | [Custom Payloads](/docs/desktop/addons/custom-payloads/) |   |
