---
id: solution-ocr-nbpho-2010-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2010-thermos-bottle]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 2. Thermos bottle (6 points)

i. (3.5 pts) Remark: this problem techically rather challenging. Therefore, reasonable estimates like $P \approx \sigma \varepsilon S _ { 1 } \left( T _ { 2 } ^ { 4 } - T _ { 1 } ^ { 4 } \right) \approx$ 2.6 W or $P \approx \frac { 1 } { 2 } \sigma \varepsilon S _ { 1 } \left( T _ { 2 } ^ { 4 } - T _ { 1 } ^ { 4 } \right) \approx 1.3 \mathrm {~W}$ will be graded by 2-2.5 pts.

The heat flux radiated from one wall is partially reflected back by other wall, which is also partially reflected back, etc. Besides, the flux from the outer wall can hit itself, if it misses the inner wall. So, near the surface of the outer wall, we can split the heat flux into inwards flux $Q _ { i }$ and outwards flux $Q _ { o }$. Then, upon designating the flux radiated by the outer wall by $Q = \varepsilon \sigma S _ { 2 } T _ { 2 } ^ { 4 }$, we have equalities

$$
Q _ { i } = Q + Q _ { o } ( 1 - \varepsilon ) ,
$$

i.e. the inward flux consists of (a) inital radiation, and of (b) the back-reflected part of the outwards flux. Similarly we have

$$
Q _ { o } = Q _ { i } \kappa ( 1 - \varepsilon ) + Q _ { i } ( 1 - \kappa ) = Q _ { i } ( 1 - \kappa \varepsilon ) ,
$$

i.e. the outward flux consists of (a) the part $\kappa$ of itself, which hits the inner wall and is reflected back, and of (b) the part $1 - \kappa$ of itself, which misses the inner wall hence reaches again the outer wall as an outwards flux. Upon substituting $Q _ { o }$ from the second equation into the first one, we obtain

$$
Q = Q _ { i } [ 1 - ( 1 - \kappa \varepsilon ) ( 1 - \varepsilon ) ] = Q _ { i } \varepsilon ( 1 + \kappa - \kappa \varepsilon ) ,
$$

hence $Q _ { i } = Q / \varepsilon ( 1 + \kappa - \varepsilon )$. From that inwards flux, the part which hits the inner wall is $\kappa$; in order to get the dissipated part, we need further to multiply the result by $\varepsilon$. So, the dissipated flux is

$$
Q _ { d i } = \varepsilon \sigma S _ { 2 } T _ { 2 } ^ { 4 } \kappa / ( 1 + \kappa - \kappa \varepsilon ) .
$$

In order to obtain the flux $Q _ { d o }$, which is radiated from the inner wall and is dissipated in the outer wall, we proceed in the same way. Now, let $Q = \varepsilon \sigma S _ { 1 } T _ { 1 } ^ { 4 }$; then,

$$
Q _ { o } = Q + Q _ { i } ( 1 - \kappa \varepsilon ) ,
$$

and

$$
Q _ { i } = Q _ { o } ( 1 - \varepsilon ) ,
$$

so that $Q _ { o } = Q / [ \varepsilon ( 1 + \kappa - \kappa \varepsilon ) ]$ and

$$
Q _ { d o } = \varepsilon \sigma S _ { 1 } T _ { 1 } ^ { 4 } / ( 1 + \kappa - \kappa \varepsilon ) .
$$

Now, let us consider (an imaginary) situation, when $T _ { 1 } = T _ { 2 }$. This is thermal equilibrium, when the heat flux $Q _ { d o }$ given by the inner wall to the outer one must be equal to the flux $Q _ { d i }$, which is given by the outer wall to the inner one. Using our expressions we see that $\kappa S _ { 2 } = S _ { 1 }$, i.e. $\kappa = S _ { 1 } / S _ { 2 }$. Now we can finally write down the expression for the net flux given to the nitrogen,

$$
P = Q _ { d i } - Q _ { d o } = \frac { \varepsilon \sigma 4 \pi R _ { 1 } ^ { 2 } \left( T _ { 2 } ^ { 4 } - T _ { 1 } ^ { 4 } \right) } { 1 + ( 1 - \varepsilon ) R _ { 1 } ^ { 2 } / R _ { 2 } ^ { 2 } } \approx 1.78 \mathrm {~W} .
$$

ii. (2.5 pts) The net heat received by the inner wall is spent on evaporating the nitrogen, i.e. $\tau P = \lambda m$, where $m = \frac { 4 } { 3 } \pi \rho R ^ { 3 }$. So,

$$
\tau = \frac { 4 } { 3 } \pi \rho R ^ { 3 } \lambda \mu / P \approx 36 \mathrm {~h} .
$$
