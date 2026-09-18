---
id: solution-ocr-nbpho-2005-s-p9
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2005-mechanical-black-box]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 9. Mechanical black box

First we determine the coefficient of friction as follows. We make sure that the object is at the bottom of the box. We put the box on the plank so that the axes of the cylinder is parallel to the axes of the plank. We start inclining the plank so that the bottom of the cylindrical box gets higher. We determine the angle of the plank $\alpha$, when the object starts sliding: it hits the cover of the box. It is convenient to put the cover (and the rim of the cover) of the box hanging slightly over an end of the plank. In that case, object hiting the cover of the box results in box falling down from the plank. We measure the tangent of the plank at that moment: $\mu = \tan \alpha = 0.17 \pm 0.2$.

Now we turn the axes of the cylinder perpendicular to the axes of the plank, but keep lying on its side. We start again inclining the plank and determine the angle $\beta$, at which the box starts rolling down. Assuming that the object is small (as compared to the radius of the box), the following relationship can be derived: $M \sin \beta = m ( \sin \alpha - \sin \beta )$, where $m$ is the mass of the object and $M$ - the mass of the empty box. Using $\sin \alpha = \frac { 60 \pm 5 } { 350 }$ and $\sin \beta = \frac { 25 \pm 3 } { 350 }$ we obtain $M / m = 35 / 25 =$ $1.4 \pm 0.2$. From the measurement of the net weight $M + m = 10.4 \mathrm {~g}$ we find $m = 10.4 \mathrm {~g} / 2.4 = ( 4.3 \pm 0.4 ) \mathrm { g }$. Note that the actual mass was 4.5 g.

The mass ratio can be, in principle, determined from the period of small oscillations, $T \approx 0.4 \mathrm {~s}$. Then, if we estimate the moment of inertia of the system box+object as $( M + m ) r ^ { 2 }$, where $r$ is the radius of the cylinder, then $I \ddot { \varphi } = - m r g \varphi$, i.e. $\omega ^ { 2 } = \frac { m } { m + M } \frac { g } { r }$. Using $r = 16 \mathrm {~mm}$ we obtain $\frac { M + m } { m } = \frac { g } { r } T ^ { 2 } / 4 \pi ^ { 2 } = 3.9$. This result, however, is rather approximate, because it is difficult to measure such a short oscillation period (at the high dissipation rate). Furthermore, the period is taken to the second power, this explains the unrealistic result (so,it does not make sense to try to improve the approach by taking account the geometric factors for the calculation of the moent of inertia of the box etc).
