---
id: solution-ocr-usapho-2003-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2003_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2003-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
A1. a. Setting the mass times centripetal acceleration equal to the gravitational force
Solving for speed

$$
\begin{gathered}
m \frac { v ^ { 2 } } { r } = G \frac { M m } { r ^ { 2 } } \\
v = \sqrt { \frac { G M } { r } } ,
\end{gathered}
$$

and multiplying by mass to get the momentum

$$
p = m v = m \sqrt { \frac { G M } { r } }
$$

b. To escape from the star the total energy must be at least zero. Writing the escape speed $v _ { e }$.

$$
\frac { 1 } { 2 } m c _ { c } ^ { 2 } - G \frac { M m } { r } - 0 .
$$

Solving for $v _ { \mathrm { c } }$, and multiplying by mass to get the needed momentum,

$$
p _ { e } = m v _ { e } = m \sqrt { \frac { 2 G M } { r } } = \sqrt { 2 } p .
$$

This is greater than p above, so the impulse must be in the direction of $\vec { p }$.

$$
\vec { I } _ { e } = \vec { p } _ { 1 } - \vec { p } = ( \sqrt { 2 } - 1 ) \vec { p }
$$

c. Since angular momentum $L = m v r$ must be conserved, the only way to crash into a star with $R = 0$ is with $L = 0$. The satellite's momentum $m v _ { C 0 }$ must be slowed to zero.

$$
\vec { l } _ { C 0 } = m \vec { v } _ { C 0 } - \dot { p } = 0 - \vec { p } = - \vec { p } .
$$

d. Letting $v _ { 1 }$ be the new speed at orbital radius $r$ and $v _ { \mathrm { R } }$ be the speed at stellar radius $R$, angular momentum conservation yields

$$
m v _ { r } r = m v _ { n } R .
$$

Solving for $\mathrm { v } _ { \mathrm { R } }$

$$
\begin{equation*}
v _ { R } = v , \frac { r } { R } . \tag{Al•I}
\end{equation*}
$$

Mechanical energy is also conserved.

$$
\frac { 1 } { 2 } m v _ { 1 } ^ { 2 } - G \frac { M m } { r } = \frac { 1 } { 2 } m v _ { R } ^ { 2 } - G \frac { M m } { R }
$$

Regrouping terms and canceling $m$,

$$
G \frac { M } { R } - G \frac { M } { r } = \frac { 1 } { 2 } v _ { R } { } ^ { 2 } - \frac { 1 } { 2 } v _ { r } { } ^ { 2 }
$$


Substituting (A1-1)

$$
\begin{aligned}
& 2 G M \left( \frac { 1 } { R } - \frac { 1 } { r } \right) = v _ { 1 } ^ { 2 } \left( \frac { r } { R } \right) ^ { 2 } - v _ { 2 } ^ { 2 } \\
& \frac { 2 G M } { r R } ( r - R ) = \frac { v _ { 2 } ^ { 2 } } { R ^ { 2 } } \left( r ^ { 2 } - R ^ { 2 } \right)
\end{aligned}
$$

Multiplying by $R$ and dividing by ( $r - R$ )

$$
\frac { 2 G M } { r } = \frac { v _ { r } ^ { 2 } } { R } ( r + R )
$$

Solving for $v _ { \mathrm { r } }$ and multiplying by mass to get $p _ { \mathrm { r } }$.

$$
p _ { r } = m v _ { r } = m \sqrt { \frac { 2 G M R } { r ( r + R ) } } - m \sqrt { \frac { G M } { r } } \sqrt { \frac { 2 } { 1 - \frac { r } { R } } } = p \sqrt { \frac { 2 } { 1 + \frac { r } { R } } }
$$

This is less than the original orbital momentum. Fioding the impulse,

$$
\vec { I } _ { C S } = \vec { p } _ { r } - \vec { p } = \vec { p } _ { \sqrt { } } \sqrt { \frac { 2 } { 1 + r / R } } - \vec { p } = - \vec { p } \left( 1 - \sqrt { \frac { 2 } { 1 + r / R } } \right)
$$
