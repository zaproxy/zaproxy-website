---
# This page was generated from the add-on.
title: Neonmarker
type: userguide
weight: 1
cascade:
  addon:
    id: neonmarker
    version: 1.4.0
---

# Neonmarker

Neonmarker addon, which colours History table entries based on tags. The following code example shows how to add a Neonmarker colorMapping via JavaScript within ZAP using a Stand Alone script. `extNeon = org.parosproxy.paros.control.Control.getSingleton().getExtensionLoader().getExtension(org.zaproxy.zap.extension.neonmarker.ExtensionNeonmarker.NAME); // History items tagged “Comment” will be red extNeon.addColorMapping("Comment", 0x990000);`
