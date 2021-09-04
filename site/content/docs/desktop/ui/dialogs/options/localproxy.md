---
# This page was generated from the add-on.
title: Options Local Proxies screen
type: userguide
weight: 20
---

# Options Local Proxies screen

This screen allows you to configure the addresses and ports
on which ZAP accepts incoming connections.

## Local Proxy

By default ZAP will listen on one local address and port, and these are the address and port that you must configure your browser to use as a proxy.

### Address

The local address which ZAP will use. All of the available addresses are automatically identified.

### Port

The port on which ZAP will listen.

### Behind NAT

Indicates that the Local Proxy (ZAP) is behind NAT. When selected ZAP will attempt to determine the public IP address, to properly detect and handle requests with the public IP address (for example, to be served by the ZAP API).

**Note:** This option is only supported when ZAP is running in an AWS EC2 instance.
ZAP will obtain the public IP address from
[AWS EC2
instance's metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#working-with-ip-addresses).  
ZAP should be started with this option enabled if access to the API, through the public IP address, is required:

> zap.sh -daemon -port 8080 -host 0.0.0.0 -config proxy.behindnat=true
> Also, the [API](/docs/desktop/ui/dialogs/options/api/) needs to be configured to accept external IP addresses (i.e. the IP address from where ZAP is being accessed).

### Remove Unsupported Encodings

Allows the proxy to remove unsupported encodings from the "Accept-Encoding" request-header field, so no (unsupported) encoding transformations are done to the response.  
This option should be always enabled unless when testing the encoding transformations.  
The messages encoded with unsupported encodings will not be correctly scanned (either by passive and active scanners).

### Security Protocols

Allows to choose the SSL/TLS versions enabled for incoming connections (for example, from browsers). At least one version must be enabled, versions unsupported by the JRE will be unselected and disabled.  
The option SSLv2Hello must be selected in conjunction with at least one SSL/TLS version.  
The security options apply to both the main and all of the additional proxies.

## Additional Proxies

You can add as many additional addresses and ports for ZAP to listen on as you like.  
This can be useful when testing mobile applications - you can proxy the mobile application via a Wi-Fi interface at the same time as using the backend site directly using a browser proxying through ZAP emulating a mobile user agent.

## Intercepting/Transparent Proxy

The local proxies can be used as intercepting/transparent proxies for both HTTP and HTTPS. For HTTPS the client applications (e.g. browser) need to use the TLS extension [Server Name Indication](https://tools.ietf.org/html/rfc6066#section-3). This allows you to set up a testing LANs (or VMs) where all HTTP and HTTPS traffic is proxied regardless of software settings.

For example, if you have a Linux machine you use for testing, you can do something like the following to forward all HTTP and
HTTPS traffic to a local proxy listening on `192.168.0.14:8080`:

    iptables -t nat -A OUTPUT -p tcp --dport 443 -j DNAT --to-destination 192.168.0.14:8080
    iptables -t nat -A OUTPUT -p tcp --dport 80 -j DNAT --to-destination 192.168.0.14:8080

## See also

|     |                                                      |                                                 |
| --- | ---------------------------------------------------- | ----------------------------------------------- |
|     | [UI Overview](/docs/desktop/ui/)                     | for an overview of the user interface           |
|     | [Options dialogs](/docs/desktop/ui/dialogs/options/) | for details of the other Options dialog screens |
