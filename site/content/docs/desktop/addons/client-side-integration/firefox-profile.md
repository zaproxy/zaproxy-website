---
# This page was generated from the add-on.
title: Client Side Integration - Firefox Profile
type: userguide
weight: 5
---

# Client Side Integration - Firefox Profile

This [add-on](/docs/desktop/addons/client-side-integration/) creates a Firefox profile called 'zap-client-profile' and sets it as the default profile that ZAP will use. This profile enables the ZAP Firefox extension for all sites.


If you choose to use another profile then you will need to manually approve the ZAP extension for every
site you use it for, every time you launch a browser from ZAP.


This is a Firefox restriction - for more details see Bugzilla
[Bug 183609](https://bugzilla.mozilla.org/show_bug.cgi?id=1836309).

## Custom Containers

If you want to use the ZAP Firefox extension in your own containers then you may find that it does not work out of the box.


It should work fine in the [ZAP Docker Images](/docs/docker/) as the
'zap-client-profile' is added to them.
If you create your own container images then you may need to include it as well.


For more information see

* The Docker [firefox](https://github.com/zaproxy/zaproxy/tree/main/docker/firefox) directory
* The nightly [docker build file](https://github.com/zaproxy/zaproxy/blob/main/docker/Dockerfile-live)
