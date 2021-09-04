---
# This page was generated from the add-on.
title: Statistics
type: userguide
weight: 27
---

# Statistics

ZAP maintains statistics which can help you understand what is really happening when interacting with large applications.

The statistics are available via the [API](/docs/desktop/start/features/api/) and can be also sent to a Statsd server when
configured via the [Options Statistics screen](/docs/desktop/ui/dialogs/options/stats/).

### Site based statistics

Statistics maintained on a per site basis include:

- response codes, eg:
  - stats.code.200
  - stats.code.302
- response times in ms (using a logarithmic scale), eg:
  - stats.responseTime.1
  - stats.responseTime.2
  - stats.responseTime.4
  - stats.responseTime.8
  - stats.responseTime.16
- content types, eg:
  - stats.contentType.text/css
  - stats.contentType.text/html;charset=utf-8
- [tags](/docs/desktop/start/features/tags/), eg:
  - stats.tag.Password
  - stats.tag.Hidden
- anticsrf tokens generated:
  - stats.acsrf.anticsrf
- authentication info:
  - stats.auth.success (number of authentication successes)
  - stats.auth.failure (number of authentication failures)
  - stats.auth.state.assumedin (number of messages between successful polls that are assumed to be logged in)
  - stats.auth.state.loggedin (number of messages that appear to be logged in)
  - stats.auth.state.loggedout (number of messages that appear to be logged out)
  - stats.auth.state.noindicator (number of messages where no logged in or out indicators have been set)
  - stats.auth.state.unknown (number of messages which don't contain either logged in or out indicators)

## See also

|     |                                           |                                       |
| --- | ----------------------------------------- | ------------------------------------- |
|     | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|     | [Features](/docs/desktop/start/features/) | provided by ZAP                       |
