---
title: "Postman Add-on"
summary: "Import Postman collections with the new Postman add-on for ZAP."
images:
- https://www.zaproxy.org/blog/2023-09-25-postman-add-on/images/zapbot-postman.png
type: post
tags:
- blog
- postman
- gsoc
- gsoc-2023
date: "2023-09-25"
authors:
    - vitikasoni
---
![ZAPbot-Postman Image](images/zapbot-postman.png)

This extension allows us to easily import [Postman collections](https://www.postman.com/collection/) into ZAP, and hence we can then use ZAP’s powerful security testing capabilities to identify potential vulnerabilities in our APIs developed using Postman.

## Installing the add-on

The help page of the add-on can be found [here](/docs/desktop/addons/postman-support/) and you can install it via the [ZAP Marketplace](/addons/).

## Import Postman Collections

Firstly, to export the collection from Postman, follow these [instructions](https://learning.postman.com/docs/getting-started/importing-and-exporting/exporting-data/#exporting-collections).

Follow the following instructions to import the collection:
1. Click on 'Import' in the menu bar.
2. Choose 'Import a Postman Collection' from the options.
3. In the 'Collection File or URL' field, you can do this in two ways:
    - Local File: If your collection JSON is on your computer, click the 'Choose File' button and select it.
    - URL: Alternatively, if your collection is online, paste the URL where it's located and the add-on will send a `GET` request to fetch the collection JSON.
4. If you've used variables in the collection, enter them in the 'Variables' field as a list of key-value pairs separated by commas in this format: `key1=value1,key2=value2,...`.
5. Click the 'Import' button.

Now, your collection will be imported and you'll see the API endpoints in the 'Sites' tree. If there are any issues with the collection definition, you might encounter errors during the import process. You can find details about these errors in the output panel and resolve them before reimporting.

Congratulations! 🎉 You’ve successfully imported your collection. You can now proceed with testing your APIs using ZAP.

## Future Developments

- Enable importing through API and command line.
- Enable the import of variables defined in the collection definition.
- Introduce automation support, and more.

Stay tuned for these upcoming enhancements to our addon! Checkout the [Community page](/community/) to get in touch.

## My GSoC Journey and Thanks:

The development of this add-on was part of my [Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) adventure (the project page can be found [here](https://summerofcode.withgoogle.com/archive/2023/projects/OlBxaE5X)).
My mentors - [Simon](/docs/team/psiinon/), [Ricardo](/docs/team/thc202/) and [Rick](/docs/team/kingthorin/) were there, guiding me every step of the way. With every discussion and code review with them, there was a lot of learning for me. I am truly thankful to them. 😄

Below are the pull requests I made for this project:

- [#4657](https://github.com/zaproxy/zap-extensions/pull/4657) - Add Postman add-on
- [#4663](https://github.com/zaproxy/zap-extensions/pull/4663) - Add dialogs for importing through the UI
- [#4731](https://github.com/zaproxy/zap-extensions/pull/4731) - Implement parser
- [#4760](https://github.com/zaproxy/zap-extensions/pull/4760) - Implement item deserialization
- [#4777](https://github.com/zaproxy/zap-extensions/pull/4777) - Implement request deserialization
- [#4847](https://github.com/zaproxy/zap-extensions/pull/4847) - Implement sending http requests
- [#4906](https://github.com/zaproxy/zap-extensions/pull/4906) - Implement error reporting
- [#4917](https://github.com/zaproxy/zap-extensions/pull/4917) - Add variables support

Thanks for reading! 😁
