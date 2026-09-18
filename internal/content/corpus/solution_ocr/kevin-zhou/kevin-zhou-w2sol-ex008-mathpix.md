---
id: solution-ocr-kevin-zhou-w2sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w2-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 8
Gratings split light into its components. If a grating can just resolve the two wavelengths $\lambda$ and $\lambda + \Delta \lambda$, its resolving power is $R = \lambda / \Delta \lambda$. Compute the resolving power of a diffraction grating with $N$ slits at the $n ^ { \text {th } }$ order maximum.

Solution
Conventionally, we say that two diffraction peaks are distinguishable if the maximum of one falls outside the first minimum of the other. We know the $n ^ { \text {th } }$ order maximum for wavelength $\lambda$ occurs when $d \sin \theta = n \lambda$, as here the path length difference between adjacent slits is $n \lambda$. Furthermore, the first minimum around this maximum occurs when there is an extra net path length difference of $\lambda$ across the entire diffraction grating, i.e. when

$$
N d \sin \theta = N n \lambda + \lambda .
$$

Setting the value of $\sin \theta$ equal to that for wavelength $\lambda + \Delta \lambda$, we see that we can just resolve these two wavelengths if

$$
\frac { n ( \lambda + \Delta \lambda ) } { d } = \frac { ( N n + 1 ) \lambda } { N d } , \quad R = \frac { \lambda } { \Delta \lambda } = N n .
$$


Note that the resolving power is also the number of wavelengths by which the longest and shortest possible paths to the diffraction maximum differ (i.e. the paths through the very top and very bottom slits). The fact that a larger distance may be used to resolve smaller wavelength differences is another manifestation of the uncertainty principle.
