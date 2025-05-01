---
title: "Banzai Cloud"
type: success
successtags:
- automation
- internal
- opensource
date: "2021-04-14"
company:
  link: https://github.com/banzaicloud/dast-operator
  logo: /img/success/banzai-cloud.png
---

At Banzai Cloud we use our dast-operator which leverages ZAP to run baseline scans against the services we deploy on the K8S cluster. This operator deploys ZAP to the K8S cluster and initiates automated security testing for web applications and APIs based on OpenAPI definitions. Besides the operator responsible for starting the scan against a service, it can prevent opening a vulnerable service to outside. The prevention mechanism is based on the built-in admission controller which is watching the ingress resources. The admission controller checks the backend services of the ingress and makes a decision depending on the result of the ZAP scans.
