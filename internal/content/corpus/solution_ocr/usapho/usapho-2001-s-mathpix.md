---
id: solution-ocr-usapho-2001-s
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2001_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2001-a1, usapho-2001-a2, usapho-2001-a3, usapho-2001-a4, usapho-2001-b1, usapho-2001-b2]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
| AAPT | UNITED STATES PHYSICS TEAM |
| :--- | :--- |
| AIP | 2001 |

2001 Semi-Final Exam
Part A - Solutions

A1. Each ball starts at rest and falls through a height $H$ to its lowest point, which we will take as the zero of gravitational potential energy. Applying energy conservation, each ball reaches its lowest point with velocity

$$
v _ { d } = \sqrt { 2 g H } .
$$

The large ball collides elastically with the floor and the direction of its velocity reverses. Moving upward, $M$ collides elastically with $m$ moving downward. Letting $v$ be the speed of $m$ and $V$ be the speed of $M$ after the collision and taking down to be negative and up positive, momentum conservation yields

$$
M v _ { d } - m v _ { d } = m v + M V .
$$

Solving for $V$

$$
V = \frac { \left( M v _ { d } - m v _ { d } - m v \right) } { M } = v _ { d } - \frac { m } { M } \left( v _ { d } + v \right)
$$

Energy conservation yields: $\quad \frac { 1 } { 2 } M v _ { d } { } ^ { 2 } + \frac { 1 } { 2 } m v _ { d } { } ^ { 2 } = \frac { 1 } { 2 } M V ^ { 2 } + \frac { 1 } { 2 } m v ^ { 2 }$. Inserting $V$ from the momentum equation,

$$
\begin{gathered}
\frac { 1 } { 2 } M v _ { d } ^ { 2 } + \frac { 1 } { 2 } m v _ { d } ^ { 2 } = \frac { 1 } { 2 } M \left( v _ { d } - \frac { m } { M } \left( v _ { d } + v \right) \right) ^ { 2 } + \frac { 1 } { 2 } m v ^ { 2 } \\
\frac { 1 } { 2 } M v _ { d } ^ { 2 } + \frac { 1 } { 2 } m v _ { d } ^ { 2 } = \frac { 1 } { 2 } M v _ { d } ^ { 2 } - \frac { 1 } { 2 } M 2 v _ { d } \frac { m } { M } \left( v _ { d } + v \right) + \frac { 1 } { 2 } M \frac { m ^ { 2 } } { M ^ { 2 } } \left( v _ { d } ^ { 2 } + 2 v _ { d } v + v ^ { 2 } \right) + \frac { 1 } { 2 } m v ^ { 2 } \\
\frac { 1 } { 2 } m v _ { d } ^ { 2 } = - \frac { 1 } { 2 } 2 v _ { d } m \left( v _ { d } + v \right) + \frac { 1 } { 2 } \frac { m ^ { 2 } } { M } \left( v _ { d } ^ { 2 } + 2 v _ { d } v + v ^ { 2 } \right) + \frac { 1 } { 2 } m v ^ { 2 } .
\end{gathered}
$$

Multiplying by $2 \mathrm { M } / \mathrm { m }$

$$
M v _ { d } { } ^ { 2 } = - 2 v _ { d } M \left( v _ { d } + v \right) + m \left( v _ { d } { } ^ { 2 } + 2 v _ { d } v + v ^ { 2 } \right) + M v ^ { 2 }
$$

Regrouping terms

$$
0 = ( m + M ) v ^ { 2 } - 2 v v _ { d } ( M - m ) + ( m - 3 M ) v _ { d } ^ { 2 } .
$$

Solving the quadratic equation for $v$ yields

$$
v = \left( \frac { M - m \pm 2 M } { M + m } \right) v _ { d } = \left( \frac { M - m \pm 2 M } { M + m } \right) \sqrt { 2 g H } .
$$

Since we want m moving upward (positive velocity), we select the plus sign.

$$
v = \left( \frac { 3 M - m } { M + m } \right) \sqrt { 2 g H }
$$

Let $h$ equal the maximum height of the small ball above its lowest position. At $m$ 's highest point its kinetic energy is zero and


$$
m g h = \frac { 1 } { 2 } m v ^ { 2 } = \frac { 1 } { 2 } m \left( \left( \frac { 3 M - m } { M + m } \right) \sqrt { 2 g H } \right) ^ { 2 } = m g H \left( \frac { 9 M ^ { 2 } - 6 M m + m ^ { 2 } } { M ^ { 2 } + 2 M m + m ^ { 2 } } \right)
$$

