---
id: solution-ocr-kevin-zhou-w1sol-p003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 3. A uniform rope of mass $m$ and length $L$ hangs from a ceiling.
    (a) Show that the time it takes for a transverse wave pulse to travel from the bottom of the rope to the top is approximately $2 \sqrt { L / g }$. Under what circumstances is this approximation good?
    (b) Does the pulse get longer or shorter as it travels?

Solution. (a) The velocity is

$$
v = \sqrt { T / \mu } = \sqrt { T L / m }
$$

and $T = x m g / L$ where $x$ is the distance from the bottom, so

$$
v = \sqrt { x g } .
$$

At the most naive level, a wave pulse just travels along the string with a varying velocity, and takes a total time

$$
t = \int _ { 0 } ^ { L } \frac { d t } { d x } d x = \int _ { 0 } ^ { L } \frac { d x } { v } = \frac { 1 } { \sqrt { g } } \int _ { 0 } ^ { L } \frac { d x } { \sqrt { x } } = 2 \sqrt { \frac { L } { g } } .
$$

This approximation makes sense as long as the wave pulse can't "see" that the velocity is actually changing, which means it works if the pulse has a length much smaller than the length of the rope itself. This idea is discussed further for the case of quantum matter waves in X1.


(b) Because the tension is higher at higher points on the rope, the top part of the pulse is always traveling a bit faster than the bottom. Thus, the pulse gets longer as it travels up.
