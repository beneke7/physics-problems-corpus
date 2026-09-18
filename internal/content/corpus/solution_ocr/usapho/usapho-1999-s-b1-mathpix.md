---
id: solution-ocr-usapho-1999-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/1999_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-1999-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
B1.
![](../../../figures/solution-ocr/e70e7be0ebe43e7dff6ed368.jpg)
Bla. For $\theta = 45 ^ { \circ }$, both $\cos \theta = 1 / \sqrt { 2 }$ and $\sin \theta = 1 / \sqrt { 2 }$. The relation between the magnitude of the angular acceleration $\alpha$ and the magnitude of the linear acceleration a is $a = \alpha L / 2$ with $a _ { \mathrm { x } } = a _ { y } = \alpha L / ( 2 \sqrt { 2 } )$. Using $\mathrm { I } \alpha = \Sigma \tau$ for the rotation about the hinge at the lower end of the left rod

$$
\begin{equation*}
\frac { M L ^ { 2 } \alpha } { 3 } = \frac { M g L } { 2 \sqrt { 2 } } - \frac { V L } { \sqrt { 2 } } - \frac { H L } { \sqrt { 2 } } \tag{a.1}
\end{equation*}
$$

Applying Newton's second law to the right rod

$$
\begin{array} { r c }
M a _ { x } = \sum F _ { x } & \frac { M 3 \alpha L } { 2 \sqrt { 2 } } = H \\
M a _ { y } = \sum F _ { y } & \frac { M \alpha L } { 2 \sqrt { 2 } } = M g + V - F _ { N } \tag{a.3}
\end{array}
$$

The net torque about the center of mass of the right rod is

$$
\begin{equation*}
I \alpha = \sum \tau \quad \frac { M L ^ { 2 } \alpha } { 12 } = \frac { F _ { \mathrm { N } } L } { 2 \sqrt { 2 } } + \frac { V L } { 2 \sqrt { 2 } } - \frac { H L } { 2 \sqrt { 2 } } \tag{a.4}
\end{equation*}
$$


Equations (a.1), (a.2), (a.3), and (a.4) form a set of four simultaneous equations in the four unknowns $H , V , \alpha$, and $F _ { N }$. Solving them simultaneously for $\mathrm { F } _ { \mathrm { S } }$, yields $F _ { N } = \frac { 7 } { 10 } \mathrm { Mg }$

