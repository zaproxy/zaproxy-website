---
# This page was generated from the add-on.
title: Client Side Integration - Client Spider API
type: userguide
weight: 4
---

# Client Side Integration - Client Spider API

This add-on adds various API endpoints to allow you to control the Client Spider programmatically.


The API is accessible via `clientSpider` API prefix.

## Views

* `status (scanId*)`: Gets the status of the spider scan. Returns an integer between 0 and 100 indicating current progress.

## Actions

* `scan (browser url contextName userName subtreeOnly maxCrawlDepth pageLoadTime)`: Runs the Client Spider against the given URL and/or context. Returns the scanId.
* `stop (scanId*)`: Stops a Client Spider scan.

## Parameters

* `browser`: The browser to use for the scan, e.g. 'firefox-headless'. If not specified, uses Firefox Headless.
* `url`: The URL to start the scan at. If not specified and a context is set, the first URL in the context will be used.
* `contextName`: The name of the context to scan.
* `userName`: The name of the user to run the scan as. The user must exist in the specified context.
* `subtreeOnly`: If set to 'true', the spider will only scan URLs under the specified URL. Default: 'false'.
* `maxCrawlDepth`: The maximum depth the spider should crawl, where 0 is unlimited. Defaults to client options.
* `pageLoadTime`: The time in seconds to wait for a page to load. Defaults to client options.
* `scanId`: The ID of the scan to query or manage.

## Examples

### Start a scan:


    https://zap/JSON/clientSpider/action/scan/?url=https://example.com&maxCrawlDepth=5&pageLoadTime=30

### Check status:


    https://zap/JSON/clientSpider/view/status/?scanId=1

### Stop a scan:


    https://zap/JSON/clientSpider/action/stop/?scanId=1
