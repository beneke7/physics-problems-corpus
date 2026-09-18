---
id: solution-ocr-apho-2005-t-s-q1
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2005_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2005-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question 1

## 1A. SPRING CYLINDER WITH MASSIVE PISTON (5 points)

Consider $n = 2$ moles of ideal Helium gas at a pressure $P _ { 0 }$, volume $V _ { 0 }$ and temperature $T _ { 0 } = 300 \mathrm {~K}$ placed in a vertical cylindrical container (see Figure 1.1). A moveable frictionless horizontal piston of mass $m =$ 10 kg (assume $g = 9.8 \mathrm {~m} / \mathrm { s } ^ { 2 }$ ) and cross section $A = 500$ $\mathrm { cm } ^ { 2 }$ compresses the gas leaving the upper section of the container void. There is a vertical spring attached to the piston and the upper wall of the container. Disregard any gas leakage through their surface contact, and neglect the specific thermal capacities of the container, piston and spring. Initially the system is in equilibrium and the spring is unstretched. Neglect the spring's mass.

![](../../../figures/solution-ocr/1f3c6aa265cac14429a3618b.jpg)
Figure 1.1

a. Calculate the frequency $f$ of small oscillation of the piston, when it is slightly displaced from equilibrium position.
(2 points)
b. Then the piston is pushed down until the gas volume is halved, and released with zero velocity. calculate the value(s) of the gas volume when the piston speed is
$$
\begin{equation*}
\sqrt { \frac { 4 g V _ { 0 } } { 5 A } } \tag{3points}
\end{equation*}
$$

Let the spring constant $k = m g A / V _ { 0 }$. All the processes in gas are adiabatic. Gas constant $R = 8.314 \mathrm { JK } ^ { - 1 } \mathrm {~mol} ^ { - 1 }$. For mono-atomic gas (Helium) use Laplace constant $\gamma = 5 / 3$.


Solution:
a) Gas Volume

At the initial condition, the system is in equilibrium and the spring is unstreched; therefore

$$
\begin{equation*}
P _ { 0 } A = m g \quad \text { or } \quad P _ { 0 } = \frac { m g } { A } \tag{1}
\end{equation*}
$$

The initial volume of gas

$$
\begin{equation*}
V _ { 0 } = \frac { n R T _ { 0 } } { P _ { 0 } } = \frac { n R T _ { 0 } A } { m g } \tag{2}
\end{equation*}
$$

The work done by the gas from $\frac { 1 } { 2 } V _ { 0 }$ to $V$

$$
\begin{equation*}
W _ { g a s } = \int _ { V _ { 0 } / 2 } ^ { V } P d V = \int _ { V _ { 0 } / 2 } ^ { V } \frac { P _ { 0 } V _ { 0 } ^ { \gamma } } { V ^ { \gamma } } d V = \frac { P _ { 0 } V _ { 0 } ^ { \gamma } } { 1 - \gamma } \left( V ^ { 1 - \gamma } - \left( \frac { V _ { 0 } } { 2 } \right) ^ { 1 - \gamma } \right) \tag{3}
\end{equation*}
$$

Equation (3) can also be obtained by calculating the internal energy change (without integration)

$$
\begin{equation*}
W _ { \text {gas } } = - \Delta E = - n C _ { V } \left( T - T _ { 0 } { } ^ { \prime } \right) \tag{4}
\end{equation*}
$$

where $T _ { 0 } { } ^ { \prime }$ is the temperature when the gas volume is $V _ { 0 } / 2$.

The change of the gravitational potential energy

$$
\begin{equation*}
\Delta _ { P E } = m g \Delta h = m g \frac { V - \frac { 1 } { 2 } V _ { 0 } } { A } \tag{5}
\end{equation*}
$$


## THEORETICAL COMPETITION

The change of the potential energy of the spring

