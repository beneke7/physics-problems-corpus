---
id: solution-ocr-usapho-2023-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2023-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A2

## Time is a Flat Circle

A particle of mass $m$ and negative charge $- q$ is constrained to move in a horizontal plane. In the situations described below, this particle can either oscillate back and forth in a straight line or move in a circle. (These two modes of motion are interesting because they generate linearly and circularly polarized radiation, respectively, but in this problem you may ignore any energy lost to radiation.)

a. A large positive charge $Q \gg q$ is fixed in place a distance $R$ directly below the origin of the plane.
    i. When the particle is a distance $r \ll R$ from the origin, find an approximate expression for its potential energy due to the charge $Q$ to second order in $r / R$, up to an arbitrary constant. You may use this result for the rest of the problem.

## Solution

The potential energy of the particle, relative to infinity, is

$$
V ( r ) = - \frac { q Q } { 4 \pi \epsilon _ { 0 } \sqrt { R ^ { 2 } + r ^ { 2 } } } \approx - \frac { q Q } { 4 \pi \epsilon _ { 0 } R } + \frac { q Q r ^ { 2 } } { 8 \pi \epsilon _ { 0 } R ^ { 3 } }
$$

where we have used the binomial theorem on the square root, since $r \ll R$. The constant doesn't matter, so we could equivalently write this as

$$
V ( r ) \approx \frac { q Q r ^ { 2 } } { 8 \pi \epsilon _ { 0 } R ^ { 3 } } + \text { const. }
$$

ii. If the particle oscillates linearly with amplitude $a \ll R$, what is its angular frequency $\omega _ { \ell }$ ?

## Solution

For simple harmonic motion, the potential energy $V - V _ { 0 } = \frac { 1 } { 2 } k x ^ { 2 }$, where the "spring constant" $k$ is related to the angular frequency of oscillation by $\omega = \sqrt { k / m }$. Reading the value of $k$ from the expression above for $V ( r )$ gives $k = q Q / \left( 4 \pi \epsilon _ { 0 } R ^ { 3 } \right)$, and therefore

$$
\omega _ { \ell } = \sqrt { \frac { q Q } { 4 \pi \epsilon _ { 0 } m R ^ { 3 } } } .
$$

As usual for simple harmonic motion, the amplitude does not alter the frequency.
iii. If the particle performs circular motion with radius $r \ll R$, what is its angular frequency $\omega _ { c }$ ?

## Solution

For a radially symmetric, parabolic potential, a circular orbit can be thought of as simultaneous harmonic oscillation in the $x$ direction and the $y$ direction. Both oscillations have the same angular frequency $\omega _ { \ell }$ as derived in part 1. So the answer is the same:

$$
\omega _ { c } = \sqrt { \frac { q Q } { 4 \pi \epsilon _ { 0 } m R ^ { 3 } } } = \omega _ { \ell } .
$$


Note that the orbit radius does not matter, so long as it is small enough $( r \ll R )$ to still correspond to simple harmonic motion.
b. Now an additional negative charge $- q$ is fixed in place at the origin of the plane.
    i. What is the equilibrium distance $r _ { 0 }$ of the particle from the origin?

## Solution

With the additional charge at the origin, the total potential energy of the particle as a function of $r$ is

$$
V ( r ) = V _ { 0 } + \frac { q Q r ^ { 2 } } { 8 \pi \epsilon _ { 0 } R ^ { 3 } } + \frac { q ^ { 2 } } { 4 \pi \epsilon _ { 0 } r } .
$$

Notice that the potential energy as a function of position has a ring of minima with a certain radius $r _ { 0 }$. When the particle is not in motion, its rest position is somewhere along the ring. The value of $r _ { 0 }$ can be found from $V ^ { \prime } \left( r _ { 0 } \right) = 0$, which gives $r _ { 0 } = R ( q / Q ) ^ { 1 / 3 }$.

ii. If the particle oscillates linearly with amplitude $a \ll r _ { 0 }$, what is its angular frequency $\Omega _ { \ell }$ ? Is it higher or lower than $\omega _ { \ell }$ ?

## Solution

A linear oscillation involves the radius $r$ oscillating around the value $r _ { 0 }$. Taylor expanding the expression for $V ( r )$ in part b.i around $r = r _ { 0 }$ gives

$$
V \approx V \left( r _ { 0 } \right) + \frac { 1 } { 2 } \frac { 3 q Q } { 4 \pi \epsilon _ { 0 } R ^ { 3 } } \delta _ { r } ^ { 2 } ,
$$

where $\delta _ { r } = r - r _ { 0 }$. One can read from this expression the value of the spring constant $k$, which gives for the angular frequency $\omega = \sqrt { k / m }$ the result

$$
\Omega _ { \ell } = \sqrt { \frac { 3 q Q } { 4 \pi \epsilon _ { 0 } m R ^ { 3 } } } = \sqrt { 3 } \omega _ { \ell }
$$

so that $\Omega _ { \ell } > \omega _ { \ell }$. Evidently, adding the charge at the origin slightly stiffens the oscillation in the radial direction.

iii. Now suppose the particle performs circular motion with radius $r = r _ { 0 } + \delta r$, where $\delta r \ll r _ { 0 }$. What is its angular frequency $\Omega _ { c }$, in terms of $\omega _ { c } , r$, and $\delta r$ ? Is it higher or lower than $\omega _ { c }$ ?

## Solution

For circular motion with radius $r + \delta r$ and $\delta r \ll r _ { 0 }$, the orbit is above, but is very close to the bottom of the ring of minima, $r \approx r _ { 0 }$. For such small $\delta r$ the force linearly depends on $r - r _ { 0 }$, as in Hooke's law, with

$$
k = V ^ { \prime \prime } \left( r _ { 0 } \right) = \frac { 3 Q q } { 4 \pi \epsilon _ { 0 } R ^ { 3 } }
$$

Now Newton's second law gives


$$
- k \delta r = - m \Omega _ { c } ^ { 2 } r ,
$$

with $r \approx r _ { 0 }$. This equation has a solution for $\delta r > 0$ (so that the centripetal force is inward):

$$
\Omega _ { c } \approx \omega _ { c } \sqrt { \frac { 3 \delta r } { r _ { 0 } } }
$$

Notice that the orbit frequency now explicitly depends on the orbit radius through $\delta r$. So, unlike in the case of the usual harmonic oscillator, in this case one can generate circularly polarized light with a wide range of frequencies by exciting circular motion with different radii.
Since $\delta r \ll r _ { 0 }$, the angular frequency $\Omega _ { c } \ll \omega _ { c }$, so that adding the charge $- q$ at the origin has made the orbit much slower. Intuitively, this is because the set of potential minima is a "flat circle," so that the orbit frequency can get arbitrarily small for arbitrarily small angular momenta. This is connected to Goldstone's theorem in quantum field theory, which states that spontaneously broken symmetries give rise to low frequency modes.
