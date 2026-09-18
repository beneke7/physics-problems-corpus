---
id: solution-ocr-kevin-zhou-t1sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 9
A container of volume $V$ is filled with a gas of uniform temperature $T$, and placed in a vacuum. If a small hole is punched in the container and gas slowly leaks out, how does the temperature in the container change over time?

Solution
The mean free path $\lambda$ is the average distance a gas molecule moves before it hits another one. Let $d$ be the width of the hole. There are two important limiting cases.

If $\lambda \ll d$, then molecules can't make it out of the hole without undergoing many collisions. Thus, if the gas has some average flow velocity, its molecules will be carried along with it. We can thus treat the gas like a continuous fluid, and the logic of example 4 applies. The gas inside the container does $P d V$ work on the gas exiting and hence loses energy. Thus, the remaining gas cools down, so the temperature of the container decreases over time. (Doing this problem quantitatively requires the analogue of Bernoulli's principle for gases, which we derive in T3.)

If $d \ll \lambda$, then molecules fly out of the hole without encountering any others at all; this is the regime of "effusion". Therefore, we shouldn't think in terms of an average gas pressure or flow velocity, but rather just consider each molecule on its own. An individual molecule has a greater chance of escaping through the hole if it's moving faster. Thus, the molecules that come out will on average be higher energy than the ones that stay in the container. So just as in the opposite limit, the remaining gas cools down, but for a totally different reason. (This case is treated quantitatively in problem 2.24 of Wang and Ricardo, volume 2.)

Remark
The previous example implies that a gas of uniform temperature can turn into a hot gas and a cold gas without needing any external work, which seems to directly contradict the second law of thermodynamics! To phrase it another way, you can use the free temperature difference to run a heat engine, which seemingly allows perpetual motion.

Of course, the resolution is that the total entropy of the gas is still going up. The kinetic energy is getting less spread out, but the positions of the atoms are getting more spread out, since some can now be outside the container. Thus, the "perpetual motion" only works as long as the gas is still leaking out of the container; it stops once the density becomes uniform. The lesson here is that, while most setups extract work from a temperature difference, more generally you can extract it from any potential increase in entropy; in this case, it comes from an initial difference in densities.
[2] Problem 22 (Kalda). Natural uranium consists of mainly two isotopes, ${ } ^ { 238 } \mathrm { U }$ and ${ } ^ { 235 } \mathrm { U }$, and the relative concentration of the latter is 0.7\%. Uranium is enriched by a multi-stage process, where at each stage, evaporated $\mathrm { UF } _ { 6 }$ is led through a porous wall. The porous wall is a thin film with microscopic holes, much smaller than the mean free path of the molecules, but larger than the


dimension of the molecules. How many stages are needed to increase the ${ } ^ { 235 } \mathrm { U }$ content to 1.4\%? The molar mass of fluoride is 19 g/mol.

Solution. Say the two different versions of $\mathrm { UF } _ { 6 }$ have molecular masses $M _ { 1 } , M _ { 2 }$. The key idea is that the average kinetic energy of each one is the same (namely $\frac { 3 } { 2 } k _ { B } T$ ), so $\frac { 1 } { 2 } M _ { 1 } v _ { 1 } ^ { 2 } = \frac { 1 } { 2 } M _ { 2 } v _ { 2 } ^ { 2 }$. This means that $v _ { 1 } / v _ { 2 } = \sqrt { M _ { 2 } / M _ { 1 } }$, so the rate that $M _ { 1 }$ leaves divided by the rate that $M _ { 2 }$ leaves is $\sqrt { M _ { 2 } / M _ { 1 } }$. Thus, the rate at which ${ } ^ { 238 } \mathrm { U }$ leaves divided by the rate that ${ } ^ { 235 } \mathrm { U }$ leaves is

$$
r = \sqrt { ( 235 + 6 \cdot 19 ) / ( 238 + 6 \cdot 19 ) } \approx 0.9957 .
$$

Therefore, in each state the ratio of ${ } ^ { 238 } \mathrm { U }$ to ${ } ^ { 235 } \mathrm { U }$ is multiplied by $r$, and the total number of stages $N$ required obeys $r ^ { N } \approx 1 / 2$, which has solution $N \approx 160$.

This problem assumed a large mean free path, in which case the molecules escaped by effusion. In the opposite limit, where the mean free path is small, we would instead describe the gas using fluid flow equations, such as Bernoulli's principle. However, in that limit the two isotopes would just get carried along with the flow in the same way, leading to no enrichment.

