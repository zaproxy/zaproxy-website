---
title: "How do you configure ZAP to test an application on localhost?"
type: faq
category: Networking
weight: 4
---

ZAP has no problems scanning applications running on localhost, however there
are a couple of things you need to be aware of.

By default ZAP listens on port 8080. If your app also listens on 8080 then
you'll need to change one of them to listen on a different port - it's probably
easier to change ZAP using the [Options Local
Proxies](/docs/desktop/ui/dialogs/options/localproxy/) screen, remember to change your
browser's proxy settings as well: [Configuring Proxies](/docs/desktop/start/proxies/).

You also need to check that you have not configured your browser to ignore
your configured proxy (ZAP) for localhost.
