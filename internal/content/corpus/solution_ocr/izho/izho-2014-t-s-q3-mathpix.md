---
id: solution-ocr-izho-2014-t-s-q3
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2014_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2014-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 3 Metamaterials (10 points)

1. Consider the conducting layer disposed radially at the interval $[ r , r + d r ]$. Its conductivity $d \rho$ is

$$
\begin{equation*}
d \rho = \sigma _ { 0 } \frac { d S } { L } = \beta r \frac { 2 \pi r d r } { L } , \tag{1}
\end{equation*}
$$

and, hence, the total conductivity is given by

$$
\begin{equation*}
\rho = \int _ { 0 } ^ { R } d \rho = \frac { 2 \pi \beta R ^ { 3 } } { 3 L } . \tag{2}
\end{equation*}
$$

Thus, the resistance of the wire is found as

$$
\begin{equation*}
R _ { 0 } = \frac { 1 } { \rho } = \frac { 3 L } { 2 \pi \beta R ^ { 3 } } = 2.39 \times 10 ^ { - 2 } \mathrm { Ohm } . \tag{3}
\end{equation*}
$$

2. The amount of heat generated in the wire per unit time is determined by Joule law

$$
\begin{equation*}
P _ { I } = I ^ { 2 } R _ { 0 } . \tag{4}
\end{equation*}
$$

In steady regime, the same amount of heat must be removed through the surface of the wire into the environment, therefore, according to the Newton-Richman law

$$
\begin{equation*}
P _ { I } = 2 \pi R L P _ { e x t } = 2 \pi \alpha R L \left( T _ { s } - T _ { 0 } \right) , \tag{5}
\end{equation*}
$$

whence

$$
\begin{equation*}
T _ { s } = T _ { 0 } + \frac { 3 I ^ { 2 } } { 4 \pi ^ { 2 } \alpha \beta R ^ { 4 } } = 297 \mathrm {~K} . \tag{6}
\end{equation*}
$$

3. Consider a cylinder of radius $r$. Let us find an amount of heat generated per unit time inside that cylinder. To do this, let us find the electric field strength in the wire. According to Ohm's law, the current density is

$$
\begin{equation*}
j = \sigma _ { 0 } E , \tag{7}
\end{equation*}
$$

therefore, the total current can be written as


$$
\begin{equation*}
I = \int _ { 0 } ^ { r } j 2 \pi r d r = E \int _ { 0 } ^ { r } \sigma _ { 0 } 2 \pi r d r = \frac { 2 \pi R ^ { 3 } \beta E } { 3 } . \tag{8}
\end{equation*}
$$

Hence

$$
\begin{equation*}
E = \frac { 3 I } { 2 \pi \beta R ^ { 3 } } . \tag{9}
\end{equation*}
$$

The electric power generated in the cylender is determined by the Joule law in differential form

$$
\begin{equation*}
P _ { r } = \int _ { 0 } ^ { r } \sigma _ { 0 } E ^ { 2 } 2 \pi r L d r = \frac { 3 I ^ { 2 } L r ^ { 3 } } { 2 \pi \beta R ^ { 6 } } . \tag{10}
\end{equation*}
$$

It is evident that the power dissipated inside the cylinder must be taken away through the surface of the cylinder, thus,

$$
\begin{equation*}
P _ { r } = P = - \kappa 2 \pi r L \frac { d T } { d r } . \tag{11}
\end{equation*}
$$

Solving differential equation (11), using (10) together with the initial condition

$$
\begin{equation*}
T ( R ) = T _ { s } , \tag{12}
\end{equation*}
$$

the following solution is obtained in the form

$$
\begin{equation*}
T ( r ) = T _ { 0 } + \frac { I ^ { 2 } \left( \alpha R ^ { 3 } + 3 \kappa R ^ { 2 } - \alpha r ^ { 3 } \right) } { 4 \pi ^ { 2 } \alpha \beta \kappa R ^ { 6 } } . \tag{13}
\end{equation*}
$$

Thus, the temperature in the center of the wire is

$$
\begin{equation*}
T _ { \max } = T _ { 0 } + \frac { I ^ { 2 } \left( \alpha R ^ { 3 } + 3 \kappa R ^ { 2 } \right) } { 4 \pi ^ { 2 } \alpha \beta \kappa R ^ { 6 } } = 299 K . \tag{14}
\end{equation*}
$$

4. The radius change of the wire is determined by the law of thermal expansion of solids and can be written as

