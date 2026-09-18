---
id: solution-ocr-izho-2020-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2020_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2020-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3. Ring in a magnetic field (10.0 points) Uniformly charged ring

3.1 Under the action of gravity, the center of mass of the ring acquires a velocity $v$ directed vertically downward. In this case, the Lorentz force $F _ { L 1 }$ arises, leading to the rotation of the ring around its own axis with an angular velocity $\omega$, which in turn leads to the appearance of the vertical component of the Lorentz force $F _ { L 2 }$ directed against gravity, regardless of the sign of the ring charge.

The equation of motion of the ring center of mass has the form

$$
\begin{equation*}
m \frac { d v } { d t } = m g - F _ { L 2 } , \tag{1}
\end{equation*}
$$

where the Lorentz force is written as

$$
\begin{equation*}
F _ { L 1 } = q v _ { r o t } B , \tag{2}
\end{equation*}
$$

and the linear speed of ring rotation

$$
\begin{equation*}
v _ { \text {rot } } = \omega r . \tag{3}
\end{equation*}
$$

Thus, the equation of motion of the ring center of mass is finally derived as


$$
\begin{equation*}
m \frac { d v } { d t } = m g - q \omega r B . \tag{4}
\end{equation*}
$$

The equation of rotational motion of the ring is written as

$$
\begin{equation*}
I \frac { d \omega } { d t } = M _ { L 1 } \tag{5}
\end{equation*}
$$

where the torque of the Lorentz force moment $F _ { L 1 }$ is determined by the expression

$$
\begin{equation*}
M _ { L 1 } = q v B r , \tag{6}
\end{equation*}
$$

and the moment of inertia of the ring is equal to

$$
\begin{equation*}
I = m r ^ { 2 } . \tag{7}
\end{equation*}
$$

Let $h$ be the vertical displacement of the ring center of mass, then its speed is

$$
\begin{equation*}
v = \frac { d h } { d t } . \tag{8}
\end{equation*}
$$

Putting together (5), (6) and (8) and integrating over time, taking into account the initial condition $\omega = 0$ at $h = 0$, we obtain the relation

$$
\begin{equation*}
I \omega = q B r h . \tag{9}
\end{equation*}
$$

At the moment when the speed of the ring center of mass is maximum, the total force on the right side of equation (4) vanishes, which leads to the expression

$$
\begin{equation*}
m g = q B r \omega _ { 0 } . \tag{10}
\end{equation*}
$$

Using relation (9) for this particular moment in time

$$
\begin{equation*}
I \omega _ { 0 } = q B r h _ { 0 } , \tag{11}
\end{equation*}
$$

we apply the law of energy conservation in the following form

$$
\begin{equation*}
m g h _ { 0 } = \frac { m v _ { \max } ^ { 2 } } { 2 } + \frac { I \omega _ { 0 } ^ { 2 } } { 2 } . \tag{12}
\end{equation*}
$$

Solving equations (10)-(12) together with the expression for the moment of inertia (7), we find the maximum velocity of the ring center of mass in the following form

$$
\begin{equation*}
v _ { \max } = \frac { m g } { q B } . \tag{13}
\end{equation*}
$$

3.2 Substituting relation (9) into the equation (4) of motion of the ring center of mass and using (8), we obtain the equation of harmonic oscillations

$$
\begin{equation*}
m \frac { d ^ { 2 } h } { d t ^ { 2 } } = m g - \frac { ( q B ) ^ { 2 } } { m } h \tag{14}
\end{equation*}
$$

with the frequency

$$
\begin{equation*}
\omega _ { L } = \frac { q B } { m } . \tag{15}
\end{equation*}
$$

The time sought is quarter of the period of oscillation, i.e.

$$
\begin{equation*}
\Delta t = \frac { \pi } { 2 \omega _ { L } } = \frac { \pi m } { 2 q B } . \tag{16}
\end{equation*}
$$

3.3 The initial velocity of the ring center of mass is zero and reaches its maximum at the moment of passage of the equilibrium position, therefore, the maximum height $h _ { \text {max } }$ by which the ring center of mass descends is obtained as

$$
\begin{equation*}
h _ { \max } = 2 h _ { 0 } = \frac { 2 g m ^ { 2 } } { q ^ { 2 } B ^ { 2 } } . \tag{17}
\end{equation*}
$$

## Conductive ring

3.4 Under the action of gravity, the ring center of mass acquires a velocity $v$ directed vertically downward. In this case, an induction current $I$ arises in the ring as a result of the action of a magnetic field, which leads to the appearance of a vertical Lorentz force $F _ { L }$ directed against gravity.

The equation of motion of the ring center of mass has the form

$$
\begin{equation*}
m \frac { d v } { d t } = m g - F _ { L } , \tag{18}
\end{equation*}
$$

and the Lorentz force is determined by the expression

$$
\begin{equation*}
F _ { L } = B I L , \tag{19}
\end{equation*}
$$

with the ring length

