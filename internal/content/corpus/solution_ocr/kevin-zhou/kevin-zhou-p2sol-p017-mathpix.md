---
id: solution-ocr-kevin-zhou-p2sol-p017
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p017]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 17. [A] Consider $N$ independent measurements of the same quantity, with results $x _ { i } \pm \Delta x _ { i }$. They can be combined into a single result by taking a weighted average. What is the optimal weighted average, which minimizes the uncertainty, and what is the corresponding uncertainty?

Solution. Let the weights be $w _ { i }$, so we report the value

$$
\bar { x } = \sum _ { i } w _ { i } x _ { i } .
$$

The uncertainty obeys

$$
( \Delta \bar { x } ) ^ { 2 } = \sum _ { i } w _ { i } ^ { 2 } \left( \Delta x _ { i } \right) ^ { 2 } .
$$

A tempting but incorrect way to minimize this quantity is to set the derivative with respect to $w _ { i }$ equal to zero. This doesn't work because the solution is just $w _ { 1 } = \ldots = w _ { N } = 0$, which isn't a weighted average at all. To actually have a weighted average, we need the weights to sum to one,

$$
\sum _ { i } w _ { i } = 1 .
$$

This is an optimization problem with a constraint, which can be solved with Lagrange multipliers.
However, for this particular problem, the constraint is simple enough to handle manually. Because of the constraint, if one increases some weight, then one must decrease others. At the minimum, the effect of increasing any weight infinitesimally and decreasing another the same amount must be zero, as if it weren't, we could just adjust those two weights to get a lower uncertainty. Setting the change in the uncertainty due to adjusting $w _ { i }$ and $w _ { j }$ in this way to zero gives

$$
0 = d \left( w _ { i } ^ { 2 } \right) \left( \Delta x _ { i } \right) ^ { 2 } + d \left( w _ { j } ^ { 2 } \right) \left( \Delta x _ { j } \right) ^ { 2 } = ( 2 d w ) \left( - w _ { i } \left( \Delta x _ { i } \right) ^ { 2 } + w _ { j } \left( \Delta x _ { j } \right) ^ { 2 } \right) .
$$

This tells us that $w _ { i } \propto 1 / \Delta x _ { i } ^ { 2 }$, which means

$$
w _ { i } = \frac { 1 / \left( \Delta x _ { i } \right) ^ { 2 } } { \sum _ { j } 1 / \left( \Delta x _ { j } \right) ^ { 2 } } .
$$

Note that all measurements are included in the optimal average, no matter how bad they may be. The corresponding uncertainty is

$$
\Delta x = \left( \sum _ { i } \frac { 1 } { \left( \Delta x _ { i } \right) ^ { 2 } } \right) ^ { - 1 / 2 } .
$$

All of the examples above involve combining continuous quantities, so we'll close this section with some applications to "counting" experiments, which work slightly differently.
