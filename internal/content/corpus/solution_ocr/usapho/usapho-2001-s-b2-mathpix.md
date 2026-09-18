---
id: solution-ocr-usapho-2001-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2001_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2001-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
B2. a. (5) The magnetic force is

$$
\vec { F } = q \vec { v } \times \vec { B } .
$$

Inserting the expressions for the velocity and magnetic field and taking the cross product,

$$
\begin{gathered}
\vec { F } = q \left( v _ { r } \hat { u } _ { r } + r \omega \hat { u } _ { \theta } \right) \times B _ { o } \hat { u } _ { z } = q B _ { o } \left( v _ { r } \hat { u } _ { r } \times \hat { u } _ { z } + r \omega \hat { u } _ { \theta } \times \hat { u } _ { z } \right) \\
\vec { F } = q B _ { o } \left( r \omega \hat { u } _ { r } - v _ { r } \hat { u } _ { \theta } \right)
\end{gathered}
$$

b. (5) At any instant the displacement is in the direction of the velocity while the force is perpendicular to it. Therefore

$$
W = 0 .
$$

Or

$$
d W = \vec { F } \cdot d \vec { l } = \vec { F } \cdot \vec { v } d t = q ( \vec { v } \times \vec { B } ) \cdot \vec { v } d t = 0
$$

c. (8) The magnetic force does no work. The other force has an associated potential energy. Using the work-energy theorem which reduces to conservation of mechanical energy,

$$
U _ { o } + K _ { o } = U + K
$$

Since the particle is initially at rest. its initial kinetic energy is zero. $K _ { o } = 0$
Substituting the energy terms

$$
- \frac { k } { r _ { o } ^ { 2 } } = \frac { 1 } { 2 } m v ^ { 2 } - \frac { k } { r ^ { 2 } } ,
$$

Where

$$
v ^ { 2 } = \left( v _ { r } \hat { u } _ { r } + r \omega \hat { u } _ { \theta } \right) \cdot \left( v _ { r } \hat { u } _ { r } + r \omega \hat { u } _ { \theta } \right) = v _ { r } ^ { 2 } + r ^ { 2 } \omega ^ { 2 }
$$


Combining the last two equations

$$
\begin{equation*}
- \frac { k } { r _ { 0 } ^ { 2 } } = - \frac { k } { r ^ { 2 } } + \frac { 1 } { 2 } m \left( v _ { r } ^ { 2 } + r ^ { 2 } \omega ^ { 2 } \right) \tag{B2-1}
\end{equation*}
$$

d. (7) The torque about the $z$-axis is $\vec { \tau } = \vec { r } \times \vec { F } = r \hat { u _ { r } } \times \vec { F }$. The other force $\vec { F } = - \frac { 2 k } { r ^ { 3 } } \hat { u } _ { r }$ contributes no torque, since $\hat { u } _ { r } \times \hat { u } _ { r } = 0$. Therefore the net torque is due to the magnetic force

$$
\vec { \tau } = r \hat { u } _ { r } \times q B _ { o } \left( r o \hat { u } _ { r } - v _ { r } \hat { u } _ { \theta } \right) = - q B _ { o } r v _ { r } \hat { u } _ { z }
$$

e. (5) The net torque is equal to the time rate of change of angular momentum. The radial component of the velocity $v _ { r }$ is equal to the time rate of change of $r$.

$$
\begin{gathered}
\frac { d \vec { L } } { d t } = \vec { \tau } = - q B _ { o } r v _ { r } \hat { u } _ { z } = - q B _ { o } r \frac { d r } { d t } \hat { u } _ { z } = - q B _ { o } \frac { 1 } { 2 } \frac { d r ^ { 2 } } { d t } \hat { u } _ { z } \\
\frac { d } { d t } \left( \vec { L } + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } \hat { u } _ { z } \right) = 0
\end{gathered}
$$

Or

$$
\vec { L } + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } \dot { u } _ { z } = \vec { C } ,
$$

where $\vec { C }$ is a constant vector.

$$
\vec { L } = \vec { C } - q B _ { o } \frac { 1 } { 2 } r ^ { 2 } \hat { u } _ { z }
$$

Dropping the vector notation since all motion occurs in the $x y$-plane,

$$
L = C - q B _ { o } \frac { 1 } { 2 } r ^ { 2 }
$$

f. (5) For a particle the magnitude of the angular momentum about the $z$-axis can be written

$$
L = m r ^ { 2 } \omega .
$$

Combining the last two equations

$$
m r ^ { 2 } ( t ) = C - q B _ { o } \frac { 1 } { 2 } r ^ { 2 }
$$

Or

$$
m r ^ { 2 } w + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } = C
$$

The constant $C$ can be evaluated in terms of the initial conditions

$$
m r ^ { 2 } \omega + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } = m r _ { o } ^ { 2 } \omega _ { o } + q B _ { o } \frac { 1 } { 2 } r _ { o } ^ { 2 }
$$

since the particle is initially at rest $\omega _ { o } = 0$ and

