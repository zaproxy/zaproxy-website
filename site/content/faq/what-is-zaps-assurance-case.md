---
title: "What is ZAP's assurance case?"
type: faq
category: Detailed Questions
weight: 7
---

## Basic Threat Model & Trust Boundaries

ZAP is a Java application which is meant to be used primarily in Single user and CI/CD deployment models. As such protection of ZAP and its associated/generated data is outside the scope of ZAP's sphere of influence (ex: if a system which houses ZAP can be physically stolen, then all the data on the system is at risk).

The following assumptions are applicable for our model of ZAP's use:

- We do not aim to protect from someone with command line access to the machine ZAP is running on.
- We aim to protect users from the websites that ZAP connects to.
- We do not (generally) trust websites that ZAP connects to.
- We do trust specific ZAP websites and all of the signing certificates, as long as we can connect to them via HTTPS.
- If the user is testing potentially malicious sites we recommend taking additional precautions (as one would when dealing with malware), such as running ZAP in a container or VM.

While attempts are made to ensure that third parties cannot adversely impact users of ZAP, users should always be aware of what their targets are and what data or services ZAP may expose. To that end:

- Users identify which "targets" they interact with.
- The Web API and proxy are available only locally by default.
- Access to the Web API requires the use of a key/token and identified permitted clients by default.
- Third party scripts and add-ons are added based on user selection/choice.
	- Scripts and add-ons which are advertised via the ZAP Marketplace are reviewed prior to release, to ensure at the very least that they do not do anything obviously malicious.

## Secure Design Principles

All contributions to ZAP are reviewed by a minimum of two core team members. Design principals are further outlined in the [Developer Guide](https://www.zaproxy.org/docs/developer/) and [ZAP Wiki](https://github.com/zaproxy/zaproxy/wiki/).

Known or intentional weaknesses such as allowing weak TLS/SSL connections or weak/improperly signed certificates are a side effect of the type of testing ZAP is designed to carry out, and exist simply to maximize coverage and compatibility with the potentially huge 'pool' of web enabled targets.

### Common Implementation Security Weaknesses Countered

ZAP's codebase is regularly tested via multiple Static Analyzers and issues addressed.
