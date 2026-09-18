---
id: solution-ocr-ipho-2010-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2010/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2010-t3]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Solution - model of an atomic nucleus

Solution of Task 1

a)In the SC-system, in each of 8 corners of a given cube there is one unit (atom, nucleon, etc.), but it is shared by 8 neighboring cubes - this gives a total of one nucleon per cube. If nucleons are touching, as we assume in our simplified model, then $a = 2 r _ { N }$ is the cube edge length a. The volume of one nucleon is then

| $V _ { N } = \frac { 4 } { 3 } r _ { N } ^ { 3 } \pi = \frac { 4 } { 3 } \left( \frac { a } { 2 } \right) ^ { 3 } \pi = \frac { 4 a ^ { 3 } } { 3 \cdot 8 } \pi = \frac { \pi } { 6 } a ^ { 3 }$ | (1) |
| :--- | :--- |

from which we obtain

$$
f = \frac { V _ { N } } { a ^ { 3 } } = \frac { \pi } { 6 } \approx 0.52
$$

(2)
b) The mass density of the nucleus is:
$$
\rho _ { m } = f \frac { m _ { N } } { V _ { N } } = 0.52 \cdot \frac { 1.67 \cdot 10 ^ { - 27 } } { 4 / 3 \cdot \left( 0.85 \cdot 10 ^ { - 15 } \right) ^ { 3 } \pi } \approx 3.40 \cdot 10 ^ { 17 } \frac { \mathrm {~kg} } { \mathrm {~m} ^ { 3 } } .
$$
(4)
Taking into account the approximation that the number of protons and neutrons is
c) approximately equal, for charge density we get:
$$
\rho _ { c } = \frac { f } { 2 } \frac { e } { V _ { N } } = \frac { 0.52 } { 2 } \cdot \frac { 1.6 \cdot 10 ^ { - 19 } } { 4 / 3 \cdot \left( 0.85 \cdot 10 ^ { - 15 } \right) ^ { 3 } \pi } \approx 1.63 \cdot 10 ^ { 25 } \frac { \mathrm { C } } { \mathrm {~m} ^ { 3 } }
$$
(5)
The number of nucleons in a given nucleus is $A$. The total volume occupied by the nucleus is:
$$
V = \frac { A V _ { N } } { f } ,
$$
(6)
which gives the following relation between radii of nucleus and the number of nucleons:
$$
R = r _ { N } \left( \frac { A } { f } \right) ^ { 1 / 3 } = \frac { r _ { N } } { f ^ { 1 / 3 } } A ^ { 1 / 3 } = \frac { 0.85 } { 0.52 ^ { 1 / 3 } } A ^ { 1 / 3 } = 1.06 \mathrm { fm } \cdot A ^ { 1 / 3 } .
$$
(7)

The numerical constant ( 1.06 fm ) in the equation above will be denoted as $r _ { 0 }$ in the sequel.

Solution of Task 2
First one needs to estimate the number of surface nucleons. The surface nucleons are in a spherical shell of width $2 r _ { N }$ at the surface. The volume of this shell is


| $\begin{aligned} V _ { \text {surface } } & = \frac { 4 } { 3 } R ^ { 3 } \pi - \frac { 4 } { 3 } \left( R - 2 r _ { N } \right) ^ { 3 } \pi = \\ & = \frac { 4 } { 3 } R ^ { 3 } \pi - \frac { 4 } { 3 } R ^ { 3 } \pi + \frac { 4 } { 3 } \pi 3 R ^ { 2 } 2 r _ { N } - \frac { 4 } { 3 } \pi 3 R 4 r _ { N } ^ { 2 } + \frac { 4 } { 3 } \pi 8 r _ { N } ^ { 3 } \\ & = 8 \pi R r _ { N } \left( R - 2 r _ { N } \right) + \frac { 4 } { 3 } \pi 8 r _ { N } ^ { 3 } = \\ & = 8 \pi \left( R ^ { 2 } r _ { N } - 2 R r _ { N } ^ { 2 } + \frac { 4 } { 3 } r _ { N } ^ { 3 } \right) \end{aligned}$ | (8) |
| :--- | :--- |