The ball's height above its initial position is $\Delta h = h - H$.

$$
\begin{gathered}
\Delta h = H \left( \frac { 9 M ^ { 2 } - 6 M m + m ^ { 2 } } { M ^ { 2 } + 2 M m + m ^ { 2 } } \right) - H = H \left( \frac { 9 M ^ { 2 } - 6 M m + m ^ { 2 } - M ^ { 2 } - 2 M m - m ^ { 2 } } { M ^ { 2 } + 2 M m + m ^ { 2 } } \right) \\
\Delta h = H \left( \frac { 8 M ^ { 2 } - 8 M m } { M ^ { 2 } + 2 M m + m ^ { 2 } } \right) = H \frac { 8 M ( M - m ) } { ( M + m ) ^ { 2 } } = H \frac { 8 ( 1 - m / M ) } { ( 1 + m / M ) ^ { 2 } }
\end{gathered}
$$

A2. (10) a. We will write the fields $\vec { E } _ { 1 } , \vec { E } _ { 2 }$. and $\vec { E } _ { 3 }$ due to $q _ { 1 } , q _ { 2 }$, and $Q$, respectively, in terms of the usual unit vectors $\hat { i }$ and $\hat { j }$. See accompanying diagram.

$$
\vec { E } _ { 1 } = - \hat { j } k \frac { q _ { 1 } } { r _ { 1 } ^ { 2 } }
$$

where $k =$ Coulomb's constant.

$$
\begin{gathered}
\vec { E } _ { 2 } = - \hat { i } k \frac { q _ { 2 } } { r _ { 2 } ^ { 2 } } \\
\vec { E } _ { 3 } = - ( \hat { i } \cos \theta + \hat { j } \sin \theta ) k \frac { Q } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) } .
\end{gathered}
$$

Noting that

$$
\begin{gathered}
\cos \theta = \frac { r _ { 2 } } { \sqrt { r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } } } \text { and } \sin \theta = \frac { r _ { 1 } } { \sqrt { r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } } } \text {, the total field becomes } \\
\qquad \vec { E } = - k \left( \frac { q _ { 2 } } { r _ { 2 } ^ { 2 } } + \frac { Q r _ { 2 } } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } } \right) \hat { i } - k \left( \frac { q _ { 1 } } { r _ { 1 } ^ { 2 } } + \frac { Q r _ { 1 } } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } } \right) \hat { j }
\end{gathered}
$$

(5) $b$. The field at X will vanish if each component vanishes.

$$
\begin{aligned}
& \left( \frac { q _ { 2 } } { r _ { 2 } ^ { 2 } } + \frac { Q r _ { 2 } } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } } \right) = 0 \quad \text { or } \quad q _ { 2 } = - \frac { Q r _ { 2 } ^ { 3 } } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } } \\
& \left( \frac { q _ { 1 } } { r _ { 1 } ^ { 2 } } + \frac { Q r _ { 1 } } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } } \right) = 0 \quad \text { or } \quad q _ { 1 } = - \frac { Q r _ { 1 } ^ { 3 } } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } }
\end{aligned}
$$

(5) c. The electrostatic potential at X is

$$
V = k \frac { q _ { 1 } } { r _ { 1 } } + k \frac { q _ { 2 } } { r _ { 2 } } + k \frac { Q } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 1 / 2 } } .
$$

For the charges found in Part b

$$
V = - k \frac { Q r _ { 1 } ^ { 2 } } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } } - k \frac { Q r _ { 2 } ^ { 2 } } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } } + k \frac { Q } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 1 / 2 } } = k \frac { Q \left( - r _ { 1 } ^ { 2 } - r _ { 2 } ^ { 2 } + r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) } { \left( r _ { 1 } ^ { 2 } + r _ { 2 } ^ { 2 } \right) ^ { 3 / 2 } } = 0
$$


(5) d . The total work is done by the electric force as a fourth charge $q _ { 4 }$ is moved from infinity to the point marked X is $\quad W = - \Delta U = - q _ { 4 } \Delta V = - q _ { 4 } \left( V _ { X } - V _ { \infty } \right) = - q _ { 4 } ( 0 - 0 ) = 0$

A3. (5) a. The resultant wave is the sum of the individual waves

