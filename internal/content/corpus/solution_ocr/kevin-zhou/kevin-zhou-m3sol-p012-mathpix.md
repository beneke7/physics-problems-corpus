---
id: solution-ocr-kevin-zhou-m3sol-p012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m3-p012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 12. Alice steps on the gas pedal on her car. Bob, who is standing on the sidewalk, sees Alice's car accelerate from rest to 10 mph. Charlie, who is passing by in another car, sees Alice's car accelerate from 10 mph to 20 mph. Hence Charlie sees the kinetic energy of Alice's car increase by three times as much. How is this compatible with energy conservation, given that the same amount of gas was burned in both frames?

Solution. The difference in energy comes from the change in kinetic energy of the Earth. In Bob's frame, the final kinetic energy of the Earth is $p ^ { 2 } / 2 M$ where $p$ is the total frictional impulse, and this is negligible since $p$ is moderately sized, while the Earth's mass $M$ is huge. Another way of saying this is that the final kinetic energy of the car is $p ^ { 2 } / 2 m _ { \text {car } }$, which is much larger since $m _ { \text {car } } \ll M$.

On the other hand, in Charlie's frame, the Earth has some initial momentum $P$. The change in kinetic energy of the Earth is

$$
\Delta K _ { E } = \frac { ( P - p ) ^ { 2 } - P ^ { 2 } } { 2 M } = - \frac { P p } { M } + \frac { p ^ { 2 } } { 2 M } .
$$

The last term is again negligible, but now we have a term that is linear in $p$, which isn't negligible. Let $v _ { 0 } = 10 \mathrm { mph }$. We have $P / M = v _ { 0 }$ and $p = m _ { \text {car } } v _ { 0 }$, so

$$
\Delta K _ { E } = - m _ { \text {car } } v _ { 0 } ^ { 2 } .
$$

This decrease in Earth's kinetic energy accounts for the extra increase in the car's kinetic energy. The lesson of this problem is that when you go into a different reference frame, kinetic energies and even changes in kinetic energy can differ dramatically. While you can get the right answer either way, it's generally least confusing to work in the rest frame of the largest object in the problem.

When there are multiple large objects, you can get interesting effects. For example, naively a gravitational slingshot can't work, because the gravitational force is conservative. And indeed, a rocket doing a gravitational slingshot off of Jupiter gets no additional energy, in Jupiter's frame. However, for rockets that far out, the most important object is the Sun, since it determines, e.g. whether the rocket can escape the solar system. To answer that kind of question we should work in the Sun's frame, and in this frame the rocket does get more energy, as it harvests it from Jupiter's large kinetic energy. You'll investigate this in more detail in M6.
[3] Problem 13 (KK 4.8). A block of mass $m$ is attached to a spring of spring constant $k$. It is pulled a distance $L$ from its equilibrium position and released from rest. The block has a small coefficient of friction $\mu$ with the ground. Find the number of cycles the mass oscillates before coming to rest.

Solution. First let's present a short solution that only works for small $\mu$. (The kind of reasoning will be useful in M4.) Let $A$ be the amplitude, so the energy is $E = \frac { 1 } { 2 } k A ^ { 2 }$. Hence in one cycle, the change in energy is related to the change in amplitude by

$$
d E = k A d A
$$

where we can use infinitesimals for one cycle since the friction is assumed small. But the energy loss is also $4 \mu m g A$, so plugging this in gives

$$
d A = - \frac { 4 \mu m g } { k } .
$$

The oscillation ends when the amplitude drops to zero, so

$$
N = \frac { k L } { 4 \mu m g } .
$$

We expect this result to be trustworthy whenever $N$ is large, i.e. when the fractional amplitude change during a cycle is small.

However, this problem is simple enough to be solved exactly. During the left-moving part of a cycle, the friction provides a constant force of $\mu m g$ to the right. Therefore, just like how gravity


shifts the equilibrium position of a vertical spring, the friction shifts the equilibrium position to the right by $\mu m g / k$. The left-moving motion is a perfect sinusoid centered at this position. Similarly, the right-moving part of the oscillation is a perfect sinusoid, but instead centered at $- \mu m g / k$. The net effect of one cycle is thus to decrease the amplitude by exactly $4 \mu m g / k$. Therefore, $N = k L / ( 4 \mu m g )$, or more strictly speaking, the number of complete "cycles" is $\lfloor N \rfloor$.
[3] Problem 14 (Morin 5.4). A massless string of length $2 \ell$ connects two hockey pucks that lie on frictionless ice. A constant horizontal force $F$ is applied to the midpoint of the string, perpendicular to it. The pucks eventually collide and stick together. How much kinetic energy is lost in the collision?

