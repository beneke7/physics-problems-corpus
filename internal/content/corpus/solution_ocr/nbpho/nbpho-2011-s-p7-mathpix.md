---
id: solution-ocr-nbpho-2011-s-p7
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2011-vacuum-bulb]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
7. Vacuum bulb (8 points)
i) Each pumping cycle reduces the number of molecules inside the bulb by a factor of $( 1 - \alpha )$; therefore, after $N$ cycles, the number of molecules (and hence, the pressure) by a factor of $\beta = ( 1 - \alpha ) ^ { N } \approx e ^ { - N \alpha } \Rightarrow$

$$
N = - \frac { \ln \beta } { \alpha } .
$$

ii) Majority of the pumping cycles are done when the pressure inside the bulb is negligible as compared to the outside pressure. During such a cycle, a work equal to $p _ { 0 } V \alpha$ is done. Therefore, $A \approx N p _ { 0 } V \alpha = p _ { 0 } V | \ln \beta |$. iii) Due to adiabatic law, $p V ^ { \gamma } =$ Const; when combined with the gas law $p V \propto T$ we obtain $p ^ { \gamma - 1 } \propto T ^ { \gamma }$. During the last downwards motion of the piston, the pressure inside the cylinder is increased by a factor of $1 / \beta$; thus, $T = T _ { 0 } \beta ^ { \frac { 1 } { \gamma } - 1 }$.
iv) According to the modified pumping scheme, the work/energy loss is only due to the release of the hot air. Note that if we had a cylinder of volume $V$, we could be able to create vacuum inside there using only one pumping motion, i.e. by performing work $A = p _ { 0 } V$ and without any energy loss. Now, we perform an excess work, which is converted into internal energy of the released hot air, which needs to be calculated. Let $\xi = \frac { p } { p _ { 0 } }$ be an intermediate rarefaction factor; then, we can apply the previous result to calculate the internal energy of released air, if its quantity is $d \nu$ moles: $d U = T _ { 0 } \left( \xi ^ { \frac { 1 } { \gamma } - 1 } - 1 \right) c _ { V } d \nu$. Let us note that the number of moles inside the bulb is $\nu = \frac { p _ { 0 } \xi V } { R T _ { 0 } } \Rightarrow d \nu = \frac { p _ { 0 } V } { R T _ { 0 } } d \xi$. So, $U = p _ { 0 } V \frac { c _ { V } } { R } \int _ { 0 } ^ { 1 } \left( \xi ^ { \frac { 1 } { \gamma } - 1 } - 1 \right) d \xi = ( \gamma - 1 ) p _ { 0 } V \frac { c _ { V } } { R }$. Now, recall that $\gamma = c _ { p } / c _ { V } = 1 + \frac { R } { c _ { V } }$, hence $\frac { c _ { V } } { R } = \frac { 1 } { \gamma - 1 }$ and $U = p _ { 0 } V$. This gives us the energy loss due to heating the released air; another $p _ { 0 } V$ is required for loss-free creation of the vacuum. Hence, the total required work is $A = 2 p _ { 0 } V$.
