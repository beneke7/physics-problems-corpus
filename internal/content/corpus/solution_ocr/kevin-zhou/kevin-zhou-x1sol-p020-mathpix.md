---
id: solution-ocr-kevin-zhou-x1sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 20. A neutron is inside a small cubical box of side length $d$. Ignore gravity.

(a) Estimate the minimum possible pressure on the walls using the uncertainty principle, dropping all numeric factors. In the next two parts, we'll calculate the pressure more carefully.
(b) Calculate the average pressure on the walls by treating the neutron as a classical particle bouncing back and forth, with the same momentum as expected for the ground state in the WKB approximation.
(c) Calculate the average pressure on the walls by finding the energy $E$ of the ground state using the WKB approximation, and the definition of pressure, $P = - \partial E / \partial V$. (This actually gives the exact answer. Of course, by dimensional analysis, taking $P \sim E / V$ would also produce the right answer, up to a constant factor.)

Solution. (a) Ignoring numeric factors, the uncertainty of position in each dimension is $\sim d$, so the uncertainty of each component of momentum is $\Delta p _ { x } \sim \hbar / d$. Consider the pressure on the faces in the $y z$-plane. The time between collisions is $t \sim d / v _ { x } = m d / p _ { x }$, and the impulse is $\sim p _ { x }$. Thus the force is $\sim p _ { x } ^ { 2 } / m d$, giving a pressure $\sim p _ { x } ^ { 2 } / m d ^ { 3 }$. Setting $p _ { x } \sim \Delta p _ { x }$ gives

$$
P _ { \min } \sim \frac { \hbar ^ { 2 } } { m d ^ { 5 } }
$$

which you could also deduce solely from dimensional analysis.

(b) Earlier, we found that $p _ { i } = \frac { \pi } { d } n _ { i } \hbar$. The time between collisions is $t = 2 m d / p _ { i }$ and the impulse is $2 p _ { i }$, giving a pressure of $p _ { i } ^ { 2 } / m d ^ { 3 }$. Note that this is a directional pressure, i.e. if the $p _ { i }$ were different, the pressures on each wall would be different.
The pressure on the wall perpendicular to the $i$ direction is
$$
P _ { i } = \frac { \pi ^ { 2 } \hbar ^ { 2 } } { m d ^ { 5 } } n _ { i } ^ { 2 } .
$$
For the ground state, the $n _ { i }$ are all equal to one, so we have a uniform pressure,
$$
P = \frac { \pi ^ { 2 } \hbar ^ { 2 } } { m d ^ { 5 } }
$$
which is the same order of magnitude as in part (a).

(c) Earlier, we found that for a two-dimensional box,
$$
E = \frac { \pi ^ { 2 } \hbar ^ { 2 } } { 2 m d ^ { 2 } } \left( n _ { x } ^ { 2 } + n _ { y } ^ { 2 } \right) .
$$
This generalizes straightforwardly to a three-dimensional box. In the ground state, $n _ { x } = n _ { y } =$ $n _ { z } = 1$, giving
$$
E = \frac { \pi ^ { 2 } \hbar ^ { 2 } } { 2 m d ^ { 2 } } ( 1 + 1 + 1 ) = \frac { 3 \pi ^ { 2 } } { 2 } \frac { \hbar ^ { 2 } } { m V ^ { 2 / 3 } } .
$$
Carrying out the derivative,
$$
P = \frac { 3 \pi ^ { 2 } } { 2 } \frac { 2 } { 3 } \frac { \hbar ^ { 2 } } { m V ^ { 5 / 3 } } = \frac { \pi ^ { 2 } \hbar ^ { 2 } } { m d ^ { 5 } } .
$$
As expected, this coincides with the answer to (b), since both ultimately originate from the same approximation.

[3] Problem 21. USAPhO 2018, problem B2.
[3] Problem 22. Classically, an electron orbiting a proton with angular frequency $\omega _ { o }$ emits radiation with angular frequency $\omega _ { c } = \omega _ { o }$, as covered in E7. On the other hand, quantum mechanically the energy levels are discrete, and using the de Broglie relation $\Delta E = \hbar \omega$ indicates the angular frequencies of radiation emitted when the electron drops between energy levels are discrete as well. The classical and quantum models thus seem to be radically different, but in the limit $n \rightarrow \infty$ where quantum effects become negligible, the two should match.

