---
# This page was generated from the add-on.
title: Options Active Scan Input Vectors screen
type: userguide
weight: 2
---

# Options Active Scan Input Vectors screen


This screen allows you to configure the [active scan](/docs/desktop/start/features/ascan/) input vectors.  

These are the elements that the active scanner will attack.  

Scanning all of the elements supported will take longer, but not scanning some elements may cause some vulnerabilities to be missed.

### Injectable Targets

The request elements that the active scanner will target:

#### URL Query String \& Data Driven Nodes

Key value pairs in the request URL query, ie after the `?`.  
If [Data Driven Nodes](/docs/desktop/start/features/ddc/) are defined within a Context they will be tested.

##### Add URL Query Parameter?

When selected ZAP will add a query parameter to GET requests which did not originally have one. This may increase scan time, however, it may also reveal issues that would otherwise go un-noticed.

#### POST Data

Key value pairs in the request POST data.

#### Plain Body Data

When selected ZAP will process requests with body content and either no or text/plain content-type as a single input/parameter for testing purposes.

#### URL Path

Path elements in the request URL, ie the elements separated by `/`.

#### HTTP Headers

Request HTTP Headers.

##### All Requests

Allows to scan the HTTP Headers of all requests. Not just requests that send parameters, through the query or request body.

#### Cookie Data

Request cookies.

##### Encode Cookie Values

If selected the cookie values will be URL encoded when attacked. By default they will not be encoded - this is new in ZAP 2.15.0, previously they were always encoded.

### Build-in Input Vector Handlers

The data formats that the active scanner will target:

|   |                     |   |
|---|---------------------|---|
|   | Multipart Form Data |   |
|   | XML tag/attribute   |   |
|   | JSON                |   |
|   | Google Web Toolkit  |   |
|   | OData id/filter     |   |

### Enable Script Input Vectors

If this option is selected then the active scanner will use any enabled script input vectors.  
Script input vectors are scripts which you have written or imported into ZAP and allow you to target elements which are not supported by default.


This screen also allows you to configure the parameters which will be ignored by the active scanner.


Refer to `Parameter` section in [Add Alert](/docs/desktop/ui/dialogs/addalert/) dialogue for more details about the
parameter names.

## See also

|   |                                                                           |                                                 |
|---|---------------------------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                          | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/)                      | for details of the other Options dialog screens |
|   | [Active Scan Input Vectors](/docs/desktop/ui/dialogs/options/ascaninput/) |                                                 |
