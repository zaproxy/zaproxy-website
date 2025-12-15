---
# This page was generated from the add-on.
title: Groovy Support
type: userguide
weight: 1
cascade:
  addon:
    id: groovy
    version: 4.0.0
---

# Groovy Support


The Groovy Support add-on allows Groovy to be used for ZAP scripting and to run add-ons written in Groovy.  

It's bundled Groovy 5.0 (5.0.3), core and all modules.

## Scripting


When you create a new script you will be given the option to use Groovy, as well as the option to choose from various Groovy templates.

## Add-ons


It's recommended to depend on this add-on when creating Groovy add-ons, to reduce the overall size of the add-ons and memory used at runtime.

## Engine Name

The engine is named `Groovy Scripting Engine`, which should be used when manually/programmatically configuring ZAP.
