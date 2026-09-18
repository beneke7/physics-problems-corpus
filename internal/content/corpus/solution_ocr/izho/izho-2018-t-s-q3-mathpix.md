---
id: solution-ocr-izho-2018-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2018_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2018-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Problem 3. Optics of moving media (10.0 points)
Part 1. 4-dimensional vectors (1,4 points)
1.1 [0,8 points] To bring the momentum and the energy to the same unit it is sufficient to divide the energy by the speed of light or to multiply the momentum by the speed of light. Moreover, by virtue of the principle of relativity, it is necessary to make the substitution $V \rightarrow - V$. Thus, one gets
$$
\begin{equation*}
p _ { x } ^ { \prime } = \frac { p _ { x } - ( V / c ) ( E / c ) } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } } , \tag{1}
\end{equation*}
$$


$$
\begin{align*}
& p _ { y } ^ { \prime } = p _ { y }  \tag{2}\\
& p _ { z } ^ { \prime } = p _ { z }  \tag{3}\\
& E ^ { \prime } / c = \frac { E / c - ( V / c ) p _ { x } } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } } . \tag{4}
\end{align*}
$$

1.2 [0,6 points] In any inertial frame of reference the expression for the momentum is written as

$$
\begin{equation*}
p = \frac { m v } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } , \tag{5}
\end{equation*}
$$

and the expression for the total energy has the form

$$
\begin{equation*}
E = \frac { m c ^ { 2 } } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } . \tag{6}
\end{equation*}
$$

This implies that the invariant sought is equal to

$$
\begin{equation*}
i n v = E ^ { 2 } - p ^ { 2 } c ^ { 2 } = m ^ { 2 } c ^ { 4 } . \tag{7}
\end{equation*}
$$

## Part 2. Doppler effect and light aberration (4,6 points)

2.1 [1,0 points] Since the rest mass of photons is zero, it follows from (7) that the momentum and energy of a photon are related as follows

$$
\begin{equation*}
p = \frac { E } { c } . \tag{8}
\end{equation*}
$$

It is known that the photon energy is given by the Planck formula as

$$
\begin{equation*}
E = \hbar \omega . \tag{9}
\end{equation*}
$$

The photon momentum projections on the coordinate axes are written as

$$
\begin{align*}
& p _ { x } = p \cos \varphi ,  \tag{10}\\
& p _ { y } = p \sin \varphi , \tag{11}
\end{align*}
$$

and on substituting into (B1.4), one finds

$$
\begin{equation*}
\omega ^ { \prime } = \omega \frac { 1 - V \cos \varphi / c } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } } . \tag{12}
\end{equation*}
$$

This is the well known formula for the relativistic Doppler effect.
2.2 [0,4 points] It follows from (2), 8) and (9) that

$$
\begin{equation*}
\frac { \hbar \omega ^ { \prime } } { c } \sin \varphi ^ { \prime } = \frac { \hbar \omega } { c } \sin \varphi . \tag{13}
\end{equation*}
$$

Using (12), it is merely found that

$$
\begin{equation*}
\sin \varphi ^ { \prime } = \frac { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } \sin \varphi } { 1 - V \cos \varphi / c } . \tag{14}
\end{equation*}
$$

Expression (14) is a classical formula for the light aberration.
2.3 [1,0 points] The position of the star on the celestial sphere varies throughout the year due to the orbital motion of the Earth around the Sun and the aberration of light which is schematically shown in the figure on the right. Since the speed of Earth's orbital motion is much less than the speed of light, it follows from (14) that the aberration angle is equal to

$$
\begin{equation*}
\delta \varphi = \varphi ^ { \prime } - \varphi \approx \frac { V } { C } \sin \varphi , \tag{15}
\end{equation*}
$$

where $\varphi$ denotes the angle between $V$ and the direction towards the star.


![](../../../figures/solution-ocr/f3f0010c3bbe3b307c653954.jpg)

