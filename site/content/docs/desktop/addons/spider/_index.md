---
# This page was generated from the add-on.
title: Spider
type: userguide
weight: 1
cascade:
  addon:
    id: spider
    version: 0.11.0
---

# Spider

The Spider is a tool that is used to automatically discover new
resources (URLs) on a particular Site. It begins with a list of URLs
to visit, called the seeds, which depends on how the Spider is
started. The Spider then visits these URLs, it identifies all the
hyperlinks in the page and adds them to the list of URLs to visit and
the process continues recursively as long as new resources are found.

The Spider can be configured and started using the [Spider dialogue](/docs/desktop/addons/spider/dialog/).

During the processing of an URL, the Spider makes a request to
fetch the resource and then parses the response, identifying
hyperlinks. It currently has the following behavior when processing
types of responses:

#### HTML

Processes the specific tags, identifying links to new resources:

* Base - Proper handling
* A, Link, Area, Base - 'href' attribute
* Applet, Audio, Embed, Frame, IFrame, Input, Script, Img, Video - 'src' attribute
* Blockquote - 'cite' attribute
* Meta - 'http-equiv' for 'location', 'refresh' and 'Content-Security-Policy', 'name' for 'msapplication-config'
* Applet - 'codebase', 'archive' attributes
* Img - 'longdesc', 'lowsrc', 'dynsrc', 'srcset' attributes
* Isindex - 'action' attribute
* Object - 'codebase', 'data' attributes
* Param - 'value' attribute
* Svg - 'href' and 'xlink:href' attributes of 'image' and 'script' elements
* Table - 'background' attribute
* Video - 'poster' attribute
* Form - proper handling of Forms with both GET and POST method. The fields values are generated validly, including [HTML
    5.0 input types](http://www.w3schools.com/html5/html5_form_input_types.asp) 'form', 'formaction', 'formmethod' attributes of buttons are also respected.
* Comments - Valid tags found in comments are also analyzed, if specified in the [Options
    Spider screen](/docs/desktop/addons/spider/options/)
* Import - 'implementation' attribute
* Inline string - 'p', 'title', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', and 'blockquote' tags

#### Robots.txt file

If set in the [Options Spider
screen](/docs/desktop/addons/spider/options/), it also analyzes the 'Robots.txt' file and tries to identify new resources using the specified rules. It has to be mentioned that the Spider does not follow the rules specified in the 'Robots.txt' file.

#### sitemap.xml file

If set in the [Options Spider screen](/docs/desktop/addons/spider/options/), the Spider also analyzes the 'sitemap.xml' file and tries to identify new resources.

#### SVN metadata files

If set in the [Options Spider screen](/docs/desktop/addons/spider/options/), the Spider should also parse SVN metadata files and tries to identify new resources.

#### Git metadata files

If set in the [Options Spider screen](/docs/desktop/addons/spider/options/), the Spider should also parse Git metadata files and tries to identify new resources.

#### .DS_Store files

If set in the [Options Spider screen](/docs/desktop/addons/spider/options/), the Spider should also parse .DS_Store files and tries to identify new resources.

#### OData Atom Format

OData content using the Atom format is currently supported. All included links (relative or absolute) are processed.

#### SVG Files

SVG image files are parsed to identify HREF attributes and extract/resolve any contained links.

#### Non-HTML Text Response

Text responses are parsed scanning for the URL pattern

#### Non-Text Response

Currently, the Spider does not process this type of resources.

## Other Aspects

* When checking if an URL was already visited, the behaviour regarding how parameters are handled can be configured on the Spider Options screen.
* When checking if an URL was already visited, there are a few common parameters which are ignored: jsessionid, phpsessid, aspsessionid, utm_\*
* The Spider's behaviour regarding cookies depends on how the Spider is started and which options are enabled. For more details refer to the Spider Options screen.

The spider is configured using the [Spider Options screen](/docs/desktop/addons/spider/options/).

## See also

|   |                                                               |                                       |
|---|---------------------------------------------------------------|---------------------------------------|
|   | [Spider Options screen](/docs/desktop/addons/spider/options/) | for an overview of the Spider Options |

## Official Videos

|   |                                                                                                         |
|---|---------------------------------------------------------------------------------------------------------|
|   | [ZAP In Ten: Explore Your Applications](https://play.sonatype.com/watch/rLq2nvgbuGwVn2BX9gA8r2) (10:36) |
|   | [ZAP Deep Dive: Exploring Applications: Standard Spider](https://youtu.be/mz2nhYpU-sw) (34:35)          |