The number of surface nucleons is:

| $\begin{aligned} A _ { \text {surface } } & = f \frac { V _ { \text {surface } } } { V _ { N } } = f \frac { 8 \pi \left( R ^ { 2 } r _ { N } - 2 R r _ { N } ^ { 2 } + \frac { 4 } { 3 } r _ { N } ^ { 3 } \right) } { \frac { 4 } { 3 } r _ { N } ^ { 3 } \pi } = \\ & = f 6 \left( \left( \frac { R } { r _ { N } } \right) ^ { 2 } - 2 \left( \frac { R } { r _ { N } } \right) + \frac { 4 } { 3 } \right) = \\ & = f 6 \left( \left( \frac { A } { f } \right) ^ { 2 / 3 } - 2 \left( \frac { A } { f } \right) ^ { 1 / 3 } + \frac { 4 } { 3 } \right) = \\ & = 6 f ^ { 1 / 3 } A ^ { 2 / 3 } - 12 f ^ { 2 / 3 } A ^ { 1 / 3 } + 8 f = \\ & = 6 ^ { 2 / 3 } \pi ^ { 1 / 3 } A ^ { 2 / 3 } - 2 \cdot 6 ^ { 1 / 3 } \pi ^ { 2 / 3 } A ^ { 1 / 3 } + \frac { 4 } { 3 } \pi \approx \\ & \approx 4.84 A ^ { 2 / 3 } - 7.80 A ^ { 1 / 3 } + 4.19 \end{aligned}$ | (9) |
| :--- | :--- |

The binding energy is now:

| $\begin{aligned} & E _ { b } = \left( A - A _ { \text {surface } } \right) a _ { V } + A _ { \text {surface } } \frac { a _ { V } } { 2 } = \\ & = A a _ { V } - A _ { \text {surface } } \frac { a _ { V } } { 2 } = \\ & = A a _ { V } - \left( 3 f ^ { 1 / 3 } A ^ { 2 / 3 } - 6 f ^ { 2 / 3 } A ^ { 1 / 3 } + 4 f \right) a _ { V } = \\ & = A a _ { V } - 3 f ^ { 1 / 3 } A ^ { 2 / 3 } a _ { V } + 6 f ^ { 2 / 3 } A ^ { 1 / 3 } a _ { V } - 4 f a _ { V } = \\ & = \left( 15.8 A - 38.20 A ^ { 2 / 3 } + 61.58 A ^ { 1 / 3 } - 33.09 \right) \mathrm { MeV } \end{aligned}$ | (10) |
| :--- | :--- |

## Solution of Task 3 - Electrostatic (Coulomb) effects on the binding energy

a)Replacing $Q _ { 0 }$ with $Z e$ gives the electrostatic energy of the nucleus as:

| $U _ { c } = \frac { 3 ( Z e ) ^ { 2 } } { 20 \pi \varepsilon _ { 0 } R } = \frac { 3 Z ^ { 2 } e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } R }$ |
| :--- |

The fact that each proton is not acting upon itself is taken into account by replacing $Z ^ { 2 }$ with $Z ( Z - 1 )$ :


| $U _ { c } = \frac { 3 Z ( Z - 1 ) e ^ { 2 } } { 20 \pi \varepsilon _ { 0 } R }$ | (13) |
| :--- | :--- |

