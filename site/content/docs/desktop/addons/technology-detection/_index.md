---
# This page was generated from the add-on.
title: Technology Detection
type: userguide
weight: 1
cascade:
  addon:
    id: wappalyzer
    version: 16.0.0
---

# Technology Detection Using Wappalyzer

The Technology Detection add-on uses the Wappalyzer rules to detect the technologies used by applications.

It works in a very similar way to the Wappalyzer browser add-ons with the following exceptions:

* It does not use the 'Global JavaScript variables' as these are difficult to test without a 'full' browser
* It does not not show the confidence - this is still todo
* It allows you to see the 'evidence' used to detect the technologies

## The Technology Tab

This tab shows all of the detected technologies for the site selected.  
Right clicking on a technology will display a 'Show evidence' menu under which are all of the regexes used to detect it.  
Selecting a regex will switch to the 'Search' tab and search through the history for that regex. Note: If multiple rows are selected the menu will not be displayed.

Beside the site selection drop down is an Export button which can be used to export a CSV (comma separated values) file based on the
table information currently being displayed.

## External Links

|   |                                         |                           |
|---|-----------------------------------------|---------------------------|
|   | <https://www.wappalyzer.com/>           | The Wappalyzer Homepage   |
|   | <https://github.com/AliasIO/Wappalyzer> | The Wappalyzer Repository |
