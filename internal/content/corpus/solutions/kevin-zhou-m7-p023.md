---
id: kevin-zhou-m7-p023
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-p023
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

[3] Problem 23. A helicopter with length scale ℓ and density ρh can hover using power P, in air of
density ρa. Find a rough estimate for P in terms of the given parameters. (For a nice followup
discussion of lift, see section 3.6 of The Art of Insight.)
Solution. Helicopters push themselves upward by pushing air downward. We need
dp
dt
∼ ρhℓ3
g
to support the aircraft, while considering the rate of air pushed downward gives
dp
dt
∼
dm
dt
v ∼ ρaℓ2
v2
where v is the velocity of the air. By comparing both sides,
v ∼
s
ρhℓg
ρa
.
The power needed goes into putting kinetic energy into the air,
P ∼
dm
dt
v2
∼ ρaℓ2
v3
∼
s
ℓ7g3ρ3
h
ρa
.
The only thing that might be surprising is the dependence on ρa, where more energy is required
if the air is thinner. (This is why helicopters have trouble rescuing people from Mount Everest.)
The reason is that thinner air needs to be pushed down faster to get the same lift, but this requires
more power because energy is quadratic in speed. Also, note that this problem couldn’t have been
solved by dimensional analysis alone, since two densities were present.
24
Kevin Zhou Physics Olympiad Handouts
Example 12: Kalda 82
A water turbine consists of a large number of paddles that could be considered as light flat
boards with length ℓ, that are at one end attached to a rotating axis. The paddles’ free ends
are positions on the surface of an imaginary cylinder that is coaxial with the turbine’s axis.
A stream of water with velocity v and flow rate µ (kg/s) is directed on the turbine such that
it only hits the edges of the paddles.
Find the maximum possible power that can be extracted.
Solution
Let vt be the speed of the edge of the turbine. In time dt, the amount of mass of water that
collides with the turbine is
dm =
µ
v
(v − vt)dt.
The horizontal force on the paddle is
F =
dp
dt
=
dm
dt
∆v =
µ
v
(v − vt)2
so the power delivered to the turbine is
P = Fvt =
µvt
v
(v − vt)2
.
Maximizing this by setting dP/dvt = 0 gives vt = v/3, so the maximum power is 4µv2/27.
This is 8/27 of the total power in the incoming water.
[3] Problem 24. Air of constant density ρ and wind speed vi is heading directly towards a windmill
of area A. When the wind gets to the windmill blades, it is traveling forward with speed vf. Well
after it leaves the vicinity of the blades, it has speed vo. The design of the windmill, such as the
shape and speed at which its blades turn, can be adjusted to set the value of vf.
(a) Find the power going from the wind to the turbine by using energy conservation, assuming
that there are no extraneous energy losses, e.g. to turbulence.
(b) Find the power going from the wind to the turbine by considering the force of the windmill
on the air and using momentum conservation, again assuming no extraneous energy losses.
(c) Find an upper bound on the ratio of the wind power that can be harvested by the windmill,
to the amount of wind power that would pass through it if it weren’t running.
This result is called the Betz limit.
25
Kevin Zhou Physics Olympiad Handouts
Solution. (a) Since there’s nowhere else for the energy to go, the power must be the rate of
change of the wind’s energy. The mass flow rate is µ = ρAvf, so
P =
1
2
µ(v2
i − v2
o) =
1
2
ρAvf(vi − vo)(vi + vo).
(b) The (negative) power on the wind is Fvf where F is the rate of change of momentum of the
wind. Ideally, all of this power goes to the windmill, so
P = Fvf = µ(vi − vo)vf = ρAv2
f(vi − vo).
(c) By comparing these equations, we find vf = (vi + vo)/2, which allows us to eliminate vf.
Plugging this back in gives
P =
1
4
ρA(vi + vo)2
(vi − vo)
which can then be maximized with respect to vo. Setting the derivative to zero gives vo = vi/3
and thus P = (8/27)ρAv3
i . If the windmill were not running, the rate at which wind energy
flows through it is (ρAvi)v2
i /2, which means the maximum fraction harvested is 16/27.
[5] Problem 25.  T 1 0GPhO 2017, problem 2. A very tricky composite fluids/mechanics problem.
5 Wet Water
So far we’ve mostly ignored viscosity and turbulence, an unrealistic limit that some refer to as “dry
water”. Now we’ll consider some problems involving real, wet water.
Idea 8
When the velocity of a flow is not uniform, there is a drag force
F = ηA
dv
dy
which tries to make the velocity more uniform. Here, η is the (dynamic) viscosity. Also,
when fluid flows next to a wall, the fluid right next to the wall is approximately at rest.
Example 13: HRK
Prairie dogs live in large colonies in complex interconnected burrow systems. They face the
problem of maintaining a sufficient air supply to their burrows to avoid suffocation. They
avoid this by building conical earth mounds about some of their many burrow openings. How
does this air conditioning scheme work?
Solution
Because of viscous effects, the wind speed is small near the ground, and hence grows with
height. By Bernoulli’s principle, this means the pressure at the top of a mound is slightly
lower than the pressure at an opening without a mound. This difference in pressure drives
air flow through the burrows.
26
Kevin Zhou Physics Olympiad Handouts
