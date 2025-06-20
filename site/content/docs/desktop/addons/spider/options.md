---
# This page was generated from the add-on.
title: Options Spider screen
type: userguide
weight: 4
---

# Options Spider screen


This screen allows you to configure the [Spider](/docs/desktop/addons/spider/) options.

It should be noted that modifying most of these options also affects
the running Spider.

### Maximum depth to crawl

The parameter defines the maximum depth in the crawling process where a page must be found in order for it to be processed. Resources found deeper than this level are not fetched and parsed by the spider. The value zero means unlimited depth.


The depth is calculated starting from the seeds, so, if a Spider scan
starts with only a single URL (eg. URL manually specified), the depth is
calculated from this one. However, if the scan starts with multiple
seeds (eg. recurse and Sites tree node with children), a resource is processed if it's depth
relative to *any* of the seeds is less than the defined one.

### Number of threads used

The Spider is multi-threaded and this is the number that defines the maximum number of worker threads used in the crawling process. Changing this parameter does not have any effect on any crawling that is in progress.

### Maximum duration

The maximum length of time that the Spider should run for, measured in minutes. Zero (the default) means that the Spider will run until it has found all of the links that it is able to.

### Maximum children to crawl

This parameter limits the number of children that will be crawled at every node in the tree.  
This is useful for data driven applications that have large numbers of 'pages' that are in fact exactly the same code but containing different data, for example from a database.  
By default this is set to zero which means there are no limits applied to the number of child nodes crawled.

### Maximum parse size

Defines the maximum size, in bytes, that a response might have to be parsed. This allows the Spider to skip big responses/files. Zero means unlimited size.

### Domains Always in Scope

Allows to manage the domains, string literals or regular expressions, that are in the Spider's scope. The normal behavior of the Spider is to only follow links to resources found on the same domain as the page where the scan started. However, this option allows you to define additional domains that are considered "in scope" during the crawling process. Pages on these domains are processed during the scan.

### Query parameters handling

When crawling, the Spider has an internal mechanism that marks which pages were already visited, so they are not processed again. When this check is made, the way the URIs parameters are handled is set using this option. There are three available options:

* **Ignore parameters completely** - if www.example.org/?bar=456 is visited, then www.example.org/?foo=123 will not be visited
* **Consider only parameter's name** (ignore parameter's value) - if www.example.org/?foo=123 is visited, then www.example.org/?foo=456 will not be visited, but www.example.org/?bar=789 or www.example.org/?foo=456\&bar=123 will be visited
* **Consider both parameter's name and value** - if www.example.org/?123 is visited, any other uri that is different (including, for example, www.example.org/?foo=456 or www.example.org/?bar=abc) will be visited

### Send "Referer" header

If the Spider requests should be sent with the "Referer" header.

### Accept Cookies

If the Spider scans should accept cookies while Spidering. If enabled the Spider will properly handle any cookies received from the server and will send them back accordingly. If the option is disabled, the Spider will not send any cookies in its requests. For example, this might control whether or not the Spider uses the same session throughout a spidering scan.   
When accepting cookies the cookies are not shared between Spider scans, each scan has its own cookie jar.   
This option has low priority, the Spider will respect other (global) options related to the HTTP state. This option is ignored if, for example, the option Use Global HTTP State is selected, when spidering as a User or when a HTTP Session is active.

### Process forms

During the crawling process, the behaviour of the Spider when it encounters HTML forms is defined by this option. If disabled, the HTML forms will not be processed at all. If enabled, the HTML forms with the method defined as HTTP GET will be submitted with some generated values. The behaviour when encountering forms with the method defined as HTTP POST is configured by the next option.

### POST forms

As briefly described in the previous paragraph (Process Forms), this option configures the behaviour of the Spider when *Process Forms* is enabled and when encountering HTML forms that have to be POSTed.

### Parse HTML Comments

This option defines whether the Spider should also consider HTML comments when searching for links to resources. Only the resources found in commented valid HTML tags will be processed.

### Parse 'robots.txt' files

This option defines whether the Spider should also spider the robots.txt files found on websites, searching for links to resources. This option does not define whether the Spider should follow the rules imposed by the robots.txt file.

### Parse 'sitemap.xml' files

This option controls whether the Spider should also consider 'sitemap.xml' file and try to identify new resources.

### Parse SVN metadata files

This option controls whether the Spider should also parse SVN metadata files and try to identify new resources.

### Parse Git metadata files

This option controls whether the Spider should also parse Git metadata files and try to identify new resources.

### Parse .DS_Store files

This option controls whether the Spider should also parse .DS_Store files and try to identify new resources.

### Handle OData-specific parameters

This options defines whether the Spider should try to detect OData-specific parameters (i.e. resources identifiers) in order to properly process them according to the rule defined by the "Query parameters handling" option.

### Logout Avoidance

Whether or not the Spider should attempt to avoid logout related paths/functionality, default: false.

### Irrelevant Parameters

Allows to manage the parameters that should be removed when canonicalising the URLs found or request bodies generated (`x-www-form-urlencoded`).


The parameters with names matching the following are automatically considered irrelevant:

* Session names defined in the HTTP Sessions options.
* Token names defined in the Anti-CSRF Tokens options.

## See also

|   |                                                |                                   |
|---|------------------------------------------------|-----------------------------------|
|   | [Spider](/docs/desktop/addons/spider/)         | for an overview of the Spider     |
|   | [Spider Tab](/docs/desktop/addons/spider/tab/) | for an overview of the Spider tab |
