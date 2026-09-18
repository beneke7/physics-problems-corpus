---
id: solution-ocr-kevin-zhou-e4sol-ex005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e4-ex005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 5

If a magnet is held over a table, it can pick up a paper clip. If the paper clip is removed, it can pick up another paper clip just as well, and this process can seemingly continue forever without any effect on the magnet. Since the magnet does work on each paper clip, doesn't this mean a permanent magnet is an infinite energy source?

## Solution

This is the kind of question that makes magnets feel so mysterious. They're basically the only everyday example of a long range force besides gravity (in fact, Kepler once thought the Sun acted on the planets like a giant magnet), and as such they've inspired countless attempts at perpetual motion machines. For centuries, many people have spent years of their lives trying to get elaborations of this example to work.

To see why this doesn't work for a bar magnet, just replace the word "magnet" with "charge". It's true that a positive charge can attract a negative charge to it. And if the negative charge is then removed, the positive charge can then attract another negative charge to it. But conservation of energy isn't violated, because the force from the positive charge is conservative: the work it does on the negative charge to draw it close is precisely the opposite of the work an external agent needs to do to pull it away. The force of a magnet on a paper clip is also conservative.


It's also interesting to consider a slightly different case. Unlike a bar magnet, an electromagnet (i.e. a magnet created by moving current in a loop) can be turned on and off with the flick of a switch. Therefore, we might suspect that the following is a perpetual motion machine:

1. Turn on the electromagnet, which costs energy $E _ { 0 }$.
2. Use it to lift a paper clip, increasing its potential energy by $m g h$.
3. Turn off the electromagnet, which costs energy $E _ { 0 }$, while holding the paper clip.
4. Move the paper clip away; we've managed to raise it higher for free.

To see the problem, note that the attractive force between the magnet and paper clip arises because the magnet induces a magnetic dipole moment in the paper clip, leading to a $( \mathbf { m } \cdot \nabla ) \mathbf { B }$ force. As the paper clip moves toward the magnet, its own dipole moment causes a changing magnetic flux through the electromagnet, and thus an emf against the current. Therefore, it costs extra energy to keep the current in the electromagnet steady. Since the $q \mathbf { v } \times \mathbf { B }$ Lorentz force doesn't do work, that energy must be precisely $m g h$, so nothing comes for free.

## Remark

A compass needle is essentially a small magnetic dipole, whose dipole moment points towards the end painted red. We can also approximate the Earth's magnetic field as a dipole field.
![](../../../figures/solution-ocr/cf99c6c01984b8acf045cb7c.jpg)
Since the tangential component of this dipole field points north, the red end of the compass points towards the geographic north pole, which is the Earth's magnetic south pole.

By the way, a cheap compass calibrated to work in America or Europe won't work well in Australia. The reason is that the Earth's magnetic field also has a radial component, which acts to tip the compass needle up or down. The needle needs to be appropriately weighted to stay horizontal, so that it can freely rotate, but the side that needs to be weighted differs between the hemispheres.

[3] Problem 15 (Griffiths 6.23). A familiar toy consists of donut-shaped permanent magnets which slide frictionlessly on a vertical rod.

![](../../../figures/solution-ocr/15c9043cafafb08f3a484610.jpg)
(a)

![](../../../figures/solution-ocr/3574d9609189c734b8e70d79.jpg)
(b)

Treat the magnets as dipoles with mass $m _ { d }$ and dipole moment m, with directions as shown above.

(a) If you put two back-to-back magnets on the rod, the upper one will "float". At what height $z$ does it float?
(b) If you now add a third magnet parallel to the bottom one as shown, find the ratio $x / y$ of the two heights, using only a scientific calculator. (Answer: 0.85.)

Solution. (a) We know that the field from a magnetic dipole is

$$
\mathbf { B } = \frac { \mu _ { 0 } m } { 4 \pi r ^ { 3 } } ( 2 \cos \theta \hat { \mathbf { r } } + \sin \theta \hat { \boldsymbol { \theta } } ) .
$$

Along the $z$-axis, this reduces to

