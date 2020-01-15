---
# This page was generated from the add-on.
title: WebSocket API
type: userguide
weight: 5
---

# WebSocket API

## Views

### channels

Returns all of the registered web socket channels.

### message

Mandatory Parameters:

* channelId: the channel identifier
* messageId: the message identifier

Returns full details of the specified message.  
The 'channelId' and 'messageId' can be discovered via the 'messages' view.

### messages

Optional Parameters:

* channelId: the channel identifier
* start: the offset to start returning messages from, starting from 0.
* count: the number of messages to return.
* payloadPreviewLength: the maximum number bytes to return for the payload contents.

Returns a list of all of the messages that meet the given criteria - by default all messages are returned  
The channelId can be discovered via the 'channels' view.  
The 'start' and 'count' parameters can be used to page through the messages  
The 'payloadPreviewLength' can be used to restrict the size of the data returned.  

## Actions

### sendTextMessage

Mandatory Parameters:

* channelId: the channel identifier
* outgoing: 'True' if the message is to be sent to the server and 'False' if it is to be sent to the client
* message: the message to send

Sends the specified message on the specified channel.  
The channelId can be discovered via the 'channels' view.  
