---
# This page was generated from the add-on.
title: Creating Reports
type: userguide
weight: 2
---

# Creating Reports

You can easily create your own reports.

The add-on uses the [Thymeleaf](https://www.thymeleaf.org/) templating engine, so see their documentation for details of the templating syntax.

The built in reports are copied into the 'reports' directory underneath the ZAP
[default directory](/faq/what-is-the-default-directory-that-zap-uses/).
Each report is in its own subdirectory. The easiest way to create a new report is to copy and existing one into a new directory at the same level.

Each report subdirectory must include:

### template.yaml

A file containing:

```
name:        # The display name for the report
format:      # The format, eg one of HTML, XML, MD, JSON, PDF - this is used internally but not currently exposed in ZAP
mode:        # The Thymeleaf template mode, one of HTML, RAW, TEXT, HTML
extension:   # The extension to use when generating the report
```

### report.*ext*

The Thymeleaf report template.   
This should have the same extension that is specified in the template.yaml file (e.g. 'report.md') except if it is a PDF report, in which case "html" should be used (see below).

### Messages.properties

The report subdirectory may also include a "Messages.properties" language file for template specific strings localised to English as well as "Message_*locale* .property" files for localising the strings into other languages.  
The template specific strings should all start with '`report.template.`'  
The language files may also override the default translations built into the reports add-on.

### Resources

The report subdirectory may also include a "resources" directory. If this is present then when a report is generated a subdirectory will be created based on the report name and all of the files in the resources directory will be copied into it.   
You should reference the files in the "resources" subdirectory in the following way so that they can be accessed both via the template and by the report when the subdirectory is created:

```
   <script th:src="${resources + '/script.js'}" src="resources/script.js"></script>
   <link rel="stylesheet" th:href="${resources + '/style.css'}" href="resources/style.css">
   <img th:src="${resources + '/image.png'}" src="resources/image.png">
```

The 'traditional-html-plus' template includes examples of JavaScript, CSS and image resources.

## Data Available

The following data items are available to all reports. These can be accessed via the Thymeleaf Standard Dialect, e.g. `${reportTitle}`

### alertTree

A tree containing all of the alerts that should be included in the report. This is a copy of the standard ZAP alert tree shown in the Desktop 'Alerts' tab but pruned to remove any alerts that do not match the criteria selected.

Every node in the tree is an [AlertNode](https://javadoc.io/static/org.zaproxy/zap/2.10.0/org/zaproxy/zap/extension/alert/AlertNode.html).

The top level node does not include any useful data.

There is one second level node for each type of alert found. These nodes have a 'userObject' of type
[Alert](https://javadoc.io/static/org.zaproxy/zap/2.10.0/org/parosproxy/paros/core/scanner/Alert.html)
which gives you access to all of the alert data and the associated request and response.

The 3rd and final level contains the alert instances - these are all the same type as their parent node and give access to the alert details in the same way.

### reportTitle

The title of the report set by the user.

### description

The description of the report set by the user.

### helper

An instance of the [ReportHelper](https://github.com/zaproxy/zap-extensions/tree/master/addOns/reports/src/main/java/org/zaproxy/addon/reports/ReportHelper.java) class that provides useful methods, including:

* `getRiskString(int risk)` Returns an internationalised string for the associated risk code
* `getConfidenceString(int confidence)` Returns an internationalised string for the associated confidence code

### alertCounts

A Map of risk levels to the number of unique alerts. This can be used by reports, for example, to generate a summary table.

### reportData

An instance of the [ReportData](https://github.com/zaproxy/zap-extensions/tree/master/addOns/reports/src/main/java/org/zaproxy/addon/reports/ReportData.java) class that defines the data to be included in the report. This can be used, for example, to tell if there were no level alerts of a specific level or if they were deliberately excluded.

The plan is to allow any add-ons to make additional data items available. This help page will be updated when that feature is available.

## Testing Reports

ZAP does not cache the report templates, so it rereads them every time you generate a report. This makes it much easier to test them. Just make sure that the 'Template Directory' parameter is set to the top level directory you are using for your reports, then when you create a new report it will use the latest version of the template that you have saved. You will not need to restart ZAP in order to pick up any changes to existing reports that you have made.

## PDF Reports

PDF reports are generated using the [Flying Saucer](https://github.com/flyingsaucerproject/flyingsaucer) library which converts HTML documents into PDF format. In order to create a PDF report you need to design it in HTML, call the template "report.html" but specify the format as "PDF".

Note that Flying Saucer requires that the HTML is well-formed XML / XHTML.
It will fail with an error if the template is not well-formed so check the ZAP log file for details.
