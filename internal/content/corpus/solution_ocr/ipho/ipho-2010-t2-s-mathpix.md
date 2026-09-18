---
id: solution-ocr-ipho-2010-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2010/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2010-t2]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Solution - Chimney physics

This problem was inspired and posed by using the following two references:

- W.W. Christie, Chimney design and theory, D. Van Nostrand Company, New York, 1902.
- J. Schlaich, R. Bergermann, W. Schiel, G. Weinrebe, Design of Commercial Solar Updraft Tower Systems - Utilization of Solar Induced Convective Flows for Power Generation, Journal of Solar Energy Engineering 127, 117 (2005).

Solution of Task 1

a) What is the minimal height of the chimney needed in order that the chimney functions efficiently, so that it can release all of the produced gas in the atmosphere?

Let $p ( z )$ denote the pressure of air at height $z$; then, according to one of the assumptions $p ( z ) = p ( 0 ) - \rho _ { \text {Air } } g z$, where $p ( 0 )$ is the atmospheric pressure at zero altitude.

Throughout the chimney the Bernoulli law applies, that is, we can write

$$
\begin{equation*}
\frac { 1 } { 2 } \rho _ { \text {Smoke } } v ( z ) ^ { 2 } + \rho _ { \text {Smoke } } g z + p _ { \text {Smoke } } ( z ) = \text { const. } \tag{1}
\end{equation*}
$$

where $p _ { \text {Smoke } } ( Z )$ is the pressure of smoke at height $z , \rho _ { \text {Smoke } }$ is its density, and $v ( z )$ denotes the velocity of smoke; here we have used the assumption that the density of smoke does not vary throughout the chimney. Now we apply this equation at two points, (i) in the furnace, that is at point $z = - \varepsilon$, where $\varepsilon$ is a negligibly small positive number, and (ii) at the top of the chimney where $z = h$ to obtain:

$$
\begin{equation*}
\frac { 1 } { 2 } \rho _ { \text {Smoke } } v ( h ) ^ { 2 } + \rho _ { \text {Smoke } } g h + p _ { \text {Smoke } } ( h ) \approx p _ { \text {Smoke } } ( - \varepsilon ) \tag{2}
\end{equation*}
$$

On the right hand side we have used the assumption that the velocity of gases in the furnace is negligible (and also $- \rho _ { \text {Smoke } } g \varepsilon \approx 0$ ).

We are interested in the minimal height at which the chimney will operate. The pressure of smoke at the top of the chimney has to be equal or larger than the pressure of air at altitude $h$; for minimal height of the chimney we have $p _ { \text {Smoke } } ( h ) \approx p ( h )$. In the furnace we can use $p _ { \text {Smoke } } ( - \varepsilon ) \approx p ( 0 )$. The Bernoulli law applied in the furnace and at the top of the chimney [Eq. (2)] now reads

| $\frac { 1 } { 2 } \rho _ { \text {Smoke } } v ( h ) ^ { 2 } + \rho _ { \text {Smoke } } g h + p ( h ) \approx p ( 0 )$. | (3) |
| :--- | :--- |

From this we get

$$
\begin{equation*}
v ( h ) = \sqrt { 2 g h \left( \frac { \rho _ { \text {Air } } } { \rho _ { \text {Smoke } } } - 1 \right) } . \tag{4}
\end{equation*}
$$

The chimney will be efficient if all of its products are released in the atmosphere, i.e.,


| $v ( h ) \geq \frac { B } { A }$, | (5) |
| :--- | :--- |

from which we have

| $h \geq \frac { B ^ { 2 } } { A ^ { 2 } } \frac { 1 } { 2 g } \frac { 1 } { \frac { \rho _ { \text {Air } } } { \rho _ { \text {Smoke } } } - 1 }$. | (6) |
| :--- | :--- |

We can treat the smoke in the furnace as an ideal gas (which is at atmospheric pressure $p ( 0 )$ and temperature $T _ { \text {Smoke } }$ ). If the air was at the same temperature and pressure it would have the same density according to our assumptions. We can use this to relate the ratio $\rho _ { \text {Air } } / \rho _ { \text {Smoke } }$ to $T _ { \text {Smoke } } / T _ { \text {Air } }$ that is,

| $\frac { \rho _ { \text {Air } } } { \rho _ { \text {Smoke } } } = \frac { T _ { \text {Smoke } } } { T _ { \text {Air } } }$, and finally | (7) |
| :--- | :--- |
| $h \geq \frac { B ^ { 2 } } { A ^ { 2 } } \frac { 1 } { 2 g } \frac { T _ { \text {Air } } } { T _ { \text {Smoke } } - T _ { \text {Air } } } = \frac { B ^ { 2 } } { A ^ { 2 } } \frac { 1 } { 2 g } \frac { T _ { \text {Air } } } { \Delta T }$. | (8) |

