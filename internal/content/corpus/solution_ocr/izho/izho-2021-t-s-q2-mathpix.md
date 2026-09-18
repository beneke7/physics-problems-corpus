---
id: solution-ocr-izho-2021-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2021_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2021-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Thermodynamics of one-component plasma ( $\mathbf { 1 0 . 0 }$ points)

2.1 The smallest distance between neighboring deuterium nuclei coincides with the edge of the cube, and since there is 1 nucleus per cube, their concentration is

$$
\begin{equation*}
n = \frac { 1 } { a ^ { 3 } } , \tag{1}
\end{equation*}
$$

therefore

$$
\begin{equation*}
a = \frac { 1 } { \sqrt [ 3 ] { n } } = 8.51 \cdot 10 ^ { - 12 } м \tag{2}
\end{equation*}
$$

2.2 The electrostatic energy of interaction of two nuclei located at the distance $a$ from each other is found as

$$
\begin{equation*}
W _ { p } = \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } a } , \tag{3}
\end{equation*}
$$

and their thermal energy is evaluated by the formula

$$
\begin{equation*}
E _ { T } = k _ { B } T , \tag{4}
\end{equation*}
$$

whence the sought ratio is obtained in the form

$$
\begin{equation*}
\Gamma = \frac { W _ { p } } { E _ { T } } = \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } a k _ { B } T } = 111 . \tag{5}
\end{equation*}
$$

2.3 In general, the spherical cell is neutral, and its radius is equal to

$$
\begin{equation*}
R = a / 2 \tag{6}
\end{equation*}
$$

with the corresponding volume

$$
\begin{equation*}
V = \frac { 4 } { 3 } \pi R ^ { 3 } , \tag{7}
\end{equation*}
$$

therefore, the bulk charge density is expressed as

$$
\begin{equation*}
\rho = - \frac { e } { V } = - \frac { 6 e } { \pi a ^ { 3 } } = - \frac { 6 } { \pi } n e = - 4.95 \cdot 10 ^ { 14 } \mathrm { Cl } / \mathrm { m } ^ { 3 } . \tag{8}
\end{equation*}
$$

2.4 Let us apply Gauss's theorem

$$
\begin{equation*}
\oint _ { S } \mathbf { E } \cdot d \mathbf { S } = \frac { Q } { \varepsilon _ { 0 } } \tag{9}
\end{equation*}
$$

to the sphere of radius $r$ centered at the location of the nucleus. The flux of the electric field strength $E$ through this sphere, due to symmetry, is delivered by

$$
\begin{equation*}
\oint _ { S } \mathbf { E } \cdot d \mathbf { S } = E 4 \pi r ^ { 2 } , \tag{10}
\end{equation*}
$$

and the net charge $Q$ inside the sphere is obtained as

$$
\begin{equation*}
Q = e + \rho \frac { 4 } { 3 } \pi r ^ { 3 } . \tag{11}
\end{equation*}
$$

It follows from equations (9)-(11) that

$$
\begin{equation*}
E = \frac { e } { 4 \pi \varepsilon _ { 0 } r ^ { 2 } } + \frac { \rho r } { 3 \varepsilon _ { 0 } } , \tag{12}
\end{equation*}
$$

and the sought potential difference is determined by the expression

$$
\begin{equation*}
\varphi ( a / 4 ) - \varphi ( a / 2 ) = - \int _ { a / 2 } ^ { a / 4 } E d r , \tag{13}
\end{equation*}
$$

which finally yields

$$
\begin{equation*}
\varphi ( a / 4 ) - \varphi ( a / 2 ) = \frac { 5 e } { 16 \pi \varepsilon _ { 0 } a } = 211 V . \tag{14}
\end{equation*}
$$

2.5 The second term on the right-hand side of expression (12) determines the strength of the electric field created by the uniform charge distribution; therefore, the equation of motion of the nucleus projected onto the radial direction has the form


$$
\begin{equation*}
m \ddot { r } = \frac { e \rho } { 3 \varepsilon _ { 0 } } r , \tag{15}
\end{equation*}
$$

which is an equation of harmonic oscillations with a frequency

$$
\begin{equation*}
\omega _ { p } = \sqrt { - \frac { e \rho } { 3 m _ { p } \varepsilon _ { 0 } } } = \sqrt { \frac { 2 e ^ { 2 } } { \pi m _ { p } \varepsilon _ { 0 } a ^ { 3 } } } = \sqrt { \frac { 2 n e ^ { 2 } } { \pi m _ { p } \varepsilon _ { 0 } } } = 2.94 \cdot 10 ^ { 16 } s ^ { - 1 } . \tag{16}
\end{equation*}
$$

