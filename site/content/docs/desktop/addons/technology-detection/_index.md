---
# This page was generated from the add-on.
title: Technology Detection
type: userguide
weight: 1
cascade:
  addon:
    id: wappalyzer
    version: 21.52.0
---

# Technology Detection


The Technology Detection add-on uses various patterns and finger prints to detect the technologies used by applications.


It works in a very similar way to the Wappalyzer browser add-ons with the following exceptions:

* It does not use the 'Global JavaScript variables' as these are difficult to test without a 'full' browser
* It does not not show the confidence - this is still todo
* It does not match technologies on the basis of DOM properties as some properties are set by JavaScript in the browser after the response has passed through ZAP
* It allows you to see the 'evidence' used to detect the technologies

## The Technology Tab

This tab shows all of the detected technologies for the site selected.  
Right clicking on a technology will display a 'Show evidence' menu under which are all of the regexes used to detect it.  
Selecting a regex will switch to the 'Search' tab and search through the history for that regex. Note: If multiple rows are selected the menu will not be displayed.


Beside the site selection drop down is a button (with a Globe icon) which controls whether or not the Technology tab's display is linked to the selection in the Sites Tree.


Next is an Export button which can be used to export a CSV (comma separated values) file based on the
table information currently being displayed.


The toolbar also includes:

* An enable/disable toggle button which controls whether the technology detection passive scan rule is functioning or not. This enabled state is persisted between ZAP sessions.
* A button (with a gear icon) which will open the add-on's Options panel when clicked.

## Reporting

Technology data is available to reports via the [TechJobResultData](https://github.com/zaproxy/zap-extensions/tree/main/addOns/wappalyzer/src/main/java/org/zaproxy/zap/extension/wappalyzer/automation/TechJobResultData.java) class.

## External Links

|   |                                                                   |                                                                                           |
|---|-------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
|   | [Enthec Webappanalyzer](https://github.com/enthec/webappanalyzer) | This project is a continuation of the iconic Wappalyzer that went private in August 2023. |
|   | <https://www.wappalyzer.com/>                                     | The Wappalyzer Homepage                                                                   |
|   | https://github.com/wappalyzer/wappalyzer                          | As of early August 2023 the Wappalyzer Repository is no longer public.                    |
