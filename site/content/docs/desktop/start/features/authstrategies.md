---
# This page was generated from the add-on.
title: Authentication Verification Strategies
type: userguide
weight: 8
---

# Authentication Verification Strategies

## Verification Strategies {#response}

ZAP supports multiple **Verification Strategies** in order to detect when messages correspond to authenticated requests.

### Check every Response {#response}

When this strategy is used then ZAP will use the specified Regex Patterns on every response. This is typically useful for traditional webapps which return full HTML pages.

### Check every Request {#response}

When this strategy is used then ZAP will use the specified Regex Patterns on every request. This is typically useful for modern webapps which maintain some session state client side, such as a JWT, which is submitted with every request.

### Check every Request or Response {#response}

When this strategy is used then ZAP will use the specified Regex Patterns on both the request and response of every message.

### Poll the Specified URL {#response}

When this strategy is used then ZAP will poll the specified URL at the given frequency. Messages will be treated as logged in or logged out based on the last poll request. The specified Regex Patterns will only be used on the response to the poll request. This strategy is typically useful for any application for which there is at least one URL that can reliably be used to detect if a user is logged in or out.

## Regex Patterns {#regex}

All of the strategies use 2 Regex Patterns to tell if a specified message is logged in or not. You can supply one or both regexes - if you do not supply either then the Authentication Strategy will not be used.


To set one of the **Logged in/out Indicators** , either type the regex
directly in the *[Session
Context Authentication screen](/docs/desktop/ui/dialogs/session/context-auth/) dialog -\> Authentication panel -\> Logged In/Out Indicator field* ,
or find an authenticated message in the Sites Tree or History tab, select it, open the
Response View and select the text you wish to define as the indicator using the
mouse and select the *Flag as Context... Logged in/out indicator* right-click menu option.

## Configured via

|   |                                                                              |   |
|---|------------------------------------------------------------------------------|---|
|   | [Session Properties dialog](/docs/desktop/ui/dialogs/session/contexts/#auth) |   |

## See also

|   |                                                                       |                                                                                                                                   |
|---|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
|   | [Authentication](/docs/desktop/start/features/authentication/)        | overview                                                                                                                          |
|   | [Youtube tutorial](https://youtu.be/cR4gw-cPZOA)                      | of the Authentication, Session Management and Users Management features of ZAP \[external link to https://youtu.be/cR4gw-cPZOA\]. |
|   | [UI Overview](/docs/desktop/ui/)                                      | for an overview of the user interface                                                                                             |
|   | [Features](/docs/desktop/start/features/)                             | provided by ZAP                                                                                                                   |
|   | [Session Contexts Dialog](/docs/desktop/ui/dialogs/session/contexts/) | for an overview of the Session Properties                                                                                         |
|   | [Users](/docs/desktop/start/features/users/)                          | for an overview of Users                                                                                                          |
|   | [Anti-CSRF tokens](/docs/desktop/start/features/anticsrf/)            | for an overview of anti-CSRF tokens                                                                                               |
