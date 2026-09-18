---
id: solution-ocr-kevin-zhou-x1sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 7: Casimir Forces
Consider an infinite uniform string, on which waves propagate with speed $v$. The string is held fixed by pins at two points separated by a distance $L$. When the string is in its ground state, what is the resulting force between the pins?

Solution
Of course, in classical mechanics the ground state would just be $y ( x ) = 0$, and the force would just be the tension $T$. But there is an additional quantum mechanical contribution, which arises because each of the standing waves between the pins, with angular frequencies $\omega _ { n } = n \pi v / L$, carries a so-called "zero point" energy $\hbar \omega _ { n }$.

As usual, force can be found by differentiating energy, $F = - d E / d L$. By summing up the zero point energy in all of the standing waves, we naively get

$$
E = \sum _ { n } \frac { \hbar \omega _ { n } } { 2 } = \frac { \pi \hbar v } { 2 L } \sum _ { n = 1 } ^ { \infty } n = E _ { 0 } \sum _ { n = 1 } ^ { \infty } n = \infty
$$


which is rather unhelpful. This result is off for two reasons. First, even when there aren't any pins, the string still has standing waves, and these waves also have a naively infinite energy density. When we move the pins a bit, we change both the zero point energy outside the pins and inside, by infinite amounts, but the net change is finite, giving a finite force.

Quantitatively, the energy in between the pins due to the standing waves is

$$
E _ { \text {plate } } = E _ { 0 } \sum _ { n = 1 } ^ { \infty } n = \infty
$$

and the energy we would have had there if the pins didn't exist is the "continuous" sum,

$$
E _ { \mathrm { vac } } = E _ { 0 } \int _ { 0 } ^ { \infty } x d x = \infty
$$

The difference should be finite, but we can't just subtract infinity with infinity, which brings us to the second problem: none of these quantities are actually infinite. Any real string will have a finite maximum oscillation frequency - for instance, the wavelength certainly can't get smaller than the atomic spacing. Alternatively, even if we had an idealized string where $E _ { \text {vac } }$ was actually infinite, no real pin can perfectly block waves of all frequencies. For sufficiently high frequencies the waves won't be affected by the pins, so that the sum in $E _ { \text {plate } }$ eventually behaves like the integral in $E _ { \text {vac } }$, leaving a finite difference between the two.

In other words, the difference between $E _ { \text {plate } }$ and $E _ { \text {vac } }$ in reality comes from only low $n$ and $x$. Therefore, let's "regulate" the two expressions above so that they're unchanged in this regime, but match each other at high $n$ and $x$. The simplest way to do this is to take

$$
E _ { \text {plate } } = E _ { 0 } \sum _ { n = 1 } ^ { \infty } n e ^ { - \epsilon n } , \quad E _ { \text {vac } } = E _ { 0 } \int _ { 0 } ^ { \infty } x e ^ { - \epsilon x } d x = \frac { E _ { 0 } } { \epsilon ^ { 2 } }
$$

for small $\epsilon$. To handle the sum, let $\alpha = e ^ { - \epsilon }$, so that

$$
E _ { \text {plate } } / E _ { 0 } = \alpha + 2 \alpha ^ { 2 } + 3 \alpha ^ { 3 } + \ldots .
$$

Now we use the usual trick for arithmetic-geometric series. Note that

$$
\alpha E _ { \text {plate } } / E _ { 0 } = \alpha ^ { 2 } + 2 \alpha ^ { 3 } + 3 \alpha ^ { 4 } + \ldots .
$$

Subtracting, we find

$$
( 1 - \alpha ) E _ { \text {plate } } / E _ { 0 } = \alpha + \alpha ^ { 2 } + \alpha ^ { 3 } + \ldots = \frac { \alpha } { 1 - \alpha } .
$$

We thus conclude that

$$
E _ { \mathrm { plate } } = \frac { e ^ { - \epsilon } } { \left( 1 - e ^ { - \epsilon } \right) ^ { 2 } } E _ { 0 } = E _ { \mathrm { vac } } - \frac { 1 } { 12 } E _ { 0 } + \mathcal { O } ( \epsilon )
$$

where we used a result from P1. Finally, when we take $\epsilon$ to zero, the difference is simply

$$
E = E _ { \text {plate } } - E _ { \text {vac } } = - \frac { 1 } { 12 } E _ { 0 } .
$$


Differentiating gives the force,

$$
F = - \frac { \pi \hbar v } { 24 L ^ { 2 } }
$$

where the negative sign indicates it is attractive. Not only is this finite, it's right! Experiments have measured this "Casimir force" precisely for light between two conductors, where $v = c$, and confirmed the expected results.

You're probably suspicious about this derivation because it depends on the arbitrary choice of an exponential suppression. What if the sums and integrals were regulated at high $n$ and $x$ in a different way? Shouldn't the answer depend on the details of the string and pin? Remarkably, the answer is no: the regulator doesn't matter. If you try others, such as $e ^ { - \epsilon n ^ { 2 } }$ or $1 / n ^ { \epsilon }$, you'll get the same result; you can find a general proof in chapter 15 of Schwartz's Quantum Field Theory and the Standard Model. The reason is that the effect comes from physics at low frequencies, so it doesn't matter how you regulate the high frequencies.

It is for precisely this reason that you will sometimes see the mysterious equation

$$
1 + 2 + 3 + \ldots = - \frac { 1 } { 12 } .
$$

It's not really true. Instead, what it physically means is that the difference between the regulated sum and integral is -1/12 for any reasonable regulator.
