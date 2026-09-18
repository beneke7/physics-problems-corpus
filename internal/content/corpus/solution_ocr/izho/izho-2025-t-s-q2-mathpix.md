---
id: solution-ocr-izho-2025-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2025_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2025-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. First estimate of the age of the Earth ( $\mathbf { 1 0 . 0 }$ points) Fourier's Law of Thermal Conductivity

2.1 According to Fourier's law, the heat flux in the left rod is equal to

$$
\begin{equation*}
j _ { Q 1 } = - 2 \kappa \frac { T - T _ { 1 } } { l } , \tag{1}
\end{equation*}
$$

and the heat flux in the right rod is found as

$$
\begin{equation*}
j _ { Q 2 } = - \kappa \frac { T _ { 2 } - T } { l } . \tag{2}
\end{equation*}
$$

In steady state the heat flux should be the same in both rods

$$
\begin{equation*}
j _ { Q 1 } = j _ { Q 2 } , \tag{3}
\end{equation*}
$$

from which we find

$$
\begin{equation*}
T = \frac { 2 T _ { 1 } + T _ { 2 } } { 3 } = 50 ^ { \circ } \mathrm { C } . \tag{4}
\end{equation*}
$$

2.2 The heat flux along the rod must remain constant, which yields the differential equation


$$
\begin{equation*}
\frac { 1 } { T ^ { 2 } } \frac { d T } { d x } = b = \text { const } , \tag{5}
\end{equation*}
$$

whose solution has the form

$$
\begin{equation*}
- \frac { 1 } { T } = b x + C , \tag{6}
\end{equation*}
$$

where $C$ is a constant of integration.
Taking into account the boundary conditions

$$
\begin{align*}
& T ( 0 ) = T _ { 1 } ,  \tag{7}\\
& T ( l ) = T _ { 2 } , \tag{8}
\end{align*}
$$

we obtain the following final expression for the temperature dependence

$$
\begin{equation*}
T ( x ) = \frac { T _ { 1 } } { 1 - \left( 1 - \frac { T _ { 1 } } { T _ { 2 } } \right) \frac { x } { l } } . \tag{9}
\end{equation*}
$$

2.3 When ice forms near its contact with the lake water, the temperature is 0°C, which causes a temperature difference of $\Delta t = | t |$. Let us consider a portion of ice surface of the area $S$, assuming its thickness to be $h$. Then the amount of heat released into the environment at the point of contact during time $d \tau$ is equal to

$$
\begin{equation*}
\delta Q _ { 1 } = \kappa \frac { \Delta t } { h } S d \tau . \tag{10}
\end{equation*}
$$

During the process of water crystallization at the point of contact with ice, the amount of heat released is found as

$$
\begin{equation*}
\delta Q _ { 2 } = \lambda \rho S d h . \tag{11}
\end{equation*}
$$

By equating these amounts of heat $\delta Q _ { 1 } = \delta Q _ { 2 }$, we obtain the formula

$$
\begin{equation*}
d \tau = \frac { \lambda \rho } { \kappa | t | } h d h , \tag{12}
\end{equation*}
$$

which after integration gives the final answer

$$
\begin{equation*}
\tau = \frac { \lambda \rho h ^ { 2 } } { 2 \kappa | t | } = 5.45 \cdot 10 ^ { 3 } \mathrm {~s} . \tag{13}
\end{equation*}
$$

## Electrothermal analogy

2.4 Ohm's law for the electric current density has the form $j _ { E } = \sigma E = - \sigma \frac { d \varphi } { d x }$, and the electric current density itself is associated with the flow of electric charge, so the table of correspondence between thermal and electrical quantities takes the form shown below.

| Thermal value | Electrical quantity |
| :--- | :--- |
| temperature $T$ | electric field potential $\varphi$ |
| amount of heat $Q$ | electric charge $q$ |
| heat flux $j _ { Q }$ | electric current density $j _ { E }$ |
| thermal conductivity coefficient $\kappa$ | specific conductivity $\sigma$ |

2.5 It follows from the electrothermal analogy that the cube can be represented as an equivalent electrical circuit, shown in the figure below.
![](../../../figures/solution-ocr/1473d71a1d2f58b960d9b400.jpg)

