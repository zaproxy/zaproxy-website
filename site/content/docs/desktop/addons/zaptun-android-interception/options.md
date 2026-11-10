---
# This page was generated from the add-on.
title: Options Android (zaptun) screen
type: userguide
weight: 1
---

# Options Android (zaptun) screen

This screen sets where zaptun finds adb. Open it from **Tools \> Options \> Android (zaptun)** , or with **Options...** in the Android Devices dialog.

### Android SDK

The Android SDK folder. adb is taken from its `platform-tools` folder.

### adb

The adb binary itself. If set, it takes priority over the SDK.

### Detection

When a field is empty, the screen fills it in and says where the value came from, trying in turn: `ANDROID_HOME`, `ANDROID_SDK_ROOT`, Android Studio's default SDK folders (`~/Android/Sdk`, `~/Library/Android/sdk`, `%LOCALAPPDATA%\Android\Sdk`), then `PATH`.


**Detect** fills both fields in again from the environment, replacing what's there.
**Test adb** runs `adb version` with what's in the fields, without saving them.


If you save the screen with both fields empty, zaptun keeps detecting adb from the environment
every time it runs it.

## See also

|   |                                                                                   |                                       |
|---|-----------------------------------------------------------------------------------|---------------------------------------|
|   | [zaptun: Android Interception](/docs/desktop/addons/zaptun-android-interception/) | the add-on's main page                |
|   | [API](/docs/desktop/addons/zaptun-android-interception/api/)                      | setting these options on headless ZAP |
