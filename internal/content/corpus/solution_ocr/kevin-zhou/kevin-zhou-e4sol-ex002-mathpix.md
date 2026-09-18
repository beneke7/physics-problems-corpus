---
id: solution-ocr-kevin-zhou-e4sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e4-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
A parallel plate capacitor with separation $d$ and area $A$ is attached to a battery of voltage $V$. One plate moves towards the other with uniform speed $v$. Verify that energy is conserved.

Solution
The capacitance is $C = A \epsilon _ { 0 } / d$. The power supplied by the battery is

$$
P _ { \mathrm { batt } } = I V = V \frac { d Q } { d t } = V ^ { 2 } \frac { d C } { d t } .
$$

On the other hand, the rate of change of the energy stored in the capacitor is

$$
P _ { \text {cap } } = \frac { d } { d t } \left( \frac { 1 } { 2 } C V ^ { 2 } \right) = \frac { 1 } { 2 } V ^ { 2 } \frac { d C } { d t } .
$$

At first glance, there seems to be a problem. But then we remember that there is an attractive force between the plates, so the plates do work on whatever is moving them together,

$$
P _ { \mathrm { mech } } = F v = \frac { Q E } { 2 } v = \frac { Q V } { 2 d } v = \frac { 1 } { 2 } C V ^ { 2 } \frac { v } { d } = \frac { 1 } { 2 } V ^ { 2 } \frac { d C } { d t } .
$$

where $E$ is the electric field inside the capacitor. Thus, $P _ { \text {batt } } = P _ { \text {cap } } + P _ { \text {mech } }$ as required.
Technically there's energy in the magnetic field too, but it's smaller than the electric field energy by $v ^ { 2 } / c ^ { 2 }$, and thus negligible unless you're moving the plates so fast that relativity comes into play. Most problems in this problem set ignore such relativistic effects.
[2] Problem 1 (PPP 193). Two positrons are at opposite corners of a square of side $a$. The other two corners of the square are occupied by protons. All particles have charge $q$, and the proton mass $M$ is much larger than the positron mass $m$. Find the approximate speeds of the particles much later.

Solution. The idea is that since the positrons are so light, they will be extremely far away before the protons hardly move. Let $v _ { 1 }$ be their final speed. Then, energy conservation tells us that

$$
\frac { k q ^ { 2 } } { a } \left( 4 + \frac { 2 } { \sqrt { 2 } } \right) \approx \frac { k q ^ { 2 } } { \sqrt { 2 } a } + 2 \left( \frac { 1 } { 2 } m v _ { 1 } ^ { 2 } \right) .
$$


Solving for $v _ { 1 }$ yields

$$
v _ { 1 } = \sqrt { \frac { k q ^ { 2 } } { a m } ( 4 + 1 / \sqrt { 2 } ) } .
$$

The speed of the protons can be calculated by assuming that the positrons didn't even exist, since by the time the protons move appreciably, the positrons are long gone away to a very far distance. Therefore, energy conservation again tells us that the final speed $v _ { 2 }$ of the protons obeys

$$
\frac { k q ^ { 2 } } { \sqrt { 2 } a } \approx 2 \left( \frac { 1 } { 2 } M v _ { 2 } ^ { 2 } \right) , \quad v _ { 2 } = \sqrt { \frac { k q ^ { 2 } } { \sqrt { 2 } a M } } .
$$

[3] Problem 2 (PPP 114). A small positively charged ball of mass $m$ is suspended by an insulating thread of negligible mass. Another positively charged small ball is moved very slowly from a large distance until it is in the original position of the first ball. As a result, the first ball rises by $h$.
![](../../../figures/solution-ocr/d935efb002ac13d40de99c52.jpg)
How much work has been done?
Solution. Let $r$ be the final separation of the balls, and let $L$ be the length of the string. By the inscribed angle theorem,
$$
\frac { h } { r } = \sin \theta
$$
where $\theta$ is half the angle of the string to the vertical. Now let the balls have charges $q$ and $Q$. To avoid introducing a variable for the tension, we apply force balance perpendicular to the string, so
$$
\frac { k q Q } { r ^ { 2 } } \cos \theta = m g \sin 2 \theta = 2 m g \sin \theta \cos \theta
$$
from which we conclude
$$
\frac { k q Q } { r } = 2 m g r \sin \theta = 2 m g h .
$$
Furthermore, one of the balls has been raised by a height $h$ during the process. Thus, the total work done is $3 m g h$. It's neat how all the other lengths drop out in the final answer!
[3] Problem 3 (PPP 71). Two small beads slide without friction, one on each of two long horizontal parallel fixed rods a distance $d$ apart.
![](../../../figures/solution-ocr/c4224bba9b2423855a0cb520.jpg)
The masses of the beads are $m$ and $M$ and they carry charges $q$ and $Q$. Initially, the larger mass $M$ is at rest and the other one is far away approaching it at a speed $v _ { 0 }$. For what values of $v _ { 0 }$ does the smaller bead ever get to the right of the larger bead?

