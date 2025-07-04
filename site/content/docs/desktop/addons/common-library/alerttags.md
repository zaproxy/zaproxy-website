---
# This page was generated from the add-on.
title: Alert Tags
type: userguide
weight: 2
---

# Alert Tags

The Common Library add-on provides Alert Tags for use by scan rules.


Of note the following tags/groups of tags are included:

* Custom Payloads - A tag which indicates the scan rules which support [Custom Payloads functionality](/docs/desktop/addons/custom-payloads/).
* HIPAA (Health Insurance Portability and Accountability Act) - A tag representing alerts/rules which we've mapped to the HIPAA standard.
* OWASP Top 10 (2017) - Tags representing the risks/vulnerabilities from the 2017 OWASP Top 10 list.
* OWASP Top 10 (2021) - Tags representing the risks/vulnerabilities from the 2021 OWASP Top 10 list.
* PCI DSS (Payment Card Industry Data Security Standard) - A tag representing alerts/rules which we've mapped to the PCI DSS standard.
* Test Timing - A tag which represent rules/alerts which are based on time (induced delay) payloads.
* OWASP Web Security Testing Guide (v4.2) - Tags which map rules/alerts to the relevant sections of the OWASP WSTG (version 4.2).

## Compliance Tags {#compliance}

Please note that the PCI DSS and HIPAA standards deal with specific types of data, while an identified vulnerability may expose such data ZAP has insufficient context with which to differentiate what is or might be exposed by leveraging a given vulnerability. If the system being tested does not hold any such data then the related compliance tag **may** not be relevant.


See also:  

* [HIPAA](https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html).
* [PCI DSS](https://www.pcisecuritystandards.org/standards/pci-dss/).

## CVE Tags

Any alert that involves a specific CVE will (generally) also have a tag for that specific CVE identifier with a value that links to Mitre's National Vulnerability Database (NVD).

## Policy Tags

The add-on also provides a set of Alert Tags which associate various rule types or focus areas to scan policies, see the [Scan
Policies add-on help](/docs/desktop/addons/scan-policies/) for further details.