$$
\psi ( z , t ) = A \sin \left( k z _ { 1 } - \omega t + \phi \right) + A \sin \left( k z _ { 2 } - \omega t + \phi \right) .
$$

Using the trigonometric identity provided

$$
\begin{gathered}
\psi ( z , t ) = A 2 \cos \left[ \frac { 1 } { 2 } \left( \left( k z _ { 1 } - \omega t + \phi \right) - \left( k z _ { 2 } - \omega t + \phi \right) \right) \right] \sin \left[ \frac { 1 } { 2 } \left( \left( k z _ { 1 } - \omega t + \phi \right) + \left( k z _ { 2 } - \omega t + \phi \right) \right) \right] \\
\psi ( z , t ) = 2 A \cos \left[ \frac { k } { 2 } \left( z _ { 1 } - z _ { 2 } \right) \right] \sin \left[ \frac { k } { 2 } \left( z _ { 1 } + z _ { 2 } \right) - \omega t + \phi \right] .
\end{gathered}
$$

(4) b. The amplitude of the resultant traveling wave is zero if $\cos \left[ \frac { k } { 2 } \left( z _ { 1 } - z _ { 2 } \right) \right] = 0$.
This occurs when the argument of the cosine is an odd half-integer multiple of $\pi$.

$$
\frac { k } { 2 } \Delta z = \frac { 2 n + 1 } { 2 } \pi \quad \text { for } \quad n = 0,1,2 , \ldots
$$

Since

$$
k = \frac { 2 \pi } { \lambda } \quad \frac { 1 } { 2 } \frac { 2 \pi } { \lambda } \Delta z = \frac { 2 n + 1 } { 2 } \pi .
$$

or

$$
\Delta z = \left( \frac { 2 n + 1 } { 2 } \right) \lambda \quad \text { for } \quad n = 0,1,2 , \ldots
$$

(4) c . The amplitude of the resultant traveling wave is maximum if $\cos \left[ \frac { k } { 2 } \left( z _ { 1 } - z _ { 2 } \right) \right] = \pm 1$. This occurs when the argument of the cosine is an integer multiple of $\pi$.

$$
\begin{aligned}
\frac { k } { 2 } \Delta z = \frac { 1 } { 2 } \frac { 2 \pi } { \lambda } \Delta z = n \pi \quad & \text { for } \quad n = 0,1,2 , \ldots \\
\Delta z = n \lambda & \text { for } \\
& n = 0,1,2 , \ldots
\end{aligned}
$$

(4) d . The frequency does not change as the wave enters the new material. Letting $\lambda _ { \mathrm { m } }$ be the wavelength in the material

$$
\begin{gathered}
\frac { v _ { \mathrm { sc } } } { \lambda } = \frac { v _ { \mathrm { sm } } } { \lambda _ { \mathrm { m } } } . \\
\lambda _ { \mathrm { m } } = \frac { v _ { \mathrm { sm } } } { v _ { \mathrm { so } } } \lambda = \frac { 1020 \mathrm {~m} / \mathrm { s } } { 340 \mathrm {~m} / \mathrm { s } } \lambda = 3 \lambda
\end{gathered}
$$

(8) e. The reflected sound intensity will be a minimum when the condition specified in part (b) is met. $\Delta z$ is twice the thickness (up and down) of the coating material and $\lambda$ is the wavelength in the material.

$$
\begin{gathered}
2 t = \left( \frac { 2 n + 1 } { 2 } \right) \lambda _ { m } \quad \text { for } \quad n = 0,1,2 , \ldots \\
2 t = \left( \frac { 2 n + 1 } { 2 } \right) \frac { v _ { s m } } { f }
\end{gathered}
$$


or

$$
f = \left( \frac { 2 n + 1 } { 2 } \right) \frac { v _ { s m } } { 2 t } = \left( \frac { 2 n + 1 } { 2 } \right) \frac { 1020 \mathrm {~m} / \mathrm { s } } { 2 ( 0.200 \mathrm {~m} ) } = ( 2 n - 1 ) 1275 \mathrm {~Hz}
$$

Inserting the integers into the above equation, we have

$$
f = 1275 \mathrm {~Hz} , 3825 \mathrm {~Hz} , 6375 \mathrm {~Hz} , 8925 \mathrm {~Hz}
$$

