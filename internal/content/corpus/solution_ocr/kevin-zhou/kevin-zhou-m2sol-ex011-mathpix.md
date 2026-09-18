---
id: solution-ocr-kevin-zhou-m2sol-ex011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 11
A uniform spring of spring constant $k$, mass $m$, and relaxed length $L$ is hung from the ceiling. Find its length in equilibrium, as well as its center of mass.

Solution
Problems like this contain subtleties in notation. For example, if you talk about "the piece of the slinky at $z ^ { \prime \prime }$, this could either mean the piece that's actually at this position in equilibrium, or the piece that was originally at this place in the absence of gravity. Talking about it the first way automatically tells you where the piece is now, but talking about it the second way makes it easier to keep track of, because then the $z$ of a specific piece of the spring stays the same no matter where it goes.

In fluid dynamics, these are known as the Eulerian and Lagrangian approaches, respectively. If you don't use one consistently, you'll get nonsensical results, and it's easy to mix them up.

There are many ways to solve this problem, but I'll give one that reliably works for me. We're going to use the Lagrangian approach, and avoid confusion with the Eulerian approach by breaking the spring into discrete pieces. Let the spring consist of $N \gg 1$ pieces, of masses $m / N$, spring constants $N k$, and relaxed lengths $L / N$. Our expressions are going to contain sums, which we'll replace with integrals using the method described in P1.

The $i ^ { \text {th } }$ spring from the bottom has tension $( i / N ) m g$, and thus is stretched by

$$
\Delta L _ { i } = \frac { 1 } { k N } \frac { i } { N } m g = \frac { m g } { k N ^ { 2 } } i .
$$

The total stretch is

$$
\sum _ { i = 1 } ^ { N } \Delta L _ { i } = \frac { m g } { k N ^ { 2 } } \int _ { 0 } ^ { N } i d i = \frac { m g } { 2 k }
$$

This makes sense, since the average tension is $m g / 2$. To find the center of mass, note that the $j ^ { \text {th } }$ spring is displaced downward by a distance

$$
\Delta y _ { j } = \sum _ { i = j } ^ { N } \Delta L _ { i } = \frac { m g } { 2 k } \left( 1 - \frac { j ^ { 2 } } { N ^ { 2 } } \right)
$$


downward from its position in the absence of gravity. The center of mass displacement is
$$
\Delta y _ { \mathrm { cm } } = \frac { 1 } { N } \sum _ { j = 1 } ^ { N } \Delta y _ { j } \propto \frac { 1 } { N } \sum _ { j = 1 } ^ { N } \left( 1 - \frac { j ^ { 2 } } { N ^ { 2 } } \right) = \frac { 1 } { N ^ { 3 } } \int _ { 0 } ^ { N } N ^ { 2 } - j ^ { 2 } d j = \frac { 2 } { 3 }
$$
so restoring the proportionality constant gives
$$
\Delta y _ { \mathrm { cm } } = \frac { m g } { 3 k } .
$$
If you want to test your understanding of slinkies, you can also try doing this problem with the Eulerian approach. This would be best done without discretization. The first steps would be finding a relation between the density $\rho ( z )$ and tension $T ( z )$ from Hooke's law, and finding out how to write down local force balance as a differential equation.

[4] Problem 28 (MPPP). A slinky is a uniform spring with negligible relaxed length, with mass $m$ and spring constant $k$.


(a) Find the shape of a slinky hung from two points on the ceiling separated by distance $d$. (Hint: to begin, consider the mass and tension of a small piece of the spring with horizontal and vertical extent $d x$ and $d y$. Don't forget that the slinky's density won't be uniform.)
(b) Suppose a slinky's two ends are fixed, separated by distance $d$, and rotating uniformly with angular frequency $\omega$ like a jump rope in zero gravity. Find the values of $\omega$ for which this motion is possible, and the shape of the slinky in this case.

Solution. (a) Consider a small piece of the spring with mass $d m$, and horizontal and vertical extent $d x$ and $d y$. This piece of the spring has spring constant $k m / d m$, which means

$$
T _ { x } = k m \frac { d x } { d m } , \quad T _ { y } = \frac { d y } { d x } T _ { x } .
$$

By horizontal force balance, $T _ { x }$ is a constant, which means $d x / d m$ is a constant; the same amount of mass is contained within each horizontal interval. Thus

$$
\frac { d x } { d m } = \frac { d } { m } .
$$

Balancing vertical forces on this segment gives

$$
d T _ { y } = y ^ { \prime \prime } T _ { x } d x = g d m
$$

and combining this with the previous result gives

$$
y ^ { \prime \prime } = \frac { m g } { k d ^ { 2 } } .
$$

We thus conclude that the shape is a parabola. Centering it at $x = 0$, we have

$$
y = \frac { m g x ^ { 2 } } { 2 k d ^ { 2 } } .
$$

In particular, the lowest point of the parabola is a distance $y ( d / 2 ) - y ( 0 ) = m g / 8 k$ below the supports. (This solution is very similar to that of the example; the only difference is that the weight of the segment is proportional to $d x$ instead of $\sqrt { 1 + y ^ { \prime 2 } } d x$. This is because the slinky's mass per length is not constant, while the chain's was.)


(b) The only difference with respect to part (a) is that now we have a radial "gravity" force of $g _ { \text {eff } } = - \omega ^ { 2 } y$, because of the centrifugal acceleration in the frame rotating with the slinky. Therefore,
$$
y ^ { \prime \prime } = - \frac { m \omega ^ { 2 } } { k d ^ { 2 } } y
$$
The solution is a sinusoid. For concreteness, let's suppose one endpoint is at $x = 0$, imposing $y ( 0 ) = 0$. Then
$$
y ( x ) = y _ { 0 } \sin \left( \sqrt { \frac { m } { k } } \frac { \omega } { d } x \right) .
$$
For the other endpoint to be fixed, $y ( d ) = 0$, we must have
$$
\sqrt { \frac { m } { k } } \omega = n \pi
$$
for some integer $n \geq 1$. If $\omega$ satisfies this condition, then the slinky can rotate with uniform angular velocity, and its shape is a sinusoid. The value of $y _ { 0 }$ is arbitrary.
Another way to say this is that the solutions we have found here are standing waves. The valid values of $\omega$, given the spring parameters, are just the standing wave frequencies. The fact that $\omega$ doesn't depend on $d$ follows from dimensional analysis, and reflects the fact that stretching the string further increases the tension and decreases the density, therefore increasing the wave speed. These two effects cancel, keeping the standing wave frequencies the same.

Note that so far we've considered three cases: a hanging rope (in the example), a hanging slinky, and a rotating slinky. So what about a rotating rope? Unfortunately, the differential equation describing it is $y ^ { \prime \prime } \propto y \sqrt { 1 + y ^ { \prime 2 } }$, since the centrifugal acceleration is proportional to $y$. And unlike the example, this is a genuine nonlinear second order differential equation. Mathematica reports that the solution is not an elementary function, but rather an inverse elliptic integral. Unfortunately, that's just what happens most of the time.

## 6 The Principle of Virtual Work

Let's motivate this section with a simple question: why use torque at all? In principle, everything in Newtonian mechanics can be derived by considering forces alone, so torques shouldn't even be necessary. This is illustrated with the following example.
