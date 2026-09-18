---
id: solution-ocr-nbpho-2017-s-p5
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2017-virtual-mass]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
5. VIRTUAL MASS The main idea is that the added mass will change the period of oscillations of the ball on the spring, which is given by $T = 2 \pi \sqrt { \frac { m } { k } }$ and changes as the mass changes. Let's measure the period $T _ { 1 }$ of oscillations in the air by measuring the time for 20 oscillations and dividing it by 20 to get the period. Similarly we will measure the period $T _ { 2 }$ of the oscillations in water. Then we have

$$
\frac { T _ { 2 } ^ { 2 } } { T _ { 1 } ^ { 2 } } = \frac { m + m _ { v } } { m } \Longrightarrow m _ { v } = m \left( \frac { T _ { 2 } ^ { 2 } } { T _ { 1 } ^ { 2 } } - 1 \right)
$$

where $m$ is the mass of the ball and $m _ { v }$ is the added mass (notice that the buoyancy doesn't appear in the equations, because it is a constant force and only changes the equilibrium point of the ball on the spring, but not the period). The periods turn out to be $T _ { 1 } = 1.066 \mathrm {~s}$ and $T _ { 2 } = 1.136 \mathrm {~s}$.

To determine the mass of the ball we will measure the elongation $x$ of the spring in two cases: with the ball hanging in the air and with the ball in the water. The ball causes the spring to elongate tens of centimeters, so these distances can be measured quite accurately. Considering the buoyancy in the water we get

$$
\begin{gathered}
k x _ { 1 } = m g \\
k x _ { 2 } = \left( m - \rho _ { v } V \right) g
\end{gathered}
$$

where $V = \frac { 4 } { 3 } \pi \left( \frac { d } { 2 } \right) ^ { 2 }$ (instead of the first equation $k x _ { 1 } = m g$ we could have used $m / k = \left( T _ { 1 } / 2 \pi \right) ^ { 2 }$, depending on how accurately the period was measured the final result might be more accurate using this). Using this we find

$$
m = \frac { \rho _ { v } V x _ { 1 } } { x _ { 1 } - x _ { 2 } } \approx 720 \mathrm {~g} .
$$

Finally the added mass is

$$
m _ { v } \approx 98 \mathrm {~g} .
$$
