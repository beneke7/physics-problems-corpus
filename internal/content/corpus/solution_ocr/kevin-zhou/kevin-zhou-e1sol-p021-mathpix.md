---
id: solution-ocr-kevin-zhou-e1sol-p021
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-p021]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 21. Consider a uniformly charged ball of total charge $Q$ and radius $R$. Decompose this ball into two parts, $A$ and $B$, where $B$ is a ball of radius $R / 2$ whose center is a distance $R / 2$ of the ball's center, and $A$ is everything else. Find the potential energy due to the interaction of $A$ and $B$, i.e. the work necessary to bring in $B$ from infinity, against the field of $A$.

Solution. If we tried to compute the potential energy directly, by integrating over $A$ and $B$, we would get messy integrals. Instead, let's consider bringing in $B$ in three steps:

1. At infinity, compress $B$ into a point charge $Q / 8$.
2. Move this point charge to the center of the $B$-shaped hole in $A$.
3. Expand the point charge back into the original shape of $B$.

Our first claim is that the total work needed to do steps (1) and (3) is zero. These two steps are very close to being opposites; the only difference in that in step (3), the expansion takes place within the field of $A$. By the same reasoning as in problem 1, the field of $A$ within the $B$-shaped hole is constant, with magnitude

$$
E = \frac { k ( Q / 8 ) } { ( R / 2 ) ^ { 2 } } = \frac { k Q } { 2 R ^ { 2 } }
$$

This constant field does no net work when $B$ is expanded, because the positive work done on one half of $B$ is cancelled by the negative work on the other half.

Therefore, we only have to calculate the work done for step (2), which is easy. Applying superposition and the shell theorem, the work needed to bring the point charge to the point where the surface of $A$ meets the surface of the $B$-shaped hole is

$$
W _ { 1 } = \frac { Q } { 8 } \left( \frac { k Q } { R } - \frac { k ( Q / 8 ) } { R / 2 } \right) .
$$

Next, moving the point charge from this point to the center of the $B$-shaped hole takes work

$$
W _ { 2 } = \frac { R } { 2 } \frac { Q } { 8 } E = \frac { k Q ^ { 2 } } { 32 R } .
$$

The total work is

$$
W _ { 1 } + W _ { 2 } = \frac { k Q ^ { 2 } } { 8 R } .
$$