$$
\begin{equation*}
L = 2 \pi r . \tag{20}
\end{equation*}
$$

When moving in a magnetic field, the following electromotive force arises in the ring

$$
\begin{equation*}
\varepsilon = \frac { d \Phi } { d t } = B L v , \tag{21}
\end{equation*}
$$

which, according to Ohm's law, leads to the appearance of the induction current of strength


$$
\begin{equation*}
\varepsilon = I R , \tag{22}
\end{equation*}
$$

where the ring resistance is

$$
\begin{equation*}
R = \rho \frac { L } { s } . \tag{23}
\end{equation*}
$$

In the steady-state fall mode of the ring center, its velocity $v = v _ { 0 }$ remains unchanged, then from (18)-(23) we obtain

$$
\begin{equation*}
v _ { 0 } = \frac { m g \rho } { 2 \pi r s B ^ { 2 } } . \tag{24}
\end{equation*}
$$

3.5 Expressing the velocity from (21), (22) and substituting it into equation (18), as well as using (19), we obtain the differential equation

$$
\begin{equation*}
\frac { m R } { B L } \frac { d I } { d t } = m g - B L I , \tag{25}
\end{equation*}
$$

with the initial condition

$$
\begin{equation*}
I ( 0 ) = 0 . \tag{26}
\end{equation*}
$$

The solution to equation (25) when (26) is satisfied is the function

$$
\begin{equation*}
I ( t ) = \frac { m g } { 2 \pi r B } \left[ 1 - \exp \left( - \frac { 2 \pi r s B ^ { 2 } } { m \rho } t \right) \right] . \tag{27}
\end{equation*}
$$

Whence,

$$
\begin{align*}
& A _ { 1 } = \frac { m g } { 2 \pi r B } ,  \tag{28}\\
& B _ { 1 } = - \frac { m g } { 2 \pi r B } ,  \tag{29}\\
& \gamma _ { 1 } = - \frac { 2 \pi r s B ^ { 2 } } { m \rho } . \tag{30}
\end{align*}
$$

## Conductive ring with a cut

3.6 The equation of motion of the ring center of mass of the is still described by equations (18)-(20), and an electromotive force (21) is also generated in the ring. However, in this case, charges of the opposite sign accumulate at the cut edges; therefore, instead of Ohm's law (22), we have

$$
\begin{equation*}
\varepsilon - \frac { q } { c } = I R , \tag{31}
\end{equation*}
$$

where

$$
\begin{equation*}
C = \frac { \varepsilon _ { 0 } S } { \delta } . \tag{32}
\end{equation*}
$$

Since the cut edges are charged by induction current, then

$$
\begin{equation*}
I = \frac { d q } { d t } . \tag{33}
\end{equation*}
$$

In the steady state, the acceleration of the ring center of mass is constant, so according to the equation of motion (18) and (19), the current strength is also constant. Differentiating (31) with (33) and (21) taken into account, we finally obtain the steady-state acceleration

$$
\begin{equation*}
a _ { 0 } = \frac { g } { \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } S } { m \delta } \right) ^ { . } } . \tag{34}
\end{equation*}
$$

3.7 Differentiating (31) with (21) and (33) taken into account, we obtain

$$
\begin{equation*}
B L \frac { d v } { d t } = \frac { I } { c } + R \frac { d I } { d t } . \tag{35}
\end{equation*}
$$

Dividing this equation by the equation of motion (18) and substituting (19), we obtain the differential equation for the current in the ring

$$
\begin{equation*}
R \frac { d I } { d t } = g B L - \left( \frac { 1 } { c } + \frac { B ^ { 2 } L ^ { 2 } } { m } \right) I \tag{36}
\end{equation*}
$$

with the initial condition

$$
\begin{equation*}
I ( 0 ) = 0 . \tag{37}
\end{equation*}
$$

The solution of equation (36) with (37) is the function

$$
\begin{equation*}
I ( t ) = \frac { 2 \pi r g \varepsilon _ { 0 } s B } { \delta \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } s } { m \delta } \right) } \left[ 1 - \exp \left( - \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } s } { m \delta } \right) \frac { \delta } { 2 \pi r \rho \varepsilon _ { 0 } } t \right) \right] . \tag{38}
\end{equation*}
$$

Hence,

$$
\begin{equation*}
A _ { 2 } = \frac { 2 \pi r g \varepsilon _ { 0 } s B } { \delta \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } s } { m \delta } \right) } , \tag{39}
\end{equation*}
$$


