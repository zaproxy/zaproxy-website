---
# This page was generated from the add-on.
title: OpenAPI Support
type: userguide
weight: 1
cascade:
  addon:
    id: openapi
    version: 51.0.0
---

# OpenAPI Support

This add-on allows you to spider and import OpenAPI (Swagger) definitions, versions 1.2, 2.0, 3.0, and 3.1.   
**Note:** Generation of XML content is currently not supported.   

The add-on will automatically detect any OpenAPI definitions and spider them as long as they are in scope.   

It also supports the [Automation Framework](/docs/desktop/addons/openapi-support/automation/).

## UI

A menu item is added to the Import menu:

* Import an OpenAPI definition

The dialogue allows overriding the server URL present in the OpenAPI definition (or specify one if not present) through the Target URL field. The import progress is shown in the progress tab.

### Context

The dialogues also allow selecting a Context, optionally. If a context is selected,

* each imported endpoint is included in the context, unless its URL matches an already existing *Include in Context* regex entry.
* the imported spec is saved to the session database
* data driven nodes are generated for endpoints with path parameters

**Note:** Endpoints excluded by the Context will not be imported.

### User

The dialogues also allow selecting a User, optionally, to do authenticated imports.

### Target URL Format

The Target URL has the following format:  
`scheme://authority/path`  
with all URI components optional. Note: while all URI components are optional the scheme and authority become mandatory when not importing from URL and the definition does not specify them (for example, it has no servers or schemes).  
Following some examples, overriding:

* The authority and path: `localhost/api/`
* Just the scheme: `https://`
* Just the authority: `qa.example.com:9090`
* Just the path: `/dev/v3/`

## API

The following operations are added to the API:

* ACTION importFile (file, target, contextId, userId)
* ACTION importUrl (url, hostOverride, contextId, userId)

Both `target` and `hostOverride` support the `Target URL` format explained earlier. The definitions will be imported synchronously and any warnings will be returned.

## Data Driven Nodes

When the OpenAPI definition contains path parameters, and a context is specified during importing, the add-on will automatically generate data driven nodes. If no context is specified, no data driven nodes are generated. For example, the following OpenAPI definition will result in at least one data driven node.

```
    ...
    /users/v1/{username}/email:
      ...
      parameters:
        - name: username
          in: path
          description: username to update email
          required: true
          schema:
            type: string
    ...
```

The following nodes are added to the Sites Tree for the above endpoint:

```
Sites
└── http://example.com
    └── users
        └── v1
            └── «username»
                └── email
```

The imported OpenAPI definition is persisted to the session database. When the session is reloaded, the definition is used to generate the data driven nodes and mark them for future requests.

## Command Line

The following Command Line options are added:

* -openapifile \<filename\> : Imports an OpenAPI definition from the specified file name
* -openapiurl \<url\> : Imports an OpenAPI definition from the specified URL
* -openapitargeturl \<url\> : The Target URL, to override the server URL present in the OpenAPI definition

The definitions will be imported synchronously and any warnings will be displayed on the command line.

## User Specified Values

Default values are used when importing OpenAPI definitions.  
These can be overridden using the Form Handler add-on which allows you to specify your own values.  
In most cases these will be simple values (like strings and integers) but in some cases you may need to specify structured values, e.g.

```
{ "id": 0, "name": "Freda" }
```

## Statistics

The add-on maintains the following statistics:

* openapi.urls.added : The total number of URLs added when importing OpenAPI definitions

## Scripts

The following scripts are included with the add-on:

### Swagger Secret \& Vulnerability Detector {#id-100043}

This is an active script scan rule. It attempts to find exposed OpenAPI documentation that leaks sensitive secrets such as API keys, OAuth client secrets, access tokens, or that runs vulnerable versions of Swagger UI.


Latest code: [SwaggerSecretDetector.js](https://github.com/zaproxy/zap-extensions/blob/main/addOns/openapi/src/main/zapHomeFiles/scripts/scripts/active/SwaggerSecretDetector.js)


Alert ID: [100043](/docs/alerts/100043/).
