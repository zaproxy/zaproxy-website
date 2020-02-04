---
title: "How can you use ZAP to scan APIs?"
type: faq
category: API
weight: 7
---


ZAP understands API formats like JSON and XML and so can be used to scan APIs.

The problem is usually how to effectively explore the APIs.

There are various options:

  * If your API has an OpenAPI/Swagger definition then you can import it using the [OpenAPI add-on](/docs/desktop/addons/openapi-support/).
  * If your API has a WSDL then you can import it using the SOAP Scanner add-on.
  * If you have a list of endpoint URLs then you can import these using the [Import files containing URLs add-on](/docs/desktop/addons/import-urls/).
  * If you have regression tests for you API then you can proxy these through ZAP

The add-ons are available from the [ZAP Marketplace](/addons/).

Once ZAP knows about the URL endpoints it can scan them in the same way as it
scans HTML based web sites.

If you don't have any of these things then post to the [ZAP User
Group](https://groups.google.com/group/zaproxy-users) explaining what you are
trying to do and the problems you are having.

For more details see the blog post [Scanning APIs with ZAP](/blog/2017-06-19-scanning-apis-with-zap/).
