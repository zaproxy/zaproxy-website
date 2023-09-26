---
# This page was generated from the add-on.
title: ZAPit
type: userguide
weight: 2
---

# ZAPit

Quick Start add-on supports the following [Command Line](/docs/desktop/addons/quick-start/cmdline/) option to perform a quick 'reconnaissance' scan of the URL specified.

You can specify multiple URLs by specifying the option multiple times:
\* `-zapit https://www.example1.com -zapit http://example2.com/ -cmd`

The `-cmd` option must be specified, if it is not then the `-zapit` option will be ignored.

The ZAPit Scan will start a new ZAP session before it performs a scan, so do not start ZAP with a session that you want to keep.

The ZAPit scan currently:

1. Makes one request to the target URL
2. Reports any technology found by the [Technology Detection](/docs/desktop/addons/technology-detection/) add-on (if installed)
3. Reports a summary of the alerts found
4. Reports some stats from the root URL

Example output:

```
ZAPit scan of https://www.example.com
Technology:
        Amazon ECS
        Amazon Web Services
        Azure
        Azure CDN
        Docker
Number of alerts: 13
        Medium: Content Security Policy (CSP) Header Not Set
        Medium: Missing Anti-clickjacking Header : "x-frame-options"
        Low: Permissions Policy Header Not Set
        Low: Server Leaks Version Information via "Server" HTTP Response Header Field : "ECS (dcb/7EEB)"
        Low: Strict-Transport-Security Header Not Set
        Low: X-Content-Type-Options Header Missing : "x-content-type-options"
        Informational: Re-examine Cache-control Directives : "max-age=604800"
        Informational: Retrieved from Cache : "HIT"
        Informational: Sec-Fetch-Dest Header is Missing : "Sec-Fetch-Dest"
        Informational: Sec-Fetch-Mode Header is Missing : "Sec-Fetch-Mode"
        Informational: Sec-Fetch-Site Header is Missing : "Sec-Fetch-Site"
        Informational: Sec-Fetch-User Header is Missing : "Sec-Fetch-User"
        Informational: Storable and Cacheable Content : "max-age=604800"
Root page stats:
        Request took 294 msec
        Response body size 1,256 bytes
        Content type: text/html; charset=UTF-8
        Number of HTML tags: 24
        Number of HTML links: 1
        Number of HTML forms: 0
        Number of HTML input fields: 0
	
```

This feature is at an early stage and more enhancements are planned.

## See also

|   |                                                  |                                 |
|---|--------------------------------------------------|---------------------------------|
|   | [Quick Start](/docs/desktop/addons/quick-start/) | the introduction to Quick Start |
