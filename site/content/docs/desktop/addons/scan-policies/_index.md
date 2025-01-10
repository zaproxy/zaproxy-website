---
# This page was generated from the add-on.
title: Scan Policies
type: userguide
weight: 1
cascade:
  addon:
    id: scanpolicies
    version: 0.2.0
---

# Scan Policies

This add-on provides a set of Scan Policies tuned for different purposes.


These policies are initialised as detailed in the relevant pages, but you can tune them as required.

* [Default Policy](/docs/desktop/addons/scan-policies/policy-default/) : the default policy, all installed active rules enabled
* [Developer CICD Policy](/docs/desktop/addons/scan-policies/policy-dev-cicd/) : a policy intended for CI/CD use, focused on quick but higher risk issues
* [Developer Standard Policy](/docs/desktop/addons/scan-policies/policy-dev-std/) : a policy directed at developers, meant to perform fairly quickly while providing a greater set of results than the CICD policy (intended for use in a dev environment)
* [Developer Full Policy](/docs/desktop/addons/scan-policies/policy-dev-full/) : a developer focused policy, including a superset of the dev standard with a greater variety of potential findings and only minimal environmental/server related rules (intended for use in a dev environment)
* [QA Standard Policy](/docs/desktop/addons/scan-policies/policy-qa-std/) : a quality assurance focused policy meant to perform fairly quickly while providing a greater set of results than developer policies, intended for use in a QA/staging environment
* [QA Full Policy](/docs/desktop/addons/scan-policies/policy-qa-full/) : a more comprehensive quality assurance focused policy, including a superset of the QA standard with a greater variety of potential findings with more environmental/server related rules, intended for use in a QA/Staging environment
* [API Policy](/docs/desktop/addons/scan-policies/policy-api/) : a policy focusing on issues likely to impact APIs and not UI.
