---
id: solution-ocr-kevin-zhou-m4sol-p025
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p025]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 25. Consider a pendulum whose length adiabatically changes from $L$ to $L / 2$.
    (a) If the initial (small) amplitude was $\theta _ { 0 }$, find the final amplitude using the adiabatic theorem.
    (b) Give a physical interpretation of the adiabatic invariant.
    (c) When quantum mechanics was being invented, it was proposed that the energy in a pendulum's oscillation was always a multiple of $\hbar \omega$, where $\omega$ is the angular frequency. At the first Solvay conference of 1911, Lorentz asked whether this condition would be preserved upon slow changes in the length of the pendulum, and Einstein said yes. Reproduce Einstein's analysis.

Solution. (a) Using the small angle approximation, we have

$$
E = \frac { 1 } { 2 } m v ^ { 2 } + \frac { 1 } { 2 } m g L \theta ^ { 2 }
$$

and the adiabatic invariant is

$$
\oint p d x = L \oint p d \theta = m L \oint v d \theta .
$$

On the other hand, from conservation of energy, we know that $v ( \theta )$ is an ellipse with semimajor and semiminor axes $\sqrt { 2 E / m }$ and $\sqrt { 2 E / m g L }$, so

$$
\oint p d x \propto m L \sqrt { E / m } \sqrt { E / m g L } = E \sqrt { \frac { L } { g } } .
$$

The total energy is $E = m g L \theta _ { 0 } ^ { 2 } / 2$, so

$$
\oint p d x \propto \theta _ { 0 } ^ { 2 } L ^ { 3 / 2 } g ^ { 1 / 2 }
$$


which implies that when $L$ halves, the amplitude becomes $2 ^ { 3 / 4 } \theta _ { 0 }$. Since we kept track of factors of $g$, this derivation also tells us what happens to the amplitude if $g$ is slowly changed.
The most famous literary example of a pendulum with changing length appears in Edgar Allan Poe's short story, The Pit and the Pendulum. In the story, the narrator is strapped to a table, and sees a pendulum above him slowly moving and lengthening, bringing its razor edge toward him. Poe describes the pendulum's amplitude as initially small, but "increasing inexorably". Ths is partly true. We found above that the angular amplitude scales as $L ^ { - 3 / 4 }$, so the linear amplitude scales as $L ^ { 1 / 4 }$, and the max speed scales as $\omega L ^ { 1 / 4 } \propto L ^ { - 1 / 4 }$. But then if the pendulum starts by moving harmlessly slowly, it just gets even slower.
(b) As for the case of a mass on a spring, we can add a third dimension and let the pendulum oscillate in a horizontal circle. Then the adiabatic invariant is simply
$$
\oint L _ { z } d \theta = 2 \pi L _ { z } \propto L _ { z }
$$
which is the angular momentum in the $z$-direction.
(c) Given the way we did part (a), this is immediate. The adiabatic invariant is
$$
E \sqrt { \frac { L } { g } } = \frac { E } { \omega } .
$$
Therefore, $E / \omega$ remains an integer multiple of $\hbar$ under adiabatic change.
