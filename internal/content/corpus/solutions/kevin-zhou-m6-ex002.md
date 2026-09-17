---
id: kevin-zhou-m6-ex002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m6-ex002
solution_type: author
source_document: solution-document-kevin-zhou-m6sol
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M6Sol.pdf."
---

Example 2
Prove the converse of Newton’s second theorem: outside of a spherical shell, its gravitational
field is equivalent to a point mass at its center only if F(r) is proportional to r, proportional
to r−2, or a linear combination of the two.
Solution
It’s easiest to consider the potential outside the shell. Let the shell of mass m be centered
at the origin with radius R, and consider the potential at a distance z > R from the origin.
If a point mass produces a gravitational potential f(r)dm at separation r, then integrating
3
Kevin Zhou Physics Olympiad Handouts
over the sphere in spherical coordinates gives
V (z) =
m
4πR2
Z π
0
(2πR2
sinθdθ)f(
p
z2 + R2 − 2zRcosθ).
The trick is to switch variables to the separation r =
√
z2 + R2 − 2zRcosθ, since
rdr = zRsinθdθ.
Plugging this in gives
V (z) =
m
2zR
Z z+R
z−R
rf(r)dr.
Newton’s second theorem works precisely when dV/dz is independent of R, so that the shell
radius can be collapsed to zero without changing the force.
Suppose f(r) is proportional to rn. Then we have
V (z) ∝
(z + R)n+2 − (z − R)n+2
zR
and the force’s dependence on R only drops out in three cases: when n = −1 (an inverse
square force), n = 0 (the trivial case, corresponding to no force), and n = 2 (a linear force).
The first two are easy to see, while for the final case we have
V (z) ∝
8z3R + 8zR3
zR
∝ z2
+ R2
so that R drops out of dV/dz, as required. Since any reasonable function can be built by
superposing such power laws, this classification is exhaustive.
Incidentally, the same method can be used to prove the converse of Newton’s first theorem.
The only difference is that z < R, so that the lower limit of integration has to be replaced
with |z − R| = R − z. Then the n = 2 case works out the same way, since z − R is squared.
By contrast, for n = −1 we get no force, since V (z) ∝ ((z+R)−(R−z))/zR = 2/R which is
constant. Thus, the inverse square force is the only one where Newton’s first theorem applies.
2 Central Potentials
Idea 3: Effective Potential
A particle experiencing a central force has a potential energy V (r) which only depends on
its radial coordinate, and conserved angular momentum
L = |r × p| = mr2
θ̇.
Its kinetic energy can thus be written in terms of the radial velocity ṙ and L,
E =
1
2
mv2
r +
1
2
mv2
θ + V (r) =
1
2
mṙ2
+

V (r) +
L2
2mr2

.
4
Kevin Zhou Physics Olympiad Handouts
By setting the time derivative of this expression to zero, we find
mr̈ = −
d
dr

V (r) +
L2
2mr2

.
Therefore, if we are interested in r(t) alone, we can find it by treating the problem as
one-dimensional, where the particle moves in the “effective potential” V (r) + L2/2mr2. The
extra term is called the angular momentum barrier and repels the particle away from the
center. Once we know r(t), we can find θ(t) if desired by using θ̇ = L/mr2.
One way of understanding the effective potential term is to think in terms of the energy
methods of M4. From the perspective of r(t) alone, any dependence on ṙ2 is part of the kinetic
energy, and any dependence on r is part of the potential energy. In particular, the kinetic
energy of tangential motion depends only on r, because it is fixed by angular momentum
conservation, so it appears as part of the potential when considering only radial motion.
Example 3: KK 9.4
For what values of n are circular orbits stable with the potential energy U(r) = −A/rn?
Solution
Note that circular orbits can only possibly exist if the force is attractive. This implies that
A must have the same sign as n.
The effective potential is
Ueff(r) = −
A
rn
+
L2
2mr2
.
In a circular orbit, r is constant, so the particle just sits still at a minimum of the effective
potential. That is, the circular orbit radius satisfies U′
eff(r) = 0, so
An
rn+1
0
−
L2
mr3
0
= 0, r2−n
0 =
L2
Anm
.
The orbit is stable if U′′
eff(r) > 0, so
−
An(n + 1)
rn+2
0
+
3L2
m
1
r4
0
> 0
which simplifies to
rn−2
0 >
m
3L2
An(n + 1).
Plugging in the value of r0, this becomes simply n < 2. As expected, for inverse square forces
(n = 1) and spring forces (n = −2) the orbits are stable, while, e.g. for inverse cube forces,
the circular orbits are neutrally stable.
[3] Problem 4 (Morin 7.4). A particle of mass m moves in a potential V (r) = βrk. Let the angular
momentum be L.
5
Kevin Zhou Physics Olympiad Handouts
(a) Find the radius r0 of the circular orbit.
(b) Find the angular frequency ωr of small oscillations about this radius.
(c) Now consider a slightly perturbed circular orbit. Explain why the orbit remains a closed curve
if the ratio of the time period of small oscillations and the time period of the original circular
orbit is rational, and find the integer values of k where this holds.
Solution. In this problem, the effective potential is
Veff(r) =
L2
2mr2
+ βrk
.
(a) We have circular orbits when the effective potential is minimized, or V ′
eff(r) = 0, so
L2
2m
(−2)r−3
0 + kβrk−1
0 = 0, r0 =

L2
mkβ
 1
k+2
.
(b) For small |r − r0|, Taylor expanding gives
Veff(r) ≈ Veff(r0) +
1
2
V ′′
eff(r0)(r − r0)2
,
so ωr =
p
V ′′
eff(r0)/m. Thus, we must compute V ′′
eff(r0). We straightforwardly have
V ′′
eff(r) = r−4

3L2
m
+ k(k − 1)βrk+2

,
so V ′′
eff(r0) = 1
r4
0
L2
m (k + 2), so
ωr =
L
mr2
0
√
k + 2.
(c) This is true because, if the ratio of periods is rational, there is a “least common multiple” at
which point an integer number of both cycles (both radial oscillation and the overall orbit)
have completed. At this point we return to the original starting point, so the orbit is closed.
To find the answer, note that it is equivalent for ωr/ωθ to be rational, where ωθ = L/mr2
0 is
the angular velocity of a circular orbit of radius r0. Then ωr/ωθ =
√
k + 2, and since k is an
integer, the ratio is rational when k + 2 is a perfect square, so
k = −1,2,7,14,....
Remark: Bertrand’s Theorem
In problem 4, you showed that for a certain group of potentials, all bound orbits that
are nearly circular are approximately closed. Bertrand’s theorem states that the only
central potentials for which all bound orbits are exactly closed are V (r) ∝ 1/r and V (r) ∝ r2.
The idea of the proof is as follows. First, for a general potential V (r), we can compute the
ratio of periods of a small radial oscillation and the underlying circular orbit and demand it
be rational, just like in part (c) above. However, since this ratio changes continuously as the
6
Kevin Zhou Physics Olympiad Handouts
orbit parameters are varied, it must be a constant if it is to always be rational. Using this
condition, you can show that V (r) must be a power law, which we had to assume above.
You found in part (c) that infinitely many power laws give closed nearly circular orbits. To
rule out the other ones, we need to expand to higher orders, i.e. account for the fact that the
effective potential is not perfectly simple harmonic. A detailed derivation can be found here.
