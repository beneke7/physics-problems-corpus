---
id: solution-ocr-spot-2023-s-q7
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2023-q7]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
7. Weather balloons float at high altitudes and need to withstand very low temperatures and pressures. When inflated, the effective radial tension on the surface of a spherical balloon of radius $r$ is given by

$$
F _ { T } = 16 \pi r _ { 0 } \kappa R T \left( \lambda - \frac { 1 } { \lambda ^ { 5 } } \right) ,
$$

where $r _ { 0 }$ is the radius of the balloon when there is no tension, $\lambda \equiv r / r _ { 0 }$ is the size inflation ratio, $\kappa$ is a constant with dimensions of inverse area, $R$ is the molar gas constant, and $T$ is the temperature of the air.

(a) Find the pressure difference $\Delta p$ between the air inside and outside the balloon, giving your answer in terms of $\lambda , T , r _ { 0 }$ and other constants.
(b) Determine the maximum pressure difference $\Delta p _ { m }$ as a function of $T$ and the radius $r _ { m }$ in terms of $r _ { 0 }$ that achieves this value.

The constant $\kappa$ can be determined from the amount of gas required to inflate a balloon. Suppose at ground level, the temperature is $T _ { 0 } = 290 \mathrm {~K}$ and the pressure is $p _ { 0 } = 1.01 \times$ $10 ^ { 5 } \mathrm {~Pa}$.

An unstretched balloon of radius $r _ { 0 }$ contains $n _ { i } = 10 \mathrm {~mol}$ of helium. After the balloon is pumped with helium so that it contains a total of $n _ { f } = 40 \mathrm {~mol}$ of helium, the balloon has a radius $r = 1.5 r _ { 0 }$.

(c) Determine the value of $\kappa$ for this balloon.

Solution: Adapted from IPhO 2004 T2.

(a) The work needed to increase the radius from $r$ to $r + d r$ when the pressure difference is $\Delta p$ is
$$
d W = \Delta p \cdot 4 \pi r ^ { 2 } d r
$$
The increase in elastic energy for the same change in $r$ is
$$
d U = F _ { T } d r = 16 \pi r _ { 0 } \kappa R T \left( \frac { r } { r _ { 0 } } - \frac { r _ { 0 } ^ { 5 } } { r ^ { 5 } } \right) d r
$$

Equating the two,

$$
\Delta p = \frac { 16 \pi r _ { 0 } \kappa R T \left( \frac { r } { r _ { 0 } } - \frac { r _ { 0 } ^ { 5 } } { r ^ { 5 } } \right) } { 4 \pi r ^ { 2 } } = \frac { 4 \kappa R T } { r _ { 0 } } \left( \frac { 1 } { \lambda } - \frac { 1 } { \lambda ^ { 7 } } \right) .
$$

1 - Increase in elastic energy
1 - Correct $\Delta p$

Alternative approach by using force on an infinitesimal section to get $\Delta p$ also acceptable

(b) The maximum value can be found by differentiating with respect to $\lambda$ :
$$
\frac { d ( \Delta p ) } { d \lambda } = \frac { 4 \kappa R T } { r _ { 0 } } \left( - \frac { 1 } { \lambda ^ { 2 } } + \frac { 7 } { \lambda ^ { 8 } } \right) .
$$
Therefore,
$$
\begin{aligned}
\lambda & = 7 ^ { \frac { 1 } { 6 } } \\
r _ { m } & = 7 ^ { \frac { 1 } { 6 } } r _ { 0 } \\
\Delta p _ { m } & = \frac { 24 \kappa R T } { 7 ^ { \frac { 1 } { 6 } } r _ { 0 } }
\end{aligned}
$$
    1 - Differentiating to find stationary values
    1 - Correct $r _ { m }$
    1 - Correct $\Delta p _ { m }$
(c) Using the ideal gas equation,
$$
\begin{aligned}
p _ { i } V _ { i } & = n _ { i } R T _ { i } \\
p _ { f } V _ { f } & = n _ { f } R T _ { f }
\end{aligned}
$$
We know that $T _ { i } = T _ { f }$, and since $V _ { f } = \lambda ^ { 3 } V _ { i }$ where $\lambda = 1.5$, we get
$$
p _ { f } = \frac { n _ { f } } { n _ { i } \lambda ^ { 3 } } p _ { i } .
$$
But we also know that
$$
p _ { f } = p _ { i } + \Delta p = p _ { i } + \frac { 4 \kappa R T } { r _ { 0 } } \left( \frac { 1 } { \lambda } - \frac { 1 } { \lambda ^ { 7 } } \right)
$$
Therefore,
$$
\frac { 4 \kappa R T } { r _ { 0 } } \left( \frac { 1 } { \lambda } - \frac { 1 } { \lambda ^ { 7 } } \right) = \left( \frac { n _ { f } } { n _ { i } \lambda ^ { 3 } } - 1 \right) p _ { i }
$$
This means that
$$
\kappa = \frac { r _ { 0 } } { 4 R T } \left( \frac { 1 } { \lambda } - \frac { 1 } { \lambda ^ { 7 } } \right) ^ { - 1 } \left( \frac { n _ { f } } { n _ { i } \lambda ^ { 3 } } - 1 \right) p _ { i }
$$
Our last task is to find the value of $r _ { 0 }$. This can be found using the ideal gas equation for the non-inflated balloon:
$$
\begin{gathered}
p _ { 0 } \cdot \frac { 4 } { 3 } \pi r _ { 0 } ^ { 3 } = n _ { 0 } R T _ { 0 } \\
r _ { 0 } = 0.38 \mathrm {~m}
\end{gathered}
$$

Substituting in the numbers,

$$
\kappa = 1.2 \mathrm {~m} ^ { - 2 } .
$$

1 - Ideal gas equation and realising that volume scales with $\lambda ^ { 3 }$
1 - Equating expressions for pressure
1 - Expression for $\kappa$
1 - Expression for $r _ { 0 }$ using non-inflated balloon
1 - Value of $\kappa$

Q7 total: 10
