---
title: "Setting up ZAP to Test Damn Vulnerable Web App (DVWA)"
type: faq
category: Technologies Supported
weight: 7
---

Following the steps used to spider/scan DVWA.

This was tested with
* DVWA 2.3
* ZAP 2.15.0

To set up DVWA follow the instructions on https://github.com/digininja/DVWA

In this case the following commands were used, but you should check to see if anything has changed:

```bash
git clone https://github.com/digininja/DVWA.git
cd DVWA
docker compose up -d
```

To run a full authenticated scan against DVWA download and import the 
[Automation Frmework](/docs/automate/automation-framework/) plan: 

* https://github.com/zaproxy/community-scripts/blob/main/other/af-plans/FullScanDvwaAuth.yaml

The Active scanner should find a large number of issues, including:

  - Cross Site Scripting (DOM based)
  - Cross Site Scripting (Reflected)
  - External Redirect
  - Path Traversal
  - Remote OS Command Injection
  - Remote File Inclusion
  - Remote OS Command Injection
  - SQL Injection (various varieties)
  - Server Side Request Forgery
