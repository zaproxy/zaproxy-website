---
# This page was generated from the add-on.
title: MCP Automation Framework - mcp-config Job
type: userguide
weight: 1
---

# MCP Automation Framework - mcp-config Job

The `mcp-config` job configures the MCP server as part of an Automation Framework plan.


Any parameter not specified in the YAML is left at its current value - you only need to include
the options you want to change.

## Job: mcp-config

```
  - type: mcp-config                   # Configure the MCP server
    parameters:
      enabled:                         # Bool: Enable the MCP server, default: false
      port:                            # Int: Port for the MCP HTTP listener, default: 8282
      securityKey:                     # String: The security key value (leave blank to use no key)
```

## Parameters

### enabled

Whether the MCP server should be running. Set to `false` to disable the server entirely. Default: `false`

### port

The port the MCP HTTP listener runs on. Valid range: 1 to 65535. Default: `8282`

### securityKey

The value of the security key. Leave blank to make the service unauthenticated (not recommended).

## See Also

* [MCP Automation](/docs/desktop/addons/mcp-integration/mcp-automation/) - Automation Framework support overview
* [mcp-import Job](/docs/desktop/addons/mcp-integration/mcp-automation-import/) - Import an external MCP server
* [Options](/docs/desktop/addons/mcp-integration/mcp-options/) - Configure MCP via the UI
