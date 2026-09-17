---
id: kevin-zhou-t2-ex012
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-ex012
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

Example 12
Find the steady state heat flow through a rectangular slab of area A and thickness d, whose
left and right ends are held at temperature T and T + ∆T.
Solution
By the argument in the above idea, in the steady state the energy density within the slab
is constant, so ∂2T/∂x2 = 0 and the temperature gradient is uniform. In this steady state,
heat simply flows uniformly through the slab, without accumulating anywhere in it, just
like current flows uniformly through a resistor. (Since this “internal” steady state is often
reached quickly, in many problems it is just assumed to hold, without being explicitly stated.)
Therefore, the temperature gradient is just ∆T/d everywhere in the slab, so
P = JA =
κA∆T
d
.
This is the key equation for heat conduction problems.
Remark: Continuity Equations
We can generalize the results above to three dimensions. In this case, the flux of heat is
described by a vector,
J = −κ∇T.
The conservation of energy equation becomes
∂u
∂t
= −∇ · J = κ∇2
T.
The first equality here is known as a continuity equation, and it is the general way that the
density of a conserved quantity is related to a flow. For example, the continuity equation for
fluids, which we saw in one-dimensional form in M7, is written in three dimensions as
∂ρ
∂t
= −∇ · (ρv)
and expresses conservation of mass. The continuity equation for charge, which we’ll see in
E4, is very similar,
∂ρ
∂t
= −∇ · J
where ρ is a charge density and J is a current density.
[2] Problem 26. Suppose it takes five minutes to boil a chicken egg. Estimate how long it takes to
boil an ostrich egg, which has three times the diameter.
Solution. The thermal gradient dT/dr is of the order ∆T/R ∝ 1/R, where R is the radius of
the object. The heat flux into the egg is proportional to AdT/dr ∝ R2(1/R) = R. But the heat
capacity of the egg scales as R3. Thus, the time scales as R3/R = R2, and hence it takes about 45
minutes to boil an ostrich egg. (This can also be shown by dimensional analysis.)
31
Kevin Zhou Physics Olympiad Handouts
[2] Problem 27 (Cahn). A deep swimming pool is initially filled with water of depth D = 0.5m with
uniform temperature 0◦C, during a cold winter where the air temperature is a constant T0 ≈ −10◦C.
The ice has thermal conductivity κ = 2.2W/mK, and latent heat of fusion L = 3.4×105 J/kg. The
density of ice is ρi = 0.9 × 103 kg/m3, and the density of water is ρw = 1.0 × 103 kg/m3. Assume
for simplicity that the ice always forms a uniform layer over the water. Estimate how many days it
takes the whole pool to freeze.
Solution. Let the ice layer on the top of the lake have thickness x. The temperature difference
across the ice layer is a constant ∆T = 10◦C, so the rate of heat flow through the ice is
P =
κA∆T
x
= LρiA
dx
dt
.
Separating and integrating gives
Z Dρw/ρi
0
xdx =
Z t
0
κ∆T
Lρi
dt
where the final height is Dρw/ρi ≈ 1.1D because water expands as it freezes. Notice that this
implies the growth of the ice slows down over time, x ∝
√
t. This makes sense, since as the ice
grows thicker, the temperature gradient gets smaller, slowing the heat transfer. By carrying out
the integral, we find
t =
D2Lρi
2κ∆T
ρ2
w
ρ2
i
= 25days.
