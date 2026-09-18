---
id: solution-ocr-usapho-2012-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2012-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

For this problem, assume the existence of a hypothetical particle known as a magnetic monopole. Such a particle would have a "magnetic charge" $q _ { m }$, and in analogy to an electrically charged particle would produce a radially directed magnetic field of magnitude

$$
B = \frac { \mu _ { 0 } } { 4 \pi } \frac { q _ { m } } { r ^ { 2 } }
$$

and be subject to a force (in the absence of electric fields)

$$
F = q _ { m } B
$$

A magnetic monopole of mass $m$ and magnetic charge $q _ { m }$ is constrained to move on a vertical, nonmagnetic, insulating, frictionless U-shaped track. At the bottom of the track is a wire loop whose radius $b$ is much smaller than the width of the "U" of the track. The section of track near the loop can thus be approximated as a long straight line. The wire that makes up the loop has radius $a \ll b$ and resistivity $\rho$. The monopole is released from rest a height $H$ above the bottom of the track.

Ignore the self-inductance of the loop, and assume that the monopole passes through the loop many times before coming to a rest.

a. Suppose the monopole is a distance $x$ from the center of the loop. What is the magnetic flux $\Phi _ { B }$ through the loop?
b. Suppose in addition that the monopole is traveling at a velocity $v$. What is the $\operatorname { emf } \mathcal { E }$ in the loop?
c. Find the change in speed $\Delta v$ of the monopole on one trip through the loop.
d. How many times does the monopole pass through the loop before coming to a rest?
e. Alternate Approach: You may, instead, opt to find the above answers to within a dimensionless multiplicative constant (like $\frac { 2 } { 3 }$ or $\pi ^ { 2 }$ ). If you only do this approach, you will be able to earn up to 60\% of the possible score for each part of this question.

You might want to make use of the integral

$$
\int _ { - \infty } ^ { \infty } \frac { 1 } { \left( 1 + u ^ { 2 } \right) ^ { 3 } } d u = \frac { 3 \pi } { 8 }
$$

or the integral

$$
\int _ { 0 } ^ { \pi } \sin ^ { 4 } \theta d \theta = \frac { 3 \pi } { 8 }
$$

## Solution


a. The most direct way is to calculate the flux through a flat, circular surface bounded by the loop. However, by Gauss's law the flux will remain the same if we deform this surface, as long as we keep its boundary the same and don't hit the monopole. The easiest way is to deform the surface so it is part of a sphere of radius $r = \sqrt { b ^ { 2 } + x ^ { 2 } }$ centered at the monopole.
Work in spherical coordinates, where $\theta$ is the angle to the $x$-axis and $\phi$ is the azimuthal angle. The loop itself is at $\theta _ { 0 } = \tan ^ { - 1 } ( b / x )$, so
$$
\Phi _ { B } = \frac { \mu _ { 0 } } { 4 \pi } \frac { q _ { m } } { r ^ { 2 } } \int _ { 0 } ^ { 2 \pi } d \phi \int _ { 0 } ^ { \theta _ { 0 } } r ^ { 2 } \sin \theta d \theta = \frac { \mu _ { 0 } q _ { m } } { 2 } \left( 1 - \cos \left( \theta _ { 0 } \right) \right)
$$
We can easily check this by limiting cases: for small $x$ we have $\mu _ { 0 } q _ { m } / 2$, i.e. half of the total flux, while for large $x$ we have zero flux.
This form is acceptable, but we can also write it explicitly in terms of $x$. By drawing a right triangle, we have
$$
\sin \theta _ { 0 } = \frac { b } { r } , \quad \cos \theta _ { 0 } = \frac { x } { r }
$$
which gives
$$
\Phi _ { B } = \frac { \mu _ { 0 } q _ { m } } { 2 } \left( 1 - \frac { x } { \sqrt { b ^ { 2 } + x ^ { 2 } } } \right) .
$$
We will use the variable $\theta _ { 0 }$ in the parts below, dropping the subscript.
b. Since $\mathcal { E } = - d \Phi _ { B } / d t$, differentiating both sides of the above result gives
$$
\mathcal { E } = \frac { \mu _ { 0 } q _ { m } v } { 2 } \frac { b ^ { 2 } } { \left( b ^ { 2 } + x ^ { 2 } \right) ^ { 3 / 2 } } = \frac { \mu _ { 0 } q _ { m } v } { 2 b } \sin ^ { 3 } \theta
$$
where we used the chain rule, with $v = d x / d t$. Either form is acceptable.
c. Consider the force of the magnetic field produced by the current $I$ in the loop on the monopole. We use the Biot-Savart law,
$$
\mathbf { B } = \frac { \mu _ { 0 } I } { 4 \pi } \int \frac { d \mathbf { s } \times \mathbf { r } } { r ^ { 3 } }
$$
where r is a vector from the monopole to a point on the rim, $d \mathbf { s }$ integrates along the loop, and $r = \sqrt { b ^ { 2 } + x ^ { 2 } }$ as before. Since $d \mathbf { s } \times \mathbf { r } = r \sin \theta d s$, the integral gives
$$
B = \frac { \mu _ { 0 } I } { 4 \pi } \frac { 2 \pi b \sin \theta } { r ^ { 2 } } = \frac { \mu _ { 0 } I } { 2 b } \sin ^ { 3 } \theta .
$$
The force on the monopole is $F = q _ { m } B$, so the acceleration is
$$
a = \frac { q _ { m } B } { m } .
$$
The current $I$ is related to $\mathcal { E }$ by Ohm's law, $\mathcal { E } = I R$, where we'll compute $R$ later. Then
$$
a = \frac { \mu _ { 0 } ^ { 2 } q _ { m } ^ { 2 } v } { 4 b ^ { 2 } m R } \sin ^ { 6 } \theta
$$
The change in speed in one trip is
$$
\Delta v = \int a d t \approx \frac { 1 } { v } \int _ { - \infty } ^ { \infty } a d x = \frac { 1 } { v } \int _ { 0 } ^ { \pi } a \frac { d x } { d \theta } d \theta = - \frac { b } { v } \int _ { 0 } ^ { \pi } \frac { a } { \sin ^ { 2 } \theta } d \theta
$$

