---
id: solution-ocr-izho-2026-t-s
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2026_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2026-t-q1, izho-2026-t-q2, izho-2026-t-q3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## SOLUTIONS TO THE PROBLEMS OF THE THEORETICAL COMPETITION Attention. Points in grading are not divided! <br> Problem 1 (10.0 points) <br> Problem 1.1 (3.0 points)

Let the $x$-axis be directed downwards, and the initial position of the roll's center of mass correspond to the origin. If the velocity of the roll's center of mass at a given moment in time is $v$, then its kinetic energy is

$$
\begin{equation*}
E _ { k } = \frac { m } { L } ( L - x ) v ^ { 2 } . \tag{1}
\end{equation*}
$$

On the other hand, the potential energy of the roll relative to the initial position is equal to

$$
\begin{equation*}
E _ { p } = - \frac { m } { L } g \frac { x ^ { 2 } } { 2 } - \frac { m } { L } g ( L - x ) x . \tag{2}
\end{equation*}
$$

At the initial moment of time the total energy is zero, therefore, according to the conservation law we get

$$
\begin{equation*}
E _ { k } + E _ { p } = 0 , \tag{3}
\end{equation*}
$$

from which the dependence of the speed of the roll center of mass on the coordinate is given by

$$
\begin{equation*}
v ^ { 2 } ( x ) = g \left[ x + \frac { x ^ { 2 } } { 2 ( L - x ) } \right] . \tag{4}
\end{equation*}
$$

The acceleration of the roll is determined by the expression

$$
\begin{equation*}
a ( x ) = \frac { d v } { d t } = v \frac { d v } { d x } , \tag{5}
\end{equation*}
$$

which after substitution (4) gives the following dependence

$$
\begin{equation*}
a ( x ) = \frac { g } { 4 } \left[ 1 + \frac { L ^ { 2 } } { ( L - x ) ^ { 2 } } \right] . \tag{6}
\end{equation*}
$$

The total momentum of the roll is directed along the $x$-axis and is equal to

$$
\begin{equation*}
p = \frac { m } { L } ( L - x ) v , \tag{7}
\end{equation*}
$$

and therefore the change in momentum over time takes the form

$$
\begin{equation*}
\frac { d p } { d t } = - \frac { m } { L } v ^ { 2 } + \frac { m } { L } ( L - x ) a . \tag{8}
\end{equation*}
$$

According to the conditions of the problem, the force acting on the platform from the roll is equal to the force of gravity, which means that the total external force on the roll itself is zero, and we obtain

$$
\begin{equation*}
\frac { d p } { d t } = 0 . \tag{9}
\end{equation*}
$$

Solving together (4), (6), (8) and (9), we derive the quadratic equation

$$
\begin{equation*}
x + \frac { x ^ { 2 } } { 2 ( L - x ) } = \frac { 1 } { 2 } \left( L + \frac { x ^ { 2 } } { 2 ( L - x ) } \right) , \tag{10}
\end{equation*}
$$

whose positive root equals to

$$
\begin{equation*}
x _ { 0 } = \frac { 3 - \sqrt { 3 } } { 3 } L = 4.23 \mathrm {~m} . \tag{11}
\end{equation*}
$$

Substituting into (4) and (6) provides the final answers

$$
\begin{align*}
& v \left( x _ { 0 } \right) = \frac { \sqrt { g L } } { \sqrt [ 4 ] { 3 } } = 7.52 \mathrm {~m} / \mathrm { s } ,  \tag{12}\\
& a \left( x _ { 0 } \right) = g = 9.80 \mathrm {~m} / \mathrm { s } ^ { 2 } . \tag{13}
\end{align*}
$$

| Content | Points |
| :--- | :--- |
| Formula (1): $E _ { k } = \frac { m } { L } ( L - x ) v ^ { 2 }$ | 0.2 |
| Formula (2): $E _ { p } = - \frac { m } { L } g \frac { x ^ { 2 } } { 2 } - \frac { m } { L } g ( L - x ) x$. | 0.2 |
| Formula (3): $E _ { k } + E _ { p } = 0$ | 0.1 |
| Formula (4): $v ^ { 2 } ( x ) = g \left[ x + \frac { x ^ { 2 } } { 2 ( L - x ) } \right]$ | 0.2 |
| Formula (5): $a ( x ) = \frac { d v } { d t } = v \frac { d v } { d x }$ | 0.2 |
| Formula (6): $a ( x ) = \frac { g } { 4 } \left[ 1 + \frac { L ^ { 2 } } { ( L - x ) ^ { 2 } } \right]$ | 0.2 |
| Formula (7): $p = \frac { m } { L } ( L - x ) v$ | 0.2 |


| Formula (8): $\frac { d p } { d t } = - \frac { m } { L } v ^ { 2 } + \frac { m } { L } ( L - x ) a$ | 0.2 |
| :--- | :--- |
| Formula (9): $\frac { d p } { d t } = 0$ | 0.2 |
| Formula (10): $x + \frac { x ^ { 2 } } { 2 ( L - x ) } = \frac { 1 } { 2 } \left( L + \frac { x ^ { 2 } } { 2 ( L - x ) } \right)$ | 0.1 |
| Formula (11): $x _ { 0 } = \frac { 3 - \sqrt { 3 } } { 3 } L$ | 0.2 |
| Numerical value in formula (11): $x _ { 0 } = 4.23 \mathrm {~m}$ | 0.2 |
| Formula (12): $v \left( x _ { 0 } \right) = \frac { \sqrt { g L } } { \sqrt [ 4 ] { 3 } }$ | 0.2 |
| Numerical value in formula (12): $v \left( x _ { 0 } \right) = 7.52 \mathrm {~m} / \mathrm { s }$ | 0.2 |
| Formula (13): $a \left( x _ { 0 } \right) = g$ | 0.2 |
| Numerical value in formula (13): $a \left( x _ { 0 } \right) = 9.80 \mathrm {~m} / \mathrm { s } ^ { 2 }$ | 0.2 |
| Total | 3.0 |

## Problem 1.2 (4.0 points)

