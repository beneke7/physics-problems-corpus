---
id: solution-ocr-usapho-2013-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2013-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

Shown below is the Blackbird, a vehicle built in 2009.
There is no source of stored energy such as a battery or gasoline engine; all of the power used to move the car comes from the wind. The only important mechanism in the car is a gearbox that can transfer power between the wheels and the propeller.

The Blackbird was driven both directly downwind and directly upwind, as shown below. In each case the car remained exactly parallel (or anti-parallel) to the wind without turning. The tests were conducted on level ground, in steady, uniform wind, and continued long enough to reach the steady state.

![](../../../figures/solution-ocr/d046cfb2bc26edfd62d17ea4.jpg)
Source: fasterthanthewind.org

![](../../../figures/solution-ocr/30a47e7ac4496ed94b6fcd04.jpg)
Downwind

![](../../../figures/solution-ocr/e68f6d3fab1d41990e71071d.jpg)
Upwind

When driving downwind, the builders claim that they were able to drive "faster than the wind": that is, with $| \vec { v } | > \left| \vec { v } _ { w } \right|$, so that the car experienced a relative headwind while traveling. Commenters on the Internet claimed, often angrily, that this was physically impossible and that the Blackbird was a hoax. Some commenters also claimed that the upwind case was physically impossible.

a. Consider first the downwind faster than the wind case.
    - Is the motion actually possible as claimed? If not, offer a brief explanation!
    - If the motion is possible, is power transferred from the propeller to the wheels or vice versa?
    - If the motion is possible, what ground speed is attained? For this question, suppose that when transferring power in either direction between the propeller and the wheels, a fraction $\alpha$ of the useful work is lost; let the wind speed be $v _ { w }$. Neglect all other losses of energy.
b. Answer the previous questions for the upwind case.

## Solution


Both modes are possible as claimed. The solution uses the idea of "center of mass (CoM) power", which we will review below for interested readers; the solution itself starts on the next page. For simplicity, we will work in one dimension.

If a particle moves with speed $v _ { 1 }$ and experiences a force $F$, then the rate of change of its kinetic energy is

$$
P _ { 1 } = F v _ { 1 } .
$$

Suppose this force is exerted by an interaction with a second particle, which moves with speed $v ^ { \prime }$. The rate of change of its kinetic energy is

$$
P _ { 2 } = - F v _ { 2 }
$$

by Newton's third law, and the total is

$$
P = P _ { 1 } + P _ { 2 } = F v _ { 1 } - F v _ { 2 } = F v _ { r }
$$

where $v _ { r }$ is the relative velocity. If we move into a different reference frame, both $P _ { 1 }$ and $P _ { 2 }$ change, but $P$ stays the same, as all frames agree on the relative velocity.

This is straightforward, but it becomes more subtle when applied to a system more complicated than a particle. The speed $v$ becomes the speed of the point of application of the force, while the power $P$ must be generalized to include internal energy. We will write the energy of a system as $E = E _ { \mathrm { cm } } + E _ { \text {int } }$, where the "center of mass energy" $E _ { \mathrm { cm } } = M v _ { \mathrm { cm } } ^ { 2 } / 2$ is the kinetic energy associated with the motion of the CoM, and $E _ { \text {int } }$ accounts for everything else, such as the rotational energy of a wheel or propeller.

As an example, consider an accelerating bicycle. The force that pushes the bicycle forward is the friction force with the ground. However, if the wheels are rolling without slipping, then at every moment, the relative velocity between the ground and the part of the wheel touching the ground is exactly zero. Thus the power is zero, so $E$ is constant. This is because the increase in $E _ { \mathrm { cm } }$ is compensated by a decrease in the chemical energy of the cyclist, accounted for in $E _ { \text {int } }$. Thus energy arguments appear to tell us nothing useful about the motion of the bicycle. Similarly, energy arguments tell us nothing definite about the Blackbird's wheels or propellers.

It is more useful here to use "center of mass power". This concept is not covered in most textbooks, but interested readers can consult section 13.5 of Halliday, Resnick, and Krane, $5 { } ^ { \text {th } }$ edition. The idea behind CoM power is that the CoM of a system satisfies

