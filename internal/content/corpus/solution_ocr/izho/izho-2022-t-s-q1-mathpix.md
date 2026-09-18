---
id: solution-ocr-izho-2022-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2022_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2022-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 1.2 (3.0 points)

The work $d A$ done by the gas when its volume changes by $d V$ reads as

$$
\begin{equation*}
d A = p d V , \tag{1}
\end{equation*}
$$

where $p$ denotes the gas pressure.
The change in the internal energy $d U$ of one mole of an ideal monatomic gas is associated with a change in its temperature $d T$ by the relation

$$
\begin{equation*}
d U = \frac { 3 } { 2 } R d T . \tag{2}
\end{equation*}
$$

According to the formulation of the problem, the following relation holds

$$
\begin{equation*}
\eta = \frac { d A } { d U } = \text { const } , \tag{3}
\end{equation*}
$$

which, along with the ideal gas equation

$$
\begin{equation*}
p V = R T , \tag{4}
\end{equation*}
$$

leads to the following relation

$$
\begin{equation*}
\frac { 2 } { 3 \eta } \frac { d V } { V } = \frac { d T } { T } . \tag{5}
\end{equation*}
$$

Equation (5) is easily integrated and reduced to the form

$$
\begin{equation*}
\frac { T } { T } = \left( \frac { V } { V _ { 0 } } \right) ^ { \frac { 2 } { 3 \eta } } . \tag{6}
\end{equation*}
$$

In the initial state, the ideal gas equation gives

$$
\begin{equation*}
p _ { 0 } V _ { 0 } = R T _ { 0 } , \tag{7}
\end{equation*}
$$

whereas in the final state

$$
\begin{equation*}
\frac { p _ { 0 } } { 2 } 4 V _ { 0 } = R T , \tag{8}
\end{equation*}
$$

and, therefore, the temperature of the gas in the final state is obtained as

$$
\begin{equation*}
T = 2 T _ { 0 } . \tag{9}
\end{equation*}
$$


From equations (6) and (9) it is easy to find the coefficient

$$
\begin{equation*}
\eta = \frac { 4 } { 3 } . \tag{10}
\end{equation*}
$$

The total work of the gas in the process is determined by the integral of equation (1) and is equal to

$$
\begin{equation*}
A = \int _ { V _ { 0 } } ^ { 4 V _ { 0 } } p d V = 2 p _ { 0 } V _ { 0 } = 2.0 \times 10 ^ { 5 } \mathrm {~J} \tag{11}
\end{equation*}
$$

Note: The process described in this problem is polytropic, i.e. it occurs at a constant heat capacity. Indeed, since the work done by the gas is a fixed part of the change in the internal energy, this means that the heat capacity of the gas remains constant throughout the process. In this case, the polytropic equation $p V ^ { n } =$ const is valid under the chosen conditions of the problem with $n = 1 / 2$, and the work of the gas, obviously, does not depend on its type, whether it is a monatomic or polyatomic gas.

| Content | Points |
| :--- | :--- |
| Formula (1): $d A = p d V$ | 0.2 |
| Formula (2): $d U = \frac { 3 } { 2 } R d T$ | 0.2 |
| Formula (3): $\eta = \frac { d A } { d U } =$ const | 0.2 |
| Formula (4): $p V = R T$ | 0.2 |
| Formula (5): $\frac { 2 } { 3 \eta } \frac { d V } { V } = \frac { d T } { T }$ | 0.2 |
| Formula (6): $\frac { T } { T } = \left( \frac { V } { V _ { 0 } } \right) ^ { \frac { 2 } { 3 \eta } }$ | 0.4 |
| Formula (7): $p _ { 0 } V _ { 0 } = R T _ { 0 }$ | 0.2 |
| Formula (8): $\frac { p _ { 0 } } { 2 } 4 V _ { 0 } = R T$ | 0.2 |
| Formula (9): $T = 2 T _ { 0 }$ | 0.2 |
| Formula (10): $\eta = \frac { 4 } { 3 }$ | 0.4 |
| Formula (11): $A = 2 p _ { 0 } V _ { 0 }$ | 0.4 |
| Numerical value in formula (11): $A = 2.0 \times 10 ^ { 5 } \mathrm {~J}$ | 0.2 |
| Total | 3.0 |

## Problem 1.3 (3.0 points)