2.6 At a fixed temperature, the mean square thermal velocity of the nucleus is derived as

$$
\begin{equation*}
v = \sqrt { \frac { k _ { B } T } { m _ { p } } } , \tag{17}
\end{equation*}
$$

and the corresponding amplitude of deviation from the equilibrium position is determined as

$$
\begin{equation*}
A = \frac { v } { \omega _ { p } } = 2,85 \cdot 10 ^ { - 13 } \mathrm {~m} . \tag{18}
\end{equation*}
$$

It can be seen that the condition $A \ll a$ holds, i.e. the deuterium nuclei do indeed perform small oscillations near their equilibrium positions.
2.7 The internal energy of the system consists of the thermal energy of the thermal motiont of nuclei and the electrostatic energy of each cell. In turn, the electrostatic energy of each cell consists of the interaction energy of nuclei with the surrounding electron neutralizing background and the energy of the background itself.

Let us divide the cell into spherical layers and consider the layer located at the distance $r$ from the cell center and having the thickness $d r$. Its charge is obtained as

$$
\begin{equation*}
d q = \rho 4 \pi r ^ { 2 } d r , \tag{19}
\end{equation*}
$$

and the corresponding interaction energy with the nucleus is

$$
\begin{equation*}
W _ { 1 } = \int _ { 0 } ^ { R } \frac { e d q } { 4 \pi \varepsilon _ { 0 } r } = - \frac { 3 e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } a } . \tag{20}
\end{equation*}
$$

The energy density of the electric field is found by the formula

$$
\begin{equation*}
w = \frac { 1 } { 2 } \varepsilon _ { 0 } E ^ { 2 } , \tag{21}
\end{equation*}
$$

and since the electric field strength of the uniform background is determined by the second term in expression (12) and outside the sphere has the form like that of a point-дшлу charge, which formally coincides with the first term of expression (12),, then the electrostatic energy of the uniform background is evaluated as follows

$$
\begin{equation*}
W _ { 2 } = \frac { 1 } { 2 } \varepsilon _ { 0 } \int _ { 0 } ^ { R } \left( \frac { \rho r } { 3 \varepsilon _ { 0 } } \right) ^ { 2 } 4 \pi r ^ { 2 } d r + \frac { 1 } { 2 } \varepsilon _ { 0 } \int _ { R } ^ { \infty } \left( \frac { e } { 4 \pi \varepsilon _ { 0 } r ^ { 2 } } \right) ^ { 2 } 4 \pi r ^ { 2 } d r = \frac { 3 e ^ { 2 } } { 10 \pi \varepsilon _ { 0 } a } . \tag{22}
\end{equation*}
$$

Thus, the total electrostatic energy of a single cell is written as

$$
\begin{equation*}
W = W _ { 1 } + W _ { 2 } = - \frac { 9 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } a } \tag{23}
\end{equation*}
$$

and is equal to the work that must be done to create it.
As shown above, the nucleus in the cell center is a three-dimensional harmonic oscillator, so its thermal chaotic energy is determined as

$$
\begin{equation*}
E = 3 N k _ { B } T , \tag{24}
\end{equation*}
$$

and hence the internal energy of $N$ cells has the form

$$
\begin{equation*}
U = E + N W = 3 N k _ { B } T - \frac { 9 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } \frac { N ^ { 4 / 3 } } { V ^ { 1 / 3 } } . \tag{25}
\end{equation*}
$$

Thus, the sought constants are found as

$$
\begin{align*}
& \alpha _ { 1 } = 3 k _ { B } T ,  \tag{26}\\
& \alpha _ { 2 } = - \frac { 9 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } . \tag{27}
\end{align*}
$$


2.8 In the absence of the neutralizing backgrounds of two nuclei, their fusion corresponds to the bare Coulomb barrier. The presence of neutralizing backgrounds leads to a decrease in the Coulomb barrier, which is obviously determined by the interaction of nuclei with their backgrounds and the self-energy of the backgrounds, i.e. by expression (23). In this case, the thermal energy of nuclei remains small in comparison with the lowering of the Coulomb barrier.

Each of the two cells before fusing has the electrostatic energy

