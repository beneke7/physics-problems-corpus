---
id: solution-ocr-nbpho-2017-s-p7
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2017-zener]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
7. ZENER
i) The diode limits the maximum amount of voltage that can be applied to the inductor. Whenever the current from the current source is higher than the current through the inductor, the voltage $V _ { 1 }$ is applied to the inductor, and when the current current source is lower than the current through the inductor a voltage $- V _ { 2 }$ is applied to the inductor. If the largest voltage $V _ { 1 }$ would be applied to the inductor for one period $T = \frac { 2 \pi } { \omega }$, then the change in the current through the inductor is

$$
\delta I = \frac { V _ { 1 } } { L } T = \frac { 2 \pi V _ { 1 } } { L \omega } .
$$

Because we had the relation $L \omega I _ { 0 } \gg V _ { 1 }$, we get that $\delta I \ll I _ { 0 }$. The current through the inductor changes negligibly little compared to $I _ { 0 }$ during one period and can be considered constant. The equilibrium current can be found by finding when the average voltage is zero. During one period let $T _ { 1 }$ be the time when $\langle I \rangle > I _ { 0 } \cos \omega t$, and let $T _ { 2 }$ be the time when $\langle I \rangle \left\langle I _ { 0 } \cos \omega t \right.$. We get

$$
T _ { 1 } = \frac { 2 } { \omega } \arccos \left( \frac { \langle I \rangle } { I _ { 0 } } \right) .
$$

The average voltage is zero when $V _ { 1 } T _ { 1 } = V _ { 2 } T _ { 2 }$ and by using $T _ { 1 } + T _ { 2 } = T$ we have

$$
\begin{gathered}
V _ { 1 } T _ { 1 } = V _ { 2 } \left( T - T _ { 1 } \right) \Longrightarrow T _ { 1 } = \frac { V _ { 2 } } { V _ { 1 } + V _ { 2 } } T \Longrightarrow \\
\frac { 2 } { \omega } \arccos \left( \frac { \langle I \rangle } { I _ { 0 } } \right) = \frac { V _ { 2 } } { \left( V _ { 1 } + V _ { 2 } \right) } \frac { 2 \pi } { \omega } \Longrightarrow \\
\langle I \rangle = I _ { 0 } \cos \left( \frac { \pi V _ { 2 } } { V _ { 1 } + V _ { 2 } } \right) .
\end{gathered}
$$


ii) The peak-to-peak amplitude of the current fluctuations can be calculated from $\frac { d I } { d t } = \frac { U } { L }$

$$
\Delta I = \frac { V _ { 2 } T _ { 2 } } { L } = \frac { V _ { 1 } T _ { 1 } } { L } = \frac { 2 \pi V _ { 1 } V _ { 2 } } { \omega L \left( V _ { 1 } + V _ { 2 } \right) } .
$$
