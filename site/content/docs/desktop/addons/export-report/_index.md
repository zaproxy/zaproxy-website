---
# This page was generated from the add-on.
title: Export Report
type: userguide
weight: 1
cascade:
  addon:
    id: exportreport
    version: 7.0.0
---

# Export Report

Report Export module that allows users to customize content and export in a desired format.

- Created by [JordanGS](https://github.com/JordanGS).
- Minimum Supported Version: Weekly Release ZAP_D-2016-09-05
- Project on [GitHub](https://github.com/JordanGS/workspace). You can also find a .zip of the minimum supported release in the zap-download folder.
- Supported and incorporated in the [Official OWASP Zed Attack Proxy Jenkins Plugin](https://wiki.jenkins-ci.org/display/JENKINS/zap+plugin).

## Table of Contents

- ZAP UI
- Command Line
- API Calls

---

## ZAP UI

#### Source Info

User entered and automatically retrieve data relevant to the report. Hover over each field in the extension for tool tip.

- Title - Defaults to Session Name
- By
- For
- Scan Date - User entered date of AScan, defaults to current date-time
- Report Date - Defaults to current date-time
- Scan Version - Placeholder for future
- Report Version - Defaults to current version of ZAP tool

#### UI

- ![Source Info](/docs/desktop/addons/export-report/images/SourceInfo.png)

#### Alert Severity

Include/Exclude Alerts by Severity.

#### Included by Default

- High
- Medium
- Low
- Informational

#### UI

- ![Source Info](/docs/desktop/addons/export-report/images/AlertSeverity.png)

#### Alert Details

Include/Exclude Details of each Alert.

#### Included by Default

- CWE ID
- WASC ID
- Description
- Other Info
- Solution
- Reference

#### Excluded by Default

- Request Header
- Response Header
- Request Body
- Response Body

#### UI

- ![Source Info](/docs/desktop/addons/export-report/images/AlertDetails.png)

---

#### File Chooser Dialog

The dialog only shows folders and accepted file types. The 'Files of Type' drop down list will filter to show only folders and files of the specified extension.

#### Currently Available

- ASCII 1.0 Strict Compliant XHTML Files (.xhtml ![XHTML Icon](/docs/desktop/addons/export-report/images/html.png))
- XML Files (.xml ![XML Icon](/docs/desktop/addons/export-report/images/xml.png))
- JSON Files (.json ![JSON Icon](/docs/desktop/addons/export-report/images/json.png))
- PDF Documents (.pdf ![PDF Icon](/docs/desktop/addons/export-report/images/pdf.png))

#### Future Milestone

- Bootstrap HTML Files(.bootstrap.html ![BOOTSTRAP Icon](/docs/desktop/addons/export-report/images/bootstrap.png))
- Google Documents (.doc ![DOC Icon](/docs/desktop/addons/export-report/images/doc.png))

#### UI

- Show all accepted files
- ![Source Info](/docs/desktop/addons/export-report/images/FileChooser.png)
-
- List of accepted file formats
- ![Source Info](/docs/desktop/addons/export-report/images/FileChooserChoices.png)
-
- Filter by a specific file format
- ![Source Info](/docs/desktop/addons/export-report/images/FileChooserFilter.png)

---

## Command Line

The extension can be run from the command line as well and requires the following arguments to be passed in to generate a report.

#### OWASP ZAP Command Line Options

- **-session**: Opens the given session after starting ZAP
- **-cmd**: Runs ZAP 'inline', i.e. without starting the UI or a daemon

See the [Command Line help page](/docs/desktop/cmdline/) for more details on the natively supported command line options.

#### Export Report Extension Command Line Options

- **-export_report** :
  - **Description:**
    - Saves to the specified file after loading the given session.
  - **Currently Available**
    - ASCII 1.0 Strict Compliant XHTML Files (.xhtml ![XHTML Icon](/docs/desktop/addons/export-report/images/html.png))
    - XML Files (.xml ![XML Icon](/docs/desktop/addons/export-report/images/xml.png))
    - JSON Files (.json ![JSON Icon](/docs/desktop/addons/export-report/images/json.png))
    - PDF Documents (.pdf ![PDF Icon](/docs/desktop/addons/export-report/images/pdf.png))
  - **Future Milestone**
    - Bootstrap HTML Files(.bootstrap.html ![BOOTSTRAP Icon](/docs/desktop/addons/export-report/images/bootstrap.png))
    - Google Documents (.doc ![DOC Icon](/docs/desktop/addons/export-report/images/doc.png))
  -
- **-source_info** :
  - **Description:**
    - Specifies the following details of the report:
    - 1. Title
      2. By
      3. For
      4. Scan Date
      5. Report Date
      6. Scan Ver
      7. Report Ver
      8. Description
  - **Example:**
    - -source_info "Vulnerability Report of MyApp.com;JordanGS;Lost Souls;August 15, 2016;August 18, 2016;ZAP_D-2016-08-15;ZAP_D-2016-08-15;Lorem ipsum dolor sit amet, pri corpora ancillae adolescens in. Ea usu atomorum tincidunt, ne munere regione has. Ne sea summo tation, et sed nibh nostrum singulis. Nec causae viderer discere eu."
  - **Validation:**
    - Content is unchecked, can enter empty fields if you wish, only condition is that all 8 items are in the list.
  -
- **-alert_severity** :
  - **Description:**
    - Specifies which alert severities will be included in the report:
    - 1. High
      2. Medium
      3. Low
      4. Informational
  - **Input format:**
    - Only accepts a string list with ';' delimiter
  - **Input restriction:**
    - Only accepts 't' and 'f' for each item in the list
  - **Example:**
    - -alert_severity "t;t;f;t"
  - **Explanation:**
    - In the above example, only High, Medium and Informational Alerts will be included in the generated report.
  - **Validation:**
    - Validation: Content is validated to be either 't' or 'f' and that all 4 items are in the list.
  -
- **-alert_details** :
  - **Description:**
    - Specifies which alert details will be included in the report:
    - 1. CWE ID
      2. WASC ID
      3. Description
      4. Other Info
      5. Solution
      6. Reference
      7. Request Header
      8. Response Header
      9. Request Body
      10. Response Body
  -
  - **Input format:**
    - Only accepts a string list with ';' delimiter
  - **Input restriction:**
    - Only accepts 't' and 'f' for each item in the list
  - **Example:**
    - -alert_details "t;t;t;t;t;t;f;f;f;f"
  - **Explanation:**
    - In the above example, only CWE ID, WASC ID, Description, Other Info, Solution and Reference Alert Details will be included in the generated report.
  - **Validation:**
    - Content is validated to be either 't' or 'f' and that all 10 items are in the list.
  -
- **-include_passive_alerts (optional)** :

  - **Description:**
    - Specifies whether or not to include passive alerts in the report
  -
  - **Input format:**
    - Only accepts boolean values, defaults to true if not respected
  - **Example:**
    - -include_passive_alerts "false"
  - **Explanation:**
    - In the above example, no passive alerts will be included in the report.
  -

-     #### Putting it all together! (Windows)

      1. Open a command prompt
      2. Navigate to location where the zap.bat file is located
      3. execute the following:
          * zap.bat **-export_report** "/path/to/save/report.xhtml" **-source_info** "Vulnerability Report of MyApp.com;JordanGS;Lost Souls;August 15, 2016;August 18, 2016;ZAP_D-2016-08-15;ZAP_D-2016-08-15;Lorem ipsum dolor sit amet, pri corpora ancillae adolescens in. Ea usu atomorum tincidunt, ne munere regione has. Ne sea summo tation, et sed nibh nostrum singulis. Nec causae viderer discere eu." **-alert_severity** "t;t;f;t" **-alert_details** "t;t;t;t;t;t;f;f;f;f" **-session** "/path/to/existing/session" **-cmd**

  ***

## API Calls

The extension can be accessed with API calls and requires the following arguments to be passed in to generate a report.

The restrictions are the same as those for Command Line above.

#### Usage Example:

>     Map<String, String> map = new HashMap<String, String>();
>     String API_KEY = "ZAPROXY-PLUGIN"
>     String absolutePath = "/path/to/save/report.xhtml";
>     String extension = "xhtml";
>     String sourceDetails = "Vulnerability Report of MyApp.com;JordanGS;Lost Souls;" +
>         "August 15, 2016;August 18, 2016;ZAP_D-2016-08-15;ZAP_D-2016-08-15;" +
>         "Lorem ipsum dolor sit amet, pri corpora ancillae adolescens in. Ea " +
>         "usu atomorum tincidunt, ne munere regione has. Ne sea summo tation, " +
>         "et sed nibh nostrum singulis. Nec causae viderer discere eu.";
>     String alertSeverity = "t;t;f;t";
>     String alertDetails = "t;t;t;t;t;t;f;f;f;f";
>
>     map.put("apikey", API_KEY);
>
>     // String representing the absolute path to save destination for the report
>     map.put("absolutePath", absolutePath)
>
>     // String representing the extension of the report
>     map.put("fileExtension", extension);
>
>     // String separated by ; for each entry
>     map.put("sourceDetails", sourceDetails);
>
>     // String separated by ; for each entry
>     map.put("alertSeverity", alertSeverity);
>
>     //String separated by ; for each entry
>     map.put("alertDetails", alertDetails);
>
>     ApiResponseElement val = (ApiResponseElement) clientApi.callApi("exportreport", "action", "generate", map);
