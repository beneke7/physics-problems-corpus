---
id: solution-ocr-ipho-2016-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2016/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2016-t3]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Problem 3 : Solution/marking scheme - Large Hadron Collider (10 points)

Part A. LHC Accelerator (6 points)

A1 (0.7 pt) Find the exact expression for the final velocity $v$ of the protons as a function of the accelerating voltage $V$, and fundamental constants.

Solution A1:

Conservation of energy:

$$
m _ { p } \cdot c ^ { 2 } + V \cdot e = m _ { p } \cdot c ^ { 2 } \cdot \gamma = \frac { m _ { p } \cdot c ^ { 2 } } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } }
$$

Penalties
No or incorrect total energy
Missing rest mass
Solve for velocity:

$$
v = c \cdot \sqrt { 1 - \left( \frac { m _ { p } \cdot c ^ { 2 } } { m _ { p } \cdot c ^ { 2 } + V \cdot e } \right) ^ { 2 } }
$$

without proton rest mass:

$$
V \cdot e \simeq m _ { p } \cdot c ^ { 2 } \cdot \gamma = \frac { m _ { p } \cdot c ^ { 2 } } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } }
$$

Solve for velocity:

$$
v = c \cdot \sqrt { 1 - \left( \frac { m _ { p } \cdot c ^ { 2 } } { V \cdot e } \right) ^ { 2 } }
$$

Classical solution:

$$
v = \sqrt { \frac { 2 \cdot e \cdot V } { m _ { p } } }
$$


A2 (0.8 pt) For particles with high energy and low rest mass the relative deviation $\Delta = ( c - v ) / c$ of the final velocity $v$ from the speed of light is very small. Find a suitable approximation for $\Delta$ and calculate $\Delta$ for electrons with an energy of 60.0 GeV.

Solution A2:
velocity (from previous question):

$$
\begin{equation*}
v = c \cdot \sqrt { 1 - \left( \frac { m _ { e } \cdot c ^ { 2 } } { m _ { e } \cdot c ^ { 2 } + V \cdot e } \right) ^ { 2 } } \text { or } c \cdot \sqrt { 1 - \left( \frac { m _ { e } \cdot c ^ { 2 } } { V \cdot e } \right) ^ { 2 } } \tag{0.1}
\end{equation*}
$$

relative difference:

$$
\begin{gather*}
\Delta = \frac { c - v } { c } = 1 - \frac { v } { c }  \tag{0.1}\\
\rightarrow \Delta \simeq \frac { 1 } { 2 } \left( \frac { m _ { e } \cdot c ^ { 2 } } { m _ { e } \cdot c ^ { 2 } + V \cdot e } \right) ^ { 2 } \text { or } \frac { 1 } { 2 } \left( \frac { m _ { e } \cdot c ^ { 2 } } { V \cdot e } \right) ^ { 2 } \tag{0.4}
\end{gather*}
$$

relative difference

$$
\Delta = 3.63 \cdot 10 ^ { - 11 }
$$

classical solution gives no points


A3 (1.0 pt) Derive an expression for the uniform magnetic flux density $B$ necessary to keep the proton beam on a circular track. The expression should only contain the energy of the protons $E$, the circumference $L$, fundamental constants and numbers. You may use suitable approximations if their effect is smaller than the precision given by the least number of significant digits. Calculate the magnetic flux density $B$ for a proton energy of $E = 7.00 \mathrm { TeV }$.

Solution A3:

Balance of forces:

$$
\frac { \gamma \cdot m _ { p } \cdot v ^ { 2 } } { r } = \frac { m _ { p } \cdot v ^ { 2 } } { r \cdot \sqrt { 1 - \frac { v ^ { 2 } } { c ^ { 2 } } } } = e \cdot v \cdot B
$$

In case of a mistake, partial points can be given for intermediate steps (up to max 0.2). Examples:

$$
\begin{array} { l l }
\text { Example: } & \text { Lorentz force } \\
\text { Example: } & \frac { \gamma \cdot m _ { p } \cdot v ^ { 2 } } { r }
\end{array}
$$

Energy:

$$
E = ( \gamma - 1 ) \cdot m _ { p } \cdot c ^ { 2 } \simeq \gamma \cdot m _ { p } \cdot c ^ { 2 } \rightarrow \gamma = \frac { E } { m _ { p } c ^ { 2 } }
$$