$$
\begin{align*}
& B _ { 2 } = - \frac { 2 \pi r g \varepsilon _ { 0 } s B } { \delta \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } s } { m \delta } \right) } ,  \tag{40}\\
& \gamma _ { 2 } = - \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } s } { m \delta } \right) \frac { \delta } { 2 \pi r \rho \varepsilon _ { 0 } } . \tag{41}
\end{align*}
$$

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 3.1 | Equation (1): $m \frac { d v } { d t } = m g - F _ { L 2 }$ | 0,3 | 3,2 |
|  | Formula(2): $F _ { L 1 } = q v _ { \text {rot } } B$ | 0,2 |  |
|  | Formula (3): $v _ { \text {rot } } = \omega r$ | 0,2 |  |
|  | Equation (4): $m \frac { d v } { d t } = m g - q \omega r B$ | 0,2 |  |
|  | Equation (5): $I \frac { d \omega } { d t } = M _ { L 1 }$ | 0,3 |  |
|  | Formula(6): $M _ { L 1 } = q v B r$ | 0,2 |  |
|  | Formula (7): $I = m r ^ { 2 }$ | 0,2 |  |
|  | Formula (8): $v = \frac { d h } { d t }$ | 0,2 |  |
|  | Formula (9): $I \omega = q B r h$ | 0,4 |  |
|  | Formula (10): $m g = q B r \omega _ { 0 }$ | 0,4 |  |
|  | Formula (12): $m g h _ { 0 } = \frac { m v _ { \max } ^ { 2 } } { 2 } + \frac { I \omega _ { 0 } ^ { 2 } } { 2 }$ | 0,3 |  |
|  | Formula (13): $v _ { \text {max } } = \frac { m g } { q B }$ | 0,3 |  |
| 3.2 | Equation (14): $m \frac { d ^ { 2 } h } { d t ^ { 2 } } = m g - \frac { ( q B ) ^ { 2 } } { m } h$ | 0,3 | 0,8 |
|  | Formula (15): $\omega _ { L } = \frac { q B } { m }$ | 0,2 |  |
|  | Formula(16): $\Delta t = \frac { \pi } { 2 \omega _ { L } } = \frac { \pi m } { 2 q B }$ | 0,3 |  |
| 3.3 | Formula(17): $h _ { \text {max } } = 2 h _ { 0 } = \frac { 2 g m ^ { 2 } } { q ^ { 2 } B ^ { 2 } }$ | 0,2 | 0,2 |
| 3.4 | Equation (18): $m \frac { d v } { d t } = m g - F _ { L }$ | 0,3 | 1,8 |
|  | Formula (19): $F _ { L } = B I L$ | 0,2 |  |
|  | Formula (20): $L = 2 \pi r$ | 0,2 |  |
|  | Formula (21): $\varepsilon = \frac { d \phi } { d t } = B L v$ | 0,3 |  |
|  | Formula (22): $\varepsilon = I R$ | 0,3 |  |
|  | Formula (23): $R = \rho \frac { L } { s }$ | 0,2 |  |
|  | Formula (24): $v _ { 0 } = \frac { m g \rho } { 2 \pi r s B ^ { 2 } }$ | 0,3 |  |
| 3.5 | Equation (25): $\frac { m R } { B L } \frac { d I } { d t } = m g - B L I$ | 0,2 | 1,0 |
|  | Condition (26): $I ( 0 ) = 0$ | 0,2 |  |
|  | Formula (28): $A _ { 1 } = \frac { m g } { 2 \pi r B }$ | 0,2 |  |
|  | Formula (29): $B _ { 1 } = - \frac { m g } { 2 \pi r B }$ | 0,2 |  |
|  | Formula (30): $\gamma _ { 1 } = - \frac { 2 \pi r s B ^ { 2 } } { m \rho }$ | 0,2 |  |
| 3.6 | Equation (31): $\varepsilon - \frac { q } { c } = I R$ | 0,3 | 1,0 |
|  | Formula (32): $C = \frac { \varepsilon _ { 0 } S } { \delta }$ | 0,2 |  |
|  | Formula (33): $I = \frac { d q } { d t }$ | 0,2 |  |


|  | Formula (34): $a _ { 0 } = \frac { g } { \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } S } { m \delta } \right) }$ | 0,3 |  |
| :--- | :--- | :--- | :--- |
| 3.7 | Equation (35): $B L \frac { d v } { d t } = \frac { I } { c } + R \frac { d I } { d t }$ | 0,5 | 2,0 |
|  | Equation (36): $R \frac { d I } { d t } = g B L - \left( \frac { 1 } { c } + \frac { B ^ { 2 } L ^ { 2 } } { m } \right) I$ | 0,5 |  |
|  | Condition (37): $I ( 0 ) = 0$ | 0,1 |  |
|  | Formula (39): $A _ { 2 } = \frac { 2 \pi r g \varepsilon _ { 0 } S B } { \delta \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } S } { m \delta } \right) }$ | 0,3 |  |
|  | Formula (40): $B _ { 2 } = - \frac { 2 \pi r g \varepsilon _ { 0 } S B } { \delta \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } s } { m \delta } \right) }$ | 0,3 |  |
|  | Formula (41): $\gamma _ { 2 } = - \left( 1 + \frac { B ^ { 2 } ( 2 \pi r ) ^ { 2 } \varepsilon _ { 0 } S } { m \delta } \right) \frac { \delta } { 2 \pi r \rho \varepsilon _ { 0 } }$ | 0,3 |  |
| Total |  |  | 10,0 |