At the initial moment of time $t = 0$ the capacitor is not charged and the voltage drops across the connected resistances are the same, that is, they are connected in parallel, therefore

$$
\begin{equation*}
\frac { 1 } { R _ { 0 } } = \frac { 1 } { R } + \frac { 1 } { r } , \tag{1}
\end{equation*}
$$

and the ohmmeter readings are

$$
\begin{equation*}
R _ { 0 } = R ( 0 ) = A - B . \tag{2}
\end{equation*}
$$

At time $t = \infty$ the capacitor is fully charged and no current flows through it, therefore

$$
\begin{equation*}
R _ { \infty } = r , \tag{3}
\end{equation*}
$$

and the ohmmeter readings are

$$
\begin{equation*}
R _ { \infty } = R ( \infty ) = A , \tag{4}
\end{equation*}
$$

Solving (1)-(4) together, we obtain

$$
\begin{align*}
& r = 100 \mathrm { k } \Omega ,  \tag{5}\\
& R = 150 \mathrm { k } \Omega . \tag{6}
\end{align*}
$$

At any given moment in time, the voltage drop $U _ { r }$ across the resistance $r$ is equal to the voltage drop $U _ { R }$ across the resistance $R$ and the voltage drop $U _ { C }$ across the capacitor $C$, that is,

$$
\begin{equation*}
U _ { r } = U _ { R } + U _ { C } . \tag{7}
\end{equation*}
$$

On the other side according to Ohm's law we write

$$
\begin{align*}
& U _ { R } = I _ { c } R ,  \tag{8}\\
& U _ { r } = I _ { r } r , \tag{9}
\end{align*}
$$

where $I _ { r }$ denotes the current flowing through the resistor $r$, and $I _ { c }$ designates the current flowing through the capacitor $C$ and the resistance $R$.

The voltage across the capacitor is equal to

$$
\begin{equation*}
U _ { C } = \frac { q } { C } . \tag{10}
\end{equation*}
$$

Note that the capacitor is charged due to the flow of current $I _ { 0 }$ generated by the ohmmeter, that is,

$$
\begin{equation*}
I _ { 0 } = I _ { r } + I _ { C } , \tag{11}
\end{equation*}
$$

and the current flowing through the capacitor is equal to the derivative of its charge over time

$$
\begin{equation*}
I _ { C } = \frac { d q } { d t } . \tag{12}
\end{equation*}
$$

From (7)-(12) we derive the differential equation for $q$

$$
\begin{equation*}
\frac { d q } { d t } + \frac { q } { \tau _ { 0 } } = I _ { 0 } \frac { r } { R + r } . \tag{13}
\end{equation*}
$$

whose solution yields the current through the capacitor

$$
\begin{equation*}
I _ { c } = I _ { 0 } \frac { r } { R + r } e ^ { - t / \tau _ { 0 } } . \tag{14}
\end{equation*}
$$

Here $\tau _ { 0 } = C ( R + r )$.
Thus, the capacitance is found as

$$
\begin{equation*}
C = \frac { \tau _ { 0 } } { R + r } = 400 \mu \mathrm {~F} . \tag{15}
\end{equation*}
$$

The amount of heat released by the resistor is determined by the Joule-Lenz law and is equal to


$$
\begin{equation*}
Q = \int _ { 0 } ^ { \infty } I _ { c } ^ { 2 } R d t = \frac { I _ { 0 } ^ { 2 } r ^ { 2 } R \tau _ { 0 } } { 2 ( R + r ) ^ { 2 } } = 12 \mathrm {~mJ} \tag{16}
\end{equation*}
$$

Note that, in principle, there is no need to consider equations (1)-(4) separately; to find unknown resistances, it is sufficient to find the dependence $R ( t )$, which is obtained as

$$
\begin{equation*}
R ( t ) = \frac { U _ { r } } { I _ { 0 } } = r - \frac { r ^ { 2 } } { R + r } e ^ { - t / \tau _ { 0 } } . \tag{17}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| Formula (1): $\frac { 1 } { R _ { 0 } } = \frac { 1 } { R } + \frac { 1 } { r }$ | 0.2 |
| Formula (2): $R _ { 0 } = R ( 0 ) = A - B$ | 0.2 |
| Formula (3): $R _ { \infty } = r$ | 0.2 |
| Formula (4): $R _ { \infty } = R ( \infty ) = A$ | 0.2 |
| Formula (5): $r = 100 \mathrm { k } \Omega$ | 0.2 |
| Formula (6): $R = 150 \mathrm { k } \Omega$ | 0.2 |
| Formula (7): $U _ { r } = U _ { R } + U _ { C }$ | 0.2 |
| Formula (8): $U _ { R } = I _ { c } R$ | 0.2 |
| Formula (9): $U _ { r } = I _ { r } r$ | 0.2 |
| Formula (10): $U _ { C } = \frac { q } { c }$ | 0.2 |
| Formula (11): $I _ { 0 } = I _ { r } + I _ { C }$, | 0.2 |
| Formula (12): $I _ { C } = \frac { d q } { d t }$ | 0.2 |
| Formula (13): $\frac { d q } { d t } + \frac { q } { \tau _ { 0 } } = I _ { 0 } \frac { r } { R + r }$ | 0.2 |
| Formula (14): $I _ { c } = I _ { 0 } \frac { r } { R + r } e ^ { - t / \tau _ { 0 } }$ | 0.4 |
| Formula (15): $C = \frac { \tau _ { 0 } } { R + r }$ | 0.2 |
| Numerical value in equation (15): $C = 400 \mu \mathrm {~F}$ | 0.2 |
| Formula (16): $Q = \frac { I _ { 0 } ^ { 2 } r ^ { 2 } R \tau _ { 0 } } { 2 ( R + r ) ^ { 2 } }$ | 0.4 |
| Numerical value in equation (16): $Q = 12 \mathrm {~mJ}$ | 0.2 |
| Total | 4.0 |

## Problem 1.3 (3.0 points)