$$
B _ { z } = \frac { \mu _ { 0 } m } { 2 \pi z ^ { 3 } } .
$$

The force on the upper magnet must balance gravity, so

$$
- \frac { \mu _ { 0 } m ^ { 2 } } { 2 \pi } \frac { d } { d z } \left( \frac { 1 } { z ^ { 3 } } \right) - m _ { d } g = 0
$$

which yields

$$
z = \left( \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi m _ { d } g } \right) ^ { 1 / 4 }
$$

(b) The net force on the middle magnet comes from the field from the top and bottom magnets, along with gravity,
$$
\frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi } \left( \frac { 1 } { x ^ { 4 } } - \frac { 1 } { y ^ { 4 } } \right) = m _ { d } g .
$$
Similarly, the top magnet, experiences forces from the bottom and middle magnets,
$$
\frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi } \left( \frac { 1 } { y ^ { 4 } } - \frac { 1 } { ( y + x ) ^ { 4 } } \right) = m _ { d } g .
$$
Putting these two equations together yields
$$
\frac { 1 } { x ^ { 4 } } - \frac { 1 } { y ^ { 4 } } = \frac { 1 } { y ^ { 4 } } - \frac { 1 } { ( y + x ) ^ { 4 } } .
$$
Defining $\alpha = x / y$, we then need to solve
$$
\alpha = \left( \frac { ( 1 + \alpha ) ^ { 4 } } { 2 ( 1 + \alpha ) ^ { 4 } - 1 } \right) ^ { 1 / 4 } .
$$

We solve this using iteration, as introduced in P1. That is, we guess a reasonable value like $\alpha = 0.5$, then repeatedly plug in
$$
\left( \frac { ( 1 + \mathrm { Ans } ) ^ { 4 } } { 2 ( 1 + \mathrm { Ans } ) ^ { 4 } - 1 } \right) ^ { 1 / 4 }
$$
which yields $x / y = 0.85$.
[3] Problem 16 (PPP 89). Two identical small bar magnets are placed on opposite ends of a rod of length $L$ as shown.
![](../../../figures/solution-ocr/72977b1085eb6e9e1b7e02a4.jpg)
    (a) Show that the torques the magnets exert on each other are not equal and opposite.
    (b) Suppose the rod is pivoted at its center, and the magnets are attached to the rod so that they can spin about their centers. If the magnets are released, the result of part (a) implies that they will begin spinning. Explain how this can be consistent with energy and angular momentum conservation, treating the latter quantitatively.

Solution. (a) Referring to the dipole fields computed in E1, the field at $D$ due to $C$ is twice that at $C$ due to $D$, so they can't possibly cancel. Worse, the directions of the torques are the same (both out of the page).


(b) Energy is conserved because there is an energy density $B ^ { 2 } / 2 \mu _ { 0 }$ stored in the magnetic field of the two magnets. As the rotational kinetic energy of the system increases, the energy stored in the field decreases to compensate.
Angular momentum conservation holds for a different reason. While electromagnetic fields can store angular momentum too, they don't in this particular case. Instead, the answer is something more familiar. The magnets also exert forces on each other, so a force from the rod is necessary to keep the magnets in place. This implies the magnets exert a torque on the rod, which begins spinning in the opposite direction. Thus, angular momentum is conserved.
To show this quantitatively, set up coordinates with the origin at the center of the rod, and the $z$-axis pointing out of the page. The total torque on the two magnets is
$$
\boldsymbol { \tau } _ { 0 } = \frac { 3 \mu _ { 0 } } { 4 \pi } \frac { m ^ { 2 } } { L ^ { 3 } } \hat { \mathbf { z } }
$$
where $m$ is the magnetic moment of each magnet. This is the rate of change of their spin angular momentum. Next, we consider forces. The force on magnet $C$ due to $D$ is
$$
\mathbf { F } _ { C D } = \left( \mathbf { m } _ { C } \cdot \nabla \right) \mathbf { B } _ { D } = m \frac { \partial \mathbf { B } _ { D } } { \partial x } = m \frac { \partial } { \partial x } \left( - \left. \frac { \mu _ { 0 } m } { 4 \pi } \frac { \hat { \mathbf { y } } } { x ^ { 3 } } \right| _ { x = - L } \right) = \frac { 3 \mu _ { 0 } } { 4 \pi } \frac { m ^ { 2 } } { L ^ { 4 } } \hat { \mathbf { y } } .
$$
This produces a torque on the rod, about its pivot point, of
$$
\boldsymbol { \tau } _ { 1 } = - \frac { 1 } { 2 } \frac { 3 \mu _ { 0 } } { 4 \pi } \frac { m ^ { 2 } } { L ^ { 3 } } \hat { \mathbf { z } } .
$$

