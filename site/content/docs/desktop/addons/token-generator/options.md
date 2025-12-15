---
# This page was generated from the add-on.
title: Options Token Generator Screen
type: userguide
weight: 1
---

# Options Token Generator screen


This screen allows you to configure the [Token Generator](/docs/desktop/addons/token-generator/).

## Configuration Options

|              Field              |                                                                                                                                 Details                                                                                                                                 | Default |                           Config File                           |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------|
| Number of Threads               | The number of threads used during the token generation.                                                                                                                                                                                                                 | 5       | Key: `tokengen.threadsPerScan` Value: a non-negative integer.   |
| Request Delay (in milliseconds) | The time to wait before sending each request, to avoid overloading the target server. **Note:** Given the high number of requests sent during the Token Generation increasing the delay might have a high impact on the time that the generation will take to complete. | 0       | Key: `tokengen.requestDelayInMs` Value: a non-negative integer. |
