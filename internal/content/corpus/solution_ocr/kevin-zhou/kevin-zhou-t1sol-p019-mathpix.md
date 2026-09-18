---
id: solution-ocr-kevin-zhou-t1sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 19. The Boltzmann distribution can be normalized to a probability distribution by dividing by the so-called partition function $Z = \sum _ { n } e ^ { - E _ { n } / k _ { B } T }$.

(a) For a quantum harmonic oscillator, compute the probability of occupancy of the ground state (i.e. the lowest energy state) at temperature $T$.
(b) Do the same for the hydrogen atom, where $E _ { n } = - E _ { 0 } / n ^ { 2 }$ for $n \geq 1$. You should get a rather strange answer. Does it make physical sense?
(c) On a related note, a particle on a spring of spring constant $k$ has average energy $k _ { B } T$ by the equipartition theorem, independent of $k$. But as $k \rightarrow 0$, we get a free particle, which has an average energy $k _ { B } T / 2$. How can the average energy change discontinuously?

Solution. (a) The probability is

$$
p _ { 0 } = \frac { e ^ { - ( 0 ) E _ { 0 } / k _ { B } T } } { Z } = \frac { 1 } { Z }
$$

where the partition function is

$$
Z = \frac { 1 } { 1 - e ^ { - E _ { 0 } / k _ { B } T } }
$$

by summing a geometric series, so the answer is

$$
p _ { 0 } = 1 - e ^ { - E _ { 0 } / k _ { B } T } .
$$

(b) The problem here is that there are an infinite number of energy levels that have similar energy. So the sum used to define $Z$ diverges, which means that the probability of occupying any given state is zero! This seems to be a paradox. (Technically, there are $n ^ { 2 }$ states per energy level, but this only makes the divergence worse.)
The resolution is that this really is the correct answer, if you have true thermal equilibrium in an infinite volume. The electron simply has a huge volume it could wander around to, so as the volume goes to infinity, that means the chance it'll be near the proton falls to zero. This can happen even if the electron begins in the ground state and the temperature is extremely low; it just takes a long time. After some number of aeons, the random thermal radiation at some moment will just happen to be enough to pop the electron free, and then it'll wander away, probably never to return.
So the answer is formally true, but it's not realistic, because in everyday life and in physics labs we perform experiments with finite volumes and finite times. This can be accounted for by hand by just cutting off the sum at some high $n$, say
$$
Z = \sum _ { n = 0 } ^ { 10 ^ { 6 } } e ^ { - E _ { n } / k _ { B } T } .
$$
Such a cutoff corresponds to only allowing atomic orbitals that fit in a typical room, which is reasonable, and using this value of $Z$ gives reasonable results, as would any sufficiently high but finite cutoff. For more on this point, see this paper.

(c) It's the same issue as in part (b). As $k \rightarrow 0$, the states of the harmonic oscillator get larger and larger in spatial extent. At some point, they become so large that other effects, such as the boundaries of the room or collisions with other molecules, come into play. Then the average energy smoothly transitions down to $k _ { B } T / 2$.
More generally, as we've seen throughout these handouts, the infinite volume limit is formally simple but can be very misleading. All physical phenomena take place in finite volume, so if an idealized, infinite volume calculation gives a puzzling intermediate result, the solution is to work in finite volume and then only take the infinite volume limit, if desired, at the very end of the calculation. This is a trap that continues to trip up researchers today.