Since the temperature in the electrothermal analogy is a potential, and the resistances of all ribs are the same, we obtain the relation

$$
\begin{equation*}
\frac { T _ { B } - T _ { A } } { \frac { 5 } { 6 } } = \frac { T _ { C } - T _ { A } } { \frac { 1 } { 3 } } , \tag{14}
\end{equation*}
$$

whence

$$
\begin{equation*}
T _ { C } = \frac { 1 } { 5 } \left( 3 T _ { A } + 2 T _ { B } \right) = 60 ^ { \circ } \mathrm { C } . \tag{15}
\end{equation*}
$$


2.6 Let us add another heat source to the system at point $A ^ { \prime }$, which is located diametrically opposite to point $B$, and also another heat sink at point $B ^ { \prime }$, diametrically opposite to point $A$, see the figure below, which shows the side view.
![](../../../figures/solution-ocr/ba452a4e47476e6fbaaf1f3f.jpg)

Obviously, each of the pairs $A B ^ { \prime }$ and $A ^ { \prime } B$ makes the same contribution to the heat flux at point $C$, equal in magnitude

$$
\begin{equation*}
j _ { Q 0 } = \frac { P } { 2 \pi R h } . \tag{16}
\end{equation*}
$$

On the other hand, the total heat flux at point $C$ is equal to the vector sum of two mutually perpendicular fluxes $j _ { Q 0 }$, and it, as follows from the symmetry, is exactly twice the desired one, therefore

$$
\begin{equation*}
j _ { Q } = \frac { \sqrt { 2 } } { 2 } j _ { Q 0 } = \frac { P } { 2 \sqrt { 2 } \pi R h } . \tag{17}
\end{equation*}
$$

## The first estimate of the Earth age

2.7 The amount of heat $Q$ stored in a kettle is proportional to the cube of its size $R$, that is,

$$
\begin{equation*}
Q \sim R ^ { 3 } . \tag{18}
\end{equation*}
$$

and the power $P$ lost by it due to heat transfer is proportional to its surface area

$$
\begin{equation*}
P \sim R ^ { 2 } . \tag{19}
\end{equation*}
$$

Therefore, the required time is proportional to the size of the teapot and is

$$
\begin{equation*}
\tau = \frac { R _ { E } } { r _ { 0 } } \tau _ { 0 } = 2.56 \cdot 10 ^ { 8 } \mathrm {~h} = 2.92 \cdot 10 ^ { 4 } \text { years } . \tag{20}
\end{equation*}
$$

2.8 Since the thermal conductivity of the core is infinite, its temperature $T _ { 0 }$ is the same everywhere, including at the boundary with the mantle. According to the electrothermal analogy, the temperature difference $T _ { 0 } - T$ is the potential difference (voltage), and the radiation power from the Earth's surface is determined by the Stefan-Boltzmann law

$$
\begin{equation*}
P = 4 \pi R _ { E } ^ { 2 } \sigma T ^ { 4 } \tag{21}
\end{equation*}
$$

and is similar to electric current, so there is a linear relationship between them

$$
\begin{equation*}
T _ { 0 } - T = P R _ { T } . \tag{22}
\end{equation*}
$$

where the quantity $R _ { T }$ represents the so-called thermal resistance.
Using the same electrothermal analogy, thermal resistance is written as

$$
\begin{equation*}
R _ { T } = \frac { 1 } { \kappa } \int _ { R _ { 0 } } ^ { R _ { E } } \frac { d R } { 4 \pi R ^ { 2 } } = \frac { 1 } { 4 \pi \kappa } \left( \frac { 1 } { R _ { 0 } } - \frac { 1 } { R _ { E } } \right) , \tag{23}
\end{equation*}
$$

from which we finally obtain the temperature of the Earth's core

$$
\begin{equation*}
T _ { 0 } = T + \frac { \sigma T ^ { 4 } R _ { E } \left( R _ { E } - R _ { 0 } \right) } { \kappa R _ { 0 } } = 4.84 \cdot 10 ^ { 7 } \mathrm {~K} . \tag{24}
\end{equation*}
$$

2.9 Since the transferred heat (current strength) is the same, we obtain the proportion for the temperature

$$
\begin{equation*}
\frac { T _ { 0 } - T } { R _ { T } } = \frac { T _ { H } - T } { R _ { H } } , \tag{25}
\end{equation*}
$$

