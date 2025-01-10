---
# This page was generated from the add-on.
title: Scope
type: userguide
weight: 21
---

# Scope


The Scope is the set of URLs you are testing, and is defined by the [Contexts](/docs/desktop/start/features/contexts/)
you have specified.  


By default nothing is in scope.


The Scope potentially changes:

* What you can do, when you are in Protected [mode](/docs/desktop/start/features/modes/)
* What is shown in the [History tab](/docs/desktop/ui/tabs/history/)
* Protected - user can only perform (potentially) dangerous actions on URLs in the Scope
* Standard - as in previous releases, user can do anything
* ATTACK - new nodes that are in Scope are [actively scanned](/docs/desktop/start/features/ascan/) as soon as they are discovered

It is recommended that you define a new [Context](/docs/desktop/start/features/contexts/) for each web application that makes up the system you are testing, and set them in scope as you test each one.

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |
