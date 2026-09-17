---
id: kevin-zhou-p2-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-ex003
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

Example 3: F = ma 2022 B21
Alice and Bob are given a long, thin rectangle of sheet metal. (It has been machined very
precisely, so they can assume it is perfectly rectangular.) Using calipers, Alice measures the
width of the rectangle as 1 cm with 1% uncertainty. Using a tape measure, Bob independently
measures its length as 100 cm with 0.1% uncertainty. What are the relative uncertainties
they should report for the area and the perimeter of the rectangle?
Solution
To compute the area, we multiply the two measurements, which means we add the relative
uncertainties in quadrature,
∆A
A
=
p
(1%)2 + (0.1%)2 ≈ 1%.
Note that in this case, the relative uncertainty of Bob’s measurement is negligible; the rel-
ative uncertainty of the area is approximately the relative uncertainty of Alice’s measurement.
Computing the perimeter involves adding the measurements, which means the absolute
uncertainties are added in quadrature instead. These are 0.01cm and 0.1cm for Alice and
Bob’s measurements, respectively, so the absolute uncertainty of Alice’s measurement is
negligible. Thus, the relative uncertainty of the perimeter is approximately the relative
uncertainty of Bob’s measurement, 0.1%.
In simple Olympiad experiments, often only one uncertainty will really matter. This can
dramatically simplify calculations, but it might take a little thought to tell which one.
