---
# This page was generated from the add-on.
title: Revisit
type: userguide
weight: 1
cascade:
  addon:
    id: revisit
    version: 6.0.0
---

# Revisit


Have you ever wanted to be able to browse an application you tested with ZAP at a specific time,
perhaps when you dont have access to it, or after its been changed in some way?  

If so then this add-on is for you!


The add-on allows you to instruct ZAP to return content from the ZAP history between specified
dates rather than forwarding the requests to the site.  

This allows you to apparently browse and use a website that you no longer have access to.  

It also allows you to see what it looked like at between specific times, which is useful if
the application has since changed.  



When returning pages from the ZAP history floating footers are injected into HTML pages to
give a visual clue that these pages are generated from ZAP.  

ZAP will return pages that were the result of both GET and POST requests as long as it finds ones that match.  

Pages only match if all URL and POST parameters are the same, ignoring the order and any known CSRF tokens.  

If no matching page can be found in the history then a custom 404 page is returned which will
include links to the same page if it has been invoked with different parameters or outside of the time period specified.  



This add-on adds right click menus to the Sites Tree:

### Enable Revisit

When selected a popup will be shown which asks for the start and end times to be used.  
The start time defaults to the time of the first request in the session.  
The end time defaults to the time of the last request in the session.  
If any of the time elements (for example 'day of the month') have not changed then those elements will be disabled.  
If the dialog OK button is pressed then the revisit functionality will be enabled for the selected site, and a 'calendar' icon added to the site node in the Sites Tree.

### Disable Revisit

When selected then the revisit functionality will be disabled for the selected site.

## API

The add on supports the following API endpoints:  

revisit / view / revisitList Returns the list of sites enabled for revisit  
revisit / action / revisitSiteOn Turns revisit on for the specified site. Dates must use the format: "yyyy/MM/dd HH:mm:ss"  
revisit / action / revisitSiteOff Turns revisit off for the specified site
