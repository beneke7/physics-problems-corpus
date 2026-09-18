---
id: solution-ocr-kevin-zhou-t1sol-ex010
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-ex010]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 10
A box of mass $M$ contains an ideal gas consisting of many particles, with total mass $M _ { g }$. Find $\left\langle V _ { x } ^ { 2 } \right\rangle$, the average mean-square velocity of the box along the $x$-axis.

Solution
This problem illustrates how kinetic theory can get very subtle, even when we don't have to keep track of the detailed collision dynamics. First, note that if each gas molecule has mass $m$, then each one has $\left\langle v _ { x } ^ { 2 } \right\rangle = k _ { B } T / m$ by equipartition. Now there are two simple arguments that give different answers.


1. If we apply equipartition of energy to the box itself, we get $\left\langle V _ { x } ^ { 2 } \right\rangle = k _ { B } T / M$.
2. The total momentum of the box and gas together is zero, so
$$
M V _ { x } = - m \sum _ { i = 1 } ^ { N } v _ { x , i } .
$$
On the other hand, by the rules of error propagation introduced in P1,
$$
\left\langle \left( m \sum _ { i = 1 } ^ { N } v _ { x , i } \right) ^ { 2 } \right\rangle = m ^ { 2 } N \frac { k _ { B } T } { m } = k _ { B } T M _ { g }
$$
which implies
$$
\left\langle V _ { x } ^ { 2 } \right\rangle = \frac { M _ { g } } { M ^ { 2 } } k _ { B } T .
$$

What's going on? It actually turns out that both of these arguments are wrong in general, but each one is correct in different limiting cases.

The problem with the first argument is that the derivation of equipartition of energy assumes that each degree of freedom is independent of the others, i.e. it ignores the fact that when the box picks up momentum, the gas must have a compensating opposite total momentum. The problem with the second argument is that it assumes the velocities of the molecules are independent of each other, which is also not quite true.

Note that the energy and momentum of the box are related by $E = P ^ { 2 } / 2 M$. Now, if the box is heavy, $M \gg M _ { g }$, it can store lots of momentum even when it has very little energy, and conversely when it has a decent amount of energy it must have an enormous momentum. The latter implies that the first argument fails. But the second argument works, because the box serves as a "sink" for momentum. For example, the gas molecules could all be moving to the right, and that would be easily compensated by the box moving slightly to the left.

If the box is light, $M \ll M _ { g }$, then it can have lots of energy even having negligible momentum. In this case, the first argument works, because the box doesn't ever have enough momentum to substantially affect the gas's behavior. But the second argument fails, because if the box can't carry much momentum, then the gas molecules' momenta must almost entirely cancel out among themselves by momentum conservation, meaning that they are not independent.

The general solution can be found with a simple trick. The problem with the equipartition argument is essentially that we treat the box velocity $V _ { x }$ as independent of the center of mass velocity of the gas, $\bar { v } _ { x }$. We can therefore switch to the variables

$$
v _ { \mathrm { CM } } = \frac { M _ { g } \bar { v } _ { x } + M V _ { x } } { M _ { g } + M } , \quad v _ { x , \mathrm { rel } } = V _ { x } - \bar { v } _ { x } .
$$

These two new variables are independent, because the momentum conservation constraint just says the former is always equal to zero. Thus, we can safely apply equipartition of energy


to $v _ { \text {rel } }$. Recalling the reduced mass idea from M6, we have

$$
E \supset \frac { 1 } { 2 } \mu v _ { x , \text { rel } } ^ { 2 } , \quad \mu = \frac { M M _ { g } } { M + M _ { g } } .
$$

By equipartition we have

$$
\left\langle v _ { x , \text { rel } } ^ { 2 } \right\rangle = \frac { k _ { B } T } { \mu }
$$

and by momentum conservation we conclude

$$
\left\langle V _ { x } ^ { 2 } \right\rangle = \left( \frac { M _ { g } } { M + M _ { g } } \right) ^ { 2 } \left\langle v _ { x , \text { rel } } ^ { 2 } \right\rangle = \frac { k _ { B } T } { M } \frac { M _ { g } } { M + M _ { g } }
$$

which reduces to the two answers found above in the appropriate limits. This problem turns out to be relevant to astrophysics, where it is a toy model for the dynamics of a supermassive black hole in a galaxy. For a complete analysis which starts from the postulates of kinetic theory, see this paper.

## Remark

Above, we discussed the distinction between "bottom-up" and "top-down" approaches, but there are also bridges between the subjects. For example, suppose you had a large volume of gas, where the mean free path is much smaller than the container's size. Here, the gas can come into equilibrium locally, at which point we may describe its state with a temperature field $T ( \mathbf { x } , t )$, along with other fields, such as pressure, density, and velocity. This leads to the subject of hydrodynamics, which can be derived from kinetic theory. We started on this subject in M7, but there we neglected any thermal properties; we will return to it in T3.

On the other hand, suppose an entire macroscopic system is already in thermal equilibrium. The system is homogeneous, so there's no need for hydrodynamics, but it can still be difficult to infer the macroscopic behavior of the system. For example, if you had water molecules at a given temperature and pressure, it's still hard to calculate what phase they're in! In physics, our best tool for this kind of problem is the renormalization group, which bridges the gap by considering a series of "coarse-graining" operations that gradually zoom out. This is a deep subject, typically reserved for graduate courses.
