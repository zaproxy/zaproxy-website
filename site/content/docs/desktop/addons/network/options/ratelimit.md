---
# This page was generated from the add-on.
title: Rate Limit
type: userguide
weight: 5
---

# Rate Limit

## Rate Limit

The Rate Limit feature limits the request rate of HTTP/HTTPS (not web sockets) traffic to hosts or domains to prevent overloading the target or being blocked. The limit is applied using a matcher against the request host to pick an individual host, an entire domain, or anything between. In the case a host matches multiple rules, the rule with the most restrictive rate is used.


Limits for a domain or host may be quickly added via the context menu. Open the context menu on a message to add a
rule to limit by the host or domain.


Each rule is defined by the following fields:

### Description

A description that allows you to identify the rule. Each rule must have a unique description.

### Match String

The string that will be used to identify which hosts will be limited. If treated as a regular expression, the host must fully match. If "Match Regex" is un-checked, the match string is handled based on DNS conventions. If the string has one or two components, i.e. 'example.com' or 'localhost', either an exact match or additional components will match. 'host1.example.com', 'sub1.host1.example.com' will match 'example.com'. 'localhost.localhost' will match 'localhost'. A match string of 'host1.example.com' will only match 'host1.example.com'.

### Match Regex

If set then the Match String will be treated as a regular expression.

### Requests Per Second

The maximum number of requests per second.

### Group By

How to group hosts when applying rate limiting. The default "rule" limits the rate to all hosts matching the rule as a single unit. The "host" value will apply the rate limit to each host individually.

### Enable

If not set then the rule will not apply.

## Status Panel

A status panel is provided to show how requests to hosts are being limited. The following fields are shown:

### Group

The host or rule name based on the "Group By" setting in the rule. If grouping by hosts, there will be a row for each host.

### Rule

The name of the rule.

### Requests

The number of requests processed by the rule for this host or group.

### Effective Rate

The effective request rate based on the first request time, last request times, and request count. The value may be less than the request limit, but should never be more.

### Last

The time of the last request processed by the rule.
