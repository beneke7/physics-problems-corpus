---
id: solution-ocr-kevin-zhou-e3sol-p022
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e3-p022]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 22. A toroidal solenoid is created by wrapping $N$ turns of wire around a torus with a rectangular cross section. The height of the torus is $h$, and the inner and outer radii are $a$ and $b$.
    (a) In the ideal case, the magnetic field vanishes everywhere outside the toroid, and is purely tangential inside the toroid. Find the magnetic field inside the toroid.
    (b) There is another small contribution to the magnetic field due to the winding effect mentioned above. Roughly what does the resulting extra magnetic field look like? If you didn't want this additional field, how would you design the solenoid to get rid of it?

Solution. (a) Applying Ampere's law on a circular loop gives $B ( r ) ( 2 \pi r ) = \mu _ { 0 } N I$, so

$$
B ( r ) = \frac { \mu _ { 0 } N I } { 2 \pi r } .
$$


(b) Note that the twisting of the wire adds an effective small current in the tangential direction. This looks like a current loop, so, e.g. it produces a magnetic field pointing vertically through the toroid's hole. We can remove it by using a bunch of current loops instead of a single winding wire, or by using counterwinding: after winding the wire around the toroid once clockwise, wind it around again counterclockwise.
[3] Problem 23 (Purcell 6.63). A number of simple facts about the fields of solenoids can be found by using superposition. The idea is that two solenoids of the same diameter, and length $L$, if joined end to end, make a solenoid of length $2 L$. Two semi-infinite solenoids butted together make an infinite solenoid, and so on.
![](../../../figures/solution-ocr/1e7a31f9a6ed1507731281be.jpg)
Prove the following facts.
    (a) In the finite-length solenoid shown at left above, the magnetic field on the axis at the point $P _ { 2 }$ at one end is approximately half the field at the point $P _ { 1 }$ in the center. (Is it slightly more than half, or slightly less than half?)
    (b) In the semi-infinite solenoid shown at right above, the field line FGH, which passes through the very end of the winding, is a straight line from G out to infinity.
    (c) The flux through the end face of the semi-infinite solenoid is half the flux through the coil at a large distance back in the interior.
    (d) Any field line that is a distance $r _ { 0 }$ from the axis far back in the interior of the coil exits from the end of the coil at a radius $r _ { 1 } = \sqrt { 2 } r _ { 0 }$, assuming $\sqrt { 2 } r _ { 0 }$ is less than the solenoid radius.

Solution. (a) Let $\mathbf { B } _ { 1 }$ and $\mathbf { B } _ { 2 }$ be the fields at these points, respectively. Note that $\mathbf { B } _ { 1 }$ is close to the ideal value $\mu _ { 0 } n I$, but smaller because the solenoid is not infinite. Now glue two of these solenoids together end-to-end, and consider the field at the center of this new, bigger solenoid.


By superposition, it is $2 \mathbf { B } _ { 2 }$, but also, it is close to $\mu _ { 0 } n I$, and it is slightly closer to $\mu _ { 0 } n I$ than $\mathbf { B } _ { 1 }$ is, since the combined solenoid is longer. Therefore, $\mathbf { B } _ { 2 }$ is slightly more than half of $\mathbf { B } _ { 1 }$.
(b) Let $G ^ { \prime }$ be the reflection of $G$ in the axis. Say the field line $G H$ comes out at an angle $\theta$. Then, at $G ^ { \prime }$, it also comes out with an angle $\theta$. Now, making a copy and rotating 180° and flipping the current direction, the field at $G$ becomes one pointing at $\theta$ above the horizontal (coming from $G$ at the original), and one at angle $\pi - \theta$ to the horizontal (coming from $G ^ { \prime }$ in the copy). Therefore, the field there would be non-zero right outside the solenoid, unless $\theta = 0$, in which case the fields cancel.
(c) Do the same procedure as in (a), and the flux at the glue points gets doubled to what it was originally. However, now we have an infinite solenoid, so double the flux through the end is equal to the flux in the middle.
(d) Note that (c) holds even if we take a constant disk of radius $a$ as our surface to take the flux over. Note that the flux through the disk at the edge with radius $r$ is the same as at the middle with radius $r _ { 0 }$ (same field lines). However, if we draw a disk of radius $r$ at the middle, it will have twice the flux as it did at the top, or twice the flux as with $r _ { 0 }$. However, here in the middle, the magnetic field is essentially constant, so the areas must be twice each other, so $\pi r ^ { 2 } = 2 \pi r _ { 0 } ^ { 2 }$, or $r = \sqrt { 2 } r _ { 0 }$.

[3] Problem 24 (MPPP 160). Two infinite parallel wires, a distance $d$ apart, carry electric currents along the $z$-axis with equal magnitudes but opposite directions. We can find the shape of the magnetic field lines with a neat trick, which only works for "two-dimensional" setups like this one, where the fields lie in the $x y$ plane and don't depend on $z$.

