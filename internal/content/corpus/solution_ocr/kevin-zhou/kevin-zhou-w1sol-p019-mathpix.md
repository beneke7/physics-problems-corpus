---
id: solution-ocr-kevin-zhou-w1sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 19. Consider the triangular "plucked" shape of problem 2 again, but suppose that the string starts at rest, and its two outer corners are always held fixed.

(a) Sketch what happens after the string is released. What is the period of the motion?

(b) Confirm explicitly that the initial potential energy of the string is equal to the kinetic energy of the string when it is purely horizontal.
(c) What would prevent a real string from achieving this ideal motion? What will the string look like after a few oscillations?
(d) To further build your intuition, try to visualize what happens if the string begins with the "pluck" off-center. Also, consider what happens if the string starts horizontal and at rest, but it instantaneously receives an impulse at its center.

Solution. (a) The answer is shown in the early stages of this video. This generally shows how standing waves are produced. From an initial pluck, the reflections from the ends naturally create the oppositely-moving waves needed to form a standing wave. Since the wave becomes inverted after bouncing off the ends, it needs to travel a distance of $2 L$ before it reaches its original state, giving a period of $2 L / v = 2 L \sqrt { \mu / T }$.

(b) Let the string have a height $h$ initially, so that $y ( x , t ) = f ( x - v t ) + f ( x + v t )$ where $f ( x )$ a triangle of height $h / 2$ and base $L$. Since $f ( x )$ was in the form of $f ( x ) = x ( h / 2 ) / ( L / 2 ) = h x / L$, then $\dot { y } = h v / L$. When the string is straight, each waveform has its peak at the end with the other half reflected, so the velocity adds up to give a velocity of $2 h v / L$ at every point uniformly across the string, so $K = \frac { 1 } { 2 } ( \mu L ) ( 2 h v / L ) ^ { 2 }$. The potential energy can be found with $U / L = \frac { 1 } { 2 } T y ^ { \prime 2 } = \frac { 1 } { 2 } T ( 2 h / L ) ^ { 2 }$, which gives $U = 2 T h ^ { 2 } / L = 2 \mu v ^ { 2 } h ^ { 2 } / L = K$.
(c) Of course, the amplitude decreases over time. But also, sharp features in the string are damped faster, due to both energy losses in the bending string, and drag with the air. As a result, after a while, the initially sharp features get smoothed out. You can start to see this happen in the latter part of the video linked in part (a).
(d) You can check your answers here and here.
