---
id: solution-ocr-kevin-zhou-p1sol-p036
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p036]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 36. [A] Estimating some integrals with sharp peaks. For all cases, you only need to find an estimate for the leading contribution in the limit $\epsilon \rightarrow 0$, and you can drop numeric prefactors.
    (a) To warm up, find a rough estimate for
$$
I _ { 1 } = \int _ { 0 } ^ { \infty } \frac { d x } { ( \epsilon + x ) ^ { 2 } ( 1 + x ) }
$$
    (b) Find a rough estimate for
$$
I _ { 2 } = \int _ { 0 } ^ { \infty } \frac { d x } { \sqrt { \epsilon + x } ( 1 + x ) }
$$
    (c) Find a rough estimate for
$$
I _ { 3 } = \int _ { 0 } ^ { \infty } \frac { d x } { ( \epsilon + x ) ( 1 + x ) }
$$

Solution. (a) There's a sharp peak near $x = 0$, of width $\epsilon$ and height $1 / \epsilon ^ { 2 }$, so we estimate $I _ { 1 } \sim 1 / \epsilon$.


(b) There's a sharp peak near $x = 0$, of width $\epsilon$ and height $1 / \sqrt { \epsilon }$, so the peak contributes $\sim \sqrt { \epsilon }$. But wait! That's actually a small quantity in the limit $\epsilon \rightarrow 0$. In this case, the peak simply isn't very high, and the dominant contribution actually comes from the rest of the integral. A very rough estimate can be found by neglecting the smaller part of each term in the denominator in each part of the integration range,
$$
I _ { 2 } \sim \int _ { 0 } ^ { \epsilon } \frac { d x } { \sqrt { \epsilon } } + \int _ { \epsilon } ^ { 1 } \frac { d x } { \sqrt { x } } + \int _ { 1 } ^ { \infty } \frac { d x } { x ^ { 3 / 2 } } = \mathcal { O } ( \sqrt { \epsilon } ) + \mathcal { O } ( 1 ) + \mathcal { O } ( 1 ) = \mathcal { O } ( 1 )
$$
That is, the integral is an order-one number, independent of $\epsilon$.
(c) This is in between the previous two cases, so let's apply a similar rough approximation,
$$
I _ { 3 } \sim \int _ { 0 } ^ { \epsilon } \frac { d x } { \epsilon } + \int _ { \epsilon } ^ { 1 } \frac { d x } { x } + \int _ { 1 } ^ { \infty } \frac { d x } { x ^ { 2 } } = \mathcal { O } ( 1 ) + \mathcal { O } ( \log ( 1 / \epsilon ) ) + \mathcal { O } ( 1 ) = \mathcal { O } ( \log ( 1 / \epsilon ) )
$$
That is, the integral is only logarithmically divergent in $\epsilon$, and most of the contribution comes from the region away from the peak but before the falloff at infinity, $\epsilon \ll x \ll 1$. This kind of behavior is more common than you might think, especially in more advanced physics.
Of course, if you're not sure about any of these steps, you can explicitly split the integration range up (e.g. into $0 < x < \delta _ { 1 } , \delta _ { 1 } < x < \delta _ { 2 }$, and $x > \delta _ { 2 }$, with $\epsilon \lesssim \delta _ { 1 } \ll \delta _ { 2 } \lesssim 1$ ) and approximate within each region, to get the same result.

Remark
In Olympiad physics, you need to understand how to set up integrals, but you almost never have to perform a nontrivial integral. There will almost always be a way to solve the problem without doing explicit integration at all, or an approximation you can do to render the integral trivial, or the integral will be given to you in the problem statement. This is because physics competitions are generally written to make students think hard about physical systems, and the integrals are just viewed as baggage.


Even introductory calculus has harder integrals than Olympiad physics. For example, consider

$$
\int \sec x d x = \log | \sec x + \tan x | + C
$$

When I first saw this, I was shocked by how the trick for doing this integral came out of nowhere; it seemed much harder than anything else in the class. And it is! Historically, it arose in 1569 from Mercator's projection, where it gives the vertical distance on the map from the equator to a given latitude. For decades, cartographers simply looked up the numeric value of the integral in tables, where the Riemann sums had been done by hand. (They had no chance of solving it analytically anyway, since Napier only invented logarithms in 1614.) Gradually, tabulated values of the logarithms of trigonometric functions became available, and in 1645, Bond conjectured the correct result by noticing the close agreement of tabulated values of each side of the equation. Finally, Gregory proved the result in 1668, using what Halley called "a long train of Consequences and Complications of Proportions." So it took almost a hundred years for this integral to be solved! (Though to their credit, they had the handicap of not knowing about differentiation or the fundamental theorem of calculus; they were finding the area under the curve with just Euclidean geometry.)

Even though Olympiad physics tries to avoid tough integrals, doing more advanced physics tends to produce them, so physicists often get quite good at integration. By contrast, Spivak's calculus textbook for math majors only covers integration techniques in a single chapter towards the end of the book. He justifies the inclusion of this material by saying:

> Every once in a while you might actually need to evaluate an integral [...] For example, you might take a physics course [...] Even if you intend to forget how to integrate (and you probably will forget some details the first time through), you must never forget the basic methods.

That attitude is why physics students frequently win the MIT Integration Bee.
