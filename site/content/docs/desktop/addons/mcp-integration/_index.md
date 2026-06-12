---
# This page was generated from the add-on.
title: MCP Integration Add-on
type: userguide
weight: 1
cascade:
  addon:
    id: mcp
    version: 0.2.0
---

# MCP Integration Add-on

This add-on implements an MCP (Model Context Protocol) server in ZAP, allowing AI assistants and other MCP clients to interact with ZAP through a standard HTTP-based protocol.


It also allows you to import MCP servers so that you can perform security tests on them, and provides
[Automation Framework](/docs/desktop/addons/mcp-integration/mcp-automation/) support.

## MCP Server

### Security Warning

**The MCP server must not be exposed to external networks.** It is designed to run on `localhost` and be accessed only by trusted MCP clients on the same machine.


Exposing the MCP server externally is dangerous because:

* It grants full control over ZAP to anyone who can reach the port, allowing them to start scans, read intercepted traffic, access all recorded alerts, and manipulate ZAP's state.
* The optional security key is transmitted in plain HTTP, so it can be intercepted on any untrusted network.
* The CORS policy allows any origin (`Access-Control-Allow-Origin: *`), meaning a malicious web page could send requests to the server from a victim's browser if the port is reachable.


Ensure your firewall or OS network settings block external access to the MCP server port.


The MCP server exposes ZAP functionality through:

* [Tools](/docs/desktop/addons/mcp-integration/mcp-tools/) - Actions that can be invoked by MCP clients (e.g. start spider, create context)
* [Resources](/docs/desktop/addons/mcp-integration/mcp-resources/) - Data that can be read by MCP clients (e.g. alerts, sites tree)
* [Prompts](/docs/desktop/addons/mcp-integration/mcp-prompts/) - Reusable scan workflow templates (e.g. baseline scan, full scan)

### Authentication

When the security key is enabled, clients must include the key in the `Authorization` header:

```
Authorization: <your-security-key>
```

### Accessing the Server

The MCP server runs on `localhost`. MCP clients connect to:

```
http://localhost:8282
```

(or whatever port you have configured)

### Custom Tools and Resources

You can add custom MCP tools and resources using Extender scripts. The add-on provides templates to get started:

* **Add MCP tool** - An example tool that echoes a message. Use as a template for custom tools that MCP clients can invoke.
* **Add MCP resource** - An example resource that returns sample data. Use as a template for custom resources that MCP clients can read.

Create a new Extender script (Scripts → Add → Extender) and choose one of these templates, or copy from an existing script. The templates demonstrate how to register and unregister with the MCP server's tool and resource registries.

## Importing External MCP Servers

ZAP can probe an external MCP server and record all of its traffic in the history and sites tree, making those requests available for scanning and fuzzing like any other HTTP traffic.


The importer contacts the server in sequence:

1. **initialize** — negotiates the MCP protocol version
2. **notifications/initialized** — completes the handshake
3. **tools/list** , **resources/list** , **prompts/list** — discovers all available tools, resources, and prompts
4. **resources/read** — one request per discovered resource
5. **tools/call** — one request per tool, with placeholder arguments derived from the tool's input schema
6. **prompts/get** — one request per prompt, with placeholder arguments


String-typed arguments for `tools/call` and `prompts/get` requests are
populated using ZAP's value generator (configured via **Options → Value Generator**) when
it is available. The value generator produces realistic placeholder values (e.g. a plausible
username, URL, or file path) based on the field name. If no value generator match is found, the
field name itself is used as the placeholder value.

### Security Key

If the external MCP server requires authentication, enter the full value to send as the `Authorization` header. For servers that use Bearer tokens, include the `Bearer ` prefix — for example, `Bearer abc123`. ZAP sends the value exactly as entered, without adding any prefix automatically.


Import an MCP server via the GUI using **Import → Import MCP Server** , or via the
[mcp-import](/docs/desktop/addons/mcp-integration/mcp-automation-import/) Automation Framework job.

### Spider Integration

The MCP add-on registers a custom spider parser with the traditional spider. Any response the spider fetches that looks like an MCP endpoint — either a `text/event-stream` response or a JSON response carrying MCP markers such as `protocolVersion` or JSON-RPC method names like `tools/list` — is automatically imported using the same logic as a manual import. No configuration is required; the discovered traffic appears in the history and sites tree alongside the rest of the spider's findings.

## Sites Tree Structure for MCP Requests

MCP traffic uses JSON-RPC 2.0 over HTTP POST. The add-on registers a custom variant that organises these requests in the Sites Tree and exposes their parameters for active scanning and fuzzing.

### Tree path layout

For most JSON-RPC methods the path is built from the HTTP URL path segments followed by the
JSON-RPC method split on `/`. For `tools/call` and `prompts/get`
an additional qualifier node (the tool or prompt `name`) is appended, giving a unique
branch per named tool or prompt:

```
http://localhost:8282
  └── tools
        └── call
              └── zap_spider          ← tools/call with name="zap_spider"
  └── prompts
        └── get
              └── baseline-scan       ← prompts/get with name="baseline-scan"
  └── initialize
  └── tools
        └── list
```

### Resources in the Sites Tree

For `resources/read` the resource URI drives the tree path rather than the JSON-RPC
method. The path is built as `resources / <scheme> / <authority> / <path segments>`,
mirroring the structure of the resource URI:

```
  └── resources
        └── zap
              └── alerts              ← uri="zap://alerts/{alertRef}"
        └── logs
              └── app
                    └── errors        ← uri="logs://app/errors?limit=100"
```

Template path segments (e.g. `{alertRef}`) are omitted from the tree path because they vary per request; their values are exposed as Input Vectors instead.

## Configuration

The MCP server is configured via the [Options](/docs/desktop/addons/mcp-integration/mcp-options/) panel.
