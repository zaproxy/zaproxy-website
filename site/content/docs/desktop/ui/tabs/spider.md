---
# This page was generated from the add-on.
title: Spider tab
type: userguide
weight: 10
---

# Spider tab

The Spider tab shows you the set of unique URIs found by the [Spider](/docs/desktop/start/features/spider/) during the scans.

The 'New Scan' button launches the [Spider dialog](/docs/desktop/ui/dialogs/spider/) which allows you
to specify exactly what should be scanned.  
The Spider can be run on multiple Sites in parallel and the results for each scan are
shown by selecting the scan via the 'Progress' pull-down.

The toolbar shows information about a scan and allows to control it. It provides a
set of buttons which allows to:

- ![pause button](/docs/desktop/images/16/141.png) Pause (and ![resume button](/docs/desktop/images/16/131.png) resume) the selected spider scan;
- ![stop button](/docs/desktop/images/16/142.png) Stop the selected spider scan;
- ![clean scans button](/docs/desktop/images/fugue/broom.png) Clean completed scans;
- ![spider options button](/docs/desktop/images/16/041.png) Open the [Spider Options screen](/docs/desktop/ui/dialogs/options/spider/).

The progress bar shows how far the selected spider scan has progressed. It is also shown the number of active spider scans and the number of URIs found for the selected scan.

For each URI found you can see:

- Processed - Whether the URI was processed by the Spider or was skipped from fetching because of a rule (e.g. it was out of scope)
- Method - The HTTP method, e.g. GET or POST, through which the resource should be accessed
- URI - the resource found
- Flags - any information about the URI (e.g. if it's a seed or why was it not processed)

For each spider message, shown under the Messages tab, you can see details of the request sent and response
received. The `Processed` column, indicates whether:

- ![successful parse](/docs/desktop/images/16/152.png)Successfully - the response was successfully received and parsed
- ![no parse](/docs/desktop/images/16/149.png)Empty Message - the response was not parsed because it was empty
- ![no parse](/docs/desktop/images/16/149.png)I/O Error - an input/output error occurred while fetching the response
- ![no parse](/docs/desktop/images/16/149.png)Max Children - the response was not parsed because the corresponding parent Sites node already has more child nodes than the maximum allowed
- ![no parse](/docs/desktop/images/16/149.png)Max Depth - the response was not parsed because it passed the maximum depth allowed
- ![no parse](/docs/desktop/images/16/149.png)Max Size - the response was not parsed because its size is not under the maximum allowed
- ![no parse](/docs/desktop/images/16/149.png)Not Text - the response was not parsed because it's not text, for example, an image
- ![no parse](/docs/desktop/images/16/149.png)Spider Stopped - the response was not fetched or parsed because the spider was already stopped

## See also

|     |                                                                   |                                       |
| --- | ----------------------------------------------------------------- | ------------------------------------- |
|     | [UI Overview](/docs/desktop/ui/)                                  | for an overview of the user interface |
|     | [Spider](/docs/desktop/start/features/spider/)                    | for an overview of the Spider         |
|     | [Spider Options screen](/docs/desktop/ui/dialogs/options/spider/) | for an overview of the Spider Options |
