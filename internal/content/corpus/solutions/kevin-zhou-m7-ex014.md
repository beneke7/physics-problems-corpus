---
id: kevin-zhou-m7-ex014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-ex014
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

Example 14
If you’ve used a standard garden hose, you might have noticed that the water shoots higher
if you partially block the outlet with your finger. Why does this happen?
Solution
The water company provides water to your house at a fixed pressure Patm + ∆P. Thus,
naively the water should always shoot equally far, because Bernoulli’s principle says the exit
speed is v =
p
2∆P/ρ, corresponding to a peak height ∆P/ρg, independent of the area of
the hole. (There is a vena contracta effect, as mentioned in problem 19, but this also doesn’t
depend on the area.)
The resolution is that for a typical long, thin garden hose, viscous losses dominate. As you’ll
see in problem 26, a higher mass flow rate leads to a higher drop in pressure. When you
partially block the outlet, you’re simply decreasing the flow rate, so that viscosity has a
smaller effect, allowing the water to get closer to the maximum possible height ∆P/ρg.
In plumbing, the quantity ∆P/ρg is called the “pressure head”, and effects like viscosity
give rise to “head loss”. Unfortunately, for most realistic pipes it is intractable to calculate
the head loss, because the water flow is turbulent. Instead, the amount of head loss is
parametrized by the so-called Darcy friction factor, whose values are tabulated in references.
Example 15
If you stir a cup of coffee, around how long does it take the rotational motion to settle down?
Solution
The rotational motion stops because of viscous drag against the walls. For concreteness, let’s
suppose the coffee has density ρ, viscosity η, and is in a mug of radius R and height H ≫ R
(so most of the drag comes from the vertical wall of the mug). The angular momentum is
L ∼ Iω ∼ ρR4
Hω.
The damping torque due to viscous forces is
τ ∼ RF ∼ ηA
dv
dr
R
and since the drag is from the vertical wall, A ∼ HR. Estimating the velocity gradient dv/dr
is a little trickier. As mentioned above, the coffee right next to the wall has zero velocity,
while the coffee slightly inward from the wall has speed v ∼ Rω. The velocity transitions
between these two values in a thin “boundary layer”.
Finding the exact thickness of this boundary layer would require solving complicated
differential equations, but it suffices to use dimensional analysis. Note that R and H can’t
possibly play a role, since the layer is so thin it doesn’t “see” the shape of the mug. The
fluid properties η and ρ surely matter. Perhaps more subtly, ω matters. If the fluid weren’t
27
Kevin Zhou Physics Olympiad Handouts
spinning, but rather were uniformly translating in a plane, then the boundary layer would
just grow over time until it was the size of the whole fluid. That’s what we saw in problem 26,
where the velocity changes gradually along the whole pipe radius R. The boundary layer
doesn’t grow to the whole mug’s size here, because the velocity it’s trying to match is
constantly changing over the timescale 1/ω.
Using dimensional analysis, we thus conclude the boundary layer has thickness
∆r ∼
r
η
ρω
.
The damping torque is
τ ∼ η (HR)
Rω
∆r
R ∼
p
ρηω3 HR3
so the timescale for damping is
T ∼
L
τ
∼
r
ρ
ηω
R.
Numerically, if we use the rough estimates
ρ ∼ 103
kg/m3
, ω ∼ 10s−1
, R ∼ 0.1m, η ∼ 10−3
Pas
where η is the value for room temperature water, then we get the reasonable results
∆r ∼ 0.3mm, T ∼ 30s.
