---
id: kevin-zhou-m7-p026
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-p026
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

[3] Problem 26. Water flows through a cylindrical pipe of radius R and length L ≫ R, across which
a pressure difference ∆P is applied.
(a) If the flow is slow, viscous effects dominate. By balancing forces on a cylinder of fluid, show
that
v(r) =
∆P
4ηL
(R2
− r2
).
Then show that the total mass flux is
dm
dt
=
ρπR4∆P
8ηL
.
This is called Poiseuille’s law.
(b) If the flow is very fast, the flow is turbulent. Viscous effects are negligible, and the work
done by the pressure difference is dissipated by turbulence into internal energy. Find a rough
estimate of the mass flow rate.
Solution. (a) We see −η(2πrL)dv/dr = πr2∆P, so
dv/dr = −
∆P
2ηL
r.
28
Kevin Zhou Physics Olympiad Handouts
Integrating and using the fact that v(R) = 0 yields the desired result. Now, the mass flux is
dm/dt =
Z R
0
(2πrdr)ρv(r)
= 2πρ
∆P
4ηL
Z R
0
(R2
− r2
)rdr
=
ρπR4∆P
8ηL
as desired.
(b) We perform dimensional analysis, leaving µ out because viscosity is negligible. The parameters
of the problem are ∆P, L, R, and ρ, which is one more than the number of independent
dimensions. However, we can note that the flow rate ought to stay the same if we connect
two identical pipes in series, with the same pressure drop ∆P across each one. This implies
that the mass flow rate only depends on the ratio ∆P/L, i.e. the pressure gradient. Carrying
out dimensional analysis as usual gives
dm
dt
∝
r
ρR5∆P
L
.
[4] Problem 27. When a spherical object of radius R moves with velocity v through a fluid of viscosity
η and density ρ, it experiences a drag force.
(a) Apply dimensional analysis to constrain the possible forms of the drag force F. You should
find there is one dimensionless quantity inversely proportional to η, in accordance with the
Buckingham Pi theorem of P1. This dimensionless quantity is called the Reynolds number,
and it determines what kind of drag dominates.
(b) It turns out that F ∝ v at low velocities and F ∝ v2 at high velocities. Using this information,
find the form of the drag force in both cases. (For reference below: the answers are
F = 6πηRv, F =
1
2
CdρAv2
where Cd is a dimensionless drag coefficient, which is about 1/2 for a sphere. The drag
coefficient depends strongly on the shape of the object, being much smaller for streamlined
shapes, and weakly on the velocity.)
(c) Hot water has density ρ = 103 kg/m3 and viscosity η = 0.3 × 10−3 Pas. (Room temperature
water has about 3 times the viscosity.) For an object of radius 1cm, find the characteristic
velocity that divides the two types of drag.
(d) The two cases correspond to flow patterns as shown below.
29
Kevin Zhou Physics Olympiad Handouts
In the latter case, a region of turbulent flow is created. Using this picture, explain why the
drag force is proportional to v2.
(e) The results above apply to both liquids and gases. In a gas, the relevant quantities are the
mass m of the gas molecules, their typical speed u, their number density n, and radius r (which
determines how often they collide with each other). Use dimensional analysis to constrain the
possible forms of the viscosity η. How do you think η scales with n?
Drag is nicely discussed throughout The Art of Insight; see sections 3.5, 5.3.2, and 8.3.1.2.
Solution. (a) By running a standard dimensional analysis, we find the most general expression
with the right dimensions of force is
F = ηRv f

ρRv
η

