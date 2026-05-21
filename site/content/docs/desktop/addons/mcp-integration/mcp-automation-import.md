---
# This page was generated from the add-on.
title: MCP Automation Framework - mcp-import Job
type: userguide
weight: 2
---

# MCP Automation Framework - mcp-import Job

The `mcp-import` job probes an external MCP server and records all of its accessible endpoints (initialize, tools, resources, prompts) in the ZAP history and sites tree.


For each discovered tool, resource, and prompt the job sends a representative request so that
ZAP captures the full JSON-RPC structure. This allows the requests to be scanned and fuzzed
like any other traffic.


String-typed arguments for `tools/call` and `prompts/get` requests are
populated using ZAP's value generator (configured via **Options → Value Generator**) when
it is available. The value generator produces realistic placeholder values based on the field name.
If no value generator match is found, the field name itself is used as the placeholder value.

## Job: mcp-import

```
  - type: mcp-import                   # Import an MCP server into ZAP history and sites tree
    parameters:
      serverUrl:                       # String: URL of the MCP server (e.g. http://localhost:8282), required
      securityKey:                     # String: Optional security key sent in the Authorization header
```

## Parameters

### serverUrl

The URL of the MCP server to import. Must be a valid `http://` or `https://` URL. This parameter is required.

### securityKey

If the MCP server requires authentication, provide the full value to send as the `Authorization` header on every request. For servers that use Bearer tokens, include the `Bearer ` prefix — for example, `Bearer abc123`. ZAP sends the value exactly as entered. Leave blank if the server does not require a key.

## See Also

* [MCP Automation](/docs/desktop/addons/mcp-integration/mcp-automation/) - Automation Framework support overview
* [mcp-config Job](/docs/desktop/addons/mcp-integration/mcp-automation-config/) - Configure the MCP server
* [MCP Server](/docs/desktop/addons/mcp-integration/) - Overview of the add-on
