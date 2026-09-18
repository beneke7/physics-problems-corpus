---
id: solution-ocr-nbpho-2018-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2018-gravitational-racing]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 1. GRAVITATIONAL RACING

i) (a) Since all three bodies move along the same trajectory, they must be $\frac { T } { 3 }$ away from each other at any moment of time. Thus, it takes $\frac { T } { 3 }$ to get from $O _ { 2 }$ to $O$.
(b) From symmetry, time taken to go from $P$ to $O$ must be $\frac { T } { 4 }$. Furthermore, it takes $\frac { T } { 3 }$ to get from $P _ { 2 }$ to $P$ and from $O$ to $O _ { 3 }$. This means that it takes $\frac { T } { 3 } + \frac { T } { 3 } + \frac { T } { 4 } = \frac { 11 T } { 12 }$ to get from $P _ { 2 }$ to $O _ { 3 }$ or $T - \frac { 11 T } { 12 } = \frac { T } { 12 }$ to get from $O _ { 3 }$ to $P _ { 2 }$.
ii) Since there are no external forces at play, the centre of mass of the three body system must stay in place and, due to symmetry, be located at $O$. Thus, $\vec { r } _ { 1 } + \vec { r } _ { 2 } + \vec { r } _ { 3 } = 0$, where $\vec { r } _ { 1 } , \vec { r } _ { 2 }$ and $\vec { r } _ { 3 }$ are position vectors from $O$. Differentiating,

$$
\begin{equation*}
\vec { v } _ { 1 } + \vec { v } _ { 2 } + \vec { v } _ { 3 } = 0 . \tag{1}
\end{equation*}
$$

iii) The total angular momentum is conserved. Thus, we can find the angular momentum at a moment of time that's most convenient for us, such as the configuration when one of the bodies is at $O$. Due to symmetry, $\vec { r } _ { 2 } = - \vec { r } _ { 3 }$ and $\vec { v } _ { 2 } = \vec { v } _ { 3 }$. The total angular momentum is then

$$
\begin{aligned}
& J = m \vec { r } _ { 1 } \times \vec { v } _ { 1 } + m \vec { r } _ { 2 } \times \vec { v } _ { 2 } + m \vec { r } _ { 3 } \times \vec { v } _ { 3 } = \\
& = m \left( \vec { r } _ { 2 } \times \vec { v } _ { 2 } + \vec { r } _ { 3 } \times \vec { v } _ { 3 } \right) = m \left( \vec { r } _ { 2 } \times \vec { v } _ { 2 } - \vec { r } _ { 2 } \times \vec { v } _ { 2 } \right) = 0 .
\end{aligned}
$$

$$
\begin{equation*}
E = \frac { 3 m v _ { o } ^ { 2 } } { 4 } - \frac { 5 G m ^ { 2 } } { 2 r _ { o } } . \tag{2}
\end{equation*}
$$

Total Energy at $P$ is

$$
E = \frac { m v _ { 1 , p } ^ { 2 } } { 2 } + \frac { m v _ { 2 , p } ^ { 2 } } { 2 } + \frac { m v _ { 3 , p } ^ { 2 } } { 2 } - \frac { G m ^ { 2 } } { r _ { 12 , p } } - \frac { G m ^ { 2 } } { r _ { 23 , p } } - \frac { G m ^ { 2 } } { r _ { 31 , p } } .
$$

$2 d \sin \alpha$. Furthermore, applying equation ?? on the y -axis, $v _ { 1 , p } - v _ { 2 , p } \sin \alpha - v _ { 3 , p } \sin \alpha = 0$. Thus, $v _ { 1 , p } = v _ { p } = 2 v _ { 2 , p } \sin \alpha = 2 v _ { 3 , p } \sin \alpha$ since $v _ { 2 , p } = v _ { 3 , p }$. The total energy at $P$ is then

$$
\begin{align*}
E & = \frac { m v _ { p } ^ { 2 } } { 2 } \left( 1 + \frac { 1 } { 2 \sin ^ { 2 } \alpha } \right) - \frac { G m ^ { 2 } } { d } \left( 2 + \frac { 1 } { 2 \sin \alpha } \right) = \\
& = 6.68 \mathrm {~m} v _ { p } ^ { 2 } - 4.49 \frac { G m ^ { 2 } } { d } . \tag{3}
\end{align*}
$$

When a body is at $P$, the gravitational force is equal to the centrifugal force. This means that

$$
\begin{gather*}
\frac { m v _ { p } ^ { 2 } } { R _ { p } } = 2 \frac { G m ^ { 2 } } { d ^ { 2 } } \cos \alpha = 1.96 \frac { G m ^ { 2 } } { d ^ { 2 } } , \\
G m = 0.510 \frac { v _ { p } ^ { 2 } d ^ { 2 } } { R _ { p } } . \tag{4}
\end{gather*}
$$

Combining equations ??, ?? and ?? gives

$$
\frac { 3 v _ { o } ^ { 2 } } { 4 } = 6.68 v _ { p } ^ { 2 } + 0.510 \frac { v _ { p } ^ { 2 } d ^ { 2 } } { R _ { p } } \left( \frac { 5 } { 2 r _ { o } } - \frac { 4.49 } { d } \right) ,
$$

rearranging,

$$
\frac { v _ { o } } { v _ { p } } = \sqrt { \frac { 4 } { 3 } \left( 6.68 + 0.510 \frac { d ^ { 2 } } { R _ { p } } \left( \frac { 5 } { 2 r _ { 0 } } - \frac { 4.49 } { d } \right) \right) } = 2.8 .
$$
