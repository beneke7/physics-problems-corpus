---
id: kevin-zhou-r1-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-ex004
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

Example 4
Give a simple interpretation of the squared norm of a particle’s four-velocity, u · u, and its
four-momentum, p · p.
Solution
The answers have to be simple, because they must be invariants that only depend on the
intrinsic properties of the particle, i.e. only on the invariant mass m. For the four-velocity,
u · u = γ2
− γ2
v2
= 1
which is clearly invariant. For the four-momentum we have p · p = m2.
Remark
Pop-science books usually describe the result u · u = 1 by saying that “particles always
move with the same speed through spacetime”, just like how a particle in uniform circular
motion always has the same spatial speed. This is misleading because it makes people think
that if dx/dτ increases in magnitude, then dt/dτ decreases. In fact it’s the opposite: time
dilation means more time dt passes for each tick dτ of a moving clock, so dt/dτ increases.
The analogy doesn’t work, because inner products of four-vectors have terms with minus
signs, while ordinary inner products of three-vectors don’t.
There are a lot of simple things in physics which are impossible to explain with fuzzy math-
free analogies. Pop-science books try to do it, but the understanding they impart is incredibly
fragile. They give their readers some familiarity with jargon, but no ability to actually do
anything with it, besides repeat what’s in the book. With math, relativity can make sense
to high school students. Without math, it can’t really make sense to anyone.
Example 5
Give a simple interpretation of the inner product of two momentum four-vectors, p1 · p2.
Solution
By definition, this is equal to m1m2u1 · u2, and since the inner product is invariant, we can
evaluate u1 · u2 in any frame. Suppose we work in the frame of the first particle, where
uµ
1 = (1,0), uµ
2 =

1
√
1 − v2
,
v
√
1 − v2

.
20
Kevin Zhou Physics Olympiad Handouts
Carrying out the inner product, we have the relatively simple result
p1 · p2 =
m1m2
√
1 − v2
where v is the relative speed, meaning the speed of one particle in the frame of the other.
