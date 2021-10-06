---
# This page was generated from the add-on.
title: Command Line
type: userguide
weight: 1
---

# Command Line

Quick Start add-on supports the following command line options:

|   |                |                                                                                                                                                                                                                                                                                                                                                       |
|---|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   | -quickurl      | Specifies the URL of the target application that will be attacked.                                                                                                                                                                                                                                                                                    |
|   | -quickout      | Specifies the file to write the report to. The report format will depend on the file extension - supported file extensions are ``` .html ``` , ``` .json ``` , ``` .md ``` , ``` .xml ``` . If none of these extensions are used then the format will be XML. If not set in 'inline' and daemon modes the report is written to default output stream. |
|   | -quickprogress | Show ascii progress bars, if started with the -cmd flag.                                                                                                                                                                                                                                                                                              |


Examples:

* Start ZAP in 'inline' mode with ascii progress bars, attack the target application http://example.com/ and write the report to default output stream:

    ```
    -cmd -quickurl http://example.com/ -quickprogress
    ```

* Start ZAP with UI, attack the target application http://example.com/ and save the report to a file:

    ```
    -quickurl http://example.com/ -quickout /path/to/report.xml
    ```

## See also

|   |                                                  |                                 |
|---|--------------------------------------------------|---------------------------------|
|   | [Quick Start](/docs/desktop/addons/quick-start/) | the introduction to Quick Start |
