---
title: "Alberto's GSoC 2014 Project for ZAP  SOAP Scanner Add-On"
type: post
tags:
date: "2014-09-03"
authors:
    - alberto
---
Hello everybody, my name is Alberto Verza, a 23 year student from Spain, and this summer I have participated in [Google Summer of Code 2014](https://www.google-melange.com/archive/gsoc/2014/orgs/owasp). My
project was the SOAP Scanner add-on for ZAP, in which I worked during all the Program. Let me explain you the features it includes.  
  
One of the interesting features this add-on provides is WSDL file scanning. Until now, ZAP could find these kind of files and it could even
search URLs inside them, but further petitions to these URLs had not a valid SOAP format specified by the WSDL file. With the SOAP Scanner add-on,
detected WSDL files are now read and SOAP petitions now follow the correct format. You can provide WSDL files in many ways: using the main
window "quickscan" option, through proxy navigation, or even importing single files through tools menu.  
  
However, SOAP Scanner add-on functionality doesn't end here. It couldn't be called "scanner" if it wasn't capable of scanning vulnerabilities
after all. That's why it has some SOAP dedicated scanners, which simulates specific attack vectors for some known vulnerabilities like SOAP
Action Spoofing or XML Injection, and it raises alerts when something unusual is coming from server's response. Moreover, the add-on not only
works with scanners made in this project, but also it is compatible with previous developed ones like SQL Injection Scanner or Cross-Site
Scripting Scanner, among others.  
  
SOAP Scanner add-on has passed GSoC final evaluations in alpha state, so if you want to give it a try, you should take a look to the [User Guide](https://docs.google.com/document/d/1yy7eZHP0mg46nHC7a2KaOfM08HNb84f5Kn5GF02-v9M/edit) first.  
  
Finally, I want to stress that OWASP ZAP and SOAP Scanner add-on are Open Source Software under Apache License 2.0, so contributions to the code
are always welcome. If you have not worked for ZAP before, then ZAP Developers will be pleased to help anyone who wants to contribute through the [developer group](https://groups.google.com/forum/#!forum/zaproxy-develop), so don't hesitate to ask there.  
  
I hope you find this useful :)