$$
\begin{equation*}
W = - \frac { 9 e ^ { 2 } n ^ { 1 / 3 } } { 20 \pi \varepsilon _ { 0 } } . \tag{28}
\end{equation*}
$$

After fusion, a new cell is formed with the volume

$$
\begin{equation*}
V ^ { \prime } = 2 V \tag{29}
\end{equation*}
$$

with a helium nucleus in the center having an electric charge

$$
\begin{equation*}
e ^ { \prime } = 2 e . \tag{30}
\end{equation*}
$$

In accordance with the general formula, the electrostatic energy of the formed cell is derived as

$$
\begin{equation*}
W ^ { \prime } = - 2 ^ { 5 / 3 } \frac { 9 e ^ { 2 } n ^ { 1 / 3 } } { 20 \pi \varepsilon _ { 0 } } , \tag{31}
\end{equation*}
$$

whence the following expression for the Coulomb barrier lowering is obtained

$$
\begin{equation*}
\delta U _ { c } = 2 W - W ^ { \prime } = \frac { \left( 2 ^ { 2 / 3 } - 1 \right) 9 e ^ { 2 } n ^ { 1 / 3 } } { 10 \pi \varepsilon _ { 0 } } = 5.72 \cdot 10 ^ { - 17 } J . \tag{32}
\end{equation*}
$$

2.9 The circular process $A B C D$ is the Carnot cycle. Let us denote the temperature on the isotherm $A B$ as $T _ { A B }$, and on the isotherm $C D$ as $T _ { C D }$, while they differ very little from each other, so that $T _ { A B } \approx T _ { C D } \approx T$ and $T _ { A B } - T _ { C D } \ll T$. The work $A$ done in the cycle is equal to the area of the parallelogram $A B C D$, which is, in turn, equal to the area of the parallelogram $A B E F$. Since $A F = ( \partial P / \partial T ) _ { V } \left( T _ { A B } - T _ { C D } \right)$, the work in the cycle is derived as

$$
\begin{equation*}
A = \left( \frac { \partial P } { \partial T } \right) _ { V } \left( T _ { A B } - T _ { C D } \right) \left( V _ { B } - V _ { A } \right) . \tag{33}
\end{equation*}
$$

![](../../../figures/solution-ocr/48f19f48f2dfd797f48204ae.jpg)

In the process $A B$, the temperature is constant, so the change in internal energy is expressed as

$$
\begin{equation*}
U _ { B } - U _ { A } = \left( \frac { \partial U } { \partial V } \right) _ { T } \left( V _ { B } - V _ { A } \right) , \tag{34}
\end{equation*}
$$

and the supplied amount of heat according to the first law of thermodynamics takes the form

$$
\begin{equation*}
Q = U _ { B } - U _ { A } + P \left( V _ { B } - V _ { A } \right) . \tag{35}
\end{equation*}
$$

Since the process $A B C D$ is a Carnot cycle, its efficiency is written as

$$
\begin{equation*}
\frac { A } { Q } = \frac { T _ { A B } - T _ { C D } } { T _ { A B } } , \tag{36}
\end{equation*}
$$

and combining equations (33) - (36), we obtain the required relation

$$
\begin{equation*}
\left( \frac { \partial U } { \partial V } \right) _ { T } = T \left( \frac { \partial P } { \partial T } \right) _ { V } - P . \tag{37}
\end{equation*}
$$

2.10 Substituting formula (25) into equation (37), we obtain the first-order differential equation

$$
\begin{equation*}
T \left( \frac { \partial P } { \partial T } \right) _ { V } - P = \frac { 3 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } \frac { N ^ { 4 / 3 } } { V ^ { 4 / 3 } } , \tag{38}
\end{equation*}
$$

whose solution takes the form

$$
\begin{equation*}
P ( T , V ) = C ( V ) T - \frac { 3 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } \frac { N ^ { 4 / 3 } } { V ^ { 4 / 3 } } , \tag{39}
\end{equation*}
$$

where $C ( V )$ refers to some constant, which, in principle, can depend on the volume of the system.
In the absence of interaction between the nuclei, the pressure of the system should be reduced to the pressure of an ideal gas


$$
\begin{equation*}
\left. P ( T , V ) \right| _ { e \rightarrow 0 } = \frac { N k _ { B } T } { V } , \tag{40}
\end{equation*}
$$

and we immediately find

