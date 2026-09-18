---
id: solution-ocr-kevin-zhou-m3sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m3-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 20. Here's a variety problem involving some "clean" mathematical results. All three parts can be solved without lengthy calculation.
    (a) Consider $n$ identical balls confined to a line. Assuming all collisions are perfectly elastic, what is the maximum number of collisions that could happen? Assume no triple collisions happen.
    (b) A billiard ball hits an identical billiard ball initially at rest in a perfectly elastic collision. Show that the balls exit at a right angle to each other.
    (c) A mass $M$ collides elastically with a stationary mass $m$. If $M > m$, show that the maximum possible angle of deflection of $M$ is $\sin ^ { - 1 } ( m / M )$.

Solution. (a) When two identical balls collide, they simply swap velocities. Thus, we can imagine the balls as passing through one another, and we want the maximum number of times two balls can pass through each other. All $n ( n - 1 ) / 2$ pairs can pass through each other, as long as the $i ^ { \text {th } }$ ball on the right has the $i ^ { \text {th } }$ smallest rightward velocity.


(b) Let the initial velocity be $\mathbf { v }$, and the final velocities be $\mathbf { v } _ { 1 }$ and $\mathbf { v } _ { 2 }$. By momentum conservation, $\mathbf { v } _ { 1 } + \mathbf { v } _ { 2 } = \mathbf { v }$. By energy conservation, $v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } = v ^ { 2 }$. By the law of cosines, this is only possible if $\mathbf { v } _ { 1 }$ and $\mathbf { v } _ { 2 }$ are orthogonal.
(c) Let $v$ be the initial speed. Recall that in the center of mass frame, the mass $M$ can only change the direction, but not the magnitude, of its velocity. In this frame, the speed of the mass $M$ is $v ^ { \prime } = m v / ( m + M )$. Thus, the possible final velocities lie on a circle of radius $v ^ { \prime }$.
Now let's transform back to the lab frame. In this frame, it's still true that the possible final velocities lie on a circle of radius $v ^ { \prime }$, but the center of this circle is now at the center of mass velocity $v _ { c } = M v / ( m + M )$.
![](../../../figures/solution-ocr/da5a7d52265690cd6724f76c.jpg)
From the diagram above, the final velocity that maximizes the angle $\theta$ of deflection yields
$$
\sin \theta = \frac { v ^ { \prime } } { v _ { c } } = \frac { m } { M }
$$
which is the desired result.

[3] Problem 21 (PPP 72). Beads of equal mass $m$ are strung at equal distances $d$ along a long, horizontal, infinite wire. The beads are initially at rest but can move without friction. The first bead is continuously accelerated towards the right by a constant force $F$.
![](../../../figures/solution-ocr/088285d9fa08ec4cf2769f2d.jpg)
After some time, a "shock wave" of moving beads will propagate towards the right.
    (a) Find the speed of the shock wave, assuming all collisions are completely inelastic.
    (b) Do the same, assuming all collisions are completely elastic. What is the average speed of the accelerated bead in this case?

If you're having trouble visualizing this, try plotting all the masses' positions $x ( t )$ over time.
Solution. (a) In the steady state, a large clump of particles will be moving towards the right. If the steady state speed is $v _ { 0 }$, then collisions occur at time intervals $d / v _ { 0 }$, so the momentum of the blob must grow at rate $\left( m v _ { 0 } \right) \left( v _ { 0 } / d \right)$ as new beads join it. This must be equal to $F$, and solving gives

$$
v _ { 0 } = \sqrt { \frac { F d } { m } } .
$$


(b) By basic kinematics, the speed of the first, accelerated bead the moment before it hits the next bead is
$$
v _ { 1 } = \sqrt { \frac { 2 F d } { m } } .
$$
At the moment of collision, the first bead loses all its velocity to the second. The second bead moves towards the third with velocity $v _ { 1 }$ and gives its velocity to the third, and so on, creating a shock front with velocity $v _ { 1 }$.
In the meantime, the first bead is still accelerating. After another time interval, it hits the second bead, which is now where the third bead originally was, and the same phenomenon happens again, creating another bead with velocity $v _ { 1 }$ just behind the leading one. So after a long time, we build up a shock front of beads traveling with speed $v _ { 1 }$.
On the other hand, the first bead keeps uniformly accelerating between zero speed and $v _ { 1 }$, so its average speed is just $v _ { 1 } / 2$. Evidently, the shock wave separates from the first bead over time.
[3] Problem 22. USAPhO 2019, problem A1.
[3] Problem 23. USAPhO 2009, problem B1.
Example 8: MPPP 42
There are $N$ identical tiny discs lying on a table, equally spaced along a semicircle, with total mass $M$. Another disc $D$ of mass $m$ is very precisely aimed to bounce off all of the discs in turn, then exit opposite the direction it came.

