---
# This page was generated from the add-on.
title: Client Certificates
type: userguide
weight: 1
---

# Client Certificates

This screen allows you to add a client certificate to use when testing applications protected using mutual SSL.  
After adding the certificate it can be set as active in the KeyStore tab.  
Unlike other options screens, the changes done to the keystore are not undone if the Options dialogue is cancelled.

### Use Certificate

Allows to add and use the active certificate.

## PKCS#12

This tab allows you to add a PKCS#12 certificate to the keystore.

### File

The file system path to the PKCS#12 file.

### Password

The password to unlock the certificates. PKCS#12 files with empty passwords are not supported.

### Store Configuration

Allows the PKCS#12 configuration to be stored in the configuration file. If stored ZAP will load the certificates automatically and set the first certificate available as active.

## PKCS#11

This tab allows you to add a PKCS#11 certificate to the keystore.

### Driver

The driver to access the PKCS#11 certificate.

### Manage...

Allows to add, modify, and remove the available drivers.

### Use Slot List Index

Indicates that it should be used the configured Slot List Index of the driver instead of the Slot.

## KeyStore

This tab allows you to view the added keystores and their certificates, and activate them.

## See also

|   |                                          |                                    |
|---|------------------------------------------|------------------------------------|
|   | [Network](/docs/desktop/addons/network/) | the introduction to Network add-on |
