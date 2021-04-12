---
# This page was generated from the add-on.
title: Report Generation Automation Framework Support
type: userguide
weight: 1
---

# Report Generation Automation Framework Support

This add-on supports the Automation Framework.

## Job: report

The report job allows you to generate reports using any of the installed report templates.

```
  - type: report                       # Report generation
    parameters:
      template:                        # String: The template id, default : traditional-html
      reportDir:                       # String: The directory into which the report will be written
      reportFile:                      # String: The report file name pattern, default: {{yyyy-MM-dd}}-ZAP-Report-[[site]]
      reportTitle:                     # String: The report title
      reportDescription:               # String: The report description
      displayReport:                   # Boolean: Display the report when generated, default: false
    risks:                             # List: The risks to include in this report, default all
      - high
      - medium
      - low
      - info
    confidences:                       # List: The confidences to include in this report, default all
      - high
      - medium
      - low
      - falsepositive
    sections:                          # List: The template sections to include in this report - see the relevant template, default all
```
