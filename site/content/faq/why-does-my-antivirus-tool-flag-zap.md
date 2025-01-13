---
title: "Why does my Antivirus Tool Flag ZAP?"
type: faq
category: General Questions
weight: 2
---

We know that many Antivirus (AV) tools flag ZAP and some of the ZAP add-ons.

For example the ZAP 2.15 Windows installer was 
[flagged by 3 / 63](https://www.virustotal.com/gui/file/28b348dd65116ddabbbbd98b7f84864a0bb0f98d656266f2f08bfd010ae51c57)
security vendors.

In particular the [Active Scan Rule add-on](/docs/desktop/addons/active-scan-rules/) is often flagged: v65 was 
[flagged by 10 / 63](https://www.virustotal.com/gui/file/84b91ad0dc613838ab57b5f78fb091d63026cef77c2bf223ea68e97fa05b4181)
security vendors.

Detecting viruses is hard, especially as viruses try to disguise themselves.
This means that AV tools try to detect potentially malicious activity or code.

ZAP is a security tool which "does bad things".

The [Active Scan Rule add-on](/docs/desktop/addons/active-scan-rules/) contains the rules which attack websites, 
so it is not surprising that make AV tools flag it.

Any issues raised about ZAP or its add-ons being flagged by AV tools will be closed with a link to this FAQ.

__If you work for an AV tool vendor and would like to discuss how you can make sure your tool does not incorrectly flag ZAP then please
[get in touch](mailto:support@zaproxy.com).__
