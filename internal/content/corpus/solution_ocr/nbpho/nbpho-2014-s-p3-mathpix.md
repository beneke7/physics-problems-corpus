---
id: solution-ocr-nbpho-2014-s-p3
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2014-magnets]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 3. Magnets

There three forces acting on the hanging magnet: the downwards directed gravity force $m \vec { g }$, the tension force $\vec { T }$, which is directed along the thread, and the horizontal magnetic force $\vec { F } _ { \mathrm { m } }$. Since the thread's angle is very small, the modulus of $\vec { T }$ is almost equal to $m g$, so that its horizontal projection is expressed as $- ( x / l ) m g$, where $l$ is the length of the thread and $x = 1 \mathrm {~cm}$ (the displacement from the initial position). The net horizontal force $F = F _ { \mathrm { m } } - ( x / l ) m g$. At the equilibrium point $F = 0$. The equilibrium point is stable if a small (virtual) displacement $\Delta x$ gives rise to a returning force

$$
\Delta F = \Delta F _ { \mathrm { m } } - \frac { \Delta x } { l } m g
$$

which needs to push towards the equilibrium point. Let $F _ { \mathrm { m } } = k d ^ { - n }$, where $k$ is an unknown proportionality coefficient. Then

$$
\Delta F _ { \mathrm { m } } = F _ { \mathrm { m } } ^ { \prime } ( d ) \Delta d = \frac { k n } { d ^ { n + 1 } } \Delta x ,
$$

because $\Delta d = - \Delta x$. Therefore

$$
\Delta F = \left( \frac { k n } { d ^ { n + 1 } } - \frac { m g } { l } \right) \Delta x .
$$

At the limit case of the loss of stability (which is described by this problem) $\Delta F = 0$. Thus we have two equations with two unknowns ( $n$ and $k$ ):

$$
\frac { k } { d ^ { n } } - \frac { x m g } { l } = 0 , \quad \frac { k n } { d ^ { n + 1 } } - \frac { m g } { l } = 0 ;
$$

this can be rewritten as

$$
\frac { k } { d ^ { n } } = \frac { x m g } { l } , \quad \frac { k n } { d ^ { n + 1 } } = \frac { m g } { l } .
$$

If we divide the corresponding sides of the two equations we obtain $d / n = x$, hence

$$
n = d / x = 4 .
$$
