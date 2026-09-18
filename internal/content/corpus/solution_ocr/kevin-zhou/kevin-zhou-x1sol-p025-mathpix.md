---
id: solution-ocr-kevin-zhou-x1sol-p025
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p025]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[4] Problem 25. The final result of the problem above is correct dimensionally, but has incorrect numerical factors because of the crude approximations made. In this problem we'll do a more careful analysis to get the right result. This question is self-contained, but background from T1 and T2 will be helpful.
    (a) Consider a quantum mode that can support photons of energy $E$. The mode can be occupied by any whole number of photons. Thus, using the Boltzmann distribution, the probability of having $n$ photons is
$$
p _ { n } \propto e ^ { - n E / k _ { B } T } .
$$
Show that the expected number of photons in the mode is
$$
\langle n \rangle = \frac { 1 } { e ^ { E / k _ { B } T } - 1 } .
$$
This is the Bose-Einstein distribution.
    (b) Sketch $\langle n \rangle$ as a function of $E$. How does it behave at high and low $E$, and do those results make physical sense?
    (c) Using the Bose-Einstein distribution, show that the total energy is
$$
U = \frac { L ^ { 3 } \hbar } { \pi ^ { 2 } c ^ { 3 } } \int _ { 0 } ^ { \infty } d \omega \frac { \omega ^ { 3 } } { e ^ { \hbar \omega / k _ { B } T } - 1 }
$$
where $\omega$ is the angular frequency. You'll have to multiply by a factor of two, because there are two independent photon polarizations for each mode we found above. (Note that if we open the box, the photons will fly out, and the frequency distribution of the emitted light will be given by the integrand; this yields Planck's law for blackbody radiation.)
    (d) [A] Using an appropriate substitution, show that $U$ is a dimensionful constant times the dimensionless integral
$$
\int _ { 0 } ^ { \infty } d x \frac { x ^ { 3 } } { e ^ { x } - 1 }
$$
To evaluate this integral, expand the denominator as a power series, integrate each term individually, and use the fact that the Riemann zeta function obeys
$$
\zeta ( s ) = \sum _ { n = 1 } ^ { \infty } \frac { 1 } { n ^ { s } } , \quad \zeta ( 4 ) = \frac { \pi ^ { 4 } } { 90 } .
$$
When the smoke clears, you should find that
$$
U = \frac { \pi ^ { 2 } } { 15 } \frac { \left( k _ { B } T \right) ^ { 4 } L ^ { 3 } } { ( \hbar c ) ^ { 3 } } .
$$

Solution. (a) We see that

$$
\langle n \rangle = \frac { \sum _ { n } n e ^ { - n E / k _ { B } T } } { \sum _ { n } e ^ { - n E / k _ { B } T } } = \frac { e ^ { E / k _ { B } T } / \left( e ^ { E / k _ { B } T } - 1 \right) ^ { 2 } } { e ^ { E / k _ { B } T } / \left( e ^ { E / k _ { B } T } - 1 \right) } = \frac { 1 } { e ^ { E / k _ { B } T } - 1 } ,
$$

as desired.


(b) $\langle n \rangle$ as a function of $E$ looks like this:
![](../../../figures/solution-ocr/3459602371a1641fd8cd6bee.jpg)
For modes with low $E$, we have $\langle n \rangle \approx k _ { B } T / E \gg 1$, so the energy stored in this mode is approximately $\langle n \rangle E \approx k _ { B } T$. That makes physical sense: in this limit where there are lots of photons, their discreteness doesn't matter, so the mode can be treated classically, getting energy $k _ { B } T$ by the equipartition theorem.
For modes with high $E$, we have $\langle n \rangle \approx e ^ { - E / k _ { B } T } \ll 1$. This also makes sense, because in this limit there isn't enough thermal energy to significantly excite the modes.
(c) The logic is exactly the same as part (c) of the previous problem, but instead of saying that some modes have 1 photon and others have 0 photons, we just assign the proper $\langle n \rangle$ photons to every mode. Then
$$
U = \int \langle n \rangle E d N = \frac { 1 } { 2 \pi ^ { 2 } } \left( \frac { L } { \hbar c } \right) ^ { 3 } \int _ { 0 } ^ { \infty } \langle n \rangle E ^ { 3 } d E
$$
As stated, we multiply by a factor of 2 to account for the two polarizations per mode. We also change variables from $E$ to $\omega$ using $E = \hbar \omega$. This gives
$$
U = \frac { L ^ { 3 } \hbar } { \pi ^ { 2 } c ^ { 3 } } \int _ { 0 } ^ { \infty } d \omega \frac { \omega ^ { 3 } } { e ^ { \hbar \omega / k _ { B } T } - 1 }
$$
just as desired.
(d) Now we substitute $x = \hbar \omega / k _ { B } T$, where $d x = \hbar d \omega / k _ { B } T$.
$$
U = \frac { L ^ { 3 } \hbar } { \pi ^ { 2 } c ^ { 3 } } \int _ { 0 } ^ { \infty } \left( \frac { k _ { B } T } { \hbar } d x \right) \frac { \left( k _ { B } T x / \hbar \right) ^ { 3 } } { e ^ { x } - 1 } = \frac { \left( k _ { B } T \right) ^ { 4 } L ^ { 3 } } { \pi ^ { 2 } c ^ { 3 } \hbar ^ { 3 } } \int _ { 0 } ^ { \infty } d x \frac { x ^ { 3 } } { e ^ { x } - 1 } .
$$
We can rearrange the integral into
$$
I = \int _ { 0 } ^ { \infty } d x \frac { x ^ { 3 } } { e ^ { x } - 1 } = \int _ { 0 } ^ { \infty } e ^ { - x } x ^ { 3 } \frac { 1 } { 1 - e ^ { - x } } d x
$$
Recognizing $1 / \left( 1 - e ^ { - x } \right)$ as a geometric series $\sum _ { n = 0 } ^ { \infty } \left( e ^ { - x } \right) ^ { n }$, we can represent the integral as
$$
I = \int _ { 0 } ^ { \infty } \sum _ { n = 0 } ^ { \infty } x ^ { 3 } e ^ { - ( n + 1 ) x } d x
$$

