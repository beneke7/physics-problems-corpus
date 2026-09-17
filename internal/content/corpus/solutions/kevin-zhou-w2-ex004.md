---
id: kevin-zhou-w2-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-ex004
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

Example 4
Find the interference pattern of a diffraction grating, a set of N identical slits in a row, each
separated by a distance d.
Solution
Defining ∆r = dsinθ as before, the amplitude is
A ∼ 1 + eik∆r
+ e2ik∆r
+ ... + e(N−1)ik∆r
=
eikN∆r − 1
eik∆r − 1
.
Factoring out a common phase, we have
A ∼
eikN∆r/2 − e−ikN∆r/2
eik∆r/2 − e−ik∆r/2
=
sin(Nk∆r/2)
sin(k∆r/2)
so the intensity is
I ∝
sin2
(Nk∆r/2)
sin2
(k∆r/2)
.
10
Kevin Zhou Physics Olympiad Handouts
The normalized intensity is plotted below as a function of θ.
The numerator yields rapid oscillations which aren’t very visible; their envelope is given by
the slow oscillations in the denominator. These slow oscillations are the ones we care about;
they are the diffraction peaks and occur when
k∆r
2
= nπ, dsinθ =
2πn
k
= nλ, n ∈ Z.
This is intuitive, because at the maxima, the contributions from each slit are in phase, as
the path length difference between adjacent slits is a multiple of λ.
