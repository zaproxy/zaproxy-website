---
# This page was generated from the add-on.
title: Bug Tracker
type: userguide
weight: 1
cascade:
  addon:
    id: bugtracker
    version: 3.0.0
---

# Bug Tracker

The Bug Tracker add-on can help the user raise the Alerts that they receive in the form of an issue or a bug on a Bug Tracker (like Bugzilla, Github,etc.) while scanning a web-app.

## Configuration of Bug Trackers

The user may configure the Bug Trackers with their important details like Username, Password, Repository URL, etc. by going to **Options-\>Bug Tracker** and then selecting the appropriate Bug Tracker.

## Raising the Issues

The user can select one or more Alerts (even their subnodes as per need) after scanning then the user can choose **Context Menu Item -\> Raise Issue on a Bug Tracker.**   
A new dialog will popup which will give the user the ability to edit the fields or even choose some fields from the existing configuration. For example: If the configuration of Github is chosen then there is no need to fill the Username, Password, and Repository URL as long as they are correct. There is a dropdown called "Choose a Bug Tracker" which the user can choose the Bug Tracker to raise the issue on.  
The fields for raising the issue depend on the Bug Tracker and their implementations.   
After filling out the fields the user can click "Save" to raise the issue. A message will then be displayed to the user stating if his/her attempt to raise the issue was succesful or not, and if not the reason for that.
