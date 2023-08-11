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
  * `docker run -u zap -p 8080:8080 -p 8090:8090 -i ghcr.io/zaproxy/zaproxy:stable zap-webswing.sh`
* Weekly: 
  * `docker run -u zap -p 8080:8080 -p 8090:8090 -i ghcr.io/zaproxy/zaproxy:weekly zap-webswing.sh`

Then point your browser at: 
  * http://localhost:8080/zap

You will then see the familiar ZAP splash screen while ZAP starts up.

![](/img/docs/docker/ZAP-webswing.png)

The ZAP UI acts in just the same way as it does when running 'natively'.

The performance is surprisingly good, although a little bit slower. You can still move and resize the windows and some (but not all) of the keyboard shortcuts will work.

## Proxying through ZAP

You can even proxy your browser through ZAP, via the URL [http://localhost:8090](http://localhost:8090)

However it is not possible to launch browsers via ZAP started via Webswing so in order to proxy https based sites you need to start the docker container with a local drive mapped to `/zap/wrk` e.g. using:

*  `docker run -v $(pwd):/zap/wrk/:rw -u zap -p 8080:8080 -p 8090:8090 -i ghcr.io/zaproxy/zaproxy:stable zap-webswing.sh`

When you do this ZAP will create 2 files on your mapped drive:

* zap_root_ca.crt - the public ZAP Root CA certificate
* zap_root_ca.key - the private ZAP Root CA certificate

You will then need to configure one of your browsers to [proxy via ZAP](/docs/desktop/start/proxies/) 
and [import the public ZAP Root CA certificate](/docs/desktop/ui/dialogs/options/dynsslcert/#install) so that it is trusted to sign websites.

It is recommended that you keep a separate browser profile for proxying through ZAP.

If you restart the docker container using the same mapped drive then ZAP will automatically import the private ZAP Root CA certificate 
so you will not need to import it into your browser again.


Note that you will need to visit http://localhost:8080/zap _before_ you can use ZAP as a proxy - ZAP will only start to run when you visit that URL.

## ZAP Command Line Options

When you run ZAP using Webswing then the following ZAP Command Line Options will be used:

* If there is a `ZAP_WEBSWING_OPTS` environmental variable set then its value will be used
* If not then if a `/zap/wrk/zap_root_ca.key` file exists then this is loaded as the ZAP root cert
* If not then if the `/zap/wrk` is writable then ZAP will output the public and private ZAP cert into that directory
* If not then the default ZAP options will be used: `-host 0.0.0.0 -port 8090`

For example to start ZAP listening on a different port (9090) use:
  * `docker run -v $(pwd):/zap/wrk/:rw -e ZAP_WEBSWING_OPTS="-host 0.0.0.0 -port 9090" -u zap -p 8080:8080 -p 9090:9090 -i ghcr.io/zaproxy/zaproxy:stable zap-webswing.sh`

## Blog post
  
For more details see the Blog post: [Run ZAP without Java using Docker and Webswing](/blog/2021-02-03-run-zap-without-java-using-docker-and-webswing/)
