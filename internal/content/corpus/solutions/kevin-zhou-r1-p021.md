---
id: kevin-zhou-r1-p021
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-p021
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

[3] Problem 21. In A’s frame, B has speed u, and C has speed v.
(a) Suppose B and C have velocities in opposite directions. Find the speed of B with respect to
C using four-vectors, by computing the inner product vB · vC in two different frames.
(b) The answer of part (a) should look familiar, but with four-vectors we can easily go further.
Generalize part (a) to the case where B and C have velocities an angle θ apart.
Solution. (a) In A’s frame, the four-velocities are
vB = (γu,γuu), vC = (γv,−γvv).
Let w be the desired answer. Then in C’s frame,
vB = (γw,γww), vC = (1,0).
21
Kevin Zhou Physics Olympiad Handouts
The inner product of vB and vC should be independent of frame, so
γuγv(1 + uv) = γw
or equivalently
1 + uv
√
1 − u2
√
1 − v2
=
1
√
1 − w2
.
Solving for w gives the expected result,
w =
u + v
1 + uv
.
(b) Taking vB to be along the x-axis for concreteness,
vB = (γu,γuu,0), vC = (γv,γvv cosθ,γvv sinθ).
By the same logic as in part (a), we have
γuγv(1 − uv cosθ) = γw
and solving for w gives the complicated result
w =
p
u2 + v2 − 2uv cosθ − u2v2 sin2
θ
1 − uv cosθ
.
This reduces to the usual velocity addition formula for θ = 0 and θ = π. If we didn’t use
the tool of four-vectors and just applied the Lorentz transformations directly, this could have
been quite a mess, but instead it wasn’t much harder than part (a)!
