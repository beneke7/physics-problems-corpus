---
id: solution-ocr-apho-2006-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2006/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2006-t3]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Theoretical Question 3

## Solutions

## A

The change of the pressure is related to the change in the density via

$$
\begin{equation*}
\Delta P = - K \frac { \Delta V } { V } = K \frac { \Delta \rho } { \rho _ { 0 } } , \tag{1}
\end{equation*}
$$

where $\rho _ { 0 }$ is the density of water at the surface.

$$
\begin{equation*}
\rho = \rho _ { 0 } + \Delta \rho = \rho _ { 0 } \left( 1 + \frac { \Delta \rho } { \rho _ { 0 } } \right) = \rho _ { 0 } \left( 1 + \frac { \Delta P } { K } \right) , \tag{2}
\end{equation*}
$$

where $\Delta P \approx P$ (we neglect the atmospheric pressure). Then

$$
\begin{equation*}
\rho ( x ) = \rho _ { 0 } \left( 1 + \frac { P ( x ) } { K } \right) . \tag{A1}
\end{equation*}
$$

The change of the hydrostatic pressure with the depth equals

$$
\begin{gather*}
d P = g \cdot \rho ( x ) d x , \quad \frac { d P } { d x } = g \rho ( x ) = g \rho _ { 0 } + g \rho _ { 0 } \frac { P ( x ) } { K } ,  \tag{4}\\
\frac { d P ( x ) } { d x } - \frac { g \rho _ { 0 } } { K } P ( x ) = g \rho _ { 0 } . \tag{5}
\end{gather*}
$$

The solution of this differential equation with boundary condition $P ( 0 ) = 0$ is

$$
\begin{equation*}
P ( x ) = K \left( \exp \frac { g \rho _ { 0 } } { K } x - 1 \right) . \tag{6}
\end{equation*}
$$

Since $\frac { g \rho _ { 0 } } { K } H \ll 1$, we can use the expansion

$$
\begin{equation*}
\exp z \approx 1 + z + \frac { z ^ { 2 } } { 2 ! } + \ldots , \tag{7}
\end{equation*}
$$

thus

$$
\begin{equation*}
P ( x ) \cong g \rho _ { 0 } x + \frac { 1 } { 2 K } \left( g \rho _ { 0 } x \right) ^ { 2 } \tag{8}
\end{equation*}
$$

The last formula can be simply derived using the method of successive iterations. First, the pressure can be estimated without compressibility taken into account:

$$
\begin{equation*}
P _ { 0 } ( x ) = g \rho _ { 0 } x . \tag{9}
\end{equation*}
$$


Correction to the density in the first approximation can be obtained using $P _ { 0 } ( x )$ :

$$
\begin{equation*}
\rho _ { 1 } ( x ) = \rho _ { o } \left( 1 + \frac { g \rho _ { 0 } x } { K } \right) . \tag{10}
\end{equation*}
$$

Now, correction to pressure can be obtained using $\rho _ { 1 } ( x )$ :

$$
\begin{equation*}
P _ { 1 } ( H ) = \int _ { 0 } ^ { H } \rho _ { 1 } ( x ) g d x = g \rho _ { 0 } x + \frac { 1 } { 2 K } \left( g \rho _ { 0 } x \right) ^ { 2 } , \tag{11}
\end{equation*}
$$

as obtained earlier.
Putting in the numerical values, we get

$$
\begin{equation*}
P ( H ) = \left( 1098 \cdot 10 ^ { 5 } + 28,7 \cdot 10 ^ { 5 } \right) \Pi a \approx 1,13 \cdot 10 ^ { 8 } \Pi a . \tag{A2}
\end{equation*}
$$

## B

The total work done by the gases is zero. Thus at any moment the total internal energy equals the original value:

$$
\begin{equation*}
\frac { m _ { 1 } } { \mu _ { 1 } } C _ { V } T _ { 1 } + \frac { m _ { 2 } } { \mu _ { 2 } } C _ { V } T _ { 2 } = \frac { m _ { 1 } } { \mu _ { 1 } } C _ { V } T _ { 10 } + \frac { m _ { 2 } } { \mu _ { 2 } } C _ { V } T _ { 20 , } \tag{13}
\end{equation*}
$$

where $\mu _ { 1 } = 2 \mathrm {~g} /$ mole and $\mu _ { 2 } = 32 \mathrm {~g} /$ mole are molar masses of hydrogen and oxygen, and $\mathrm { C } _ { \mathrm { V } } = 5 \mathrm { R } / 2$ is the molar heat capacity of diatomic gas. The final temperature of the system is

