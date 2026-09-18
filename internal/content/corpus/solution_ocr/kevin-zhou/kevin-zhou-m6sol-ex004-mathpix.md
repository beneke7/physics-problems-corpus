---
id: solution-ocr-kevin-zhou-m6sol-ex004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-ex004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 4: Binney 5.1
For over 150 years, most astronomers believed that Saturn's rings were rigid bodies, until Laplace showed that a solid ring would be unstable. The same instability plagues Larry Niven's Ringworld, a science fiction novel once popular among boomer nerds. Following Laplace, consider a rigid, circular ring of radius $R$ and mass $m$, centered on a planet of mass $M \gg m$. The ring rotates around the planet with the Keplerian angular velocity $\omega = \sqrt { G M / R ^ { 3 } }$. Show that this configuration is linearly unstable.


Solution
One way to understand the stability of an ordinary planetary orbit is angular momentum conservation: if you displace a planet radially inward, then it'll start moving faster tangentially, which will tend to make it go back out, even though the inward gravitational force gets stronger too. This tendency is absent for a rigid ring, because the entire ring always rotates with the same angular velocity $\omega = L / m R ^ { 2 }$.

The simplest way to see that this configuration is unstable is to calculate the gravitational potential $\phi$ due to the ring at the planet's position. If the planet starts at the center of the ring, then displacing it along the axis of the ring increases $\phi$. But since $\nabla ^ { 2 } \phi = 0$, displacing it towards the ring must decrease $\phi$, so the system is unstable. (This is just the gravitational analogue of Earnshaw's theorem from E1.)

To make this more concrete, fix the planet at the origin, and parametrize the ring by the angle $\theta$ along it. If the whole ring is shifted by a small distance $a$ in the plane of the ring, the elements of the ring are at

$$
r ^ { 2 } = ( R \cos \theta + a ) ^ { 2 } + ( R \sin \theta ) ^ { 2 } .
$$

The total gravitational potential energy is

$$
U = - G M m \int _ { 0 } ^ { 2 \pi } \frac { d \theta } { 2 \pi } \frac { 1 } { r } = - \frac { G M m } { R } \int _ { 0 } ^ { 2 \pi } \frac { d \theta } { 2 \pi } \frac { 1 } { \sqrt { 1 + ( 2 a / R ) \cos \theta + a ^ { 2 } / R ^ { 2 } } } .
$$

We have to be a bit careful here, remembering some lessons from P1. The first order term in $a$ is going to vanish, because we started at an equilibrium point, which means we need to expand everything to second order in $a$. Using the Taylor series

$$
\frac { 1 } { \sqrt { 1 + x } } = 1 - \frac { x } { 2 } + \frac { 3 x ^ { 2 } } { 8 } + \mathcal { O } \left( x ^ { 3 } \right)
$$

we conclude

$$
U \approx - \frac { G M m } { R } \int _ { 0 } ^ { 2 \pi } \frac { d \theta } { 2 \pi } \left( 1 - \frac { a } { R } \cos \theta + \frac { a ^ { 2 } } { R ^ { 2 } } \frac { 3 \cos ^ { 2 } \theta - 1 } { 2 } \right) = - \frac { G M m } { R } \left( 1 + \frac { a ^ { 2 } } { 4 R ^ { 2 } } \right) .
$$

The energy goes down upon a small displacement, so the configuration is unstable. The ring will soon crash into the planet.

## 3 Kepler's Laws

Idea 4
Kepler's laws for a general orbit are:

1. The trajectories of planets are conic sections, with a focus at the Sun. Bound orbits are ellipses, which contain circles as a special case. Unbound orbits are hyperbolas, which contain parabolas as a special case.

2. The trajectories sweep out equal areas in equal times.
3. When the orbit is bound, the period $T$ and semimajor axis $a$ obey $T ^ { 2 } \propto a ^ { 3 }$.

Unlike the other laws, the second is valid for any central force, because the rate of area sweeping is $r v _ { \perp } / 2 \propto | \mathbf { r } \times \mathbf { v } | \propto | \mathbf { L } |$.

Idea 5
For a general orbit with semimajor axis $a$, the total energy is

$$
E = - \frac { G M m } { 2 a } .
$$

This identity also applies to hyperbolas, where $a$ is negative, and the parabola in the limit of infinite $a$, where the total energy vanishes.

Idea 6
An ellipse is defined by two foci $F _ { 1 }$ and $F _ { 2 }$ separated by a distance $2 d$. It consists of the set of points $P$ so that $P F _ { 1 } + P F _ { 2 } = 2 a$ is a constant, where $a$ is the semimajor axis. The semiminor axis $b$ is related by $a = \sqrt { b ^ { 2 } + d ^ { 2 } }$, as one can show by considering an appropriate right triangle, and the area is $\pi a b$.

Remark: Virial Theorem
For bound orbits, the time-averaged values of the kinetic and potential energy are related by

$$
\langle K \rangle = - \frac { 1 } { 2 } \langle V \rangle .
$$

In fact, the virial theorem holds for more complicated bound systems of particles as well, as long as they interact by a power law potential $V ( r ) \propto r ^ { n }$. In this case, we have

$$
\langle K \rangle = \frac { n } { 2 } \langle V \rangle
$$

where gravity corresponds to the case $n = - 1$.
You can easily check that the virial theorem works in one dimension for a particle bouncing in a uniform gravitational field $( n = 1 )$, or a particle on a spring $( n = 2 )$. It's also easy to check for a planet in a circular orbit $( n = - 1 )$. With some more work, you can check that it also holds for arbitrary elliptical orbits. To do this most efficiently, convert the time integral to an integral over angle $\theta$, and use the form of an ellipse in polar coordinates.

In astrophysics, the virial theorem is useful because it allows us to estimate $V$, which can be hard to measure, given $K$. For discussion of the virial theorem along with applications to dark matter, see section 1.4.3 of these notes. We will return to these subjects in X3.
