---
id: solution-ocr-inpho-2025-s-a1
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2025-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 1. The Flywheel Chronicles

In the following experiment we are interested in determining the moment of inertia of a flywheel. The free ends of the axle in a flywheel assembly are placed inside grooves at both ends, to rigid supports provided on the wall (see diagram below). The diameter of the axle is $d = 2.72 \mathrm {~cm}$. The total work done by the axle in overcoming the friction in the two grooves per rotation is $W$. A massless string, attached to a point mass $m$ is wound tightly in $n$ turns (without overlap) on the axle. The string unwinds from the axle without slipping as the mass descends from an initial height $h$. The length of the string is adjusted such that when the mass just touches the floor, the string detaches from the axle.
![](../../../figures/solution-ocr/7ab21cf0febf7b1474d3ecac.jpg)
From the instant when the mass touches the floor (taken as $t = 0$ ), the flywheel continues to rotate, adding another $N$ number of rotations before coming to rest in time $t = T$. The figure is not to scale.

(a) [5 marks] Derive an expression for the moment of inertia $I$ of the flywheel in terms of $m , N , T$, and other known parameters.

Solution: Using conservation of energy

$$
\begin{equation*}
m g h = n W + \frac { 1 } { 2 } m v ^ { 2 } + \frac { 1 } { 2 } I \omega ^ { 2 } \tag{1.1}
\end{equation*}
$$

Also,

$$
\begin{array} { r }
N W = \frac { 1 } { 2 } I \omega ^ { 2 } \\
W = \frac { I \omega ^ { 2 } } { 2 N } \tag{1.3}
\end{array}
$$

Substituting Eq.(1.3) in Eq.(1.1), we get

$$
\begin{equation*}
m g h = n \cdot \frac { 1 } { 2 N } I \omega ^ { 2 } + \frac { 1 } { 2 } m v ^ { 2 } + \frac { 1 } { 2 } I \omega ^ { 2 } \tag{1.4}
\end{equation*}
$$

Simplifying above equation we get,

$$
\begin{equation*}
I = \frac { 2 m g h } { \omega ^ { 2 } \left( 1 + \frac { n } { N } \right) } - \frac { m d ^ { 2 } } { 4 \left( 1 + \frac { n } { N } \right) } \tag{1.5}
\end{equation*}
$$

where $\omega = \frac { 4 \pi N } { T }$
Final answers written in the form of $W$ are also accepted.


(b)[3 marks] The following data has been obtained in this experiment.

| $m$ (gm) | $N$ | $T$ (sec) |
| :--- | :--- | :--- |
| 150.0 | 145.25 | 190.0 |
| 200.0 | 200.00 | 225.5 |
| 250.0 | 238.50 | 235.5 |

Calculate the value of $I$ for $n = 16$, and $h = 139 \mathrm {~cm}$.
Solution: From the given data, we can calculate the respective value of the moment of inertia $I _ { 1 } , I _ { 2 } , I _ { 3 }$ are $3.99 \times 10 ^ { 5 } \mathrm { gm } - \mathrm { cm } ^ { 2 } , 4.06 \times 10 ^ { 5 } \mathrm { gm } - \mathrm { cm } ^ { 2 } , 3.94 \times 10 ^ { 5 } \mathrm { gm } - \mathrm { cm } ^ { 2 }$. The mean value of the moment of inertia is $4.00 \times 10 ^ { 5 } \mathrm { gm } - \mathrm { cm } ^ { 2 }$.
