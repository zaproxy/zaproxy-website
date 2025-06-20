---
# This page was generated from the add-on.
title: Spider tab
type: userguide
weight: 3
---

# Spider tab


The Spider tab shows you the set of unique URIs found by the [Spider](/docs/desktop/addons/spider/) during the scans.


The 'New Scan' button launches the [Spider dialog](/docs/desktop/addons/spider/dialog/) which allows you
to specify exactly what should be scanned.  


The Spider can be run on multiple Sites in parallel and the results for each scan are
shown by selecting the scan via the 'Progress' pull-down.

The toolbar shows information about a scan and allows to control it. It provides a
set of buttons which allows to:

* ![pause button](/docs/desktop/addons/spider/images/pause.png) Pause (and ![resume button](/docs/desktop/addons/spider/images/play.png) resume) the selected Spider scan;
* ![stop button](/docs/desktop/addons/spider/images/stop.png) Stop the selected Spider scan;
* ![clean scans button](/docs/desktop/addons/spider/images/broom.png) Clean completed scans;
* ![Spider options button](/docs/desktop/addons/spider/images/gear.png) Open the [Spider Options screen](/docs/desktop/addons/spider/options/).

The progress bar shows how far the selected Spider scan has progressed. It is also shown the number of active Spider scans and the number of URIs found for the selected scan.

For each URI found you can see:

* Processed - Whether the URI was processed by the Spider or was skipped from fetching because of a rule. Skipped reasons include:
    * ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Out of Context - the message was not part of the targetted context
    * ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Out of Scope - the message was not in scope
    * ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Illegal Protocol - the message was neither HTTP nor HTTPS
    * ![no parse](/docs/desktop/addons/spider/images/red_dot.png)User Rules - the message was skipped due to user defined exclude
    * ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Logout Avoidance - the message was skipped because the user indicated that logout related paths/functionality should be avoided
* Method - The HTTP method, e.g. GET or POST, through which the resource should be accessed
* URI - the resource found
* Flags - any information about the URI (e.g. if it's a seed or why was it not processed)

For each Spider message, shown under the Messages tab, you can see details of the request sent and response
received. The `Processed` column, indicates whether:

* ![successful parse](/docs/desktop/addons/spider/images/green_dot.png)Successfully - the response was successfully received and parsed
* ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Empty Message - the response was not parsed because it was empty
* ![no parse](/docs/desktop/addons/spider/images/red_dot.png)I/O Error - an input/output error occurred while fetching the response
* ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Max Children - the response was not parsed because the corresponding parent Sites node already has more child nodes than the maximum allowed
* ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Max Depth - the response was not parsed because it passed the maximum depth allowed
* ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Max Size - the response was not parsed because its size is not under the maximum allowed
* ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Not Text - the response was not parsed because it's not text, for example, an image
* ![no parse](/docs/desktop/addons/spider/images/red_dot.png)Spider Stopped - the response was not fetched or parsed because the Spider was already stopped

## See also

|   |                                                               |                                       |
|---|---------------------------------------------------------------|---------------------------------------|
|   | [Spider](/docs/desktop/addons/spider/)                        | for an overview of the Spider         |
|   | [Spider Options screen](/docs/desktop/addons/spider/options/) | for an overview of the Spider Options |
