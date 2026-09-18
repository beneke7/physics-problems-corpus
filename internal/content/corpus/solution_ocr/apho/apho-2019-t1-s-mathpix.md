---
id: solution-ocr-apho-2019-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2019/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2019-t1]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
Version 1.32.

## A. LUMPED ELEMENT MODEL OF A CO-AXIAL TRANSMISSION LINE

A. 1 The speed of wave propagation in free space $\left( c _ { 0 } = 299792458 \mathrm {~m} / \mathrm { s } \right)$ is $c _ { 0 } = 1 / \sqrt { \varepsilon _ { 0 } \mu _ { 0 } }$. The speed in the dielectric \& diamagnetic medium is
$$
\begin{equation*}
v = \frac { c _ { 0 } } { \sqrt { \varepsilon _ { \mathrm { r } } \mu _ { \mathrm { r } } } } \tag{A.1}
\end{equation*}
$$
A. 2 Gauss law for the flux through a cylindrical surface with radius $r$ co-axial with the the core, $a < r < b$ :
$$
\begin{equation*}
\Delta x 2 \pi r E ( r ) = \frac { \Delta q } { \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } } \Rightarrow E ( r ) = \frac { \Delta q } { \Delta x } \frac { 1 } { 2 \pi \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } r } \tag{A.2}
\end{equation*}
$$
A. 3 The capacitance
$$
\begin{equation*}
C _ { x } \Delta x = \frac { \Delta q } { \varphi } \tag{A.3}
\end{equation*}
$$
where the potential $\varphi$ of the core with respect to the shield is
$$
\begin{gather*}
0 - \varphi = - \int _ { a } ^ { b } E ( r ) d r \Rightarrow \varphi = \frac { \Delta q } { \Delta x } \frac { 1 } { 2 \pi \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } } \ln \frac { b } { a }  \tag{A.4}\\
C _ { x } = \frac { 2 \pi \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } } { \ln \frac { b } { a } } \tag{A.5}
\end{gather*}
$$
A. 4 The magnetic flux through a rectangular contour paralel to the axis equal inductance times the current:
$$
\begin{equation*}
\Delta x \int _ { a } ^ { b } B ( r ) d r = L _ { x } \Delta x I \tag{A.6}
\end{equation*}
$$
Biot-Savart law $B ( r ) = \frac { \mu _ { r } \mu _ { 0 } } { 2 \pi } \frac { I } { r }$ gives
$$
\begin{equation*}
L _ { x } = \frac { \mu _ { \mathrm { r } } \mu _ { 0 } } { 2 \pi } \ln \frac { b } { a } \tag{A.7}
\end{equation*}
$$
A. 5 i. Adding $\delta x$ length of the cable should not change its impedance. Hence the impedance $Z$ of the following circuit must be equal to $Z _ { 0 }$ :
$$
\begin{align*}
& \frac { 1 } { Z } = \frac { 1 } { Z _ { 0 } + j \omega \delta L } + \frac { 1 } { \frac { 1 } { j \omega \delta C } } = \frac { 1 } { Z _ { 0 } }  \tag{A.8}\\
& Z _ { 0 } ^ { 2 } + j \omega \delta L Z _ { 0 } - \delta L / \delta C = 0 \tag{A.9}
\end{align*}
$$
(here engineering notation for $j ^ { 2 } = - 1$ is used.) $\delta L / \delta C = L _ { x } / C _ { x }$ and $\delta L \rightarrow 0$ for $\delta x \rightarrow 0$, hence
$$
\begin{equation*}
Z _ { 0 } = \sqrt { L _ { x } / C _ { x } } \tag{A.10}
\end{equation*}
$$
    ii.
$$
\begin{equation*}
Z _ { 0 } = \sqrt { L _ { x } / C _ { x } } = \frac { \ln ( b / a ) } { 2 \pi } \sqrt { \frac { \mu _ { \mathrm { r } } \mu _ { 0 } } { \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } } } = \ln ( b / a ) \sqrt { \frac { \mu _ { \mathrm { r } } } { \varepsilon _ { \mathrm { r } } } } \times 59.96 \Omega \tag{A.11}
\end{equation*}
$$
For $Z _ { 0 } = 50 \Omega , \varepsilon _ { \mathrm { r } } = 4.0$ and $\mu _ { \mathrm { r } } = 1.0$ this gives $b = 5.30 a$.


