---
# This page was generated from the add-on.
title: Access Control Context Options
type: userguide
weight: 2
---

# Access Control Context Options


The Access Control Context options are present as a panel for each Context when opening the Session Properties
dialog. This panel allows ZAP users to define the Access Rules for each User of each Context.


As mentioned on the [concepts](/docs/desktop/addons/access-control-testing/) page, ZAP is making use of the tree-based
structure of URLs. So, when configuring the access rules, only 1 rule needs to be set explicitly for an entire
subtree, while for the other nodes rules are inferred. Three possible values can be set for any node in Context for
each User:

* **Allowed** - The rule for the node is *explicitly* set as Allowed
* **Denied** - The rule for the node is *explicitly* set as Denied
* **Inherited** - The rule for the node is inferred based on the closest parent with an explicitly set rule

By default, the rules for any node has an *Inherited* value and the root node has a value of *Unknown* .
Thus, for any node without a parent with an explicitly configured rule, the inferred rule will default to
*Unknown*.

## See also

|   |                                                                                 |                                                    |
|---|---------------------------------------------------------------------------------|----------------------------------------------------|
|   | [Access Control Testing concepts](/docs/desktop/addons/access-control-testing/) | for a short introduction to Access Control Testing |
