---
id: solution-ocr-kevin-zhou-m2sol-ex010
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex010]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 10
A chain is suspended from two points on the ceiling a distance $d$ apart. The chain has a uniform mass density $\lambda$, and cannot stretch. Find the shape of the chain.


Solution
First, we note that the horizontal component of the tension $T _ { x }$ is constant throughout the chain; this just follows from balancing horizontal forces on any piece of it. Moreover, by similar triangles, we have $T _ { y } = T _ { x } y ^ { \prime }$ everywhere.

Now consider a small segment of chain with horizontal projection $\Delta x$. The length of the piece is $\Delta x \sqrt { 1 + y ^ { \prime 2 } }$ which determines its weight, and this be balanced by the difference in vertical tensions. Thus

$$
\Delta T _ { y } = \lambda g \sqrt { 1 + y ^ { \prime 2 } } \Delta x .
$$

For infinitesimal $\Delta x$, we have $\Delta T _ { y } = T _ { x } d \left( y ^ { \prime } \right) = T _ { x } y ^ { \prime \prime } d x$, so we get the differential equation

$$
y ^ { \prime \prime } = \frac { \lambda g } { T _ { x } } \sqrt { 1 + y ^ { \prime 2 } } .
$$

Usually nonlinear differential equations with second derivatives are very hard to solve, but this one isn't because there is no direct dependence on $y$, just its derivatives. That means we can treat $y ^ { \prime }$ as the independent variable first, and the equation is effectively first order in $y ^ { \prime }$.

Writing $y ^ { \prime \prime } = d \left( y ^ { \prime } \right) / d x$ and separating, we have

$$
\int \frac { d y ^ { \prime } } { \sqrt { 1 + y ^ { \prime 2 } } } = \int \frac { \lambda g } { T _ { x } } d x
$$

Integrating both sides gives

$$
\sinh ^ { - 1 } \left( y ^ { \prime } \right) = \frac { \lambda g x } { T _ { x } } + C .
$$

Choosing $x = 0$ to be the lowest point of the chain, the constant $C$ is zero, and

$$
y ^ { \prime } = \sinh \left( \frac { \lambda g x } { T _ { x } } \right) .
$$

Integrating both sides again gives the solution for $y$,

$$
y = \frac { T _ { x } } { \lambda g } \cosh \left( \frac { \lambda g x } { T _ { x } } \right)
$$

where we suppressed another constant of integration. This curve is called a catenary.
[1] Problem 27. To check that you understand the previous example, repeat it for a suspension bridge. In this case the cable is attached by vertical suspenders to a horizontal deck with mass $\lambda$ per unit length, and supports the weight of the deck. Assume the cable and suspenders have negligible mass.

Solution. By the same logic as in the example, we have

$$
y ^ { \prime \prime } = \frac { \lambda g } { T _ { x } }
$$

where there is now no factor of $\sqrt { 1 + y ^ { \prime 2 } }$. Integrating this twice gives

$$
y = \frac { \lambda g } { T _ { x } } \frac { x ^ { 2 } } { 2 }
$$


which is a parabola. One result of this analysis is that the required height of the bridge scales as the square of its horizontal span, which is why very long suspension bridges are broken into multiple spans. According to Feynman, engineers were able to watch the shape of the cables of the George Washington bridge turn from a catenary into a parabola as the deck was installed.

By the way, essentially the same calculation can be used to determine the shape of an ideal suspended arch bridge. The main difference is that the arch, being a solid structure, can transmit internal torques (i.e. bending moments, as discussed below) which can result in more general shapes. But in a well-designed arch bridge this internal torque should be negligible, so the analysis is almost identical to the suspended cable bridge, but with an extra minus sign since arches are in compression rather than tension. The shape is an inverted parabola.
