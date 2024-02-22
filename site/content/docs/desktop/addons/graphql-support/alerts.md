---
# This page was generated from the add-on.
title: GraphQL Alerts
type: userguide
weight: 4
---

# GraphQL Alerts {#id-50007}

The following alerts are raised by the GraphQL add-on.

|         Alert Reference          |                   Name                   |                                                                                             Description                                                                                              |                                                                            Latest Code                                                                            |
|----------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [50007-1](/docs/alerts/50007-1/) | GraphQL Endpoint Supports Introspection  | This alert is raised when the spider discovers a GraphQL endpoint that supports introspection.                                                                                                       | [GraphQlParser.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/graphql/src/main/java/org/zaproxy/addon/graphql/GraphQlParser.java)               |
| [50007-2](/docs/alerts/50007-2/) | GraphQL Server Implementation Identified | This alert is raised when the GraphQL implementation used by the server is identified. It utilises fingerprinting techniques adapted from the tool [graphw00f](https://github.com/dolevf/graphw00f). | [GraphQlFingerprinter.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/graphql/src/main/java/org/zaproxy/addon/graphql/GraphQlFingerprinter.java) |


Alert ID: [50007](/docs/alerts/50007/).

## See also

|   |                                                                        |                                                         |
|---|------------------------------------------------------------------------|---------------------------------------------------------|
|   | [GraphQL](/docs/desktop/addons/graphql-support/)                       | for an overview of the GraphQL add-on.                  |
|   | [GraphQL Options](/docs/desktop/addons/graphql-support/options/)       | for information about the optional parameters.          |
|   | [GraphQL Automation](/docs/desktop/addons/graphql-support/automation/) | for information about the automation framework support. |
|   | [GraphQL Variant](/docs/desktop/addons/graphql-support/variant/)       | for information about the GraphQL variant.              |