b. By symmetry $\mathrm { V } = 0$. Applying Newton's second law to the right rod
$$
\begin{array} { r c }
M a _ { x } = \sum F _ { x } & \frac { M \alpha L } { 2 \sqrt { 2 } } = H \\
M a _ { y } = \sum F _ { y } & \frac { M \alpha L } { 2 \sqrt { 2 } } = M g - F _ { N } \tag{b.2}
\end{array}
$$
The net torque about the center of mass
$$
\begin{equation*}
I \alpha = \sum \tau \quad \frac { M L ^ { 2 } \alpha } { 12 } = \frac { F _ { N } L } { 2 \sqrt { 2 } } - \frac { H L } { 2 \sqrt { 2 } } \tag{b.3}
\end{equation*}
$$
Solving these three equations in unknowns $H . \alpha$ and $F _ { \mathrm { N } }$. Solving them simultaneously for $\mathrm { F } _ { \mathrm { N } }$, yields
$$
F _ { N } = \frac { 5 } { 8 } M g
$$
c. Considering both rods as the system so we don't need to include the work done by the forces H and V,
$$
\begin{equation*}
P E _ { L i } + P E _ { R i } = P E _ { L f } + P E _ { R f } + K E _ { L j } + K E _ { R f } \tag{c.1}
\end{equation*}
$$
Initially the center of mass of each rod is at a height $( \mathrm { L } / 2 ) \sin \theta _ { \mathrm { i } }$ where $\theta _ { \mathrm { i } } = 45 ^ { \circ }$
$$
P E _ { L i } + P E _ { R i } = M g \frac { L } { 2 } \sin \theta _ { i } + M g \frac { L } { 2 } \sin \theta _ { i } = M g L \sin \theta _ { i }
$$
Finally,
$$
P E _ { L f } + P E _ { R f } = M g \frac { L } { 2 } \sin \theta + M g \frac { L } { 2 } \sin \theta = M g L \sin \theta
$$
For each side
$$
K E _ { f } = \frac { 1 } { 2 } M v ^ { 2 } + \frac { 1 } { 2 } l \omega ^ { 2 } \text { with } \quad I = \frac { 1 } { 12 } M L ^ { 2 } .
$$
For the left rod $\quad \mathrm { v } _ { \mathrm { L } } = \omega \mathrm { L } / 2$, so $\quad K E _ { L f } = \frac { 1 } { 2 } M \left( \frac { \omega L } { 2 } \right) ^ { 2 } + \frac { 1 } { 2 } \left( \frac { 1 } { 12 } M L ^ { 2 } \right) \omega ^ { 2 } = \frac { 1 } { 6 } M L ^ { 2 } \omega ^ { 2 }$
For the right rod $\mathrm { v } _ { \mathrm { Ry } } = \omega ( \mathrm { L } / 2 ) \cos \theta$, but $\mathrm { v } _ { \mathrm { Rx } } = 3 \omega ( \mathrm {~L} / 2 ) \sin \theta$, so
$$
K E _ { R f } = \frac { 1 } { 2 } M \left( \frac { \omega L } { 2 } \right) ^ { 2 } \left( \cos ^ { 2 } \theta + 9 \sin ^ { 2 } \theta \right) + \frac { 1 } { 2 } \left( \frac { 1 } { 12 } M L ^ { 2 } \right) \omega ^ { 2 } = M L ^ { 2 } \omega ^ { 2 } \left( \frac { 1 } { 6 } + \sin ^ { 2 } \theta \right)
$$
Substituting all of the above into (c.1):
$$
M g L \sin \theta _ { i } = M g L \sin \theta + M L ^ { 2 } \omega ^ { 2 } \left( \frac { 2 } { 6 } + \sin ^ { 2 } \theta \right)
$$

Or

$$
\omega ^ { 2 } = \frac { 3 g } { L } \frac { \left( \sin \theta _ { i } - \sin \theta \right) } { \left( 1 + 3 \sin ^ { 2 } \theta \right) } = \frac { 3 g } { L } \frac { ( 1 / \sqrt { 2 } - \sin \theta ) } { \left( 1 + 3 \sin ^ { 2 } \theta \right) }
$$

d. By symmetry, $\mathrm { V } = 0$. The top of the "vee" doesn't move horizontally so H does no work. v $= \omega \mathrm { L } / 2$ for both rods. Applying energy conservation to either rod

$$
\begin{equation*}
P E _ { l } = P E _ { f } + K E _ { f } \tag{d.1}
\end{equation*}
$$

with

$$
P E _ { i } = M g \frac { L } { 2 } \sin \theta _ { i } \quad \text { and } \quad P E _ { f } = M g \frac { L } { 2 } \sin \theta
$$

For either side

$$
K E _ { f } = \frac { 1 } { 2 } M v ^ { 2 } + \frac { 1 } { 2 } I \omega ^ { 2 } \text { with } \quad I = \frac { 1 } { 12 } M L ^ { 2 }
$$

With

$$
\begin{equation*}
\mathrm { v } _ { \mathrm { L } } = \omega \mathrm { L } / 2 \text {, so } \quad K E _ { f } = \frac { 1 } { 2 } M \left( \frac { \omega L } { 2 } \right) ^ { 2 } + \frac { 1 } { 2 } \left( \frac { 1 } { 12 } M L ^ { 2 } \right) \omega ^ { 2 } = \frac { 1 } { 6 } M L ^ { 2 } \omega ^ { 2 } . \tag{d.3}
\end{equation*}
$$

Combining equations (d.1), (d.2), and (d.3). yields

$$
M g L \sin \theta _ { i } = M g L \sin \theta + \frac { 2 } { 6 } M L ^ { 2 } \omega ^ { 2 }
$$

Or

$$
\omega ^ { 2 } = \frac { 3 g } { L } \left( \sin \theta _ { i } - \sin \theta \right) = \frac { 3 g } { L } ( 1 / \sqrt { 2 } - \sin \theta )
$$
