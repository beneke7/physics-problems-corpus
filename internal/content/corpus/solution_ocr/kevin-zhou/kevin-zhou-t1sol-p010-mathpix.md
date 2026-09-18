---
id: solution-ocr-kevin-zhou-t1sol-p010
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p010]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 10. Consider a cylinder of gas with cross-sectional area $A$ and volume $V$. Assume all surfaces are frictionless and thermally insulating. A piston of mass $m$ is placed snugly on top, and the entire setup is inside an atmosphere with pressure $P _ { \text {atm } }$.

(a) First suppose the system is in equilibrium, so that the pressure of the gas inside is $P _ { \text {atm } } + m g / A$. The piston is then given a slight downward displacement. Find the angular frequency of small oscillations by assuming the ideal gas law always holds for the gas as a whole. This setup is known as the Ruchardt experiment, and can be used to determine $\gamma$.
(b) Under what circumstances is the result of part (a) a good approximation?
(c) Now suppose that instead, the piston is initially suspended from a thread carrying tension $m g$, so that the pressure of the gas is just $P _ { \text {atm } }$. Suddenly, the thread is cut. The piston falls down the cylinder and bounces up and down several times before eventually coming to rest. Explain why the equation $P V ^ { \gamma } =$ const cannot be used to determine the final state.
(d) Find the final downward displacement $d$ of the piston, assuming the gas is monatomic. For simplicity, assume that all of the energy released in this process goes into the internal energy of the gas, with none going into the internal energy of the piston or atmosphere.

Solution. (a) When the mass has a displacement of $x$, let the gas pressure be $P _ { x }$. Then

$$
P V ^ { \gamma } = P _ { x } ( V - A x ) ^ { \gamma }
$$

so

$$
P _ { x } = P \left( \frac { V } { V - A x } \right) ^ { \gamma } \approx P \left( 1 + \gamma \frac { A x } { V } \right) .
$$

Thus, the force on the mass is

$$
F = - \left( P _ { x } - P \right) A \approx - P \gamma \frac { A x } { V } A
$$

so

$$
\ddot { x } \approx - \frac { \gamma P A ^ { 2 } } { m V } x , \quad \omega = \sqrt { \frac { \gamma P A ^ { 2 } } { m V } } .
$$


(b) First, we've treated the gas as always having the pressure of a static ideal gas. That means the piston needs to move slowly enough for the gas to have time to adjust to this pressure, i.e. the piston should always be moving much slower than the speed of sound in the gas. This happens automatically, as long as the amplitude is small enough.
Second, as mentioned in M7, even in the case where the piston is moving arbitrarily slowly, it has effective extra inertia because it needs to move the gas in front of it out of the way. That is, in the language of M4, the Lagrangian for the system should contain both the kinetic energy of the piston and the gas, and the latter contributes an effective extra inertia, lowering the frequency. This extra term is negligible as long as the density of the gas is much lower than the density of the piston.
For reasonable experimental setups, both of these conditions are easily satisfied. In real life, the hardest part of getting this to work is probably making the piston oscillate with low friction, while still being airtight.
(c) It depends on how you derive $P V ^ { \gamma } =$ const. One way to derive it, which you saw in problem 1, is to write down basic results like $d W = - P d V , d U = n C _ { V } d T$, and $P V = n R T$, and combine them. What could possibly go wrong with that? The problem is that during this process, the gas does not even have a uniform pressure or temperature; there is no such thing as a single $P$ or $T$.
Another way to derive it, as we'll show in T2, is to argue that the entropy is constant. (Then we can ignore all the complicated stuff that happens in the middle, because entropy is a state function.) The entropy turns out to be a function of $P V ^ { \gamma }$, which implies $P V ^ { \gamma }$ is constant. The reason this argument fails is because entropy isn't constant. As the piston's motion damps out, kinetic energy is dissipated to heat, increasing the entropy.
In other words, this is a process that can't be neatly classified as "heat" or "work". It's not pure heating, since the volume changes, and it's not pure work, since the entropy changes.
(d) The energy released is
$$
\Delta U = m g d + P _ { \mathrm { atm } } A d
$$
where we counted the decrease in gravitational energy of the piston, and the expansion of the atmosphere. If all of this goes into the gas, then
$$
\Delta U = \frac { 3 } { 2 } n R \Delta T .
$$
On the other hand, by the ideal gas law,
$$
\Delta ( P V ) = n R \Delta T
$$
which means we have
$$
m g d + P _ { \mathrm { atm } } A d = \frac { 3 } { 2 } \left( \left( P _ { \mathrm { atm } } + \frac { m g } { A } \right) ( V - A d ) - P V \right) .
$$
Solving for $d$, we have
$$
d = \frac { 3 } { 5 } \frac { m g V } { A \left( m g + P _ { \mathrm { atm } } A \right) } .
$$
Interestingly, this approaches only $3 / 5$ of the total height when $m g$ goes to infinity.

