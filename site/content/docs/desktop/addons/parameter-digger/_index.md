---
# This page was generated from the add-on.
title: Parameter Digger
type: userguide
weight: 1
cascade:
  addon:
    id: paramdigger
    version: 0.3.0
---

# Parameter Digger

The Param Digger is a tool that can be used for parameter discovery. It identifies hidden, unlinked, and
"obscure" parameters that can be useful for increasing the attack surface, thus easing the process of
finding vulnerabilities. It uses a given URL as a seed and performes brute force guessing attacks to
identify parameters. It's primarily based on [James Kettle](https://twitter.com/albinowax)'s
research and implementation:
[Practical Web Cache Poisoning](https://portswigger.net/research/practical-web-cache-poisoning)
and [Web Cache Entanglement](https://portswigger.net/research/web-cache-entanglement).

The Param Digger can be configured and started using the [Param Digger dialog](/docs/desktop/addons/parameter-digger/dialog/).

It provides:

## Top Level Menu

A menu item under the top level 'Tools' menu.

## Status Panel

A basic status panel.

## ZAP API Component

An API component that adds an action endpoint.

## Also see:

* [The Param Digger Add-on GSOC 2022](/blog/2022-08-22-the-param-digger-addon/).
* Latest code: [paramdigger](https://github.com/zaproxy/zap-extensions/tree/main/addOns/paramdigger).