A4.(25 points) The sun's radius is $R _ { \mathrm { S } } = 6.96 \times 10 ^ { 8 } \mathrm {~m}$ and its surface temperature is $T = 5.80 \times 10 ^ { 3 } \mathrm {~K}$. The sun-Earth distance is $R _ { \mathrm { ES } } = 1.50 \times 10 ^ { 11 } \mathrm {~m}$. Each set of reactions release 2 neutrinos and thermal energy $Q = 26.2 \mathrm { MeV } = 26.2 \mathrm { MeV } \left( 1.6 \times 10 ^ { - 13 } \mathrm {~J} / \mathrm { MeV } \right) = 4.192 \times 10 ^ { - 12 } \mathrm {~J}$. The energy/neutrino ratio is $2.096 \times 10 ^ { - 12 } \mathrm {~J} / \mathrm { v }$ For a perfect absorber emitter, $e = 1$.

The power radiated by the sun is $P = e \sigma A T ^ { 4 } = e \sigma \left( 4 \pi R _ { S } ^ { 2 } \right) T ^ { 4 }$.
The solar intensity reaching the Earth is

$$
I = \frac { P } { A _ { E S } } = \frac { e \sigma 4 \pi R _ { S } { } ^ { 2 } T ^ { 4 } } { 4 \pi R _ { E S } { } ^ { 2 } } = \frac { ( 1 ) \left( 5.67 \times 10 ^ { - 8 } \mathrm {~J} / \left( \mathrm { s } \cdot \mathrm {~m} ^ { 2 } \cdot K ^ { 4 } \right) \right) \left( 6.96 \times 10 ^ { 8 } \mathrm {~m} \right) ^ { 2 } ( 5800 \mathrm {~K} ) ^ { 4 } } { \left( 1.50 \times 10 ^ { 11 } \mathrm {~m} \right) ^ { 2 } } = 1.38 \times 10 ^ { 3 } \frac { \mathrm {~J} } { \mathrm {~s} \cdot \mathrm {~m} ^ { 2 } }
$$

To find the neutrino intensity $I _ { \mathrm { v } }$ divide the solar intensity $I$ by the energy/neutrino ratio.

$$
I _ { v } = \frac { l } { Q / v } = \frac { 1380 \mathrm {~J} / \left( \mathrm { s } \cdot \mathrm {~m} ^ { 2 } \right) } { 2.096 \times 10 ^ { - 12 } \mathrm {~J} / v } = 6.59 \times 10 ^ { 14 } \mathrm {~s} ^ { - 1 } \mathrm {~m} ^ { - 2 }
$$

The neutrino intensity is also equal to their velocity $c$ times their number density $N / V \cdot I _ { v } = c N / V$.
Solving for $N$,

$$
N = \frac { l _ { v } V } { c } = \frac { \left( 6.59 \times 10 ^ { 14 } \mathrm {~s} ^ { - 1 } \mathrm {~m} ^ { - 2 } \right) \left( 8.00 \times 10 ^ { - 2 } \mathrm {~m} ^ { 3 } \right) } { 3.0 \times 10 ^ { 8 } \mathrm {~m} / \mathrm { s } } = 1.76 \times 10 ^ { 5 }
$$


![](../../../figures/solution-ocr/65dc8021746401fb281b3e93.jpg)
2001 Semi-Final Exam
Part B - Solutions

B1. a. (5) Using Gauss's Law the field is $E = k \frac { Q _ { \text {enc } } } { r ^ { 2 } } \quad$ where $k$ is Coulomb's constant and $Q _ { \text {enc } }$ is the total charge enclosed by a Gaussian sphere of radius $r$. Since $b > r > a , Q _ { \text {enc } } = + Q$. The field direction is radially outward and

$$
\vec { E } = k \frac { Q } { r ^ { 2 } } \text { radially outward }
$$

b. (5) The total potential anywhere in the region $b \geq r \geq a$ is

$$
V = k \frac { ( - Q ) } { b } + k \frac { Q } { r }
$$

where the first term is due to the outer sphere and the second term to the inner sphere. finding the difference between $V$ at $r = a$ and $V$ at $r = b$,

$$
\begin{equation*}
V = \left( k \frac { ( - Q ) } { b } + k \frac { Q } { a } \right) - \left( k \frac { ( - Q ) } { b } + k \frac { Q } { b } \right) = k Q \left( \frac { 1 } { a } - \frac { 1 } { b } \right) \tag{B1-1}
\end{equation*}
$$

c. (5) The capacitance is defined

$$
C = \frac { Q } { V } .
$$

Inserting equation (B1-1)