$$
\begin{align*}
\Delta _ { \text {spring } } & = \frac { 1 } { 2 } k x ^ { 2 } - \frac { 1 } { 2 } k x _ { 0 } ^ { 2 } \\
& = \frac { 1 } { 2 } \left( \frac { m g A } { V _ { 0 } } \right) \left( \frac { V _ { 0 } - V } { A } \right) ^ { 2 } - \frac { 1 } { 2 } \left( \frac { m g A } { V _ { 0 } } \right) \left( \frac { V _ { 0 } - V _ { 0 } / 2 } { A } \right) ^ { 2 }  \tag{6}\\
& = \frac { 1 } { 2 } \frac { m g V _ { 0 } } { A } \left( 1 - \frac { V } { V _ { 0 } } \right) ^ { 2 } - \frac { 1 } { 8 } \left( \frac { m g V _ { 0 } } { A } \right)
\end{align*}
$$

The kinetic energy

$$
\begin{equation*}
K E = \frac { 1 } { 2 } m v ^ { 2 } = \frac { 1 } { 2 } m \frac { 4 g V _ { 0 } } { 5 A } = \frac { 2 m g V _ { 0 } } { 5 A } \tag{7}
\end{equation*}
$$

By conservation of energy, we have

$$
\begin{gather*}
W _ { g a s } = \Delta _ { P E } + \Delta _ { \text {spring } } + K E  \tag{8}\\
\frac { P _ { 0 } V _ { 0 } ^ { \gamma } } { 1 - \gamma } \left( V ^ { 1 - \gamma } - \left( \frac { V _ { 0 } } { 2 } \right) ^ { 1 - \gamma } \right) = m g \frac { V - \frac { V _ { 0 } } { 2 } } { A } + \frac { 1 } { 2 } \frac { m g V _ { 0 } } { A } \left( 1 - \frac { V } { V _ { 0 } } \right) ^ { 2 } - \frac { 1 } { 8 } \frac { m g V _ { 0 } } { A } + \frac { 2 } { 5 } \frac { m g V _ { 0 } } { A }  \tag{9}\\
\frac { m g V _ { 0 } } { A ( 1 - \gamma ) } \left( \frac { V ^ { 1 - \gamma } } { V _ { 0 } ^ { 1 - \gamma } } - \left( \frac { 1 } { 2 } \right) ^ { 1 - \gamma } \right) = m g \frac { V - \frac { V _ { 0 } } { 2 } } { A } + \frac { m g V _ { 0 } } { 2 A } \left( 1 - \frac { V } { V _ { 0 } } \right) ^ { 2 } + \frac { 11 } { 40 } \frac { m g V _ { 0 } } { A } \tag{10}
\end{gather*}
$$

Let $s = V / V _ { 0 }$, so the above equation becomes

$$
\begin{equation*}
\frac { 1 } { ( 1 - \gamma ) } \left( s ^ { 1 - \gamma } - \left( \frac { 1 } { 2 } \right) ^ { 1 - \gamma } \right) = \left( s - \frac { 1 } { 2 } \right) + \frac { 1 } { 2 } ( 1 - s ) ^ { 2 } + \frac { 11 } { 40 } \tag{11}
\end{equation*}
$$


With $\gamma = 5 / 3$ we get

$$
\begin{equation*}
0 = \frac { 1 } { 2 } s ^ { 2 } + \frac { 11 } { 40 } + \frac { 3 } { 2 } \left( s ^ { - 2 / 3 } - \left( \frac { 1 } { 2 } \right) ^ { - 2 / 3 } \right) \tag{12}
\end{equation*}
$$

Solving equation (12) numerically, we get

$$
s _ { 1 } = 0.74 \text { and } s _ { 2 } = 1.30
$$

Therefore $V _ { 1 } = 0.74 V _ { 0 } = 0.74 \frac { n R T _ { 0 } A } { m g } = 1.88 \mathrm {~m} ^ { 3 }$ or $V _ { 2 } = 1.30 V _ { 0 } = 3.31 \mathrm {~m} ^ { 3 }$.


b) Small Oscillation (2 points)

The equation of motion when the piston is displaced by $x$ from the equilibrium position is

$$
\begin{equation*}
m \ddot { x } = - k x - P A + m g \tag{13}
\end{equation*}
$$

$P$ is the gas pressure

