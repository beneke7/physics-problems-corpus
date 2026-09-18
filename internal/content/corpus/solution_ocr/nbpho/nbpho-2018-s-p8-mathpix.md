---
id: solution-ocr-nbpho-2018-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2018-air-submarine]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 8. AIR IN A SUBMARINE

i) We are supposed to calculate the volume rate (in $\frac { \mathrm { m } ^ { 3 } } { s }$ ) at which the water flows in. We know $A = 10 \mathrm {~cm} ^ { 2 }$. We apply Bernoulli's equation, where the initial point is in the sea and the final point is in the hole:

$$
\begin{equation*}
P _ { i } + \underbrace { \frac { 1 } { 2 } \rho v _ { i } ^ { 2 } } _ { = 0 } = P _ { f } + \frac { 1 } { 2 } \rho v _ { f } ^ { 2 } \tag{5}
\end{equation*}
$$

from which we get:

$$
\begin{equation*}
v _ { f } = \sqrt { 2 \frac { \Delta P } { \rho } } \approx \sqrt { 2 g h } = 76.72 \mathrm {~m} / \mathrm { s } . \tag{6}
\end{equation*}
$$

Here $v _ { f }$ is the speed at which the water flows in. This we can insert into the equation for the volume rate:

$$
\begin{equation*}
Q = A v _ { f } = 0.153 \frac { \mathrm {~m} ^ { 3 } } { \mathrm {~s} } \approx 150 \frac { \text { litres } } { \mathrm { s } } . \tag{7}
\end{equation*}
$$

ii) Atmospheric air consists mainly of diatomic nitrogen and oxygen gas. At the temperatures involved these molecules have $f = 5$ degrees of freedom: 3 translational and 2 rotational. The adiabatic constant $\gamma$ is $\gamma = ( f + 2 ) / f = 7 / 5$. One can also obtain this result from $\gamma = \left( c _ { V } + R \right) / c _ { V }$. For adiabatic compression we have

$$
\begin{equation*}
p _ { i } V _ { i } ^ { \gamma } = p _ { f } V _ { f } ^ { \gamma } . \tag{8}
\end{equation*}
$$

The final pressure is the pressure from the sea, which is approximately $p _ { 0 } + \rho g h = \left( 10 ^ { 5 } + 1000 \cdot \right.$ $9.8 \cdot 300 ) \mathrm { Pa } \approx 3 \mathrm { MPa }$. This gives

$$
\begin{equation*}
V _ { f } = V _ { i } \left( \frac { p _ { i } } { p _ { f } } \right) ^ { \frac { 5 } { 7 } } \approx 0.9 \mathrm {~m} ^ { 3 } \tag{9}
\end{equation*}
$$

Note: The final temperature is only about 2.6 times the initial temperature, such that the vibrational degrees of freedom of the molecules does not have to be considered. iii) The work $W$ done on the system (consisting of the whole submarine) by the surrounding water is $W = P _ { c } \Delta V$, where $P _ { c }$ is the constant pressure of the surrounding water. There is no heat exchange, so this work must be equal to the change in internal energy of the system:

$$
\begin{equation*}
W = \Delta U _ { \mathrm { gas } } + \Delta U _ { \mathrm { water } } = c _ { V } n \Delta T + K _ { \mathrm { turb } } \tag{10}
\end{equation*}
$$

where $K _ { \text {turb } }$ is the quantity that we are after and get:

$$
\begin{equation*}
K _ { \text {turb } } = P _ { c } \Delta V - c _ { V } n \Delta T . \tag{11}
\end{equation*}
$$

We need the value of $n$ (NB. you can also figure it out from the ideal gas law):

$$
\begin{equation*}
n = \frac { m } { M } \tag{12}
\end{equation*}
$$

where $m = 1.23 \frac { \mathrm {~kg} } { \mathrm {~m} ^ { 3 } } \cdot 10 \mathrm {~m} ^ { 3 } = 12.3 \mathrm {~kg}$ and $M =$ $0.02897 \frac { \mathrm {~kg} } { \mathrm {~mol} }$. Plugging in the values we get $n \approx$ 424 mol . The final temperature can be calculated from the initial temperature by using that $p ^ { 1 - \gamma } T ^ { \gamma }$ is conserved.

By plugging in all the other values we get:

$$
\begin{equation*}
K _ { \text {turb } } \approx 2.2 \times 10 ^ { 7 } \mathrm {~J} . \tag{13}
\end{equation*}
$$

Alternative solution: Alternatively, one can look at the gas and the water (inside the submarine) as separate subsystems. The work done on the gas is equal to the change in internal energy of the gas:

$$
\begin{equation*}
\int P _ { g } \mathrm {~d} V = c _ { V } n \Delta T . \tag{14}
\end{equation*}
$$

The work done on the water inside the submarine by the water outside the submarine is $P _ { c } \Delta V$. The water inside the submarine also does work on the gas given by $\int P _ { g } \mathrm {~d} V$. The change in internal energy of the water in the submarine is then

$$
\begin{equation*}
K _ { \text {turb } } = P _ { c } \Delta V - \int P _ { g } \mathrm {~d} V = P _ { c } \Delta V - c _ { V } n \Delta T \tag{15}
\end{equation*}
$$

where the last equality follows from eqn (??). From here one proceeds as already written above.
