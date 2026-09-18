---
id: solution-ocr-kevin-zhou-w2sol-ex004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w2-ex004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 4
Find the interference pattern of a diffraction grating, a set of $N$ identical slits in a row, each separated by a distance $d$.

Solution
Defining $\Delta r = d \sin \theta$ as before, the amplitude is

$$
A \sim 1 + e ^ { i k \Delta r } + e ^ { 2 i k \Delta r } + \ldots + e ^ { ( N - 1 ) i k \Delta r } = \frac { e ^ { i k N \Delta r } - 1 } { e ^ { i k \Delta r } - 1 } .
$$

Factoring out a common phase, we have

$$
A \sim \frac { e ^ { i k N \Delta r / 2 } - e ^ { - i k N \Delta r / 2 } } { e ^ { i k \Delta r / 2 } - e ^ { - i k \Delta r / 2 } } = \frac { \sin ( N k \Delta r / 2 ) } { \sin ( k \Delta r / 2 ) }
$$

so the intensity is

$$
I \propto \frac { \sin ^ { 2 } ( N k \Delta r / 2 ) } { \sin ^ { 2 } ( k \Delta r / 2 ) } .
$$


The normalized intensity is plotted below as a function of $\theta$.
![](../../../figures/solution-ocr/18617381099f8312784088bd.jpg)
The numerator yields rapid oscillations which aren't very visible; their envelope is given by the slow oscillations in the denominator. These slow oscillations are the ones we care about; they are the diffraction peaks and occur when

$$
\frac { k \Delta r } { 2 } = n \pi , \quad d \sin \theta = \frac { 2 \pi n } { k } = n \lambda , \quad n \in \mathbb { Z } .
$$

This is intuitive, because at the maxima, the contributions from each slit are in phase, as the path length difference between adjacent slits is a multiple of $\lambda$.
