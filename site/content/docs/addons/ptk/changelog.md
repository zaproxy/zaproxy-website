---
# This page was automatically generated from the add-on's CHANGELOG.
title: OWASP PTK Add-on Changelog
type: changelog
weight: 1
cascade:
  addon:
    id: ptk
    version: 0.9.0
---

# Changelog
All notable changes to this add-on will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## 0.9.0 - 2026-09-01
### Changed
- Update the bundled OWASP Penetration Testing Kit browser extensions to the signed 9.9.9 store artifacts.
- Synchronize the ZAP DAST catalog and alert mappings with the DAST rulepack bundled in PTK 9.9.9.

## 0.8.0 - 2026-07-29
### Fixed
- Bug which breaks sites using Akamai Bot Manager 
- Ensure Top 10 alert tags have expected URLs.
- Avoid false Selenium configuration warnings on a clean ZAP profile for Chromium headless browsers and the Firefox headless XPI.

### Changed
- Depends on the Common Library add-on.

## 0.7.0 - 2026-06-29
### Changed
- Use client spider option to not crawl new content.
- Enable the active scan rule by default.
- Promote to beta.
- Added recommended rules option.

## 0.6.0 - 2026-06-13
### Changed
- Update Client Side Integration add-on usage to latest version.

## 0.5.0 - 2026-06-04
### Added
- Active scan rule "PTK Scan Rules" that runs all of the PTK scan rules enabled.

### Changed
- Updated OWASP Penetration Testing Kit browser extension to 9.9.7

## 0.4.0
### Added
- Keep browsers open while scanning in automation mode
- Help to explain how to set the options from the command line.

### Changed
- Options to save the rule settings by ID.

## 0.3.0
### Added
- Added mapping to and from ZAP alert ids and PTK module names
- Example alerts
- Raising ZAP alerts from PTK alerts

## 0.2.0
### Added
- Updated OWASP Penetration Testing Kit browser extension to 9.5.0

## 0.1.0
### Added
- Integration with OWASP Penetration Testing Kit browser extension