$$
\begin{equation*}
P ( T , V ) = \frac { N k _ { B } T } { V } - \frac { 3 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } \frac { N ^ { 4 / 3 } } { V ^ { 4 / 3 } } . \tag{41}
\end{equation*}
$$

Thus, the sought constants are obtained as

$$
\begin{align*}
& \beta _ { 1 } = k _ { B } T ,  \tag{42}\\
& \beta _ { 2 } = - \frac { 3 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } .  \tag{43}\\
& \beta _ { 3 } = \frac { 4 } { 3 } . \tag{44}
\end{align*}
$$

Substituting the numerical values, we obtain the numerical value for the pressure

$$
\begin{equation*}
P = - 2,59 \cdot 10 ^ { 16 } \Pi a . \tag{45}
\end{equation*}
$$

The pressure turns out to be negative! In fact, the pressure of the entire system includes the pressure of the electronic component and is definitely positive.

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 2.1 | Formula (2): $a = \frac { 1 } { \sqrt [ 3 ] { n } }$ | 0.2 | 0.4 |
|  | Numerical value in formula (2): $a = 8.51 \cdot 10 ^ { - 12 } m$ | 0.2 |  |
| 2.2 | Formula (3): $W _ { p } = \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } a }$ | 0.2 | 0.8 |
|  | Formula (4): $E _ { T } = k _ { B } T$ | 0.2 |  |
|  | Formula (5): $\Gamma = \frac { e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } a k _ { B } T }$ | 0.2 |  |
|  | Numerical value in formula (5): $\Gamma = 111$ | 0.2 |  |
| 2.3 | Formula (6): $R = a / 2$ | 0.1 | 0.6 |
|  | Formula (7): $V = \frac { 4 } { 3 } \pi R ^ { 3 }$ | 0.1 |  |
|  | Formula (8): $\rho = - \frac { 6 } { \pi } n e$ | 0.2 |  |
|  | Numerical value in formula (8): $\rho = - 4.95 \cdot 10 ^ { 14 } \mathrm { Cl } / \mathrm { m } ^ { 3 }$ | 0.2 |  |
| 2.4 | Formula (9): $\oint _ { S } \mathbf { E } \cdot d \mathbf { S } = \frac { Q } { \varepsilon _ { 0 } }$ | 0.2 | 1.4 |
|  | Formula (10): $\oint _ { S } \mathbf { E } \cdot d \mathbf { S } = E 4 \pi r ^ { 2 }$ | 0.2 |  |
|  | Formula (11): $Q = e + \rho \frac { 4 } { 3 } \pi r ^ { 3 }$ | 0.2 |  |
|  | Formula (12): $E = \frac { e } { 4 \pi \varepsilon _ { 0 } r ^ { 2 } } + \frac { \rho r } { 3 \varepsilon _ { 0 } }$ | 0.2 |  |
|  | Formula (13): $\varphi ( a / 4 ) - \varphi ( a / 2 ) = - \int _ { a / 2 } ^ { a / 4 } E d r$ | 0.2 |  |
|  | Formula (14): $\varphi ( a / 4 ) - \varphi ( a / 2 ) = \frac { 5 e } { 16 \pi \varepsilon _ { 0 } a }$ | 0.2 |  |


