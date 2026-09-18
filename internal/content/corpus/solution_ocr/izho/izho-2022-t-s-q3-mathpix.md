---
id: solution-ocr-izho-2022-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2022_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2022-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3. Corpuscular interpretation of light pressure ( $\mathbf { 1 0 . 0 }$ points) Introduction

3.1 Let the concentration of photons with the energy $\varepsilon$ in the incident radiation be equal to $n$, then the wave intensity is determined by the relation

$$
\begin{equation*}
I _ { 0 } = c \varepsilon n , \tag{1}
\end{equation*}
$$

where $c$ stands for the speed of light.
The number of photons $\Delta N$ falling on the area element $\Delta S$ at the angle $\varphi$ per unit of time is written as

$$
\begin{equation*}
\Delta N = c n \Delta t \Delta S \cos \varphi . \tag{2}
\end{equation*}
$$

The number of absorbed photons per unit of time is found as follows

$$
\begin{equation*}
\Delta N _ { a } = ( 1 - R ) \Delta N , \tag{3}
\end{equation*}
$$

whereas the number of reflected ones

$$
\begin{equation*}
\Delta N _ { r } = R \Delta N . \tag{4}
\end{equation*}
$$

The normal component of the momentum, transferred by one photon to the area element upon absorption, is equal to

$$
\begin{equation*}
\Delta p _ { a } = \frac { \varepsilon } { c } \cos \varphi , \tag{5}
\end{equation*}
$$

and the same value at reflection is put down as

$$
\begin{equation*}
\Delta p _ { r } = 2 \frac { \varepsilon } { c } \cos \varphi . \tag{6}
\end{equation*}
$$

The total momentum transferred to the area element is determined by the expression

$$
\begin{equation*}
\Delta p = \Delta N _ { a } \Delta p _ { a } + \Delta N _ { r } \Delta p _ { r } , \tag{7}
\end{equation*}
$$

and the pressure sought is calculated by the formula


$$
\begin{equation*}
p _ { s } = \frac { \Delta p } { \Delta S \Delta t } = \frac { I _ { 0 } } { c } ( 1 + R ) \cos ^ { 2 } \varphi . \tag{8}
\end{equation*}
$$

3.2 At normal incidence $\varphi = 0$ and at complete absorption $R = 0$, we obtain

$$
\begin{equation*}
p _ { s } = \frac { I _ { s } } { c } = 4.70 \cdot 10 ^ { - 6 } \mathrm {~Pa} . \tag{9}
\end{equation*}
$$

and, accordingly, at total reflection $R = 1$

$$
\begin{equation*}
p _ { s } = \frac { 2 I _ { s } } { c } = 9.40 \cdot 10 ^ { - 6 } \mathrm {~Pa} . \tag{10}
\end{equation*}
$$

3.3 Consider a section of the spherical surface perpendicular to the incident light flux. For the mirror part of the surface, which completely reflects light, the mechanical torque is equal to zero, since the transmitted momentum is directed strictly along the radius of the sphere.
![](../../../figures/solution-ocr/8e3f902b7d71fc0ed70c7420.jpg)

Let us consider a strip in the section located from the center of the sphere at distances from $x$ to $x + d x$. The selected part of the completely absorbing surface has the area

$$
\begin{equation*}
d S = 2 \sqrt { R ^ { 2 } - x ^ { 2 } } d x \tag{11}
\end{equation*}
$$

and the number of absorbed photons per unit time is equal to

$$
\begin{equation*}
\Delta N _ { a } = \frac { I _ { s } } { \varepsilon } d S , \tag{12}
\end{equation*}
$$

each of which has the momentum

$$
\begin{equation*}
\Delta p _ { a } = \frac { \varepsilon } { c } . \tag{13}
\end{equation*}
$$

The force shoulder is

$$
\begin{equation*}
l = x , \tag{14}
\end{equation*}
$$

therefore, the torque of forces acting on the selected area is obtained as

