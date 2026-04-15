---
# This page was generated from the add-on.
title: Generate Fix Prompt
type: userguide
weight: 3
---

# Generate Fix Prompt

The **Generate Fix Prompt** right-click menu option is available on alerts in the Alerts tab. It generates a prompt that you can paste into any Large Language Model (LLM) — such as ChatGPT, GitHub Copilot, or Claude — and ask it to fix the vulnerability in your codebase.

## Usage

1. Right-click an alert in the Alerts tab.
2. Select **Generate Fix Prompt**.
3. The prompt is copied to your clipboard.
4. Paste it into your LLM of choice and review its suggested fix.

## What the prompt contains

The generated prompt includes all information ZAP has about the vulnerability:

* **Name** — the alert name.
* **Risk** — Informational, Low, Medium, or High.
* **Confidence** — how confident ZAP is that the finding is a true positive.
* **URL** — the URL at which the vulnerability was found.
* **Method** — the HTTP method used (GET, POST, etc.).
* **Parameter** — the affected parameter, if applicable.
* **Attack** — the payload ZAP used to trigger the vulnerability, if applicable.
* **Evidence** — the string found in the response that confirmed the vulnerability, if applicable.
* **Description** — a full description of the vulnerability class.
* **Solution** — ZAP's recommended remediation guidance.
* **References** — links to further reading.
* **Other Information** — any additional context provided by the scan rule.

## Systemic vulnerabilities

Some scan rules raise *systemic* alerts — issues that tend to affect the whole application rather than a single endpoint, such as missing security headers or insecure cookie settings. When a systemic alert is detected the prompt includes a note telling the LLM that there may be multiple instances across the codebase that all need to be fixed.

## Confirmation dialog

After the prompt is copied a confirmation dialog is shown. You can suppress this dialog in future by selecting **Do not show this message again** before dismissing it. This preference is saved in the ZAP configuration file and can be restored by resetting ZAP's options.


See also:

* [Alerts tab](/docs/desktop/ui/tabs/alerts/)
