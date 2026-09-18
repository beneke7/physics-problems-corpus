---
id: solution-ocr-izho-2016-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2016_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2016-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3. Nonlinear capacitor ( 10,0 points)

1. [0.75 points] After a long period of time the electric current in the circuit turns zero and the capacitor will be fully charged, i.e.

$$
\begin{equation*}
I = 0 . \tag{1}
\end{equation*}
$$

The voltage provided by the source is thus drop on the capacitor whose capacitance at $U _ { 0 } =$ 5 V is obtained from the graph

$$
\begin{equation*}
C = 0,10 \mu F . \tag{2}
\end{equation*}
$$

The charge of the capacitor is therefore found as

$$
\begin{equation*}
q = C U _ { 0 } = 0.50 \mu C l . \tag{3}
\end{equation*}
$$

2. [0.25 points] Since the electric current in the circuit is finite and charging the capacitor to the voltage drop of $U _ { 0 } = 10 \mathrm {~V}$ requires an infinite charge, the corresponding time is obtained as.

$$
\begin{equation*}
t = \infty . \tag{4}
\end{equation*}
$$

3. [3.0 points] Let the capacitor be charged with the charge $q$ and its capacitance is equal to $C$, then, since all elements are connected in series, one gets

$$
\begin{equation*}
U _ { 0 } = \frac { q } { c } + I R , \tag{5}
\end{equation*}
$$

where the electric current is obtained as

$$
\begin{equation*}
I = \frac { d q } { d t } . \tag{6}
\end{equation*}
$$

Substituting (6) into (5) yields

$$
\begin{equation*}
d t = \frac { R } { U _ { 0 } - \frac { q } { C ( q ) } } d q = f ( q ) d q , \tag{7}
\end{equation*}
$$

where $f ( q ) = R / \left( U _ { 0 } - \frac { q } { C ( q ) } \right)$ is a function of the charge of the capacitor.
The function $f ( q )$ is easily retrieved from the provided graph of $C = C ( U )$ and turns out linear as shown in the figure below.


![](../../../figures/solution-ocr/336fddec89b4f320825b823b.jpg)

The linear equation has the form

$$
\begin{align*}
& f ( q ) = a + b q ,  \tag{8}\\
& a = 0.10 \frac { \mathrm {~ms} } { \mu \mathrm { Cl } } ,  \tag{9}\\
& b = 0.20 \frac { \mathrm {~ms} } { ( \mu \mathrm { Cl } ) ^ { 2 } } . \tag{10}
\end{align*}
$$

The time needed for a capacitor to be charge to $q = 4$ мкКл, is derived from equations (7) and (8) as

$$
\begin{equation*}
t = a q + \frac { 1 } { 2 } b q ^ { 2 } = 2.0 \mathrm {~ms} \tag{11}
\end{equation*}
$$

4. [0.5 points] The time interval $\Delta t$, needed for the capacitor to increase its charge from $q _ { 0 } = 4 \mu \mathrm { Cl }$ till $q = 8 \mu \mathrm { Cl }$ is found as

$$
\begin{equation*}
t = \left( q - q _ { 0 } \right) \left( a + \frac { 1 } { 2 } b \left( q + q _ { 0 } \right) \right) = 5.2 \mathrm {~ms} . \tag{12}
\end{equation*}
$$

5. [0.5 points] Solving equation (11) one obtains that

$$
\begin{equation*}
q _ { 1 / 2 } = \frac { - a \pm \sqrt { a ^ { 2 } + 2 b t } } { b } . \tag{13}
\end{equation*}
$$

It is obvious that at the initial time moment $q ( 0 ) = 0$, that is why the plus sign must be taken in formula (13) and one finally gets that

$$
\begin{equation*}
q = \frac { \sqrt { a ^ { 2 } + 2 b t } - a } { b } = 5,0 \mu \mathrm { Cl } . \tag{14}
\end{equation*}
$$

6. [0.5 points] For an ordinary capacitor its charge is proportional to the voltage drop across it, i.e.

$$
\begin{equation*}
q = C U , \tag{15}
\end{equation*}
$$

and the electric current in the circuit is derived as