The figure shows that the angle $\varphi$ varies periodically from a minimum value $\delta$ at the point $D$, reaches the value of $\pi / 2$ at the point $B$, has a maximum value of $\pi - \delta$ at point $C$, and finally becomes equal to $\pi / 2$ at point $A$. Hence, one can infer that the star apparent position on the celestial sphere moves along an ellipse with angular dimensions of the semi-axes

$$
\begin{equation*}
a _ { 1 } = \frac { V } { c } \tag{16}
\end{equation*}
$$

and

$$
\begin{equation*}
a _ { 2 } = \frac { V } { c } \sin \delta . \tag{17}
\end{equation*}
$$

It is found from the given data that

$$
\begin{equation*}
\delta = \arcsin \left( \frac { a _ { 2 } } { a _ { 1 } } \right) = 64.2 ^ { \circ } . \tag{18}
\end{equation*}
$$

2.4 [2,2 points] According to formula (12) for the Doppler effect the relative frequency shift at $\varphi = 0$ is found to be

$$
\begin{equation*}
\left( \frac { \Delta \omega } { \omega } \right) _ { D } = 1 - \sqrt { \frac { 1 - v _ { X } / c } { 1 + v _ { X } / c } } \approx 9.95 \times 10 ^ { - 3 } . \tag{19}
\end{equation*}
$$

This shows that the Doppler effect cannot fully explain the red shift in the spectrum of the star. It is natural to assume that when the light leaves the surface of the star the photon frequency decreases due to the gravitational redshift.

The gravitational mass is found from the principle of equivalence as

$$
\begin{equation*}
m _ { p h } = \frac { \hbar \omega } { c ^ { 2 } } , \tag{20}
\end{equation*}
$$

and the gravity force, acting on the photon at a distance $r$ from the star, is equal, according to the Newton law, to

$$
\begin{equation*}
F = G \frac { m _ { p h } M } { r ^ { 2 } } . \tag{21}
\end{equation*}
$$

The energy conservation law for the motion of the photon can be written as

$$
\begin{equation*}
\hbar d \omega = - F d r . \tag{22}
\end{equation*}
$$

Thus,

$$
\begin{equation*}
\frac { d \omega } { \omega } = - \frac { G M } { c ^ { 2 } } \frac { d r } { r ^ { 2 } } . \tag{23}
\end{equation*}
$$

On integrating (B4.5) in the range of the stellar radius $R$ до $\infty$ leads to the following equation

$$
\begin{equation*}
\ln \left( \frac { \omega } { \omega _ { 0 } } \right) = - \frac { G M } { c ^ { 2 } R } , \tag{24}
\end{equation*}
$$

where $\omega _ { 0 }$ and $\omega$ stand for the frequencies of the photon on the stellar surface and at infinite distance from it, respectively.


Hence, the frequency of the photon at infinite distance from the star is obtained as

$$
\begin{equation*}
\omega = \omega _ { 0 } \exp \left( - \frac { G M } { c ^ { 2 } R } \right) = \omega _ { 0 } \exp \left( - \frac { v _ { I I } ^ { 2 } } { 2 c ^ { 2 } } \right) , \tag{25}
\end{equation*}
$$

where the escape velocity is determined by the classical expression

$$
\begin{equation*}
v _ { I I } = \sqrt { \frac { 2 G M } { R } } . \tag{26}
\end{equation*}
$$

Combining formulas (19) and (25) yields

$$
\begin{equation*}
\left( \frac { \Delta \omega } { \omega } \right) _ { 0 } = 1 - \exp \left( - \frac { v _ { I I } ^ { 2 } } { 2 c ^ { 2 } } \right) \sqrt { \frac { 1 - v _ { X } / c } { 1 + v _ { X } / c } } . \tag{27}
\end{equation*}
$$

On substituting numerical values, one gets

$$
\begin{equation*}
v _ { I I } = \sqrt { 2 \ln \left( \frac { \sqrt { \frac { 1 - v _ { X } / c } { 1 + v _ { X } / c } } } { 1 - \left( \frac { \Delta \omega } { \omega } \right) _ { 0 } } \right) } c = 2.83 \cdot 10 ^ { 6 } \mathrm {~m} / \mathrm { s } . \tag{28}
\end{equation*}
$$

