---
id: kevin-zhou-p1-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p019
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[3] Problem 19. Some exercises involving square roots.
(a) Manually find the Taylor series for
√
1 + x up to second order, and verify they agree with the
binomial theorem.
(b) Approximate
√
1 + 2x + x2 for small x using the binomial theorem. Does the result match
what you expect? If not, how can you correct it?
Solution. (a) The binomial theorem gives 1 + x/2. By differentiating, we get 1/(2
√
1 + x) and
−1/(4(1 + x)3/2). Then
√
1 + x = 1 +
1
2
x −
1
8
x2
+ O(x3
).
The first two terms agree with the usual form of the binomial theorem. For the third term,
note that the coefficient should be

1/2
2

=
(1/2)(−1/2)
2
= −
1
8
which is indeed what we find.
21
Kevin Zhou Physics Olympiad Handouts
(b) Of course, the result is 1 + x, so we want the O(x2) term to vanish. On the other hand,
applying the binomial theorem gives
p
1 + 2x + x2 ≈ 1 +
1
2
(2x + x2
) = 1 + x +
x2
2
which is wrong! The reason is that the first order binomial theorem isn’t good enough, because
the second order term in the binomial theorem will also contribute a second order term to the
answer. Using the result of part (a),
p
1 + 2x + x2 = 1 +
1
2
(2x + x2
) −
1
8
(2x + x2
)2
+ O((2x + x2
)3
)
= 1 + x +
x2
2
−
1
8
(2x + x2
)2
+ O(x3
)
= 1 + x +
x2
2
−
1
8
(2x)2
+ O(x3
)
= 1 + x + O(x3
)
as desired.
