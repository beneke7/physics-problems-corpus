---
id: solution-ocr-izho-2026-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2026_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2026-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3. Electron Paramagnetic Resonance (10.0 points) Magnetic Moment

3.1 The area of a circular coil of radius $R$ is equal to

$$
\begin{equation*}
S = \pi R ^ { 2 } \tag{1}
\end{equation*}
$$

and when current $I$ flows through it, the modulus of its magnetic moment is equal to

$$
\begin{equation*}
m = I \pi R ^ { 2 } . \tag{2}
\end{equation*}
$$

The magnetic induction at the center of a circular loop is determined by the expression

$$
\begin{equation*}
B _ { 0 } = \frac { \mu _ { 0 } I } { 2 R } , \tag{3}
\end{equation*}
$$

from which it follows that

$$
\begin{equation*}
\boldsymbol { B } _ { 0 } = \frac { \mu _ { 0 } \boldsymbol { m } } { 2 \pi R ^ { 3 } } . \tag{4}
\end{equation*}
$$

3.2 If $\boldsymbol { B }$ lies in the plane of the coil, then by analyzing the pairs of Ampere forces acting on the elements of the coil opposite to the magnetic field induction vector, it can be shown that the modulus of the total moment of forces is

$$
\begin{equation*}
M = m B . \tag{5}
\end{equation*}
$$

In general, the magnetic moment m forms an angle $\varphi$ with the field. Let us decompose $\boldsymbol { B }$ into components: one in the plane of the coil, and the other perpendicular to it. Obviously, the perpendicular component does not create a torque, causing stretching or compression of the coil, and since the projection of vector $\boldsymbol { B }$ onto the plane of the coil is

$$
\begin{equation*}
B _ { \| } = B \sin \varphi , \tag{6}
\end{equation*}
$$

then the modulus of the resulting torque of Ampere forces is equal to

$$
\begin{equation*}
M = m B \sin \varphi . \tag{7}
\end{equation*}
$$

3.3 The elementary work $d A$ for a small rotation of the coil by an angle $d \varphi$ is equal to

$$
\begin{equation*}
d A = M d \varphi . \tag{8}
\end{equation*}
$$

When the coil rotates from the state when $\boldsymbol { m } \uparrow \uparrow \boldsymbol { B }$ to the position $\boldsymbol { m } \uparrow \downarrow \boldsymbol { B }$, the angle changes from 0 to $\pi$, and the total work is determined by the integral

$$
\begin{equation*}
A = \int _ { 0 } ^ { \pi } M d \varphi = 2 m B . \tag{9}
\end{equation*}
$$

## Electron Paramagnetic Resonance

3.4 Let an electron rotate in a circular orbit of radius $R$ with period $T$, then its motion can be represented as a circular current with a force

$$
\begin{equation*}
I = \frac { e } { T } \tag{10}
\end{equation*}
$$

and magnetic moment is obtained as

$$
\begin{equation*}
m = I \pi R ^ { 2 } . \tag{11}
\end{equation*}
$$

The angular momentum of an electron moving along a circular trajectory with velocity $v$ is equal to

$$
\begin{equation*}
L = m _ { e } v R , \tag{12}
\end{equation*}
$$

from where, taking into account the expression for the period of revolution


$$
\begin{equation*}
T = \frac { 2 \pi R } { v } , \tag{13}
\end{equation*}
$$

we get

$$
\begin{equation*}
g _ { L } = 1 . \tag{14}
\end{equation*}
$$

In the vector relationship between magnetic and mechanical moments, it is necessary to take into account the sign due to the negative charge of the electron.
3.5 According to paragraph 3.3, to flip the spin, it is necessary to perform work (9), which together with the formula in the condition for the magnetic moment gives

$$
\begin{equation*}
A = g _ { s } B _ { 0 } \frac { \mathrm { e } \hbar } { 2 m _ { e } } , \tag{15}
\end{equation*}
$$

which is accomplished due to the energy of the photon

$$
\begin{equation*}
E = \hbar \omega , \tag{16}
\end{equation*}
$$

that is, the law of conservation of energy is fulfilled as

$$
\begin{equation*}
E = A . \tag{17}
\end{equation*}
$$

