---
id: solution-ocr-izho-2018-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2018_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2018-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Physics in the mountains ( $\mathbf { 1 0 , 0 }$ points)

## Part 1. Isothermal atmosphere (3,2 points)

1.1 [1,0 points] The air pressure on the Earth's surface is caused by its gravity acting on the atmosphere, such that the equilibrium condition requires

$$
\begin{equation*}
p _ { 0 } S = M g , \tag{1}
\end{equation*}
$$

where

$$
\begin{equation*}
S = 4 \pi R _ { E } ^ { 2 } \tag{2}
\end{equation*}
$$

designates the Earth's surface.
From (1) and (2) one obtains

$$
\begin{equation*}
M = \frac { 4 \pi p _ { 0 } R _ { E } ^ { 2 } } { g } = 5.32 \cdot 10 ^ { 18 } \mathrm {~kg} . \tag{3}
\end{equation*}
$$

1.2 [1,0 points] The pressure of the atmosphere varies with altitude due to the action of gravity on the gas. Let us consider the equilibrium of a layer of gas of thickness $d h$. The pressure difference $d p$ at these altitudes must compensate for the gravitational forces of the gas layer of density $\rho$, which leads to the equation

$$
\begin{equation*}
d p = - \rho g d h . \tag{4}
\end{equation*}
$$

On the other hand, from the equation of an ideal gas we find the relation between its density and pressure

$$
\begin{equation*}
\rho = \frac { \mu _ { a i r } p } { R T _ { 0 } } . \tag{5}
\end{equation*}
$$

From expressions (4) and (5), we find that the pressure of the atmosphere at an altitude $h$ is determined by the so-called barometric formula

$$
\begin{equation*}
p ( h ) = p _ { 0 } \exp \left( - \frac { \mu _ { \text {air } } g } { R T _ { 0 } } h \right) \tag{6}
\end{equation*}
$$

and at the altitude of $H = 1500 m$ it is equal to

$$
\begin{equation*}
p ( H ) = 85.0 \cdot 10 ^ { 3 } \mathrm {~Pa} . \tag{7}
\end{equation*}
$$

1.3 [0,6 points] In a homogeneous gravity field, the pressure of the atmosphere is determined by the mass of air above it, so the heating process can be considered isobaric, which means

$$
\begin{equation*}
\delta Q = \frac { M } { \mu _ { a i r } } \frac { \gamma R } { \gamma - 1 } \Delta T = 5.33 \cdot 10 ^ { 21 } \mathrm {~J} , \tag{8}
\end{equation*}
$$

where the adiabatic index of the diatomic gas is

$$
\begin{equation*}
\gamma = 7 / 5 . \tag{9}
\end{equation*}
$$


1.4 [0,6 points] For the time interval $\tau$ the amount of solar energy, absorbed by the Earth, is equal to

$$
\begin{equation*}
\delta Q = \alpha \pi R _ { E } ^ { 2 } \tau \tag{10}
\end{equation*}
$$

and the time interval sought is obtained as

$$
\begin{equation*}
\tau = \frac { M } { \alpha \pi R _ { E } ^ { 2 } \mu _ { a i r } } \frac { \gamma R \Delta T } { \gamma - 1 } = 30.3 \cdot 10 ^ { 3 } \mathrm {~s} . \tag{11}
\end{equation*}
$$

## Part 2. Adiabatic atmosphere (6,8 points)

2.1 [1,2 points] The temperature of the atmosphere does not remain constant with altitude, so equation (5) should be rewritten in the form

$$
\begin{equation*}
\rho = \frac { \mu _ { \text {air } } p } { R T } . \tag{12}
\end{equation*}
$$

Since the atmosphere is assumed adiabatic, one can write that

$$
\begin{equation*}
p T ^ { \frac { \gamma } { 1 - \gamma } } = \text { const. } \tag{13}
\end{equation*}
$$

Solving together equations (4), (12) and (13) yields

$$
\begin{equation*}
\frac { d T } { d h } = - \frac { ( \gamma - 1 ) \mu _ { \text {air } } g } { \gamma R } = - \beta = \text { const } . \tag{14}
\end{equation*}
$$

Formula (14) proves that the temperature of the adiabatic atmosphere decreases with altitude as

$$
\begin{equation*}
T ( h ) = T _ { 0 } - \frac { ( \gamma - 1 ) \mu _ { \text {air } } g } { \gamma R } h = T _ { 0 } - \beta h \tag{15}
\end{equation*}
$$

and is found at $H = 1500 m$ to be equal

$$
\begin{equation*}
T ( H ) = 278 \text { К. } \tag{16}
\end{equation*}
$$

2.2 [0,4 points] The pressure distribution over the altitude is determined by the adiabatic equation (13)

