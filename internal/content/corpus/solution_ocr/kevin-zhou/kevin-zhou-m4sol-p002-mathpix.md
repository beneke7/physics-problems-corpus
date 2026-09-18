---
id: solution-ocr-kevin-zhou-m4sol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 2. Some questions about small oscillations with the buoyant force.

(a) A cubical glacier of side length $L$ has density $\rho _ { i }$ and floats in water with density $\rho _ { w }$. Find the angular frequency of small oscillations, assuming that a face of the glacier always remains parallel to the water surface, and that the force of the water on the glacier is always given by the hydrostatic buoyant force.
(b) A ball of radius $R$ floats in water with half its volume submerged. Find the angular frequency of small oscillations, making the same assumption.
(c) There are important effects that both of the previous parts neglect. What are some of them? Is the true oscillation frequency higher or lower than the one found here?

Solution. (a) Let $V = x L ^ { 2 }$ be the submerged volume, and let $V _ { 0 } = L ^ { 3 }$. We then have

$$
F = - \rho _ { w } V g + \rho _ { i } V _ { 0 } g = - \rho _ { w } L ^ { 2 } g x + \text { const. }
$$

Thus,

$$
\omega = \sqrt { \frac { \rho _ { w } L ^ { 2 } g } { \rho _ { i } L ^ { 3 } } } = \sqrt { \frac { \rho _ { w } } { \rho _ { i } } \frac { g } { L } } .
$$

(b) The density of the ball is half that of water, so its mass is $( 2 \pi / 3 ) \rho _ { w } R ^ { 3 }$. The "spring constant" is $\pi R ^ { 2 } \rho _ { w } g$, so
$$
\omega = \sqrt { \frac { \pi R ^ { 2 } \rho _ { w } g } { ( 2 \pi / 3 ) \rho _ { w } R ^ { 3 } } } = \sqrt { \frac { 3 g } { 2 R } } .
$$
(c) The most serious omission is that we have neglected the motion of the water. This clearly should add extra inertia, because the water has to move around to accommodate the moving glacier or ball, and it should be a significant change since the water is more dense than these objects. This "added mass" effect leads to a decrease in the oscillation frequency, and we discuss it further in M7.
In fact, the situation is even worse. As we'll also see in M7, viscosity between the object and water leads to a boundary layer of water carried along with the object. But since this boundary layer builds up over time, its thickness depends on the entire history of the object's motion! This is called the Basset force, and it turns Newton's second law into an "integro-differential equation", one where the second derivative of the position depends on an integral over all the past positions. It has the effect of damping the oscillations (which also slightly decreases their frequency). In general, nothing in fluid dynamics is easy.

[3] Problem 3. USAPhO 1998, problem A2. To avoid some confusion, skip part (a), since there actually isn't a nice closed-form expression for it.
[3] Problem 4. USAPhO 2009, problem A3.
[3] Problem 5. USAPhO 2010, problem B1.


Example 2
Find the acceleration of an Atwood's machine with masses $m$ and $M$ and a massless pulley and string.

Solution
The "high school" way to do this is to let $a _ { 1 }$ and $a _ { 2 }$ be the vertical accelerations of the masses, let $T$ be the unknown tension in the string, solve for $T$ by setting $a _ { 1 }$ and $a _ { 2 }$ to have equal magnitudes, then plug $T$ back in to find the common acceleration.

But this is unnecessarily complicated, because the system only has one degree of freedom. The fixed length of the string gives us a constraint: if we know where one of the masses is, then we automatically know where the other is. So there should be a way to describe the system without ever introducing a second variable. But there isn't a single Cartesian coordinate that accomplishes this, since the masses accelerate in opposite directions.

The key is to apply energy conservation to a "generalized coordinate" $q$. Specifically, let $q$ describe the distance that the string has moved along itself, so that $q = 0$ initially, and when $q = q _ { 0 }$, the mass $M$ has moved down by $q _ { 0 }$ and the mass $m$ has moved up by $q _ { 0 }$. The kinetic and potential energies of the system are simply

$$
K = \frac { 1 } { 2 } ( m + M ) \dot { q } ^ { 2 } , \quad V = q g ( m - M ) .
$$

To find the acceleration $\ddot { q }$, we differentiate energy conservation with respect to time,

$$
0 = \frac { d ( K + V ) } { d t } = ( m + M ) \ddot { q } \dot { q } + \dot { q } g ( m - M ) .
$$

Solving gives the familiar result

$$
\ddot { q } = \frac { M - m } { M + m } g .
$$

Intuitively, we could say that from the standpoint of this generalized coordinate, the "total force" is $( M - m ) g$, and the "total inertia" is $M + m$.

This will be a very useful concept, so let's think about why it works. The first reason is that forces and accelerations have directions but energy doesn't, so thinking about energy lets us collectively treat objects moving in different directions. The second reason is that in the force-based derivation, we needed to define two variables because we had to eliminate the unknown tension $T$. But in the energy-based derivation, the tension never shows up because the inextensible string doesn't do any work on the blocks. More generally, whenever a system has rigid constraints like this, we can work with a reduced set of generalized coordinates which automatically takes the constraints into account. The only cost is that, if you wanted to know the values of the constraint forces, you'd have to do an extra step at the end.


Idea 2
The idea shown in example 2 is very general. Consider any system whose configuration can be described by a single "generalized coordinate" $q$. If its energy can be decomposed into a kinetic energy quadratic in $\dot { q }$, and a potential energy that depends only on $q$,

$$
K = \frac { 1 } { 2 } m _ { \mathrm { eff } } \dot { q } ^ { 2 } , \quad V = V ( q )
$$

then the energy conservation equation $d ( K + V ) / d t = 0$ can be used to find the generalized acceleration $\ddot { q }$. Explicitly, the chain rule tells us that

$$
m _ { \mathrm { eff } } \ddot { q } = - \frac { \partial V } { \partial q } .
$$

For example, we recover the usual Newton's second law for $q = x$, but $q$ can also be something completely different. We call $m _ { \text {eff } } \dot { q }$ a "generalized momentum", and $- \partial V / \partial q$ a "generalized force". The above equation also contains the principle of virtual work from M2, as it tells us that static equilibrium can occur when $\partial V / \partial q = 0$, i.e. when the potential energy doesn't change under a small motion.

Remark
The result above is a special case of the Euler-Lagrange equation in Lagrangian mechanics, which states that if a system is described by a Lagrangian $L$, then

$$
\frac { d } { d t } \frac { \partial L } { \partial \dot { q } } = \frac { \partial L } { \partial q } .
$$

In simple cases, one has $L = K ( \dot { q } ) - V ( q )$, where typically $K$ is quadratic in $\dot { q }$, in which case we recover the previous result. But more generally, it might not be possible to meaningfully decompose $L$ into a "kinetic" and "potential" piece at all! We won't use this more general form below. While it is more powerful, it is also more complicated, and if you find yourself using it for an Olympiad problem, there's probably an easier way.
