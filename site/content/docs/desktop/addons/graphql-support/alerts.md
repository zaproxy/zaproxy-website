---
# This page was generated from the add-on.
title: GraphQL Alerts
type: userguide
weight: 4
---

# GraphQL Alerts {#id-50007}

The following alerts are raised by the GraphQL add-on.

|         Alert Reference          |                   Name                   |                                                                                                                                                                         Description                                                                                                                                                                          |                                                                            Latest Code                                                                            |
|----------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [50007-1](/docs/alerts/50007-1/) | GraphQL Endpoint Supports Introspection  | This alert is raised when the spider discovers a GraphQL endpoint that supports introspection.                                                                                                                                                                                                                                                               | [GraphQlParser.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/graphql/src/main/java/org/zaproxy/addon/graphql/GraphQlParser.java)               |
| [50007-2](/docs/alerts/50007-2/) | GraphQL Server Implementation Identified | This alert is raised when the GraphQL implementation used by the server is identified. It utilises fingerprinting techniques adapted from the tool [graphw00f](https://github.com/dolevf/graphw00f). **Note:** If the Tech Detection (Wappalyzer) add-on is installed the fingerprinter will also add identified GraphQL Engines to the Technology tab/data. | [GraphQlFingerprinter.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/graphql/src/main/java/org/zaproxy/addon/graphql/GraphQlFingerprinter.java) |
| [50007-3](/docs/alerts/50007-3/) | GraphQL Circular References in Schema    | This alert is raised when cycles are found in the object types in the imported GraphQL schema. A new alert is raised for each unique cycle. The alert contains information about the cycle and a message with an example query. No requests are actually sent.                                                                                               | [GraphQlCycleDetector.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/graphql/src/main/java/org/zaproxy/addon/graphql/GraphQlCycleDetector.java) |


Alert ID: [50007](/docs/alerts/50007/).

## Supported Engines {#engines}

* Absinthe - https://github.com/absinthe-graphql/absinthe
* Agoo - https://github.com/ohler55/agoo
* Apollo - https://github.com/apollographql/apollo-server
* Ariadne - https://github.com/mirumee/ariadne
* AWS AppSync - https://aws.amazon.com/appsync
* caliban - https://github.com/ghostdogpr/caliban
* Dgraph - https://github.com/dgraph-io/dgraph
* Diana.jl - https://github.com/neomatrixcode/Diana.jl
* Directus - https://github.com/directus/directus
* gqlgen - https://github.com/99designs/gqlgen
* Graphene - https://github.com/graphql-python/graphene
* GraphQL by PoP - https://github.com/leoloso/PoP/tree/master/layers/GraphQLByPoP
* GraphQL.NET - https://github.com/graphql-dotnet/graphql-dotnet
* graphql-flutter - https://github.com/zino-app/graphql-flutter
* graphql-go - https://github.com/graphql-go/graphql
* graphql-java - https://github.com/graphql-java/graphql-java
* graphql-php - https://github.com/webonyx/graphql-php
* graphql-ruby - https://github.com/rmosolgo/graphql-ruby
* GraphQL Yoga - https://github.com/dotansimha/graphql-yoga
* Hasura - https://github.com/hasura/graphql-engine
* Hot Chocolate - https://chillicream.com/docs/hotchocolate/v13
* HyperGraphQL - https://github.com/hypergraphql/hypergraphql
* Inigo - https://inigo.io
* jaal - https://github.com/appointy/jaal
* Juniper - https://github.com/graphql-rust/juniper
* lacinia - https://github.com/walmartlabs/lacinia
* Lighthouse - https://github.com/nuwave/lighthouse
* mercurius - https://github.com/mercurius-js/mercurius
* morpheus-graphql - https://github.com/morpheusgraphql/morpheus-graphql
* pg_graphql - https://supabase.github.io/pg_graphql
* Sangria - https://github.com/sangria-graphql/sangria
* Strawberry - https://github.com/strawberry-graphql/strawberry
* tailcall - https://tailcall.run
* tartiflette - https://github.com/tartiflette/tartiflette
* WPGraphQL WordPress Plugin - https://github.com/wp-graphql/wp-graphql

## See also

|   |                                                                        |                                                         |
|---|------------------------------------------------------------------------|---------------------------------------------------------|
|   | [GraphQL](/docs/desktop/addons/graphql-support/)                       | for an overview of the GraphQL add-on.                  |
|   | [GraphQL Options](/docs/desktop/addons/graphql-support/options/)       | for information about the optional parameters.          |
|   | [GraphQL Automation](/docs/desktop/addons/graphql-support/automation/) | for information about the automation framework support. |
|   | [GraphQL Variant](/docs/desktop/addons/graphql-support/variant/)       | for information about the GraphQL variant.              |
