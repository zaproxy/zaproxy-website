---
# This page was generated from the add-on.
title: Alert Filter LLM Support
type: userguide
weight: 4
---

# Alert Filter LLM Support

This add-on supports LLM integration. It will only be enabled if you have chosen to install the LLM add-on.

## Alert Review

The add-on adds a right click menu item "Review using LLM/AI" that is enabled for a single alert.


The alert review will instruct the configured LLM to examine the selected alert and determine the confidence level based on evidence from ZAP, complete with an explanation for the updated confidence level.
The full prompt and the LLM response are shown in a dedicated **LLM: Alert Review** tab in the LLM Chat panel.


The prompt always includes the alert title, description, evidence, and other info.
If the selected default model provider is marked as **Trusted** in the LLM Options, ZAP also shares the
full HTTP request, the response headers, and a block of text around the evidence when that evidence appears in the
response body.


The review will potentially change the confidence level of the alert.
A new `LLM Explanation` will be added to the "Other Info" explaining why the change was made.
The tag `AI-Reviewed` will always be added to any alert reviewed.
