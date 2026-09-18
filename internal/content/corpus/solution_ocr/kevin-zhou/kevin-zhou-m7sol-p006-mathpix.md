---
id: solution-ocr-kevin-zhou-m7sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 6. Below is another perpetual motion machine, proposed centuries ago.
![](../../../figures/solution-ocr/039dbc3cc3f5f7f7401dfef5.jpg)
The balls are less dense than water. The balls on the left are pulled downward by gravity, while the balls on the right are pushed upward by the buoyant force.
    (a) Why doesn't this work?
    (b) Would it work if the balls and chain were replaced with a flexible tube of constant thickness?

Solution. (a) Let the balls have volume $V$, and the column have height $h$. The positive work done on a ball by the buoyant force, as it climbs the length of the column, is

$$
W _ { \text {up } } = F \Delta x = ( \rho g V ) h .
$$

On the other hand, it costs work to insert the ball into the column at the bottom,

$$
W _ { \text {in } } = P \Delta V = ( \rho g h ) V .
$$

Thus, the energy you get from letting a ball go all the way up is just the energy you put in by pushing the ball in at the bottom, so there's no free energy.
What this means in practice is that if you actually set up the system, it will start moving a bit until the first ball hits the bottom of the column, and then it won't be able to go in. If you push it in, then the chain will start going around, but only at a constant speed, until friction slows it down.


(b) In this case, the objection raised in part (a) doesn't hold. The tube can just slide in at the bottom, so that $W _ { \text {in } } = 0$. However, the machine still doesn't work because now the buoyant force vanishes, so $W _ { \text {up } } = 0$ too. The point is that the buoyant force is only $\rho g V$ if the entirety of the object with volume $V$ is surrounded by water. Since the tube just goes right through the bottom of the column, there's no water present to push up on the bottom of the tube, and thus no buoyant force.

[2] Problem 7 (HRK). A fluid is rotating at constant angular velocity $\omega$ about the vertical axis of a cylindrical container. Defining $z = 0$ to be the water level at the cylinder's axis, show that the liquid surface is the paraboloid
$$
z = \frac { \omega ^ { 2 } r ^ { 2 } } { 2 g } .
$$
Since a paraboloid perfectly focuses incoming light which is parallel to its axis, a rotating fluid can be used as a telescope, as was first pointed out by Isaac Newton. Such liquid-mirror telescopes are cheap, but have the disadvantage that they can only point up. Alternatively, one can gradually cool molten glass in a rotating container so that it solidifies into a paraboloidal lens.
Solution. Work in the frame rotating with the fluid, where it is static. Balancing the pressure and centrifugal force on a cylindrical shell of thickness $d r$, at radius $r$ and height $h$, gives
$$
d P ( 2 \pi r h ) = \omega ^ { 2 } r ( \rho ( 2 \pi r h d r ) ) \Longrightarrow \frac { d P } { d r } = \rho \omega ^ { 2 } r .
$$
On the other hand, we also know that in hydrostatic equilibrium, the pressure obeys
$$
\frac { d P } { d z } = - \rho g .
$$
The pressure has to stay the same along the surface, so
$$
\frac { d P } { d r } + \frac { d P } { d z } \frac { d z } { d r } = 0 .
$$
We thus have $d z / d r = \omega ^ { 2 } r / g$, and integrating gives the desired result.
[3] Problem 8. USAPhO 2013, problem A4. In order to make measurements, print out the problem before starting.

## 2 Fluid Mechanics

Next we'll consider some situations involving fluids and other objects, where the fluids can be treated at least quasistatically but the objects must be treated dynamically.

Idea 3
The buoyant force can be regarded as acting at the center of gravity of the fluid displaced by the submerged part of a floating object, called the center of buoyancy. A floating configuration is stable if, when the configuration is slightly rotated, the buoyant force provides a restoring torque about the center of mass.

[2] Problem 9 (Kalda). A hemispherical container is placed upside-down on a smooth horizontal surface. Water is poured in through a small hole at the top. At the moment the container fills, water starts leaking from between the table and the edge of the container.
![](../../../figures/solution-ocr/284d41c4c49b0fced67afbc0.jpg)
Find the mass of the container if the water has density $\rho$ and the hemisphere has radius $R$.

Solution. Note that right when the water is full, the normal force between the ground and the container vanishes. Thus, the weight of the container and water is balanced by the normal force on the water. However, this is just $\rho g R \left( \pi R ^ { 2 } \right)$, so we have

$$
\left( M + \frac { 2 } { 3 } \pi R ^ { 3 } \rho \right) g = \rho g \pi R ^ { 3 } , \quad M = \frac { \rho \pi R ^ { 3 } } { 3 } .
$$

Note that the atmosphere has a negligible effect here, because if all atmospheric effects are accounted for, the net effect is just a tiny buoyant force on the container and water.

[2] Problem 10 (MPPP 89). A thin-walled hemispherical shell of mass $m$ and radius $R$ is pressed against a smooth vertical wall.
![](../../../figures/solution-ocr/2c32ad3bb51a1c2903fc174c.jpg)
It is filled with water through a small aperture at its top, with total mass $M$. Find the minimum magnitude of the force that has to be applied to the shell to keep the liquid in place.

Solution. We consider the system of the water and shell. The external force $F$ exerted must counteract the vertical force of gravity, and the horizontal force of the hydrostatic pressure from the wall. First, vertical force balance gives

$$
F _ { y } = ( M + m ) g .
$$

Evaluating horizontal force balance is slightly trickier. However, note that by symmetry, the average pressure at the part of the wall touching the water is precisely the pressure at the vertical center of the hemisphere, so

$$
F _ { x } = \bar { P } A = ( \rho g R ) \left( \pi R ^ { 2 } \right) = \pi R ^ { 3 } \rho g = \frac { 3 } { 2 } M g .
$$

Thus, the total force needed is

$$
F = \sqrt { F _ { x } ^ { 2 } + F _ { y } ^ { 2 } } = g \sqrt { \frac { 13 } { 4 } M ^ { 2 } + 2 M m + m ^ { 2 } } .
$$

Note that we ignored the effect of the atmosphere in this question, which would be tiny in any case; one can tell that it should be ignored since the problem statement never specified the density of air.

Technically, we should verify that the torques can be balanced too, by choosing an appropriate point to apply the force $F$. Take the origin $O$ to be the center of the hemisphere, so that the radial pressure of the curved part produces no torque. The applied force needs to cancel the torques from gravity and the pressure from the wall. It turns out there always exists a point of application for $F$ that does this, but showing it explicitly is messy and unenlightening. In this problem, you're just meant to see intuitively that torque can be balanced.


[3] Problem 11. USAPhO 2004, problem A2.
[3] Problem 12. USAPhO 2002, problem A4. Be careful with this one!
