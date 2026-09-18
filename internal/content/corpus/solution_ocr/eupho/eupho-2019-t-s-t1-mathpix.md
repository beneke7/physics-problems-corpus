---
id: solution-ocr-eupho-2019-t-s-t1
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2019_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2019-T1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 1 Ice pellets

a. With the given assumptions of constant droplet size and constant atmospheric density the drag force leads to a constant velocity $v$ for the fall of the droplet through the atmosphere.
We can assume that the droplet temperature $T _ { \mathrm { d } }$ above $h _ { \mathrm { A } }$ follows the atmosphere temperature profile (also see below) and remains constant and equal to $T _ { 0 } = 0 ^ { \circ } \mathrm { C }$ during the melting below that height.
For small temperature differences $\Delta T = T - T _ { \mathrm { d } }$ the heat exchange rate is proportional to this difference $\mathrm { d } Q / \mathrm { d } t = \kappa \Delta T$. The factor $\kappa$ depends on the droplet geometry and its velocity, as well as on the air density. Since these are constant $\kappa = \mathrm { const }$.
In the region between $h _ { \mathrm { A } }$ and $h _ { \mathrm { B } }$ the droplet is therefore heated at a rate
$$
\begin{equation*}
\mathrm { d } Q = \kappa \left( T - T _ { 0 } \right) \mathrm { d } t = - \kappa \left( T - T _ { 0 } \right) \frac { \mathrm { d } h } { v } , \tag{1}
\end{equation*}
$$
The total heat transfer between $h _ { \mathrm { A } }$ and $h _ { \mathrm { B } }$ is
$$
\begin{equation*}
Q = \frac { \kappa A } { v } = m L , \tag{2}
\end{equation*}
$$
where $A = 5.0$ km °C is the area between the temperature curve and the height-axis in the region between heights $h _ { \mathrm { A } }$ and $h _ { \mathrm { B } }$. The right hand side equates the heat with the latent heat necessary to completely melt the ice droplet of mass $m$.
In the region below $h _ { \mathrm { B } }$ the liquid droplet partially freezes again. During this process the temperature is again constant. The mass fraction $\eta$ of liquid freezing before reaching the ground can again be derived from the area $A ^ { \prime } = 4.0 \mathrm {~km} { } ^ { \circ } \mathrm { C }$ between the curve and the height-axis.
$$
\begin{equation*}
Q ^ { \prime } = - \frac { \kappa A ^ { \prime } } { v } = - \eta m L , \tag{3}
\end{equation*}
$$
Dividing (3) by (2) gives the mass fraction
$$
\begin{equation*}
\eta = \frac { A ^ { \prime } } { A } = \frac { 4 } { 5 } = 0.80 . \tag{4}
\end{equation*}
$$
b. If the temperature profile follows the dashed line the droplet will completely melt and the heat transferred from the atmosphere will heat it up. Since the latent heat of melting is much bigger than the specific heat of water times some degrees of temperature variation the temperature of the liquid droplet will closely follow the temperature of the atmosphere eventually. Its temperature at ground level should therefore be close to 8 °C.
For a better estimate let us introduce a new coordinate $x$ whose origin is at the height, where the droplet is completely molten (somewhat higher than $h _ { \mathrm { B } }$ ), and which is oriented downwards. For the change in temperature of the droplet we then have
$$
\begin{equation*}
m c _ { \text {water } } \frac { \mathrm { d } T _ { \mathrm { d } } } { \mathrm {~d} t } = m c _ { \text {water } } v \frac { \mathrm {~d} T _ { \mathrm { d } } } { \mathrm {~d} x } = \kappa \left( T - T _ { \mathrm { d } } \right) , \tag{5}
\end{equation*}
$$
where the temperature of the atmosphere is given by $T ( x ) = T ( x = 0 ) + 2.0 ^ { \circ } \mathrm { C } \mathrm { km } ^ { - 1 } x = : T ( x = 0 ) + b x$.

For the difference $\Delta T = T - T _ { \mathrm { d } }$ between the atmospheric temperature and the droplet temperature we have:

$$
\begin{equation*}
\frac { \mathrm { d } \Delta T } { \mathrm {~d} x } = b - \frac { \mathrm { d } T _ { \mathrm { d } } } { \mathrm {~d} x } = b - \frac { \kappa } { m c _ { \text {water } } v } \Delta T . \tag{6}
\end{equation*}
$$

This differential equation is solved by

$$
\begin{equation*}
\Delta T = b x _ { 0 } + \text { const } \cdot \exp \left( - x / x _ { 0 } \right) , \tag{7}
\end{equation*}
$$

where $x _ { 0 } = m c _ { \text {water } } v / \kappa$. From equation (2) we find that $\frac { m v } { \kappa } = \frac { A } { L }$ such that $x _ { 0 } = \frac { c _ { \text {water } } } { L } A \approx 0.063 \mathrm {~km}$. Therefore the exponential factor in the above equation is negligible at ground level (the constant is close to 4°C) and we arrive at a temperature difference between the droplet temperature and the atmospheric temperature at ground level of

$$
\begin{equation*}
\Delta T \approx 0.13 ^ { \circ } \mathrm { C } , \quad \text { and therefore } \quad T _ { \mathrm { d } } \approx 7.9 ^ { \circ } \mathrm { C } . \tag{8}
\end{equation*}
$$

Another phenomenon, which effectively shifts atmosphere temperature as it is "felt" by the droplet is due to viscous dissipation. It can be estimated by equating the droplet potential energy loss rate $m g v$ to thermal power carried away by the circumfluent air $\kappa \Delta T ^ { * }$. This gives $\Delta T ^ { * } \sim m g v / \kappa = g A / L = 0.17 ^ { \circ } \mathrm { C }$. If both corrections were taken into account, then the droplet temperature before hitting the ground would again be $T _ { \mathrm { d } } \approx 8.0 ^ { \circ } \mathrm { C }$.
