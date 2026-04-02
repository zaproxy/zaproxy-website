---
# This page was automatically generated from the add-on's CHANGELOG.
title: Neonmarker Add-on Changelog
type: changelog
weight: 1
cascade:
  addon:
    id: neonmarker
    version: 1.8.0
---

# Changelog
All notable changes to this add-on will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.8.0] - 2025-02-14
### Changed
- Adjust initialization of the Tags list 

## [1.7.0] - 2025-02-12
### Changed
- Maintenance changes.
- Updates to work appropriately with ZAP 2.16 and the Passive Scan Add-on.

## [1.6.0] - 2023-08-17
### Changed
- Maintenance changes.
- The script example in the Help content was updated to use the injected core variables instead of using the fully qualified class name.

### Fixed
- An NPE which could happen when removing an entry that didn't yet have a tag assigned.

## [1.5.0] - 2022-07-11
### Added
- A right-click context menu is now available in the History tab in order to Select/Set a color for arbitrary messages.

## [1.4.0] - 2021-08-26

### Changed
- Add red/green icon to Enable/Disable toggle button.
- Maintenance changes.
- Now targeting ZAP 2.10.
- Ensure added color mappings are unique (Issue 11). Only applies when mappings are added programmatically, a user can still define the same mapping multiple times via the GUI (hopefully they'll recognize the inefficiency of doing so).

## [1.3.0] - 2020-09-29

### Fixed
- Fixed an exception which was occurring when the tab was shown during install.
- Fixed an exception when ZAP is used in CLI mode.

## [1.2.0] - 2020-04-14

### Changed
- The panel is now shown when the addon is installed.
- Improvements to integrate more nicely with ZAP's dark mode.

## [1.1.0] - 2020-01-02

### Changed
- Migrated from https://github.com/juhakivekas/zap-extensions/tree/neonmarker/ to https://github.com/kingthorin/neonmarker.
- Adapted to Gradle build.
- Mapping 'rules' now display all available Tags not just those currently mapped to a history item.
- Allow selection of custom colors with a Color Chooser.

### Added
- Basic help entry.
- Color Mappings can be added in scripts.
- Add enable/disable toggle in toolbar.

## [1] - 2018-07-18

Initial laser version.

[1.8.0]: https://github.com/kingthorin/neonmarker/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/kingthorin/neonmarker/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/kingthorin/neonmarker/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/kingthorin/neonmarker/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/kingthorin/neonmarker/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/kingthorin/neonmarker/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/kingthorin/neonmarker/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/kingthorin/neonmarker/compare/e5d19ea50a3b8879c4e1e88fc36765635c2317de...v1.1.0
[1]: https://github.com/juhakivekas/zap-extensions/releases/tag/1
