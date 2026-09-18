---
id: solution-ocr-izho-2020-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2020_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2020-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Phase states and phase transitions ( $\mathbf { 1 0 , 0 }$ points) Specific heat of phase transition

2.1 The work of steam against constant external pressure during evaporation of a unit water mass is found as

$$
\begin{equation*}
A = P \left( v _ { 2 } - v _ { 1 } \right) . \tag{1}
\end{equation*}
$$

Since $v _ { 2 } \gg v _ { 1 }$, we can neglect the specific volume of liquid $v _ { 1 }$ in comparison with the specific volume of vapor $v _ { 2 }$. Then, considering water vapor as an ideal gas with the equation of state

$$
\begin{equation*}
P v = \frac { R T } { \mu _ { w } } \tag{2}
\end{equation*}
$$

the work sought is obtained as

$$
\begin{equation*}
A = P \left( v _ { 2 } - v _ { 1 } \right) \approx \frac { R T _ { b } } { \mu _ { w } } . \tag{3}
\end{equation*}
$$


Thus, the ratio of work to the total heat of evaporation at $T = 373 \mathrm {~K}$ is determined by the expression

$$
\begin{equation*}
\frac { A } { r _ { \mathrm { B } } } = \frac { R T _ { b } } { \mu _ { w } r _ { w } } , \tag{4}
\end{equation*}
$$

and the rest of the heat goes to the increase of the internal energy of the system $\Delta u = r _ { w } - A$, i.e.

$$
\begin{equation*}
\frac { \Delta u } { r _ { w } } = 1 - \frac { R T _ { b } } { \mu _ { w } r _ { w } } = 92,4 \% . \tag{5}
\end{equation*}
$$

2.2 The evaporation of one mole of water at a temperature $T$ consumes heat

$$
\begin{equation*}
\mu _ { w } r ( T ) = U _ { 2 } ( T ) - U _ { 1 } ( T ) + P V _ { 2 } = U _ { 2 } ( T ) - U _ { 1 } ( T ) + R T . \tag{6}
\end{equation*}
$$

A similar expression for the temperature $T _ { b } = 373 \mathrm {~K}$ has the form

$$
\begin{equation*}
\mu _ { w } r _ { w } = U _ { 2 } \left( T _ { b } \right) - U _ { 1 } \left( T _ { b } \right) + R T _ { b } . \tag{7}
\end{equation*}
$$

Subtracting equation (7) from equation (6), we obtain for the change in the molar heat of evaporation

$$
\begin{equation*}
\mu _ { w } \Delta r = \Delta U _ { 2 } - \Delta U _ { 1 } + R \Delta T = C _ { P } \Delta T - \mu _ { w } c _ { w } \Delta T = \mu _ { w } \left( \frac { C _ { P } } { \mu _ { w } } - c _ { w } \right) \Delta T , \tag{8}
\end{equation*}
$$

where $\Delta T = T - T _ { b }$ and $\Delta r = r ( T ) - r _ { w }$.
Given that for water vapor, the molar heat capacity at constant pressure is

$$
\begin{equation*}
C _ { P } = 4 R , \tag{9}
\end{equation*}
$$

we obtain the specific heat of water evaporation

$$
\begin{equation*}
r ( T ) = r _ { w } - \left( c _ { w } - \frac { 4 R } { \mu _ { w } } \right) \left( T - T _ { b } \right) = 2447 \mathrm {~J} / g . \tag{10}
\end{equation*}
$$

It is interesting to note that the heat of evaporation is increased by $\Delta r / r _ { w } \approx 8 \%$.

## The Clausius-Clapeyron relation

2.3 Neglecting the specific volume of water compared to the volume of vapor, we apply the Clapeyron-Clausius equation to the vaporization in the form

$$
\begin{equation*}
\frac { d P } { d T } = \frac { r } { T v } = \frac { \mu _ { w } r _ { w } } { R T ^ { 2 } } P \tag{11}
\end{equation*}
$$

or

$$
\begin{equation*}
\frac { d P } { P } = \frac { \mu _ { w } r _ { w } d T } { R T ^ { 2 } } . \tag{12}
\end{equation*}
$$

Integrating this expression at $r = r _ { w } =$ const gives rise to

