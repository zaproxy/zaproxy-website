---
# This page was generated from the add-on.
title: gRPC Support
type: userguide
weight: 1
cascade:
  addon:
    id: grpc
    version: 0.2.0
---

# gRPC Support

This add-on will allow you to inspect, attack gRPC endpoints, decode and encode protobuf messages.

The add-on is still in an early stage, so the range of its functionality is limited. However, you can combine it with existing ZAP functionality to abuse gRPC endpoints in many different ways.

## Introducing the gRPC Add-on

This add-on aims to simplify the testing process by providing tools for:

* **Encoding and Decoding**: Easily encode and decode Protobuf messages for testing purposes.
* **Testing gRPC Endpoints**: You can combine it with existing ZAP functionality to abuse gRPC endpoints in many different ways.

## How to see gRPC decoded Message

In the Message View panel, change the Body to gRPC.
![gRPCResponseBody](/docs/desktop/addons/grpc-support/images/grpc-message-panel.png)

## Understanding Decoded Protobuf Messages

When decoding Protobuf messages, it's essential to understand the structure of the decoded data. Protobuf messages consist of fields, each with a field number, wire type, and value. Let's delve deeper into these components:

### Field Structure

* **Field Number**: Each field in a Protobuf message is assigned a unique field number. This number is used to identify and distinguish between different fields within the message.
* **Wire Type**: The wire type determines how the field's value is encoded and provides information about the type of data stored in the field.
* **Value**: The actual data contained within the field, encoded according to its wire type.

## Let's understand the decoded Protobuf Message Structure using below example

This is the Base64 encoded form of the binary text received by ZAP.

AAAAAIYJZCZMzMzcXkAVrseHQhi5YCDqrcDlJCixqAM1QEIPADOQSGVsbG8sIFByb3RvYnVmIUJMCgsxMjMgTWFpbiBTdBIGT X1DaXR5GgUxMjMONSIuCgtIZWxsbyBXb3JsZBIITXkgV29ybGQaCllvdXIgV29ybGQiCU91ciBXb3JsZEjqrcDLJA==

On the left side, we have the original message retrieved by the gRPC endpoint in the backend. On the right side, we have the decoded message from the above encoded text, processed by the ZAP gRPC addon.

![OriginalMessage](/docs/desktop/addons/grpc-support/images/original-message.png) ![DecodedMessage](/docs/desktop/addons/grpc-support/images/decoded-message.png)

* Each field in the message is represented as "field number:wire type::value".
* Each key-value pair starts on a new line.
* Additional specifiers are only used for double (`1D`), float (`5F`), and nested messages (`2N`).
* For wire type `2`, the value should be enclosed in double quotes, except for nested messages (`2N`).
* For nested messages(`2N`):
    * After the field number and wire type (`fieldNumber:2N::`), an open curly brace is placed and start adding nested message fields from new line.
    * The nested message is closed with a closing curly brace on a separate new line.
* Please don't use unnecessary space.

## Writing and Editing Decoded Protobuf Messages

You can only edit this Decoded Message in Requester and Manual request editor window simply change the part after ("::") which contain value or you can write new fields by following above mentioned rules.

![EditDemo](/docs/desktop/addons/grpc-support/images/edit-demo.gif)

## See also

|   |                                                                |                                                   |
|---|----------------------------------------------------------------|---------------------------------------------------|
|   | [gRPC Variant](/docs/desktop/addons/grpc-support/variant/)     | for information about the gRPC variant.           |
|   | [gRPC WebSocket](/docs/desktop/addons/grpc-support/websocket/) | for information about the gRPC WebSocket Support. |