## B. HYPOTHETICAL TRANSMISSION LINE WITH RETURN ALONG A GROUNDED PLANE

B. 1 The high-conductance ground plate can be replaced by an image of the wire with opposite direction of the current at distance $2 d$ from the real wire. The magnetic fields from the real and the imaginary wires add up and need to be integrated to get the magnetic flux between the wire and the plate:

$$
\begin{gather*}
L _ { x } \Delta x I = \frac { \mu \mu _ { 0 } } { 2 \pi } I \int _ { a } ^ { d } \left( \frac { 1 } { r } + \frac { 1 } { 2 d - r } \right) d r \Delta x  \tag{B.1}\\
L _ { x } = \frac { \mu \mu _ { 0 } } { 2 \pi } \ln \left( \frac { 2 d } { a } - 1 \right) \approx \frac { \mu \mu _ { 0 } } { 2 \pi } \ln \frac { 2 d } { a } \tag{B.2}
\end{gather*}
$$

The potential difference between the wire and the plate can be obtained similarly by integrating the combined field for the wire and its image:

$$
\begin{align*}
\varphi & = \frac { \Delta q } { \Delta x } \frac { 1 } { 2 \pi \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } } \int _ { a } ^ { d } \left( \frac { 1 } { r } + \frac { 1 } { 2 d - r } \right) d r = \frac { \Delta q } { \Delta x } \frac { \ln ( 2 d / a ) } { 2 \pi \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } }  \tag{B.3}\\
C _ { x } & = \frac { \Delta q } { \Delta x } \frac { 1 } { \varphi } \approx \frac { 2 \pi \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } } { \ln ( 2 d / a ) } \tag{B.4}
\end{align*}
$$

Hence the characterstic impedance $Z _ { 0 } = \sqrt { L _ { x } / C _ { x } }$ of the wire-plate system is

$$
\begin{equation*}
Z _ { 0 } = \frac { \ln ( 2 d / a ) } { 2 \pi } \sqrt { \frac { \mu _ { \mathrm { r } } \mu _ { 0 } } { \varepsilon _ { \mathrm { r } } \varepsilon _ { 0 } } } \tag{B.5}
\end{equation*}
$$

## C. BASICS OF RF REFLECTOMETRY

C. 1 At the interface, values of the voltage on both transmission lines have to coincide:
$$
\begin{equation*}
V _ { \mathrm { i } } + V _ { \mathrm { r } } = V _ { \mathrm { t } } \tag{C.1}
\end{equation*}
$$
The current has to be conserved at the interface, however, the incident and the reflected waves carry the current in opposite directions:
$$
\begin{equation*}
\frac { V _ { \mathrm { i } } } { Z _ { 0 } } - \frac { V _ { \mathrm { r } } } { Z _ { 0 } } = \frac { V _ { \mathrm { t } } } { Z _ { 1 } } \tag{C.2}
\end{equation*}
$$
It is clear from the equation above that $V _ { \mathrm { t } } \neq 0$ if $Z _ { 0 } \neq Z _ { 1 }$ - impedance mismatch has to cause reflection. Solving the voltage and the current equations for $\Gamma = V _ { \mathrm { r } } / V _ { \mathrm { i } }$ gives
$$
\begin{equation*}
\Gamma = \frac { Z _ { 1 } - Z _ { 0 } } { Z _ { 1 } + Z _ { 0 } } \tag{C.3}
\end{equation*}
$$
C. 2 A $\pi$-shift implies opposite signs of $V _ { \mathrm { i } }$ and $V _ { \mathrm { r } }$ and hence requires $\Gamma < 0$. This implies $Z _ { 1 } < Z _ { 0 }$.

## D. THE SINGLE ELECTRON TRANSISTOR

D. 1 i. Since any capacitance beyond $C _ { g }$ is neglected in our model, the quantum dot can be thought as a capacitor plate with the gate being the other plate of the same capacitor with capacitance $C _ { g }$. The fixed number $n$ of electrons trapped on the quantum dot sets a fixed-charge $( q = - n e )$ boundary condition for the capacitor $C _ { g }$ on the QD, while the gate side is kept at a constant potential $V _ { g }$. (We denote the elementary charge by $e > 0$ ). The implies that an excess charge of opposite sign, $- q = n e$ will accumulate on the gate, to keep electric field confined between the QD and the gate. The potential jump across the capacitor from the gate to the QD will be equal to the capacitor $q / C _ { g } = - n e / C _ { g }$. Hence the potential on the QD is
$$
\begin{equation*}
\varphi _ { n } = V _ { g } + \frac { - n e } { C _ { \mathrm { g } } } \tag{D.1}
\end{equation*}
$$

