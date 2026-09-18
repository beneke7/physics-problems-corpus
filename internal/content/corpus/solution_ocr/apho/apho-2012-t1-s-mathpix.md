---
id: solution-ocr-apho-2012-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2012/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2012-t1]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
13 Uho
May 01-07, 2012

Detailed Answer \&
Grading Scheme
Theory Question I
Page 1 of 3

I. 1. Equation of motion for the magnet is
$$
\begin{equation*}
m \ddot { z } = m g - k \dot { z } \tag{1}
\end{equation*}
$$
For terminal velocity
$$
\ddot { z } = 0
$$
0.2 mark
which gives
$$
v _ { T } = \dot { z } = \frac { m g } { k }
$$
0.3 mark
I. 2. Rewriting Eq. (1)
$$
\frac { d v } { d t } = g - \frac { k } { m } v ( t )
$$
Given that $v ( t = 0 ) = 0 ; z ( t = 0 ) = 0$ which yields
$$
\begin{aligned}
v ( t ) & = \frac { m g } { k } \left( 1 - e ^ { - k t / m } \right) = \frac { d z } { d t } \\
\int _ { 0 } ^ { z } d z & = \int _ { 0 } ^ { t } \frac { m g } { k } \left( 1 - e ^ { - k t / m } \right) d t \\
z ( t ) & = \frac { m g } { k } \left[ t + \frac { m } { k } \left( e ^ { - k t / m } - 1 \right) \right]
\end{aligned}
$$
0.5 mark
0.5 mark

I.3. Method - I : Because of the relative speed $v$ between the magnet and the ring, in the field $\vec { B } = B _ { z } \hat { k } + B _ { \rho } \hat { \rho }$ of the magnet, the induced emf is given by

$$
\begin{aligned}
e _ { i } & = \int ( \vec { v } \times \vec { B } ) \cdot d \vec { l } \\
e _ { i } & = v B _ { a } 2 \pi a
\end{aligned}
$$

0.8 mark
0.4 mark
where

$$
\begin{equation*}
B _ { a } = \frac { \mu _ { 0 } } { 4 \pi } \frac { 3 p a \left( z _ { 0 } - z \right) } { \left[ a ^ { 2 } + \left( z _ { 0 } - z \right) ^ { 2 } \right] ^ { 5 / 2 } } \tag{2}
\end{equation*}
$$

0.3 mark

Method - II :Magnetic flux $( \phi )$ through the ring is

$$
\begin{array} { r l r }
\phi & = \int _ { 0 } ^ { a } B _ { z } 2 \pi \rho d \rho & \\
& = 2 \pi \int _ { 0 } ^ { a } \frac { \mu _ { 0 } } { 4 \pi } \frac { \rho p } { \left( \rho ^ { 2 } + \left( z _ { 0 } - z \right) ^ { 2 } \right) ^ { 3 / 2 } } \left[ \frac { 3 \left( z _ { 0 } - z \right) ^ { 2 } } { \rho ^ { 2 } + \left( z _ { 0 } - z \right) ^ { 2 } } - 1 \right] d \rho & 0.2 \text { mark } \\
\phi & = \frac { \mu _ { 0 } p a ^ { 2 } } { 2 \left( a ^ { 2 } + \left( z _ { 0 } - z \right) ^ { 2 } \right) ^ { 3 / 2 } } & 0.3 \text { mark } \\
e _ { i } & = \frac { - d \phi } { d t } = - v \frac { d \phi } { d z } & 0.4 \text { mark } \\
e _ { i } & = \frac { \mu _ { 0 } 3 p a ^ { 2 } v \left( z _ { 0 } - z \right) } { 2 \left[ a ^ { 2 } + \left( z _ { 0 } - z \right) ^ { 2 } \right] ^ { 5 / 2 } } & 0.4 \text { mark } \tag{0.4 mark}
\end{array}
$$


13 Cho
May 01-07, 2012

Detailed Answer \&
Grading Scheme
Theory Question I
Page 2 of 3

I. 4. $B _ { z }$ component will cause a radially outward force on the ring and by symmetry this yields a null force. 0.4 mark
Only $B _ { \rho }$ will contribute to
$$
\begin{aligned}
\overrightarrow { d f } _ { e m } & = i ( d \vec { l } \times \vec { B } ) \\
\left| \vec { f } _ { e m } \right| & = i 2 \pi a B _ { a }
\end{aligned}
$$
0.6 mark
where $B _ { a }$ is given by Eq. (2).
I. 5. By Newton's third law, equal and opposite force will be exerted by the ring on the magnet. Hence the magnitude of the force on the magnet by the ring is $f _ { e m }$.
0.5 mark
I. 6. $e _ { i } = L \frac { d i } { d t } + i R$ 0.5 mark
I.7. Potential energy is converted to three parts:

