---
# This page was generated from the add-on.
title: OAST API
type: userguide
weight: 2
---

# OAST API

The following operations are supported by the API:

### Views

* getActiveScanService: Gets the service used with the active scanner, if any.
* getBoastOptions: Gets the BOAST options.
* getCallbackOptions: Gets the Callback options.
* getDaysToKeepRecords: Gets the number of days the OAST records will be kept for.
* getInteractshOptions: Gets the Interactsh options.
* getServices: Gets all of the services.

### Actions

* setActiveScanService (name\*): Sets the service used with the active scanner.
    * name: The name of the service.
* setBoastOptions (server\* pollInSecs\*): Sets the BOAST options.
    * server: The server URL.
    * pollInSecs: The polling frequency.
* setCallbackOptions (localAddress\* remoteAddress\* port\*): Sets the Callback options.
    * localAddress: The local address
    * remoteAddress: The remote address.
    * port: The port to listen on.
* setDaysToKeepRecords (days\*): Sets the number of days the OAST records will be kept for.
    * days: The number of days.
* setInteractshOptions (server\* pollInSecs\* authToken\*): Sets the Interactsh options.
    * server: The server URL.
    * pollInSecs: The polling frequency.
    * authToken: The Interactsh authentication token.

## See also

|   |                                                              |   |
|---|--------------------------------------------------------------|---|
|   | [OAST Services](/docs/desktop/addons/oast-support/services/) |   |
