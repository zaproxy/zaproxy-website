---
title: "ZAP vs OWASP Juice Shop"
type: page
EditableContent: true
---
OWASP Juice Shop is "probably the most modern and sophisticated insecure web application!".

The main project page is https://owasp.org/www-project-juice-shop/

It is actively maintained. 

In this case we use it to check that the [AJAX Spider](/docs/desktop/addons/ajax-spider/) finds all of the expected pages.
Juice Shop was manually explored using a browser - if you find a new URL in Juice Shop that can be discovered by 'normal'
exploration but which is not listed then please [raise an issue](https://github.com/zaproxy/zaproxy/issues/new?template=bug-report.yml).

{{< spider-table >}}

  {{< spider-results target= "juiceshop" section="all" expand="true" >}}

{{< /spider-table >}}

&nbsp;  

#### Configuration

| Config | Details |
| --- | --- |
| Frequency | Daily |
| Scripts | https://github.com/zapbot/zap-mgmt-scripts/blob/master/scans/juiceshop/ |
| Action | https://github.com/zapbot/zap-mgmt-scripts/actions/workflows/zap-vs-juiceshop.yml | 

&nbsp;  

#### Settings

The latest [Nightly ZAP Docker image](https://github.com/zaproxy/zaproxy/pkgs/container/zaproxy) is run with the default settings against this app with no exceptions.