$$
\begin{equation*}
d M = \Delta N _ { a } \Delta p _ { a } l = \frac { 2 I _ { s } } { c } \sqrt { R ^ { 2 } - x ^ { 2 } } x d x \tag{15}
\end{equation*}
$$

and the total torque of forces is determined by the integral

$$
\begin{equation*}
M = \int _ { 0 } ^ { R } d M = \frac { 2 I _ { s } R ^ { 3 } } { 3 c } = 3.13 \cdot 10 ^ { - 6 } \mathrm {~N} \cdot \mathrm {~m} . \tag{16}
\end{equation*}
$$

## Space station with the mirror sail

3.4 At the initial rest point of the station of mass $m$ with the sail of area $S$, located at the distance $R _ { 0 }$ from the Sun of mass $M _ { S }$, the gravitational force is exactly balanced by the light pressure force, which leads to the equation

$$
\begin{equation*}
G \frac { M _ { S } m } { R _ { 0 } ^ { 2 } } = \frac { 2 n _ { 0 } \varepsilon } { c } S , \tag{17}
\end{equation*}
$$

where $G$ refers to the gravitational constant, $n _ { 0 }$ is the concentration of photons of solar radiation with energy $\varepsilon$ at the location of the station.


Due to the spherically symmetric expansion, the photon concentration changes with the distance $r$ from the Sun according to the law

$$
\begin{equation*}
n ( r ) = n _ { 0 } \left( \frac { R _ { 0 } } { r } \right) ^ { 2 } . \tag{18}
\end{equation*}
$$

The initial momentum of photons before the collision with the sail is written as

$$
\begin{equation*}
p _ { 0 } = \frac { \varepsilon } { c } , \tag{19}
\end{equation*}
$$

whereas the final one constitutes

$$
\begin{equation*}
p = \frac { \varepsilon } { c } \frac { c - V } { c + V } . \tag{20}
\end{equation*}
$$

This relationship is easily obtained from the kinematics and is actually the formula for the Doppler effect. In addition, the momentum of a photon after reflection from the sail mirror can be easily obtained from the laws of conservation of momentum and energy by considering an absolutely elastic collision of a photon with a moving massive mirror.

Thus, the change in the momentum of the photon is transferred to the mirror and is equal to

$$
\begin{equation*}
\Delta p = p - p _ { 0 } = \frac { 2 \varepsilon } { c + V } , \tag{21}
\end{equation*}
$$

and the number of photons falling per unit time $\Delta t$ on the sail is derived as

$$
\begin{equation*}
\frac { \Delta N } { \Delta t } = n ( r ) S ( c - V ) . \tag{22}
\end{equation*}
$$

Hence, the force acting on the station due to the solar radiation is determined by the expression

$$
\begin{equation*}
f = \Delta p \frac { \Delta N } { \Delta t } = 2 n _ { 0 } \varepsilon S \left( \frac { R _ { 0 } } { r } \right) ^ { 2 } \frac { c - V } { c + V } = G \frac { M _ { S } m } { r ^ { 2 } } \frac { c - V } { c + V } . \tag{23}
\end{equation*}
$$

The station is also subject to the force of gravitational attraction from the Sun

$$
\begin{equation*}
f _ { g } = G \frac { M _ { S } m } { r ^ { 2 } } . \tag{24}
\end{equation*}
$$

which means that the motion of the station in the radial direction is described by Newton's second law in the form

$$
\begin{equation*}
m \frac { d V } { d t } = f - f _ { g } = - 2 G \frac { M _ { s } m } { r ^ { 2 } } \frac { V } { c + V } . \tag{25}
\end{equation*}
$$

Bearing in mind that for a small displacement

$$
\begin{equation*}
d r = V d t , \tag{26}
\end{equation*}
$$

we obtain from expression (25) the differential equation

$$
\begin{equation*}
( c + V ) d V = - 2 G M _ { s } \frac { d r } { r ^ { 2 } } , \tag{27}
\end{equation*}
$$

