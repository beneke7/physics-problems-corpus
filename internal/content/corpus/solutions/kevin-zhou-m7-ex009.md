---
id: kevin-zhou-m7-ex009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-ex009
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

Example 9
A whirly tube is a long, narrow, flexible tube that produces musical tones when swung. Model
a whirly tube as a cylinder of length L, rotated about one end with angular velocity ω. For
simplicity, neglect gravity. What is the speed of the air when it shoots out the other end?
Solution
The air is slowly sucked from all directions around the entry hole, and shot out at the exit
hole. Applying Bernoulli’s principle between a point near the entry hole, and the exit hole,
Patm ≈ Patm +
1
2
ρv2
out.
But that implies vout ≈ 0, which doesn’t make sense. The problem is that Bernoulli’s
principle applies to steady flows, and this situation is definitely not steady: by the time the
air goes through the tube, the tube has rotated by a significant amount.
13
Kevin Zhou Physics Olympiad Handouts
Instead, we apply Bernoulli’s principle in a reference frame rotating with the tube. The
centrifugal force gives an additional term, turning it into
P +
1
2
ρv2
−
1
2
ρω2
r2
= const.
Applying Bernoulli’s principle between the same two points gives
Patm ≈ Patm +
1
2
ρv2
−
1
2
ρω2
L2
from which we conclude v = ωL. Transforming back to the original reference frame, the exit
speed of the air is
p
v2 + (ωL)2 =
√
2ωL.