$$
\begin{equation*}
I = \frac { d q } { d t } = C \frac { d U } { d t } \sim \frac { d U } { d t } . \tag{16}
\end{equation*}
$$

Since the capacitor and the resistor are connected in a series, then the electric current passing through them is the same, and, thus, the oscillation of voltage on the resistor is in phase with the oscillation of the current. Substituting $U \sim \sin \omega t$ gives rise to $I \sim \cos \omega t = \sin \left( \omega t - \frac { \pi } { 2 } \right)$, i.e. the phase difference between the oscillations of the voltage across the capacitor and the resistor is $\varphi = - \frac { \pi } { 2 }$.

The circuit contains the nonlinear capacitor but the proportionality in equation (16) stays the same, since the oscillation of the voltage is small compared with the constant voltage provided by the source, i.e.

$$
\begin{equation*}
\varphi = - \frac { \pi } { 2 } . \tag{17}
\end{equation*}
$$

7. [4.0 points] The voltage drop has constant and alternating components. After a long period of time the constant component of the voltage will be dropped across the capacitor only, i.e.

$$
\begin{equation*}
U _ { C } = 5,000 \mathrm {~V} , \tag{18}
\end{equation*}
$$

and the constant component of the voltage drop across the resistor will be equal to zero, i.e.


$$
\begin{equation*}
U _ { R } = 0 . \tag{19}
\end{equation*}
$$

In our case the capacitance is voltage dependent, that is why equation (16) is rewritten in the form

$$
\begin{equation*}
I = \frac { d q } { d t } = C ( U ) \frac { d U } { d t } + U \frac { d C ( U ) } { d U } \frac { d U } { d t } = C _ { \mathrm { eff } } \frac { d U } { d t } , \tag{20}
\end{equation*}
$$

where the effective capacitance is found as

$$
\begin{equation*}
C _ { \mathrm { eff } } = C ( U ) + U \frac { d C ( U ) } { d U } = 0.200 \mu F . \tag{21}
\end{equation*}
$$

It is well known that the reactive resistance of the capacitor is equal to

$$
\begin{equation*}
X _ { \mathrm { C } } = \frac { 1 } { \omega C _ { \mathrm { eff } } } . \tag{22}
\end{equation*}
$$

To calculate the electric current for the resistor and the capacitor connected in a series let us use the vector diagram shown in the figure below.
![](../../../figures/solution-ocr/d352222e54c6e0e79d72a894.jpg)

From this diagram the amplitude of the electric current is easily found as

$$
\begin{equation*}
I = \frac { \delta U } { \sqrt { R ^ { 2 } + \frac { 1 } { \omega ^ { 2 } c _ { \mathrm { eff } } ^ { 2 } } } } = 44.7 \mu A . \tag{23}
\end{equation*}
$$

and the corresponding phase shift $\alpha$ between the current and the voltage is obtained as

$$
\begin{equation*}
\alpha = \operatorname { arctg } \left( \frac { U _ { C } } { U _ { R } } \right) = \operatorname { arctg } \left( \frac { 1 } { \omega C _ { \text {eff } } R } \right) = 1,11 \mathrm { rad } = 63,4 ^ { \circ } . \tag{24}
\end{equation*}
$$

Finally, the dependence of the electric current on the time is derived as

$$
\begin{equation*}
I ( t ) = [ 44,7 \sin ( 2500 t + 1,1 ) ] \mu A . \tag{25}
\end{equation*}
$$

8. [0.5 points] The amplitude of the voltage oscillation on the capacitor is obtained from the vector diagram as

$$
\begin{equation*}
U _ { C } = \delta U \sin \alpha . \tag{26}
\end{equation*}
$$

Finally, taking into account the constant component of the voltage drop on the capacitor one gets

$$
\begin{align*}
& U _ { \mathrm { C } } ( t ) = U _ { \mathrm { C } } + \delta U \sin \alpha \sin \left( \omega t - \frac { \pi } { 2 } + \alpha \right) = \\
& \quad = [ 5,000 + 0,089 \sin ( 2500 t - 0,464 ) ] V . \tag{27}
\end{align*}
$$