Therefore:

$$
\frac { E \cdot v } { c ^ { 2 } \cdot r } = e \cdot B
$$

With

$$
v \simeq c \text { and } r = \frac { L } { 2 \pi }
$$

follows:

$$
\rightarrow B = \frac { 2 \pi \cdot E } { e \cdot c \cdot L }
$$

Solution:

$$
B = 5.50 \mathrm {~T}
$$

Penalty for < 2 or > 4 significant digits
Calculation without approximations is also correct but does not give more points

$$
B = \frac { 2 \pi \cdot m _ { p } \cdot c } { e \cdot L } \cdot \sqrt { \left( \frac { E } { m _ { p } \cdot c ^ { 2 } } \right) ^ { 2 } - \left( 1 + \frac { m \cdot c ^ { 2 } } { E } \right) ^ { 2 } }
$$

Penalty for each algebraic mistake

Classical calulation gives completely wrong result and maximum 0.3 pt

$$
\begin{gathered}
\frac { m _ { p } \cdot v ^ { 2 } } { r } = e \cdot v \cdot B \\
B = \frac { 2 \pi } { L \cdot e } \sqrt { 2 \cdot m _ { p } \cdot E }
\end{gathered}
$$


$$
B = 0.0901 \mathrm {~T}
$$

Penalty for < 2 or > 4 significant digits


A4 (1.0 pt) An accelerated charged particle radiates energy in the form of electromagnetic waves. The radiated power $P _ { \text {rad } }$ of a charged particle that circulates with a constant angular velocity depends only on its acceleration a, its charge $q$, the speed of light $c$ and the permittivity of free space $\epsilon _ { 0 }$. Use a dimensional analysis to find an expression for the radiated power $P _ { \text {rad } }$.

Solution A4:

Ansatz:

$$
P _ { r a d } = a ^ { \alpha } \cdot q ^ { \beta } \cdot c ^ { \gamma } \cdot \epsilon _ { 0 } ^ { \delta }
$$

Dimensions: $[ \mathrm { a } ] = \mathrm { ms } ^ { - 2 } , [ \mathrm { q } ] = \mathrm { C } = \mathrm { As } , [ \mathrm { c } ] = \mathrm { ms } ^ { - 1 } , \left[ \epsilon _ { 0 } \right] = \mathrm { As } ( \mathrm { Vm } ) ^ { - 1 } = \mathrm { A } ^ { 2 } \mathrm {~s} ^ { 2 } \left( \mathrm { Nm } ^ { 2 } \right) ^ { - 1 } = \mathrm { A } ^ { 2 } \mathrm {~s} ^ { 4 } \left( \mathrm { kgm } ^ { 3 } \right) ^ { - 1 }$

All dimensions correct
Three dimensions correct
Two dimensions correct
if dimensions: N and Coulomb $\left[ \epsilon _ { 0 } \right] = \mathrm { C } ^ { 2 } \left( \mathrm { Nm } ^ { 2 } \right) ^ { - 1 }$

$$
\frac { \mathrm { m } ^ { \alpha } } { \mathrm { s } ^ { 2 \alpha } } \cdot \mathrm { C } ^ { \beta } \cdot \frac { \mathrm { m } ^ { \gamma } } { \mathrm { s } ^ { \gamma } } \cdot \frac { \mathrm { C } ^ { 2 \delta } } { \mathrm {~N} ^ { \delta } \cdot \mathrm { m } ^ { 2 \delta } } = \frac { \mathrm { N } \cdot \mathrm {~m} } { \mathrm {~s} }
$$

From this follows:

$$
\mathrm { N } : \rightarrow \delta = - 1 , \quad \mathrm { C } : \rightarrow \beta + 2 \cdot \delta = 0 , \quad \mathrm {~m} : \rightarrow \alpha + \gamma - 2 \delta = 1 , \quad \mathrm {~s} : \rightarrow 2 \cdot \alpha + \gamma = 1
$$

Two equations correct
And therefore:

$$
\rightarrow \alpha = 2 , \beta = 2 , \gamma = - 3 , \delta = - 1
$$

