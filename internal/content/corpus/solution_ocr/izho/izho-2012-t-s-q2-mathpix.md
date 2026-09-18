---
id: solution-ocr-izho-2012-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2012_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2012-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2 <br> Adventures of a piston (10 points)

2.1. [0.5 points] From the equilibrium condition of the piston, we find pressure of the gas

$$
\begin{equation*}
p _ { 1 } = p _ { 0 } + \frac { M g } { S } = p _ { 0 } ( 1 + \alpha ) = 1.99 \times 10 ^ { 5 } \mathrm {~Pa} \tag{1}
\end{equation*}
$$

2.2 and 2.3. [2 points] In the first stage the gas is compressed and heats up to a certain temperature. Because the vessel wall and the piston are made of a material that conducts heat poorly, gas compression can be assumed to be adiabatic, but the process is not equilibrium and we cannot use the adiabatic equation. In the transition from the initial to the final state of the system piston+gas by external forces (gravity and atmospheric pressure) have made the work

$$
\begin{equation*}
A = M g \left( H - H _ { 1 } \right) + p _ { 0 } S \left( H - H _ { 1 } \right) = \left( M g + p _ { 0 } S \right) \left( H - H _ { 1 } \right) \tag{2}
\end{equation*}
$$

By hypothesis, only half of this work is to increase the internal energy of the gas

$$
\begin{equation*}
\Delta U = \frac { A } { 2 } \tag{3}
\end{equation*}
$$

Where

$$
\begin{equation*}
\Delta U = \frac { v R } { \gamma - 1 } \left( T _ { 1 } - T _ { 0 } \right) \tag{4}
\end{equation*}
$$

Here, ${ } ^ { v }$ is the number of moles, $R$ is the universal gas constant. We write the equation of state of ideal gas for the initial and final states

$$
\begin{gather*}
p _ { 0 } S H = v R T _ { 0 }  \tag{5}\\
\left( p _ { 0 } + \frac { M g } { S } \right) S H _ { 1 } = v R T _ { 1 } \tag{6}
\end{gather*}
$$

Solving system of equations (2) - (6), we obtain

$$
\begin{gather*}
T _ { 1 } = T _ { 0 } \left( 1 + \frac { \gamma - 1 } { \gamma + 1 } \frac { M g } { p _ { 0 } S } \right) = T _ { 0 } \left( 1 + \frac { \gamma - 1 } { \gamma + 1 } \alpha \right) = 317  \tag{7}\\
H _ { 1 } = \frac { H } { \left( 1 + M g / p _ { 0 } S \right) } \left( 1 + \frac { \gamma - 1 } { \gamma + 1 } \frac { M g } { p _ { 0 } S } \right) = \frac { H } { ( 1 + \alpha ) } \left( 1 + \frac { \gamma - 1 } { \gamma + 1 } \alpha \right) = 17.7 \mathrm {~cm} , \tag{8}
\end{gather*}
$$

2.4. [0.5 points] As the piston continues to be in equilibrium, the pressure

$$
\begin{equation*}
p _ { 2 } = p _ { 0 } + \frac { M g } { S } = p _ { 0 } ( 1 + \alpha ) = 1.99 \times 10 ^ { 5 } \mathrm {~Pa} . \tag{9}
\end{equation*}
$$

2.5. [0.5 points] After a sufficiently long period of time the gas temperature inside the vessel will be equal to the ambient temperature, i.e., becomes equal to

$$
\begin{equation*}
T _ { 2 } = T _ { 0 } = 273 \mathrm {~K} . \tag{10}
\end{equation*}
$$

2.6. [0.5 points] The height $H _ { 2 }$ is found by (9) and (10), as well as the equation of state of gas

$$
\begin{equation*}
H _ { 2 } = \frac { p _ { 0 } S } { p _ { 0 } S + M g } H = \frac { H } { 1 + \alpha } = 15.2 \mathrm {~cm} \tag{11}
\end{equation*}
$$

2.7. [2 points] Adiabatic equation of the form

$$
\begin{equation*}
p V ^ { \gamma } = \text { const } \tag{12}
\end{equation*}
$$

we obtain


$$
\begin{equation*}
d p = - \gamma p \frac { d V } { V } . \tag{13}
\end{equation*}
$$

Let piston has deviated from its equilibrium position at a small height ${ } ^ { x }$, then by (13) is equal to the pressure change

$$
\begin{equation*}
\delta p = - \gamma p _ { 2 } \frac { x } { H _ { 2 } } = - \gamma \frac { \left( p _ { 0 } S + M g \right) ^ { 2 } } { p _ { 0 } S ^ { 2 } H } x \tag{14}
\end{equation*}
$$