Thus, using $g _ { s } = 2 g _ { L } = 2$, we get

$$
\begin{equation*}
\omega = \frac { \mathrm { e } B _ { 0 } } { m _ { e } } = 6.15 \cdot 10 ^ { 10 } \mathrm {~s} ^ { - 1 } , \tag{18}
\end{equation*}
$$

which is equal to the so-called Larmor frequency of rotation of an electron in a magnetic field.
3.6 In the absence of a core, the magnetic field in the solenoid is proportional to the current, that is,

$$
\begin{equation*}
B _ { 0 } \propto I _ { 0 } , \tag{19}
\end{equation*}
$$

and in the presence of the core, the magnetic field is also proportional to the magnetic permeability of the substance

$$
\begin{equation*}
B \propto \mu I . \tag{20}
\end{equation*}
$$

The resonance occurs at the same value of the magnetic induction, therefore

$$
\begin{equation*}
I = \frac { I _ { 0 } } { \mu } = 1.2 \mathrm {~A} . \tag{21}
\end{equation*}
$$

## Thermodynamic equilibrium

3.7 In a state of thermodynamic equilibrium, the distribution of electrons across energy levels obeys the Boltzmann distribution, therefore

$$
\begin{equation*}
\frac { N _ { 2 } } { N _ { 1 } } = \exp \left( - \frac { \hbar \omega } { k _ { B } T } \right) , \tag{22}
\end{equation*}
$$

on the other hand, the total number of atoms is known and equal

$$
\begin{equation*}
N = N _ { 1 } + N _ { 2 } . \tag{23}
\end{equation*}
$$

Thus, from (22) and (23), we obtain under condition $\hbar \omega \ll k _ { B } T$

$$
\begin{equation*}
n _ { 0 } = \frac { \hbar \omega } { 2 k _ { B } T } N = 4.68 \cdot 10 ^ { 17 } . \tag{24}
\end{equation*}
$$

3.8 In a state of thermodynamic equilibrium, the rates of upward and downward transitions should be the same, since the number of atoms at the energy levels should not change, in particular for the lower level we have

$$
\begin{equation*}
\frac { d N _ { 1 } } { d t } = - B _ { 12 } \rho N _ { 1 } + A _ { 21 } N _ { 2 } + B _ { 21 } \rho N _ { 2 } = 0 , \tag{25}
\end{equation*}
$$

from which we obtain for the energy density of electromagnetic radiation

$$
\begin{equation*}
\rho = \frac { A _ { 21 } } { B _ { 21 } \left( \frac { N _ { 1 } B _ { 12 } } { N _ { 2 } B _ { 21 } } - 1 \right) } . \tag{26}
\end{equation*}
$$

Taking into account relation (22) and comparing with Planck's formula, we conclude that

$$
\begin{equation*}
B _ { 12 } = B _ { 21 } . \tag{27}
\end{equation*}
$$

## Presence of an external microwave field source

3.9 Taking into account the equality of the Einstein coefficients and neglecting spontaneous transitions, equation (25) can be rewritten as

$$
\begin{equation*}
\frac { d N _ { 1 } } { d t } = - k N _ { 1 } + k N _ { 2 } , \tag{28}
\end{equation*}
$$

which, taking into account (23), gives rise to

$$
\begin{equation*}
\frac { d n } { d t } = - 2 k n . \tag{29}
\end{equation*}
$$

Using the initial condition $n ( 0 ) = n _ { 0 }$, we obtain the solution of equation (29) in the form

$$
\begin{equation*}
n ( t ) = n _ { 0 } \exp ( - 2 k t ) . \tag{30}
\end{equation*}
$$


It is interesting to note that under the influence of an external source of an alternating field, the difference in the number of atoms at the two levels drops to zero over time.
3.10 From formula (30) it follows that

$$
\begin{equation*}
k = \frac { \ln 2 } { 2 \tau } . \tag{31}
\end{equation*}
$$

Since during the transition of each atom from the lower level to the upper one quantum of energy of the alternating field $\hbar \omega$ is absorbed, and during each reverse transition the same energy is released, then the expression describing the absorption of energy $E$ of the alternating field in the core has the form

$$
\begin{equation*}
\frac { d E } { d t } = k n \hbar \omega , \tag{32}
\end{equation*}
$$

