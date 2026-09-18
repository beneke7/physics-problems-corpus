---
id: solution-ocr-ipho-2005-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2005/T3_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2005-t3]
verification_status: pending
provenance_note: "Mathpix PDF API Markdown conversion; source transcription pending human verification."
---
## Th3 QUANTUM EFFECTS OF GRAVITY SOLUTION

1. The only neutrons that will survive absorption at A are those that cannot cross $H$. Their turning points will be below $H$. So that, for a neutron entering to the cavity at height $z$ with vertical velocity $v _ { Z }$, conservation of energy implies
$$
\frac { 1 } { 2 } M v _ { z } ^ { 2 } + M g z \leq M g H \quad \Rightarrow \quad - \sqrt { 2 g ( H - z ) } \leq v _ { z } ( z ) \leq \sqrt { 2 g ( H - z ) }
$$
2. The cavity should be long enough to ensure the absorption of all neutrons with velocities outside the allowed range. Therefore, neutrons have to reach its maximum height at least once within the cavity. The longest required length corresponds to neutrons that enter
$$
H \stackrel { \longleftarrow } { \longrightarrow }
$$
at $z = H$ with $v _ { z } = 0$ (see the figure). Calling $t _ { f }$ to their time of fall
$$
\left. \begin{array} { l }
L _ { c } = v _ { x } 2 t _ { f } \\
H = \frac { 1 } { 2 } g t _ { f } ^ { 2 }
\end{array} \right\} \Rightarrow \begin{array} { c c }
L _ { c } = 2 v _ { x } \sqrt { \frac { 2 H } { g } } & L _ { c } = 6.4 \mathrm {~cm}
\end{array}
$$
3. The rate of transmitted neutrons entering at a given height $z$, per unit height, is proportional to the range of allowed velocities at that height, $\rho$ being the proportionality constant
$$
\frac { d N _ { c } ( z ) } { d z } = \rho \left[ v _ { z , \max } ( z ) - v _ { z , \min } ( z ) \right] = 2 \rho \sqrt { 2 g ( H - z ) }
$$
The total number of transmitted neutrons is obtained by adding the neutrons entering at all possible heights. Calling $y = z / H$
$$
\begin{aligned}
& N _ { c } ( H ) = \int _ { 0 } ^ { H } d N _ { c } ( z ) = \int _ { 0 } ^ { H } 2 \rho \sqrt { 2 g ( H - z ) } d z = 2 \rho \sqrt { 2 g } H ^ { 3 / 2 } \int _ { 0 } ^ { 1 } ( 1 - y ) ^ { 1 / 2 } d y = 2 \rho \sqrt { 2 g } H ^ { 3 / 2 } \left[ - \frac { 2 } { 3 } ( 1 - y ) ^ { 3 / 2 } \right] _ { 0 } ^ { 1 } \\
& N _ { c } ( H ) = \frac { 4 } { 3 } \rho \sqrt { 2 g } H ^ { 3 / 2 }
\end{aligned}
$$
4. For a neutron falling from a height $H$, the action over a bouncing cycle is twice the action during the fall or the ascent
$$
S = 2 \int _ { 0 } ^ { H } p _ { z } d z = 2 M \sqrt { 2 g } H ^ { 3 / 2 } \int _ { 0 } ^ { 1 } ( 1 - y ) ^ { 1 / 2 } d y = \frac { 4 } { 3 } M \sqrt { 2 g } H ^ { 3 / 2 }
$$
Using the BS quantization condition
$$
S = \frac { 4 } { 3 } M \sqrt { 2 g } H ^ { 3 / 2 } = n h \quad \Rightarrow \quad H _ { n } = \left( \frac { 9 h ^ { 2 } } { 32 M ^ { 2 } g } \right) ^ { 1 / 3 } n ^ { 2 / 3 }
$$
The corresponding energy levels (associated to the vertical motion) are
$$
E _ { n } = M g H _ { n } \Rightarrow E _ { n } = \left( \frac { 9 M g ^ { 2 } h ^ { 2 } } { 32 } \right) ^ { 1 / 3 } n ^ { 2 / 3 }
$$

Numerical values for the first level:

$$
\begin{array} { l l l }
H _ { 1 } = \left( \frac { 9 h ^ { 2 } } { 32 M ^ { 2 } g } \right) ^ { 1 / 3 } = 1.65 \times 10 ^ { - 5 } \mathrm {~m} & H _ { 1 } = 16.5 \mu \mathrm {~m} \\
E _ { 1 } = M g H _ { 1 } = 2.71 \times 10 ^ { - 31 } \mathrm {~J} = 1.69 \times 10 ^ { - 12 } \mathrm { eV } & E _ { 1 } = 1.69 \mathrm { peV }
\end{array}
$$

Note that $H _ { 1 }$ is of the same order than the given cavity height, $H = 50 \mu \mathrm {~m}$. This opens up the possibility for observing the spatial quantization when varying $H$.

5. The uncertainty principle says that the minimum time $\Delta t$ and the minimum energy $\Delta E$ satisfy the relation $\Delta E \Delta t \geq \hbar$. During this time, the neutrons move to the right a distance
$$
\Delta x = v _ { x } \Delta t \geq v _ { x } \frac { \hbar } { \Delta E }
$$
Now, the minimum neutron energy allowed in the cavity is $E _ { 1 }$, so that $\Delta E \approx E _ { 1 }$. Therefore, an estimation of the minimum time and the minimum length required is
$$
t _ { q } \approx \frac { \hbar } { E _ { 1 } } = 0.4 \cdot 10 ^ { - 3 } \mathrm {~s} = 0.4 \mathrm {~ms} \quad L _ { q } \approx v _ { x } \frac { \hbar } { E _ { 1 } } = 4 \cdot 10 ^ { - 3 } \mathrm {~m} = 4 \mathrm {~mm}
$$

Th 3 ANSWER SHEET
| Question | Basic formulas used | Analytical results | Numerical results | Marking guideline |
| :--- | :--- | :--- | :--- | :--- |
| 1 | $\frac { 1 } { 2 } M v _ { z } ^ { 2 } + M g z \leq M g H$ | $- \sqrt { 2 g ( H - z ) } \leq v _ { z } ( z ) \leq \sqrt { 2 g ( H - z ) }$ |  | 1.5 |
| 2 | $\begin{aligned} & L _ { c } = v _ { x } 2 t _ { f } \\ & H = \frac { 1 } { 2 } g t _ { f } ^ { 2 } \end{aligned}$ | $L _ { c } = 2 v _ { x } \sqrt { \frac { 2 H } { g } }$ | $L _ { c } = 6.4 \mathrm {~cm}$ | 1.3 + 0.2 |
| 3 | $\begin{aligned} & \frac { d N _ { c } } { d z } = \rho \left[ v _ { z , \max } - v _ { z , \min } \right] \\ & N _ { c } ( H ) = \int _ { 0 } ^ { H } d N _ { c } ( z ) \end{aligned}$ | $N _ { c } ( H ) = \frac { 4 } { 3 } \rho \sqrt { 2 g } H ^ { 3 / 2 }$ |  | 2.5 |
| 4 | $S = 2 \int _ { 0 } ^ { H } p _ { z } d z = n h$ | $\begin{aligned} & H _ { n } = \left( \frac { 9 h ^ { 2 } } { 32 M ^ { 2 } g } \right) ^ { 1 / 3 } n ^ { 2 / 3 } \\ & E _ { n } = \left( \frac { 9 M g ^ { 2 } h ^ { 2 } } { 32 } \right) ^ { 1 / 3 } n ^ { 2 / 3 } \end{aligned}$ | $\begin{aligned} & H _ { 1 } = 16.5 \mu \mathrm {~m} \\ & E _ { 1 } = 1.69 \mathrm { peV } \end{aligned}$ | $\begin{aligned} & 1.6 + 0.2 \\ & 0.5 + 0.2 \end{aligned}$ |
| 5 | $\begin{aligned} & \Delta E \Delta t \geq \hbar \\ & \Delta E \approx E _ { 1 } \\ & \Delta x = v _ { x } \Delta t \end{aligned}$ | $\begin{aligned} & t _ { q } \approx \frac { \hbar } { E _ { 1 } } \\ & L _ { q } \approx v _ { x } \frac { \hbar } { E _ { 1 } } \end{aligned}$ | $\begin{aligned} & t _ { q } \approx 0.4 \mathrm {~ms} \\ & L _ { q } \approx 4 \mathrm {~mm} \end{aligned}$ | $\begin{aligned} & 1.3 + 0.2 \\ & 0.3 + 0.2 \end{aligned}$ |