(a) Suppose that the electron can orbit the proton in circular orbits with discrete radii $r _ { n }$. For the $n ^ { \text {th } }$ orbit, compute the angular frequency $\omega _ { c }$ of the emitted radiation according to classical mechanics.
(b) Now suppose the electron drops from the $n ^ { \text {th } }$ energy level to the $( n - 1 ) ^ { \text {th } }$ energy level. Compute the angular frequency $\omega _ { q }$ of the emitted radiation according to quantum mechanics, assuming the orbits have radii $r _ { n }$.
(c) In the limit $n \rightarrow \infty$, the results of parts (a) and (b) should coincide. Therefore, by equating these results, infer how $r _ { n }$ depends on $n$, and thus how $L$ depends on $n$. If all goes well, you should recover the result of Bohr quantization.

The reasoning here is exactly how Bohr came up with Bohr quantization in the first place. (The de Broglie relation we had to use was motivated earlier through Planck's law, as we showed in T2.)

Solution. (a) Classically, we need to balance the centripetal force with the Coulomb force,

$$
m \omega _ { 0 } ^ { 2 } r = \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 2 } } .
$$

Since $\omega _ { c } = \omega _ { 0 }$, we get

$$
\omega _ { c } = \sqrt { \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r _ { n } ^ { 3 } m } } .
$$

(b) The de Broglie relation tells us that $\hbar \omega _ { q } = E _ { n } - E _ { n - 1 }$, so using standard results for circular orbits in an inverse square potential,
$$
\omega _ { q } = \frac { e ^ { 2 } } { 4 \pi \hbar \epsilon _ { 0 } } \frac { 1 } { 2 } \left( \frac { 1 } { r _ { n - 1 } } - \frac { 1 } { r _ { n } } \right) .
$$

(c) Thinking of $n$ as a large number, we can approximate
$$
\left( \frac { 1 } { r _ { n - 1 } } - \frac { 1 } { r _ { n } } \right) = \frac { r _ { n } - r _ { n - 1 } } { r _ { n - 1 } r _ { n } } \approx \frac { r _ { n } - r _ { n - 1 } } { r _ { n } ^ { 2 } } \approx \frac { 1 } { r _ { n } ^ { 2 } } \frac { d r _ { n } } { d n } .
$$
Plugging this into the equation $\omega _ { c } = \omega _ { q }$ and simplifying, we get
$$
2 \hbar \sqrt { \frac { 4 \pi \epsilon _ { 0 } } { e ^ { 2 } m } } = \frac { 1 } { \sqrt { r _ { n } } } \frac { d r _ { n } } { d n } .
$$
Separating and integrating, we have
$$
r _ { n } = \frac { 4 \pi \epsilon _ { 0 } \hbar ^ { 2 } } { e ^ { 2 } m } n ^ { 2 } .
$$
There could be a constant of integration, but for large $n$, it's negligible, and we can conclude that for large $n , r _ { n } \propto n ^ { 2 }$. On the other hand, we have
$$
L _ { n } = m v _ { n } r _ { n } = m \omega _ { c } r _ { n } ^ { 2 } \propto r _ { n } ^ { 1 / 2 }
$$
which means that for high $n , L _ { n } \propto n$.
This is as far as we can go, "rigorously". The amazing thing is that this derivation is based on $\omega _ { c } = \omega _ { q }$, which only holds at large $n$, along with approximations that only work at large $n$, and also involves an unknown constant of integration. But if we just set the constant of integration to zero, and assume the derivation works for all $n$, then you can check that we recover $L = n \hbar$, which happens to be exactly true in the real world!
[4] Problem 23. IPhO 2005, problem 3. You may skip part 4, since it's quite similar to another problem on this problem set.

## 4 Bosons and Fermions

So far, we've only consider the quantum states of individual particles. Now we'll consider what happens when we put many of these particles together. We will assume the particles do not interact, which means their quantum states are just the same as the quantum states for individual particles. If the particles are fermions, they obey the Pauli exclusion principle, which means no two can occupy the same quantum state. If they are bosons, there is no such restriction; we'll consider bosons first.

[3] Problem 24. USAPhO 2011 A4 is a neat problem, but it has some typos and unphysical assumptions; this is an improved version. Consider a simplified model of the electromagnetic radiation inside a cubical metal box of side length $L$ at temperature $T$. In this model, modes of the electric field have spatial dependence
$$
E ( x , y , z ) = E _ { 0 } \sin \left( k _ { x } x \right) \sin \left( k _ { y } y \right) \sin \left( k _ { z } z \right)
$$
where one corner of the box lies at the origin and the box is aligned with the $x , y$, and $z$ axes. For simplicity, we will treat the electric field as a scalar, even though it actually has direction.
    (a) The electric field must be zero everywhere at the sides of the box. What condition does this impose on the $k _ { i }$ ?

