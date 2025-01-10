---
# This page was generated from the add-on.
title: Session Management
type: userguide
weight: 23
---

# Session Management


ZAP handles multiple types of session management (called **Session
Management Methods** ) that can be used for websites / webapps. Each **[Context](/docs/desktop/start/features/contexts/)** has a Session Management
Method defined which dictates how sessions are kept.

### Cookie-Based Session Management {#cbsm}


In the case of this method the session is being tracked through
cookies. Currently, the session tokens that are used are imported from
the [HTTP Sessions](/docs/desktop/start/features/httpsessions/) Extension.

### HTTP Authentication Session Management {#hasm}


In the case of this method the session is managed with HTTP request header `Authorization`.

### Script-Based Session Management {#sbsm}


This method is useful for websites / webapps where the session management is a more complex one and some custom
scripts that handle the process are beneficial. To use this method, you must first define a Session Management script
which analyses messages or performs other actions as needed by your web-application. This script is then selected for use for a given Context
and it is called whenever session management actions are performed.
Configuration can be done using the [Session
Contexts Dialog](/docs/desktop/ui/dialogs/session/contexts/#sm) and requires you to have the Scripts Console ZAP Addon installed from the Marketplace.

## Configured via

|   |                                                                          |   |
|---|--------------------------------------------------------------------------|---|
|   | [Session Contexts Dialog](/docs/desktop/ui/dialogs/session/contexts/#sm) |   |

## See also

|   |                                                                       |                                                                                                                                   |
|---|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
|   | [Youtube tutorial](https://youtu.be/cR4gw-cPZOA)                      | of the Authentication, Session Management and Users Management features of ZAP \[external link to https://youtu.be/cR4gw-cPZOA\]. |
|   | [UI Overview](/docs/desktop/ui/)                                      | for an overview of the user interface                                                                                             |
|   | [Features](/docs/desktop/start/features/)                             | provided by ZAP                                                                                                                   |
|   | [Session Contexts Dialog](/docs/desktop/ui/dialogs/session/contexts/) | for an overview of the Session Properties                                                                                         |
