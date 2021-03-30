---
# This page was generated from the add-on.
title: GraphQL Support Script
type: userguide
weight: 2
---

# GraphQL Support Script

The GraphQL Support script is responsible for two things:

1. Correctly representing the nodes for a GraphQL request in the sites tree (since ZAP 2.10.0).
2. Adding GraphQL support for Active Scan Input Vectors.

The following sections will elaborate a little on each of these functionalities.

## Sites Tree Representation

Each unique GraphQL request proxied through ZAP is represented in the sites tree. Requests are placed under a common node if they have the same operations. Two queries that have the same fields will be represented by the same node. The only exception is when a query is sent with inline arguments and also using variables. In this case, a prefix of either '0' or '1' is added to distinguish between them respectively.   
For example, the following figure illustrates how two requests may be represented in the sites tree.   
![](/docs/desktop/addons/graphql-support/images/sitesTreeExample.png)

## Active Scan Input Vectors

If Active Scan Script Input Vectors are enabled, values are injected for inline arguments in all queries proxied through ZAP. If a query uses variables, then variables are replaced inline and variable definitions are deleted.   
Note that the built-in JSON Input Vector handler also works when a request is sent as JSON.

## See also

|   |                                                                        |                                                         |
|---|------------------------------------------------------------------------|---------------------------------------------------------|
|   | [GraphQL](/docs/desktop/addons/graphql-support/)                       | for an overview of the GraphQL add-on.                  |
|   | [GraphQL Options](/docs/desktop/addons/graphql-support/options/)       | for information about the optional parameters.          |
|   | [GraphQL Automation](/docs/desktop/addons/graphql-support/automation/) | for information about the automation framework support. |
