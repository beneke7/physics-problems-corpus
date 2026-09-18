---
id: solution-ocr-izho-2024-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2024_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2024-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 1.2 (4.0 points)

1) The total internal energy of the system as a whole does not change during the process of temperature equalization, since it does not do any external work and no heat is supplied to it, that is

$$
\begin{equation*}
U = U _ { 0 } . \tag{1}
\end{equation*}
$$

It follows that when the partition moves, the gas pressures in each part of the vessel, which are equal to each other in this quasi-static process, do not change. Indeed, the initial internal energy of the system is equal to

$$
\begin{equation*}
U _ { 0 } = \frac { C _ { V } } { R } P _ { 0 } 2 V _ { 0 } , \tag{2}
\end{equation*}
$$

where

$$
\begin{equation*}
C _ { V } = \frac { 5 } { 2 } R . \tag{3}
\end{equation*}
$$

The internal energy at an arbitrary moment of time is

$$
\begin{equation*}
U = \frac { C _ { V } } { R } P \left( 2 V _ { 0 } \right) , \tag{4}
\end{equation*}
$$

where $P$ stands for the gas pressure in both parts of the vessel, which is obtained from equations (1)-(4)

$$
\begin{equation*}
P = P _ { 0 } , \tag{5}
\end{equation*}
$$

that is, the processes occurring with gases are isobaric.
Let us write down the equation of state of an ideal gas for each part of the vessel at the initial moment of time as

$$
\begin{align*}
& P _ { 0 } V _ { 0 } = v _ { 1 } R T _ { 1 } ,  \tag{6}\\
& P _ { 0 } V _ { 0 } = v _ { 2 } R T _ { 2 } , \tag{7}
\end{align*}
$$

where $v _ { 1 }$ and $v _ { 2 }$ denote the number of moles of nitrogen in each half of the vessel, respectively.
In the final state, the gas is at a certain temperature $T _ { 0 }$ and its equation of state has the form

$$
\begin{equation*}
P _ { 0 } 2 V _ { 0 } = v R T _ { 0 } , \tag{8}
\end{equation*}
$$

where the total number of moles of nitrogen in the vessel is equal to

$$
\begin{equation*}
v = v _ { 1 } + v _ { 2 } . \tag{9}
\end{equation*}
$$

From formulas (6)-(9) we determine the final temperature of the gas in the vessel

$$
\begin{equation*}
T _ { 0 } = \frac { 2 T _ { 1 } T _ { 2 } } { T _ { 1 } + T _ { 2 } } . \tag{10}
\end{equation*}
$$

Since the process is isobaric, the amount of heat $Q$ exchanged between the two parts of the vessel is derived as

$$
\begin{equation*}
Q = C _ { P } v _ { 1 } \left( T _ { 0 } - T _ { 1 } \right) = \frac { 7 } { 2 } P _ { 0 } V _ { 0 } \cdot \frac { T _ { 2 } - T _ { 1 } } { T _ { 1 } + T _ { 2 } } = 70.0 \text { Дж, } \tag{11}
\end{equation*}
$$

where

$$
\begin{equation*}
C _ { p } = C _ { V } + R . \tag{12}
\end{equation*}
$$

2) When the partition returns to its original position, the work of external forces is to be minimal if the movement process is slow, quasi-equilibrium without disturbing the thermal equilibrium between both parts of the vessel

$$
\begin{equation*}
T _ { 1 } ^ { \prime } = T _ { 2 } ^ { \prime } = T , \tag{13}
\end{equation*}
$$

that is, unlike the previous case, in both parts of the vessel the pressure is not the same, but the temperature is, which, however, changes.

The initial volumes of each part of the vessel are determined by the Gay-Lussac law and are equal to


$$
\begin{align*}
& V _ { 01 } = \frac { V _ { 0 } T _ { 0 } } { T _ { 1 } } ,  \tag{14}\\
& V _ { 02 } = \frac { V _ { 0 } T _ { 0 } } { T _ { 2 } } . \tag{15}
\end{align*}
$$