$$
m r ^ { 2 } \omega + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } = q B _ { o } \frac { 1 } { 2 } r _ { o } ^ { 2 }
$$

Solving for $\omega$, we have

$$
\begin{align*}
m r ^ { 2 } \omega & = q B _ { o } \frac { 1 } { 2 } \left( r _ { o } ^ { 2 } - r ^ { 2 } \right) \\
\omega & = \frac { q B _ { o } } { 2 m } \left( \frac { r _ { o } ^ { 2 } } { r ^ { 2 } } - 1 \right) \tag{B2-2}
\end{align*}
$$

g. (5) At $r _ { \text {min } } , v _ { T } = 0$, Equation (B2-1) becomes

$$
- \frac { k } { r _ { a } ^ { 2 } } = - \frac { k } { r _ { \text {min } } ^ { 2 } } + \frac { 1 } { 2 } m r _ { \text {min } } ^ { 2 } \omega ^ { 2 }
$$

Bring the other k term to the left and substituting equation (B2-2) at $r _ { \mathrm { min } }$


$$
\frac { k } { r _ { \min } ^ { 2 } } - \frac { k } { r _ { o } ^ { 2 } } = \frac { 1 } { 2 } m r _ { \min } ^ { 2 } \left( \frac { q B _ { 0 } } { 2 m } \left( \frac { r _ { 0 } ^ { 2 } } { r _ { \min } ^ { 2 } } - 1 \right) \right) ^ { 2 }
$$

or multiplying by $r _ { \text {min } } { } ^ { 2 } r _ { o } { } ^ { 2 } , \quad k \left( r _ { o } { } ^ { 2 } - r _ { \text {min } } { } ^ { 2 } \right) = \frac { r _ { o } { } ^ { 2 } q ^ { 2 } B _ { o } { } ^ { 2 } } { 8 m } \left( r _ { o } { } ^ { 2 } - r _ { \text {min } } { } ^ { 2 } \right) ^ { 2 }$.
Canceling the common factor

$$
k = \frac { r _ { 0 } { } ^ { 2 } q ^ { 2 } B _ { o } { } ^ { 2 } } { 8 m } \left( r _ { 0 } { } ^ { 2 } - r _ { \mathrm { min } } { } ^ { 2 } \right)
$$

and solving for

$$
\begin{equation*}
r _ { \mathrm { min } } ^ { 2 } = r _ { 0 } ^ { 2 } - \frac { 8 \mathrm {~km} } { q ^ { 2 } B _ { o } ^ { 2 } r _ { o } ^ { 2 } } \tag{B2-3}
\end{equation*}
$$

h. (5) The particle will not reach the origin if $r _ { \mathrm { mn } } ^ { 2 } > 0$. From the preceding expression, this occurs when
or solving for

$$
\begin{gathered}
r _ { o } ^ { 2 } > \frac { 8 k m } { q ^ { 2 } B _ { o } ^ { 2 } r _ { o } ^ { 2 } } \\
B _ { o } ^ { 2 } > \frac { 8 k m } { q ^ { 2 } r _ { o } ^ { 4 } }
\end{gathered}
$$

Thus

$$
\left| B _ { o } \right| > \frac { 1 } { r _ { o } ^ { 2 } } \sqrt { \frac { 8 k m } { q ^ { 2 } } }
$$

i. (5) Evaluating equation (B2-2)
at $r = r _ { 0 }$
at $r = r _ { \text {min } }$

$$
\begin{aligned}
\omega _ { 0 } & = \frac { q B _ { 0 } } { 2 m } \left( \frac { r _ { 0 } ^ { 2 } } { r _ { 0 } ^ { 2 } } - 1 \right) = 0 \\
\omega & = \frac { q B _ { 0 } } { 2 m } \left( \frac { r _ { 0 } ^ { 2 } } { r _ { \min } ^ { 2 } } - 1 \right)
\end{aligned}
$$

combining with equation (B2-3) $\omega = \frac { q B _ { o } } { 2 m } \left( \frac { r _ { o } { } ^ { 2 } } { r _ { o } { } ^ { 2 } - \frac { 8 k m } { q ^ { 2 } B _ { o } { } ^ { 2 } r _ { o } { } ^ { 2 } } } - 1 \right) = \frac { q B _ { o } } { 2 m } \left( \frac { 1 } { 1 - \frac { 8 k m } { q ^ { 2 } B _ { o } { } ^ { 2 } r _ { o } { } ^ { 4 } } } - 1 \right)$.
For large $B _ { 0 } , \frac { 8 k m } { q ^ { 2 } B _ { o } { } ^ { 2 } r _ { o } { } ^ { 4 } }$ is small. Using the binomial expansion

$$
\omega = \frac { q B _ { o } } { 2 m } \left( 1 + \frac { 8 k m } { q ^ { 2 } B _ { o } ^ { 2 } r _ { o } ^ { 4 } } - 1 \right) = \frac { 4 k } { q B _ { o } r _ { o } ^ { 4 } }
$$
