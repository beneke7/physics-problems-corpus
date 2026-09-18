---
id: solution-ocr-kevin-zhou-r2sol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r2-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 1. A few useful facts about energy and momentum, for future reference.

(a) Recalling the definition of the four-velocity from R1, show that
$$
( E / c , \mathbf { p } ) = m u ^ { \mu }
$$
where $u ^ { \mu }$ is the four-velocity. Setting $c = 1$ below, this shows $p ^ { \mu } = ( E , \mathbf { p } )$ is a four-vector.
(b) Let's check the Lorentz transformation properties of $p ^ { \mu }$ explicitly. Let $S ^ { \prime }$ be the frame moving to the right with velocity $v \hat { \mathbf { x } }$ with respect to the frame $S$. If a particle has velocity $u \hat { \mathbf { x } }$ in frame $S$, write $E ^ { \prime }$ and $p ^ { \prime }$ in frame $S ^ { \prime }$ in terms of $E$ and $p$.
(c) Show that the norm of the four-momentum is
$$
p ^ { \mu } p _ { \mu } = E ^ { 2 } - | \mathbf { p } | ^ { 2 } = m ^ { 2 } .
$$
This is a very useful result that can simplify the solutions to many problems below, especially ones that simply ask for a final mass $m$. In this case one can often compute a single fourmomentum and find its norm to get the answer.
(d) The expressions in idea 1 for $E$ and $\mathbf { p }$ don't work for photons, since $\gamma$ is infinite and $m$ is zero. Instead, show that for a photon we have $p ^ { \mu } = \hbar k ^ { \mu }$.
(e) A system's center of mass frame is the one where its momentum is zero. For a system with total energy $E$ and momentum $\mathbf { p }$, show that the center of mass has velocity $\mathbf { v } = \mathbf { p } / E$.
(f) In Newtonian mechanics, the kinetic energy $K$ of an object with fixed mass $m$ satisfies $d K = \mathbf { v } \cdot d \mathbf { p }$. Show that this also holds in relativity, assuming the rest mass $m$ is fixed.
(g) As we'll discuss in more detail below, the force three-vector is defined as $\mathbf { F } = d \mathbf { p } / d t$ in relativistic mechanics. Show that $d K = \mathbf { F } \cdot d \mathbf { x }$, continuing to assume that $m$ is fixed.

Solution. (a) We saw in R1 that $u ^ { \mu } = ( \gamma c , \gamma \mathbf { v } )$. Multiplying by $m$ gives the desired result

$$
m u ^ { \mu } = ( \gamma m c , \gamma m \mathbf { v } ) = ( E / c , \mathbf { p } ) .
$$

(b) In the frame $S ^ { \prime }$, the particle has speed $( u - v ) / ( 1 - u v )$, corresponding to Lorentz factor
$$
\gamma ^ { \prime } = \left( 1 - \frac { ( u - v ) ^ { 2 } } { ( 1 - u v ) ^ { 2 } } \right) ^ { - 1 / 2 } = ( 1 - u v ) \gamma _ { u } \gamma _ { v } .
$$
Thus, the boosted values of $E$ and $p$ are
$$
E ^ { \prime } = \gamma ^ { \prime } m = \gamma _ { v } ( E - v p ) , \quad p ^ { \prime } = \gamma ^ { \prime } m ( u - v ) / ( 1 - u v ) = \gamma _ { v } ( p - v E ) .
$$
These are exactly the expected Lorentz transformation properties.
(c) We compute the norm $E ^ { 2 } - p ^ { 2 } = \gamma ^ { 2 } m ^ { 2 } - \gamma ^ { 2 } m ^ { 2 } v ^ { 2 } = \gamma ^ { 2 } m ^ { 2 } \left( 1 - v ^ { 2 } \right) = m ^ { 2 }$.
(d) This follows directly from the de Broglie relations $E = \hbar \omega$ and $\mathbf { p } = \hbar \mathbf { k }$.
(e) In this frame, $p ^ { \prime } = 0$. Then using the result of part (b), we have $p - v E = 0$ where $v$ is the velocity of the center of mass in the original frame. Therefore, $\mathbf { v } = \mathbf { p } / E$.
(f) Starting with $E ^ { 2 } = p ^ { 2 } + m ^ { 2 }$ and taking the differential of both sides,
$$
2 E d E = 2 \mathbf { p } \cdot d \mathbf { p } .
$$
Solving for $d E$, we have
$$
d E = \frac { \mathbf { p } } { E } \cdot d \mathbf { p } = \mathbf { v } \cdot d \mathbf { p }
$$
where we used part (e). Since $K$ and $E$ are the same up to a constant, we have $d K = \mathbf { v } \cdot d \mathbf { p }$.
(g) We have $\mathbf { F } \cdot d \mathbf { x } = ( \mathbf { F } d t ) \cdot ( d \mathbf { x } / d t ) = \mathbf { v } \cdot d \mathbf { p } = d K$ using part (f).

