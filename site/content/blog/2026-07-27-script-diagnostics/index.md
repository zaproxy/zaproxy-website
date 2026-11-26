---
title: "Script Diagnostics for the Automation Framework"
summary: >
  Automation Framework script runs can leave durable diagnostics in the ZAP session
  database and Traditional Reports - failures, chain attribution, optional stdout,
  and screenshots. This post also covers AF script chaining and using diagnostics
  from Docker.
type: post
tags:
  - blog
  - scripts
  - automation
  - reports
  - zest
  - docker
date: "2026-07-27"
authors:
  - thorin
---

If you run Zest scripts or [script chains](#script-chaining) from the Automation Framework - especially in CI - a failure used to mean hunting through logs: which script in the chain broke, which step, what Selenium said, and what your script may have printed along the way.

That changed over the past few months. Script diagnostics are now persisted in the ZAP session database and can be included in any of the Traditional Reports. We teased the diagnostics work in the [May](/blog/2026-06-02-zap-updates-may-2026/) and [June](/blog/2026-07-01-zap-updates-june-2026/) updates; this post is the how-to.

Script chaining itself shipped earlier and only appeared as a short note in the [March updates](/blog/2026-04-03-zap-updates-march-2026/) changelog - so this post also covers how chains work, because diagnostics are much more useful once you run multi-script workflows.

> [!NOTE]
> This is **not** the same as [Authentication Report](/docs/desktop/addons/authentication-helper/auth-report-json/) diagnostics from the Authentication Helper. Auth diagnostics are for Browser Based / Client Script authentication (so far). Script diagnostics cover Automation Framework script jobs and script errors, and they can show up in Traditional Reports.

## Why It Matters

- **Durable trail** - diagnostics live in the session DB and travel with your report exports, not only in ephemeral progress logs.
- **Chain attribution** - each chain member is recorded in order, with failure steps tied to the script that failed.
- **Actionable Zest failures** - client step failures can include the statement index, element type, and a compact error message.
- **Optional depth** - enable stdout (`ZestActionPrint` and similar) and failure screenshots only when you want them in the report.
- **`failureLevel`** - on the Script job run action allows you to report script failures as `info`, `warning`, or `error` (default), so best-effort scripts need not fail the whole plan.

## What Gets Recorded

Diagnostics are collected when:

- An Automation Framework **Script** job runs a script or chain (`action: run`)
- Another Automation Framework job hits a script error that the Scripts add-on handles (for example a passive or proxy script failing while a spider or active scan job is running)

They are **not** recorded for manual runs from the Script Console, and there is no dedicated in-ZAP diagnostics viewer - you read them from reports.

Each recorded run has an outcome (`SUCCESS` / `FAILED`), a summary, and ordered scripts with steps. Steps can carry `ERROR` outputs; with the optional report sections enabled they can also include `OUTPUT` lines, and a Base64-encoded screenshot.

The richest detail today comes from Zest (failure screenshots and print output with chain provenance). The collection contract is engine-agnostic, so other script engines can plug in later.

## Script Chaining

The Script job `run` action can execute one or more **Zest standalone** scripts in sequence via the `chain` parameter. That is useful when a flow is easier to maintain as separate scripts (for example access → navigate → perform action) than as one large recording.

Requirements in brief:

- Zest add-on installed
- Every chain member is a Zest standalone script, already added (or added earlier in the same plan)
- The first script must launch the browser (`ZestClientLaunch`); later scripts reuse that window (extra launches are disabled)
- Window handles for the main window should match across the chain
- On success, browsers opened by the chain are closed automatically
- On failure, the job stops at the failing script; later members do not run. Browser windows may stay open until ZAP shuts down

You can pass optional `context` and `user` so authentication is applied when the browser actually launches. Use `failureLevel` (`info` / `warning` / `error`) to control whether a chain failure fails the plan.

Full details: [Script Chaining](/docs/desktop/addons/script-console/automation/#script-chaining) in the Script Console Automation help. Desktop plans can also configure chains in the Script job dialog (Use Script Chain / Chains tab).

## How to Use It

1. Update the **Script Console**, **Report Generation**, and **Zest** add-ons (Script Console also depends on the **Database** add-on for persistence).
2. Run your scripts via an Automation Framework plan that includes a Script job with `action: run`.
3. Add a Report job using a Traditional template, and enable the script diagnostics sections you need.

Three optional report sections:

| Section ID | What it adds |
|---|---|
| `scriptdiagnostics` | Parent section - runs, scripts, steps, and `ERROR` outputs |
| `scriptdiagnosticsoutput` | `OUTPUT` lines (for example Zest print) |
| `scriptdiagnosticsscreenshots` | Base64 PNG on failure steps (not available on the Markdown template) |

> [!TIP]
> Enable `scriptdiagnostics` whenever you want the other two. The output and screenshot sections only add data on top of the parent section.

A minimal plan fragment that adds three scripts, runs them as a chain, and writes a Traditional JSON+ report with all diagnostics sections:

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
- type: report
  parameters:
    template: traditional-json-plus
    reportDir: /zap/wrk
    reportFile: script-diags-report
    sections:
      - scriptdiagnostics
      - scriptdiagnosticsoutput
      - scriptdiagnosticsscreenshots
```

For a single script, use `name` instead of `chain`. Paths in `source` can be relative to the plan. Full parameter details are in the [Script Console Automation](/docs/desktop/addons/script-console/automation/) help.

Field-level JSON/XML shape and per-template availability are documented under [Script Diagnostics in Traditional Reports](/docs/desktop/addons/report-generation/report-traditional-script-diagnostics/).

<!-- TODO: add HTML report / failure screenshot images under images/ and set frontmatter `images` for social preview -->

## From Docker

Diagnostics are session-backed and report-driven, so they fit Docker and CI the same way other AF plans do: mount a work directory, run the plan, collect the report artifact.

Put the plan and Zest scripts in the current directory, then:

```
docker run -v $(pwd):/zap/wrk/:rw \
  ghcr.io/zaproxy/zaproxy:weekly \
  zap.sh -cmd -autorun /zap/wrk/script-diags-plan.yaml
```

The weekly image is the safest choice for this feature set (current Scripts, Reports, Zest, and Database). On `stable`, update or install those add-ons before `-autorun` if your image is older than the releases that added diagnostics.

Notes for container runs:

- Map a host directory to `/zap/wrk` so the plan, scripts, and report file are available outside the container.
- Set `reportDir` to `/zap/wrk` (as in the example above) so the report lands on the host for CI artifacts.
- Prefer Traditional JSON or XML when you want to parse `scriptDiagnostics` in a pipeline; use HTML/PDF when you want a human-readable attachment.
- Zest client scripts still need a browser. Launch headless browsers from the scripts themselves (for example Firefox headless in the first `ZestClientLaunch`). Failure screenshots only appear when a client step fails and the screenshot section is enabled.
- [`action-af`](https://github.com/zaproxy/action-af) can run the same plan from GitHub Actions with the usual volume / artifact conventions.

After the run, open `script-diags-report.json` (or your chosen name) and look for the `scriptDiagnostics` object - or fail the build when `outcome` is `FAILED` and surface the summary / step `ERROR` messages in your CI log.

## Reading a Failure

Suppose a three-script chain fails on a click in the second script. With the parent diagnostics section enabled, Traditional JSON reports include something like:

```json
"scriptDiagnostics": {
  "runs": [
    {
      "created": "2026-05-13T12:19:50.536360Z",
      "outcome": "FAILED",
      "summary": "Job: script Chain order: access-script -> navigate-script failed.",
      "scripts": [
        {
          "order": 1,
          "scriptName": "access-script",
          "scriptType": "standalone",
          "steps": []
        },
        {
          "order": 2,
          "scriptName": "navigate-script",
          "scriptType": "standalone",
          "steps": [
            {
              "sourceStepIndex": 13,
              "line": "ZestClientElementClick",
              "outputs": [
                {
                  "kind": "ERROR",
                  "message": "element click intercepted: Element is not clickable..."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

With `scriptdiagnosticsoutput` enabled, earlier print steps can appear as `OUTPUT` entries (attributed to the script that printed them). With `scriptdiagnosticsscreenshots` enabled, a failing client step can also carry a `screenshot` field - useful when the log alone does not show what the browser was displaying.

HTML and PDF Traditional templates render the same data in a readable layout; use JSON or XML when you want to parse diagnostics in CI.

## Auth Diagnostics vs Script Diagnostics

| | Auth Diagnostics | Script Diagnostics |
|---|---|---|
| **Add-on / report** | Authentication Helper / Authentication Report | Script Console (+ Zest) / Traditional Reports |
| **When** | Browser Based or Client Script authentication | AF Script run jobs and AF script errors |
| **How you opt-in** | Enable diagnostics on the auth method | Always recorded on AF paths; enable report sections to include them |

Use both when an authenticated AF plan runs scripts - they answer different questions.

## What's Next

We may add richer failure context for web elements (similar to what auth diagnostics already capture for interactable state). Broader stdout capture for non-Zest engines is also on the radar. Feedback welcome:

- [ZAP User Group](https://groups.google.com/group/zaproxy-users)
- [zaproxy issues](https://github.com/zaproxy/zaproxy/issues) for bugs and enhancement requests

## Links

- [Script Diagnostics in Traditional Reports](/docs/desktop/addons/report-generation/report-traditional-script-diagnostics/)
- [Script Console Automation](/docs/desktop/addons/script-console/automation/) (including [script chaining](/docs/desktop/addons/script-console/automation/#script-chaining) and `failureLevel`)
- [Authentication Report](/docs/desktop/addons/authentication-helper/auth-report-json/) - the auth-focused counterpart
- [Docker](/docs/docker/) / [Diagnosing Problems](/docs/docker/diagnosing-problems/)
- [action-af](https://github.com/zaproxy/action-af)
- [ZAP Updates - March 2026](/blog/2026-04-03-zap-updates-march-2026/) (script chaining)
- [ZAP Updates - May 2026](/blog/2026-06-02-zap-updates-may-2026/)
- [ZAP Updates - June 2026](/blog/2026-07-01-zap-updates-june-2026/)
