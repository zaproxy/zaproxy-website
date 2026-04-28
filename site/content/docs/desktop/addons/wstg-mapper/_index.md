---
# This page was generated from the add-on.
title: WSTG Mapper
type: userguide
weight: 1
cascade:
  addon:
    id: wstgmapper
    version: 0.1.0
---

# WSTG Mapper

Provides a WSTG compliance coverage dashboard that maps ZAP alerts to the
[OWASP Web Security Testing Guide (WSTG)](https://owasp.org/www-project-web-security-testing-guide/).

## Overview

The WSTG Mapper add-on tracks which OWASP WSTG tests have been covered during
your security assessment. It automatically maps ZAP alerts to corresponding WSTG
test cases, and lets you manually track the status of each test through a
persistent, interactive dashboard.

## Features

### Automatic Alert Mapping

When ZAP raises an alert, the add-on automatically attempts to map it to the
corresponding WSTG test case. The bundled mappings cover a wide range of ZAP
plugin IDs (active and passive scan rules), and the add-on can also identify
relevant WSTG tests based on technology names detected in alert titles.

### Compliance Dashboard

A dedicated status panel shows all WSTG tests grouped by category:

- **Information Gathering (WSTG-INFO)**
- **Configuration and Deployment Management Testing (WSTG-CONF)**
- **Identity Management Testing (WSTG-IDNT)**
- **Authentication Testing (WSTG-ATHN)**
- **Authorization Testing (WSTG-ATHZ)**
- **Session Management Testing (WSTG-SESS)**
- **Input Validation Testing (WSTG-INPV)**
- **Testing for Error Handling (WSTG-ERRH)**
- **Testing for Weak Cryptography (WSTG-CRYP)**
- **Business Logic Testing (WSTG-BUSL)**
- **Client-side Testing (WSTG-CLNT)**
- **API Testing (WSTG-APIT)**

Each category shows the completion progress. Individual tests display their
current status, whether they were automatically triggered, and any notes you
have recorded.

### Test Status Tracking

Each WSTG test can have the following statuses:

| Status | Description |
|--------|-------------|
| Not Tested | Default — no alerts mapped and no manual action taken |
| Passed | Test has been manually marked as passed |
| Failed | Test has been manually marked as failed |
| Manual Review | Test cannot be automated with current scan rules |
| Not Applicable | Test is not applicable to the target |

### Technology-aware Filtering

If the add-on detects technology names from alert titles (e.g. Tomcat, WordPress,
MySQL), you can filter the dashboard to show only WSTG tests relevant to the
technologies detected in the target application.

### Export

The dashboard supports exporting coverage reports:

- **Markdown** — Human-readable report suitable for documentation
- **CSV** — Machine-readable format for spreadsheet analysis

### Session Persistence

Coverage status and notes are saved alongside each ZAP session. When you
reopen a saved session, the dashboard restores its previous state
automatically.

## Usage

1. Open the **WSTG Mapper** tab (at the bottom of the ZAP window).
2. Run your ZAP scanning as usual — alerts automatically trigger WSTG test
   coverage.
3. Use the dashboard to review coverage, manually update statuses, and add
   notes for each test.
4. Export coverage reports as needed.

## Configuration

There are currently no configuration options for this add-on.
