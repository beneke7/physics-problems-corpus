---
id: solution-ocr-kevin-zhou-x1sol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 1. A slightly more subtle case is the case of a string of length $L$ with one fixed and one free end. Show that the standing wave angular frequencies are

$$
\omega _ { n } = \frac { \pi v } { L } ( n + 1 / 2 ) .
$$

Solution. Here, we see that the end is free, so it corresponds to an anti-node. Thus, the length of the string is a half integer amount of half wavelengths, so $L = \frac { 1 } { 2 } ( n + 1 / 2 ) \lambda _ { n }$, which means that

$$
f _ { n } = v / \lambda _ { n } = \frac { v } { 2 L } ( n + 1 / 2 ) .
$$

Thus, $\omega _ { n } = 2 \pi f _ { n } = \frac { \pi v } { L } ( n + 1 / 2 )$, as desired.


The reason our principle above doesn't give the right answer is that a wave picks up an extra phase shift $\pi$ when it reflects off a fixed end, so we really should have written

$$
\oint k d x = 2 \pi ( n + 1 / 2 )
$$

in this case. We didn't run into any problems for two fixed ends, because in that case we get two phase shifts of $\pi$, which have no overall effect.

[2] Problem 2. Suppose a string of length $L$ is hung from the ceiling. The string has mass density $\mu$, and the bottom of the string is held fixed and pulled down with a force $F \gg g L \mu$. If the string were weightless, then the standing wave angular frequencies would simply be $\pi v n / L$, where $v = \sqrt { F / \mu }$. However, the weight causes the tension and hence the wave speed to vary throughout the rope.
    (a) Explain why the wave's angular frequency $\omega$ is uniform, i.e. why standing wave solutions are proportional to $\cos ( \omega t )$.
    (b) Find the angular frequencies of standing waves, accurate to first order in $g L \mu / F$.

This is a more quantitative version of a problem we encountered in W1.
Solution. (a) Recall that the solutions of the wave equation were proportional to $e ^ { i ( k x - \omega t ) }$ because the wave equation was linear, and had no explicit dependence on $x$ and $t$. The wave equation describing waves on this string does have explicit dependence on $x$, because the tension (and hence the wave velocity) varies along the string. But it still doesn't have any explicit dependence on $t$, so guessing a solution proportional to $e ^ { - i \omega t }$ (or equivalently $\cos ( \omega t )$ in real variables) still works.


(b) Let $h$ be the height from the bottom of the string. By Newton's second law, the tension at height $h$ is $T ( h ) = F + \mu g h$, so the speed is $v ( h ) = \sqrt { F / \mu + g h }$. Thus, the quantization condition is
$$
\oint k d x = 2 \int _ { 0 } ^ { L } k d h = 2 \int _ { 0 } ^ { L } \frac { \omega _ { n } } { v } d h = 2 \int _ { 0 } ^ { L } \frac { \omega _ { n } } { \sqrt { F / \mu + g h } } d h = 2 \pi n .
$$
Note that
$$
\begin{aligned}
2 \int _ { 0 } ^ { L } \frac { \omega _ { n } } { \sqrt { F / \mu + g h } } d h & = \frac { 2 \omega _ { n } } { \sqrt { F / \mu } } \int _ { 0 } ^ { L } \frac { d h } { \sqrt { 1 + g h \mu / F } } \\
& = 2 \omega _ { n } \sqrt { F / \mu } / g \int _ { 0 } ^ { g L \mu / F } \frac { d x } { \sqrt { 1 + x } } \\
& \approx 2 \omega _ { n } \sqrt { F / \mu } / g \int _ { 0 } ^ { g L \mu / F } ( 1 - x / 2 ) d x \\
& = 2 \omega _ { n } \sqrt { F / \mu } / g \left( g L \mu / F - \frac { 1 } { 4 } ( g L \mu / F ) ^ { 2 } \right) \\
& = 2 \omega _ { n } L \sqrt { \mu / F } \left( 1 - \frac { 1 } { 4 } ( g L \mu / F ) \right) .
\end{aligned}
$$
We therefore conclude
$$
\omega _ { n } = \frac { \pi n \sqrt { F / \mu } } { L } \left( 1 + \frac { 1 } { 4 } ( g L \mu / F ) \right) .
$$

If you want the exact solution, you'll have to solve the wave equation with an $h$-dependent wave speed. This can be done with mathematical methods taught in university courses, outside the scope of the Olympiad syllabus, and the answer will be in terms of special functions.

In quantum mechanics, the state of a particle is described by a wavefunction $\psi ( x , t )$ which obeys the Schrodinger equation. When a particle is confined in a finite volume, there are standing wave solutions analogous to those of classical wave mechanics, which have discrete frequencies.

## Idea 2: WKB Approximation

The momentum and energy of a quantum particle obey the de Broglie relations

$$
p = \hbar k , \quad E = \hbar \omega .
$$

As usual, for nonrelativistic particles, the energy $E$ and momentum $p$ are related by

$$
E = \frac { p ^ { 2 } } { 2 m } + V ( x ) .
$$

For a particle with reasonably well-defined momentum, the wavefunction is a wavepacket which travels at the group velocity

$$
v _ { g } = \frac { d \omega } { d k } = \frac { d E } { d p } = \frac { p } { m } .
$$

In the classical limit, this is simply the ordinary velocity of the particle.
The de Broglie relations also apply for relativistic particles, if $E$ is the relativistic kinetic plus potential energy, and $p$ is the relativistic momentum. (If you want, you can also add $m c ^ { 2 }$ to $E$ to get the total relativistic energy, but it makes no difference since a constant shift in energy doesn't do anything.) In this case, the group velocity obeys $p = \gamma m v _ { g }$, as expected.

Just as for a classical standing wave, $\omega$ is the same everywhere for quantum standing waves. Since energy is related to frequency, these standing waves are also states of definite energy. In the semiclassical limit, the standing waves must satisfy

$$
\oint p d x = ( 2 \pi n + \alpha ) \hbar = \left( n + \frac { \alpha } { 2 \pi } \right) h .
$$

The extra phase $\alpha$ depends on how the particle gets reflected at the endpoints of its motion.

## Remark

The left-hand side of the quantization condition above is precisely the adiabatic invariant from M4, which stays the same if we change the system parameters slowly. This ensures the quantization condition is preserved over time, as it must be for self-consistency. If you instead change the system parameters quickly, the integral is not preserved, but that's because the change causes transitions from one energy level to another (i.e. to waves with different $n$ ).
