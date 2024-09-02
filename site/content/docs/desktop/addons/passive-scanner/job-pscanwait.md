---
# This page was generated from the add-on.
title: Passive Scanner Automation Framework - passiveScan-wait Job
type: userguide
weight: 2
---

# Passive Scanner Automation Framework - passiveScan-wait Job

This job waits for the passive scanner to finishing scanning the requests and responses in the current queue. You should typically run this job after the jobs that explore you application, such as the spider jobs or those that import API definitions. If any more requests are sent by ZAP or proxied through ZAP after this job has run then they will be processed by the passive scanner. You can run this job as many times as you need to.

It is covered in the video: [ZAP Chat 12 Automation Framework Part 6 - Delays and Active Scan](https://youtu.be/hcftgjz_Vgc).

## YAML

```
  - type: passiveScan-wait             # Passive scan wait for the passive scanner to finish
    parameters:
      maxDuration: 5                   # Int: The max time to wait for the passive scanner, default: 0 unlimited
```

## Job Data

The following class will be made available to add-ons that provide access to the Job Data such as the Reporting add-on. Note that in this case the data is from the currently enabled Passive Scan rules, regardless of whether they have been used as a result of the Automation Framework, the UI, or the API.

* Key: `passiveScanData2`
* Class: [PassiveScanJobResultData](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscan/src/main/java/org/zaproxy/addon/pscan/automation/jobs/PassiveScanJobResultData.java)
