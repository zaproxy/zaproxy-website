---
# This page was generated from the add-on.
title: Custom Page
type: userguide
weight: 12
---

# Custom Page

ZAP can accommodate the definition of various non-standard error handling conditions.  
Each [Context](/docs/desktop/start/features/contexts/) may include multiple Custom Page definitions, with the following elements:

- Enabled \> Whether the definition is enabled or not.
- Content \> The String or Regex which defines the URL or response content to be matched.
- Content Location \> Whether the "Content" should be matched against a URL or response "Content".
- Is Regex? \> Indicating whether or not "Content" is a regular expression or not.
- Custom Page Type \> Specifying what type of Custom Page is being defined:
  - Error Page \> For '500 - Internal Server Error' type pages.
  - Not Found \> For '404 - Not Found' responses.
  - Ok \> For '200 - Ok' definitions
  - Other \> To facilitate use of Custom Pages in scripts or other usages that have not yet been foreseen.

## Configuration example

A configuration example showing how to fully configure a webapp that returns a 200 - Ok response with the message
"Sorry, we can't seem to find what you were looking for" is seen below:

1. Set up a context for the web application
2. Make sure your browser proxies everything through ZAP and browse to a page or endpoint which doesn't exist
3. Go to ZAP and identify the request
4. Set up the Custom Page definition:
   1. Highlight "Sorry, we can't seem to find what you were looking for" in the response pane, Right click and 'Flag as Context... Custom Page Indicator'
   2. A dialog will be opened already containing the highlighted response string.
5. Accept the addition of the Custom Page definition.

## Configured via

|     |                                                                                     |     |
| --- | ----------------------------------------------------------------------------------- | --- |
|     | [Session Properties dialog](/docs/desktop/ui/dialogs/session/contexts/#custompages) |     |