if dimensions: N and $\mathrm { As } \left[ \epsilon _ { 0 } \right] = \mathrm { A } ^ { 2 } \mathrm {~s} ^ { 2 } \left( \mathrm { Nm } ^ { 2 } \right) ^ { - 1 }$

$$
\frac { \mathrm { m } ^ { \alpha } } { \mathrm { s } ^ { 2 \alpha } } \cdot \mathrm {~A} ^ { \beta } \cdot \mathrm { s } ^ { \beta } \cdot \frac { \mathrm { m } ^ { \gamma } } { \mathrm { s } ^ { \gamma } } \cdot \frac { \mathrm { A } ^ { 2 \delta } \cdot \mathrm {~s} ^ { 2 \delta } } { \mathrm {~N} ^ { \delta } \cdot \mathrm { m } ^ { 2 \delta } } = \frac { \mathrm { N } \cdot \mathrm {~m} } { \mathrm {~s} }
$$

From this follows:

$$
N : \rightarrow \delta = - 1 , \quad \mathrm {~A} : \rightarrow \beta + 2 \cdot \delta = 0 , \quad \mathrm {~m} : \rightarrow \alpha + \gamma - 2 \delta = 1 , \quad \mathrm {~s} : \rightarrow - 2 \cdot \alpha + \beta - \gamma + 2 \delta = - 1
$$

Two equations correct
And therefore:

$$
\rightarrow \alpha = 2 , \beta = 2 , \gamma = - 3 , \delta = - 1
$$

if dimensions: kg and As $\left[ \epsilon _ { 0 } \right] = \mathrm { A } ^ { 2 } \mathrm {~s} ^ { 4 } \left( \mathrm {~kg} \cdot \mathrm {~m} ^ { 3 } \right) ^ { - 1 }$

$$
\frac { \mathrm { m } ^ { \alpha } } { \mathrm { s } ^ { 2 \alpha } } \cdot \mathrm {~A} ^ { \beta } \cdot \mathrm { s } ^ { \beta } \cdot \frac { \mathrm { m } ^ { \gamma } } { \mathrm { s } ^ { \gamma } } \cdot \frac { \mathrm { A } ^ { 2 \delta } \cdot \mathrm {~s} ^ { 4 \delta } } { \mathrm {~kg} ^ { \delta } \cdot \mathrm { m } ^ { 3 \delta } } = \frac { \mathrm { kg } \cdot \mathrm {~m} ^ { 2 } } { s ^ { 3 } }
$$


From this follows:

$$
\mathrm { kg } : \rightarrow \delta = - 1 , \quad \mathrm {~A} : \rightarrow \beta + 2 \cdot \delta = 0 , \quad \mathrm {~m} : \rightarrow \alpha + \gamma - 3 \delta = 2 , \quad \mathrm {~s} : \rightarrow - 2 \cdot \alpha + \beta - \gamma + 4 \delta = - 3
$$

Two equations correct
And therefore:

$$
\rightarrow \alpha = 2 , \beta = 2 , \gamma = - 3 , \delta = - 1
$$

Radiated Power:

$$
P _ { r a d } \propto \frac { a ^ { 2 } \cdot q ^ { 2 } } { c ^ { 3 } \cdot \epsilon _ { 0 } }
$$

Other solutions with other units are possible and are accepted No solution but realise that unit of charge must vanish $\beta = 2 \delta$


A5 (1.0 pt) Calculate the total radiated power $P _ { \text {tot } }$ of the LHC for a proton energy of $E = 7.00 \mathrm { TeV }$ (Note table 1). You may use appropriate approximations.

Solution A5:

Radiated Power:

$$
P _ { r a d } = \frac { \gamma ^ { 4 } \cdot a ^ { 2 } \cdot e ^ { 2 } } { 6 \pi \cdot c ^ { 3 } \cdot \epsilon _ { 0 } }
$$

Energy:

$$
E = ( \gamma - 1 ) m _ { p } \cdot c ^ { 2 } \text { or equally valid } E \simeq \gamma \cdot m _ { p } \cdot c ^ { 2 }
$$

Acceleration:

$$
a \simeq \frac { c ^ { 2 } } { r } \text { with } r = \frac { L } { 2 \pi }
$$

Therefore:

$$
\begin{gathered}
P _ { r a d } = \left( \frac { E } { m _ { p } c ^ { 2 } } + 1 \right) ^ { 4 } \cdot \frac { e ^ { 2 } \cdot c } { 6 \pi \epsilon _ { 0 } \cdot r ^ { 2 } } \text { or } \left( \frac { E } { m _ { p } c ^ { 2 } } \right) ^ { 4 } \cdot \frac { e ^ { 2 } \cdot c } { 6 \pi \epsilon _ { 0 } \cdot r ^ { 2 } } \\
\left( \text { not required } P _ { r a d } = 7.94 \cdot 10 ^ { - 12 } \mathrm {~W} \right)
\end{gathered}
$$

Total radiated power:

$$
P _ { t o t } = 2 \cdot 2808 \cdot 1.15 \cdot 10 ^ { 11 } \cdot P _ { r a d } = 5.13 \mathrm {~kW}
$$

penalty for missing factor 2 (for the two beams): -0.1
penalty for wrong numbers 2808 and/or $1.15 \cdot 10 ^ { 11 }$ (numbers come from table 1): -0.1


A6 (1.5 pt) Determine the time $T$ that the protons need to pass through this field.

Solution A6:

2nd Newton's law

$$
\begin{gather*}
F = \frac { d p } { d t } \quad \text { leads to }  \tag{0.2}\\
\frac { V \cdot e } { d } = \frac { p _ { f } - p _ { i } } { T } \text { with } p _ { i } = 0 \tag{0.3}
\end{gather*}
$$

Conservation of energy:

$$
\begin{equation*}
E _ { t o t } = m \cdot c ^ { 2 } + e \cdot V \tag{0.2}
\end{equation*}
$$

Since

$$
\begin{gathered}
E _ { t o t } ^ { 2 } = \left( m \cdot c ^ { 2 } \right) ^ { 2 } + \left( p _ { f } \cdot c \right) ^ { 2 } \\
\rightarrow p _ { f } = \frac { 1 } { c } \cdot \sqrt { \left( m \cdot c ^ { 2 } + e \cdot V \right) ^ { 2 } - \left( m \cdot c ^ { 2 } \right) ^ { 2 } } = \sqrt { 2 e \cdot m \cdot V + \left( \frac { e \cdot V } { c } \right) ^ { 2 } } \\
\rightarrow T = \frac { d \cdot p _ { f } } { V \cdot e } = \frac { d } { V \cdot e } \sqrt { 2 e \cdot m _ { p } \cdot V + \left( \frac { e \cdot V } { c } \right) ^ { 2 } } \\
T = 218 \mathrm {~ns}
\end{gathered}
$$

Alternative solution
2nd Newton's law

$$
\begin{gathered}
F = \frac { d p } { d t } \quad \text { leads to } \\
\frac { V \cdot e } { d } = \frac { p _ { f } - p _ { i } } { T } \text { with } p _ { i } = 0
\end{gathered}
$$

velocity from A1 or from conservation of energy

$$
\begin{equation*}
v = c \cdot \sqrt { 1 - \left( \frac { m _ { p } \cdot c ^ { 2 } } { m _ { p } \cdot c ^ { 2 } + V \cdot e } \right) ^ { 2 } } \tag{0.2}
\end{equation*}
$$

and hence for $\gamma$

$$
\begin{gather*}
\gamma = 1 / \sqrt { 1 - \frac { v ^ { 2 } } { c ^ { 2 } } } = 1 + \frac { e \cdot V } { m _ { p } \cdot c ^ { 2 } }  \tag{0.2}\\
\rightarrow p _ { f } = \gamma \cdot m _ { p } \cdot v = \left( 1 + \frac { e \cdot V } { m _ { p } \cdot c ^ { 2 } } \right) \cdot m _ { p } \cdot c \cdot \sqrt { 1 - \left( \frac { m _ { p } \cdot c ^ { 2 } } { m _ { p } \cdot c ^ { 2 } + V \cdot e } \right) ^ { 2 } }  \tag{0.2}\\
\rightarrow T = \frac { d \cdot p _ { f } } { V \cdot e } = \frac { d \cdot m _ { p } \cdot c } { V \cdot e } \cdot \sqrt { \left( \frac { m _ { p } \cdot c ^ { 2 } + e \cdot V } { m _ { p } \cdot c ^ { 2 } } \right) ^ { 2 } - 1 } = \frac { d } { V \cdot e } \sqrt { 2 e \cdot m _ { p } \cdot V + \left( \frac { e \cdot V } { c } \right) ^ { 2 } }  \tag{0.3}\\
T = 218 \mathrm {~ns} \tag{0.1}
\end{gather*}
$$

