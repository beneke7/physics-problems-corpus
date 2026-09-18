---
id: solution-ocr-usapho-2017-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2017-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

A ship can be thought of as a symmetric arrangement of soft iron. In the presence of an external magnetic field, the soft iron will become magnetized, creating a second, weaker magnetic field. We want to examine the effect of the ship's field on the ship's compass, which will be located in the middle of the ship.

Let the strength of the Earth's magnetic field near the ship be $B _ { e }$, and the orientation of the field be horizontal, pointing directly toward true north.

The Earth's magnetic field $B _ { e }$ will magnetize the ship, which will then create a second magnetic field $B _ { s }$ in the vicinity of the ship's compass given by

$$
\overrightarrow { \mathbf { B } } _ { s } = B _ { e } \left( - K _ { b } \cos \theta \hat { \mathbf { b } } + K _ { s } \sin \theta \hat { \mathbf { s } } \right)
$$

where $K _ { b }$ and $K _ { s }$ are positive constants, $\theta$ is the angle between the heading of the ship and magnetic north, measured clockwise, $\hat { \mathbf { b } }$ and $\hat { \mathbf { s } }$ are unit vectors pointing in the forward direction of the ship (bow) and directly right of the forward direction (starboard), respectively.

Because of the ship's magnetic field, the ship's compass will no longer necessarily point North.

a. Derive an expression for the deviation of the compass, $\delta \theta$, from north as a function of $K _ { b }$, $K _ { s }$, and $\theta$.

## Solution

We add the fields to get the local field. The northward component is

$$
B _ { \text {north } } = B _ { e } - B _ { e } K _ { b } \cos \theta \cos \theta - B _ { e } K _ { s } \sin \theta \sin \theta
$$

while the eastward component is

$$
B _ { \text {east } } = - B _ { e } K _ { b } \sin \theta \cos \theta + B _ { e } K _ { s } \cos \theta \sin \theta
$$

The deviation is given by

$$
\tan \delta \theta = \left( K _ { s } - K _ { b } \right) \frac { \sin \theta \cos \theta } { 1 - K _ { b } \cos ^ { 2 } \theta - K _ { s } \sin ^ { 2 } \theta } .
$$

This form is particularly nice, because as we'll see below, $K _ { b }$ and $K _ { s }$ are small enough to ignore in the denominator.

b. Assuming that $K _ { b }$ and $K _ { s }$ are both much smaller than one, at what heading(s) $\theta$ will the deviation $\delta \theta$ be largest?

## Solution

By inspection, $\theta = 45 ^ { \circ }$ will yield the largest deviation. It's also acceptable to list 45°, 135°, $225 ^ { \circ }$, and $315 ^ { \circ }$.


A pair of iron balls placed in the same horizontal plane as the compass but a distance $d$ away can be used to help correct for the error caused by the induced magnetism of the ship.

![](../../../figures/solution-ocr/aae42c295ff80738b75c3d90.jpg)
A binnacle, protecting the ship's compass in the center, with two soft iron spheres to help correct for errors in the compass heading. The use of the spheres was suggested by Lord Kelvin.

Just like the ship, the iron balls will become magnetic because of the Earth's field $B _ { e }$. As spheres, the balls will individually act like dipoles. A dipole can be thought of as the field produced by two magnetic monopoles of strength $\pm m$ at two different points.

The magnetic field of a single pole is

$$
\overrightarrow { \mathbf { B } } = \pm m \frac { \hat { \mathbf { r } } } { r ^ { 2 } }
$$

where the positive sign is for a north pole and the negative for a south pole. The dipole magnetic field is the sum of the two fields: a north pole at $y = + a / 2$ and a south pole at $y = - a / 2$, where the $y$ axis is horizontal and pointing north. $a$ is a small distance much smaller than the radius of the iron balls; in general $a = K _ { i } B _ { e }$ where $K _ { i }$ is a constant that depends on the size of the iron sphere.
![](../../../figures/solution-ocr/fa75918a8e833731e2e17a0a.jpg)

c. Derive an expression for the magnetic field $\overrightarrow { \mathbf { B } } _ { i }$ from the iron a distance $d \gg a$ from the center of the ball. Note that there will be a component directed radially away from the ball and a Copyright ©2017 American Association of Physics Teachers

component directed tangent to a circle of radius $d$ around the ball, so using polar coordinates is recommended.

## Solution

This problem is not nearly as difficult as it looks.
![](../../../figures/solution-ocr/1697ff022621fe3ae59d3888.jpg)
Consider the colored triangle above. The black side has length $a$. The angle between the green and black sides is $\phi$, so the length of the red side is $a \sin \phi$ and the length of the green side is $a \cos \phi$.

The magnetic field strength from one magnetic pole a distance $d$ away is given by

$$
B = \pm m \frac { 1 } { d ^ { 2 } }
$$

The sum of the two fields has two components. The angular component is a measure of the "opening" of the triangle formed by the two vectors, and since the two vectors basically have the same length, we can use similar triangles to conclude

$$
\frac { a \sin \phi } { d } \approx \frac { B _ { \phi } } { B } \Rightarrow B _ { \phi } = m \frac { a } { d ^ { 3 } } \sin \phi = B _ { e } \frac { m K _ { i } } { d ^ { 3 } } \sin \phi .
$$

As expected, this component vanishes for $\phi = 0$.
The radial component is given by the difference in the lengths of the two field vectors, or

$$
B _ { r } = m \left( \frac { 1 } { d ^ { 2 } } - \frac { 1 } { ( d + x ) ^ { 2 } } \right) = \frac { m } { d ^ { 2 } } \left( 1 - \frac { 1 } { ( 1 + x / d ) ^ { 2 } } \right) \approx \frac { m } { d ^ { 2 } } \frac { 2 x } { d }
$$

where $x = a \cos \phi$ is the length of the green side, so

$$
B _ { r } = 2 B _ { e } \frac { m K _ { i } } { d ^ { 3 } } \cos \phi .
$$

That wasn't so bad, was it?

d. If placed directly to the right and left of the ship compass, the iron balls can be located at a distance $d$ to cancel out the error in the magnetic heading for any angle(s) where $\delta \theta$ is largest. Assuming that this is done, find the resulting expression for the combined deviation $\delta \theta$ due to the ship and the balls for the magnetic heading for all angles $\theta$.


## Solution

Note that the two iron balls create a magnetic field near the compass that behaves like that of the ship as a whole. There is a component directed toward the bow given by

$$
B _ { b } = - 2 B _ { \theta } \propto \sin \phi \propto \cos \theta
$$

and a component directed toward the starboard given by

$$
B _ { s } = 2 B _ { r } \propto \cos \phi \propto \sin \theta
$$

where the factors of 2 are because there are two balls. Note that $\theta$ is the ship heading while $\phi$ is the angle between North and the location of the compass relative to one of the balls. Thus, if the field is corrected for the maximum angles it will necessarily cancel out the induced ship field for all of the angles, so that

$$
\delta \theta = 0
$$

for all $\theta$. Effectively, this means placing the balls to make $K _ { b } = K _ { s }$.
