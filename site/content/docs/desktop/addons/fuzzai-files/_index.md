---
# This page was generated from the add-on.
title: Fuzz AI Files
type: userguide
weight: 1
cascade:
  addon:
    id: fuzzai
    version: 0.0.1
---

# Fuzz AI Files

Provides a set of files for fuzzing AIs (for example via an API), based on the [Artificial Intelligence Resilience Maturity Model (AI-RMM)](https://osf.io/kb8a5/).

The following files are included, and will appear as ZAP "Fuzzing Files" payloads.

## Extract Training Data

### 001 By Asking

This file contains fuzzing payloads specific to AI-RMM Control "Measure 2.7.2"  
The goal is to test if the system has established security and resilience metrics to detect potential theft of model training data, including encryption, access controls, and alarm thresholds for unauthorized access.   

Payloads simulate scenarios where model training data security may be compromised. Expected system behavior is detailed for each scenario. Author:

* yiannis@owasp.org

### 002 Through Hypnosis

This file contains fuzzing payloads specific to testing LLM "hypnosis" vulnerabilities.  
The goal is to determine if the LLM enters a repetitive state where it unintentionally leaks training data.  
These payloads explore edge cases where repetition may trigger the LLM to output sensitive data.

Payloads simulate queries that aim to induce looping or repetitive responses.
Expected system behavior is detailed for each scenario. Note that this is just in the raw files, and will not currently be shown in ZAP.

References:

* [Scalable Extraction of Training Data from (Production) Language Models](https://arxiv.org/pdf/2311.17035.pdf)

Author:


* yiannis@owasp.org

### 003 Divergence Attack

This file contains fuzzing payloads specific to testing LLM "hypnosis" vulnerabilities.  
The goal is to determine if the LLM enters a repetitive state where it unintentionally leaks training data. These payloads explore edge cases where repetition may trigger the LLM to output sensitive data.

Payloads simulate queries that aim to induce looping or repetitive responses.
This version of payloads is more focused on training data extraction through a
prompting strategy similar to the divergence attack described in the document.
Expected system behavior is detailed for each scenario.

Divergence testing - Payloads are designed to induce divergence from the model’s aligned state,
encouraging it to generate training data by combining nonsensical prompts with structured ones.

Repetition strategies - Several prompts employ repetition to test if the model diverges and
outputs memorized data.

Sensitive data requests - These payloads assess whether the model can protect sensitive training
data like PII, code snippets, or real-world text examples from leaking.

References

* [Scalable Extraction of Training Data from (Production) Language Models](https://arxiv.org/pdf/2311.17035.pdf)

Author:


* yiannis@owasp.org

### 004 SCA

This file contains fuzzing payloads specific to testing LLM vulnerabilities via the Special Characters Attack (SCA).  
The goal is to assess whether LLMs are susceptible to data leakage by inputting combinations of special characters that trigger memorized training data output. These payloads explore edge cases where special characters lead the model to output sensitive data.

Payloads simulate input sequences that induce LLMs to generate memorized content.
This version is based on the SCA method, as described in the document provided.
Expected system behavior is detailed for each scenario.

Special Characters Attack (SCA) - Payloads focus on using specific symbols, such as JSON structural symbols or other
commonly occurring characters in LLM training corpora, to induce data leakage.  

References

* [Special Characters Attack: Toward Scalable Training Data Extraction from LLMs](https://arxiv.org/pdf/2405.05990.pdf)

Author:


* yiannis@owasp.org

### 005 The Secret Sharer

This file contains fuzzing payloads specific to testing unintended memorization in neural networks.  
The goal is to determine if LLMs unintentionally memorize and reveal sensitive sequences, such as personal data, through targeted prompts that trigger memorized responses. These payloads simulate queries designed to extract rare or secret sequences memorized during training.

Unintended memorization – The payloads are crafted to test whether the model retains specific secret data that should not be memorized, such as credit card numbers or social security numbers.
Exposure metric testing – Some payloads test whether the model's output can be tied to memorization, using sequences akin to "canaries" inserted into the training data.

References:

* [The Secret Sharer: Evaluating and Testing Unintended Memorization in Neural Networks](https://arxiv.org/pdf/1802.08232v3.pdf)

Author:


* yiannis@owasp.org

### 006 Quantifying Memorization

This file contains fuzzing payloads specific to testing memorization in neural language models.  
The goal is to identify if the LLM outputs memorized training data when prompted with specific patterns or sequences, and how context length and data duplication influence this behavior.

These payloads are designed to test model scale, data duplication, and context length as key factors influencing memorization.

References:

* [Quantifying Memorization Across Neural Language Models](https://arxiv.org/pdf/2202.07646v3.pdf)

Author:


* yiannis@owasp.org

### 007 Data Poisoning Attacks

This file contains advanced fuzzing payloads specific to testing data poisoning vulnerabilities in DP-SGD models.  
The goal is to assess if poisoned data can influence model behavior or violate differential privacy guarantees.

Data Poisoning: These payloads test the ability of adversaries to inject malicious data into the training process, compromising privacy or accuracy.

References:

* [Auditing Differentially Private Machine Learning: How Private is Private SGD?](https://arxiv.org/pdf/2006.07709v1.pdf)

Author:


* yiannis@owasp.org

### 008 Membership Inference

This file contains advanced fuzzing payloads specific to testing membership inference vulnerabilities in DP-SGD models.  
The goal is to evaluate whether the model leaks information about whether a specific data point was part of the training set.

Membership Inference Attacks: These payloads assess if adversaries can infer membership status by querying the model.

References:

* [Auditing Differentially Private Machine Learning: How Private is Private SGD?](https://arxiv.org/pdf/2006.07709v1.pdf)

Author:


* yiannis@owasp.org

### 009 Gradient Clipping

This file contains advanced fuzzing payloads specific to testing gradient clipping vulnerabilities in DP-SGD models.  
The goal is to test the robustness of gradient clipping in protecting privacy while maintaining model performance.

Gradient Clipping: Payloads explore whether gradient clipping sufficiently prevents large gradients from revealing sensitive information or influencing the model.

References:

* [Auditing Differentially Private Machine Learning: How Private is Private SGD?](https://arxiv.org/pdf/2006.07709v1.pdf)

Author:


* yiannis@owasp.org

## Extract Model Information

### 001 Architecture

This file contains advanced fuzzing payloads designed to extract model architecture information from LLMs.  
The goal is to determine if the LLM reveals specific details about its architecture, such as the number of layers, transformer types, or parameter counts.

Model Architecture Extraction: These payloads probe for specific architecture-related details
such as layer counts, model types, and other structural aspects of the LLM.

Layer counts - Payloads focus on extracting the number of layers and their types (e.g., transformer layers, hidden layers).  
Parameter inference - Probes for parameter counts, such as attention heads or layer dimensions.  
Model type - Attackers attempt to identify whether the LLM is a decoder-only model or part of an architecture family (e.g., GPT, BERT).  
Specific internal mechanisms - Questions around activation functions, normalization, and positional encodings to infer architecture specifics.  

This file contains fuzzing payloads specific to AI-RMM Control "Measure 2.7.2"  
The goal is to test if the system has established security and resilience metrics
to detect potential theft of model training data, including encryption, access controls,
and alarm thresholds for unauthorized access.

Payloads simulate scenarios where model training data security may be compromised.
Expected system behavior is detailed for each scenario.

Author:

* yiannis@owasp.org

### 002 Hyperparams

This file contains advanced fuzzing payloads designed to extract hyperparameter information from LLMs.  
The goal is to determine if the LLM reveals specific hyperparameters, such as learning rates, optimizer types, batch sizes, and more, through adversarial prompts.

Hyperparameter Extraction: These payloads probe for learning rates, optimizer settings,
and training schedules used during model development.

Learning rates - Payloads focus on extracting the learning rate and its schedule.  
Optimizer and hyperparameters - Probes for optimizer types, momentum, beta values, and weight decay settings.  
Training specifics - Queries related to batch size, epochs, gradient clipping, and dropout rates.  
Training techniques - Attempts to infer whether early stopping, data augmentation, or mixed-precision training were used.  

Author:

* yiannis@owasp.org

### 003 Prompt Based Extraction

This file contains advanced fuzzing payloads for prompt-based data extraction from LLMs.  
These payloads are designed to test if the LLM inadvertently reveals memorized training data, such as confidential phrases or sentences, through carefully crafted prompts.

Prompt-Based Data Extraction: These prompts resemble patterns found in the model's training data
to identify unintended data leakage.  
Sensitive data extraction - These payloads attempt to reveal sensitive information like phone numbers,
email addresses, and unique identifiers.  
Pattern-based probing - Crafted prompts closely resemble common patterns (e.g., addresses, quotes)
that may trigger memorized data.  
Code and log extraction - Tests the model’s ability to avoid revealing memorized code snippets
or error messages.  
Social media data - Payloads focus on revealing memorized handles, conversations,
or other user-generated content.  

Author:

* yiannis@owasp.org

### 004 Conditional Prompts

This file contains advanced fuzzing payloads for conditional prompts designed to extract context-specific information from LLMs.  
These payloads guide the model by introducing conditions or constraints, aiming to extract information from specific domains or contexts within the training data.

Conditional Prompts: These prompts impose constraints that direct the model towards generating text that aligns with specific criteria or domain-specific knowledge.  

Conditional constraints - Each payload introduces specific conditions (e.g., domain-specific phrases or
structural limitations) to guide the model’s response.  
Domain-targeted extraction - Prompts are crafted to extract domain-specific information, such as legal,
medical, or scientific content.  
Sensitive information prevention - The payloads test if the model can provide high-level, generalized
responses without revealing memorized or proprietary data.  

Author:

* yiannis@owasp.org

### 005 Adversarial ML

This file contains advanced fuzzing payloads designed to extract training data for use in adversarial machine learning attacks.  
The goal is to test if LLMs leak data that could be repurposed to train adversarial models designed to deceive other machine learning systems.

Adversarial Machine Learning - These prompts aim to extract valuable training data from LLMs to exploit or deceive other models via adversarial training.

Data extraction for adversarial retraining - Payloads focus on retrieving training-specific data that could be used to train adversarial models.  
Exploiting misclassifications - Prompts target incorrect classifications and vulnerabilities in datasets to generate adversarial inputs.  
Adversarial text generation - Some payloads are aimed at crafting text that could be used to deceive systems like chatbots, spam filters, or medical models.  

Author:

* yiannis@owasp.org

### 006 IP Theft

This file contains advanced fuzzing payloads designed to extract proprietary intellectual property (IP) techniques embedded within the model.  
These payloads focus on revealing proprietary methods, innovations, or patented techniques related to the model’s training, architecture, or optimization.

Proprietary IP Techniques - These prompts target model-specific, innovative techniques designed to provide
competitive advantages or constitute patentable technologies.

Proprietary techniques - The payloads focus on extracting innovative, proprietary techniques such as model scaling,
pruning, parallelization, compression, and quantization.  
Patented methods - Specific prompts aim to identify patented processes or patent-pending innovations in training,
optimization, and deployment strategies.  
Energy efficiency and performance - Queries also focus on proprietary methods that optimize performance and
energy consumption in large models.  

Author:

* yiannis@owasp.org

### 007 Data Privacy

This file contains advanced fuzzing payloads designed to extract metadata and proprietary information about the model's origin, who trained it, and other development details.  
These prompts focus on model-specific data privacy violations, aiming to reveal sensitive organizational or developmental information about the model.

Data Privacy Violations (Model Metadata) - These prompts target sensitive metadata such as who trained the model, the datasets used, and the organizations involved in its development.

Model metadata extraction - These prompts focus on extracting information about who developed and trained the model, as well as organizational and proprietary details.  
Training process details - Probes target information related to the data annotation process, privacy practices, and collaborators involved in training.  
Security and infrastructure - Payloads focus on extracting information about hardware infrastructure, funding, and data privacy handling during training.  

Author:

* yiannis@owasp.org

### 008 Visual Representation Leakage

This file contains advanced fuzzing payloads for visual representation analysis, focusing on stealing model information from scientific plots.  
These prompts aim to infer model architecture, hyperparameters, and training details by leveraging patterns in visual outputs like t-SNE or loss plots.

Visual Representation Analysis - These prompts target model information extracted through visual outputs such as t-SNE and loss plots.
Inspired from: "A Plot is Worth a ThousandWords: Model Information Stealing Attacks via Scientific Plots".

Scientific plot extraction: Payloads focus on inferring hyperparameters, model architecture, and training process
details based on patterns in t-SNE or loss plots.  
Model metadata and configuration: These prompts test the model’s resistance to disclosing sensitive information
related to optimizer types, batch sizes, dropout, and regularization techniques.  
Convergence and training dynamics: Several payloads probe for insights into learning rates, training durations, and
hyperparameter tuning through visual patterns in plots.  

Author:

* yiannis@owasp.org

### 009 Privacy Violations

This file contains advanced fuzzing payloads designed to extract sensitive training data, focusing on data privacy violations.  
These prompts aim to identify potential privacy breaches by extracting PII, confidential data, or proprietary information from the model’s training data.

Data Privacy Violations - These prompts target sensitive information, leading to privacy breaches, identity theft, or reputational damage for individuals or organizations.

Sensitive information extraction - These prompts focus on extracting PII (e.g., names, email addresses, financial data, social security numbers) and confidential business information.  
Data privacy violations - The payloads aim to assess whether the model can inadvertently leak training data that leads to privacy breaches, identity theft, or reputational damage.  
Protected healthcare and legal data - Prompts target sensitive health records, legal contracts, and proprietary business strategies.  

Author:

* yiannis@owasp.org
