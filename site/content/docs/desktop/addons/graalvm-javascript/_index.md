---
# This page was generated from the add-on.
title: GraalVM JavaScript
type: userguide
weight: 1
cascade:
  addon:
    id: graaljs
    version: 0.14.0
---

# GraalVM JavaScript

Allows to use [GraalVM](https://www.graalvm.org/) JavaScript engine for ZAP scripting.

## Engine Name

The engine is named `Graal.js`, which should be used when manually/programmatically configuring ZAP.

## Engine Lifecycle and Script Types

Graal.js engines are automatically closed when the engine and any results produced by it are no longer in use. Scripts that are short lived, such as `standalone` scripts, should therefore not add or install components into ZAP, because those components will become stale when the engine is closed. For components that are expected to live longer, use the `extender` script type instead. Extender scripts are expected to manage their lifecycle explicitly via their `install` and `uninstall` methods.
