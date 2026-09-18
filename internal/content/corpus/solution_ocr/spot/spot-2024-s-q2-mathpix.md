---
id: solution-ocr-spot-2024-s-q2
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2024-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Two square plates of side length $L$, constructed from an ideal conducting material, are separated by an air gap of $h$. Both plates are parallel to and have the same projection onto the $x y$-plane. The space between them is permeated with a magnetic field $B$ which is parallel to the $x$-axis. A metal rod of mass $m$, length $h$ and resistance $R$ is placed parallel to the $z$-axis at the maximum $y$-position such that it is just touching both plates and allowed to fall from rest until time $T$, when it reaches the minimum $y$-position and loses contact with both plates. Assume that gravity acts in the negative $y$-direction and that the rod remains in contact with both plates for as long as possible.
    (a) Derive the expression for the velocity $v$ of the rod.
    (b) Describe and explain qualitatively the behaviour of the rod after a long time but before time $T$, assuming $T$ is very large.

Solution:

| Marking scheme | marks | comments |
| :--- | :--- | :--- |
| We may calculate the electromotive force $\epsilon$ across the rod, where $\sigma$ is the charge density on each plate: $\epsilon = \left( v B - \frac { \sigma } { \epsilon _ { 0 } } \right) h$ | M0.5 | Correct equation |
| Hence, we get the rate of change of $\sigma$ by calculating $I = \frac { \epsilon } { R }$ and taking $\frac { \mathrm { d } \sigma } { \mathrm { d } t } = \frac { I } { L ^ { 2 } }$ : $\frac { \mathrm { d } \sigma } { \mathrm {~d} t } = \left( v B - \frac { \sigma } { \epsilon _ { 0 } } \right) \frac { h } { R L ^ { 2 } }$ |  |  |
| From $I$, we can calculate $\frac { \mathrm { d } v } { \mathrm {~d} t } = g - \frac { B I h } { m }$ : |  |  |
| $\frac { \mathrm { d } v } { \mathrm {~d} t } = g - \left( v B - \frac { \sigma } { \epsilon _ { 0 } } \right) \frac { B h ^ { 2 } } { m R }$ | M0.5 | Correct equation |
| Rearranging the expression for $\frac { \mathrm { d } v } { \mathrm {~d} t }$, we get: |  |  |
| $\sigma = \epsilon _ { 0 } \left( \frac { m R } { B h ^ { 2 } } \left( \frac { \mathrm {~d} v } { \mathrm {~d} t } - g \right) + v B \right)$ | M0.5 | Correct equation |
| Substituting this into the expression for $\frac { \mathrm { d } \sigma } { \mathrm { d } t }$, we get: |  |  |
| $\frac { m \epsilon _ { 0 } R } { B h ^ { 2 } } \frac { \mathrm {~d} ^ { 2 } v } { \mathrm {~d} t ^ { 2 } } + \left( \epsilon _ { 0 } B + \frac { m } { B L ^ { 2 } h } \right) \frac { \mathrm { d } v } { \mathrm {~d} t } = \frac { m g } { B L ^ { 2 } h }$ | M0.5 | Correct equation |
| This is a first order differential equation in $\frac { d v } { d t }$. Solving and integrating the expression: | M1 | Correct expression for $\frac { d v } { d t }$ |
| $v = \frac { m g \epsilon _ { 0 } ^ { 2 } B ^ { 2 } L ^ { 4 } R } { \left( m + \epsilon _ { 0 } B ^ { 2 } h L ^ { 2 } \right) ^ { 2 } } \left( 1 - e ^ { - \frac { h } { m L ^ { 2 } \epsilon _ { 0 } R } \left( m + \epsilon _ { 0 } B ^ { 2 } h L ^ { 2 } \right) t } \right) + \frac { m } { m + \epsilon _ { 0 } B ^ { 2 } h L ^ { 2 } } g t$ |  |  |

As $t \rightarrow \infty$, the acceleration of the rod approaches a constant value which is less than $g$ due to the resistance from continued current flow through the rod, which also approaches a constant value. (No credit should be given for answers which cite formulae without analysis.)
