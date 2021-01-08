---
title: "ZAP Weekly Releases"
type: post
tags:
date: "2012-10-22"
authors:
    - simon
---
I've been struggling with the question of ZAP releases.  
We've made loads of enhancements to ZAP recently, and I want them to be available to as wide an audience as possible.  
But I also want to make sure our 'full' releases remain as robust and stable as possible.  
I want to get the next full release (2.0.0) out of the door asap, but I still want to get a load more features into it.  
  
So I've discussed this with the other ZAP developers, and we've decided to do weekly ZAP releases from the [`main` branch](https://github.com/zaproxy/zaproxy/tree/main/).  
And that's starting today (Monday 22nd October) so there's a weekly release available now in the [Download](/download/#weekly) page.
  

###  How do 'weekly' releases differ from the 'full' releases?

  * No installers, just one cross platform archive (ZIP)
  * No release notes, although it's possible to view the commit history/changes between releases, e.g. https://github.com/zaproxy/zaproxy/compare/w2019-11-11...w2019-11-18 
  * No specific testing - they will be 'bleeding edge' - stuff may be broken
  * No guarantee that the help will be up to date (although ideally it shouldn't be too far out)
  * They use a different default home directory to full releases, so they will not interfere with each other
  * Less localization (probably)

###  Who will these release be suitable for?

  * Anyone who wants to use the features we've added since 1.4.* but doesn't want the hassle of building ZAP from the source code
  * Anyone who would like to help test ZAP as it's being developed

###  Who will these releases not be suitable for?

  * Anyone who has not used ZAP before (they would be better off with a full release)
  * Anyone building security distributions (ditto)
  * Anyone developing or extending ZAP (they should use the `main` branch)

###  What are some of the significant changes since the last full ZAP release?

  * Completely rewritten spider (c/o Cosmin Stefan and the GSoC)
  * New Ajax Spider (using Crawljax, c/o Guifre Ruiz and the GSoC)
  * Web sockets support (c/o Robert Koch and the GSoC)
  * Performance improvements (both speed and memory)

###  Anything else you should know?

  * The weekly releases will use Java 1.7 as opposed to Java 1.6 - you'll need to install this yourself if you haven't already got it

###  Want to know some more details?

  * The plan is to generate and upload the releases every Monday morning.
  * That's not guaranteed - a weekly release could be delayed (or completely skipped) if, for example, there were significant problems with the code in the `main` branch.
  * The releases will be built from the `main` branch, but will include [selected add-ons](https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/weekly-add-ons.json).
  * The release number is be based on the date generated, e.g. D-2012-10-15 (YYYY-MM-DD)
  * The check-for-updates mechanism has been updated so that weekly releases check for new weekly releases, while full releases still just report new full releases. Unless you disable it of course.
  * New weekly releases will not be announced on the twitter [@zaproxy](https://twitter.com/zaproxy) account, new full releases will still be announced there.

Feedback, as always, much appreciated!  

