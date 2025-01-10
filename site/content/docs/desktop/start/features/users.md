---
# This page was generated from the add-on.
title: Users
type: userguide
weight: 29
---

# Users


Users are the ZAP representations of websites/webapps' users. They
allow certain actions to be performed from the point of view of an
user of the webapps. For each **[Context](/docs/desktop/start/features/contexts/)**,
a set of Users can be defined, which can then be used in actions
related to the context. Most commonly, during various scans the
request messages can be sent from the point of view of a User.


The concept of Users is tightly tied to the concepts of [Session Management](/docs/desktop/start/features/sessionmanagement/) and [Authentication](/docs/desktop/start/features/authentication/). When a User is first
used somewhere in ZAP, an authentication is performed (according to
the Authentication Method defined for the Context) and a Session is
created and configured for this user (according to the Session
Management defined for the Context). After that, requests sent from
the point of view of a User are modified (if necessary) and sent in
such a way that the web server identifies them as being sent by an
authenticated webapp/website user. If anytime a User appears to
be unauthenticated (as determined by the
[Authentication Verification Strategy](/docs/desktop/start/features/authstrategies/)), a new
authentication is performed and the Session is updated accordingly.

In order to perform the authentication of a user on a website /
in a webapp, the Authentication Method defines how the authentication
is done (the process), while the necessary credentials (the exact
identifiers) are dependent on the user, so, in ZAP, they are
configured in the Users.

## Configured via

|   |                                                                             |   |
|---|-----------------------------------------------------------------------------|---|
|   | [Session Contexts Dialog](/docs/desktop/ui/dialogs/session/contexts/#users) |   |

## See also

|   |                                                                         |                                                                                                                                   |
|---|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
|   | [Youtube tutorial](https://youtu.be/cR4gw-cPZOA)                        | of the Authentication, Session Management and Users Management features of ZAP \[external link to https://youtu.be/cR4gw-cPZOA\]. |
|   | [Authentication Overview](/docs/desktop/start/features/authentication/) | for an overview of Authentication in ZAP                                                                                          |
|   | [UI Overview](/docs/desktop/ui/)                                        | for an overview of the user interface                                                                                             |
|   | [Features](/docs/desktop/start/features/)                               | provided by ZAP                                                                                                                   |
|   | [Session Contexts Dialog](/docs/desktop/ui/dialogs/session/contexts/)   | for an overview of the Session Properties                                                                                         |
