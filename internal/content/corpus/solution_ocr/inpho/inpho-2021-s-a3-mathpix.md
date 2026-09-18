---
id: solution-ocr-inpho-2021-s-a3
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2021-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Consider an electron (mass $m$, magnitude of charge $e$ ) moving initially around a nucleus of charge $2 e$ in a circular orbit of radius $10 ^ { - 10 } \mathrm {~m}$. In this problem we use SI units throughout and neglect all relativistic effects.
(a) [2 marks] Obtain the expression for the frequency, $f$, of the electron in the circular orbit (numerical value is not required).

Solution:
The centripetal force for the circular motion of the electron is provided by the Coulomb attraction of the nucleus. Let $r$ be the radius of the circular orbit, and $v$ the speed of the electron in this orbit, then

$$
\begin{align*}
\frac { m v ^ { 2 } } { r } & = \frac { 2 e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 2 } }  \tag{3.1}\\
f & = \frac { v } { 2 \pi r } = \left( \frac { 2 } { 4 \pi \epsilon _ { 0 } m } \right) ^ { 1 / 2 } \frac { e } { 2 \pi r ^ { 3 / 2 } } \tag{3.2}
\end{align*}
$$

From classical electrodynamics, we know that an accelerated electron radiates energy. The expression for the power $P$ of this radiation is given by

$$
P = K \epsilon _ { 0 } ^ { w } e ^ { x } a ^ { y } c ^ { z }
$$

where $a$ is the acceleration, $c$ is the speed of light, $\epsilon _ { 0 }$ is the permittivity of free space, and $K$ is a dimensionless constant.

(b) [2 marks] Obtain $\{ w , x , y , z \}$ using dimensional analysis.
Solution: $w = - 1 , x = 2 , y = 2 , z = - 3$

Due to the loss of energy through radiation, the electron does not remain in the circular orbit, and gradually spirals into the nucleus. Take the constant $K$ to be $5.31 \times 10 ^ { - 2 }$.

(c) [5 marks] Let $T$ be the time it takes for the electron to reach the nucleus. Calculate $T$ if the radius of the nucleus is $10 ^ { - 14 } \mathrm {~m}$.

Solution:
The total energy of an electron in the orbit is

$$
\begin{align*}
E ( r ) & = - \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } } { r }  \tag{3.3}\\
- \dot { E } ( r ) & = - \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { e ^ { 2 } \dot { r } } { r ^ { 2 } } \tag{3.4}
\end{align*}
$$

the acceleration is

$$
\begin{equation*}
a = \frac { v ^ { 2 } } { r } = \frac { 1 } { 4 \pi \epsilon _ { 0 } } \frac { 2 e ^ { 2 } } { m r ^ { 2 } } \tag{3.5}
\end{equation*}
$$

We use Eq. (3.5) in the power radiated, which yields the energy loss rate

$$
\begin{equation*}
- \dot { E } ( r ) = - K \frac { 1 } { \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } } \frac { 4 e ^ { 6 } } { \epsilon _ { 0 } c ^ { 3 } m ^ { 2 } r ^ { 4 } } \tag{3.6}
\end{equation*}
$$

Here negative sign indicates that the energy of the electron is decreasing. Combining


Eqs. (3.4) and (3.6)

$$
\begin{equation*}
r ^ { 2 } d r = - \frac { K 4 e ^ { 4 } } { \left( 4 \pi \epsilon _ { 0 } \right) \epsilon _ { 0 } c ^ { 3 } m ^ { 2 } } d t \tag{3.7}
\end{equation*}
$$

Integrating the equation

$$
\begin{equation*}
\int _ { 10 ^ { - 10 } } ^ { 10 ^ { - 14 } } r ^ { 2 } d r = - \frac { K 4 e ^ { 4 } } { \left( 4 \pi \epsilon _ { 0 } \right) \epsilon _ { 0 } c ^ { 3 } m ^ { 2 } } \int _ { 0 } ^ { T } d t \tag{3.8}
\end{equation*}
$$

which yields

$$
\begin{equation*}
T \sim \frac { 10 ^ { - 30 } } { 48 \pi } \frac { \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } c ^ { 3 } m ^ { 2 } } { K e ^ { 4 } } \sim 5.26 \times 10 ^ { - 11 } \mathrm {~s} . \tag{3.9}
\end{equation*}
$$
