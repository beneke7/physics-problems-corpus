---
id: solution-ocr-ipho-2011-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2011/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2011-t3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
QUESTION 3: SOLUTION

1. Using Coulomb's Law, we write the electric field at a distance $r$ is given by
$$
\begin{align*}
& E _ { p } = \frac { q } { 4 \pi \varepsilon _ { 0 } ( r - a ) ^ { 2 } } - \frac { q } { 4 \pi \varepsilon _ { 0 } ( r + a ) ^ { 2 } } \\
& E _ { p } = \frac { q } { 4 \pi \varepsilon _ { 0 } r ^ { 2 } } \left( \frac { 1 } { \left( 1 - \frac { a } { r } \right) ^ { 2 } } - \frac { 1 } { \left( 1 + \frac { a } { r } \right) ^ { 2 } } \right) \tag{1}
\end{align*}
$$
Using binomial expansion for small $a$,
$$
\begin{align*}
E _ { p } & = \frac { q } { 4 \pi \varepsilon _ { 0 } r ^ { 2 } } \left( 1 + \frac { 2 a } { r } - 1 + \frac { 2 a } { r } \right) \\
& = + \frac { 4 q a } { 4 \pi \varepsilon _ { 0 } r ^ { 3 } } = + \frac { q a } { \pi \varepsilon _ { 0 } r ^ { 3 } }  \tag{2}\\
& = \frac { 2 p } { 4 \pi \varepsilon _ { 0 } r ^ { 3 } }
\end{align*}
$$
2. The electric field seen by the atom from the ion is
$$
\begin{equation*}
\vec { E } _ { i o n } = - \frac { Q } { 4 \pi \varepsilon _ { 0 } r ^ { 2 } } \hat { r } \tag{3}
\end{equation*}
$$
The induced dipole moment is then simply
$$
\begin{equation*}
\vec { p } = \alpha \vec { E } _ { \text {ion } } = - \frac { \alpha Q } { 4 \pi \varepsilon _ { 0 } r ^ { 2 } } \hat { r } \tag{4}
\end{equation*}
$$
From eq. (2)
$$
\vec { E } _ { p } = \frac { 2 p } { 4 \pi \varepsilon _ { 0 } r ^ { r } } \hat { r }
$$
The electric field intensity $\vec { E } _ { p }$ at the position of an ion at that instant is, using eq. (4),
$$
\vec { E } _ { p } = \frac { 1 } { 4 \pi \varepsilon _ { 0 } r ^ { 3 } } \left[ - \frac { 2 \alpha Q } { 4 \pi \varepsilon _ { 0 } r ^ { 2 } } \hat { r } \right] = - \frac { \alpha Q } { 8 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 5 } } \hat { r }
$$
The force acting on the ion is
$$
\begin{equation*}
\vec { f } = Q \vec { E } _ { p } = - \frac { \alpha Q ^ { 2 } } { 8 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 5 } } \hat { r } \tag{5}
\end{equation*}
$$
The "-" sign implies that this force is attractive and $Q ^ { 2 }$ implies that the force is attractive regardless of the sign of $Q$.

3. The potential energy of the ion-atom is given by $U = \int _ { r } ^ { \infty } \vec { f } . d \vec { r }$ $\_\_\_\_$ (6)
Using this, $U = \int _ { r } ^ { \infty } \vec { f } . d \vec { r } = - \frac { \alpha Q ^ { 2 } } { 32 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 4 } }$ (7)

[Remark: Students might use the term $- \vec { p } \cdot \vec { E }$ which changes only the factor in front.]

4. At the position $r _ { \text {min } }$ we have, according to the Principle of Conservation of Angular Momentum,
$$
\begin{align*}
m v _ { \max } r _ { \min } & = m v _ { 0 } b \\
v _ { \max } & = v _ { 0 } \frac { b } { r _ { \min } } \tag{8}
\end{align*}
$$
And according to the Principle of Conservation of Energy:
$$
\begin{equation*}
\frac { 1 } { 2 } m v _ { \max } ^ { 2 } + \frac { - \alpha Q ^ { 2 } } { 32 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } r ^ { 4 } } = \frac { 1 } { 2 } m v _ { 0 } ^ { 2 } \tag{9}
\end{equation*}
$$
Eqs.(12) \& (13):
$$
\begin{align*}
\left( \frac { b } { r _ { \min } } \right) ^ { 2 } - \frac { \alpha Q ^ { 2 } / \frac { 1 } { 2 } m v _ { 0 } ^ { 2 } } { 32 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } b ^ { 4 } } \left( \frac { b } { r _ { \min } } \right) ^ { 4 } & = 1 \\
\left( \frac { r _ { \min } } { b } \right) ^ { 4 } - \left( \frac { r _ { \min } } { b } \right) ^ { 2 } + \frac { \alpha Q ^ { 2 } } { 16 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m v _ { 0 } ^ { 2 } b ^ { 4 } } & = 0 \tag{10}
\end{align*}
$$
The roots of eq. (14) are:
$$
\begin{equation*}
r _ { \min } = \frac { b } { \sqrt { 2 } } \left[ 1 \pm \sqrt { 1 - \frac { \alpha Q ^ { 2 } } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m v _ { 0 } ^ { 2 } b ^ { 4 } } } \right] ^ { \frac { 1 } { 2 } } \tag{11}
\end{equation*}
$$
[Note that the equation (14) implies that $r _ { \text {min } }$ cannot be zero, unless $b$ is itself zero.] Since the expression has to be valid at $Q = 0$, which gives
$$
r _ { \min } = \frac { b } { \sqrt { 2 } } [ 1 \pm 1 ] ^ { \frac { 1 } { 2 } }
$$
We have to choose " + " sign to make $r _ { \text {min } } = b$
Hence,
$$
\begin{equation*}
r _ { \min } = \frac { b } { \sqrt { 2 } } \left[ 1 + \sqrt { 1 - \frac { \alpha Q ^ { 2 } } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m v _ { 0 } ^ { 2 } b ^ { 4 } } } \right] ^ { \frac { 1 } { 2 } } \tag{12}
\end{equation*}
$$

5. A spiral trajectory occurs when (16) is imaginary (because there is no minimum distance of approach).
$r _ { \text {min } }$ is real under the condition:

$$
\begin{align*}
& 1 \geq \frac { \alpha Q ^ { 2 } } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m v _ { 0 } ^ { 2 } b ^ { 4 } } \\
& b \geq b _ { 0 } = \left( \frac { \alpha Q ^ { 2 } } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m v _ { 0 } ^ { 2 } } \right) ^ { \frac { 1 } { 4 } } \tag{13}
\end{align*}
$$

For $b < b _ { 0 } = \left( \frac { \alpha Q ^ { 2 } } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m v _ { 0 } ^ { 2 } } \right) ^ { \frac { 1 } { 4 } }$ the ion will collide with the atom.
Hence the atom, as seen by the ion, has a cross-sectional area $A$,

$$
\begin{equation*}
A = \pi b _ { 0 } ^ { 2 } = \pi \left( \frac { \alpha Q ^ { 2 } } { 4 \pi ^ { 2 } \varepsilon _ { 0 } ^ { 2 } m v _ { 0 } ^ { 2 } } \right) ^ { \frac { 1 } { 2 } } \tag{14}
\end{equation*}
$$