## Part C. Light in a moving medium (4,0 points)

3.1 [1,1 points] By definition, the projections of the object velocity in the reference frame $S ^ { \prime }$ are defined as expressions

$$
\begin{align*}
u _ { x } ^ { \prime } & = \frac { d x ^ { \prime } } { d t ^ { \prime } } ,  \tag{29}\\
u _ { y } ^ { \prime } & = \frac { d y ^ { \prime } } { d t ^ { \prime } } . \tag{30}
\end{align*}
$$

The same projections in the reference frame $S$ are given by

$$
\begin{align*}
& u _ { x } = \frac { d x } { d t } ,  \tag{31}\\
& u _ { y } = \frac { d y } { d t } . \tag{32}
\end{align*}
$$

The Lorentz transformations can be rewritten in the form of finite differences as

$$
\begin{align*}
& d x = \frac { d x ^ { \prime } + V d t ^ { \prime } } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } }  \tag{33}\\
& d y = d y ^ { \prime }  \tag{34}\\
& d t = \frac { d t ^ { \prime } + d x ^ { \prime } V / c ^ { 2 } } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } } \tag{35}
\end{align*}
$$

On dividing term by term the left and right hand sides of (33)-(35) and using (29)-(32) yields

$$
\begin{align*}
& u _ { x } = \frac { u _ { x } ^ { \prime } + V } { 1 + \frac { u _ { x } ^ { \prime } V } { c ^ { 2 } } }  \tag{36}\\
& u _ { y } = \frac { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } } { 1 + \frac { u _ { x } ^ { \prime } V } { c ^ { 2 } } } u _ { y } ^ { \prime } \tag{37}
\end{align*}
$$

3.2 [1,4 points] Let us sit in the reference frame associated with the water. According to formula (14) the light aberration appears in this reference frame, whereby making the angle $\alpha ^ { \prime }$ of incidence of a plane wave on the water surface equal to


$$
\begin{align*}
\cos \alpha ^ { \prime } & = \frac { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } \cos \alpha } { 1 - V \sin \alpha / c } \approx \cos \alpha ( 1 + V \sin \alpha / c ) \\
\sin \alpha ^ { \prime } & = \frac { \sin \alpha - V / c } { 1 - V \sin \alpha / c } \approx \sin \alpha - V \cos \alpha ^ { 2 } / c \tag{38}
\end{align*}
$$

In the reference frame associated with the water flow, the refraction law has a usual form $\sin \alpha ^ { \prime } = n \sin \beta ^ { \prime }$,
and the speed of light propagation is

$$
\begin{equation*}
v _ { p h } = \frac { c } { n } . \tag{40}
\end{equation*}
$$

Going back to the laboratory reference frame with the aid of (36) and (37) one finds

$$
\begin{align*}
& v _ { m } \sin \beta = \frac { v _ { p h } \sin \beta ^ { \prime } + V } { 1 + \frac { v _ { p h } V \sin \beta ^ { \prime } } { c ^ { 2 } } } \approx v _ { p h } \sin \beta ^ { \prime } + V ,  \tag{41}\\
& v _ { m } \cos \beta = \frac { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } } { 1 + \frac { v _ { p h } V \sin \beta ^ { \prime } } { c ^ { 2 } } } v _ { p h } \cos \beta ^ { \prime } \approx v _ { p h } \cos \beta ^ { \prime } . \tag{42}
\end{align*}
$$

Using (38)-(42), it is finally obtained that

$$
\begin{equation*}
\sin \beta \approx \frac { 1 } { n } \sin \alpha - \frac { n ^ { 2 } + \cos 2 \alpha } { n } \frac { V } { c } , \tag{43}
\end{equation*}
$$

making

$$
\begin{align*}
& A _ { 1 } = \frac { 1 } { n } \sin \alpha ,  \tag{44}\\
& B _ { 1 } = - \frac { n ^ { 2 } + \cos 2 \alpha } { n } . \tag{45}
\end{align*}
$$

