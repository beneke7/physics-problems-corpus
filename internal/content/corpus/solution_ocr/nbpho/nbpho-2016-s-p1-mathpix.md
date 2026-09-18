---
id: solution-ocr-nbpho-2016-s-p1
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2016-fuel-consumption]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Fuel consumption If the car produces a forward force $F$ at a speed of $v$, then the work done on a path length $s$ is $W = F s$. Since the efficiency is constant, this work is proportional to the consumed fuel volume, $W = k s f$, where $f = f ( t )$ denotes the fuel consumption rate (volume per distance), and $k$ is a proportionality coefficient. Hence, $F = k f ( t )$, i.e. the fuel consumption graph can be interpreted as a force graph. The proportionality constant $k$ can be found from the fact that when the car is starting from the rest, there is no air drag (air drag is zero if speed is zero), and hence, all the driving force goes to accelerating the car, $F ( 0 \mathrm {~s} ) = m a _ { 0 }$. Keeping in mind that $f ( 0 \mathrm {~s} ) = 331 / 100 \mathrm {~km} =$ $m a _ { 0 } / k = \frac { m g } { 2 k }$, we obtain $\frac { k } { m g } = 1.52 \mathrm {~km} / \mathrm { l }$. At $v _ { 0 } = 90 \mathrm {~km} / \mathrm { h }$, there is air drag which we need to consider, but since the speed is constant, so is the force from the air drag and we can just subtract $F ( 16 \mathrm {~s} )$ to get the force without the air drag. The increased fuel consumption when going uphill at an angle $\alpha$ comes from the component of the gravitational force tangential to the road $F ( t ) - F ( 16 \mathrm {~s} ) = m g \sin ( \alpha )$. The highest point with $\sin \alpha = 0$ is reached when the fuel consumption is again equal to that at 16 s , which is at 22 s. The work done by the force pushing the car $W = \int [ F ( t ) - F ( 16 \mathrm {~s} ) ] \mathrm { d } s = \int [ F ( t ) -$ $F ( 16 \mathrm {~s} ) ] v _ { 0 } \mathrm {~d} t = \frac { k } { v _ { 0 } } \int _ { 16 \mathrm {~s} } ^ { 22 \mathrm {~s} } [ f ( t ) - f ( 16 \mathrm {~s} ) ] \mathrm { d } t$ goes to the change of the potential energy $m g h$; here the integral $I \equiv \int _ { 16 \mathrm {~s} } ^ { 22 \mathrm {~s} } [ f ( t ) - f ( 16 \mathrm {~s} ) ] \mathrm { d } t \approx$ $0.381 \mathrm {~s} / \mathrm { km }$ is found as a surface area from the graph [the area between the graph and the line $f ( t ) = f ( 16 \mathrm {~s} )$ ]. Therefore, $h = W / m g =$ $\frac { k I } { v _ { 0 } m g }$; with $\frac { k } { m g } = 1.52 \mathrm {~km} / \mathrm { l }$ we obtain $h \approx$ 14 m.

The problem was graded as follows.

- Relating consumption rate $C$ to $F - 1.5 \mathrm { p }$
- Determining the coeff. of proportionality based on $C ( 0 ) = 33 \mathrm {~L} / 100 \mathrm {~km}$ and $a ( 0 ) =$

$5 \mathrm {~m} / \mathrm { s } ^ { 2 } - 0.5 \mathrm { p }$

- Noticing that max height is at 21 s - 0.5 p
- Noticing that due to friction, only the excess consumption is related to mgh - 1 p
- Relating the excess area under the curve $( S )$ to $m g h - 1 \mathrm { p }$
- Finding $S - 0.3 \mathrm { p }$
- Finding $h$ - 0.2 p
