---
id: solution-ocr-kevin-zhou-t3sol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t3-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 1. Here, we use the above idea to very roughly estimate the surface tension of water.

(a) Estimate the spacing between water molecules. (Hint: you could use known atomic distance scales, or reverse engineer this from the known density of water.)
(b) Estimate the energy of a hydrogen bond, which is a weak type of chemical bond.
(c) Using these results, estimate the surface tension of water, and compare this to actual value $\gamma = 0.073 \mathrm {~N} / \mathrm { m }$.
(d) Estimate the typical height of a droplet of water on a flat surface.

Solution. (a) The size of one hydrogen atom is about $10 ^ { - 10 } \mathrm {~m}$, also known as an angstrom. Since water is $\mathrm { H } _ { 2 } \mathrm { O }$ and oxygen atoms are a bit bigger, we can estimate the distance between water molecules to be $10 ^ { - 9 } \mathrm {~m}$.

(b) The typical maximum energy scale of chemical bonds is about 1 eV. There are a few ways to do this. You can remember that the binding energy of an electron in a hydrogen atom is 13.6 eV, and the chemical bond energies are a bit smaller. Or, you can recall that the electrons in batteries are pushed by chemical reactions, and a typical battery voltage is 1 V. Hydrogen bonds are particularly weak, so their energy is about 0.1 eV.

(c) The number of water molecules per area $1 \mathrm {~m} ^ { 2 }$ is about $10 ^ { 18 }$, and the energy of each missing bond is $0.1 \mathrm { eV } = 1.6 \times 10 ^ { - 20 } \mathrm {~J}$, giving an estimate of about $0.01 \mathrm {~J} / \mathrm { m } ^ { 2 }$, within an order of magnitude of the true value.
(d) By dimensional analysis, this must be $h \sim \sqrt { \gamma / g \rho }$ where $\rho$ is the density of water. (This can also be obtained by heuristically minimizing the sum of gravitational potential energy and surface tension, where the first favors a small height and the second favors a large height.) Plugging in numbers, we get $h \sim 3 \mathrm {~mm}$, which is quite reasonable.
Another way of saying this is that there's only one dimensionless quantity you can build out of the given variables, $g \rho h ^ { 2 } / \gamma$. This is known as the Eotvos number, and quantifies the ratio of the importance of gravitational and surface tension forces (just like the Reynolds number you found in M7 quantifies the ratio of inertial and viscous forces). Since a droplet requires these forces to balance, the Eotvos number should be of order 1, recovering the answer.

Next, we consider problems that combine surface tension with ideas in thermodynamics.
[2] Problem 2 (PPP 62). Two soap bubbles of radii $R _ { 1 }$ and $R _ { 2 }$ are joined by a straw. Air goes from one bubble to the other and a single bubble of radius $R _ { 3 }$ is formed isothermally. The atmospheric pressure is $P$.

(a) If $R _ { 1 } < R _ { 2 }$, which bubble loses air and which bubble gains it?
(b) Show that if $\gamma$ is zero, then $R _ { 3 } ^ { 3 } = R _ { 1 } ^ { 3 } + R _ { 2 } ^ { 3 }$.
(c) When $\gamma$ is nonzero, the relation in part (b) is modified. Solve for $\gamma$ in terms of $R _ { 1 } , R _ { 2 } , R _ { 3 }$, and $P$. Is this a practical way to measure $\gamma$ for typical soap bubbles?

Solution. We use the fact, derived in M2, that a bubble with radius $R$ has excess pressure $4 \gamma / R$.

