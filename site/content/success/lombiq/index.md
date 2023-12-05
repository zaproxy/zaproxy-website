---
title: "Lombiq"
type: success
successtags:
- automation
- internal
- opensource
date: "2023-12-06"
company:
  link: https://github.com/Lombiq/UI-Testing-Toolbox
  logo: /img/success/lombiq.png
---

ZAP now automatically scans our ASP.NET Core apps for each code change, and we couldn't be happier with it.

We at [Lombiq](https://lombiq.com/) provide development, training, hosting, and consulting services for open-source .NET-based technologies like the ASP.NET Core web CMS and framework [Orchard Core](https://orchardcore.net/). Our clients include Live Nation Clubs and Theaters, the Smithsonian Institution, and Microsoft itself.

To make sure that our apps work as they should, we employ a wealth of automated QA tooling; and as an open-source company, all of these are open-source tools utilized by our own open-source projects built on top of them. This starts with [static code analysis for C#](https://github.com/Lombiq/.NET-Analyzers) and [PowerShell](https://github.com/Lombiq/PowerShell-Analyzers), as well as [linting for SCSS, JavaScript and even Markdown](https://github.com/Lombiq/NodeJs-Extensions). Then comes [unit testing](https://github.com/Lombiq/Testing-Toolbox), and finally [UI testing](https://github.com/Lombiq/UI-Testing-Toolbox). The latter is where ZAP is now integrated!

Our [Lombiq UI Testing Toolbox for Orchard Core project](https://github.com/Lombiq/UI-Testing-Toolbox) integrates with ZAP to run Automation Framework plans, create reports, and let users run assertions on the scan results, all from within the .NET test. The most important ZAP configuration options are surfaced in the .NET configuration API, but users can also use the full power of ZAP by providing a completely custom Automation Framework plan. So, while you can run one-liners like `context.RunAndAssertBaselineSecurityScanAsync()` to scan your app, you can also build an Automation Framework plan in the ZAP desktop app from scratch, and run it as part of your UI test suite.

Full documentation is available [here](https://github.com/Lombiq/UI-Testing-Toolbox/blob/dev/Lombiq.Tests.UI/Docs/SecurityScanning.md), including detailed samples that you can readily copy-paste.

ZAP, integrated with the UI Testing Toolbox, now makes sure that the apps we build for our clients and ourselves are secure. It's also an important addition to the toolbox of the Orchard Core community.
