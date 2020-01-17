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
C:\Program Files (x86)\OWASP\Zed Attack Proxy\zap.bat
```

**Mac:**   

```
/Applications/OWASP\ ZAP.app/Contents/Java/zap.sh
```

**Linux:**   
`zap.sh` will be below the directory where ZAP was installed.   

Alternatively, you can run the JAR file directly:  

```
java -jar zap.jar
```

All options below can be passed to any of these.

## Options

ZAP supports the following command line options:

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
|   | -host \<host\>              | Overrides the host used for proxying specified in the configuration file                                                                                                                                                                 |
|   | -port \<port\>              | Overrides the port used for proxying specified in the configuration file                                                                                                                                                                 |
|   | -lowmem                     | Use the database instead of memory as much as possible - this is still experimental                                                                                                                                                      |
|   | -experimentaldb             | Use the experimental generic database code, which is not surprisingly also still experimental                                                                                                                                            |
|   | -nostdout                   | Disables the default logging through standard output                                                                                                                                                                                     |
|   | -silent                     | Ensures ZAP does not make any unsolicited requests, including check for updates                                                                                                                                                          |
|   | -addoninstall \<addOnId\>   | Installs the add-on with specified ID from the ZAP Marketplace. The IDs of the add-ons available in the marketplace can be consulted in the Marketplace tab of [Manage Add-ons dialogue](/docs/desktop/ui/dialogs/manageaddons/).        |
|   | -addoninstallall            | Install all available add-ons from the ZAP Marketplace                                                                                                                                                                                   |
|   | -addonuninstall \<addOnId\> | Uninstalls the add-on with specified ID. Use `-addonlist` or check the Installed tab of [Manage Add-ons dialogue](/docs/desktop/ui/dialogs/manageaddons/) to know the IDs of the installed add-ons.                                      |
|   | -addonupdate                | Update all changed add-ons from the ZAP Marketplace                                                                                                                                                                                      |
|   | -addonlist                  | List all of the installed add-ons                                                                                                                                                                                                        |
|   | -script \<script\>          | Run the specified script (file system path) if command line/daemon, or just load it if GUI                                                                                                                                               |
|   | -last_scan_report \<path\>  | Generate the 'Last Scan Report' into the specified path                                                                                                                                                                                  |
|   | -suppinfo                   | Outputs details relevant for support and troubleshooting (to the console/standard out). Such as: ZAP version, java version, installed add-ons and version, locale info, operating system, etc.                                           |
|   | -certload \<path\>          | Loads the Root CA certificate from the specified file name                                                                                                                                                                               |
|   | -certpubdump \<path\>       | Dumps the Root CA public certificate into the specified file name, this is suitable for importing into browsers                                                                                                                          |
|   | -certfulldump \<path\>      | Dumps the Root CA full certificate (including the private key) into the specified file name, this is suitable for importing into ZAP                                                                                                     |


The options `-session` and `-newsession` are mutually exclusive. An error will be shown and ZAP exit (if not in GUI) when both options are set.   
Relative paths to session file are resolved against the "session" directory located in ZAP's home directory (default or specified with `-dir` option).   
Configuration keys should be specified using the dot notation based their location in the XML of the configuration file, eg:  

```
<zap-script> -config api.key=12345 -config connection.timeoutInSecs=60
```

Note that add-ons can add extra command line options.


Examples:

* Start ZAP in 'daemon' mode with a new session created at a given path:

    ```
    <zap-script> -daemon -newsession session
    ```

* Create a report of the last scan of an existing session and exit ZAP once finished:

    ```
    <zap-script> -last_scan_report /full/path/to/save/report.xml -session /full/path/to/existing/session -cmd
    ```

## See also

|   |                                          |                                 |
|---|------------------------------------------|---------------------------------|
|   | [Introduction](/docs/desktop/)           | the introduction to ZAP         |
|   | [API](/docs/desktop/start/features/api/) | to control ZAP programmatically |