The assumption that all the energy released goes into the gas is a bit artificial, and just used to make the problem tractable. As the piston bounces up and down, it creates sound waves in the gas. These eventually dissipate into ordinary thermal energy, i.e. random motion of the gas molecules. However, as this occurs, energy can also be dissipated into the piston by friction, or just by thermal conduction with the gas; we assume both of these effects are negligible. In addition, the motion of the piston excites sound waves in the atmosphere, which carries some of the energy away. We expect this effect to be smaller if the pressure variations in the gas are larger, e.g. if the weight is very heavy.

[3] Problem 11 (Russia 2008). A cylinder with a metal bottom and insulating walls is underneath a thin massive metal piston located at a height $h$, which is much smaller than the cylinder diameter. A resistor of resistance $r$ is placed inside and connected to an electric circuit with an $\operatorname { emf } \mathcal { E }$.
![](../../../figures/solution-ocr/a8ba950c4d09cb689601daef.jpg)
The circuit is connected to the piston and cylinder bottom with light flexible wires. Initially, the switch is open, the cylinder is filled with helium at a pressure $p \gg \epsilon _ { 0 } \mathcal { E } ^ { 2 } / h ^ { 2 }$, which you can treat as a monatomic ideal gas with a dielectric constant of 1 . The system is thermally insulated, placed in vacuum, and at thermal and mechanical equilibrium. Then the switch $K$ is closed. Find the height $H$ of the piston after a long time.
Solution. Several things happen at once. Energy is dissipated in the resistor, causing the gas to warm up and increase in pressure. At the same time, charge accumulates on the top and bottom plates, which form a parallel plate capacitor, causing them to attract each other. And when the piston moves, energy is exchanged between the gas and the capacitor. Keeping track of the detailed time evolution of the gas, piston, and $R C$ circuit would be very complicated, but since we only care about the final state, we can use energy conservation instead.
The total energy added to the system is the work done by the battery, $\mathcal { E } q$, where $q$ is the final charge on the capacitor plates, so energy conservation gives
$$
\frac { 3 } { 2 } p _ { 1 } V _ { 1 } + m g h + \mathcal { E } q = \frac { 3 } { 2 } p _ { 2 } V _ { 2 } + m g H + \frac { q ^ { 2 } } { 2 C } .
$$
We also know that in the final state,
$$
q = C \mathcal { E } = \frac { \epsilon _ { 0 } A \mathcal { E } } { H }
$$
where $A$ is the surface area of the top and bottom plates. The attractive force between the plates is
$$
F = \frac { q ^ { 2 } } { 2 \epsilon _ { 0 } A } = \frac { \epsilon _ { 0 } A \mathcal { E } ^ { 2 } } { 2 H ^ { 2 } }
$$
which means the final pressure is
$$
p _ { 2 } = p _ { 1 } + \frac { F } { A } = p _ { 1 } + \frac { \epsilon _ { 0 } \mathcal { E } ^ { 2 } } { 2 H ^ { 2 } } .
$$

Of course, we also have $V _ { 1 } = A h , V _ { 2 } = A H , p _ { 1 } = p$, and force balance in the initial state implies $m g h = p _ { 1 } V _ { 1 }$. Carefully plugging all of this in and writing everything in terms of $H / h$ and the small ratio $\epsilon _ { 0 } \mathcal { E } ^ { 2 } / h ^ { 2 } p$ yields the result

$$
\left( \frac { H } { h } \right) ^ { 2 } - \frac { H } { h } = - \frac { \epsilon _ { 0 } \mathcal { E } ^ { 2 } } { 10 h ^ { 2 } p }
$$

and solving the quadratic gives