where the thermal resistance of a spherical layer of thickness $H$ is given by the expression

$$
\begin{equation*}
R _ { H } = \frac { H } { 4 \pi \kappa R _ { 2 } ^ { 2 } } . \tag{26}
\end{equation*}
$$

Thus, we obtain the temperature at depth $H$ as

$$
\begin{equation*}
T _ { H } = T + \left( T _ { 0 } - T \right) \frac { H R _ { 0 } } { R _ { E } \left( R _ { E } - R _ { 0 } \right) } = 1.86 \cdot 10 ^ { 4 } \mathrm {~K} . \tag{27}
\end{equation*}
$$

The actual core temperature is, of course, much lower, since the thermal balance with the Sun must be taken into account.


2.10 The change over time in the amount of heat stored in the core is equal to

$$
\begin{equation*}
\frac { d Q } { d t } = c m \frac { d T _ { 0 } } { d t } , \tag{28}
\end{equation*}
$$

where the mass of the core is obtained as

$$
\begin{equation*}
m = \frac { 4 } { 3 } \pi \rho R _ { 0 } ^ { 3 } . \tag{29}
\end{equation*}
$$

According to the law of energy conservation we have

$$
\begin{equation*}
\frac { d Q } { d t } = - P , \tag{28}
\end{equation*}
$$

where $P$ is given by expression (21).
The core temperature $T _ { 0 }$ is given by formula (24), in which the first term can be neglected $\left( T _ { 0 } \gg T \right)$, so we finally obtain

$$
\begin{equation*}
\frac { d T } { T } = - \frac { \kappa R _ { E } } { c \rho R _ { 0 } ^ { 2 } \left( R _ { E } - R _ { 0 } \right) } d \tau . \tag{29}
\end{equation*}
$$

By integrating and expanding the exponential, we find

