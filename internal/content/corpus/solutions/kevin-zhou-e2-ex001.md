---
id: kevin-zhou-e2-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-ex001
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

Example 1
Two grounded conducting half-planes intersect, so that in cylindrical coordinates, the equa-
tions describing the planes are θ = 0 and θ = θp = π/2. A charge q is placed somewhere
between the planes. Can the method of images be used to find the force on the charge? What
2
Kevin Zhou Physics Olympiad Handouts
if θp = 2π/3, or for general θp?
Solution
We can solve the first case with three image charges. Let the real charge q be at (x,y).
Then we can reflect in the plane θ = 0, adding an image charge −q at (x,−y) to satisfy its
boundary condition. Then we can reflect both the real charge and this image charge in the
plane θ = π/2 to satisfy that plane’s boundary condition, adding an image charge −q at
(−x,y) and an image charge q at (−x,−y).
But when the other plane is at θ = 2π/3, there is no configuration of image charges that
works. For concreteness, let’s suppose the real charge is at point A, on the y-axis.
Reflecting in the θ = 0 plane forces us to have an image charge −q at D, reflecting in the
θ = 2π/3 plane yields an image charge q at E, and reflecting in the θ = 0 plane again yields
a −q charge at F, which is real since it’s in the same region as A. But this isn’t allowed:
the point of image charges is to provide an easy way of calculating the effects of screening
charges on conducting surfaces on a given set of real charges (i.e. the charge at A), so it’s
not legal to introduce new real charges in the process. We would get the same conclusion
if we reflected about the planes in a different order – we always need a charge at F. More
generally, the method of images works for this problem if and only if θp = π/n for integer n.
