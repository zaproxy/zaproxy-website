---
# This page was generated from the add-on.
title: HTTPS Info
type: userguide
weight: 1
cascade:
  addon:
    id: httpsInfo
    version: 13.0.0
---

# HTTPS Info

The HTTPS Info add-on is accessed via the context menu within the Sites Tree or History table.
It displays tabs in a status panel, in which various summary information is displayed
regarding the target server's HTTPS certificate, and the offered SSL/TLS cipher suites.

This add-on leverages another OWASP project:
[Deep Violet](https://www.owasp.org/index.php/OWASP_DeepViolet_TLS/SSL_Scanner)
to perform it's certificate and cipher suite information gathering.

## General

The top portion of a tab is devoted to general details of the SSL/TLS certificate presented by the server. Such as:

- Subject DN
- Signing Algorithm
- Certificate Fingerprint
- Issuer DN
- Validity Dates
- Self-signed Status
- etc.

## Cipher Suites

The bottom portion of a tab is devoted to enumeration/listing of the specific Cipher Suites the target server offers, grouped by handshake protocol (SSLv2, SSLv3, TLSv1, TLSv1.1, etc.).
