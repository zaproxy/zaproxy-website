---
# This page was generated from the add-on.
title: Globally Excluded URLs
type: userguide
weight: 13
---

# Globally Excluded URLs

Globally Excluded URLs are a set of Regular Expressions
(regex) that ZAP ignores completely throughout the application.
These URLs will not show up in the Proxy, Scanner, or Spider for
ZAP. In addition, the URL regexs will be saved in the global
configuration for ZAP and not inside of the session file. These
URLs will persist between each use of ZAP.

The regex for URLs are configured using the [Global
Exclude URL screen](/docs/desktop/ui/dialogs/options/globalexcludeurl/) in the ZAP Options.

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |
