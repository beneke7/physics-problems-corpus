---
id: solution-ocr-nbpho-2008-s-p10
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2008-glass-plate]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
10. Glass plate (10 points)
![](../../../figures/solution-ocr/d46e8aa4d61fe010ae9f41c7.jpg)
There are two possible setups. First, we consider the interference of the beams, reflected from the upper and lower surfaces of the glass plate, see Figure, upper drawing. Second, we direct the beam on the edge of the plate. As a result, on the screen, there will be almost the same diffraction pattern, as from a single slit (lower drawing in the Figure).

In the first case, we need to calculate the optical path difference, see Figure. $\Delta l = 2 ( n | C D | - | A B | ) = 2 ( n d / \cos \beta -$ $d \sin \beta \sin \alpha ) = 2 d \left( n / \cos \beta - \sin ^ { 2 } \alpha / n \right)$; we keep in mind that $\sin \beta = \sin \alpha / n$. We need to find such a change in $\alpha$, which gives rise to the change of $\Delta l$ by $\lambda$ (this corresponds to a transition from one diffraction minimum to another one): $\Delta \alpha \cdot \frac { d ( \Delta l ) } { d \alpha } = \lambda$. Then, we can relate the measured quantity, the distance between the minima on the screen $a = L \Delta \alpha$ (where $L$ is the path length $| A B | + | B C |$ ) to the plate thickness. $\frac { d ( \Delta l ) } { d \alpha } = 2 d \left( \sin \alpha / \cos ^ { 2 } \beta - \sin 2 \alpha / n \right) = 2 d \sin \alpha \left( \cos ^ { - 2 } \beta - \right.$ $2 \cos \alpha / n )$. So, $L \lambda = 2 a d \sin \alpha \left( \cos ^ { - 2 } \beta - 2 \cos \alpha / n \right)$; hence, $d = L \lambda / 2 a \sin \alpha \left( \cos ^ { - 2 } \beta - 2 \cos \alpha / n \right)$. We can easily measure $\alpha$ and calculate $\beta$; for $n$, we can use typical value $n \approx 1.4$, or use the Brewster angle $\alpha _ { B }$ measurement to find $n = \tan \alpha _ { B }$. For the precise measurement of $a$, we count several, e.g. 10, inter-minima intervals, and divide the distance between the farthest minima by 10.

In the second case, the angular distance between the minima is given by $\Delta \alpha = 2 \lambda / d$, so that $a = 2 L \lambda / d$ and $d = 2 L \lambda / a$. Numerically, the thickness was $d \approx 0.20 \mathrm {~mm}$.
