---
id: solution-ocr-kevin-zhou-m6sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 6. In this problem we'll verify some of the basic facts stated above.


(a) Prove the statement of idea 5 for the case of elliptical orbits.
(b) Using this result, prove the vis-viva equation
$$
v ^ { 2 } = G M \left( \frac { 2 } { r } - \frac { 1 } { a } \right)
$$
which is often used in rocketry.
(c) Prove Kepler's third law.

Solution. (a) Let the closest approach distance be $r _ { 1 }$, farthest be $r _ { 2 }$. For simplicity, let's define the specific angular momentum $J = L / m$ and specific energy $\epsilon = 2 E / m$. Then angular momentum conservation and energy conservation give

$$
J = r _ { 1 } v _ { 1 } = r _ { 2 } v _ { 2 } , \quad \epsilon = v _ { 1 } ^ { 2 } - \frac { 2 G M } { r _ { 1 } } = v _ { 2 } ^ { 2 } - \frac { 2 G M } { r _ { 2 } } .
$$

From these facts, we see that the equation

$$
\epsilon = \frac { J ^ { 2 } } { r ^ { 2 } } - \frac { 2 G M } { r }
$$

is satisfied for $r = r _ { 1 }$ and $r = r _ { 2 }$. This equation is equivalent to the quadratic $\epsilon r ^ { 2 } + 2 G M r -$ $J ^ { 2 } = 0$, and applying Vieta's formulas gives $r _ { 1 } + r _ { 2 } = - 2 G M / \epsilon = - G M m / E$. Using $r _ { 1 } + r _ { 2 } = 2 a$ and rearranging gives the result.

(b) This follows immediately from rearranging the statement of energy conservation,
$$
- \frac { G M m } { 2 a } = \frac { 1 } { 2 } m v ^ { 2 } - \frac { G M m } { r } .
$$
(c) This follows from the geometrical facts stated in idea 6. First, the area swept out per unit time is $L / 2 m$, so $( L / 2 m ) T = \pi a b$.
To show that $T$ only depends on $a$, we need to eliminate $L$ and $b$. We know that $a = \left( r _ { 1 } + r _ { 2 } \right) / 2$ and $a = \sqrt { b ^ { 2 } + d ^ { 2 } }$, where $d = \left( r _ { 1 } - r _ { 2 } \right) / 2$. This implies that $b = \sqrt { r _ { 1 } r _ { 2 } }$, and applying Vieta's formulas to the quadratic in part (a) gives
$$
b = \sqrt { \frac { - J ^ { 2 } } { \epsilon } } = \frac { L / m } { \sqrt { - 2 E / m } } .
$$
Plugging this into our initial result, we have
$$
\frac { L } { 2 m } T = \pi a \frac { L / m } { \sqrt { G M / a } } ,
$$
which implies $T ^ { 2 } = 4 \pi ^ { 2 } a ^ { 3 } / G M \propto a ^ { 3 }$, as desired.

Remark: Scaling Symmetry
There's a variant of Kepler's third law for unbound orbits. Suppose a planet is right next to the Sun at time $t = 0$, but has a large initial radial velocity, so that it has zero total


energy. Then its distance to the Sun evolves as $r ( t ) \propto t ^ { 2 / 3 }$, like how $a \propto T ^ { 2 / 3 }$ for bound orbits.
Both of these results come from the scaling symmetry of inverse square force laws: any solution to Newton's second law remains a solution if you multiply all distances by 4 and all times by 8. The widest-reaching application of this idea is to the whole universe itself. If it contains only matter, which started at the origin at time $t = 0$, and it expands under gravity with zero total energy, then its "scale factor" evolves as $a ( t ) \propto t ^ { 2 / 3 }$. This was a good description of our universe for most of its lifetime, but in the past few billion years the effects of dark energy took over, accelerating the expansion. We'll revisit cosmology in X3.
[3] Problem 7. [A] A simple derivation of Kepler's first law is given in section 7.4 of Morin, and centers around solving a differential equation for $1 / r ( \theta )$. (You can motivate this by noting that the polar form of an ellipse is quite simple, $1 / r = ( 1 + e \cos \theta ) / p$, where $p$ is the semilatus rectum and $e$ is the eccentricity.) However, in this problem, we'll consider an alternative approach that uses a subtle conserved quantity, which is also important in more advanced physics.
    (a) Show that the Laplace-Runge-Lenz vector
