---
# This page was generated from the add-on.
title: Structural Parameters
type: userguide
weight: 27
---

# Structural Parameters


Structural parameters are a type of [Structural Modifier](/docs/desktop/start/features/structmods/)
which identify parameters that represent application structure instead of user data.  


In 'traditional' web applications the structure of the application is typically defined by the URL paths
and the data is contained in the URL parameters and POST data.  

URLs like:

* https://www.example.com/app/aaa?ddd=eee
* https://www.example.com/app/aaa?ddd=fff
* https://www.example.com/app/aaa?ddd=ggg

are represented in the [Sites Tree](/docs/desktop/start/features/sitestree/) as one 'node' in the tree:

* Sites
    * https://www.example.com
        * app
            * GET:aaa(ddd)

The Sites tree is very important as it reflects ZAP's understanding of the application structure.  
If it is not a good representation of the structure then ZAP will not be able to attack the application effectively.  

In 'single' page applications a parameter is used to indicate the logical 'page':

* https://www.example.com/app/aaa?page=p1\&ddd=eee
* https://www.example.com/app/aaa?page=p2\&ddd=fff
* https://www.example.com/app/aaa?page=p3\&ddd=ggg

these 3 URLs represent different logical pages, but by default ZAP will still represent them as one node:


* Sites
    * https://www.example.com
        * app
            * GET:aaa(ddd,page)

This is a problem because ZAP will now not attack all of the application's functionality.  

In ZAP terms the 'page' URL parameter is a 'structural parameter' - a parameter that defines part of the application structure.  
You can define structural parameters by adding the application to a [Context](/docs/desktop/start/features/contexts/) and then configuring them via the [Session Context Structure screen](/docs/desktop/ui/dialogs/session/context-struct/).  
Once you have done this the pages will be correctly represented as 3 nodes:

* Sites
    * https://www.example.com
        * app
            * aaa
                * GET:p1(ddd,page)
                * GET:p2(ddd,page)
                * GET:p3(ddd,page)

## Accessed via

|   |                                                                                      |
|---|--------------------------------------------------------------------------------------|
|   | [Session Context Structure screen](/docs/desktop/ui/dialogs/session/context-struct/) |

## See also

|   |                                                                  |                                                                           |
|---|------------------------------------------------------------------|---------------------------------------------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                 | for an overview of the user interface                                     |
|   | [Features](/docs/desktop/start/features/)                        | provided by ZAP                                                           |
|   | [Structural Modifiers](/docs/desktop/start/features/structmods/) | controls which change how ZAP represents the structure of the application |
|   | [Data Driven Content](/docs/desktop/start/features/ddc/)         | which identify URL paths that represent data                              |