Remark
The result of part (e) is equivalent to saying that momentum p is always associated with the motion of energy $E \mathbf { v }$. This is a very general statement, which also holds at the differential level: momentum density is equal to energy flux density. One example of this was given in E7, where it was noted that the electromagnetic momentum density p was equal to the Poynting vector $\mathbf { S }$, in units where $c = 1$.

Idea 2
In relativistic dynamics problems, it is almost always better to work with energy and momentum than velocity; one typically shouldn't even mention velocities unless the problem asks for or gives them.

We'll start with some very simple problems to warm up, setting $c = 1$ throughout.


Example 1: KK 13.5
A particle of mass $m$ and speed $v$ collides and sticks to a stationary particle of mass $M$. Find the final speed of the composite particle.

Solution
The total four momentum is $( E , p ) = ( \gamma m + M , \gamma m v )$, so the final speed is

$$
v _ { f } = \frac { p } { E } = \frac { \gamma m v } { \gamma m + M } = \frac { v } { 1 + ( M / m ) \sqrt { 1 - v ^ { 2 } } } .
$$

Example 2: Morin 12.2
Two photons of energy $E$ collide at an angle $\theta$ and create a particle of mass $M$. What is $M$ ?

Solution
The total four-momentum is

$$
p ^ { \mu } = ( 2 E , E ( 1 + \cos \theta ) , E \sin \theta ) .
$$

The mass is just the norm of the four-momentum, so

$$
M = \sqrt { 4 E ^ { 2 } - E ^ { 2 } ( 1 + \cos \theta ) ^ { 2 } - E ^ { 2 } \sin ^ { 2 } \theta } = E \sqrt { 2 - 2 \cos \theta } = 2 E \sin ( \theta / 2 ) .
$$

[1] Problem 2 (Morin 12.4). A stationary mass $M _ { A }$ decays into masses $M _ { B }$ and $M _ { C }$. What are the energies of these two masses?
Solution. In the lab frame, the momenta of the masses $B$ and $C$ adds to zero, so $p _ { B } ^ { 2 } = p _ { C } ^ { 2 }$, so
$$
E _ { B } ^ { 2 } - M _ { B } ^ { 2 } = E _ { C } ^ { 2 } - M _ { C } ^ { 2 } .
$$
We also know that $E _ { B } + E _ { C } = M _ { A }$, so simplifying gives
$$
E _ { B } - E _ { C } = \frac { M _ { B } ^ { 2 } - M _ { C } ^ { 2 } } { M _ { A } } .
$$
Therefore, we conclude
$$
E _ { B } = \frac { M _ { A } ^ { 2 } + M _ { B } ^ { 2 } - M _ { C } ^ { 2 } } { 2 M _ { A } } , \quad E _ { C } = \frac { M _ { A } ^ { 2 } - M _ { B } ^ { 2 } + M _ { C } ^ { 2 } } { 2 M _ { A } } .
$$