A real image with a smaller angular size $\varphi _ { 1 }$ is formed as a result of reflection at the air-glass boundary on the concave surface of the lens as from a concave mirror with a radius of curvature $r$ at a distance equal to the focal length $F _ { 1 }$ of the mirror

$$
\begin{equation*}
\frac { 1 } { F _ { 1 } } = \frac { 2 } { r } , \tag{1}
\end{equation*}
$$

which means the image is located at a distance from the observer

$$
\begin{equation*}
a _ { 1 } = L - F _ { 1 } . \tag{2}
\end{equation*}
$$

Let $\varphi _ { 0 }$ be the apparent angular size of the street lamp from the lens location. Then the linear size of the image of the lamp at the focus is

$$
\begin{equation*}
l _ { 1 } = \varphi _ { 0 } F _ { 1 } , \tag{3}
\end{equation*}
$$

and therefore, the angular size of the visible image is found as

$$
\begin{equation*}
\varphi _ { 1 } = \frac { l _ { 1 } } { a _ { 1 } } . \tag{4}
\end{equation*}
$$

The second image, with a larger angular size of $\varphi _ { 2 }$, is a virtual image of the lamp, formed as a result of reflection at the glass-air boundary from the convex surface of the lens. Considering that the rays that formed this image passed twice through a diverging lens with optical power $D$, and the focal length of the convex surface is $R / 2$, the focal length of the system is

$$
\begin{equation*}
- \frac { 1 } { F _ { 2 } } = 2 D + \frac { 2 } { R } , \tag{5}
\end{equation*}
$$

and the image itself is located at a distance from the observer

$$
\begin{equation*}
a _ { 2 } = L + F _ { 2 } . \tag{6}
\end{equation*}
$$


The linear size of the image of the lantern at focus is equal to

$$
\begin{equation*}
l _ { 2 } = \varphi _ { 0 } F _ { 2 } , \tag{7}
\end{equation*}
$$

and therefore the angular size of the visible image is finally obtained as

$$
\begin{equation*}
\varphi _ { 2 } = \frac { l _ { 2 } } { a _ { 2 } } . \tag{8}
\end{equation*}
$$

Using the condition $\gamma = \varphi _ { 1 } / \varphi _ { 2 }$, the answer is derived as

$$
\begin{equation*}
D = \frac { \gamma + 1 } { 2 L } - \frac { 1 } { R } - \frac { \gamma } { r } = - 4 \mathrm { dpt } . \tag{9}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| Formula (1): $\frac { 1 } { F _ { 1 } } = \frac { 2 } { r }$ | 0.2 |
| Formula (2): $a _ { 1 } = L - F _ { 1 }$ | 0.2 |
| Formula (3): $l _ { 1 } = \varphi _ { 0 } F _ { 1 }$ | 0.4 |
| Formula (4): $\varphi _ { 1 } = \frac { l _ { 1 } } { a _ { 1 } }$ | 0.4 |
| Formula (5): $- \frac { 1 } { F _ { 2 } } = 2 D + \frac { 2 } { R }$ | 0.2 |
| Formula (6): $a _ { 2 } = L + F _ { 2 }$ | 0.2 |
| Formula (7): $l _ { 2 } = \varphi _ { 0 } F _ { 2 }$ | 0.4 |
| Formula (8): $\varphi _ { 2 } = \frac { l _ { 2 } } { a _ { 2 } }$ | 0.4 |
| Formula (9): $D = \frac { \gamma + 1 } { 2 L } - \frac { 1 } { R } - \frac { \gamma } { r }$ | 0.2 |
| Numerical value in formula (9): $D = - 4 \mathrm { dpt }$ | 0.4 |
| Total | 3.0 |

## Problem 2. Steam Engine ( $\mathbf { 1 0 . 0 }$ points) <br> Part 1. Steam Engine without a Governor

2.1 Let us write the equation of the adiabatic process

$$
\begin{equation*}
P V ^ { \gamma } = \text { const } \tag{1}
\end{equation*}
$$

Applying it to process 2-3, we obtain

$$
\begin{equation*}
\eta = \left( \frac { P _ { A } } { P _ { 0 } } \right) ^ { \frac { 1 } { \gamma } } = 0.177 . \tag{2}
\end{equation*}
$$

2.2 To determine the initial temperature, the adiabatic equation should be written in the $( T , V )$ variables:

$$
\begin{equation*}
T V ^ { \gamma - 1 } = \text { const } , \tag{3}
\end{equation*}
$$

which, when applied again to process 2-3, leads to the following expression:

$$
\begin{equation*}
T _ { 0 } = \frac { T _ { S } } { \eta ^ { \gamma - 1 } } = 390 ^ { \circ } \mathrm { C } . \tag{4}
\end{equation*}
$$

2.3 The ideal gas equation of state for point 2 has the form

$$
\begin{equation*}
P _ { 0 } \eta V _ { 0 } = \frac { m _ { 0 } } { M } R T _ { 0 } , \tag{5}
\end{equation*}
$$

which yields

$$
\begin{equation*}
m _ { 0 } = M \frac { P _ { 0 } \eta V _ { 0 } } { R T _ { 0 } } = 2.30 \mathrm {~g} , \tag{6}
\end{equation*}
$$

2.4 On segment 1-2 the work performed by the steam is

$$
\begin{equation*}
A _ { 1 - 2 } = P _ { 0 } \eta V _ { 0 } , \tag{7}
\end{equation*}
$$

while on segment $2 - 3$ the work along the adiabatic is

$$
\begin{equation*}
A _ { 2 - 3 } = P _ { 0 } V _ { 0 } \frac { \eta - \eta ^ { \gamma } } { \gamma - 1 } . \tag{8}
\end{equation*}
$$

On segment 3-4 the work is negative and equal to

$$
\begin{equation*}
A _ { 3 - 4 } = - P _ { A } V _ { 0 } , \tag{9}
\end{equation*}
$$

therefore, the total work is

$$
\begin{equation*}
A _ { 0 } = P _ { 0 } V _ { 0 } \left( \eta + \frac { \eta - \eta ^ { \gamma } } { \gamma - 1 } \right) - P _ { A } V _ { 0 } = 1.25 \cdot 10 ^ { 3 } \mathrm {~J} . \tag{10}
\end{equation*}
$$

