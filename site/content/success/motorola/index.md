---
title: "Motorola Solutions"
type: success
successtags:
- automation
- internal
date: "2021-04-14"
company:
  link: https://www.motorolasolutions.com/
  logo: /img/success/motorolasolutions.png
  twitter: MotoSolutions
---

Motorola Solutions follows S-SDLC (secure software development lifecycle) best practices for
our product development. Similarly, these best practices can be found in another OWASP
project, the [Software Assurance Maturity Model](https://owaspsamm.org/). We build our software development approach
on the OWASP SAMM, to ensure delivery of secure products, from architecture design to the
deployment in our own or customer’s infrastructure.

One of the SAMM requirements, defined in the _Verification / Security Testing_ practice on a highest
maturity level, states that an organization should _embed security testing as part of the
development and deployment processes_. We use a number of commercial tools for both static
and dynamic application security scans, software composition analysis and for measuring other
metrics. ZAP has been added to our security toolset, fitting the needs of many
application teams within the company.

A major strength of the ZAP is the ease of deployment. Being a standalone Java
application, and running smoothly from a Docker container, means ZAP can be easily installed
closely to the scanned application. Regardless if the targeted service runs in a closed
on-premise lab, or on a Kubernetes cluster hosted in the public cloud, ZAP can be easily
added to the environment. Close proximity to the target deployment brings many advantages.
For example, it allows us to avoid web application firewalls and intrusion prevention systems,
which could impact the results of a scan.

For development teams to adopt ZAP, it is important that the tool fits into the existing
environment and brings additional value. The ZAP project delivers pre-packaged Docker
containers, which are perfect for use in automated scans. To simplify this process even more,
we prepared dedicated jobs - easily applicable to our CI/CD pipelines.

It’s important to note that there is no need to modify ZAP itself. The product is highly
customizable, allowing us to change its behavior with custom scripts, Python hooks, and in other
ways. For example, we implemented a common script to handle authentication steps on our
Identity Management solution. Now, for the teams using the same IdM, it’s very easy to start
performing authenticated scans of their products.

ZAP is a distributed scanner, with every scan running in a short living Docker container. There is
no central management system, which would allow scan scheduling and, more importantly,
collection of the results. Lack of such observability is a disadvantage, especially from a
management point of view. But thanks to packaging the scans in a common pipeline job, we
were able to add simple telemetry requests. Every execution is being recorded, allowing us to
track usage of the tool.

Shortly after the rollout of our dedicated pipeline jobs, the scans were adopted by several
application teams, running dozens of automated scans on frontend and backend services daily. 
This number grows every month, helping us improve the safety of our customers and their systems.
