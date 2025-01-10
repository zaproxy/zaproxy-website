---
# This page was generated from the add-on.
title: Sites Tree
type: userguide
weight: 24
---

# Sites Tree


The Sites Tree is ZAP's internal representation of the sites that you access and is displayed in the [Sites tab](/docs/desktop/ui/tabs/sites/).
If it does not accurately reflect the sites then ZAP will not be able to attack them effectively.
Each node in the tree represents a different piece of functionality in a site.
By default ZAP will create unique nodes in the tree based on the HTTP method and the parameter names.


This means that the following requests will all end up having different tree nodes:

* GET https://www.example.com/ex1?a=b\&c=d
* GET https://www.example.com/ex1?a=b\&d=c
* POST https://www.example.com/ex1?a=b\&c=d

And the following requests will end up having the same node:


* GET https://www.example.com?a=b\&c=d
* GET https://www.example.com?a=c\&c=c
* GET https://www.example.com?a=e\&c=f

This works pretty well in lots of cases - different HTTP methods and parameter names typically mean different actions while the parameter values usually don’t change the outcome.

## Exceptions

There are always exceptions.

### Structural Parameters

Take the case where the action to be taken is actually defined in a parameter value:

* GET https://www.example.com?a=b\&action=add
* GET https://www.example.com?a=b\&action=delete

In this case both URLs will end up in the same Sites Tree node, which means that in practice only one of them will be attacked. The other URL will not be attacked and so any vulnerabilities specific to that action will not be found.


In ZAP the solution to this is to define the ‘action’ parameter as a [Structural Parameter](/docs/desktop/start/features/structparams/),
in other words a parameter whose value actually affects the structure of a site.
Once you have done that (and revisited the URLs) then they will appear as 2 different nodes and ZAP will attack them separately.

### Data Driven Nodes

Conversely we have the case where a URL path element is actually part of the data and not part of the structure of the site. For example the following URLs could all represent the same functionality if the second path element (companyX) is actually data:

* https://www.example.com/app/company1/aaa?ddd=eee
* https://www.example.com/app/company2/aaa?ddd=fff
* https://www.example.com/app/company3/aaa?ddd=ggg

In this case all 3 URLs will end up in unique nodes and ZAP will attack each of them even though it doesn't really need to. This probably is not a big problem if there are just 3 instances, but in most cases this data will be coming from a database so there could be a huge number of such nodes.


The solution to this is to define the relevant path element as [Data Driven Content](/docs/desktop/start/features/ddc/) which means path elements that really contain data rather than represent part of the site structure.
Once you have done that (and revisited the URLs) then they will all be represented as just 1 node and ZAP will only attack them once.


You will need to define both Structural Parameters and Data Driven Nodes manually - ZAP does not currently have the capability to automatically detect these situations.

### Custom Parameters

Finally there are cases where sites define custom parameters which ZAP does not natively understand. As a result ZAP may not be able to correctly split requests into suitable nodes.


In these cases you can use Input Vector [Scripts](/docs/desktop/start/features/scripts/) which can represent request in the Sites Tree in any way you want.

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |

## External links

|   |                                                                          |
|---|--------------------------------------------------------------------------|
|   | [ZAP Blog: Sites Tree Modifiers](/blog/2020-09-22-sites-tree-modifiers/) |