$$
\begin{equation*}
P = \frac { P _ { 0 } V _ { 0 } ^ { \gamma } } { V ^ { \gamma } } = \frac { P _ { 0 } V _ { 0 } ^ { \gamma } } { \left( V _ { 0 } - A x \right) ^ { \gamma } } = \frac { P _ { 0 } } { \left( 1 - \frac { A x } { V _ { 0 } } \right) ^ { \gamma } } \tag{14}
\end{equation*}
$$

Since $A x \ll V _ { 0 }$ then we have $P \approx P _ { 0 } \left( 1 + \gamma \frac { A x } { V _ { 0 } } \right)$, therefore

$$
\begin{align*}
& m \ddot { x } \approx - k x - P _ { 0 } A \left( 1 + \gamma \frac { A x } { V _ { 0 } } \right) + m g \\
& m \ddot { x } = - \left( k + P _ { 0 } A \left( \gamma \frac { A } { V _ { 0 } } \right) \right) x  \tag{15}\\
& m \ddot { x } = - \left( \frac { m g A } { V _ { 0 } } + \frac { m g } { A } A \left( \gamma \frac { A } { V _ { 0 } } \right) \right) x \\
& m \ddot { x } + ( 1 + \gamma ) \frac { m g A } { V _ { 0 } } x = 0
\end{align*}
$$

The frequency of the small oscillation is

$$
\begin{equation*}
f = \frac { 1 } { 2 \pi } \sqrt { ( 1 + \gamma ) \frac { g A } { V _ { 0 } } } = \frac { 1 } { 2 \pi } \sqrt { ( 1 + \gamma ) \frac { m g ^ { 2 } } { n R T _ { 0 } } } \tag{16}
\end{equation*}
$$

Numerically $f = 0.114 \mathrm {~Hz}$.


THEORETICAL COMPETITION

Questions and Solutions
FINAL VERSION
[Marking Scheme] THEORETICAL Question 1A
Spring Cylinder with Massive Piston

| a. (3.0) | 0.2 | Initial Pressure $P _ { 0 } = m g / A$ |
| :--- | :--- | :--- |
|  | 0.2 | Initial volume $V _ { 0 } = n R T _ { 0 } A / m g$ |
|  | 0.3 | Work done by gas $W _ { \text {gas } } = \frac { P _ { 0 } V _ { 0 } ^ { \gamma } } { 1 - \gamma } \left( V ^ { 1 - \gamma } - \left( \frac { V _ { 0 } } { 2 } \right) ^ { 1 - \gamma } \right)$ |
|  | 0.3 | Gravitational Potential Energy $\Delta _ { P E } = \frac { m g } { A } \left( V - \frac { 1 } { 2 } V _ { 0 } \right)$ |
|  | 0.3 | Spring Potential Energy $\Delta _ { \text {spring } } = \frac { 1 } { 2 } \frac { m g V _ { 0 } } { A } \left( 1 - \frac { V } { V _ { 0 } } \right) ^ { 2 } - \frac { 1 } { 8 } \left( \frac { m g V _ { 0 } } { A } \right)$ |
|  | 0.3 | Conservation of energy $W _ { \text {gas } } = \Delta _ { P E } + \Delta _ { \text {spring } } + K E$ |
|  | 0.9(*) | Equation $\quad 0 = \frac { 1 } { 2 } s ^ { 2 } + \frac { 11 } { 40 } + \frac { 3 } { 2 } \left( s ^ { - 2 / 3 } - \left( \frac { 1 } { 2 } \right) ^ { - 2 / 3 } \right)$ |
|  | 0.3 | $V _ { 1 } = 0.74 V _ { 0 }$ or $V _ { 2 } = 1.30 V _ { 0 }$ |
|  | 0.2 | $V _ { 1 } = 1.88 \mathrm {~m} ^ { 3 }$ or $V _ { 2 } = 3.31 \mathrm {~m} ^ { 3 }$ |
| b (2.0) | 0.5 | Force Equation $m \ddot { x } = - k x - P A + m g$ |
|  | 0.3 | Pressure $P = \frac { P _ { 0 } V _ { 0 } ^ { \gamma } } { V ^ { \gamma } } = \frac { P _ { 0 } V _ { 0 } ^ { \gamma } } { \left( V _ { 0 } - A x \right) ^ { \gamma } }$ |
|  | 0.2 | Approximation $P \approx P _ { 0 } \left( 1 + \gamma \frac { A x } { V _ { 0 } } \right)$ |
|  | 0.5 | Equation $m \ddot { x } + ( 1 + \gamma ) \frac { m g A } { V _ { 0 } } x = 0$ |
|  | 0.3 | $f = \frac { 1 } { 2 \pi } \sqrt { ( 1 + \gamma ) \frac { m g ^ { 2 } } { n R T _ { 0 } } }$ |
|  | 0.2 | $f = 0.114 \mathrm {~Hz}$ |