$$
\begin{equation*}
p ( h ) = p _ { 0 } \left( \frac { T _ { 0 } } { T ( h ) } \right) ^ { \frac { \gamma } { 1 - \gamma } } = p _ { 0 } \left( \frac { T _ { 0 } } { T _ { 0 } - \beta h } \right) ^ { \frac { \gamma } { 1 - \gamma } } \tag{17}
\end{equation*}
$$

and is found at $H = 1500 m$ to be equal

$$
\begin{equation*}
p ( H ) = 84.6 \cdot 10 ^ { 3 } P a . \tag{18}
\end{equation*}
$$

2.3 [0,8 points] Since the temperature of the upper part of the troposphere is fixed, it follows from (15) that its height is determined by the condition

$$
\begin{equation*}
T ( h ) = T _ { 0 } - \beta h = \text { const } . \tag{19}
\end{equation*}
$$

Thus, the change in the height of the troposphere at daytime and nighttime is derived as

$$
\begin{equation*}
\Delta H _ { \text {atm } } = \frac { \gamma R \Delta T _ { d n } } { ( \gamma - 1 ) \mu _ { \text {air } } g } = 2,05 \cdot 10 ^ { 3 } \mathrm {~m} . \tag{20}
\end{equation*}
$$

2.4 [0,6 points] In the stated range of temperatures and pressures, one can approximate the saturated water vapor pressure by a linear function of the form

$$
\begin{equation*}
p ( T ) = p _ { 1 } + \frac { p _ { 2 } - p _ { 1 } } { T _ { 2 } - T _ { 1 } } \left( T - T _ { 1 } \right) . \tag{21}
\end{equation*}
$$

The boiling of the liquid begins when the saturated vapor pressure is equalized with the external pressure of the atmosphere, which allows an intensive vaporization process to occur in the emerging bubbles. Equating expressions (18) and (21) gives rise to

$$
\begin{equation*}
T _ { \text {boil } } = 368 \mathrm { К } . \tag{22}
\end{equation*}
$$

2.5 [0,8 points] The melting point of ice varies little with the external pressure, so snow appears when the temperature reaches 0 °C, i.e.

$$
\begin{equation*}
T _ { m e l t } = 273 \mathrm {~K} . \tag{23}
\end{equation*}
$$

Consequently, using formula (15), we determine the altitude at which the snow cover appears as

$$
\begin{equation*}
h _ { 0 } = \frac { \gamma R \left( T _ { 0 } - T _ { m e l t } \right) } { ( \gamma - 1 ) \mu _ { \text {air } } g } = 2.05 \cdot 10 ^ { 3 } \mathrm {~m} . \tag{24}
\end{equation*}
$$

2.6 [0,4 points] If the air at the foot of the mountain is quite hot, then the temperature over the entire mountain slope cannot fall to zero degrees Celsius. Then, formula (24) provides the height of the mountain to be

$$
\begin{equation*}
H _ { 0 } = \frac { \gamma R \left( T - T _ { m e l t } \right) } { ( \gamma - 1 ) \mu _ { \text {air } } g } = 3.78 \cdot 10 ^ { 3 } \mathrm {~m} . \tag{25}
\end{equation*}
$$


2.7 [2,0 points] Since the water vapor is in thermodynamic equilibrium with the surrounding air, their temperatures are equal at all altitudes. The equilibrium condition for the vapor is written analogously to (4) as

$$
\begin{equation*}
d p _ { \text {vap } } = - \rho _ { \text {vap } } g d h , \tag{26}
\end{equation*}
$$

and its density is obtained from the ideal gas equation of state in the following form

$$
\begin{equation*}
\rho _ { \text {vap } } = \frac { \mu _ { \mathrm { H } _ { 2 } \mathrm { o } } o _ { \text {vap } } } { R T } , \tag{27}
\end{equation*}
$$

in which the temperature dependence on the altitude is governed by formula (15).
By formulation, the pressure of unsaturated water vapor at the foot of the mountain reads as

$$
\begin{equation*}
p _ { v a p } ( 0 ) = \varphi p _ { v a p 0 } , \tag{28}
\end{equation*}
$$

whereas the saturated vapor pressure at the altitude $H ^ { \prime }$ is denoted as

$$
\begin{equation*}
p _ { \text {vap } } ( h ) = p _ { \text {vap } } . \tag{29}
\end{equation*}
$$

Integrating equation (25) with the aid of (26) and (15) and initial conditions (28) and (29), it is found that

$$
\begin{equation*}
\ln \frac { p _ { \text {vap } } } { p _ { \text {vapo } } } = \ln \varphi + \frac { \mu _ { H _ { 2 } O } g } { \beta R } \ln \frac { T } { T _ { 0 } } . \tag{30}
\end{equation*}
$$

