---
id: solution-ocr-kevin-zhou-t2sol-p013
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p013]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 13. Show that the third law requires the specific heat $C$ to approach zero as the temperature approaches zero. (Since this isn't true for a classical ideal gas, the ideal gas law must break down in quantum mechanics, at low temperatures. You can also see this from your result for the entropy in problem 9, which diverges at low temperatures; there's no way to add a constant to it to make it go to zero at zero temperature.)
Solution. We have
$$
d S = \frac { \partial Q } { T } = \frac { C ( T ) d T } { T } .
$$
Therefore, for a small temperature $T _ { 0 }$, we have
$$
S \left( T _ { 0 } \right) = \int _ { 0 } ^ { T _ { 0 } } d T \frac { C ( T ) } { T }
$$
and the right-hand side must go to zero as $T _ { 0 }$ goes to zero. But if $C ( T )$ doesn't go to zero as $T$ does, instead approaching a nonzero limit, then the right-hand side is instead infinite.

Idea 8: Microcanonical Ensemble
If a large isolated system in thermodynamic equilibrium is in one of $\Omega$ quantum states, then we assume all of the states are equally likely, and the entropy is

$$
S = k _ { B } \log \Omega .
$$

This is the fundamental definition of entropy; in fact the equation $d S = d Q / T$ does not define entropy, but rather defines temperature! The third law follows from this result because at temperature $T = 0$, all systems settle into their ground state, so $\Omega = 1$ and $S = 0$.

The entropy describes how much information is required to specify the true state of the system. The factor of $k _ { B }$ is due to historical convention. The logarithm makes sense because if we have two independent systems, which could be in $\Omega _ { 1 }$ or $\Omega _ { 2 }$ different states, then we want the entropy to add, $\log \left( \Omega _ { 1 } \Omega _ { 2 } \right) = \log \left( \Omega _ { 1 } \right) + \log \left( \Omega _ { 2 } \right)$.

Remark
The assumption that all states are equally likely may sound a bit confusing, because in T1 we used the Boltzmann distribution, which stated that higher-energy states were less likely to be occupied. The difference is that for the Boltzmann distribution, we assumed the system


was inside an environment at temperature $T$. In fact, all quantum states of the system and environment together remain equally likely in this context, but lower-energy states of the system correspond to more energy in the environment, and hence (usually) more possible environment states. Thus, accounting for the number of possible environment states, lowerenergy states of the system are more likely. You will make all this precise in problem 14, where you will use it to derive the Boltzmann distribution.

Example 5: Mixing Entropy
Repeat example 4 using statistical mechanics.

Solution
In statistical mechanics, we can compute $S$ directly using $S = k _ { B } \log \Omega$. Focusing on a single oxygen or nitrogen molecule, let $\Omega _ { i }$ be the initial number of possible states. When the partition is removed, the possible position space for the particle doubles, and since quantum states all have the same volume in phase space, the number of states available doubles. So for one particle,

$$
\Delta S _ { \text {part } } = k _ { B } \log \left( 2 \Omega _ { i } \right) - k _ { B } \log \Omega _ { i } = k _ { B } \log 2 .
$$

Since the $2 N$ particles are independent,

$$
\Delta S = 2 N \Delta S _ { \mathrm { part } } = 2 N k _ { B } \log 2
$$

in agreement with the result from thermodynamics.
