---
id: solution-ocr-kevin-zhou-e5sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e5-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 19. Consider two concentric rings of radii $r$ and $R \gg r$.

(a) Compute the mutual inductance by considering a current through the larger ring.
(b) Compute the mutual inductance by considering a current through the smaller ring, and verify your results agree. (Hint: this can be done without difficult integrals.)

In general, computing mutual inductance is a hard and practically important problem; there have been whole books written on the subject.

Solution. (a) The field at the center is $\mu _ { 0 } I / 2 R$, so the flux through the small ring is $\Phi =$ $\left( \mu _ { 0 } I / 2 R \right) \pi r ^ { 2 }$, so $L _ { 12 } = \frac { \mu _ { 0 } \pi r ^ { 2 } } { 2 R }$.

(b) Consider the entire infinite plane the smaller ring lies in. The key idea is that the total flux through this plane is zero: every magnetic flux line due to the ring that goes up through the plane comes down through it somewhere else. Now decompose this plane into the part in the big ring and the part outside. We have
$$
\Phi _ { \mathrm { plane } } = \Phi _ { \mathrm { in } } + \Phi _ { \mathrm { out } } = 0
$$
which means $\Phi _ { \text {in } } = - \Phi _ { \text {out } }$. This is useful because calculating $\Phi _ { \text {in } }$ is very complicated. Calculating $\Phi _ { \text {out } }$ is easy because the whole region is far from the small ring, so its field can be approximated as a dipole field.
The field at a distance $s$ away in the plane of the rings is $\mathbf { B } = B _ { z } \hat { \mathbf { z } }$ where $B _ { z } = \frac { \mu _ { 0 } I \pi r ^ { 2 } } { 4 \pi s ^ { 3 } }$. The flux is then
$$
\left| \Phi _ { \text {in } } \right| = \left| \Phi _ { \text {out } } \right| = \frac { \mu _ { 0 } I r ^ { 2 } } { 4 } \int _ { R } ^ { \infty } \frac { 1 } { s ^ { 3 } } 2 \pi s d s = \frac { \mu _ { 0 } I \pi r ^ { 2 } } { 2 R }
$$
Dividing by $I$ gives the same result as (a), as expected.

[2] Problem 20 (MPPP 181). Three nearly complete circular loops, with radii $R , 2 R$, and $4 R$ are placed concentrically on a horizontal table, as shown.
![](../../../figures/solution-ocr/ac81e86e3c976882d3f723c1.jpg)
A time-varying electric current is made to flow in the middle loop. Find the voltage induced in the largest loop at the moment when the voltage between the terminals of the smallest loop is $V _ { 0 }$.
Solution. As you might have noticed from the previous problems, inductances generally scale with one power of length. In this case, the only length scale is the radii of the rings, so the mutual inductance of the $2 R$ and $4 R$ loops is twice that of the $2 R$ and $R$ loops by dimensional analysis. Since $V _ { 0 } = L _ { R , 2 R } \dot { I } _ { 2 R }$, we have $V _ { 4 R } = L _ { 2 R , 4 R } \dot { I } _ { 2 R } = 2 V _ { 0 }$.
But there's a subtlety: in problem 18, we found that the self-inductance of a wire loop depended on the radius $r$ of the wire, so why didn't we allow it in the dimensional analysis here? The point is that the self-inductance of a wire loop depends on the flux the loop puts through itself, so it depends on the very large magnetic fields very closer to the wire. But a mutual inductance only depends on the flux one loop puts through another, and here, all points of the second loop are far away from the first loop. So the wire radius doesn't matter, just like how it didn't in problem 19.

## 4 Magnetism

In this section we'll dip a little into atomic physics and the origin of magnetism. However, a proper understanding of this subject requires quantum mechanics, as we'll cover in T3 and X3.

Idea 6
A spinning object of charge $q$ and mass $m$ carries a magnetic dipole moment $\boldsymbol { \mu }$ and angular momentum $\mathbf { J }$. If its mass and charge distributions are proportional, then $\boldsymbol { \mu }$ and $\mathbf { J }$ point in the same direction, and in classical mechanics, their ratio is always $\mu / J = q / 2 m$.

In quantum mechanics, it turns out that $\mu / J = q g / 2 m$, where the $g$-factor is an order-one number, which is about 2 for the electron. Unfortunately, there's no way to derive this result with the Olympiad syllabus, so problems about magnetism can at best make rough estimates.