2.5 The working volume reaches its maximum value over half a revolution of the flywheel; therefore, the average rate of change of the volume is


$$
\begin{equation*}
v = \frac { V _ { 0 } } { \pi / \omega } = \frac { V _ { 0 } \omega } { \pi } . \tag{11}
\end{equation*}
$$

2.6 Let us establish the relation between the pressure in the cylinder and the mass of steam inside it. For this purpose, we write the adiabatic equation

$$
\begin{equation*}
P _ { 0 } V _ { i n } ^ { \gamma } = P V ^ { \gamma } , \tag{12}
\end{equation*}
$$

where $V _ { i n }$ is the volume occupied by the steam in the generator before it enters the working cylinder. For this volume, the equation of state is

$$
\begin{equation*}
P _ { 0 } V _ { \text {in } } = \frac { m } { M } R T _ { 0 } . \tag{13}
\end{equation*}
$$

Then the pressure in the cylinder can be expressed in terms of the steam mass using the adiabatic equation (12) and the equation of state (13) as

$$
\begin{equation*}
P = P _ { 0 } \left( \frac { R T _ { 0 } } { M P _ { 0 } } \frac { m } { v t } \right) ^ { \gamma } , \tag{14}
\end{equation*}
$$

where $V = v t$ is the time-dependent working volume.
Taking into account the equation given in the problem statement, we obtain the required equation for the steam mass in the cylinder:

$$
\begin{equation*}
\frac { d m } { d t } = K \left( P _ { 0 } - P \right) = K P _ { 0 } \left( 1 - \left( \frac { R T _ { 0 } } { M P _ { 0 } } \frac { m } { v t } \right) ^ { \gamma } \right) . \tag{15}
\end{equation*}
$$

2.7 An obvious solution of Eq. (15) is a linear function

$$
\begin{equation*}
m \propto t , \tag{16}
\end{equation*}
$$

and therefore, according to Eq. (14), the steam pressure in the cylinder remains constant.
2.8 In accordance with Eq. (15), the gas mass increases linearly

$$
\begin{equation*}
m = K \left( P _ { 0 } - P \right) t , \tag{17}
\end{equation*}
$$

and thus, from Eq. (15) and the relation $V = v t$, we obtain that the gas pressure must satisfy

$$
\begin{equation*}
P = P _ { 0 } \left( \frac { R T _ { 0 } } { M P _ { 0 } } \frac { \pi K \left( P _ { 0 } - P \right) } { V _ { 0 } \omega } \right) ^ { \gamma } . \tag{18}
\end{equation*}
$$

2.9 Now we use the approximation $\gamma \approx 1$, which allows us to obtain an explicit expression for the pressure:

$$
\begin{equation*}
P = \frac { P _ { 0 } } { 1 + \frac { M V _ { 0 } \omega } { \pi K R T _ { 0 } } } . \tag{19}
\end{equation*}
$$

2.10 The numerical value of the pressure for the given parameters is

$$
\begin{equation*}
P = 9.10 \cdot 10 ^ { 5 } П а . \tag{20}
\end{equation*}
$$

2.11 The work performed by the engine during one cycle can be calculated using Eq. (10), where $P _ { 0 }$ should be replaced by the pressure $P$ given by Eq. (19). This leads to

$$
\begin{equation*}
A = P _ { 0 } V _ { 0 } \frac { \eta + \frac { \eta - \eta \gamma } { \gamma - 1 } } { 1 + \frac { M V _ { 0 } \omega } { \pi K R T _ { 0 } } } \tag{21}
\end{equation*}
$$

Thus, the parameters of this formula are

$$
\begin{align*}
& A _ { 0 } = P _ { 0 } V _ { 0 } \left( \eta + \frac { \eta - \eta ^ { \gamma } } { \gamma - 1 } \right) = 1.44 \cdot 10 ^ { 3 } \mathrm {~J}  \tag{22}\\
& \beta = \frac { M V _ { 0 } } { \pi R T _ { 0 } } = 4.16 \cdot 10 ^ { - 9 } \mathrm {~m} \cdot \mathrm {~s} ^ { 2 } . \tag{23}
\end{align*}
$$

2.12 In the steady-state regime, the work performed by the steam per cycle is equal to the work done on the load:

$$
\begin{equation*}
\frac { A _ { 0 } } { 1 + \beta _ { K } ^ { \frac { \omega } { K } } } = 2 \pi M _ { 0 } . \tag{24}
\end{equation*}
$$

Hence, the mean angular velocity in the steady-state regime is

$$
\begin{equation*}
\omega = \frac { K } { \beta } \left( \frac { A _ { 0 } } { 2 \pi M _ { 0 } } - 1 \right) . \tag{25}
\end{equation*}
$$

2.13 From Eq. (25) it follows that the maximum torque is

$$
\begin{equation*}
M _ { 0 \max } = \frac { A _ { 0 } } { 2 \pi } = 230 \mathrm {~N} \cdot \mathrm {~m} . \tag{26}
\end{equation*}
$$

2.14 A schematic plot of the corresponding dependence is shown in the figure below.


![](../../../figures/solution-ocr/203d18ef979bb933f73e53d9.jpg)

## Part 2. Governor without the Engine

2.15 It is more convenient to solve this part of the problem in a rotating reference frame. In the equilibrium state, the torque due to gravity is balanced by the torque due to the centrifugal force:

$$
\begin{equation*}
m g l \sin \theta = m \omega ^ { 2 } l ^ { 2 } \sin \theta \cos \theta . \tag{27}
\end{equation*}
$$

It follows that the deflection angle is determined by

$$
\begin{array} { l l }
\cos \theta = 1 , & \omega < \sqrt { \frac { g } { l } } , \\
\cos \theta = \frac { g } { \omega ^ { 2 } l } , & \omega \geq \sqrt { \frac { g } { l } } . \tag{29}
\end{array}
$$

