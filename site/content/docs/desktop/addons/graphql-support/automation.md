---
# This page was generated from the add-on.
title: GraphQL Automation Framework Support
type: userguide
weight: 3
---

# GraphQL Automation Framework Support

This add-on supports the Automation Framework.

The add-on will import GraphQL schemas using introspection if endpoints are found while spidering. However, specifying an endpoint and (optionally) a schema file or URL is recommended if they are available.

## Job: graphql

The _graphql_ job allows you to import GraphQL schemas locally or from a URL. It supports the following parameters:

```
  - type: graphql                      # GraphQL definition import
    parameters:
      endpoint:                        # String: the endpoint URL, default: null, no schema is imported
      schemaUrl:                       # String: URL pointing to a GraphQL Schema, default: null, import using introspection on endpoint
      schemaFile:                      # String: Local file path of a GraphQL Schema, default: null, import using schemaUrl
      maxQueryDepth:                   # Int: The maximum query generation depth, default: 5
      lenientMaxQueryDepthEnabled:     # Bool: Whether or not Maximum Query Depth is enforced leniently, default: true
      maxAdditionalQueryDepth:         # Int: The maximum additional query generation depth (used if enforced leniently), default: 5
      maxArgsDepth:                    # Int: The maximum arguments generation depth, default: 5
      optionalArgsEnabled:             # Bool: Whether or not Optional Arguments should be specified, default: true
      argsType:                        # Enum [inline, variables, both]: How arguments are specified, default: both
      querySplitType:                  # Enum [leaf, root_field, operation]: The level for which a single query is generated, default: leaf
      requestMethod:                   # Enum [post_json, post_graphql, get]: The request method, default: post_json
```

## See also

|     |                                                                  |                                                |
| --- | ---------------------------------------------------------------- | ---------------------------------------------- |
|     | [GraphQL](/docs/desktop/addons/graphql-support/)                 | for an overview of the GraphQL add-on.         |
|     | [GraphQL Options](/docs/desktop/addons/graphql-support/options/) | for information about the optional parameters. |
|     | [GraphQL Script](/docs/desktop/addons/graphql-support/script/)   | for information about the bundled script.      |