Solution. When $v _ { 0 }$ is just large enough for the small bead to get to the right of the big bead, when both beads end up side-to-side, the small bead's velocity should be just a bit greater than that of the big bead for it to get past. This means the minimum possible value $v _ { m }$ of $v _ { 0 }$ should be just large enough to provide enough energy so that both beads can move together at some velocity $v$,

$$
\frac { 1 } { 2 } m v _ { m } ^ { 2 } = \frac { k q Q } { d } + \frac { 1 } { 2 } ( m + M ) v ^ { 2 } .
$$

Since the total horizontal momentum is conserved,

$$
m v _ { m } = ( m + M ) v .
$$

Thus, we have

$$
\frac { 1 } { 2 } \left( m - \frac { m ^ { 2 } } { m + M } \right) v _ { m } ^ { 2 } = \frac { k q Q } { d } , \quad v _ { m } = \sqrt { \frac { 2 k q Q } { d } \frac { m + M } { m M } } .
$$

[2] Problem 4 (PPP 192). Classically, a conductor is made of nuclei of positive charge fixed in place, and electrons that are free to move.

(a) Consider a solid conductor in a gravitational field $\mathbf { g }$. Argue that the electric field inside the conductor is not zero; find out what it is.
(b) Now suppose a positron is placed at the center of a hollow spherical conductor in a gravitational field $\mathbf { g }$. Find its initial acceleration.

Solution. (a) We usually argue that the electric field has to vanish to keep the electrons from accelerating. In this case, the electric field has to be nonzero, because otherwise the electrons will fall down. Specifically, there is a downward electric field of magnitude $m g / e$, where $e > 0$ is the magnitude of the electron charge and $m$ is the electron mass. This comes out to about $6 \times 10 ^ { - 11 } \mathrm {~V} / \mathrm { m }$, which is quite small.

You might wonder how the forces on the positive ions are balanced, since they experience both downward gravitational and electrical forces. The answer is that they're locked into a lattice, and held up by internal stresses within the lattice. These ultimately come from whatever is keeping the conductor as a whole from falling, such as a normal force from the ground.

(b) The electric field found in part (a) also exists in a cavity, as one can argue from the uniqueness theorem. So the positron has an initial downward acceleration of $2 g$. (We had to specify the positron was at the center, or else it would have an additional acceleration due to charge induction, which we could compute using image charges.)

[3] Problem 5. USAPhO 2008, problem B2. You may ignore part (c), which was removed in the final version of the exam, though you can also do it for extra practice.
[3] Problem 6. USAPhO 2019, problem B1.
[5] Problem 7. IPhO 2004, problem 1. A nice question on the dynamics of a multi-part system.

## 2 The Lorentz Force


Idea 2
Some questions below will involve special relativity. The Lorentz force law as written in idea 1 is still valid as long as F is interpreted as $d \mathbf { p } / d t$, where the relativistic momentum is

$$
\mathbf { p } = \gamma m \mathbf { v } , \quad \gamma = \frac { 1 } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } .
$$

The relativistic energy is also modified to

$$
E = \gamma m c ^ { 2 } = m c ^ { 2 } + \frac { 1 } { 2 } m v ^ { 2 } + \ldots .
$$

We will return to this subject in more detail in R2, but for now this is all you need.

Example 3: Kalda 163
A beam of electrons, of mass $m$ and charge $q$, is emitted with a speed $v$ almost parallel to a uniform magnetic field B. The initial velocities of the electrons have an angular spread of $\alpha \ll 1$, but after a distance $L$ the electrons converge again. Neglecting the interaction between the electrons, what is $L$ ?

Solution
Consider an electron initially traveling at an angle $\alpha$ to the magnetic field. This electron has a speed $v _ { \| } = v \cos \alpha \approx v$ parallel to the field, which is unchanged by the magnetic force. Instead, the magnetic force causes the perpendicular component $\mathbf { v } _ { \perp }$ to rotate about the B axis, so that the electron spirals along the field lines.

The acceleration of the electron has magnitude

$$
a _ { \perp } = \frac { F } { m } = \frac { q v _ { \perp } B } { m }
$$

and $\mathbf { v } _ { \perp }$ goes through a circle in velocity space of circumference $2 \pi v _ { \perp }$. After one such circle, the total perpendicular displacement is zero, so the beam refocuses. Thus we have

$$
L = \frac { 2 \pi v _ { \perp } } { a } v _ { \| } \approx \frac { 2 \pi m v } { q B } .
$$

Since the quantity $\alpha$ dropped out, this setup acts like a magnetic "lens".

