---
title: "The ZAP MCP Server"
summary: "Connect AI assistants like Claude and ChatGPT to ZAP via the Model Context Protocol. Start scans, read alerts, and explore your application—all through natural conversation."
type: post
tags:
  - blog
  - mcp
  - automation
  - api
  - ai
date: "2026-04-02"
authors:
  - simon

---
We're excited to announce the **[ZAP MCP Integration](/docs/desktop/addons/mcp-integration/)** add-on that lets AI assistants talk to ZAP using the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). You can now ask Claude, ChatGPT, Cursor, or other MCP-enabled tools to spider your app, run active scans, and analyze alerts—all through natural conversation.

Please note that this is definitely an **alpha** release!

It currently exposes a focused set of essential ZAP capabilities, with an interface that will continue to evolve in response to user feedback.

## What is MCP?

The Model Context Protocol is an open standard from Anthropic that connects AI applications to external systems. Think of it like USB-C for AI: a standardised way for assistants to access data sources, call tools, and run workflows.

MCP servers expose **tools** (actions the AI can invoke), **resources** (data the AI can read), and **prompts** (reusable instruction templates). Clients like Claude Desktop, ChatGPT, Cursor, and VS Code connect to these servers and let you interact with them via chat.

## Why ZAP?

ZAP is a powerful security testing tool, but it has a lot of moving parts. AI assistants can help you:

- Decide which scans to run and when
- Interpret alerts and suggest next steps
- Explore the Sites Tree and history
- Orchestrate spider → active scan workflows

The ZAP MCP Server gives AI assistants direct access to ZAP's capabilities, so they can act as an intelligent interface to your security testing workflow.

## Tools

The add-on exposes these tools for AI assistants to call:

| Tool | Description |
|------|-------------|
| `zap_version` | Get the ZAP version |
| `zap_info` | Get basic ZAP information |
| `zap_create_context` | Create a ZAP context with URL and include/exclude regexes |
| `zap_start_spider` | Start the traditional spider (returns `scan_id`) |
| `zap_stop_spider` | Stop the spider |
| `zap_get_spider_status` | Get spider progress and results |
| `zap_start_ajax_spider` | Start the AJAX spider |
| `zap_stop_ajax_spider` | Stop the AJAX spider |
| `zap_get_ajax_spider_status` | Get AJAX spider status |
| `zap_start_active_scan` | Start an active scan (optionally with a scan policy) |
| `zap_stop_active_scan` | Stop the active scan |
| `zap_get_active_scan_status` | Get active scan progress |
| `zap_get_passive_scan_status` | Get passive scan progress |
| `zap_generate_report` | Generate a local report |

Each scan tool returns a `scan_id` (e.g. `spider-1`, `ajaxspider-1`, `ascan-1`) that you use with the corresponding stop and status tools. Targets can be a URL (which creates a temporary context) or the name of an existing context.

## Resources

Resources provide read-only access to ZAP data. AI assistants can fetch them to understand your session and help interpret results:

| Resource | Description |
|----------|-------------|
| `zap://alerts` | A summary of the ZAP security alerts (with links to more details) |
| `zap://alerts/{alertRef}` | All instances for a given alert (with a link to the full request/response) |
| `zap://contexts` | All configured contexts and their include/exclude regexes |
| `zap://history` | History summary (entry count) |
| `zap://history/{id}` | Full HTTP request and response for a given history entry |
| `zap://scan-policies` | Available active scan policies (for `zap_start_active_scan`) |
| `zap://scan-status` | Progress for all long-running automation jobs |
| `zap://sites` | Sites tree (top-level nodes) |
| `zap://sites-tree` | Full Sites Tree in JSON format |
| `zap://report-templates` | All available report templates |

The `alertRef` field in alerts summary points to `zap://alerts/{alertRef}`, so the AI can fetch all of the alert instances.

The `historyRef` field in alerts points to `zap://history/{id}`, so the AI can fetch the exact request and response that triggered each alert.

## Prompts

Prompts are reusable instruction templates. MCP clients discover them via prompts/list and retrieve them via prompts/get.

| Prompt | Description |
|------|-------------|
| `zap_baseline_scan` | Run a ZAP baseline scan, which uses the standard and AJAX spiders and passive scanning |
| `zap_full_scan` | Run a full ZAP scan, which uses the standard and AJAX spiders, followed by an active scan |


## Configuration

The MCP Server runs an HTTP server inside ZAP. Configure it via **Options → MCP Integration**:

- **Port**: Default is 8282. Change it if needed.
- **Secure Only**: Default is true. If set then HTTP connections will be rejected.
- **Security Key**: When enabled (default), clients must send the key in the `Authorization` header. Use "Generate" to create a new key.

## Scripting

We have deliberately kept the ZAP MCP Server functionality limited at this stage, in order to make it more comprehensible.

However you can add custom MCP tools and resources using Extender scripts. The add-on provides templates to get started:

* **Add MCP tool** - An example tool that echoes a message. Use as a template for custom tools that MCP clients can invoke.
* **Add MCP resource** - An example resource that returns sample data. Use as a template for custom resources that MCP clients can read.

Create a new Extender script (Scripts → Add → Extender) and choose one of these templates, or copy from an existing script. The templates demonstrate how to register and unregister with the MCP server's tool and resource registries.

## Security

By default, the add-on requires a security key. This prevents unauthorised access when ZAP is running and the MCP server is reachable (e.g. on localhost or a shared network).

If you're only using MCP locally and trust your environment, you can disable the security key requirement in the options. For remote or shared setups, keep it enabled and share the key only with trusted clients.

By default ZAP will reject HTTP connections. However as ZAP root CA certificate is generated by ZAP you will probably have to import the ZAP certificate as a trusted CA cert into any tools that use the MCP interface.
If this is not possible then you will need to use HTTP instead.

## Getting Started

1. **Install the add-on**  
   In ZAP: **Marketplace → MCP Integration** → Install.

2. **Configure the server**  
   **Options → MCP Integration**. Note the port and, if enabled, copy the security key.

3. **Connect your AI client**  
   Add the ZAP MCP server to your client. For example, in Claude Desktop you might add a server config pointing to `https://localhost:8282` with the security key in the `Authorization` header. Consult your client's MCP documentation for the exact format.

4. **Start a conversation**  
   Ask your assistant to spider a URL, run an active scan, or explain the alerts. It will use the tools and resources to interact with ZAP on your behalf.

For more details see the [MCP Integration](/docs/desktop/addons/mcp-integration/) help pages.

## Restrictions

We have chosen to expose only a small subset of the available ZAP functionality, in order to make the interface more accessible.

This release does not directly support authenticating to target apps - we are planning on adding support for this soon.

## What's Next?

The ZAP MCP Server is a first step toward deeper AI integration. 

We're interested in feedback on which tools and resources are most useful, and what else you'd like AI assistants to do with ZAP. 

Share your ideas and feedback on the [ZAP User Group](https://groups.google.com/group/zaproxy-users) or open an issue in the [zaproxy](https://github.com/zaproxy/zaproxy) repository for bugs or significant enhancement requests.
