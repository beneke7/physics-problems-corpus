---
id: solution-ocr-izho-2017-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2017_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2017-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Fantastic trip through the Universe (10.0 points)

## 1. Planets with strange shapes (4.0 points)

1.1 [0.7 points] The easiest approach to the solution of the problem is the analogy between Coulomb force and Newton's law of gravitation:

$$
\begin{equation*}
F = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { q _ { 1 } q _ { 2 } } { r _ { 12 } ^ { 2 } } \text { and } F = G \frac { m _ { 1 } m _ { 2 } } { r _ { 12 } ^ { 2 } } . \tag{1}
\end{equation*}
$$

Further, it is a well known result from the Gauss theorem that the electric field strength of an infinite charged plane, with the surface density $\sigma$ is found as

$$
\begin{equation*}
E = \frac { \sigma } { 2 \varepsilon _ { 0 } } . \tag{2}
\end{equation*}
$$

By analogy to the charged plane, the result for the planet is similarly obtained as:

$$
\begin{align*}
& g _ { 1 } = \frac { \rho _ { 1 } h } { 2 \cdot ( 1 / 4 \pi G ) } = 2 \pi G \rho _ { 1 } h ,  \tag{3}\\
& h = \frac { g _ { 1 } } { 2 \pi G \rho _ { 1 } } = 78.0 \mathrm {~km} . \tag{4}
\end{align*}
$$

The same result is easily achieved by cutting an infinite plane into thin rings and further integrating:

The attracting force of the ring of mass $M$, and of radius $R$ at the distance $a$ is written as:

$$
F = G \frac { M m } { R ^ { 2 } + a ^ { 2 } } \cos \theta = G \frac { M m } { a ^ { 2 } } \cos ^ { 3 } \theta .
$$

![](../../../figures/solution-ocr/a51bd878c02a8f6d7fcfc64c.jpg)
We divide the plane of the height $h$ into thin rings of thickness $d r$. Then the force of gravitycaused by the ring of the radius $r$ is equal to

$$
d F = G \frac { d M m } { a ^ { 2 } } \cos ^ { 3 } \theta = G \frac { \left( \rho _ { 1 } h 2 \pi r d r \right) m } { a ^ { 2 } } \cos ^ { 3 } \theta .
$$

It follows from the trigonometric considerations that $r = a \cdot \tan \theta , d r = \frac { a } { \cos ^ { 2 } \theta } d \theta$.
Substituting the above expression and integrating we find the total force $F$ acting on the body of mass $m$ :

$$
F = 2 \pi G \rho _ { 1 } h m \int _ { 0 } ^ { \frac { \pi } { 2 } } \sin \theta d \theta = 2 \pi G \rho _ { 1 } h m .
$$

This is identical to the answer obtained from the analogy with the electrostatic field.
1.2 [0.5 points] For an observer that is located close to the infinite plane, the solid angle is obviously equal to

$$
\begin{equation*}
\Omega _ { 1 } = \frac { 4 \pi } { 2 } = 2 \pi , \tag{5}
\end{equation*}
$$

and from the problem formulation we get

$$
\begin{equation*}
\alpha = \frac { g _ { 1 } } { 2 \pi } \text { or } \alpha = G \rho _ { 1 } h = 1.56 \times 10 ^ { - 2 } \mathrm {~m} / \mathrm { s } ^ { 2 } . \tag{6}
\end{equation*}
$$

1.3 [0.7 points] We divide the pyramid into thin layers of thickness $\Delta h$ parallel to the base. All of these layers are visible from the top of the pyramid with the same solid angle $\Omega _ { 2 }$, which is equal to one sixth of the full solid angle (as if the observer was located inside the cubeat its center!):

$$
\begin{equation*}
\Omega _ { 2 } = \frac { 1 } { 6 } 4 \pi = \frac { 2 } { 3 } \pi . \tag{7}
\end{equation*}
$$


The free fall acceleration of the single layer is found as

$$
\begin{equation*}
d g _ { 2 } = \frac { d F } { m } = \alpha \Omega _ { 2 } = \frac { 2 } { 3 } \pi G \rho _ { 2 } \Delta h , \tag{8}
\end{equation*}
$$

or after the summation over all the layers of the pyramid

