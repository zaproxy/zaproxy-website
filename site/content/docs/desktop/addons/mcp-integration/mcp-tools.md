---
# This page was generated from the add-on.
title: MCP Tools
type: userguide
weight: 2
---

# MCP Tools

The following tools are available for MCP clients to invoke:

## zap_version

Get the ZAP version.

## zap_info

Get basic ZAP information.

## zap_create_context

Create a ZAP context with the given name, URL and optional include/exclude regexes.


Parameters: `name`, `url`, and optionally `include_regexes`, `exclude_regexes`

## zap_start_spider

Start the spider. The target can be a URL (creates a temporary context) or the name of an existing context. Returns a scan_id for use with zap_stop_spider and zap_get_spider_status.


Parameters: `target` - a URL or context name

## zap_stop_spider

Stop the spider plan if it is running.


Parameters: `scan_id` - the ID returned by zap_start_spider

## zap_get_spider_status

Get the status of the spider plan.


Parameters: `scan_id` - the ID returned by zap_start_spider

## zap_start_ajax_spider

Start the AJAX spider. The target can be a URL (creates a temporary context) or the name of an existing context. Returns a scan_id for use with zap_stop_ajax_spider and zap_get_ajax_spider_status.


Parameters: `target` - a URL or context name

## zap_stop_ajax_spider

Stop the AJAX spider plan if it is running.


Parameters: `scan_id` - the ID returned by zap_start_ajax_spider

## zap_get_ajax_spider_status

Get the status of the AJAX spider plan.


Parameters: `scan_id` - the ID returned by zap_start_ajax_spider

## zap_start_active_scan

Start the active scan. The target can be a URL (creates a temporary context) or the name of an existing context. Optionally specify a scan policy. The target URL should be in the sites tree (spider first). Returns a scan_id for use with zap_stop_active_scan and zap_get_active_scan_status.


Parameters: `target` - a URL or context name, optionally `policy` - scan policy name (see `zap://scan-policies`)

## zap_stop_active_scan

Stop the active scan plan if it is running.


Parameters: `scan_id` - the ID returned by zap_start_active_scan

## zap_get_active_scan_status

Get the status of the active scan plan.


Parameters: `scan_id` - the ID returned by zap_start_active_scan

## zap_get_passive_scan_status

Get the passive scan queue status. Returns the number of HTTP records waiting to be passively scanned. When the count reaches zero all collected traffic has been analysed. Requires the pscan add-on.


No parameters.

## zap_generate_report

Generate a ZAP report. Use the `zap://report-templates` resource to discover available template names. Requires the reports add-on.


Parameters: `file_path` - full path for the output file (e.g. `/tmp/report.html`), `template` - template config name (e.g. `traditional-html`), optionally `title` - report title

## See Also

* [MCP Integration](/docs/desktop/addons/mcp-integration/) - Overview of the add-on
* [Options](/docs/desktop/addons/mcp-integration/mcp-options/) - Configuration options
* [Prompts](/docs/desktop/addons/mcp-integration/mcp-prompts/) - Available MCP prompts
* [Resources](/docs/desktop/addons/mcp-integration/mcp-resources/) - Available MCP resources
