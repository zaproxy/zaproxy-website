---
# This page was generated from the add-on.
title: Options
type: userguide
weight: 3
---

# Options

## Model Providers


Configure one or more model providers. Each provider entry has a unique name, which is used
to select it in other parts of the UI. You can add, modify, and remove providers from the
list. The default provider is used when an LLM is required and no other provider is chosen.
You can also set the default model for the selected provider.


The current supported model providers are:

* Azure OpenAI
* Claude (Anthropic)
* Google Gemini
* Ollama
* OpenAI Compatible

### Azure OpenAI

The details you will need can be found in the "Keys and Endpoint" section when examining your resource from the Azure portal.


For the API key you can use either KEY1 or KEY2.


You can also find the endpoint via the "Deployments" page in the Azure AI Foundry portal. An example endpoint is: `https://docs-test-001.openai.azure.com/`.

### Claude (Anthropic)

The API key can be obtained from the [Anthropic Console](https://console.anthropic.com) under **API Keys** .


The endpoint base URL is built-in and does not need to be specified.

### Google Gemini

The API key can be found in the "API Keys" section of Google AI Studio.


The endpoint base URL is built-in and so does not need to be specified.

### Ollama

You will typically not need to specify an API key. Local models do not need an API key and if you access cloud models then you can configure the API key in Ollama.


If you have Ollama installed on the same machine as ZAP then by default the endpoint will be `http://localhost:11434/`.

### OpenAI Compatible

Use this provider for any server that exposes an OpenAI-compatible Chat Completions API.


The Endpoint Base URL field includes suggested values for common servers; you can also enter a
custom endpoint.

## Provider Fields


Each model provider has the following fields:

* **Name**: A unique name for the provider entry.
* **Provider**: The type of model provider.
* **API Key**: The API key, if required by the provider.
* **Endpoint Base URL**: The base URL for API requests, if supported by the provider.
* **Models**: One or more model/deployment names, one per line. At least one model must be specified for all providers.
* **Timeout (seconds)**: How long to wait for a response from the provider before giving up. The default is 60 seconds. Increase this for slower models or local inference.
* **Trusted**: Whether ZAP may share additional data with this provider and allow it to use tools. When a provider is trusted, ZAP features may include richer context in prompts (for example HTTP requests, response headers, and surrounding evidence) and may add tools (such as MCP tools) to the LLM context. When a provider is untrusted, ZAP sends only the minimum data needed for the feature and never includes tools. Local providers such as Ollama default to trusted; remote providers default to untrusted. You can change this at any time via the provider dialog or by toggling the checkbox in the providers table. For untrusted providers the tools toggle in the chat toolbar is disabled.

## Defaults


The **Default provider** is used by LLM features unless another provider is
selected elsewhere. The default provider list includes a **None** option,
which indicates that no provider is configured by default.


The **Default model** applies to the selected default provider. It is populated
from the provider's model list.

## Main Toolbar Model Selector


The main ZAP toolbar includes an LLM button that lets you quickly switch the global default
provider and model. The dropdown shows one entry for each provider/model combination and
indicates which one is currently the default. The **None** entry clears the
default provider and model.


Changing the global default here applies to new chat tabs and any other LLM feature that
uses the default. It does *not* change the provider already selected in an open
chat tab — each tab manages its own provider independently.

## Chat Tab Provider Selector


Each LLM Chat tab has its own provider dropdown in its toolbar. This lets you choose a
different provider or model for that conversation without affecting other tabs or the global
default. See the [LLM Chat](/docs/desktop/addons/llm-support/chat/) help for details.
