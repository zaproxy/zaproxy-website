---
# This page was generated from the add-on.
title: Scan Progress Dialog
type: userguide
weight: 12
---

# Scan Progress Dialog


This shows you the status of an [active scan](/docs/desktop/start/features/ascan/).  


### Progress tab

This shows which scan rules are running for each host being scanned, as well as other details such as the elapsed time they have been running and the number of requests made per rule.  
It also allows you to skip the rule which is currently being run by clicking on the 'Skip current running active scan' button ![](/docs/desktop/images/10/137.png) in the Status column.

### Response Chart tab

This shows the number of responses per second received by ZAP while active scanning a site.  
The responses are charted per 'HTTP response status code group':

* 1xx Informational
* 2xx Success
* 3xx Redirection
* 4xx Client Error
* 5xx Server Error

You can zoom in by selecting an area of the chart using your mouse.  
You can also right click the chart for more options.  
Vertical bars indicate approximately when each scan rule starts (it is very difficult to be precise).  
The chart will only be updated while open, if you close and then reopen the chart then the previous data will be lost.  
By default the maximum time the chart will cover is 10 minutes, you can change that via the [Options Active Scan screen](/docs/desktop/ui/dialogs/options/ascan/).

## Accessed via

|   |                                                 |   |
|---|-------------------------------------------------|---|
|   | [Active Scan tab](/docs/desktop/ui/tabs/ascan/) |   |

## See also

|   |                                      |                                       |
|---|--------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)     | for an overview of the user interface |
|   | [Dialogs](/docs/desktop/ui/dialogs/) | for details of the dialogs or popups  |

## External Links

|   |                                                           |   |
|---|-----------------------------------------------------------|---|
|   | <https://en.wikipedia.org/wiki/List_of_HTTP_status_codes> |   |
