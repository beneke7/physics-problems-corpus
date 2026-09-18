---
id: solution-ocr-kevin-zhou-p2sol-p013
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p013]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 13. Some basic relative uncertainty results.

(a) Show that the relative uncertainty of the product or quotient of two independent quantities is the square root of the sum of the squares of their relative uncertainties.
(b) Show that averaging the results of $N$ independent trials as in problem 7 reduces the relative uncertainty by a factor of $\sqrt { N }$.

Solution. (a) Above we found that

$$
\Delta ( x y ) = x y \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } }
$$

Dividing both sides by $x y$ gives

$$
\frac { \Delta ( x y ) } { x y } = \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } }
$$

which is the desired result.

(b) Adding up the trials makes the absolute uncertainties add in quadrature, giving a factor of $\sqrt { N }$, while the total goes up by a factor of $N$, so the relative uncertain goes down by a factor of $\sqrt { N }$. Dividing by $N$ to form the average doesn't affect the relative uncertainty.

Remark
There are many situations where the rules above can't be used. For example, consider the uncertainty of $x + y ^ { 2 } / x$, where $x$ and $y$ are independent. You can calculate the uncertainty of either term with the standard rules, but you can't calculate the uncertainty of their sum, because the terms are not independent (both contain $x$ ).

In these cases, you can use the multivariable equivalent of the tangent line approximation,

$$
f \left( x ^ { \prime } , y ^ { \prime } \right) \approx f ( x , y ) + \left( x ^ { \prime } - x \right) \frac { \partial f } { \partial x } + \left( y ^ { \prime } - y \right) \frac { \partial f } { \partial y } .
$$

For independent $x$ and $y$, adding the two contributions to the uncertainty in quadrature gives

$$
\Delta f = \sqrt { \left( \frac { \partial f } { \partial x } \Delta x \right) ^ { 2 } + \left( \frac { \partial f } { \partial y } \Delta y \right) ^ { 2 } } .
$$

This general rule can also be used to quickly rederive the results of problem 10. However, it shouldn't be necessary in Olympiad problems. If you run into such situations in an experiment, often one of the uncertainties is much smaller, and can be neglected entirely.

## 3 Using Uncertainties
