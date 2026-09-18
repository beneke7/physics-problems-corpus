---
id: solution-ocr-ipho-1986-t-s-q1
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1986_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-1986-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Answers Question 1

(i) Vector Diagram
![](../../../figures/solution-ocr/df63332e135a35808f530956.jpg)
![](../../../figures/solution-ocr/3e9dc8c8d94eda76e0e6c77c.jpg)
If the phase of the light from the first slit is zero, the phase from second slit is
$$
\phi = \frac { 2 \pi } { \lambda } d \sin \theta
$$
Adding the two waves with phase difference $\phi$ where $\xi = 2 \pi \left( f t - \frac { x } { \lambda } \right)$,
$$
\begin{aligned}
& a \cos ( \xi + \phi ) + a \cos ( \xi ) = 2 a \cos ( \phi / 2 ) ( \xi + \phi / 2 ) \\
& a \cos ( \xi + \phi ) + a \cos ( \xi ) = 2 a \cos \beta \{ \cos ( \xi + \beta ) \}
\end{aligned}
$$
This is a wave of amplitude $A = 2 a \cos \beta$ and phase $\beta$. From vector diagram, in isosceles triangle OPQ,
$$
\beta = \frac { 1 } { 2 } \phi = \frac { \pi } { \lambda } d \sin \theta \quad ( \text { NB } \phi = 2 \beta )
$$
and
$$
A = 2 a \cos \beta .
$$
Thus the sum of the two waves can be obtained by the addition of two vectors of amplitude a and angular directions 0 and $\phi$.
    (ii) Each slit in diffraction grating produces a wave of amplitude a with phase $2 \beta$ relative to previous slit wave. The vector diagram consists of a 'regular' polygon with sides of constant length $a$ and with constant angles between adjacent sides.
Let O be the centre of circumscribing circle passing through the vertices of the polygon. Then radial lines such as OS have length R and bisect the internal angles of the polygon. Figure 1.2.

Figure 1.2
![](../../../figures/solution-ocr/006f5dea470614799890e041.jpg)


$$
\begin{aligned}
& \hat { O S T } = \hat { O T S } = \frac { 1 } { 2 } ( 180 - \phi ) \\
& \text { and } \hat { T O S } = \phi
\end{aligned}
$$

In the triangle TOS, for example

$$
\begin{gather*}
a = 2 R \sin ( \phi / 2 ) = 2 R \sin \beta \text { as } ( \phi = 2 \beta ) \\
\therefore R = \frac { a } { 2 \sin \beta } \tag{1}
\end{gather*}
$$

As the polygon has $N$ faces then:

$$
T \hat { O Z } = N ( T \hat { O Z } ) = N \phi = 2 N \beta
$$

Therefore in isosceles triangle TOZ, the amplitude of the resultant wave, TZ, is given by

$$
2 R \sin N \beta .
$$

Hence form (1) this amplitude is

$$
\frac { a \sin N \beta } { \sin \beta }
$$

Resultant phase is

$$
\begin{aligned}
& = Z \hat { T } S \\
& = O \hat { T } S - O \hat { T } Z \\
& \left( 90 - \frac { \phi } { 2 } \right) - \frac { 1 } { 2 } ( 180 - N \phi ) \\
& - \frac { 1 } { 2 } ( N - 1 ) \phi \\
& = ( N - 1 ) \beta
\end{aligned}
$$

(iii)
![](../../../figures/solution-ocr/c235539d7e0f8afe71bf8283.jpg)
Intensity $I = \frac { a ^ { 2 } \sin ^ { 2 } N \beta } { \sin ^ { 2 } \beta }$


![](../../../figures/solution-ocr/95839bb0ffbc84c564b6357d.jpg)

(iv) For the principle maxima $\beta = \pi p \quad$ where $p = 0 \pm 1 \pm 2 \ldots \ldots$.
$$
I _ { \max } = a ^ { 2 } \left( \frac { N \beta ^ { \prime } } { \beta ^ { \prime } } \right) = N ^ { 2 } a ^ { 2 } \quad \beta ^ { \prime } = 0 \text { and } \beta = \pi p + \beta ^ { \prime }
$$
(v) Adjacent max. estimate $I _ { 1 }$ :
$$
\sin ^ { 2 } N \beta = 1 , \quad \beta = 2 \pi p \mp \frac { 3 \pi } { 2 N } \text { i.e } \beta = \pm \frac { 3 \pi } { 2 N }
$$
$\left[ \beta = \pi p \pm \frac { \pi } { 2 N } \right]$ does not give a maximum as can be observed from the graph.
$$
I _ { 1 } = a ^ { 2 } \frac { 1 } { \frac { 3 \pi ^ { 2 } } { 2 n } } = \frac { a ^ { 2 } N ^ { 2 } } { 23 } \text { for } N \gg 1
$$
Adjacent zero intensity occurs for $\beta = \pi \rho \pm \frac { \pi } { N }$ i.e. $\delta = \pm \frac { \pi } { N }$
For phase differences much greater than $\delta , \quad \mathrm { I } = \mathrm { a } ^ { 2 } \left( \frac { \sin N \beta } { \sin \beta } \right) = a ^ { 2 }$.
(vi)
$$
\begin{aligned}
& \beta = n \pi \text { for a principle maximum } \\
& \text { i.e. } \frac { \pi } { \lambda } d \sin \theta = n \pi \quad n = 0 , \pm 1 , \pm 2 \ldots \ldots \ldots . . \\
& \text { Differentiating w.r.t, } \lambda \\
& d \cos \theta \Delta \theta = n \Delta \lambda \\
& \Delta \theta = \frac { n \Delta \lambda } { d \cos \theta }
\end{aligned}
$$
Substituting $\lambda = 589.0 \mathrm {~nm} , \lambda + \Delta \lambda = 589.6 \mathrm {~nm} . \mathrm { n } = 2$ and $d = 1.2 \times 10 ^ { - 6 } \mathrm {~m}$.
$$
\begin{aligned}
& \Delta \theta = \frac { n \Delta \lambda } { d \sqrt { 1 - \left( \frac { n \lambda } { d } \right) ^ { 2 } } } \text { as } \sin \theta = \frac { n \lambda } { d } \text { and } \cos \theta = \sqrt { 1 - \left( \frac { n \lambda } { d } \right) ^ { 2 } } \\
& \Rightarrow \Delta \theta = 5.2 \times 10 ^ { - 3 } \mathrm { rads } \text { or } 0.30 ^ { \circ }
\end{aligned}
$$
