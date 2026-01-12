---
# This page was generated from the add-on.
title: OpenAPI LLM Support
type: userguide
weight: 2
---

# OpenAPI LLM Support

This add-on supports LLM integration for importing OpenAPI definitions. It will only be enabled if you have chosen to install the LLM add-on and configured it.

## LLM/AI OpenAPI Importer

The add-on adds a menu item to the Import menu:

* LLM/AI OpenAPI Importer


This menu item allows you to import OpenAPI definitions using an LLM to extract HTTP requests from the specification. The LLM analyzes the OpenAPI definition and generates sequences of HTTP calls that can be used for subsequent scanning operations.


The import dialog allows you to specify:

* OpenAPI File location or URL - The path to an OpenAPI definition file (JSON or YAML) or a URL pointing to the definition


The LLM will process the OpenAPI definition and create HTTP requests based on the endpoints defined in the specification. These requests will be added to the ZAP history, allowing you to scan and test the API endpoints.