On the other hand, it is known from the handbook that

$$
\begin{equation*}
\ln \frac { P _ { \text {vap } } } { P _ { \text {vap } 0 } } = a + b \ln \frac { T } { T _ { 0 } } , \tag{31}
\end{equation*}
$$

and solving it together with (30) provides the following temperature at the altitude $H ^ { \prime }$

$$
\begin{equation*}
T \left( H ^ { \prime } \right) = T _ { 0 } \exp \left( \frac { a - \ln \varphi } { \frac { \mu _ { H _ { 2 } O } g } { \beta R } - b } \right) . \tag{32}
\end{equation*}
$$

Then, the altitude itself is delivered by formula (15) as

$$
\begin{equation*}
H ^ { \prime } = \frac { T _ { 0 } - T \left( H ^ { \prime } \right) } { \beta } = \frac { T _ { 0 } } { \beta } \left( 1 - \exp \left( \frac { a - \ln \varphi } { \frac { \mu _ { H _ { 2 } 0 ^ { g } } } { \beta R } - b } \right) \right) = 2.55 \cdot 10 ^ { 3 } \mathrm {~m} . \tag{33}
\end{equation*}
$$

2.8 [0,6 points] For the fog to be absent on the mountain, one has to put in formula (33)

$$
\begin{equation*}
H ^ { \prime } = H _ { 0 } , \tag{34}
\end{equation*}
$$

from which we obtain the desired expression for the air humidity

$$
\begin{equation*}
\varphi _ { \min } = \left( 1 - \frac { \beta H _ { 0 } } { T _ { 0 } } \right) ^ { b - \frac { \mu _ { H _ { 2 } O } g } { \beta R } } \exp a = 0.119 . \tag{35}
\end{equation*}
$$

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 1.1 | Formula (1) $p _ { 0 } S = M g$ | 0,4 | 1,0 |
|  | Formula (2) $S = 4 \pi R _ { E } ^ { 2 }$ | 0,2 |  |
|  | Formula (3) $M = \frac { 4 \pi p _ { 0 } R _ { E } ^ { 2 } } { g }$ | 0,2 |  |
|  | Correct numerical value $M = 5.32 \cdot 10 ^ { 18 } \mathrm {~kg}$ | 0,2 |  |
| 1.2 | Formula (4) $d p = - \rho g d h$ | 0,2 | 1,0 |
|  | Formula (5) $\rho = \frac { \mu _ { \text {air } } p } { R T _ { 0 } }$ | 0,2 |  |
|  | Formula (6) $p ( h ) = p _ { 0 } \exp \left( - \frac { \mu _ { \text {air } } g } { R T _ { 0 } } h \right)$ | 0,4 |  |
|  | Correct numerical value $p ( H ) = 85.0 \cdot 10 ^ { 3 } \mathrm {~Pa}$ | 0,2 |  |
| 1.3 | Formula (8) $\delta Q = \frac { M } { \mu _ { \text {air } } } \frac { \gamma R } { \gamma - 1 } \Delta T$ | 0,2 | 0,6 |
|  | Correct numerical value $\delta Q = 5.33 \cdot 10 ^ { 21 } \mathrm {~J}$ | 0,2 |  |
|  | Formula (9) $\gamma = 7 / 5$ or equivalent $C _ { P } = 7 / 2 R$ | 0,2 |  |
| 1.4 | Formula (10) $\delta Q = \alpha \pi R _ { E } ^ { 2 } \tau$ | 0,2 | 0,6 |
|  | Formula (11) $\tau = \frac { M } { \alpha \pi R _ { E } ^ { 2 } \mu _ { \text {air } } } \frac { \gamma R \Delta T } { \gamma - 1 }$ | 0,2 |  |
|  | Correct numerical value $\tau = 30.3 \cdot 10 ^ { 3 } \mathrm {~s}$ | 0,2 |  |


