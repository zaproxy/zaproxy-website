---
title: "Verifying Your Changes"
tags: 
- guide
type: page
date: "2022-02-07"
---

### Code Formatting

The ZAP code must conform to standard formatting rules - if any changes do not conform then they will fail the build.

Fortunately you do not have to worry about these too much - just run the task: `./gradlew spotlessApply`.

### Linting

While not currently mandatory, we do recommend running [SonarLint](https://www.sonarlint.org/) against any changes you make and fixing anything that it reports. SonarLint has plugins for the most popular IDEs.

PRs submitted to the ZAP repos will automatically be scanned by [lgtm](https://lgtm.com/) and any problems reported will need to be fixed before the PR can be merged.

### Existing Unit Tests

The existing ZAP Unit Tests can be run using the task: `./gradlew test`.

These tests are also run when a PR is submitted and all of them will need to pass before a PR can be merged.

### New Unit Tests

Where possible all developments should include regression tests.

Function names should be descriptive, and use standard camelCaps (camelCase). Examples: 
  * `shouldRaiseAlertIfPasswordFieldAndFormHasNoAutocomplete()`
  * `shouldSetValuesToFieldsWithNoValueWhenParsingGetForm()`
  * `shouldAppendSessionFiletypeAndRetrieveSessionFileFromRelativePath()`.

Comments should be used to aide in increasing readability and classifying/tagging portions of Unit Test functions, such as: `//Given`, `//When`, `//Then`. Example: 
  * [1 - SessionUtilsUnitTest.java](https://github.com/zaproxy/zaproxy/blob/4741552cebc0d860b0bb2cc605b0dcffe42ece83/zap/src/test/java/org/zaproxy/zap/model/SessionUtilsUnitTest.java#L45)

Unit Tests should cover at least all the main functionality of the item under test.

The main exception to this is desktop Swing code - at the moment we do not have a good way to automatically test this.
