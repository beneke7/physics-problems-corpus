---
id: solution-ocr-nbpho-2016-s-p7
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2016-helium]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
7. Helium The heat required for vaporization comes from the heat energy of the liquid: $\lambda \mathrm { d } m = m c ( T ) \mathrm { d } T$. By separating the variables $m$ and $T$ and integrating, we get:

$$
\begin{aligned}
\lambda \int _ { m _ { 0 } } ^ { m } \frac { \mathrm {~d} m ^ { \prime } } { m ^ { \prime } } & = \int _ { T _ { 0 } } ^ { T } c \mathrm {~d} T ^ { \prime } \\
\lambda \ln \frac { m } { m _ { 0 } } & = \int _ { T _ { 0 } } ^ { T } c \mathrm {~d} T ^ { \prime } \\
\frac { m } { m _ { 0 } } & = \exp \frac { \int _ { T _ { 0 } } ^ { T } c \mathrm {~d} T ^ { \prime } } { \lambda }
\end{aligned}
$$

By numerically approximating the integral from the given graph, we get $\int _ { T _ { 0 } } ^ { T } c \mathrm {~d} T ^ { \prime } \approx$ $- 5.2 \mathrm {~kJ} \mathrm {~kg} ^ { - 1 }$. Thus the fraction of liquid that was vaporized is

$$
\begin{equation*}
\frac { m _ { 0 } - m } { m _ { 0 } } = 1 - \frac { m } { m _ { 0 } } \approx 1 - \exp \frac { - 5.2 \mathrm {~kJ} \mathrm {~kg} ^ { - 1 } } { 22 \mathrm {~kJ} \mathrm {~kg} ^ { - 1 } } \approx \tag{0.21.}
\end{equation*}
$$