where we approximated $v$ as constant throughout one trip and the bottom of the track as an infinite straight line. Plugging in our result for $a$ and using the second provided integral,

$$
\Delta v = - \frac { \mu _ { 0 } ^ { 2 } q _ { m } ^ { 2 } } { 4 b m R } \int _ { 0 } ^ { \pi } \sin ^ { 4 } \theta d \theta = - \frac { 3 \pi } { 32 } \frac { \mu _ { 0 } ^ { 2 } q _ { m } ^ { 2 } } { b m R }
$$

Finally, we need to find $R$. Since $a \ll b$, the loop is approximately a long cylindrical wire, so

$$
R = \rho \frac { 2 \pi b } { \pi a ^ { 2 } }
$$

which gives the final result

$$
\Delta v = - \frac { 3 \pi } { 64 } \frac { \mu _ { 0 } ^ { 2 } q _ { m } ^ { 2 } a ^ { 2 } } { b ^ { 2 } m \rho } .
$$

We haven't kept track of the signs very carefully; all that matters is that $\Delta v$ is negative, as it must be by Lenz's law.

The problem can also be solved by energy conservation, finding the energy dissipated in the loop every trip by integrating $P = \mathcal { E } ^ { 2 } / R$ over time, then relating that to the change in the monopole's kinetic energy, $\Delta K \approx m v \Delta v$.
If we had kept the integral above over $d x$, we would instead have to use the first provided integral. Incidentally, these integrals aren't too hard to derive. The first is related to the second by $u$-substitution; for the second, note that

$$
\int _ { 0 } ^ { \pi } \sin ^ { 4 } \theta d \theta = \int _ { 0 } ^ { \pi } \left( \frac { e ^ { i \theta } - e ^ { - i \theta } } { 2 i } \right) ^ { 4 } d \theta
$$

All of the terms in the expansion integrate to zero, by periodicity, except for the constant term. Then the integral is

$$
\frac { 1 } { 16 } \binom { 4 } { 2 } \int _ { 0 } ^ { \pi } d \theta = \frac { 3 \pi } { 8 }
$$

as stated.

d. The initial speed is $\sqrt { 2 g H }$ by energy conservation, so
$$
N = \frac { \sqrt { 2 g H } } { \Delta v } = \frac { 64 \sqrt { 2 } } { 3 \pi } \frac { b ^ { 2 } m \rho \sqrt { g H } } { \mu _ { 0 } ^ { 2 } q _ { m } ^ { 2 } a ^ { 2 } } .
$$