.
In accordance with the Buckingham Pi theorem of P1, we can’t pin down the answer exactly;
we can only determine it up to an unknown function of Re = ρRv/η, the unique dimensionless
quantity in the problem. This quantity is called the Reynolds number; when it is low, viscosity
dominates.
(b) At low velocities, viscosity dominates, so we are in the low Reynolds number regime. The fact
that F ∝ v in this regime means that the function f must approach a constant,
lim
x→0
f(x) = c1.
This implies that F ∝ ηRv. At high velocities, we have a high Reynolds number. To get a
force F ∝ v2, we must have f(x) ∼ c2x as x → ∞, giving F ∝ ρR2v2.
This is an illustration of how dimensional analysis plus a few limiting cases lets us solve a
tricky problem. For intermediate velocities, of course, we would need to know the form of
f(x), which is quite complicated and in practice is found from simulations or experiments.
(c) One way of doing this is by noting that the characteristic velocity is when the forces are of
the same order,
6πηRv =
1
2
CdρAv2
≈
1
4
πρR2
v2
which gives
v =
24η
ρR
= 7.2 × 10−4
m/s
30
Kevin Zhou Physics Olympiad Handouts
for hot water.
Since the Reynolds number Re is the only dimensionless quantity in the problem, the crossover
must correspond to some value for Re. Our rough estimate above corresponds to taking
Re = 24. (In reality, the crossover happens at Re ∼ 103, but unfortunately there’s no easy
way to deduce this from first principles; it was measured, not calculated.)
(d) In the ball’s frame, the average velocity of the water decreases significantly behind the ball,
due to the turbulent flow. Then by momentum conservation, the drag force on the ball is
F = dp/dt ∼ v(dm/dt) ∼ v(ρAv) ∝ v2.
(e) By a standard dimensional analysis, we have
η =
mu
r2
g(nr3
)
where g is an unknown function. Remarkably, we will see in T1 that for a sparse gas, η is
actually independent of n, corresponding to g being a constant.
Remark
Without knowing the answer to part (b) above, one might expect that the drag force can
depend on η, ρ, v, and the shape of the object. In the linear case, the drag force does not
depend on ρ. In the quadratic case, the drag force does not depend on η.
These differences can be understood by thinking of where the energy dissipated is going. In
the quadratic case, the fluid picks up macroscopic kinetic energy, in the form of a turbulent
flow pattern, which is why the drag force does not depend on η. In the linear case, the fluid
slows smoothly and hence does not pick up any macroscopic energy; instead the energy is
dissipated as heat. Since the macroscopic kinetic energy is not involved, the drag force does
not depend on ρ. (Of course, in the quadratic case the turbulent motion eventually stops; at
this point it has been converted to heat. The time it takes this to happen is set by η, but it
occurs well after the object has passed by and hence does not affect the drag force.)
Example 16
If raindrops fall, why don’t clouds fall?
Solution
This isn’t a stupid question! It’s actually a tough one, which stumped the ancient Greeks
and Romans. To give context, we’ll cover a bit of atmospheric physics, a topic we will
continue in T1 and T3. This is all a bit of a simplification of an interesting story, told in
more detail in chapter II-9 of the Feynman lectures.
First, it’s useful to review the water cycle. Sunlight directly warms up the ground, and the
ground thereby warms the air near the ground. Since warmer air at the same pressure is less
dense, it begins to rise by convection. This air also expands roughly adiabatically as it rises,
lowering its temperature. Warmer air can also hold more water, so if the original air was
moist, water vapor will condense into droplets as the air rises. (This last point is important,
31
Kevin Zhou Physics Olympiad Handouts
because the condensation releases energy, partially counteracting the cooling of the rising air.
This keeps it warmer and hence lighter than its surroundings, allowing it to continue to rise.)
Now consider a droplet of radius r. Depending on the droplet size and velocity, the drag
force scales as r or r2, while the gravitational force scales as r3. The tiny water droplets in
clouds are thus carried upward with the ascending moist air, since the drag force dominates.
They fall down once they accrete into sufficiently large raindrops, where gravity dominates.
Incidentally, falling raindrops do not have the teardrop shape shown in typical illustrations.
Small raindrops are nearly spherical, because of surface tension. Large raindrops are squashed
by air resistance into a “hamburger” shape.