b) In the formula for the electrostatic energy we should replace $R$ with $r _ { N } f ^ { - 1 / 3 } A ^ { 1 / 3 }$ to obtain
$$
\begin{align*}
& \Delta E _ { b } = - \frac { 3 e ^ { 2 } f ^ { 1 / 3 } } { 20 \pi \varepsilon _ { 0 } r _ { N } } \frac { Z ( Z - 1 ) } { A ^ { 1 / 3 } } = - \frac { Z ( Z - 1 ) } { A ^ { 1 / 3 } } \cdot 1.31 \times 10 ^ { - 13 } \mathrm {~J}  \tag{14}\\
& = - \frac { Z ( Z - 1 ) } { A ^ { 1 / 3 } } \cdot 0.815 \mathrm { MeV } \approx - 0.204 \mathrm {~A} ^ { 5 / 3 } \mathrm { MeV } + 0.409 \mathrm {~A} ^ { 2 / 3 } \mathrm { MeV }
\end{align*}
$$
where $Z \approx A / 2$ has been used. The Coulomb repulsion reduces the binding energy, hence the negative sign before the first (main) term. The complete formula for binding energy now gives:
$$
\begin{equation*}
E _ { b } = A a _ { V } - 3 f ^ { 1 / 3 } A ^ { 2 / 3 } a _ { V } + 6 f ^ { 2 / 3 } A ^ { 1 / 3 } a _ { V } - 4 f a _ { V } - \frac { 3 e ^ { 2 } f ^ { 1 / 3 } } { 20 \pi \varepsilon _ { 0 } r _ { N } } \left( \frac { A ^ { 5 / 3 } } { 4 } - \frac { A ^ { 2 / 3 } } { 2 } \right) \tag{15}
\end{equation*}
$$

## Solution of Task 4 - Fission of heavy nuclei

a)The kinetic energy comes from the difference of binding energies (2 small nuclei - the original large one) and the Coulomb energy between two smaller nuclei (with $Z / 2 = A / 4$ nucleons each):

| $\begin{aligned} & E _ { k i n } ( d ) = 2 E _ { b } \left( \frac { A } { 2 } \right) - E _ { b } ( A ) - \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { A ^ { 2 } e ^ { 2 } } { 4 \cdot 4 \cdot d } = \\ & = - 3 f ^ { 1 / 3 } A ^ { 2 / 3 } a _ { V } \left( 2 ^ { 1 / 3 } - 1 \right) + 6 f ^ { 2 / 3 } A ^ { 1 / 3 } a _ { V } \left( 2 ^ { 2 / 3 } - 1 \right) \\ & - 4 f a _ { V } - \frac { 3 e ^ { 2 } f ^ { 1 / 3 } } { 20 \pi \varepsilon _ { 0 } r _ { N } } \left[ \frac { A ^ { 5 / 3 } } { 4 } \left( 2 ^ { - 2 / 3 } - 1 \right) - \frac { A ^ { 2 / 3 } } { 2 } \left( 2 ^ { 1 / 3 } - 1 \right) \right] \\ & - \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { A ^ { 2 } e ^ { 2 } } { 16 d } \end{aligned}$ | (16) |
| :--- | :--- |

(notice that the first term, $A a _ { v }$, cancels out).
b) The kinetic energy when $d = 2 R ( A / 2 )$ is given with:
$$
\begin{align*}
& E _ { k i n } = 2 E _ { b } \left( \frac { A } { 2 } \right) - E _ { b } ( A ) - \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { 2 ^ { 1 / 3 } A ^ { 2 } e ^ { 2 } } { 16 \cdot 2 r _ { N } A ^ { 1 / 3 } f ^ { - 1 / 3 } } =  \tag{17}\\
& = - 3 f ^ { 1 / 3 } A ^ { 2 / 3 } a _ { V } \left( 2 ^ { 1 / 3 } - 1 \right) + 6 f ^ { 2 / 3 } A ^ { 1 / 3 } a _ { V } \left( 2 ^ { 2 / 3 } - 1 \right) \\
& - 4 f a _ { V } - \frac { e ^ { 2 } f ^ { 1 / 3 } } { \pi \varepsilon _ { 0 } r _ { N } } \left[ \frac { 3 } { 80 } \left( 2 ^ { - 2 / 3 } - 1 \right) + \frac { 2 ^ { 1 / 3 } } { 128 } \right] A ^ { 5 / 3 } - \frac { e ^ { 2 } f ^ { 1 / 3 } } { \pi \varepsilon _ { 0 } r _ { N } } \left[ \frac { 3 } { 40 } \left( 2 ^ { 1 / 3 } - 1 \right) \right] A ^ { 2 / 3 } = \\
& = \left( 0.02203 A ^ { 5 / 3 } - 10.0365 A ^ { 2 / 3 } + 36.175 A ^ { 1 / 3 } - 33.091 \right) \mathrm { MeV }
\end{align*}
$$
Numerically one gets:
$$
\begin{aligned}
& A = 100 \ldots E _ { \text {kin } } = - 33.95 \mathrm { MeV } , \\
& A = 150 \ldots E _ { \text {kin } } = - 30.93 \mathrm { MeV } ,
\end{aligned}
$$

