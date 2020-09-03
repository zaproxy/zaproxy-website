---
title: "How do I handle a False Positive?"
type: faq
category: Scanning
weight: 3
---

False positives are where ZAP raises alerts for things that are not really vulnerabilities.
You should make sure that you understand the potential vulnerability being reported and manually test it before concluding that it is not a real vulnerability.

Please [report](https://github.com/zaproxy/zaproxy/issues/new?labels=bug&template=Bug_report.md) any false positives that you identify supplying as much information as you can, while obfuscating any sensitive information. This will help us improve ZAP.

Many scan rules support [Alert Thresholds](/docs/desktop/ui/dialogs/scanpolicy/#threshold) and specific [Rule Configuration options](/docs/desktop/ui/dialogs/options/ruleconfig/) which allow you to configure some of the conditions under which alerts are reported. Check the help for the relevant rule - this is included with ZAP and is also available [online](/docs/desktop/addons/).

If you are using ZAP manually then you can double click alerts in the desktop UI and change the confidence level to False Positive.

If you are automating ZAP and the relevant scan rule does not support a suitable threshold level then you can use [Alert Filters](/docs/desktop/addons/alert-filters/) to change alerts that match specific criteria to have a confidence level of False Positive.

The [packaged scans](/docs/docker/) also support regex expressions in the [configuration file](/docs/docker/api-scan/#configuration-file) which allow you to ignore alerts for the URLs you specify.

The built in report does not include false positives, but some add-ons which provide reporting capabilities may still do.