$$
\begin{equation*}
P = P _ { 0 } \exp \left( \frac { \mu _ { w } r _ { w } } { R } \left( \frac { 1 } { T _ { b } } - \frac { 1 } { T } \right) \right) . \tag{13}
\end{equation*}
$$

2.4 As it follows from equation (13) the explicit dependence of the boiling point of water on external pressure has the form

$$
\begin{equation*}
T = \frac { T _ { b } } { 1 - \frac { R T _ { b } } { \mu _ { w } r _ { w } } \ln \frac { P } { P _ { 0 } } } . \tag{14}
\end{equation*}
$$

According to the barometric formula for an isothermal atmosphere, we have

$$
\begin{equation*}
P = P _ { 0 } \exp \left( - \frac { \mu _ { \text {air } } g h } { R T _ { 0 } } \right) . \tag{15}
\end{equation*}
$$

Substituting this expression into formula (14), we obtain the dependence of the boiling temperature on height and the numerical value of the boiling temperature of water at the altitude of $h = 7 k m$

$$
\begin{equation*}
T = \frac { T _ { b } } { 1 + \frac { T _ { b } \mu _ { \text {air } } g h } { T _ { 0 } \mu _ { w } r _ { w } } } = 349,6 \mathrm {~K} = 76,6 ^ { \circ } \mathrm { C } . \tag{16}
\end{equation*}
$$

2.5 It follows from the Clapeyron-Clausius relation the following holds at the vicinity of 0 °C

$$
\begin{equation*}
\frac { d P } { d T } = \frac { r _ { w } } { T _ { 0 } \left( \frac { 1 } { \rho _ { w } } - \frac { 1 } { \rho _ { i } } \right) } . \tag{17}
\end{equation*}
$$

Therefore, we obtain that in order to lower the melting temperature of ice by 1°C, the pressure should be increased by

$$
\begin{equation*}
\Delta P = \frac { d P } { d T } \Delta T = 139 \mathrm {~atm} , \tag{18}
\end{equation*}
$$

so that the pressure should be equal to $P = 140 ~ a t m$.
2.6 In order for ice crystals to break when walking, and not to melt under the influence of pressure $P _ { c r }$, the outdoor temperature should be lower than


$$
\begin{equation*}
t _ { \max } = \frac { P _ { c r } } { ( d P / d T ) } \approx - 7,21 ^ { \circ } \mathrm { C } , \tag{19}
\end{equation*}
$$

in which the derivative $( d P / d T )$ is determined by formula (17).
2.7 Since for one mole of vapor $P V = R T$, then

$$
\begin{equation*}
d ( P V ) = P d V + V d P = R d T , \tag{20}
\end{equation*}
$$

thus, the elementary work of the vapor when changing its volume is derived as

$$
\begin{equation*}
P d V = R d T - V d P . \tag{21}
\end{equation*}
$$

From the first law of thermodynamics it follows that the heat supplied to the vapor has the form

$$
\begin{equation*}
\delta Q = d U + \delta A = C _ { V } d T + R d T - V d P = C _ { P } d T - V d P . \tag{22}
\end{equation*}
$$

Given that from the Clapeyron-Clausius relation $d P / d T = r _ { w } \mu _ { w } / \left( T _ { b } V \right)$,, we obtain the heat capacity of the vapor

$$
\begin{equation*}
C = \frac { \delta Q } { d T } = C _ { P } - \frac { V d P } { d T } = C _ { P } - \frac { \mu _ { w } r _ { w } } { T _ { b } } = - 75,7 \mathrm {~J} / ( \mathrm { K } \cdot \mathrm {~mol} ) . \tag{23}
\end{equation*}
$$

Thus, the heat from the vapor must be removed so that it does not overheat as a result of expansion. It is interesting to note that the specific heat in this process turned out to be almost equal to the specific heat of water with a minus sign $c = C _ { P } / \mu _ { w } - r _ { w } / T _ { b } = - 4,21 J / ( g \cdot K )$.

## Border boiling

2.8 A liquid boils when bubbles are formed inside such that the pressure of its saturated vapor reaches the atmospheric pressure $P _ { 0 }$. At the liquids border, the total vapor pressure in the bubbles formed upon boiling is the sum of the partial pressures of the saturated vapor of carbon tetrachloride and water at $t ^ { * }$

$$
\begin{equation*}
P _ { 0 } = P \left( t ^ { * } \right) + P _ { w } \left( t ^ { * } \right) . \tag{24}
\end{equation*}
$$

