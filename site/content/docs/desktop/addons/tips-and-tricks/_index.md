---
# This page was generated from the add-on.
title: Tips and Tricks
type: userguide
weight: 1
cascade:
  addon:
    id: tips
    version: 14.0.0
---

# Tips and Tricks

This add-on adds a 'help' menu item which displays useful ZAP tips and tricks.  
Tips are also shown in the splash screen on start up.

## Full list of tips

Add your target application to a Context using the 'right click' menu: 'Include in Context'.  

This allows you tell ZAP more about the target, such as the authentication, the users and the technology it uses.

Click on the 'gear' icon on the right hand side of many tabs to quickly access the setting for that feature.

[Docker Support](/docs/docker/)

Does your application use anti CSRF tokens?  

Make sure you have configured ZAP to handle them via the 'Options / Active Scan' screen.

If you are getting too many false positives try changing the threshold for that scan rule to High.  

But also report the problem to us via the ZAP Users Group or Issues so we can investigate it - both of which are linked off the 'Online' menu

Install the Retire add-on from the ZAP Marketplace to detect insecure versions of JavaScript libraries using the database from Retire.js.

Install the SAML Add-on from the ZAP Marketplace to detect, show, edit and fuzz SAML requests.

Install the accessControl add-on from the ZAP Marketplace to automate testing of your application's access control.

Install the beta active and passive scan rules to find more potential issues.  

There are also alpha active and passive scan rules but obviously they may be less stable.

Install the sequence add-on from the ZAP Marketplace to scan pages that must be visited in a specific order for the full functionality to be accessible.

Manual browse indicator - Pages found by the spiders and forced browser are flagged in the Sites tree with the relevant icon. This icon disappears when you visit that page manually.

New to ZAP?  

Download the 'Getting Started with ZAP' guide from the ZAP Marketplace.

POST requests have a 'right click' menu for generating an anti CSRF test form

Right click everywhere.  

Highlight text and right click it.  

A lot of ZAP functionality is context sensitive as best accessed this way.

Save your ZAP session at the start of a test rather than at the end - the session is stored in a db which will be updated all of the time so you wont have to save it again.

The 'Show / enable' fields 'lightbulb' button on the main toolbar will make hidden fields visible and allow you to edit disabled fields.

The Search tab allows you to find string in Fuzz results - it supports regex expressions and inverse matching.

The majority of ZAP's tabs are now hidden by default so that the UI is less cluttered.  

You can show and hide all of the tabs via buttons on the main toolbar.  

You can also 'pin' any tab you like so that it stays visible even after a restart.

There are a large number of fuzzing files available in the ZAP Marketplace in the 'Directory List \*', 'Fuzzdb files' and 'SVN Digger files' add-ons.

There are lots of resources linked off the 'Online' menu, including the ZAP Homepage, User and Developer groups

There is a repository of ZAP scripts at https://github.com/zaproxy/community-scripts  

If you clone a local copy then you can add all of them to ZAP via the Scripts Option pane.  

You can also upload your own scripts via pull requests - the more the better!

Try different UI layouts via the buttons on the main toolbar.

Use keyboard shortcuts to speed up your testing - you can define your own combinations via 'Options / Keyboard' which also generates printable shortcut cheatsheets.

Want to chat to someone about ZAP?  

Many of the ZAP core developers hang out on the Libera Chat #zaproxy irc channel: https://web.libera.chat/#zaproxy

Want to script ZAP in a scripting language other than Java Script and Zest?  

Check the ZAP Marketplace for other languages like python and ruby.  

If your preferred scripting language isnt yet available then get in touch - its fairly easy to add support for other languages.

You can change the syntax highlighting used for the Request, Response and Script Console tabs via the 'right click' 'Syntax' menus.

You can compare 2 requests or responses by selecting them both, 'right clicking' and selecting one of the 'Compare 2..' menu items.

You can export all of the URLs recorded by ZAP using the top level menu: "Report / Export All URLs to a File..."

You can import URLs contained in a text file using the importurls add-on available on the ZAP Marketplace

You can invoke 3rd party tools like sqlmap and nmap from within ZAP, passing across a wide range of contextual information.  

Just configure the applications you want to invoke in the "Options / Applications" screen.

You can reorder table columns by dragging and dropping them.  

You can also select which columns are show via the icon just above the scroll bar on the right hand side of each table.

You can search for text in any text area, including the Request and Response tabs, using the 'right click' 'Find...' menu.

You can tell ZAP to access an app using a specified user.  

To do that you need to add your app to a Context and then define the authentication and user details.

You can tell ZAP to load all of the scripts in a set of directories via the Scripts Option page.  

See the help for details of the directory structure.

ZAP can automatically check for updates - turn it on via the 'Options / Check for Updates' screen.  

If you dont want it to happen automatically then make sure you manually check for updates frequently via the 'Manage Add-ons' main toolbar button as we continually add new features and fix issues.

ZAP can display, intercept and even fuzz client side messages including postMessages - 'right click' a subtree in the Sites tree and select a suitable submenu under 'Monitor clients'.  

Force a browser refresh and your open pages will be displayed in the 'Clients' tab along with all of the client side messages they generate.

ZAP has comprehensive help pages accessible via the 'Help / ZAP User Guide' menu.  

The F1 key will also bring up the help pages and take you straight to the relevant section for the selected tab.

Zest scripts are a great way to automate tasks.  

Zest is ZAP's graphical macro language, but provides programming features like conditionals and loops.  

Use the 'Record a new Zest script...' button on the main toolbar to quickly record a new Zest script.  

You can also 'right click' requests to add them to Zest scripts.