(*) Propagation errors reduce marks halved.


## 1B. THE PARAMETRIC SWING (5 points)

A child builds up the motion of a swing by standing and squatting. The trajectory followed by the center of mass of the child is illustrated in Fig. 1.2. Let $r _ { \mathrm { u } }$ be the radial distance from the swing pivot to the child's center of mass when the child is standing, while $r _ { \mathrm { d } }$ is the radial distance from the swing pivot to the child's center of mass when the child is squatting. Let the ratio of $r _ { \mathrm { d } }$ to $r _ { \mathrm { u } }$ be $2 ^ { 1 / 10 } = 1.072$, that is the child moves its center of mass by roughly 7\% compared to its average radial distance from the swing pivot.

To keep the analysis simple it is assumed that the swing be mass-less, the swing amplitude is sufficiently small and that the mass of the child resides at its center of mass. It is also assumed that the transitions from squatting to standing (the A to B and the E to F transitions) are fast compared to the swing cycle and can be taken to be instantaneous. It is similarly assumed that the squatting transitions (the C to D and the G to H transitions) can also be regarded as occurring instantaneously.

![](../../../figures/solution-ocr/d781b6805e7930c570ff2abc.jpg)
Figure 1.2

How many cycles of this maneuver does it take for the child to build up the amplitude (or the maximum angular velocity) of the swing by a factor of two?


Solution 1 (5 points)

(1) The conservation of angular momentum (CAM) from A to B, C to D, E to F and G to H.
$$
\begin{equation*}
L = I \dot { \theta } = m r ^ { 2 } \dot { \theta } \tag{1}
\end{equation*}
$$
$m =$ mass of the child
$r$ = distance of the child's center of mass to the swing's pivot P
$\dot { \theta } =$ the swing's angular velocity with respect to P
A to B:
Let $\dot { \theta } _ { d }$ and $\dot { \theta } _ { u }$ are the angular velocity at point A and B respectively, then according to CAM,
$$
\begin{equation*}
L _ { A } = m r _ { d } ^ { 2 } \dot { \theta } _ { d } = L _ { B } m r _ { u } ^ { 2 } \dot { \theta } _ { u } \tag{2}
\end{equation*}
$$
so that,
$$
\begin{equation*}
\dot { \theta } _ { d } = \frac { r _ { u } ^ { 2 } } { r _ { d } ^ { 2 } } \dot { \theta } _ { u } \tag{3}
\end{equation*}
$$
hence each time the swing repeat moving upward(A to B or E to F) its angular speed increases by factor of $\left( r _ { d } / r _ { u } \right) ^ { 2 }$
(2) The Conservation of Mechanical Energy (from B to C)
$$
\begin{equation*}
E _ { B } = E _ { C } = K + V = \frac { 1 } { 2 } m r _ { u } ^ { 2 } \dot { \theta } _ { B } ^ { 2 } - m g r _ { u } ( 1 - \cos \theta ) \tag{4}
\end{equation*}
$$
The change of the potential energy (from B to C ) is the same as the rotation energy at point B,
$$
\begin{equation*}
m g r _ { u } ( 1 - \cos \theta ) = \frac { 1 } { 2 } m r _ { u } ^ { 2 } \dot { \theta } _ { u } ^ { 2 } \tag{5}
\end{equation*}
$$
Using the similar method, we could get the following equation for the transition from D to E,
$$
\begin{equation*}
m g r _ { d } ( 1 - \cos \theta ) = \frac { 1 } { 2 } m r _ { d } ^ { 2 } \dot { \theta } _ { d } ^ { 2 } \tag{6}
\end{equation*}
$$

