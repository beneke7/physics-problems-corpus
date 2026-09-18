---
id: solution-ocr-kevin-zhou-m6sol-p018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m6-p018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 18. A cylindrical space station of radius $R$ can create artificial gravity by rotating with angular velocity $\omega$ about its axis.

(a) For an observer rotating along with the spaceship on the rim, what gravitational acceleration $g$ do they perceive?
(b) The observer throws a ball parallel to the floor. For some launch speed $v$, the observer will see the ball perform a circular orbit along the spaceship, always parallel to the floor. Find $v$.
(c) What does the motion of part (b) look like, in a frame that isn't rotating with the ship?

Solution. (a) They perceive the centrifugal acceleration, $g = \omega ^ { 2 } R$.

(b) The Coriolis force points upward, so the acceleration upward is
$$
a = 2 \omega v - \omega ^ { 2 } R .
$$
For the ball to perform a circular orbit, it needs to have a centripetal acceleration of $a = v ^ { 2 } / R$. Equating these expressions for $a$ gives $( v - \omega R ) ^ { 2 } = 0$, implying
$$
v = \omega R .
$$
(c) This is an example of a case where working in an inertial frame is easiest. In an inertial frame, the ball just hovers in place (since there isn't any gravity), while the space station's floor rotates with speed $v$ right under it.
