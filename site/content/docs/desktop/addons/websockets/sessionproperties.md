---
# This page was generated from the add-on.
title: WebSocket specific session properties
type: userguide
weight: 3
---

# WebSocket specific session properties


## Exclude from WebSocket

This allows you to manage the URLs where WebSocket communication is not processed in ZAP.   
Although all messages from excluded URLs are forwarded, nothing is stored nor can you view them in the user interface. This feature is useful for high volume, performance critical WebSocket connections.   
You can differentiate on the port for one given domain, by using e.g.: *example.com:443* to exclude WebSocket connections from example.com only on port 443.
