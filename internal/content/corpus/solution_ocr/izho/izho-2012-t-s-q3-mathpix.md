---
id: solution-ocr-izho-2012-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2012_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2012-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3 <br> Nuclear droplet (10 points)

3.1 [2 points] We calculate the total electrostatic energy of the protons in the nucleus. Within the droplet model of the nuclear charge $Z e$ is uniformly distributed inside a sphere of radius $R$, so that its bulk density is the same everywhere and equal to

$$
\begin{equation*}
\rho _ { q } = \frac { 3 Q } { 4 \pi R ^ { 3 } } . \tag{1}
\end{equation*}
$$

Using the Gauss theorem, we find the electric field inside and outside the ball

$$
\begin{align*}
& E ( r ) 4 \pi r ^ { 2 } = \frac { 1 } { \varepsilon _ { 0 } } \rho _ { q } \frac { 4 \pi } { 3 } r ^ { 3 }  \tag{2}\\
& E ( r ) 4 \pi r ^ { 2 } = \frac { 1 } { \varepsilon _ { 0 } } \rho _ { q } \frac { 4 \pi } { 3 } R ^ { 3 } . \tag{3}
\end{align*}
$$

Hence we get

$$
E ( r ) = \left\{ \begin{array} { l l }
\frac { \rho _ { q } r } { 2 \varepsilon _ { 0 } } , & r \leq R  \tag{4}\\
\frac { \rho _ { q } R ^ { 3 } } { 2 \varepsilon _ { 0 } r ^ { 2 } } , & r > R
\end{array} \right. \text {. }
$$

Full electrostatic energy given by the integral

$$
\begin{equation*}
E _ { C } = \int _ { 0 } ^ { \infty } w 4 \pi r ^ { 2 } d r = \int _ { 0 } ^ { \infty } \frac { \varepsilon _ { 0 } E ^ { 2 } } { 2 } 4 \pi r ^ { 2 } d r = \frac { 3 Q ^ { 2 } } { 20 \pi \varepsilon _ { 0 } R } \tag{5}
\end{equation*}
$$

3.2 [1 point] From (5), $Q = \operatorname { Ze }$ and $R ( A ) = R _ { 0 } A ^ { 1 / 3 }$ we see that the electrostatic energy corresponds to the third term in the Weizsacker semiempirical formula, so

$$
\begin{equation*}
a _ { 3 } \frac { Z ^ { 2 } } { A ^ { 1 / 3 } } = \frac { 3 Z ^ { 2 } e } { 20 \pi \varepsilon _ { 0 } R _ { 0 } A ^ { 1 / 3 } } \tag{6}
\end{equation*}
$$

whence

$$
\begin{equation*}
R _ { 0 } = \frac { 3 e } { 20 \pi \varepsilon _ { 0 } a _ { 3 } } = 1.2 \times 10 ^ { - 15 } \mathrm {~m} . \tag{7}
\end{equation*}
$$

3.3 [1 point] The density of nuclear matter is given by

$$
\begin{equation*}
\rho _ { m } = \frac { 3 A m } { 4 \pi R ^ { 3 } } = \frac { 3 m } { 4 \pi R _ { 0 } ^ { 3 } } = 2.3 \times 10 ^ { 17 } \mathrm {~kg} / \mathrm { m } ^ { 3 } . \tag{8}
\end{equation*}
$$

3.4 [1 point] The surface energy depends on surface tension

$$
\begin{equation*}
E _ { \text {sur } } = \sigma S = 4 \pi \sigma R ^ { 2 } = 4 \pi \sigma R _ { 0 } ^ { 2 } A ^ { 2 / 3 } . \tag{9}
\end{equation*}
$$

We conclude that the surface energy corresponds to the second term of the semi-empirical formula Weizsäcker

$$
\begin{equation*}
4 \pi \sigma R _ { 0 } ^ { 2 } A ^ { 2 / 3 } = e a _ { 2 } A ^ { 2 / 3 } \tag{10}
\end{equation*}
$$

whence

$$
\begin{equation*}
\sigma = \frac { e a _ { 2 } } { 4 \pi R _ { 0 } ^ { 2 } } = 1.5 \times 10 ^ { 17 } \mathrm {~N} / \mathrm { m } . \tag{11}
\end{equation*}
$$


3.5 [2 points] Nuclear fission becomes energetically favorable only if the potential energy of the nuclei decreases, that is,

$$
\begin{equation*}
E _ { p } ( A , Z ) - E _ { p } ( k A , k Z ) - E _ { p } ( ( 1 - k ) A , ( 1 - k ) Z ) > 0 \tag{12}
\end{equation*}
$$

which yields

$$
\begin{equation*}
\frac { Z ^ { 2 } } { A } > f ( k ) = - \frac { a _ { 2 } \left( 1 - k ^ { 2 / 3 } - ( 1 - k ) ^ { 2 / 3 } \right) } { a _ { 3 } \left( 1 - k ^ { 5 / 3 } - ( 1 - k ) ^ { 5 / 3 } \right) } . \tag{13}
\end{equation*}
$$

Graph of the function $f ( k )$ is presented below.
![](../../../figures/solution-ocr/f9ebc2a5d9c9fb3851f2fe31.jpg)
3.6 [0.5 points] The function $f ( k )$ is symmetric with respect to the point $k = 0.50$, so at this point and the minimum, which corresponds to

$$
\begin{equation*}
\left( Z ^ { 2 } / A \right) _ { 0 } = 16 . \tag{14}
\end{equation*}
$$

3.7 [0.5 points] Since the core is treated as a liquid, its volume should not change. Using the formula for the volume of an ellipsoid and the fact that $\varepsilon , \lambda \square 1$ we obtain

$$
\begin{equation*}
V = \frac { 4 \pi } { 3 } R ^ { 3 } ( 1 + \varepsilon - 2 \lambda ) = \frac { 4 \pi } { 3 } R ^ { 3 } \tag{15}
\end{equation*}
$$

whence

$$
\begin{equation*}
\varepsilon = 2 \lambda . \tag{16}
\end{equation*}
$$

3.8 [2 points] Based on Taylor's formula for small deformations of the nucleus, taking into account (16) the surface area of the liquid increases by

$$
\begin{equation*}
\Delta S = \frac { 32 } { 5 } \pi R ^ { 2 } \lambda ^ { 2 } = \frac { 32 } { 5 } \pi R _ { 0 } ^ { 2 } A ^ { 2 / 3 } \lambda ^ { 2 } \tag{17}
\end{equation*}
$$

and a corresponding increase in surface energy is equal to

$$
\begin{equation*}
\Delta E _ { \text {surf } } = \sigma \Delta S = \frac { 32 } { 5 } \pi \sigma R _ { 0 } ^ { 2 } A ^ { 2 / 3 } \lambda ^ { 2 } . \tag{18}
\end{equation*}
$$

Coulomb interaction energy of the protons is decreased by the

$$
\begin{equation*}
\Delta E _ { C } = \frac { 3 Z ^ { 2 } e ^ { 2 } } { 120 \pi \varepsilon _ { 0 } R } \varepsilon ( \varepsilon + \lambda ) = \frac { 3 Z ^ { 2 } e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } R _ { 0 } A ^ { 1 / 3 } } \lambda ^ { 2 } . \tag{19}
\end{equation*}
$$

Nucleus is unstable at the condition

$$
\begin{equation*}
\Delta E _ { C } > \Delta E _ { \text {surf } } \tag{20}
\end{equation*}
$$


whence

$$
\begin{equation*}
\left( Z ^ { 2 } / A \right) _ { c r r i t c a l } = \frac { 128 \pi ^ { 2 } \varepsilon _ { 0 } \sigma R _ { 0 } ^ { 3 } } { 3 e ^ { 2 } } = 37 . \tag{21}
\end{equation*}
$$