From equations (3), (5) and (6) we have,

$$
\begin{equation*}
\frac { r _ { u } } { r _ { d } } = \left( \frac { r _ { u } } { r _ { d } } \right) ^ { 2 } \left( \frac { \dot { \theta } _ { u } } { \dot { \theta } _ { d ^ { \prime } } } \right) ^ { 2 } \rightarrow \frac { \dot { \theta } _ { d ^ { \prime } } } { \dot { \theta } _ { u } } = \sqrt { \frac { r _ { u } } { r _ { d } } } \tag{7}
\end{equation*}
$$

For half a cycle we have $\dot { \theta } _ { u ^ { \prime } } = \left( \frac { r _ { d } } { r _ { u } } \right) ^ { 2 } \dot { \theta } _ { d ^ { \prime } } = \left( \frac { r _ { d } } { r _ { u } } \right) ^ { 3 / 2 } \dot { \theta } _ { u }$
For $n$ complete cycles, the growth of angular velocity amplitude as well as the angular amplitude $\theta _ { A }$ increases by a factor of $\rho _ { A , n } = \left( r _ { d } / r _ { u } \right) ^ { 3 n }$ For $\rho _ { A , n } = 2$ then with $r _ { d } / r _ { u } = 2 ^ { 1 / 10 }$ one gets $\left( 2 ^ { 1 / 10 } \right) ^ { 3 n } = 2 = 2 ^ { 3 n / 10 } \rightarrow n = \frac { 10 } { 3 }$


## ALTERNATE SOLUTION

The moment of inertia with respect to the swing pivot

$$
\begin{equation*}
I = M r ^ { 2 } \tag{1}
\end{equation*}
$$

Since the A to B transition is fast one has by conservation of angular momentum,

$$
\begin{equation*}
I _ { A } \omega _ { A } = I _ { B } \omega _ { B } \tag{2}
\end{equation*}
$$

The energy at point A is

$$
\begin{equation*}
E _ { A } = \frac { 1 } { 2 } I _ { A } \omega _ { A } ^ { 2 } \tag{3}
\end{equation*}
$$

The energy at point B is

$$
\begin{equation*}
E _ { B } = \frac { 1 } { 2 } I _ { B } \omega _ { B } ^ { 2 } + M g h \tag{4}
\end{equation*}
$$

where $h = r _ { d } - r _ { u }$ is the vertical distance the child's center of mass moves.
The energy at point C (conservation of energy)

$$
\begin{equation*}
E _ { C } = E _ { B } = \frac { 1 } { 2 } I _ { B } \omega _ { B } ^ { 2 } + M g h \tag{5}
\end{equation*}
$$

As the child squats at the C to D transition, the swing losses energy of the amount $M g h$ so

$$
\begin{equation*}
E _ { D } = \frac { 1 } { 2 } I _ { B } \omega _ { B } ^ { 2 } \tag{6}
\end{equation*}
$$

Energy at point E is equal to energy at point D (conservation energy)

$$
\begin{equation*}
E _ { E } = E _ { D } = \frac { 1 } { 2 } I _ { B } \omega _ { B } ^ { 2 } \tag{7}
\end{equation*}
$$

But we have also

$$
\begin{equation*}
E _ { E } = \frac { 1 } { 2 } I _ { E } \omega _ { E } ^ { 2 } \tag{8}
\end{equation*}
$$

From equation (7) and (8) we have,

$$
\begin{equation*}
\omega _ { E } ^ { 2 } = \frac { I _ { B } } { I _ { E } } \omega _ { B } ^ { 2 } \tag{9}
\end{equation*}
$$


Using equation(2) this equation yields,

$$
\begin{equation*}
\omega _ { E } ^ { 2 } = \frac { I _ { A } } { I _ { B } } \omega _ { A } ^ { 2 } \tag{10}
\end{equation*}
$$

Where we have used $I _ { E } = I _ { A }$.
Using equation (1) one obtains from equation (10)

$$
\begin{equation*}
\omega _ { E } ^ { 2 } = \frac { r _ { d } ^ { 2 } } { r _ { u } ^ { 2 } } \omega _ { A } ^ { 2 } \tag{11}
\end{equation*}
$$

