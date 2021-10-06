---
# This page was generated from the add-on.
title: The Report menu
type: userguide
---

# The Report menu

This menu handles the reports.

### Export Messages to File...

This allows you to save requests and responses to a text file.   
Select the messages to save in the History tab - use the shift key to select multiple messages.

### Export Response to File...

This allows you to save a specific response to a file.   
Select the relevant message in the History tab - note that binary responses (such as images) can be saved as well as test responses.

### Export All URLs to File...

This allows you to save all of the URLs accessed to a text or HTML file.   
This can be used, amongst other things, to compare the URLs available to users with different roles or permissions on the same system.

### Export Selected URLs to File...

Based on the selection (including multi-select) in the Sites tree all URLs and child URLs of selected nodes are exported.

### Export URLs for Context

All URLs in the Sites tree that fall within the selected context are exported. This functionality is also available from the right-click menu when used on a Context node in the Sites tree panel.

### Compare with another Session...

This prompts you for a ZAP session that you have previously saved.   
It then prompts you for an output file into which is written all of the URLs accessed by the current session and the session you have selected to compare it with.  
The file will contain a table listing the URLs and the HTTP responses for the URLs in the 2 sessions.  
JavaScript buttons allow you to display all of the URLs, just those accessed in the first session, the second session and those accessed by both sessions.  
This is particularly useful for comparing 2 sessions which access the same application using different users. You will be able to see which URLs are visible to the users and will be able to try to access all of the URLs when logged in as either of the users.

Note that [add-ons](/docs/desktop/start/features/addons/) can add additional menu items.

## See also

|   |                                                |                                       |
|---|------------------------------------------------|---------------------------------------|
|   | [The top level menu](/docs/desktop/ui/tlmenu/) |                                       |
|   | [UI Overview](/docs/desktop/ui/)               | for an overview of the user interface |
