---
id: kevin-zhou-m7-ex011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-ex011
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

Example 11
A fluid of density ρ flowing with a fast velocity v1 and height h1 can undergo a “hydraulic
jump”, where the height of the fluid increases to h2. At the same time, the fluid flow slows
down and becomes turbulent.
This phenomenon is very common in everyday life. For example, it happens whenever you
turn on the water faucet in a sink; the hydraulic jump occurs on a circle centered on the
20
Kevin Zhou Physics Olympiad Handouts
faucet. Find the final height h2.
Solution
During this process, the bulk kinetic energy of the water is not conserved, because it is
converted to turbulent motion. However, the horizontal momentum of the water is approxi-
mately conserved. Consider a stream of water of width w flowing in the x direction, where
the hydraulic jump occurs at x = 0. By mass conservation,
v1h1 = v2h2
where v2 is the final speed. Now we consider a fixed subset of the water encompassing the
hydraulic jump. The atmospheric pressure does not yield a net horizontal force on the water,
so we focus on the pressure in excess of atmospheric pressure. The total excess pressure force
on the left end is
Fℓ =
Z h1
0
ρghwdh =
1
2
ρgwh2
1.
Therefore, we have total force
F =
1
2
ρgw(h2
1 − h2
2).
On the other hand, the mass of water that flows through the hydraulic jump per unit time
is ρh1wv1, and its velocity decreases by v1 − v2, so
dp
dt
= −ρh1wv1(v1 − v2) = ρwv1v2(h1 − h2)
where we used mass conservation. Equating F = dp/dt and simplifying gives
g(h1 + h2) = 2v1v2.
Applying mass conservation again leads to a quadratic in h2,
h2
2 + h1h2 −
2v2
1h1
g
= 0
and the physically relevant positive solution is the answer,
h2 = −
h1
2
+
s
h2
1
4
+
2h1v2
1
g
.
For v2
1 > gh1, we have h2 > h1 and an ordinary hydraulic jump. For v2
1 < gh1, you might
expect a “reverse” hydraulic jump to occur, but this is impossible by the second law of
thermodynamics. In a hydraulic jump, some of the kinetic energy of laminar flow energy
is converted to turbulent flow, which is essentially heat; thus the reverse can’t happen.
So in addition to deriving h2, we’ve found the minimum v1 for a hydraulic jump to be possible!
Note that this conservation law approach doesn’t tell us about how far a fluid will flow before
it undergoes a hydraulic jump. That would require understanding the fluid flow in detail,
accounting for turbulence and viscosity, which is generally analytically intractable. For more
on this subject, see sections 26.1 and 26.2 of Lautrup.
21
Kevin Zhou Physics Olympiad Handouts
[3] Problem 20 (PPP 70). A tanker full of liquid is at rest on a frictionless horizontal road.
A small vertical outlet pipe at the rear of the tanker is opened. Describe qualitatively how the
tanker will move (a) immediately afterward, and (b) after a long time. Assume that the water
always falls out of the cart with zero horizontal velocity in the cart’s frame.
Solution. (a) The total horizontal momentum of the tanker and liquid is conserved, and is initially
zero, so the center of mass of the tanker and liquid cannot move horizontally. When water
starts to flow out, it comes out on the tanker’s left side. Thus, the tanker has to initially
move to the right.
(b) However, it’s impossible for the tanker to always move to the right. If that were the case,
then after a long time, when the water has all left, both the tanker and all of the water will
be moving to the right, violating momentum conservation. Thus, at some point the tanker
has to turn around, and its final velocity is to the left. (However, if the draining process
was so violent that the water started sloshing around, then the tanker would jerk back and
forth, which would screw up the above argument. We’re implicitly assuming that the draining
process is slow, so that the water still inside the tanker moves with it.)
By the way, it’s worth thinking about the forces that make the tanker move. These forces must
be due to water pressure. When the water starts flowing towards the drain, it has a higher velocity
near the drain, and thus a lower pressure by Bernoulli’s principle. Thus, the total pressure force
on the tanker’s left wall is lower than that on its right wall, which is why the tanker starts moving
to the right. On the other hand, when there’s only a thin layer of water left, the part of the water
to the right of the drain will have a big leftward horizontal velocity. That leftward momentum is
transferred to the tanker near the drain, where the water is forced to turn around and fall down
vertically; that’s why the tanker starts moving to the left near the end. If you’re interested in seeing
more, there’s a complete analysis here which even includes explicit expressions for the tanker’s
position over time.
[3] Problem 21 (PPP 74). A jet of water strikes a horizontal gutter of semicircular cross-section
obliquely, as shown.
The jet lies in the vertical plane that contains the center-line of the gutter. Assume the angle is
relatively shallow, so that the water hits the gutter smoothly, and doesn’t splatter. Find the ratio
of the quantities of water flowing out at the two ends of the gutter as a function of the angle of
incidence α of the jet.
22
Kevin Zhou Physics Olympiad Handouts
Solution. Let the original water jet have area A0 and speed v. Let v1 be the speed of the stream
to the right, and let A1 be its area. Similarly define v2 and A2. First, we claim that
v = v1 = v2.
This follows directly from Bernoulli’s principle. The incoming jet has atmospheric pressure, because
it’s exposed to the air, and so do the two streams. Since they have the same pressures, they have
the same speeds. (Of course, this wouldn’t be true if energy was dissipated. For instance, if the
water jet were fast and directed straight down, water would splatter everywhere.)
Next, conservation of mass gives
A0 = A1 + A2.
Conservation of horizontal momentum gives
ρA0v2
sinα = ρA1v2
− ρA2v2
which implies
A0 sinα = A1 − A2.
Combining this with mass conservation gives
A1 =
1 + sinα
2
A0, A2 =
1 − sinα
2
A0.
Since the speeds are the same, the ratio of flow rates is just the ratio of areas,
A1
A2
=
1 + sinα
1 − sinα
.
[3] Problem 22 (NBPhO 2005). A water pump consists of a vertical tube of cross-sectional area S1
topped with a cylindrical rotating tank of radius r. All the vessels are filled with water; there are
holes of total cross-sectional area S2 ≪ S1 along the perimeter of the tank, which are open for the
operating regime of the pump. The height of the tank from the water surface of the reservoir is
h. An electric engine keeps the vessel rotation at angular velocity ω. The water density is ρ, the
atmospheric pressure is p0, and the saturated vapor pressure is pk. Inside the tank there are metal
blades, which make the water rotate with the tank.
(a) Find the pressure p2 at the perimeter of the tank when all the holes are closed.
(b) For the rest of the problem, we suppose the holes are opened. Find the velocity v2 of the
water jets with respect to the ground.
23
Kevin Zhou Physics Olympiad Handouts
(c) If the tank rotates too fast, the water pressure at some point will become lower than pk. As
you’ll see in T3, this will cause “cavitation”, i.e. the water will start boiling, lowering the
pump’s efficiency. Find the highest cavitation-free angular speed ωmax.
(d) If the power of the electric engine is P, what is the theoretical upper limit of the mass pumped
per unit time, assuming S2 can be freely adjusted?
Solution. See the official solutions as usual. This setup is called a centrifugal pump. There are
typos in the final answers to the first and third parts; the correct answers are:
p2 = p0 − ρgh + ρω2
r2
/2
v2 =
p
2(ω2r2 − gh)
ωm =
√
2
r
s
gh +

p0 − pk
ρ
− gh

S1
S2
 2
µ = P/2gh