$$
H = h \left( \frac { 1 } { 2 } + \sqrt { \frac { 1 } { 4 } - \frac { \epsilon _ { 0 } \mathcal { E } ^ { 2 } } { 10 h ^ { 2 } p } } \right) \approx h - \frac { \epsilon _ { 0 } \mathcal { E } ^ { 2 } } { 10 h p } .
$$

[4] Problem 12 (Cahn). A long, cylindrical tank of length $L$ and radius $R$ is placed on a carriage that can slide without friction on rails. The mass of the empty tank and carriage is $M$. Initially, the tank is filled with an ideal gas of total mass $m \ll M$ at pressure $P _ { 0 }$ and temperature $T _ { 0 }$. The left end of the tank is heated to a fixed temperature $T _ { 0 } + \Delta T$, while the right end of the tank has its temperature fixed at $T _ { 0 }$, where $\Delta T \ll T _ { 0 }$.

In this problem, you need only work to first order in $\Delta T / T _ { 0 }$. Suppose that the temperatures have been maintained for long enough for the gas to enter a steady state.

(a) Argue that the temperature $T ( x )$ of the gas in the tank is a linear function of position.
(b) Find the density of the gas in the tank as a function of position.
(c) Find the distance the carriage has moved.
(d) In order for the carriage to have moved, a horizontal force had to have acted on it. Where did this force come from?

Solution. (a) In the steady state, the temperature of the gas at each location must be constant, which means that the heat flow through the gas must be uniform. This heat flow rate is proportional to $\kappa d T / d x$, where $\kappa$ is the thermal conductivity. Now, $\kappa$ itself depends on the temperature, but $d T / d x$ is already proportional to $\Delta T$, and we only want effects to first order in $\Delta T$, so we can treat $\kappa$ as approximately constant. Then $d T / d x$ is constant, as desired. Explicitly, if we put the left end of the tank at $x = 0$, then

$$
T ( x ) \approx T _ { 0 } + \left( 1 - \frac { x } { L } \right) \Delta T .
$$

(b) For the system to be in mechanical equilibrium, the pressure must be uniform. By the ideal gas law, the density obeys $\rho \propto P / T$, which implies that, to first order in $\Delta T , \rho$ is also a linear function of $x$. In addition, this linear function has to have an average value of $m / \left( \pi R ^ { 2 } L \right)$, so that the total mass of gas remains $m$. We thus have
$$
\rho ( x ) \approx \frac { m } { \pi R ^ { 2 } L } \left( 1 + \frac { \Delta T } { T _ { 0 } } \frac { x - L / 2 } { L } \right) .
$$
(c) Relative to the left wall, the center of mass of the gas is at
$$
x _ { \mathrm { cm } } = \frac { 1 } { m } \int _ { 0 } ^ { L } x \rho ( x ) \pi R ^ { 2 } d x = \frac { 1 } { L } \int _ { 0 } ^ { L } \left( 1 + \frac { \Delta T } { T _ { 0 } } \frac { x - L / 2 } { L } \right) x d x = L \left( \frac { 1 } { 2 } + \frac { \Delta T } { 12 T _ { 0 } } \right) .
$$

Thus it was displaced to a distance $\Delta x = L \Delta T / \left( 12 T _ { 0 } \right)$ to the right with respect to the carriage. Since there's no net force on the system, the center of mass of the entire system must have stayed stationary. Thus the displacement of the carriage $D$ satisfies
$$
M D + m ( D + \Delta x ) = 0 .
$$
Solving for $D$ yields
$$
D = - L \frac { m } { M + m } \left( \frac { \Delta T } { 12 T _ { 0 } } \right) \approx - L \frac { m } { M } \frac { \Delta T } { 12 T _ { 0 } } .
$$
(d) When a gas molecule bounces off a hotter wall, it picks up kinetic energy in the collision; in other words, it bounces off faster than it came in. (This is the microscopic way heat is transferred through conduction.) So the pressure gas molecules exert on a hotter wall is actually greater than the pressure of the gas itself. (Similarly, the pressure on a colder wall is lower.) Even though the pressure of the gas was initially uniform, an unbalanced force was momentarily exerted on the walls until local thermal equilibrium was reached.

