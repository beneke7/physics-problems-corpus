---
id: solution-ocr-bpho-r1-2023-s-q5
source: bpho-r1
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/bpho-r1/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [bpho-r1-2023-2-q5]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Qu 5.

a) ![](../../../figures/solution-ocr/14c091593ac360fffee6c676.jpg)
    (i) With
$$
\begin{aligned}
R & = \frac { \rho \ell } { w t } = \frac { 1.5 \times 10 ^ { - 7 } \times 0.3 } { 4 \times 10 ^ { - 3 } \times 10 \times 10 ^ { - 6 } } \\
& = 1.125 \Omega \\
& = 1.13 = 1.1 \Omega
\end{aligned}
$$
    (ii) Substituting into $R = R _ { 0 } ( 1 + \alpha \theta )$
$$
\begin{aligned}
& R = 1.125 \left( 1 + 3.3 \times 10 ^ { - 3 } \times 15 \right) \\
& R = 1.18 \Omega = 1.2 \Omega
\end{aligned}
$$
    ✓ Hence $P = \frac { V ^ { 2 } } { R } \quad$ gives $\quad P = 3.39 = 3.4 \mathrm {~W}$
    (iii) Power loss $= k A ( \theta - 0 ) = k A \theta$
So
$$
\frac { V ^ { 2 } } { R _ { 0 } ( 1 + \alpha \theta ) } = k A \theta
$$
This gives
$$
k A R _ { 0 } \alpha \theta ^ { 2 } + R _ { 0 } k A \theta - V ^ { 2 } = 0
$$
✓
$$
\theta = \frac { - R _ { 0 } k A \pm \sqrt { R _ { 0 } ^ { 2 } k ^ { 2 } A ^ { 2 } + 4 R _ { 0 } \alpha k A V ^ { 2 } } } { 2 R _ { 0 } \alpha k A }
$$
$$
\begin{aligned}
& = - \frac { 1 } { 2 \alpha } \pm \frac { R _ { 0 } k A } { 2 \alpha R _ { 0 } k A } \sqrt { 1 + \frac { 4 \alpha V ^ { 2 } } { R _ { 0 } k A } } \\
& = \frac { 1 } { 2 \alpha } \left( - 1 + \sqrt { 1 + \frac { 4 \alpha V ^ { 2 } } { R _ { 0 } k A } } \right) \\
& = \frac { 1 } { 2 \times 3.3 \times 10 ^ { - 3 } } \left( - 1 + \sqrt { 1 + \frac { 4 \times 3.3 \times 10 ^ { - 3 } \times 4 } { 1.125 \times 22 \times 0.3 \times 4 \times 10 ^ { - } 3 \times 2 } } \right) \\
& = 57 ^ { \circ } \mathrm { C } \text { if front and back surfaces considered } ( 2 A )
\end{aligned}
$$
or 101 °C if only one surface is considered for $A$. Either answer is allowed.
✓
( 6 marks)
b) The filament has a transverse wave with a node in the middle and four loops
So that means that $2 \lambda = 25 \mathrm {~cm}$
✓
The speed of a transverse wave along a wire under tension $T$ is $v = \sqrt { \frac { T } { \mu } }$
So that using $v = f \lambda$ we can write $f ^ { 2 } \lambda ^ { 2 } = \frac { T } { \mu }$
We will need to know the mass per unit length, $\mu$, and we are given the density. We need to estimate the diameter of the filament.
It is greater than 0.1 mm and less then 10 mm so we can take 1 mm .
✓
$\mu = \frac { m } { \ell } = \frac { \rho A \ell } { \ell } = \rho A = \rho \pi \frac { \ell ^ { 2 } } { 2 }$
An estimate of $\mu$ is $19 \times 10 ^ { 3 } \times \pi \times \left( 0.5 \times 10 ^ { - 3 } \right) ^ { 2 } = 0.015 \mathrm {~kg} \mathrm {~m} ^ { - 2 }$
Hence $T = \left( 50 \times \frac { 0.25 } { 2 } \right) ^ { 2 } \times 0.015 = 0.6 \mathrm {~N}$
( 3 marks)

c) $J = \frac { I } { A }$ and $P = I ^ { 2 } R$
So $P = I ^ { 2 } R = J ^ { 2 } A ^ { 2 } \times \frac { \rho \ell } { A } = J ^ { 2 } A \rho \ell = J ^ { 2 } V \rho$ $\square$
( 1 marks)
d) For a balanced circuit $\frac { R _ { 2 } } { R _ { \text {bulb } } } = \frac { R _ { 1 } } { R _ { 3 } }$. In this case that means the the bulb must be the same as $R _ { 2 }$, i.e. $4 \Omega$ $\square$
So $R _ { \text {bulb } } = 4 \Omega = \frac { V } { I } = \frac { 2 I + 8 I ^ { 2 } } { I } = 2 + 8 I$ $\square$
this gives $I _ { \text {bulb } } = 0.25 \mathrm {~A}$
Each resistor has 0.25 A flowing through it, so $V _ { \mathrm { b } } = 2 \mathrm {~V}$ $\square$
( 3 marks)

