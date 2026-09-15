---
title: "Script Chaining for Business Flows"
summary: >
  Spiders crawl sites; they do not understand your business flows. Break Zest
  recordings into reusable scripts and run them as an Automation Framework chain -
  one shared browser session, easier maintenance when the UI changes.
type: post
tags:
  - blog
  - scripts
  - automation
  - zest
date: "2026-08-05"
authors:
  - thorin
---

The [Client Spider](/blog/2026-07-06-client-spider-now-recommended/) (and the traditional spider before it) is excellent at discovering URLs, forms, and client-side structure. What it does **not** do is understand your product's business flows: checkout, invite a teammate, do a mortgage calculation, complete a multi-step wizard that only appears after a specific sequence of clicks.

Those flows are where real vulnerabilities often hide - and where automated crawling alone may fall short.

## Why Zest Scripts

[Zest](/docs/desktop/addons/zest/) is ZAP's scripting language for recording and replaying web-oriented flows. You can capture:

- **Server-side** behaviour - the HTTP requests and responses that pass through ZAP's proxy
- **Client-side** behaviour - how you actually interact with the page in a browser (clicks, typing, navigation)

That combination is powerful: a recorded flow can drive the same path a user takes, including JavaScript-heavy UIs that never shows up as a simple link for a crawler.

## The Brittleness Problem

Client-side recordings are also brittle. They encode *how the UI looked when you recorded them*. A renamed button, a new modal, a moved menu item - and the script fails mid-flow.

One large monolithic recording makes that pain worse. When something breaks you re-record the whole journey, even if only the middle step changed.

A better approach is to **split the flow into logical scripts**:

1. Access / launch the app (and log in if needed)
2. Navigate to the feature under test
3. Perform the action you care about

When the UI changes in one place, you replace **that** script - not the entire journey.

That raises the next question: how do you run those pieces as one continuous browser session in automation, and how do you tell *which* piece failed?

## Enter Script Chaining

**Script chaining** lets the Automation Framework Script job run several **Zest standalone** scripts in order, reusing a single browser session.

Under the hood ZAP merges the chain into one runnable Zest script for that run: the first script must launch the browser (`ZestClientLaunch`); later scripts reuse that window (extra launch statements are disabled). On success, browsers opened by the chain are closed automatically. On failure, the job stops at the failing script and later members are not run.

That is exactly the model you want for modular business flows: compose small scripts, run them as one chain, maintain them independently.

Chaining shipped in the Script Console and Zest add-ons earlier this year (see the [March updates](/blog/2026-04-03-zap-updates-march-2026/) changelog). The Desktop Script job dialog later gained a **Use Script Chain** option and a Chain tab for ordering scripts without hand-editing YAML.

## Recording Server-Side and Client-Side Scripts

Use the ZAP Desktop [Zest recorder](/docs/desktop/addons/zest/#record-a-new-zest-script-button) (toolbar **Record a new Zest script**, or start/stop recording on an existing standalone Zest script).

### Server-Side

Server-side recording captures HTTP traffic through the proxy. Choose a **prefix** to limit what is recorded, or leave it blank to record everything. This is ideal for API-style steps or flows where the interesting part is the request chain rather than DOM interaction.

### Client-Side

Client-side recording uses the [ZAP browser extension](https://github.com/zaproxy/browser-extension) and [Client Side Integration](/docs/desktop/addons/client-side-integration/) to capture interactions in a real browser. You pick an **initial URL** and browser. You can also right-click a Sites tree node and choose **Record Zest Client Script from Node...**.

Client-side scripts are what usually supply the `ZestClientLaunch` that a chain needs in its first member. You can also record client-side scripts from the browser extension even when ZAP itself is not running, then load them into ZAP later.

For automation guidance on recordings vs spiders vs API import, see [Exploring Your App](/docs/getting-further/automation/exploring-your-app/).

## Running a Chain

Add each script in the plan (or load them into ZAP beforehand), then run them with `chain`:

```yaml
jobs:
- type: script
  parameters:
    action: add
    type: standalone
    name: access-script
    source: access-script.zst
- type: script
  parameters:
    action: add
    type: standalone
    name: navigate-script
    source: navigate-script.zst
- type: script
  parameters:
    action: add
    type: standalone
    name: perform-action-script
    source: perform-action-script.zst
- type: script
  parameters:
    action: run
    type: standalone
    chain:
      - access-script
      - navigate-script
      - perform-action-script
    failureLevel: error
```

Requirements in brief:

- Zest add-on installed
- Every chain member is a Zest standalone script
- First script launches the browser; later scripts reuse it
- Keep the main window handle consistent across the chain

Optional `user` (with users defined in the plan environment) applies authentication when the browser actually launches. Use `failureLevel: info` or `warning` if a failed chain should not fail the whole plan.

From the Desktop: edit the Script job, set action **run** and type **standalone**, enable **Use Script Chain**, and order scripts on the Chain tab.

Full reference: [Script Chaining](/docs/desktop/addons/script-console/automation/#script-chaining) in the Script Console Automation help.

## When Something Breaks

Modular scripts answer *what to re-record*. You still need to know *which* script and *which* step failed - especially in CI, where all you have is a log and a report.

That is what **Script Diagnostics** are for: durable run records in the session database, surfaced in Traditional Reports, with chain attribution so print output and errors map back to the script that produced them. A dedicated post on diagnostics is next.

## Try It

1. Update the **Script Console** and **Zest** add-ons.
2. Record two or three small Zest standalone scripts for a flow you care about (client-side for the launch/navigation pieces).
3. Wire them as a `chain` in an Automation Framework plan - or use **Use Script Chain** in the Desktop job dialog.
4. Run the plan and confirm the browser session carries through the whole flow.

Feedback welcome on the [ZAP User Group](https://groups.google.com/group/zaproxy-users) or [zaproxy issues](https://github.com/zaproxy/zaproxy/issues).

## Links

- [Script Console Automation](/docs/desktop/addons/script-console/automation/) (including [script chaining](/docs/desktop/addons/script-console/automation/#script-chaining))
- [Zest](/docs/desktop/addons/zest/) / [Record a new Zest script](/docs/desktop/addons/zest/#record-a-new-zest-script-button)
- [Exploring Your App](/docs/getting-further/automation/exploring-your-app/)
- [Client Spider now recommended](/blog/2026-07-06-client-spider-now-recommended/)
- [ZAP Updates - March 2026](/blog/2026-04-03-zap-updates-march-2026/)
