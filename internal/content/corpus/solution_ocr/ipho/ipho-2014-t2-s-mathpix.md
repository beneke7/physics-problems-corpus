---
id: solution-ocr-ipho-2014-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2014/T2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2014-t2]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Problem 2.Van der Waals equation of state Solution <br> Part A. Non-ideal gas equation of state

A1.If $V = b$ is substituted into the equation of state, then the gas pressure turns infinite. It is obvious that this is the moment when all the molecules are tightly packed. Therefore, the parameter $b$ is approximately equal to the volume of all molecules, i.e.

$$
\begin{equation*}
b = N _ { A } d ^ { 3 } \tag{A1.1}
\end{equation*}
$$

A2.In the most general case thevan der Waals equation of state can be rewritten as

$$
\begin{equation*}
P _ { c } V ^ { 3 } - \left( R T _ { c } + b P _ { c } \right) V ^ { 2 } + a V - a b = 0 \tag{A2.1}
\end{equation*}
$$

Since at the critical values of the gas parameters the straight line disappears, then, the solution of (A2.1) must have one real triple root, i.e. it can be rewritten as follows

$$
\begin{equation*}
P _ { c } \left( V - V _ { c } \right) ^ { 3 } = 0 \tag{A2.2}
\end{equation*}
$$

Comparing the coefficients of expression (A2.1) and (A2.2), the following set of equations is obtained

