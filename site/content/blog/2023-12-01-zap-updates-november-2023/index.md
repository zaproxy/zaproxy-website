---
title: "ZAP Updates - November 2023"
summary: >
  Improved modern web app handling and lots of videos.
images:
- https://www.zaproxy.org/blog/2023-12-01-zap-updates-november-2023/images/zapbot-monthly-updates-social.png
type: post
tags:
- blog
- update
date: "2023-12-01"
authors:
- simon
---

## Highlights

### Modern Web App Handling

We published the blog post [Handling Modern Web Apps Better - Part 1](/blog/2023-11-03-handling-modern-web-apps-better-part1/)
and released a video [ZAP Chat 05 Modern Apps Part 1](https://www.youtube.com/watch?v=Rq_d7OLmMfw) 
which show how we are starting to improve how ZAP can handle modern web apps more effectively.

We also enhanced to Client add-on to support [passive scanning](/docs/desktop/addons/client-side-integration/pscan/) which adds 3 more alerts which ZAP can report:

* [Information Disclosure - Information in Browser Storage](/docs/alerts/120000/)
* [Information Disclosure - Sensitive Information in Browser Storage](/docs/alerts/120001/)
* [Information Disclosure - JWT in Browser Storage](/docs/alerts/120002/)

### ZAP Chat Video Series

We released 5 (!) new [ZAP Chat](/zap-chat/) videos last month:

* [ZAP Chat 05 Modern Apps Part 1](https://www.youtube.com/watch?v=Rq_d7OLmMfw)
* [ZAP Chat 06 Automation Introduction](https://www.youtube.com/watch?v=PnCbIAnauD8)
* [ZAP Chat 07 Automation Framework Part 1](https://www.youtube.com/watch?v=19Rptj2be1Y)
* [ZAP Chat 08 Automation Framework Part 2](https://www.youtube.com/watch?v=1fcpU54N-mA)
* [ZAP Chat 09 Automation Framework Part 3](https://www.youtube.com/watch?v=4phnMy9iCPY)

## Ongoing Work

### Modern Web App Handling
See the highlights above!

### Improved Automation Capabilities
This month we started the [Getting Further with ZAP Automation](/docs/getting-further/automation/) guide.

We also made good progress on a new GitHub Action which will support the [Automation Framework](/docs/automate/automation-framework/) - an early version of that will hopefully be released soon!

### Usability Enhancements
We have started discussions around improving the usability of the ZAP GUI and minor enhancements are already on their way.

## Website Updates

The following new pages were added to the website in November.

* Blog: [ZAP Updates - October 2023](/blog/2023-11-02-zap-updates-october-2023/)
* Blog: [Handling Modern Web Apps Better - Part 1](/blog/2023-11-03-handling-modern-web-apps-better-part1/)
* Blog: [Technology Support](/blog/2023-11-20-technology-support/)
* Docs: [Client Side Integration - Passive Scan Rules](/docs/desktop/addons/client-side-integration/pscan/)
* Docs: [Getting Further with ZAP Automation](/docs/getting-further/automation/)
  * [Automation Guide - Options](/docs/getting-further/automation/automation-options/)
  * [Automation Guide - Exploring Your App](/docs/getting-further/automation/exploring-your-app/)
* FAQ: [How do I use Chrome with ZAP in Docker?](/faq/how-do-i-use-chrome-with-zap-in-docker/)


## New Contributors

Congratulations to:

* [Yiannis](/docs/team/yiannis/) who was added to the [Extended Team](/docs/team/)
* [HAHWUL](https://twitter.com/hahwul) who was added to the [ZAP Evangelists](/evangelists/)

A very warm welcome to the people who started to contribute to ZAP this month!

* [Sébastien Amelinckx](https://github.com/Sebitosh)
* [Zuhair Abid](https://github.com/zuhairabid)
* [Adrean Boyadzhiev](https://www.linkedin.com/in/adrean-boyadzhiev)
* [Divyansh Jain](https://twitter.com/itsdivyanshjain)
* [Amit Panwar](https://github.com/amitpanwar789)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 6 authors have pushed 24 commits to main and 24 commits to all branches. On main, 94 files have changed and there have been 961 additions and 236 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 79 commits to main and 79 commits to all branches. On main, 865 files have changed and there have been 16,117 additions and 2,653 deletions. 

A total of [135 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2023-11+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released add-ons - Full Changelog
In November 2023, we released updated versions of 16 add-ons:

##### Ajax Spider
**v23.18.0**  
Added
- Add context menu item to Contexts tree to show the AJAX Spider dialogue with the selected Context.

Changed
- Add icon to the Tools menu item.
- Scale icons.

##### Alert Filters
**v19**  
Changed
- Allow to filter by alert reference (Issue 7438).
- Allow to specify custom IDs through the GUI.
- Maintenance changes.

Fixed
- Do not fail to import or load a context with invalid alert filters.
- Incorrect warning about 'Unrecognised parameter' for deleteGlobalAlerts.
- Persist context filter data.

##### Automation Framework
**v0.34.0**  
Added
- Show column control in the Automation tab to allow to show/hide columns and auto resize them (`Pack All Columns`).

Fixed
- Save context.

##### Call Home
**v0.10.0**  
Changed
- Add error stats to telemetry.

##### Client Side Integration
**v0.7.0**  
Added
- Support for base64 decoding in existing scan rules.
- Passive scan rule: JWT in Browser Storage.
- Additional input field data returned from the extension.

Changed
- Updated the Firefox extension to v0.0.8.

**v0.6.0**  
Added
- Support for passive scanning
- Passive scan rules:
  - Information Disclosure - Information in Browser Storage
  - Information Disclosure - Sensitive Information in Browser Storage

Changed
- Dropped "to Clipboard" from ZAP copy menu items (Issue 8179).
- Changed to add back '#' nodes.

**v0.5.0**  
Added
- Client History and Details context menu items.

Changed
- Maintenance changes.

Fixed
- Do not use white background in Client Details and show Client Map icons properly when using Mac OS X look and feel (Issue 8175).

##### Common Library
**v1.19.0**  
Added
- A generic UI component for keeping menu items sorted.

Changed
- Add solution to 'Brute Forcing Credit Card Information', 'Content Spoofing', 'Credential and Session Prediction', 'XML Injection' and 'XML External Entities' vulnerabilities (Issue 8056).

##### Custom Payloads
**v0.13.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.
- Promoted to Beta.

Added
- Initial API support:
    - Actions
        - Enable payloads.
        - Disable payloads.
        - Enable payload.
        - Disable payload.
        - Add payload.
        - Remove payload.
    - Views:
        - Payload categories.
        - Payloads (optionally filtered by category).

##### GraphQL Support
**v0.21.0**  
Changed
- Dependency updates.
- Maintenance changes.

Fixed
- The query generator was not using lists and non-null fields to generate queries when the lenient maximum query depth
  criteria was met.

##### Import/Export
**v0.8.0**  
Changed
- Keep the Export menu items sorted alphabetically.

##### Network
**v0.13.0**  
Added
- On weekly releases and versions after 2.14, handle content encodings and add `br` content encoding on supported OSes (Issue 2198).

Fixed
- Handle cookies like browsers, mostly send what is received (Issues 1232 and 7874).
- Do not set content-length to SSE responses, which would end up being closed prematurely.

##### Passive scanner rules
**v53**  
Changed
- The Application Error Disclosure rule no longer considers responses that contain ISO control characters (those which are likely to be binary file types).
- The Time Stamp Disclosure rule now includes the header field name as Parameter in alerts when a time stamp is identified in a header value (Issue 8160).
- Maintenance changes.

##### Replacer
**v16**  
Changed
- Allow to replace (change or remove) the Host header (Issue 5475).

##### Retire.js
**v0.27.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### Script Console
**v43**  
Added
- Allow setting the tab size and whether to use tabs or spaces for indentation in the console.
  The old defaults were to use the tab character with a tab size of 5.
  The new defaults are to use spaces with a tab size of 4.
- A gear button to the console toolbar to open the Script Console options screen.
- An enable / disable script button to the console toolbar to toggle enabling the open script.
- Options to allow editing the font name and size used in the console (Issue 8065).
- The shortcut `ctrl+S` (`cmd+S` on macOS) to save the script in the console.

Changed
- The "Save Script" button was moved to the console toolbar.

Fixed
- Saving the script was causing the "Keep or Replace" dialog to show, even when no external changes were made to the script.

##### Selenium
**v15.16.0**  
Changed
- Update Selenium to version 4.15.0.

Fixed
- Add vertical scroll bar to the options panel to prevent the options from being hidden when resizing the Options dialogue (Issue 8178).

##### Wappalyzer - Technology Detection
**v21.27.0**  
Changed
- Updated with enthec upstream icon and pattern changes.

