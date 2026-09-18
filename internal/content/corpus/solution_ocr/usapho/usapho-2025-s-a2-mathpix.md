---
id: solution-ocr-usapho-2025-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2025-qa2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem A2: Black Tides

Consider a spherically symmetric, nonrotating star of mass $m$ and radius $r$. If it gets too close to the supermassive black hole of mass $M \gg m$ at the center of a galaxy, it will be ripped apart by tidal forces. Throughout this problem, neglect relativistic effects and give answers in terms of $G , M , m$, and $r$. When asked for numbers, assume the star is Sun-like, so that $m = 2 \times 10 ^ { 30 } \mathrm {~kg}$, $r = 7 \times 10 ^ { 8 } \mathrm {~m}$, and $M = 10 ^ { 6 } m$, and give all numeric answers to one significant figure.

a. Suppose the star orbits the black hole in a circle of radius $R$. What is the radius of curvature of the trajectory of each point on the star's surface? Note that the star does not rotate as it orbits.

## Solution

As the star rotates about the black hole, each point on the surface will trace out a circle with radius $R$. The circle will be translated with respect to the star's orbit.

b. Gas on the star's surface facing the black hole is attracted to the star by the star's gravity, and pulled away from the star by the black hole's tidal force. Write an expression for the tidal acceleration at the point closest to the black hole.

## Solution

The tidal acceleration is equal to the difference in the gravitational acceleration due to the black hole at the center and the near surface of the star,

$$
g _ { T } = \frac { G M } { ( R - r ) ^ { 2 } } - \frac { G M } { R ^ { 2 } } \approx \frac { 2 G M r } { R ^ { 3 } }
$$

where we used the binomial expansion.

c. At a radius $R$ where the gravitational and tidal forces are in equilibrium, the star will start being tidally ripped apart. This effect can only be observed when $R$ is outside the black hole's Schwarzschild radius $R _ { s } = 2 G M / c ^ { 2 }$. Find an expression for $R$ and numerically evaluate the ratio $R / R _ { s }$.

## Solution

Setting the tidal acceleration expression equal to $G m / r ^ { 2 }$ yields $R = r ( 2 M / m ) ^ { 1 / 3 }$. This is known as the solid-body Roche limit. In reality, a star can start breaking up at larger orbital radii, because its shape can be deformed, the star can be rotating, and the gas inside carries pressure. However, the Roche limit is a decent estimate of when tidal effects become very important.
We then numerically compute $R = 9 \times 10 ^ { 10 } \mathrm {~m}$ and $R _ { s } = 2 G M / c ^ { 2 } = 3 \times 10 ^ { 9 } \mathrm {~m}$, so the ratio is $R / R _ { s } = 30$. In other words, tidal disruption of such a star occurs well outside the black hole's horizon, so the events are observable, and general relativistic effects can be safely neglected.

For the rest of the problem, we consider a star on a parabolic orbit whose periapsis (distance of closest approach) is equal to the radius $R$ found in part 1. Near periapsis, the star will be torn


apart in a "tidal disruption event". As a very rough model of this phenomenon, assume the star is initially a single rigid body. The moment it reaches periapsis, it fragments into many rigid pieces which do not interact with other, and feel only the black hole's gravity.

d. Afterward, some of the fragments will escape from the black hole, while the rest remain bound. Numerically evaluate the fraction of the mass which escapes.

## Solution

The fragment at the center of the star has zero energy, since it's directly on the parabolic orbit. At periapsis, the fragments all have the same kinetic energy, since the star was a rigid body, but the ones further away from the black hole than the center have a less negative potential energy, so they have a positive total energy. Since $R \gg r$, about half of the star is further away than the center, so a fraction 0.5 of the mass escapes, independent of the parameters $m , M$, and $r$.

e. An escaping fragment has speed $v _ { f }$ when it is far from the black hole. Find the maximum possible value of $v _ { f }$, among all fragments, and evaluate it numerically.

## Solution

At the moment of the disruption, the entire star has speed $v _ { 0 } = \sqrt { 2 G M / R }$. The fragments with the highest total energy are those at the far side of the star, a distance $R + r$ from the black hole. Applying conservation of energy per unit mass gives

$$
\frac { 1 } { 2 } v _ { f } ^ { 2 } = \frac { 1 } { 2 } v _ { 0 } ^ { 2 } - \frac { G M } { R + r } = \frac { G M } { R } - \frac { G M } { R + r } \approx \frac { G M r } { R ^ { 2 } } .
$$

Solving for $v _ { f }$ and substituting in our earlier result for $R$ gives

$$
v _ { f } = \left( \frac { 2 M } { m } \right) ^ { 1 / 6 } \sqrt { \frac { G m } { r } } = 5 \times 10 ^ { 6 } \mathrm {~m} / \mathrm { s } .
$$

f. A bound fragment orbits with period $T _ { f }$. Find the minimum possible value of $T _ { f }$, among all fragments, and evaluate it numerically.

## Solution

The shortest period occurs for fragments at the near side of the star, a distance $R - r$ from the black hole. By similar reasoning to the previous part, the energy per unit mass of such fragments is $- G M r / R ^ { 2 }$. In addition, we know that the total energy per unit mass in an elliptical orbit is $- G M / ( 2 a )$ where $a$ is the semimajor axis; combining these gives

$$
a = \frac { R ^ { 2 } } { 2 r } = \left( \frac { M } { m } \right) ^ { 2 / 3 } \frac { r } { 2 ^ { 1 / 3 } } .
$$


Finally, Kepler's third law states that the period is

$$
T _ { f } = 2 \pi \sqrt { \frac { a ^ { 3 } } { G M } } = 2 \pi \sqrt { \frac { r ^ { 3 } } { 2 G m } } \sqrt { \frac { M } { m } } = 7 \times 10 ^ { 6 } \mathrm {~s} = 80 \text { days. }
$$

As bound fragments return to the location of the initial disruption, they collide with other debris, causing them to be absorbed into the black hole's accretion disk. This process produces an enormous amount of light, with the luminosity (or energy emitted over time) proportional to the mass absorption rate. If $t = 0$ at the moment the star fragments apart, then light begins to be emitted at the time you found in part 5, and afterward the luminosity scales as $L \propto 1 / t ^ { n }$ for a constant $n$.

g. Find the value of $n$. Assume for simplicity that the total energies of the bound fragments are uniformly distributed between their minimum and maximum values.

## Solution

The mass that falls into the accretion disk in the interval $( t , t + d t )$ consists of particles whose orbital period $T _ { f }$ is in that range. By Kepler's third law, the total energy of the particles is related to the orbital period as $E \propto T _ { f } ^ { - 2 / 3 }$, so the width of the energy band of the particles that fall in during that time scales as $d E \propto T _ { f } ^ { - 5 / 3 } d t$. Thus, we have $n = 5 / 3$. This is the canonical light curve power law for tidal disruption events. For further discussion, see the article Stellar disruption by a supermassive black hole by Lodato, King, and Pringle.