It follows that the saturated vapor pressure of carbon tetrachloride at a boiling point is found as

$$
\begin{equation*}
P ^ { * } = P \left( t ^ { * } \right) = P _ { 0 } - P _ { w } \left( t ^ { * } \right) . \tag{25}
\end{equation*}
$$

From the Clapeyron-Clausius relation for carbon tetrachloride it follows that

$$
\begin{equation*}
\frac { d P } { P } = \frac { \mu r d T } { R T ^ { 2 } } . \tag{26}
\end{equation*}
$$

After integrating from the lower bound $T = t + 273,15 = 349,8 K$ to the higher bound $T ^ { * } = t ^ { * } + 273,15 = 339,15 \mathrm {~K}$ results in the following formula

$$
\begin{equation*}
\ln \left( P _ { 0 } / P ^ { * } \right) = r \mu \Delta T / R T T ^ { * } , \tag{27}
\end{equation*}
$$

which means the heat of vaporization of carbon tetrachloride is obtained as

$$
\begin{equation*}
r = \frac { R T T ^ { * } \ln \left( P _ { 0 } / P ^ { * } \right) } { \mu \left( T - T ^ { * } \right) } \approx 180 \mathrm {~J} / \mathrm { g } . \tag{28}
\end{equation*}
$$

For reference: the experimental value is $r = 195 \mathrm {~J} / \mathrm { g }$.
2.9 The ratio of evaporation rates from the border layer is obviously equal to the ratio of the masses of vapor of tetrachlomethane and water in the bubbles formed during boiling, which, in turn, is equal to the ratio of the densities of the vapors found as

$$
\begin{equation*}
\frac { m } { m _ { w } } = \frac { \rho } { \rho _ { w } } = \frac { P ^ { * } \mu } { P _ { w } \left( t ^ { * } \right) \mu _ { w } } \approx 25 . \tag{29}
\end{equation*}
$$

Thus, carbon tetrachloride evaporates 25 times faster (by weight) than water. This means that by the time of evaporation of carbon tetrachloride, the amount of water that finally evaporates is written as

$$
\begin{equation*}
\Delta m = \frac { \rho V } { 2 } \frac { m _ { w } } { m } = 3,25 \mathrm {~g} . \tag{30}
\end{equation*}
$$

Accordingly, the amount of water remaining after evaporation of all carbon tetrachloride is derived as

$$
\begin{equation*}
M _ { w } = \rho _ { w } V / 2 - \Delta m = 46,7 g . \tag{31}
\end{equation*}
$$

2.10 Let border boiling occur at a certain temperature $t _ { x }$, then the saturated vapor pressure of fluoroketone $P$ and the saturated vapor pressure of water $P _ { w }$ at this temperature should equal the external atmospheric pressure, i.e.

$$
\begin{equation*}
P _ { 0 } = P \left( t _ { x } \right) + P _ { w } \left( t _ { x } \right) . \tag{32}
\end{equation*}
$$


Thus, the saturated vapor pressure of fluoroketone at the border boiling point decreases by the value of the saturated vapor pressure of water at this temperature

$$
\begin{equation*}
P \left( t _ { x } \right) = P _ { 0 } - P _ { w } \left( t _ { x } \right) . \tag{33}
\end{equation*}
$$

From the Clapeyron - Clausius equation (in the approximation of small liquid volume and vapor ideality) it follows that the slope of the phase equilibrium line $P ( T )$ at the volume boiling point of fluoroketone reads as

$$
\begin{equation*}
\alpha _ { f } = \frac { \mathrm { d } P } { \mathrm {~d} T } = \frac { r \mu P _ { 0 } } { R T _ { f } ^ { 2 } } . \tag{34}
\end{equation*}
$$

For water at the same temperature, a similar derivative is more than 6 times less

$$
\begin{equation*}
\alpha _ { \mathrm { w } } = \frac { \mathrm { d } P } { \mathrm {~d} T } = \frac { \mu _ { w } r _ { w } P _ { \mathrm { w } } \left( t _ { f } \right) } { R T _ { f } ^ { 2 } } . \tag{35}
\end{equation*}
$$

Since $\alpha _ { f } / \alpha _ { \mathrm { w } } \approx 6,30$, the decrease in pressure and, correspondingly, in the boiling point are both small relative to the same values for fluoroketone, therefore, we can use the linear approximation near $t _ { f }$

