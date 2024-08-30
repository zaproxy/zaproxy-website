---
title: "Spider News"
summary: >
  News about changes to the Traditional Spider for the up-coming release.
images:
- https://www.zaproxy.org/blog/2022-08-30-spider-move/images/zapbot.spider.png
addSocialPreview: true
type: post
date: "2022-08-30"
authors:
    - thorin
---

# Traditional Spider News

For the upcoming stable release of ZAP a number of changes have been made to the Traditional Spider which are currently available for testing in the weekly releases.

## Moved to an Add-on

To facilitate more frequent functional enhancements and bug fixes the core Spider has been moved to an add-on which means such changes are no longer bound to core/stable releases. Other add-ons which use Traditional Spider functionality have also been re-worked to support the Spider add-on, including: Quick Start, Form Handler, GraphQL, OpenAPI, SOAP, and the Automation Framework. Please help us test this out by using a [weekly release](/download/#weekly).

**Note**: Some Third Party add-ons which use the Spider will stop working with the release of 2.12. Please get in-touch via the [Developer Group](https://groups.google.com/g/zaproxy-develop) if you have questions about updating your add-on(s) to work in 2.12.

## Functional Improvements for 2.12

A large number of functional improvements have been made since 2.11. Most of which have been a result of efforts related to [Issue 7152](https://github.com/zaproxy/zaproxy/issues/7152).
The following table lists the changes in the Spider's behaviour after said updates.

The next weekly will include changes allowing users to specify [Irrelevant parameters](https://github.com/zaproxy/zaproxy/pull/4398) which the Spider should ignore when [determining what resources were already visited](/docs/desktop/ui/dialogs/options/spider/#query-parameters-handling).

| Before                                                                                                                                  | With                                                                                                                                                                                                                |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Base - Proper handling                                                                                                                  | Base - Proper handling                                                                                                                                                                                              |
| A, Link, Area - ‘href’ attribute                                                                                                        | A, Link, Area - 'href' attribute                                                                                                                                                                                    |
| Frame, IFrame, Script, Img - ‘src’ attribute                                                                                            | Applet, Audio, Embed, Frame, IFrame, Input, Script, Img, Video - 'src' attribute                                                                                                                                    |
| Meta - ‘http-equiv’ for ’location’ and ‘refresh’                                                                                        | Meta - 'http-equiv' for 'location', 'refresh' and 'Content-Security-Policy', 'name' for 'msapplication-config'                                                                                                      |
|                                                                                                                                         | Applet - 'codebase', 'archive' attributes                                                                                                                                                                           |
|                                                                                                                                         | Img - 'longdesc', 'lowsrc', 'dynsrc', 'srcset' attributes                                                                                                                                                           |
|                                                                                                                                         | Isindex - 'action' attribute                                                                                                                                                                                        |
|                                                                                                                                         | Object - 'codebase', 'data' attributes                                                                                                                                                                              |
|                                                                                                                                         | Svg - 'href' and 'xlink:href' attributes of 'image' and 'script' elements                                                                                                                                           |
|                                                                                                                                         | Table - 'background' attribute                                                                                                                                                                                      |
|                                                                                                                                         | Video - 'poster' attribute                                                                                                                                                                                          |
| Form - proper handling of Forms with both GET and POST method. The fields values are generated validly, including HTML 5.0 input types. | Form - proper handling of Forms with both GET and POST method. The fields values are generated validly, including HTML 5.0 input types 'form', 'formaction', 'formmethod' attributes of buttons are also respected. |
| Comments - Valid tags found in comments are also analyzed, if specified in the Options Spider screen                                    | Comments - Valid tags found in comments are also analyzed, if specified in the Options Spider screen                                                                                                                |
|                                                                                                                                         | Import - 'implementation' attribute                                                                                                                                                                                 |
|                                                                                                                                         | Inline string - 'p', 'title', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', and 'blockquote' tags                                                                                                                       |
|                                                                                                                                         | SVG image files are parsed to identify HREF attributes and extract/resolve any contained links.                                                                                                                     |

&nbsp;

## Coverage Improvements

ZAP is being regularly tested against an ever increasing number of [synthetic benchmarks/apps](/docs/scans/). As a result of the improvements outlined above ZAP has gone from a score of 50% to 80% with the current weekly functionality against [Google's Security Crawl Maze](/docs/scans/crawlmaze/). Plus more still coming, like this [PR - Spider: blockquote tags, param tags, base tag, strings in html](https://github.com/zaproxy/zap-extensions/pull/3975) from [karthikuj](https://github.com/karthikuj).

## Future Plans

I ([@kingthorin](https://github.com/kingthorin)) plan to add `.DS_Store` file parsing. We will continue to make improvements based on Crawl Maze and other synthetic benchmarks (and real world encounters). Best of all we'll be able to get these to YOU faster and more frequently now that it's all in an add-on.
