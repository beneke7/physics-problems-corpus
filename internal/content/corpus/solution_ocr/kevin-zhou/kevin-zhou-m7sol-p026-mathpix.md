---
id: solution-ocr-kevin-zhou-m7sol-p026
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-p026]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 26. Water flows through a cylindrical pipe of radius $R$ and length $L \gg R$, across which a pressure difference $\Delta P$ is applied.

(a) If the flow is slow, viscous effects dominate. By balancing forces on a cylinder of fluid, show that
$$
v ( r ) = \frac { \Delta P } { 4 \eta L } \left( R ^ { 2 } - r ^ { 2 } \right) .
$$
Then show that the total mass flux is
$$
\frac { d m } { d t } = \frac { \rho \pi R ^ { 4 } \Delta P } { 8 \eta L } .
$$
This is called Poiseuille's law.
(b) If the flow is very fast, the flow is turbulent. Viscous effects are negligible, and the work done by the pressure difference is dissipated by turbulence into internal energy. Find a rough estimate of the mass flow rate.

Solution. (a) We see $- \eta ( 2 \pi r L ) d v / d r = \pi r ^ { 2 } \Delta P$, so

$$
d v / d r = - \frac { \Delta P } { 2 \eta L } r .
$$


Integrating and using the fact that $v ( R ) = 0$ yields the desired result. Now, the mass flux is
$$
\begin{aligned}
d m / d t & = \int _ { 0 } ^ { R } ( 2 \pi r d r ) \rho v ( r ) \\
& = 2 \pi \rho \frac { \Delta P } { 4 \eta L } \int _ { 0 } ^ { R } \left( R ^ { 2 } - r ^ { 2 } \right) r d r \\
& = \frac { \rho \pi R ^ { 4 } \Delta P } { 8 \eta L }
\end{aligned}
$$
as desired.
(b) We perform dimensional analysis, leaving $\mu$ out because viscosity is negligible. The parameters of the problem are $\Delta P , L , R$, and $\rho$, which is one more than the number of independent dimensions. However, we can note that the flow rate ought to stay the same if we connect two identical pipes in series, with the same pressure drop $\Delta P$ across each one. This implies that the mass flow rate only depends on the ratio $\Delta P / L$, i.e. the pressure gradient. Carrying out dimensional analysis as usual gives
$$
\frac { d m } { d t } \propto \sqrt { \frac { \rho R ^ { 5 } \Delta P } { L } } .
$$
[4] Problem 27. When a spherical object of radius $R$ moves with velocity $v$ through a fluid of viscosity $\eta$ and density $\rho$, it experiences a drag force.
    (a) Apply dimensional analysis to constrain the possible forms of the drag force $F$. You should find there is one dimensionless quantity inversely proportional to $\eta$, in accordance with the Buckingham Pi theorem of P1. This dimensionless quantity is called the Reynolds number, and it determines what kind of drag dominates.
    (b) It turns out that $F \propto v$ at low velocities and $F \propto v ^ { 2 }$ at high velocities. Using this information, find the form of the drag force in both cases. (For reference below: the answers are
$$
F = 6 \pi \eta R v , \quad F = \frac { 1 } { 2 } C _ { d } \rho A v ^ { 2 }
$$
where $C _ { d }$ is a dimensionless drag coefficient, which is about 1/2 for a sphere. The drag coefficient depends strongly on the shape of the object, being much smaller for streamlined shapes, and weakly on the velocity.)
    (c) Hot water has density $\rho = 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 }$ and viscosity $\eta = 0.3 \times 10 ^ { - 3 } \mathrm { Pas }$. (Room temperature water has about 3 times the viscosity.) For an object of radius 1 cm, find the characteristic velocity that divides the two types of drag.
    (d) The two cases correspond to flow patterns as shown below.

![](../../../figures/solution-ocr/1bbc567d78fd4956e24175f2.jpg)
![](../../../figures/solution-ocr/38d776252eb67515948c406e.jpg)

In the latter case, a region of turbulent flow is created. Using this picture, explain why the drag force is proportional to $v ^ { 2 }$.

(e) The results above apply to both liquids and gases. In a gas, the relevant quantities are the mass $m$ of the gas molecules, their typical speed $u$, their number density $n$, and radius $r$ (which determines how often they collide with each other). Use dimensional analysis to constrain the possible forms of the viscosity $\eta$. How do you think $\eta$ scales with $n$ ?

Drag is nicely discussed throughout The Art of Insight; see sections 3.5, 5.3.2, and 8.3.1.2.
Solution. (a) By running a standard dimensional analysis, we find the most general expression with the right dimensions of force is

$$
F = \eta R v f \left( \frac { \rho R v } { \eta } \right) .
$$