$$
\begin{aligned}
& A = 200 \ldots E _ { k i n } = - 14.10 \mathrm { MeV } , \\
& A = 250 \ldots E _ { k i n } = + 15.06 \mathrm { MeV } .
\end{aligned}
$$

In our model, fission is possible when $E _ { k i n } ( d = 2 R ( A / 2 ) ) \geq 0$. From the numerical evaluations given above, one sees that this happens approximately halfway between $A = 200$ and $A = 250$ - a rough estimate would be $A \approx 225$. Precise numerical evaluation of the equation:

$$
\begin{equation*}
E _ { \text {kin } } = \left( 0.02203 A ^ { 5 / 3 } - 10.0365 A ^ { 2 / 3 } + 36.175 A ^ { 1 / 3 } - 33.091 \right) \mathrm { MeV } \geq 0 \tag{18}
\end{equation*}
$$

gives that for $A \geq 227$ fission is possible.

## Solution of Task 5 - Transfer reactions

Task 5a) This part can be solved by using either non-relativistic or relativistic kinematics.
Non-relativistic solution
First one has to find the amount of mass transferred to energy in the reaction (or the energy equivalent, so-called Q-value):

$$
\begin{align*}
\Delta m & = ( \text { total mass } ) _ { \text {after reaction } } - ( \text { total mass } ) _ { \text {before reaction } } =  \tag{19}\\
& = ( 57.93535 + 12.00000 ) \text { a.m.u. } - ( 53.93962 + 15.99491 ) \text { a.m.u. } = \\
& = 0.00082 \text { a.m.u. } = \\
& = 1.3616 \cdot 10 ^ { - 30 } \mathrm {~kg} .
\end{align*}
$$

Using the Einstein formula for equivalence of mass and energy, we get:

$$
\begin{align*}
Q & = ( \text { total kinetic energy } ) _ { \text {after reaction } } - ( \text { total kinetic energy } ) _ { \text {before reaction } } =  \tag{20}\\
& = - \Delta m \cdot c ^ { 2 } = \\
& = - 1.3616 \cdot 10 ^ { - 30 } \cdot 299792458 ^ { 2 } = - 1.2237 \cdot 10 ^ { - 13 } \mathrm {~J}
\end{align*}
$$

Taking into account that 1 MeV is equal to $1.602 \cdot 10 ^ { - 13 } \mathrm {~J}$, we get:

$$
\begin{equation*}
Q = - 1.2237 \cdot 10 ^ { - 13 } / 1.602 \cdot 10 ^ { - 13 } = - 0.761 \mathrm { MeV } \tag{21}
\end{equation*}
$$

This exercise is now solved using the laws of conservation of energy and momentum. The latter gives (we are interested only for the case when ${ } ^ { 12 } \mathrm { C }$ and ${ } ^ { 16 } \mathrm { O }$ are having the same direction so we don't need to use vectors):

$$
\begin{equation*}
m \left( { } ^ { 16 } \mathrm { O } \right) v \left( { } ^ { 16 } \mathrm { O } \right) = m \left( { } ^ { 12 } \mathrm { C } \right) v \left( { } ^ { 12 } \mathrm { C } \right) + m \left( { } ^ { 58 } \mathrm { Ni } \right) v \left( { } ^ { 58 } \mathrm { Ni } \right) \tag{22}
\end{equation*}
$$

while the conservation of energy gives:

$$
\begin{equation*}
E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) + Q = E _ { k } \left( { } ^ { 12 } \mathrm { C } \right) + E _ { k } \left( { } ^ { 58 } \mathrm { Ni } \right) + E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) \tag{23}
\end{equation*}
$$