$$
C = \frac { Q } { k Q \left( \frac { 1 } { a } - \frac { 1 } { b } \right) } = \frac { a b } { k ( b - a ) }
$$

d. (5) The work done in charging the capacitor to charge $Q$ and voltage $V$ is $W = \frac { 1 } { 2 } Q V$. This is equal to the stored energy

$$
U = \frac { 1 } { 2 } Q V = \frac { 1 } { 2 } \frac { Q ^ { 2 } } { C } = \frac { k ( b - a ) } { 2 a b } Q ^ { 2 }
$$

e. (10) Since the capacitor has been disconnected from the battery without discharging the charge on the shells is still $Q$. Using the subscript K to denote quantities with the dielectric inserted, $Q _ { K } = Q$.
In $E , V$, and $C$

$$
k = \frac { 1 } { 4 \pi \varepsilon _ { o } } \rightarrow \frac { 1 } { 4 \pi K \varepsilon _ { o } } = \frac { k } { K }
$$

Therefore

$$
\begin{aligned}
E _ { K } & = E / K \\
V _ { A } & = V / K \\
C _ { K } & = K C
\end{aligned}
$$


For the stored energy

$$
U _ { K } = \frac { 1 } { 2 } Q _ { K } V _ { K } = \frac { 1 } { 2 } Q \frac { V } { K } = \frac { U } { K }
$$

f. (5) The magnitude of the field at $b > r > a$ is $E _ { K } = \frac { E } { K } = k \frac { ( Q / K ) } { r ^ { 2 } }$. Using Gauss's Law, the total charge enclosed by a Gaussian sphere of radius $r$ is $Q _ { \text {enc } } = Q / K$. This charge includes the charge on the conducting shell $+ Q$ and the charge on the inner surface of the dielectric $Q _ { \mathrm { D } }$.

$$
Q _ { \text {enc } } = Q / K = + Q + Q _ { D }
$$

Solving for

$$
Q _ { D } = - \frac { Q ( K - 1 ) } { K }
$$

g. (10) Since the capacitor is left connected to the battery

$$
V _ { K } = V
$$

Since $V$ is unchanged so is $E$.

$$
E _ { K } = E .
$$

The capacitance is independent of whether or not the battery was connected.

$$
C _ { K } = K C
$$

Additional charge flows onto the capacitor

$$
Q _ { K } = C _ { K } V _ { K } = K C V = K Q
$$

The energy stored is

$$
U _ { K } = \frac { 1 } { 2 } Q _ { K } V _ { K } = \frac { 1 } { 2 } K Q V = K U
$$

Applying Gauss's Law to find the total charge enclosed by a Gaussian sphere with radius $r$,

$$
Q _ { e n c } = Q = Q _ { K } + Q _ { D } = K Q + Q _ { D }
$$

Solving for

$$
Q _ { D } = - Q ( K - 1 )
$$

h. (5) The two halves can be considered capacitors in parallel. Each has half the capacitance it would have if it were whole. Therefore

$$
C = C _ { 1 } + C _ { 2 } = \frac { 1 } { 2 } \frac { K _ { 1 } a b } { k ( b - a ) } + \frac { 1 } { 2 } \frac { K _ { 2 } a b } { k ( b - a ) } = \frac { 1 } { 2 } \frac { \left( K _ { 1 } + K _ { 2 } \right) a b } { k ( b - a ) }
$$

B2. a. (5) The magnetic force is

$$
\vec { F } = q \vec { v } \times \vec { B } .
$$

Inserting the expressions for the velocity and magnetic field and taking the cross product,

$$
\begin{gathered}
\vec { F } = q \left( v _ { r } \hat { u } _ { r } + r \omega \hat { u } _ { \theta } \right) \times B _ { o } \hat { u } _ { z } = q B _ { o } \left( v _ { r } \hat { u } _ { r } \times \hat { u } _ { z } + r \omega \hat { u } _ { \theta } \times \hat { u } _ { z } \right) \\
\vec { F } = q B _ { o } \left( r \omega \hat { u } _ { r } - v _ { r } \hat { u } _ { \theta } \right)
\end{gathered}
$$

b. (5) At any instant the displacement is in the direction of the velocity while the force is perpendicular to it. Therefore

$$
W = 0 .
$$

Or

$$
d W = \vec { F } \cdot d \vec { l } = \vec { F } \cdot \vec { v } d t = q ( \vec { v } \times \vec { B } ) \cdot \vec { v } d t = 0
$$