$$
\begin{equation*}
T = \frac { \frac { m _ { 1 } } { \mu _ { 1 } } T _ { 10 } + \frac { m _ { 2 } } { \mu _ { 2 } } T _ { 20 } } { \frac { m _ { 1 } } { \mu _ { 1 } } + \frac { m _ { 2 } } { \mu _ { 2 } } } = 325 \mathrm {~K} . \tag{B1}
\end{equation*}
$$

The temperature of oxygen decreases, and the amount of heat Q is transferred to hydrogen by heat conduction. The piston will move in the direction of the oxygen, thus the hydrogen does a positive work $A > 0$, and the change of the internal energy of oxygen is $\Delta U = A - Q$. On the other hand,

$$
\begin{equation*}
\Delta U = \frac { m _ { 2 } } { \mu _ { 2 } } \frac { 5 } { 2 } R \left( T - T _ { 20 } \right) = - 779 \mathrm {~J} . \tag{15}
\end{equation*}
$$

To find $A$, let us prove that the pressure $P$ doesn't change. Differentiating the equations of the state for each gas, we get

$$
\begin{equation*}
\Delta T _ { 1 } = \frac { \mu _ { 1 } } { m _ { 1 } R } \left( P \Delta V + V _ { 1 } \Delta P \right) , \quad \Delta T _ { 2 } = \frac { \mu _ { 2 } } { m _ { 2 } R } \left( - P \Delta V + V _ { 2 } \Delta P \right) . \tag{16}
\end{equation*}
$$

where $V _ { \mathrm { i } }$ are the gas volumes, and $\Delta V = \Delta V _ { 1 } = - \Delta V _ { 2 }$ is the change of the volume of the hydrogen. Differentiating (1), we get


$$
\begin{equation*}
\frac { m _ { 1 } } { \mu _ { 1 } } \Delta T _ { 1 } + \frac { m _ { 2 } } { \mu _ { 2 } } \Delta T _ { 2 } = 0 . \tag{17}
\end{equation*}
$$

Substituting (2) into (3), we obtain $\left( V _ { 1 } + V _ { 2 } \right) \cdot \Delta P = 0$, thus

$$
\begin{equation*}
P _ { f } / P _ { i } = 1 . \tag{B2}
\end{equation*}
$$

Then the work done by the hydrogen is

$$
\begin{equation*}
A = P \cdot \Delta V = - \frac { m _ { 2 } } { \mu _ { 2 } } R \cdot \Delta T _ { 2 } = \frac { m _ { 2 } } { \mu _ { 2 } } R \left( T _ { 20 } - T \right) = 312 \mathrm {~J} . \tag{19}
\end{equation*}
$$

The total amount of heat transferred to hydrogen is

$$
\begin{equation*}
Q = A - \Delta U = 1091 J . \tag{B3}
\end{equation*}
$$

## C

The electric field acting on the plate $\gamma$ before the collision is

$$
\begin{equation*}
E _ { 1 } = \frac { Q - q } { 2 \varepsilon _ { 0 } S } . \tag{C1}
\end{equation*}
$$

The force acting on the plate is

$$
\begin{equation*}
F _ { 1 } = E _ { 1 } Q = \frac { ( Q - q ) Q } { 2 \varepsilon _ { 0 } S } . \tag{22}
\end{equation*}
$$

The work done by the electric field before the collision is

$$
\begin{equation*}
A _ { 1 } = F _ { 1 } d = \frac { ( Q - q ) Q d } { 2 \varepsilon _ { 0 } S } . \tag{23}
\end{equation*}
$$

The charge will get redistributed between two touching conducting plates during the collision. The values of the charges can be obtained from the condition that the electric field between the touching plates vanishes. If one assumes that the plate $\gamma$ is on the right side, the left surface of the combined plate will have the charge

$$
\begin{equation*}
Q _ { \beta } = Q + q / 2 , \tag{C2a}
\end{equation*}
$$

and the right surface will have the charge

$$
\begin{equation*}
Q _ { \gamma } = q / 2 . \tag{C2b}
\end{equation*}
$$


These charges remain on the plates after the collision is over. Now the force acting on the plate $\gamma$ equals $F _ { 2 } = E _ { 2 } q / 2$, where $E _ { 2 } = ( q / 2 ) / \left( 2 \varepsilon _ { 0 } S \right)$. The work done by field $E _ { 2 }$ is

$$
\begin{equation*}
A _ { 2 } = F _ { 2 } d = \frac { q ^ { 2 } d } { 8 \varepsilon _ { 0 } S } . \tag{26}
\end{equation*}
$$

The total work done by the electric fields is

$$
\begin{equation*}
A = A _ { 1 } + A _ { 2 } = \frac { d } { 2 \varepsilon _ { 0 } S } \left( Q - \frac { q } { 2 } \right) ^ { 2 } . \tag{27}
\end{equation*}
$$

Velocity at the distance $d$ can be calculated using the following relation:

$$
\begin{equation*}
\frac { m v ^ { 2 } } { 2 } = A . \tag{28}
\end{equation*}
$$

