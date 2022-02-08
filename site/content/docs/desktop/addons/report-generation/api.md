---
# This page was generated from the add-on.
title: Report Generation API
type: userguide
weight: 5
---

# Report Generation API

The following operations are added to the API:

### Views

* templates: View available templates.
* templateDetails (template\*): View details of the specified template.

### Actions

* generate (title\* template\* theme description contexts sites sections includedConfidences includedRisks reportFileName reportFileNamePattern reportDir display): Generate a report with the supplied parameters.
    * title: Report Title
    * template: Report Template
    * theme: Report Theme
    * description: Report Description
    * contexts: The name of the contexts to be included in the report, separated by '\|'. For example, "Default Context\|My Context".
    * sites: The site URLs that should be included in the report, separated by '\|'.
    * sections: The report sections that should be included, separated by '\|'. View section names via API view `templateDetails
        (template*)`
    * includedConfidences: Confidences that should be included in the report, separated by '\|'. Accepted values are "False Positive", "Low", "Medium", "High", and "Confirmed".
    * includedRisks: Risks that should be included in the report, separated by '\|'. Accepted values are "Informational", "Low", "Medium", and "High".
    * reportFileName: The file name of the generated report. This value overrides the reportFileNamePattern parameter.
    * reportFileNamePattern: Report File Name Pattern. For example, `{{yyyy-MM-dd}}-ZAP-Report-[[site]]`.
    * reportDir: Path to directory in which the generated report should be placed.
    * display: Display the generated report. Either "true" or "false".
