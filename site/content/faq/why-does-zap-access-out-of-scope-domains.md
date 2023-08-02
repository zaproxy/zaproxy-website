---
title: "Why does ZAP Access Out of Scope Domains?"
type: faq
category: General Questions
weight: 2
---

You have automated ZAP to attack your site but then you see that there are other domains
in the [Sites Tree](/docs/desktop/start/features/sitestree/) or in the report.

Does this mean ZAP has attacked those other domains?

No. ZAP will only attack the sites you specify.

However the [AJAX Spider](/docs/desktop/addons/ajax-spider/) and the 
[DOM XSS Scan Rule](/docs/desktop/addons/dom-xss-active-scan-rule/) both launch browsers.
We allow the browsers to access certain off domain resources such as JavaScript files - blocking these
often breaks the target sites and mean the AJAX Spider or DOM XSS Scan Rule would not work.

This is perfectly safe and no different from just opening the relevant URLs in your own browser.