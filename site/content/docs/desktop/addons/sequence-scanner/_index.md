---
# This page was generated from the add-on.
title: Sequence Scanner
type: userguide
weight: 1
cascade:
  addon:
    id: sequence
    version: 9.0.0
---

# Sequence Scanner

This add-on facilitates the recording and scanning sequences of requests. In some web applications it is necessary for particular events or pages to be accessed or completed in a certain order. By recording a sequence and then scanning it, it is possible to ensure such flows happen in an expected manner.


The sequence active scanner will replay the sequence it is attacking.
If a sequence is selected in the "Scripts" tab then the result of running the script will be shown in the "Zest Results" tab.
If the sequence includes Zest assertions then these should give you a good indication of whether or not the sequence is running
in the same way as when it was recorded.


The active scanner will be run on each step of sequence, and each scan will complete before the next step is performed.
If you are using the desktop then you will be able to see the scans for each step in the "Active Scan" tab -
they will be labelled as "\<sequence name\>/Step \<id\>".


Replaying each step, and attacking it before progressing to the next step, significantly increases the chances of the active scan
successfully attacking the sequence.
However you should check that the sequence did complete successfully and that the active scan requests were not automatically rejected.
The reports that support sequences will include information that can help you determine this.


This add-on supports the [Automation Framework](/docs/desktop/addons/sequence-scanner/automation/).

## Creating Sequences


One sequence script should be created for each multi-step operation in the application/site being tested.
There are several options for creating sequences:   

1. Use the Automation Framework [sequence-import](/docs/desktop/addons/sequence-scanner/automation/) job.
2. Use the Import menu item Import HAR as Sequence.
3. In either the Sites tree or History tab select the requests you wish to have included, right click, and use "Add To Zest Script" (either choosing to create a new script or adding to an existing Sequence script).
4. From the main tool bar, use the "Record a New Zest Script..." button, selecting "Sequence" as the type.

### Assertions

When importing the sequences it is possible to choose to create assertions for each HTTP message of the sequence:

* Assert Status Code - asserts that the replayed HTTP message has the same status code.
* Assert Length - asserts that the replayed HTTP message has the same response body length, within the margin (percentage) specified.

## Scanning

You can active scan sequences via:

* The "Sequence Active Scan" dialog.
* The context menu "Active Scan Sequence" option on the top node of a Sequence script.
* The Automation Framework [sequence-activeScan](/docs/desktop/addons/sequence-scanner/automation/) job.

## Sequence Active Scan dialog

This dialog is accessible via the "Tools" menu, and allows you to actively scan sequences.

### Scan Policy

The name of the scan policy to use for active scanning. The "Sequence" policy included with this add-on is the recommented one to use.

### Sequences

The sequences to active scan. You must select at least one sequence. Selected sequences will be actively scanned in order.

## Reporting

The following reports can include sequence scanning results:

* [Traditional JSON Report](/docs/desktop/addons/report-generation/report-traditional-json/).
* [Traditional JSON Report with Requests and Responses](/docs/desktop/addons/report-generation/report-traditional-json-plus/).

### See also

[ZAP Multi-step Blog](https://zapmultistep.wordpress.com/) - note that this blog is for an earlier version of this add-on and is somewhat out of date.
