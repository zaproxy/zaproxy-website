---
title: "ZAP Updates - February 2026"
summary: >
  February was another busy month for the ZAP project, with improvements across browser automation, GraphQL and the Encode/Decode/Hash add-on.
images:
- https://www.zaproxy.org/blog/2026-03-02-zap-updates-february-2026/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2026-03-02"
authors:
- simon
---

## Highlights

February was another busy month for the ZAP project, with improvements across browser automation, GraphQL and the Encode/Decode/Hash add-on.

### Circular Type References in GraphQL Detection

At the start of the month [Akshath](/authors/akshath/) explained how you can now use ZAP to
[Detect Circular Type References in GraphQL Schemas](/blog/2026-02-06-detecting-graphql-cycles/).

These are a security concern because attackers can exploit these circular references to craft deeply recursive queries, potentially causing Denial of Service (DoS) conditions on your GraphQL server.

### Using Encode/Decode/Hash Add-on with Cyber Chef

[Rick](/authors/thorin/) wrote a detailed blog post which demonstrated how you can 
[use CyberChef with ZAP's Encode/Decode/Hash add-on](/blog/2026-02-17-encoder-cyberchef-via-scripts/).

This gives you access to CyberChef's huge set of recipes right where you need them.

### Custom Browser and Preferences Support

Last week we added support for [Custom Browsers and Preferences](/blog/2026-02-24-custom-browsers-and-preferences/).

This enhancement gives you far more control over how ZAP drives browsers for manual exploring, the modern spiders, automation, and authenticated testing scenarios.

It is also key to our plans to provide much better support for 3rd party tools that run in the browser.
More new about that hopefully soon! 

### Move to Java 21

We [announced](https://groups.google.com/g/zaproxy-users/c/HHJHAaq1V7g/m/xf7AoIq9AQAJ) that ZAP 2.18.0 will require a minimum of Java 21.

This will allow us to use new Java features and performance improvements, as well as Java libraries which no longer support older versions.

The nightly Docker image has been updated to Java 21, as will be today's weekly release.

As long as no problems are reported then we plan to move the stable Docker image to use Java 21 as well, from the start of April.

## Ongoing Work

### Improved Modern App Crawling

Ensuring that ZAP can crawl modern web apps as effectively as possible is a priority for us.
Work is progressing well, but there is a lot to do, so we will post updates when there are new features available.

### Scan Rules

The [Cloud Metadata Potentially Exposed](/docs/alerts/90034/) rule has been updated to reduce 
false positives and to add support for cloud metadata from IBM and OpenStack.

If you get any more false positives for this rule then please report them to us ASAP.

As a reminder, if you get false positives with any of the scan rules then follow the FAQ: [How do I handle a False Positive?](/faq/how-do-i-handle-a-false-positive/)

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

* [giveen](https://github.com/giveen)
* [ceylanb](https://github.com/ceylanb)
* [e1l1ya](https://github.com/e1l1ya)
* [Arunodoy18](https://github.com/Arunodoy18)
* [cx-daniel-gabay](https://github.com/cx-daniel-gabay)
* [GerhardBotha97](https://github.com/GerhardBotha97)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 13 commits to main and 13 commits to all branches. On main, 39 files have changed and there have been 875 additions and 544 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 80 commits to main and 80 commits to all branches. On main, 879 files have changed and there have been 79,537 additions and 34,406 deletions.

A total of [53 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2026-02+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In February 2026, we released updated versions of 11 add-ons:

##### GraphQL Support
**v0.31.0**  
Fixed
- Tech Detection integration was not working due to handler reset on each run.

**v0.30.0**  
Added
- GraphQL Cycle detection: Imported schemas are processed for circular type references, and an alert is created for each unique circular relationship that is found.
  The cycle detection exhaustiveness and the maximum number of alerts raised are configurable.

##### Linux WebDrivers
**v184**  
Changed
- Update ChromeDriver to 146.0.7680.31.

**v183**  
Changed
- Update ChromeDriver to 145.0.7632.117.

**v182**  
Changed
- Update ChromeDriver to 145.0.7632.77.

**v181**  
Changed
- Update ChromeDriver to 145.0.7632.76.

**v180**  
Changed
- Update ChromeDriver to 145.0.7632.67.

**v179**  
Changed
- Update ChromeDriver to 145.0.7632.46.

**v178**  
Changed
- Update ChromeDriver to 144.0.7559.133.

**v177**  
Changed
- Roll back ChromeDriver to 144.0.7559.109.

##### OpenAPI Support
**v52**  
Changed
- Enable Swagger Secret Detector Script Scan Rule, the JS Engine memory leak has been addressed (Issue 9230).

##### Passive scanner rules (beta)
**v49**  
Changed
- Insufficient Site Isolation Against Spectre Vulnerability alerts to have unique alert names.

##### Retire.js
**v0.54.0**  
Changed
- Updated with upstream retire.js pattern changes.
- Now only loads the data once (Issue 9103).

##### Selenium
**v15.44.0**  
Added
- Support for custom browsers
- Support for browser preferences
Changed
- Update Selenium to version 4.41.0.
Removed
- Support for IE and disabled Safari.

##### Spider
**v0.19.0**  
Changed
- Maintenance changes.

Fixed
- Handle persistence errors and forced shutdown in automation job.
- Address memory leak.

##### Technology Detection
**v21.53.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Dependency update.

##### Windows WebDrivers
**v185**  
Changed
- Update ChromeDriver to 146.0.7680.31.

**v184**  
Changed
- Update ChromeDriver to 145.0.7632.117.

**v183**  
Changed
- Update ChromeDriver to 145.0.7632.77.

**v182**  
Changed
- Update ChromeDriver to 145.0.7632.76.

**v181**  
Changed
- Update ChromeDriver to 145.0.7632.67.

**v180**  
Changed
- Update ChromeDriver to 145.0.7632.46.

**v179**  
Changed
- Update ChromeDriver to 144.0.7559.133.

**v178**  
Changed
- Roll back ChromeDriver to 144.0.7559.109.

##### Zest - Graphical Security Scripting Language
**v48.12.0**  
Added
- UI support for Zest script options.
- Now supports authentication for client side scripts.

Fixed
- Bug which prevented client side scripts from being recorded in ZAP.

Changed
- Update Zest library to 0.35.0:
  - Migrate JSON serialization from Gson to Jackson.

##### macOS WebDrivers
**v184**  
Changed
- Update ChromeDriver to 146.0.7680.31.

**v183**  
Changed
- Update ChromeDriver to 145.0.7632.117.

**v182**  
Changed
- Update ChromeDriver to 145.0.7632.77.

**v181**  
Changed
- Update ChromeDriver to 145.0.7632.76.

**v180**  
Changed
- Update ChromeDriver to 145.0.7632.67.

**v179**  
Changed
- Update ChromeDriver to 145.0.7632.46.

**v178**  
Changed
- Update ChromeDriver to 144.0.7559.133.

**v177**  
Changed
- Roll back ChromeDriver to 144.0.7559.109.

