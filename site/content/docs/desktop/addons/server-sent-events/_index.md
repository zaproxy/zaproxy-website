---
# This page was generated from the add-on.
title: Server-Sent Events
type: userguide
weight: 1
cascade:
  addon:
    id: sse
    version: 13.0.0
---

# Server-Sent Events

Server-Sent Events can be used by web applications or web sites to setup a
uni-directional (one-way) communication channel over a single TCP connection.


You can use it for push notifications from a server to a browser client.
Server-Sent Events sometimes provide an alternative to
usages of Ajax, HTTP Long Polling or Comet.


In the browser you can use Server-Sent Events via the *EventSource API* .
This API belongs to HTML5 and is standardized by the W3C:
<http://www.w3.org/TR/eventsource/>

ZAP is able to:

* intercept and show Server-Sent Events

Server-Sent Events are displayed within the [Server-Sent Events tab](/docs/desktop/addons/server-sent-events/tab/).