3.3 [0,4 points] Again using (38)-(42) yields

$$
\begin{equation*}
v _ { m } \approx \frac { c } { n } + V \left( 1 - \frac { 1 } { n ^ { 2 } } \right) \sin \beta . \tag{46}
\end{equation*}
$$

whereby

$$
\begin{align*}
& A _ { 2 } = \frac { c } { n }  \tag{47}\\
& B _ { 2 } = \left( 1 - \frac { 1 } { n ^ { 2 } } \right) \sin \beta . \tag{48}
\end{align*}
$$

3.4 [0,9 points] When the light propagates in the direction of the water flow, the angle $\beta$ in formula (48) should be taken $\pi / 2$ and the corresponding speed is found as

$$
\begin{equation*}
v _ { + } = \frac { c } { n } + V \left( 1 - \frac { 1 } { n ^ { 2 } } \right) , \tag{49}
\end{equation*}
$$

when the light propagates in the direction opposite to the water flow, the corresponding speed is obtained as

$$
\begin{equation*}
v _ { - } = \frac { c } { n } - V \left( 1 - \frac { 1 } { n ^ { 2 } } \right) . \tag{50}
\end{equation*}
$$

Since the total path covered by the two light beams in water is $2 L$, the difference in their propagation time $\Delta t$ is equal to

$$
\begin{equation*}
\Delta t = \frac { 2 L } { v _ { - } } - \frac { 2 L } { v _ { + } } \approx \frac { 4 L v \left( n ^ { 2 } - 1 \right) } { c ^ { 2 } } , \tag{51}
\end{equation*}
$$

and the corresponding path difference is derived as follows


$$
\begin{equation*}
\Delta l = c \Delta t = \frac { 4 \operatorname { Lv } \left( n ^ { 2 } - 1 \right) } { c } . \tag{52}
\end{equation*}
$$

Thus, the interference pattern is shifted by the number of bands equal to

$$
\begin{equation*}
\Delta N = \frac { \Delta l } { \lambda } = \frac { 4 L v \left( n ^ { 2 } - 1 \right) } { c \lambda } . \tag{53}
\end{equation*}
$$

3.5 [0,2 points] Using formula (53) the water refraction index is found to be

$$
\begin{equation*}
n = \sqrt { 1 + \frac { c \lambda \Delta N } { 4 L v } } = 1.37 . \tag{54}
\end{equation*}
$$

| Part | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 1.1 | Formula (1) $p _ { x } { } ^ { \prime } = \frac { p _ { x } - ( V / c ) ( E / c ) } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } }$ | 0,2 | 0,8 |
|  | Formula (2) $p _ { y } { } ^ { \prime } = p _ { y }$ | 0,2 |  |
|  | Formula (3) $p _ { z } { } ^ { \prime } = p _ { z }$ | 0,2 |  |
|  | Formula (4) $E ^ { \prime } / c = \frac { E / c - ( V / c ) p _ { x } } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } }$ | 0,2 |  |
| 1.2 | Formula (5) $p = \frac { m v } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } }$ | 0,2 | 0,6 |
|  | Formula (6) $E = \frac { m c ^ { 2 } } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } }$ | 0,2 |  |
|  | Formula (7) inv $= E ^ { 2 } - p ^ { 2 } c ^ { 2 } = m ^ { 2 } c ^ { 4 }$ | 0,2 |  |
| 2.1 | Formula (8) $p = \frac { E } { c }$ | 0,2 | 1,0 |
|  | Formula (9) $E = h \omega$ | 0,2 |  |
|  | Formula (10) $p _ { x } = p \cos \varphi$ | 0,2 |  |
|  | Formula (11) $p _ { y } = p \sin \varphi$ | 0,2 |  |
|  | Formula (12) $\omega ^ { \prime } = \omega \frac { 1 - V \cos \varphi / c } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } }$ | 0,2 |  |
| 2.2 | Formula (13) $\frac { h \omega ^ { \prime } } { c } \sin \varphi ^ { \prime } = \frac { h \omega } { c } \sin \varphi$ | 0,2 | 0,4 |
|  | Formula (14) $\sin \varphi ^ { \prime } = \frac { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } \sin \varphi } { 1 - V \cos \varphi / c }$ | 0,2 |  |
| 2.3 | Formula (15) $\delta \varphi = \varphi ^ { \prime } - \varphi \approx \frac { V } { c } \sin \varphi$ | 0,2 | 1,0 |
|  | Formula (16) $a _ { 1 } = \frac { V } { c }$ | 0,2 |  |
|  | Formula (17) $a _ { 2 } = \frac { V } { c } \sin \delta$ | 0,2 |  |
|  | Formula (18) $\delta = \arcsin \left( \frac { a _ { 2 } } { a _ { 1 } } \right)$ | 0,2 |  |
|  | Numerical value $\delta = 64.2 ^ { \circ }$ | 0,2 |  |


