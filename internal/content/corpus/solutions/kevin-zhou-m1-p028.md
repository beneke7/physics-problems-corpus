---
id: kevin-zhou-m1-p028
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p028
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[2] Problem 28. The pilot of a supersonic jet airplane wishes to make a big noise at the origin by
flying around it in a path such that all of the noise he makes is heard simultaneously at the origin.
The jet travels with Mach number M > 1, meaning that its speed is M times the speed of sound.
If the pilot starts at (r,θ) = (a,0), find the pilot’s path r(θ).
Solution. In order for the sound to reach the origin simultaneously, we must have r(t) = a−ct, so
that the sound all reaches the origin at time a/c. On the other hand, we have
(Mc)2
= ṙ2
+ r2
θ̇2
= c2
+ r2
θ̇2
.
This is a bit messy because we have two functions of time, but we can eliminate time by using
θ̇ =
dθ
dr
dr
dt
= −c
dθ
dr
.
19
Kevin Zhou Physics Olympiad Handouts
Plugging this in above, we have
M2
− 1 = r2

dθ
dr
2
and separating and integrating gives
Z r
a
dr′
r′
= ±
Z θ
0
dθ′
√
M2 − 1
, r(θ) = ae±θ/
√
M2−1
.
The ± sign ambiguity above came from taking a square root, and physically means that the pilot
can choose to fly clockwise or counterclockwise.