$$
\begin{equation*}
P _ { 0 } - P \left( t _ { x } \right) = \alpha _ { f } \Delta T = P _ { \mathrm { w } } \left( t _ { x } \right) = P _ { \mathrm { w } } \left( t _ { f } \right) - \alpha _ { \mathrm { w } } \Delta T , \tag{36}
\end{equation*}
$$

where $\Delta T = T _ { f } - T _ { x }$, wherefrom the lowering of the boiling point is found as

$$
\begin{equation*}
\Delta T = \frac { P _ { \mathrm { w } } \left( \mathrm { t } _ { f } \right) } { \left( \alpha _ { f } + \alpha _ { \mathrm { w } } \right) } . \tag{37}
\end{equation*}
$$

Finally, the temperature for the border boiling is obtained as

$$
\begin{equation*}
t _ { x } = t _ { f } - \Delta T = 46,3 ^ { \circ } \mathrm { C } . \tag{38}
\end{equation*}
$$

For reference: the experimental value is $t _ { x } = ( 46 \pm 1 ) ^ { \circ } \mathrm { C }$.

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 2.1 | Formula (1): $A = P \left( v _ { 2 } - v _ { 1 } \right)$ | 0,2 | 1,0 |
|  | Formula (2): $P v = \frac { R T } { \mu _ { w } }$ | 0,2 |  |
|  | Formula (4): $\frac { A } { r _ { \mathrm { B } } } = \frac { R T _ { b } } { \mu _ { w } r _ { w } }$ | 0,2 |  |
|  | Formula (5): $\frac { \Delta u } { r _ { w } } = 1 - \frac { R T _ { b } } { \mu _ { w } r _ { w } }$ | 0,2 |  |
|  | Numerical value in formula (5): 92,4\% | 0,2 |  |
| 2.2 | Formula (6): $\mu _ { w } r ( T ) = U _ { 2 } - U _ { 1 } + P V _ { 2 } = U _ { 2 } - U _ { 1 } + R T$ | 0,2 | 1,0 |
|  | Formula (7): $\mu _ { w } r _ { w } = U _ { 2 } \left( T _ { b } \right) - U _ { 1 } \left( T _ { b } \right) + R T _ { b }$ | 0,2 |  |
|  | Formula (9): $C _ { P } = 4 R$ | 0,2 |  |
|  | Formula (10): $r ( T ) = r _ { w } - \left( c _ { w } - \frac { 4 R } { \mu _ { w } } \right) \left( T - T _ { b } \right)$ | 0,2 |  |
|  | Numerical value in formula (10): $2447 \mathrm {~J} / \mathrm { g }$ | 0,2 |  |
| 2.3 | Formula (11): $\frac { d P } { d T } = \frac { r } { T v } = \frac { \mu _ { w } r _ { w } } { R T ^ { 2 } } P$ | 0,2 | 0,4 |
|  | Formula (13): $P = P _ { 0 } \exp \left( \frac { \mu _ { w } r _ { w } } { R } \left( \frac { 1 } { T _ { b } } - \frac { 1 } { T } \right) \right)$ | 0,2 |  |
| 2.4 | Formula (14): $T = \frac { T _ { b } } { 1 - \frac { R T _ { b } } { \mu _ { w } r _ { w } } \ln \frac { P } { P _ { 0 } } }$ | 0,2 | 1,0 |
|  | Formula (15): $P = P _ { 0 } \exp \left( - \frac { \mu _ { \text {air } } g h } { R T _ { 0 } } \right)$ | 0,4 |  |
|  | Formula (16): $T = \frac { T _ { b } } { 1 + \frac { T _ { b } \mu _ { \text {air } } g h } { T _ { 0 } \mu _ { w } r _ { w } } }$ | 0,2 |  |
|  | Numerical value in formula (16): 76,6 °C | 0,2 |  |
| 2.5 | Formula (17): $\frac { d P } { d T } = \frac { q _ { i } } { T _ { 0 } \left( \frac { 1 } { \rho _ { w } } - \frac { 1 } { \rho _ { i } } \right) }$ | 0,2 | 0,6 |


