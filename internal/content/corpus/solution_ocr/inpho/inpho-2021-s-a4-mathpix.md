---
id: solution-ocr-inpho-2021-s-a4
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2021-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
4. [12 marks] Three thin convex lenses $\mathrm { L } _ { 1 } , \mathrm {~L} _ { 2 }$, and $\mathrm { L } _ { 3 }$ with focal lengths $f _ { 1 } , f _ { 2 }$, and $f _ { 3 }$, respectively, are arranged in order ( $\mathrm { L } _ { 1 }$ followed by $\mathrm { L } _ { 2 }$, followed by $\mathrm { L } _ { 3 }$ from left to right) with their principal axes coincident. The distance $d _ { 12 }$ between $\mathrm { L } _ { 1 }$ and $\mathrm { L } _ { 2 }$, and the distance $d _ { 23 }$ between $\mathrm { L } _ { 2 }$ and $\mathrm { L } _ { 3 }$ are such that $d _ { 12 } + d _ { 23 } \geq f _ { 1 } + 4 f _ { 2 } + f _ { 3 }$. If a parallel beam of light incident on $\mathrm { L } _ { 1 }$ at a small angle to the principal axis remains parallel to itself when leaving the system after passing through $\mathrm { L } _ { 2 }$ and $\mathrm { L } _ { 3 }$, draw the appropriate ray diagram and determine $d _ { 12 }$ and $d _ { 23 }$ in terms of $f _ { 1 } , f _ { 2 }$, and $f _ { 3 }$.

Solution:
An incoming parallel beam falling on the thin lens $\mathrm { L } _ { 1 }$ will converge to a certain point A on the focal plane of $\mathrm { L } _ { 1 }$. The point A serves as the point source for $\mathrm { L } _ { 2 }$ whose image is formed on the other side of $\mathrm { L } _ { 2 }$ at a certain point B. The line AB must intersect the principal axis at the pole $\mathrm { O } _ { 2 }$ of $\mathrm { L } _ { 2 }$. For a parallel beam to emerge from $\mathrm { L } _ { 3 }$, B must lie in the focal plane of $\mathrm { L } _ { 3 }$. The necessary ray diagram is drawn below.
![](../../../figures/solution-ocr/4fa77e85bf606a339c915cc5.jpg)
Since $\alpha \approx 0$, we make the approximations

$$
\begin{aligned}
& \mathrm { AA } _ { 1 } = f _ { 1 } \tan \alpha \approx f _ { 1 } \alpha \\
& \mathrm { BB } _ { 1 } = f _ { 2 } \tan \alpha \approx f _ { 2 } \alpha
\end{aligned}
$$

From magnification formula for lens $\mathrm { L } _ { 2 }$,

$$
\begin{aligned}
\frac { \mathrm { BB } _ { 1 } } { \mathrm { AA } _ { 1 } } & = \frac { f _ { 3 } \alpha } { f _ { 1 } \alpha } = \frac { v _ { 2 } } { - u _ { 2 } } = \frac { d _ { 23 } - f _ { 3 } } { d _ { 12 } - f _ { 1 } } \\
\Longrightarrow & \frac { d _ { 12 } } { f _ { 1 } } = \frac { d _ { 23 } } { f _ { 3 } } = k ( \text { say } ) \\
\Longrightarrow d _ { 12 } & = k f _ { 1 } \quad \text { and } \quad d _ { 23 } = k f _ { 3 }
\end{aligned}
$$


From the lens equation for lens $\mathrm { L } _ { 2 }$,

$$
\begin{aligned}
\frac { 1 } { v _ { 2 } } - \frac { 1 } { u _ { 2 } } & = \frac { 1 } { f _ { 2 } } \\
\frac { 1 } { \left( d _ { 23 } - f _ { 3 } \right) } - \frac { 1 } { - \left( d _ { 12 } - f _ { 1 } \right) } & = \frac { 1 } { f _ { 2 } } \\
\frac { 1 } { f _ { 3 } ( k - 1 ) } + \frac { 1 } { f _ { 1 } ( k - 1 ) } & = \frac { 1 } { f _ { 2 } } \\
\Longrightarrow \quad k = 1 + \frac { f _ { 2 } } { f _ { 1 } } + \frac { f _ { 2 } } { f _ { 3 } } &
\end{aligned}
$$

Then,

$$
\begin{aligned}
& d _ { 12 } = f _ { 1 } + f _ { 2 } + \frac { f _ { 1 } f _ { 2 } } { f _ { 3 } } \\
& d _ { 23 } = f _ { 2 } + f _ { 3 } + \frac { f _ { 2 } f _ { 3 } } { f _ { 1 } }
\end{aligned}
$$
