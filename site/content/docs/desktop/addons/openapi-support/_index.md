---
# This page was generated from the add-on.
title: OpenAPI Support
type: userguide
weight: 1
cascade:
  addon:
    id: openapi
    version: 21.0.0
---

# OpenAPI Support

This add-on allows you to spider and import OpenAPI (Swagger) definitions, versions 1.2, 2.0, and 3.0.

The add-on will automatically detect any OpenAPI definitions and spider them as long as they are in scope.

It also supports the [Automation Framework](/docs/desktop/addons/openapi-support/automation/).

## UI

2 menu items are added to the Import menu:

- Import an OpenAPI definition from the local file system
- Import an OpenAPI definition from a URL

Both dialogues allow to override the server URL present in the OpenAPI definition (or specify one if not present) through the Target URL field.

### Target URL Format

The Target URL has the following format:  
`scheme://authority/path`  
with all URI components optional. Note: while all URI components are optional the scheme and authority become mandatory when not importing from URL and the definition does not specify them (for example, it has no servers or schemes).  
Following some examples, overriding:

- The authority and path: `localhost/api/`
- Just the scheme: `https://`
- Just the authority: `qa.example.com:9090`
- Just the path: `/dev/v3/`

## API

The following operations are added to the API:

- ACTION importFile (file, target)
- ACTION importUrl (url, hostOverride)

Both `target` and `hostOverride` support the `Target URL` format explained earlier. The definitions will be imported synchronously and any warnings will be returned.

### Data Driven Nodes

When the OpenAPI schema contains path params the plugin will automatically generate data driven nodes in either the default context or for the context from the provided `contextId`. For example, the following OpenAPI definition will result in at least one data driven node. **openapi.yml** `
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
  `**Default Context \> Structure \> Structural Modifiers**`
  DDN0: (/)(.+?)(/._)
  DDN1: (/users/v1/)(.+?)(/._)
  `

## Command Line

The following Command Line options are added:

- -openapifile \<filename\> : Imports an OpenAPI definition from the specified file name
- -openapiurl \<url\> : Imports an OpenAPI definition from the specified URL
- -openapitargeturl \<url\> : The Target URL, to override the server URL present in the OpenAPI definition

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

- openapi.urls.added : The total number of URLs added when importing OpenAPI definitions
