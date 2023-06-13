---
title: "ZAP Docker Images in GitHub Container Registry"
summary: >
  ZAP Docker images are now also published to the GitHub Container Registry.
images:
- https://www.zaproxy.org/blog/2023-06-13-ghcr-docker-images/images/zap-ghcr-social.png
type: post
tags:
- blog
- update
- docker
date: "2023-06-13"
authors:
- akshath
---

![Standing Octocat looking at ZAPBot in a cardboard box](images/zap-ghcr-social.png)

ZAP Docker images are now also published to the GitHub Container Registry.

We used this opportunity to unite our various Docker images under a single name and use tags to distinguish between them.

Here's a full list of ZAP images on DockerHub with corresponding images on GHCR that were published in the last week:

| DockerHub                             | GHCR                                      |
| ------------------------------------- | ----------------------------------------- |
| `owasp/zap2docker-stable:latest`      | `ghcr.io/zaproxy/zaproxy:latest`          |
| `owasp/zap2docker-stable:latest`      | `ghcr.io/zaproxy/zaproxy:stable`          |
| `owasp/zap2docker-stable:2.12.0`      | `ghcr.io/zaproxy/zaproxy:2.12.0`          |
| `owasp/zap2docker-stable:s2023-06-09` | `ghcr.io/zaproxy/zaproxy:20230609-stable` |
| &nbsp;                                |                                           |
| `owasp/zap2docker-bare:latest`        | `ghcr.io/zaproxy/zaproxy:bare`            |
| `owasp/zap2docker-bare:2.12.0`        | `ghcr.io/zaproxy/zaproxy:2.12.0-bare`     |
| `owasp/zap2docker-bare:b2023-06-09`   | `ghcr.io/zaproxy/zaproxy:20230609-bare`   |
| &nbsp;                                |                                           |
| `owasp/zap2docker-weekly:latest`      | `ghcr.io/zaproxy/zaproxy:weekly`          |
| `owasp/zap2docker-weekly:w2023-06-12` | `ghcr.io/zaproxy/zaproxy:20230612-weekly` |
| &nbsp;                                |                                           |
| `owasp/zap2docker-live:latest`        | `ghcr.io/zaproxy/zaproxy:nightly`         |

&nbsp;  
We are going to continue publishing our images to both registries.

#### Who is this for?
While anyone can pull and use the ZAP images from GHCR, we think that they should help cut costs for teams or companies that use these images and exceed the DockerHub image pull rates.

We encourage you to start using our GHCR images in your workflows and share your feedback on the [ZAP User Group](https://groups.google.com/group/zaproxy-users).