![](../../../figures/solution-ocr/cfb42f4cd542eb8bafc8ccf6.jpg)
2.16 A schematic plot of this dependence is shown in the figure below.
![](../../../figures/solution-ocr/64b1e34ba7d17f89af8cdc75.jpg)

## Part 3. Engine with a Governor

2.17 Taking into account that $K = K _ { 0 } \cos \theta$ and using Eq. (19), substitution into Eq. (25) yields

$$
\begin{equation*}
\omega = \sqrt [ 3 ] { \frac { K _ { 0 } g } { \beta l } \left( \frac { A _ { 0 } } { 2 \pi M _ { 0 } } - 1 \right) } . \tag{30}
\end{equation*}
$$

2.18 A schematic plot of the corresponding dependence is shown in the figure below.
![](../../../figures/solution-ocr/8113be0dd40cc9973967f552.jpg)


|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 2.1 | Formula (1): $P V ^ { \gamma } =$ const | 0.2 | 0.6 |
|  | Formula (2): $\eta = \left( \frac { P _ { A } } { P _ { 0 } } \right) ^ { \frac { 1 } { \gamma } }$ | 0.2 |  |
|  | Numerical value in formula (2): $\eta = 0.177$ | 0.2 |  |
| 2.2 | Formula (3): $T V ^ { \gamma - 1 } =$ const | 0.2 | 0.6 |
|  | Formula (4): $T _ { 0 } = \frac { T _ { S } } { \eta ^ { \gamma - 1 } }$ | 0.2 |  |
|  | Numerical value in formula (4): $T _ { 0 } = 390 ^ { \circ } \mathrm { C }$ | 0.2 |  |
| 2.3 | Formula (6): $m _ { 0 } = M \frac { P _ { 0 } \eta V _ { 0 } } { R T _ { S } }$ | 0.2 | 0.4 |
|  | Numerical value in formula (6): $m _ { 0 } = 2.30 \mathrm {~g}$ | 0.2 |  |
| 2.4 | Formula (7): $A _ { 1 - 2 } = P _ { 0 } \eta V _ { 0 }$ | 0.2 | 1.0 |
|  | Formula (8): $A _ { 2 - 3 } = P _ { 0 } V _ { 0 } \frac { \eta - \eta ^ { \eta } } { \gamma - 1 }$ | 0.2 |  |
|  | Formula (9): $A _ { 3 - 4 } = - P _ { A } V _ { 0 }$ | 0.2 |  |
|  | Formula (10): $A _ { 0 } = P _ { 0 } V _ { 0 } \left( \eta + \frac { \eta - \eta ^ { \eta } } { \gamma - 1 } \right) - P _ { A } V _ { 0 }$ | 0.2 |  |
|  | Numerical value in formula (10): $A _ { 0 } = 1.25 \cdot 10 ^ { 3 } \mathrm {~J}$ | 0.2 |  |
| 2.5 | Formula (11): $v = \frac { V _ { 0 } \omega } { \pi }$ | 0.2 | 0.2 |
|  | Formula (12): $P _ { 0 } V _ { i n } ^ { \gamma } = P V ^ { \gamma }$ | 0.2 |  |
|  | Formula (13): $P _ { 0 } V _ { \text {in } } = \frac { m } { M } R T _ { 0 }$ | 0.2 |  |
|  | Formula (14) : $P = P _ { 0 } \left( \frac { R T _ { 0 } } { M P _ { 0 } } \frac { m } { v t } \right) ^ { \gamma }$ | 0.2 |  |
|  | Formula (15): $\frac { d m } { d t } = K P _ { 0 } \left( 1 - \left( \frac { R T _ { 0 } } { M P _ { 0 } } \frac { m } { v t } \right) ^ { \gamma } \right)$ | 0.4 |  |
| 2.7 | Formula (16): $m \propto t$ | 0.4 | 0.6 |
|  | Reference to formula (14) or (15) | 0.2 |  |
| 2.8 | Formula (17): $m = K \left( P _ { 0 } - P \right) t$ | 0.2 | 0.6 |
|  | Formula (18): $P = P _ { 0 } \left( \frac { R T _ { 0 } } { M P _ { 0 } } \frac { \pi K \left( P _ { 0 } - P \right) } { V _ { 0 } \omega } \right) ^ { \gamma }$ | 0.4 |  |
| 2.9 | Formula (19): $P = \frac { P _ { 0 } } { 1 + \frac { M V 0 } { \pi K R T _ { 0 } } }$ | 0.2 | 0.2 |
| 2.10 | Numerical value in formula (20): $P = 9.10 \cdot 10 ^ { 5 } \mathrm {~Pa}$ | 0.2 | 0.2 |
| 2.11 | Formula (21): $A = P _ { 0 } V _ { 0 } \frac { \eta + \frac { \eta - \eta V } { \gamma - 1 } } { 1 + \frac { M V _ { 0 } \omega } { \pi K T _ { 0 } } }$ | 0.2 | 1.0 |
|  | Formula (22): $A _ { 0 } = P _ { 0 } V _ { 0 } \left( \eta + \frac { \eta - \eta ^ { \gamma } } { \gamma - 1 } \right)$ | 0.2 |  |
|  | Numerical value in formula (22): $A _ { 0 } = 1.44 \cdot 10 ^ { 3 } \mathrm {~J}$ | 0.2 |  |
|  | Formula (23): $\beta = \frac { M V _ { 0 } } { \pi R T _ { 0 } }$ | 0.2 |  |
|  | Numerical value in formula (23): $\beta = 4.16 \cdot 10 ^ { - 9 } \mathrm {~m} \cdot \mathrm {~s} ^ { 2 }$ | 0.2 |  |
| 2.12 | Formula (24): $\frac { A _ { 0 } } { 1 + \beta \frac { \omega } { K } } = 2 \pi M _ { 0 }$ | 0.4 | 0.6 |
|  | Formula (25): $\omega = \frac { K } { \beta } \left( \frac { A _ { 0 } } { 2 \pi M _ { 0 } } - 1 \right)$ | 0.2 |  |
| 2.13 | Formula (26): $M _ { 0 \max } = \frac { A _ { 0 } } { 2 \pi }$ | 0.4 | 0.6 |
|  | Numerical value in formula (26): $M _ { 0 \max } = 230 \mathrm {~N} \cdot \mathrm {~m}$ | 0.2 |  |
| 2.14 | Graph: turns zero after the maximum torque is achieved maximum torque is pointed monotonic increase when the torque goes to zero | 0.1 0.1 0.2 | 0.4 |
| 2.15 | Formula (27): $m g l \sin \theta = m \omega ^ { 2 } l ^ { 2 } \sin \theta \cos \theta$ | 0.2 | 1.0 |


