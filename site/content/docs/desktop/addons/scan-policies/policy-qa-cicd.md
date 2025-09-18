---
# This page was generated from the add-on.
title: QA CI/CD Policy
type: userguide
weight: 6
---

# QA CI/CD Policy

A quality assurance focused policy meant to perform fairly quickly while providing a greater set of results than developer policies, intended for use in a CI/CD pipeline for a QA/staging environment.

* Recommended for running in CI/CD
* Intended to run in a QA / Staging environment which is close to production
* A superset of Developer CI/CD but with important env / server rules enabled
* No long running rules
* No rules with high false positives
* No timing attacks
* No informational only rules
* Minimal overlap


For the list of scan rules included see the [Alert Tag: POLICY_QA_CICD](/alerttags/policy_qa_cicd/) page.


Return to [main scan policies page](/docs/desktop/addons/scan-policies/).
