---
title: "New ZAP Networking Layer"
summary: "The ZAP Weekly and Live releases have an all new networking layer."
images:
- https://www.zaproxy.org/blog/2022-02-10-new-zap-networking-layer/images/zap-networking.png
type: post
tags:
- blog
- networking
date: "2022-02-10"
authors: 
    - simon
---

## All New Networking

The latest Weekly and Live ZAP releases (generated today, Feb 10th) are now using a completely different networking stack.

Previously, ZAP used code written for Paros Proxy on top of an old and out of date version of the Apache Commons HttpClient library.

The networking code has now been moved out of the core and into a new [network add-on](/docs/desktop/addons/network/). All client-side comms (e.g. browser to ZAP) use the [Netty](https://netty.io/) library while server-side comms still use HttpClient.

Not surprisingly, the ZAP code base makes very heavy use of networking and so this has been a very significant change.

## What will you see that is different?

Hopefully not much!

ZAP should work in the same way as before. All of your previous networking related configurations should be maintained.

There are however a few changes you may notice:

* The Options / Local Proxies screen has been replaced by an Options / Network / Local Servers/Proxies screen.
* The Options / Dynamic SSL Certificates screen has been replaced by an Options / Network / Server Certificates screen.
* The Options / Network / Local Servers/Proxies screen has a new tab - “Pass-through” - this allows you to configure the authorities (domain/address and port) that will pass-through ZAP, thus sending the data without being decrypted/encrypted. This is useful when a client has certificate pinning for certain hosts or the domain/data is irrelevant to the target being tested.

That should be all the differences that you see.

## Why Replace the Networking?

Why spent a very significant amount of time and effort replacing the whole networking layer?

Because there's more to come :)

Now we are using a modern maintained networking layer we can build on top of it and support new protocols like HTTP/2 and HTTP/3.

We will also be able to handle some of the edge cases that we previously could not support including manipulating the Host header.

We expect the new implementation to consume less resources than the previous stack and this will hopefully make requests quicker as well.

Last, but definitely not least, as the networking code is in an add-on we will be able to update it whenever we need to rather than having to wait until the next full release.

There is currently no ETA for these changes but they are a priority for us.

## Feedback Please

In the meantime please [download](/download/) the Weekly or Live releases, give them a go and let us know if you have any problems or spot any differences in the network handling.

