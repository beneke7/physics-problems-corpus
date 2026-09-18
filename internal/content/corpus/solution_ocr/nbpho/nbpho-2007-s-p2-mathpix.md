---
id: solution-ocr-nbpho-2007-s-p2
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2007_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2007-pendulum]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 2. Pendulum (7 pts)

1) The smallness of the oscillations means that the angle of the arc formed by the rod is small, $\alpha = l / R \ll 1$. Therefore, the force returning the ball is almost horizontal, $F = k / R = k \alpha / l$, and the horizontal displacement of the ball is $x = R ( 1 - \cos \alpha ) \approx R \alpha ^ { 2 } / 2 = l \alpha / 2$, hence $\alpha = 2 x / l$.

For horizontal equation of motion, we can neglect the gravity force, which is of the order of $m g \alpha \ll \alpha k / l$; the right-hand side here happens to be the elastic force. So, $m \ddot { x } = - k \alpha / l = - 2 k x / l ^ { 2 }$, hence $\omega = \sqrt { 2 k / m } / l$; the period $T = 2 \pi / \omega = \pi l \sqrt { 2 m / k }$.
2) Elastic energy of the rod depends apparently only on its shape, i.e. on the curvature radius $R$, or, equivalently, on the binding angle $\alpha$. First, we derive the expression for that energy: $\Pi _ { r } = \int _ { 0 } ^ { x } F d x =$ $\int \left( 2 k x / l ^ { 2 } \right) d x = k x ^ { 2 } / l ^ { 2 } = k \alpha ^ { 2 } / 4$. This is to be compared with the change of the gravitational potential energy $\Pi _ { g } = - m g ( l - R \sin \alpha ) =$ $- m g l ( 1 - \sin \alpha / \alpha ) \approx - m g l \alpha ^ { 2 } / 6$. So, the vertical position is stable, if $k \alpha ^ { 2 } / 4 - m g l \alpha ^ { 2 } / 6 > 0$, i.e. $3 k > 2 m g l$.

Remark: a simple-minded force balance of the ball to the direction, perpendicular to the rod leads to another result $k > m g l$. This is not correct, because if we bind the rod with a force applied to its tip, small displacements of the tip are not perpendicular to the rod (as one might think). In particular, this means that if there are both perpendicular force $F$ and tangential tension $T$ in the rod, the curvature radius $R$ will depend also on the tension $T$. In our solution, we avoided such kind of complications by noting that the elastic energy depends only on the shape of the rod (if we bind the rod with some force $F$ while keeping $T = 0$, we don't need to bother about this effect).
