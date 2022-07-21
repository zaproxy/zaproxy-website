---
title: "ZAP History: 2009 - Paros Proxy"
tags: 
- history
type: history
date: "2022-07-21"
authors:
    - simon
---

I’ve always had side projects but at that time I had never contributed to open source. I decided it was a good time to start contributing, so I looked around for an open source security tool with an active community. 

Unfortunately I couldn’t find one.

OWASP had [WebScarab](https://github.com/OWASP/OWASP-WebScarab), but I didn’t really get on with that, and in any case development on that seemed to have stopped.
The tool I most liked was called [Paros Proxy](https://sourceforge.net/projects/paros/) - it was simple, effective and did what I needed. It was also written in Java so it wasn’t long before I pulled it into Eclipse and started making some tweaks.

I found that other developers and QA people at the company were also somewhat lacking in security knowledge, so I started giving talks on the OWASP Top Ten.

The first question that everyone asked was - "so what tools should we use?"

I took another look at all of the options - I wanted the tool I recommended to be free, open source, and cross platform. It needed to do all of the basics but didn't have to be a hard core pentesters tool. Ideally it would also have an active community.
I couldn’t find anything that met those criteria. The closest tool was Paros, or rather the version of Paros I was hacking around with!

I decided to fork Paros and release it as a new project :open_mouth: . 

I wanted to add something to Paros to show that it was being extended and so I decided to add much more documentation.
The old Paros docs were just one relatively small HTML file which I had found very lacking so I added Java Help which covered all of the screens.
The help, rebranding, and minor tweaks actually took me longer than I expected.
As this was not strictly speaking part of my job I made most of the changes in my own time. 
However I needed to make regular trips to the company headquarters so many of the early ZAP changes were made on the train journey from Manchester to Newcastle.

{{<prevnext prevUrl="../2009a-the-pentest/" prevTitle="2009 - The Pentest" nextUrl="../2010a-why-the-name-zap/" nextTitle="2010 - Why the name ZAP?">}}