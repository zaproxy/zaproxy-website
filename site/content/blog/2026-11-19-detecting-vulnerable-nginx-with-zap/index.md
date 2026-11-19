---
title: "Detecting Vulnerable nginx Servers with ZAP"
summary: >
  NGINX2Root is a set of five nginx vulnerabilities which can take an attacker from a visitor to root on the server host.
  ZAP's passive scanning can now flag nginx versions affected by them, and Apache HTTP Server gets the same treatment.
type: post
images:
- https://www.zaproxy.org/blog/2026-11-19-detecting-vulnerable-nginx-with-zap/images/nginx2root_social.png
previewImageAnchor: Center
tags:
- blog
- nginx
- nginx2root
- passive-scan
date: "2026-11-19"
authors:
- simon
---

[NGINX2Root](https://nginx2root.com/), found by Xint, is a set of five vulnerabilities in nginx:
[CVE-2026-123007](https://nvd.nist.gov/vuln/detail/CVE-2026-123007),
[CVE-2026-123634](https://nvd.nist.gov/vuln/detail/CVE-2026-123634),
[CVE-2026-123633](https://nvd.nist.gov/vuln/detail/CVE-2026-123633),
[CVE-2026-121810](https://nvd.nist.gov/vuln/detail/CVE-2026-121810) and
[CVE-2026-113425](https://nvd.nist.gov/vuln/detail/CVE-2026-113425).
Between them they cover memory corruption and use-after-free issues in HTTP/2, HTTP/3, the resolver and the mail proxy module,
and the project's own description of the research is "from nginx visitor to root of the server host".

nginx is everywhere, so there is a good chance that you have some of it in your estate.
The first question to ask is: which of my servers are running an affected version?

## How ZAP detects it

ZAP can now answer that question for you, thanks to the latest release of the Passive Scan Rules add-on.
The [Server Side Technology Version with Known Vulnerabilities](/docs/desktop/addons/passive-scan-rules/#id-20020)
passive scan rule in the [Passive Scan Rules](/docs/desktop/addons/passive-scan-rules/) add-on has been extended
to check nginx versions, and the NGINX2Root CVEs are all included.

Unless it has been configured with `server_tokens off`, nginx announces its exact version in the `Server` response header:

```
Server: nginx/1.30.6
```

The rule spots these versions and compares them against a list of known nginx vulnerabilities.
If the version is affected then ZAP raises an
[nginx Version with Known Vulnerabilities](/docs/alerts/20020/) alert.

As this is a passive rule it just examines the responses that ZAP has already seen, so it does not send any extra
requests. That means you will get these alerts when proxying, spidering, or importing APIs.

Other servers which build on nginx but have their own version numbers, such as OpenResty, are deliberately not matched,
as comparing their versions with the nginx ones would give meaningless results.

## What the alert tells you

As with the other technologies, one alert is raised per site, technology and version. The alert:

* Has a risk based on the most severe vulnerability which applies
* Lists all of the vulnerabilities which apply, along with their severity
* Links to the details of each vulnerability in the new
  [nginx Known Vulnerabilities](/docs/desktop/addons/passive-scan-rules/nginx-known-vulnerabilities/) help page
* Is tagged with every CVE which applies, so you can filter and report on them

The confidence is lowered if the version is incomplete (e.g. `nginx/1.30` rather than `nginx/1.30.6`).
Some of the nginx advisories only affect nginx on Windows - if ZAP cannot rule that out from the version
then the alert says so rather than claiming the vulnerabilities are confirmed.

The solution is, of course, to upgrade nginx to a version which includes the fixes.
It is also a good idea to set `server_tokens off;` so that the server stops advertising which version it is running.

## Handling False Positives

The same caveat applies here as with PHP: the rule can only go on the version which the server reports.
Some Linux distributions backport security fixes without changing the version number, so a server reporting an
affected version may well already have been patched. Check before reporting these as confirmed problems.

If you know that a server has been patched then you can create an
[Alert Filter](/docs/desktop/addons/alert-filters/) which matches the site, the alert and the evidence
(e.g. `nginx/1.30.6`) and sets the new risk to "False Positive".
Matching on the evidence means that ZAP will still alert you if the server is later changed to a different
vulnerable version.

## And Apache too

We have also recently updated the same rule to cover the Apache HTTP Server.
It checks `Apache/<version>` tokens, typically from the `Server` header, against the httpd project's own CVE records,
and reports them using the
[Apache Known Vulnerabilities](/docs/desktop/addons/passive-scan-rules/apache-known-vulnerabilities/) help page.

That means the one rule now covers PHP, Apache and nginx, which between them account for a very large part of the
web servers you are likely to come across.

## Keeping up to date

The nginx list is generated from the advisories published on
[nginx.org](https://nginx.org/en/security_advisories.html), with the details of each CVE taken from its CVE record.
A job checks for new advisories and raises a pull request to update the list, so new nginx vulnerabilities will be
picked up automatically and included in future releases of the add-on.

The rule is designed to support other server side technologies as well.
If there is one you would like us to add next then please let us know.

Your feedback, as always, is much appreciated via the [ZAP User Group](https://groups.google.com/group/zaproxy-users).
