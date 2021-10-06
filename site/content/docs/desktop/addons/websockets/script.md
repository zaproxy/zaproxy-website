---
# This page was generated from the add-on.
title: WebSocket Scripts
type: userguide
weight: 4
---

# WebSocket Scripts

## WebSocket Sender

WebSocket Sender scripts are called before forwarding the WebSocket message frame to the server or client and can access and change any WebSocket message that is proxied via ZAP.  
They are initially disabled, to enable them right click the relevant script in the Scripts tree and select "enable".  
A template script is provided which gives details of the methods and parameters supported.

## Fuzzer WebSocket Processor

Fuzzer WebSocket Processor scripts are called before forwarding a fuzzed WebSocket message to the client/server. The payloads will have already been injected at this point.  
A template script is provided which gives details of the methods and parameters supported.

## WebSocket Passive Rules

WebSocket Passive Scan scripts are called every time a WebSocket message frame is transmitted over a WebSocket connection. Scripts can access WebSocket messages in order to examine the payload and raise an alert.  
All of the default scripts are registered and enabled on start up. If you do not want them to run by default then right click the relevant scripts and select 'disable'. If you delete them then they will be added and enabled again when you restart ZAP.  
Template scripts are provided which give details of the methods and parameters supported.  
In the [WebSocket Passive Scan Rules](/docs/desktop/addons/websockets/pscanrules/#scripts) section, there are descriptions for scripts which are included by default in the add-on.
