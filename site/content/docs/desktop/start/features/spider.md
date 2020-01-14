---
# This page was generated from the add-on.
title: Spider
type: userguide
weight: 20
---

# Spider

The spider is a tool that is used to automatically discover new
resources (URLs) on a particular Site. It begins with a list of URLs
to visit, called the seeds, which depends on how the Spider is
started. The Spider then visits these URLs, it identifies all the
hyperlinks in the page and adds them to the list of URLs to visit and
the process continues recursively as long as new resources are found.

The Spider can configured and started using the [Spider dialogue](/docs/desktop/ui/dialogs/spider/).

During the processing of an URL, the Spider makes a request to
fetch the resource and then parses the response, identifying
hyperlinks. It currently has the following behavior when processing
types of responses:

#### HTML

Processes the specific tags, identifying links to new resources:

* Base - Proper handling
* A, Link, Area - 'href' attribute
* Frame, IFrame, Script, Img - 'src' attribute
* Meta - 'http-equiv' for 'location' and 'refresh'
* Form - proper handling of Forms with both GET and POST method. The fields values are generated validly, including [HTML
    5.0 input types](http://www.w3schools.com/html5/html5_form_input_types.asp).
* Comments - Valid tags found in comments are also analyzed, if specified in the [Options
    Spider screen](/docs/desktop/ui/dialogs/options/spider/)

#### Robots.txt file

If set in the [Options Spider
screen](/docs/desktop/ui/dialogs/options/spider/), it also analyzes the 'Robots.txt' file and tries to identify new resources using the specified rules. It has to be mentioned that the Spider does not follow the rules specified in the 'Robots.txt' file.

#### OData Atom format

OData content using the Atom format is currently supported. All included links (relative or absolute) are processed.

#### Non-HTML Text Response

Text responses are parsed scanning for the URL pattern

#### Non-Text response

Currently, the Spider does not process this type of resources.

## Other aspects

* When checking if an URL was already visited, the behaviour regarding how parameters are handled can be configured on the Spider Options screen.
* When checking if an URL was already visited, there are a few common parameters which are ignored: jsessionid, phpsessid, aspsessionid, utm_\*
* The Spider's behaviour regarding cookies depends on how the spider is started and which options are enabled. For more details refer to the Spider Options screen.

The spider is configured using the [Spider Options screen](/docs/desktop/ui/dialogs/options/spider/).

## See also

|   |                                                                   |                                       |
|---|-------------------------------------------------------------------|---------------------------------------|
|   | [UI Overview](/docs/desktop/ui/)                                  | for an overview of the user interface |
|   | [Features](/docs/desktop/start/features/)                         | provided by ZAP                       |
|   | [Spider Options screen](/docs/desktop/ui/dialogs/options/spider/) | for an overview of the Spider Options |
