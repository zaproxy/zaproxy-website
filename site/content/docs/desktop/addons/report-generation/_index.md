---
# This page was generated from the add-on.
title: Report Generation
type: userguide
weight: 1
cascade:
  addon:
    id: reports
    version: 0.42.0
---

# Report Generation

This add-on allows you to generate a [variety of reports](/docs/desktop/addons/report-generation/templates/) in a flexible and extensible way.

It provides a dialog that can be accessed via menu "Report /
Generate Report..." menu item or via the "Generate Report..." toolbar
button.


It also supports the [Automation
Framework](/docs/desktop/addons/report-generation/automation/).

# Generate Report Dialog

## Scope Fields

The Scope tab has the following fields:

### Report Title

The title that will be used in the report.

### Report Name

The filename that will be used for the report. This name can include the following patterns:

* `{{`*date/time pattern* `}}` Any Java Date/Time pattern, e.g. `yyyy-MM-dd`
* `[[site]]` The name of the first site selected

The name will be automatically updated with the site selected and extension for the report type.

To change the default name used change the 'Report Name Pattern'

### Report Directory

The directory into which the report will be written. This directory will be selected when the dialog is next opened.

### Description

The description that will be included in the report.

### Contexts

A list of all of the Contexts currently available. Select one or more to only include alerts and other information from those contexts in the report. You can use the shift or control keys to select and unselect more than one context.

By default all contexts will be included.

### Sites

A list of all of the Sites currently available. Select one or more to only include alerts and other information from those sites in the report. You can use the shift or control keys to select and unselect more than one site.

By default all sites will be included.

If you select sites that are not in the contexts that you have
also selected then no data will be included in the report.

### Generate If No Alerts

By default the dialog will prevent you from generating a report with no alerts. Select this check box if you do want to generate a report with no alerts.

### Display Report

If selected then ZAP will attempt to open the report using the default program used by your operating system for that report type.

## Template Fields

The Template tab has the following fields:

### Template

A pulldown containing all of the available templates. The template names include the format that they will be generated in, e.g. HTML, MD, PDF etc.

### Theme

Templates may optionally define 'themes' - typically different colours and styles which apply to the same content. If any themes are defined for the selected template then you can select them here.

### Sections

Templates may optionally define 'sections' - parts of the report which can be included or excluded. If the selected template defines sections then a checkbox for each section will be displayed here. By default all checkboxes will be selected. If you unselect any of the sections then they will not be included in the report.

## Filter Fields

The Filter tab has the following fields:

### Include Risks

Include alerts with the selected risks.

### Include Confidences

Include alerts with the selected confidences.

## Options Fields

The Options tab has the following fields:

### Report Name Pattern

The pattern that will be used to generate the report name.

### Template Directory

The directory from which templates will be loaded. You should not typically need to change unless you are designing new reports, in which case it can be useful to change to point to your local source code reports directory. The "reports" folder in your ZAP home directory is used by default.

### Field Descriptions

#### riskdesc

riskdesc - Is a combination identifier, showing Risk followed by Confidence (in brackets). For example `High (Medium)` would indicate a High risk issue identified with Medium confidence.

#### created

The `created` field is an instant in the ISO-8601 representation.

## See also

|   |                                                                                                      |                                                         |
|---|------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
|   | [Templates](/docs/desktop/addons/report-generation/templates/)                                       | for details of the templates currently available        |
|   | [Creating Reports](/docs/desktop/addons/report-generation/create/)                                   | for details on how to create and edit your own reports  |
|   | [Report Generation Automation Framework Support](/docs/desktop/addons/report-generation/automation/) | for more details about the Automation Framework Support |
|   | [Report Generation API](/docs/desktop/addons/report-generation/api/)                                 | for more details about the Reports API                  |
|   | [About](/docs/desktop/addons/report-generation/about/)                                               | for more details of this add-on                         |
