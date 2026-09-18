---
id: solution-ocr-usapho-2022-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2022-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question B2
Broken Vase
A uniformly charged ring of radius $d$ has total charge $Q$ and is fixed in place. A point charge $- q$ of mass $m$ is placed at its center. Both $Q$ and $q$ are positive. As a result, if the point charge is given a small velocity along the ring's axis of symmetry, it will oscillate about the ring's center.

a. Find the period $T$ of the oscillations.
Solution
Suppose the charge is displaced by a small distance $\Delta x$. The horizontal component of the electric field of the ring, at the charge, is
$$
E _ { x } \approx E \frac { \Delta x } { d } = \frac { Q } { 4 \pi \epsilon _ { 0 } d ^ { 3 } } \Delta x .
$$
The restoring force is linear in $\Delta x$, so it acts like a spring with spring constant
$$
k = \frac { Q q } { 4 \pi \epsilon _ { 0 } d ^ { 3 } } .
$$
Thus, the period of oscillation is
$$
T = 2 \pi \sqrt { \frac { m } { k } } = \sqrt { \frac { 16 \pi ^ { 3 } \epsilon _ { 0 } m d ^ { 3 } } { Q q } } .
$$

For the rest of the problem, we will consider this situation in a reference frame where the ring is moving along its axis of symmetry with a constant speed $v$, which may be comparable to the speed of light $c$. In this frame, the ring and point charge have charge $Q ^ { \prime }$ and $q ^ { \prime }$, and the point charge still oscillates about the ring's center.

b. What is the period $T ^ { \prime }$ of oscillation of the point charge in this frame?
Solution
By directly applying time dilation to the answer of part (a),
$$
T ^ { \prime } = \gamma T = \frac { 1 } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } \sqrt { \frac { 16 \pi ^ { 3 } \epsilon _ { 0 } m d ^ { 3 } } { Q q } } .
$$
c. When the charge is a small distance $\Delta x$ from the center of the ring, find the restoring force in terms of $q ^ { \prime } , Q ^ { \prime } , v , d , \Delta x$, and fundamental constants.

Solution
The position of the charge, relative to each charge in the ring, is at $\theta \approx 90 ^ { \circ }$. Thus, using


the provided information, we have
$$
E _ { x } \approx \frac { Q ^ { \prime } } { 4 \pi \epsilon _ { 0 } d ^ { 2 } } \frac { 1 - v ^ { 2 } / c ^ { 2 } } { \left( 1 - v ^ { 2 } / c ^ { 2 } \right) ^ { 3 / 2 } } \sin \theta .
$$
Thus, the restoring force is
$$
F = - \frac { Q ^ { \prime } q ^ { \prime } } { 4 \pi \epsilon _ { 0 } d ^ { 3 } } \frac { 1 } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } \Delta x .
$$
d. Suppose the restoring force has the form $F = - k \Delta x$. Find the period of the resulting oscillations in terms of $k , m , v$, and fundamental constants.

## Solution

By the definition of force given in the information below, we have

$$
F = \frac { d p } { d t } = m \frac { d } { d t } \left( \frac { v } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } \right) .
$$

Carrying out the derivative and simplifying gives

$$
F = \frac { m } { \left( 1 - v ^ { 2 } / c ^ { 2 } \right) ^ { 3 / 2 } } \frac { d v } { d t } = - k \Delta x
$$

For small oscillations, the velocity is always approximately equal to the original velocity $v$. Thus, the motion is still simple harmonic, except that the mass is effectively

$$
m _ { \mathrm { eff } } = \frac { m } { \left( 1 - v ^ { 2 } / c ^ { 2 } \right) ^ { 3 / 2 } } .
$$

Thus, we conclude

$$
T ^ { \prime } = 2 \pi \sqrt { \frac { m _ { \mathrm { eff } } } { k } } = 2 \pi \sqrt { \frac { m } { k } \frac { 1 } { \left( 1 - v ^ { 2 } / c ^ { 2 } \right) ^ { 3 / 2 } } } .
$$

e. Suppose the electric charge transforms between reference frames as $Q ^ { \prime } = \gamma ^ { n } Q$ and $q ^ { \prime } = \gamma ^ { n } q$. By combining your answers to parts (c) and (d), and comparing to part (b), find the value of $n$.

## Solution

The final result of part (c) tells us that

$$
k = \frac { Q ^ { \prime } q ^ { \prime } } { 4 \pi \epsilon _ { 0 } d ^ { 3 } } \frac { 1 } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } }
$$

Plugging this into the answer to part (d) gives

$$
T ^ { \prime } = \frac { 1 } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } \sqrt { \frac { 16 \pi ^ { 3 } \epsilon _ { 0 } m d ^ { 3 } } { Q ^ { \prime } q ^ { \prime } } } .
$$


This is precisely the same as the answer to part (b) if $Q ^ { \prime } q ^ { \prime } = Q q$, or in other words,

$$
n = 0 .
$$

That is, the electric charge is Lorentz invariant.

To solve this problem, you will need the following results from relativity:

- The Lorentz factor is defined as $\gamma = 1 / \sqrt { 1 - v ^ { 2 } / c ^ { 2 } }$.
- The momentum of a particle is $\mathbf { p } = \gamma m \mathbf { v }$, and $m$ is the same in all frames.
- The electromagnetic force on a charge $q$ is $\mathbf { F } = d \mathbf { p } / d t = q ( \mathbf { E } + \mathbf { v } \times \mathbf { B } )$.
- The electric field of a charge $q$ at the origin with constant velocity $\mathbf { v }$ is radial, with magnitude
$$
E = \frac { q } { 4 \pi \epsilon _ { 0 } r ^ { 2 } } \frac { 1 - v ^ { 2 } / c ^ { 2 } } { \left( 1 - \left( v ^ { 2 } / c ^ { 2 } \right) \sin ^ { 2 } \theta \right) ^ { 3 / 2 } }
$$
where $\theta$ is the angle of r to v.
