---
type: "page"
title: "Bar Charts"
layout: charts
---
We measure and record a range of statistics related to ZAP, some of which are made public here.

The blog post: [Collecting Statistics for Open Source Projects](/blog/2021-04-19-collecting-statistics-for-open-source-projects/) explains how this all works.

{{< chart name="check-for-updates" stacked="true">}}

The 'devw' label is used for the development version of ZAP, these stats were not reliably recorded before 2020-11-01.

The Check for Update requests that ZAP makes are detailed in the FAQ: [What 'calls home' does ZAP make?](/faq/what-calls-home-does-zap-make/)

{{< chart name="downloads" stacked="true">}}

{{< chart name="docker" stacked="true">}}

In April 2024 we removed the OWASP images, created a new zaproxy DockerHub org, 
deprecated the SSP docker images, and started collecting stats for the GHCR image.

{{< chart name="user-group" stacked="false">}}
 
