---
# This page was generated from the add-on.
title: WebSocket tab
type: userguide
weight: 1
---

# WebSocket tab


The WebSockets tab displays all messages from WebSocket connections.
While ZAP is active, visit e.g.: [Mozilla's BrowserQuest](http://browserquest.mozilla.org/)
to see WebSockets in action.

## Filters

### Channel Selector


You can restrict the display of messages to one specific WebSocket
channel or all.


If you select a specific channel, then the *Show handshake* button
(![](/docs/desktop/addons/websockets/images/handshake.png))
becomes enabled. When you click on it, the corresponding HTTP handshake is
shown in the Request/Response tab.

### Filter Dialog


In the filter dialog (![](/docs/desktop/addons/websockets/images/054.png))
you can further control which messages are displayed.

## Breakpoints


You can set custom breakpoints using the *Add Custom Breakpoints*
button (![](/docs/desktop/addons/websockets/images/break_add.png)).


Alternatively you can use the *Right click menu*.

## Right click menu


Right clicking on a WebSocket message will bring up a menu which will
allow you to:

### Exclude from WebSocket


WebSocket connections can be excluded from the WebSockets tab by adding
an excluded URL to the
*Session Properties*. Clicking on
this item, brings up the session properties with the URL pre-filled.
Excluding a WebSocket connection will not result in closing the
connection, but in forwarding them without further processing.

### Break...


This will bring up the
*Add Break Point dialog* which allows you to set up a custom break point.
