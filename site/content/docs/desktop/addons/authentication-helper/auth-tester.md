---
# This page was generated from the add-on.
title: Authentication Tester Dialog
type: userguide
weight: 9
---

# Authentication Tester Dialog

This dialog allows you to test if ZAP can authenticate and automatically handle the session handling and verification for a site given only the login page and credentials.

## Fields

The following fields are provided:

### Login URL

The URL of the login page. It is mandatory and must start with "http://" or "https://". The URL does not have to be in the Sites Tree, but must be accessible to ZAP.

### Context

The name of the context which will be configured to handle the authentication. If the context already exists then it will be deleted and recreated.

### Username

The username to use for authentication. The username and password must be valid for the login to work.

### Password

The password to use for authentication. The username and password must be valid for the login to work.

### Browser

The browser to use for authentication. The browser you choose will need to be installed and be able to be launched from ZAP.

### Time to Wait (seconds)

The number of seconds to wait after submitting the login form before closing the browser. If the browser is closed before the application has loaded then ZAP may not be able to identify the session handling or find a suitable verification URL.

### Demo Mode

This just adds 2 second delays between filling in each field and before submitting the form. It has no other effect than making it easier to see what is going on when a non-headless browser is used.

### Record Diagnostics

Enables the recording of diagnostic data during the authentication. Refer to the [Authentication Report](/docs/desktop/addons/authentication-helper/auth-report-json/) for more details on the diagnostics.

### Reset Button

The reset button allows you to reset all the fields on the Test tab, and disable all Steps in the Steps tab (steps are only disabled not removed as recreating them might be tedious).

## Results Panel

The results panel show the progress and what has been identified. All elements need to be identified in order for ZAP to be able to automatically handle authentication for this site.

## Diagnostics Tab

The Diagnostics tab will contain a summary of the requests and responses sent and received as part of the authentication testing. It is recommended that you do not perform any other operations in ZAP while testing the authentication otherwise that may result in unrelated messages being recorded.


Only the absolute minimum information is recorded, and host name and parameter values are replaced by safe tokens.
You can copy all of the data and review it to make sure it does not include any sensitive data
before you share it with us.


Is ZAP fails to detect either the Username or Password field then we will need more details about the login page.
If you can share that with us then it will it much easier to debug.


If ZAP detects both of the required fields then please share the data from the diagnostic tab with us -
we will hopefully be able to diagnose what's going wrong with just that information.