The force on magnet $D$ due to magnet $C$ is equal and opposite, and therefore provides an equal torque $\boldsymbol { \tau } _ { 2 }$ on the rod. Therefore, the total rate of change of angular momentum is $\boldsymbol { \tau } _ { 0 } + \boldsymbol { \tau } _ { 1 } + \boldsymbol { \tau } _ { 2 } = 0$.

In introductory textbooks, you might have read that angular momentum is conserved as a consequence of the strong form of Newton's third law, which is that forces are equal and opposite, and always directed along the line separating two particles. As we've just seen, this isn't actually necessary: here we have an example of a force which isn't directed along the separation, but angular momentum is still conserved. In E7 we'll see even more exotic examples, where even the weak form of Newton's third law (i.e. that forces are equal and opposite) breaks down, but momentum remains conserved anyway, as a consequence of electromagnetic fields carrying away the excess momentum. Generally speaking, the deeper you get into physics, the less important Newton's laws become, while conservation laws remain as important as ever.

## 4 Point Charges

In this section we'll give a sampling of classic problems involving just point charges in fields; these will be a bit more mathematically advanced than the others in this problem set.
[3] Problem 17. A point charge $q$ of mass $m$ is released from rest a distance $d$ from a grounded conducting plane. Find the time until the point charge hits the plane. (Hint: use Kepler's laws.)

Solution. This is an incredibly classic problem, which has been appearing in various forms on competitions for decades. By using image charges, we see that the particle always experiences a force

$$
F = \frac { k q ^ { 2 } } { 4 z ^ { 2 } }
$$

directly towards the plane, where $z$ is its separation from the plane. Let the particle impact the plane at point $O$.

This force has the form of an inverse-square law. In particular, we would get the exact same result if the force were always directed towards $O$ (rather than always directed towards the plane),

$$
\mathbf { F } = - \frac { k q ^ { 2 } } { 4 r ^ { 2 } } \hat { \mathbf { r } } .
$$

But in this case, the problem is perfectly analogous to the central force of gravity, where $O$ serves as the location of the Sun, and one of the foci of the charge's orbit. In particular, releasing the charge from near rest and waiting for it to hit the plane corresponds to performing the first half of an extremely eccentric elliptic orbit.

The trick is now to use Kepler's third law. If the charge had performed a circular orbit of radius $d$ about $O$, then

$$
\frac { k q ^ { 2 } } { 4 d ^ { 2 } } = \frac { m v ^ { 2 } } { d } = m \omega ^ { 2 } d
$$

which gives a period of

$$
T = \frac { 2 \pi } { \omega } = 4 \pi \sqrt { \frac { m d ^ { 3 } } { k q ^ { 2 } } } .
$$


We can use Kepler's third law to find the period of the eccentric elliptic orbit the charge actually follows. This orbit has semimajor axis $d / 2$, so it has period

$$
T ^ { \prime } = \frac { T } { 2 \sqrt { 2 } } .
$$

The actual path of the charge is only the first half of this orbit, so the answer is

$$
\frac { T ^ { \prime } } { 2 } = \frac { T } { 4 \sqrt { 2 } } = \frac { \pi } { \sqrt { 2 } } \sqrt { \frac { m d ^ { 3 } } { k q ^ { 2 } } } .
$$

Of course, the problem can also be solved by directly integrating the differential equation. If you do it that way, you'll get the same integral as in a similar example, given in P1.