which is easily integrated and, if the station stops, gives rise to

$$
\begin{equation*}
c V _ { 0 } + \frac { 1 } { 2 } V _ { 0 } ^ { 2 } = 2 G M _ { S } \left( \frac { 1 } { R _ { 0 } } - \frac { 1 } { R } \right) . \tag{28}
\end{equation*}
$$

Solving equation (28), we find the distance sought as

$$
\begin{equation*}
R = \frac { R _ { 0 } } { 1 - \frac { \left( c V _ { 0 } + 1 / 2 V _ { 0 } ^ { 2 } \right) R _ { 0 } } { 2 G M _ { S } } } , \tag{29}
\end{equation*}
$$

which, under the condition of the Earth's orbital motion

$$
\begin{equation*}
G M _ { S } = V _ { E } ^ { 2 } r _ { E } , \tag{30}
\end{equation*}
$$

as well as the relation $V \ll c$, yields the final answer of the form

$$
\begin{equation*}
R = \frac { R _ { 0 } } { 1 - \frac { c V _ { 0 } R _ { 0 } } { 2 V _ { E } ^ { 2 } r _ { E } } } = 9.93 \cdot 10 ^ { 10 } \mathrm {~m} . \tag{31}
\end{equation*}
$$


3.5 It follows from formula (31) that the station is able to fly away to infinity $R \rightarrow \infty$ only if the denominator of the expression becomes zero, which results in

$$
\begin{equation*}
V _ { \min } = \frac { 2 V _ { E } ^ { 2 } r _ { E } } { c R _ { 0 } } = 18.1 \mathrm {~m} / \mathrm { s } . \tag{32}
\end{equation*}
$$

## Poynting-Robertson effect

3.6 The mass of the dust particle is determined by the expression

$$
\begin{equation*}
m = \rho \frac { 4 } { 3 } \pi a ^ { 3 } , \tag{33}
\end{equation*}
$$

and its cross-sectional area is

$$
\begin{equation*}
S = \pi a ^ { 2 } . \tag{34}
\end{equation*}
$$

Let us determine the effective force acting on the particle as a result of light absorption. To reduce it to the pressure of light, let us move to the frame of reference associated with the dust particle. In this frame of reference, the particle is affected by the pressure of light, calculated by formula (9), but its direction does not coincide with the radial one due to the aberration of light, namely, it makes a small angle $V / c$ with it. Thus, in the tangential direction of the particle trajectory, a force appears due to the absorption of photons, equal to

$$
\begin{equation*}
F = - V \frac { I _ { S } } { c ^ { 2 } } S , \tag{35}
\end{equation*}
$$

which creates a torque about the center of attraction found as

$$
\begin{equation*}
M = - F R . \tag{36}
\end{equation*}
$$

Since the trajectory of the dust particle is almost circular, its velocity can be written as

$$
\begin{equation*}
V = \sqrt { \frac { G M _ { S } } { R } } , \tag{37}
\end{equation*}
$$

and the angular momentum relative to the attracting center

$$
\begin{equation*}
L = m V R . \tag{38}
\end{equation*}
$$

Collecting equations (33)-(38) together, we write

$$
\begin{equation*}
\frac { d L } { d t } = M , \tag{39}
\end{equation*}
$$

whence we finally find the time sought in the following form

$$
\begin{equation*}
\tau = \frac { 2 \mu \rho a c ^ { 2 } } { 3 I _ { s } } = 1.27 \cdot 10 ^ { 8 } \mathrm {~s} . \tag{40}
\end{equation*}
$$

