---
id: solution-ocr-nbpho-2021-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2021-gas-flows]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Gas and fluid flows (10 points) - Solution by Taavet Kalda, grading schemes by Joonas Kalda, Mihkel Kree, Andres Põldaru, Oleg Košik.
i) (1 point) As the plate falls, it will rotate around the bump without slipping and push the air out from beneath it, at ever faster speeds, the closer it gets to the bottom plate. As such, part of the rotational energy of the plate is transferred over to the escaping air molecules. Further, the pressure and temperature of the gas is uniform, because of the incompressibility condition.

Since the problem is 2-dimensional, the mass, volumes, moment of inertia and other quantities are per unit length of the system (on the figure, into the page). Let $x$ mark the distance from the bump and $v$ denote the horizontal speed of air at $x$. There is a volume of air equal to $V ( x ) = x h x / ( 2 L )$ between $x = 0$ and $\boldsymbol { x }$. As the plate falls down, $\boldsymbol { V } ( \boldsymbol { x } )$ gets smaller and as a result, air is pushed out. Consider a small time interval $\mathrm { d } t$. In that time interval, $h$ changes by $\dot { h } \mathrm {~d} t = - \omega L \mathrm {~d} t$. From the conservation of air particles, $0 = \mathrm { d } V ( x ) + v ( x ) h x / L$ with $\mathrm { d } V ( x ) = - x ^ { 2 } \omega / 2$. Hence,

$$
v ( x ) = \frac { x L \omega } { 2 h } .
$$

Evaluated at $x = L$, this yields $v ( x = L ) = \frac { L ^ { 2 } \omega } { 2 h }$.
