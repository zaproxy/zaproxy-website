---
title: "Exploring APIs with ZAP"
type: post
tags:
- API
date: "2017-04-03"
authors:
    - simon
---
APIs can be challenging for security testing for a variety of reasons.  
The first problem you will encounter is how to effectively explore an API - most APIs cannot be explored using browsing or standard spidering
techniques.  
However many APIs are described using technologies such as:  

  * [SOAP](https://en.wikipedia.org/wiki/SOAP)
  * [OpenAPI / Swagger](https://www.openapis.org/)

  
These standards define the API endpoints and can be imported into ZAP using 2 optional add-ons.  

##  Installing the add-ons

In order to import the API definitions you will need to add the relevant add-ons from the ZAP Marketplace.  
  
To do this via the UI:  
  
{{< img "images/Manage-addons.png" >}}  

  1. Click on the ‘Manage Add-ons’ button
  2. Select the ‘Marketplace’ tab
  3. Click on the ‘Check for Updates’ button if no add-ons are shown
  4. Select and install the add-ons:
    * OpenAPI Support
    * SOAP Scanner

{{< img "images/Marketplace.png" >}}  
  
  
To install them via the command line is even easier - just start ZAP with the command line flags: “-addoninstall soap -addoninstall openapi”  
Eg:  

```sh
./zap.sh -addoninstall soap -addoninstall openapi
```

##  Importing via the UI

These add-ons add the following items under the ‘Tools’ menu:  

  * Import a WSDL file from local file system
  * Import a WSDL file from a URL
  * Import an OpenAPI definition from the local file system
  * Import an OpenAPI definition from a URL

{{< img "images/Tools-menu.png" >}}  
These menu items will open new dialogs which will allow you to specify the relevant file or URL to import.  
  
When the definitions have been imported they will be shown in the Sites tree:  
  
{{< img "images/Openapi-import.png" >}}  
  

##  Importing via the API

Both add-ons support importing API definitions from URLs and local files.  
You can try these out via the API Web UI:  
  
{{< img "images/web-api-openapi.png" >}}  
{{< img "images/web-api-soap.png" >}} Using the [Java API](https://github.com/zaproxy/zap-api-java) client this can be done with
calls like:  
  
```java
Map<String, String> map1 = new HashMap<>();  
map1.put("file", "/home/user/openapi.json");  
ApiResponse resp =  
   api.callApi("openapi", "action", "importFile", p1);  
 
Map<String, String> map2 = new HashMap<>();  
 map2.put("url", "https://localhost/openapi.json") 
ApiResponse resp =  
   api.callApi("openapi", "action", "importUrl", p2);  
 
Map<String, String> map3 = new HashMap<>();  
map3.put("file", "/home/user/soap.xml");  
ApiResponse resp =  
   api.callApi("soap", "action", "importFile", p3);  
 
Map<String, String> map4 = new HashMap<>();  
map4.put("url", "https://localhost/soap.xml");  
ApiResponse resp =  
   api.callApi("soap", "action", "importUrl", p4);
```
  
Using the [Python API](https://github.com/zaproxy/zap-api-python) client this can be done with calls like:  
  
```python
print zap._request(  
  zap.base + 'openapi/action/importFile/',  
  {'file':'/home/user/openapi.json'})  
 
print zap._request(  
  zap.base + 'openapi/action/importUrl/',  
  {'url':'https://localhost/openapi.json'})  
 
print zap._request(  
  zap.base + 'soap/action/importFile/',  
  {'file':'/home/user/soap.xml'})  
 
print zap._request(  
  zap.base + 'soap/action/importUrl/',  
  {'url':'https://localhost/soap.xml'})
```

##  Spidering

Both of the add-ons automatically detect the relevant API definition file while spidering and will explore the definitions as long as they are
in scope.  
This means that you can explore an API by spidering from the URL of the definition as long as it is on the same domain as the API.  

##  Next steps

Once you have added your API to the Sites tree using any of the above options you can then use any of the other ZAP components on the API,
including the active scanner and fuzzer.  
  
Note that the SOAP Scanner add-on also adds 2 additional scan rules that specifically target SOAP and XML URLs:  

  * Action Spoofing : <http://www.ws-attacks.org/index.php/SOAPAction_Spoofing>
  * XML Injection : <http://www.ws-attacks.org/index.php/XML_Injection>

  
  