We can reindex this since the only instance of $n$ is $n + 1$, so we can start the summation at $n = 1$. Since we can integrate this term by term, we can change the order of the integral and summation, then integrate by parts to get

$$
\begin{gathered}
I = \sum _ { n = 1 } ^ { \infty } \int _ { 0 } ^ { \infty } x ^ { 3 } e ^ { - n x } d x = \sum _ { n = 1 } ^ { \infty } \int _ { 0 } ^ { \infty } \left( 3 x ^ { 2 } d x \right) \left( \frac { e ^ { - n x } } { n } \right) = \sum _ { n = 1 } ^ { \infty } \int _ { 0 } ^ { \infty } ( 6 x d x ) \left( \frac { e ^ { - n x } } { n ^ { 2 } } \right) \\
= \sum _ { n = 1 } ^ { \infty } \int _ { 0 } ^ { \infty } ( 6 d x ) \left( \frac { e ^ { - n x } } { n ^ { 3 } } \right) = \sum _ { n = 1 } ^ { \infty } \frac { 6 } { n ^ { 4 } } = 6 \zeta ( 4 )
\end{gathered}
$$

Putting this into our original expression gets

$$
U = \frac { \pi ^ { 2 } k _ { B } ^ { 4 } } { 15 c ^ { 3 } \hbar ^ { 3 } } L ^ { 3 } T ^ { 4 }
$$

[5] Problem 26. APhO 2002, problem 1. This useful problem covers the other common example of a quantized bosonic field. In the above problems, we quantized the electromagnetic field to get photons. Here, we quantize a displacement field to get phonons.

Solution. See the official solutions. But they're badly formatted, so I'll also list the answers here.

(a) $m \ddot { X } _ { n } = S \left( X _ { n + 1 } - X _ { n } \right) - S \left( X _ { n } - X _ { n - 1 } \right)$
(b) $\omega ^ { 2 } = ( 4 S / m ) \sin ^ { 2 } ( k a / 2 ) , k = \pi / L , 2 \pi / L , \ldots , N \pi / L , \omega _ { \text {max } } = 2 \sqrt { S / m }$
(c) $\hbar \omega / \left( e ^ { \hbar \omega / k _ { B } T } - 1 \right)$
(d) $( L / \pi ) \Delta k$ modes
(e) $N$ modes, with
$$
E _ { T } = \frac { 2 N } { \pi } \int _ { 0 } ^ { \omega _ { \max } } \frac { \hbar \omega } { e ^ { \hbar \omega / k _ { B } T } - 1 } \frac { d \omega } { \sqrt { \omega _ { \max } ^ { 2 } - \omega ^ { 2 } } }
$$
(f) It grows linearly in $T$ for small $T$, then asymptotes to $N k _ { B } = R$.

Idea 7
In problems 24 and 25, we handled a system of bosons (specifically photons) by considering the modes the photons could occupy, then calculating how many photons were in each mode. This was the easiest route. If we had instead fixed the number of photons, then counted the ways they could be distributed among the modes, the combinatorics would have been a complete nightmare, because multiple photons can occupy the same mode.

Fermions, which obey the Pauli exclusion principle, are simpler, because no two can be in the same state. For instance, if there are $n$ noninteracting fermions in a system, then the lowest energy state of the whole system consists of having one fermion occupy the lowest energy state, the second occupy the second-lowest energy state, and so on. (Accounting for interactions makes the problem much more complicated, because it means the energy of a state depends on whether other states are occupied. However, you can explain a surprising amount while completely neglecting interactions.)