$$
F = M a _ { \mathrm { cm } }
$$

where $F$ is the total force on the system. This is essentially the same equation as we would have for a single particle of mass $m$, so by the same proof of the work-kinetic energy theory for particles,

$$
P _ { \mathrm { cm } } = F v _ { \mathrm { cm } } , \quad P _ { \mathrm { cm } } = \frac { d E _ { \mathrm { cm } } } { d t } .
$$

The CoM power $P _ { \mathrm { cm } }$ only contributes to the CoM energy. Crucially, it only depends on the velocity of the center of mass, not on any other details of the system.

Now consider two systems interacting by a force $F$, whose centers of mass move at a relative velocity of $v _ { r }$. By the same argument as above, the net CoM power is

$$
P _ { \mathrm { cm } } = F v _ { r } .
$$


By conservation of energy, this change in CoM energy must be compensated by an opposite change in the internal energy.

Now we turn to the analysis of the downwind case. We take all velocities to be positive. In the steady state, the velocity of the Blackbird is constant, so the force $F$ on the propeller is balanced by a force $- F$ on the wheels. For the system of the propellers and air, we have

$$
P _ { \mathrm { cm } } = F \left( v - v _ { w } \right) .
$$

By energy conservation, the internal energy of the propellers and air must change at the rate

$$
P _ { \text {prop } } = F \left( v _ { w } - v \right) .
$$

Since we have assumed no extraneous energy losses, the internal energy of the air doesn't increase at all, so this is just the change in the internal energy of the propeller. By similar reasoning, the internal energy of the wheels and ground must change at the rate

$$
P _ { \text {wheel } } = F v
$$

and again, since there are no extraneous energy losses, this is the rate of change of the internal energy of the wheels.

Now we determine the sign of $F$. If the Blackbird moves downwind faster than the wind, $v > v _ { w }$, then $P _ { \text {wheel } }$ and $P _ { \text {prop } }$ have opposite signs, with $\left| P _ { \text {wheel } } \right| > \left| P _ { \text {prop } } \right|$. Thus, the force $F$ should be positive, in the direction of the wind, so that $P _ { \text {wheel } }$ is positive and $P _ { \text {prop } }$ is negative. That is, power is transferred from the wheels to the propeller. In general, power should always be produced by the force with the larger relative velocity.

In the steady state the total internal energy of the Blackbird is constant, so

$$
\left| P _ { \text {prop } } \right| = ( 1 - \alpha ) P _ { \text {wheel } } \Rightarrow v = v _ { w } / \alpha .
$$

With sufficiently low energy loss, any speed is possible.
The argument here is somewhat counterintuitive. A tempting (but incorrect) counterargument is that, since the internal energy of the Blackbird ultimately comes from a decrease in the centerof-mass energy of the air, which is slowed down by the propeller, the internal energy must always be supplied by the propeller. One way to see this argument doesn't work is to note that in the reference frame where the air is still and the ground is moving, the same argument would suggest that internal energy must always be supplied by the wheels. The point is that changes of centerof-mass energy are completely different in different reference frames, as mentioned above. They cannot be used to determine the direction of flow of internal energy, which does not depend on the reference frame. In all frames, the force of the wind slows the rotation of the propeller, and hence power must be transferred from the wheels to the propeller.

We now consider the upwind case. We'll keep all the sign conventions the same, except we'll take $v$ be the leftward speed of the Blackbird. Then

$$
P _ { \text {prop } } = F \left( v + v _ { w } \right) , \quad P _ { \text {wheel } } = - F v .
$$

Since $\left| P _ { \text {prop } } \right| > \left| P _ { \text {wheel } } \right|$, power is transferred from the propeller to the wheels, and we again have $F > 0$, i.e. in both cases the force on the propeller is in the direction of the wind, as expected. The energy balance equation is

$$
\left| P _ { \text {wheel } } \right| = ( 1 - \alpha ) P _ { \text {prop } } \quad \Rightarrow \quad v = v _ { w } \left( \frac { 1 } { \alpha } - 1 \right) .
$$

Again, with sufficiently low energy loss, any speed is possible.