| 2.4 | Formula (19) $\left( \frac { \Delta \omega } { \omega } \right) _ { D } = 1 - \sqrt { \frac { 1 - v _ { X } / c } { 1 + v _ { X } / c } } \approx 9.95 \times 10 ^ { - 3 }$ | 0,2 | 2,2 |
| :--- | :--- | :--- | :--- |
|  | Formula (20) $m _ { p h } = \frac { \hbar \omega } { c ^ { 2 } }$ | 0,2 |  |
|  | Formula (21) $F = G \frac { m _ { p h } M } { r ^ { 2 } }$ | 0,2 |  |
|  | Formula (22) $\hbar d \omega = - F d r$ | 0,2 |  |
|  | Formula (23) $\frac { d \omega } { \omega } = - \frac { G M } { c ^ { 2 } } \frac { d r } { r ^ { 2 } }$ | 0,2 |  |
|  | Formula (24) $\ln \left( \frac { \omega } { \omega _ { 0 } } \right) = - \frac { G M } { c ^ { 2 } R }$ | 0,2 |  |
|  | Formula (25) $\omega = \omega _ { 0 } \exp \left( - \frac { G M } { c ^ { 2 } R } \right) = \omega _ { 0 } \exp \left( - \frac { v _ { I I } ^ { 2 } } { 2 c ^ { 2 } } \right)$ | 0,2 |  |
|  | Formula (26) $v _ { I I } = \sqrt { \frac { 2 G M } { R } }$ | 0,2 |  |
|  | Formula (27) $\left( \frac { \Delta \omega } { \omega } \right) _ { 0 } = \left[ 1 - \sqrt { \frac { 1 - v _ { X } / c } { 1 + v _ { X } / c } } \right] \exp \left( - \frac { v _ { I I } ^ { 2 } } { 2 c ^ { 2 } } \right)$ | 0,2 |  |
|  | Formula (28) $v _ { I I } = \sqrt { 2 } \ln \left( \frac { 1 - \sqrt { \frac { 1 - v _ { X } / c } { 1 + v _ { X } / c } } } { \left( \frac { \Delta \omega } { \omega } \right) _ { 0 } } \right) c$ | 0,2 |  |
|  | Numerical value $v _ { I I } = 7.108 \times 10 ^ { - 4 } c = 21.31 \mathrm {~km} / \mathrm { s }$ | 0,2 |  |
| 3.1 | Formula (29) $u _ { x } { } ^ { \prime } = \frac { d x ^ { \prime } } { d t ^ { \prime } }$ | 0,1 |  |
|  | Formula (30) $u _ { y } { } ^ { \prime } = \frac { d y ^ { \prime } } { d t ^ { \prime } }$ | 0,1 |  |
|  | Formula (31) $u _ { x } = \frac { d x } { d t }$ | 0,1 |  |
|  | Formula (32) $u _ { y } = \frac { d y } { d t }$ | 0,1 |  |
|  | Formula (33) $d x = \frac { d x ^ { \prime } + V d t ^ { \prime } } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } }$ | 0,1 |  |
|  | Formula (34) $d y = d y ^ { \prime }$ | 0,1 |  |
|  | Formula (35) $d t = \frac { d t ^ { \prime } + d x ^ { \prime } V / c ^ { 2 } } { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } }$ | 0,1 |  |
|  | Formula (36) $u _ { x } = \frac { u _ { x } { } ^ { \prime } + V } { 1 + \frac { u _ { x } { } ^ { \prime } V } { c ^ { 2 } } }$ | 0,2 |  |
|  | Formula (37) $u _ { y } = \frac { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } } { 1 + \frac { u _ { x } { } ^ { \prime } V } { c ^ { 2 } } } u _ { y } { } ^ { \prime }$ | 0,2 |  |