At the derivation, change in the intensity of solar radiation with distance is neglected, since the radius of the orbit decreases only slightly and the corresponding corrections are of higher order of smallness. Note: A consistent explanation of the Poynting-Robertson effect is based on the following interpretation. In the reference frame associated with the particle, it absorbs the solar radiation, which propagates at a small angle to the radial direction, and then reradiates the accumulated energy isotropically in all directions. In the reference frame associated with the Sun, the primary radiation of the Sun propagates in the radial direction, and the reradiation of the particle itself is no longer isotropic. In the first case, the appearance of the braking force moment is explained by the aberration of solar radiation, whereas in the second case, by the Doppler effect for the reradiation of the particle itself.

## Laser tweezer

3.7 Let us calculate the force acting on the first converging lens, which is equal to the total change in the momentum of photons incident on the lens per unit time. Obviously, the momentum changes due to the refraction of light in the glass, since its direction changes, but not the module.

Consider all the rays passing through the ring on the lens, located from its center at distances from $r$ to $r + d r$.


![](../../../figures/solution-ocr/aeed5b34eb74278ab8799b5f.jpg)

The area of this ring is written as

$$
\begin{equation*}
d S = 2 \pi r d r . \tag{41}
\end{equation*}
$$

The change in the longitudinal momentum of photons passing through the given ring per unit time is equal to

$$
\begin{equation*}
d p _ { \| } = \frac { I } { c } ( 1 - \cos \theta ) d S , \tag{42}
\end{equation*}
$$

where the angle of refraction is found as folows

$$
\begin{equation*}
\sin \theta = \frac { r } { F } , \tag{43}
\end{equation*}
$$

since all rays converge at the focus of the lens.
Integrating the resulting expression over the entire surface of the lens, we obtain

$$
\begin{equation*}
f _ { \| } = \int _ { 0 } ^ { R } d p _ { \| } = \frac { \pi I } { c } \left( R ^ { 2 } - \frac { 2 } { 3 F } \left[ F ^ { 3 } - \left( F ^ { 2 } - R ^ { 2 } \right) ^ { 3 / 2 } \right] \right) \approx \frac { \pi I R ^ { 4 } } { 4 c F ^ { 2 } } = 2.64 \cdot 10 ^ { - 17 } \mathrm {~N} . \tag{44}
\end{equation*}
$$

Since the foci of the lens $L$ and the particle $M$ coincide, when leaving the "lens-particle" system, the light beam propagates again parallel to the optical axis, and, therefore, as a result of refraction on the particle $M$, the photon momentum is restored. Consequently, the force acting on the particle $M$ is equal in magnitude to $f _ { \| }$, but is directed towards the converging lens. This force draws the particle into the laser radiation field. This is the principle of operation of the "laser tweezer".
3.8 Consider all the rays passing through the element of the semiring on the lens, located from its center at distances from $r$ to $r + d r$, and also cut off by azimuth angles from $\beta$ to $\beta + d \beta$. The area of this semicircle element is derived as

$$
\begin{equation*}
d S = r d r d \beta . \tag{45}
\end{equation*}
$$

The change in the transverse momentum of photons passing through the given ring per unit time is equal to

$$
\begin{equation*}
d p _ { \perp } = \frac { I } { c } \sin \theta \sin \beta d S , \tag{46}
\end{equation*}
$$

and integration over the entire surface of the half of the lens, taking into account formula (43), leads to the expression

$$
\begin{equation*}
f _ { \perp } = \int d p _ { \perp } = \frac { I } { c F } \int _ { 0 } ^ { \pi } \int _ { 0 } ^ { R } r ^ { 2 } d r \sin \beta d \beta = \frac { 2 I R ^ { 3 } } { 3 c F } = 2.24 \cdot 10 ^ { - 16 } \mathrm {~N} . \tag{47}
\end{equation*}
$$

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 3.1 | Formula (1): $I _ { 0 } = c \varepsilon n$ | 0.1 | 0.8 |
|  | Formula (2): $\Delta N = c n \Delta t \Delta S \cos \varphi$ | 0.1 |  |
|  | Formula (3): $\Delta N _ { a } = ( 1 - R ) \Delta N$ | 0.1 |  |
|  | Formula (4): $\Delta N _ { r } = R \Delta N$ | 0.1 |  |
|  | Formula (5): $\Delta p _ { a } = \frac { \varepsilon } { c } \cos \varphi$ | 0.1 |  |


