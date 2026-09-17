---
id: kevin-zhou-e6-p018
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e6-p018
solution_type: author
source_document: solution-document-kevin-zhou-e6sol
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

[2] Problem 18. Consider the same setup as problem 16, but with the resistor and capacitor switched.
(a) Assuming that V1 ≪ V0, show that the output voltage is proportional to the derivative of the
input voltage. Hence the circuit is a differentiator. (Can you relate this to the kind of filtering
such a setup does?)
(b) Design a circuit whose output is proportional to the integral of V0, again assuming V1 ≪ V0.
Solution. (a) The output voltage will be
V1 = V0
ωRC
√
ω2R2C2 + 1
.
V1 ≪ V0 means that ωRC ≪ 1, so V1 ≈ V0ωRC. Since dV0/dt ∝ ωV0, we see that both V1
and dV0/dt are proportional to ωV0. Since higher frequencies are emphasized, it’s also a high
pass filter.
(b) Now we want V1 ∝ V0/ω. Since the XL ∝ ω and XC ∝ 1/ω, and we’re looking for the opposite
effect, it would make sense to try replacing the capacitor with an inductor.
V1 = V0
R
p
R2 + (ωL)2
.
For V1 ≪ V0, which indicates R ≪ ωL, we get V1 = V0R/ωL, which gets V1 ∝ V0/ω as desired.
This is also a low pass filter.