Let us denote the pressure in parts of the vessel as $P _ { 1 }$ and $P _ { 2 }$, and the corresponding volumes as $V _ { 1 }$ and $V _ { 2 }$. In accordance with the equation of state, at an arbitrary moment of time the following relations must be satisfied

$$
\begin{align*}
& P _ { 1 } V _ { 1 } = v _ { 1 } R T ,  \tag{16}\\
& P _ { 2 } V _ { 2 } = v _ { 2 } R T . \tag{17}
\end{align*}
$$

In this process, the change in the internal energy of the gas in the system is equal to

$$
\begin{equation*}
d U = v C _ { V } d T , \tag{18}
\end{equation*}
$$

and if the gas does work $\delta A$ on external bodies, then according to the first law of thermodynamics, under the conditions of vessel thermal insulation as a whole, the supplied amount of heat becomes zero

$$
\begin{equation*}
\delta Q = d U + \delta A = 0 . \tag{19}
\end{equation*}
$$

In a quasi-static process, the work of the gas as a whole consists of the work of the gases in each part of the vessel

$$
\begin{equation*}
\delta A = P _ { 1 } d V _ { 1 } + P _ { 2 } d V _ { 2 } . \tag{20}
\end{equation*}
$$

Writing (18)-(20) together and using equations (3), (6), (7), (9), (10), (14) and (15)-(17), we obtain

$$
\begin{equation*}
\frac { 5 } { T _ { 0 } } d T + \frac { T } { T _ { 1 } V _ { 1 } } d V _ { 1 } + \frac { T } { T _ { 2 } V _ { 2 } } d V _ { 2 } = 0 \tag{21}
\end{equation*}
$$

whose integration gives the final temperature

$$
\begin{equation*}
T _ { f } = T _ { 0 } \left( \frac { T _ { 0 } } { T _ { 1 } } \right) ^ { \frac { T _ { 0 } } { 5 T _ { 1 } } } \left( \frac { T _ { 0 } } { T _ { 2 } } \right) ^ { \frac { T _ { 0 } } { 5 T _ { 2 } } } = 290 \mathrm {~K} . \tag{22}
\end{equation*}
$$

The work done by external forces on the partition to move it is opposite in sign to the work done by the gas itself, therefore, from expressions (16) and (17) the work can easily be found in the form

$$
\begin{equation*}
A ^ { \prime } = - A = \Delta U = v C _ { V } \left( T _ { f } - T _ { 0 } \right) = 5 P _ { 0 } V _ { 0 } \frac { T _ { f } - T _ { 0 } } { T _ { 0 } } = 4.04 \mathrm {~J} . \tag{23}
\end{equation*}
$$

2) Alternative solution. The process of returning the partition to its original position is adiabatic, i.e. occurs without change in entropy

$$
\begin{equation*}
S = \text { const } . \tag{24}
\end{equation*}
$$

The total change in entropy of an ideal gas in both parts of the vessel is equal to:

$$
\begin{equation*}
\Delta S = v _ { 1 } C _ { V } \ln \frac { T _ { f } } { T _ { 0 } } + v _ { 1 } R \ln \frac { V _ { 0 } } { V _ { 01 } } + v _ { 2 } C _ { V } \ln \frac { T _ { f } } { T _ { 0 } } + v _ { 2 } R \ln \frac { V _ { 0 } } { V _ { 02 } } = 0 , \tag{25}
\end{equation*}
$$

from where, using (6), (7), (10), (14), (15) we obtain the final temperature of the system

$$
\begin{equation*}
T _ { f } = T _ { 0 } \left( \frac { T _ { 0 } } { T _ { 1 } } \right) ^ { \frac { T _ { 0 } } { 5 T _ { 1 } } } \left( \frac { T _ { 0 } } { T _ { 2 } } \right) ^ { \frac { T _ { 0 } } { 5 T _ { 2 } } } = 290 \mathrm {~K} . \tag{26}
\end{equation*}
$$