| 3.2 | Formula (38) $\cos \alpha ^ { \prime } = \frac { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } \cos \alpha } { 1 - V \sin \alpha / c } \approx \cos \alpha ( 1 + V \sin \alpha / c )$ or $\sin \alpha ^ { \prime } = \frac { \sin \alpha - V / c } { 1 - V \sin \alpha / c } \approx \sin \alpha - V \cos \alpha ^ { 2 } / c$ | 0,2 | 1,4 |
| :--- | :--- | :--- | :--- |
|  | Formula (39) $\sin \alpha ^ { \prime } = n \sin \beta ^ { \prime }$ | 0,2 |  |
|  | Formula (40) $v _ { p h } = \frac { c } { n }$ | 0,2 |  |
|  | Formula (41) $v _ { m } \sin \beta = \frac { v _ { p h } \sin \beta ^ { \prime } + V } { 1 + \frac { v _ { p h } V \sin \beta ^ { \prime } } { c ^ { 2 } } } \approx v _ { p h } \sin \beta ^ { \prime } + V$ | 0,2 |  |
|  | Formula (42) $v _ { m } \cos \beta = \frac { \sqrt { 1 - V ^ { 2 } / c ^ { 2 } } } { 1 + \frac { v _ { p h } V \sin \beta ^ { \prime } } { c ^ { 2 } } } v _ { p h } \cos \beta ^ { \prime } \approx v _ { p h } \cos \beta ^ { \prime }$ | 0,2 |  |
|  | Formula (44) $A _ { 1 } = \frac { 1 } { n } \sin \alpha$ | 0,2 |  |
|  | Formula (45) $B _ { 1 } = - \frac { n ^ { 2 } + \cos 2 \alpha } { n }$ | 0,2 |  |
| 3.3 | Formula (47) $A _ { 2 } = \frac { c } { n }$ | 0,2 | 0,4 |
|  | Formula (48) $B _ { 2 } = \left( 1 - \frac { 1 } { n ^ { 2 } } \right) \sin \beta$ | 0,2 |  |
| 3.4 | Formula (49) $v _ { + } = \frac { c } { n } + V \left( 1 - \frac { 1 } { n ^ { 2 } } \right)$ | 0,2 | 0,9 |
|  | Formula (50) $v _ { - } = \frac { c } { n } - V \left( 1 - \frac { 1 } { n ^ { 2 } } \right)$ | 0,2 |  |
|  | Formula (51) $\Delta t = \frac { 2 L } { v _ { - } } - \frac { 2 L } { v _ { + } } \approx \frac { 4 L v \left( n ^ { 2 } - 1 \right) } { c ^ { 2 } }$ | 0,2 |  |
|  | Formula (52) $\Delta l = c \Delta t = \frac { 4 L v \left( n ^ { 2 } - 1 \right) } { c }$ | 0,2 |  |
|  | Formula (53) $\Delta N = \frac { \Delta l } { \lambda } = \frac { 4 L v \left( n ^ { 2 } - 1 \right) } { c \lambda }$ | 0,1 |  |
| 3.5 | Formula (54) $n = \sqrt { 1 + \frac { c \lambda \Delta N } { 4 L v } }$ | 0,1 | 0,2 |
|  | Numerical value $n = \sqrt { 1 + \frac { c \lambda \Delta N } { 4 L v } } = 1.37$ | 0,1 |  |
| Total |  |  | 10,0 |
