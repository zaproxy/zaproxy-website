---
title: "How can ZAP test sites that use certificate pinning?"
type: faq
category: Detailed Questions
weight: 7
---

Certificate pinning also known as [Public Key Pinning](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning) "is
a mechanism for sites to specify which certificate authorities have issued
valid certs for that site, and for user-agents to reject TLS connections to
those sites if the certificate is not issued by a known-good CA."

Sites that use certificate pinning will typically not be loaded in your
browser if you are proxying it through ZAP.

In Firefox you can change the
[about:config](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) pref:
'security.cert_pinning.enforcement_level' to '0' or '1'

The levels supported are:

- 0 Don't enforce any pins
- 1 Enforce pins when the chain is not from a local root
- 2 Always enforce pins

This article: <https://www.imperialviolet.org/2011/05/04/pinning.html> states
that Chrome will allow user installed root CA certificates to override pins.

Advice and guidance for other browsers appreciated :)