$$
\begin{equation*}
g _ { 2 } = \frac { 1 } { 3 } \pi G \rho _ { 2 } a = 3.14 \mathrm {~m} / \mathrm { s } ^ { 2 } . \tag{9}
\end{equation*}
$$

1.4 [2.0 points] Let the interaction energy between the spacecraft and the pyramidal planet at the time of take-off from its top be equal to $U _ { 1 }$, and its speed be $v _ { 1 }$. It follows from the law of the energy conservation for the parabolic velocity that:

$$
\begin{equation*}
\frac { m v _ { 1 } ^ { 2 } } { 2 } - U _ { 1 } = 0 . \tag{10}
\end{equation*}
$$

Similarly, the law of the energy conservation for a spacecraft to start from the cubic planet is written as

$$
\begin{equation*}
\frac { m v _ { 2 } ^ { 2 } } { 2 } - U _ { 2 } = 0 , \tag{11}
\end{equation*}
$$

where $U _ { 2 }$ stands for the corresponding interaction energy with the cubic planet.
Let us show that there is a simple relationship between $U _ { 1 }$ and $U _ { 2 }$. To prove so, we consider the position of the spacecraft at the center of the cubic planet. On the one hand the position at the center of the cube is equivalent to finding the spacecraft at the tops of the six pyramids. Taking into account the change in the density of matter, the potential energy of the spacecraft at the center of the cube is obtained as

$$
\begin{equation*}
U _ { c } = 6 U _ { 1 } \frac { \rho _ { 3 } } { \rho _ { 2 } } . \tag{12}
\end{equation*}
$$

On the other hand the position of the spacecraft at the center of the cube is equivalent to being at the tops of the eight identical adjacent cubes with the side $\frac { a } { 2 }$. In general, the potential energy of the spacecraft in the field of the cubic planet is proportional to the square of its size since

$$
\begin{equation*}
U = G \sum \frac { m \rho _ { 3 } \Delta V _ { i } } { r _ { i } } \sim G m \rho _ { 3 } a ^ { 2 } . \tag{13}
\end{equation*}
$$

Thus, for the cube of the half size, the interaction energy is 4 times less, which means that the potential energy of the spacecraft at the center of the cube is found as

$$
\begin{equation*}
U _ { c } = 8 \frac { U _ { 2 } } { 4 } = 2 U _ { 2 } . \tag{14}
\end{equation*}
$$

Equating the expressions (12) and (14) yield

$$
\begin{equation*}
U _ { 2 } = 3 U _ { 1 } \frac { \rho _ { 3 } } { \rho _ { 2 } } . \tag{15}
\end{equation*}
$$

Solving together equations (10), (11) and (15), we finally obtain

$$
\begin{equation*}
v _ { 2 } = \sqrt { \frac { 3 \rho _ { 3 } } { \rho _ { 2 } } } v _ { 1 } = 6,30 \mathrm {~km} / \mathrm { s } . \tag{16}
\end{equation*}
$$

## 2. Dusty cloud (6.0 points)

2.1 [2.5 points] For this problem, we use a mixture of the polar and Cartesian coordinate systems as shown below.
![](../../../figures/solution-ocr/887529409175c92e232faa87.jpg)
The conservation of energy is written as:

$$
\begin{equation*}
\frac { m v _ { \infty } ^ { 2 } } { 2 } = \frac { m u _ { x } ^ { 2 } } { 2 } + \frac { m u _ { y } ^ { 2 } } { 2 } - G \frac { M m } { R } , \tag{17}
\end{equation*}
$$

where $M = \frac { 4 } { 3 } \pi R ^ { 3 } \rho _ { 4 }$ denotes the total mass of the cloud.


Change in the spacecraft momentum projection on the x-axis of the Cartesian coordinate system is given by

$$
\begin{equation*}
m u _ { x } - m v _ { \infty } = \int G \frac { M m } { r ^ { 2 } } \cos \varphi d t = \int G \frac { M m } { r ^ { 2 } \dot { \varphi } } \cos \varphi d \varphi . \tag{18}
\end{equation*}
$$

The law of the angular momentum conservation for a system with the central force is written as

$$
\begin{equation*}
r ^ { 2 } \dot { \varphi } = v _ { \infty } b . \tag{19}
\end{equation*}
$$

Thus,

