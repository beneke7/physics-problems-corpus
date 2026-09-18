---
id: solution-ocr-izho-2015-t-s-q2
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2015_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2015-t-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Vessel with water (7 points)

1. While pouring the water into the vessel the air is compressed and its pressure increases. At the moment when the tube is completely filled with water the air pressure inside the vessel is equal to

$$
\begin{equation*}
p = p _ { 0 } + \rho g \left( L - x _ { 0 } \right) . \tag{1}
\end{equation*}
$$

Since the vessel wall highly conducts heat, the temperature of the air inside the vessel does not change, so the equations of state are

$$
\begin{align*}
& p _ { 0 } S h = v R T _ { 0 } ,  \tag{2}\\
& p S \left( h - x _ { 0 } \right) = v R T _ { 0 } , \tag{3}
\end{align*}
$$

where $S$ is the cross section area of the vessel, $v$ is number of moles of the air inside the vessel.
From Eq. (1) - (3) the following quadratic equation is obtained:

$$
\begin{equation*}
\rho g x _ { 0 } ^ { 2 } - \left[ p _ { 0 } + \rho g ( L + h ) \right] x _ { 0 } + \rho g h L = 0 , \tag{4}
\end{equation*}
$$

which has the obvious solution:

$$
\begin{equation*}
x _ { 0 } = \frac { 1 } { 2 } \left[ \frac { p _ { 0 } } { \rho g } + L + h \pm \sqrt { \left( \frac { p _ { 0 } } { \rho g } + L + h \right) ^ { 2 } - 4 h L } \right] . \tag{5}
\end{equation*}
$$

Among two possible solutions (5), we should choose the one with the less value since it should be $x _ { 0 } = h$ at $p _ { 0 } = 0$ or $x _ { 0 } = 0$ at $L = 0$, that is,

$$
\begin{equation*}
x _ { 0 } = \frac { 1 } { 2 } \left[ \frac { p _ { 0 } } { \rho g } + L + h - \sqrt { \left( \frac { p _ { 0 } } { \rho g } + L + h \right) ^ { 2 } - 4 h L } \right] . \tag{6}
\end{equation*}
$$

Substituting the numerical values gives

$$
\begin{equation*}
x _ { 0 } = 7.86 \cdot 10 ^ { - 2 } \mathrm {~m} . \tag{7}
\end{equation*}
$$

2. The water is at equilibrium and, thus, the air pressure inside the vessel is found as a function of $x$ as follows

$$
\begin{equation*}
p ( x ) = p _ { 0 } + \rho g ( L - x ) . \tag{8}
\end{equation*}
$$

3. Equation of state of an ideal gas for an arbitrary $x$ is given by

$$
\begin{equation*}
p ( x ) S ( h - x ) = v R T ( x ) , \tag{9}
\end{equation*}
$$

which, together with Eq.(1), yields

$$
\begin{equation*}
T ( x ) = T _ { 0 } \left( 1 - \frac { x } { h } \right) \left( 1 + \frac { \rho g ( L - x ) } { p _ { 0 } } \right) . \tag{10}
\end{equation*}
$$

4. The temperature, at which the air displaces water out of the vessel, is determined by the condition $x = 0$, which, in accordance with (10), leads to

$$
\begin{equation*}
T _ { m } = T _ { 0 } \left( 1 + \frac { \rho g L } { p _ { 0 } } \right) , \tag{11}
\end{equation*}
$$

and the corresponding numerical value is evaluated as

$$
\begin{equation*}
T _ { m } = 350 \mathrm {~K} . \tag{12}
\end{equation*}
$$

5. The change of the internal energy of the air is obtained as

$$
\begin{equation*}
\Delta U = \frac { 5 } { 2 } v R \left( T - T _ { 0 } \right) = \frac { 5 } { 2 } \rho g L S h , \tag{13}
\end{equation*}
$$

and the work done by the air to displace the water, is calculated as

$$
\begin{align*}
A = \int _ { 0 } ^ { x _ { 0 } } p ( x ) S d x = \frac { 1 } { 2 } p _ { 0 } S L & \left( 1 + \frac { p _ { 0 } } { 2 \rho g L } + \frac { \rho g L } { 2 p _ { 0 } } \left[ 1 + \frac { 2 h } { L } - \frac { h ^ { 2 } } { L ^ { 2 } } \right] \right) - \\
& - \frac { 1 } { 4 } p _ { 0 } S L \left( 1 + \frac { \rho g ( L - h ) } { p _ { 0 } } \right) \sqrt { \left( 1 + \frac { h } { L } + \frac { p _ { 0 } } { \rho g L } \right) ^ { 2 } - \frac { 4 h } { L } . } \tag{14}
\end{align*}
$$

According to the first law of thermodynamics, the heat given to the air is found as

$$
\begin{equation*}
Q = \Delta U + A , \tag{15}
\end{equation*}
$$

which, together with Eqs. (13) and (14), yields

$$
Q = \frac { 1 } { 2 } p _ { 0 } S L \left( 1 + \frac { p _ { 0 } } { 2 \rho g L } + \frac { \rho g L } { 2 p _ { 0 } } \left[ 1 + \frac { 12 h } { L } - \frac { h ^ { 2 } } { L ^ { 2 } } \right] \right) -
$$


$$
\begin{equation*}
- \frac { 1 } { 4 } p _ { 0 } S L \left( 1 + \frac { \rho g ( L - h ) } { p _ { 0 } } \right) \sqrt { \left( 1 + \frac { h } { L } + \frac { p _ { 0 } } { \rho g L } \right) ^ { 2 } - \frac { 4 h } { L } } . \tag{16}
\end{equation*}
$$

Substituting the numerical values gives

$$
\begin{equation*}
Q = 17.0 \mathrm {~kJ} . \tag{17}
\end{equation*}
$$
