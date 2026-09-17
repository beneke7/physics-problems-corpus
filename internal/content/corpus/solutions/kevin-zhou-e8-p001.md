---
id: kevin-zhou-e8-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-p001
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

[1] Problem 1. An infinite cylindrical rod of radius R has a uniform polarization P.
(a) If P is perpendicular to the rod’s axis, describe E outside, and find the value of E inside.
(b) If P is parallel to the rod’s axis, find the electric field everywhere.
Solution. (a) The resulting bound charge is equivalent to having two uniform cylinders of total
linear charge density λ separated by d where λd = (πR2)P.
Outside the rod, this is equivalent to two lines of charge density ±λ separated by d. As for
inside, note that for a single cylinder with charge density ρ, Gauss’s law tells us that the field
is E = ρr/(2ϵ0). Thus, superposing the positive and negative cylinders, the field inside the
rod is
E = −
ρd
2ϵ0
= −
P
2ϵ0
which is uniform. (There’s a little paradox here: why doesn’t the limit R → ∞ of this answer
coincide with the R → ∞ limit of the result of example 1? As was discussed in a related
context in E1, the issue is that when a charge configuration is infinite, the answer is ambiguous
and depends on boundary conditions. In this problem, we are implicitly adopting boundary
conditions that yield a field with cylindrical symmetry.)
(b) In this case there’s no bound charge anywhere. (You can imagine charge displaced a bit from
infinity in one direction to infinity in the other direction.) So there is no electric field at all.
Now let’s think about how polarization arises in the first place.
Idea 2: Electric Susceptibility
A small number of insulators are “ferroelectrics”, whose crystal structure lets them maintain
a preferred polarization P in the absence of external electric fields. (You can suppose that the
preceding example and problem were implicitly about ferroelectrics.) But the vast majority
of insulators are dielectrics, whose polarization is related to the total electric field by
P = ϵ0χeE, ϵ = ϵ0(1 + χe) = ϵ0κ
where χe is the electric susceptibility and κ is the dielectric constant. The susceptibility is
nonnegative, except in some very exotic materials. The key difficulty is that above, E is the
total electric field, including that due to the bound charge, which in turn depends on P.