c. (8) The magnetic force does no work. The other force has an associated potential energy. Using the work-energy theorem which reduces to conservation of mechanical energy,

$$
U _ { o } + K _ { o } = U + K
$$

Since the particle is initially at rest. its initial kinetic energy is zero. $K _ { o } = 0$
Substituting the energy terms

$$
- \frac { k } { r _ { o } ^ { 2 } } = \frac { 1 } { 2 } m v ^ { 2 } - \frac { k } { r ^ { 2 } } ,
$$

Where

$$
v ^ { 2 } = \left( v _ { r } \hat { u } _ { r } + r \omega \hat { u } _ { \theta } \right) \cdot \left( v _ { r } \hat { u } _ { r } + r \omega \hat { u } _ { \theta } \right) = v _ { r } ^ { 2 } + r ^ { 2 } \omega ^ { 2 }
$$


Combining the last two equations

$$
\begin{equation*}
- \frac { k } { r _ { 0 } ^ { 2 } } = - \frac { k } { r ^ { 2 } } + \frac { 1 } { 2 } m \left( v _ { r } ^ { 2 } + r ^ { 2 } \omega ^ { 2 } \right) \tag{B2-1}
\end{equation*}
$$

d. (7) The torque about the $z$-axis is $\vec { \tau } = \vec { r } \times \vec { F } = r \hat { u _ { r } } \times \vec { F }$. The other force $\vec { F } = - \frac { 2 k } { r ^ { 3 } } \hat { u } _ { r }$ contributes no torque, since $\hat { u } _ { r } \times \hat { u } _ { r } = 0$. Therefore the net torque is due to the magnetic force

$$
\vec { \tau } = r \hat { u } _ { r } \times q B _ { o } \left( r o \hat { u } _ { r } - v _ { r } \hat { u } _ { \theta } \right) = - q B _ { o } r v _ { r } \hat { u } _ { z }
$$

e. (5) The net torque is equal to the time rate of change of angular momentum. The radial component of the velocity $v _ { r }$ is equal to the time rate of change of $r$.

$$
\begin{gathered}
\frac { d \vec { L } } { d t } = \vec { \tau } = - q B _ { o } r v _ { r } \hat { u } _ { z } = - q B _ { o } r \frac { d r } { d t } \hat { u } _ { z } = - q B _ { o } \frac { 1 } { 2 } \frac { d r ^ { 2 } } { d t } \hat { u } _ { z } \\
\frac { d } { d t } \left( \vec { L } + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } \hat { u } _ { z } \right) = 0
\end{gathered}
$$

Or

$$
\vec { L } + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } \dot { u } _ { z } = \vec { C } ,
$$

where $\vec { C }$ is a constant vector.

$$
\vec { L } = \vec { C } - q B _ { o } \frac { 1 } { 2 } r ^ { 2 } \hat { u } _ { z }
$$

Dropping the vector notation since all motion occurs in the $x y$-plane,

$$
L = C - q B _ { o } \frac { 1 } { 2 } r ^ { 2 }
$$

f. (5) For a particle the magnitude of the angular momentum about the $z$-axis can be written

$$
L = m r ^ { 2 } \omega .
$$

Combining the last two equations

$$
m r ^ { 2 } ( t ) = C - q B _ { o } \frac { 1 } { 2 } r ^ { 2 }
$$

Or

$$
m r ^ { 2 } w + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } = C
$$

The constant $C$ can be evaluated in terms of the initial conditions

$$
m r ^ { 2 } \omega + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } = m r _ { o } ^ { 2 } \omega _ { o } + q B _ { o } \frac { 1 } { 2 } r _ { o } ^ { 2 }
$$

since the particle is initially at rest $\omega _ { o } = 0$ and

$$
m r ^ { 2 } \omega + q B _ { o } \frac { 1 } { 2 } r ^ { 2 } = q B _ { o } \frac { 1 } { 2 } r _ { o } ^ { 2 }
$$

Solving for $\omega$, we have

$$
\begin{align*}
m r ^ { 2 } \omega & = q B _ { o } \frac { 1 } { 2 } \left( r _ { o } ^ { 2 } - r ^ { 2 } \right) \\
\omega & = \frac { q B _ { o } } { 2 m } \left( \frac { r _ { o } ^ { 2 } } { r ^ { 2 } } - 1 \right) \tag{B2-2}
\end{align*}
$$

