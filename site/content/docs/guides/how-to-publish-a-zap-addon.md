---
title: How to Publish a ZAP Add-on
type: page
---

ZAP is a community project and we welcome contributions, especially new add-ons which add to 
ZAP's capabilities.

This is the process to follow if you would like to publish your own add-on on the 
[ZAP Marketplace](/addons/).

### Create Your Add-on

You can create your add-on in any way, but we recommend copying the 
[zaproxy/addon-java](https://github.com/zaproxy/addon-java) repo as a good starting point.

The main [README](https://github.com/zaproxy/addon-java?tab=readme-ov-file#zap-template-java-add-on) 
in that repo explains what you need to do next.

If you would like to implement your add-on in another JVM compatible language then please get in touch 
with us via the [ZAP Developer Group](https://groups.google.com/group/zaproxy-develop).
ZAP add-ons can include scripts written in any of the scripting languages supported by ZAP.

### Raise a 3rd Party Add-on Issue

When you are happy that your add-on is ready to be published then raise a 
[3rd party add-on](https://github.com/zaproxy/zaproxy/issues/new?template=third-party-addon.yml)
issue and fill in all of the fields.

### The Review

The ZAP team will nominate someone in the team to lead the review and assign your issue to them.

They will clone your repo into https://github.com/zaproxy-addons and let you know that the review process has started.

The review lead will ensure that at least 2 of the Core Team review your add-on and then will update the issue
to let you know if it passed the review.

See below for some of the review criteria.

If your add-on fails the review then the review lead will explain what you need to change. 
Feel free to ask questions if anything is unclear.

Once you have fixed any failures (and optionally any warnings) then update the issue and the review process will be resumed.

### Publishing the Add-on

Once your add-on has passed the review then a new release will be created in our clone of your repo and
it will be published on the ZAP Marketplace.

If you have added any help files then they will also be published on the website.

The review lead will then let you know that your add-on has been published and will close the issue.

### Review Criteria

Potential Failures
* Wrong add-on URL (add-on manifest)
* Wrong repo URL (add-on manifest)
* No useful or original functionality
* Unexpected functionality
* Code that is difficult to understand or contains obfuscated portions
* Unsolicited requests made
* Requests made with functionality outside of ZAP
* Excessive logging at INFO level
* Prints to stdout
* Unwanted/unnecessary dependencies
* Dynamically un/loads incorrectly
* Scan rules without reserved IDs
* Excessive and misleading marketing in the help
* Wrong add-on status (ex: going straight to “release”)

Warnings
* Not I18Ned
* Missing help
* Unclear usage/invocation (without having read the code)
* Making outgoing connections without using the ZAP upstream proxy settings