Alternative solution: integrate time
[1.5]


Energy increases linearly with distance x

$$
\begin{gather*}
E ( x ) = \frac { e \cdot V \cdot x } { d }  \tag{0.2}\\
t = \int d t = \int _ { 0 } ^ { d } \frac { d x } { v ( x ) }  \tag{0.2}\\
v ( x ) = c \cdot \sqrt { 1 - \left( \frac { m _ { p } \cdot c ^ { 2 } } { m _ { p } \cdot c ^ { 2 } + \frac { e \cdot V \cdot x } { d } } \right) ^ { 2 } } = c \cdot \frac { \sqrt { \left( m _ { p } \cdot c ^ { 2 } + \frac { e \cdot V \cdot x } { d } \right) ^ { 2 } - \left( m _ { p } \cdot c ^ { 2 } \right) ^ { 2 } } } { m _ { p } \cdot c ^ { 2 } + \frac { e \cdot V \cdot x } { d } } \\
= c \cdot \frac { \sqrt { \left( 1 + \frac { e \cdot V \cdot x } { d \cdot m _ { p } \cdot c ^ { 2 } } \right) ^ { 2 } - 1 } } { 1 + \frac { e \cdot V \cdot x } { d \cdot m _ { p } \cdot c ^ { 2 } } }  \tag{0.2}\\
\text { Substitution : } \xi = \frac { e \cdot V \cdot x } { d \cdot m _ { p } \cdot c ^ { 2 } } \quad \frac { d \xi } { d x } = \frac { e \cdot V } { d \cdot m _ { p } \cdot c ^ { 2 } }  \tag{0.2}\\
\rightarrow t = \frac { 1 } { c } \int _ { 0 } ^ { b } \frac { 1 + \xi } { \sqrt { ( 1 + \xi ) ^ { 2 } - 1 } } \frac { d \cdot m _ { p } \cdot c ^ { 2 } } { e \cdot V } d \xi  \tag{0.2}\\
1 + \xi : = \cosh ( s ) \quad \frac { d \xi } { d s } = \sinh ( s )  \tag{0.1}\\
t = \frac { m _ { p } \cdot c \cdot d } { e \cdot V } \int \frac { \cosh ( s ) \cdot \sinh ( s ) d s } { \sqrt { \cosh { } ^ { 2 } ( s ) - 1 } } = \frac { m _ { p } \cdot c \cdot d } { e \cdot V } [ \sinh ( s ) ] _ { b _ { 1 } } ^ { b _ { 2 } }  \tag{0.2}\\
\text { with } \quad b _ { 1 } = \cosh ^ { - 1 } ( 1 ) , \quad b _ { 2 } = \cosh ^ { - 1 } \left( 1 + \frac { e \cdot V } { m _ { p } \cdot c ^ { 2 } } \right)  \tag{0.1}\\
T = 218 \mathrm {~ns} \tag{0.1}
\end{gather*}
$$

Alternative: differential equation

$$
\begin{gather*}
F = \frac { \mathrm { d } p } { \mathrm {~d} t }  \tag{0.2}\\
\rightarrow \frac { V \cdot e } { d } = \frac { \mathrm { d } } { \mathrm {~d} t } \left( \frac { m \cdot v } { \sqrt { 1 - \frac { v ^ { 2 } } { c ^ { 2 } } } } \right) = \frac { m \cdot a \left( 1 - \frac { v ^ { 2 } } { c ^ { 2 } } \right) + m \cdot a \frac { v ^ { 2 } } { c ^ { 2 } } } { \left( 1 - \frac { v ^ { 2 } } { c ^ { 2 } } \right) ^ { \frac { 3 } { 2 } } } = \gamma ^ { 3 } \cdot m \cdot a  \tag{0.4}\\
a = \ddot { s } = \frac { V \cdot e } { d \cdot m } \left( 1 - \frac { \dot { s } ^ { 2 } } { c ^ { 2 } } \right) ^ { \frac { 3 } { 2 } }
\end{gather*}
$$