![](../../../figures/solution-ocr/e20da5a76399c4a6ae1d1178.jpg)
In the limit $N \rightarrow \infty$, what is the minimal value of $M / m$ for this to be possible? Given this value, what is the ratio of the final and initial speeds of the disc?

## Solution

The reason there is a lower bound on $M$ is that, by problem 20(c), there is a maximal angle that each tiny disc can deflect the disc $D$. For large $N$, the deflection is $\pi / N$ for each disc, so

$$
\frac { \pi } { N } = \sin ^ { - 1 } \frac { M / N } { m } \approx \frac { M } { N m }
$$

which implies that $M / m \geq \pi$.
To see how much energy is lost in each collision, work in the center of mass frame and consider the first collision. In this frame, the disc $D$ is initially approximately still, and the tiny disc comes in horizontally with speed $v$. To maximize the deflection angle in the table's frame, the tiny disc should rebound vertically, as this provides the maximal vertical impulse to the disc $D$.

Thus, going back to the table's frame, where the disc $D$ has speed $v$, the tiny disc scatters with speed $\sqrt { v ^ { 2 } + v ^ { 2 } } = \sqrt { 2 } v$. By conservation of energy,

$$
\Delta \left( \frac { 1 } { 2 } m v ^ { 2 } \right) = - \frac { 1 } { 2 } \frac { M } { N } ( \sqrt { 2 } v ) ^ { 2 } .
$$

This simplifies to

$$
\frac { \Delta v } { v } = - \frac { \pi } { N }
$$

which means that after $N$ collisions, we have the cute result

$$
\frac { v _ { f } } { v _ { i } } = \left( 1 - \frac { \pi } { N } \right) ^ { N } \approx e ^ { - \pi }
$$

where in the last step we used a result from P1.


Example 9: NBPhO 2003.1
A spherical volleyball of radius $r$ and mass $m$ is inflated with excess pressure $\Delta P$. If it is dropped from the ceiling and hits the ground, estimate how long the subsequent elastic collision takes.

Solution
Answering this question requires making a simplified physical model of how the collision occurs. Let's say that when the volleyball hits the ground, it will keep going straight down, deforming the part that touches the ground into a flat circular face. Specifically, when the ball has moved a distance $y$ into the ground, the flat face has area

$$
A = \pi \left( \sqrt { r ^ { 2 } - ( r - y ) ^ { 2 } } \right) ^ { 2 } = \pi y ( 2 r - y ) \approx 2 \pi r y
$$

where we assumed that $y \ll r$ at all times, which is reasonable as long as the ball's initial speed is not enormous. As a result, the pressure of the volleyball exerts a force

$$
F = 2 \pi r \Delta P y
$$

on the ground. This assumes the pressure inside the volleyball remains uniform, and that the rest of the volleyball stays approximately spherical, which is again reasonable as long as the initial speed is not huge.

Assuming the initial velocity is not too small, gravity is negligible during the collision, so during the collision the force on the volleyball is effectively that of an ideal spring. The collision lasts for half a period, giving

$$
\tau = \pi \sqrt { \frac { m } { k _ { \mathrm { eff } } } } = \sqrt { \frac { \pi m } { 2 r \Delta P } } .
$$

If we plug in realistic numbers, the result is of order 10 ms, which is plausible.

## 5 Continuous Systems

Example 10
As shown in M2, a hanging chain takes the form of a catenary. Suppose you pull the chain down in the middle. How does the center of mass of the chain move? Does the answer depend on how hard you pull?

Solution
No matter how hard you pull, or in what direction, the height of the center of mass always goes up! This is because this quantity measures the total gravitational potential energy of the chain. If you pull a chain in equilibrium, in any direction whatsoever, you will do work on it. So this raises its potential energy, and hence the center of mass.


Another way of saying this is that the equilibrium position, without the extra pull you supply, is already in the lowest energy state, and hence already has the lowest possible center of mass. Changing this shape in any way raises the center of mass.
