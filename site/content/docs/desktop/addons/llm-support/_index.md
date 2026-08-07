---
# This page was generated from the add-on.
title: LLM Support
type: userguide
weight: 1
cascade:
  addon:
    id: llm
    version: 0.0.1
---

# LLM Support

This optional add-on integrates LLM with ZAP. It allows you to configure ZAP to connect to an LLM of your choosing, and provides hooks for other add-ons to access the LLM.


ZAP will not share any data with LLMs unless you choose to install this add-on, and configure it to connect to a supported LLM.
How much data ZAP shares depends on whether the model provider is marked as [Trusted](/docs/desktop/addons/llm-support/options/) —
trusted providers may receive richer context (for example HTTP messages) and can use tools, while untrusted providers
receive only the minimum data needed for the feature in use.


All communications with LLMs will be shown in a sub-tab of the main Output tab.


This add-on provides the following functionality:

* [LLM Chat](/docs/desktop/addons/llm-support/chat/) - an interactive chat interface that allows you to communicate directly with the configured LLM.
* [MCP Support](/docs/desktop/addons/llm-support/mcp/) - when the MCP add-on is also installed, the LLM can invoke ZAP's MCP tools (spider, active scan, report generation, etc.) autonomously during a chat session.