In accordance with the Buckingham Pi theorem of P1, we can't pin down the answer exactly; we can only determine it up to an unknown function of $\mathrm { Re } = \rho R v / \eta$, the unique dimensionless quantity in the problem. This quantity is called the Reynolds number; when it is low, viscosity dominates.

(b) At low velocities, viscosity dominates, so we are in the low Reynolds number regime. The fact that $F \propto v$ in this regime means that the function $f$ must approach a constant,
$$
\lim _ { x \rightarrow 0 } f ( x ) = c _ { 1 } .
$$
This implies that $F \propto \eta R v$. At high velocities, we have a high Reynolds number. To get a force $F \propto v ^ { 2 }$, we must have $f ( x ) \sim c _ { 2 } x$ as $x \rightarrow \infty$, giving $F \propto \rho R ^ { 2 } v ^ { 2 }$.
This is an illustration of how dimensional analysis plus a few limiting cases lets us solve a tricky problem. For intermediate velocities, of course, we would need to know the form of $f ( x )$, which is quite complicated and in practice is found from simulations or experiments.
(c) One way of doing this is by noting that the characteristic velocity is when the forces are of the same order,
$$
6 \pi \eta R v = \frac { 1 } { 2 } C _ { d } \rho A v ^ { 2 } \approx \frac { 1 } { 4 } \pi \rho R ^ { 2 } v ^ { 2 }
$$
which gives
$$
v = \frac { 24 \eta } { \rho R } = 7.2 \times 10 ^ { - 4 } \mathrm {~m} / \mathrm { s }
$$

for hot water.
Since the Reynolds number Re is the only dimensionless quantity in the problem, the crossover must correspond to some value for Re. Our rough estimate above corresponds to taking $\operatorname { Re } = 24$. (In reality, the crossover happens at $\operatorname { Re } \sim 10 ^ { 3 }$, but unfortunately there's no easy way to deduce this from first principles; it was measured, not calculated.)
(d) In the ball's frame, the average velocity of the water decreases significantly behind the ball, due to the turbulent flow. Then by momentum conservation, the drag force on the ball is $F = d p / d t \sim v ( d m / d t ) \sim v ( \rho A v ) \propto v ^ { 2 }$.
(e) By a standard dimensional analysis, we have
$$
\eta = \frac { m u } { r ^ { 2 } } g \left( n r ^ { 3 } \right)
$$
where $g$ is an unknown function. Remarkably, we will see in T1 that for a sparse gas, $\eta$ is actually independent of $n$, corresponding to $g$ being a constant.

Remark
Without knowing the answer to part (b) above, one might expect that the drag force can depend on $\eta , \rho , v$, and the shape of the object. In the linear case, the drag force does not depend on $\rho$. In the quadratic case, the drag force does not depend on $\eta$.

These differences can be understood by thinking of where the energy dissipated is going. In the quadratic case, the fluid picks up macroscopic kinetic energy, in the form of a turbulent flow pattern, which is why the drag force does not depend on $\eta$. In the linear case, the fluid slows smoothly and hence does not pick up any macroscopic energy; instead the energy is dissipated as heat. Since the macroscopic kinetic energy is not involved, the drag force does not depend on $\rho$. (Of course, in the quadratic case the turbulent motion eventually stops; at this point it has been converted to heat. The time it takes this to happen is set by $\eta$, but it occurs well after the object has passed by and hence does not affect the drag force.)

Example 16
If raindrops fall, why don't clouds fall?

Solution
This isn't a stupid question! It's actually a tough one, which stumped the ancient Greeks and Romans. To give context, we'll cover a bit of atmospheric physics, a topic we will continue in T1 and T3. This is all a bit of a simplification of an interesting story, told in more detail in chapter II-9 of the Feynman lectures.

First, it's useful to review the water cycle. Sunlight directly warms up the ground, and the ground thereby warms the air near the ground. Since warmer air at the same pressure is less dense, it begins to rise by convection. This air also expands roughly adiabatically as it rises, lowering its temperature. Warmer air can also hold more water, so if the original air was moist, water vapor will condense into droplets as the air rises. (This last point is important,


because the condensation releases energy, partially counteracting the cooling of the rising air. This keeps it warmer and hence lighter than its surroundings, allowing it to continue to rise.)

Now consider a droplet of radius $r$. Depending on the droplet size and velocity, the drag force scales as $r$ or $r ^ { 2 }$, while the gravitational force scales as $r ^ { 3 }$. The tiny water droplets in clouds are thus carried upward with the ascending moist air, since the drag force dominates. They fall down once they accrete into sufficiently large raindrops, where gravity dominates.

Incidentally, falling raindrops do not have the teardrop shape shown in typical illustrations. Small raindrops are nearly spherical, because of surface tension. Large raindrops are squashed by air resistance into a "hamburger" shape.
