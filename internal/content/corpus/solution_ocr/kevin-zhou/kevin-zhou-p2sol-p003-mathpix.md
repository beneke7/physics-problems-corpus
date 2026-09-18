---
id: solution-ocr-kevin-zhou-p2sol-p003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 3. The purpose of subtracting $\langle X \rangle ^ { 2 }$ in the variance is to make sure it doesn't change when a constant is added to $x$, since shifting something left or right on the number line shouldn't change its spread. Verify that for any constant $c$, $\operatorname { var } X = \operatorname { var } ( X + c )$.

Solution. We have

$$
\operatorname { var } ( X + c ) = \left\langle ( X + c ) ^ { 2 } \right\rangle - \langle X + c \rangle ^ { 2 } .
$$

By the definition of the expectation value, we have

$$
\langle A + B \rangle = \langle A \rangle + \langle B \rangle , \quad \langle c A \rangle = c \langle A \rangle
$$

for any quantities $A$ and $B$ and any constant $c$. Thus,

$$
\operatorname { var } ( X + c ) = \left\langle X ^ { 2 } \right\rangle + \langle 2 X c \rangle + \left\langle c ^ { 2 } \right\rangle - \langle X \rangle ^ { 2 } - 2 \langle X \rangle \langle c \rangle - \langle c \rangle ^ { 2 } = \operatorname { var } X
$$

as desired.
