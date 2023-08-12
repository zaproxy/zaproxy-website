---
title: "Why can't ZAP connect to my web application?"
type: faq
category: Networking
weight: 4
---

This is usually not a ZAP problem.

Is your web application actually running?

Can you connect to it using the IP address rather than the FQDN or hostname?

Can you connect to your application from the same machine using another tool like `curl`?

If you are using one of the ZAP Docker images then be aware that using Docker will change the networking.
In this case make sure that you run `curl` from the Docker image, e.g. using a command like:    
    
    docker run --rm ghcr.io/zaproxy/zaproxy:weekly /usr/bin/curl https://www.example.com/
    
If `curl` fails to connect as well then try to find out if there are any firewalls installed which could be preventing access to your application.
This will be a networking problem and not anything to do with ZAP.