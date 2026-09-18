---
id: solution-ocr-kevin-zhou-t1sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 16. Some basic computations for ideal gases.

(a) For an ideal gas in a box, show that the probability distribution of speeds obeys
$$
p ( v ) \propto v ^ { 2 } e ^ { - m v ^ { 2 } / 2 k _ { B } T }
$$
at any point in the box, regardless of the shape of the box.
(b) Compute the most probable speed, i.e. the location of the peak of this probability distribution.
(c) Show that the average kinetic energy is $\left\langle m v ^ { 2 } / 2 \right\rangle = 3 k _ { B } T / 2$. This is a special case of the equipartition theorem, shown below. (Hint: you will have to do a somewhat tricky integral. See the example below and the examples in P1 for guidance.)

Solution. (a) Note that the probability that a particle has velocity $\left( v _ { x } , v _ { y } , v _ { z } \right)$ is given by $f \left( v _ { x } , v _ { y } , v _ { z } \right) d v _ { x } d v _ { y } d v _ { z }$ where $f \left( v _ { x } , v _ { y } , v _ { z } \right) \propto e ^ { - \frac { m } { 2 k _ { B } T } \left( v _ { x } ^ { 2 } + v _ { y } ^ { 2 } + v _ { z } ^ { 2 } \right) }$. Then, we see that

$$
p ( v ) d v \propto \left( 4 \pi v ^ { 2 } d v \right) e ^ { - \frac { m v ^ { 2 } } { 2 k _ { B } T } } ,
$$

where the factor of $4 \pi v ^ { 2 }$ comes from the surface area of a sphere. Thus, $p ( v ) \propto v ^ { 2 } e ^ { - m v ^ { 2 } / 2 k _ { B } T }$.

(b) We set $p ^ { \prime } ( v ) = 0$, so
$$
v ^ { 2 } \left( - m v / k _ { B } T \right) e ^ { - m v ^ { 2 } / 2 k _ { B } T } = - 2 v e ^ { - m v ^ { 2 } / 2 k _ { B } T } \Longrightarrow v = \sqrt { \frac { 2 k _ { B } T } { m } } .
$$
(c) Using the result of part (a),
$$
\left\langle m v ^ { 2 } / 2 \right\rangle = \frac { \int _ { 0 } ^ { \infty } \left( \frac { 1 } { 2 } m v ^ { 2 } \right) v ^ { 2 } e ^ { - m v ^ { 2 } / 2 k _ { B } T } d v } { \int _ { 0 } ^ { \infty } v ^ { 2 } e ^ { - m v ^ { 2 } / 2 k _ { B } T } d v } = \frac { k _ { B } T } { 2 } \frac { \int _ { 0 } ^ { \infty } x ^ { 4 } e ^ { - x ^ { 2 } / 2 } d x } { \int _ { 0 } ^ { \infty } x ^ { 2 } e ^ { - x ^ { 2 } / 2 } d x }
$$
where we nondimensionalized the integral. To evaluate it, note that by integration by parts,
$$
\int _ { 0 } ^ { \infty } \left( x ^ { 3 } \right) \left( x e ^ { - x ^ { 2 } / 2 } d x \right) = 3 \int _ { 0 } ^ { \infty } x ^ { 2 } e ^ { - x ^ { 2 } / 2 } d x
$$
Then the ratio of integrals is just 3 , giving
$$
\left\langle m v ^ { 2 } / 2 \right\rangle = \frac { 3 } { 2 } k _ { B } T
$$
as desired.

Remark: Deriving the Maxwell Velocity Distribution
Statistical mechanics implies that the velocity distribution in an ideal gas is

$$
p ( \mathbf { v } ) \propto e ^ { - m v ^ { 2 } / 2 k _ { B } T }
$$

which is a three-dimensional Gaussian. This result was first derived by Maxwell, long before statistical mechanics was understood, using an ingenious argument.


Suppose the ideal gas is inside a rectangular box, so that collisions with its left and right sides determine $v _ { x }$, the front and back sides determine $v _ { y }$, and the top and bottom sides determine $v _ { z }$. The distributions of velocities in each direction should therefore be independent, and identical by rotational symmetry, so that we can write

$$
p ( \mathbf { v } ) = f \left( v _ { x } \right) f \left( v _ { y } \right) f \left( v _ { z } \right)
$$

for some function $f$. Moreover, by rotational symmetry, $p ( \mathbf { v } )$ can only depend on $v ^ { 2 }$. Taking the logarithm of both sides and defining $g = \log f$, we have

$$
\log p = g \left( v _ { x } \right) + g \left( v _ { y } \right) + g \left( v _ { z } \right)
$$

and the right-hand side only depends on $v ^ { 2 }$. This is only possible if $g ( x ) = - \alpha x ^ { 2 }$ for a constant $\alpha$, which yields $p ( \mathbf { v } ) \propto e ^ { - \alpha v ^ { 2 } }$. (This remarkable property of Gaussian functions is connected to their appearance in the central limit theorem.) Finally, the value of $\alpha$ can be determined, e.g. by demanding the pressure match the ideal gas law (see example 7).

