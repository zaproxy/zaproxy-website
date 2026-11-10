---
# This page was generated from the add-on.
title: 'zaptun: Android Interception'
type: userguide
weight: 1
cascade:
  addon:
    id: zaptun
    version: 0.1.0
---

# zaptun: Android Interception

Captures all traffic of an Android emulator or rooted device in ZAP, with one click.


Pick a device in **Tools \> Android Devices...** (or click the phone button in the toolbar)
and click **Intercept**. The add-on then, over adb:

1. installs the zaptun VPN app on the device;
2. injects ZAP's root CA into the device's **system** CA store, including the Conscrypt APEX on Android 14+, and also installs it as a **user** CA;
3. forwards the device's `127.0.0.1:<port>` to ZAP's proxy with `adb reverse`;
4. starts the VPN. Every TCP connection on the device then goes through ZAP, including apps that ignore the system proxy (Flutter, OkHttp with `Proxy.NO_PROXY`, raw sockets, ...);
5. makes zaptun Android's **always-on VPN with lockdown** , so no app traffic gets around ZAP while zaptun reconnects or restarts (see [Lockdown](#lockdown)).

There's nothing to export, push or configure by hand.

## Requirements

* **adb** , from the Android SDK platform-tools. It's found automatically, or set in the [options](/docs/desktop/addons/zaptun-android-interception/options/).
* **Root on the device** , because injecting a system CA needs it: either an emulator with a "Google APIs" image ("Google Play" images can't `adb root`; the add-on runs `adb root` for you), or a rooted phone with `su` (e.g. Magisk). Grant root to "Shell" when asked.
* ZAP's proxy bound to `localhost` or all interfaces, which is the default: `adb reverse` connects to localhost.

## The Android Devices dialog

* The table lists every adb device with its Android version, how root is obtained and whether zaptun is intercepting it. **Refresh** reads it again.
* **Apps** is optional. Leave it empty to capture every app, or click **Choose...** to pick packages from the device.
* **Intercept** runs the steps above and logs each one. It's safe to click it again at any time.
* **Stop** turns lockdown off, then the VPN, and removes the `adb reverse` rule.
* **Options...** opens the [options](/docs/desktop/addons/zaptun-android-interception/options/), where adb is configured.

The system CA injection lives in RAM, so it's lost when the device reboots: click **Intercept** again after a reboot. Start or restart the app you want to capture after clicking **Intercept** : an app that's already running keeps the CA store it started with.

## Checking it works

* ZAP's History shows hostnames, not IP addresses, for HTTPS traffic from apps.
* The zaptun app on the device shows a green tick next to **System trust enabled**.
* `adb logcat -s zaptun` shows lines like `TLS api.example.com:443 → ZAP`.
* A connection that fails with `proxy said: HTTP/1.1 502 ...` means ZAP couldn't reach the destination; `Connection refused` means ZAP isn't listening on that port.

Certificate pinning isn't bypassed: apps that pin still need Frida or objection.

## Lockdown {#lockdown}

With lockdown ("Block connections without VPN" in Android's settings), apps get no network at all while the VPN is down, so ZAP misses nothing while zaptun reconnects, restarts or hasn't started yet after a boot. Only system code may change this setting, so the add-on runs a small tool from zaptun's own APK as root.

* When only some apps are captured, the other apps aren't on the VPN and lockdown would cut them off, so zaptun is always-on without lockdown.
* While lockdown is on, **Disconnect** in the app leaves apps with no network. Use **Stop** to end a session.
* If the device reboots with lockdown on, Android starts zaptun by itself, but the CA and the `adb reverse` rule are gone, so nothing gets through until you click **Intercept** again.

## What the add-on puts on the device

* The zaptun VPN app (package `dev.davidjosearaujo.zaptun`), installed from the APK bundled in the add-on, and granted `WRITE_SECURE_SETTINGS` (so it can switch Android's global proxy off while connected, and back on after) and `POST_NOTIFICATIONS`.
* ZAP's root CA and two shell scripts, pushed to `/data/local/tmp`: `inject_ca.sh` (system store) and `install_user_ca.sh` (user store).

## See also

|   |                                                                      |                                          |
|---|----------------------------------------------------------------------|------------------------------------------|
|   | [Options](/docs/desktop/addons/zaptun-android-interception/options/) | where zaptun finds adb                   |
|   | [API](/docs/desktop/addons/zaptun-android-interception/api/)         | intercepting devices from scripts and CI |

## Source code

The add-on, the VPN app it installs and the CA scripts: <https://codeberg.org/davidjosearaujo/zaptun>