The work of the external force is spent on changing the internal energy of the gas:

$$
\begin{equation*}
A ^ { \prime } = \Delta U = \left( v _ { 1 } + v _ { 2 } \right) C _ { V } \left( T _ { f } - T _ { 0 } \right) = 5 P _ { 0 } V _ { 0 } \frac { T _ { f } - T _ { 0 } } { T _ { 0 } } = 4.04 \mathrm {~J} . \tag{27}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| Formula (1): $U = U _ { 0 }$ | 0.1 |
| Formula (2): $U _ { 0 } = \frac { C _ { V } } { R } P _ { 0 } 2 V _ { 0 }$ | 0.1 |
| Formula (3): $C _ { V } = \frac { 5 } { 2 } R$ | 0.1 |
| Formula (4): $U = \frac { C _ { V } } { R } P \left( 2 V _ { 0 } \right)$ | 0.1 |
| Formula (5): $P = P _ { 0 }$ | 0.4 |
| Formula (6): $P _ { 0 } V _ { 0 } = v _ { 1 } R T _ { 1 }$ | 0.1 |
| Formula (7): $P _ { 0 } V _ { 0 } = v _ { 2 } R T _ { 2 }$ | 0.1 |
| Formula (8): $P _ { 0 } 2 V _ { 0 } = v R T _ { 0 }$ | 0.1 |
| Formula (9): $v = v _ { 1 } + v _ { 2 }$ | 0.1 |
| Formula (10): $T _ { 0 } = \frac { 2 T _ { 1 } T _ { 2 } } { T _ { 1 } + T _ { 2 } }$ | 0.4 |
| Formula (11): $Q = \frac { 7 } { 2 } P _ { 0 } V _ { 0 } \cdot \frac { T _ { 2 } - T _ { 1 } } { T _ { 1 } + T _ { 2 } }$ | 0.4 |


| Numerical value in formula (11): $Q = 70.0 \mathrm {~J}$ | 0.1 |
| :--- | :--- |
| Formula (12): $C _ { p } = C _ { V } + R$ | 0.1 |
| Formula (13): $T = T _ { 1 } = T _ { 2 }$ | 0.4 |
| Formula (14): $V _ { 01 } = \frac { V _ { 0 } T _ { 0 } } { T _ { 1 } }$ | 0.1 |
| Formula (15): $V _ { 02 } = \frac { V _ { 0 } T _ { 0 } } { T _ { 2 } }$ | 0.1 |
| Formula (16): $P _ { 1 } V _ { 1 } = v _ { 1 } R T$ | 0.1 |
| Formula (17): $P _ { 2 } V _ { 2 } = v _ { 2 } R$ | 0.1 |
| Formula (18): $d U = v C _ { V } d T$ | 0.1 |
| Formula (19): $\delta Q = d U + \delta A = 0$ | 0.1 |
| Formula (20): $\delta A = P _ { 1 } d V _ { 1 } + P _ { 2 } d V _ { 2 }$ | 0.1 |
| Formula (21): $\frac { 5 } { T _ { 0 } } d T + \frac { T } { T _ { 1 } V _ { 1 } } d V _ { 1 } + \frac { T } { T _ { 2 } V _ { 2 } } d V _ { 2 } = 0$ | 0.1 |
| Formula (22): $T _ { f } = T _ { 0 } \left( \frac { T _ { 0 } } { T _ { 1 } } \right) ^ { \frac { T _ { 0 } } { 5 T _ { 1 } } } \left( \frac { T _ { 0 } } { T _ { 2 } } \right) ^ { \frac { T _ { 0 } } { 5 T _ { 2 } } }$ | 0.2 |
| Formula (23): $A ^ { \prime } = v C _ { V } \left( T _ { f } - T _ { 0 } \right) = 5 P _ { 0 } V _ { 0 } \frac { T _ { f } - T _ { 0 } } { T _ { 0 } }$ | 0.2 |
| Numerical value in formula (23): $A ^ { \prime } = 4.04 \mathrm {~J}$ | 0.2 |
| Alternative solution to 2) |  |
| Formula (13): $T = T _ { 1 } = T _ { 2 }$ | 0.4 |
| Formula (14): $V _ { 01 } = \frac { V _ { 0 } T _ { 0 } } { T _ { 1 } }$ | 0.1 |
| Formula (15): $V _ { 02 } = \frac { V _ { 0 } T _ { 0 } } { T _ { 2 } }$ | 0.1 |
| Formula (24): $S =$ const. | 0.2 |
| Formula (25): $\Delta S = v _ { 1 } C _ { V } \ln \frac { T _ { f } } { T _ { 0 } } + v _ { 1 } R \ln \frac { V _ { 0 } } { V _ { 01 } } + v _ { 2 } C _ { V } \ln \frac { T _ { f } } { T _ { 0 } } + v _ { 2 } R \ln \frac { V _ { 0 } } { V _ { 02 } } = 0$ | 0.4 |
| Formula (26): $T _ { f } = T _ { 0 } \left( \frac { T _ { 0 } } { T _ { 1 } } \right) ^ { \frac { T _ { 0 } } { 5 T _ { 1 } } } \left( \frac { T _ { 0 } } { T _ { 2 } } \right) ^ { \frac { T _ { 0 } } { 5 T _ { 2 } } }$ | 0.2 |
| Formula (27): $A ^ { \prime } = v C _ { V } \left( T _ { f } - T _ { 0 } \right) = 5 P _ { 0 } V _ { 0 } \frac { T _ { f } - T _ { 0 } } { T _ { 0 } }$ | 0.2 |
| Numerical value in formula (27): $A ^ { \prime } = 4.04 \mathrm {~J}$ | 0.2 |
| Total | 4.0 |