(a) Argue that if we rotated B by 90° in the $x y$ plane at each point, it would produce a valid electrostatic field $\mathbf { E }$. (Hint: consider rotating the $\mathbf { B }$ field of each wire individually.)
(b) Argue that the field lines of B are the same as the equipotentials of this artificial E, and use this to find the field lines.

This trick is also useful for fluids in two dimensions, where it swaps vortices with sources and sinks.
Solution. (a) First, we can get the intuition using a single wire. In this case,

$$
\mathbf { B } = \frac { \mu _ { 0 } I } { 2 \pi r } \hat { \boldsymbol { \theta } }
$$

in cylindrical coordinates. Upon a $90 ^ { \circ }$ rotation, $\hat { \boldsymbol { \theta } }$ turns into $\hat { \mathbf { r } }$, giving

$$
\mathbf { E } = \frac { \mu _ { 0 } I } { 2 \pi r } \hat { \mathbf { r } }
$$

which is a valid electrostatic field, as it's simply the electric field of an charged wire. So by superposition, rotating the B field of the two wires would also give a valid electrostatic field. (Of course, this isn't really physically meaningful, since electric and magnetic fields don't even have the same units. It's just a mathematical trick.)

We can also prove the correspondence more generally. The key criterion for a valid magnetostatic field is $\nabla \cdot \mathbf { B } = 0$, which for such two-dimensional setups is $\partial _ { x } B _ { x } + \partial _ { y } B _ { y } = 0$. Now, when we rotate by 90°, we define an electric field by $E _ { x } = B _ { y }$ and $E _ { y } = - B _ { x }$, which implies $\partial _ { x } E _ { y } - \partial _ { y } E _ { x } = 0$. But in such a two-dimensional setup, this is equivalent to $\nabla \times \mathbf { E } = 0$, which is the condition to have a valid electrostatic field.


(b) The field lines of B are always parallel to B. Now, this artificial E is always perpendicular to B, and equipotentials are always perpendicular to $\mathbf { E }$, so the equipotentials follow the magnetic field lines.
On the other hand, we know precisely what the potential is in this problem. By integrating the $1 / r$ field, the potential is proportional to $\log r$, so
$$
V ( r ) \propto \log \left( r _ { + } \right) - \log \left( r _ { - } \right) = \log \left( r _ { + } / r _ { - } \right)
$$
where $r _ { + }$and $r _ { - }$are the distances to the two wires. So the equipotentials have constant $r _ { + } / r _ { - }$. We've already found, when investigating the method of images for spheres in E2, that this implies the equipotentials are circles, specifically circles of Apollonius. So the magnetic field lines are circles!
[2] Problem 25 (IPhO 1996). Two straight, long conductors $C _ { + }$and $C _ { - }$, insulated from each other, carry current $I$ in the positive and the negative $\hat { \mathbf { z } }$ direction respectively. The cross sections of the conductors are circles of diameter $D$ in the $x y$ plane, with a distance $D / 2$ between the centers.
![](../../../figures/solution-ocr/9754a7e5010ad9ca7c6efb8b.jpg)
The current in each conductor is uniformly distributed. Find the magnetic field in the space between the conductors.
Solution. The answer is a uniform field $B _ { y } = 6 \mu _ { 0 } I / ( ( 2 \pi + 3 \sqrt { 3 } ) D )$. See the official solutions of IPhO 1996, problem 1(e).
[3] Problem 26 (MPPP 157). A regular tetrahedron is made of a wire with constant resistance per unit length. A long, straight wire sends current $I$ into one vertex, and another long, straight wire removes it from another vertex, as shown.
![](../../../figures/solution-ocr/1ba14b72ddbba684e0bb13d2.jpg)
Find the magnetic field at the center of the tetrahedron.
Solution. The long straight wires contribute nothing. By symmetry $C$ and $D$ are at the same potential, so $I _ { D C } = 0$. Then the current from $A$ to $B$ just splits up into three branches, which have resistances $R _ { A C B } = R _ { A D B } = 2 R _ { A B }$. Therefore, the currents are
$$
I _ { A B } = \frac { 1 } { 2 } I , \quad I _ { A C } = I _ { A D } = I _ { C B } = I _ { D B } = \frac { 1 } { 4 } I .
$$

The field at $O$ due to the current along $A D$ is directed along the vector $\overrightarrow { C B }$. Similarly, the magnetic field due to the current along $A C$ is directed along $\overrightarrow { B D }$, and so on. By repeating this reasoning for all five contributions, we find that the magnetic field at $O$ is proportional to

$$
2 \overrightarrow { D C } + \overrightarrow { B D } + \overrightarrow { C B } + \overrightarrow { A D } + \overrightarrow { C A } = 2 \overrightarrow { D C } + \overrightarrow { C D } + \overrightarrow { C D } = 0
$$

so there is no field at $O$.
[5] Problem 27. APhO 2013, problem 1. A neat question on a cylindrical RC circuit that uses many of the techniques we've covered so far.
