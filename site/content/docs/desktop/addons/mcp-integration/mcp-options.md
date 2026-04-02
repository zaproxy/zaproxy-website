---
# This page was generated from the add-on.
title: MCP Integration Options
type: userguide
weight: 1
---

# MCP Integration Options

This screen allows you to configure the [MCP Integration](/docs/desktop/addons/mcp-integration/) add-on.

## Port

The port on which the MCP HTTP server listens for connections.


Default: 8282


Valid range: 1 to 65535


**Warning:** The MCP server must not be exposed to external networks. See the [MCP Integration](/docs/desktop/addons/mcp-integration/) overview for details.

## Security Key

A key used to authenticate MCP clients. When the key is required, clients must include it in the `Authorization` header as the header value. You can set the key to any value you like.

### Require security key in Authorization header

When enabled, all MCP requests (except OPTIONS preflight) must include the security key in the Authorization header. When disabled, no authentication is required.

### Generate

Click this button to generate a new random security key. This also enables the "Require security key" option.

## Secure Only (reject HTTP connections)

When enabled, the MCP server rejects any non-HTTPS request with a `403 Forbidden` response. This prevents credentials and sensitive data from being transmitted in plaintext.


Default: enabled


Note: OPTIONS preflight requests are exempt so that CORS negotiation still works over HTTP.

## Record MCP requests in ZAP history

When enabled, each MCP server request (and its response) is recorded in the ZAP proxy history. This allows you to inspect MCP traffic in the History tab and use it with other ZAP features (e.g. alerts can link to the full request/response via `zap://history/{id}`).


Default: disabled


Note: Enabling this option will increase the size of your session as every MCP request is stored.

## See Also

* [MCP Integration](/docs/desktop/addons/mcp-integration/) - Overview of the add-on
* [Tools](/docs/desktop/addons/mcp-integration/mcp-tools/) - Available MCP tools
* [Resources](/docs/desktop/addons/mcp-integration/mcp-resources/) - Available MCP resources
