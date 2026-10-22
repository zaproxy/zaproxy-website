---
title: "Detecting PHP2Shell and Other PHP Vulnerabilities with ZAP"
summary: >
  PHP2Shell is the latest big "named" vulnerability. ZAP can now tell you if a site is running a vulnerable version of PHP,
  and it does so without sending a single extra request.
type: post
images:
- https://www.zaproxy.org/blog/2026-10-22-php2shell-detection-with-zap/images/php2shell_social.png
previewImageAnchor: Center
tags:
- blog
- php2shell
- passive-scan
date: "2026-10-22"
authors:
- simon
---

[PHP2Shell](https://php2shell.com/), also known as
[CVE-2026-109618](https://nvd.nist.gov/vuln/detail/CVE-2026-109618) /
[CVE-2026-109619](https://nvd.nist.gov/vuln/detail/CVE-2026-109619), is a pair of critical vulnerabilities in PHP itself
which allow unauthenticated remote attackers to execute arbitrary code.

As you probably already know, that's serious!

The PHP team has released fixes in PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35. Older, end-of-life branches of PHP
(5.x, 7.x, 8.0 and 8.1) are affected and will not be fixed.

## How ZAP detects it

ZAP can now detect PHP2Shell, and over 60 other known PHP vulnerabilities, using a brand new passive scan rule in the
[Passive Scan Rules](/docs/desktop/addons/passive-scan-rules/) add-on:
[Server Side Technology Version with Known Vulnerabilities](/docs/desktop/addons/passive-scan-rules/#id-20020).

Lots of PHP servers announce the exact version of PHP they are running in their response headers, for example:

```
X-Powered-By: PHP/8.2.12
Server: Apache/2.4.41 (Ubuntu) PHP/7.4.3
```

The new rule spots these versions and compares them against a list of known PHP vulnerabilities (CVEs).
If the version is affected then ZAP raises a
[PHP Version with Known Vulnerabilities](/docs/alerts/20020) alert.

As this is a passive rule it just examines the responses that ZAP has already seen, so it does not send any extra
requests. That means you will get these alerts when proxying, spidering, or importing APIs. 

## What the alert tells you

One alert is raised per site, technology and version, so you will not be flooded with duplicates. The alert:

* Has a risk based on the most severe vulnerability which applies, so a version affected by PHP2Shell will be reported as High
* Lists all of the vulnerabilities which apply, along with their severity
* Links to the details of each vulnerability in the new
  [PHP Known Vulnerabilities](/docs/desktop/addons/passive-scan-rules/php-known-vulnerabilities/) help page
* Is tagged with every CVE which applies, so you can filter and report on them

The confidence is lowered if the version is incomplete (e.g. `PHP/8.1` rather than `PHP/8.1.2`), or if the version is
so old that it is not covered by any advisory and is only assumed to be affected.

## Handling False Positives

This rule can only go on the version number that the server reports, and that number does not always tell the whole story.

Some Linux distributions backport security fixes into the version of PHP they ship without changing the version number.
So a server reporting `PHP/8.1.2` may well have been patched for PHP2Shell, even though the PHP team never released a
fix for the 8.1 branch. Do check whether the fixes have actually been applied before reporting these as confirmed problems.

If you know that a server has been patched then you can tell ZAP to stop reporting it by creating an
[Alert Filter](/docs/desktop/addons/alert-filters/) which matches:

* The URL of the site (a regex such as `https://www.example.com/.*` will cover the whole site)
* The alert, by selecting "PHP Version with Known Vulnerabilities" from the list
* The evidence, i.e. the reported version such as `PHP/8.1.2`

and which sets the new risk to "False Positive".

Matching on the evidence as well as the URL means that the filter only suppresses the alert for that particular version.
If the server is later upgraded, or downgraded, to a different version with its own known vulnerabilities then ZAP will
still alert you.

Alert Filters can be defined [globally](/docs/desktop/addons/alert-filters/globalalertfilter/), in a
[context](/docs/desktop/addons/alert-filters/contextalertfilter/), or in the
[Automation Framework](/docs/desktop/addons/alert-filters/automation/) for your CI/CD pipelines.

## Keeping up to date

The list of PHP vulnerabilities is generated directly from the official
[php-src security advisories](https://github.com/php/php-src/security/advisories) on GitHub.
A weekly job checks for new advisories and raises a pull request to update the list, so new PHP vulnerabilities will be
picked up automatically and included in the next release of the add-on.

The rule has been designed to support other server side technologies as well - PHP is just the first one.
If there is a technology you would like us to add next then please let us know.

## Promoting straight to release

As you may know, we usually publish new rules at the "alpha" level and then promote them to "beta" and "release"
based on feedback.

In this case we have decided to promote it straight to "release" - PHP2Shell is a critical vulnerability which is already
being exploited in the wild, the rule does not send any requests, and it only reports on information which the server
has itself disclosed.

Your feedback, as always, is much appreciated via the [ZAP User Group](https://groups.google.com/group/zaproxy-users).
