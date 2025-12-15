---
# This page was generated from the add-on.
title: Access Control Status Tab
type: userguide
weight: 1
---

# Access Control Status Tab


The Access Control Status Tab allows starting of new Access Control testing and displays the results obtained. For
each User and for each URL attacked by ZAP, an entry is added with information about:

* ZAP's id of the message sent
* the HTTP method used
* the URL of the resource
* the HTTP status code of the response
* the User from whose point the resource was accessed
* whether the request was identified as being authorized or not
* the access rule used, which was either directly defined or inferred based on parent's defined rules
* the result obtained: successful (green check) if the access rule was followed of failed (red cross) otherwise

## See also

|   |                                                                                               |                                                    |
|---|-----------------------------------------------------------------------------------------------|----------------------------------------------------|
|   | [Access Control Testing concepts](/docs/desktop/addons/access-control-testing/)               | for a short introduction to Access Control Testing |
|   | [Access Control Context options](/docs/desktop/addons/access-control-testing/contextoptions/) | to learn about the related context options         |