ii. Bringing an infinitesimal charge $\delta q$ from potential 0 to potential $\varphi ( q )$ requires energy $\delta E = \varphi ( q ) \delta q$, and the dependence of potential $\varphi ( q )$ on the accumulated charge $q$ is linear. For the single-electron transfer, the additional charge of the electron, $- e$, changes the potential from $\varphi _ { n }$ to $\varphi _ { n + 1 } = \varphi _ { n } - e / C _ { g }$. Hence the work necessary to accumulate an extra $e$ on the QD is the integral of $\delta E$
$$
\begin{gather*}
\Delta E _ { n } = - e \frac { \varphi _ { n } + \varphi _ { n + 1 } } { 2 }  \tag{D.2}\\
\Delta E _ { n } = \frac { e ^ { 2 } } { C _ { g } } \left( n + \frac { 1 } { 2 } \right) - e V _ { g } \tag{D.3}
\end{gather*}
$$
Alternatively, $\Delta E _ { n }$ can be obtained from energy conservation, by computing the change of the energy of the capacitor the dork the work done against the electromotive force of the battery (=- "work done by the battery') for a charge $+ e$ to be brought from the ground potential via the battery to the gate-side plate of the capacitor:
$$
\begin{equation*}
\Delta E _ { n } = \frac { e ^ { 2 } ( n + 1 ) ^ { 2 } } { 2 C _ { g } } - \frac { e ^ { 2 } n ^ { 2 } } { 2 C _ { g } } - e V _ { g } \tag{D.4}
\end{equation*}
$$
Note that without $C _ { t } \ll C _ { g }$ approximation, the answer is $\Delta E _ { n } = \frac { e ^ { 2 } } { C _ { g } + 2 C _ { t } } \left( n + \frac { 1 } { 2 } \right) - e V _ { g } C _ { g } / \left( 2 C _ { t } + C _ { g } \right)$ (not required to receive full marks).
D. $2 \mathcal { N }$ is a minimal integer $n$ for which $\Delta E _ { n } \geq 0$. Consider the marginal case of $\Delta E _ { \mathcal { N } } = 0$ which is achieved at some $V _ { g } = V _ { 0 }$,
$$
\begin{equation*}
\Delta E _ { \mathcal { N } } \left( V _ { 0 } \right) = 0 = \frac { e ^ { 2 } } { C _ { g } } \left( \mathcal { N } + \frac { 1 } { 2 } \right) - e V _ { 0 } \tag{D.5}
\end{equation*}
$$
If $V _ { g }$ would go slightly larger than $V _ { 0 }$, then $\Delta E _ { n }$ would go negative and then minimal $n$ that makes a positive $\Delta E _ { n }$ would jump from $\mathcal { N }$ to $\mathcal { N } + 1$. Hence $E _ { c } = \Delta E _ { \mathcal { N } + 1 } \left( V _ { 0 } \right)$. This gives
$$
\begin{equation*}
\Delta E _ { \mathcal { N } + 1 } \left( V _ { 0 } \right) = E _ { c } = \frac { e ^ { 2 } } { C _ { g } } \left( \mathcal { N } + 1 + \frac { 1 } { 2 } \right) - e V _ { 0 } = \frac { e ^ { 2 } } { C _ { g } } \tag{D.6}
\end{equation*}
$$
D. 3 In a metal, only electrons in an energy range $\pm \approx k _ { B } T$ around the Fermi level take part in the thermal motion. (Here $k _ { \mathrm { B } }$ is the Boltzmann constant.) Typical energy of these electrons is $k _ { \mathrm { B } } T$ per particle and it may not exceed characteristic single-electron addition energy $E _ { c } , k _ { \mathrm { B } } T < E _ { c }$.
D. 4 i. $\tau = R _ { t } C _ { t }$
    ii. Quantum uncertainty of energy (life-time broadening) $h / \tau$ must be less than the energy difference between the states with $n$ and $n + 1$ electrons,
$$
\begin{gather*}
h / \tau < E _ { c } \Rightarrow \frac { h } { R _ { t } C _ { t } } < \frac { e ^ { 2 } } { C _ { g } }  \tag{D.7}\\
R _ { t } > \frac { h } { e ^ { 2 } } \frac { C _ { g } } { C _ { t } } > \frac { h } { e ^ { 2 } } \tag{D.8}
\end{gather*}
$$

## E. RF REFLECTOMETRY TO READ OUT SET STATE

E. 1
$$
\begin{align*}
\Gamma & = \frac { Z _ { \mathrm { SET } } - Z _ { 0 } } { Z _ { \mathrm { SET } } + Z _ { 0 } }  \tag{E.1}\\
\Gamma _ { \mathrm { ON } } & = \frac { 10 ^ { 5 } - 50 } { 10 ^ { 5 } + 50 } \approx 1 - 2 \frac { 50 } { 10 ^ { 5 } }  \tag{E.2}\\
\Gamma _ { \mathrm { OFF } } & = \lim _ { Z _ { 1 } \rightarrow \infty } \frac { Z _ { 1 } - Z _ { 0 } } { Z _ { 1 } + Z _ { 0 } } = 1  \tag{E.3}\\
\Delta \Gamma & = \left| \Gamma _ { \mathrm { ON } } - \Gamma _ { \mathrm { OFF } } \right| \approx 1.0 \cdot 10 ^ { - 3 } \tag{E.4}
\end{align*}
$$

E. 2 Large change in reflectance requires the impedance $Z _ { 1 }$ of the circuit to switch between $Z _ { 1 } < Z _ { 0 }$ to $Z _ { 1 } > Z _ { 0 }$ as the SET between ON $\left( Z _ { \text {SET } } = 100 \mathrm { k } \Omega \right)$ and OFF $\left( Z _ { \text {SET } } = \infty \right)$.
In the OFF state of the SET, the circuit is an disspationless LC contour with resonance frequency $\omega _ { 0 } = 1 / \sqrt { L _ { 0 } C _ { 0 } }$ and its impedance is 0. If we choose
$$
\begin{equation*}
L _ { 0 } = \frac { 1 } { \omega _ { \mathrm { rf } } ^ { 2 } C _ { 0 } } \tag{E.5}
\end{equation*}
$$
then the imedance of the $\omega _ { 0 } = \omega _ { \mathrm { rf } }$.
Since $Z _ { \text {tot } }$ (the total impedance of the circuit) in the OFF state of the SET equals to 0, the reflectance i $\Gamma _ { \mathrm { OFF } } = - 1$. As we switch to the ON state with $Z _ { \mathrm { SET } } = R _ { \mathrm { SET } } = 10 ^ { 5 } \Omega$, the change in reflectance will be large if $\left| Z _ { \text {tot } } \right|$ in this ON state is on the order of $Z _ { 0 }$ or larger, which is indeed the case.
For the ON state and $\omega _ { 0 } = \omega _ { \mathrm { rf } }$
$$
\begin{equation*}
Z _ { \mathrm { tot } } = \left( \frac { 1 } { \frac { 1 } { j \omega C _ { 0 } } } + \frac { 1 } { R _ { \mathrm { SET } } } \right) ^ { - 1 } + j \omega L _ { 0 } = \frac { R _ { \mathrm { SET } } } { 1 + j \omega C _ { 0 } R _ { \mathrm { SET } } } + j \omega L _ { 0 } = \frac { R _ { \mathrm { SET } } + j \sqrt { L _ { 0 } / C _ { 0 } } } { 1 + R _ { \mathrm { SET } } ^ { 2 } C _ { 0 } / L _ { 0 } } \tag{E.6}
\end{equation*}
$$
For $C _ { 0 } = 0.4 \cdot 10 ^ { - 12 } \mathrm {~F} , Z _ { 0 } = 50 \Omega$ and $\omega _ { \mathrm { rf } } = 2 \pi \cdot 10 ^ { 8 } \mathrm {~Hz}$, we have $L _ { 0 } = 6.33 \mu \mathrm { H } , Z _ { \text {tot } } = ( 158 + 6.3 j ) \Omega$, $\Gamma _ { \mathrm { ON } } = 0.5198 + 0.0145 j$, and $\Delta \Gamma = 1.52$.

## F. CHARGE SENSING WITH A SINGLE LEAD QUANTUM DOT

F. 1 The SLQD readout circuit contains only reactive elements, so $| \Gamma | = 1$ will always be one. The OFF state of the SLQD corresponds to an inductor $L _ { 0 }$ and a capacitor $C _ { 0 }$ connected in parallel. We again choose
$$
\begin{equation*}
\omega _ { \mathrm { rf } } = 1 / \sqrt { L _ { 0 } C _ { 0 } } \tag{F.1}
\end{equation*}
$$
so that $Z _ { \text {tot } }$ is the OFF state is infinite and $\Gamma _ { \text {OFF } } = 1$.
The ON state corresponds to $Z _ { \mathrm { SET } } = - j \frac { 1 } { \omega _ { \mathrm { rf } } C _ { q } }$ and $Z _ { \mathrm { tot } }$ at $\omega _ { \mathrm { rf } } = \omega _ { 0 }$ is just the impedance of the SLQD
$$
\begin{equation*}
Z _ { \mathrm { tot } } = \frac { 1 } { \left( j \omega _ { \mathrm { rf } } L _ { 0 } \right) ^ { - 1 } + j \omega _ { \mathrm { rf } } \left( C _ { 0 } + C _ { q } \right) } = - j \frac { 1 } { \omega _ { 0 } C _ { q } } = - j \frac { C _ { 0 } } { C _ { q } } Z _ { C } \tag{F.2}
\end{equation*}
$$
For the complex phase of $\Gamma _ { \mathrm { ON } } = \left( Z _ { \mathrm { tot } } - Z _ { 0 } \right) / \left( Z _ { \mathrm { tot } } + Z _ { 0 } \right)$ to be significantly different from zero, we need $\left| Z _ { \mathrm { tot } } \right| \sim Z _ { 0 }$ since $Z _ { \text {tot } }$ is purely imaginary. Hence
$$
\begin{equation*}
Z _ { C } \sim \frac { C _ { q } } { C _ { 0 } } Z _ { 0 } \tag{F.3}
\end{equation*}
$$
F. 2 If $L _ { 0 }$ is fixed, we can still operate the circuit at the frequency
$$
\begin{equation*}
\omega _ { \mathrm { rf } } = 1 / \sqrt { L _ { 0 } C _ { 0 } } \tag{F.4}
\end{equation*}
$$
that gives $\Gamma _ { \mathrm { OFF } } = 1$. However, we need to deduce a way to increase $\left| Z _ { \text {tot } } \right|$ even if $Z _ { C } \ll C _ { q } Z _ { 0 } / C _ { 0 }$ is not sufficient. One of the ways to do that is to add an additional capacitance $C _ { m }$ is series with rest of the circuit. This will give (at $\omega _ { \mathrm { rf } } = \omega _ { 0 }$ )
$$
\begin{equation*}
Z _ { \mathrm { tot } } = - j \left( \frac { C _ { 0 } } { C _ { q } } Z _ { C } + \frac { 1 } { \omega _ { 0 } C _ { m } } \right) = - j \omega _ { 0 } ^ { - 1 } \left( C _ { q } ^ { - 1 } + C _ { m } ^ { - 1 } \right) \tag{F.5}
\end{equation*}
$$
We can satisfy the condition $\left| Z _ { \text {tot } } \right| = Z _ { 0 }$ (and hence $\Gamma _ { \mathrm { ON } } = j$ and $\Delta \Gamma = \sqrt { 2 } \sim 1$ ) with
$$
\begin{gather*}
C _ { m } = \frac { C _ { q } } { Z _ { 0 } C _ { q } \omega _ { \mathrm { rf } } - 1 } = \frac { C _ { q } \sqrt { L _ { 0 } C _ { 0 } } } { Z _ { 0 } C _ { q } - \sqrt { L _ { 0 } C _ { 0 } } }  \tag{F.6}\\
C _ { m } = \frac { C _ { q } Z _ { C } } { Z _ { 0 } C _ { q } / C _ { 0 } - Z _ { C } }  \tag{F.7}\\
\stackrel { Z _ { C } \ll Z _ { 0 } C _ { q } / C _ { 0 } } { \approx } \frac { 1 } { Z _ { 0 } \omega _ { \mathrm { rf } } }
\end{gather*}
$$
