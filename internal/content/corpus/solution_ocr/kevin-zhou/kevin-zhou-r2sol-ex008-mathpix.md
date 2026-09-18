---
id: solution-ocr-kevin-zhou-r2sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r2-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 8
A point charge $q$ of mass $m$ is initially at rest, and experiences a uniform electric field $E$. What time $t$ does it take the object to move a distance $x$ ?

Solution
In R1, we found $x ( t )$ for a uniformly accelerated rocket, which assumed a constant three-force in the momentarily comoving frame. By contrast, here we have a constant three-force $F = q E$ in the lab frame. However, we showed in problem 18 that forces along the direction of motion are the same in both frames, so these two problems are actually identical!

So we already know the answer to the problem, but it turns out that in the lab frame perspective, there's a slick alternative derivation that yields the result in one step. The trick is to consider the energy and momentum. Recall from problem 1 that the three-force $F$ obeys $F = d p / d t$ and $F = d E / d x$. Therefore, when the object reaches its destination,

$$
E = m + F x , \quad p = F t .
$$

But we also know that $E ^ { 2 } = p ^ { 2 } + m ^ { 2 }$, so plugging the results in and solving for $t$ gives

$$
t = \sqrt { x ^ { 2 } + \frac { 2 m x } { F } }
$$

which is compatible with our expression for $x ( t )$ back in R1. The reason this was so easy is that momentum and energy behave simply in relativity, while position and velocity don't.
