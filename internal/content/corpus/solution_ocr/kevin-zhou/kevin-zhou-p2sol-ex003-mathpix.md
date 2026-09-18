---
id: solution-ocr-kevin-zhou-p2sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3: $F = m a 2022$ B21
Alice and Bob are given a long, thin rectangle of sheet metal. (It has been machined very precisely, so they can assume it is perfectly rectangular.) Using calipers, Alice measures the width of the rectangle as 1 cm with 1\% uncertainty. Using a tape measure, Bob independently measures its length as 100 cm with 0.1\% uncertainty. What are the relative uncertainties they should report for the area and the perimeter of the rectangle?

Solution
To compute the area, we multiply the two measurements, which means we add the relative uncertainties in quadrature,

$$
\frac { \Delta A } { A } = \sqrt { ( 1 \% ) ^ { 2 } + ( 0.1 \% ) ^ { 2 } } \approx 1 \% .
$$

Note that in this case, the relative uncertainty of Bob's measurement is negligible; the relative uncertainty of the area is approximately the relative uncertainty of Alice's measurement.

Computing the perimeter involves adding the measurements, which means the absolute uncertainties are added in quadrature instead. These are 0.01 cm and 0.1 cm for Alice and Bob's measurements, respectively, so the absolute uncertainty of Alice's measurement is negligible. Thus, the relative uncertainty of the perimeter is approximately the relative uncertainty of Bob's measurement, 0.1\%.

In simple Olympiad experiments, often only one uncertainty will really matter. This can dramatically simplify calculations, but it might take a little thought to tell which one.