Solution. Suppose the bend in the rope is $\theta$, where originally $\theta = 0$. We see that the tension $T$ satisfies $2 T \sin \theta = F$, by balancing forces at the midpoint. Thus, the $y$-component of the force on the top mass is $T \cos \theta$, so the total work done by tension in the $y$ direction is

$$
W = - \int _ { 0 } ^ { \pi / 2 } 2 ( T \cos \theta ) d ( \ell \cos \theta ) = \ell F \int _ { 0 } ^ { \pi / 2 } \cos \theta d \theta = F \ell
$$

This determines the vertical kinetic energy, $m v _ { y } ^ { 2 } / 2$, of each puck. When the pucks collide, all of this energy is lost, giving the answer $F \ell$.

There's also a slick alternate solution using a noninertial reference frame. Now, in general work depends on the reference frame, as we just saw in problem 12, since displacement does, so we always need to be careful calculating energies in other frames. However, the amount of dissipated energy determines how much the pucks warm up, which is independent of frame! Therefore, we are free to use any frame we want.

In particular, consider the frame with acceleration $F / 2 m$ along the force. In this frame, there is a fictitious force $- F / 2$ on each puck. The net force on the system is zero, so the pucks move directly towards each other. When the pucks collide, the point of application of the force $F$ has traveled a distance $\ell$, doing work $F \ell$. Since the pucks are stationary after collision, all this energy is dissipated, giving the answer $F \ell$ again.

Idea 4
If a problem can be solved using either momentum conservation or energy conservation alone, it usually means one of the two isn't actually conserved. In particular, many processes are inherently inelastic and inevitably dissipate energy. For more about inherently inelastic processes, see section 5.8 of Morin.
[2] Problem 15 (KK 4.20). Sand falls slowly at a constant rate $d m / d t$ onto a horizontal belt driven at constant speed $v$.

(a) Find the power $P$ needed to drive the belt.
(b) Show that the rate of increase of the kinetic energy of the sand is only $P / 2$.
(c) We can explain this discrepancy exactly. Argue that in the reference frame of the belt, the rate of heat dissipation is $P / 2$. Since temperature is the same in all frames, the rate of heat dissipation is $P / 2$ in the original frame as well, accounting for the missing energy.

Solution. (a) We have $P = F v = ( d p / d t ) v = ( v ( d m / d t ) ) v = v ^ { 2 } d m / d t$.


(b) Clearly, it's $\frac { 1 } { 2 } ( d m / d t ) v ^ { 2 } = P / 2$.
(c) In the belt's frame, the sand comes in with a speed of $v$, and friction slows it down to zero speed. Hence the sand loses all its kinetic energy to heat, at a rate $\frac { 1 } { 2 } ( d m / d t ) v ^ { 2 } = P / 2$.

Example 5: PPP 108
A fire hose of mass $M$ and length $L$ is coiled into a roll of radius $R$. The hose is sent rolling along level ground, with its center of mass given initial speed $v _ { 0 } \gg \sqrt { g R }$. The free end of the hose is held fixed.
![](../../../figures/solution-ocr/4052a328b94a361d84bee1d5.jpg)
The hose unrolls and becomes straight. How long does this process take to complete?

Solution
First, we need to find what is conserved. The horizontal momentum is not conserved, because there is an external horizontal force needed to keep the end of the hose in place. On the other hand, the energy is conserved, even though this process looks inelastic. The hose "sticks" to the floor as it unrolls, but this process dissipates no energy because the circular part of the hose rolls without slipping, so the bottom of this part always has zero velocity.

Once we figure out energy is conserved, the problem is straightforward. The assumption $v _ { 0 } \gg \sqrt { g R }$ means we can neglect the change in gravitational potential energy as the hose unrolls. After the hose travels a distance $x$,

$$
\frac { 1 } { 2 } \left( 1 + \frac { 1 } { 2 } \right) M v _ { 0 } ^ { 2 } = \frac { 1 } { 2 } \left( 1 + \frac { 1 } { 2 } \right) m v ^ { 2 }
$$

where the $1 / 2$ terms are from rotational kinetic energy. Since $m ( x ) = M ( 1 - x / L )$, we have

$$
v ( x ) = \frac { v _ { 0 } } { \sqrt { 1 - x / L } }
$$

which gives a total time

$$
T = \int _ { 0 } ^ { L } \frac { d x } { v ( x ) } = \frac { L } { v _ { 0 } } \int _ { 0 } ^ { 1 } \sqrt { 1 - u } d u = \frac { 2 L } { 3 v _ { 0 } } .
$$

Evidently, the hose accelerates as it unrolls.
