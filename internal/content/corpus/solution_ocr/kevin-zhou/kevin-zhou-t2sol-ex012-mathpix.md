---
id: solution-ocr-kevin-zhou-t2sol-ex012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 12
Find the steady state heat flow through a rectangular slab of area $A$ and thickness $d$, whose left and right ends are held at temperature $T$ and $T + \Delta T$.

Solution
By the argument in the above idea, in the steady state the energy density within the slab is constant, so $\partial ^ { 2 } T / \partial x ^ { 2 } = 0$ and the temperature gradient is uniform. In this steady state, heat simply flows uniformly through the slab, without accumulating anywhere in it, just like current flows uniformly through a resistor. (Since this "internal" steady state is often reached quickly, in many problems it is just assumed to hold, without being explicitly stated.)

Therefore, the temperature gradient is just $\Delta T / d$ everywhere in the slab, so

$$
P = J A = \frac { \kappa A \Delta T } { d } .
$$

This is the key equation for heat conduction problems.

Remark: Continuity Equations
We can generalize the results above to three dimensions. In this case, the flux of heat is described by a vector,

$$
\mathbf { J } = - \kappa \nabla T .
$$

The conservation of energy equation becomes

$$
\frac { \partial u } { \partial t } = - \nabla \cdot \mathbf { J } = \kappa \nabla ^ { 2 } T .
$$

The first equality here is known as a continuity equation, and it is the general way that the density of a conserved quantity is related to a flow. For example, the continuity equation for fluids, which we saw in one-dimensional form in M7, is written in three dimensions as

$$
\frac { \partial \rho } { \partial t } = - \nabla \cdot ( \rho \mathbf { v } )
$$

and expresses conservation of mass. The continuity equation for charge, which we'll see in E4, is very similar,

$$
\frac { \partial \rho } { \partial t } = - \nabla \cdot \mathbf { J }
$$

where $\rho$ is a charge density and $\mathbf { J }$ is a current density.
[2] Problem 26. Suppose it takes five minutes to boil a chicken egg. Estimate how long it takes to boil an ostrich egg, which has three times the diameter.

Solution. The thermal gradient $d T / d r$ is of the order $\Delta T / R \propto 1 / R$, where $R$ is the radius of the object. The heat flux into the egg is proportional to $A d T / d r \propto R ^ { 2 } ( 1 / R ) = R$. But the heat capacity of the egg scales as $R ^ { 3 }$. Thus, the time scales as $R ^ { 3 } / R = R ^ { 2 }$, and hence it takes about 45 minutes to boil an ostrich egg. (This can also be shown by dimensional analysis.)


[2] Problem 27 (Cahn). A deep swimming pool is initially filled with water of depth $D = 0.5 \mathrm {~m}$ with uniform temperature $0 ^ { \circ } \mathrm { C }$, during a cold winter where the air temperature is a constant $T _ { 0 } \approx - 10 ^ { \circ } \mathrm { C }$. The ice has thermal conductivity $\kappa = 2.2 \mathrm {~W} / \mathrm { mK }$, and latent heat of fusion $L = 3.4 \times 10 ^ { 5 } \mathrm {~J} / \mathrm { kg }$. The density of ice is $\rho _ { i } = 0.9 \times 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 }$, and the density of water is $\rho _ { w } = 1.0 \times 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 }$. Assume for simplicity that the ice always forms a uniform layer over the water. Estimate how many days it takes the whole pool to freeze.
Solution. Let the ice layer on the top of the lake have thickness $x$. The temperature difference across the ice layer is a constant $\Delta T = 10 ^ { \circ } \mathrm { C }$, so the rate of heat flow through the ice is
$$
P = \frac { \kappa A \Delta T } { x } = L \rho _ { i } A \frac { d x } { d t } .
$$
Separating and integrating gives
$$
\int _ { 0 } ^ { D \rho _ { w } / \rho _ { i } } x d x = \int _ { 0 } ^ { t } \frac { \kappa \Delta T } { L \rho _ { i } } d t
$$
where the final height is $D \rho _ { w } / \rho _ { i } \approx 1.1 D$ because water expands as it freezes. Notice that this implies the growth of the ice slows down over time, $x \propto \sqrt { t }$. This makes sense, since as the ice grows thicker, the temperature gradient gets smaller, slowing the heat transfer. By carrying out the integral, we find
$$
t = \frac { D ^ { 2 } L \rho _ { i } } { 2 \kappa \Delta T } \frac { \rho _ { w } ^ { 2 } } { \rho _ { i } ^ { 2 } } = 25 \text { days. }
$$
