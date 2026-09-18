---
id: solution-ocr-izho-2014-t-s-q1
source: izho
kind: official_solution_document
language: ru
solution_type: official
source_pdf: cache/phoxiv/izho/2014_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [izho-2014-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem 1B (5 points)

The first solution.
Consider the left part of the circuit. Its load characteristic (dependence of $U$ against $I$ ) is the straight line corresponding to an equivalent source with the parameters $\varepsilon _ { 0 } = \frac { \varepsilon } { 2 } , r _ { 0 } = \frac { r } { 2 }$.

For the equivalent circuit
![](../../../figures/solution-ocr/4e3e8e5f54601bc60c00309c.jpg)
![](../../../figures/solution-ocr/73f03c3515a96f4ee4288b54.jpg)
the total released heat is found as $Q _ { 0 } = \frac { C \varepsilon ^ { 2 } } { 2 }$. In the resistor $R$ the released heat is obtained from the simple proportion as

$$
Q = \frac { R } { R + r _ { 0 } } Q _ { 0 } = \frac { R } { R + \frac { r } { 2 } } \cdot \frac { C \left( \frac { \varepsilon } { 2 } \right) ^ { 2 } } { 2 } = \frac { R C \varepsilon ^ { 2 } } { 4 ( 2 R + r ) }
$$

The second solution.
The Kirchhoff set of equations has the following form

$$
\left\{ \begin{array} { c }
\varepsilon = I _ { 1 } r + I _ { 2 } r \\
I _ { 2 } r = I R + \frac { q } { C } \\
I _ { 1 } = I + I _ { 2 } \\
I = \dot { q }
\end{array} \right.
$$

![](../../../figures/solution-ocr/84fcb63e246929fa638b1c2b.jpg)
Eliminating $I _ { 1 }$ и $I _ { 2 }$, we obtain the relation

$$
I \left( R + \frac { r } { 2 } \right) + \frac { q } { C } = \frac { \varepsilon } { 2 } ,
$$

and multiplying it by $I$ we get

$$
I ^ { 2 } \left( R + \frac { r } { 2 } \right) = \frac { \varepsilon } { 2 } I - \frac { q I } { C } = \frac { \varepsilon } { 2 } \dot { q } - \frac { 2 q \dot { q } } { 2 C } = \frac { d } { d t } \left( \frac { \varepsilon q } { 2 } - \frac { q ^ { 2 } } { 2 C } \right) .
$$

Hence

$$
I ^ { 2 } R = \frac { R } { R + \frac { r } { 2 } } \frac { d } { d t } \left( \frac { \varepsilon q } { 2 } - \frac { q ^ { 2 } } { 2 C } \right)
$$

and, thus,

$$
\int _ { 0 } ^ { \infty } I ^ { 2 } R d t = \left. \frac { R } { R + \frac { r } { 2 } } \left( \frac { \varepsilon q } { 2 } - \frac { q ^ { 2 } } { 2 C } \right) \right| _ { q ( 0 ) } ^ { q ( \infty ) }
$$

On substituting $q ( 0 ) = 0$ and $q ( \infty ) = C \frac { \varepsilon } { 2 }$, we finally obtain


$$
Q = \frac { R C \varepsilon ^ { 2 } } { 4 ( R + 2 r ) } .
$$
