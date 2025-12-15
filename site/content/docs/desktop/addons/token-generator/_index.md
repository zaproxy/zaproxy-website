---
# This page was generated from the add-on.
title: Token Generation and Analysis
type: userguide
weight: 1
cascade:
  addon:
    id: tokengen
    version: 16.0.0
---

# Token Generation and Analysis

This add-on allows you to generate and analyse pseudo random tokens, such as those used for session handling or CSRF protection.


To generate and analyse tokens:

* Find a request that contains the token you want to generate
* Right click in the Sites tab or one of the bottom tabs and select 'Generate Tokens...'
* Choose the token you want to generate
* Press the Generate button
* The responses and tokens will then be listed in the 'Token Gen' tab
* When all of the tokens have been generated the 'Analyse Tokens' dialog will be displayed

**Note:** Token generations are not allowed in `Safe` mode nor `Protected` if the message is not in scope.

## See also

|   |                                                                                 |                                                |
|---|---------------------------------------------------------------------------------|------------------------------------------------|
|   | [Options Token Generator screen](/docs/desktop/addons/token-generator/options/) | for an overview of the Token Generator Options |
