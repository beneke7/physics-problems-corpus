---
id: solution-ocr-kevin-zhou-r2sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r2-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 7

A circular pendulum consists of a mass $m$ attached to a string of length $L$, with the other end fixed. Suppose the mass rotates in a small circle of radius $r \ll L$, with a nonrelativistic velocity in the lab frame. Find the angular frequency of the oscillations in the lab frame, and in a frame where the entire setup moves vertically with a relativistic speed $v$.

## Solution

In the lab frame, this is a standard rotational mechanics problem. By the small angle approximation, the horizontal component of the three-force is $F _ { \perp } = m g r / L$. This is equal to

$$
F _ { \perp } = m a _ { \perp } = m \omega ^ { 2 } r
$$

from which we immediately conclude $\omega = \sqrt { g / L }$. We can use the results of problem 18 to find the answer in the other frame. The two effects are that the transverse force is redshifted, and the force's relation with acceleration is different,

$$
F _ { \perp } = \frac { m g r } { \gamma L } , \quad F _ { \perp } = \gamma m a _ { \perp } = \gamma m \omega ^ { 2 } r .
$$

Combining these results, we find

$$
\omega = \frac { 1 } { \gamma } \sqrt { \frac { g } { L } } .
$$

Of course, $\gamma$ is just the usual time dilation factor. We knew this had to be the answer, because time dilation follows directly from the postulates of relativity, but now we can explicitly show this is the right answer in this specific example. (With similar reasoning, you can show that a mass-spring system oscillates slower, too.)

## Remark

It's important not to misunderstand the meaning of the above example. Like many old physicists, Oleg Jefimenko decided one day that relativity had to be completely wrong. His argument was along the lines of the previous example: he showed that length contraction and time dilation could be derived dynamically in some simple cases, without the need to switch frames. Therefore, they can't be "real".

This argument doesn't make sense. It's like saying energy can't be real because you can solve many mechanics problems with just $F = m a$, without needing to invoke energy conservation.


In reality they're both wonderful tools with complementary uses.
Furthermore, it turns out to be extremely difficult to derive the core results of relativistic dynamics (such as the "transverse" and "longitudinal" masses, already measured by the turn of the $20 { } ^ { \text {th } }$ century) without using relativistic assumptions. In the early 1900s, many physicists tried to explain the dynamics of the electron solely in terms of its electromagnetic fields. Since the field energy and field momentum of a moving point charge are infinite, it was necessary to take a model of the electron with finite size, but there were many possibilities, leading to many different expressions for the transverse mass, as well as persistent issues like the 4/3 problem mentioned in E7.

Relativity circumvents all of these issues. If you accept the postulates of relativity, you don't need to care whether the electron is shaped like a sphere, an ellipsoid, a torus, or a dumbbell: as long as its dynamics obey Lorentz symmetry, its four-momentum is a four-vector, and the usual results follow. And that's just as well, because with the advent of quantum mechanics, we learned that the electron is not like any of these classical models. But the relativistic result still holds, because our quantum theories obey the postulates of relativity too. This flexibility comes about because, like thermodynamics, relativity isn't so much a physical theory, as it is a framework within which many theories can be formulated.

[3] Problem 19 (Morin 12.8). Consider a dumbbell made of two equal masses, $m$. The dumbbell spins around, with its center pivoted at the end of a stick.
![](../../../figures/solution-ocr/9f97a7dadfc78f376e5c3198.jpg)
If the speed of the masses is $v$, then the energy of the system is $2 \gamma m$. Treated as a whole, the system is at rest. Therefore, the mass of the system must be $2 \gamma m$. (Imagine enclosing it in a box, so that you can't see what's going on inside.) Convince yourself that the system does indeed behave like a mass of $M = 2 \gamma m$, by pushing on the stick (when the dumbbell is in the "transverse" position shown in the figure) and showing that $F = d p / d t = M a$.
Solution. Consider speeding up the system by $d v$ to the left. The relativistic velocity addition formula for $u$ plus $d v$ becomes
$$
\frac { u + d v } { 1 + \frac { u d v } { c ^ { 2 } } } = ( u + d v ) \left( 1 - u d v / c ^ { 2 } \right) = u + d v \left( 1 - u ^ { 2 } / c ^ { 2 } \right)
$$
Let $\gamma _ { u }$ be $1 / \sqrt { 1 - u ^ { 2 } }$. Let $\gamma _ { u } ^ { \prime }$ be the gamma factor for $u + d v \left( 1 - u ^ { 2 } \right)$. One can easily check that $\gamma _ { u } ^ { \prime } = \gamma ( 1 + u d v )$. Thus, the change in momentum due to the extra $d v$ is
$$
\gamma m ( 1 + u d v ) \left( u + d v \left( 1 - u ^ { 2 } \right) \right) - \gamma m u = \gamma m d v ,
$$
which is surprisingly what one would naively expect. Thus, the total change in momentum of the system is simply $d p = 2 \gamma m d v$, so $d p / d t = M d v / d t$, as desired.

Idea 6
The Lorentz force is a three-force as defined in problem 18. That is, we have

$$
\mathbf { F } = q ( \mathbf { E } + \mathbf { v } \times \mathbf { B } ) = \frac { d \mathbf { p } } { d t }
$$

and the force keeps the invariant mass fixed.
