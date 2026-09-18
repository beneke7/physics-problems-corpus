---
id: solution-ocr-usapho-2018-s-b3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2018-b3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question B3
Radiation pressure from the sun is responsible for cleaning out the inner solar system of small particles.

a. The force of radiation on a spherical particle of radius $r$ is given by
$$
F = P Q \pi r ^ { 2 }
$$
where $P$ is the radiation pressure and $Q$ is a dimensionless quality factor that depends on the relative size of the particle $r$ and the wavelength of light $\lambda$. Throughout this problem assume that the sun emits a single wavelength $\lambda _ { \text {max } }$; unless told otherwise, leave your answers in terms of symbolic variables.
    i. Given that the total power radiated from the sun is given by $L _ { \odot }$, find an expression for the radiation pressure a distance $R$ from the sun.

## Solution

We will assume that light from the sun is completely absorbed, and then re-radiated as blackbody isotropically. In that case,

$$
P = \frac { I } { c } = \frac { L _ { \odot } } { 4 \pi R ^ { 2 } c } .
$$

The relationship between the pressure $P$ and the energy density $I$ can be derived from the equation $p = E / c$ for photons, or simply postulated by dimensional analysis, since there is no other relevant speed.
Alternatively, this relation can be derived using classical electromagnetism, though this was not required. For a plane wave, the momentum density (i.e. pressure) of the electromagnetic field is $P = \epsilon _ { 0 } | \mathbf { E } \times \mathbf { B } |$, while the energy density is $I = | \mathbf { S } | / c$ where $\mathbf { S } = \mathbf { E } \times \mathbf { B } / \mu _ { 0 }$. Then $P = I / c$ since $c ^ { 2 } = 1 / \epsilon _ { 0 } \mu _ { 0 }$.

ii. Assuming that the particle has a density $\rho$, derive an expression for the ratio $\frac { F _ { \text {radiation } } } { F _ { \text {gravity } } }$ in terms of $L _ { \odot }$, mass of sun $M _ { \odot } , \rho$, particle radius $r$, and quality factor $Q$.

## Solution

We have

$$
F _ { \text {gravity } } = \frac { G M _ { \odot } } { R ^ { 2 } } \frac { 4 } { 3 } \pi \rho r ^ { 3 } , \quad F _ { \text {radiation } } = \frac { L _ { \odot } } { 4 \pi R ^ { 2 } c } Q \pi r ^ { 2 } = \frac { L _ { \odot } } { 4 R ^ { 2 } c } Q r ^ { 2 }
$$

which gives

$$
\frac { F _ { \text {radiation } } } { F _ { \text {gravity } } } = \frac { 3 L _ { \odot } } { 16 \pi G c M _ { \odot } \rho } \frac { Q } { r } .
$$

iii. The quality factor is given by one of the following
    - If $r \ll \lambda , Q \sim ( r / \lambda ) ^ { 2 }$

Copyright ©2018 American Association of Physics Teachers


- If $r \sim \lambda , Q \sim 1$.
- If $r \gg \lambda , Q = 1$

Considering the three possible particle sizes, which is most likely to be blown away by the solar radiation pressure?

## Solution

In order to be blown away, the ratio should be greater than one. Since it is independent of distance from the sun, if it is blown away, it will be blown away at any distance. For $r \gg \lambda$, the ratio is proportional to $1 / r$, so smaller particles are more likely to be blown away. For $r \ll \lambda$, the ratio is proportional to $r$, so larger particles are more likely to be blown away. Thus particles of size near $\lambda$ are most likely to be blown away, and even then, only if the density is small enough.

b. The Poynting-Robertson effect acts as another mechanism for cleaning out the solar system.
    i. Assume that a particle is in a circular orbit around the sun. Find the speed of the particle $v$ in terms of $M _ { \odot }$, distance from sun $R$, and any other fundamental constants.

## Solution

Using the circular motion equation

$$
\frac { G M _ { \odot } } { R ^ { 2 } } = \frac { v ^ { 2 } } { R }
$$

we have

$$
v = \sqrt { \frac { G M _ { \odot } } { R } } .
$$


ii. Because the particle is moving, the radiation force is not directed directly away from the sun. Find the torque $\tau$ on the particle because of radiation pressure. You may assume that $v \ll c$.

## Solution

Work in the reference frame of the particle. In this frame, the radiation hits the particle at an angle $\theta = v / c$ from the radial direction. The particle then re-emits the radiation isotropically, contributing no additional radiation pressure. (We ignore relativistic effects because they occur at second order in $v / c$, while the effect we care about is first order.) The tangential component of the force is

