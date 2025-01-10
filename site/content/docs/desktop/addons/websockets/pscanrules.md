---
# This page was generated from the add-on.
title: WebSocket Passive Scan Rules
type: userguide
weight: 6
---

# WebSocket Passive Scan Rules

## Scripts {#scripts}

Scripts which are included by default in the add-on and they implement the following WebSocket passive scan rules:

### Base64 Disclosure

This script analyzes incoming WebSocket message payload for Base64 strings. The encoded information may include sensitive data which may not specifically meant for end user consumption.  
The regular expression which is used to identify the Base64 string is based on padding characters. As result False Negative may occur if the encoded string has length N bits where (N)mod6 = 0. On the other hand, False Positives may occur if the input text contains strings ending with '='.   


Examples:

|   Original   |           Payload           |    Outcome     |
|--------------|-----------------------------|----------------|
| Hello World  | SGVsbG8gV29ybGQ=            | True Positive  |
| Hello World  | THIS_ISSGVsbG8gV29ybGQ=TEXT | True Positive  |
| Hello World! | SGVsbG8gV29ybGQK            | False Negative |
| 122==122     | *Invalid*                   | False Positive |


Default Values:

|                |        |
|----------------|--------|
| **Risk**       | Info   |
| **Confidence** | Medium |

### Information Disclosure: Application Errors

This passive scanner checks incoming WebSocket message payload for known Application Error messages. Access to such details may provide a malicious individual with means by which to further abuse the web site. They may also leak data not specifically meant for end user consumption.  


Examples:

|                                                  Use case                                                   |    Outcome    |
|-------------------------------------------------------------------------------------------------------------|---------------|
| Warning: Cannot modify header information - headers already sent                                            | True Positive |
| 'this' is null or not an object                                                                             | True Positive |
| System.Data.OleDb.OleDbException: Syntax error in string in query expression 'User ID = ? And Password = ?' | True Positive |


Default Values:

|                |                                                    |
|----------------|----------------------------------------------------|
| **Risk**       | Medium                                             |
| **Confidence** | Medium                                             |
| **CWE ID**     | 209: Information Exposure Through an Error Message |
| **WASC ID**    | 13: Information Leakage                            |

### Information Disclosure: Credit Card Number

This script scans for the presence of Personally Information Identifiable in incoming WebSocket message payload. More specifically, it passively scans payload for credit card numbers. The available scans are for the following credit card types: {American Express, Diners Club, Discover, Jcb, Maestro, Master Card, Visa}.  


Examples:

|         Use case         |    Outcome     |
|--------------------------|----------------|
| 5264 8109 66944441       | True Positive  |
| {"z":0.4333009597918351} | False Positive |


Default Values:

|                |                                                            |
|----------------|------------------------------------------------------------|
| **Risk**       | High                                                       |
| **Confidence** | High                                                       |
| **CWE ID**     | 359: Exposure of Private Information ('Privacy Violation') |
| **WASC ID**    | 13: Information Leakage                                    |

### Information Disclosure: Debug Errors

This script checks the incoming WebSocket message payload for known Debug Error message fragments. Access to such details may provide a malicious individual with means by which to further abuse the web site. They may also leak data not specifically meant for end user consumption.  


Examples:

|                   Use case                    |    Outcome    |
|-----------------------------------------------|---------------|
| Error Occurred While Processing Request       | True Positive |
| PHP Warning: Error While Sending QUERY Packet | True Positive |


Default Values:

|                |                           |
|----------------|---------------------------|
| **Risk**       | Info                      |
| **Confidence** | Medium                    |
| **CWE ID**     | 200: Information Exposure |
| **WASC ID**    | 13: Info Leakage          |

### Information Disclosure: Email address

This script scans incoming WebSocket messages for email addresses. Email addresses may be not specifically meant for end user consumption.  


Default Values:

|                |                           |
|----------------|---------------------------|
| **Risk**       | Info                      |
| **Confidence** | Info                      |
| **CWE ID**     | 200: Information Exposure |
| **WASC ID**    | 13: Information Leakage   |

### Information Disclosure: Suspicious XML Comments

This script checks incoming WebSocket messages payloads, which are XML formatted, for suspicious comments. The comments it is searching for are relevant to components with which an attacker can extract useful information. Comments like FIXME, BUG, etc. might be helpful for further attacks targeting the weaknesses of the web application.  


Examples:

|                             Use case                             |    Outcome    |
|------------------------------------------------------------------|---------------|
| ``` <xml_test><!-- This is a comments section --></xml_test> ``` | True Negative |
| ``` <user_form><!-- FIXME: Encode --></user_form> ```            | True Positive |


Default Values:

|                |                           |
|----------------|---------------------------|
| **Risk**       | Info                      |
| **Confidence** | Medium                    |
| **CWE ID**     | 200: Information Exposure |
| **WASC ID**    | 13: Info Leakage          |

### Private Address Disclosure {#ip_add_disc}

Checks incoming WebSocket message payload for inclusion of RFC 1918 IPv4 addresses as well as Amazon EC2 private hostnames (for example, ip-10-0-56-78). This information can give an attacker useful information about the IP address scheme of the internal network, and might be helpful for further attacks targeting internal systems.   
This passive scanner may generate false positives in the case of larger dotted numeric strings, such as vp09.02.51.10.01.09.16, where the latter 4 octets appear to be a RFC 1918 IPv4 address. After review an analyst can mark such alerts as False Positives in ZAP.  


Examples:

|    Use case    |    Outcome    |
|----------------|---------------|
| 10.255.255.255 | True Positive |
| ip-10.0.0.0    | True Positive |


Default Values:

|                |        |
|----------------|--------|
| **Risk**       | Low    |
| **Confidence** | Medium |

### Username Disclosure

Checks incoming WebSocket message payload for usernames. This script can find usernames which are hashed with the following methods: {MD2, MD5, SHA256, SHA384, SHA512}. The usernames have to be defined in any context before. In order to a add user in a Context follow the steps below:

1. Include the handshake request in \`Context\`
2. Set the target user in \`Session Context\`


Default Values:

|                |                               |
|----------------|-------------------------------|
| **Risk**       | Info                          |
| **Confidence** | High                          |
| **CWE ID**     | 284: Improper Access Control  |
| **WASC ID**    | 2: Insufficient Authorization |