$$
\begin{equation*}
m u _ { x } - m v _ { \infty } = G \frac { M m } { v _ { \infty } b } \int _ { 0 } ^ { \theta } \cos \varphi d \varphi = G \frac { M m } { v _ { \infty } b } \sin \theta . \tag{20}
\end{equation*}
$$

Similarly for the $y$-axis projection:

$$
\begin{equation*}
m u _ { y } - m \cdot 0 = G \frac { M m } { v _ { \infty } b } \int _ { 0 } ^ { \theta } \sin \varphi d \varphi = G \frac { M m } { v _ { \infty } b } ( 1 - \cos \theta ) . \tag{21}
\end{equation*}
$$

To simplify further analysis the following dimensionless quantity is introduced

$$
\begin{equation*}
z = \frac { G M } { v _ { \infty } ^ { 2 } b } , \tag{22}
\end{equation*}
$$

and then

$$
\begin{align*}
& u _ { x } = ( 1 + z \sin \theta ) v _ { \infty } ,  \tag{23}\\
& u _ { y } = z ( 1 - \cos \theta ) v _ { \infty } . \tag{24}
\end{align*}
$$

Substitution of (23) and (24) into (17) gives rise to

$$
\begin{equation*}
1 = ( 1 + z \sin \theta ) ^ { 2 } + z ^ { 2 } ( 1 - \cos \theta ) ^ { 2 } - 2 z \frac { b } { R } . \tag{25}
\end{equation*}
$$

Solving this equation for $\theta$, we find

$$
\begin{equation*}
\theta = \arcsin \frac { \frac { b } { R } - \frac { G M } { v _ { \infty } ^ { 2 } b } } { \sqrt { 1 + \left( \frac { G M } { v _ { \infty } ^ { 2 } b } \right) ^ { 2 } } } + \arcsin \frac { \frac { G M } { v _ { \infty } ^ { 2 } b } } { \sqrt { 1 + \left( \frac { G M } { v _ { \infty } ^ { 2 } b } \right) ^ { 2 } } } , \tag{26}
\end{equation*}
$$

or

$$
\begin{equation*}
\theta = 2 \arctan \frac { 1 - \sqrt { 1 + 2 \frac { G M } { v _ { \infty } ^ { 2 } b } - \frac { b ^ { 2 } } { R ^ { 2 } } } } { \frac { b } { R } - 2 \frac { G M } { v _ { \infty } ^ { 2 } b } } = 0.789 \mathrm { rad } = 45.2 ^ { \circ } . \tag{27}
\end{equation*}
$$

It should be noted that the angle $\theta$, just as the total angle of deflection of the trajectory when moving through the dust cloud, can be obtained by integrating the equation obtained from the combination of the laws of conservation of energy and angular momentum written in the polar coordinates. Expressions are not presented here because the resulting integrals are quite cumbersome.
2.2 [2.0 points] To begin with we find the dependence of the potential energy of interaction between the cloud and the spacecraft at distances $r < R$ from its center. It is known that a spherical cloud layers, lying at a distance greater than $r$, does not affect the spacecraft, so the total active force is derived as

$$
\begin{equation*}
F ( r ) = - G \frac { \rho _ { 4 } \cdot \frac { 4 } { 3 } \pi r ^ { 3 } } { r ^ { 2 } } m = - \frac { 4 } { 3 } \pi G \rho _ { 4 } m r , \tag{28}
\end{equation*}
$$

and the corresponding potential energy is found in the form

$$
\begin{equation*}
U ( r ) = - \int F ( r ) d r = \frac { 2 } { 3 } \pi G \rho _ { 4 } m r ^ { 2 } + C = G \frac { M m } { 2 R ^ { 3 } } r ^ { 2 } + C . \tag{29}
\end{equation*}
$$

To determine the integration constant $C$, we recall that the potential energy must be a continuous at the point $r = R$, such that

$$
\begin{equation*}
G \frac { M m } { 2 R ^ { 3 } } R ^ { 2 } + C = - G \frac { M m } { R } , \tag{30}
\end{equation*}
$$

or finally for $r < R$

$$
\begin{equation*}
U ( r ) = \frac { G M m } { 2 R ^ { 3 } } r ^ { 2 } - \frac { 3 G M m } { 2 R } . \tag{31}
\end{equation*}
$$

At the time moment when the distance to the cloud center reaches its minimum value, the radial velocity turns zero. Then, from the laws of conservation of energy and angular momentum we have

