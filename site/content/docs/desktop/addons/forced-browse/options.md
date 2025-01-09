---
# This page was generated from the add-on.
title: Options Forced Browse screen
type: userguide
weight: 1
---

# Options Forced Browse screen


This screen allows you to configure the [Forced Browse](/docs/desktop/addons/forced-browse/)
options:

### Concurrent scanning threads per host

The number of threads the scanner will use per host.   
Increasing the number of threads will speed up the scan but may put extra strain on the computer ZAP is running on and the target host.

### Recursive

If checked then the scanner will recurse through all of the sub-directories found.   
This may take a long time.

### Default file

The default file selected when ZAP starts.

### Add custom Forced Browse file

Allows you to add your own files to be used when brute forcing files and directories.   
These should be text files with one file or directory name per line.   
Files are added to the 'dirbuster' directory underneath the ZAP home directory.

### Force Browse files without extension

If selected then in addition to brute forcing directories, files without extension will also be brute forced.   
The URI of the file to be brute forced is derived by appending to the base path the entries of the selected forced browse text file.   
By default this option is unchecked.   
Enabling this will increase the scanning time.

### Force Browse files

If checked then in addition to brute forcing directories, the files will also be brute forced.   
The URI of the file to be brute forced is derived by appending given extensions to the entries of selected forced browse text file.   
Users do not need to worry whether the entry already ends with an extension or not. The conflict is handled internally.   
By default this option is unchecked.   
Enabling this will increase the scanning time.

### File extensions

If Force Browse files option is checked, then you can specify the file extensions that need to be brute forced.   
When specifying multiple extensions separate each extension with a comma(,).   
If no value is specified, "php" will be used as the default extension.

### File extensions to ignore

The scanner parses the response body to filter existing links.   
The extracted links are then used to make new requests.   
If file extensions to ignore is specified then links ending with those extensions are ignored from making requests.   
When specifying multiple extensions separate each extension with a comma(,).   
By default, this is set to "jpg, gif, jpeg, ico, tiff, png, bmp".

### Fail Case String

The scanner will request for every file type in every directory that it finds with the given fail case string appended.   
The response from this page is used to determine whether or not a guessed file/directory is there.   
By default, this is set to "thereIsNoWayThat-You-CanBeThere".   
If you’re getting strange results, consider changing this.
