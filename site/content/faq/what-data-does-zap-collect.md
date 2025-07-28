---
title: "What data does ZAP collect?"
type: faq
category: General Questions
weight: 2
---

### A.K.A. ZAP Privacy Statement

#### The ZAP Tool

As a Manipulator in the Middle (MitM) proxy ZAP is able to observe a large amount of potentially very sensitive information.

By default ZAP makes a set of [calls home](/faq/what-calls-home-does-zap-make/), in order to check for updates, 
display news items, and collect telemetry.
As explained in that FAQ all of these calls can be disabled.

ZAP does not and will not collect any Personally Identifiable Information (PII) data.

The ZAP team will not sell any of the data we collect.

We only collect data in order to make ZAP a better tool.

We may publish any of the data we collect, for example on the [statistics](/docs/statistics/) pages.

#### The ZAP Browser Extensions

The ZAP [Browser Extensions](https://github.com/zaproxy/browser-extension/) do not collect any telemetry.

The [Full extension](https://github.com/zaproxy/browser-extension/?tab=readme-ov-file#the-full-extension) interacts with ZAP,
and so actions performed in the extension can be reflected in some of the telemetry collected by the ZAP tool.

The [Recorder Extension](https://github.com/zaproxy/browser-extension/?tab=readme-ov-file#the-recorder-extension) does not
interact with ZAP or any other services.