(a) The bubble with a smaller radius has a larger excess pressure. Thus when the bubbles are connected, bubble 1 will lose air, and bubble 2 will gain it.
(b) All the bubbles have the same temperature, and the number of moles adds, so the ideal gas law gives
$$
P _ { 1 } V _ { 1 } + P _ { 2 } V _ { 2 } = P _ { 3 } V _ { 3 } .
$$
If there is no surface tension, then all the $P _ { i }$ are equal to $P$, so $V _ { 3 } = V _ { 1 } + V _ { 2 }$.
(c) Accounting for the excess pressure, we have
$$
\left( P + \frac { 4 \gamma } { R _ { 1 } } \right) R _ { 1 } ^ { 3 } + \left( P + \frac { 4 \gamma } { R _ { 2 } } \right) R _ { 2 } ^ { 3 } = \left( P + \frac { 4 \gamma } { R _ { 3 } } \right) R _ { 3 } ^ { 3 }
$$
and solving for $\gamma$ gives
$$
\gamma = \frac { P } { 4 } \frac { R _ { 3 } ^ { 3 } - R _ { 1 } ^ { 3 } - R _ { 2 } ^ { 3 } } { R _ { 1 } ^ { 2 } + R _ { 2 } ^ { 2 } - R _ { 3 } ^ { 2 } } .
$$
Since $\gamma$ is small, the numerator will be quite small relative to the radii of the bubbles, so the answer will have a large relative error even if each length is determined precisely. So this method isn't very practical.

[2] Problem 3 (Cahn). A tightly closed jar is completely filled with water. At the bottom of the jar are two small air bubbles. The pressure at the top of the jar is $P _ { 0 }$, the radius of each bubble is $R _ { 0 }$, and the surface tension is $\gamma$. The two bubbles then merge isothermally. Calculate the new pressure at the top of the jar.
Solution. Since the air-water surface has only one "side", the excess pressure is $\Delta P = 2 \gamma / R _ { 0 }$. The process is isothermal and the number of moles of gas stays the same, so by the ideal gas law,
$$
\left( P _ { 1 } + \frac { 2 \gamma } { R _ { 1 } } \right) R _ { 1 } ^ { 3 } = 2 \left( P _ { 0 } + \frac { 2 \gamma } { R _ { 0 } } \right) R _ { 0 } ^ { 3 } .
$$
Since water is incompressible, the volume of gas should also stay the same, $R _ { 1 } ^ { 3 } = 2 R _ { 0 } ^ { 3 }$, which gives
$$
P _ { 1 } = P _ { 0 } + \frac { \gamma } { R _ { 0 } } \left( 2 - 2 ^ { 2 / 3 } \right) .
$$
[3] Problem 4. USAPhO 2007, problem A3.
[3] Problem 5. IPhO 2014, problem 1B.

Idea 2
One can also have liquid, solid, and air in the same problem, which leads to some complications. Let $A _ { l }$ and $A _ { s }$ be the surface areas of the liquid and solid exposed to the air, and $A _ { s l }$ be the surface area of the liquid-solid interface. Then there are three terms in the work,

$$
d W = \gamma _ { l } d A _ { l } + \gamma _ { s } d A _ { s } + \gamma _ { s l } d A _ { s l } .
$$

In other words, there are three surface tensions, one associated with each kind of interface.
Both $\gamma _ { l }$ and $\gamma _ { s }$ arise from the fact that cohesive liquid-liquid or solid-solid bonds are broken to form a surface. However, $\gamma _ { s l }$ is determined by the adhesive forces between the liquid and solid, which may lead to a positive or negative contribution to the energy.

Specifically, let's define the energy of adhesion $U _ { s l }$ to be the work needed, per area, to separate a liquid from a solid, thereby turning a liquid-solid interface into a liquid-air and solid-air interface. By the definitions above,

$$
U _ { s l } = \gamma _ { l } + \gamma _ { s } - \gamma _ { s l } .
$$

Now, $U _ { s l }$ can be computed in terms of microscopic chemical bond energies, like $\gamma _ { l }$ and $\gamma _ { s }$, so this result can also be thought of as a microscopic definition of $\gamma _ { s l }$. When a liquid is in contact with a solid, the solid exerts a force per length of $U _ { s l }$ on the boundary of the liquid, along the solid.