$$
\mathbf { A } = \mathbf { p } \times \mathbf { L } - G M m ^ { 2 } \hat { \mathbf { r } }
$$
is conserved, where the star is at the origin and $\hat { \mathbf { r } }$ is the radial unit vector at the planet's position r. (Hint: use the fact that $\mathbf { L } = m r ^ { 2 } \boldsymbol { \omega }$ to evaluate the time derivative.)
    (b) We have $\mathbf { A } \cdot \mathbf { r } = A r \cos \theta$, where $\theta$ is the angle between A and r. Evaluate A ⋅ r using the definition of A, and the identity $\mathbf { a } \cdot ( \mathbf { b } \times \mathbf { c } ) = ( \mathbf { a } \times \mathbf { b } ) \cdot \mathbf { c }$, in order to derive an expression for $r$ in terms of $\theta$ and constants. Then use this to show that the orbit is a conic section.
    (c) As another simple application of the conservation of A, show that the set of velocities during an elliptical orbit traces out a circle in velocity space.

The ideas discussed in this problem are almost never required to solve Olympiad problems, but they can dramatically simplify very tough orbital mechanics problems. For two examples, see Physics Cup 2021, problem 2 and Physics Cup 2024, problem 4.

Solution. (a) Since the angular momentum is conserved,

$$
\dot { \mathbf { A } } = \mathbf { F } \times \mathbf { L } - G M m ^ { 2 } \frac { d \hat { \mathbf { r } } } { d t } = \frac { G M m } { r ^ { 2 } } \left( \omega m r ^ { 2 } \right) ( - \hat { \mathbf { r } } \times \hat { \mathbf { z } } ) - G M m ^ { 2 } ( \omega \hat { \mathbf { z } } \times \hat { \mathbf { r } } ) = 0
$$

as desired.


(b) We have
$$
\mathbf { A } \cdot \mathbf { r } = \mathbf { r } \cdot ( \mathbf { p } \times \mathbf { L } ) - G M m ^ { 2 } r = ( \mathbf { r } \times \mathbf { p } ) \cdot \mathbf { L } - G M m ^ { 2 } r = L ^ { 2 } - G M m ^ { 2 } r
$$
which tells us that
$$
A r \cos \theta = L ^ { 2 } - G M m ^ { 2 } r .
$$
But now this can be solved for $r$ to give the trajectory,
$$
r = \frac { L ^ { 2 } } { G M m ^ { 2 } + A \cos \theta } .
$$

This is precisely the form of a conic section. Specifically, the general form is

$$
r = \frac { p } { 1 + e \cos \theta }
$$

and we can identify

$$
p = \frac { L ^ { 2 } } { G M m ^ { 2 } } , \quad e = \frac { A } { G M m ^ { 2 } } .
$$

As a check, note that $A$ indeed vanishes for circular motion, where

$$
A = ( m v ) ( m v r ) - G M m ^ { 2 } = m r ^ { 2 } \left( \frac { m v ^ { 2 } } { r } - \frac { G M m } { r ^ { 2 } } \right) = 0 .
$$

For an elliptical orbit, A lies in the plane of the orbit and points along the major axis.

(c) Take the cross product of the vector with $\mathbf { L }$, which is always conserved, for
$$
\left( \mathbf { A } + G M m ^ { 2 } \hat { \mathbf { r } } \right) \times \mathbf { L } = ( \mathbf { p } \times \mathbf { L } ) \times \mathbf { L } = - m L ^ { 2 } \mathbf { v }
$$
since $\mathbf { p }$ is always perpendicular to $\mathbf { L }$. Now, during an elliptical orbit, the values of $\mathbf { A } + G M m ^ { 2 } \hat { \mathbf { r } }$ trace out a circle because A is conserved and $\hat { \mathbf { r } }$ has constant magnitude. Since $\mathbf { A }$ and $\hat { \mathbf { r } }$ are perpendicular to $\mathbf { L }$, taking the cross product with $\mathbf { L }$ just scales the circle and rotates it by 90° in the orbit plane, so the set of v lies on a circle.

Now we'll consider some really slick problems that can be solved with pure geometry.
