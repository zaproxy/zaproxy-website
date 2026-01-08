---
title: "Getting Further with ZAP Scripting"
type: page
layout: links
links:
  - name: Script Types
    link: script-types/
    desc: all of the different types of scripts supported by ZAP

  - name: Scripting Languages
    link: script-languages/
    desc: all of the scripting languages supported by ZAP

  - name: Script Security
    link: script-security/
    desc: details about the security implications of ZAP scripts 

  - name: Community Scripts
    link: https://github.com/zaproxy/community-scripts
    desc: a collection of ZAP scripts and tips provided by the community

cascade:
  EditableContent: true
  addBreadcrumbs: true
---

ZAP provides a scripting framework that allows you to extend and customise its behaviour beyond the features available through the standard user interface. Scripting is intended for users who want to automate tasks, adapt ZAP to specific applications, or integrate ZAP more closely into their own testing workflows.

Scripts run within ZAP and can interact with all of its internal components. They can be used to perform actions at specific points during ZAP’s operation, such as when HTTP messages are processed, during scanning, or in response to events. This makes scripting a flexible mechanism for adding custom logic where built-in options are not sufficient.

ZAP supports several scripting languages and organises scripts by *type*, which determines when and how a script is executed. Each script type is designed for a particular purpose, such as modifying requests, handling authentication, or reacting to alerts.

Typical use cases for ZAP scripting include:
- Modifying HTTP requests or responses
- Implementing custom authentication or session handling
- Extending or customising scanning behaviour
- Automating actions based on alerts or other events
- Integrating ZAP with external tools or systems

Scripting is an advanced feature and assumes familiarity with ZAP concepts and basic programming. The pages in this section provide further details on the available script types, supported languages, and practical examples to help you use scripting effectively.