From this one obtains,

$$
\begin{equation*}
\frac { \left| \omega _ { E } \right| } { \left| \omega _ { A } \right| } = \frac { r _ { d } } { r _ { u } } \tag{12}
\end{equation*}
$$

This ratio gives the fractional increase in the amplitude for one half cycle of the swing motion. The fractional increase in the amplitude after $n$ cycles is thus,

$$
\begin{equation*}
\frac { \left| \omega _ { E } \right| _ { n } } { \left| \omega _ { A } \right| _ { 0 } } = \left( \frac { r _ { d } } { r _ { u } } \right) ^ { 2 n } \tag{13}
\end{equation*}
$$

Where $\left| \omega _ { A } \right| _ { 0 }$ is the initial amplitude and $\left| \omega _ { E } \right| _ { n }$ is the amplitude after $n$ cycles. Substitute the values,

$$
\begin{equation*}
2 = 2 ^ { \frac { 2 n } { 10 } } \tag{14}
\end{equation*}
$$

or,

$$
\begin{equation*}
n = 5 \tag{15}
\end{equation*}
$$

Thus it takes only 5 swing cycles for the amplitude to build up by a factor of two.


## [Marking Scheme] THEORETICAL Question 1B <br> The Parametric Swing

| (5.0) | 0.25 | Moment of inertia $I = M r ^ { 2 }$ |
| :--- | :--- | :--- |
|  | 0.25 | Conservation of angular momentum A to B $I _ { A } \omega _ { A } = I _ { B } \omega _ { B }$ |
|  | 0.25 | Correct expression of energy at point A |
|  | 0.25 | Correct expression of energy at point B |
|  | 0.25 | Correct expression of energy at point C |
|  | 0.25 | Correct expression of energy at point D |
|  | 0.25 | Correct expression of energy at point E |
|  | 0.25 | Conservation of angular momentum C to D |
|  | 0.50 <br> 0.50 | Conservation of energy $E _ { B } = E _ { C } = \frac { 1 } { 2 } M r ^ { 2 } \dot { \theta } ^ { 2 } - M g r + \frac { 1 } { 2 } M g \theta ^ { 2 }$ <br> Conservation of energy $E _ { C } = E _ { B } = \frac { 1 } { 2 } I _ { B } \omega _ { B } ^ { 2 } + M g h$ |
|  | 0.5 <br> 0.5 | Conservation of energy $E _ { E } = E _ { D } = \frac { 1 } { 2 } I _ { B } \omega _ { B } ^ { 2 } - \frac { 1 } { 2 } m r _ { u } ^ { 2 } \theta ^ { 2 }$ <br> Conservation of energy $E _ { E } = E _ { D } = \frac { 1 } { 2 } I _ { B } \omega _ { B } ^ { 2 }$ |
|  | 0.5 <br> 0.5 | Equation $\frac { \left\| \omega _ { E } \right\| } { \left\| \omega _ { A } \right\| } = \left( \frac { r _ { d } } { r _ { u } } \right) ^ { 3 / 2 }$ <br> Equation $\frac { \left\| \omega _ { E } \right\| } { \left\| \omega _ { A } \right\| } = \frac { r _ { d } } { r _ { u } }$ |
|  | 1.0 <br> 1.0 | Equation $\frac { \left\| \omega _ { E } \right\| _ { n } } { \left\| \omega _ { A } \right\| _ { 0 } } = \left( \frac { r _ { d } } { r _ { u } } \right) ^ { 3 n }$ <br> Equation $\quad \frac { \left\| \omega _ { E } \right\| _ { n } } { \left\| \omega _ { A } \right\| _ { 0 } } = \left( \frac { r _ { d } } { r _ { u } } \right) ^ { 2 n }$ |
|  | 0.25 <br> 0.25 | Equation $2 = 2 ^ { \frac { 3 n } { 10 } }$ <br> Equation $2 = 2 ^ { \frac { 2 n } { 10 } }$ |
|  | 0.25 <br> 0.25 | $n = 10 / 3$ <br> $n = 5$ |

Note: Propagation errors will not be considered here.
