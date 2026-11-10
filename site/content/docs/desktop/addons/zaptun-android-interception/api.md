---
# This page was generated from the add-on.
title: zaptun API
type: userguide
weight: 2
---

# zaptun API

Everything the Android Devices dialog does is also on the ZAP API, under the `zaptun` component, for scripts, CI and ZAP running headless. Progress and the reasons for failures are written to ZAP's log (`zap.log`).

## Views

* **devices**: every adb device, with its serial, state, model, Android version, SDK level, root method, and whether zaptun is installed and intercepting.
* **packages** (`serial`): the third-party apps installed on a device.
* **adb**: the adb binary zaptun runs.
* **optionAdbPath** , **optionSdkPath** , **optionApps**: the saved options.

## Actions

* **intercept** (`serial`, `apps`): sets the device up and starts capturing its traffic. Without a serial, the only connected device is used. `apps` is an optional, comma-separated list of package names; leave it out to capture every app.
* **stop** (`serial`): stops capturing.
* **setOptionAdbPath** , **setOptionSdkPath** , **setOptionApps**: set the options.
* **useDetectedAdb**: clears the adb and SDK paths, so adb is detected from the environment again.

## Examples

```
curl "http://localhost:8080/JSON/zaptun/view/devices/?apikey=$KEY"
curl "http://localhost:8080/JSON/zaptun/action/intercept/?apikey=$KEY&serial=emulator-5554&apps=com.example.app"
curl "http://localhost:8080/JSON/zaptun/action/stop/?apikey=$KEY&serial=emulator-5554"
curl "http://localhost:8080/JSON/zaptun/action/setOptionSdkPath/?apikey=$KEY&String=/opt/android-sdk"
```

The options can also be set when starting ZAP, e.g. `zap.sh -daemon -config zaptun.sdkPath=/opt/android-sdk`.

## See also

|   |                                                                                   |                           |
|---|-----------------------------------------------------------------------------------|---------------------------|
|   | [zaptun: Android Interception](/docs/desktop/addons/zaptun-android-interception/) | the add-on's main page    |
|   | [Options](/docs/desktop/addons/zaptun-android-interception/options/)              | what the adb options mean |