g. (5) At $r _ { \text {min } } , v _ { T } = 0$, Equation (B2-1) becomes

$$
- \frac { k } { r _ { a } ^ { 2 } } = - \frac { k } { r _ { \text {min } } ^ { 2 } } + \frac { 1 } { 2 } m r _ { \text {min } } ^ { 2 } \omega ^ { 2 }
$$

Bring the other k term to the left and substituting equation (B2-2) at $r _ { \mathrm { min } }$


$$
\frac { k } { r _ { \min } ^ { 2 } } - \frac { k } { r _ { o } ^ { 2 } } = \frac { 1 } { 2 } m r _ { \min } ^ { 2 } \left( \frac { q B _ { 0 } } { 2 m } \left( \frac { r _ { 0 } ^ { 2 } } { r _ { \min } ^ { 2 } } - 1 \right) \right) ^ { 2 }
$$

or multiplying by $r _ { \text {min } } { } ^ { 2 } r _ { o } { } ^ { 2 } , \quad k \left( r _ { o } { } ^ { 2 } - r _ { \text {min } } { } ^ { 2 } \right) = \frac { r _ { o } { } ^ { 2 } q ^ { 2 } B _ { o } { } ^ { 2 } } { 8 m } \left( r _ { o } { } ^ { 2 } - r _ { \text {min } } { } ^ { 2 } \right) ^ { 2 }$.
Canceling the common factor

$$
k = \frac { r _ { 0 } { } ^ { 2 } q ^ { 2 } B _ { o } { } ^ { 2 } } { 8 m } \left( r _ { 0 } { } ^ { 2 } - r _ { \mathrm { min } } { } ^ { 2 } \right)
$$

and solving for

$$
\begin{equation*}
r _ { \mathrm { min } } ^ { 2 } = r _ { 0 } ^ { 2 } - \frac { 8 \mathrm {~km} } { q ^ { 2 } B _ { o } ^ { 2 } r _ { o } ^ { 2 } } \tag{B2-3}
\end{equation*}
$$

h. (5) The particle will not reach the origin if $r _ { \mathrm { mn } } ^ { 2 } > 0$. From the preceding expression, this occurs when
or solving for

$$
\begin{gathered}
r _ { o } ^ { 2 } > \frac { 8 k m } { q ^ { 2 } B _ { o } ^ { 2 } r _ { o } ^ { 2 } } \\
B _ { o } ^ { 2 } > \frac { 8 k m } { q ^ { 2 } r _ { o } ^ { 4 } }
\end{gathered}
$$

Thus

$$
\left| B _ { o } \right| > \frac { 1 } { r _ { o } ^ { 2 } } \sqrt { \frac { 8 k m } { q ^ { 2 } } }
$$

i. (5) Evaluating equation (B2-2)
at $r = r _ { 0 }$
at $r = r _ { \text {min } }$

$$
\begin{aligned}
\omega _ { 0 } & = \frac { q B _ { 0 } } { 2 m } \left( \frac { r _ { 0 } ^ { 2 } } { r _ { 0 } ^ { 2 } } - 1 \right) = 0 \\
\omega & = \frac { q B _ { 0 } } { 2 m } \left( \frac { r _ { 0 } ^ { 2 } } { r _ { \min } ^ { 2 } } - 1 \right)
\end{aligned}
$$

combining with equation (B2-3) $\omega = \frac { q B _ { o } } { 2 m } \left( \frac { r _ { o } { } ^ { 2 } } { r _ { o } { } ^ { 2 } - \frac { 8 k m } { q ^ { 2 } B _ { o } { } ^ { 2 } r _ { o } { } ^ { 2 } } } - 1 \right) = \frac { q B _ { o } } { 2 m } \left( \frac { 1 } { 1 - \frac { 8 k m } { q ^ { 2 } B _ { o } { } ^ { 2 } r _ { o } { } ^ { 4 } } } - 1 \right)$.
For large $B _ { 0 } , \frac { 8 k m } { q ^ { 2 } B _ { o } { } ^ { 2 } r _ { o } { } ^ { 4 } }$ is small. Using the binomial expansion

$$
\omega = \frac { q B _ { o } } { 2 m } \left( 1 + \frac { 8 k m } { q ^ { 2 } B _ { o } ^ { 2 } r _ { o } ^ { 4 } } - 1 \right) = \frac { 4 k } { q B _ { o } r _ { o } ^ { 4 } }
$$
