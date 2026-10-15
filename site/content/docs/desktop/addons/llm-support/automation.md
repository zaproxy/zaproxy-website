---
# This page was generated from the add-on.
title: LLM Automation Framework Support
type: userguide
weight: 1
---

# LLM Automation Framework Support

The LLM add-on adds support for the [Automation Framework](/docs/desktop/addons/automation-framework/), if the automation add-on is installed.

## Job: llm-config

The `llm-config` job configures the LLM providers, the same ones you can configure in the [Options](/docs/desktop/addons/llm-support/options/).

```
  - type: llm-config                   # Configure the LLM providers
    parameters:
      deleteExisting: false            # Bool: Remove all existing providers first, default: false
      defaultProvider:                 # String: Name of the default provider, default: the current default, or the first provider
      defaultModel:                    # String: The default model, must be one of the default provider's models, default: the current default if valid, or the first model
    providers:                         # List: Each provider is added, or replaces the existing one with the same name
      - name:                          # String: Unique provider name
        type:                          # String: OLLAMA, OPENAI_COMPATIBLE, AZURE_OPENAI, GOOGLE_GEMINI or CLAUDE
        apiKey:                        # String: The API key, use an environment variable, e.g. ${LLM_API_KEY}
        endpoint:                      # String: The endpoint URL, required for specific providers
        models:                        # List: The model names, at least one is required
          -
        trusted:                       # Bool: Whether the provider is trusted, default: true for OLLAMA, otherwise false
        timeout:                       # Int: Request timeout in seconds, default: 60
```


By default the providers in the job are merged with the existing ones: a provider with the name of an existing one replaces it,
and any other existing providers are left as they are.
Set `deleteExisting` to `true` to remove all existing providers first.


In the Automation Framework GUI the job dialog has a *Parameters* tab and a *Providers* tab.
The *Providers* tab lists the providers in the job, which can be added, modified (also by double clicking) and removed.
Fields left empty are not included in the plan, so the default is used for them.
A timeout of 0 means the default is used.


When the plan is verified only the providers in the job are checked, not the current configuration, as the job might be run against a different one:
a provider with no name, or the same name as another provider in the job, or with a `type` of `NONE` is an error.
The providers must be valid for a new configuration, so include a type, an endpoint when one is required, models, and that the default provider and model are configured.
When the job is run the result is always checked against the configuration at that point, and nothing is changed if it is not valid.


API keys can be given directly, but it is recommended to use environment variables so that they are not saved in the plan.


The job should be run before any other jobs that need an LLM.
