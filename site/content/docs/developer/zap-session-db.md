---
title: "ZAP Session Database"
description: "This guide goes over the details of ZAP's session database."
tags:
- guide
- tutorial
type: page
date: "2021-09-15"
---

ZAP stores its session data in an [HSQLDB](https://hsqldb.org/) file database.
There is also experimental support for [other database engines](https://github.com/zaproxy/zaproxy/tree/main/zap/src/main/dist/db).

## Connecting to a Session Database
Since ZAP locks its session file, it is only possible to view or modify the database when ZAP doesn't have the session open.
Session files are usually stored under `session/` in the [default directory](/faq/what-is-the-default-directory-that-zap-uses/).

You may use the following details to connect to a session database.
The following example assumes that your session file is called `test.session` and it is saved under `~/.ZAP_D/session/`.

| Connection Parameter | Value                                                          |
| -------------------- | -------------------------------------------------------------- |
| URL                  | `jdbc:hsqldb:file:~/.ZAP_D/session/test.session;ifexists=true` |
| Username             | `sa`                                                           |

&nbsp;  
There is no password required for the connection.
The `ifexists=true` property in the URL prevents a new database from being created if one doesn't exist already.

## Implementation Details
The database is initialized using an SQL script called [`zapdb.script`](https://github.com/zaproxy/zaproxy/blob/da5422097306d5bbc1a648a90d0846090af1504f/zap/src/main/resources/org/zaproxy/zap/resources/zapdb.script).

### Core Tables
In the [`org.parosproxy.paros.db.paros.ParosDatabase`](https://github.com/zaproxy/zaproxy/blob/da5422097306d5bbc1a648a90d0846090af1504f/zap/src/main/java/org/parosproxy/paros/db/paros/ParosDatabase.java) class, multiple `Table*` instances are added as database listeners.
The `Table*` classes create new tables in the database when a new connection is set up.

You can find some example tables in [src/main/java/org/parosproxy/paros/db](https://github.com/zaproxy/zaproxy/tree/main/zap/src/main/java/org/parosproxy/paros/db).
New core tables must be added to [src/main/java/org/zaproxy/zap/db](https://github.com/zaproxy/zaproxy/tree/main/zap/src/main/java/org/zaproxy/zap/db)

### Add-on Tables
Add-ons may add tables to the session database as well.
To do so, they can override [org.parosproxy.paros.extension.ExtensionAdaptor#databaseOpen](https://github.com/zaproxy/zaproxy/blob/da5422097306d5bbc1a648a90d0846090af1504f/zap/src/main/java/org/parosproxy/paros/extension/ExtensionAdaptor.java#L307) to register database listeners.

For example, the SOAP add-on adds a table called `soap_wsdl` which is used to store SOAP actions that are used in attacks.
- [org.zaproxy.zap.extension.soap.ExtensionImportWSDL#databaseOpen](https://github.com/zaproxy/zap-extensions/blob/cc83cdcee269174be3ba42ccbc5bc10bd1203c4a/addOns/soap/src/main/java/org/zaproxy/zap/extension/soap/ExtensionImportWSDL.java#L133)
- [org.zaproxy.zap.extension.soap.TableWsdl](https://github.com/zaproxy/zap-extensions/blob/cc83cdcee269174be3ba42ccbc5bc10bd1203c4a/addOns/soap/src/main/java/org/zaproxy/zap/extension/soap/TableWsdl.java)

## References
|                   |                                                          |
| ----------------- | -------------------------------------------------------- |
| HSQLDB Properties | https://hsqldb.org/doc/2.0/guide/dbproperties-chapt.html |
