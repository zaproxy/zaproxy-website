---
# This page was generated from the add-on.
title: HTTP Sessions
type: userguide
weight: 13
---

# HTTP Sessions

This tool keeps track of the existing HTTP Sessions on a
particular Site and allows the ZAP user to force all requests to
be on a particular session. Basically, it allows the user to easily
switch between user sessions on a Site and to create a new Session
without "destroying" the existing ones.


The tool is only intended for manual testing and should not be used in automation -
there are much better alternatives.
If you are new to ZAP automation then the best place to start is the ZAP
[Authentication Decision Tree](/docs/authentication/) (external link).


It is based on the concept of Session Tokens, which are HTTP message
parameters (for now only Cookies) which allow an HTTP server to
connect a request message with any previous requests or data stored.
In the case of ZAP, conceptually, session tokens have been
classified into 2 categories: default session tokens and site session
tokens. The default session tokens are the ones that the user can set
in the [Options
screen](/docs/desktop/ui/dialogs/options/httpsessions/) and are tokens that are, by default, automatically considered
session tokens for any site (eg. phpsessid, jsessionid, etc). The site
session tokens are a set of tokens for a particular site and are
usually set up using the popup menus available in the [Params Tab](/docs/desktop/ui/tabs/params/).


This tool automatically detects, using the defined session tokens or
the automatically detected default session tokens, any HTTP session
which exists in the communication. The detected sessions are shown in
the [HTTP Sessions Tab](/docs/desktop/ui/tabs/httpsessions/).


The user can, using the button available on the [HTTP Sessions Tab](/docs/desktop/ui/tabs/httpsessions/), create
a new session without destroying the existing one, or can force one of
the sessions as 'active'. When a session is 'active', all the outbound
requests sent to the corresponding Site are modified, the session
tokens being set up to match the active session. In this way, the user
can easily force some messages to be 'part of' a particular session
and then switch and send messages on another session.


The HTTP Sessions tool is configured using the [HTTP Sessions
Options screen](/docs/desktop/ui/dialogs/options/httpsessions/).

## Accessed via

|   |                                                          |   |
|---|----------------------------------------------------------|---|
|   | [HTTP Sessions tab](/docs/desktop/ui/tabs/httpsessions/) |   |

## See also

|   |                                                                                |                                       |
|---|--------------------------------------------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                               | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/)                                      | provided by ZAP                       |
|   | [HTTP Sessions Options screen](/docs/desktop/ui/dialogs/options/httpsessions/) | for an overview of the tool's Options |
|   | [Params Tab](/docs/desktop/ui/tabs/params/)                                    | for an overview of Params Tab         |
