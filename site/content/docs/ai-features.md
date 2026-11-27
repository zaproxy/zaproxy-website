---
type: page
title: AI Features
date: "2026-11-23"
tags: 
- guide
---
ZAP has a number of optional features which use AI, in particular Large Language Models (LLMs), and which let AI assistants and agents use ZAP.
All of them are provided by add-ons that you have to choose to install, and ZAP will not share any data with an LLM unless you have installed the LLM add-on and configured it to connect to a model provider.

You are always in control of what is shared: each model provider can be marked as **Trusted** in the [LLM options](/docs/desktop/addons/llm-support/options/).
Trusted providers may receive richer context (for example full HTTP messages) and can use tools, while untrusted providers only receive the minimum data needed for the feature in use.
All communications with LLMs are shown in the associated LLM Chat tab.

### LLM Support

The [LLM Support](/docs/desktop/addons/llm-support/) add-on is the foundation for most of ZAP's AI features.
It allows you to connect ZAP to the LLM of your choosing, including Ollama, OpenAI compatible, Azure OpenAI, Google Gemini and Claude providers, and provides hooks for other add-ons to use it.

* [Options](/docs/desktop/addons/llm-support/options/) - configure your model providers and which of them are trusted
* [LLM Chat](/docs/desktop/addons/llm-support/chat/) - an interactive chat interface for talking directly to the configured LLM
* [LLM MCP Support](/docs/desktop/addons/llm-support/mcp/) - allows the LLM to invoke ZAP's MCP tools (spider, active scan, report generation, etc.) autonomously during a chat session
* [Automation Framework](/docs/desktop/addons/llm-support/automation/) - the `llm-config` job configures the providers, e.g. for headless runs

### AI Features Using an LLM

The following add-ons use the LLM Support add-on, if it is installed and configured:

* [AI Assisted Authentication](/docs/desktop/addons/authentication-helper/ai-auth/) - uses an LLM to drive a browser and log in to your app, and then converts what it did into a [Client Script](/docs/desktop/addons/authentication-helper/client-script/) authentication script, so that the LLM is only needed once
* [Alert Review](/docs/desktop/addons/alert-filters/llm/) - asks the LLM to review an alert, potentially changing its confidence level and adding an explanation
* [OpenAPI Import](/docs/desktop/addons/openapi-support/llm/) - uses an LLM to extract sequences of HTTP requests from an OpenAPI definition

### MCP Integration

The [MCP Integration](/docs/desktop/addons/mcp-integration/) add-on implements a Model Context Protocol (MCP) server in ZAP, allowing AI assistants and other MCP clients to control ZAP.
It exposes:

* [Tools](/docs/desktop/addons/mcp-integration/mcp-tools/) - actions that MCP clients can invoke, such as starting a spider
* [Resources](/docs/desktop/addons/mcp-integration/mcp-resources/) - data that MCP clients can read, such as alerts and the Sites Tree
* [Prompts](/docs/desktop/addons/mcp-integration/mcp-prompts/) - reusable scan workflow templates, such as a baseline scan or a full scan
* [Options](/docs/desktop/addons/mcp-integration/mcp-options/) - the server port and security key

The MCP server must only be accessible from the local machine, see the [add-on help](/docs/desktop/addons/mcp-integration/) for details.

The add-on can also import and test external MCP servers, so that ZAP can scan and fuzz them like any other HTTP traffic.

* [Automation Framework](/docs/desktop/addons/mcp-integration/mcp-automation/) - the [mcp-config](/docs/desktop/addons/mcp-integration/mcp-automation-config/) job configures the MCP server and the [mcp-import](/docs/desktop/addons/mcp-integration/mcp-automation-import/) job imports an external MCP server

### Using ZAP Findings with Other AI Tools

* [Generate Fix Prompt](/docs/desktop/addons/common-library/generate-fix-prompt/) - an alert right-click option which creates a prompt containing everything ZAP knows about an issue, that you can paste into any LLM or coding assistant and ask it to fix the vulnerability in your code

### Testing AI Systems

* [Fuzz AI Files](/docs/desktop/addons/fuzzai-files/) - fuzzing payloads for testing AIs, for example via an API, based on models such as the AI Resilience Maturity Model (AI-RMM)
* [MCP server import](/docs/desktop/addons/mcp-integration/#importing-external-mcp-servers) - allows you to test MCP servers using ZAP's usual tools
* [ZAP MCP Scan](https://github.com/marketplace/actions/zap-mcp-scan) - a GitHub Action which scans an MCP server as part of your workflows
