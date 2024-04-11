---
# This page was generated from the add-on.
title: Image Location and Privacy Scanner
type: userguide
weight: 1
cascade:
  addon:
    id: imagelocationscanner
    version: 5.0.0
---

# Image Location and Privacy Scanner

The following passive scan rule is included in this add-on:

## Image Location and Privacy Scanner {#id-10103}

Passively scans for GPS location and other privacy-related exposures in images during normal security assessments of websites. Image Location and Privacy Scanner (ILS) assists in situations where end users may post profile images and possibly give away their home location, e.g. a dating site or children's chatroom.

More information on this topic, including a white paper based on a real-world site audit given as a presentation at the New Jersey chapter of the OWASP organization, can be found at https://www.veggiespam.com/ils/ .

This software finds the GPS information inside of Exif tags, IPTC codes, and proprietary camera codes. Then, the Image Location and Privacy Scanner flags the findings in the ZAP Alerts list as an information message. It would be up to the auditor to determine if location exposure is truly a security risk based on context.

Some Notes:

* Before ZAP 2.7.x, you must manually enabled image scanning with: Tools → Options → Display → Process images in the HTTP requests/responses pane.
* If you have images disabled in Global Exclude URL, then any passive image scanner, like ILS, will be unable to see the images and report on privacy issues.

Latest code: [imagelocationscanner](https://github.com/zaproxy/zap-extensions/tree/main/addOns/imagelocationscanner)   
Alert ID: [10103](/docs/alerts/10103/).