(b) Show that for a typical box at room temperature, $L \sim 1 \mathrm {~m}$ and $T \sim 300 \mathrm {~K}$, the quantity $k _ { B } T$ is much greater than $\hbar \omega _ { 0 }$, where $\omega _ { 0 }$ is the lowest nonzero mode angular frequency. Therefore, for the rest of the problem, you may approximate $k _ { B } T \gg \hbar \omega _ { 0 }$.
(c) Each permitted value of the triple $\left( k _ { x } , k _ { y } , k _ { z } \right)$ corresponds to a mode, which can be occupied by any number of photons. Each photon has an energy $E = \hbar \omega$, where $\omega = c k$ is the angular frequency of the mode. How many modes have an energy per photon of at most $k _ { B } T$ ?
(d) As a crude approximation, suppose that in thermal equilibrium, each mode with energy per photon at most $k _ { B } T$ contains exactly one photon, while all other modes contain no photons. Compute the total energy of the photons in the box. (Answer: $\left( k _ { B } T \right) ^ { 4 } L ^ { 3 } / 8 \pi ^ { 2 } \hbar ^ { 3 } c ^ { 3 }$.)

Note that the procedure here is different from what we did above. Before, we started with particles and quantized $\oint p d x$ to get the allowed quantum states. Here, we're treating a situation with many particles (photons), which are excitations of an underlying field (the electromagnetic field). In this case, we found the (normal) modes of the classical field, then quantized by saying that photons could occupy these modes. This is the methodology of quantum field theory.

Solution. (a) We see that $k _ { x } L = n _ { x } \pi , k _ { y } L = n _ { y } \pi$, and $k _ { z } L = n _ { z } \pi$.

(b) Plugging in the numbers, we have $k _ { B } T / \hbar \omega _ { 0 } \sim 2 \times 10 ^ { 4 } \gg 1$, as desired.

(c) Define the vector $\mathbf { n } = \left( n _ { x } , n _ { y } , n _ { z } \right)$. For each mode, the energy per photon is

$$
E = \hbar \omega = \hbar c k = \frac { \pi \hbar c } { L } \sqrt { n _ { x } ^ { 2 } + n _ { y } ^ { 2 } + n _ { z } ^ { 2 } } .
$$

Moreover, the values of the $n _ { i }$ are positive integers. Therefore, the quantum states we are looking for occupy an eighth of a sphere in phase space, bounded by states with

$$
n _ { \max } = \frac { E _ { \max } L } { \pi \hbar c } .
$$

Because $k _ { B } T \gg \hbar \omega _ { 0 }$, there are many such modes, so we can find the answer approximately by computing the volume of this region. The number of modes (i.e. the number of values of n) with an energy per photon of at most $E _ { \text {max } }$ is thus

$$
N \left( E _ { \max } \right) = \frac { 1 } { 8 } \left( \frac { 4 } { 3 } \pi n _ { \max } ^ { 3 } \right) = \frac { 1 } { 6 \pi ^ { 2 } } \left( \frac { E L } { \hbar c } \right) ^ { 3 } .
$$

In this case, the requested answer is

$$
N \left( k _ { B } T \right) = \frac { 1 } { 6 \pi ^ { 2 } } \left( \frac { k _ { B } T L } { \hbar c } \right) ^ { 3 } .
$$

Note that this is different from the official USAPhO solution, because they also allowed negative values for the $n _ { i }$. This is incorrect, because flipping the sign of one of the $n _ { i }$ gives you exactly the same mode, up to an irrelevant -1 factor.

(d) We sum over the modes. For each occupied mode, we assume the energy stored is $E$, so
$$
U = \int E d N = \int _ { 0 } ^ { k _ { B } T } E \frac { d N } { d E } d E = \frac { 1 } { 6 \pi ^ { 2 } } \left( \frac { L } { \hbar c } \right) ^ { 3 } \int _ { 0 } ^ { k _ { B } T } E \left( 3 E ^ { 2 } \right) d E = \frac { 1 } { 8 \pi ^ { 2 } } \frac { \left( k _ { B } T \right) ^ { 4 } L ^ { 3 } } { \hbar ^ { 3 } c ^ { 3 } } .
$$