|  | Formula (28): $\cos \theta = 1 , \quad \omega < \sqrt { \frac { g } { l } }$ | 0.4 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (29): $\cos \theta = \frac { g } { \omega ^ { 2 } l } , \quad \omega \geq \sqrt { \frac { g } { l } }$ | 0.4 |  |
| 2.16 | Graph: |  |  |
|  | horizontal segment is present | 0.1 |  |
|  | the value of $K _ { 0 }$ is pointed for the horizontal segment | 0.1 |  |
|  | monotonically goes to zero when the angular velocity increases | 0.2 |  |
| 2.17 | Formula (30): $\omega = \sqrt [ 3 ] { \frac { K _ { 0 } g } { \beta l } \left( \frac { A _ { 0 } } { 2 \pi M _ { 0 } } - 1 \right) }$ | 0.4 | 0.4 |
| 2.18 | Graph: |  |  |
|  | fracture point is present | 0.1 | 0.2 |
|  | the left segment decrease faster than the right segment | 0.1 |  |
| Total |  |  | 10.0 |

## Problem 3. Electron Paramagnetic Resonance (10.0 points) Magnetic Moment

3.1 The area of a circular coil of radius $R$ is equal to

$$
\begin{equation*}
S = \pi R ^ { 2 } \tag{1}
\end{equation*}
$$

and when current $I$ flows through it, the modulus of its magnetic moment is equal to

$$
\begin{equation*}
m = I \pi R ^ { 2 } . \tag{2}
\end{equation*}
$$

The magnetic induction at the center of a circular loop is determined by the expression

$$
\begin{equation*}
B _ { 0 } = \frac { \mu _ { 0 } I } { 2 R } , \tag{3}
\end{equation*}
$$

from which it follows that

$$
\begin{equation*}
\boldsymbol { B } _ { 0 } = \frac { \mu _ { 0 } \boldsymbol { m } } { 2 \pi R ^ { 3 } } . \tag{4}
\end{equation*}
$$

3.2 If $\boldsymbol { B }$ lies in the plane of the coil, then by analyzing the pairs of Ampere forces acting on the elements of the coil opposite to the magnetic field induction vector, it can be shown that the modulus of the total moment of forces is

$$
\begin{equation*}
M = m B . \tag{5}
\end{equation*}
$$

In general, the magnetic moment m forms an angle $\varphi$ with the field. Let us decompose $\boldsymbol { B }$ into components: one in the plane of the coil, and the other perpendicular to it. Obviously, the perpendicular component does not create a torque, causing stretching or compression of the coil, and since the projection of vector $\boldsymbol { B }$ onto the plane of the coil is

$$
\begin{equation*}
B _ { \| } = B \sin \varphi , \tag{6}
\end{equation*}
$$

then the modulus of the resulting torque of Ampere forces is equal to

$$
\begin{equation*}
M = m B \sin \varphi . \tag{7}
\end{equation*}
$$

3.3 The elementary work $d A$ for a small rotation of the coil by an angle $d \varphi$ is equal to

$$
\begin{equation*}
d A = M d \varphi . \tag{8}
\end{equation*}
$$

When the coil rotates from the state when $\boldsymbol { m } \uparrow \uparrow \boldsymbol { B }$ to the position $\boldsymbol { m } \uparrow \downarrow \boldsymbol { B }$, the angle changes from 0 to $\pi$, and the total work is determined by the integral

$$
\begin{equation*}
A = \int _ { 0 } ^ { \pi } M d \varphi = 2 m B . \tag{9}
\end{equation*}
$$

## Electron Paramagnetic Resonance

3.4 Let an electron rotate in a circular orbit of radius $R$ with period $T$, then its motion can be represented as a circular current with a force

$$
\begin{equation*}
I = \frac { e } { T } \tag{10}
\end{equation*}
$$

and magnetic moment is obtained as

$$
\begin{equation*}
m = I \pi R ^ { 2 } . \tag{11}
\end{equation*}
$$

The angular momentum of an electron moving along a circular trajectory with velocity $v$ is equal to

$$
\begin{equation*}
L = m _ { e } v R , \tag{12}
\end{equation*}
$$

from where, taking into account the expression for the period of revolution


$$
\begin{equation*}
T = \frac { 2 \pi R } { v } , \tag{13}
\end{equation*}
$$

we get

$$
\begin{equation*}
g _ { L } = 1 . \tag{14}
\end{equation*}
$$

In the vector relationship between magnetic and mechanical moments, it is necessary to take into account the sign due to the negative charge of the electron.
3.5 According to paragraph 3.3, to flip the spin, it is necessary to perform work (9), which together with the formula in the condition for the magnetic moment gives

$$
\begin{equation*}
A = g _ { s } B _ { 0 } \frac { \mathrm { e } \hbar } { 2 m _ { e } } , \tag{15}
\end{equation*}
$$

which is accomplished due to the energy of the photon

$$
\begin{equation*}
E = \hbar \omega , \tag{16}
\end{equation*}
$$

that is, the law of conservation of energy is fulfilled as

$$
\begin{equation*}
E = A . \tag{17}
\end{equation*}
$$

Thus, using $g _ { s } = 2 g _ { L } = 2$, we get

$$
\begin{equation*}
\omega = \frac { \mathrm { e } B _ { 0 } } { m _ { e } } = 6.15 \cdot 10 ^ { 10 } \mathrm {~s} ^ { - 1 } , \tag{18}
\end{equation*}
$$