$$
\left\{ \begin{array} { c }
3 P _ { c } V _ { c } = R T _ { c } + b P _ { c }  \tag{A2.3}\\
3 P _ { c } V _ { c } ^ { 2 } = a \\
P _ { c } V _ { c } ^ { 3 } = a b
\end{array} \right.
$$

Solution to the set (A2.3) is the following formulas for the van der Waals coefficients

$$
\begin{align*}
& a = \frac { 27 R ^ { 2 } T _ { c } ^ { 2 } } { 64 P _ { c } }  \tag{A2.4}\\
& b = \frac { R T _ { c } } { 8 P _ { c } } \tag{A2.5}
\end{align*}
$$

Alternative solution
The critical parameters are achieved in the presence of an inflection point in the isotherm, at which the first and second derivatives are both zero. Therefore, they are defined by thefollowingconditions

$$
\begin{equation*}
\left( \frac { d P } { d V } \right) _ { T } = 0 \tag{A2.6}
\end{equation*}
$$

and

$$
\begin{equation*}
\left( \frac { d ^ { 2 } P } { d V ^ { 2 } } \right) _ { T } = 0 \tag{A2.7}
\end{equation*}
$$

Thus, the following set of equations is obtained

$$
\left\{ \begin{array} { c }
- \frac { R T _ { c } } { \left( V _ { c } - b \right) ^ { 2 } } + \frac { 2 a } { V _ { c } ^ { 3 } } = 0  \tag{A2.8}\\
\frac { 2 R T _ { c } } { \left( V _ { c } - b \right) ^ { 3 } } - \frac { 6 a } { V _ { c } ^ { 4 } } = 0 \\
\left( P _ { c } + \frac { a } { V _ { c } ^ { 2 } } \right) \left( V _ { c } - b \right) = R T _ { c }
\end{array} \right.
$$

which has the same solution (A2.4) and (A2.5).
A3.Numericalcalculationsforwaterproduce the following result

$$
\begin{align*}
& a _ { w } = 0.56 \frac { \mathrm {~m} ^ { 6 } \cdot \mathrm {~Pa} } { \mathrm {~mole} ^ { 2 } }  \tag{A3.1}\\
& b _ { w } = 3.1 \cdot 10 ^ { - 5 } \frac { \mathrm {~m} ^ { 3 } } { \mathrm {~mole} } \tag{A3.2}
\end{align*}
$$

A4.From equations (A1.4) and (A3.2) it is found that

$$
\begin{equation*}
d _ { w } = \sqrt [ 3 ] { \frac { b } { N _ { A } } } = 3.7 \cdot 10 ^ { - 10 } \mathrm {~m} \approx 4 \cdot 10 ^ { - 10 } \mathrm {~m} \tag{A4.1}
\end{equation*}
$$

## Part B. Properties of gas and liquid

B1.Usingtheinequality $V _ { G } \gg b$, the van der Waals equation of state can be written as

$$
\begin{equation*}
\left( p _ { 0 } + \frac { a } { V _ { G } ^ { 2 } } \right) V _ { G } = R T \tag{B1.1}
\end{equation*}
$$

which has the following solutions

$$
\begin{equation*}
V _ { G } = \frac { R T } { 2 p _ { 0 } } \left( 1 \pm \sqrt { 1 - \frac { 4 a p _ { 0 } } { R ^ { 2 } T ^ { 2 } } } \right) \tag{B1.2}
\end{equation*}
$$


Smaller root in (B1.2) gives the volume in an unstable state on the rising branch of thevan der Waals isotherm. The volume of gas is given by the larger root, since at $a = 0$ an expression for the volume of an ideal gasshould be obtained, i.e.

$$
\begin{equation*}
V _ { G } = \frac { R T } { 2 p _ { 0 } } \left( 1 + \sqrt { 1 - \frac { 4 a p _ { 0 } } { R ^ { 2 } T ^ { 2 } } } \right) \tag{B1.3}
\end{equation*}
$$

For given values of the parameters the value $\frac { a p _ { 0 } } { ( R T ) ^ { 2 } } = 5.8 \cdot 10 ^ { - 3 }$. It can therefore be assumed that $\frac { a p _ { 0 } } { ( R T ) ^ { 2 } } \ll 1$, then (B1.3)takes the form

$$
\begin{equation*}
V _ { G } \approx \frac { R T } { p _ { 0 } } \left( 1 - \frac { a p _ { 0 } } { R ^ { 2 } T ^ { 2 } } \right) = \frac { R T } { p _ { 0 } } - \frac { a } { R T } \tag{B1.4}
\end{equation*}
$$

B2. For an ideal gas

$$
\begin{equation*}
V _ { G 0 } = \frac { R T } { p _ { 0 } } \tag{B2.1}
\end{equation*}
$$

hence,

$$
\begin{equation*}
\left( \frac { \Delta V _ { G } } { V _ { G 0 } } \right) = \frac { V _ { G 0 } - V _ { G } } { V _ { G 0 } } = \frac { 1 } { 2 } \left( 1 - \sqrt { 1 - \frac { 4 a p _ { 0 } } { R ^ { 2 } T ^ { 2 } } } \right) \approx \frac { a p _ { 0 } } { R ^ { 2 } T ^ { 2 } } = 0.58 \% . \tag{B2.2}
\end{equation*}
$$

B3.Mechanical stability of a thermodynamic system is inpower provided that

$$
\begin{equation*}
\left( \frac { d P } { d V } \right) _ { T } < 0 . \tag{B3.1}
\end{equation*}
$$

The minimum volume, in which the mattercan still exist in the gaseous state, corresponds to a point in which

$$
\begin{equation*}
V _ { G \min } \rightarrow \left( \frac { d P } { d V } \right) _ { T } = 0 \tag{B3.2}
\end{equation*}
$$

Using the van der Waals equation of state (B3.2) is written as

$$
\begin{equation*}
\left( \frac { d P } { d V } \right) _ { T } = - \frac { R T } { ( V - b ) ^ { 2 } } + \frac { 2 a } { V ^ { 3 } } = 0 \tag{B3.3}
\end{equation*}
$$

From (B3.2) and (B3.3), and with the help of $V _ { G m i n } \gg b$, it is found that

$$
\begin{equation*}
V _ { G \min } = \frac { 2 a } { R T } \tag{B3.4}
\end{equation*}
$$

Thus,

$$
\begin{equation*}
\frac { V _ { G } } { V _ { G \min } } = \frac { R ^ { 2 } T ^ { 2 } } { 2 a p _ { 0 } } = 86 \tag{B3.5}
\end{equation*}
$$

B4. Usingtheinequality $P \ll a / V ^ { 2 }$, the van der Waals equation of state is written as

$$
\begin{equation*}
\frac { a } { V _ { L } ^ { 2 } } \left( V _ { L } - b \right) = R T \tag{B4.1}
\end{equation*}
$$

whose solution is

$$
\begin{equation*}
V _ { L } = \frac { a } { 2 R T } \left( 1 \pm \sqrt { 1 - \frac { 4 b R T } { a } } \right) \tag{B4.2}
\end{equation*}
$$

In this case, the smaller root shouldbe taken, since at $T \rightarrow$ 0the liquid volume $V _ { L } = b$ must be obtained according to (B4.1), i.e.

$$
\begin{equation*}
V _ { L } = \frac { a } { 2 R T } \left( 1 - \sqrt { 1 - \frac { 4 b R T } { a } } \right) \approx b \left( 1 + \frac { b R T } { a } \right) . \tag{B4.3}
\end{equation*}
$$

B5. Since (B4.3) givesthevolumeoftheonemoleofwaterits mass density is easily found as

$$
\begin{equation*}
\rho _ { L } = \frac { \mu } { V _ { L } } = \frac { \mu } { b \left( 1 + \frac { b R T } { a } \right) } \approx \frac { \mu } { b } = 5.8 \cdot 10 ^ { 2 } \frac { \mathrm {~kg} } { \mathrm {~m} ^ { 3 } } \tag{B5.1}
\end{equation*}
$$

B6. Inaccordancewith (B4.3) the volume thermal expansion coefficient is derived as

$$
\begin{equation*}
\alpha = \frac { 1 } { V _ { L } } \frac { \Delta V _ { L } } { \Delta T } = \frac { b R } { a + b R T } \approx \frac { b R } { a } = 4.6 \cdot 10 ^ { - 4 } \mathrm {~K} ^ { - 1 } \tag{B6.1}
\end{equation*}
$$

B7.The heat, required to convert the liquid to gas, is used to overcome the intermolecular forces that create negative pressure $a / V ^ { 2 }$, therefore,

$$
\begin{equation*}
E = L \mu \approx \int _ { V _ { L } } ^ { V _ { G } } \frac { a } { V ^ { 2 } } d V = a \left( \frac { 1 } { V _ { L } } - \frac { 1 } { V _ { G } } \right) \tag{B7.1}
\end{equation*}
$$

and using $V _ { G } \gg V _ { L }$, (B7.1) yields

$$
\begin{equation*}
L = \frac { a } { \mu V _ { L } } = \frac { a } { \mu b \left( 1 + \frac { b R T } { a } \right) } \approx \frac { a } { \mu b } = 1.0 \cdot 10 ^ { 6 } \frac { \mathrm {~J} } { \mathrm {~kg} } \tag{B7.2}
\end{equation*}
$$


B8.Consider some water of volume $V$. To make a monolayer of thickness $d$ out of it, the following work must be done

$$
\begin{equation*}
A = 2 \sigma S \tag{B8.1}
\end{equation*}
$$

Fabrication of the monomolecular layer may be interpreted as the evaporation of an equivalent volume of water which requires the following amount of heat

$$
\begin{equation*}
Q = L m \tag{B8.2}
\end{equation*}
$$

where the mass is given by

$$
\begin{equation*}
m = \rho S d \tag{B8.3}
\end{equation*}
$$

Using (A4.1a), (B5.1)and(B7.2), one finally gets

$$
\begin{equation*}
\sigma = \frac { a } { 2 b ^ { 2 } } d _ { w } = 0.12 \cdot 10 ^ { - 2 } \frac { \mathrm {~N} } { \mathrm {~m} } \tag{B8.4}
\end{equation*}
$$

## Part C. Liquid-gas systems

C1.At equilibrium, the pressure in the liquid and gas should be equalat all depths. The pressurepin the fluid at the depth his related to the pressure of saturated vapor above the flat surface by

$$
\begin{equation*}
p = p _ { 0 } + \rho _ { L } g h \tag{C1.1}
\end{equation*}
$$

The surface tension creates additional pressure defined by the Laplace formula as

$$
\begin{equation*}
\Delta p _ { L } = \frac { 2 \sigma } { r } \tag{C1.2}
\end{equation*}
$$

The same pressurepinthefluidatthedepth $h$ depends on the vapor pressure $p _ { h }$ over the curved liquid surface and its radiusofcurvature as

$$
\begin{equation*}
p = p _ { h } + \frac { 2 \sigma } { r } \tag{C1.3}
\end{equation*}
$$

Furthermore, the vapor pressure at different heights are related by

$$
\begin{equation*}
p _ { h } = p _ { 0 } + \rho _ { S } g h \tag{C1.4}
\end{equation*}
$$

Solving (C1.1)-(C1.4), it is found that

$$
\begin{equation*}
h = \frac { 2 \sigma } { \left( \rho _ { L } - \rho _ { S } \right) g r } \tag{C1.5}
\end{equation*}
$$

Hence,the pressure difference sought is obtained as

$$
\begin{equation*}
\Delta p _ { T } = p _ { h } - p _ { 0 } = \rho _ { S } g h = \frac { 2 \sigma } { r } \frac { \rho _ { S } } { \rho _ { L } - \rho _ { S } } \approx \frac { 2 \sigma } { r } \frac { \rho _ { S } } { \rho _ { L } } . \tag{C1.6}
\end{equation*}
$$

Note that the vapor pressure over the convex surface of the liquid is larger than the pressure above the flat surface.
C2.Let $P _ { e }$ be vapor pressure at a temperature $T _ { e }$, and $P _ { e } - \Delta P _ { e }$ be vapor pressure at a temperature $T _ { e } - \Delta T _ { e }$. In accordance with equation (3) from problem statement, whentheambient temperature falls by an amount of $\Delta T _ { e }$ the saturated vapor pressure changes by an amount

$$
\begin{equation*}
\Delta P _ { e } = P _ { e } \frac { a } { b R T _ { e } ^ { 2 } } \Delta T _ { e } \tag{C2.1}
\end{equation*}
$$

In accordance with the Thomson formula obtained in part C1, the pressure of saturated vapor above the droplet increases by the amountof $\Delta p _ { T }$. While a droplet is small in size, the vapor above its surface remains unsaturated. Whena droplet hasgrownuptoacertainminimumsize, thevaporaboveitssurface turns saturated.

Since the pressure remains unchanged, the following condition must hold

$$
\begin{equation*}
P _ { e } - \Delta P _ { e } + \Delta p _ { T } = P _ { e } \tag{C2.2}
\end{equation*}
$$

Assuming the vapor is almost ideal gas, its density can be found as

$$
\begin{equation*}
\rho _ { S } = \frac { \mu P _ { e } } { R T _ { e } } \ll \rho _ { L } \tag{C2.3}
\end{equation*}
$$

From equations (C2.1)-(C2.3), (B5.1) and (C1.6) one finds

$$
\begin{equation*}
\frac { 2 \sigma } { r } \frac { \mu P _ { e } } { R T _ { e } \left( \frac { \mu } { b } \right) } = P _ { e } \frac { a \Delta T _ { e } } { b R T _ { e } ^ { 2 } } \tag{C2.4}
\end{equation*}
$$

Thus, it is finally obtained that

$$
\begin{equation*}
r = \frac { 2 \sigma b ^ { 2 } T _ { e } } { a \Delta T _ { e } } = 1.5 \cdot 10 ^ { - 8 } \mathrm {~m} \tag{C2.5}
\end{equation*}
$$
