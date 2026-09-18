---
id: solution-ocr-nbpho-2017-s-p8
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2017-beams]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
8. BEAMS
i) The beam in the middle expands $\alpha \Delta T =$ $0.10 \%$ due to the temperature increase. The beams are all between rigid support plates, so they must all have the same final length. Because the middle beam has expanded, in the limiting case when the maximal load is applied the middle beam has a strain of $\beta$. The two other beams have a strain of $\epsilon = \beta - \alpha \Delta T$, because they haven't expanded due to temperature. The force applied by each beam is proportional to its strain, so we can find the ratio of the maximal allowed weights by calculating the ratio of the sum of strains in the two cases. In the even temperatures case each beam has a strain of $\beta$ under the maximal load. So the fraction of the new maximum weight compared to the original case is

$$
\frac { 2 \epsilon + \beta } { 3 \beta } = \frac { 2 \times 0.30 + 0.40 } { 3 \times 0.40 } \approx 0.83 .
$$

ii) Denote by $\epsilon _ { 1 }$ the strain of the middle beam and by $\epsilon _ { 2 }$ the strain of the outer beams. Like in the previous part of the problem, the final lengths of the beams have to be the same. Considering the expansion of the middle beam, we must have

$$
\epsilon _ { 1 } - \alpha \Delta T = \epsilon _ { 2 } .
$$

Denote by $E _ { 0 }$ the Young's modulus at temperature $T = 0 ^ { \circ } \mathrm { C }$. At this temperature the maximum allowed force is $3 S E _ { 0 } \beta$ ( $S$ is the area of each of the beams), because each beam has a strain of $\beta$. So $20 \%$ of the maximal load exerts a force of

$$
F _ { 1 } = 0.2 \times 3 S E _ { 0 } \beta = 0.6 S E _ { 0 } \beta .
$$

In general the force exerted by the beams at any temperature is given by

$$
F = S E ( T ) \epsilon _ { 1 } + 2 S E _ { 0 } \epsilon _ { 2 } .
$$

The maximal force can be found by setting $\epsilon _ { 1 } =$ $\beta$ and by substituting $\epsilon _ { 2 }$ from above.

$$
F _ { \max } = S E ( T ) \beta + 2 S E _ { 0 } ( \beta - \alpha \Delta T ) .
$$

By solving $F _ { \text {max } } = F _ { 1 }$ we can find the temperature we are looking for. We get

$$
\begin{gathered}
S E ( T ) \beta + 2 S E _ { 0 } ( \beta - \alpha \Delta T ) = 0.6 S E _ { 0 } \beta \rightarrow \\
E ( T ) = \frac { 2 \alpha } { \beta } E _ { 0 } \Delta T - 1.4 E _ { 0 } .
\end{gathered}
$$

This is a straight line representing what the Young's modulus should be such that with a $\Delta T$ temperature increase of the middle beam the system can maximally support 20\% of the original maximal weight. By plotting this line on the Young's modulus graph and finding the intersection point of the two lines we get that $\Delta T = 420 ^ { \circ } \mathrm { C }$ and $T = 420 ^ { \circ } \mathrm { C }$.
![](../../../figures/solution-ocr/67198e011ef86f52f874a2f5.jpg)