which is equal to the so-called Larmor frequency of rotation of an electron in a magnetic field.
3.6 In the absence of a core, the magnetic field in the solenoid is proportional to the current, that is,

$$
\begin{equation*}
B _ { 0 } \propto I _ { 0 } , \tag{19}
\end{equation*}
$$

and in the presence of the core, the magnetic field is also proportional to the magnetic permeability of the substance

$$
\begin{equation*}
B \propto \mu I . \tag{20}
\end{equation*}
$$

The resonance occurs at the same value of the magnetic induction, therefore

$$
\begin{equation*}
I = \frac { I _ { 0 } } { \mu } = 1.2 \mathrm {~A} . \tag{21}
\end{equation*}
$$

## Thermodynamic equilibrium

3.7 In a state of thermodynamic equilibrium, the distribution of electrons across energy levels obeys the Boltzmann distribution, therefore

$$
\begin{equation*}
\frac { N _ { 2 } } { N _ { 1 } } = \exp \left( - \frac { \hbar \omega } { k _ { B } T } \right) , \tag{22}
\end{equation*}
$$

on the other hand, the total number of atoms is known and equal

$$
\begin{equation*}
N = N _ { 1 } + N _ { 2 } . \tag{23}
\end{equation*}
$$

Thus, from (22) and (23), we obtain under condition $\hbar \omega \ll k _ { B } T$

$$
\begin{equation*}
n _ { 0 } = \frac { \hbar \omega } { 2 k _ { B } T } N = 4.68 \cdot 10 ^ { 17 } . \tag{24}
\end{equation*}
$$

3.8 In a state of thermodynamic equilibrium, the rates of upward and downward transitions should be the same, since the number of atoms at the energy levels should not change, in particular for the lower level we have

$$
\begin{equation*}
\frac { d N _ { 1 } } { d t } = - B _ { 12 } \rho N _ { 1 } + A _ { 21 } N _ { 2 } + B _ { 21 } \rho N _ { 2 } = 0 , \tag{25}
\end{equation*}
$$

from which we obtain for the energy density of electromagnetic radiation

$$
\begin{equation*}
\rho = \frac { A _ { 21 } } { B _ { 21 } \left( \frac { N _ { 1 } B _ { 12 } } { N _ { 2 } B _ { 21 } } - 1 \right) } . \tag{26}
\end{equation*}
$$

Taking into account relation (22) and comparing with Planck's formula, we conclude that

$$
\begin{equation*}
B _ { 12 } = B _ { 21 } . \tag{27}
\end{equation*}
$$

## Presence of an external microwave field source

3.9 Taking into account the equality of the Einstein coefficients and neglecting spontaneous transitions, equation (25) can be rewritten as

$$
\begin{equation*}
\frac { d N _ { 1 } } { d t } = - k N _ { 1 } + k N _ { 2 } , \tag{28}
\end{equation*}
$$

which, taking into account (23), gives rise to

$$
\begin{equation*}
\frac { d n } { d t } = - 2 k n . \tag{29}
\end{equation*}
$$

Using the initial condition $n ( 0 ) = n _ { 0 }$, we obtain the solution of equation (29) in the form

$$
\begin{equation*}
n ( t ) = n _ { 0 } \exp ( - 2 k t ) . \tag{30}
\end{equation*}
$$


It is interesting to note that under the influence of an external source of an alternating field, the difference in the number of atoms at the two levels drops to zero over time.
3.10 From formula (30) it follows that

$$
\begin{equation*}
k = \frac { \ln 2 } { 2 \tau } . \tag{31}
\end{equation*}
$$

Since during the transition of each atom from the lower level to the upper one quantum of energy of the alternating field $\hbar \omega$ is absorbed, and during each reverse transition the same energy is released, then the expression describing the absorption of energy $E$ of the alternating field in the core has the form

$$
\begin{equation*}
\frac { d E } { d t } = k n \hbar \omega , \tag{32}
\end{equation*}
$$

and this means that at the initial moment of time the power of the source is equal to

$$
\begin{equation*}
P = \frac { d E } { d t } ( 0 ) = \frac { n _ { 0 } \hbar \omega \ln 2 } { 2 \tau } = 1.05 \mathrm {~mW} . \tag{33}
\end{equation*}
$$

3.11 Let us consider the case of the absence of an external field, then the equation given in the condition for level 1 is rewritten as

$$
\begin{equation*}
\frac { d n } { d t } = N \left( \alpha _ { 2 } - \alpha _ { 1 } \right) - n \left( \alpha _ { 1 } + \alpha _ { 2 } \right) . \tag{34}
\end{equation*}
$$

Since equation (34) must include the condition of thermodynamic equilibrium, then when the derivative on the left becomes zero, the equilibrium concentration must be equal to $n _ { 0 }$, from which it follows that

$$
\begin{equation*}
N = n _ { 0 } \frac { \left( \alpha _ { 1 } + \alpha _ { 2 } \right) } { \left( \alpha _ { 2 } - \alpha _ { 1 } \right) } . \tag{35}
\end{equation*}
$$

Substituting (35) into (34) and adding the term from (29), we obtain an equation for taking into account the presence of an alternating field

$$
\begin{equation*}
\frac { d n } { d t } = - 2 k n - \left( n - n _ { 0 } \right) \left( \alpha _ { 1 } + \alpha _ { 2 } \right) . \tag{36}
\end{equation*}
$$

Since it is required to determine the power of the source in a stationary mode, the difference in the number of atoms at the lower and upper levels must be constant, that is, $d n / d t = 0$, from which it follows

$$
\begin{equation*}
n = \frac { n _ { 0 } } { 1 + \frac { 2 k } { \left( \alpha _ { 1 } + \alpha _ { 2 } \right) } } . \tag{37}
\end{equation*}
$$

The power of the source is still determined by equation (42) and taking into account that $2 k \gg$ $\left( \alpha _ { 1 } + \alpha _ { 2 } \right)$, we finally obtain