$$
\begin{align*}
& \frac { m v _ { \infty } ^ { 2 } } { 2 } = \frac { m v _ { 0 } ^ { 2 } } { 2 } + \frac { G M m } { 2 R ^ { 3 } } r _ { m i n } ^ { 2 } - \frac { 3 G M m } { 2 R } ,  \tag{32}\\
& v _ { 0 } r _ { m i n } = v _ { \infty } b , \tag{33}
\end{align*}
$$


which results in the following equation

$$
\begin{equation*}
1 = \frac { b ^ { 2 } } { r _ { \min } ^ { 2 } } + z \frac { r _ { \min } ^ { 2 } b } { R ^ { 3 } } - 3 z \frac { b } { R } , \tag{34}
\end{equation*}
$$

with the solution

$$
\begin{equation*}
r _ { \text {min } } = \sqrt { \frac { \left( \frac { 3 z b } { R } + 1 \right) \pm \sqrt { \left( \frac { 3 z b } { R } + 1 \right) ^ { 2 } - \frac { 4 z b ^ { 3 } } { R ^ { 3 } } } } { 2 \frac { z b } { R ^ { 3 } } } } . \tag{35}
\end{equation*}
$$

The meaningful root is only the smallest one because there must be $r _ { \text {min } } = 0$ at $b = 0$. Thus, we finally obtain

$$
\begin{equation*}
r _ { \min } = R \sqrt { \frac { \left( \frac { 3 G M } { v _ { \infty } ^ { 2 } R } + 1 \right) - \sqrt { \left( \frac { 3 G M } { v _ { \infty } ^ { 2 } R } + 1 \right) ^ { 2 } - \frac { 4 b ^ { 2 } G M } { R ^ { 3 } v _ { \infty } ^ { 2 } } } } { \frac { 2 G M } { v _ { \infty } ^ { 2 } R } } } = 4.97 \times 10 ^ { 9 } m . \tag{36}
\end{equation*}
$$

2.3 [1.0 points] Minimum velocity $v _ { \infty , \text { min } }$, that allows the spacecraft to avoid a collision, corresponds to a situation when the spacecraft just touches the cloud as shown below.
![](../../../figures/solution-ocr/94ba411138ea8dfd0bbe8ed1.jpg)
In this case, the radial component of the velocity again turns zero, and the laws of conservation of energy and angular momentum can be written as:

$$
\begin{align*}
& \frac { m v _ { \infty } ^ { 2 } , \min } { 2 } = \frac { m 0 ^ { 2 } } { 2 } + \frac { m u _ { \tau } ^ { 2 } } { 2 } - G \frac { M m } { R } ,  \tag{37}\\
& u _ { \tau } R = v _ { \infty } b , \tag{38}
\end{align*}
$$

which yields

$$
\begin{equation*}
v _ { \infty , \min } = \sqrt { \frac { 2 G M } { R \left( \frac { b ^ { 2 } } { R ^ { 2 } } - 1 \right) } } = 252 \mathrm {~km} / \mathrm { s } . \tag{39}
\end{equation*}
$$

2.4 [0.6 points] Assume that the cloud is pulled apart at distances by small layers of thickness $\Delta r$ so that the cloud always remains symmetrical. To remove a single thin layer at the moment when the cloud has a radius $r$, it is necessary to do the work

$$
\begin{equation*}
\Delta A = G \frac { \left( \rho _ { 4 } \frac { 4 } { 3 } \pi r ^ { 3 } \right) \left( \rho _ { 4 } 4 \pi r ^ { 2 } \Delta r \right) } { r } = \frac { 16 } { 3 } \pi ^ { 2 } G \rho _ { 4 } ^ { 2 } r ^ { 4 } \Delta r , \tag{40}
\end{equation*}
$$

and to pull apart the whole cloud the following work must be done

$$
\begin{equation*}
A = \frac { 16 } { 3 } \pi ^ { 2 } G \rho _ { 4 } ^ { 2 } \int _ { 0 } ^ { R } r ^ { 4 } \Delta r = \frac { 16 } { 15 } \pi ^ { 2 } G \rho _ { 4 } ^ { 2 } R ^ { 5 } = 1.33 \times 10 ^ { 45 } J . \tag{41}
\end{equation*}
$$

