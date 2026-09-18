---
id: kevin-zhou-t3-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t3-p001
solution_type: author
source_document: solution-document-kevin-zhou-t3sol
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T3Sol.pdf."
---

[3] Problem 1. Here, we use the above idea to very roughly estimate the surface tension of water.
(a) Estimate the spacing between water molecules. (Hint: you could use known atomic distance
scales, or reverse engineer this from the known density of water.)
(b) Estimate the energy of a hydrogen bond, which is a weak type of chemical bond.
(c) Using these results, estimate the surface tension of water, and compare this to actual value
γ = 0.073N/m.
(d) Estimate the typical height of a droplet of water on a flat surface.
Solution. (a) The size of one hydrogen atom is about 10−10 m, also known as an angstrom. Since
water is H2O and oxygen atoms are a bit bigger, we can estimate the distance between water
molecules to be 10−9 m.
(b) The typical maximum energy scale of chemical bonds is about 1eV. There are a few ways
to do this. You can remember that the binding energy of an electron in a hydrogen atom is
13.6eV, and the chemical bond energies are a bit smaller. Or, you can recall that the electrons
in batteries are pushed by chemical reactions, and a typical battery voltage is 1V. Hydrogen
bonds are particularly weak, so their energy is about 0.1eV.
1
Kevin Zhou Physics Olympiad Handouts
(c) The number of water molecules per area 1m2 is about 1018, and the energy of each missing
bond is 0.1eV = 1.6 × 10−20 J, giving an estimate of about 0.01J/m2, within an order of
magnitude of the true value.
(d) By dimensional analysis, this must be h ∼
p
γ/gρ where ρ is the density of water. (This can
also be obtained by heuristically minimizing the sum of gravitational potential energy and
surface tension, where the first favors a small height and the second favors a large height.)
Plugging in numbers, we get h ∼ 3mm, which is quite reasonable.
Another way of saying this is that there’s only one dimensionless quantity you can build out
of the given variables, gρh2/γ. This is known as the Eotvos number, and quantifies the ratio
of the importance of gravitational and surface tension forces (just like the Reynolds number
you found in M7 quantifies the ratio of inertial and viscous forces). Since a droplet requires
these forces to balance, the Eotvos number should be of order 1, recovering the answer.
Next, we consider problems that combine surface tension with ideas in thermodynamics.
[2] Problem 2 (PPP 62). Two soap bubbles of radii R1 and R2 are joined by a straw. Air goes from
one bubble to the other and a single bubble of radius R3 is formed isothermally. The atmospheric
pressure is P.
(a) If R1 < R2, which bubble loses air and which bubble gains it?
(b) Show that if γ is zero, then R3
3 = R3
1 + R3
2.
(c) When γ is nonzero, the relation in part (b) is modified. Solve for γ in terms of R1, R2, R3,
and P. Is this a practical way to measure γ for typical soap bubbles?
Solution. We use the fact, derived in M2, that a bubble with radius R has excess pressure 4γ/R.
(a) The bubble with a smaller radius has a larger excess pressure. Thus when the bubbles are
connected, bubble 1 will lose air, and bubble 2 will gain it.
(b) All the bubbles have the same temperature, and the number of moles adds, so the ideal gas
law gives
P1V1 + P2V2 = P3V3.
If there is no surface tension, then all the Pi are equal to P, so V3 = V1 + V2.
(c) Accounting for the excess pressure, we have

P +
4γ
R1

R3
1 +

P +
4γ
R2

R3
2 =

P +
4γ
R3

R3
3
and solving for γ gives
γ =
P
4
R3
3 − R3
1 − R3
2
R2
1 + R2
2 − R2
3
.
Since γ is small, the numerator will be quite small relative to the radii of the bubbles, so
the answer will have a large relative error even if each length is determined precisely. So this
method isn’t very practical.
2
Kevin Zhou Physics Olympiad Handouts
[2] Problem 3 (Cahn). A tightly closed jar is completely filled with water. At the bottom of the jar
are two small air bubbles. The pressure at the top of the jar is P0, the radius of each bubble is R0,
and the surface tension is γ. The two bubbles then merge isothermally. Calculate the new pressure
at the top of the jar.
Solution. Since the air-water surface has only one “side”, the excess pressure is ∆P = 2γ/R0. The
process is isothermal and the number of moles of gas stays the same, so by the ideal gas law,

P1 +
2γ
R1

R3
1 = 2

P0 +
2γ
R0

R3
0.
Since water is incompressible, the volume of gas should also stay the same, R3
1 = 2R3
0, which gives
P1 = P0 +
γ
R0
(2 − 22/3
).
[3] Problem 4.   W 1 0USAPhO 2007, problem A3.
[3] Problem 5.   ^ 1 0IPhO 2014, problem 1B.
Idea 2
One can also have liquid, solid, and airin the same problem, which leads to some complications.
Let Al and As be the surface areas of the liquid and solid exposed to the air, and Asl be the
surface area of the liquid-solid interface. Then there are three terms in the work,
d̄W = γl dAl + γs dAs + γsl dAsl.
In other words, there are three surface tensions, one associated with each kind of interface.
Both γl and γs arise from the fact that cohesive liquid-liquid or solid-solid bonds are broken
to form a surface. However, γsl is determined by the adhesive forces between the liquid and
solid, which may lead to a positive or negative contribution to the energy.
Specifically, let’s define the energy of adhesion Usl to be the work needed, per area, to separate
a liquid from a solid, thereby turning a liquid-solid interface into a liquid-air and solid-air
interface. By the definitions above,
Usl = γl + γs − γsl.
Now, Usl can be computed in terms of microscopic chemical bond energies, like γl and γs,
so this result can also be thought of as a microscopic definition of γsl. When a liquid is in
contact with a solid, the solid exerts a force per length of Usl on the boundary of the liquid,
along the solid.
