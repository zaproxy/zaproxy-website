---
# This page was generated from the add-on.
title: Command Line
type: userguide
weight: 2
---

# Command Line

The Network add-on supports the following command line options:

|   |               |                                                                                                                     |
|---|---------------|---------------------------------------------------------------------------------------------------------------------|
|   | -certload     | Loads the Root CA certificate from the specified file.                                                              |
|   | -certpubdump  | Dumps the Root CA certificate into the specified file, this is suitable for importing into browsers.                |
|   | -certfulldump | Dumps the Root CA certificate and the private key into the specified file, this is suitable for importing into ZAP. |
|   | -host         | Overrides the host used for proxying specified in the configuration file.                                           |
|   | -port         | Overrides the port used for proxying specified in the configuration file.                                           |

### Local Servers/Proxies

When ZAP is running in command line mode (i.e. `-cmd`) only the main proxy is started, for example, to proxy integration tests. If unable to start the main proxy in command line mode or in daemon mode (i.e. `-daemon`) ZAP is terminated, when running with GUI an appropriate warning is shown instead.

## See also

|   |                                          |                                    |
|---|------------------------------------------|------------------------------------|
|   | [Network](/docs/desktop/addons/network/) | the introduction to Network add-on |
