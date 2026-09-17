---
id: kevin-zhou-p1-p036
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p036
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[3] Problem 36. [A] Estimating some integrals with sharp peaks. For all cases, you only need to find
an estimate for the leading contribution in the limit ϵ → 0, and you can drop numeric prefactors.
(a) To warm up, find a rough estimate for
I1 =
Z ∞
0
dx
(ϵ + x)2 (1 + x)
.
(b) Find a rough estimate for
I2 =
Z ∞
0
dx
√
ϵ + x(1 + x)
.
(c) Find a rough estimate for
I3 =
Z ∞
0
dx
(ϵ + x)(1 + x)
.
Solution. (a) There’s a sharp peak near x = 0, of width ϵ and height 1/ϵ2, so we estimate
I1 ∼ 1/ϵ.
(b) There’s a sharp peak near x = 0, of width ϵ and height 1/
√
ϵ, so the peak contributes ∼
√
ϵ.
But wait! That’s actually a small quantity in the limit ϵ → 0. In this case, the peak
simply isn’t very high, and the dominant contribution actually comes from the rest of the
integral. A very rough estimate can be found by neglecting the smaller part of each term in
the denominator in each part of the integration range,
I2 ∼
Z ϵ
0
dx
√
ϵ
+
Z 1
ϵ
dx
√
x
+
Z ∞
1
dx
x3/2
= O(
√
ϵ) + O(1) + O(1) = O(1).
That is, the integral is an order-one number, independent of ϵ.
(c) This is in between the previous two cases, so let’s apply a similar rough approximation,
I3 ∼
Z ϵ
0
dx
ϵ
+
Z 1
ϵ
dx
x
+
Z ∞
1
dx
x2
= O(1) + O(log(1/ϵ)) + O(1) = O(log(1/ϵ)).
That is, the integral is only logarithmically divergent in ϵ, and most of the contribution comes
from the region away from the peak but before the falloff at infinity, ϵ ≪ x ≪ 1. This kind of
behavior is more common than you might think, especially in more advanced physics.
Of course, if you’re not sure about any of these steps, you can explicitly split the integration
range up (e.g. into 0 < x < δ1, δ1 < x < δ2, and x > δ2, with ϵ ≲ δ1 ≪ δ2 ≲ 1) and
approximate within each region, to get the same result.
Remark
In Olympiad physics, you need to understand how to set up integrals, but you almost
never have to perform a nontrivial integral. There will almost always be a way to solve the
problem without doing explicit integration at all, or an approximation you can do to render
the integral trivial, or the integral will be given to you in the problem statement. This
is because physics competitions are generally written to make students think hard about
physical systems, and the integrals are just viewed as baggage.
47
Kevin Zhou Physics Olympiad Handouts
Even introductory calculus has harder integrals than Olympiad physics. For example, consider
Z
secxdx = log|secx + tanx| + C.
When I first saw this, I was shocked by how the trick for doing this integral came out of
nowhere; it seemed much harder than anything else in the class. And it is! Historically,
it arose in 1569 from Mercator’s projection, where it gives the vertical distance on the
map from the equator to a given latitude. For decades, cartographers simply looked up
the numeric value of the integral in tables, where the Riemann sums had been done by
hand. (They had no chance of solving it analytically anyway, since Napier only invented
logarithms in 1614.) Gradually, tabulated values of the logarithms of trigonometric functions
became available, and in 1645, Bond conjectured the correct result by noticing the close
agreement of tabulated values of each side of the equation. Finally, Gregory proved the
result in 1668, using what Halley called “a long train of Consequences and Complications of
Proportions.” So it took almost a hundred years for this integral to be solved! (Though to
their credit, they had the handicap of not knowing about differentiation or the fundamental
theorem of calculus; they were finding the area under the curve with just Euclidean geometry.)
Even though Olympiad physics tries to avoid tough integrals, doing more advanced physics
tends to produce them, so physicists often get quite good at integration. By contrast,
Spivak’s calculus textbook for math majors only covers integration techniques in a single
chapter towards the end of the book. He justifies the inclusion of this material by saying:
Every once in a while you might actually need to evaluate an integral [...] For
example, you might take a physics course [...] Even if you intend to forget how to
integrate (and you probably will forget some details the first time through), you
must never forget the basic methods.
That attitude is why physics students frequently win the MIT Integration Bee.
48
