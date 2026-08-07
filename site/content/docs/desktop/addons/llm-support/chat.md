---
# This page was generated from the add-on.
title: LLM Chat
type: userguide
weight: 1
---

# LLM Chat

The LLM Chat panel provides an interactive chat interface that allows you to communicate directly with a configured Large Language Model (LLM). This feature enables you to ask questions, get explanations, and receive assistance from the LLM in real-time.

## Accessing the Chat Panel

The LLM Chat panel appears as a tab in the ZAP Workspace window. You can access it by clicking on the "LLM Chat" tab.

## Multiple Tabs

The LLM Chat panel supports multiple sub-tabs, allowing you to run several conversations in parallel. Each tab maintains its own conversation history and its own LLM provider selection, so you can keep different topics, contexts, or models separate.


Click the plus (+) tab to create a new chat tab. Tabs are initially numbered; double-click a tab to rename it. Click the close button on a tab to remove it — you will be asked to confirm before the tab and its history are discarded.


A green activity indicator appears on a tab when new output has been written to it while another tab is selected. It clears automatically when you switch to that tab.

## Chat Toolbar

Each chat tab has a toolbar at the top containing the following controls:

* **Provider dropdown:** Shows the LLM provider and model currently active for this tab, for example *My Claude - claude-opus-4-5*. Click the dropdown to select a different provider or model from those you have configured. Each tab has its own independent provider selection — changing one tab's provider does not affect other tabs, and changing the global default (via the main ZAP toolbar button) does not alter providers already chosen in open tabs.
* **Tools toggle (power drill icon):** Enables or disables adding registered tools (such as those from the MCP add-on) to the LLM context for this tab. When enabled (the default for trusted providers), the LLM can invoke tools during the conversation. When disabled, subsequent messages are sent without tools. The toggle is only available when the selected model provider is marked as **Trusted** in the LLM Options — trusted providers may also receive richer data from other ZAP features; for untrusted providers the button is disabled and tools are never included. Toggling tools rebuilds the chat service for this tab (conversation history shown in the panel is retained for display, but is not carried across to the rebuilt service).
* **Token counter:** Displays the cumulative number of tokens used in conversations with the current provider on this tab. The counter resets to zero when you select a different provider or model. Note that not all providers report token usage; if a provider does not, the counter will remain at zero.
* **Options button (gear icon):** Opens the [LLM Options](/docs/desktop/addons/llm-support/options/) panel directly, where you can add, modify, or remove model providers.

### Switching Providers Mid-Conversation

You can change the provider at any point during a conversation using the provider dropdown. When you do:

* A system message is written to the chat area confirming which provider and model is now active.
* The token counter resets to zero for the new provider.
* Subsequent messages are sent to the newly selected provider.

Note that the conversation history shown in the chat area is for display only — switching providers does not carry the message history across to the new model.

## Using the Chat Interface

The chat interface consists of:

* **Toolbar:** Shows the active provider, tools toggle, token usage, and an options button. See above.
* **Message Area:** Displays the conversation history between you and the LLM assistant in the top portion of the panel. Messages are shown with labels indicating who sent them ("You" for your messages, "Assistant" for LLM responses). When tools are enabled and the LLM invokes them (for example MCP tools), each tool call and its result are also shown in the message area as they happen.
* **Input Area:** A multi-line text area at the bottom of the panel where you type your questions or messages.
* **Send Button:** Click to send your message to the LLM.
* **Resizable Divider:** A divider between the message area and input area that can be dragged to adjust the relative sizes of each section.

## Sending Messages

To send a message to the LLM:

1. Select a provider in the toolbar dropdown if one is not already shown.
2. Type your question or message in the input area at the bottom of the panel. The input area supports multi-line text, so you can type longer messages or format your questions.
3. Click the "Send" button or press Ctrl+Enter to send your message. (Note: Pressing Enter alone will create a new line in the multi-line input area.)
4. Your message will appear in the message area, and the LLM will process it in the background.
5. Once the LLM responds, the assistant's reply will appear below your message.

## Requirements

Before using the LLM Chat feature, you must have configured at least one LLM provider via the [Options](/docs/desktop/addons/llm-support/options/) panel. When a chat tab is opened, it picks up the currently configured default provider automatically. If no default is set, the first available configured provider is used instead.


If no providers have been configured, the provider dropdown will be empty and you will see an error message when attempting to send a message.

## Error Handling

The chat panel handles various error conditions:

* **Not Configured:** If no LLM provider is selected for the tab, you will see an error message prompting you to configure one in the Options panel.
* **Service Error:** If there is an issue initializing the LLM service, an appropriate error message will be displayed.
* **Send Error:** If there is an error sending a message to the LLM, the error details will be shown in the message area.

## Appending ZAP Data to Chat

You can quickly add data from ZAP directly into the chat input area using context menu items. Data is appended to the currently selected chat tab.

### Prompt Injection Countermeasures

When appending untrusted data (such as HTTP responses or alert details), the add-on applies the following safeguards to reduce prompt injection risk:

* **Structured payloads:** Appended data is inserted as structured JSON rather than free-form text.
* **Untrusted data delimiters:** The JSON block is wrapped between explicit **BEGIN/END** markers so the model can distinguish it from user instructions.
* **System guidance:** A fixed system message instructs the model to treat data inside the delimiters as data only, never as instructions.

These measures reduce risk but do not eliminate it. Always review appended content before sending.

### Appending Alerts

To append alert information to the chat:

* Right-click on one or more alerts in the Alerts tab or Alert tree.
* Select "Append Alert to LLM Chat" from the context menu.
* The alert details (name, risk level, confidence, description, evidence, URI, etc.) will be formatted and added to the input area.
* If multiple alerts are selected, all of them will be appended in sequence.
* The chat panel will automatically switch to the chat tab, and the cursor will be positioned at the end of the appended text.

### Appending HTTP Messages

To append HTTP request/response data to the chat:

* Right-click on an HTTP message in the History tab, Request/Response panels, or any other location where HTTP messages are displayed.
* Select one of the following options from the context menu:
    * **Append Request to LLM Chat:** Adds only the HTTP request (headers and body).
    * **Append Response to LLM Chat:** Adds only the HTTP response (headers and body).
    * **Append Request \& Response to LLM Chat:** Adds both the request and response.
* The HTTP message data will be formatted and added to the input area.
* The chat panel will automatically switch to the chat tab, and the cursor will be positioned at the end of the appended text.

## Tips

* Use multiple tabs to organize different conversations — each tab keeps its own provider selection, tools toggle, message history, and token count independently.
* If you want to compare responses from different models, open two tabs and set each to a different provider.
* The token counter gives you a rough indication of how much of your context window or quota you are using in this conversation with a given model.
* You can ask questions about security testing, web application vulnerabilities, ZAP usage, or any other topic the LLM can help with.
* The model is told that it is an assistant integrated into ZAP, so it can tailor answers to web application security testing and ZAP workflows. When tools are enabled it may also use them to interact with ZAP.
* The input area is disabled while a message is being processed to prevent sending duplicate messages.
* Messages automatically scroll to show the latest conversation.
* Use the resizable divider to adjust the size of the message area and input area based on your preference.
* You can append multiple alerts or HTTP messages in sequence to build up context for your questions to the LLM.
* After appending data, you can edit it in the input area before sending, or add additional questions or context.
