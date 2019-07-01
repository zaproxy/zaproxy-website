---
title: "ZAP Weekly Releases"
type: post
draft: true
tags:
- TODO
date: "2012-10-22"
authors:
    - simon
---
I've been struggling with the question of ZAP releases.  
We've made loads of enhancements to ZAP recently, and I want them to be available to as wide an audience as possible.  
But I also want to make sure our 'full' releases remain as robust and stable as possible.  
I want to get the next full release (2.0.0) out of the door asap, but I still want to get a load more features into it.  
  
So I've discussed this with the other ZAP developers, and we've decided to do weekly ZAP releases from the source trunk.  
And thats starting today (Monday 22nd October) so theres a weekly release available now at:  
<http://code.google.com/p/zaproxy/downloads/list>  
  

###  How do 'weekly' releases differ from the 'full' releases?

  

  * No installers, just one cross platform archive (ZIP)
  * No release notes, although we will put info about some features on the [wiki](http://code.google.com/p/zaproxy/wiki/WeeklyReleases) and link to committed issues
  * No specific testing - they will be 'bleeding edge' - stuff may be broken
  * No guarantee that the help files will be up to date (although ideally it shouldnt be too far out)
  * They use a different default home directory to full releases, so they will not interfere with each other
  * Less localization (probably)

  

###  Who will these release be suitable for?

  * Anyone who wants to use the features we've added since 1.4.* but doesnt want the hassle of building ZAP from the source code
  * Anyone who would like to help test ZAP as its being developed

  

###  Who will these releases not be suitable for?

  * Anyone who has not used ZAP before (they would be better off with a full release)
  * Anyone building security distributions (ditto)
  * Anyone developing or extending ZAP (they should use the trunk)

  

###  What are some of the significant changes since the last full ZAP release?

  * Completely rewritten spider (c/o Cosmin Stefan and the [GSoC](//www.blogger.com/blogger.g?blogID=7718368180479193046 "The tiddler 'GSoC' doesn't yet exist"))
  * New Ajax Spider (using Crawljax, c/o Guifre Ruiz and the [GSoC](//www.blogger.com/blogger.g?blogID=7718368180479193046 "The tiddler 'GSoC' doesn't yet exist"))
  * Web sockets support (c/o Robert Koch and the [GSoC](//www.blogger.com/blogger.g?blogID=7718368180479193046 "The tiddler 'GSoC' doesn't yet exist"))
  * Performance improvements (both speed and memory)

See <http://code.google.com/p/zaproxy/wiki/WeeklyReleases> for a more complete list.  
  

###  Anything else you should know?

  * The weekly releases will use Java 1.7 as opposed to Java 1.6 - you'll need to install this yourself if you havnt already got it

  

###  Want to know some more details?

  * The plan is to generate and upload the releases every Monday morning.
  * Thats not guaranteed - a weekly release could be delayed (or completely skipped) if, for example, there were significant problems with the code in the trunk.
  * The releases will be built from the trunk, but will include selected extensions from zap-extensions.
  * The release number is be based on the date generated, eg D-2012-10-15 ([YYYY-MM-DD](//www.blogger.com/blogger.g?blogID=7718368180479193046 "The tiddler 'YYYY-MM-DD' doesn't yet exist"))
  * The check-for-updates mechanism has been updated so that weekly releases check for new weekly releases, while full releases still just report new full releases. Unless you disable it of course.
  * New weekly releases will not be announced on the twitter @zaproxy account, new full releases will still be announced there.
  * Issues will stay as Committed until they are included in full release, but they will have the label '[Weekly-Build](http://code.google.com/p/zaproxy/issues/list?can=2&q=label%3AWeekly-Build)' 

Feedback, as always, much appreciated!  

