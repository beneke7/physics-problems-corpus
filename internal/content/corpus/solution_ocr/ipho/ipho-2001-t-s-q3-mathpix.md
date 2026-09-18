---
id: solution-ocr-ipho-2001-t-s-q3
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2001_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2001-t-q3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Part 3a

![](../../../figures/solution-ocr/02b0fd8129edb43d87b98245.jpg)
The net force on a charged particle must be zero in the steady state

$$
\begin{align*}
& \vec { F } = 0 = q \vec { E } + q \vec { v } x \vec { B } \\
& \vec { E } = - \vec { v } x \vec { B } = v B \hat { y }  \tag{0.4pts}\\
& V _ { H } = v B w \\
& I = \frac { V _ { H } } { R } = \frac { V _ { H } } { \frac { \rho w } { L h } } = \frac { v B w L h } { \rho w } = \frac { v B L h } { \rho } , \text { direction: } - \hat { y }  \tag{0.6pts}\\
& \vec { F } = I \vec { l } x \vec { B } = \frac { v B ^ { 2 } L h w } { \rho } , \text { direction: } ( - \hat { y } x \hat { z } = - \hat { x } ) \tag{0.8pts}
\end{align*}
$$

Force is in the -x direction
This creates a back pressure $\mathrm { P } _ { \mathrm { b } }$

$$
\begin{align*}
& P _ { b } = \frac { v B ^ { 2 } L h w } { \rho h w } = \frac { v B ^ { 2 } L } { \rho }  \tag{0.6pts}\\
& \mathrm {~F} _ { \text {net } } = \left( \mathrm { P } - \mathrm { P } _ { \mathrm { b } } \right) \mathrm { hw } ,  \tag{0.6pts}\\
& \mathrm { v } = \alpha \mathrm { F } _ { \text {net } } ( 0.4 \mathrm { pts } ) \\
& \mathrm { v } = \alpha \left( \mathrm { P } - \mathrm { P } _ { \mathrm { b } } \right) \mathrm { hw } = \alpha \left( P - \frac { v B ^ { 2 } L } { \rho } \right) \frac { v _ { 0 } } { \alpha P } = v _ { 0 } - \frac { v v _ { 0 } B ^ { 2 } L } { P \rho } \\
& v \left( 1 + \frac { v _ { 0 } B ^ { 2 } L } { P \rho } \right) = v _ { 0 } \\
& v = v _ { 0 } \left( 1 + \frac { v _ { 0 } B ^ { 2 } L } { P \rho } \right) ^ { - 1 } \\
& v = v _ { 0 } \frac { P \rho } { P \rho + v _ { 0 } B ^ { 2 } L } \tag{0.6pts}
\end{align*}
$$


## Part 3b

From conservation of energy:

$$
\Delta \text { Power } = V _ { H } I = \frac { v _ { 0 } ^ { 2 } B ^ { 2 } w h L } { \rho }
$$

or, to recover $\mathrm { v } _ { 0 }$ the pump must supply an additional pressure $\Delta \mathrm { P } = \mathrm { P } _ { \mathrm { b } }$ $\Delta$ Power $= \Delta P h w v _ { 0 } = P _ { b } h w v _ { 0 } = \frac { v _ { 0 } ^ { 2 } B ^ { 2 } w h L } { \rho }$

## Part 3c

1. $$
\begin{equation*}
u = \frac { c } { n } \quad u ^ { \prime } = \frac { \frac { c } { n } + v } { 1 + \frac { c } { n } \frac { v } { c ^ { 2 } } } = \frac { \frac { c } { n } + v } { 1 + \frac { v } { c n } } \tag{0.5pts}
\end{equation*}
$$
For small $\mathrm { v } ( \mathrm { v } \ll \mathrm { c } )$;
neglect the terms containing $\frac { v ^ { 2 } } { c ^ { 2 } }$ in the expansion of $\left( 1 + \frac { v } { c n } \right) ^ { - 1 }$
$$
\begin{align*}
& u ^ { \prime } = \left( \frac { c } { n } + v \right) \frac { 1 } { 1 + \frac { v } { c n } } \approx \left( \frac { c } { n } + v \right) \left( 1 - \frac { v } { c n } \right) \approx \frac { c } { n } + v \left( 1 - \frac { 1 } { n ^ { 2 } } \right) \\
& \Delta u = u ^ { \prime } - u \approx v \left( 1 - \frac { 1 } { n ^ { 2 } } \right)  \tag{0.5pts}\\
& \Delta \phi = 2 \pi f \Delta T , T = \frac { L } { u } , \Delta \mathrm {~T} = \frac { \Delta \mathrm { u } } { \mathrm { u } ^ { 2 } } L \approx \frac { L v } { c ^ { 2 } } \left( n ^ { 2 } - 1 \right)  \tag{0.5pts}\\
& v = v _ { 0 } \text { so that, } \Delta \phi = 2 \pi f \frac { L } { c ^ { 2 } } \left( n ^ { 2 } - 1 \right) v _ { 0 } \tag{0.5pts}
\end{align*}
$$
2. $\Delta \phi = 2 \pi f \frac { L } { c ^ { 2 } } \left( n ^ { 2 } - 1 \right) v _ { 0 }$
a phase of $\pi / 36$ results in (0.4 pts)
$$
\begin{align*}
& v _ { 0 } = \frac { c ^ { 2 } } { 72 L \left( n ^ { 2 } - 1 \right) f }  \tag{0.2pts}\\
& v _ { 0 } = \frac { 9 \times 10 ^ { 16 } } { 72 \times 10 ^ { - 1 } x ( 2.56 - 1 ) \times 25 } = 3.2 \times 10 ^ { 14 } \mathrm {~m} / \mathrm { s } \text { which is not physical. } \tag{0.4pts}
\end{align*}
$$

3. For $\mathrm { v } = 20 \mathrm {~m} / \mathrm { s } , \mathrm { f } \approx 4 \times 10 ^ { 14 } \mathrm {~Hz}$. But for this value of f, skin depth is about 25 nm. This means that amplitude of the signal reaching the end of the tube is practically zero. Therefore mercury should be replaced with water.
(0.6 pts)
On the other hand if water is used instead of mercury, at $25 \mathrm {~Hz} \delta \approx 3 \times 10 ^ { 5 }$ m . Signal reaches to the end but $\mathrm { v } \approx 6 \times 10 ^ { 14 } \mathrm {~m} / \mathrm { s }$, is still nonphysical. Therefore frequency should be readjusted.
(0.6 pts)
For $\mathrm { v } = 20 \mathrm {~m} / \mathrm { s }$ electromagnetic wave of $\mathrm { f } \approx 8 \times 10 ^ { 14 } \mathrm {~Hz}$ has a skin depth of about $\delta \approx 5.6 \mathrm {~cm}$ in water and the emerging wave is out of phase by $\pi / 36$ with respect to the incident wave. (The amplitude of the wave reaching to the end of the section is about 17\% of the incident amplitude).
(0.6 pts)
Therefore mercury should be replaced with water and frequency should be adjusted to $\mathrm { f } \approx 8 \times 10 ^ { 14 } \mathrm {~Hz}$. The correct choice is (iii)
(0.2 pts)
