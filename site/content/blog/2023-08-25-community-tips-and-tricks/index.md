---
title: "Community - Tips and Tricks"
summary: >
  News about a community area to contribute ZAP usage tips and tricks.
images:
- https://www.zaproxy.org/blog/2023-08-25-community-tips-and-tricks/images/zapbot.TandT.gif
addSocialPreview: true
type: post
tags:
- blog
- community
- guide
- hacking
- youdontknowzap
date: "2023-08-25"
authors:
    - thorin
---

![](images/zapbot.TandT.gif)

# Community - Tips and Tricks

We've established a [community area](https://github.com/zaproxy/community-scripts/tree/main/other/tips) to publish people's Tips and Tricks for using ZAP and its add-ons. Please feel free to open PRs with your best ideas.

## Inspiration

Inspired by [burp-match-replace](https://github.com/daffainfo/match-replace-burp) and a few related tweets, I created the first bit of content: [Match and Replace ZAP](https://github.com/zaproxy/community-scripts/tree/main/other/tips/replacer/match-and-replace).

## Initial Content

That first contribution covers a bunch of things that can be done with ZAP's [Replacer](https://www.zaproxy.org/docs/desktop/addons/replacer/) add-on, including but not limited to:
- Finding hidden buttons, forms, and other UI elements
- Changing false to true
- Bypassing WAFs (by adding various headers)
- Finding IDOR or XSS
- Finding various CVEs

The entries include descriptions, screenshots, and `standalone` JavaScript snippets which will populate the related Replacer rules (in a disabled state).