The equation of motion of the piston can be written as

$$
\begin{equation*}
M \ddot { x } = - \delta p S = - \gamma \frac { \left( p _ { 0 } S + M g \right) ^ { 2 } } { p _ { 0 } S H } x \tag{15}
\end{equation*}
$$

whence we obtain the frequency of small oscillations

$$
\begin{equation*}
\omega = \left( p _ { 0 } S + M g \right) \sqrt { \frac { \gamma } { p _ { 0 } S H M } } = ( 1 + \alpha ) \sqrt { \frac { \gamma g } { \alpha H } } = 13.5 \mathrm {~Hz} . \tag{16}
\end{equation*}
$$

2.8. [1 point] When moving with constant velocity piston continues to be in equilibrium, so the pressure

$$
\begin{equation*}
p _ { 3 } = p _ { 0 } + \frac { M g } { S } = p _ { 0 } ( 1 + \alpha ) = 1.99 \times 10 ^ { 5 } \mathrm {~Pa} , \tag{17}
\end{equation*}
$$

that is

$$
\begin{equation*}
A = p _ { 0 } , f ( \alpha ) = 1 + \alpha \tag{18}
\end{equation*}
$$

2.9 and 2.10. [3 points] Suppose a vessel to establish certain temperature. There should be must be a balance in the number of particles and energy. The law of conservation of particles is given by

$$
\begin{equation*}
\frac { p _ { 0 } + \frac { M g } { S } } { k _ { B } T _ { 3 } } u S = \frac { p _ { 0 } + \frac { M g } { S } } { k _ { B } T _ { 3 } } \sqrt { \frac { 8 k _ { B } T _ { 3 } } { \pi m } } S _ { O } - \frac { p _ { 0 } } { k _ { B } T _ { 0 } } \sqrt { \frac { 8 k _ { B } T _ { 0 } } { \pi m } } S _ { O } \tag{19}
\end{equation*}
$$

For the law of conservation of energy it is necessary to consider not only kinetic but also the rotational energy of each molecule. Therefore, the total energy carried by each molecule is

$$
\begin{equation*}
W _ { \text {tot } } = \bar { W } + W _ { \text {rot } } = 2 k _ { B } T + k _ { B } T = 3 k _ { B } T \tag{20}
\end{equation*}
$$

then the energy conservation law can be written as

$$
\begin{equation*}
\left( p _ { 0 } S + M g \right) u = \frac { p _ { 0 } + \frac { M g } { S } } { k _ { B } T _ { 3 } } \sqrt { \frac { 8 k _ { B } T _ { 3 } } { \pi m } } 3 k _ { B } T _ { 3 } S _ { O } - \frac { p _ { 0 } } { k _ { B } T _ { 0 } } \sqrt { \frac { 8 k _ { B } T _ { 0 } } { \pi m } } 3 k _ { B } T _ { 0 } S _ { O } \tag{21}
\end{equation*}
$$

Solving (18) and (19), we finally obtain

$$
\begin{equation*}
u = \frac { 6 S _ { O } } { S } \sqrt { \frac { 2 R T _ { 0 } } { \pi \mu } } \left( ( \alpha + 1 ) \sqrt { 4 + 2 \alpha + \alpha ^ { 2 } } - 2 - 2 \alpha - \alpha ^ { 2 } \right) = 1.91 \times 10 ^ { - 3 } \mathrm {~m} / \mathrm { s } , \tag{22}
\end{equation*}
$$

that is

$$
\begin{equation*}
B = \frac { 6 S _ { O } } { S } \sqrt { \frac { 2 R T _ { 0 } } { \pi \mu } } , \quad g ( \alpha ) = ( \alpha + 1 ) \sqrt { 4 + 2 \alpha + \alpha ^ { 2 } } - 2 - 2 \alpha - \alpha ^ { 2 } , \tag{23}
\end{equation*}
$$

and temperature

$$
\begin{equation*}
T _ { 3 } = T _ { 0 } \left( 5 + 4 \alpha + 2 \alpha ^ { 2 } - 2 ( \alpha + 1 ) \sqrt { 4 + 2 \alpha + \alpha ^ { 2 } } \right) = 116 \mathrm {~K} , \tag{24}
\end{equation*}
$$

that is


$$
\begin{equation*}
C = T _ { 0 } , h ( \alpha ) = 5 + 4 \alpha + 2 \alpha ^ { 2 } - 2 ( \alpha + 1 ) \sqrt { 4 + 2 \alpha + \alpha ^ { 2 } } . \tag{25}
\end{equation*}
$$
