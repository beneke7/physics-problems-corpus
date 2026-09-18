---
id: solution-ocr-kevin-zhou-m7sol-p023
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-p023]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 23. A helicopter with length scale $\ell$ and density $\rho _ { h }$ can hover using power $P$, in air of density $\rho _ { a }$. Find a rough estimate for $P$ in terms of the given parameters. (For a nice followup discussion of lift, see section 3.6 of The Art of Insight.)

Solution. Helicopters push themselves upward by pushing air downward. We need

$$
\frac { d p } { d t } \sim \rho _ { h } \ell ^ { 3 } g
$$

to support the aircraft, while considering the rate of air pushed downward gives

$$
\frac { d p } { d t } \sim \frac { d m } { d t } v \sim \rho _ { a } \ell ^ { 2 } v ^ { 2 }
$$

where $v$ is the velocity of the air. By comparing both sides,

$$
v \sim \sqrt { \frac { \rho _ { h } \ell g } { \rho _ { a } } } .
$$

The power needed goes into putting kinetic energy into the air,

$$
P \sim \frac { d m } { d t } v ^ { 2 } \sim \rho _ { a } \ell ^ { 2 } v ^ { 3 } \sim \sqrt { \frac { \ell ^ { 7 } g ^ { 3 } \rho _ { h } ^ { 3 } } { \rho _ { a } } } .
$$

The only thing that might be surprising is the dependence on $\rho _ { a }$, where more energy is required if the air is thinner. (This is why helicopters have trouble rescuing people from Mount Everest.) The reason is that thinner air needs to be pushed down faster to get the same lift, but this requires more power because energy is quadratic in speed. Also, note that this problem couldn't have been solved by dimensional analysis alone, since two densities were present.


Example 12: Kalda 82
A water turbine consists of a large number of paddles that could be considered as light flat boards with length $\ell$, that are at one end attached to a rotating axis. The paddles' free ends are positions on the surface of an imaginary cylinder that is coaxial with the turbine's axis. A stream of water with velocity $v$ and flow rate $\mu ( \mathrm { kg } / \mathrm { s } )$ is directed on the turbine such that it only hits the edges of the paddles.
![](../../../figures/solution-ocr/b4b43b03a619be85dcffae2d.jpg)
Find the maximum possible power that can be extracted.

Solution
Let $v _ { t }$ be the speed of the edge of the turbine. In time $d t$, the amount of mass of water that collides with the turbine is

$$
d m = \frac { \mu } { v } \left( v - v _ { t } \right) d t
$$

The horizontal force on the paddle is

$$
F = \frac { d p } { d t } = \frac { d m } { d t } \Delta v = \frac { \mu } { v } \left( v - v _ { t } \right) ^ { 2 }
$$

so the power delivered to the turbine is

$$
P = F v _ { t } = \frac { \mu v _ { t } } { v } \left( v - v _ { t } \right) ^ { 2 } .
$$

Maximizing this by setting $d P / d v _ { t } = 0$ gives $v _ { t } = v / 3$, so the maximum power is $4 \mu v ^ { 2 } / 27$. This is 8/27 of the total power in the incoming water.

[3] Problem 24. Air of constant density $\rho$ and wind speed $v _ { i }$ is heading directly towards a windmill of area $A$. When the wind gets to the windmill blades, it is traveling forward with speed $v _ { f }$. Well after it leaves the vicinity of the blades, it has speed $v _ { o }$. The design of the windmill, such as the shape and speed at which its blades turn, can be adjusted to set the value of $v _ { f }$.
    (a) Find the power going from the wind to the turbine by using energy conservation, assuming that there are no extraneous energy losses, e.g. to turbulence.
    (b) Find the power going from the wind to the turbine by considering the force of the windmill on the air and using momentum conservation, again assuming no extraneous energy losses.
    (c) Find an upper bound on the ratio of the wind power that can be harvested by the windmill, to the amount of wind power that would pass through it if it weren't running.

This result is called the Betz limit.


Solution. (a) Since there's nowhere else for the energy to go, the power must be the rate of change of the wind's energy. The mass flow rate is $\mu = \rho A v _ { f }$, so

$$
P = \frac { 1 } { 2 } \mu \left( v _ { i } ^ { 2 } - v _ { o } ^ { 2 } \right) = \frac { 1 } { 2 } \rho A v _ { f } \left( v _ { i } - v _ { o } \right) \left( v _ { i } + v _ { o } \right) .
$$

(b) The (negative) power on the wind is $F v _ { f }$ where $F$ is the rate of change of momentum of the wind. Ideally, all of this power goes to the windmill, so
$$
P = F v _ { f } = \mu \left( v _ { i } - v _ { o } \right) v _ { f } = \rho A v _ { f } ^ { 2 } \left( v _ { i } - v _ { o } \right) .
$$
(c) By comparing these equations, we find $v _ { f } = \left( v _ { i } + v _ { o } \right) / 2$, which allows us to eliminate $v _ { f }$. Plugging this back in gives
$$
P = \frac { 1 } { 4 } \rho A \left( v _ { i } + v _ { o } \right) ^ { 2 } \left( v _ { i } - v _ { o } \right)
$$
which can then be maximized with respect to $v _ { o }$. Setting the derivative to zero gives $v _ { o } = v _ { i } / 3$ and thus $P = ( 8 / 27 ) \rho A v _ { i } ^ { 3 }$. If the windmill were not running, the rate at which wind energy flows through it is $\left( \rho A v _ { i } \right) v _ { i } ^ { 2 } / 2$, which means the maximum fraction harvested is 16/27.

[5] Problem 25. GPhO 2017, problem 2. A very tricky composite fluids/mechanics problem.

## 5 Wet Water

So far we've mostly ignored viscosity and turbulence, an unrealistic limit that some refer to as "dry water". Now we'll consider some problems involving real, wet water.

Idea 8
When the velocity of a flow is not uniform, there is a drag force

$$
F = \eta A \frac { d v } { d y }
$$

which tries to make the velocity more uniform. Here, $\eta$ is the (dynamic) viscosity. Also, when fluid flows next to a wall, the fluid right next to the wall is approximately at rest.

Example 13: HRK
Prairie dogs live in large colonies in complex interconnected burrow systems. They face the problem of maintaining a sufficient air supply to their burrows to avoid suffocation. They avoid this by building conical earth mounds about some of their many burrow openings. How does this air conditioning scheme work?

Solution
Because of viscous effects, the wind speed is small near the ground, and hence grows with height. By Bernoulli's principle, this means the pressure at the top of a mound is slightly lower than the pressure at an opening without a mound. This difference in pressure drives air flow through the burrows.
