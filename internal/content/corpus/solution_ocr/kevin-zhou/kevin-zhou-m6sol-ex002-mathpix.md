---
id: solution-ocr-kevin-zhou-m6sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
Prove the converse of Newton's second theorem: outside of a spherical shell, its gravitational field is equivalent to a point mass at its center only if $F ( r )$ is proportional to $r$, proportional to $r ^ { - 2 }$, or a linear combination of the two.

Solution
It's easiest to consider the potential outside the shell. Let the shell of mass $m$ be centered at the origin with radius $R$, and consider the potential at a distance $z > R$ from the origin. If a point mass produces a gravitational potential $f ( r ) d m$ at separation $r$, then integrating


over the sphere in spherical coordinates gives

$$
V ( z ) = \frac { m } { 4 \pi R ^ { 2 } } \int _ { 0 } ^ { \pi } \left( 2 \pi R ^ { 2 } \sin \theta d \theta \right) f \left( \sqrt { z ^ { 2 } + R ^ { 2 } - 2 z R \cos \theta } \right)
$$

The trick is to switch variables to the separation $r = \sqrt { z ^ { 2 } + R ^ { 2 } - 2 z R \cos \theta }$, since

$$
r d r = z R \sin \theta d \theta .
$$

Plugging this in gives

$$
V ( z ) = \frac { m } { 2 z R } \int _ { z - R } ^ { z + R } r f ( r ) d r .
$$

Newton's second theorem works precisely when $d V / d z$ is independent of $R$, so that the shell radius can be collapsed to zero without changing the force.

Suppose $f ( r )$ is proportional to $r ^ { n }$. Then we have

$$
V ( z ) \propto \frac { ( z + R ) ^ { n + 2 } - ( z - R ) ^ { n + 2 } } { z R }
$$

and the force's dependence on $R$ only drops out in three cases: when $n = - 1$ (an inverse square force), $n = 0$ (the trivial case, corresponding to no force), and $n = 2$ (a linear force). The first two are easy to see, while for the final case we have

$$
V ( z ) \propto \frac { 8 z ^ { 3 } R + 8 z R ^ { 3 } } { z R } \propto z ^ { 2 } + R ^ { 2 }
$$

so that $R$ drops out of $d V / d z$, as required. Since any reasonable function can be built by superposing such power laws, this classification is exhaustive.

Incidentally, the same method can be used to prove the converse of Newton's first theorem. The only difference is that $z < R$, so that the lower limit of integration has to be replaced with $| z - R | = R - z$. Then the $n = 2$ case works out the same way, since $z - R$ is squared. By contrast, for $n = - 1$ we get no force, since $V ( z ) \propto ( ( z + R ) - ( R - z ) ) / z R = 2 / R$ which is constant. Thus, the inverse square force is the only one where Newton's first theorem applies.

## 2 Central Potentials

Idea 3: Effective Potential
A particle experiencing a central force has a potential energy $V ( r )$ which only depends on its radial coordinate, and conserved angular momentum

$$
L = | \mathbf { r } \times \mathbf { p } | = m r ^ { 2 } \dot { \theta } .
$$

Its kinetic energy can thus be written in terms of the radial velocity $\dot { r }$ and $L$,

$$
E = \frac { 1 } { 2 } m v _ { r } ^ { 2 } + \frac { 1 } { 2 } m v _ { \theta } ^ { 2 } + V ( r ) = \frac { 1 } { 2 } m \dot { r } ^ { 2 } + \left( V ( r ) + \frac { L ^ { 2 } } { 2 m r ^ { 2 } } \right) .
$$


By setting the time derivative of this expression to zero, we find

$$
m \ddot { r } = - \frac { d } { d r } \left( V ( r ) + \frac { L ^ { 2 } } { 2 m r ^ { 2 } } \right) .
$$

Therefore, if we are interested in $r ( t )$ alone, we can find it by treating the problem as one-dimensional, where the particle moves in the "effective potential" $V ( r ) + L ^ { 2 } / 2 m r ^ { 2 }$. The extra term is called the angular momentum barrier and repels the particle away from the center. Once we know $r ( t )$, we can find $\theta ( t )$ if desired by using $\dot { \theta } = L / m r ^ { 2 }$.

One way of understanding the effective potential term is to think in terms of the energy methods of M4. From the perspective of $r ( t )$ alone, any dependence on $\dot { r } ^ { 2 }$ is part of the kinetic energy, and any dependence on $r$ is part of the potential energy. In particular, the kinetic energy of tangential motion depends only on $r$, because it is fixed by angular momentum conservation, so it appears as part of the potential when considering only radial motion.

Example 3: KK 9.4
For what values of $n$ are circular orbits stable with the potential energy $U ( r ) = - A / r ^ { n }$ ?

Solution
Note that circular orbits can only possibly exist if the force is attractive. This implies that $A$ must have the same sign as $n$.

The effective potential is

$$
U _ { \mathrm { eff } } ( r ) = - \frac { A } { r ^ { n } } + \frac { L ^ { 2 } } { 2 m r ^ { 2 } } .
$$

In a circular orbit, $r$ is constant, so the particle just sits still at a minimum of the effective potential. That is, the circular orbit radius satisfies $U _ { \text {eff } } ^ { \prime } ( r ) = 0$, so