[2] Problem 23 (Cahn). A small vessel with a tiny hole of diameter $d$ is placed inside a chamber, where the pressure is so low that the mean free path is $\lambda \gg d$. The temperature of the gas in the chamber is $T _ { 0 }$, and the pressure is $P _ { 0 }$. The temperature in the vessel is kept at a constant $T _ { 1 } = 4 T _ { 0 }$.
![](../../../figures/solution-ocr/a8a0325c1728b3bf3c078735.jpg)
What is the pressure inside the vessel when steady state is reached?
Solution. Since the chamber is much larger than the vessel, gas entering the vessel and leaving from the vessel won't affect the pressure or temperature of the chamber. Now, it is very easy to fall into the following trap. One may argue that steady state is reached when the pressures in the vessel and chamber are the same. After all, isn't that what happens when two gases come in equilibrium?
The problem is that we are in the effusive regime $\lambda \gg d$. Thus, if a particle is near the hole and heading towards it, it's likely to just pass through without hitting anything at all; it doesn't "know" that it's entered a region of higher pressure, so there's no reason for the pressures to equalize. Instead, equilibrium just occurs whenever the rate of particles going from the chamber to the vessel is the same as the rate of particles going from the vessel to the chamber. This rate is proportional to the number density times the average speed, so in equilibrium,
$$
n _ { 0 } \left\langle v _ { 0 } \right\rangle = n _ { 1 } \left\langle v _ { 1 } \right\rangle .
$$
We also know that $\left\langle v _ { i } \right\rangle \propto \sqrt { T _ { i } }$ by equipartition. Therefore, $n _ { 1 } = n _ { 0 } / 2$, and the ideal gas law says $p \propto n T$, so $p _ { 1 } = 2 p _ { 0 }$.
If you think the step where we asserted $n _ { i } \left\langle v _ { i } \right\rangle$ matched on both sides was not rigorous enough, here's a more formal derivation. (The result of this derivation will also be used in T2.)

Lemma. Given a box with an (ideal) gas of particle mass $m$, temperature $T$, and number density $n$ (number of particles per unit volume), the number of particles leaving a small hole of area $A$ per unit time is

$$
\frac { n A } { 4 } \langle v \rangle = \frac { n A } { 4 } \sqrt { \frac { 8 k _ { B } T } { \pi m } }
$$

assuming that $\sqrt { A } \ll \lambda$.
Proof. Let $f ( v )$ be the distribution of velocities of the particles. What this means is that the probability that a particle has velocity in $\left[ v _ { x } , v _ { x } + d v _ { x } \right] \times \left[ v _ { y } , v _ { y } + d v _ { y } \right] \times \left[ v _ { z } , v _ { z } + d v _ { z } \right]$ is

$$
f \left( \sqrt { v _ { x } ^ { 2 } + v _ { y } ^ { 2 } + v _ { z } ^ { 2 } } \right) d v _ { x } d v _ { y } d v _ { z }
$$

Set up spherical coordinates with origin at the hole. We will now count the number of particles that hit the hole in a time $d t$ using a funny double counting argument, where we start by counting the number of particles that hit the hole with a certain velocity and then integrate over all velocities.

We will start by counting the number of particles that move with speed $v$ (technically speed in $[ v , v + d v ]$, but from now on we'll be lazy about this) and spherical coordinate angles $( \theta , \phi )$. Here $\theta = 0$ means pointing toward the hole, and $\theta = \pi / 2$ is parallel to the plane of the hole (the spherical coordinates for the velocity are flipped compared to those for space, since the $\theta = 0$ rays are anti-parallel). In a given volume $d V$, the number of particles with this velocity is just

$$
( n d V ) \cdot f ( v ) \cdot v ^ { 2 } \sin \theta d v d \theta d \phi .
$$

For this given velocity, the volume in space that will allow such particles to hit the hole is a tilted cone object with base $A$, slant $\theta$, slant height $v d t$, and aligned in the proper $\phi$ direction. In particular, its volume is $A ( v d t ) \cos \theta$, so the number of particles with velocity $( v , \theta , \phi )$ hitting the hole in time $d t$ is

$$
( n A d t ) \cdot f ( v ) \cdot v ^ { 3 } \sin \theta \cos \theta d v d \theta d \phi .
$$

Thus, the rate of particles leaving is

$$
\alpha = n A \int _ { 0 } ^ { \infty } v ^ { 3 } f ( v ) d v \int _ { 0 } ^ { \pi / 2 } \sin \theta \cos \theta d \theta \int _ { 0 } ^ { 2 \pi } d \phi = \pi n A \int _ { 0 } ^ { \infty } v ^ { 3 } f ( v ) d v
$$

On the other hand, note that the average speed is

$$
\langle v \rangle = \int _ { 0 } ^ { \infty } \int _ { 0 } ^ { \pi } \int _ { 0 } ^ { 2 \pi } v \cdot f ( v ) \cdot v ^ { 2 } \sin \theta d v d \theta d \phi = 4 \pi \int _ { 0 } ^ { \infty } v ^ { 3 } f ( v ) d v
$$

which tells us that

$$
\alpha = \frac { n A } { 4 } \langle v \rangle ,
$$

as desired. Note that this derivation didn't depend on the particular form of $f ( v )$. For instance, it would work just as well for a relativistic particle, or even photons, as we'll see in T2.
