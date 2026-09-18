---
id: solution-ocr-kevin-zhou-e7sol-p027
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e7-p027]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 27. In this problem, we treat electromagnetic wave propagation through a transmission line using a "lumped element" approach, where the line is replaced with discrete capacitors and inductors, as shown. (This is an example of a network synthesis, mentioned in E6.)
(a) Calculate the characteristic impedance $Z _ { 0 } ( \omega )$ of the entire network, as shown below.
![](../../../figures/solution-ocr/c550248f8b6523898c3eedd8.jpg)

(b) The diagram below shows two adjacent sections of the ladder.
![](../../../figures/solution-ocr/41692d8df335390cad614f57.jpg)
Find the ratio of the complex voltage amplitudes $V _ { n + 1 } / V _ { n }$.
(c) The AC driving attempts to create electromagnetic waves which travel through the network, to the right. It turns out that above a certain critical angular frequency $\omega _ { c }$, waves will not travel through the ladder network. Find $\omega _ { c }$. (Hint: this can be done using either the result of part (a) or part (b).)
(d) For angular frequencies $\omega \ll \omega _ { c }$, waves travel through the ladder with a constant speed. Find this speed, assuming each segment of the ladder has physical length $\ell$. (Hint: the speed of a wave obeys $v = d \omega / d k$.)
(e) You should have found in one of the earlier parts that the impedance of this infinite network can be a real number, even though it's made of parts which all have imaginary impedance. That sounds strange, but what's even stranger is that we should be able to handle this infinite circuit by taking the limit of progressively larger finite circuits, just as we did for a similar network of resistors in E2. But for any finite LC network, the impedance will be imaginary, so the limit must be imaginary too! On one hand, we should trust the finite result because all real circuits are finite. On the other hand, the real impedance we get for the infinite result certainly can be measured in real life. So what's going on?

Solution. (a) The impedance of the infinite ladder doesn't change if we add another unit onto the left. Let the inductor have impedance $Z _ { 1 } / 2$ and let the capacitor have impedance $Z _ { 2 }$. Then

$$
\frac { Z _ { 1 } } { 2 } + \frac { 1 } { \frac { 1 } { Z _ { 2 } } + \frac { 1 } { Z _ { 1 } / 2 + Z _ { 0 } } } = Z _ { 0 }
$$

which can be solved to give

$$
Z _ { 0 } = \sqrt { \left( Z _ { 1 } / 2 \right) ^ { 2 } + Z _ { 1 } Z _ { 2 } } .
$$

Since we have $Z _ { 1 } = i \omega L$ and $Z _ { 2 } = 1 / i \omega C$, we have

$$
Z _ { 0 } = \sqrt { \frac { L } { C } - \frac { \omega ^ { 2 } L ^ { 2 } } { 4 } } .
$$

(b) Each segment sees an impedance $Z _ { 0 }$ to its right, so
$$
V _ { n } = I _ { n } Z _ { 0 } , \quad V _ { n + 1 } = I _ { n + 1 } Z _ { 0 } .
$$
On the other hand, we also have
$$
V _ { n } - V _ { n + 1 } = \frac { I _ { n } Z _ { 1 } } { 2 } + \frac { I _ { n + 1 } Z _ { 1 } } { 2 }
$$
and solving these equations yields
$$
\frac { V _ { n + 1 } } { V _ { n } } = \frac { Z _ { 0 } - Z _ { 1 } / 2 } { Z _ { 0 } + Z _ { 1 } / 2 } = \frac { \sqrt { L / C - \omega ^ { 2 } L ^ { 2 } / 4 } - i \omega L / 2 } { \sqrt { L / C - \omega ^ { 2 } L ^ { 2 } / 4 } + i \omega L / 2 } = \frac { \sqrt { 4 / \omega ^ { 2 } L C - 1 } - i } { \sqrt { 4 / \omega ^ { 2 } L C - 1 } + i } .
$$

(c) First we'll find the critical angular frequency using part (b). When the square root is a real number, the numerator and denominator have equal magnitudes, so $\left| V _ { n + 1 } \right| = \left| V _ { n } \right|$, indicating wave propagation. When the square root is imaginary, the wave instead exponentially decays. The cutoff is when
$$
4 / \omega ^ { 2 } L C - 1 = 0
$$
which gives
$$
\omega _ { c } = \frac { 2 } { \sqrt { L C } } .
$$
To derive the same conclusion using the result of part (a), note that the impedance $Z _ { 0 }$ becomes real when $\omega < 2 / \sqrt { L C }$. How could one get a real impedance, which signals energy loss, if there are no resistors anywhere in the circuit? It can only happen if the driver can create electromagnetic waves, which then propagate through the network; since the network is infinite, this energy never returns to the driver. Because waves can appear for $\omega < 2 / \sqrt { L C }$, we again conclude that $\omega _ { c } = 2 / \sqrt { L C }$.
(d) In this limit, we have
$$
\frac { V _ { n + 1 } } { V _ { n } } \approx \frac { 2 / \omega \sqrt { L C } - i } { 2 / \omega \sqrt { L C } + i }
$$
and so across each unit, there is a phase shift of
$$
\delta = \omega \sqrt { L C } .
$$
Since wavenumber is phase shift per distance, $k = \delta / \ell = \omega \sqrt { L C } / \ell$, which means
$$
v = \frac { d \omega } { d k } = \frac { \ell } { \sqrt { L C } } .
$$
That is, waves in a transmission line travel with a constant speed, as we already found in problem 26. If we further plug in the $L$ and $C$ found in that problem, we would recover the speed of light.
(e) For an ideal, finite LC network, the finite result is perfectly correct: the impedance is pure imaginary. The network can't absorb net energy, because in the steady state energy propagates through the network, bounces off the other end, and comes back to the voltage source. However, when we're using transmission lines in practice, we put a load on the other end (i.e. a resistance) that absorbs the incoming wave. This introduces a real impedance to the finite circuit, and the limiting procedure works just fine, recovering a real impedance in the infinite limit.
But mathematically, in the infinite network analysis, we never needed to use the fact that a real impedance was at the end, because there was no end. You get the infinite network either by taking the limit of finite LC circuits, or by taking the limit of finite LC circuits terminated by a resistor, so how do we mathematically choose which limit gives the right answer?
The resolution is that the former limit does not even exist: as the size of the LC network is increased, the impedance keeps bouncing around, never settling down to a limit. Physically, this is because the total length of the network is changing, which changes the phase shift of the wave once it gets back to the voltage source. It's analogous to trying to compute $\lim _ { a \rightarrow \infty } \int _ { 0 } ^ { a } e ^ { i x } d x$.

To make the limit well-defined, we must introduce resistances. For example, we could add a small resistance $\Delta r$ to every inductor, which is also perfectly realistic. Now the waves gradually decay away, and in the infinite limit we get some impedance $Z ( \Delta r , \omega )$. Finally, taking the limit $\Delta r \rightarrow 0$ recovers the infinite result we derived earlier. It's precisely the same result as taking the infinite limit of LC networks terminated by resistors. We could also get the same result by giving the capacitors the small resistance.

The general lesson is that in physics, the real world supplies "regulators" that make the seemingly undefined limits well-defined. The miracle is that quite often, after we compute the answer, we can remove the regulator to get a result that doesn't depend on the regulator at all! This is surprising to the mathematician, but natural to the physicist: it means the observable behavior of real objects, which always come with many imperfections, doesn't depend on the fine details of how we choose to model them.
