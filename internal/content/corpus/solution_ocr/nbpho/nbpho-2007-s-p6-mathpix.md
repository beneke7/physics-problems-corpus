---
id: solution-ocr-nbpho-2007-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2007_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2007-truck]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 6. Truck (7 pts)

1) First, since $l$ is small, $T _ { 1 } \approx T$. From the radial force balance, $N \approx$ $T \alpha = T l / R$, where $\alpha$ is the angle, by which the direction of the rope is changed. From the tangential balance, $T _ { 1 } = T - \mu N = T ( 1 - \mu \alpha )$.
2) If the angle is not small, we divide the touching segment into $M$ small segments and use the previous result: $T _ { i + 1 } = T _ { i } ( 1 - \mu \alpha / M )$. So, $T _ { M } = T ( 1 - \mu \alpha / M ) ^ { M } \rightarrow T e ^ { - \mu \alpha }$ (as $M \rightarrow \infty$ ). So, $T ^ { \prime } = T e ^ { - \mu l / R }$.
3) Using the previous formula and the provided numerical values ( $\alpha =$ $2 \pi$ ), we obtain

$$
T = M g \sin \phi e ^ { - \mu \alpha } \approx 800 \mathrm {~N} .
$$

4) If we re-examine the solution to the second question, we notice that we haven't used the assumption of cylindrical shape. What matters, is just the rotation angle of the tangent to the rope. So, the answer does not change for egg-like cross-section.
