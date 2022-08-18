---
# This page was generated from the add-on.
title: Param Miner dialog
type: userguide
weight: 2
---

# Param Miner dialog

This dialog launches the [Param Miner](/docs/desktop/addons/parameter-miner/).  

## Control

The first tab allows you to select or change the URL along with selection of guessers.  
If the URL is in one or more Contexts then you will be able to choose one of them.  
You can also modify the number of threads that would be used for the Param Miner.   

If you select/check the 'URL Guess' checkbox, then the URL Guess tab will be shown which provides fine grain control over the guessing process for URL parameters.   
At this time Param Miner can perform guessing attacks and has only one of the guessers available which is the URL Parameter Guesser, which is enabled by default.   

If you select/check the 'Header Guess' checkbox, then the Header Guess tab will be shown which provides control over the guessing process for HTTP Headers.(Not yet available)  

If you select/check the 'Cookie Guess' checkbox, then the Cookie Guess tab will be shown which provides control over the guessing process for Cookies.(Not yet available)  



## URL Guess

This tab allows you to configure the URL guessing procedure.   
If you select/check the 'Add fcbz cache buster' then a static cache buster would be added/appended to the URL. (Not yet being used)  

The Wordlist dropdown is the one which offers users the ability to specify their wordlist.   
By default the 'Predefined' option is selected, which means the predefined wordlist, consisting of 835 parameters.   
If you select the 'Custom' option, then you will be able to enter your own wordlist.   
If you select the 'Both' option, then it will use the predefined wordlist and the custom wordlist that you have specified.   
For your custom wordlist, you have to make sure that the words are separated by a newline.   

As of the current release, the predefined wordlist used by the add-on is based on [Arjun](https://github.com/s0md3v/Arjun)'s small wordlist.   

The 'Chunk Size' field is the one which allows you to control the size of the chunks that are used. If you are using a wordlist having more than 1000 words, then you can increase the chunksize to your desired requirement. Otherwise you can use the default value.   

The 'Methods' list allows you to select the methods that you want to use. By default GET is the one which is selected. You can choose one or multiple methods from the list, by simply using ctrl + click.   

## Header Guess

Coming soon..  

## Cookie Guess

Coming soon..  

## Accessed via

|   |                                                              |
|---|--------------------------------------------------------------|-------------------------------------------------|
|   | [Param Miner tab](/docs/desktop/addons/parameter-miner/tab/) |
|   | Sites tab                                                    | 'Attack / Param Miner...' right click menu item |
|   | History tab                                                  | 'Attack / Param Miner...' right click menu item |
