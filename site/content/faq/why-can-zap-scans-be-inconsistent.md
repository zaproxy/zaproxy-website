---
title: "Why can ZAP scans be inconsistent?"
type: faq
category: Scanning
weight: 3
---

If you run ZAP multiple times against a target then you may well find that the results are subtly different even though the target has not changed.

This is not unusual, and we do not consider this a significant problem.

In our experience it is usually all down to how the application is explored - the traditional and ajax spiders seem to be sensitive to small changes, including things like network speed.

If ZAP finds exactly the same URLs and the target has not changed then we would expect the alerts to be the same.

However if you investigate this issue in more detail and find out there are other problems then please let us know.

Significantly different results are another matter.

Running a scan via the Desktop, via the Automation Framework, or via one of the Packaged Scans should make no difference, as long as ZAP is doing the same things in each case.

If you are finding significant differences when running ZAP in different places then check:

* That you are running the same versions of ZAP
* You have the same add-ons and rules installed and enabled
* All instances are up to date
* The configurations are exactly the same
* That you are doing exactly the same things

It is also well worth checking that:

* The target really has not changed
* You are testing the same target (different environments may have different routing)
* There are no other security services in the way, such as WAFs
* That the target is not changing as a result of being scanned by ZAP (e.g. storing attack payloads)
