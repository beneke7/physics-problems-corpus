---
id: solution-ocr-nbpho-2011-s-p3
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2011-charged-cylinder]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Charged cylinder (8 points)
i) Moving surface charge creates a solenoidal surface current with the surface density $j = \sigma v = \sigma \omega r$. From the circulation theorem for a rectangular loop embracing a segment of surface current we obtain $\frac { B l } { \mu _ { 0 } } = j l$, where $l$ is the length of the surface current segment (so that $j l$ gives the current flowing through the loop). Hence, $B = \mu _ { 0 } j = \mu _ { 0 } \sigma \omega r$.
ii) Using formula $\mathcal { E } = \frac { d \Phi } { d t } = B \frac { d S } { d t }$, where $S$ is the area covered by the wire, we obtain $\mathcal { E } = B \omega r ^ { 2 } / 2$. Indeed, during a small time interval $d t$, the wire covers a equilateral triangle of side lengths $r$, $r$, and $r \omega d t$; its area is apparently $r ^ { 2 } \omega d t / 2$. By using the earlier obtained expression for $B$ we end up with

$$
\mathcal { E } = \mu _ { 0 } \sigma \omega ^ { 2 } r ^ { 3 } / 2 .
$$

iii) We need to show that from the previous task, $\frac { d S } { d t }$ is independent of the wire shape. First we note that due to rotational symmetry, $\frac { d S } { d t }$, it cannot depend on the rotation angle, i.e. $\frac { d S } { d t } \equiv \dot { S } =$ Const. Further we note that regardless of the wire shape, during the entire rotation period $2 \pi / \omega$, the whole circle area is covered; $\dot { S } \cdot 2 \pi / \omega = \pi r ^ { 2 } \Rightarrow \dot { S } = r ^ { 2 } \omega / 2$.