To study the problem of the stability of the equilibrium position, consider a situation in which the ball deviates from the top position by a very small angle $d \alpha$ and determine the forces acting on it.

The first force is electrostatic, but to study the equilibrium we need only its component directed tangentially to the surface of the hemisphere. The idea of its calculation is based on the fact that in the projection onto the radial direction, the electrostatic forces are compensated from two symmetrical regions of the hemisphere I and II with respect to the new ball position, so that the only uncompensated force is due to the segment $A B$ of the hemisphere, cut off by an inclined plane passing at an angle $2 d \alpha$. The left figure below shows the corresponding section in the vertical plane.


![](../../../figures/solution-ocr/1a5444dcf98768f0b3016c4a.jpg)
Side view

![](../../../figures/solution-ocr/1b2c6fc105447ac587af30dc.jpg)
Top view

Let us consider a part of the sphere segment (see the right figure above, which shows the top view), cut off additionally by the angles $\beta$ amd $\beta + d \beta$, such that its area is found as

$$
\begin{equation*}
d S = 2 R \cos \beta R d \beta d \alpha , \tag{1}
\end{equation*}
$$

with the electric charge being equal to

$$
\begin{equation*}
d q = - \sigma d S . \tag{2}
\end{equation*}
$$

In the Cartesian coordinate system, whose origin coincides with the top of the hemisphere, and the axis is directed vertically downwards, the radius vector, directed from the point where the ball is located to the selected part of the sphere segment, is determined by the coordinates

$$
\begin{equation*}
\dot { r } = ( R \cos \beta , R \sin \beta , R ) , \tag{3}
\end{equation*}
$$

and hence the vector of the desired force is derived as

$$
\begin{equation*}
\vec { F } = - \frac { Q d q } { 4 \pi \varepsilon _ { 0 } r ^ { r } } \vec { r } \tag{4}
\end{equation*}
$$

This force has the following projection on the tangential direction

$$
\begin{equation*}
F _ { Q } = - \frac { Q d q } { 4 \pi \varepsilon _ { 0 } ( \sqrt { 2 } R ) ^ { 3 } } R \cos \beta \tag{5}
\end{equation*}
$$

therefore, integration over $\beta$ from $- \pi / 2$ to $\pi / 2$ provides the total module of the electrostatic force from the entire segment in the form

$$
\begin{equation*}
F _ { Q } = \frac { Q \sigma } { 8 \sqrt { 2 } \pi \varepsilon _ { 0 } } d \alpha \tag{6}
\end{equation*}
$$

The second force acting on the ball is the force of gravity, whose projection on the tangential direction is obtained as

$$
\begin{equation*}
F _ { g } = m g d \alpha . \tag{7}
\end{equation*}
$$

The minimum charge of the ball is determined by the equality of forces

$$
\begin{equation*}
F _ { g } = F _ { Q } , \tag{8}
\end{equation*}
$$

which leads to the final answer

$$
\begin{equation*}
Q = \frac { 8 \sqrt { 2 } \pi \varepsilon _ { 0 } m g } { \sigma } . \tag{9}
\end{equation*}
$$

Obviously, for larger charges the equilibrium position is stable.

| Content | Points |
| :--- | :--- |
| Formula (1): $d S = 2 R \cos \beta R d \beta d \alpha$ | 0.3 |
| Formula (2): $d q = \sigma d S$ | 0.3 |
| Formula (3): $\vec { r } = ( R \cos \beta , R \sin \beta , R )$ | 0.2 |
| Formula (4): $\vec { F } = - \frac { Q d q } { 4 \pi \varepsilon _ { 0 } r ^ { 3 } } \vec { r }$ | 0.2 |


| Formula (5): $F _ { Q } = \frac { Q d q } { 4 \pi \varepsilon _ { 0 } ( \sqrt { 2 } R ) ^ { 3 } } R \cos \beta$ | 0.3 |
| :--- | :--- |
| Formula (6): $F _ { Q } = \frac { Q \sigma } { 8 \sqrt { 2 } \pi \varepsilon _ { 0 } } d \alpha$ | 0.5 |
| Formula (7): $F _ { g } = m g d \alpha$ | 0.2 |
| Formula (8): $F _ { g } = F _ { Q }$ | 0.5 |
| Formula (9): $Q = \frac { 8 \sqrt { 2 } \pi \varepsilon _ { 0 } m g } { \sigma }$ | 0.5 |
| Total | 3.0 |
