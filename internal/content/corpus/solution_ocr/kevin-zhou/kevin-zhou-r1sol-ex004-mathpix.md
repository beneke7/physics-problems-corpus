---
id: solution-ocr-kevin-zhou-r1sol-ex004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-r1-ex004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 4
Give a simple interpretation of the squared norm of a particle's four-velocity, $u \cdot u$, and its four-momentum, $p \cdot p$.

Solution
The answers have to be simple, because they must be invariants that only depend on the intrinsic properties of the particle, i.e. only on the invariant mass $m$. For the four-velocity,

$$
u \cdot u = \gamma ^ { 2 } - \gamma ^ { 2 } v ^ { 2 } = 1
$$

which is clearly invariant. For the four-momentum we have $p \cdot p = m ^ { 2 }$.

Remark
Pop-science books usually describe the result $u \cdot u = 1$ by saying that "particles always move with the same speed through spacetime", just like how a particle in uniform circular motion always has the same spatial speed. This is misleading because it makes people think that if $d x / d \tau$ increases in magnitude, then $d t / d \tau$ decreases. In fact it's the opposite: time dilation means more time $d t$ passes for each tick $d \tau$ of a moving clock, so $d t / d \tau$ increases. The analogy doesn't work, because inner products of four-vectors have terms with minus signs, while ordinary inner products of three-vectors don't.

There are a lot of simple things in physics which are impossible to explain with fuzzy mathfree analogies. Pop-science books try to do it, but the understanding they impart is incredibly fragile. They give their readers some familiarity with jargon, but no ability to actually do anything with it, besides repeat what's in the book. With math, relativity can make sense to high school students. Without math, it can't really make sense to anyone.

Example 5
Give a simple interpretation of the inner product of two momentum four-vectors, $p _ { 1 } \cdot p _ { 2 }$.

Solution
By definition, this is equal to $m _ { 1 } m _ { 2 } u _ { 1 } \cdot u _ { 2 }$, and since the inner product is invariant, we can evaluate $u _ { 1 } \cdot u _ { 2 }$ in any frame. Suppose we work in the frame of the first particle, where

$$
u _ { 1 } ^ { \mu } = ( 1 , \mathbf { 0 } ) , \quad u _ { 2 } ^ { \mu } = \left( \frac { 1 } { \sqrt { 1 - v ^ { 2 } } } , \frac { \mathbf { v } } { \sqrt { 1 - v ^ { 2 } } } \right) .
$$


Carrying out the inner product, we have the relatively simple result

$$
p _ { 1 } \cdot p _ { 2 } = \frac { m _ { 1 } m _ { 2 } } { \sqrt { 1 - v ^ { 2 } } }
$$

where $v$ is the relative speed, meaning the speed of one particle in the frame of the other.
