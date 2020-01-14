---
title: "How to connect to an HTTPS site that reports a handshake failure?"
type: faq
category: Networking
weight: 4
---


First of all try checking the 'Enable unsafe SSL/TLS renegotiation' checkbox
in the Certificate Options screen and trying again.

Second check if you've enabled SSLv2Hello in the outbound [connection
options](/docs/desktop/ui/dialogs/options/connection/). If so, disable SSLv2Hello and
reload the content to see if the issue is resolved.

If this doesn't help and an HTTPS site reports a handshake failure then try
installing the 'Java Cryptography Extension (JCE) Unlimited Strength
Jurisdiction Policy Files':

  * Java 8 : <http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html>
  * Java 9 : Should not require the JCE Policy Files, per [JDK 9 Readme](http://www.oracle.com/technetwork/java/javase/terms/readme/jdk9-readme-3852447.html#jce) (as reviewed 20171212):

> The default JCE policy files bundled in this Java Runtime Environment allow
for "unlimited" cryptographic strengths.

You will need to restart ZAP for these to take effect.

Note that on OS X we include the JRE with the ZAP application, so you'll need
to start ZAP with an installed JRE from the command line, or you can edit
`zap.sh` located under `/Applications/OWASP ZAP.app/Contents/Java` and comment
out the statement shown below(as of version 2.5.0), the script will launch
automatically using the JRE from the system:

    
    
    #if [ "$OS" = "Darwin" ]; then
    #  if [ -e ../PlugIns/jre*/Contents/Home/bin/java ]; then
    #    pushd ../PlugIns/jre*/Contents/Home/bin > /dev/null
    #    JAVA_PATH=`pwd -P`
    #    PATH="$JAVA_PATH:$PATH"
    #    popd > /dev/null
    #  fi
    #fi
    

Java 8 users note you may encounter SSLHandshakeException, on sites that
support RC4 ciphers. More info
[here](https://github.com/zaproxy/zaproxy/issues/1892#issuecomment-139906996),
and [here](http://stackoverflow.com/questions/32009083/javax-net-ssl-sslhandshakeexception-handshake-failure-when-using-jmeter-with-ss).
Solution(s): Disable RC4 on the server.

If you're in a corporate or business environment that normally requires the
use of an Enterprise proxy you can have ZAP use it as well via the [Options :
Connections screen](/docs/desktop/ui/dialogs/options/connection/). If ZAP can't actually get to the
destination (because use of the corporate proxy is required) this can
sometimes manifest as an SSL/TLS negotiation failure.

If this doesn't help then get in touch via the [User
Group](https://groups.google.com/forum/#!forum/zaproxy-users).

* * *

##  Error "java.lang.RuntimeException: Could not generate DH keypair"

The error and the likely cause is described in
[#2626](https://github.com/zaproxy/zaproxy/issues/2626): Java 8 does not
support DH parameters with more than 2048 bit. It works with Java 9 (Debian:
