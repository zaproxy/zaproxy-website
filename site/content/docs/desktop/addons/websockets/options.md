---
# This page was generated from the add-on.
title: WebSocket specific options
type: userguide
weight: 2
---

# WebSocket specific options


This screen allows you to configure the WebSocket options:

### Forward all

If you're not interested in WebSockets communication, but you want to allow its messages being sent back \& forth through ZAP, then you should enable this option. As a result no message will be stored in the session database. Moreover no message will appear in the WebSockets tab. This setting can be useful if you have to deal with performance critical WebSocket connections and you're not interested what is being sent.   

If you want to ignore just one specific channel, check out the WebSocket specific *Session Properties* .

### Break on all

In the *Break* toolbar, there are two buttons:

* ![](/docs/desktop/addons/websockets/images/105.png) *Set break on all requests*
* ![](/docs/desktop/addons/websockets/images/106.png) *Set break on all responses*

When you enable this option, then all outgoing (respectively incoming) WebSocket messages are also caught by these control buttons.   

By default this option is disabled. In this case only HTTP messages are caught, but you can add explicit breakpoints on WebSocket communication in the [WebSocket tab](/docs/desktop/addons/websockets/tab/).

### Break on Ping \& Pong messages

*PING* and *PONG* messages are often used by WebSocket servers to determine the health of the current connection. If you catch an incoming *PING* message, the browser is not able to return a *PONG* message immediately, resulting in a bad latency value.   

If this option is disabled no *PING* or *PONG* message is caught when you:

* set a breakpoint on ++all requests++ or ++all responses++ , *or*
* step through to the next request or response and a *PING* or *PONG* message arrives

This setting does not affect breakpoints that are set explicitly on *PING* or *PONG* messages. You can view such explicit breakpoints in the *Breakpoints tab* .

### Remove `Sec-WebSocket-Extensions` header

Allows to remove the HTTP header `Sec-WebSocket-Extensions` from handshake messages, so no transformations are done to the WebSocket messages sent/received.  
This option should always be enabled unless the client or the server under test requires them. The WebSocket messages might not be correctly processed by ZAP when extensions are used.
