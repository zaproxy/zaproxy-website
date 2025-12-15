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

## Node Name Format

### Top Level Nodes

The top level node names include the protocol, host name and the port (if specified), e.g. `https://www.example.com:8080`

### Intermediate Nodes

Non leaf nodes will just have the name of the relevant part of the URL path, unless they are configured to be [Data Driven Content](/docs/desktop/start/features/ddc/) in which case then will have the format `«ddc-name»`.

### Leaf Nodes

Leaf node names are made up of:

* The HTTP method (GET, POST, etc)
* A colon
* The last path element, or "/" if the last element is empty
* A list of the URL parameter names in round brackets
* An optional representation of the POST parameter names in round brackets

A GET request to


* `https://www.example.com/aaa/bbb?cc=dd&ee=ff`

will be represented as 3 nodes:


* https://www.example.com
    * aaa
        * GET:bbb(cc,ee)

A POST request to


* `https://www.example.com/aaa/bbb/ccc/?cc=dd`

with "application/x-www-form-urlencoded" encoded data


* `cc=dd&ee=ff&gg=hh`

will be represented as 5 nodes:


* https://www.example.com
    * aaa
        * bbb
            * ccc
                * POST:/(cc)(cc,ee,gg)

A POST request to


* `https://www.example.com/aaa/bbb/ccc`

with the JSON encoded data


* `{"aaa":{"bbb": "ccc", "ddd": "eee"}, fff: ["kkk", {"ggg":"hhh"}, {"iii":"jjj"}]}`

will be represented as 4 nodes:


* https://www.example.com
    * aaa
        * bbb
            * POST:ccc()({aaa:{bbb,ddd},fff:\[{ggg},{iii}\]})

A POST request to


* `https://www.example.com/aaa/bbb/`

with the XML encoded data


* `<aaa><bbb>BBB</bbb><ccc>CCC</ccc><ddd>DDD</ddd></aaa>`

will be represented as 4 nodes:


* https://www.example.com
    * aaa
        * bbb
            * POST:/()(\<aaa:\<bbb\>,\<ccc\>,\<ddd\>\>)

For JSON and XML data repeated child elements may be represented using "`..`".  
For example

* `[{"a":{"b": "c", "d": "e"}},{"a":{"b": "f", "d": "g"}},{"a":{"b": "h", "d": "i"}}]`

will be represented as


* `[{a:{b,d}}..]`


A POST request to

* `https://www.example.com/aaa/`

with multipart POST data like:

```
-----------------------------3973496743964376987349857345
Content-Disposition: form-data; name="text"

text default
-----------------------------3973496743964376987349857345
Content-Disposition: form-data; name="file1"; filename="a.txt"
Content-Type: text/plain

Content of a.txt.

-----------------------------3973496743964376987349857345
Content-Disposition: form-data; name="file2"; filename="a.html"
Content-Type: text/html

<!DOCTYPE html><title>Content of a.html.</title>

-----------------------------3973496743964376987349857345--
```

will be represented as 3 nodes:

* https://www.example.com
    * aaa
        * POST:/()(multipart:text,file1,file2)

## See also

|   |                                           |                                       |
|---|-------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)          | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/) | provided by ZAP                       |

## External links

|   |                                                                          |
|---|--------------------------------------------------------------------------|
|   | [ZAP Blog: Sites Tree Modifiers](/blog/2020-09-22-sites-tree-modifiers/) |