where $E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right)$ is the excitation energy of ${ } ^ { 58 } \mathrm { Ni }$, and $Q$ is calculated in the first part of this task. But since ${ } ^ { 12 } \mathrm { C }$ and ${ } ^ { 16 } \mathrm { O }$ have the same velocity, conservation of momentum reduced to:

$$
\begin{equation*}
\left[ m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right] v \left( { } ^ { 16 } \mathrm { O } \right) = m \left( { } ^ { 58 } \mathrm { Ni } \right) v \left( { } ^ { 58 } \mathrm { Ni } \right) \tag{24}
\end{equation*}
$$

Now we can easily find the kinetic energy of ${ } ^ { 58 } \mathrm { Ni }$ :

$$
\begin{align*}
E _ { k } \left( { } ^ { 58 } \mathrm { Ni } \right) & = \frac { m \left( { } ^ { 58 } \mathrm { Ni } \right) v ^ { 2 } \left( { } ^ { 58 } \mathrm { Ni } \right) } { 2 } = \frac { \left[ m \left( { } ^ { 58 } \mathrm { Ni } \right) v \left( { } ^ { 58 } \mathrm { Ni } \right) \right] ^ { 2 } } { 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) } =  \tag{25}\\
& = \frac { \left. \left[ m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right] v \left( { } ^ { 16 } \mathrm { O } \right) \right] ^ { 2 } } { 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) } = \\
& = E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) \frac { \left[ m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right] ^ { 2 } } { m \left( { } ^ { 58 } \mathrm { Ni } \right) m \left( { } ^ { 16 } \mathrm { O } \right) }
\end{align*}
$$

and finally the excitation energy of ${ } ^ { 58 } \mathrm { Ni }$ :

$$
\begin{align*}
E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) & = E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) + Q - E _ { k } \left( { } ^ { 12 } \mathrm { C } \right) - E _ { k } \left( { } ^ { 58 } \mathrm { Ni } \right) =  \tag{26}\\
& = E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) + Q - \frac { m \left( { } ^ { 12 } \mathrm { C } \right) v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) } { 2 } - E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) \frac { \left[ m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right] ^ { 2 } } { m \left( { } ^ { ( 58 } \mathrm { Ni } \right) m \left( { } ^ { 16 } \mathrm { O } \right) } = \\
& = Q + E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) - E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) \cdot \frac { m \left( { } ^ { 12 } \mathrm { C } \right) } { m \left( { } ^ { 16 } \mathrm { O } \right) } - E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) \frac { \left[ m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right] ^ { 2 } } { m \left( { } ^ { 58 } \mathrm { Ni } \right) m \left( { } ^ { 16 } \mathrm { O } \right) } = \\
& = Q + E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) \left[ 1 - \frac { m \left( { } ^ { 12 } \mathrm { C } \right) } { m \left( { } ^ { 16 } \mathrm { O } \right) } - \frac { \left[ m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right] ^ { 2 } } { m \left( { } ^ { 58 } \mathrm { Ni } \right) m \left( { } ^ { 16 } \mathrm { O } \right) } \right] = \\
& = Q + E _ { k } \left( { } ^ { 16 } \mathrm { O } \right) \frac { \left[ m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right] \cdot \left[ m \left( { } ^ { 58 } \mathrm { Ni } \right) - m \left( { } ^ { 16 } \mathrm { O } \right) + m \left( { } ^ { 12 } \mathrm { C } \right) \right] } { m \left( { } ^ { 58 } \mathrm { Ni } \right) m \left( { } ^ { 16 } \mathrm { O } \right) }
\end{align*}
$$

Note that the first bracket in numerator is approximately equal to the mass of transferred particle (the ${ } ^ { 4 } \mathrm { He }$ nucleus), while the second one is approximately equal to the mass of target nucleus ${ } ^ { 54 } \mathrm { Fe }$. Inserting the numbers we get:

$$
\begin{align*}
E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) & = - 0.761 + 50 \cdot \frac { ( 15.99491 - 12 . ) ( 57.93535 - 15.99491 + 12 . ) } { 57.93535 \cdot 15.99491 } =  \tag{27}\\
& = 10.866 \mathrm { MeV }
\end{align*}
$$

Relativistic solution
In the relativistic version, solution is found starting from the following pair of equations (the first one is the law of conservation of energy and the second one the law of conservation of momentum):

$$
\begin{equation*}
m \left( { } ^ { 54 } \mathrm { Fe } \right) \cdot c ^ { 2 } + \frac { m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 } } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } } } = \frac { m \left( { } ^ { 12 } \mathrm { C } \right) \cdot c ^ { 2 } } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 12 } \mathrm { C } \right) / c ^ { 2 } } } + \frac { m ^ { * } \left( { } ^ { 58 } \mathrm { Ni } \right) \cdot c ^ { 2 } } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 58 } \mathrm { Ni } \right) / c ^ { 2 } } } \tag{28}
\end{equation*}
$$


$$
\frac { m \left( { } ^ { 16 } \mathrm { O } \right) \cdot v \left( { } ^ { 16 } \mathrm { O } \right) } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } } } = \frac { m \left( { } ^ { 12 } \mathrm { C } \right) \cdot v \left( { } ^ { 12 } \mathrm { C } \right) } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 12 } \mathrm { C } \right) / c ^ { 2 } } } + \frac { m ^ { * } \left( { } ^ { 58 } \mathrm { Ni } \right) \cdot v \left( { } ^ { 58 } \mathrm { Ni } \right) } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 58 } \mathrm { Ni } \right) / c ^ { 2 } } }
$$

All the masses in the equations are the rest masses; the ${ } ^ { 58 } \mathrm { Ni }$ is NOT in its ground-state, but in one of its excited states (having the mass denoted with $m ^ { * }$ ). Since ${ } ^ { 12 } \mathrm { C }$ and ${ } ^ { 16 } \mathrm { O }$ have the same velocity, this set of equations reduces to:

$$
\begin{align*}
m \left( { } ^ { 54 } \mathrm { Fe } \right) + \frac { m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } } } & = \frac { m ^ { * } \left( { } ^ { 58 } \mathrm { Ni } \right) } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 58 } \mathrm { Ni } \right) / c ^ { 2 } } }  \tag{29}\\
\frac { \left( m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right) \cdot v \left( { } ^ { 16 } \mathrm { O } \right) } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } } } & = \frac { m ^ { * } \left( { } ^ { 58 } \mathrm { Ni } \right) \cdot v \left( { } ^ { 58 } \mathrm { Ni } \right) } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 58 } \mathrm { Ni } \right) / c ^ { 2 } } }
\end{align*}
$$

Dividing the second equation with the first one gives:

$$
\begin{equation*}
v \left( { } ^ { 58 } \mathrm { Ni } \right) = \frac { \left( m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right) \cdot v \left( { } ^ { 16 } \mathrm { O } \right) } { \left( m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right) + m \left( { } ^ { 54 } \mathrm { Fe } \right) \sqrt { 1 - v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } } } \tag{30}
\end{equation*}
$$

The velocity of projectile can be calculated from its energy:

$$
\begin{align*}
& E _ { k i n } \left( { } ^ { 16 } \mathrm { O } \right) = \frac { m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 } } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } } } - m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 }  \tag{31}\\
& \sqrt { 1 - v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } } = \frac { m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 } } { E _ { k i n } \left( { } ^ { 16 } \mathrm { O } \right) + m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 } } \\
& v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } = 1 - \left( \frac { m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 } } { E _ { k i n } \left( { } ^ { 16 } \mathrm { O } \right) + m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 } } \right) ^ { 2 } \\
& v \left( { } ^ { 16 } \mathrm { O } \right) = \sqrt { 1 - \left( \frac { m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 } } { E _ { k i n } \left( { } ^ { 16 } \mathrm { O } \right) + m \left( { } ^ { 16 } \mathrm { O } \right) \cdot c ^ { 2 } } \right) ^ { 2 } } \cdot c
\end{align*}
$$

