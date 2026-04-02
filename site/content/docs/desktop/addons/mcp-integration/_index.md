---
# This page was generated from the add-on.
title: MCP Integration Add-on
type: userguide
weight: 1
cascade:
  addon:
    id: mcp
    version: 0.0.1
---

# MCP Integration Add-on

This add-on implements an MCP (Model Context Protocol) server in ZAP, allowing AI assistants and other MCP clients to interact with ZAP through a standard HTTP-based protocol.

## Security Warning

**The MCP server must not be exposed to external networks.** It is designed to run on `localhost` and be accessed only by trusted MCP clients on the same machine.


Exposing the MCP server externally is dangerous because:

* It grants full control over ZAP to anyone who can reach the port, allowing them to start scans, read intercepted traffic, access all recorded alerts, and manipulate ZAP's state.
* The optional security key is transmitted in plain HTTP, so it can be intercepted on any untrusted network.
* The CORS policy allows any origin (`Access-Control-Allow-Origin: *`), meaning a malicious web page could send requests to the server from a victim's browser if the port is reachable.


Ensure your firewall or OS network settings block external access to the MCP server port.

## Overview

The MCP server exposes ZAP functionality through:

* [Tools](/docs/desktop/addons/mcp-integration/mcp-tools/) - Actions that can be invoked by MCP clients (e.g. start spider, create context)
* [Resources](/docs/desktop/addons/mcp-integration/mcp-resources/) - Data that can be read by MCP clients (e.g. alerts, sites tree)
* [Prompts](/docs/desktop/addons/mcp-integration/mcp-prompts/) - Reusable scan workflow templates (e.g. baseline scan, full scan)

## Configuration

The MCP server is configured via the [Options](/docs/desktop/addons/mcp-integration/mcp-options/) panel.

## Authentication

When the security key is enabled, clients must include the key in the `Authorization` header:

```
Authorization: <your-security-key>
```

## Accessing the Server

The MCP server runs on `localhost`. MCP clients connect to:

```
http://localhost:8282
```

(or whatever port you have configured)

## Custom Tools and Resources

You can add custom MCP tools and resources using Extender scripts. The add-on provides templates to get started:

* **Add MCP tool** - An example tool that echoes a message. Use as a template for custom tools that MCP clients can invoke.
* **Add MCP resource** - An example resource that returns sample data. Use as a template for custom resources that MCP clients can read.
Create a new Extender script (Scripts → Add → Extender) and choose one of these templates, or copy from an existing script. The templates demonstrate how to register and unregister with the MCP server's tool and resource registries.
