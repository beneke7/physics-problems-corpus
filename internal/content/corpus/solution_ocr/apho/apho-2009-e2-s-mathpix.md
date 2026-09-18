---
id: solution-ocr-apho-2009-e2-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2009/E2_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2009-e-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Problem2: Oscillation of Water-Filled Vessel

Section I

i) $m _ { 1 } = \rho \pi \left[ R ^ { 2 } - ( R - t ) ^ { 2 } \right] L = \rho \pi \left( 2 R t - t ^ { 2 } \right) L$ ........................ (i)
ii) $m _ { 2 } = \rho \pi ( 0.6 \mathrm {~cm} ) R ^ { 2 }$ ....................... (ii)
iii) $m _ { 3 } = \pi ( R - t ) ^ { 2 } L$ (iii)
iv) $M = m _ { 1 } + 2 m _ { 2 } + m _ { 3 }$ (iv)
v) Water, as an ideal fluid, does not take part in the oscillatory motion of the water-filled vessel. We therefore shall not include contribution of water in the expressions for the moments of inertia.
$$
I _ { \mathrm { y } } = \frac { 1 } { 2 } m _ { 1 } \left[ R ^ { 2 } + ( R - t ) ^ { 2 } \right] + 2 \left[ \frac { 1 } { 2 } m _ { 2 } R ^ { 2 } \right]
$$
(v)
$$
\begin{aligned}
& \ell = 35.6 \mathrm {~cm} , g = 978 \mathrm {~cm} \mathrm {~s} ^ { - 2 } , a = R = 2.5 \mathrm {~cm} , \\
& \rho = 2.70 \mathrm {~g} \mathrm {~cm} ^ { - 3 } , h = 9.2 \mathrm {~cm} , L = 9.2 - 1.2 = 8.0 \mathrm {~cm}
\end{aligned}
$$
$$
\begin{aligned}
& m _ { 1 } = 339.3 t - 67.86 t ^ { 2 } \mathrm {~g} , \\
& m _ { 2 } = 31.8 \mathrm {~g} , \\
& m _ { 3 } = 157.1 - 125.7 t + 25.13 t ^ { 2 } \mathrm {~g} , \\
& M = 220.7 + 213.6 t - 42.73 t ^ { 2 } \mathrm {~g} \\
& I _ { \mathrm { y } } = 198.8 + 2121 t - 1273 t ^ { 2 } + 339.3 t ^ { 3 } - 33.93 t ^ { 4 }
\end{aligned}
$$

Section II

a)
$$
T _ { \mathrm { y } } = 2 \pi \sqrt { \frac { \ell } { g } \cdot \frac { I _ { \mathrm { y } } } { M a ^ { 2 } } }
$$
(vi)

Time for 50 oscillations is 43.3 s, hence

$$
T _ { \mathrm { y } } = 0.866 \mathrm {~s} \pm 0.004 \mathrm {~s}
$$

Substituting these values into equation (vi), we get

$$
t ^ { 4 } - 10 t ^ { 3 } + 33.42 t ^ { 2 } - 41.97 t + 15.36 = 0
$$

(vii)


The solution of (vii), by numerical iteration, is $t = 0.62 \mathrm {~cm} \pm 0.02 \mathrm {~cm}$
(The error can be estimated from a repeat of the procedure or a differential equation for $d T$ and $d t$ ) Hence, we get

$$
\begin{aligned}
& m _ { 1 } = 184 \pm 5 \mathrm {~g} , \\
& m _ { 2 } = 31.8 \pm 0.2 \mathrm {~g} , \\
& m _ { 3 } = 89 \pm 2 \mathrm {~g} , \\
& M = 337 \pm 6 \mathrm {~g} .
\end{aligned}
$$

b)

$$
\begin{equation*}
T _ { \mathrm { x } } = 2 \pi \sqrt { \frac { \ell } { g } \cdot \frac { I _ { \mathrm { x } } } { M a ^ { 2 } } } \tag{viii}
\end{equation*}
$$

$\ell = 33.6 \mathrm {~cm} , a = \frac { h } { 2 } = \frac { 9.2 } { 2 } = 4.6 \mathrm {~cm}$
Time for 50 oscillations is 38.0 s ± 0.2 s, hence

$$
T _ { \mathrm { x } } = 0.760 \mathrm {~s} \pm 0.004 \mathrm {~s}
$$

And from $T _ { \mathrm { x } } = 2 \pi \sqrt { \frac { \ell } { g } \cdot \frac { I _ { \mathrm { x } } } { M a ^ { 2 } } }$ where $\ell = 33.6 \mathrm {~cm} , a = \frac { h } { 2 } = \frac { 9.2 } { 2 } = 4.6 \mathrm {~cm}$,

$$
\begin{array} { r }
g = 978 \mathrm {~cm} \mathrm {~s} ^ { - 2 } , M = 337 \mathrm {~g} , \text { we get } \\
I _ { \mathrm { x } } ^ { \operatorname { Exp } } = 3036 \mathrm {~g} \mathrm {~cm} ^ { 2 } \pm 94 \mathrm {~g} \mathrm {~cm} ^ { 2 }
\end{array}
$$

Also $I _ { \mathrm { x } } ^ { \text {Theo } } = 3261 \mathrm {~g} \mathrm {~cm} ^ { 2 } \pm 68 \mathrm {~g} \mathrm {~cm} ^ { 2 }$
c)

$$
\Delta I _ { \mathrm { x } } = I _ { \mathrm { x } } ^ { \text {Theo } } - I _ { \mathrm { x } } ^ { \operatorname { Exp } } = 225 \mathrm {~g} \mathrm {~cm} ^ { 2 }
$$

The experimental value $I _ { \mathrm { x } } ^ { \text {Exp } }$ is smaller than $I _ { \mathrm { x } } ^ { \text {Theo } }$ by $225 \mathrm {~g} \mathrm {~cm} ^ { 2 }$.
This difference is probably significant and it is due to low viscosity of water. The mass of water in the middle section does not take part in the oscillatory motion of the vessel.


$\Delta I _ { x }$ can be estimated to be due to a stationary cylindrical portion of water in the middle.

$$
\begin{aligned}
& \Delta I _ { x } = \pi ( R - t ) ^ { 2 } L _ { \text {water } } \left( \frac { L _ { \text {water } } ^ { 2 } } { 12 } + \frac { ( R - t ) ^ { 2 } } { 4 } \right) \\
& L _ { \text {water } } \approx 5.7 \mathrm {~cm}
\end{aligned}
$$

This corresponds to the water mass of $\approx 63.8 g$
The percentage of the water that takes part in the oscillation is $\approx 28.5 \%$
