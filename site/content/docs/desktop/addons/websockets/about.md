---
# This page was generated from the add-on.
title: Web Sockets - About
type: userguide
weight: 7
---

# Web Sockets - About

## Source Code

<https://github.com/zaproxy/zap-extensions/tree/main/addOns/websocket>

## Authors

ZAP Dev Team

## History

### Version 19 - 2019-06-07

* Fix exceptions when handling/dispatching events.
* Add wrapper to websocket API responses.
* Fix exception when handling API request with no API implementor.
* Correct output stream used in server mode.
* Add support for 'other' API operations.
* Handle API options.
* Validate the Origin for API connections.
* Generate websocket events.
* Add break API endpoints.
* Scale fonts and icons correctly

### Version 18 - 2018/08/01

* Allow to reopen WebSocket connection to (re)send messages (Issue 4290).

### Version 17 - 2018/07/13

* Register WebSocket Sender script type also in daemon mode.
* Fix an exception when dispatching events.
* Fix an exception while uninstalling the add-on with no GUI (Issue 4815).
* Remove event consumers when channel is no longer in expected state.

### Version 16 - 2018/06/05

* Tweak About help page.
* Remove event consumers when the channel is closed.
* Don't enable the sender scripts by default.
* Fix send of CLOSE messages with message editor (Issue 4657).
* Add missing error message.
* Fix removal of pop up menu items.
* Allow to filter by payload in WebSocket tab (Issue 1382).
* Show string representation of binary payloads in WebSocket tab and message panels.

### Version 15

* Remove usage of core filter functionality.
* Do not set messages when switching views if text view shows an error message (Issue 4108)
* Add rewind to fix issue #4149
* Added Websocket Sender script interface
* Added API support

### Version 14

* Updated for 2.7.0.

### Version 13

* Fix context include/exclude pop up menu items.
* Fix/correct help buttons.
* Set fuzzer script type enabled by default (Issue 2997).
* Normalise the Session Properties panel Exclude from WebSockets.
* Implements WebSocketSenderListener.
* Use JRE decoder for UTF-8 conversions and log (debug) invalid payloads (related to Issue 3324).
* Focus WebSockets tab just once (Issue 3747).
* Minor code adjustment to align with core changes.
* Code changes for Java 9 (Issue 2602).
* Remove header Sec-WebSocket-Extensions (Issue 3324).
* Add description to Fuzzer WebSocket Processor script type.
* Update fuzzer template (use JSDoc and fix typos).