[4] Problem 13. APhO 2010, problem 3B. A mathematical problem on a collapsing bubble.
Remark
Students often get stuck on problem 14, which is about a chimney above a furnace, because they forget that the base of the furnace is open to the air, and so its pressure is equal to the atmospheric pressure. Indeed, in real life it is very hard to produce air pressures substantially above atmospheric pressure. You need to either tightly seal a container (which applies to the engines of the problems above, or to pressure cookers), or make the air move very quickly (which occurs in jet engines, covered in T3, or in specialized "blast" furnaces).
[4] Problem 14. IPhO 2010, problem 2. A neat, tricky problem about how chimneys work.

## 3 Statistical Mechanics

There are fundamentally two approaches to describing systems of many interacting particles: bottomup and top-down. In the top-down approach of thermodynamics, we try to roughly describe the behavior of the whole system in terms of a few macroscopically measurable observables, such as pressure and temperature, and hope this is enough information to extract what we want. In the bottom-up approach, we start by analyzing the behavior of individual molecules, governed by Newtonian mechanics. Of course, we can't do this exactly, but it turns out to be possible to make probabilistic statements about individual molecules. This is the approach of statistical mechanics.

Idea 5: Boltzmann Distribution
The probability distribution for the states of a particle in a system of temperature $T$ is proportional to $e ^ { - E / k _ { B } T }$. Specifically:

- For quantum systems, where the energy levels are discrete, the probability of being in a state $n$ with energy $E _ { n }$ is proportional to $e ^ { - E _ { n } / k _ { B } T }$.
- For a single classical particle, the state is instead specified by $( x , p )$, the position and the

momentum, and the probability density in this space, called phase space, is proportional to $e ^ { - E ( x , p ) / k _ { B } T }$.

It isn't possible to derive the Boltzmann distribution from anything we've already covered, but you'll see in T2 how it emerges from a simpler postulate.

Example 5: Isothermal Atmosphere
Do problem 7 using statistical mechanics.

Solution
The energy of each particle is

$$
E ( \mathbf { x } , \mathbf { p } ) = m g z + \frac { p ^ { 2 } } { 2 m }
$$

The probability distribution for height $z$ is found by integrating over all the other quantities,

$$
p ( z ) \propto \int d x \int d y \int d ^ { 3 } \mathbf { p } e ^ { - E ( \mathbf { x } , \mathbf { p } ) / k _ { B } T } = e ^ { - m g z / k _ { B } T } \int d x \int d y \int d ^ { 3 } \mathbf { p } e ^ { - p ^ { 2 } / 2 m k _ { B } T }
$$

Here, all integrals are implicitly from $- \infty$ to $\infty$. Now, the remaining integrals are just constants independent of $z$, so we just get

$$
p ( z ) \propto e ^ { - m g z / k _ { B } T } .
$$

Since the particles are assumed independent (since we have an ideal gas), the probability for a particle to be at a point is proportional to the density of gas at that point. We see the density falls exponentially with height, so by the ideal gas law, the pressure does too.
[1] Problem 15. Do example 3 using statistical mechanics, by working in the station's rotating frame.
Solution. In the rotating frame of reference, the Coriolis force is irrelevant because it does no work, and integrating the centrifugal force gives a potential energy $U ( r ) = - m \omega ^ { 2 } r ^ { 2 } / 2$. Therefore, the radial probability distribution is

$$
p ( r ) \propto e ^ { m \omega ^ { 2 } r ^ { 2 } / 2 k _ { B } T } .
$$

By the definition of density, we have $\rho ( r ) \propto p ( r )$, and at fixed temperature, the pressure $P ( r )$ is proportional to the density by the ideal gas law. Thus, the pressure obeys

$$
\frac { P ( r = 0 ) } { P \left( r = R _ { 0 } \right) } = e ^ { - m \omega ^ { 2 } R _ { 0 } ^ { 2 } / 2 k _ { B } T } .
$$

exactly as found earlier.
Now you might be wondering: why can't we solve this problem by working in the lab frame, where there's no centrifugal potential? It's related to a question in M3, about considering the energy of a car in a frame where the Earth is moving. In the rotating frame, the heavy space station is at rest, and any change in its energy is negligible. But in the lab frame, it's moving, so particles can transfer a substantial amount of energy to it in collisions. This energy needs to be accounted for in $E ( \mathbf { x } , \mathbf { p } )$, and ultimately gives the same answer after a more complicated calculation. This is another example of the principle that when energy matters, you should almost always work in the frame of the most massive object in the problem.
