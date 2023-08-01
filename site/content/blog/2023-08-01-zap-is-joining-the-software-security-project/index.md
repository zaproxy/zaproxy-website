---
title: "ZAP is Joining the Software Security Project"
summary: "I’m delighted to announce that ZAP is joining the new [Software Security Project](https://softwaresecurityproject.org/) (SSP) as one of the founding projects. This does however mean we are leaving OWASP."
images:
- https://www.zaproxy.org/blog/2023-08-01-zap-is-joining-the-software-security-project/images/ssp.png
type: post
tags:
- blog
- release
date: "2023-08-01"
authors:
    - simon
---
I’m delighted to announce that ZAP is joining the new [Software Security Project](https://softwaresecurityproject.org/) (SSP) as one of the founding projects.

![Software Security Project Logo](images/ssp.png)

The SSP, is a brand new initiative of the Linux Foundation. It's so new in fact that we don't yet have a formal charter and governance in place, but we are excited to be part of the process of defining it all with our community. We know we are aligned with the goals and the planned governance.

The SSP is explicitly set up to support key open source security projects, and as a result is now supporting both myself and 
[Ricardo](/docs/team/thc202/) to work full time on ZAP. The plan is to employ more people to work full time on ZAP as and when we can.

We encourage all of you who use ZAP to consider joining SSP in order to help fund ZAP and other important Open Source security projects.

### Farewell to OWASP

ZAP can only be in one foundation, so regretfully ZAP will be leaving OWASP.

I applied for ZAP to be accepted to OWASP shortly after launching it in 2010 and I have never regretted that decision.

As an OWASP project, ZAP has greatly benefited from the exposure, significantly increasing the likelihood of people trying it out.
An unexpected invitation to present ZAP at [OWASP AppSec Ireland in 2012](https://owasp.blogspot.com/2012/08/appsec-ireland-2012-register-now.html) was a major boost, and since then OWASP Conferences and Chapters all over the world have really helped spread the word about ZAP.

Unfortunately OWASP has struggled to support and invest in projects, especially big projects.

ZAP is a big project. It has grown into the world’s most popular web scanner and directly competes with commercial projects that have huge investments. We need much more investment in order to thrive, investment that SSP is committed to raising.

This move should not come as a surprise to anyone active in OWASP.

We actually first floated the idea of leaving OWASP [back in 2015](https://groups.google.com/g/zaproxy-develop/c/HFbQZ6ETljY/m/bXMFCJ59BwAJ).

I reiterated these concerns in my [Global AppSec Keynote](https://www.youtube.com/watch?v=t77aKVJQKzY) in 2022 and the ZAP team were some of the first signatories to the [Open Letter to the OWASP Board](https://owasp-change.github.io/) in Feb 2023.

We are working with OWASP to make sure this transition is as smooth as possible. The ZAP Team believes that OWASP is a very positive force in this industry. We will continue to contribute to OWASP, as project leaders, and as volunteers.

### What Does this Mean in Practice?

This move means that we will be part of a foundation that will actively help raise more funds for ZAP and other similar projects.

For the first time ever we have two people working on ZAP full-time and that will increase over time.

ZAP will, of course, stay Open Source. 

There will be some practical changes:

#### Rebrand

From now on "OWASP ZAP" will be known as just "ZAP".

We have already updated the main pages of this site to reflect ZAP’s new status, but there are likely to be many more minor changes we need to make here and on other ZAP accounts.

The next full ZAP release will also include UI rebranding changes - we have not decided exactly when this will be yet.

#### Docker Hub

The ZAP images on DockerHub are part of the OWASP organisation account. We will be moving these to a new organisation, which will mean that you will need to change the URLs you use to pull the images.

We are working with OWASP to ensure that the current images are maintained for a reasonable period of time.

The [GitHub Container Registry](/blog/2023-06-13-ghcr-docker-images/) images will not be affected.

#### ZAP Services

The [services](/faq/what-calls-home-does-zap-make/) we maintain for ZAP are currently hosted in an OWASP account. We are in the process of migrating these, and you should not experience any loss of service during this transition.

### Questions or Concerns

If you do have any questions or concerns then please reach out to me and/or the rest of the team, using all the usual ways: 

* [ZAP User Group thread](https://groups.google.com/g/zaproxy-users/c/8-c0h2JtCXI/m/-ZC6sYTfAAAJ)
* [ZAP Core Team Email](mailto:zaproxy-admin@googlegroups.com)
* [My Email](mailto:psiinon@gmail.com)
* [My Twitter](https://twitter.com/psiinon) (DM's open)
* [My LinkedIn](https://www.linkedin.com/in/psiinon/)