For the given numbers we get:

$$
\begin{align*}
v \left( { } ^ { 16 } \mathrm { O } \right) & = \sqrt { 1 - \left( \frac { 15.99491 \cdot 1.6605 \cdot 10 ^ { - 27 } \cdot \left( 2.9979 \cdot 10 ^ { 8 } \right) ^ { 2 } } { 50 \cdot 1.602 \cdot 10 ^ { - 13 } + 15.99491 \cdot \left( 2.9979 \cdot 10 ^ { 8 } \right) ^ { 2 } } \right) ^ { 2 } } \cdot c =  \tag{32}\\
& = \sqrt { 1 - 0.99666 ^ { 2 } } \cdot c = 0.08172 \cdot c = 2.4498 \cdot 10 ^ { 7 } \mathrm {~km} / \mathrm { s }
\end{align*}
$$

Now we can calculate:

$$
\begin{equation*}
v \left( { } ^ { 58 } \mathrm { Ni } \right) = \frac { ( 15.99491 - 12.0 ) \cdot 2.4498 \cdot 10 ^ { 7 } \mathrm {~km} / \mathrm { s } } { ( 15.99491 - 12.0 ) + 53.93962 \sqrt { 1 - 0.08172 ^ { 2 } } } = 1.6946 \cdot 10 ^ { 6 } \mathrm {~km} / \mathrm { s } \tag{33}
\end{equation*}
$$


The mass of ${ } ^ { 58 } \mathrm { Ni }$ in its excited state is then:

$$
\begin{align*}
m ^ { * } \left( { } ^ { 58 } \mathrm { Ni } \right) & = \left( m \left( { } ^ { 16 } \mathrm { O } \right) - m \left( { } ^ { 12 } \mathrm { C } \right) \right) \frac { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 58 } \mathrm { Ni } \right) / c ^ { 2 } } } { \sqrt { 1 - v ^ { 2 } \left( { } ^ { 16 } \mathrm { O } \right) / c ^ { 2 } } } \cdot \frac { v \left( { } ^ { 16 } \mathrm { O } \right) } { v \left( { } ^ { 58 } \mathrm { Ni } \right) } =  \tag{34}\\
& = ( 15.99491 - 12.0 ) \frac { \sqrt { 1 - \left( 1.6945 \cdot 10 ^ { 6 } / 2.9979 \cdot 10 ^ { 8 } \right) ^ { 2 } } } { \sqrt { 1 - 0.08172 ^ { 2 } } } \cdot \frac { 2.4498 \cdot 10 ^ { 7 } } { 1.6945 \cdot 10 ^ { 6 } } \text { a.m.u. } \\
& = 57.9470 \text { a.m.u. }
\end{align*}
$$

The excitation energy of ${ } ^ { 58 } \mathrm { Ni }$ is then:

$$
\begin{align*}
E _ { x } & = \left[ m ^ { * } \left( { } ^ { 58 } \mathrm { Ni } \right) - m \left( { } ^ { 58 } \mathrm { Ni } \right) \right] \cdot c ^ { 2 } = ( 57.9470 - 57.93535 ) \cdot 1.6605 \cdot 10 ^ { - 27 } \left( 2.9979 \cdot 10 ^ { 8 } \right) ^ { 2 } =  \tag{35}\\
& = 2.00722 \cdot 10 ^ { - 12 } / 1.602 \cdot 10 ^ { - 13 } \mathrm { MeV } / \mathrm { J } = 10.8636 \mathrm { MeV }
\end{align*}
$$

The relativistic and non-relativistic results are equal within 2 keV so both can be considered as correct -we can conclude that at the given beam energy, relativistic effects are not important.

Task 5b) For gamma-emission from the static nucleus, laws of conservation of energy and momentum give:

