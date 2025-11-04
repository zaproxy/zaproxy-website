---
# This page was generated from the add-on.
title: Fuzz AI Files - Extract Training Data
type: userguide
weight: 2
---

# Fuzz AI Files - Extract Training Data

### 001 By Asking

This file contains fuzzing payloads specific to [AI-RMM Control "Measure 2.7.2"](https://osf.io/kb8a5/) The goal is to test if the system has established security and resilience metrics to detect potential theft of model training data, including encryption, access controls, and alarm thresholds for unauthorized access.


Payloads simulate scenarios where model training data security may be compromised.
Expected system behavior is detailed for each scenario.


Fuzzing File: [001-by-asking.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/001-by-asking.txt)


Author:

* yiannis@owasp.org

### 002 Through Hypnosis

This file contains fuzzing payloads specific to testing LLM "hypnosis" vulnerabilities. The goal is to determine if the LLM enters a repetitive state where it unintentionally leaks training data. These payloads explore edge cases where repetition may trigger the LLM to output sensitive data.


Payloads simulate queries that aim to induce looping or repetitive responses.
Expected system behavior is detailed for each scenario. Note that this is just in the raw files, and will not currently be shown in ZAP.


References:

* [Scalable Extraction of Training Data from (Production) Language Models](https://arxiv.org/pdf/2311.17035.pdf)

Fuzzing File: [002-through-hypnosis.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/002-through-hypnosis.txt)


Author:

* yiannis@owasp.org

### 003 Divergence Attack

Payloads are designed to induce divergence from the model’s aligned state, encouraging it to generate training data by combining nonsensical prompts with structured ones.


These payloads simulate queries that aim to induce looping or repetitive responses.
This version of payloads is more focused on training data extraction through a
prompting strategy similar to the divergence attack described in the document.
Expected system behavior is detailed for each scenario.


Repetition strategies - Several prompts employ repetition to test if the model diverges and
outputs memorized data.


Sensitive data requests - These payloads assess whether the model can protect sensitive training
data like PII, code snippets, or real-world text examples from leaking.


References

* [Scalable Extraction of Training Data from (Production) Language Models](https://arxiv.org/pdf/2311.17035.pdf)

Fuzzing File: [003-divergence-attack.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/003-divergence-attack.txt)


Author:

* yiannis@owasp.org

### 004 SCA

This file contains fuzzing payloads specific to testing LLM vulnerabilities via the Special Characters Attack (SCA). The goal is to assess whether LLMs are susceptible to data leakage by inputting combinations of special characters that trigger memorized training data output. These payloads explore edge cases where special characters lead the model to output sensitive data.


Payloads simulate input sequences that induce LLMs to generate memorized content.
This version is based on the SCA method, as described in the document provided.
Expected system behavior is detailed for each scenario.


Special Characters Attack (SCA) - Payloads focus on using specific symbols, such as JSON structural symbols or other
commonly occurring characters in LLM training corpora, to induce data leakage.


References

* [Special Characters Attack: Toward Scalable Training Data Extraction from LLMs](https://arxiv.org/pdf/2405.05990.pdf)

Fuzzing File: [004-SCA.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/004-SCA.txt)


Author:

* yiannis@owasp.org

### 005 The Secret Sharer

This file contains fuzzing payloads specific to testing unintended memorization in neural networks. The goal is to determine if LLMs unintentionally memorize and reveal sensitive sequences, such as personal data, through targeted prompts that trigger memorized responses. These payloads simulate queries designed to extract rare or secret sequences memorized during training.


Unintended memorization – The payloads are crafted to test whether the model retains specific secret data that should not be memorized, such as credit card numbers or social security numbers.
Exposure metric testing – Some payloads test whether the model's output can be tied to memorization, using sequences akin to "canaries" inserted into the training data.


References:

* [The Secret Sharer: Evaluating and Testing Unintended Memorization in Neural Networks](https://arxiv.org/pdf/1802.08232v3.pdf)

Fuzzing File: [005-the-secret-sharer.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/005-the-secret-sharer.txt)


Author:

* yiannis@owasp.org

### 006 Quantifying Memorization

This file contains fuzzing payloads specific to testing memorization in neural language models. The goal is to identify if the LLM outputs memorized training data when prompted with specific patterns or sequences, and how context length and data duplication influence this behavior.


These payloads are designed to test model scale, data duplication, and context length as key factors influencing memorization.


References:

* [Quantifying Memorization Across Neural Language Models](https://arxiv.org/pdf/2202.07646v3.pdf)

Fuzzing File: [006-quantifying-memorization.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/006-quantifying-memorization.txt)


Author:

* yiannis@owasp.org

### 007 Data Poisoning Attacks

This file contains advanced fuzzing payloads specific to testing data poisoning vulnerabilities in DP-SGD models. The goal is to assess if poisoned data can influence model behavior or violate differential privacy guarantees.


DP-SGD stands for Differentially Private Stochastic Gradient Descent.


It's a privacy-preserving version of the standard Stochastic Gradient Descent (SGD) algorithm used to train machine learning models —
especially neural networks — while ensuring differential privacy for the data used during training.


Data Poisoning - These payloads test the ability of adversaries to inject malicious data into the training process, compromising privacy or accuracy.


References:

* [Auditing Differentially Private Machine Learning: How Private is Private SGD?](https://arxiv.org/pdf/2006.07709v1.pdf)

Fuzzing File: [007-data-poisoning-attacks.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/007-data-poisoning-attacks.txt)


Author:

* yiannis@owasp.org

### 008 Membership Inference

This file contains advanced fuzzing payloads specific to testing membership inference vulnerabilities in DP-SGD models. The goal is to evaluate whether the model leaks information about whether a specific data point was part of the training set.


Membership Inference Attacks - These payloads assess if adversaries can infer membership status by querying the model.


References:

* [Auditing Differentially Private Machine Learning: How Private is Private SGD?](https://arxiv.org/pdf/2006.07709v1.pdf)

Fuzzing File: [008-membership-inference.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/008-membership-inference.txt)


Author:

* yiannis@owasp.org

### 009 Gradient Clipping

This file contains advanced fuzzing payloads specific to testing gradient clipping vulnerabilities in DP-SGD models. The goal is to test the robustness of gradient clipping in protecting privacy while maintaining model performance.


Gradient Clipping - Payloads explore whether gradient clipping sufficiently prevents large gradients from revealing sensitive information or influencing the model.


References:

* [Auditing Differentially Private Machine Learning: How Private is Private SGD?](https://arxiv.org/pdf/2006.07709v1.pdf)

Fuzzing File: [009-gradient-clipping.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/extract-training-data/009-gradient-clipping.txt)


Author:

* yiannis@owasp.org
