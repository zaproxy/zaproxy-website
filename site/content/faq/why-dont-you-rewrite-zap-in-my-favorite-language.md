---
title: "Why don't you rewrite ZAP in <my favorite language>?"
type: faq
category: General Questions
weight: 2
---

OK, so this question doesn't get asked all the time, but it does come up every
so often.

So here's the official response:

Firstly, do you really need ZAP rewritten?

ZAP supports all of the [JSR 223](https://www.jcp.org/en/jsr/detail?id=223)
scripting languages, so you can already extend ZAP in a very wide range of
scripting languages, including JavaScript, Jython and Jruby.

Secondly, even if you think you need it rewritten, most ZAP users don't really
care what language its written in, they are more concerned about its
functionality.

ZAP is a complex cross platform product that contains well over 1 million
lines of code.

Java is _a_ (note, not 'the') good choice for complex cross platform projects,
as can be seen by the number of commercial security tools written in java.
There are quite a few other languages that could also be suitable. However the
majority of ZAP developers know Java better than any other language. And a
small subset of potential users will object to any specific technology, be it
Java, Python, Ruby, C# etc. etc.

We _could_ rewrite ZAP in any of the other suitable languages, but it would
take us a very long time, and it would almost certainly be a worse product due
to our lack of experience in that language.

We would piss off most of our users, many of our existing developers and also
alienate that small percentage who hate that particular technology.

So we're not going to do it.