| (a) $m v ^ { 2 } / 2$ (kinetic energy) |
| :--- |

0.3 mark


    (b) $L i ^ { 2 } / 2$ (magnetic energy) 0.3 mark
    (c) $i ^ { 2 } R \Delta t$ (Joule loss due to the current in time $\Delta t$ ). 0.4 mark
I.8. The magnetic field does no work in the process.

| Yes |  |
| :--- | :--- |
| No | ✓ |

0.5 mark
I. 9. Resistance of the ring
$$
\Delta R = \frac { 2 \pi a } { \sigma w \Delta z ^ { \prime } }
$$
0.5 mark
I. 10. Now, the net force on the magnet, due to one ring at $z ^ { \prime }$ is given by
$$
f _ { e m } = ( 2 \pi a ) i B _ { a } ^ { \prime }
$$
where
$$
B _ { a } ^ { \prime } = \frac { \mu _ { 0 } } { 4 \pi } \frac { 3 p a \left( z ^ { \prime } - z \right) } { \left( a ^ { 2 } + \left( z ^ { \prime } - z \right) ^ { 2 } \right) ^ { 5 / 2 } }
$$
0.3 mark
and $i$ is the induced current in the ring which is given by
$$
i = \frac { e _ { i } } { \Delta R } = \frac { \sigma w e _ { i } } { 2 \pi a } \Delta z ^ { \prime }
$$
0.5 mark
Then the net force on the magnet due to the entire pipe is given by
$$
F = \int _ { - \infty } ^ { \infty } f _ { e m } = \int _ { - \infty } ^ { \infty } B _ { a } ^ { \prime 2 } ( 2 \pi a ) w \sigma d z ^ { \prime } . \dot { z }
$$
0.2 mark

$13 { } ^ { \text {th } }$ Asian Physics Olympiad
May 01-07, 2012

Detailed Answer \&
Grading Scheme
Theory Question I
Page 3 of 3

Since the pipe is very long the limits of integration can be taken as $- \infty$ and $\infty$. Substituting $B _ { a } ^ { \prime }$, we get

$$
F = \left( \frac { \mu _ { 0 } } { 4 \pi } \right) ^ { 2 } 18 p ^ { 2 } a ^ { 3 } \pi w \sigma \dot { z } \int _ { - \infty } ^ { \infty } \frac { \left( z ^ { \prime } - z \right) ^ { 2 } } { \left( \left( z ^ { \prime } - z \right) ^ { 2 } + a ^ { 2 } \right) ^ { 5 } } d z ^ { \prime }
$$

0.5 mark
Let $u = \left( z ^ { \prime } - z \right) / a$. Finally,

$$
F = \left( \frac { \mu _ { 0 } } { 4 \pi } \right) ^ { 2 } \frac { 18 p ^ { 2 } \pi \sigma w \dot { z } } { a ^ { 4 } } \int _ { - \infty } ^ { \infty } \frac { u ^ { 2 } } { \left( 1 + u ^ { 2 } \right) ^ { 5 } } d u
$$

Thus damping parameter

$$
k = \left( \frac { \mu _ { 0 } } { 4 \pi } \right) ^ { 2 } \frac { 18 p ^ { 2 } \pi \sigma w } { a ^ { 4 } } \int _ { - \infty } ^ { \infty } \frac { u ^ { 2 } } { \left( 1 + u ^ { 2 } \right) ^ { 5 } } d u
$$

0.5 mark
I.11. Given that,

$$
k = f \left( \mu _ { 0 } , p , R _ { 0 } , a \right)
$$

Dimensions of various parameters involved are

$$
\begin{aligned}
{ \left[ \mu _ { 0 } \right] } & = I ^ { - 2 } M L T ^ { - 2 } \\
{ [ p ] } & = I L ^ { 2 } \\
{ \left[ R _ { 0 } \right] } & = I ^ { - 2 } M L ^ { 2 } T ^ { - 3 } \\
{ [ a ] } & = L \\
{ [ k ] } & = = M T ^ { - 1 }
\end{aligned}
$$

0.2 mark
0.1 mark
0.2 mark
which gives

$$
k = \frac { p ^ { 2 } \mu _ { o } ^ { 2 } } { a ^ { 4 } R _ { 0 } }
$$

0.5 mark
