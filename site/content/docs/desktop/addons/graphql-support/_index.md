---
# This page was generated from the add-on.
title: GraphQL Support
type: userguide
weight: 1
cascade:
  addon:
    id: graphql
    version: 0.31.0
---

# GraphQL Support

This add-on allows you to import GraphQL definitions and send queries generated from them.   

The add-on will automatically detect any GraphQL definitions and spider them as long as they are in scope.   
The spider is supported on ZAP 2.10.0 and later.

## UI

A menu item is added to the Import menu:

* Import a GraphQL schema

### Endpoint URL Format

The Endpoint URL has the following format:  
`scheme://authority/path`  
with all URI components mandatory when importing from file.

### Options Panel

A GraphQL Options Panel is added under Tools -\> Options -\> GraphQL. These options allow you to control the output of the Query Generator.

## API

The following operations are added to the API:

### Views

* optionArgsType
* optionMaxArgsDepth
* optionMaxQueryDepth
* optionOptionalArgsEnabled
* optionQuerySplitType
* optionQueryGenEnabled
* optionRequestMethod

### Actions

* importFile (endurl\*, file\*)
* importUrl (endurl\*, url)
* setOptionArgsType (String\*)
* setOptionMaxArgsDepth (Integer\*)
* setOptionMaxQueryDepth (Integer\*)
* setOptionOptionalArgsEnabled (Boolean\*)
* setOptionQueryGenEnabled (Boolean\*)
* setOptionQuerySplitType (String\*)
* setOptionRequestMethod (String\*)

`endurl` supports the `Endpoint URL` format explained earlier. The definitions will be imported synchronously and any warnings will be returned.

## Command Line

The following Command Line options are added:

* -graphqlfile \<filename\> : Imports a GraphQL definition from a File
* -graphqlurl \<url\> : Imports a GraphQL definition from a URL
* -graphqlendurl \<url\> : Sets the Endpoint URL

The definitions will be imported synchronously and any warnings will be displayed on the command line.

## See also

|   |                                                                        |                                                         |
|---|------------------------------------------------------------------------|---------------------------------------------------------|
|   | [GraphQL Options](/docs/desktop/addons/graphql-support/options/)       | for information about the optional parameters.          |
|   | [GraphQL Variant](/docs/desktop/addons/graphql-support/variant/)       | for information about the GraphQL variant.              |
|   | [GraphQL Automation](/docs/desktop/addons/graphql-support/automation/) | for information about the automation framework support. |
|   | [GraphQL Alerts](/docs/desktop/addons/graphql-support/alerts/)         | for information about alerts raised by the add-on.      |