## Problems 1.3 (3.0 points)

The power of the battery is spent on mechanical work of lifting the load, as well as on the power of thermal losses on the internal resistance of the battery $r$ and on the ohmic resistance $R$ of the motor winding. If the torque required to uniformly lift a load of mass $m _ { 1 } = m$ is equal to $M$ and the shaft rotates at an angular speed $\omega _ { 1 } = \varphi / t _ { 1 }$, where $\varphi$ is the angle of rotation of the shaft when lifting the load to the height $h$, then according to the law of conservation of energy:

$$
\begin{equation*}
U I = M \omega _ { 1 } + I ^ { 2 } ( r + R ) , \tag{1}
\end{equation*}
$$

where $U$ is the emf of the battery, $I$ designates the current strength that creates the torque necessary to lift a load of mass $m$.

Taking into account the proportionality of torque to current strength

$$
\begin{equation*}
M = \alpha I , \tag{2}
\end{equation*}
$$

with $\alpha$ being the proportionality coefficient, equation (1) is rewritten in the form

$$
\begin{equation*}
U = \alpha \omega _ { 1 } + I ( r + R ) . \tag{3}
\end{equation*}
$$

Obviously, to uniformly lift a load of mass $m _ { 2 } = 2 m$, twice the torque and, accordingly, twice the current are required. If the shaft rotation speed is equal to $\omega _ { 2 } = \frac { \varphi } { t _ { 2 } }$, where $t _ { 2 } = t _ { 1 } + \Delta t$ is the time of lifting the load $m _ { 2 }$, then the corresponding equation has the form:

$$
\begin{equation*}
U = \alpha \omega _ { 2 } + 2 I ( r + R ) . \tag{4}
\end{equation*}
$$


For uniform lifting of a load with a mass of $m _ { n } = n m$, the required current is equal to $I _ { n } = n I$. If this load is lifted in time $t _ { n }$ at a speed of $\omega _ { n } = \frac { \varphi } { t _ { n } }$, then the corresponding equation looks like this:

$$
\begin{equation*}
U = \alpha \omega _ { n } + n I ( r + R ) . \tag{5}
\end{equation*}
$$

