---
id: solution-ocr-kevin-zhou-x2sol-p012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x2-p012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 12. In large, hot stars, energy is also produced by the CNO cycle. We start with a population of ${ } ^ { 12 } \mathrm { C }$, in an environment containing many protons. You are given that ${ } ^ { 13 } \mathrm {~N}$ and ${ } ^ { 15 } \mathrm { O }$ quickly undergo $\beta ^ { + }$decay, and that when ${ } ^ { 15 } \mathrm {~N}$ is bombarded by a proton, the reaction
$$
{ } ^ { 15 } \mathrm {~N} + { } ^ { 1 } \mathrm { H } \rightarrow { } ^ { 12 } \mathrm { C } + { } ^ { 4 } \mathrm { He }
$$
occurs. Write out the steps of the CNO cycle and find the net reaction.
Solution. The initial ${ } ^ { 12 } \mathrm { C }$ and protons collide. Letting ${ } ^ { 13 } \mathrm {~N}$ and ${ } ^ { 15 } \mathrm { O }$ undergo immediate $\beta ^ { + }$decay and continuing the proton bombardment will give the following steps:
$$
\begin{aligned}
{ } ^ { 12 } \mathrm { C } + { } ^ { 1 } \mathrm { H } & \rightarrow { } ^ { 13 } \mathrm {~N} , \\
{ } ^ { 13 } \mathrm {~N} & \rightarrow { } ^ { 13 } \mathrm { C } + e ^ { + } + \nu _ { e } , \\
{ } ^ { 13 } \mathrm { C } + { } ^ { 1 } \mathrm { H } & \rightarrow { } ^ { 14 } \mathrm {~N} , \\
{ } ^ { 14 } \mathrm {~N} + { } ^ { 1 } \mathrm { H } & \rightarrow { } ^ { 15 } \mathrm { O } \\
{ } ^ { 15 } \mathrm { O } & \rightarrow { } ^ { 15 } \mathrm {~N} + e ^ { + } + \nu _ { e } , \\
{ } ^ { 15 } \mathrm {~N} + { } ^ { 1 } \mathrm { H } & \rightarrow { } ^ { 12 } \mathrm { C } + { } ^ { 4 } \mathrm { He } .
\end{aligned}
$$
Summing the steps gives a net reaction of
$$
4 ^ { 1 } \mathrm { H } \rightarrow { } ^ { 4 } \mathrm { He } + 2 e ^ { + } + 2 \nu _ { e } .
$$

Idea 5
A very basic model for the fission of large nuclei is the liquid drop model. We suppose the protons and neutrons are packed with uniform density; thus, the volume is proportional to $A$, the surface area to $A ^ { 2 / 3 }$, and the radius to $A ^ { 1 / 3 }$. The binding energy of the nucleus has several contributions:


- Each nucleon is bound to the others by the strong nuclear force. This force is shortranged, so the binding energy for each nucleon is only due to its neighbors, not on how large the nucleus as a whole is, so it is proportional to $A$.
- There is a negative contribution scaling as $- A ^ { 2 / 3 }$ because nucleons at the surface don't have neighbors on one side.
- There is another negative contribution scaling as $- Z ^ { 2 } / A ^ { 1 / 3 }$ due to the Coulomb repulsion between protons. This scales quadratically with $Z$ because the electromagnetic force is long-ranged, so every proton interacts with every other one.
- Depending on the sophistication of the model, there can be other terms added, whose origin can only be understood through quantum mechanics.
[3] Problem 13. INPhO 2014, problem 7. An instructive general application of the liquid drop model.
Solution. See the official solutions as usual. As Stefan Ivanov notes, there's a minor typo in the answer to part E.
[4] Problem 14. 3 IPhO 1997, problem 2. This applies the liquid drop model to nuclear stability.
You can find a few more exercises on the liquid drop model in part A of IPhO 2023, problem 2, though I think the above problems are enough to get the general idea.


## 3 Basic Particle Physics

It's important to get a feeling for the basics of the Standard Model. To do this, read through chapter 14 of Krane or chapter 1 of Griffiths.
