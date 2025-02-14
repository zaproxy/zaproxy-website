---
# This page was generated from the add-on.
title: Neonmarker
type: userguide
weight: 1
cascade:
  addon:
    id: neonmarker
    version: 1.8.0
---

# Neonmarker

Neonmarker add-on, which colours History table entries based on
tags.


The add-on also facilitates colouring arbitrary messages in the
History table via a right-click context menu. Tags are added to the
selected messages to deliver the necessary colouring. Neonmarker's
custom tags take the form
`neon_UUID`
, for example:
`neon_e8b1d1e6-9dd4-4996-bc02-de2213986352`
. Another context menu item provides functionality to remove
Neonmarker's custom tags.

The following code example shows how to add a Neonmarker
colorMapping via JavaScript within ZAP using a Stand Alone script.


    		
    		extNeon = control.getExtensionLoader().getExtension(org.zaproxy.zap.extension.neonmarker.ExtensionNeonmarker.NAME);
    		
    		// History items tagged “Comment” will be red
    		extNeon.addColorMapping("Comment", 0x990000);
    		
    	
