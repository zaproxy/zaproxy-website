---
title: "Automation Guide - Options"
tags: 
- automation
- guide
type: page
---

If you want to use ZAP for automated security scanning then you have a wide range of options, also listed on the main 
[Automate](/docs/automate/) page.

Also see the [ZAP Char 06 Automation Introduction](https://www.youtube.com/watch?v=W8ogRTUZPTk) video which talks about 
and demonstrates all of these options in more detail.

Each of these options provides a different balance between ease of use and flexibility + functionality:

| Option                                        | Ease of Use     | Flexibility / Functionality     |
|-----------------------------------------------|-----------------|-----------------|
| [ZAPit](#zapit)                               | 🟢 🟢 🟢 🟢 🟢 | 🔴              |
| [Quick Start](#quick-start-command-line)      | 🟢 🟢 🟢 🟢 🟢 | 🔴              |
| [Packaged Scans](#docker-packaged-scans)      | 🟢 🟢 🟢 🟢    | 🟡 🟡 🟡        |
| [GitHub Actions](#github-actions)             | 🟢 🟢 🟢 🟢    | 🟡 🟡 🟡        |
| [Automation Framework](#automation-framework) | 🟢 🟢 🟢 🟡    | 🟢 🟢 🟢 🟢     |
| [API](#api-and-daemon-mode)                   | 🟠 🟠          | 🟢 🟢 🟢 🟢 🟢 |

&nbsp;

These automation options also have different focuses:

### ZAPit

[ZAPit](/blog/2023-10-18-zapit/) provides a quick ‘reconnaissance’ scan of the URL specified via the command line. 
It is safe to run against production services but is very limited in its scope as it currently only checks the 
URL you specify and does not explore the app any further.

### Quick Start Command Line

The [Quick Start Command Line](/docs/desktop/addons/quick-start/cmdline/) option is easy to run, but with very limited options so only suitable for simple scans.
ZAP will run the standard [Spider](/docs/desktop/addons/spider/) to explore the site and then run the Active Scanner with the default scan policy.

### Docker Packaged Scans
The [Docker Packaged Scans](/docs/docker/) are the easiest way to get started with ZAP automation and provide a reasonable amount of flexibility.
They allow you to configure the most commonly used options via the command line and allow you to make ZAP API calls at each stage of the scan via [Scan Hooks](/docs/docker/scan-hooks/).

If you need to get ZAP to handle authentication for your app then the Automation Framework is likely to be a better option for you.
The Packaged Scans only run in Docker containers and are being migrated to use the Automation Framework under the covers.

### GitHub Actions
The [GitHub Actions](https://github.com/marketplace?query=zap&verification=verified_creator) are the Packaged Scans 
made available on the GitHub Marketplace.
They also provide the option to raise issues directly on GitHub for any potential vulnerabilities found.

### Automation Framework
The [Automation Framework](/docs/automate/automation-framework/) is a very flexible option not tied to any container technology.
It allows you to define sequential jobs which perform specific ZAP actions such as Spidering and Active Scanning
and is recommended for most non-trivial automation.

### API and Daemon Mode
The [API and Daemon Mode](/docs/api/) give you full control over ZAP via a comprehensive API.
It is very powerful but you do need to have a much better understanding of how ZAP works.
As a result it is only recommended for system integrators or people who have a need for deep integration with ZAP.

{{<prevnext nextUrl="../exploring-your-app/" nextTitle="Exploring Your App">}}
