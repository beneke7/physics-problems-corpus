---
id: solution-ocr-bpho-r2-2013-s-q5
source: bpho-r2
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/bpho-r2/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [bpho-r2-2013-q5]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Q5
(a)
(b) Let the equatorial diameter be denoted by $a$ and the polar diameter be denoted by $b$. The cross-section is an ellipse with semi-major axis $a$ and semi-minor axis $b$. The equation of the ellipse is $\left( \frac { x } { a } \right) ^ { 2 } + \left( \frac { y } { b } \right) ^ { 2 } = 1$, which can be expressed as $x ^ { 2 } = a ^ { 2 } \left( 1 - \left( \frac { y } { b } \right) ^ { 2 } \right)$. The three-dimensional oblate spheroid is formed by rotating the ellipse around the semi-minor axis, giving a volume of:

$$
\begin{aligned}
V _ { o b } & = \int _ { - b } ^ { b } \pi x ^ { 2 } d y \\
& = \pi \int _ { - b } ^ { b } a ^ { 2 } \left( 1 - \left( \frac { y } { b } \right) ^ { 2 } \right) d y \\
& = \pi a ^ { 2 } \left[ y - \frac { y ^ { 3 } } { 3 b ^ { 2 } } \right] _ { - b } ^ { b } \\
& = \frac { 4 } { 3 } \pi a ^ { 2 } b
\end{aligned}
$$

When the star is at rest, it has a volume of $V _ { \text {rest } } = \frac { 4 } { 3 } \pi R ^ { 3 }$, where $R$ is the rest radius (given in the paper as 10 kilometres). We assume that the rotational motion does not affect the neutron star's mass, and since the neutron star material is incompressible the density $( \rho )$ is the same as it would be if the star were not spinning, so we can write:

$$
\begin{aligned}
M _ { \text {rest } } & = M _ { \text {spinning } } = M \\
\frac { 4 } { 3 } \pi R ^ { 3 } \rho & = \frac { 4 } { 3 } \pi a ^ { 2 } b \rho \\
R ^ { 3 } & = a ^ { 2 } b \quad \text { (eq1) }
\end{aligned}
$$

The next step is to consider that the surface of our prolate spheroid is an equipotential surface, meaning that the sum of the gravitational and rotational energies is constant at all points on the surface.

$$
\begin{aligned}
& \text { @ the equator: } U _ { e } = - \frac { G M } { a } - \frac { \omega ^ { 2 } a ^ { 2 } } { 2 } \\
& \qquad \text { @ the poles: } U _ { p } = - \frac { G M } { b }
\end{aligned}
$$

Equating the two, we obtain:

$$
- \frac { G M } { a } - \frac { \omega ^ { 2 } a ^ { 2 } } { 2 } = - \frac { G M } { b }
$$


This can be rearranged to give $\frac { a } { b }$ as follows:

$$
\begin{aligned}
G M \left( \frac { 1 } { b } - \frac { 1 } { a } \right) & = \frac { \omega ^ { 2 } a ^ { 2 } } { 2 } \\
1 - \frac { b } { a } & = \frac { \omega ^ { 2 } a ^ { 2 } b } { 2 G M } \\
\frac { a } { b } & = \left( 1 - \frac { \omega ^ { 2 } R ^ { 3 } } { 2 G M } \right) ^ { - 1 }
\end{aligned}
$$

...where in the last line we have used (eq1) to substitute $R ^ { 3 }$ for ( $a ^ { 2 } b$ ).
Plugging in the values from the question paper, we get

$$
\begin{gathered}
\frac { a } { b } = \left( 1 - \frac { \left( 10 ^ { 4 } \mathrm {~m} \right) ^ { 3 } \times \left( 100 \pi \mathrm {~s} ^ { - 1 } \right) ^ { 2 } } { 2 \times \left( 6.67 \times 10 ^ { - 11 } \mathrm {~m} ^ { 3 } \mathrm {~kg} ^ { - 1 } \mathrm {~s} ^ { - 2 } \right) \times \left( 6 \times 10 ^ { 30 } \mathrm {~kg} \right) } \right) ^ { - 1 } \\
\frac { a } { b } \cong 1.00025
\end{gathered}
$$

N.B. A quick check on the reasonableness of this result can be performed by substituting into the equation for $a / b$ the values of $M , \omega$, and $R$ for the Earth. The result is

$$
\left( \frac { a } { b } \right) _ { \text {Earth } } = 1.00178
$$

...which is reasonable since we know that the Earth is a very slightly oblate spheroid.

## Alternative (not very good) method:

This method gets a very-nearly-correct answer, but involves a mathematically-unjustifiable step in the calculation, so it is presented here for novelty value/warning purposes only:

The net acceleration on a particle at the equator of a spherical body of radius $R$ and mass $M$, rotating with an angular velocity of $\omega$, is given by

$$
g _ { e } = \frac { G M } { R ^ { 2 } } - R \omega ^ { 2 }
$$

At the poles, the rotational velocity is zero, so the net acceleration there is

$$
g _ { p } = \frac { G M } { R ^ { 2 } }
$$


The ratio of the accelerations is

$$
\frac { g _ { e } } { g _ { p } } = 1 - \frac { R ^ { 3 } \omega ^ { 2 } } { G M }
$$

If the body is made of an incompressible material, this inequality of $g _ { e }$ and $g _ { p }$ causes a slight deformation of the body; it will bulge at the equator. A rough estimate of the size of the bulge can be made by the extremely "hand-waving" method of redefining $g _ { e }$ and $g _ { p }$ so that

$$
\begin{aligned}
& g _ { e } = \frac { G M } { R _ { e } ^ { 2 } } \\
& g _ { p } = \frac { G M } { R _ { p } ^ { 2 } } \\
& \frac { g _ { e } } { g _ { p } } = \frac { R _ { p } ^ { 2 } } { R _ { e } ^ { 2 } }
\end{aligned}
$$

$\ldots$ where $R _ { e }$ and $R _ { p }$ are the equatorial and polar radii, and then "equating"

$$
\begin{aligned}
\frac { R _ { p } ^ { 2 } } { R _ { e } ^ { 2 } } & \cong 1 - \frac { R ^ { 3 } \omega ^ { 2 } } { G M } \\
\frac { R _ { e } } { R _ { p } } & \cong \left( 1 - \frac { R ^ { 3 } \omega ^ { 2 } } { G M } \right) ^ { - \frac { 1 } { 2 } }
\end{aligned}
$$

Plugging in the numbers gives

$$
\frac { R _ { e } } { R _ { p } } \cong 1.000123
$$

Close, but not good enough! The method is wrong and so the answer is wrong!
