---
title: "Improving Fuzzing Payloads for LLMs with FuzzAI"
summary: "Improving Fuzzing Payloads for LLMs with FuzzAI, and a call for community feedback."
type: post
tags:
  - blog
  - fuzzer
  - llm
date: "2024-09-30"
authors:
  - yiannis
---

I have always enjoyed putting together lists of fuzzing payloads because it feels like moving from the realm of the dark arts 
to the world of standards. This time it's not fuzzing payloads for some absurd non-relational database, but it's for Large Language Models. 
As part of the [AI Resilience Maturity Model (AI-RMM)](https://osf.io/kb8a5/), 
we are working to enhance the security, integrity, and overall resilience of LLMs. 
AI-RMM focuses on ensuring that AI systems can maintain operational continuity and accuracy, even when facing adversarial conditions. 

In alignment with this, we’ve developed [FuzzAI](/docs/desktop/addons/fuzzai-files/), a fuzzing payload add-on in ZAP, 
designed to improve the resilience of LLMs by identifying and addressing security vulnerabilities. 
FuzzAI is a robust tool designed to help developers and security professionals identify vulnerabilities in AI models by 
submitting various types of fuzzing payloads tailored to these complex systems.

### ZAP Chat Video

{{<youtube uuid="hZ9yeXK2DLY">}}

### What We Have Done So Far
We have focused on two sets of payloads for the first version of FuzzAI. 

* The [first set](/docs/desktop/addons/fuzzai-files/#extract-training-data) of payloads targets extracting model information, including model architecture, hyper parameters, and similar. 
* The [second set](/docs/desktop/addons/fuzzai-files/#extract-model-information) of payloads targets extracting training data that was used to train the LLM you are quizzing. 

Our journey in developing FuzzAI began with a deep dive into understanding the vulnerabilities that plague AI systems. 
Using various approaches outlined in research publications and industry, we have gathered key insights into how adversarial inputs and edge cases impact the integrity of LLM outputs.

* The payloads are designed to simulate a variety of attacks, including input manipulations, model extraction techniques, and adversarial prompts. This helps expose potential flaws that could compromise AI system integrity.
* FuzzAI incorporates a modular framework that allows developers to plug in different fuzzing strategies, depending on the security requirement of the LLM being tested.

Recognizing the importance of open collaboration, FuzzAI is being developed with input from the broader security and AI communities. We’ve built FuzzAI as an open add-on, welcoming insights, suggestions, and contributions from developers worldwide.

### How You Can Help Improve FuzzAI
We believe that community feedback is crucial to improving and optimizing FuzzAI, and we're calling on developers, researchers, and security professionals to contribute to testing and refining our fuzzing payloads. Your insights will help shape the future of AI security.

Here’s how you can get involved:

* **Test FuzzAI** - Download the [FuzzAI](/docs/desktop/addons/fuzzai-files/) add-on from the ZAP marketplace and start testing LLM models in your own environment. Your unique use cases and feedback will provide invaluable insights into how well the payloads perform across different scenarios.
* **Provide Feedback** - Whether you find a bug, suggest a new feature, or propose an improvement to existing payloads, we want to hear from you! Share your thoughts via our [User Group](https://groups.google.com/g/zaproxy-users/c/hp1oBbhyRg0/m/xqW8RIQoBQAJ) or contribute directly to our project.
* **Help Build New Payloads** - Do you have specific payloads that work for specific LLMs or new fuzzing strategies or payloads that could push LLMs even further? We invite you to collaborate with us in developing new modules and payloads that target untested vulnerabilities.

### What’s Next?
Our goal is to make FuzzAI the go-to tool for AI security testing. With the help of the community, we plan to expand the functionality of FuzzAI to cover more adversarial attack surfaces and improve the efficiency of detecting vulnerabilities in LLMs.

We are excited about the potential of FuzzAI and hope you share our vision of creating more secure and robust AI systems. Join us in this effort to elevate AI security testing to the next level.

### Call to Action
If you’re ready to get started, download the FuzzAI add-on today and help us refine the next generation of fuzzing payloads. We’re looking forward to collaborating with the community to make AI safer for everyone!

* Download [FuzzAI](/docs/desktop/addons/fuzzai-files/)
* Share Your Feedback 
* Join the Discussion in Our Community Forum

Let’s build a safer AI ecosystem together.
