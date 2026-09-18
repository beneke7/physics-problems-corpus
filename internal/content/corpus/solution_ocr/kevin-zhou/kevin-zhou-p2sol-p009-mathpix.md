---
id: solution-ocr-kevin-zhou-p2sol-p009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 9. The tangent line approximation doesn't always make sense. Suppose $x$ is measured as $0 \pm \Delta x$. Show that the results of problem 8 for the uncertainties of $x ^ { 2 }$ and $\sqrt { x }$ give nonsensical results. In each case, what would be a more reasonable uncertainty to report?
Solution. Naively applying the formulas above would give uncertainties of zero and infinity, which are clearly unphysical. In these cases, reasonable guesses for the uncertainty would be $( \Delta x ) ^ { 2 }$ and $\sqrt { \Delta x }$, since by dimensional analysis, they give the typical spread of the distributions of $x ^ { 2 }$ and $\sqrt { x }$.

Still, there is something more subtle going on here. In cases like these, applying the transformation distorts the probability distribution, beyond just a shifting and stretching, so it doesn't stay normally distributed. In Olympiads, this doesn't matter since we only want rough estimates, but the proper way to handle this would be to describe the full probability distribution. However, this often can't be done analytically.

When professional physicists run into situations like these, they often use Monte Carlo: they numerically compute many values, starting with randomly drawn inputs, and use that to infer the probability distribution. On Olympiads, you should just fall back to something reasonable.

[2] Problem 10. Consider two independent, positive quantities with values and uncertainties $x \pm \Delta x$ and $y \pm \Delta y$.
    (a) By writing $x y$ as $\exp ( \log x + \log y )$, show that the uncertainty of $x y$ is
$$
\Delta ( x y ) = x y \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } } .
$$
    (b) If we set $x = y$, then we find
$$
\Delta \left( x ^ { 2 } \right) = x ^ { 2 } \sqrt { 2 \left( \frac { \Delta x } { x } \right) ^ { 2 } } = \sqrt { 2 } x \Delta x .
$$
On the other hand, in problem 8 we found $\Delta \left( x ^ { 2 } \right) = 2 x \Delta x$. Which result is correct?
    (c) Find the uncertainty of $x / y$.
Solution. (a) We can write
$$
x y = \exp ( \log x + \log y )
$$
which implies
$$
\Delta ( x y ) = \exp ( \log x + \log y ) \Delta ( \log x + \log y ) = x y \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } } .
$$
    (b) The result $\Delta \left( x ^ { 2 } \right) = 2 x \Delta x$ is correct, since the formula for $\Delta ( x y )$ assumes $x$ and $y$ are independent, which fails when we set $y = x$.
    (c) We have
$$
\frac { x } { y } = \exp ( \log x - \log y )
$$
and by a very similar calculation to part (a), we conclude
$$
\Delta ( x / y ) = \frac { x } { y } \sqrt { \left( \frac { \Delta x } { x } \right) ^ { 2 } + \left( \frac { \Delta y } { y } \right) ^ { 2 } } .
$$
