---
id: solution-ocr-kevin-zhou-p1sol-ex018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 18
Calculate the moment of inertia of the circle above, about the $y$ axis, if it has total mass $M$ and uniform density.

Solution
The moment of inertia of a small piece of the circle is

$$
d I = x ^ { 2 } d m = x ^ { 2 } \sigma d A = \frac { x ^ { 2 } M } { \pi R ^ { 2 } } d A
$$

where $x ^ { 2 }$ appears because $x$ is the distance to the rotation axis, and $\sigma$ is the mass density per unit area. Using Cartesian coordinates, we have

$$
I = \frac { M } { \pi R ^ { 2 } } \int _ { - R } ^ { R } d x \int _ { - \sqrt { R ^ { 2 } - x ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - x ^ { 2 } } } x ^ { 2 } d y
$$

The inner integral is still trivial; the $x ^ { 2 }$ doesn't change anything, because from the perspective of the $d y$ integral, $x$ is just some constant. However, the remaining integral becomes a bit nasty. In general, when this happens, we can try flipping the order of integration, giving

$$
I = \frac { M } { \pi R ^ { 2 } } \int _ { - R } ^ { R } d y \int _ { - \sqrt { R ^ { 2 } - y ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - y ^ { 2 } } } x ^ { 2 } d x
$$

Unfortunately, this is equally difficult. Both of these integrals can be done with trigonometric substitutions, as you'll check below, but there's also a clever symmetry argument.

Notice that $I$ is also equal to the moment of inertia about the $x$ axis, by symmetry. So if we add them together, we get

$$
2 I = \int x ^ { 2 } + y ^ { 2 } d m = \int r ^ { 2 } d m
$$


The $r ^ { 2 }$ factor has no dependence on $\theta$ at all, so the angular integral in polar coordinates is trivial. We end up with

$$
2 I = \frac { M } { \pi R ^ { 2 } } \int _ { 0 } ^ { R } 2 \pi r r ^ { 2 } d r = \frac { 1 } { 2 } M R ^ { 2 }
$$

which gives an answer of $I = M R ^ { 2 } / 4$, as expected.
[2] Problem 32. Calculate $I$ in the previous example by explicitly performing either Cartesian integral.
Solution. Starting from the second expression in the example,

$$
I = \frac { M } { \pi R ^ { 2 } } \int _ { - R } ^ { R } d y \int _ { - \sqrt { R ^ { 2 } - y ^ { 2 } } } ^ { \sqrt { R ^ { 2 } - y ^ { 2 } } } x ^ { 2 } d x = \frac { M } { 3 \pi R ^ { 2 } } \int _ { - R } ^ { R } 2 \left( R ^ { 2 } - y ^ { 2 } \right) ^ { 3 / 2 } d y .
$$

Let $y = R \sin \theta$. Then we have

$$
I = \frac { 2 M R ^ { 2 } } { 3 \pi } \int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \theta d \theta
$$

This integral can be done by repeatedly using the double angle formula,

$$
\int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \theta d \theta = \int _ { - \pi / 2 } ^ { \pi / 2 } \left( \frac { 1 + \cos ( 2 \theta ) } { 2 } \right) ^ { 2 } d \theta = \int _ { - \pi / 2 } ^ { \pi / 2 } \left( \frac { 1 } { 4 } + \frac { 1 } { 2 } \cos ( 2 \theta ) + \frac { 1 } { 8 } + \frac { 1 } { 8 } \cos ( 4 \theta ) \right) d \theta = \frac { 3 \pi } { 8 } .
$$

Personally, I can never remember all the trigonometric formulas, and I usually just expand everything in complex exponentials. Here that method gives a slick solution, as

$$
\int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \theta d \theta = \frac { 1 } { 16 } \int _ { - \pi / 2 } ^ { \pi / 2 } \left( e ^ { i \theta } + e ^ { - i \theta } \right) ^ { 4 } d \theta
$$

Now note that expanding with the binomial theorem gives terms of the form $e ^ { 2 i n \theta }$ for integers $n$, which integrate to zero unless $n = 0$. So the only term that matters gives

$$
\int _ { - \pi / 2 } ^ { \pi / 2 } \cos ^ { 4 } \theta d \theta = \frac { 1 } { 16 } \int _ { - \pi / 2 } ^ { \pi / 2 } \binom { 4 } { 2 } d \theta = \frac { 3 \pi } { 8 } .
$$

Whichever method you used, we conclude the answer is $I = M R ^ { 2 } / 4$, as expected.
