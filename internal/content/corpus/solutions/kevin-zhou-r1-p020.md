---
id: kevin-zhou-r1-p020
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-p020
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

[2] Problem 20. In your inertial frame, there is a particle with four-momentum pµ, and an observer
moving with four-velocity uµ. The observer measures the particle in their inertial frame.
(a) Show that the energy they measure is p · u.
(b) Show that the momentum they measure has magnitude
p
(p · u)2 − p · p.
(c) What is the speed that they measure?
Don’t use Lorentz transformations here; everything can be done with four-vectors alone.
Solution. (a) We can evaluate p·u in the observer’s frame. In that case, uµ = (1,0,0,0), so p·u
just picks out the first component of pµ in that frame, which is by definition the energy the
observer measures.
(b) Continuing to work in the observer’s frame, and writing pµ = (E,p), where E and p are the
energy and momentum in the observer’s frame, we have
(p · u)2
− p · p = E2
− (E2
− |p|2
) = |p|2
which gives the desired result.
(c) Note that E = γm and p = γmv, so the speed they measure is the ratio
|v| =
|p|
E
=
p
(p · u)2 − p · p
p · u
=
r
1 −
p · p
(p · u)2
.
A nice feature of this result is that it’s immediately clear that |v| ≤ 1.
