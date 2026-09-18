---
id: solution-ocr-ipho-2006-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2006/T1_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [ipho-2006-t1]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## SOLUTIONS to Theory Question 1

Geometry Each side of the diamond has length $L = \frac { a } { \cos \theta }$ and the distance between parallel sides is $D = \frac { a } { \cos \theta } \sin ( 2 \theta ) = 2 a \sin \theta$. The area is the product thereof, $A = L D$, giving
1.1

$$
A = 2 a ^ { 2 } \tan \theta .
$$

The height $H$ by which a tilt of $\phi$ lifts out1 above in is $H = D \sin \phi$ or
1.2

$$
H = 2 a \sin \theta \sin \phi .
$$

Optical path length Only the two parallel lines for in and out1 matter, each having length $L$. With the de Broglie wavelength $\lambda _ { 0 }$ on the in side and $\lambda _ { 1 }$ on the out1 side, we have

$$
\Delta N _ { \mathrm { opt } } = \frac { L } { \lambda _ { 0 } } - \frac { L } { \lambda _ { 1 } } = \frac { a } { \lambda _ { 0 } \cos \theta } \left( 1 - \frac { \lambda _ { 0 } } { \lambda _ { 1 } } \right) .
$$

The momentum is $h / \lambda _ { 0 }$ or $h / \lambda _ { 1 }$, respectively, and the statement of energy conservation reads

$$
\frac { 1 } { 2 M } \left( \frac { h } { \lambda _ { 0 } } \right) ^ { 2 } = \frac { 1 } { 2 M } \left( \frac { h } { \lambda _ { 1 } } \right) ^ { 2 } + M g H ,
$$

which implies

$$
\frac { \lambda _ { 0 } } { \lambda _ { 1 } } = \sqrt { 1 - 2 \frac { g M ^ { 2 } } { h ^ { 2 } } \lambda _ { 0 } ^ { 2 } H } .
$$

Upon recognizing that $\left( g M ^ { 2 } / h ^ { 2 } \right) \lambda _ { 0 } ^ { 2 } H$ is of the order of $10 ^ { - 7 }$, this simplifies to

$$
\frac { \lambda _ { 0 } } { \lambda _ { 1 } } = 1 - \frac { g M ^ { 2 } } { h ^ { 2 } } \lambda _ { 0 } ^ { 2 } H ,
$$

and we get

$$
\Delta N _ { \mathrm { opt } } = \frac { a } { \lambda _ { 0 } \cos \theta } \frac { g M ^ { 2 } } { h ^ { 2 } } \lambda _ { 0 } ^ { 2 } H
$$

or


1.3 $$
\Delta N _ { \mathrm { opt } } = 2 \frac { g M ^ { 2 } } { h ^ { 2 } } a ^ { 2 } \lambda _ { 0 } \tan \theta \sin \phi .
$$

A more compact way of writing this is

1.4 $$
\Delta N _ { \mathrm { opt } } = \frac { \lambda _ { 0 } A } { V } \sin \phi ,
$$

where

1.4 $$
V = 0.1597 \times 10 ^ { - 13 } \mathrm {~m} ^ { 3 } = 0.1597 \mathrm {~nm} \mathrm {~cm} ^ { 2 }
$$

is the numerical value for the volume parameter $V$.
There is constructive interference (high intensity in out1) when the optical path lengths of the two paths differ by an integer, $\Delta N _ { \text {opt } } = 0 , \pm 1 , \pm 2 , \ldots$, and we have destructive interference (low intensity in out1) when they differ by an integer plus half, $\Delta N _ { \text {opt } } = \pm \frac { 1 } { 2 } , \pm \frac { 3 } { 2 } , \pm \frac { 5 } { 2 } , \ldots$. Changing $\phi$ from $\phi = - 90 ^ { \circ }$ to $\phi = 90 ^ { \circ }$ gives

$$
\left. \Delta N _ { \text {opt } } \right| _ { \phi = - 90 ^ { \circ } } ^ { \phi = 90 ^ { \circ } } = \frac { 2 \lambda _ { 0 } A } { V } ,
$$

which tell us that

1.5 $$
\sharp \text { of cycles } = \frac { 2 \lambda _ { 0 } A } { V } .
$$

Experimental data For $a = 3.6 \mathrm {~cm}$ and $\theta = 22.1 ^ { \circ }$ we have $A = 10.53 \mathrm {~cm} ^ { 2 }$, so that

1.6 $$
\lambda _ { 0 } = \frac { 19 \times 0.1597 } { 2 \times 10.53 } \mathrm {~nm} = 0.1441 \mathrm {~nm} .
$$

And 30 full cycles for $\lambda _ { 0 } = 0.2 \mathrm {~nm}$ correspond to an area

1.7 $$
A = \frac { 30 \times 0.1597 } { 2 \times 0.2 } \mathrm {~cm} ^ { 2 } = 11.98 \mathrm {~cm} ^ { 2 } .
$$