Example 4: Griffiths 7.50
In a "betatron", electrons move in circles in a magnetic field. When the magnetic field is slowly increased, the accompanying electric field will impart tangential acceleration.


![](../../../figures/solution-ocr/814e1f6a86afa089e2c0cfc7.jpg)
Suppose the field always has the same spatial profile $B ( r , t ) = B _ { 0 } ( r ) f ( t )$. For what $B _ { 0 } ( r )$ is it possible for an electron to start at rest in zero magnetic field, and then move in a circle of constant radius as the field is increased?

## Solution

The electrons experience a tangential force

$$
\dot { p } = q E = q \frac { \dot { \Phi } _ { B } } { 2 \pi r } = \frac { q r } { 2 } \dot { B } _ { \mathrm { av } }
$$

where $B _ { \mathrm { av } }$ is the average field over the orbit. Since the particles start from rest in zero field, we can integrate this to find

$$
p = \frac { q r } { 2 } B _ { \mathrm { av } } .
$$

On the other hand, the standard result for cyclotron motion is $p = q r B$, which means we must have $B = B _ { \mathrm { av } } / 2$, i.e. the field at any radius is half the average magnetic field inside,

$$
B ( r ) = \frac { 1 } { 2 } \frac { 1 } { \pi r ^ { 2 } } \int _ { 0 } ^ { r } B \left( r ^ { \prime } \right) \left( 2 \pi r ^ { \prime } \right) d r ^ { \prime }
$$

This rearranges slightly to give

$$
r ^ { 2 } B ( r ) = \int _ { 0 } ^ { r } r ^ { \prime } B \left( r ^ { \prime } \right) d r ^ { \prime }
$$

Differentiating both sides with respect to $r$, we have

$$
2 r B ( r ) + r ^ { 2 } B ^ { \prime } ( r ) = r B ( r )
$$

which simplifies to

$$
\frac { d B } { B } = - \frac { d r } { r }
$$

which means the field profile should be $B _ { 0 } ( r ) \propto 1 / r$. (Of course, a real betatron might differ since it only needs to obey $B = B _ { \mathrm { av } } / 2$ at the radii where electrons will be orbiting.)

[3] Problem 8 (Griffiths 5.17). In the lab frame, a large parallel plate capacitor with uniform surface charge $\sigma$ on the upper plate and $- \sigma$ on the lower is moving with a constant speed $v$ as shown.

![](../../../figures/solution-ocr/cd430d14258c39ca6e0da67c.jpg)

(a) Find the magnetic field between the plates and also above and below them.
(b) Find the magnetic force per unit area on the upper plate, including its direction.
(c) Assuming $\sigma$ is fixed, what happens to the force per unit area between the plates in the limit $v \rightarrow c$ ? You don't need to know anything about relativity to do this.

Solution. (a) Let $\hat { \mathbf { x } }$ be the direction of the velocity. Let $\hat { \mathbf { y } }$ point into the page, and let $\hat { \mathbf { z } }$ point up. The magnetic field due to the top plane is $- \frac { 1 } { 2 } \mu _ { 0 } \sigma v \hat { \mathbf { y } }$ above the top plane and $\frac { 1 } { 2 } \mu _ { 0 } \sigma v \hat { \mathbf { y } }$ below the top plane. Similarly for the bottom plane, we have $\frac { 1 } { 2 } \mu _ { 0 } \sigma v \hat { \mathbf { y } }$ above and $- \frac { 1 } { 2 } \mu _ { 0 } \sigma v \hat { \mathbf { y } }$ below. Thus, the magnetic field is $\mu _ { 0 } \sigma v \hat { \mathbf { y } }$ between the plates, and zero outside.

(b) The force per unit area (i.e. pressure) is $\sigma v \hat { \mathbf { x } } \times \frac { 1 } { 2 } \mu _ { 0 } \sigma v \hat { \mathbf { y } } = \frac { 1 } { 2 } \mu _ { 0 } \sigma ^ { 2 } v ^ { 2 } \hat { \mathbf { z } }$. The factor of $1 / 2$ is there since it only feels a force due to the contribution of the other plate; this is the essentially the same 1/2 as we found for the pressure on a conductor in E1.
(c) The net attractive pressure is
$$
\frac { \sigma ^ { 2 } } { 2 \epsilon _ { 0 } } - \frac { \mu _ { 0 } \sigma ^ { 2 } v ^ { 2 } } { 2 } = \frac { \sigma ^ { 2 } } { 2 \epsilon _ { 0 } } \left( 1 - v ^ { 2 } / c ^ { 2 } \right)
$$
which goes to zero as $v \rightarrow c$.
You don't need to know relativity to get this result, but we can also derive it using relativity, as covered in R1 and R2. To do this, let the plates have area $A$ in the lab frame. In the plates' rest frame, they have area $A _ { 0 } = \gamma A$ (due to length contraction in the lab frame) and hence charge density $\sigma _ { 0 } = \sigma / \gamma$. In this frame, the total force is $F _ { 0 } \propto \sigma _ { 0 } ^ { 2 } A _ { 0 } = \sigma ^ { 2 } A / \gamma$. Finally, the Lorentz transformation of force gives $F = F _ { 0 } / \gamma = \sigma ^ { 2 } A / \gamma ^ { 2 }$ in the lab frame, so a pressure $P \propto \sigma ^ { 2 } / \gamma ^ { 2 }$, matching what we found above. (Though if we had instead fixed $\sigma _ { 0 }$, we would get $P \propto \sigma _ { 0 } ^ { 2 }$, independent of velocity.)
[3] Problem 9. NBPhO 2012, problem 7. An elegant Lorentz force problem with wires. (For a similar but more difficult setup, try IPhO 2020, problem 1B.)
[4] Problem 10 (Purcell 6.35/INPhO 2008.6). Consider the arrangement shown below.