|  | Content | points |  |
| :--- | :--- | :--- | :--- |
| 1.1 | The analogy between the Coulom law and the gravitation law of Newton (1): $F = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { q _ { 1 } q _ { 2 } } { r _ { 12 } ^ { 2 } }$ and $F = G \frac { m _ { 1 } m _ { 2 } } { r _ { 12 } ^ { 2 } }$. | 0.2 | 0.7 |
|  | Formula (2) $E = \frac { \sigma } { 2 \varepsilon _ { 0 } }$ | 0.2 |  |
|  | Formula (4) $h = \frac { g _ { 1 } } { 2 \pi G \rho _ { 1 } }$ | 0.2 |  |
|  | Numerical value of $h = 78.0 k m$ | 0.1 |  |
| 1.2 | Formula (5) $\Omega _ { 1 } = 2 \pi$ | 0.2 | 0.5 |
|  | Formula (6) $\alpha = \frac { g _ { 1 } } { 2 \pi }$ or $\alpha = G \rho _ { 1 } h$ | 0.2 |  |
|  | Numerical value of $\alpha = 1.56 \times 10 ^ { - 2 } \mathrm {~m} / \mathrm { s } ^ { 2 }$ | 0.1 |  |


| 1.3 | Formula (7) $\Omega _ { 2 } = \frac { 2 } { 3 } \pi$ | 0.2 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (8) $d g _ { 2 } = \frac { d F } { m } = \alpha \Omega _ { 2 } = \frac { 2 } { 3 } \pi G \rho _ { 2 } \Delta h$ | 0.2 |  |
|  | Formula (9) $g _ { 2 } = \frac { 1 } { 3 } \pi G \rho _ { 2 } a$ | 0.2 |  |
|  | Numerical value of $g _ { 2 } = 3.14 m / s ^ { 2 }$ | 0.1 |  |
| 1.4 | Formulas /(10) and (11) $\frac { m v _ { 1 } ^ { 2 } } { 2 } - U _ { 1 } = 0 \frac { m v _ { 2 } ^ { 2 } } { 2 } - U _ { 2 } = 0$ | 0.2 |  |
|  | Formula (12) $U _ { c } = 6 U _ { 1 } \frac { \rho _ { 3 } } { \rho _ { 2 } }$ | 0.4 |  |
|  | Formula (13) $U = G \sum \frac { m \rho _ { 3 } \Delta V _ { i } } { r _ { i } } \sim G m \rho _ { 3 } a ^ { 2 }$ | 0.4 |  |
|  | Formula (14) $U _ { c } = 8 \frac { U _ { 2 } } { 4 } = 2 U _ { 2 }$ | 0.2 |  |
|  | Formula (15) $U _ { 2 } = 3 U _ { 1 } \frac { \rho _ { 3 } } { \rho _ { 2 } }$ | 0.4 |  |
|  | Formula (16) $v _ { 2 } = \sqrt { \frac { 3 \rho _ { 3 } } { \rho _ { 2 } } } v _ { 1 }$ | 0.3 |  |
|  | Numerical value of $v _ { 2 } = 6,30 k m / s$ | 0.1 |  |
| 2.1 | Formula (17) $\frac { m v _ { \infty } ^ { 2 } } { 2 } = \frac { m u _ { x } ^ { 2 } } { 2 } + \frac { m u _ { y } ^ { 2 } } { 2 } - G \frac { M m } { R }$ | 0.2 | 2.5 |
|  | Formula (18) $m u _ { x } - m v _ { \infty } = \int G \frac { M m } { r ^ { 2 } } \cos \varphi d t = \int G \frac { M m } { r ^ { 2 } \dot { \varphi } } \cos \varphi d \varphi$ | 0.4 |  |
|  | Formula (19) $r ^ { 2 } \dot { \varphi } = v _ { \infty } b$ | 0.2 |  |
|  | Formula (20) $m u _ { x } - m v _ { \infty } = G \frac { M m } { v _ { \infty } b } \sin \theta$ | 0.4 |  |
|  | Formula (21) $m u _ { y } = G \frac { M m } { v _ { \infty } b } ( 1 - \cos \theta )$ | 0.4 |  |
|  | Formula (23) or analogous $u _ { x } = ( 1 + z \sin \theta ) v _ { \infty }$ | 0.3 |  |
|  | Formula (24) or analogous $u _ { y } = z ( 1 - \cos \theta ) v _ { \infty }$ | 0.3 |  |
|  | Formula (26) or formula (27) $\begin{aligned} & \theta = \arcsin \frac { \frac { b } { R } - \frac { G M } { v _ { \infty } ^ { 2 } b } } { \sqrt { 1 + \left( \frac { G M } { v _ { \infty } ^ { 2 } b } \right) ^ { 2 } } } + \arcsin \frac { \frac { G M } { v _ { \infty } ^ { 2 } b } } { \sqrt { 1 + \left( \frac { G M } { v _ { \infty } ^ { 2 } b } \right) ^ { 2 } } } \text { or } \\ & \theta = 2 \arctan \frac { 1 - \sqrt { 1 + 2 \frac { G M b } { v _ { \infty } ^ { 2 } b } - \frac { b ^ { 2 } } { R ^ { 2 } } } } { \frac { b } { R } - 2 \frac { G M } { v _ { \infty } ^ { 2 } b } } \end{aligned}$ | 0.2 |  |
|  | Numerical value of $\theta = 0,789 \mathrm { rad } = 45,2 ^ { \circ }$ | 0.1 |  |
| 2.2 | Formula (28) $F ( r ) = - G \frac { \rho _ { 4 } \cdot \frac { 4 } { 3 } \pi r ^ { 3 } } { r ^ { 2 } } m = - \frac { 4 } { 3 } \pi G \rho _ { 4 } m r$ | 0.4 | 2.0 |
|  | Formula (29) $U ( r ) = \frac { 2 } { 3 } \pi G \rho _ { 4 } m r ^ { 2 } + C = G \frac { M m } { 2 R ^ { 3 } } r ^ { 2 } + C$ | 0.3 |  |
|  | Formula (30) $G \frac { M m } { 2 R ^ { 3 } } R ^ { 2 } + C = - G \frac { M m } { R }$ | 0.4 |  |
|  | Formula (32) $\frac { m v _ { \infty } ^ { 2 } } { 2 } = \frac { m v _ { 0 } ^ { 2 } } { 2 } + \frac { G M m } { 2 R ^ { 3 } } r _ { m i n } ^ { 2 } - \frac { 3 G M m } { 2 R }$, | 0.2 |  |
|  | Formula (33) $v _ { 0 } r _ { \text {min } } = v _ { \infty } b$ | 0.2 |  |
|  | Formula (35) $r _ { \text {min } } = \sqrt { \frac { \left( \frac { 3 z b } { R } + 1 \right) \pm \sqrt { \left( \frac { 3 z b } { R } + 1 \right) ^ { 2 } - \frac { 4 z b ^ { 3 } } { R ^ { 3 } } } } { 2 \frac { z b } { R ^ { 3 } } } }$ | 0.2 |  |
|  | Correct root is chosen, formula (36) | 0.2 |  |
|  | Numerical value of $r _ { \text {min } } = 4.97 \times 10 ^ { 9 } m$ | 0.1 |  |
| 2.3 | Formula (37) $\frac { m v _ { \infty , \text { min } } ^ { 2 } } { 2 } = \frac { m 0 ^ { 2 } } { 2 } + \frac { m u _ { \tau } ^ { 2 } } { 2 } - G \frac { M m } { R }$ | 0.4 | 1.0 |


|  | Formula (38) $u _ { \tau } R = v _ { \infty } b$ | 0.3 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (39) $v _ { \infty , \text { min } } = \sqrt { \frac { 2 G M } { R \left( \frac { b ^ { 2 } } { R ^ { 2 } } - 1 \right) } }$ | 0.2 |  |
|  | Numerical value of $v _ { \infty , \text { min } } = 252 \mathrm {~km} / \mathrm { s }$ | 0.1 |  |
| 2.4 | Formula (40) $\Delta A = \frac { 16 } { 3 } \pi ^ { 2 } G \rho _ { 4 } ^ { 2 } r ^ { 4 } \Delta r$ | 0.3 | 0.6 |
|  | Formula (41) $A = \frac { 16 } { 15 } \pi ^ { 2 } G \rho _ { 4 } ^ { 2 } R ^ { 5 }$ | 0.2 |  |
|  | Numerical value of $A = 1.33 \times 10 ^ { 45 } \mathrm {~J}$ | 0.1 |  |
| Total |  |  | 10.0 |