$$
\begin{equation*}
P = \frac { 1 } { 2 } n _ { 0 } \hbar \omega \left( \alpha _ { 1 } + \alpha _ { 2 } \right) = 1.01 \mu \mathrm {~W} . \tag{38}
\end{equation*}
$$

Note that, unlike 3.10, the power of the source does not depend on the energy density of the electromagnetic field; this is the so-called saturation mode.

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 3.1 | Formula (1): $S = \pi R ^ { 2 }$ | 0.2 | 0.8 |
|  | Formula (2): $m = I \pi R ^ { 2 }$ | 0.2 |  |
|  | Formula (3): $B _ { 0 } = \frac { \mu _ { 0 } I } { 2 R }$ | 0.2 |  |
|  | Formula (4): $\boldsymbol { B } _ { 0 } = \frac { \mu _ { 0 } \boldsymbol { m } } { 2 \pi R ^ { 3 } }$ | 0.2 |  |
| 3.2 | Formula (5): $M = m B$ | 0.2 | 0.6 |
|  | Formula (6): $B _ { \\| } = B \sin \varphi$ | 0.2 |  |
|  | Formula (7): $M = m B \sin \varphi$ | 0.2 |  |
| 3.3 | Formula (8): $d A = M d \varphi$ | 0.2 | 0.4 |
|  | Formula (9): $A = 2 m B$ | 0.2 |  |
| 3.4 | Formula (10): $I = \frac { e } { T }$ | 0.2 | 1.0 |
|  | Formula (11): $m = I \pi R ^ { 2 }$ | 0.2 |  |
|  | Formula (12): $L = m _ { e } v R$ | 0.2 |  |
|  | Formula (13): $T = \frac { 2 \pi R } { v }$ | 0.2 |  |
|  | Formula (14): $g _ { L } = 2$ | 0.2 |  |
| 3.5 | Formula (15): $A = g _ { s } B _ { 0 } \frac { \mathrm { e } \hbar } { 2 m _ { e } }$ | 0.2 | 1.0 |


|  | Formula (16): $E = \hbar \omega$ | 0.2 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (17): $E = A$ | 0.2 |  |
|  | Formula (18): $\omega = \frac { \mathrm { e } B _ { 0 } } { m _ { e } }$ | 0.2 |  |
|  | Numerical value in formula (18): $\omega = 6.15 \cdot 10 ^ { 10 } \mathrm {~s} ^ { - 1 }$ | 0.2 |  |
| 3.6 | Formula (19): $B _ { 0 } \propto I _ { 0 }$ | 0.2 | 0.8 <br> 0.8 |
|  | Formula (20): $B \propto \mu I$ | 0.2 |  |
|  | Formula (21): $I = \frac { I _ { 0 } } { \mu }$ | 0.2 |  |
|  | Numerical value in formula (21): $I = 1.2 \mathrm {~A}$ | 0.2 |  |
| 3.7 | Formula (22): $\frac { N _ { 2 } } { N _ { 1 } } = \exp \left( - \frac { \hbar \omega } { k _ { B } T } \right)$ | 0.2 | 1.0 |
|  | Formula (23): $N = N _ { 1 } + N _ { 2 }$ | 0.2 |  |
|  | Formula (24): $n _ { 0 } = \frac { \hbar \omega } { 2 k _ { B } T } N$ | 0.3 |  |
|  | Numerical value in formula (24): $n _ { 0 } = 4.68 \cdot 10 ^ { 17 }$ | 0.3 |  |
| 3.8 | Formula (25): $- B _ { 12 } \rho N _ { 1 } + A _ { 21 } N _ { 2 } + B _ { 21 } \rho N _ { 2 } = 0$ | 0.4 | 1.0 |
|  | Formula (26): $\rho = \frac { A _ { 21 } } { B _ { 21 } \left( \frac { N _ { 1 } B _ { 12 } } { N _ { 2 } B _ { 21 } } - 1 \right) }$ | 0.4 |  |
|  | Formula (22) is used | 0.2 |  |
| 3.9 | Formula (28): $\frac { d N _ { 1 } } { d t } = - k N _ { 1 } + k N _ { 2 }$ | 0.2 | 0.6 |
|  | Formula (29): $\frac { d n } { d t } = - 2 k n$ | 0.2 |  |
|  | Formula (30): $n ( t ) = n _ { 0 } \exp ( - 2 k t )$ | 0.2 |  |
| 3.10 | Formula (31): $k = \frac { \ln 2 } { 2 \tau }$ | 0.2 | 0.8 |
|  | Formula (32): $\frac { d E } { d t } = k n \hbar \omega$ | 0.2 |  |
|  | Formula (33): $P = \frac { n _ { 0 } \hbar \omega \ln 2 } { 2 \tau }$ | 0.2 |  |
|  | Numerical value in formula (33): $P = 1.05 \mathrm {~mW}$ | 0.2 |  |
| 3.11 | Formula (34): $\frac { d n } { d t } = N \left( \alpha _ { 2 } - \alpha _ { 1 } \right) - n \left( \alpha _ { 1 } + \alpha _ { 2 } \right)$ | 0.3 | 2.0 |
|  | Formula (35): $N = n _ { 0 } \frac { \left( \alpha _ { 1 } + \alpha _ { 2 } \right) } { \left( \alpha _ { 2 } - \alpha _ { 1 } \right) }$ | 0.3 |  |
|  | Formula (36): $\frac { d n } { d t } = - 2 k n - \left( n - n _ { 0 } \right) \left( \alpha _ { 1 } + \alpha _ { 2 } \right)$ | 0.3 |  |
|  | Formula (37): $n = \frac { n _ { 0 } } { 1 + \frac { 2 k } { \left( \alpha _ { 1 } + \alpha _ { 2 } \right) } }$ | 0.3 |  |
|  | Formula (38): $P = \frac { 1 } { 2 } n _ { 0 } \hbar \omega \left( \alpha _ { 1 } + \alpha _ { 2 } \right)$ | 0.3 |  |
|  | Numerical value in formula (38): $P = 1.01 \mu \mathrm {~W}$ | 0.5 |  |
| Total |  |  | 10.0 |
