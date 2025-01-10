---
# This page was generated from the add-on.
title: Options Rule Configuration screen
type: userguide
weight: 15
---

# Options Rule Configuration screen


This screen allows you to configure the behaviour of specific active and passive scan rules.


Select any of the listed rows to see details of the specific configuration and to change the associated value.
Both individual and all rules can be reset.


The built-in rules include:  


|            Name            | Default |                                                                                                                           Description                                                                                                                            |
|----------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| rules.common.sleep         | 15      | The length of time in seconds used for timing attacks.                                                                                                                                                                                                           |
| rules.cookie.ignorelist    |         | A comma separated list of cookie names. Cookies included in this list will be ignored when scanning for cookie related issues.                                                                                                                                   |
| rules.csrf.ignorelist      |         | A comma separated list of identifiers. Any FORMs with a name or ID that matches one of these identifiers will be ignored when scanning for missing Anti-CSRF tokens. Only use this feature to ignore FORMs that you know are safe, for example search forms.     |
| rules.csrf.ignore.attname  |         | The name of an HTML attribute that can be used to indicate that a form does not need an anti-CSRF Token. If `rules.csrf.ignore.attvalue` is specified then this must also match the attribute's value. If found any related alerts will be raised at INFO level. |
| rules.csrf.ignore.attvalue |         | The value of an HTML attribute named by `rules.csrf.ignore.attname` that can be used to indicate that a form does not need an anti-CSRF Token. If found any related alerts will be raised at INFO level.                                                         |
| rules.domains.trusted      |         | A comma separated list of URL regex patterns. Any URLs that match the patterns will be considered trusted domains and the issues ignored.                                                                                                                        |

## See also

|   |                                                      |                                                 |
|---|------------------------------------------------------|-------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|   | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