$$
\begin{equation*}
\delta R _ { T } = \int _ { 0 } ^ { R } \gamma \left[ T ( r ) - T _ { 0 } \right] d r = \frac { 3 \gamma ( \alpha R + 4 \kappa ) I ^ { 2 } } { 16 \pi ^ { 2 } \alpha \beta \kappa R ^ { 3 } } = 5.70 \times 10 ^ { - 9 } \mathrm {~m} . \tag{15}
\end{equation*}
$$

5. The magnetic field induction is determined by the circulation theorem, which, in this case, is written as

$$
\begin{equation*}
B 2 \pi r = \int _ { 0 } ^ { r } j 2 \pi r d r = E \int _ { 0 } ^ { r } \sigma _ { 0 } 2 \pi r d r \tag{16}
\end{equation*}
$$

Using expression (9), we finally obtain

$$
\begin{equation*}
B ( r ) = \frac { \mu _ { 0 } I r ^ { 2 } } { 2 \pi R ^ { 3 } } . \tag{17}
\end{equation*}
$$

6. The energy density of the magnetic field is given by

$$
\begin{equation*}
w _ { B } ( r ) = \frac { B ^ { 2 } ( r ) } { 2 \mu _ { 0 } } , \tag{18}
\end{equation*}
$$

therefore, the energy of the magnetic field inside the wire

$$
\begin{equation*}
W _ { B } = \int _ { 0 } ^ { R } w _ { B } ( r ) 2 \pi r L d r = \frac { \mu _ { 0 } I ^ { 2 } L } { 24 \pi } = 8.33 \times 10 ^ { - 10 } J . \tag{19}
\end{equation*}
$$

7. Let us write the equilibrium condition for the wire layer of small width $l$ and length $L$, disposed at the interval $r , r + d r$. The total Ampere force acting on this layer is written as

$$
\begin{equation*}
d F _ { A } = j B ( r ) L l d r . \tag{20}
\end{equation*}
$$

Hence, the pressure difference is obtained as

$$
\begin{equation*}
d p ( r ) = \frac { d F _ { A } } { l L } = \frac { 3 \mu _ { 0 } I ^ { 2 } r ^ { 3 } } { 4 \pi ^ { 2 } R ^ { 6 } } d r . \tag{21}
\end{equation*}
$$


Taking into consideration that the pressure at the wire pressure is zero, one gets

$$
\begin{equation*}
p ( r ) = \frac { 3 \mu _ { 0 } I ^ { 2 } \left( R ^ { 4 } - r ^ { 4 } \right) } { 16 \pi ^ { 2 } R ^ { 6 } } . \tag{22}
\end{equation*}
$$

8. As a result of the mechanical pressure the mechanical stress appears in the crystal lattice whose energy density is determined by the expression

$$
\begin{equation*}
w _ { \sigma } = \frac { \sigma ^ { 2 } } { 2 E } = \frac { p ^ { 2 } ( r ) } { 2 E } , \tag{23}
\end{equation*}
$$

thus, the total energy of mechanical deformations is found as

$$
\begin{equation*}
W _ { \sigma } = \int _ { 0 } ^ { R } w _ { \sigma } 2 \pi r L d r = \frac { 3 \mu _ { 0 } ^ { 2 } I ^ { 4 } L } { 320 E \pi ^ { 3 } R ^ { 2 } } = 2.39 \times 10 ^ { - 18 } \mathrm {~J} . \tag{24}
\end{equation*}
$$

9. The radius change of the wire is determined by Hooke's law, which, in this case, can be written in the form

$$
\begin{equation*}
\varepsilon = \frac { \sigma } { E } = \frac { p ( r ) } { E } , \tag{25}
\end{equation*}
$$

where $\varepsilon$ is the relative change in radius.
Thus, the radius change due to mechanical stress is found as

$$
\begin{equation*}
\delta R _ { \sigma } = \int _ { 0 } ^ { R } \varepsilon d r = \frac { 1 } { E } \int _ { a } ^ { R } p ( r ) d r = \frac { 3 \mu _ { 0 } I ^ { 2 } } { 20 \pi ^ { 2 } E R } = 1.91 \times 10 ^ { - 12 } \mathrm {~m} . \tag{26}
\end{equation*}
$$

10. Comparing expressions (15) and (25) we obtain

$$
\begin{equation*}
\gamma = \frac { 4 \mu _ { 0 } \alpha \beta \kappa R ^ { 2 } } { 5 E ( \alpha R + 4 \kappa ) } = 3.35 \times 10 ^ { - 10 } K ^ { - 1 } . \tag{27}
\end{equation*}
$$