Ansatz : $s ( t ) = \sqrt { i ^ { 2 } \cdot t ^ { 2 } + k } - l$ with boundary conditions $s ( 0 ) = 0 , v ( 0 ) = 0$

$$
\begin{gather*}
\rightarrow s ( t ) = \frac { c } { V \cdot e } \left( \sqrt { e ^ { 2 } \cdot V ^ { 2 } \cdot t ^ { 2 } + c ^ { 2 } \cdot m ^ { 2 } \cdot d ^ { 2 } } - c \cdot m \cdot d \right)  \tag{0.2}\\
s = d \rightarrow T = \frac { d } { V \cdot e } \sqrt { \left( \frac { V \cdot e } { c } \right) ^ { 2 } + 2 V \cdot e \cdot m }  \tag{0.2}\\
T = 218 \mathrm {~ns}
\end{gather*}
$$


classical solution:

$$
\begin{equation*}
F = \frac { V \cdot e } { d } \rightarrow \text { acceleration } a = \frac { F } { m _ { p } } = \frac { V \cdot e } { m _ { p } \cdot d } \tag{0.4}
\end{equation*}
$$

$$
\begin{equation*}
d = \frac { 1 } { 2 } \cdot a \cdot T ^ { 2 } \rightarrow T = \sqrt { \frac { 2 d } { a } } \tag{0.1}
\end{equation*}
$$

And hence for the time

$$
\begin{gather*}
T = d \cdot \sqrt { \frac { 2 \cdot m _ { p } } { V \cdot e } }  \tag{0.1}\\
T = 194 \mathrm {~ns} \tag{0.1}
\end{gather*}
$$


B1 (0.8 pt) Express the particle rest mass $m$ in terms of the momentum $p$, the flight length $l$ and the flight time $t$ assuming that the particles with elementary charge $e$ travel with velocity close to $c$ on straight tracks in the ToF detector and that it travels perpendicular to the two detection planes (see Figure 2).

Solution B1:
with velocity

$$
v = \frac { l } { t }
$$

relativistic momentum

$$
p = \frac { m \cdot v } { \sqrt { 1 - \frac { v ^ { 2 } } { c ^ { 2 } } } }
$$

gets

$$
p = \frac { m \cdot l } { t \cdot \sqrt { 1 - \frac { l ^ { 2 } } { t ^ { 2 } \cdot c ^ { 2 } } } }
$$

→ mass

$$
m = \frac { p \cdot t } { l } \cdot \sqrt { 1 - \frac { l ^ { 2 } } { t ^ { 2 } \cdot c ^ { 2 } } } = \frac { p } { l \cdot c } \cdot \sqrt { t ^ { 2 } \cdot c ^ { 2 } - l ^ { 2 } }
$$

Alternative
with flight distance: $l$, flight time t gets:

$$
t = \frac { l } { ( c \cdot \beta ) }
$$

relativistic momentum

$$
p = \frac { m \cdot \beta \cdot c } { \sqrt { 1 - \beta ^ { 2 } } }
$$

therefore the velocity:

$$
\beta = \frac { p } { \sqrt { m ^ { 2 } \cdot c ^ { 2 } + p ^ { 2 } } }
$$

insert into the expression for $t$ :

$$
t = l \frac { \sqrt { m ^ { 2 } \cdot c ^ { 2 } + p ^ { 2 } } } { c \cdot p }
$$

→ mass:

$$
m = \sqrt { \left( \frac { p \cdot t } { l } \right) ^ { 2 } - \left( \frac { p } { c } \right) ^ { 2 } } = \frac { p } { l \cdot c } \sqrt { ( t \cdot c ) ^ { 2 } - ( l ) ^ { 2 } }
$$

non-relativistic solution:
flight time: $t = l / v$ velocity:

$$
v = \frac { p } { m } \rightarrow t = \frac { l \cdot m } { p } \quad \text { and } \quad m = \frac { p \cdot t } { l }
$$

this solution gives no points


