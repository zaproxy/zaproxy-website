---
# This page was generated from the add-on.
title: Custom Report
type: userguide
weight: 1
cascade:
  addon:
    id: customreport
    version: 6.0.0
---

# Customizable HTML Report

The Customizable HTML Report add-on allows to control the information that goes into the ZAP scanning report. It has three tabs to provide details about the report: Scope, Alerts and Alert Details.

## Scope

Can set the report name, report description and select the template of the HTML output. Additionally, can specify whether to include only contents in scope.   
Report templates:

* **Traditional**: lists all the alerts and sorts them by the risk level from High to Low.
* **Separated Sites**: same as Traditional, but also groups by domain names.
* **Concise**: groups alerts by type (to avoid repetition) and sorts from High to Low.

## Alerts

Can select which alert types to include into the report. Additionally, alerts can be selected or unselected by risk level (Informational, Low, Medium and High).

## Alert Details

Allows to select which alert attributes are included into the Report.   
These are checked and are included by default:

* Description
* Other Info
* Solution
* Reference
* CWE ID
* WASC ID

These are unchecked and are excluded by default:


* Request Header
* Response Header
* Request Body
* Response Body
