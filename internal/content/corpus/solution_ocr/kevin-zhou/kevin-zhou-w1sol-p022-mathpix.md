---
id: solution-ocr-kevin-zhou-w1sol-p022
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p022]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 22. Consider a symmetric, thin mirror with air on both sides. When an electromagnetic wave whose electric field has amplitude $A$ hits the mirror from either side, there is a transmitted wave of amplitude $t A$ and a reflected wave of amplitude $r A$. Here, $t$ and $r$ are generally complex numbers, with their phase determining the phase shift of the transmitted or reflected wave. Assume that no energy is absorbed in the mirror itself.
    (a) Suppose light hits the mirror from one side. Using energy conservation, show that $| r | ^ { 2 } + | t | ^ { 2 } = 1$.
    (b) By considering a situation where light hits the mirror from both sides, show that $r ^ { * } t + t ^ { * } r = 0$. Show that this means $r$ and $t$ differ in phase by $\pi / 2$.
    (c) Alternatively, one can argue that the amplitude of the electric field must be continuous at the mirror. (This isn't quite right, as the charges in the mirror will make a big electric field confined to the mirror, but it's reasonable for other situations, such as problem 25, and happens to give the right answer here.) Using this assumption, show again that $r ^ { * } t + t ^ { * } r = 0$.
    (d) Why don't these results apply to the situation in problem 21?
    (e) ★ What can we say about an asymmetric mirror, which has coefficients $r$ and $t$ from one side, and $r ^ { \prime }$ and $t ^ { \prime }$ from the other? Continue to assume that no energy is absorbed in the mirror.

Solution. (a) The energy contained in an electromagnetic wave is proportional to its squared amplitude. If we send in a pulse of some duration with amplitude $A$, then after some time, we will get a transmitted pulse with amplitude $t A$ and a reflected pulse with amplitude $r A$, and energy conservation implies $A ^ { 2 } = \left( | r | ^ { 2 } + | t | ^ { 2 } \right) A ^ { 2 }$, giving the result.


(b) Suppose that light pulses of the same amplitude $A$ and duration hit the mirror from both sides at the same time. After some time, we will get two outgoing pulses with amplitude $( r + t ) A$. Then energy conservation gives $| r + t | ^ { 2 } = 1$. Expanding this out and using part (a) gives the result.
As for the phase difference of $\pi / 2$, it's easiest to see this with phasors. The facts that $| r + t | ^ { 2 }$ and $| r | ^ { 2 } + | t | ^ { 2 } = 1$ mean that, when $r$ and $t$ are added up in the complex plane, they form the sides of a right triangle.

(c) For a single incident wave, the amplitude from the incident side is $( 1 + r ) A$, while the amplitude on the other side is $t A$. So by continuity, we have $1 + r = t$, which is equivalent to $1 = t - r$. Taking the squared magnitude of both sides recovers the answer to part (b).
(d) Here we've assumed that the light travels in the same medium on both sides of the mirror; if this weren't true, then the energy in terms of the amplitude would have a different proportionality constant. But in problem 21, there are different media (strings of different thicknesses) on each side. On the other hand, if we threaded a mass through a single string, so that the properties of the string were the same on each side of it, then the mechanical waves transmitted or reflected off this mass would have amplitudes obeying the identities derived here.
(e) Clearly, repeating the argument of part (a) will give
$$
| r | ^ { 2 } + | t | ^ { 2 } = \left| r ^ { \prime } \right| ^ { 2 } + \left| t ^ { \prime } \right| ^ { 2 } = 1 .
$$
Now, by repeating the argument of part (b), but allowing the wave from the right side to start with an arbitrary phase shift $\theta$, we have
$$
\left| r + e ^ { i \theta } t ^ { \prime } \right| ^ { 2 } + \left| e ^ { i \theta } r ^ { \prime } + t \right| ^ { 2 } = 2 .
$$
Expanding this out and using our first result gives
$$
e ^ { i \theta } \left( r ^ { * } t ^ { \prime } + r ^ { \prime } t ^ { * } \right) + e ^ { - i \theta } \left( r ^ { * } t ^ { \prime } + r ^ { \prime } t ^ { * } \right) ^ { * } = 0 .
$$
Since $\theta$ is arbitrary, this can only be true if
$$
r ^ { * } t ^ { \prime } + r ^ { \prime } t ^ { * } = 0 .
$$
This is the final answer, but we can interpret it a bit better by rearranging it to
$$
\frac { r } { t } = - \left( \frac { r ^ { \prime } } { t ^ { \prime } } \right) ^ { * } .
$$
By comparing the magnitudes of each side, we conclude that
$$
| r | = \left| r ^ { \prime } \right| , \quad | t | = \left| t ^ { \prime } \right| .
$$
This makes perfect sense, as it says that the mirror cannot be "one-way": the amount of energy transmitted when passing through each direction has to be the same. (We've argued in T2 that if this wasn't true, one could violate the second law of thermodynamics.) Finally, let $\theta = \arg ( r / t )$ be the difference in phase shifts on reflection and transmission from one side, and let $\theta ^ { \prime } = \arg \left( r ^ { \prime } / t ^ { \prime } \right)$ be the corresponding quantity for the other side. Then by comparing the phases of each side above, we have $\theta = - \theta ^ { \prime } + \pi$, i.e. that
$$
\theta + \theta ^ { \prime } = \pi .
$$
The arguments here are very simple, but were missed for a surprisingly long time. If you figured it out a few decades ago, you could have published it and gotten a hundred citations.
