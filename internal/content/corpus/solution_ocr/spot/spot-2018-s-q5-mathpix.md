---
id: solution-ocr-spot-2018-s-q5
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2018-q5]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 5 Blackbody radiation

5(a)(i) Stationary waves in cavity, and use $\varepsilon = h c / \lambda$.
5(a)(ii) The 3d wave-vector is $\vec { k } = \left( k _ { x } , k _ { y } , k _ { z } \right)$ and the energy of the photon is $\varepsilon = \hbar \omega$, with $\omega = c | \vec { k } |$. Get

$$
\varepsilon = \frac { h c } { 2 L } \sqrt { n _ { 1 } ^ { 2 } + n _ { 2 } ^ { 2 } + n _ { 3 } ^ { 2 } }
$$

5(b)(i) Note that expectation values are defined as

$$
\langle r \rangle = \sum r P ( r )
$$

Several students wrote this as integrals even though $r$ is a discrete variable, not a continuous variable. The simplest approach is to differentiate the natural logarithm of the partition function (using the partition function as a sum of terms as defined) with respect to the inverse temperature, and compare the expression given with the expectation value of $r$.

5(b)(ii) Use the result of part (b)(i) and the expression for the partition function as an infinite geometric sum.

5(c)(i) Use the substitution

$$
\epsilon _ { i } = \frac { n _ { i } h c } { 2 L }
$$

to convert the sum to an integral, which becomes exact in the limit of $L \rightarrow \infty$.


The 3d integral over the octant where $\epsilon _ { i } > 0$ can be conveniently performed in spherical coordinates due to the symmetry of the integrand. Make the replacement

$$
\int _ { 0 } ^ { \infty } \int _ { 0 } ^ { \infty } \int _ { 0 } ^ { \infty } d \epsilon _ { 1 } d \epsilon _ { 2 } d \epsilon _ { 3 } \longrightarrow \frac { 1 } { 8 } \int _ { 0 } ^ { \infty } 4 \pi \epsilon ^ { 2 } d \epsilon
$$

and then substitute $\nu = \epsilon / \hbar$ to get the expression

$$
u _ { \nu } = \frac { 8 \pi h \nu ^ { 3 } } { c ^ { 3 } } \frac { 1 } { e ^ { \beta h \nu } - 1 }
$$

5(c)(ii) Obtain the leading approximations in the small $\nu$ and large $\nu$ regimes respectively.