B2 (0.7 pt) Calculate the minimal length of a ToF detector that allows to safely distinguish a charged kaon from a charged pion given both their momenta are measured to be 1.00 GeV/c. For a good separation it is required that the difference in the time-of-flight is larger than three times the time resolution of the detector. The typical resolution of a ToF detector is 150 ps ( $1 \mathrm { ps } = 10 ^ { - 12 } \mathrm {~s}$ ).

Solution B2:

Flight time difference between kaon and pion

$$
\Delta t = 450 \mathrm { ps } = 450 \cdot 10 ^ { - 12 } \mathrm {~s}
$$

Flight time difference between kaon and pion

$$
\begin{gathered}
\Delta t = \frac { l } { c p } \left( \sqrt { m _ { \pi } ^ { 2 } \cdot c ^ { 2 } + p ^ { 2 } } - \sqrt { m _ { K } ^ { 2 } \cdot c ^ { 2 } + p ^ { 2 } } \right) = 450 \mathrm { ps } = 450 \cdot 10 ^ { - 12 } \mathrm {~s} \\
\rightarrow l = \frac { \Delta t \cdot p } { \sqrt { m _ { K } ^ { 2 } + p ^ { 2 } / c ^ { 2 } } - \sqrt { m _ { \pi } ^ { 2 } + p ^ { 2 } / c ^ { 2 } } } \\
\sqrt { m _ { K } ^ { 2 } + p ^ { 2 } / c ^ { 2 } } = 1.115 \mathrm { GeV } / c ^ { 2 } \text { and } \sqrt { m _ { \pi } ^ { 2 } + p ^ { 2 } / c ^ { 2 } } = 1.010 \mathrm { GeV } / c ^ { 2 } \\
\quad l = 450 \cdot 10 ^ { - 12 } \cdot \frac { 1 } { 1.115 - 1.010 } \mathrm {~s} \mathrm { GeV } c ^ { 2 } / ( \mathrm { GeV } c ) \\
l = 4285.710 ^ { - 12 } \mathrm {~s} \cdot c = 4285.7 \cdot 10 ^ { - 12 } \cdot 2.998 \cdot 10 ^ { 8 } \mathrm {~m} = 1.28 \mathrm {~m}
\end{gathered}
$$

Penalty for < 2 or > 4 significant digits
Non-relativistic solution:

Flight time difference between kaon and pion

$$
\Delta t = \frac { l } { p } \left( m _ { K } - m _ { \pi } \right) = 450 p \mathrm {~s} = 450 \cdot 10 ^ { - 12 } \mathrm {~s}
$$

length:

$$
\begin{gathered}
l = \frac { \Delta t p } { m _ { K } - m _ { \Pi } } = \frac { 450 \cdot 10 ^ { - 12 } \mathrm {~s} \cdot 1 \mathrm { GeV } / c } { ( 0.498 - 0.135 ) \mathrm { GeV } / c ^ { 2 } } \\
l = 450 \cdot 10 ^ { - 12 } / 0.363 \cdot c s = 450 \cdot 10 ^ { - 12 } / 0.363 \cdot 2.998 \cdot 10 ^ { 8 } \mathrm {~m} \\
l = 3716 \cdot 10 ^ { - 4 } \mathrm {~m} = 0.372 \mathrm {~m}
\end{gathered}
$$

Penalty for < 2 or > 4 significant digits


B3 (1.7 pt) Express the particle mass as a function of the magnetic flux density $B$, the radius $R$ of the ToF tube, fundamental constants and the measured quantities: radius $r$ of the track and time-of-flight $t$.

Solution B3:

Particle is travelling perpendicular to the beam line hence the track length is given by the length of the arc
Lorentz force → transverse momentum, since there is no longitudinal momentum, the momentum is the same as the transverse momentum
Use formula from B1 to calculate the mass
track length: length of arc

$$
l = 2 \cdot r \cdot \operatorname { asin } \frac { R } { 2 \cdot r }
$$

penalty for just taking a straight track $( l = R )$
partial points for intermediate steps, maximum 0.4
Lorentz force

$$
\frac { \gamma \cdot m \cdot v _ { t } ^ { 2 } } { r } = e \cdot v _ { t } \cdot B \rightarrow p _ { T } = r \cdot e \cdot B
$$

partial points for intermediate steps, maximum 0.3
longitudinal momentum $= 0 \rightarrow p = p _ { T }$
momentum

