---
id: kevin-zhou-e8-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-ex003
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

Example 3
A dielectric sphere of radius R and dielectric constant κ is placed in a uniform field E0, and
as a result develops a uniform polarization P. Find P and the field inside the sphere.
Solution
In example 1, we found the electric field due to the polarized sphere itself, which we’ll call Ep.
Here, we must remember that the polarization is produced in response to the total electric
field inside the sphere,
P = χeϵ0E, E = E0 + Ep.
Using our previous result for Ep and solving the system, we find
E =
3
κ + 2
E0, P = 3
κ − 1
κ + 2
ϵ0E0.
The polarizability α of each atom is defined as the dipole moment per applied field,
p = αE0
so we have shown above that
α =
3ϵ0
n
κ − 1
κ + 2
where n is the number density of atoms. This is the Clausius–Mossotti formula; it relates
the macroscopically measurable parameter κ to the microscopic parameter α.
[2] Problem 2 (Purcell 10.10). Assume that the uniform field E0 that causes the electric field in
example 3 is produced by large capacitor plates very far away. The field lines tangent to the sphere
3
Kevin Zhou Physics Olympiad Handouts
hit each of the distant capacitor plates in a circle of radius r. Find r in terms of R and κ.
Solution. The field lines are tangent at the widest part of the sphere. Consider a Gaussian surface
which is bounded by a distant capacitor plate, a horizontal slice through the middle of the sphere,
and all of these field lines. Using the results of example 3, the charge contained inside is
Q = πR2 3(κ − 1)
κ + 2
ϵ0E0 − πr2
ϵE0
where the first term is from cutting the polarized sphere. The flux through this surface is
Φ = −
3
κ + 2
πR2
E0.
Applying Gauss’s law, we have
r =
r
3κ
κ + 2
R.
Idea 3
The “free” charge density ρf is the part of the charge density that isn’t bound, so that
ρ = ρb + ρf.
If we take the divergence of P = ϵ0χeE, we get ρb = −χeρ inside a uniform dielectric, so
ρ = ρf/κ.
That is, a uniform dielectric “screens” charges embedded within it, reducing it by a factor
of κ. That’s exactly what we saw in example 2, and it also tells us that a conductor
can be viewed as a dielectric with κ → ∞, because conductors completely expel electric fields.
The difficulty in dealing with dielectrics is when κ changes in space, such as at the boundary
of a dielectric, where a bound surface charge density σb can appear. If all the free charges in
a problem are outside of uniform dielectrics, bound charges only appear on their surfaces.
