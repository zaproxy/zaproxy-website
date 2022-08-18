---
# This page was generated from the add-on.
title: Param Miner tab
type: userguide
weight: 3
---

# Param Miner tab

The Param Miner tab shows you the set of parameters identified by the [Param Miner](/docs/desktop/addons/parameter-miner/) during the scans.

The 'New Scan' button launches the [Param Miner dialog](/docs/desktop/addons/parameter-miner/dialog/) which allows you
to specify exactly which URL should be scanned.  
The Param Miner can be run on multiple URLs in parallel and the results for each scan are
shown by selecting the scan via the 'Progress' pull-down.

The toolbar shows information about a scan and allows to control it. It provides a
set of buttons which facilitate the following controls/functionality:

* ![pause button](/docs/desktop/addons/parameter-miner/images/pause.png) Pause (and ![resume button](/docs/desktop/addons/parameter-miner/images/play.png) resume) the selected Param Miner scan;
* ![stop button](/docs/desktop/addons/parameter-miner/images/stop.png) Stop the selected Param Miner scan;
* ![clean scans button](/docs/desktop/addons/parameter-miner/images/broom.png) Clean completed scans;

The progress bar shows how far the selected Param Miner scan has progressed. There are two tabs provided by Param Miner, the 'History' tab and the 'Output' tab.

In the 'History' tab for each URL attempted you can see:

* ID - The ID of the message
* Req. Timestamp - The timestamp when the request was made by ZAP's HTTP Sender.
* Res. Timestamp - the timestamp when the response was recieved.
* Method - The HTTP method used.
* URL - The URL used for the guessing.
* Code - The status code for the response.
* Reason - The reason behind the particular status code.
* RTT - The Round Trip Time for the request.

For each Param Miner message, shown under the Output tab, you can see details of the Parameter found and the
reason why it was detected.

## See also

|   |                                                                    |                                            |
|---|--------------------------------------------------------------------|--------------------------------------------|
|   | [Param Miner](/docs/desktop/addons/parameter-miner/)               | for an overview of the Param Miner.        |
|   | [Param Miner Dialog](/docs/desktop/addons/parameter-miner/dialog/) | for an overview of the Param Miner Dialog. |