$$
\begin{gathered}
p = e \cdot r \cdot B \\
m = \sqrt { \left( \frac { p \cdot t } { l } \right) ^ { 2 } - \left( \frac { p } { c } \right) ^ { 2 } } = e \cdot r \cdot B \cdot \sqrt { \left( \frac { t } { \left. 2 r \cdot \operatorname { asin } \frac { R } { 2 r } \right) } \right) ^ { 2 } - \left( \frac { 1 } { c } \right) ^ { 2 } }
\end{gathered}
$$

partial points for intermediate steps, maximum 0.5
Non-relativistic: track length: length of arc

$$
l = 2 \cdot r \cdot \operatorname { asin } \frac { R } { 2 \cdot r }
$$

penalty for just taking a straight track $( l = R )$
partial points for intermediate steps, maximum 0.4

$$
m = \frac { p \cdot t } { l } = \frac { e \cdot r \cdot B \cdot t } { 2 r \cdot \operatorname { asin } \frac { R } { 2 r } } = \frac { e \cdot B \cdot t } { 2 \cdot \operatorname { asin } \frac { R } { 2 r } }
$$

partial points for intermediate steps, maximum 0.3


B4 (0.8 pt) Identify the four particles by calculating their mass.

| Particle | Radius r [m] | Time of flight [ns] |
| :--- | :--- | :--- |
| A | 5.10 | 20 |
| B | 2.94 | 14 |
| C | 6.06 | 18 |
| D | 2.32 | 25 |

Solution B4:

| Particle | arc | p | p | pt/l | pt/l | pt/l | Mass | Mass |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  | [m] | $\left[ \frac { M e V } { c } \right]$ | $\left[ \frac { m k g } { s } \right]$ | $\left[ \frac { M e V s } { c m } \right]$ | $\left[ \frac { M e V } { c ^ { 2 } } \right]$ | [kg] | $\left[ \frac { M e V } { c ^ { 2 } } \right]$ | [kg] |
|  |  |  | $10 ^ { - 19 }$ | $10 ^ { - 6 }$ |  | $10 ^ { - 27 }$ |  | $10 ^ { - 27 }$ |
| A | 3.786 | 764.47 | 4.0855 | 4.038 | 1210.6 | 2.158 | 938.65 | 1.673 |
| B | 4.002 | 440.69 | 2.3552 | 1.542 | 462.2 | 0.824 | 139.32 | 0.248 |
| C | 3.760 | 908.37 | 4.8546 | 4.349 | 1303.7 | 2.324 | 935.10 | 1.667 |
| D | 4.283 | 347.76 | 1.8585 | 2.030 | 608.6 | 1.085 | 499.44 | 0.890 |

Particles A and C are protons, B is a Pion and D a Kaon correct mass and identification: per particle penalty for correct mass but no or wrong identification for 1 or 2 particles penalty for correct mass but no or wrong identification for 3 or 4 particles wrong mass, correct momentum:per particle wrong momentum, correct arc for 3 or 4 particles wrong momentum, correct arc for 1 or 2 particles
non relativistic solution $m = p t / l$ Particle identification is not possible

| Particle | arc | $p$ | $p$ | $m = p \cdot t / l$ | $m = p \cdot t / l$ | $m = p \cdot t / l$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  | [m] | $\left[ \frac { M e V } { c } \right]$ | $\left[ \frac { m k g } { s } \right]$ | $\left[ \frac { M e V s } { c m } \right]$ | $\left[ \frac { M e V } { c ^ { 2 } } \right]$ | [kg] |
|  |  |  | $10 ^ { - 19 }$ | $10 ^ { - 6 }$ |  | $10 ^ { - 27 }$ |
| A | 3.786 | 764.47 | 4.0855 | 4.038 | 1210.6 | 2.158 |
| B | 4.010 | 440.69 | 2.3552 | 1.542 | 462.2 | 0.824 |
| C | 3.760 | 908.37 | 4.8546 | 4.349 | 1303.7 | 2.324 |
| D | 4.283 | 347.76 | 1.8585 | 2.030 | 608.6 | 1.085 |

correct mass or correct momentum: per particle wrong momentum, correct arc for 3 or 4 particles wrong momentum, correct arc for 1 or 2 particles
