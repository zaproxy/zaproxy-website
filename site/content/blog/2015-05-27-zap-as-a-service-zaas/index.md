---
title: "ZAP as a Service (ZaaS)"
type: post
tags:
date: "2015-05-27"
authors:
    - simon
---
At OWASP AppSec EU in Amsterdam this year I announced ZAP as a Service (ZaaS).  
The slides are [here](https://www.slideshare.net/psiinon/owasp-2015-06appseceuzap24) and the video will hopefully be available soon.  
  
The idea behind this development is to enhance ZAP so that it can be run in a ‘server’ mode.  
This is different to the current ‘daemon’ mode in that it will be designed to be a long running, highly scalable, distributed service accessed
by multiple users with different roles.  
  
ZaaS is definitely not ready for release yet - there will be loads of changes required to make this a reality, although some changes required
for ZaaS have already been made.  
However I decided to announce this as a future direction in order to stimulate discussions and hopefully encourage people to get involved.  
  
And I want to stress that it is _not_ a replacement for ‘desktop’ ZAP (as I’ve started calling it).  
Desktop ZAP is an important focus for us, and it is the way we expect most people to use ZAP for the foreseeable future.  
Instead it's just a different way of running ZAP - there's going to be a lot of common code between desktop ZAP and ZaaS.  
  
So how will ZaaS differ from desktop ZAP?  
  

###  Database

The current HSQLDB is good for a desktop application as it requires no installation, but it's not suitable for ZaaS.  
In 2.4.0 we introduced a database independence layer so that alternative implementations can be supported, although the only implementation was
the current hard coded HSQLDB option.  
In the `develop` branch there's now a generic SQL implementation, in which all of the SQL statements have been extracted into property files.  
In theory any SQL db should be supportable, and working implementations of both HSQLDB and MySQL are provided.  
Although MySQL is intended for daemon or ZaaS modes there's no reason why it can't also be used for the desktop, and in fact that's one of the
options that's been tested.  
Details of how to configure ZAP to use MySQL will be posted on the ZAP Developer Group soon.  
One important aspect that has not been implemented yet is the ability to support multiple database instances in order to better segregate data.  
  

###  Data Structures

While desktop ZAP uses the database very heavily, it still builds up some big data structures in memory. This is so that the Swing UI can react
quickly to user events, such as scrolling through a long list.  
Structures like the Sites tree and History table are held in memory and will constantly grow.  
This is no good for a long running service, which is why we have introduced a ‘low memory’ option. When this option is used ZAP components that
support it will not build up any significant data structures in memory, and those that don't support it will not be enabled.  
This has been implemented for most of the core, but some of the add-ons (including some key active scan rules) still need to be changed.  
Again, details of how to configure ZAP to use the low memory option will be posted on the ZAP Developer Group soon.  
  

###  Processes and deployment

We will be restructuring the code so that it will be possible to run multiple ZAP processes across multiple machines.  
Desktop ZAP will still be just one process, but we will add the option to run ZAP as multiple distributed processes which are likely to provide
specific functionality.  
For example we may well have ZAP ‘worker’ processes for long running tasks such as the spider and active scanner.  
This work has not been started.  
  

###  Users and roles

ZaaS will need to support multiple users with different roles. We want to be able to support a hierarchy of users, teams and companies all with
access to their own data.  
This work has not been started.  
  

###  Access

In addition to the API we will need to implement a modern HTML5 interface for ZAP.  
This is a very big task, and so we’ll need to initially target it at some very specific use cases before gradually expanding it to handle all of
the ZAP functionality.  
This work has not been started.  
  

###  Application Lifetime

The target is for ZaaS to be capable of running in a five nines environment.  
Achieving that level of uptime is not just a software problem, but even so ensuring that ZaaS can operate at that level is a huge challenge,
especially for a product that at the moment typically only runs for a matter of hours.  
The MySQL support, distributed architecture and low memory options are key here, but there are many other considerations such as ensuring there
are no single points of failure and supporting rolling upgrades.  
This is probably going to be the most challenging aspect of ZaaS, and one that several people have questioned.  
However designing, implementing and in some cases even running highly available services is exactly what I was doing before I started working on
ZAP. I actually started ZAP as a way to learn how to make the services I was working on as secure as possible!  
  

###  Security

We take the security of Desktop ZAP very seriously, but the security of ZaaS will be even more critical.  
Desktop ZAP is typically run on a single machine and only accessible from that machine.  
ZaaS will have a remotely accessible HTML5 interface, and this significantly increases the attack service area.  
As it will also contain details of the vulnerabilities of other services, it will be a very tempting target for attackers even if it is
restricted to a company's internal network.  
We will be considering security at all stages of ZaaS development and will ensure that it is thoroughly pentested by experienced security
professionals not directly connected with the project.  
  

###  License

One key thing that will not change between Desktop ZAP and ZaaS is the license.  
ZaaS with be released under Apache V2, which means that anyone can use it for anything they like.  
You will be able to set up a ZaaS instance for your company, and if you want to you could even set up ZaaS as an online service and charge money
for it - that's completely permissible!  
  

###  Development process

Although we have already implement features required for ZaaS there is still much work to do.  
As mentioned at the start of this post, this announcement is to stimulate discussions and hopefully encourage people to get involved.  
We are not able to give any idea of a possible release date for ZaaS at this stage, however we will aim to implement features in a way that
ensures they can be used even without the full ZaaS solution.  
  
We will be using the [ZAP Development group](https://groups.google.com/group/zaproxy-develop) for all of the ZaaS related discussions - please
join in!  
  

