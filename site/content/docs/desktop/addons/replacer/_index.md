---
# This page was generated from the add-on.
title: Replacer
type: userguide
weight: 1
cascade:
  addon:
    id: replacer
    version: 19.0.0
---

# Replacer

The replacer is an easy way to replace strings in requests and responses.

It is accessible via the Options and by default it can be quickly accessed via the '\<ctrl\> R' hotkey.

It also supports the [Automation Framework](/docs/desktop/addons/replacer/automation/).

The Replacer Options panel allows you to define as many replacement rules as you need.  
Each rule is defined by the following fields:

### Description

A description that allows you to identify the rule.

### URL

A regular expression to match the URL of the message, if empty the rule applies to all messages.  
For example, allows to restrict the rules to certain domains when providing authentication credentials.

### Match Type

May be one of:

#### Request Header (will add if not present)

In this case the 'Match String' will be treated as a header name. If the header is present then its value will be replaced by the replacement text. If the replacement text is empty then the header will be removed (if present). If the header is not present and the replacement text is not empty then the header will be added.

#### Request Header String

In this case the 'Match String' will be treated as a string or regex expression. If it is present in the request header then it will be replaced by the replacement text.

##### Host Header

Both the Request Header and Request Header String match types can change/remove the Host header, while sending the message to the original request-target.

#### Request Body String

In this case the 'Match String' will be treated as a string or regex expression. If it is present in the request body then it will be replaced by the replacement text.

#### Response Header (will add if not present)

In this case the 'Match String' will be treated as a header name. If the header is present then its value will be replaced by the replacement text. If the replacement text is empty then the header will be removed (if present). If the header is not present and the replacement text is not empty then the header will be added.

#### Response Header String

In this case the 'Match String' will be treated as a string or regex expression. If it is present in the response header then it will be replaced by the replacement text.

#### Response Body String

In this case the 'Match String' will be treated as a string or regex expression. If it is present in the response body then it will be replaced by the replacement text.

### Match String

The string that will be used to identify what should be replaced - see Match Type for details.

### Match Regex

If set then the Match String will be treated as a regex expression. This option is disabled when matching actual headers. Hexadecimal bytes are represented with "\\x00 - \\xFF" (for example "abc\\x01\\x02\\x03def").

### Replacement String

The new string that will replace the specified selection.
Hexadecimal bytes are represented with "\\x00 - \\xFF".
The literal string "\\x00" can be kept with "\\\\x00".

### Enable

If not set then the rule will not apply.

### Token Processing

When enabled, the Replacement String may contain a single token which is replaced with a dynamic value:

|       Token        |                                                                                                Description                                                                                                |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| {{RINT\|MIN\|MAX}} | Random Integer. `MIN` and `MAX` are each optional. `MIN` defaults to `0` `MAX` defaults to [Integer.maxValue](https://docs.oracle.com/javase/8/docs/api/constant-values.html#java.lang.Integer.MAX_VALUE) |
| {{UUID}}           | Random UUID generated using [java.util.UUID.randomUUID()](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html#randomUUID--)                                                                     |
| {{TICKS}}          | Unix epoch milliseconds using [System.currentTimeMillis()](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#currentTimeMillis--)                                                           |

**Note:** This option applies only to the following Match Types:

* Request Header String
* Request Body String
* Response Header String
* Response Body String

### Initiators tab

Allows you to specify which 'initiators' the rule should apply to. Each ZAP component which can send and receive messages is a separate initiator, so this gives you a very fine grain control over exactly when the rule should apply.

If you need even more control over when and how text should be replaced then you can use the ZAP Script Console which
gives you complete control over the ZAP messages.
