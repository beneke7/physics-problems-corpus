---
id: solution-ocr-kevin-zhou-x2sol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x2-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 2. In Gamow's theory of alpha decay, alpha particles can escape from nuclei by quantum tunneling. The alpha particle is bound to the nucleus by a nuclear force, which we model as a finite square well, $V ( r ) = - V _ { 0 }$ for $r < r _ { 1 }$, and repelled by the Coulomb force, $V ( r ) = k ( Z e ) ( 2 e ) / r = \alpha / r$. The combination of the two creates a potential barrier the alpha particle must tunnel though. Let the alpha particle have mass $m$ and energy $E$.
![](../../../figures/solution-ocr/0596dfe7119d6e89e8022db7.jpg)
    (a) Using classical mechanics, calculate the time between collisions with the wall. This is also correct in quantum mechanics; one can take the wavefunction to be a wavepacket, which really does collide with the walls with the same frequency.
    (b) In quantum mechanics, each collision has an associated amplitude to escape by quantum tunneling. To compute this, recall from X1 that the WKB approximation states that the wavefunction picks up a phase $e ^ { i \theta }$, where
$$
\theta = \frac { 1 } { \hbar } \int p d x .
$$
Calculate $\theta$ by integrating from $r _ { 1 }$ to $r _ { 2 }$, assuming that $r _ { 1 } \ll r _ { 2 }$ for simplicity. You should find that $\theta$ is a complex number, indicating the wavefunction exponentially decays in the barrier. (Hint: you will find a tricky integral, for which you should use a trigonometric substitution.)
    (c) Each time the particle hits the well, the amplitude that it escapes is proportional to $e ^ { i \theta }$, and the probability that it escapes is equal to the square of the amplitdue. Using this fact, write down an approximate expression for the timescale $\tau$ for decay to occur.

This model is very rough, so the numeric and slowly varying prefactors should not be expected to be accurate. But the exponential dependence of the timescale on the energy, which you should have


found is due to the tunneling probability scaling as $e ^ { - \sqrt { E _ { g } / E } }$ for some constant $E _ { g }$, is by far the most important piece, and it fits experimental results.

(d) In nuclear fusion reactions in the Sun, the process above occurs in reverse: an incoming alpha particle (i.e. helium nucleus) needs to tunnel through the Coulomb barrier to fuse with another nucleus. The initial energy is Boltzmann distributed as $e ^ { - E / k _ { B } T }$, so the fusion rate is
$$
\Gamma \sim \int d E e ^ { - \sqrt { E _ { g } / E } } e ^ { - E / k _ { B } T }
$$
The integrand is the product of a rapidly rising exponential and a rapidly falling exponential. Estimate the exponential part of the dependence of $\Gamma$ on $T$.

Solution. (a) We have $v = \sqrt { 2 \left( E + V _ { 0 } \right) / m }$, so

$$
t = \frac { 2 r _ { 1 } } { v } = r _ { 1 } \sqrt { \frac { 2 m } { E + V _ { 0 } } } .
$$

(b) Within the barrier, we have
$$
p = \sqrt { 2 m ( E - V ) } = i \sqrt { 2 m ( V - E ) } .
$$
The second turning point $r _ { 2 }$ satisfies $E = \alpha / r _ { 2 }$. Thus, the WKB phase is
$$
\theta = \frac { i } { \hbar } \int _ { r _ { 1 } } ^ { r _ { 2 } } \sqrt { 2 m \left( \frac { \alpha } { r } - E \right) } d r = \frac { i } { \hbar } \sqrt { 2 m E } \int _ { r _ { 1 } } ^ { r _ { 2 } } \sqrt { \frac { r _ { 2 } } { r } - 1 } d r
$$
Since $r _ { 1 } \ll r _ { 2 }$, we can simply set $r _ { 1 } = 0$ in the integral and let $u = r / r _ { 2 }$, leaving
$$
\theta = \frac { i } { \hbar } \sqrt { 2 m E } r _ { 2 } \int _ { 0 } ^ { 1 } \sqrt { 1 / u - 1 } d u
$$
This final integral can be performed by letting $u = \sin ^ { 2 } v$, giving
$$
\theta = \frac { i \alpha } { \hbar } \sqrt { \frac { 2 m } { E } } \int _ { 0 } ^ { \pi / 2 } \sqrt { \frac { 1 } { \sin ^ { 2 } v } - 1 } ( 2 \sin v \cos v ) d v = \frac { i \alpha } { \hbar } \sqrt { \frac { 2 m } { E } } \int _ { 0 } ^ { \pi / 2 } 2 \cos ^ { 2 } v d v
$$
Since cosine squared averages to $1 / 2$, this integral is $\pi / 2$, so
$$
\theta = \frac { i \pi \alpha } { \hbar } \sqrt { \frac { m } { 2 E } } .
$$
(c) The timescale is approximately the time between collisions, divided by the probability of escape per collision,
$$
\tau \sim \frac { t } { e ^ { 2 i \theta } } \sim r _ { 1 } \sqrt { \frac { 2 m } { E + V _ { 0 } } } \exp \left( \frac { \pi \alpha } { \hbar } \sqrt { \frac { 2 m } { E } } \right) .
$$
(d) The integrand is the exponential of a quantity that quickly rises and then falls, which means almost all of the integral's value comes from the region where $- \sqrt { E _ { g } / E } - E / k _ { B } T$ is maximized.

Carrying out the derivative, this corresponds to $E \sim E _ { g } ^ { 1 / 3 } \left( k _ { B } T \right) ^ { 2 / 3 }$. Plugging this back in, we find the integrand is of order $e ^ { - \left( E _ { g } / k _ { B } T \right) ^ { 1 / 3 } }$ near these energies, so
$$
\Gamma \propto e ^ { - \left( E _ { g } / k _ { B } T \right) ^ { 1 / 3 } } .
$$
This general idea for treating sharply peaked integrals is called Laplace's method. With a little more work, we can find the prefactor too. However, the exponential is the qualitatively most important part because it has a very sharp dependence on $T$.