and this means that at the initial moment of time the power of the source is equal to

$$
\begin{equation*}
P = \frac { d E } { d t } ( 0 ) = \frac { n _ { 0 } \hbar \omega \ln 2 } { 2 \tau } = 1.05 \mathrm {~mW} . \tag{33}
\end{equation*}
$$

3.11 Let us consider the case of the absence of an external field, then the equation given in the condition for level 1 is rewritten as

$$
\begin{equation*}
\frac { d n } { d t } = N \left( \alpha _ { 2 } - \alpha _ { 1 } \right) - n \left( \alpha _ { 1 } + \alpha _ { 2 } \right) . \tag{34}
\end{equation*}
$$

Since equation (34) must include the condition of thermodynamic equilibrium, then when the derivative on the left becomes zero, the equilibrium concentration must be equal to $n _ { 0 }$, from which it follows that

$$
\begin{equation*}
N = n _ { 0 } \frac { \left( \alpha _ { 1 } + \alpha _ { 2 } \right) } { \left( \alpha _ { 2 } - \alpha _ { 1 } \right) } . \tag{35}
\end{equation*}
$$

Substituting (35) into (34) and adding the term from (29), we obtain an equation for taking into account the presence of an alternating field

$$
\begin{equation*}
\frac { d n } { d t } = - 2 k n - \left( n - n _ { 0 } \right) \left( \alpha _ { 1 } + \alpha _ { 2 } \right) . \tag{36}
\end{equation*}
$$

Since it is required to determine the power of the source in a stationary mode, the difference in the number of atoms at the lower and upper levels must be constant, that is, $d n / d t = 0$, from which it follows

$$
\begin{equation*}
n = \frac { n _ { 0 } } { 1 + \frac { 2 k } { \left( \alpha _ { 1 } + \alpha _ { 2 } \right) } } . \tag{37}
\end{equation*}
$$

The power of the source is still determined by equation (42) and taking into account that $2 k \gg$ $\left( \alpha _ { 1 } + \alpha _ { 2 } \right)$, we finally obtain

$$
\begin{equation*}
P = \frac { 1 } { 2 } n _ { 0 } \hbar \omega \left( \alpha _ { 1 } + \alpha _ { 2 } \right) = 1.01 \mu \mathrm {~W} . \tag{38}
\end{equation*}
$$

Note that, unlike 3.10, the power of the source does not depend on the energy density of the electromagnetic field; this is the so-called saturation mode.

|  | Content | Points |  |
| :--- | :--- | :--- | :--- |
| 3.1 | Formula (1): $S = \pi R ^ { 2 }$ | 0.2 | 0.8 |
|  | Formula (2): $m = I \pi R ^ { 2 }$ | 0.2 |  |
|  | Formula (3): $B _ { 0 } = \frac { \mu _ { 0 } I } { 2 R }$ | 0.2 |  |
|  | Formula (4): $\boldsymbol { B } _ { 0 } = \frac { \mu _ { 0 } \boldsymbol { m } } { 2 \pi R ^ { 3 } }$ | 0.2 |  |
| 3.2 | Formula (5): $M = m B$ | 0.2 | 0.6 |
|  | Formula (6): $B _ { \\| } = B \sin \varphi$ | 0.2 |  |
|  | Formula (7): $M = m B \sin \varphi$ | 0.2 |  |
| 3.3 | Formula (8): $d A = M d \varphi$ | 0.2 | 0.4 |
|  | Formula (9): $A = 2 m B$ | 0.2 |  |
| 3.4 | Formula (10): $I = \frac { e } { T }$ | 0.2 | 1.0 |
|  | Formula (11): $m = I \pi R ^ { 2 }$ | 0.2 |  |
|  | Formula (12): $L = m _ { e } v R$ | 0.2 |  |
|  | Formula (13): $T = \frac { 2 \pi R } { v }$ | 0.2 |  |
|  | Formula (14): $g _ { L } = 2$ | 0.2 |  |
| 3.5 | Formula (15): $A = g _ { s } B _ { 0 } \frac { \mathrm { e } \hbar } { 2 m _ { e } }$ | 0.2 | 1.0 |


