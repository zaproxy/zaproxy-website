---
# This page was generated from the add-on.
title: Bank Identification Number (BIN) List
type: userguide
weight: 4
---

# Bank Identification Number (BIN) List

The Common Library add-on includes a BIN list used by scan rules to enrich alerts for suspected credit card numbers.


When a scan rule finds a potential credit card number it is looked up against this third party BIN list,
which might not be accurate. If a match is found the alert is raised at High confidence and additional
details are added to the 'Other Information' field in the alert, otherwise the alerts will have Medium
confidence.


Data source: [bin-list-data](https://github.com/venelinkochev/bin-list-data/).
