---
# This page was generated from the add-on.
title: Code Dx
type: userguide
weight: 1
cascade:
  addon:
    id: codedx
    version: 9.0.0
---

# Code Dx

The Code Dx add-on allows you to generate compatible reports and upload them to a Code Dx server. There are two options under the Report menu.

## Code Dx: Upload Report

This option will generate a report for you and upload it to a Code Dx server. Selecting it will prompt you for the Server URL and API Key. After populating the fields, click the refresh button to get a list of projects available to the API Key. Then click the Upload button to send results to the Code Dx server.

## Code Dx: Generate XML Report

This option will generate a standard XML report that includes the HTTP request and response data.

# API

## Actions

### uploadReport

Uploads a report to Code Dx. Note that uploading an empty report with no alerts will cause an Exception to be thrown as Code Dx won't be able to read it and will return a non-200 response.

_Parameters_

- filePath: Absolute path to the report file
- serverUrl: Code Dx server URL
- codeDxApiKey: Code Dx API Key
- projectId: Code Dx Project ID
- fingerprint: Optional SHA1 hash of an invalid certificate to make an exception for
- acceptPermanently: Optional boolean for if the exception should be stored permanently in a truststore file.

_Returns_  
"OK" if the report is uploaded successfully.

### generateAndUpload

Generates a Code Dx report, saves it to a temporary file, uploads to Code Dx, then deletes the file.

_Parameters_

- serverUrl: Code Dx server URL
- codeDxApiKey: Code Dx API Key
- projectId: Code Dx Project ID
- fingerprint: Optional SHA1 hash of an invalid certificate to make an exception for
- acceptPermanently: Optional boolean for if the exception should be stored permanently in a truststore file.

_Returns_  
"OK" if the report is uploaded successfully.  
"EMPTY" if the generated report is empty. The report will not be uploaded to Code Dx.

## Views

### generateReport

Generates an XML report with request and response data.

_Returns_  
An XML report String.
