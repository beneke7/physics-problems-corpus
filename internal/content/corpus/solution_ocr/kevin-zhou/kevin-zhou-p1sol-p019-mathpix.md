---
id: solution-ocr-kevin-zhou-p1sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 19. Some exercises involving square roots.
    (a) Manually find the Taylor series for $\sqrt { 1 + x }$ up to second order, and verify they agree with the binomial theorem.
    (b) Approximate $\sqrt { 1 + 2 x + x ^ { 2 } }$ for small $x$ using the binomial theorem. Does the result match what you expect? If not, how can you correct it?

Solution. (a) The binomial theorem gives $1 + x / 2$. By differentiating, we get $1 / ( 2 \sqrt { 1 + x } )$ and $- 1 / \left( 4 ( 1 + x ) ^ { 3 / 2 } \right)$. Then

$$
\sqrt { 1 + x } = 1 + \frac { 1 } { 2 } x - \frac { 1 } { 8 } x ^ { 2 } + \mathcal { O } \left( x ^ { 3 } \right) .
$$

The first two terms agree with the usual form of the binomial theorem. For the third term, note that the coefficient should be

$$
\binom { 1 / 2 } { 2 } = \frac { ( 1 / 2 ) ( - 1 / 2 ) } { 2 } = - \frac { 1 } { 8 }
$$

which is indeed what we find.


(b) Of course, the result is $1 + x$, so we want the $\mathcal { O } \left( x ^ { 2 } \right)$ term to vanish. On the other hand, applying the binomial theorem gives
$$
\sqrt { 1 + 2 x + x ^ { 2 } } \approx 1 + \frac { 1 } { 2 } \left( 2 x + x ^ { 2 } \right) = 1 + x + \frac { x ^ { 2 } } { 2 }
$$
which is wrong! The reason is that the first order binomial theorem isn't good enough, because the second order term in the binomial theorem will also contribute a second order term to the answer. Using the result of part (a),
$$
\begin{aligned}
\sqrt { 1 + 2 x + x ^ { 2 } } & = 1 + \frac { 1 } { 2 } \left( 2 x + x ^ { 2 } \right) - \frac { 1 } { 8 } \left( 2 x + x ^ { 2 } \right) ^ { 2 } + \mathcal { O } \left( \left( 2 x + x ^ { 2 } \right) ^ { 3 } \right) \\
& = 1 + x + \frac { x ^ { 2 } } { 2 } - \frac { 1 } { 8 } \left( 2 x + x ^ { 2 } \right) ^ { 2 } + \mathcal { O } \left( x ^ { 3 } \right) \\
& = 1 + x + \frac { x ^ { 2 } } { 2 } - \frac { 1 } { 8 } ( 2 x ) ^ { 2 } + \mathcal { O } \left( x ^ { 3 } \right) \\
& = 1 + x + \mathcal { O } \left( x ^ { 3 } \right)
\end{aligned}
$$
as desired.
