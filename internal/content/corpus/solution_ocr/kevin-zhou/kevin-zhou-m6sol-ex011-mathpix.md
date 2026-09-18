---
id: solution-ocr-kevin-zhou-m6sol-ex011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-ex011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 11
A projectile is dropped from height $h$ at the equator. Let the Earth be spherical with angular velocity $\omega$, and let the local gravitational acceleration be $g$. Counting only the Coriolis force, which direction is it deflected when it hits the ground, and by about how far?

Solution
The earth rotates from west to east, so the angular velocity points from the south pole to the north pole. The velocity of the falling ball points radially inward, so the Coriolis force points east. We naturally assume the height $h$ is much less than the radius of the Earth, so the inward gravitational acceleration is constant. The Coriolis acceleration is thus

$$
a _ { c } = 2 \omega v = 2 \omega g t
$$

in the eastward direction, and integrating this twice gives a deflection

$$
d ( t ) = \frac { 1 } { 3 } \omega g t ^ { 3 } .
$$

The projectile hits the ground at $t = \sqrt { 2 h / g }$, giving a final eastward deflection of

$$
d = \frac { \omega } { 3 } \sqrt { \frac { ( 2 h ) ^ { 3 } } { g } } .
$$

This is the right answer to first order in $\omega$. For a neat geometric method that arrives at the same result, see the solutions to NBPhO 2016, problem 9.

Remark
It's quite subtle to get a more accurate answer to the above problem, because a slew of other effects appear at higher order, including the centrifugal force (which affects both the mass's trajectory, and causes the Earth's shape to bulge out at the equator), and the variation in $g$ with height. If you want to explore this in detail, see problems 10.12 and 10.13 of Morin.


Incidentally, one of the earliest tests of Newtonian gravity was measurements of the Earth's shape. In the 1730s, the French sent surveyors to modern Finland and Ecuador to measure the curvature of the Earth by triangulation. These were some of the most expensive scientific expeditions that had ever been performed. Upon their success, Voltaire said: "You have confirmed in these tedious places what Newton found out without leaving his room."
