---
# This page was generated from the add-on.
title: LLM MCP Support
type: userguide
weight: 2
---

# LLM MCP Support

When both the LLM Support add-on and the MCP add-on are installed, the **LLM MCP Support** sub-extension automatically gives the LLM the ability to invoke ZAP's MCP tools directly during a chat session. Tools are only included when the selected model provider is marked as [Trusted](/docs/desktop/addons/llm-support/options/) (the same flag that controls whether ZAP may share additional data with the provider). You can also turn tools off for an individual chat tab using the tools toggle in the chat toolbar.

## How It Works

Each time you send a chat message with tools enabled, the LLM receives the full list of tools currently registered in the MCP add-on alongside your message. If the LLM decides a tool is needed to answer your request, it invokes that tool in-process (no HTTP round-trip to the MCP server is required), observes the result, and may invoke further tools before returning a final answer. Each tool call and its response are shown in the [LLM Chat](/docs/desktop/addons/llm-support/chat/) message area for that conversation.


Because tools are resolved per request, any tools registered after start-up - for example from scripts
or third-party add-ons - are available immediately without restarting ZAP.

## Available Tools

The full set of tools exposed by the MCP add-on are available to the LLM add-on.

## Example Usage

You can ask the LLM to carry out a complete scan workflow in plain language. For example:

* "Run a spider scan against https://example.com and tell me how many URLs it found."
* "Start an active scan on https://example.com using the Default Policy, then generate a report when it finishes."
* "What is the current passive scan queue size?"

The LLM will invoke the appropriate tools, poll for completion where necessary, and summarise the results.

## Requirements

* Both the **LLM Support** and **MCP** add-ons must be installed.
* The LLM provider must be configured in the [Options](/docs/desktop/addons/llm-support/options/) panel.
* The MCP add-on does **not** need to have its HTTP server enabled or configured; tools are called in-process.

## Security Considerations

Allowing an LLM to invoke scan tools means it can initiate network activity against configured targets. Ensure that:

* You only ask the LLM to scan targets you are authorised to test.
* Untrusted data appended to the chat (such as HTTP responses) could attempt prompt injection. See the [chat help page](/docs/desktop/addons/llm-support/chat/#prompt-injection) for countermeasures that are applied.
