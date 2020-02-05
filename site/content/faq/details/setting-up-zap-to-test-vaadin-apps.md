---
title: "Setting up ZAP to Test Vaadin Apps"
type: faq
category: Technologies Supported
weight: 7
---

The information in this FAQ is based on details from: 
[This user group thread](https://groups.google.com/forum/#!topic/zaproxy-users/wXAX_5MmIxA)

The Vaadin framework makes heavy use of JavaScript, so it seems the Ajax Spider is the way to go.

As you work to figure things out and get them configured correctly it makes sense to starting by proxying your browser through ZAP, identifying the http session and then flagging it as the 'active session' before starting the Ajax Spider.

You may need to look at the source of various components to make sure the spider can effectively navigate your app.

For example use the Firefox 'right click' 'Inspect Element' for this, but you can also use the ZAP Response tab or the View Source in your browser of choice.
The login button is defined as:
```html
<div class="v-button v-widget primary v-button-primary" role="button" tabindex="0">
<span class="v-button-wrap"><span class="v-button-caption">Sign In</span></span></div>
```
So its a div. Great. Why use HTML conventions when you can do anything you like? ;)
Anyway, this means that the default elements (a, button, input) won't be enough, so in Options / AJAX Spider uncheck 'Click default elements only (a, button, input)'. This might actually be enough to make it all work.
However for me the loading time looked like it was over 1 second, so I increased the Options / AJAX Spider 'Event' and 'Reload' wait times.

This then meant that crawling from [https://demo.vaadin.com/dashboard](https://demo.vaadin.com/dashboard) with the Ajax Spider worked - initially it just keeps reloading the login page but eventually it did get to the real content. It takes time because it now has to click on every div as it can't know which will do things and which won't.