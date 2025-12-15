---
# This page was generated from the add-on.
title: Command Line
type: userguide
weight: 4
---

# Command Line

To run ZAP via the command line, you will need to locate the ZAP startup script.  
**Windows:**   

```
C:\Program Files (x86)\ZAP\Zed Attack Proxy\zap.bat
```

**Note:** The command line options are not used by the executable (`zap.exe`) only the bat file.  

**Mac:**   

```
/Applications/ZAP.app/Contents/Java/zap.sh
```

**Linux:**   
`zap.sh` will be below the directory where ZAP was installed.   

Alternatively, you can run the JAR file directly:  

```
java -jar zap.jar
```

All options below can be passed to any of these.

## Options

ZAP (core) supports the following command line options:

|   |                             |                                                                                                                                                                                                                                          |
|---|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   | -version                    | Reports the ZAP version                                                                                                                                                                                                                  |
|   | -cmd                        | Run inline (exits when command line options complete)                                                                                                                                                                                    |
|   | -daemon                     | Starts ZAP in daemon mode, ie without a UI                                                                                                                                                                                               |
|   | -config \<kvpair\>          | Overrides the specified key=value pair in the configuration file. `-config` command line options are applied in the order they are specified.                                                                                            |
|   | -configfile \<path\>        | Overrides the key=value pairs with those in the specified properties file                                                                                                                                                                |
|   | -dir \<dir\>                | Uses the specified directory as home directory, instead of the default one. To prevent add-ons (inadvertently) use/override core files ZAP will not start (and show an error) if the home and the installation directories are the same. |
|   | -installdir \<dir\>         | Overrides the code that detects where ZAP has been installed with the specified directory                                                                                                                                                |
|   | -h                          | Shows all of the command line options available, including those added by add-ons                                                                                                                                                        |
|   | -help                       | The same as -h                                                                                                                                                                                                                           |
|   | -newsession \<path\>        | Creates a new session at the given location                                                                                                                                                                                              |
|   | -session \<path\>           | Opens the given session after starting ZAP                                                                                                                                                                                               |
|   | -lowmem                     | Use the database instead of memory as much as possible - this is still experimental                                                                                                                                                      |
|   | -experimentaldb             | Use the experimental generic database code, which is not surprisingly also still experimental                                                                                                                                            |
|   | -nostdout                   | Disables the default logging through standard output                                                                                                                                                                                     |
|   | -loglevel \<level\>         | Sets the log level, overriding the values specified in the log4j2.properties file in the home directory                                                                                                                                  |
|   | -silent                     | Ensures ZAP does not make any unsolicited requests, including check for updates                                                                                                                                                          |
|   | -addoninstall \<addOnId\>   | Installs the add-on with specified ID from the ZAP Marketplace. The IDs of the add-ons available in the marketplace can be consulted in the Marketplace tab of [Manage Add-ons dialogue](/docs/desktop/ui/dialogs/manageaddons/).        |
|   | -addoninstallall            | Install all available add-ons from the ZAP Marketplace                                                                                                                                                                                   |
|   | -addonuninstall \<addOnId\> | Uninstalls the add-on with specified ID. Use `-addonlist` or check the Installed tab of [Manage Add-ons dialogue](/docs/desktop/ui/dialogs/manageaddons/) to know the IDs of the installed add-ons.                                      |
|   | -addonupdate                | Update all changed add-ons from the ZAP Marketplace                                                                                                                                                                                      |
|   | -addonlist                  | List all of the installed add-ons                                                                                                                                                                                                        |
|   | -script \<script\>          | Run the specified script (file system path) if command line/daemon, or just load it if GUI                                                                                                                                               |
|   | -suppinfo                   | Outputs details relevant for support and troubleshooting (to the console/standard out). Such as: ZAP version, java version, installed add-ons and version, locale info, operating system, etc.                                           |
|   | -sbomzip \<path\>           | Creates a zip file containing all of the available [SBOMs](/docs/desktop/start/features/sbom/)                                                                                                                                           |


The options `-session` and `-newsession` are mutually exclusive. An error will be shown and ZAP exit (if not in GUI) when both options are set.   
Relative paths to session file are resolved against the "session" directory located in ZAP's home directory (default or specified with `-dir` option).   
Configuration keys should be specified using the dot notation based their location in the XML of the configuration file, eg:  

```
<zap-script> -config api.key=12345
```

The `-loglevel` option supports the following values: `OFF`, `FATAL`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`, and `ALL`, in order of increasing verbosity.


Examples:

* Start ZAP in 'daemon' mode with a new session created at a given path:

    ```
    <zap-script> -daemon -newsession session
    ```

* Run a script against an existing session and exit ZAP once finished:

    ```
    <zap-script> -session /full/path/to/existing/session -script /full/path/to/script.js -cmd
    ```

## Add-ons

Add-ons can add extra command line options which are described in their own help pages.


For the command line options that allow to configure the main local proxy, refer to the [Network Command Line](/docs/desktop/addons/network/cmdline/) help page.

## See also

|   |                                          |                                 |
|---|------------------------------------------|---------------------------------|
|   | [Introduction](/docs/desktop/)           | the introduction to ZAP         |
|   | [API](/docs/desktop/start/features/api/) | to control ZAP programmatically |