$$
\begin{equation*}
\Delta T = \frac { \kappa R _ { E } T \tau } { c \rho R _ { 0 } ^ { 2 } \left( R _ { E } - R _ { 0 } \right) } = 3.14 \cdot 10 ^ { - 2 } \mathrm {~K} . \tag{30}
\end{equation*}
$$

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 2.1 | Formula (1): $j _ { Q 1 } = - 2 \kappa \frac { T - T _ { 1 } } { l }$ | 0.2 | 1.0 |
|  | Formula (2): $j _ { Q 2 } = - \kappa \frac { T _ { 2 } - T } { l }$ | 0.2 |  |
|  | Formula (3): $j _ { Q 1 } = j _ { Q 2 }$ | 0.2 |  |
|  | Formula (4): $T = \frac { 2 T _ { 1 } + T _ { 2 } } { 3 }$ | 0.2 |  |
|  | Numerical value in formula (4): $T = 50 ^ { \circ } \mathrm { C }$ | 0.2 |  |
| 2.2 | Formula (5): $\frac { 1 } { T ^ { 2 } } \frac { d T } { d x } = b =$ const | 0.2 | 1.0 |
|  | Formula (6): $- \frac { 1 } { T } = b x + C$ | 0.2 |  |
|  | Formula (7): $T ( 0 ) = T _ { 1 }$ | 0.2 |  |
|  | Formula (8): $T ( l ) = T _ { 2 }$ | 0.2 |  |
|  | Formula (9): $T ( x ) = \frac { T _ { 1 } } { 1 - \left( 1 - \frac { T _ { 1 } } { T _ { 2 } } \right) ^ { \frac { x } { l } } }$ | 0.2 |  |
| 2.3 | Formula (10): $\delta Q _ { 1 } = \kappa \frac { \Delta t } { h } S d \tau$ | 0.2 | 1.0 |
|  | Formula (11): $\delta Q _ { 2 } = \lambda \rho S d h$ | 0.2 |  |
|  | Formula (12): $d \tau = \frac { \lambda \rho } { \kappa \| t \| } h d h$ | 0.2 |  |
|  | Formula (13): $\tau = \frac { \lambda \rho h ^ { 2 } } { 2 \kappa \| t \| }$ | 0.2 |  |
|  | Numerical value in formula (13): $\tau = 5.45 \cdot 10 ^ { 3 } s$ | 0.2 |  |
| 2.4 | 0.2 for each correct value in the table | 4×0.2 | 0.8 |
| 2.5 | Correct equivalent circuit | 0.4 | 1.0 |
|  | Formula (14): $\frac { T _ { B } - T _ { A } } { \frac { 5 } { 6 } } = \frac { T _ { C } - T _ { A } } { \frac { 1 } { 3 } }$ | 0.2 |  |
|  | Formula (15): $T _ { C } = \frac { 1 } { 5 } \left( 3 T _ { A } + 2 T _ { B } \right)$ | 0.2 |  |
|  | Numerical value in formula (15): $T _ { C } = 60 ^ { \circ } \mathrm { C }$ | 0.2 |  |
| 2.6 | Formula (16): $j _ { Q 0 } = \frac { P } { 2 \pi R h }$ | 0.5 | 1.0 |
|  | Formula (17): $j _ { Q } = \frac { P } { 2 \sqrt { 2 } \pi R h }$ | 0.5 |  |
| 2.7 | Formula (18): $Q \sim R ^ { 3 }$ | 0.2 | 1.0 |
|  | Formula (19): $P \sim R ^ { 2 }$ | 0.2 |  |
|  | Formula ( $20 \tau = \frac { R _ { E } } { r _ { 0 } } \tau _ { 0 }$ | 0.3 |  |


|  | Numerical value in formula (20): $\tau = 2.56 \cdot 10 ^ { 8 } \mathrm {~h} = 2.92 \cdot 10 ^ { 4 }$ years | 0.3 |  |
| :--- | :--- | :--- | :--- |
| 2.8 | Formula (21): $P = 4 \pi R _ { E } ^ { 2 } \sigma T ^ { 4 }$ | 0.2 | 1.0 |
|  | Formula (22): $T _ { 0 } - T = P R _ { T }$ | 0.2 |  |
|  | Formula (23): $R _ { T } = \frac { 1 } { 4 \pi \kappa } \left( \frac { 1 } { R _ { 0 } } - \frac { 1 } { R _ { E } } \right)$ | 0.2 |  |
|  | Formula (24): $T _ { 0 } = T + \frac { \sigma T ^ { 4 } R _ { E } \left( R _ { E } - R _ { 0 } \right) } { \kappa R _ { 0 } }$ | 0.2 |  |
|  | Numerical value in formula (24): $T _ { 0 } = 4.84 \cdot 10 ^ { 7 } \mathrm {~K}$ | 0.2 |  |
| 2.9 | Formula (25): $\frac { T _ { 0 } - T } { R _ { T } } = \frac { T _ { H } - T } { R _ { H } }$ | 0.3 | 1.0 |
|  | Formula (26): $R _ { H } = \frac { H } { 4 \pi \kappa R _ { E } ^ { 2 } }$ | 0.2 |  |
|  | Formula (27): $T _ { H } = T + \left( T _ { 0 } - T \right) \frac { H R _ { 0 } } { R _ { E } \left( R _ { E } - R _ { 0 } \right) }$ | 0.3 |  |
|  | Numerical value in formula (27): $T _ { H } = 1.86 \cdot 10 ^ { 4 } \mathrm {~K}$ | 0.2 |  |
| 2.10 | Formula (28): $\frac { d Q } { d t } = c m \frac { d T _ { 0 } } { d t }$ | 0.2 | 1.2 |
|  | Formula (29): $m = \frac { 4 } { 3 } \pi \rho R _ { 0 } ^ { 3 }$ | 0.2 |  |
|  | Formula (30): $\frac { d Q } { d t } = - P$ | 0.2 |  |
|  | Formula (31): $\frac { d T } { T } = - \frac { \kappa R _ { E } } { c \rho R _ { 0 } ^ { 2 } \left( R _ { E } - R _ { 0 } \right) } d \tau$ | 0.2 |  |
|  | Formula (32): $\Delta T = \frac { \kappa R _ { E } T \tau } { c \rho R _ { 0 } ^ { 2 } \left( R _ { E } - R _ { 0 } \right) }$ | 0.2 |  |
|  | Numerical value in formula (32): $\Delta T = 3.14 \cdot 10 ^ { - 2 } \mathrm {~K}$ | 0.2 |  |
| Total |  |  | 10.0 |
