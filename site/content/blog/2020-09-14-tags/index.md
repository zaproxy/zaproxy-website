---
title: "ZAP Tags"
description: "Use cases and details on ZAP's Tag functionality and Neonmarker add-on"
summary: "How to give some colours to ZAP's History tab. An introduction to passive scanning tags, its use cases, and the Neonmarker add-on."
images:
- https://www.zaproxy.org/blog/2020-09-14-tags/images/zapbot_tagged.png
type: post
tags:
- blog
- youdontknowzap
date: "2020-09-14"
addSocialPreview: true
authors:
    - thorin
---

## Basics

A bit of functionality that ZAP has had since early days is the ability to apply a tag to a message that passes through the proxy. They allow for quick and simple summaries that highlight key aspects of requests or responses.

![History panel showing tags](./images/history_tags.png)

The tags are defined in and controlled by ZAP's options:

![Options tags panel](./images/options_tags.png)

Each Tag is defined by a regex pattern and is applied via ZAP's [passive scanning functionality](/docs/desktop/start/features/pscan/), for example the Hidden tag looks for form fields that have HTML `type="hidden"`:

![Hidden Tag configuration](./images/tag_hidden.png)

![Contact page hidden tag and source](./images/contact_hidden.png)

Tags can also be used to filter History entries. For example, if you wanted to see only those messages that had Hidden fields:

![History Filter dialog](./images/filter_tags.png)

![Filtered History](./images/filtered_history.png)

## Interpolation

A lesser known feature that was added in [version 2.8.0](/docs/desktop/releases/2.8.0/) is Tag Interpolation. This may sound like an advanced or daunting technology. But really it boils down to allowing the value returned  by a Regex capturing group to be used in the Tag text. For example a user could configure a Tag to identify the ID or name of a product:

![Product Tag configuration](./images/product_tag.png)

This Tag is setup such that the value of the first (and only) `$1` capturing group `([\d]+)`is returned as part of the tag value: `Product-$1`.

![Product Tag example](./images/history_product_tag.png)

This could also be used for things like extracting usernames from responses (attributing logged in user), etc.

## Neonmarker

There is an add-on for ZAP which allows colouring of history items (rows) based on tags. The add-on is called Neonmarker and is available via [ZAP's Marketplace](/addons/).

![Neonmarker online marketplace](./images/neonmarker_online.png)

![ZAP toolbar, marketplace button](./images/zap-screenshot-browse-addons.png)

![Marketplace dialog, Neonmarker](./images/marketplace.png)

For example if you wanted all the messages with `Hidden` fields to be purple:
![Neonmarker example](./images/neonmarker_hidden_tag.png)

## Conclusion

By reading this post you've learned:

- Generally about ZAP's Passive Scan Tag functionality.
- How to configure tags.
- How to use interpolation with tags.
- How to get and use the Neonmarker add-on.
