---
# This page was generated from the add-on.
title: Param Digger tab
type: userguide
weight: 3
---

# Param Digger tab

The Param Digger tab shows you the set of parameters identified by the [Param Digger](/docs/desktop/addons/parameter-digger/) during the scans.

The 'New Scan' button launches the [Param Digger dialog](/docs/desktop/addons/parameter-digger/dialog/) which allows you
to specify exactly which URL should be scanned.  
The Param Digger can be run on multiple URLs in parallel and the results for each scan are
shown by selecting the scan via the 'Progress' pull-down.

The toolbar shows information about a scan and allows to control it. It provides a
set of buttons which facilitate the following controls/functionality:

* ![pause button](/docs/desktop/addons/parameter-digger/images/pause.png) Pause (and ![resume button](/docs/desktop/addons/parameter-digger/images/play.png) resume) the selected Param Digger scan;
* ![stop button](/docs/desktop/addons/parameter-digger/images/stop.png) Stop the selected Param Digger scan;
* ![clean scans button](/docs/desktop/addons/parameter-digger/images/broom.png) Clean completed scans;

The progress bar shows how far the selected Param Digger scan has progressed. There are two tabs provided by Param Digger, the 'History' tab and the 'Output' tab.

In the 'History' tab for each URL attempted you can see:

* ID - The ID of the message
* Req. Timestamp - The timestamp when the request was made by ZAP's HTTP Sender.
* Res. Timestamp - the timestamp when the response was recieved.
* Method - The HTTP method used.
* URL - The URL used for the guessing.
* Code - The status code for the response.
* Reason - The reason behind the particular status code.
* RTT - The Round Trip Time for the request.

For each Param Digger message, shown under the Output tab, you can see details of the Parameter found and the
reason why it was detected.

## See also

|   |                                                                      |                                             |
|---|----------------------------------------------------------------------|---------------------------------------------|
|   | [Param Digger](/docs/desktop/addons/parameter-digger/)               | for an overview of the Param Digger.        |
|   | [Param Digger Dialog](/docs/desktop/addons/parameter-digger/dialog/) | for an overview of the Param Digger Dialog. |