|  | Numerical value in formula (14): $\varphi ( a / 4 ) - \varphi ( a / 2 ) = 211 V$ | 0.2 |  |
| :--- | :--- | :--- | :--- |
| 2.5 | Formula (15): $m \ddot { r } = \frac { e \rho } { 3 \varepsilon _ { 0 } } r$ | 0.2 | 0.6 |
|  | Formula (16): $\omega _ { p } = \sqrt { \frac { 2 n e ^ { 2 } } { \pi m _ { p } \varepsilon _ { 0 } } }$ | 0.2 |  |
|  | Numerical value in formula (16): $\omega _ { p } = 2.94 \cdot 10 ^ { 16 } s ^ { - 1 }$ | 0.2 |  |
| 2.6 | Formula (17): $v = \sqrt { \frac { k _ { B } T } { m _ { p } } }$ | 0.2 | 0.6 |
|  | Formula (18): $A = \frac { v } { \omega _ { p } }$ | 0.2 |  |
|  | Numerical value in formula (18): $A = 2.85 \cdot 10 ^ { - 13 } m$ | 0.2 |  |
| 2.7 | Formula (19): $d q = \rho 4 \pi r ^ { 2 } d r$ | 0.2 | 1.8 |
|  | Formula (20): $W _ { 1 } = - \frac { 3 e ^ { 2 } } { 4 \pi \varepsilon _ { 0 } a }$ | 0.2 |  |
|  | Formula (21): $w = \frac { 1 } { 2 } \varepsilon _ { 0 } E ^ { 2 }$ | 0.2 |  |
|  | Formula (22): $W _ { 2 } = \frac { 3 e ^ { 2 } } { 10 \pi \varepsilon _ { 0 } a }$ | 0.2 |  |
|  | Formula (23): $W = - \frac { 9 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } a }$ | 0.2 |  |
|  | Formula (24): $E = 3 N k _ { B } T$ | 0.2 |  |
|  | Formula (25): $U = E + N W = 3 N k _ { B } T - \frac { 9 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } \frac { N ^ { 4 / 3 } } { V ^ { 1 / 3 } }$ | 0.2 |  |
|  | Formula (26): $\alpha _ { 1 } = 3 k _ { B } T$ | 0.2 |  |
|  | Formula (27): $\alpha _ { 2 } = - \frac { 9 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } }$ | 0.2 |  |
| 2.8 | Formula (28): $W = - \frac { 9 e ^ { 2 } n ^ { 1 / 3 } } { 20 \pi \varepsilon _ { 0 } }$ | 0.2 | 1.2 |
|  | Formula (29): $V ^ { \prime } = 2 V$ | 0.2 |  |
|  | Formula (30): $e ^ { \prime } = 2 e$ | 0.2 |  |
|  | Formula (31): $W ^ { \prime } = - 2 ^ { 5 / 3 } \frac { 9 e ^ { 2 } n ^ { 1 / 3 } } { 20 \pi \varepsilon _ { 0 } }$ | 0.2 |  |
|  | Formula (32): $\delta U _ { c } = \frac { \left( 2 ^ { 2 / 3 } - 1 \right) 9 e ^ { 2 } n ^ { 1 / 3 } } { 10 \pi \varepsilon _ { 0 } }$ | 0.2 |  |
|  | Numerical value in formula (32): $\delta U _ { c } = 5.72 \cdot 10 ^ { - 17 } J$ | 0.2 |  |
| 2.9 | Formula (33): $A = \left( \frac { \partial P } { \partial T } \right) _ { V } \left( T _ { A B } - T _ { C D } \right) \left( V _ { B } - V _ { A } \right)$ | 0.2 | 1.0 |
|  | Formula (34): $U _ { B } - U _ { A } = \left( \frac { \partial U } { \partial V } \right) _ { T } \left( V _ { B } - V _ { A } \right)$ | 0.2 |  |
|  | Formula (35): $Q = U _ { B } - U _ { A } + P \left( V _ { B } - V _ { A } \right)$ | 0.2 |  |


|  | Formula (36): $\frac { A } { Q } = \frac { T _ { A B } - T _ { C D } } { T _ { A B } }$ | 0.2 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (37): $\left( \frac { \partial U } { \partial V } \right) _ { T } = T \left( \frac { \partial P } { \partial T } \right) _ { V } - P$ |  |  |
| 2.10 | Formula (38): $T \left( \frac { \partial P } { \partial T } \right) _ { V } - P = \frac { 3 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } \frac { N ^ { 4 / 3 } } { V ^ { 4 / 3 } }$ | 0.2 |  |
|  | Formula (39): $P ( T , V ) = C ( V ) T - \frac { 3 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } \frac { N ^ { 4 / 3 } } { V ^ { 4 / 3 } }$ | 0.2 |  |
|  | Formula (40): $\left. P ( T , V ) \right\| _ { e \rightarrow 0 } = \frac { N k _ { B } T } { V }$ | 0.2 |  |
|  | Formula (41): $P ( T , V ) = \frac { N k _ { B } T } { V } - \frac { 3 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } } \frac { N ^ { 4 / 3 } } { V ^ { 4 / 3 } }$ | 0.2 |  |
|  | Formula (42): $\beta _ { 1 } = k _ { B } T$ | 0.2 |  |
|  | Formula (43): $\beta _ { 2 } = - \frac { 3 e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } }$ | 0.2 |  |
|  | Formula (44): $\beta _ { 3 } = \frac { 4 } { 3 }$ | 0.2 |  |
|  | Numerical value in formula (45): $P = - 2.59 \cdot 10 ^ { 16 } P a$ | 0.2 |  |
| Total |  |  | 10.0 |
