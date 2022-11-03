---
title: "Monthly Active Scan Rule Statistics"
summary: "See the data behind the most popular active scan rules every month"
images:
- https://www.zaproxy.org/blog/2022-11-03-monthly-active-scan-rule-statistics/images/zapbot-ascan-stats.png
type: post
tags:
- blog
- statistics
date: "2022-11-03"
authors:
    - simon
---

We have a new statistics page which shows you details about the most popular 
[Active Scan Rule Stats Last Month](/docs/statistics/active-scan-rules-last-month/)

This blog post explains what they mean, how we collect them, and why we are publishing them.

### What do they Mean?

#### What are the "Most Popular" Active Scan Rules?

There are the 30 rules that raise the highest number of alerts each month based on our telemetry 
([see below](#how-are-these-statistics-collected) for more details on that).

#### What do the Columns Mean?

##### Name

This is the name of the alert and a link to more details about it.

##### Status

All Active Scan rules are part of an add-on, and add-ons have a status, one of Release, Beta, or Alpha.

##### Alert Count

The total number of alerts this rule raised last month based on our telemetry.

##### False Positive %

The percentage of alerts that were flagged as False Positives by [Alert Filters](/docs/desktop/addons/alert-filters/).

This is a relatively good measure as the False Positive count for an alert is only incremented when an Alert Filter 
changes an alert's risk level.

However we do not know if these are really false positives or if people are either mistaken or are using Alert Filters
as a way to ignore alerts they are not interested in. 
We are also aware that many people will just ignore False Positives rather than configuring Alert Filters to recategorize them.

Despite the above caveats we believe this is a relatively good indication of how likely a rule is to raise a false positive.

If you are experiencing false positives in ZAP then you are encouraged to read the FAQ: 
[How do I handle a False Positive?](/faq/how-do-i-handle-a-false-positive/)

##### Average Time in Secs

The average time in seconds that this active scan rule runs for.
This can be very useful if you want to reduce the time a ZAP scan takes.

### How are these Statistics Collected?

These statistics are derived from the [Telemetry Statistics](/blog/2021-10-25-zap-telemetry-plans/) that we collect
via the [Call Home](/docs/desktop/addons/call-home/) add-on.

We only collect generic data that will not identify our users, the applications they scan or any details about the vulnerabilities reported.

While we make it easy for you to turn off telemetry collection, leaving it turned on will allow us to collect and publish data like this 
which we believe benefits both the ZAP community and the wider Infosec community.

### Why are we Publishing these Statistics?

We are not aware of any commercial security tools publishing data of this kind.

As an open source project, and the World's Most Popular web scanner, we think it is important that we make this 
data available.

For ZAP users the statistics show which active scan rules are most likely to raise alerts, how long they take, 
and how likely they are to raise false positives.

ZAP contributors will be able to see which rules might need improving - to reduce the number of false positives and 
reduce the time taken to run.

They also allow us to see the effects of changes we make.
For example, the [Timestamp Disclosure](/docs/alerts/10096/) rule 
(which is actually a Passive rule and therefore not on this list) used to have the 
[highest number of reported false positives](/highest-false-positives-last-month/) by a large margin.
We implemented a set of fixes and it has now dropped considerably - a good indication that we are on the right track.

For the wider Infosec community it does show the relative frequency is for vulnerabilities that can be discovered 
by the World's Most Popular web scanner. We will all be able to see how these statistics change over time.

Collecting these statistics can tell us things we do not know - 
for example I was surprised to learn that DOM XSS was the highest "injection" vulnerability reported by ZAP.

### Some Words of Warning

Be aware that these statistics are based on telemetry submitted to open services by an open source tool.

It would not be difficult for an "unethical researcher" to manipulate these statistics by submitting false data.

We believe these statistics are a valuable source of data, but no one should rely on them too heavily!

