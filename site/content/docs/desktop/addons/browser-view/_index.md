---
# This page was generated from the add-on.
title: Browser View
type: userguide
weight: 1
cascade:
  addon:
    id: browserView
    version: 6.0.0
---

# Browser View

The Browser View add-on adds the option to render HTML responses like a browser.

It can be selected via the Response tab toolbar.

## Requirements

JavaFX is required to use this add-on, it can be obtained, for example, from [Gluon HQ](https://gluonhq.com/products/javafx/).

Once obtained ZAP needs to be configured to use JavaFX, which can be done with the following JVM arguments replacing with the appropriate path to the JavaFX's lib directory:

`
--module-path /path/to/javafx/lib/ --add-modules javafx.swing,javafx.web
`

If ZAP is launched with the default startup scripts the JVM arguments can be specified through the JVM options panel.
