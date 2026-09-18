---
id: solution-ocr-eupho-2017-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2017_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2017-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 3 Superconducting mesh

The most important physics to consider is that the magnetic flux through the superconducting mesh is effectively locally locked in place. Consider this effect before anything else. Once the mesh is cooled to the superconducting state the magnetic field as a function of position on the mesh cannot be varied, regardless of the change in location of the dipole. Since the magnetic field is effectively specified along this superconducting plane, the problem reduces to a boundary value problem that is traditionally solved by the method of images.

First, consider what happens if the physical dipole is moved far away from the mesh. An image dipole must be located that fixes the magnetic field to be unchanged. This can be done with an image dipole that is located a distance $a$ behind the mesh, and it must have the same orientation $m$. Now bring back the original dipole, placing it a distance $b$. It is necessary to cancel out the field from this original, but now displaced, dipole with an opposite dipole $- m$ placed behind the mesh at a distance $b$.

Double check your work. If the original dipole is placed at the original location $a$, then there is no need for image charges, and they should cancel out. Indeed, the two image dipoles will, as they have opposite orientations.

The force between the dipole and the image charges must be determined. Though it might be possible to write down these answers quickly, the derivation is shown below.

Consider first that a magnetic dipole moment $m$ can be thought of as a pair of magnetic monopoles of strength $q _ { m }$ and - $q _ { m }$ separated by a distance $d$ such that $m = q _ { m } d$. Determine the magnetic field strength a distance $x \gg d$ away from the dipole:

$$
B = \frac { \mu _ { 0 } } { 4 \pi } \frac { q _ { m } } { x ^ { 2 } } + \frac { \mu _ { 0 } } { 4 \pi } \frac { - q _ { m } } { ( x + d ) ^ { 2 } } .
$$

It should be clear that $q _ { m }$ is at the origin and $- q _ { m }$ is a distance $d$ farther away from the reference point $x$ where the field $B$ is being determined. This expression is exact.

The second term can be subjected to a binomial expansion and then

$$
B \approx \frac { \mu _ { 0 } } { 4 \pi } \frac { q _ { m } } { x ^ { 2 } } - \frac { \mu _ { 0 } } { 4 \pi } \frac { q _ { m } } { x ^ { 2 } } \left( 1 - 2 \frac { d } { x } \right) = \frac { \mu _ { 0 } } { 2 \pi } \frac { q _ { m } d } { x ^ { 3 } } = \frac { \mu _ { 0 } } { 2 \pi } \frac { m } { x ^ { 3 } }
$$

Now consider the magnetic force on a dipole at the location $x$ in a non-uniform field $B$, which is given by

$$
F = - q _ { m } B ( x ) + q _ { m } B ( x + d )
$$

which can be approximated by a Taylor expansion of $B$,

$$
\begin{aligned}
F & \approx - q _ { m } B ( x ) + q _ { m } \left( B ( x ) + \left. d \frac { d B } { d x } \right| _ { x } \right) \\
& = q _ { m } d \left( - \frac { 3 \mu _ { 0 } } { 2 \pi } \frac { m } { x ^ { 4 } } \right) = - \frac { 3 \mu _ { 0 } } { 2 \pi } \frac { m ^ { 2 } } { x ^ { 4 } }
\end{aligned}
$$

The negative sign means that two parallel identical dipoles separated by a distance $x$ will attract.

Returning to the problem, the physical dipole at $b$ will be attracted to the image dipole at location $- a$ and repelled from the image dipole at $- b$, so

$$
F = - \frac { 3 \mu _ { 0 } } { 2 \pi } \frac { m ^ { 2 } } { ( b + a ) ^ { 4 } } + \frac { 3 \mu _ { 0 } } { 2 \pi } \frac { m ^ { 2 } } { ( b + b ) ^ { 4 } } = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi } \left( \frac { 1 } { 16 b ^ { 4 } } - \frac { 1 } { ( a + b ) ^ { 4 } } \right) ,
$$

where a negative sign means that the physical dipole feels attraction toward the mesh.


It is entertaining to consider what happens if $b$ is almost the same as $a$, say $b = a + \delta$. In this case,

$$
F = \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi } \left( \frac { 1 } { 16 ( a + \delta ) ^ { 4 } } - \frac { 1 } { ( 2 a + \delta ) ^ { 4 } } \right) ,
$$

or

$$
F \approx \frac { 3 \mu _ { 0 } m ^ { 2 } } { 2 \pi } \frac { 1 } { 16 a ^ { 4 } } \left( \left( 1 - 4 \frac { \delta } { a } \right) - \left( 1 - 4 \frac { \delta / 2 } { a } \right) \right) ,
$$

which simplifies further into

$$
F \approx - \frac { 3 \mu _ { 0 } m ^ { 2 } } { 16 \pi a ^ { 5 } } \delta
$$

Now to interpret. A negative force here is a force of attraction toward the mesh. A positive $\delta$ is moving the physics dipole away from the mesh. As such, the force is a linear restoring force, and slight disturbances to the physical dipole will result in simple harmonic oscillations about the original position.
