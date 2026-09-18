---
id: solution-ocr-kevin-zhou-e6sol-p018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e6-p018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 18. Consider the same setup as problem 16, but with the resistor and capacitor switched.
    (a) Assuming that $V _ { 1 } \ll V _ { 0 }$, show that the output voltage is proportional to the derivative of the input voltage. Hence the circuit is a differentiator. (Can you relate this to the kind of filtering such a setup does?)
    (b) Design a circuit whose output is proportional to the integral of $V _ { 0 }$, again assuming $V _ { 1 } \ll V _ { 0 }$.

Solution. (a) The output voltage will be

$$
V _ { 1 } = V _ { 0 } \frac { \omega R C } { \sqrt { \omega ^ { 2 } R ^ { 2 } C ^ { 2 } + 1 } }
$$

$V _ { 1 } \ll V _ { 0 }$ means that $\omega R C \ll 1$, so $V _ { 1 } \approx V _ { 0 } \omega R C$. Since $d V _ { 0 } / d t \propto \omega V _ { 0 }$, we see that both $V _ { 1 }$ and $d V _ { 0 } / d t$ are proportional to $\omega V _ { 0 }$. Since higher frequencies are emphasized, it's also a high pass filter.


(b) Now we want $V _ { 1 } \propto V _ { 0 } / \omega$. Since the $X _ { L } \propto \omega$ and $X _ { C } \propto 1 / \omega$, and we're looking for the opposite effect, it would make sense to try replacing the capacitor with an inductor.
$$
V _ { 1 } = V _ { 0 } \frac { R } { \sqrt { R ^ { 2 } + ( \omega L ) ^ { 2 } } } .
$$
For $V _ { 1 } \ll V _ { 0 }$, which indicates $R \ll \omega L$, we get $V _ { 1 } = V _ { 0 } R / \omega L$, which gets $V _ { 1 } \propto V _ { 0 } / \omega$ as desired. This is also a low pass filter.
