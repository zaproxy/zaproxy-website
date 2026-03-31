---
# This page was generated from the add-on.
title: HTTPS Info
type: userguide
weight: 1
cascade:
  addon:
    id: httpsInfo
    version: 16.0.0
---

# HTTPS Info


The HTTPS Info add-on is accessed via the context menu within the Sites Tree or History table.
It displays tabs in a status panel, in which various summary information is displayed
regarding the target server's HTTPS certificate, and the offered SSL/TLS cipher suites.


This add-on leverages another OWASP project:
[Deep Violet](https://github.com/spoofzu/DeepViolet/)
to perform it's certificate and cipher suite information gathering.

## General

The top portion of a tab is devoted to general details of the SSL/TLS certificate presented by the server. Such as:

* Subject DN
* Signing Algorithm
* Certificate Fingerprint
* Issuer DN
* Validity Dates
* Self-signed Status
* etc.

## Cipher Suites

The bottom portion of a tab is devoted to enumeration/listing of the specific Cipher Suites the target server offers, grouped by handshake protocol (SSLv2, SSLv3, TLSv1, TLSv1.1, etc.).

## Active Scan Rule


The add-on also provides an [HTTPS Configuration](/docs/desktop/addons/https-info/ascanrule/) active scan rule (plugin ID 10205)
that runs once per host during active scans. It skips HTTP sites and performs HTTPS configuration analysis
for HTTPS sites, raising an info-level alert with certificate and cipher suite details. When DeepViolet
identifies security issues, it raises additional alerts with severity based on the worst finding.
