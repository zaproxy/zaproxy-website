---
type: "page"
title: "Bar Charts"
layout: charts
---
We measure and record a range of statistics related to ZAP, some of which are made public here.

The blog post: [Collecting Statistics for Open Source Projects](/blog/2021-04-19-collecting-statistics-for-open-source-projects/) explains how this all works.

{{< chart name="zap-starts" stacked="true">}}

These figures come from the News requests that ZAP makes when it starts.
Daily and weekly builds are grouped under the Daily label.
The News and other 'calls home' that ZAP makes are detailed in the FAQ: [What 'calls home' does ZAP make?](/faq/what-calls-home-does-zap-make/)

{{< chart name="downloads" stacked="true">}}

{{< chart name="docker" stacked="true">}}

In April 2024 we removed the OWASP images, created a new zaproxy DockerHub org, 
deprecated the SSP docker images, and started collecting stats for the GHCR image.

{{< chart name="user-group" stacked="false">}}