|  | Formula (6): $\Delta p _ { r } = 2 \frac { \varepsilon } { c } \cos \varphi$ | 0.1 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (7): $\Delta p = \Delta N _ { a } \Delta p _ { a } + \Delta N _ { r } \Delta p _ { r }$ | 0.1 |  |
|  | Formula (8): $p _ { s } = \frac { I _ { 0 } } { c } ( 1 + R ) \cos ^ { 2 } \varphi$ | 0.1 |  |
| 3.2 | Formula (9): $p _ { s } = \frac { I _ { s } } { c }$ | 0.1 | 0.4 <br> 0.4 |
|  | Numerical value in formula (9): $p _ { s } = 4.70 \cdot 10 ^ { - 6 } \mathrm {~Pa}$ | 0.1 |  |
|  | Formula (10): $p _ { s } = \frac { 2 I _ { s } } { c }$ | 0.1 |  |
|  | Numerical value in formula (10): $p _ { s } = 9.40 \cdot 10 ^ { - 6 } \mathrm {~Pa}$ | 0.1 |  |
| 3.3 | Moment of forces on the mirror part of the sphere $M = 0$ | 0.1 | 1.0 |
|  | Formula (11): $d S = 2 \sqrt { R ^ { 2 } - x ^ { 2 } } d x$ | 0.1 |  |
|  | Formula (12): $\Delta N _ { a } = \frac { I _ { s } } { \varepsilon } d S$ | 0.1 |  |
|  | Formula (13): $\Delta p _ { a } = \frac { \varepsilon } { c }$ | 0.1 |  |
|  | Formula (14): $l = x$ | 0.1 |  |
|  | Formula (15): $d M = \frac { 2 I _ { \mathrm { s } } } { c } \sqrt { R ^ { 2 } - x ^ { 2 } } d x$ | 0.1 |  |
|  | Formula (16): $M = \frac { 2 I _ { s } R ^ { 3 } } { 3 c }$ | 0.2 |  |
|  | Numerical value in formula (16): $M = 3.13 \cdot 10 ^ { - 6 } \mathrm {~N} \cdot \mathrm {~m}$ | 0.2 |  |
| 3.4 | Formula (17): $G \frac { M _ { s } m } { R _ { 0 } ^ { 2 } } = \frac { 2 n _ { 0 } \varepsilon } { c } S$ | 0.4 | 3.6 |
|  | Formula (18): $n ( r ) = n _ { 0 } \left( \frac { R _ { 0 } } { r } \right) ^ { 2 }$ | 0.2 |  |
|  | Formula (19): $p _ { 0 } = \frac { \varepsilon } { c }$ | 0.1 |  |
|  | Formula (20): $p = \frac { \varepsilon } { c } \frac { c - V } { c + V }$ | 0.2 |  |
|  | Formula (21): $\Delta p = p - p _ { 0 } = \frac { 2 \varepsilon } { c + V }$ | 0.1 |  |
|  | Formula (22): $\frac { \Delta N } { \Delta t } = n ( r ) S ( c - V )$ | 0.2 |  |
|  | Formula (23): $f = G \frac { M _ { s } m } { r ^ { 2 } } \frac { c - V } { c + V }$ | 0.2 |  |
|  | Formula (24): $f _ { g } = G \frac { M _ { s } m } { r ^ { 2 } }$ | 0.2 |  |
|  | Formula (25): $m \frac { d V } { d t } = - 2 G \frac { M _ { S } m } { r ^ { 2 } } \frac { V } { c + V }$ | 0.4 |  |
|  | Formula (26): $d r = V d t$ | 0.2 |  |
|  | Formula (27): $( c + V ) d V = - 2 G M _ { S } \frac { d r } { r ^ { 2 } }$ | 0.2 |  |