e) Given that the maximum power converted in the cell is when the external resistance is equal to the internal resistance $R$, (notation "//" reads "is in parallel with"


(i) We have $\quad ( x + 1 ) R / / y R + x R = R$ $\square$
Hence
$$
\frac { ( x + 1 ) R \cdot y R } { ( x + 1 ) R + y R } + x R = R
$$
Cancelling $R ^ { \prime } s$ we have
$$
\frac { ( x + 1 ) y } { ( x + y + 1 ) } + x = 1
$$
then $\quad x y + y + x ( x + y + 1 ) = x + y + 1$
which gives $\quad x y + y + x ^ { 2 } + x + x y = x + y + 1$
$$
x ( 2 y + x ) = 1
$$
$2 x y + x ^ { 2 } - 1 = 0$ $\square$
(ii) Kirchhoff I for currents at a node $i _ { 1 } = i _ { 2 } + i _ { 3 }$
then
$$
\frac { i _ { 1 } } { i _ { 2 } } = 1 + \frac { i _ { 3 } } { i _ { 2 } }
$$
$\square$
So then
$$
\begin{aligned}
\frac { i _ { 1 } } { i _ { 2 } } & = 1 + \frac { i _ { 3 } } { i _ { 2 } } = 1 + \frac { V } { y R } / \frac { V } { x R + R } \\
& = 1 + \frac { x + 1 } { y } = \frac { ( x + y + 1 ) } { y }
\end{aligned}
$$
$\square$
(iii) • $P _ { \text {input } }$ is power delivered by the cell $\left( = E i _ { 1 } - i _ { 1 } ^ { 2 } R \right)$
but this is equal to the power dissipated in all the resistors. $\square$
    - Hence the required quantity is $\frac { i _ { 1 } ^ { 2 } x R + i _ { 2 } ^ { 2 } ( x + 1 ) R + i _ { 3 } ^ { 2 } y R } { i _ { 2 } ^ { 2 } R }$ □
$$
\begin{aligned}
& = \frac { i _ { 1 } ^ { 2 } } { i _ { 2 } ^ { 2 } } x + ( x + 1 ) + \frac { i _ { 3 } ^ { 2 } } { i _ { 2 } ^ { 2 } } \\
& = \frac { x } { y ^ { 2 } } ( y + x + 1 ) ^ { 2 } + ( x + 1 ) + \frac { y } { y ^ { 2 } } ( x + 1 ) ^ { 2 }
\end{aligned}
$$
using the previous results for $\frac { i _ { 1 } } { i _ { 2 } }$ and $\frac { i _ { 3 } } { i _ { 2 } } = \frac { ( y + 1 ) } { y }$
Now it is algebra and using the relation between $x$ and $y$ in part (i)
$$
\frac { P _ { \text {input } } } { P _ { \text {load } } } = \frac { x } { y ^ { 2 } } \left( \frac { 1 - x ^ { 2 } } { 2 x } + x + 1 \right) ^ { 2 } + x + 1 + \frac { 2 x } { 1 - x ^ { 2 } } ( x + 1 ) ^ { 2 }
$$

$$
\begin{aligned}
& = \frac { x } { y ^ { 2 } } \left( \frac { 1 - x ^ { 2 } + 2 x ^ { 2 } + 2 x } { 2 x } \right) ^ { 2 } + x + 1 + 2 x \frac { ( 1 + x ) } { ( 1 - x ) } \\
& = \frac { x } { y ^ { 2 } } \left( \frac { x ^ { 2 } + 2 x + 1 } { 2 x } \right) ^ { 2 } + \frac { \left( 1 - x ^ { 2 } + 2 x ^ { 2 } + 2 x \right) } { ( 1 - x ) } \\
& = \frac { x } { y ^ { 2 } } \frac { ( x + 1 ) ^ { 4 } } { 4 x ^ { 2 } } + \frac { ( 1 + x ) ^ { 2 } } { ( 1 - x ) } \\
& = ( x + 1 ) ^ { 2 } \left( \frac { ( x + 1 ) ^ { 2 } } { 4 x y ^ { 2 } } + \frac { 1 } { ( 1 - x ) } \right) \\
& = ( x + 1 ) ^ { 2 } \left( \frac { ( x + 1 ) ^ { 2 } 4 x ^ { 2 } } { 4 x \left( 1 - x ^ { 2 } \right) ^ { 2 } } + \frac { 1 } { ( 1 - x ) } \right) \\
& = \frac { ( x + 1 ) ^ { 2 } } { ( 1 - x ) } \left( \frac { ( x + 1 ) ^ { 2 } x } { ( 1 - x ) ( 1 + x ) ^ { 2 } } + 1 \right) \\
& = \frac { ( x + 1 ) ^ { 2 } } { ( 1 - x ) } \left( \frac { x + ( 1 - x ) } { ( 1 - x ) } \right) \\
& = \frac { ( 1 + x ) ^ { 2 } } { ( 1 - x ) ^ { 2 } }
\end{aligned}
$$
$\square$ $\square$

f) (i) The resistance between the two hemispheres is $R = \frac { \rho \delta r } { 2 \pi r ^ { 2 } }$


(ii) For a large value of $\delta r$ the area will change and so we need to sum the resistance contributions from each hemispherical layer of liquid.
Integrating up $\quad d R = \frac { \rho d r } { 2 \pi r ^ { 2 } }$ for a sphere of radius $r _ { \mathrm { s } }$ to $r _ { \text {large } }$
$$
\int _ { R _ { \mathrm { s } } } ^ { R _ { \text {large } } } d R = \int _ { r _ { \mathrm { s } } } ^ { r _ { \text {large } } } \frac { \rho d r } { 2 \pi r ^ { 2 } }
$$
As $r _ { \text {large } }$ tends to infinity then $1 / r _ { \text {large } }$ tends to zero. The resistance between the sphere and a distant surface (the tank) becomes $\Delta R = \frac { \rho } { 2 \pi r _ { \mathrm { s } } } = 95 = 100 \Omega$, $\square$
(iii) If a sphere is used instead, then the current flow lines will be the same but there will be two identical paths for the current flowing radially outwards from the sphere. So the resistance will be halved to $\Delta R = \frac { \rho } { 4 \pi r _ { \mathrm { s } } } = 50 \Omega$ $\square$
(iv) $\frac { \rho } { 2 \pi r }$

( 5 marks)
