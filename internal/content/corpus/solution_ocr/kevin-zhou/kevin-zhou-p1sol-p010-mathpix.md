---
id: solution-ocr-kevin-zhou-p1sol-p010
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p010]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 10 (Insight). In this problem we'll do one of the most famous dimensional analyses of all time: estimating the yield of the first atomic bomb blast. Such a blast will create a shock wave of air, which reaches a radius $R$ at time $t$ after the blast. The air density is $\rho$, and we want to estimate the blast energy $E$.
    (a) Declassified photographs of the blast indicate that $R \approx 100 \mathrm {~m}$ at time $t \approx 15 \mathrm {~ms}$. The density of air is $\rho \approx 1 \mathrm {~kg} / \mathrm { m } ^ { 3 }$. Estimate the blast energy $E$.
    (b) How much mass-energy (in grams) was used up in this blast?
    (c) If we measure the entire function $R ( t )$, what general form would we expect it to have, if this dimensional analysis argument is correct?

(d) Repeat part (c) for the case where the shock wave is cylindrical. (This would be relevant if one detonated a long chain of explosives.)

Solution. (a) The only way to write an expression with the right dimensions is

$$
E \sim \frac { R ^ { 5 } \rho } { t ^ { 2 } } .
$$

Plugging in the numbers gives $E \sim 4 \times 10 ^ { 13 } \mathrm {~J}$.

(b) The mass-energy equivalent is $m = E / c ^ { 2 } \sim 0.5 \mathrm {~g}$. This is quite reasonable, as fission can only release a small fraction of the mass-energy (about 0.1\%) of a sample, and a typical critical mass is ~ 10 kg.
(c) Let's do the dimensional analysis in reverse: we know $E$ is fixed, so the only way to write an expression with the right dimensions for $R$ is
$$
R \sim \left( E t ^ { 2 } / \rho \right) ^ { 1 / 5 } \sim t ^ { 2 / 5 } .
$$
This indeed matches observations of the initial blast.
(d) In this case, the dimensional analysis changes because the energy of an infinite cylindrical shock wave is infinite; the meaningful quantity is the energy per length $\lambda$. Repeating the dimensional analysis gives
$$
R \sim \left( \lambda t ^ { 2 } / \rho \right) ^ { 1 / 4 } \sim t ^ { 1 / 2 } .
$$

Remark
The British physicist G. I. Taylor performed the dimensional analysis in problem 10 upon seeing a picture of the first atomic blast in a magazine. The result was so good that the physicists at the Manhattan project thought their security had been breached!

During World War II, the value of the critical mass needed to set off a nuclear explosion was important and nontrivial information. Some say the Nazi effort to make a bomb was stalled by Werner Heisenberg's huge overestimation of it, and after the war, the specific value was kept a secret. But it couldn't last. Already by 1947, the simple estimate was published in the American Journal of Physics.
