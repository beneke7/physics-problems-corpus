---
id: solution-ocr-kevin-zhou-mrevsol-p025
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-mrev-p025]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 25. In this problem, you will explore yet another slick derivation of Kepler's first law. As usual, suppose the orbit lies in the $x y$ plane. This derivation resolves around writing $\mathbf { r } ( t ) = r ( t ) \hat { \mathbf { r } } ( \theta )$ where $\hat { \mathbf { r } } = \cos \theta \hat { \mathbf { x } } + \sin \theta \hat { \mathbf { y } }$, and solving a differential equation for $\mathbf { v } ( \theta )$.

(a) Show that $d \mathbf { v } / d \theta$ is proportional to $\hat { \mathbf { r } }$, times constants and conserved quantities.
(b) Integrate this result to find $\mathbf { v } ( \theta )$. What nice geometric property does it have?
(c) Plug this result into $\mathbf { L } = \mathbf { r } \times \mathbf { p }$ to show that $r ( \theta )$ is a conic section.

Solution. (a) Using the usual variables, we have

$$
\frac { d \mathbf { v } } { d t } = - \frac { G M } { r ^ { 2 } } \hat { \mathbf { r } } , \quad L = m r ^ { 2 } \frac { d \theta } { d t } .
$$

The desired quantity is

$$
\frac { d \mathbf { v } } { d \theta } = \frac { d \mathbf { v } } { d t } \frac { d t } { d \theta } = - \frac { G M m } { L } \hat { \mathbf { r } } .
$$

(b) Performing a straightforward integration, we find
$$
\mathbf { v } ( \theta ) = - \frac { G M m } { L } \left( \sin \theta + c _ { 1 } , - \cos \theta + c _ { 2 } \right)
$$
where $c _ { 1 }$ and $c _ { 2 }$ are constants of integration. The nice result is that $\mathbf { v } ( \theta )$ is a circle! That's the hidden reason why this derivation will be so quick.
(c) Carrying out the cross product, the magnitude of the angular momentum is
$$
L = - \frac { G M m ^ { 2 } r } { L } \left( ( \cos \theta ) \left( - \cos \theta + c _ { 2 } \right) - ( \sin \theta ) \left( \sin \theta + c _ { 1 } \right) \right) .
$$
We can easily solve this to get
$$
\frac { 1 } { r } = \frac { G M m ^ { 2 } } { L ^ { 2 } } \left( 1 + c _ { 1 } \sin \theta - c _ { 2 } \cos \theta \right) .
$$
This can be put into the standard form for a conic section by just shifting $\theta$ to get rid of the $\sin \theta$ term.

## 6 Fluids

[2] Problem 26 (BAUPC). Two cylindrical containers, A and B, have the same shape and contain equal volumes of water. In addition to the water, B contains an immersed balloon, attached to the bottom with a string. Consider the following reasoning.

The total upward force exerted by the bottom of container A is equal to the weight of the water in A, likewise for B. Since the areas of the bottoms are the same, and the weights of the water are the same, the pressures at the bottoms are the same.

Is this reasoning correct or incorrect? Explain your answer.
Solution. The reasoning is incorrect. As usual, the pressure depends only on the depth of the water, which is greater for container B. The net forces still balance: the greater upward force of the bottom on the water in container B is compensated for by the downward force of the balloon on the water.
[4] Problem 27. IPhO 1997, problem 3. A simple, neat question about how a plane works.


Remark
As you saw in the above problem, a plane works by having a wing angled so that air passing next to it gets pushed downward; momentum conservation then implies there is an upward force on the wing. Concretely, this upward force occurs because there is a higher pressure on the bottom of the wing, which by Bernoulli's principle means there must be a higher air velocity on the top of the wing.

This is all standard knowledge among engineers. However, in outdated or poor physics textbooks, an incorrect explanation is sometimes given. The story is that because the top side of the wing is curved, the air at the top of the wing must be moving faster, so that it can "catch up" to the air at the bottom. Then by Bernoulli's principle there is a higher pressure on the bottom of the wing, causing lift.

The second step of this argument is right, but the first step doesn't make sense: there is no reason air should want to "catch up" with the air it used to be next to. For example, airplanes can fly upside down as long as the wing is angled the right way. In this case, the air at the top of the wing still moves faster, but now it's the bottom side that's curved.

There's much more to say about flight, which is a whole field of study. For some nice further discussion, see section 4.6 of The Art of Insight, or this paper and this paper by the same author. And for a perspective from a cantankerous old aerodynamicist, see this talk.
[5] Problem 28. Physics Cup 2023, problem 1.
Solution. See the official solutions here.
