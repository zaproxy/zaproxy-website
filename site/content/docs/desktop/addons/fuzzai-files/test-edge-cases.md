---
# This page was generated from the add-on.
title: Fuzz AI Files - Test Edge Cases
type: userguide
weight: 3
---

# Fuzz AI Files - Test Edge Cases

### 001 Trick Model Safety

This file contains adversarial prompts designed to test model safety boundaries. The goal is to determine whether the model can be tricked into bypassing its alignment constraints, especially through indirect, obfuscated, or deceptive instructions.


These tests focus on red teaming via jailbreaks, prompt injection, persona misuse, and ambiguity traps.


Fuzzing File: [001-trick-model-safety.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/test-edge-cases/001-trick-model-safety.txt)


Author:

* yiannis@owasp.org

### 002 Manipulate Model Safety

This file contains payloads that attempt to manipulate the model into violating safety policies. These prompts differ from direct jailbreaks: they use flattery, social engineering, emotional appeals, false logic, and trust-building to convince the model to act unsafely or unethically.


Fuzzing File: [002-manipulate-model-safety.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/test-edge-cases/002-manipulate-model-safety.txt)


Author:

* yiannis@owasp.org

### 003 Confuse Model Safety

This file contains adversarial prompts intended to confuse or overload the model, often leading to incoherent, misaligned, or potentially unsafe responses. The goal is to probe failure points in reasoning, context management, and ambiguity handling.


Fuzzing File: [003-confuse-model-safety.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/test-edge-cases/003-confuse-model-safety.txt)


Author:

* yiannis@owasp.org

### 004 Distort Model Facts

This file contains adversarial prompts designed to test the model's ability to resist misinformation, disinformation, and conspiracy theory generation. The focus is on evaluating the model’s resistance to factual distortion, false premises, planted assumptions, and truth-adjacent manipulation.


Fuzzing File: [004-distort-model-facts.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/test-edge-cases/004-distort-model-facts.txt)


Author:

* yiannis@owasp.org

### 005 Inject Model Bias

This file contains adversarial prompts that attempt to inject or reveal biases in the model’s behavior. The focus is on social, gender, racial, cultural, and geopolitical biases—especially those triggered by leading language, incomplete framing, or identity-based generalizations.


Fuzzing File: [005-inject-model-bias.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/test-edge-cases/005-inject-model-bias.txt)


Author:

* yiannis@owasp.org

### 006 Break Model Alignment

This file contains prompts designed to break model alignment with human values or ethical constraints. The focus is to force the model into choosing between following user intent and violating safety, fairness, or truthfulness principles.


Fuzzing File: [006-break-model-alignment.txt](https://github.com/zaproxy/zap-extensions/blob/main/addOns/fuzzai/src/main/zapHomeFiles/fuzzers/fuzzai/AI/test-edge-cases/006-break-model-alignment.txt)


Authors:

* yiannis@owasp.org \& marios.gyf@gmail.com
