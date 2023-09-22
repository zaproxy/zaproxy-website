---
title: "Contribute: Documentation"
type: page
cascade:
  EditableContent: true
  addBreadcrumbs: true
---
Documentation is very important, and while we have tried to make the ZAP documentation as useful as possible we know that it still needs to be improved.

The latest ZAP docs are now all available on this site but the source of those pages does vary.

### Website Pages

The source for the main website pages is under https://github.com/zaproxy/zaproxy-website/tree/master/site/content

Many of the pages (including this one) have an 'Edit on GitHub' link in the bottom left hand corner.

Data for some of the pages is under https://github.com/zaproxy/zaproxy-website/tree/master/site/data - some of this data is maintained manually while some is maintained by automated scripts.

### Desktop User Guide - Core

The source for the core part of the [Desktop User Guide](/docs/desktop/) lives under https://github.com/zaproxy/zap-core-help/tree/main/addOns/help/src/main/javahelp/contents

Note that the online pages are only updated when there is a full ZAP release.

### Desktop User Guide - Add-ons

ZAP has a plugin architecture and much of the functionality is provided by add-ons.

The source of the help for each add-on lives with each add-on, under the `/src/main/javahelp/` directory.

For example:

* The release status active scan rules help is under https://github.com/zaproxy/zap-extensions/tree/main/addOns/ascanrules/src/main/javahelp/org/zaproxy/zap/extension/ascanrules/resources/help/contents
* The HUD help is under https://github.com/zaproxy/zap-hud/tree/main/src/main/javahelp/org/zaproxy/zap/extension/hud/resources/help/contents

You will see that the translations for the add-on help files also live with each add-on. These should not be updated manually as they are maintained via [Crowdin](../translate/). Any changes made directly to the translations in GitHub will be lost when the files are automatically updated.

### API Pages

The manually maintained parts of the [API](/docs/api/) pages is under https://github.com/zaproxy/zap-api-docs/tree/main/source/includes

The majority of the pages are generated - details of how to update the data used for these pages will be added soon.