---
title: "Can ZAP be used with a Screenreader?"
type: faq
category: Desktop UI
weight: 7
---

ZAP, as well as its add-ons, uses Java Swing for it's user interface. For screenreader users, this means that even though a lot of the user interface components technically work, the experience could be better in places.
This page aims to explain some of the non-standard operations that need to be performed in order to use the program with a screenreader.

## Prerequisites

It is highly recommended to use [NVDA](https://nvaccess.org) as your screen reader to work with ZAP, as it's virtual mouse support appears to be better able to deal with the ZAP UI. It also preconfigures the Java Access Bridge as of [NVDA version 2019.3](https://www.nvaccess.org/post/nvda-2019-3-released/).
If you'd rather use JAWS, please note that you may need to fall back to OCR somewhat more often, and you will need to [manually set up the Java Access Bridge](https://docs.oracle.com/javase/7/docs/technotes/guides/access/enable_and_test.html).
Due to a glitch somewhere down the chain, it is also required to set your display scaling, also referred to as DPI, to 100%. Not doing this will result in simulated mouseclicks landing wildly off the mark, making the program more difficult to use by an order of magnitude. 

To do this in Windows 10, use windows+I to open settings, go to system -> Display and set the "Change the size of text, apps, and other items" combobox to 100%.
This will require a restart to fully take effect.

Please note that the  current value of this combobox may indicate that it is the recommended value. Ignore that recommendation while using ZAP.

## Assorted gotchas in the ZAP UI

If all went well, you should now be able to tab through the Install4J wizard in order to install ZAP. If not, the Java Access Bridge associated with the Java VM your computer uses by default is not enabled. You may have to recheck the steps in the article linked to above in order to troubleshoot.

The ZAP UI is, generally speaking, pretty good about tab navigation. Once you land on a place you can tab from, it's generally smooth sailing except for the various gotchas we will outline below. You can tab around the zap UI and use other regular Windows navigation keys, unless:

- You open the program for the first time. Currently, the focus starts in No Man's land after dismissing the dialog regarding session persistence. To fix this, object-navigate (or JAWS cursor) to the quick start tab and mouseClick the Manual Explore button. For NVDA this requires routing the mouse to the object navigation cursor first.
If you cannot tab from this point onwards, alt+tab out and back into the application. You should land on the " safe mode"  toolbar button.
- You land in an explanatory textbox. Further tabbing will result in the Windows error noise. Use ctrl+tab to hop out of it and back into the regular tab order.
- You land in a table. Java Swing Tables appear to trap keyboard focus, and the table's actual headers are outside of the table element on the same tree level as the table element itself. This means querying the current header isn't going to work, good old memorising the table headers to know what header the cell you're looking at belongs to.

Additionally, you shouldn't tab around the interface if you're already highlighting something with the keyboard. This seems to nix the highlight, causing highlight-dependent options to not work properly. Doing this in an unfortunate way can actually crash NVDA entirely.
If this needs to be done, highlight using regular keyboard commands, then simulate a mouse click on the button that requires the highlight. This will come up when adding message locations in order to fuzz them, for example.

## ZAP HUD

At present, the HUD works reasonably well if you stay in browse mode. Hitting enter on the various graphics will toggle them or interact with them, we recommend going through the HUD tutorial to learn how most things work. The tutorial will refer to the images'  contents, their filenames are reasonably clear on what they contain, use that to your advantage.

A few gotchas once again:

- To check the status of the scope tool, break tool etc. look at the text right below the graphic in browse mode. This text will reflect it's current state (on/off, in/out etc.).
- The history table is always visible to screen readers at present, even if it isn't there visually. This can cause hitting enter on a request in the history table to do nothing whatsoever. If this happens, find the History link and click it, then try again.
- Dialogs with controls for operating the tool that was clicked last will appear below the history table in browse mode. Visually, this is a modal. Keep that in mind when simulating mouse clicks.
- The sites tree deviates from the way the other tools work in that pressing enter on it's graphic does nothing. To expand it, hit enter on the first unlabelled link in browse mode, instead. The tree will then work in browse mode, not in focus mode.
