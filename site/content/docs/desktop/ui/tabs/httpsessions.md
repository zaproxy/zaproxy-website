---
# This page was generated from the add-on.
title: HTTP Sessions tab
type: userguide
weight: 11
---

# HTTP Sessions tab

This tab shows you the set of identified HTTP sessions for each Site,
as detected by the [HTTP
Sessions extension](/docs/desktop/start/features/httpsessions/).

The current Site the information is referring to can be selected via
the toolbar or the [Sites tab](/docs/desktop/ui/tabs/sites/).

The toolbar provides a button ("New Session") which allows you
to start a new session, forcing all outgoing request messages to be
without the session tokens set, so the server considers it's a new
session. This allows the creation of a new session, without destroying
the old one.

Each of the entries in the Sessions table (each session)
initially has a generated name, but it can be changed by selecting the
'Name' cell and editing it.

Each of the entries in the Sessions table can be right clicked,
which activates the Popup Menu, with the following options:

* Copy Session Token Value - copies the value of the selected session to the clipboard.
* Remove Session - deletes the session
* Find Related Messages - Will cause the [Search tab](/docs/desktop/ui/tabs/search/) to become active, displaying results based on a search with the string displayed in the "Session Tokens' Values" column for the session which was right clicked.
* Set as active (available only on non-active sessions) - marks this session as active. If any session was previously set as active, it will be unset as active and, if it doesn't specify any token values, it is deleted.
* Unset as active (available only on the active session) - marks this session as not being active anymore. If the session doesn't specify any token values, it is deleted.

*Regarding the active session, more details can be read on the
general features help page of the [HTTP Sessions
extension](/docs/desktop/start/features/httpsessions/)*   

For each session you can see:

* Active - Whether this is the active session or not
* Name - The session name
* Session Tokens' Values - the list of values associated to each of the session tokens. The entries are separated by the ';' symbol.
* Messages Matched - the number of HTTP messages that have been matched by the extension with this session

## See also

|   |                                                                                |                                            |
|---|--------------------------------------------------------------------------------|--------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                               | for an overview of the user interface      |
|   | [HTTP Sessions Extension](/docs/desktop/start/features/httpsessions/)          | for an overview of the extension           |
|   | [HTTP Sessions Options screen](/docs/desktop/ui/dialogs/options/httpsessions/) | for an overview of the extension's Options |