For minimal height of the chimney we use the equality sign.

b)How high should the chimney in warm regions be?

| $\frac { h ( 30 ) } { h ( - 30 ) } = \frac { \frac { T ( 30 ) } { T _ { \text {Smoke } } - T ( 30 ) } } { \frac { T ( - 30 ) } { T _ { \text {Smoke } } - T ( - 30 ) } } ; h ( 30 ) = 145 m .$ | (9) |
| :--- | :--- |
c) How does the velocity of the gases vary along the height of the chimney?
The velocity is constant,
$$
\begin{equation*}
v = \sqrt { 2 g h \left( \frac { \rho _ { \text {Air } } } { \rho _ { \text {Smoke } } } - 1 \right) } = \sqrt { 2 g h \left( \frac { T _ { \text {Smoke } } } { T _ { \text {Air } } } - 1 \right) } = \sqrt { 2 g h \frac { \Delta T } { T _ { \text {Air } } } } . \tag{10}
\end{equation*}
$$
This can be seen from the equation of continuity $A v = \operatorname { const } . \left( \rho _ { \text {Smoke } } \right.$ is constant $)$. It has a sudden jump from approximately zero velocity to this constant value when the gases enter the chimney from the furnace. In fact, since the chimney operates at minimal height this constant is equal to $B$, that is $v = B / A$.
d) At some height $z$, from the Bernoulli equation one gets
$$
\begin{equation*}
p _ { \text {smoke } } ( z ) = p ( 0 ) - \left( \rho _ { \text {Air } } - \rho _ { \text {Smoke } } \right) g h - \rho _ { \text {Smoke } } g z . \tag{11}
\end{equation*}
$$
Thus the pressure of smoke suddenly changes as it enters the chimney from the furnace and acquires velocity.

Solution of Task 2
a) The kinetic energy of the hot air released in a time interval $\Delta t$ is

| $E _ { k i n } = \frac { 1 } { 2 } \left( A v \Delta t \rho _ { H o t } \right) v ^ { 2 } = A v \Delta t \rho _ { H o t } g h \frac { \Delta T } { T _ { A t m } }$, | (12) |
| :--- | :--- |

Where the index "Hot" refer to the hot air heated by the Sun. If we denote the mass of the air that exits the chimney in unit time with $w = A v \rho _ { \text {Hot } }$, then the power which corresponds to kinetic energy above is

| $P _ { k i n } = w g h \frac { \Delta T } { T _ { A i r } }$. | (13) |
| :--- | :--- |

This is the maximal power that can be obtained from the kinetic energy of the gas flow.
The Sun power used to heat the air is

| $P _ { \text {Sun } } = G S = w c \Delta T$. | (14) |
| :--- | :--- |

The efficiency is evidently

| $\eta = \frac { P _ { \text {kin } } } { P _ { \text {Sun } } } = \frac { g h } { c T _ { \text {Atm } } }$. | (15) |
| :--- | :--- |

b) The change is apparently linear.

Solution of Task 3

a)The efficiency is

| $\eta = \frac { g h } { c T _ { \text {Atm } } } = 0.0064 = 0.64 \%$. | (16) |
| :--- | :--- |
b)The power is

| $P = G S \eta = G ( D / 2 ) ^ { 2 } \pi \eta = 45 \mathrm {~kW}$. | (17) |
| :--- | :--- |
c) If there are 8 sunny hours per day we get 360 kWh .

Solution of Task 4
The result can be obtained by expressing the mass flow of air $w$ as

| $w = A v \rho _ { H o t } = A \sqrt { 2 g h \frac { \Delta T } { T _ { \text {Air } } } } \rho _ { H o t }$ | (18) |
| :--- | :--- |
| $w = \frac { G S } { c \Delta T }$ | (19) |

which yields

| $\Delta T = \left( \frac { G ^ { 2 } S ^ { 2 } T _ { \text {Atm } } } { A ^ { 2 } c ^ { 2 } \rho _ { \text {Hot } } ^ { 2 } 2 g h } \right) ^ { 1 / 3 } \approx 9.1 \mathrm {~K}$. | (20) |
| :--- | :--- |


From this we get

| $w = 760 \mathrm {~kg} / \mathrm { s }$. | (21) |
| :--- | :--- |