| 2.1 | Formula (12) $\rho = \frac { \mu _ { \text {air } } p } { R T }$ | 0,2 | 1,2 |
| :--- | :--- | :--- | :--- |
|  | Formula (13) $p T ^ { \frac { \gamma } { 1 - \gamma } } =$ const | 0,2 |  |
|  | Formula (14) $\frac { d T } { d h } = - \frac { ( \gamma - 1 ) \mu _ { \text {air } } g } { \gamma R } = - \beta =$ const | 0,4 |  |
|  | Formula (15) $T ( h ) = T _ { 0 } - \frac { ( \gamma - 1 ) \mu _ { \text {air } } g } { \gamma R } h = T _ { 0 } - \beta h$ | 0,2 |  |
|  | Correct numerical value $T ( H ) = 278 \mathrm {~K}$ | 0,2 |  |
| 2.2 | Formula (17) $p ( h ) = p _ { 0 } \left( \frac { T _ { 0 } } { T ( h ) } \right) ^ { \frac { \gamma } { 1 - \gamma } } = p _ { 0 } \left( \frac { T _ { 0 } } { T _ { 0 } - \beta h } \right) ^ { \frac { \gamma } { 1 - \gamma } }$ | 0,2 | 0,4 |
|  | Correct numerical value $p ( H ) = 84.6 \cdot 10 ^ { 3 } \mathrm {~Pa}$ | 0,2 |  |
| 2.3 | Formula (19) $H _ { \text {atm } } = \frac { \gamma R T _ { 0 } } { ( \gamma - 1 ) \mu _ { \text {air } } g }$ | 0,4 | 0,8 |
|  | Formula (20) $\Delta H _ { \text {atm } } = \frac { \gamma R \Delta T _ { d n } } { ( \gamma - 1 ) \mu _ { \text {air } } g }$ | 0,2 |  |
|  | Correct numerical value $\Delta H _ { \text {atm } } = 2,05 \cdot 10 ^ { 3 } \mathrm {~m}$ | 0,2 |  |
| 2.4 | Formula (21) $p ( T ) = p _ { 1 } + \frac { p _ { 2 } - p _ { 1 } } { T _ { 2 } - T _ { 1 } } \left( T - T _ { 1 } \right)$ | 0,4 | 0,6 |
|  | Correct numerical value $T _ { \text {boil } } = 368 \mathrm {~K}$ | 0,2 |  |
| 2.5 | Formula (23) $T _ { \text {melt } } = 273 \mathrm {~K}$. | 0,2 | 0,8 |
|  | Formula (24) $h _ { 0 } = \frac { \gamma R \left( T _ { 0 } - T _ { \text {melt } } \right) } { ( \gamma - 1 ) \mu _ { \text {air } } g }$ | 0,4 |  |
|  | Correct numerical value $h _ { 0 } = 2.05 \cdot 10 ^ { 3 } \mathrm {~m}$ | 0,2 |  |
| 2.6 | Formula (25) $H _ { 0 } = \frac { \gamma R \left( T - T _ { \text {melt } } \right) } { ( \gamma - 1 ) \mu _ { \text {air } } g }$ | 0,2 | 0,4 |
|  | Correct numerical value $H _ { 0 } = 3.78 \cdot 10 ^ { 3 } m$ | 0,2 |  |
| 2.7 | Formula (26) $d p _ { \text {vap } } = - \rho _ { \text {vap } } g d h$ | 0,2 | 2,0 |
|  | Formula (27) $\rho _ { \text {vap } } = \frac { \mu _ { H _ { 2 } O } \rho _ { \text {vap } } } { R T }$ | 0,2 |  |
|  | Formula (28) $p _ { \text {vap } } ( 0 ) = \varphi p _ { \text {vap } 0 }$ | 0,2 |  |
|  | Formula (30) $\ln \frac { p _ { \text {vap } } } { p _ { \text {vap } 0 } } = \ln \varphi + \frac { \mu _ { \mathrm { H } _ { 2 } \mathrm { O } } g } { \beta R } \ln \frac { T } { T _ { 0 } }$ | 0,6 |  |
|  | Formula (32) $T \left( H ^ { \prime } \right) = T _ { 0 } \exp \left( \frac { a - \ln \varphi } { \frac { \mu _ { H _ { 2 } 0 ^ { g } } } { \beta R } - b } \right)$ | 0,2 |  |
|  | Formula (33) $H ^ { \prime } = \frac { T _ { 0 } - T \left( H ^ { \prime } \right) } { \beta } = \frac { T _ { 0 } } { \beta } \left( 1 - \exp \left( \frac { a - \ln \varphi } { \frac { \mu _ { H _ { 2 } O } 9 } { \beta R } - b } \right) \right)$ | 0,4 |  |
|  | Correct numerical value $H ^ { \prime } = 2.55 \cdot 10 ^ { 3 } m$ | 0,2 |  |
| 2.8 | Formula (34) $H ^ { \prime } = H _ { 0 }$ | 0,2 | 0,6 |
|  | Formula (35) $\varphi _ { \text {max } } = \left( 1 - \frac { \beta H _ { 0 } } { T _ { 0 } } \right) ^ { b - \frac { \mu _ { H _ { 2 } } O g \beta } { R } } \exp a$ | 0,2 |  |
|  | Correct numerical value $\varphi _ { \text {max } } = 0.119$ | 0,2 |  |
| Total |  |  | 10,0 |