Substituting (5) into (6), we finally get

$$
\begin{equation*}
v = \left( Q - \frac { q } { 2 } \right) \sqrt { \frac { d } { m \varepsilon _ { 0 } S } } . \tag{C3}
\end{equation*}
$$

## D

First one has to determine the types of the lenses. If both lenses are negative, one always obtains a direct imaginary image. If one lens is positive and the other is negative, three variants are possible: an inversed real image, a direct imaginary image or an inversed imaginary image, all contradicting the conditions of the problem. Only the last variant is left - two positive lenses. The first lens creates an inversed real image, and the second one inverts in once more, creating the direct real image. Using the lens equations, the magnifications of the lenses can be written as

$$
\begin{equation*}
\Gamma _ { 1 } = \frac { F _ { 1 } } { d _ { 1 } - F _ { 1 } } ; \quad \Gamma _ { 2 } = \frac { F _ { 2 } } { d _ { 2 } - F _ { 2 } } , \tag{30}
\end{equation*}
$$

where $d _ { 1 }$ is the distance from the object to the first lens, $d _ { 2 } = L - f _ { 1 }$ is the distance from the image of the first lens to the second lens, and $f _ { 1 }$ is the distance from the first lens to the first image. The total magnification of the system is $\Gamma ^ { \prime } = \Gamma _ { 1 } \cdot \Gamma _ { 2 }$. Using the expression for $d _ { 2 }$, inverted magnification coefficient can be written as

$$
\begin{equation*}
\frac { 1 } { \Gamma ^ { \prime } } = \frac { d _ { 1 } \left[ L - \left( F _ { 1 } + F _ { 2 } \right) \right] } { F _ { 1 } F _ { 2 } } - \frac { L } { F _ { 2 } } + 1 . \tag{31}
\end{equation*}
$$

One notices from this expression that if two lenses are exchanged, the first term stays invariant, and only the second term changes. Thus the expression for the inverted magnification in the second case is:


$$
\begin{equation*}
\frac { 1 } { \Gamma ^ { \prime \prime } } = \frac { d _ { 1 } \left[ L - \left( F _ { 1 } + F _ { 2 } \right) \right] } { F _ { 1 } F _ { 2 } } - \frac { L } { F _ { 1 } } + 1 . \tag{32}
\end{equation*}
$$

Subtracting these two formulas, we get:

$$
\begin{gather*}
\frac { 1 } { \Gamma ^ { \prime } } - \frac { 1 } { \Gamma ^ { \prime \prime } } = L \left( \frac { 1 } { F _ { 1 } } - \frac { 1 } { F _ { 2 } } \right) = L \left( D _ { 1 } - D _ { 2 } \right) ;  \tag{33}\\
D _ { 1 } - D _ { 2 } = \frac { 1 } { L } \left( \frac { 1 } { \Gamma ^ { \prime } } - \frac { 1 } { \Gamma ^ { \prime \prime } } \right) = \frac { 1 } { 0,25 } \left( 1 - \frac { 1 } { 4 } \right) = \frac { 1 } { 0,25 } \cdot \frac { 3 } { 4 } = 3 \text { diopters. } \tag{34}
\end{gather*}
$$


Mark Distribution
| No | Total Pt | Partial Pt | Contents |  |  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| A | 2.5 | 0.5 | Equation |  |  |
|  |  | 1.5 | Differential equation method | 1.0 | Equation (4) or (5) |
|  |  |  |  | 0.5 | Equation (6) |
|  |  |  |  | 0.5 | $P _ { 0 } ( x )$ |
|  |  |  |  | 0.5 | $\rho _ { 1 } ( x )$ |
|  |  |  |  | 0.5 | $P _ { 1 } ( H )$ |
|  |  | 0.5 | Numerical value of $P ( H )$ |  |  |
| B | 2.5 | 0.5 | Numerical value of T |  |  |
|  |  | 1.0 | Constant pressure |  |  |
|  |  | 0.3 | Numerical value of $\Delta U$ |  |  |
|  |  | 0.3 | Numerical value of $A$ |  |  |
|  |  | 0.4 | Numerical value of $Q$ |  |  |
| C | 2.5 | 0.5 | $E _ { 1 }$ |  |  |
|  |  | 0.5 | $Q _ { \beta }$ |  |  |
|  |  | 0.5 | $Q _ { \gamma }$ |  |  |
|  |  | 0.5 | Total work by electric fields |  |  |
|  |  | 0.5 | Answer for final velocity |  |  |
| D | 2.5 | 1.0 | Signs of lenses |  |  |
|  |  | 0.5 | Expression for the magnification coefficient |  |  |
|  |  | 1.0 | Final answer for $D _ { 1 } - D _ { 2 }$ |  |  |