|  | Formula (16): $E = \hbar \omega$ | 0.2 |  |
| :--- | :--- | :--- | :--- |
|  | Formula (17): $E = A$ | 0.2 |  |
|  | Formula (18): $\omega = \frac { \mathrm { e } B _ { 0 } } { m _ { e } }$ | 0.2 |  |
|  | Numerical value in formula (18): $\omega = 6.15 \cdot 10 ^ { 10 } \mathrm {~s} ^ { - 1 }$ | 0.2 |  |
| 3.6 | Formula (19): $B _ { 0 } \propto I _ { 0 }$ | 0.2 | 0.8 <br> 0.8 |
|  | Formula (20): $B \propto \mu I$ | 0.2 |  |
|  | Formula (21): $I = \frac { I _ { 0 } } { \mu }$ | 0.2 |  |
|  | Numerical value in formula (21): $I = 1.2 \mathrm {~A}$ | 0.2 |  |
| 3.7 | Formula (22): $\frac { N _ { 2 } } { N _ { 1 } } = \exp \left( - \frac { \hbar \omega } { k _ { B } T } \right)$ | 0.2 | 1.0 |
|  | Formula (23): $N = N _ { 1 } + N _ { 2 }$ | 0.2 |  |
|  | Formula (24): $n _ { 0 } = \frac { \hbar \omega } { 2 k _ { B } T } N$ | 0.3 |  |
|  | Numerical value in formula (24): $n _ { 0 } = 4.68 \cdot 10 ^ { 17 }$ | 0.3 |  |
| 3.8 | Formula (25): $- B _ { 12 } \rho N _ { 1 } + A _ { 21 } N _ { 2 } + B _ { 21 } \rho N _ { 2 } = 0$ | 0.4 | 1.0 |
|  | Formula (26): $\rho = \frac { A _ { 21 } } { B _ { 21 } \left( \frac { N _ { 1 } B _ { 12 } } { N _ { 2 } B _ { 21 } } - 1 \right) }$ | 0.4 |  |
|  | Formula (22) is used | 0.2 |  |
| 3.9 | Formula (28): $\frac { d N _ { 1 } } { d t } = - k N _ { 1 } + k N _ { 2 }$ | 0.2 | 0.6 |
|  | Formula (29): $\frac { d n } { d t } = - 2 k n$ | 0.2 |  |
|  | Formula (30): $n ( t ) = n _ { 0 } \exp ( - 2 k t )$ | 0.2 |  |
| 3.10 | Formula (31): $k = \frac { \ln 2 } { 2 \tau }$ | 0.2 | 0.8 |
|  | Formula (32): $\frac { d E } { d t } = k n \hbar \omega$ | 0.2 |  |
|  | Formula (33): $P = \frac { n _ { 0 } \hbar \omega \ln 2 } { 2 \tau }$ | 0.2 |  |
|  | Numerical value in formula (33): $P = 1.05 \mathrm {~mW}$ | 0.2 |  |
| 3.11 | Formula (34): $\frac { d n } { d t } = N \left( \alpha _ { 2 } - \alpha _ { 1 } \right) - n \left( \alpha _ { 1 } + \alpha _ { 2 } \right)$ | 0.3 | 2.0 |
|  | Formula (35): $N = n _ { 0 } \frac { \left( \alpha _ { 1 } + \alpha _ { 2 } \right) } { \left( \alpha _ { 2 } - \alpha _ { 1 } \right) }$ | 0.3 |  |
|  | Formula (36): $\frac { d n } { d t } = - 2 k n - \left( n - n _ { 0 } \right) \left( \alpha _ { 1 } + \alpha _ { 2 } \right)$ | 0.3 |  |
|  | Formula (37): $n = \frac { n _ { 0 } } { 1 + \frac { 2 k } { \left( \alpha _ { 1 } + \alpha _ { 2 } \right) } }$ | 0.3 |  |
|  | Formula (38): $P = \frac { 1 } { 2 } n _ { 0 } \hbar \omega \left( \alpha _ { 1 } + \alpha _ { 2 } \right)$ | 0.3 |  |
|  | Numerical value in formula (38): $P = 1.01 \mu \mathrm {~W}$ | 0.5 |  |
| Total |  |  | 10.0 |
