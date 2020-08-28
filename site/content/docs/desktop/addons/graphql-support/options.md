---
# This page was generated from the add-on.
title: GraphQL Options
type: userguide
weight: 1
---

# GraphQL Options

In this document, a 'Query' may refer to a GraphQL query, subscription or mutation.

## Maximum Query Depth

The maximum depth of a generated query.

## Maximum Arguments Depth

The maximum depth of specified arguments. This is useful when a field has an input object as an argument.

## Specify Optional Arguments

If this option is selected then optional (nullable) arguments will be specified too.

## Specify Arguments

Choose how the field arguments should be added in the generated query,

* Inline
* Using Variables
* Both - each query will be sent twice, once with inline arguments and once with variables

## Generate Query For

A separate query may be generated for either of the following in the provided schema,

* each Leaf, that is, each scalar or enum;
* each field under a root operation type (Query, Mutation or Subscription); or
* each root operation type.

## Request Method

The requests made to the endpoint can be of the following types:

* A POST request with a JSON body (Content-Type: application/json)
* A POST request with a GraphQL query in the body (Content-Type: application/graphql)
* A GET request with the query appended to it in a query string

## See also

|   |                                                  |                                       |
|---|--------------------------------------------------|---------------------------------------|
|   | [GraphQL](/docs/desktop/addons/graphql-support/) | for an overview of the GraphQL add-on |
