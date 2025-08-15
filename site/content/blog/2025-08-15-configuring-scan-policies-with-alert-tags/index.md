---
title: "Configuring Scan Policies with Alert Tags"
summary: "A new feature in ZAP's automation framework allows you to configure scan policies using alert tags, making it easier to target specific types of vulnerabilities without manually managing individual scan rules."
images:
- https://www.zaproxy.org/blog/2025-08-15-configuring-scan-policies-with-alert-tags/images/policy-alert-tags.png
type: post
tags:
  - blog
  - update
  - automation
  - scanrules
  - policies
date: "2025-08-15"
authors:
  - akshath
---

ZAP's automation framework is getting a powerful new feature that will make configuring scan policies much more intuitive and maintainable.
In addition to manually specifying individual scan rule IDs, you can now configure policies using alert tags to target specific categories of vulnerabilities.

## What are Alert Tags?

Alert tags are metadata associated with ZAP's scan rules that categorize them by various characteristics.
For example, rules might be tagged with `OWASP_2021_A01`, `PCI_DSS`, or `TEST_TIMING`.

A full list of alert tags on the default scan rules is available [here](/alerttags/).
It's also very easy to add custom alert tags to your own scan rules (e.g. via [scan rule script metadata](/blog/2024-07-17-script-scan-rules/)).

## Scan Policies

The new feature adds an `alertTags` section to policy definitions in both `activeScan` and `activeScan-policy` jobs. This allows you to:

- **Include rules by tags**: Specify patterns to include scan rules that match certain alert tags
- **Exclude rules by tags**: Exclude specific rules from your included set
- **Set strength and threshold**: Configure attack strength and alert threshold for the matched rules, overriding the default policy settings
- **Use regex patterns**: Support for regular expressions in tag matching for flexible rule selection

## Configuration Example

Here's how you can configure a scan policy using alert tags:

```yaml
jobs:
  - type: activeScan-policy
    parameters:
      name: all non-timing OWASP top 10 rules
    policyDefinition:
      defaultStrength: medium
      defaultThreshold: "off" # Disable all rules by default
      alertTags:
        include:
          - "OWASP_.*" # All OWASP Top 10 Rules
        exclude:
          - "TEST_TIMING" # Exclude timing related rules
        strength: high
        threshold: low
      rules:
        # You can still specify individual rules alongside alert tags, and these take precedence
        - id: 40012
          name: "Cross Site Scripting (Reflected)"
          strength: medium
          threshold: "off"
```

## How It Works

When ZAP processes the policy definition:

1. **Default behavior**: All rules start with the default strength and threshold settings
2. **Alert tag processing**: Rules matching the `include` patterns are enabled with the specified alert tag strength and threshold
3. **Exclusion filtering**: Rules matching any `exclude` pattern are removed from the included set
4. **Individual rule overrides**: Explicitly listed rules under the `rules` section take precedence over alert tag settings

This hierarchy ensures that you have full control while benefiting from the convenience of tag-based selection.

## GUI Support

The feature also includes GUI support with a new "Policy Alert Tags" tab in the Active Scan dialogs. This provides:

- Visual interface for managing included and excluded tag patterns
- Dropdown lists populated with available alert tags from active scan rules
- Validation of regular expression patterns
- Easy addition and removal of tag patterns

![A screenshot of the Active Scan Policy Job dialog, with the new "Policy Alert Tags" tab selected](images/policy-alert-tags.png)

## Availability

This feature is currently available in the development branch and will be included in an upcoming automation add-on release. You can try it out by building from the latest source code or using the weekly development builds.

The feature enhances ZAP's automation capabilities while maintaining backward compatibility with existing policy configurations. Your current `rules` sections will continue to work exactly as before.

If you have any thoughts, comments, or questions about this feature, [get in touch](/community/).
