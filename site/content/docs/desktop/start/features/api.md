---
# This page was generated from the add-on.
title: API
type: userguide
weight: 5
---

# API

ZAP provides an Application Programming Interface (API) which allows you to interact with ZAP programmatically.

The API is available in JSON, HTML and XML formats.  
A simple web UI which allows you to explore and use the API is available via the URL <http://zap/>
when you are proxying via ZAP, or via the host and port ZAP is listening on, eg
<http://localhost:8080/>.  

By default only the machine ZAP is running on is able to access the API. You can allow other machines, that are able to use ZAP
as a proxy, access to the API. The API is configured using the [Options API screen](/docs/desktop/ui/dialogs/options/api/).

The API provides access to most of the core ZAP features such as the
[active scanner](/docs/desktop/start/features/ascan/).  
Future versions of ZAP will increase the functionality available via the APi.

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |
