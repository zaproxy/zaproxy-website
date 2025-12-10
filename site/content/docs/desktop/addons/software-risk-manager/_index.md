---
# This page was generated from the add-on.
title: Software Risk Manager
type: userguide
weight: 1
cascade:
  addon:
    id: srm
    version: 2025.12.0
---

# Software Risk Manager

The Software Risk Manager add-on allows you to generate compatible reports and upload them to a Software Risk Manager server. There are two options under the Report menu.


Contributed by <https://www.blackduck.com/>

## Software Risk Manager: Upload Report

This option will generate a report for you and upload it to a Software Risk Manager server. Selecting it will prompt you for the Server URL and API Key. After populating the fields, click the refresh button to get a list of projects available to the API Key. Then click the Upload button to send results to the Software Risk Manager server.

## Software Risk Manager: Generate XML Report

This option will generate a standard XML report that includes the HTTP request and response data.

# API

## Actions

### uploadReport

Uploads a report to Software Risk Manager. Note that uploading an empty report with no alerts will cause an Exception to be thrown as Software Risk Manager won't be able to read it and will return a non-200 response.   

*Parameters*

* filePath: Absolute path to the report file
* serverUrl: Software Risk Manager server URL
* codeDxApiKey: Software Risk Manager API Key
* projectId: Software Risk Manager Project ID
* fingerprint: Optional SHA1 hash of an invalid certificate to make an exception for
* acceptPermanently: Optional boolean for if the exception should be stored permanently in a truststore file.

*Returns*   
"OK" if the report is uploaded successfully.

### generateAndUpload

Generates a Software Risk Manager report, saves it to a temporary file, uploads to Software Risk Manager, then deletes the file.   

*Parameters*

* serverUrl: Software Risk Manager server URL
* codeDxApiKey: Software Risk Manager API Key
* projectId: Software Risk Manager Project ID
* fingerprint: Optional SHA1 hash of an invalid certificate to make an exception for
* acceptPermanently: Optional boolean for if the exception should be stored permanently in a truststore file.

*Returns*   
"OK" if the report is uploaded successfully.   
"EMPTY" if the generated report is empty. The report will not be uploaded to Software Risk Manager.

## Views

### generateReport

Generates an XML report with request and response data.   

*Returns*   
An XML report String.
