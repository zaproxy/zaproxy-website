---
# This page was generated from the add-on.
title: Replacer Automation Framework Support
type: userguide
weight: 1
---

# Replacer Automation Framework Support

This add-on supports the Automation Framework.

## Job: replacer

The replacer job allows you to add replacer rules.


It is covered in the video: [ZAP Chat 09 Automation Framework Part 3 - Requests](https://youtu.be/4phnMy9iCPY).

```
  - type: "replacer"                   # Replacer rules
    parameters:
      deleteAllRules:                  # Boolean, if true then will delete all existing replacer rules, default false
    rules:                             # A list of replacer rules
      - description:                   # String, the name of the rule
        url:                           # String, a regex which will be used to match URLs, if empty then it will match all
        matchType:                     # String, one of req_header, req_header_str, req_body_str, resp_header, resp_header_str, resp_body_str
        matchString:                   # String, will be used to identify what should be replaced
        matchRegex:                    # Boolean, if set then the matchString will be treated as a regex, default false
        replacementString:             # String, the new string that will replace the specified selection
        tokenProcessing:               # Boolean, when enabled the replacementString may contain a single token 
        initiators:                    # A list of integers representing the initiators (see the help)
```

For more details of the parameters see the main [replacer](/docs/desktop/addons/replacer/) page.
