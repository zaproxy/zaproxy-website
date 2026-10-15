---
title: "Developing ZAP in the LLM Age"
summary: >
  LLMs have made it much easier to generate code, which changes the balance of how open source
  projects like ZAP are developed. We are not closing the door on new contributors - ZAP has
  always been a community project - but reviewing is now the bottleneck, so every PR needs to
  be as easy to review as possible.
type: post
images:
- https://www.zaproxy.org/blog/2026-10-13-developing-zap-in-the-llm-age/images/blog-developing-zap-llm.png
tags:
- blog
- llm
- ai
- hacking
date: "2026-10-13"
authors:
- simon
---

## Why we're writing this

Large Language Models (LLMs) have changed how a lot of software gets written, and ZAP is no exception.
Many of us on the [ZAP Core Team](/docs/team) now use LLM assistants day to day, and increasingly
we're seeing them used in contributions from across the community.

That's fine - but it means we need to be explicit about how we're changing the way we develop
ZAP, so that everyone knows what to expect.

![ZAPbot and their laptop](images/blog-developing-zap-llm.png)

## Some projects are closing their doors

You may have seen reports of well-known open source projects
[restricting or blocking](https://tldraw.dev/blog/stay-away-from-my-trash) contributions from new
contributors, largely because maintainers are being flooded with AI-generated pull requests
that take more effort to review than they would have taken to write in the first place.

We do not want to do that.

ZAP has always been a community project, and it always will be. Anyone can contribute -
whether that's your first ever pull request or your five hundredth, whether you wrote every
line by hand or with a lot of help from an LLM. We're not going to start gating contributions
on who you are, how much experience you have, or what tools you used.

## But the balance has changed

What has changed is the balance of effort.

It is now much easier for anyone to generate code. What has not got any easier is reviewing
it. Reviewing is where the real cost is now: understanding what a change is supposed to do,
working out whether it actually does that, checking it fits with the rest of the codebase, and
being confident there isn't something subtle broken somewhere.

A reviewer can't outsource that judgment. If a pull request arrives that's hard to follow,
contains code the submitter can't explain, or has no tests, then reviewing it can easily take
longer than writing the original change would have - and there are only so many review hours
available.

To be completely clear: **this applies to contributions from anyone, including the ZAP Core
Team.** We're holding ourselves to exactly the same standards we're asking everyone else to
meet. Several of us (including me) have already had PRs sent back - or reworked before submission - 
for being too big, too thin on tests, or too hard to follow.

## The PR submitter is responsible for their code

The most important rule is this: **the pull request submitter is responsible for the code they
propose.**

That means you must:

- **Understand it.** If you can't explain what the change does and why, line by line if
  needed, then you aren't ready to submit it. "The LLM wrote it" is not an explanation.
- **Believe it to be correct.** You should be confident the change does what you intended,
  handles the important edge cases, and doesn't break anything else - not just that it
  compiles and the happy path works once on your machine.

Using an LLM to help is completely fine. Hiding behind one is not. The person whose name is on
the PR is the person who owns it.

## Make your PRs as easy to review as possible

The easier your PR is to review, the quicker we will get to it. That's not a reward, it's just
arithmetic - reviewer time is the scarce resource, so spend less of it per change. Concretely:

- **Smaller PRs.** Prefer several focused PRs over one big one. A change that touches one
  concern and is a few hundred lines is dramatically easier to review than a multi-thousand
  line change that mixes several features or a feature with a refactor. If a PR can plausibly
  be split, split it.
- **Full unit tests, where possible.** Tests are the fastest way for a reviewer to see what
  your code is supposed to do and to gain confidence that it does. Don't just add a test that
  the code runs - cover the edge cases and the failure paths. If you genuinely believe part of
  the change can't be unit tested, say so in the PR description and explain why.
- **Ideally end to end tests too.** Unit tests prove the pieces work; end to end tests prove
  the feature works in a real ZAP. For anything that can be exercised that way, include one.
- **Preferably as Automation Framework plans.** The best end to end tests for ZAP are
  [Automation Framework](/docs/automate/automation-framework/) plans that we can run
  with little to no preparation - no manual setup, no special environment, no undocumented
  prerequisites. A plan we can drop in and run tells a reviewer far more, far faster, than a
  description of how you tested it manually.

A good, concise PR description also helps: what's the problem, what's your approach, how did you test
it, and anything you know is incomplete or deliberately out of scope.

## An LLM will review your PR before we do

To be upfront about part of our process: for any non-trivial change, the first thing we will
do is submit it to an LLM for review.

This is not a replacement for human review - a reviewer still has to understand the change,
judge whether it belongs, and be confident it's correct. What the LLM pass does is catch the
obvious problems early - missing edge cases, sloppy error handling, tests that don't really
test anything - so that when a human does look at the PR, their time goes on the things that
actually need judgment.

Which suggests a tip that we'd encourage all contributors to follow: **before you submit, get
a second LLM to review your changes - one you didn't use to write them.** A fresh model, looking
at your code for the first time, will often spot things the one that helped you write it
missed, in much the same way that a fresh pair of human eyes does. If your second reviewer
finds problems, fix them before opening the PR - fixing them first means fewer rounds of 
"please fix this basic thing" comments.

## Making our integration tests easier to write

One thing we're doing to make the end to end tests described above easier is reworking how our
integration tests are built.

We already run a set of [Integration Tests](https://github.com/zaproxy/zaproxy/tree/main/docker/integration_tests)
every night. Many of them depend on the [Dev add-on](/docs/desktop/addons/dev-add-on/), which
starts a simple test web service inside ZAP with a very basic templating engine that we can
extend with whatever functionality we need. Because the add-on runs inside ZAP, there's no
extra software to install, and we can fake any endpoints we need - which has been invaluable
for testing things like handling Single Sign On.

Up to now all of these test pages were written by hand, but it turns out LLMs are very good at
generating exactly this kind of simple test page - a task where LLM assistance really pays off.

We're restructuring the test service to make it much more pluggable: we expect the number of
test cases to grow quickly, and it makes more sense for test pages to belong to the add-ons
that implement the functionality they are testing. Once that's in place, if you're adding a
feature to an add-on you'll be able to add the test pages for it right alongside the code,
which should make supplying end to end tests with your PR much more straightforward.

## What this means going forward

Nothing about how ZAP works is changing - we're still a community project and we still want
your contributions, first timers included. What's changing is where the effort goes. Less of
it in typing code, more of it in understanding, testing, and reviewing it.

So before you open your next PR, ask yourself: *would I want to review this?* If the answer is
no, it's probably not ready yet - split it, test it, or write it up until it is.

We know this is a higher bar than many projects have asked for in the past, but
it's the bar that keeps the project healthy when code is cheap and review isn't. If you're not
sure whether your change is ready, ask first - on the [ZAP Developer Group](https://groups.google.com/group/zaproxy-develop)
or in the relevant issue - and we'll happily give you a steer before you spend time on it.

And yes, I did use an LLM to help write this blog post, but it was carefully prompted and checked
by me, so any mistakes or inaccuracies are mine. :grin:
