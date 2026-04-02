---
# This page was generated from the add-on.
title: MCP Resources
type: userguide
weight: 4
---

# MCP Resources

The following resources are available for MCP clients to read:

## zap://alerts

ZAP security alerts summary. Returns a lightweight list with `name`, `risk`, `pluginId`, `alertRef`, `instanceCount`, `systemic`, and `instancesUri`. Use `zap://alerts/{alertRef}` to get the full instances for a specific alert.

## zap://alerts/{alertRef}

All instances for a given alert. Replace `{alertRef}` with the alertRef from the `zap://alerts` summary (e.g. `zap://alerts/10055-13`). Each instance includes all of the key alert information, and `historyRef` linking to the full HTTP request/response via `zap://history/{id}`.

## zap://contexts

All configured ZAP contexts with their include and exclude regexes.

## zap://history

ZAP proxy history summary. Returns the number of history entries (count) rather than the full list, since the history table can grow very large. Use `zap://history/{id}` to get the full request and response for a specific entry.

## zap://history/{id}

Full HTTP request and response for a given history entry. Replace `{id}` with the history ID (e.g. `zap://history/123`). Returns JSON with `requestHeader`, `requestBody`, `responseHeader`, and `responseBody` fields.

## zap://scan-policies

All available active scan policies (use with `zap_start_active_scan` policy parameter).

## zap://scan-status

Scan progress for all long-running automation jobs (e.g. spider scans).

## zap://sites

ZAP sites tree (top-level nodes).

## zap://sites-tree

ZAP sites tree in the full format defined at [Sites Tree File Format](/docs/desktop/addons/import-export/sitestreeformat/). Returns JSON (instead of YAML) with the same structure: each node has `node`, `url`, `method`, `responseLength`, `statusCode`, `data` (for POST with params), and `children`.

## zap://report-templates

All available report templates. Each entry includes `configName` (pass to `zap_generate_report`), `displayName`, and `extension` (file extension for the generated report). Requires the reports add-on.

## See Also

* [MCP Integration](/docs/desktop/addons/mcp-integration/) - Overview of the add-on
* [Options](/docs/desktop/addons/mcp-integration/mcp-options/) - Configuration options
* [Tools](/docs/desktop/addons/mcp-integration/mcp-tools/) - Available MCP tools
* [Prompts](/docs/desktop/addons/mcp-integration/mcp-prompts/) - Available MCP prompts