![](../../../figures/solution-ocr/201fe637a5205619d89a10dd.jpg)
The force between capacitor plates is balanced against the force between parallel wires carrying current in the same direction. A voltage alternating sinusoidally with angular frequency $\omega$ is applied to the parallel-plate capacitor $C _ { 1 }$ and also to the capacitor $C _ { 2 }$, and the current is equal to the current through the rings. Assume that $s \ll a$ and $h \ll b$.

Suppose the weights of both sides are adjusted to balance without any applied voltage, and $C _ { 2 }$ is adjusted so that the time-averaged downward forces on both sides are equal. Show that

$$
\frac { 1 } { \sqrt { \mu _ { 0 } \epsilon _ { 0 } } } = \sqrt { 2 \pi } a \omega \sqrt { \frac { b } { h } } \frac { C _ { 2 } } { C _ { 1 } } .
$$

The left-hand side is equal to $c$, as we'll show in E7, so this setup measures the speed of light.
Solution. It can be a little tricky to read the diagram. The key point is that the triangles are conductors. They represent the fulcrum of a see-saw, but they also allow the voltage to be applied across the capacitors on the left and right. The charge buildup on the capacitors on the left causes them to attract, while the current flowing through the circular wires on the right causes them to attract as well.

Let a current $I$ flow on in the right-hand side. Since $h \ll b$, the magnetic field created by the bottom circular loop at a point on the top circular loop is approximately the same as that created by an infinite wire, $B = \mu _ { 0 } I / 2 \pi h$. Thus, the force between the wires is

$$
F = ( 2 \pi b I ) \frac { \mu _ { 0 } I } { 2 \pi h } = \frac { \mu _ { 0 } b I ^ { 2 } } { h } .
$$

This force oscillates over time. The charge on the capacitor $C _ { 2 }$ is

$$
Q _ { 2 } ( t ) = C _ { 2 } \mathcal { E } _ { 0 } \cos ( \omega t )
$$

so that

$$
\left\langle I ^ { 2 } ( t ) \right\rangle = C _ { 2 } ^ { 2 } \mathcal { E } _ { 0 } ^ { 2 } \omega ^ { 2 } \left\langle \sin ^ { 2 } ( \omega t ) \right\rangle = \frac { C _ { 2 } ^ { 2 } \mathcal { E } _ { 0 } ^ { 2 } \omega ^ { 2 } } { 2 } .
$$


Thus, the average force on the right is

$$
\langle F \rangle = \frac { \mu _ { 0 } C _ { 2 } ^ { 2 } \mathcal { E } _ { 0 } ^ { 2 } \omega ^ { 2 } b } { 2 h } .
$$

On the left-hand side, the force between the plates is, by a result in E1,

$$
F = \frac { 1 } { 2 } \epsilon _ { 0 } E ^ { 2 } \left( \pi a ^ { 2 } \right)
$$

where $E$ is the electric field inside the plates, and we have

$$
\left\langle E ^ { 2 } ( t ) \right\rangle = \frac { 1 } { s ^ { 2 } } \left\langle \mathcal { E } ^ { 2 } ( t ) \right\rangle = \frac { \mathcal { E } _ { 0 } ^ { 2 } } { 2 s ^ { 2 } } .
$$

Combining these results and eliminating $s$, since it doesn't appear in the final result,

$$
\langle F \rangle = \frac { C _ { 1 } ^ { 2 } \mathcal { E } _ { 0 } ^ { 2 } } { 4 \pi a ^ { 2 } \epsilon _ { 0 } } .
$$

Equating the averaged forces gives

$$
\frac { \mu _ { 0 } C _ { 2 } ^ { 2 } \omega ^ { 2 } b } { h } = \frac { C _ { 1 } ^ { 2 } } { 2 \pi a ^ { 2 } \epsilon _ { 0 } } ,
$$

which is equivalent to the desired result.
