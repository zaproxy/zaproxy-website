---
title: "ZAP - Webswing Usage"
tags: 
- docker
- guide
type: docker
---


Starting with version 2.5.0 you can run the ZAP Desktop UI in your browser without having to install Java, thanks to the magic of [Docker](https://www.docker.com/) and [Webswing](https://www.webswing.org)

To do this you will just need Docker installed. Start the container with webswing support:
* Stable: 
  * `docker run -u zap -p 8080:8080 -p 8090:8090 -i owasp/zap2docker-stable zap-webswing.sh`
* Weekly: 
  * `docker run -u zap -p 8080:8080 -p 8090:8090 -i owasp/zap2docker-weekly zap-webswing.sh`

Then point your browser at: 
  * http://localhost:8080/zap

You will then see the familiar ZAP splash screen while ZAP starts up.

![](/img/docs/docker/ZAP-webswing.png)

The ZAP UI acts in just the same way as it does when running 'natively'.

The performance is surprisingly good, although a little bit slower. You can still move and resize the windows and some (but not all) of the keyboard shortcuts will work.

You can even proxy your browser through ZAP, via the URL [http://localhost:8090](http://localhost:8090)

Note that you will need to visit http://localhost:8080/zap _before_ you can use ZAP as a proxy - ZAP will only start to run when you visit that URL.
