---
# This page was generated from the add-on.
title: Anti CSRF Handling
type: userguide
weight: 4
---

# Anti CSRF Tokens


Anti CSRF tokens are (pseudo) random parameters used to protect against Cross Site Request Forgery (CSRF) attacks.  

However they also make a penetration testers job harder, especially if the tokens are regenerated every time a form is requested.  


ZAP detects anti CSRF tokens purely by attribute names - the list of attribute names considered to be anti CSRF tokens
is configured using the [Options Anti CSRF screen](/docs/desktop/ui/dialogs/options/anticsrf/).  

When ZAP detects these tokens it records the token value and which URL generated the token.  

Other tools, like the [active scanner](/docs/desktop/start/features/ascan/), have options which
cause ZAP to automatically regenerate the tokens when required.

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |
