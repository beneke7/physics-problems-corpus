---
id: solution-ocr-kevin-zhou-xrevsol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-xrev-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 1. A photon of energy $E$ bounces between two mirrors separated by a distance $L$.

(a) If the mirrors are slowly moved together to a distance $L / 2$, find the final energy $E$ by considering the blueshift the photon experiences at every collision.
(b) Check this result agrees with the adiabatic theorem.
(c) Using your result, infer the value of $\gamma$ for a one-dimensional photon gas. Can you also infer the value of $\gamma$ for a $d$-dimensional photon gas?

Solution. (a) If the left mirror has speed $v$, then the Doppler shift factor on every reflection is $1 + 2 v / c$, so $\Delta E = ( 2 v / c ) E$ because $E = \hbar \omega$. We also have $\Delta x = - ( 2 x / c ) v$, which implies

$$
\frac { \Delta E } { \Delta x } = - \frac { E } { x } .
$$

Treating this as a differential equation $d E / d x = - E / x$ shows that $E x$ is conserved. (Note that the adiabatic theorem works fine in this case, because the photon is always moving quickly relative to the walls, so every collision has a small effect.)

Another valid, equivalent approach would be to note that the energy gets an overall Doppler shift of $( 1 + 2 v / c ) ^ { N }$ where $N$ is the number of collisions with the moving wall, and compute $N$ directly.

(b) The adiabatic invariant is
$$
\oint p d x = \frac { E } { c } ( 2 L ) \propto E x
$$
giving the same result, using $E = p c$.
(c) The pressure exerted by each photon is
$$
P = \frac { \Delta p } { \Delta t } = \frac { 2 E / c } { 2 L / c } = \frac { E } { x } .
$$
Therefore, $P x ^ { 2 }$ is constant which gives $\gamma = 2$. This is exactly as expected, since $C _ { v } = k _ { B }$.
In $d$ dimensions, much of the same reasoning holds. The quantity $E x$ is still invariant, where $x$ is the side length of, say, a cube. However, the pressure is now $P \propto E / V$. Then $P V x = P V ^ { 1 + 1 / d }$ is constant, so $\gamma = 1 + 1 / d$. For example, when $d = 3$ we have $\gamma = 4 / 3$, as we also found in T1 and T2 in different ways.
Note that the reasoning here works equally well if you don't know about photons, because electromagnetic waves redshift and blueshift in the same way. By using this reasoning, i.e. by thinking about how successive Doppler shifts change the frequency of light, Wien was able to derive the original form of Wien's displacement law.
