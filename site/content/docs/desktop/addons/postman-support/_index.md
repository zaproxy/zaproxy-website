---
# This page was generated from the add-on.
title: Postman Support
type: userguide
weight: 1
cascade:
  addon:
    id: postman
    version: 0.9.0
---

# Postman Support

This add-on will allow you to import Postman collections through the UI, importing through the API and command line is under development.   

It also supports the [Automation Framework](/docs/desktop/addons/postman-support/automation/).

## UI

A menu item is added to the Import menu:

* Import a Postman Collection

Any variables defined in the collection will be replaced with their values. Additionally, the dialog allows providing a comma-separated list of variables as key-value pairs in the format `key1=value1,key2=value2,...`, these variables will have precedence over the collection ones.

## API

The following operations are added to the API:

* ACTION importFile (file)
* ACTION importUrl (url)

## Command Line

The following Command Line options are added:

* -postmanfile \<filename\> : Imports a Postman collection from the specified file name
* -postmanurl \<url\> : Imports a Postman collection from the specified URL
* -postmanendpointurl \<url\> : The endpoint URL, to override the base URLs present in the Postman collection