From equations (3)-(5) $\omega _ { n }$ is easily expressed through $\omega _ { 1 } , \omega _ { 2 }$ :

$$
\begin{equation*}
\omega _ { n } = ( n - 1 ) \omega _ { 2 } - ( n - 2 ) \omega _ { 1 } , \tag{6}
\end{equation*}
$$

whence the time for lifting a load of mass $m _ { n }$ is equal to

$$
\begin{equation*}
t _ { n } = \frac { t _ { 1 } t _ { 2 } } { ( n - 1 ) t _ { 1 } - ( n - 2 ) t _ { 2 } } = \frac { t _ { 1 } t _ { 2 } } { t _ { 2 } - ( n - 1 ) \Delta t } . \tag{7}
\end{equation*}
$$

From the condition

$$
\begin{equation*}
t _ { n } > 0 , \tag{8}
\end{equation*}
$$

we find that $n < \frac { t _ { 2 } } { \Delta t } + 1$, which means that the number of loads $n$ should not exceed

$$
\begin{equation*}
n _ { \max } = \left[ \frac { t _ { 2 } } { \Delta t } + 1 \right] = \left[ \frac { t _ { 1 } + 2 \Delta t } { \Delta t } \right] = [ 10,6 \ldots ] = 10 . \tag{9}
\end{equation*}
$$

The lifting time of $n = n _ { \text {max } }$ loads is equal to

$$
\begin{equation*}
t _ { \max } = \frac { t _ { 1 } t _ { 2 } } { t _ { 2 } - \left( n _ { \max } - 1 \right) \Delta t } = \frac { t _ { 1 } \left( t _ { 1 } + \Delta t \right) } { t _ { 1 } - \left( n _ { \max } - 2 \right) \Delta t } = 1.01 \cdot 10 ^ { 3 } \mathrm {~s} . \tag{10}
\end{equation*}
$$

| Content | Points |
| :--- | :--- |
| Formula (1): $U I = M \omega _ { 1 } + I ^ { 2 } ( r + R )$ | 0.3 |
| Formula (2): $M = \alpha I$ | 0.1 |
| Formula (3): $U = \alpha \omega _ { 1 } + I ( r + R )$ | 0.2 |
| Formula (4): $U = \alpha \omega _ { 2 } + 2 I ( r + R )$ | 0.2 |
| Formula (5): $U = \alpha \omega _ { n } + n I ( r + R )$ | 0.2 |
| Formula (6): $\omega _ { n } = ( n - 1 ) \omega _ { 2 } - ( n - 2 ) \omega _ { 1 }$ | 0.2 |
| Formula (7): $t _ { n } = \frac { t _ { 1 } t _ { 2 } } { ( n - 1 ) t _ { 1 } - ( n - 2 ) t _ { 2 } } = \frac { t _ { 1 } t _ { 2 } } { t _ { 2 } - ( n - 1 ) \Delta t }$ | 0.2 |
| Formula (8): $t _ { n } > 0$ | 0.4 |
| Formula (9): $n _ { \text {max } } = \left[ \frac { t _ { 2 } } { \Delta t } + 1 \right] = \left[ \frac { t _ { 1 } + 2 \Delta t } { \Delta t } \right]$ | 0.4 |
| Numerical value in formula (9): $n _ { \text {max } } = 10$ | 0,2 |
| Formula (10): $t _ { \text {max } } = \frac { t _ { 1 } t _ { 2 } } { t _ { 2 } - \left( n _ { \text {max } } - 1 \right) \Delta t } = \frac { t _ { 1 } \left( t _ { 1 } + \Delta t \right) } { t _ { 1 } - \left( n _ { \text {max } } - 2 \right) \Delta t }$ | 0,4 |
| Numerical value in formula (10): $t _ { \text {max } } = 1.01 \cdot 10 ^ { 3 } \mathrm {~s}$ | 0,2 |
| Total | 3.0 |