$$
\frac { A n } { r _ { 0 } ^ { n + 1 } } - \frac { L ^ { 2 } } { m r _ { 0 } ^ { 3 } } = 0 , \quad r _ { 0 } ^ { 2 - n } = \frac { L ^ { 2 } } { A n m } .
$$

The orbit is stable if $U _ { \text {eff } } ^ { \prime \prime } ( r ) > 0$, so

$$
- \frac { A n ( n + 1 ) } { r _ { 0 } ^ { n + 2 } } + \frac { 3 L ^ { 2 } } { m } \frac { 1 } { r _ { 0 } ^ { 4 } } > 0
$$

which simplifies to

$$
r _ { 0 } ^ { n - 2 } > \frac { m } { 3 L ^ { 2 } } A n ( n + 1 ) .
$$

Plugging in the value of $r _ { 0 }$, this becomes simply $n < 2$. As expected, for inverse square forces $( n = 1 )$ and spring forces $( n = - 2 )$ the orbits are stable, while, e.g. for inverse cube forces, the circular orbits are neutrally stable.
[3] Problem 4 (Morin 7.4). A particle of mass $m$ moves in a potential $V ( r ) = \beta r ^ { k }$. Let the angular momentum be $L$.


(a) Find the radius $r _ { 0 }$ of the circular orbit.
(b) Find the angular frequency $\omega _ { r }$ of small oscillations about this radius.
(c) Now consider a slightly perturbed circular orbit. Explain why the orbit remains a closed curve if the ratio of the time period of small oscillations and the time period of the original circular orbit is rational, and find the integer values of $k$ where this holds.

Solution. In this problem, the effective potential is

$$
V _ { \mathrm { eff } } ( r ) = \frac { L ^ { 2 } } { 2 m r ^ { 2 } } + \beta r ^ { k }
$$

(a) We have circular orbits when the effective potential is minimized, or $V _ { \text {eff } } ^ { \prime } ( r ) = 0$, so
$$
\frac { L ^ { 2 } } { 2 m } ( - 2 ) r _ { 0 } ^ { - 3 } + k \beta r _ { 0 } ^ { k - 1 } = 0 , \quad r _ { 0 } = \left( \frac { L ^ { 2 } } { m k \beta } \right) ^ { \frac { 1 } { k + 2 } }
$$
(b) For small $\left| r - r _ { 0 } \right|$, Taylor expanding gives
$$
V _ { \mathrm { eff } } ( r ) \approx V _ { \mathrm { eff } } \left( r _ { 0 } \right) + \frac { 1 } { 2 } V _ { \mathrm { eff } } ^ { \prime \prime } \left( r _ { 0 } \right) \left( r - r _ { 0 } \right) ^ { 2 } ,
$$
so $\omega _ { r } = \sqrt { V _ { \text {eff } } ^ { \prime \prime } \left( r _ { 0 } \right) / m }$. Thus, we must compute $V _ { \text {eff } } ^ { \prime \prime } \left( r _ { 0 } \right)$. We straightforwardly have
$$
V _ { \mathrm { eff } } ^ { \prime \prime } ( r ) = r ^ { - 4 } \left( \frac { 3 L ^ { 2 } } { m } + k ( k - 1 ) \beta r ^ { k + 2 } \right) ,
$$
so $V _ { \text {eff } } ^ { \prime \prime } \left( r _ { 0 } \right) = \frac { 1 } { r _ { 0 } ^ { 4 } } \frac { L ^ { 2 } } { m } ( k + 2 )$, so
$$
\omega _ { r } = \frac { L } { m r _ { 0 } ^ { 2 } } \sqrt { k + 2 } .
$$
(c) This is true because, if the ratio of periods is rational, there is a "least common multiple" at which point an integer number of both cycles (both radial oscillation and the overall orbit) have completed. At this point we return to the original starting point, so the orbit is closed. To find the answer, note that it is equivalent for $\omega _ { r } / \omega _ { \theta }$ to be rational, where $\omega _ { \theta } = L / m r _ { 0 } ^ { 2 }$ is the angular velocity of a circular orbit of radius $r _ { 0 }$. Then $\omega _ { r } / \omega _ { \theta } = \sqrt { k + 2 }$, and since $k$ is an integer, the ratio is rational when $k + 2$ is a perfect square, so
$$
k = - 1,2,7,14 , \ldots .
$$

Remark: Bertrand's Theorem
In problem 4, you showed that for a certain group of potentials, all bound orbits that are nearly circular are approximately closed. Bertrand's theorem states that the only central potentials for which all bound orbits are exactly closed are $V ( r ) \propto 1 / r$ and $V ( r ) \propto r ^ { 2 }$.

The idea of the proof is as follows. First, for a general potential $V ( r )$, we can compute the ratio of periods of a small radial oscillation and the underlying circular orbit and demand it be rational, just like in part (c) above. However, since this ratio changes continuously as the


orbit parameters are varied, it must be a constant if it is to always be rational. Using this condition, you can show that $V ( r )$ must be a power law, which we had to assume above.
You found in part (c) that infinitely many power laws give closed nearly circular orbits. To rule out the other ones, we need to expand to higher orders, i.e. account for the fact that the effective potential is not perfectly simple harmonic. A detailed derivation can be found here.