|  | Formula (18): $\Delta P = \frac { d P } { d T } \Delta T$ | 0,2 |  |
| :--- | :--- | :--- | :--- |
|  | Numerical value in formula (17): $\Delta P = 139 \mathrm {~atm}$ or $P = 140 \mathrm {~atm}$ | 0,2 |  |
| 2.6 | Formula (19): $t _ { \text {max } } = \frac { P _ { c r } } { ( d P / d T ) }$ | 0,4 | 0,6 |
|  | Numerical value in formula (19): $t _ { \text {max } } \approx - 7,21 ^ { \circ } \mathrm { C }$ | 0,2 |  |
| 2.7 | Formula (21): $P d V = R d T - V d P$ | 0,2 | 1,0 |
|  | Formula (22): $\delta Q = d U + \delta A = C _ { V } d T + R d T - V d P = C _ { P } d T - V d P$ | 0,2 |  |
|  | Formula (23): $C = \frac { \delta Q } { d T } = C _ { P } - \frac { V d P } { d T } = C _ { P } - \frac { \mu _ { w } r _ { w } } { T _ { b } }$ | 0,4 |  |
|  | Numerical value in formula (23): $C = - 75,7 \mathrm {~J} / ( \mathrm { K } \cdot \mathrm { mol } )$ | 0,2 |  |
| 2.8 | Formula (24): $P _ { 0 } = P \left( t ^ { * } \right) + P _ { w } \left( t ^ { * } \right)$ | 0,4 | 1,2 |
|  | Formula (26): $\frac { d P } { P } = \frac { \mu r d T } { R T ^ { 2 } }$ | 0,2 |  |
|  | Formula (27): $\ln \left( P _ { 0 } / P ^ { * } \right) = r \mu \Delta T / R T T ^ { * }$ | 0,2 |  |
|  | Formula (28): $r = \frac { R T T ^ { * } \ln \left( P _ { 0 } / P ^ { * } \right) } { \mu \left( T - T ^ { * } \right) }$ | 0,2 |  |
|  | Numerical value in formula (28): $r \approx 180 \mathrm {~J} / \mathrm { g }$. | 0,2 |  |
| 2.9 | Formula (29): $\frac { m } { m _ { w } } = \frac { \rho } { \rho _ { w } } = \frac { P ^ { * } \mu } { P _ { w } \left( t ^ { * } \right) \mu _ { w } }$ | 0,4 | 1,0 |
|  | Formula (30): $\Delta m = \frac { \rho V } { 2 } \frac { m _ { w } } { m }$ | 0,2 |  |
|  | Formula (31): $M _ { w } = \rho _ { w } V / 2 - \Delta m$ | 0,2 |  |
|  | Numerical value in formula (31): $M _ { w } = 46,7 g$ | 0,2 |  |
| 2.10 | Formula (32): $P _ { 0 } = P \left( t _ { x } \right) + P _ { w } \left( t _ { x } \right)$ | 0.2 | 2,2 |
|  | Formula (34): $\alpha _ { f } = \frac { \mathrm { d } P } { \mathrm {~d} T } = \frac { r \mu P _ { 0 } } { R T _ { f } ^ { 2 } }$ | 0,3 |  |
|  | Formula (35): $\alpha _ { \mathrm { w } } = \frac { \mathrm { d } P } { \mathrm {~d} T } = \frac { r _ { w } \mu _ { w } P _ { \mathrm { w } } \left( t _ { f } \right) } { R T _ { f } ^ { 2 } }$ | 0,3 |  |
|  | Estimation: $\alpha _ { f } / \alpha _ { \mathrm { w } } \approx 6,30$ | 0,3 |  |
|  | Formula (36): $P _ { 0 } - P \left( t _ { x } \right) = \alpha _ { f } \Delta T = P _ { \mathrm { w } } \left( t _ { x } \right) = P _ { \mathrm { w } } \left( t _ { f } \right) - \alpha _ { \mathrm { w } } \Delta T$ | 0,3 |  |
|  | Formula (37): $\Delta T = \frac { P _ { \mathrm { w } } \left( \mathrm { t } _ { f } \right) } { \left( \alpha _ { f } + \alpha _ { \mathrm { w } } \right) }$ | 0,4 |  |
|  | Formula (38): $t _ { x } = t _ { f } - \Delta T$ | 0,2 |  |
|  | Numerical value in formula (38): $t _ { x } = 46,3 ^ { \circ } \mathrm { C }$ | 0,2 |  |
| Total |  |  | 10,0 |
