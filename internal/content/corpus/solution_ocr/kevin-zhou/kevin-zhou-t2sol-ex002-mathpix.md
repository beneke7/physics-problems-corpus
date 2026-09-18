---
id: solution-ocr-kevin-zhou-t2sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2: Change of Variable
The same differential $d f$ can be described by coordinates $x$ and $y$, and by $x ^ { \prime }$ and $y$, so that

$$
d f = \left. \frac { \partial f } { \partial x } \right| _ { y } d x + \left. \frac { \partial f } { \partial y } \right| _ { x } d y = \left. \frac { \partial f } { \partial x ^ { \prime } } \right| _ { y } d x ^ { \prime } + \left. \frac { \partial f } { \partial y } \right| _ { x ^ { \prime } } d y
$$

How are these partial derivatives related to each other?

Solution
The two forms of the differential are in terms of $d x$ and $d y$, and $d x ^ { \prime }$ and $d y$ respectively. We thus need to write $d x$ in terms of $d x ^ { \prime }$ and $d y$, which we do by applying idea 3 to $x$ itself,

$$
d x = \left. \frac { \partial x } { \partial x ^ { \prime } } \right| _ { y } d x ^ { \prime } + \left. \frac { \partial x } { \partial y } \right| _ { x ^ { \prime } } d y .
$$

After plugging this in, the first form of $d f$ becomes

$$
d f = \left. \left. \frac { \partial f } { \partial x } \right| _ { y } \frac { \partial x } { \partial x ^ { \prime } } \right| _ { y } d x ^ { \prime } + \left( \left. \left. \frac { \partial f } { \partial x } \right| _ { y } \frac { \partial x } { \partial y } \right| _ { x ^ { \prime } } + \left. \frac { \partial f } { \partial y } \right| _ { x } \right) d y .
$$

Comparing this to the second form of $d f$, we conclude that

$$
\left. \frac { \partial f } { \partial x ^ { \prime } } \right| _ { y } = \left. \left. \frac { \partial f } { \partial x } \right| _ { y } \frac { \partial x } { \partial x ^ { \prime } } \right| _ { y } , \left. \quad \frac { \partial f } { \partial y } \right| _ { x ^ { \prime } } = \left. \frac { \partial f } { \partial y } \right| _ { x } + \left. \left. \frac { \partial f } { \partial x } \right| _ { y } \frac { \partial x } { \partial y } \right| _ { x ^ { \prime } } .
$$

These expressions might look a bit complicated, but their interpretations are simple. The first one just says that when we hold the same quantity $y$ constant throughout, then the ordinary single-variable chain rule in P1 works, since all the functions involved become effectively single-variable. (This also implies that reciprocals of partial derivatives behave as expected. For instance, $\left. ( \partial f / \partial x ) \right| _ { y } = 1 / ( \partial x / \partial f ) _ { y }$.) The second one says that when we change $y$ while keeping $x ^ { \prime }$ constant, there are two contributions: one solely from the change in $y$ itself, and one from the induced change in $x$, needed to keep $x ^ { \prime }$ constant.

If you want, you can generalize the reasoning here to see what happens when you change both coordinates at once, but that won't be needed for the problems below.

Now we're going to embark on some serious partial derivative acrobatics. The techniques we're about to cover are a bit tricky, and are generally regarded as the hardest thing covered in an undergraduate thermodynamics class. But they're also the simplest way to solve the problems in this section. The material covered below will not be necessary for anything else in these handouts.
