---
id: solution-ocr-kevin-zhou-t1sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 8
An astronaut of mass $M$ stranded in outer space makes a primitive rocket as follows. They take a piece of dry ice of mass $m \ll M$ and molar mass $\mu$ and put it in a long, thin glass held at temperature $T$. The dry ice sublimates, and the astronaut points the opening of the glass in the opposite of the direction they want to go. Roughly estimate, within an order of magnitude, how fast the astronaut is going after all the dry ice is gone.

Solution
Let $m ^ { \prime }$ be the mass of a molecule of dry ice. By the equipartition theorem, the molecules have a typical speed of order

$$
v \sim \sqrt { \frac { k T } { m ^ { \prime } } } = \sqrt { \frac { N k T } { N m ^ { \prime } } } = \sqrt { \frac { R T } { \mu } } .
$$

The molecules exit the glass traveling more or less in the same direction, so by momentum conservation the final speed $u$ of the astronaut is on the order of

$$
u \sim \frac { m } { M } v = \frac { m } { M } \sqrt { \frac { R T } { \mu } } .
$$

We have implicitly assumed that the glass is long enough that the molecules get into thermal equilibrium with the glass before they leave it. For a short glass, the answer would instead


depend on the typical speeds of molecules at the moment they sublimate.
