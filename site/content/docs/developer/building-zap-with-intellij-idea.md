---
title: "Building ZAP with IntelliJ IDEA"
description: "This guide will get you started with building and running ZAP in IntelliJ IDEA."
tags:
- guide
- tutorial
type: page
date: "2021-03-22"
---

This guide explains how to make changes to ZAP using IntelliJ IDEA.

## Preparation
You will need to have followed the [Quick Start Guide to Building ZAP](../quick-start-build/) and installed a version of [IntelliJ IDEA](https://www.jetbrains.com/idea/download/).

## Install Lombok

Follow the instructions on https://projectlombok.org/setup/intellij

##### Gradle Resources
Working with ZAP in IntelliJ IDEA may need a bit more Java resources for the Gradle actions. To adjust how much memory Gradle can use on your machine set the option in [gradle.properties](https://docs.gradle.org/current/userguide/build_environment.html)

For Linux/OSX
```bash
echo 'org.gradle.jvmargs=-Xmx4g -XX:MaxMetaspaceSize=1g' >> ~/.gradle/gradle.properties
```  

For Windows
```powershell
echo "org.gradle.jvmargs=-Xmx4g -XX:MaxMetaspaceSize=1g" >> %USERPROFILE%\.gradle\gradle.properties
```  

## Import the ZAP Repositories

On the welcome screen of IntelliJ IDEA, click on ‘New Project’.  

![IntelliJ Welcome Window](/img/docs/developer/intellij-welcome-window.png)

Then, in the ‘New Project’ window, with ‘Empty Project’ as automatically selected, choose a Project name (e.g. “ZAP Development Environment”) and pick a location of your choice. (No need to tick the checkbox ‘Create Git repository’ as the ZAP projects you downloaded are already Git repositories.)  Click on ‘Create’.

![IntelliJ New Empty Project](/img/docs/developer/intellij-new-empty-project.png)

After creating the empty project, click the settings gear icon on the upper right and go to ‘Project Structure’. On the next window that pops up, pick an installed SDK.  

![IntelliJ Project Structure from Settings Menu](/img/docs/developer/intellij-settings-project-structure.png)

![Pick installed SDK](/img/docs/developer/intellij-sdk.png)

In the same window, select the 'Modules' tab under 'Project Settings', click on the ➕ button, and select 'Import Module'.  

![Import Module](/img/docs/developer/intellij-import-module.png)

Then, in the 'Select File or Directory to Import' window, navigate to any one of the cloned ZAP repositories, select the 'build.gradle.kts' file that is present in the root of its directory, and click on OK.  

![Select Gradle Build Script](/img/docs/developer/intellij-select-gradle-build-script.png)

Repeat the last two steps until you have imported all of the ZAP repositories as modules. Then, click on OK in the 'Project Structure' window.

You should now be able to see all the imported repositories in the IntelliJ IDEA Project tab.

It is worth noting that some of the _zap-extensions_ add-ons may fail to compile if you do not have the required environment for them. This is to be expected and is not a problem unless you want to work on those add-ons, in which case see their READMEs for more details.

## Running ZAP
In the IntelliJ Project tab navigate to:
* zaproxy / zap / src / main / java / org / zaproxy / zap

Right click on `ZAP` and select 'Run ZAP.main()'.

![Run ZAP](/img/docs/developer/intellij-run-zap.png)

In case you are unable to see this option, go to 'View' &#8594; 'Tool Windows' &#8594; 'Gradle'. Then, in the Gradle tab, click on the 'Reload All Gradle Projects' button before trying this step again.

ZAP will now start but it is not set up quite right and may show warning dialogs, so close it and go back to IntelliJ.

Select the 'Run' &#8594; 'Edit Configurations...' and then the `ZAP` configuration under 'Application'.

Change the 'Working directory' by browsing to: `.../zaproxy/zap/src/main/dist/`. Here, `.../zaproxy` should be replaced by the complete path to the cloned _zaproxy_ repository on your system.

![IntelliJ Run Configuration](/img/docs/developer/intellij-config-run.png)

Click on Apply and try running ZAP again. ZAP should now start with all of the add-ons correctly configured.

## Running Gradle Tasks
You can run the ZAP Gradle tasks from the command line or from within IntelliJ IDEA - the end result will be the same.

IntelliJ has a 'Gradle' tab that lists all of the tasks available to you ordered by project. You can view this tab by going to 'View' &#8594; 'Tool Windows' &#8594; 'Gradle'.

Note that the add-ons in _zap-extensions_ all have their own set of tasks in addition to the top level ones.

## Tips and Tricks

### Connecting to a Session Database
The Database tab in IntelliJ IDEA can be used to inspect a session database.
The following links may be used for reference:

- [Developer Guide - ZAP Session Database](/docs/developer/zap-session-db/#connecting-to-a-session-database)
- [IntelliJ Docs on the Database tool window](https://www.jetbrains.com/help/idea/database-tool-window.html)
- [IntelliJ Docs on connecting to an HSQLDB Database](https://www.jetbrains.com/help/idea/hsqldb.html)

### Refresh Gradle Project

Sometimes IntelliJ will unexpectedly fail to compile ZAP code. This can occur if you switch between git branches which have different dependencies.

If this happens to you then right click on the relevant project in the Gradle tab and select 'Reload Gradle Project'.

If that doesn't work either, try doing 'File' &#8594; 'Invalidate Caches / Restart...'.

### Other Tips and Tricks

Do you have any other Tips and Tricks for working on ZAP using IntelliJ IDEA? If so then send a PR to update this page - you can use the 'Edit on GitHub' link in the footer.
