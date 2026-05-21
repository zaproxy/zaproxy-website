---
title: "Scanning MCP Servers with ZAP"
summary: >
  ZAP can now scan MCP (Model Context Protocol) servers as a first-class target.
  Import an MCP server from the ZAP desktop or the Automation Framework, or run
  the new action-mcp-scan GitHub Action to scan one from CI.
type: post
images:
- https://www.zaproxy.org/blog/2026-05-21-scanning-mcp-servers-with-zap/images/screenshot.png
tags:
  - blog
  - mcp
  - automation
  - api
date: "2026-05-21"
authors:
  - simon

---

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers are starting to show up everywhere - exposing tools, resources, and prompts to AI assistants over JSON-RPC. They're a new kind of API, but they're still an API: an HTTP endpoint that takes structured input and returns structured output.

So we've taught ZAP to scan them.

The [MCP add-on](/docs/desktop/addons/mcp-integration/) can now import an MCP server's endpoints into ZAP, after which you can passive scan, active scan, fuzz, and report on it just like any other API.

## How It Works

When you point ZAP at an MCP server it:

1. Performs the MCP handshake (`initialize`).
2. Enumerates everything the server exposes - tools, resources, and prompts.
3. Sends a representative request to each one so that ZAP captures the full JSON-RPC request and response in the history and sites tree.

For `tools/call` and `prompts/get` requests, string arguments are populated using ZAP's [value generator](/docs/desktop/addons/value-generator/) where possible, so the requests look realistic rather than empty.

Once the requests are in ZAP's history, every existing ZAP capability applies - passive scan rules run against the responses, active scan rules attack the requests, you can fuzz parameters, and reports include any alerts that are raised.

## From the Desktop

In the ZAP desktop, install the **MCP Integration** add-on from the Marketplace, then choose:

**Import → Import MCP Server...**

Enter the MCP server URL and (if required) the security key value to send in the `Authorization` header. ZAP will probe the server, record every endpoint in the history and sites tree, and you can carry on as you would for any other target.

## From the Automation Framework

The add-on adds an `mcp-import` job that does the same thing inside an Automation Framework plan:

```yaml
- type: mcp-import
  parameters:
    serverUrl: "https://example.com/mcp"
    securityKey: "Bearer ${MCP_TOKEN}"
```

Drop that into a plan alongside the standard `passiveScan-wait`, `activeScan`, and `report` jobs and you have an end-to-end scan of an MCP server.

For the full job reference see the [MCP Automation Framework](/docs/desktop/addons/mcp-integration/mcp-automation/) help pages.

## From GitHub Actions

For CI we've added the GitHub [ZAP MCP Scan](https://github.com/marketplace/actions/zap-full-scan) action. Give it a target URL and it builds and runs an Automation Framework plan for you:

```
mcp-import → passive scan → active scan → JSON / HTML / Markdown reports
```

A minimal workflow step looks like:

```yaml
steps:
  - name: ZAP MCP Scan
    uses: zaproxy/action-mcp-scan@v0.1.0
    with:
      target: 'https://example.com/mcp'
      security_key: ${{ secrets.MCP_TOKEN }}
```

The action follows the same conventions as [action-api-scan](https://github.com/zaproxy/action-api-scan) and [action-af](https://github.com/zaproxy/action-af) - same rules file format, same artifact / issue handling, same authentication environment variables. If you've used the other ZAP actions this one should feel immediately familiar.

If you need full control over the plan, use [`action-af`](https://github.com/zaproxy/action-af) directly and write your own plan that includes the `mcp-import` job.

> [!WARNING]
> Active scans send mutating `tools/call` requests. If your target's tools have real side effects (file writes, database changes, outbound requests), point this at a test deployment rather than production.

## No MCP-specific Rules - Yet

Right now ZAP scans MCP servers using its existing passive and active scan rules. That already catches a lot - missing security headers, information disclosure, injection in tool arguments, transport-layer issues, and so on - but it does not yet cover the MCP-specific risks that the protocol introduces (things like prompt-injection-via-tool-description, dangerous tool capabilities, resource exfiltration patterns, and so on).

We are planning to add MCP-specific scan rules in a future release. If there are particular checks you would like to see, please let us know.

## Feedback

This is an early release and the MCP ecosystem is moving fast. If you try it against your own server - or one of the public test servers - please tell us what worked, what didn't, and what you'd like to see next:

- [ZAP User Group](https://groups.google.com/group/zaproxy-users)
- [zaproxy issues](https://github.com/zaproxy/zaproxy/issues) for bugs and enhancement requests

## Links

- [MCP add-on docs](/docs/desktop/addons/mcp-integration/)
- [MCP Automation Framework support](/docs/desktop/addons/mcp-integration/mcp-automation/)
- [action-mcp-scan on GitHub](https://github.com/zaproxy/action-mcp-scan)
- [The ZAP MCP Server](/blog/2026-04-02-zap-mcp-server/) - the other side of the integration: letting AI assistants drive ZAP
- [Model Context Protocol](https://modelcontextprotocol.io/)