But this trick is limited. When relativistic effects are important, the $v _ { i }$ are not independent - if $v _ { x }$ is near $c$, then $v _ { y }$ and $v _ { z }$ must be small. (Concretely, if a collision with a wall in the $y z$ plane applies a relativistic impulse $\Delta p _ { x }$, then it also changes $v _ { y }$ and $v _ { z }$ since $\mathbf { p } = \gamma m \mathbf { v }$.) The $v _ { i }$ also aren't independent if quantum statistics matters. For example, if the gas particles are fermions, as discussed in X1, then no two can be in the same state, so some final v's are forbidden. So we'll now present a different, more modern derivation, which generalizes better.

The idea is that in thermodynamic equilibrium, time reversal symmetry implies every reaction is in "detailed balance". Specifically, suppose that when two gas molecules collide elastically, with velocities $\left( \mathbf { v } _ { 1 } , \mathbf { v } _ { 2 } \right)$, they exit with velocities $\left( \mathbf { v } _ { 1 } ^ { \prime } , \mathbf { v } _ { 2 } ^ { \prime } \right)$. Then the rate at which this happens must be equal to the rate at which gas molecules with velocities $\left( \mathbf { v } _ { 1 } ^ { \prime } , \mathbf { v } _ { 2 } ^ { \prime } \right)$ collide, which causes them to exit with velocities $\left( \mathbf { v } _ { 1 } , \mathbf { v } _ { 2 } \right)$. (Otherwise, you could distinguish a video of the molecules' dynamics from the same video played in reverse.) Therefore,

$$
p \left( \mathbf { v } _ { 1 } \right) p \left( \mathbf { v } _ { 2 } \right) \left| \mathbf { v } _ { 1 } - \mathbf { v } _ { 2 } \right| = p \left( \mathbf { v } _ { 1 } ^ { \prime } \right) p \left( \mathbf { v } _ { 2 } ^ { \prime } \right) \left| \mathbf { v } _ { 1 } ^ { \prime } - \mathbf { v } _ { 2 } ^ { \prime } \right|
$$

where the relative velocity factor is present because a larger relative velocity gives more opportunities for collision. However, for elastic collisions, the initial and final relative velocities are the same, so this factor just cancels out.

Now, by rotational symmetry we have $p ( \mathbf { v } ) = f \left( v ^ { 2 } \right)$ for some function $f$, so

$$
f \left( v _ { 1 } ^ { 2 } \right) f \left( v _ { 2 } ^ { 2 } \right) = f \left( v _ { 1 } ^ { \prime 2 } \right) f \left( v _ { 2 } ^ { \prime 2 } \right)
$$

Furthermore, by energy conservation we have $v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } = v _ { 1 } ^ { \prime 2 } + v _ { 2 } ^ { \prime 2 }$. Then the above equation can only be satisfied if $f$ is an exponential, $f ( x ) \propto e ^ { - \alpha x }$, which again gives $p ( \mathbf { v } ) \propto e ^ { - \alpha v ^ { 2 } }$.


Idea 6: Equipartition Theorem
Suppose some degree of freedom in phase space contributes to the energy by a power law,

$$
E \propto p ^ { n } \text { or } E \propto x ^ { n } .
$$

Then in thermal equilibrium, there is an average energy of $k _ { B } T / n$ in this degree of freedom. The proof of this is just a straightforward generalization of the reasoning in problem 16(c). Note that the proof of the equipartition theorem is entirely classical, i.e. it holds when a system is adequately described by classical mechanics. It does a good job of describing the heat capacities of simple gases near room temperature, as you can see here.

Here are a few important examples of the equipartition theorem.

- A mass on a spring in one dimension has
$$
E = \frac { p ^ { 2 } } { 2 m } + \frac { k x ^ { 2 } } { 2 } .
$$
This involves two degrees of freedom in phase space, each with $n = 2$, so the average energy is $2 \left( k _ { B } T / 2 \right) = k _ { B } T$.
- In problem 7 you considered a system with a linear potential energy, $E ( h ) = m g h$. This is a degree of freedom with $n = 1$, and accordingly, the average potential energy of each molecule is $k _ { B } T$.
- An atom in a solid can be thought of as attached to its neighbors by springs. Since the atom is in three dimensions, this yields three copies of the first example, and hence an average thermal energy of $3 k _ { B } T$. This implies that the specific heat per atom in a solid is $3 k _ { B }$ (or equivalently $3 R$ per mole), which is called the Dulong-Petit law.

Incidentally, because systems in thermal equilibrium are also in long-term mechanical equilibrium, the virial theorem from M6 applies, and tells us the ratio between the average kinetic and potential energy; of course, it matches the result of the equipartition theorem. You'll investigate some more key examples in the problems below.
