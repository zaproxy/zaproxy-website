---
title: "Script Types"
type: page
tags: 
- scripts
EditableContent: true
addBreadcrumbs: true
---

ZAP supports the following script types:

| Name                          | Key / Examples | Description |
| ----------------------------- | -------------- | ----------- |
| Active Rules                  | [active](https://github.com/zaproxy/community-scripts/tree/main/active) | Scripts that run as part of the Active Scanner to perform custom scan checks. |
| Authentication                | [authentication](https://github.com/zaproxy/community-scripts/tree/main/authentication) | Scripts invoked when performing authentication for a Context. |
| Encode / Decode               | [encode-decode](https://github.com/zaproxy/community-scripts/tree/main/encode-decode) | Scripts that provide custom data encoding and decoding. |
| Extender                      | [extender](https://github.com/zaproxy/community-scripts/tree/main/extender) | Scripts that add new functionality, including UI elements and API endpoints. |
| Fuzzer HTTP Processor         | [httpfuzzerprocessor](https://github.com/zaproxy/community-scripts/tree/main/httpfuzzerprocessor)  | Scripts that process HTTP fuzzer messages before or after sending. |
| Fuzzer Websocket Processor    | [websocketfuzzerprocessor](https://github.com/zaproxy/community-scripts/tree/main/websocketfuzzerprocessor) | Scripts that process WebSocket fuzzer messages. |
| HTTP Sender                   | [httpsender](https://github.com/zaproxy/community-scripts/tree/main/httpsender) | Scripts that run for every HTTP request and response processed by ZAP. |
| Input Vector                  | [variant](https://github.com/zaproxy/community-scripts/tree/main/variant) | Scripts that define exactly what the Active Scanner will attack. |
| Passive Rules                 | [passive](https://github.com/zaproxy/community-scripts/tree/main/passive) | Scripts that run as part of the Passive Scanner to perform custom checks. |
| Payload Generator             | [payloadgenerator](https://github.com/zaproxy/community-scripts/tree/main/payloadgenerator) | Scripts that generate payloads for fuzzing. |
| Payload Processor             | [payloadprocessor](https://github.com/zaproxy/community-scripts/tree/main/payloadprocessor) | Scripts that process or modify payloads during fuzzing. |
| Proxy                         | [proxy](https://github.com/zaproxy/community-scripts/tree/main/proxy) | Scripts that run inline on proxied traffic and can modify and drop requests and responses. |
| Selenium                      | [selenium](https://github.com/zaproxy/community-scripts/tree/main/selenium) | Scripts that automate browser interactions using browsers launched from ZAP. |
| Sequence                      | [sequence](https://github.com/zaproxy/community-scripts/tree/main/sequence) | Scripts that define sequences of HTTP requests to model workflows. |
| Session Management            | [session](https://github.com/zaproxy/community-scripts/tree/main/session) | Scripts that define how sessions are managed for a Context. |
| Stand Alone                   | [standalone](https://github.com/zaproxy/community-scripts/tree/main/standalone) | Scripts that are run manually. |
| Targeted                      | [targeted](https://github.com/zaproxy/community-scripts/tree/main/targeted) | Scripts that are run manually against a specified target URL. |
| Websocket Passive             | [websocketpassive](https://github.com/zaproxy/community-scripts/tree/main/websocketpassive) | Scripts that analyse WebSocket messages without modifying traffic. |
| Websocket Sender              | [websocketsender](https://github.com/zaproxy/community-scripts/tree/main/websocketsender) | Scripts that run for every Websocket message processed by ZAP. |

The links in the **Key / Examples** column point to the corresponding directories in the ZAP
[community-scripts](https://github.com/zaproxy/community-scripts) repository, which contains example scripts contributed by the community for each script type.

