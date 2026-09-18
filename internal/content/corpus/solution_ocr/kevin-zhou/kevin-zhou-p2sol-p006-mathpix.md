---
id: solution-ocr-kevin-zhou-p2sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 6. Suppose $x$ has uncertainty $\Delta x$ and $y$ has uncertainty $\Delta y$, where $x$ and $y$ are independent. Explain why the uncertainty of $x + y$ is
$$
\Delta ( x + y ) = \sqrt { ( \Delta x ) ^ { 2 } + ( \Delta y ) ^ { 2 } } .
$$
This is called "addition in quadrature". What is the uncertainty of $x - y$ ? How about $x + x$ ?
Solution. For independent variables, $\operatorname { var } \left( X _ { 1 } + X _ { 2 } \right) = \operatorname { var } \left( X _ { 1 } \right) + \operatorname { var } \left( X _ { 2 } \right)$. Since our uncertainties represent the standard deviation, $\sigma _ { X } = \sqrt { \operatorname { var } ( X ) }$, we have
$$
\Delta ( x + y ) = \sqrt { ( \Delta x ) ^ { 2 } + ( \Delta y ) ^ { 2 } } .
$$
Since $x - y = x + ( - y )$ and $\Delta ( - y ) = \Delta y$, we get that $\Delta ( x - y ) = \Delta ( x + y )$. Finally, by linearity we clearly have $\Delta ( x + x ) = 2 \Delta x$. (The formula above doesn't apply, because $x$ isn't independent of $x$.)

Remark
Note how this differs from "high school" uncertainty analysis. In school, you might be told to show uncertainty using significant figures, and when adding two things, to keep only the figures that are significant in both of them. That corresponds to

$$
\Delta ( x + y ) = \max ( \Delta x , \Delta y )
$$

which is an underestimate. Or, you might be told that the uncertainty needs to encapsulate all the possible values, which implies that

$$
\Delta ( x + y ) = \Delta x + \Delta y
$$

which is an overestimate, since the errors could cancel.