|  | Formula (28): $c V _ { 0 } + \frac { 1 } { 2 } V _ { 0 } ^ { 2 } = 2 G M _ { S } \left( \frac { 1 } { R _ { 0 } } - \frac { 1 } { R } \right)$ | 0.2 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (29): $R = \frac { R _ { 0 } } { 1 - \frac { \left( c V _ { 0 } + 1 / 2 V _ { 0 } ^ { 2 } \right) R _ { 0 } } { 2 G M _ { S } } }$ | 0.2 |  |
|  | Formula (30): $G M _ { S } = V _ { E } ^ { 2 } r _ { E }$ | 0.2 |  |
|  | Formula (31): $R = \frac { R _ { 0 } } { 1 - \frac { c V _ { 0 } R _ { 0 } } { 2 V _ { E } ^ { 2 } r _ { E } } }$ | 0.4 |  |
|  | Numerical value in formula (31): $R = 9.93 \cdot 10 ^ { 10 } \mathrm {~m}$ | 0.2 |  |
| 3.5 | Formula (32): $V _ { \text {min } } = \frac { 2 V _ { E } ^ { 2 } r _ { E } } { c R _ { 0 } }$ | 0.2 | 0.4 |
|  | Numerical value in formula (32): $V _ { \text {min } } = 18.1 \mathrm {~m} / \mathrm { s }$ | 0.2 |  |
| 3.6 | Formula (33): $m = \rho \frac { 4 } { 3 } \pi a ^ { 3 }$ | 0.1 | 2.0 |
|  | Formula (34): $S = \pi a ^ { 2 }$ | 0.1 |  |
|  | Formula (35): $F = - V \frac { I _ { S } } { c ^ { 2 } } S$ | 0.4 |  |
|  | Formula (36): $M = F R$ | 0.2 |  |
|  | Formula (37): $V = \sqrt { \frac { G M _ { S } } { R } }$ | 0.2 |  |
|  | Formula (38): $L = m V R$ | 0.2 |  |
|  | Formula (39): $\frac { d L } { d t } = M$ | 0.2 |  |
|  | Formula (40): $\tau = \frac { 2 \mu \rho a c ^ { 2 } } { 3 I _ { s } }$ | 0.4 |  |
|  | Numerical value in formula (40): $\tau = 1.27 \cdot 10 ^ { 8 } \mathrm {~s}$ | 0.2 |  |
| 3.7 | Formula (41): $d S = 2 \pi r d r$ | 0.1 | 1.0 |
|  | Formula (42): $d p _ { \\| } = \frac { I } { c } ( 1 - \cos \theta ) d S$ | 0.2 |  |
|  | Formula (43): $\sin \theta = \frac { r } { F }$ | 0.2 |  |
|  | Formula (44): $f _ { \\| } = \frac { \pi I } { c } \left( R ^ { 2 } - \frac { 2 } { 3 F } \left[ F ^ { 3 } - \left( F ^ { 2 } - R ^ { 2 } \right) ^ { 3 / 2 } \right] \right) \approx \frac { \pi I R ^ { 4 } } { 4 c F ^ { 2 } }$ | 0.3 |  |
|  | Numerical value in formula (44): $f _ { \\| } = 2.64 \cdot 10 ^ { - 17 } \mathrm {~N}$ | 0.2 |  |
| 3.8 | Formula (45): $d S = r d r d \beta$ | 0.1 | 0.8 |
|  | Formula (46): $d p _ { \perp } = \frac { I } { C } \sin \theta \sin \beta d S$ | 0.2 |  |
|  | Formula (47): $f _ { \perp } = \frac { 2 I R ^ { 3 } } { 3 c F }$ | 0.3 |  |
|  | Numerical value in formula (47): $f _ { \perp } = 2.24 \cdot 10 ^ { - 16 } \mathrm {~N}$ | 0.2 |  |
| Total |  |  | 10.0 |
