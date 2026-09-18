---
id: solution-ocr-usapho-1999-s-a2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/1999_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-1999-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
A2. Assume a charge of $Q _ { z }$ at $\mathrm { x } = d$ along the x -axis. The total potential a distance c from the origin is

$$
\begin{equation*}
V = k \frac { Q _ { 2 } } { R _ { 2 } } + k \frac { q } { R _ { 1 } } \tag{1}
\end{equation*}
$$

where k is Coulomb's constant and $R _ { I }$ and $R _ { 2 }$ can be found using the law of cosines.

$$
R _ { 1 } = \sqrt { b ^ { 2 } - 2 b c \cos \theta + c ^ { 2 } }
$$

and
![](../../../figures/solution-ocr/cab75c3706813080cb60d7b7.jpg)

$$
R _ { 2 } = \sqrt { d ^ { 2 } - 2 d c \cos \theta + c ^ { 2 } } .
$$

Since $\mathrm { V } = 0$,

$$
0 = k \frac { Q _ { 2 } } { R _ { 2 } } + k \frac { q } { R _ { 1 } }
$$


Therefore

$$
\frac { Q _ { 2 } } { R _ { 2 } } = - \frac { q } { R _ { 1 } } .
$$

This must be true for all points a distance c from the origin. In particular at $\theta = 0$ or $\mathrm { x } = + \mathrm { c }$ we have

$$
\begin{equation*}
\frac { Q _ { 2 } } { ( c - d ) } = - \frac { q } { ( b - c ) } . \tag{2}
\end{equation*}
$$

At $\theta = 180 ^ { \circ } = \pi$ or $\mathrm { x } = - \mathrm { c }$ we have

$$
\begin{equation*}
\frac { Q _ { 2 } } { ( c + d ) } = - \frac { q } { ( b + c ) } \tag{3}
\end{equation*}
$$

Solving equations (2) and (3) simultaneously for $Q _ { 2 }$ and $d$, we have

$$
Q _ { 2 } = - \frac { c } { b } q \quad \text { at } \quad d = \frac { c ^ { 2 } } { b } .
$$

Substituting $d$ into $R _ { 2 }$, we have

$$
R _ { 2 } = a ^ { \prime } \left( c ^ { 2 } / b \right) ^ { 2 } - 2 \left( c ^ { 2 } / b \right) c \cos \theta + c ^ { 2 } = ( c / b ) \sqrt { c ^ { 2 } - 2 b c \cos \theta + b ^ { 2 } } = ( c / b ) R _ { 1 } .
$$

for any angle $\theta$, i.e. any point a distance $c$ from the origin. Substituting $Q _ { 2 }$ and $R _ { 2 }$ into (1),

$$
V = k \frac { ( - c / b ) q } { ( c / b ) R _ { 1 } } + k \frac { q } { R _ { 1 } } = 0
$$
