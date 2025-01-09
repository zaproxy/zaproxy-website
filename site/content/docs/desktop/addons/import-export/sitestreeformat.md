---
# This page was generated from the add-on.
title: Sites Tree File Format
type: userguide
weight: 2
---

# Sites Tree File Format

The Sites Tree Format is a YAML representation of the ZAP Sites Tree.  
It is a hierarchy of nodes, each of which represents all of the essential information needed to uniquely identify the corresponding node in the Sites tree.


Each node has the following format:

```
  - node:              # The name of the node, as shown in the ZAP Sites Tree
    url:               # The URL it represents, present for all apart from the top node
    method:            # The HTTP method, present for all apart from the top node
    responseLength:    # The length of the response, where relevant
    statusCode:        # The HTTP status code, where relevant
    data:              # The names of the data parameters, if any, separated with '=&'s
    children:          # A list of child nodes, present for all nodes apart from the leaves
```


This format is used by the [Automation Framework](/docs/desktop/addons/import-export/automation/) export and prune jobs, and by the corresponding
[desktop menus](/docs/desktop/addons/import-export/).


A full simple example:

```
- node: Sites
  children:
  - node: https://www.example.com
    url: https://www.example.com
    method: GET
    children:
    - node: missing
      url: https://www.example.com/missing
      method: GET
      responseLength: 1221
      statusCode: 404
    - node: path
      url: https://www.example.com/path
      method: GET
      responseLength: 1234
      statusCode: 200
      children:
      - node: GET:query(q)
        url: https://www.example.com/seq/query?q=search
        method: GET
        responseLength: 2345
        statusCode: 200
      - node: submit
        url: https://www.example.com/seq/submit()(field1,field2,field3)
        method: POST
        data: field1=&field2=&field3=
        responseLength: 3456
        statusCode: 200
```
