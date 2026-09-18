---
id: solution-ocr-kevin-zhou-p1sol-ex016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 16
Suppose a planet instantly stopped, at a distance $r _ { 0 }$ from a star of mass $M$. Write the time it would take the planet to collide with the star, as a single integral.

Solution
If the planet has mass $m$, then conservation of energy gives

$$
\frac { 1 } { 2 } m v ^ { 2 } - \frac { G M m } { r } = - \frac { G M m } { r _ { 0 } }
$$

so that its radial velocity is

$$
\frac { d r } { d t } = - \sqrt { 2 G M \left( \frac { 1 } { r } - \frac { 1 } { r _ { 0 } } \right) } .
$$

We can write the time taken to collide as

$$
T = \int d t = \int _ { r _ { 0 } } ^ { 0 } d r \frac { d t } { d r } = \frac { 1 } { \sqrt { 2 G M } } \int _ { 0 } ^ { r _ { 0 } } \frac { d r } { \sqrt { 1 / r - 1 / r _ { 0 } } } .
$$

It's good practice to write the integral in dimensionless form, so that the dependence of the answer on the dimensionful quantities is manifest. To do this, substitute $x = r / r _ { 0 }$ to get

$$
T = \sqrt { \frac { r _ { 0 } ^ { 3 } } { 2 G M } } \int _ { 0 } ^ { 1 } \sqrt { \frac { x } { 1 - x } } d x
$$


This lets us read off $T ^ { 2 } \propto r _ { 0 } ^ { 3 }$, in accordance with Kepler's third law, and required by dimensional analysis as shown in problem 2. In case you're wondering, the value of the remaining integral is $\pi / 2$, as can be shown by substituting $x = \sin ^ { 2 } \theta$.
[2] Problem 30 (Kalda). The deceleration of a boat in water due to drag is given by a function $a ( v )$. Given an initial velocity $v _ { 0 }$, write the total distance the boat travels as a single integral.
Solution. We have
$$
\int d x = \int d v \frac { d x } { d v } = \int d v \frac { d x } { d t } \frac { d t } { d v } = - \int \frac { v d v } { a ( v ) }
$$
which is a single integral in terms of the function $a ( v )$, as desired. Putting the bounds in,
$$
\Delta x = - \int _ { v _ { 0 } } ^ { 0 } \frac { v d v } { a ( v ) } = \int _ { 0 } ^ { v _ { 0 } } \frac { v d v } { a ( v ) } .
$$
