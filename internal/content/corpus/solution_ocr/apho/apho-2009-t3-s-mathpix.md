---
id: solution-ocr-apho-2009-t3-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2009/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## The Leidenfrost Phenomenon

3.1) As given in the problem
$$
\begin{equation*}
\frac { d } { d z } v = \left( \frac { 1 } { \eta } \frac { d P } { d r } \right) \cdot z \tag{i}
\end{equation*}
$$
Integrating (i) with respect to $z$, we get
$$
\begin{equation*}
v ( z ) = \left( \frac { 1 } { 2 \eta } \frac { d P } { d r } \right) \cdot z ^ { 2 } + C \tag{ii}
\end{equation*}
$$
(0.5 point)
3.2) $$
\begin{array} { l l }
& v \left( \frac { b } { 2 } \right) = 0 = \left( \frac { 1 } { 2 \eta } \frac { d P } { d r } \right) \cdot \left( \frac { b } { 2 } \right) ^ { 2 } + C  \tag{. \(\ldots \ldots \ldots \ldots .\).}\\
\therefore & C = - \frac { b ^ { 2 } } { 8 \eta } \frac { d P } { d r }
\end{array}
$$
(0.5 point)
Note that $C$ is not a real constant; its value depends on $\frac { d P } { d r }$ which is a function of $r$.
3.3) Let $Q$ be the volume rate of flow of the vapour through the cylindrical surface of $2 \pi r b$.
$$
\begin{align*}
& \delta Q = v ( z ) \cdot 2 \pi r \delta z \text { where from (ii) and (iii): }  \tag{0.3point}\\
& v ( z ) = \left( \frac { 1 } { 2 \eta } \frac { d P } { d r } \right) \cdot \left[ z ^ { 2 } - \frac { b ^ { 2 } } { 4 } \right]  \tag{iv}\\
& \therefore \quad Q = 2 \int _ { z = 0 } ^ { \frac { b } { 2 } } v ( z ) \cdot 2 \pi r d z = \left( \frac { 2 \pi r } { \eta } \frac { d P } { d r } \right) \int _ { z = 0 } ^ { \frac { b } { 2 } } \left[ z ^ { 2 } - \frac { b ^ { 2 } } { 4 } \right] d z \\
& Q = - \frac { \pi r b ^ { 3 } } { 6 \eta } \frac { d P } { d r } \tag{0.7point}
\end{align*}
$$

3.4) The total rate of heat flow from the area $\pi r ^ { 2 }$ of the hot surface to the drop is $\frac { \pi r ^ { 2 } \mathcal { K } \Delta T } { b }$. We assume that this heat goes into vaporizing the drop.
Hence
$$
\begin{align*}
\rho Q \ell & = \frac { \pi r ^ { 2 } \mathcal { K } \Delta T } { b } \quad \text { and using (v) we get } \\
\frac { d P } { d r } & = - \left( \frac { 6 \eta \mathcal { K } \Delta T } { \rho _ { \mathrm { v } } \ell b ^ { 4 } } \right) \cdot r \quad \ldots \ldots \ldots \ldots \ldots \ldots . \tag{vi}
\end{align*}
$$
This gives
$$
\begin{equation*}
P ( r ) = - \left( \frac { 3 \eta \mathcal { K } \Delta T } { \rho _ { \mathrm { V } } \ell b ^ { 4 } } \right) \cdot r ^ { 2 } + B \tag{0.4point}
\end{equation*}
$$
where $B$ is an arbitrary constant whose value can be found by applying the boundary condition $P ( R ) = P _ { \mathrm { a } }$, the atmospheric pressure.
Hence
$$
\begin{equation*}
B = P _ { \mathrm { a } } + \left( \frac { 3 \eta \mathcal { K } \Delta T } { \rho _ { \mathrm { V } } \ell b ^ { 4 } } \right) \cdot R ^ { 2 } \tag{vii}
\end{equation*}
$$
and
$$
\begin{equation*}
P ( r ) = P _ { \mathrm { a } } + \left( \frac { 3 \eta \mathcal { K } \Delta T } { \rho _ { \mathrm { V } } \ell b ^ { 4 } } \right) \cdot \left( R ^ { 2 } - r ^ { 2 } \right) \tag{viii}
\end{equation*}
$$
3.5) The net force due to pressure is in the upward direction and of magnitude
$$
\begin{equation*}
f = \int _ { r = 0 } ^ { R } \left[ P ( r ) - P _ { \mathrm { a } } \right] 2 \pi r d r = \frac { 3 \pi \eta \mathcal { K } \Delta T R ^ { 4 } } { 2 \rho _ { \mathrm { v } } \ell b ^ { 4 } } \tag{ix}
\end{equation*}
$$
The weight of the drop is $\frac { 2 } { 3 } \pi R ^ { 3 } \rho _ { 0 } g$, where $\rho _ { 0 }$ is the density of liquid.
$$
\begin{array} { l l }
\therefore & \frac { 2 } { 3 } \pi R ^ { 3 } \rho _ { 0 } g = \frac { 3 \pi \eta \mathcal { K } \Delta T R ^ { 4 } } { 2 \rho _ { \mathrm { v } } \ell b ^ { 4 } } \\
& b = \left( \frac { 9 \eta \mathcal { K } R \Delta T } { 4 \rho _ { 0 } \rho _ { \mathrm { v } } \ell g } \right) ^ { \frac { 1 } { 4 } } \tag{x}
\end{array}
$$

| Note that | $\frac { 3 \eta \mathcal { K } \Delta T } { \rho _ { \mathrm { v } } \ell b ^ { 4 } } = \frac { 4 } { 3 } \frac { \rho _ { 0 } g } { R }$ | ...............(xi) | (1.0 point) |
| :--- | :--- | :--- | :--- |

3.6) Use equations (xi) and (viii) to obtain
$$
\begin{align*}
& P ( r ) = P _ { \mathrm { a } } + \left( \frac { 4 } { 3 } \frac { \rho _ { 0 } g } { R } \right) \cdot \left( R ^ { 2 } - r ^ { 2 } \right)  \tag{xii}\\
& \frac { d } { d r } P ( r ) = - \left( \frac { 8 } { 3 } \frac { \rho _ { 0 } g } { R } \right) \cdot r \tag{xiii}
\end{align*}
$$
Then use (v) to calculate the total mass-rate of vaporization $Q \rho _ { \mathrm { V } }$ at $r = R$ :
$$
\begin{align*}
Q \rho _ { \mathrm { v } } & = \left( \frac { 2 \pi b ^ { 3 } R } { 12 \eta } \right) \left( \frac { 8 } { 3 } \frac { \rho _ { 0 } g } { R } \right) R \rho _ { \mathrm { v } } = \left( \frac { 4 \pi \rho _ { \mathrm { v } } \rho _ { 0 } g R } { 9 \eta } \right) b ^ { 3 } \\
& = \left( \frac { 4 \pi \rho _ { \mathrm { v } } \rho _ { 0 } g R } { 9 \eta } \right) \left( \frac { 9 \eta \mathcal { K } R \Delta T } { 4 \rho _ { 0 } \rho _ { \mathrm { v } } \ell g } \right) ^ { \frac { 3 } { 4 } } \\
& = \left( \frac { 4 \pi ^ { 4 } \mathcal { K } ^ { 3 } \rho _ { \mathrm { v } } \rho _ { 0 } g ( \Delta T ) ^ { 3 } } { 9 \eta \ell ^ { 3 } } \right) ^ { \frac { 1 } { 4 } } \cdot R ^ { \frac { 7 } { 4 } } = \beta R ^ { \frac { 7 } { 4 } } \tag{xiv}
\end{align*} . \ldots . .
$$
3.7) The life-time $( \tau )$ of the drop, is to be found from
$$
\begin{align*}
& \frac { d } { d t } \left( \frac { 2 } { 3 } \pi R ^ { 3 } \rho _ { 0 } \right) = - Q \rho _ { \mathrm { v } } = - \beta R ^ { \frac { 7 } { 4 } } \\
& R ^ { \frac { 1 } { 4 } } \frac { d } { d t } R = - \frac { \beta } { 2 \pi \rho _ { 0 } } \\
& \int _ { R } ^ { 0 } R ^ { \frac { 1 } { 4 } } d R = - \int _ { 0 } ^ { \tau } \frac { \beta } { 2 \pi \rho _ { 0 } } d t  \tag{1.0point}\\
& \tau = \frac { 8 \pi \rho _ { 0 } } { 5 \beta } R ^ { \frac { 5 } { 4 } } = \frac { 8 } { 5 } \left( \frac { 9 \eta \rho _ { 0 } ^ { 3 } \ell ^ { 3 } } { 4 \mathcal { K } ^ { 3 } \rho _ { \mathrm { v } } g ( \Delta T ) ^ { 3 } } \right) ^ { \frac { 1 } { 4 } } \cdot R ^ { \frac { 5 } { 4 } } \tag{1.0point}
\end{align*}
$$
