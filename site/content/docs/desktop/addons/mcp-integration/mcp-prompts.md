---
# This page was generated from the add-on.
title: MCP Prompts
type: userguide
weight: 3
---

# MCP Prompts

Prompts are reusable instruction templates. MCP clients discover them via `prompts/list` and retrieve them via `prompts/get`.

## zap_baseline_scan

Run a ZAP baseline scan: spider the target (standard then AJAX) and check for passive vulnerabilities without any active attacking.


Arguments: `target` (required) - the URL to scan

## zap_full_scan

Run a ZAP full scan: spider the target (standard then AJAX) and then actively scan for vulnerabilities.


Arguments: `target` (required) - the URL or context name to scan,
`policy` (optional) - active scan policy name (defaults to the ZAP default policy)

## See Also

* [MCP Integration](/docs/desktop/addons/mcp-integration/) - Overview of the add-on
* [Options](/docs/desktop/addons/mcp-integration/mcp-options/) - Configuration options
* [Tools](/docs/desktop/addons/mcp-integration/mcp-tools/) - Available MCP tools
* [Resources](/docs/desktop/addons/mcp-integration/mcp-resources/) - Available MCP resources
