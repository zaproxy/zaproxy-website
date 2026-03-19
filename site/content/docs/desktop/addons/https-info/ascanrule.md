---
# This page was generated from the add-on.
title: HTTPS Configuration - Active Scan Rule
type: userguide
weight: 1
---

# HTTPS Configuration - Active Scan Rule


This active scan rule runs once per host and performs HTTPS configuration analysis for sites using HTTPS.
It skips HTTP sites entirely.

## Alerts


The rule raises two types of alerts:

### 10205-1: HTTPS Configuration (Info) {#id-10205}


Always raised for HTTPS sites. Contains the full HTTPS configuration report including:

* Server certificate details (Subject DN, Issuer DN, fingerprint, validity dates, signing algorithm, etc.)
* Supported cipher suites with strength evaluation and handshake protocol

### 10205-2: HTTPS Security Configuration Issues (Low/Medium/High)


Raised when DeepViolet's TLS risk scoring identifies one or more security issues. The alert severity is based on the worst finding:

* **High** - Critical or high severity findings (e.g., expired certificate, SSLv2/3 support, NULL ciphers)
* **Medium** - Medium severity findings (e.g., TLS 1.0/1.1 support, weak ciphers, untrusted certificate)
* **Low** - Low severity findings (e.g., missing HSTS, missing security headers)


The alert includes the risk score, letter grade, detailed findings with rule IDs, and the full configuration report.
Latest code: [HttpsConfigScanRule.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/httpsInfo/src/main/java/org/zaproxy/zap/extension/httpsinfo/HttpsConfigScanRule.java)   
Alert ID: [10205](/docs/alerts/10205/).

## References


This add-on uses [DeepViolet](https://github.com/spoofzu/DeepViolet/) for TLS/SSL analysis.
The risk scoring rules and rule IDs are documented in the DeepViolet project.