$$
F = \frac { v } { c } \frac { L _ { \odot } } { 4 \pi R ^ { 2 } c } Q \pi r ^ { 2 } = \frac { v } { c } \frac { L _ { \odot } } { 4 R ^ { 2 } c } Q r ^ { 2 }
$$

so

$$
\tau = - \frac { v } { c } \frac { L _ { \odot } } { 4 R c } Q r ^ { 2 }
$$


where the negative sign is because this tends to decrease the angular momentum.
The problem can also be solved in the reference frame of the Sun. In this frame, the radiation hits the particle radially, but the particle does not re-emit the radiation isotropically since it is moving; instead the radiation is Doppler shifted. This eventually leads to the same result, after a much more complicated calculation.
iii. Since $\tau = d L / d t$, the angular momentum $L$ of the particle changes with time. As such, develop a differential equation to find $d R / d t$, the rate of change of the radial location of the particle. You may assume the orbit is always quasi circular.

## Solution

The angular momentum is

$$
L = m v R = \frac { 4 } { 3 } \pi \rho r ^ { 3 } \sqrt { \frac { G M _ { \odot } } { R } } R = \frac { 4 } { 3 } \pi \rho r ^ { 3 } \sqrt { G M _ { \odot } R } .
$$

Differentiating both sides with respect to time,

$$
- \frac { v } { c } \frac { L _ { \odot } } { 4 R c } Q r ^ { 2 } = \frac { 4 } { 3 } \pi \rho r ^ { 3 } \sqrt { \frac { G M _ { \odot } } { R } } \frac { 1 } { 2 } \frac { d R } { d t }
$$

which simplifies to

$$
- \frac { 1 } { c ^ { 2 } } \frac { L _ { \odot } } { R } Q = \frac { 8 } { 3 } \pi \rho r \frac { d R } { d t } .
$$

iv. Develop an expression for the time required to remove particles of size $r \approx 1 \mathrm {~cm}$ and density $\rho \approx 1000 \mathrm {~kg} / \mathrm { m } ^ { 3 }$ originally in circular orbits at a distance $R = R _ { \text {earth } }$, and use the numbers below to simplify your expression.

## Solution

Integrating both sides,

$$
T \frac { L _ { \odot } Q } { c ^ { 2 } } = \frac { 4 } { 3 } \pi \rho r R ^ { 2 } .
$$

Since $r \gg \lambda$, we have $Q = 1$ and

$$
T = \frac { 4 } { 3 } \frac { \pi c ^ { 2 } } { L _ { \odot } } \rho r R ^ { 2 } \approx 2 \times 10 ^ { 14 } \mathrm {~s} \approx 7 \times 10 ^ { 6 } \mathrm { y }
$$

Some useful constants include

$$
\begin{array} { r r r }
M _ { \odot } & = & 1.989 \times 10 ^ { 30 } \mathrm {~kg} \\
L _ { \odot } & = & 3.828 \times 10 ^ { 26 } \mathrm {~W} \\
R _ { \text {earth } } & = & 1.5 \times 10 ^ { 11 } \mathrm {~m} \\
\lambda _ { \max } & = & 500 \mathrm {~nm}
\end{array}
$$

Copyright ©2018 American Association of Physics Teachers


## Answer Sheets

Following are answer sheets for some of the graphical portions of the test.


Student AAPT ID \#:

Proctor AAPT ID \#:
Question A2

a. Sketch a graph of the current versus voltage for low temperature values $k _ { B } T \ll q V _ { 0 }$, clearly indicating any asymptotic behavior.

![](../../../figures/solution-ocr/f108b18afdb04f81eb2a35f1.jpg)


Student AAPT ID \#:

Proctor AAPT ID \#:
Question A2

b. Sketch the potential difference $V _ { C D } = V _ { C } - V _ { D }$ as a function of time. For your convenience, $V _ { A B }$ is shown in light gray. Assume that $V _ { A B }$ has been running for a long time. There is no capacitor in this circuit!
![](../../../figures/solution-ocr/dd64b408591aa70265cb7d75.jpg)

Student AAPT ID \#:

Proctor AAPT ID \#:
Question A2

c. Sketch the potential difference $V _ { C D } = V _ { C } - V _ { D }$ as a function of time. For your convenience, $V _ { A B }$ is shown in light gray. Assume that $V _ { A B }$ has been running for a long time. There is a capacitor in this circuit!
![](../../../figures/solution-ocr/f9a4d619acd7cd75870c02a4.jpg)


[^0]:    ${ } ^ { 1 }$ See https://arxiv.org/pdf/chem-ph/9508002.pdf for more details if you are interested.