$$
\begin{align*}
E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) = & E _ { \gamma } + E _ { \text {recoil } }  \tag{36}\\
& p _ { \gamma } = p _ { \text {recoil } }
\end{align*}
$$

Gamma-ray and recoiled nucleus have, of course, opposite directions. For gamma-ray (photon), energy and momentum are related as:

$$
\begin{equation*}
E _ { \gamma } = p _ { \gamma } \cdot c \tag{37}
\end{equation*}
$$

In part a) we have seen that the nucleus motion in this energy range is not relativistic, so we have:

$$
\begin{equation*}
E _ { \text {recoil } } = \frac { p _ { \text {reoil } } ^ { 2 } } { 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) } = \frac { p _ { \gamma } ^ { 2 } } { 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) } = \frac { E _ { \gamma } ^ { 2 } } { 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) \cdot c ^ { 2 } } \tag{38}
\end{equation*}
$$

Inserting this into law of energy conservation Eq. (36), we get:

$$
\begin{equation*}
E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) = E _ { \gamma } + E _ { \text {recoil } } = E _ { \gamma } + \frac { E _ { \gamma } ^ { 2 } } { 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) \cdot c ^ { 2 } } \tag{39}
\end{equation*}
$$

This reduces to the quadratic equation:


$$
\begin{equation*}
E _ { \gamma } ^ { 2 } + 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 } \cdot E _ { \gamma } + 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 } E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) = 0 \tag{40}
\end{equation*}
$$

which gives the following solution:

$$
\begin{align*}
E _ { \gamma } & = \frac { - 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 } + \sqrt { 4 \left( m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 } \right) ^ { 2 } + 8 m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 } E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) } } { 2 } =  \tag{41}\\
& = \sqrt { \left( m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 } \right) ^ { 2 } + 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 } E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) } - m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 }
\end{align*}
$$

Inserting numbers gives:

$$
\begin{equation*}
E _ { \gamma } = 10.8633 \mathrm { MeV } \tag{42}
\end{equation*}
$$

The equation (37) can also be reduced to an approximate equation before inserting numbers:

$$
\begin{equation*}
E _ { \gamma } = E _ { x } \left( 1 - \frac { E _ { x } } { 2 m \left( { } ^ { 58 } \mathrm { Ni } \right) c ^ { 2 } } \right) = 10.8633 \mathrm { MeV } \tag{43}
\end{equation*}
$$

The recoil energy is now easily found as:

$$
\begin{equation*}
E _ { \text {recoil } } = E _ { x } \left( { } ^ { 58 } \mathrm { Ni } \right) - E _ { \gamma } = 1.1 \mathrm { keV } \tag{44}
\end{equation*}
$$

Due to the fact that nucleus emitting gamma-ray $\left( { } ^ { 58 } \mathrm { Ni } \right)$ is moving with the high velocity, the energy of gamma ray will be changed because of the Doppler effect. The relativistic Doppler effect (when source is moving towards observer/detector) is given with this formula:

$$
\begin{equation*}
f _ { \text {detector } } = f _ { \gamma , \text { emitted } } \sqrt { \frac { 1 + \beta } { 1 - \beta } } \tag{45}
\end{equation*}
$$

and since there is a simple relation between photon energy and frequency $( E = h f )$, we get the similar expression for energy:

$$
\begin{equation*}
E _ { \text {detector } } = E _ { \gamma , \text { emitted } } \sqrt { \frac { 1 + \beta } { 1 - \beta } } \tag{46}
\end{equation*}
$$

where $\beta = v / c$ and v is the velocity of emitter (the ${ } ^ { 58 } \mathrm { Ni }$ nucleus). Taking the calculated value of the ${ } ^ { 58 } \mathrm { Ni }$ velocity (equation 29) we get:

$$
\begin{equation*}
E _ { \text {detector } } = E _ { \gamma , \text { emitted } } \sqrt { \frac { 1 + \beta } { 1 - \beta } } = 10.863 \sqrt { \frac { 1 + 0.00565 } { 1 - 0.00565 } } = 10.925 \mathrm { MeV } \tag{47}
\end{equation*}
$$
