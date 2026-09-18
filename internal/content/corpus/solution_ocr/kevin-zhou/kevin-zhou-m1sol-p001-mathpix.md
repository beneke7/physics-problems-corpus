---
id: solution-ocr-kevin-zhou-m1sol-p001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-p001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 1. Let's investigate some features of this solution.
    (a) By using results from P1, verify that $v ( t )$ makes sense for both small times and large times.
    (b) If the projectile is then caught at the launch point, did it spend more time going up or down?
    (c) Without calculating, think for a moment and guess: is the total time longer or shorter than for a projectile without drag?

Solution. (a) For small times $( \alpha t \ll 1 )$, we have

$$
v ( t ) \approx ( 1 - \alpha t ) v _ { 0 } + \frac { g } { \alpha } ( - \alpha t ) = v _ { 0 } - \left( g + \alpha v _ { 0 } \right) t
$$


which makes sense, since it's just the result of uniform acceleration $g + \alpha v _ { 0 }$, under the initial net force. For large times $( \alpha t \gg 1 )$, the exponentials decay away and we get $v ( t ) \approx - g / \alpha$, which is the terminal velocity.
(b) For a fixed height, consider how fast the projectile is moving when it passes that point going up or down. Since the gravitational potential energy is the same, and the drag force does only negative work, it must be going slower on the way down. Since it's going slower at every point going down, the trip down has to take longer.
(c) It's not obvious, since the drag force makes the projectile turn around faster, but then slows it on the way down. It turns out that the total time is always shorter with linear drag.
In fact, this is quite difficult to guess, as the case of linear drag is precisely on the boundary between two possible answers. That is, if the drag force is proportional to $| v | ^ { n }$, then it turns out that the trajectory with drag always takes less time for $n \geq 1$, but for $n < 1$ it depends on the initial speed. (This makes intuitive sense, as when $n$ is high, the drag force rises quickly with speed. The speed will tend to be higher on the way up than the way down, so the effect of the drag force is more important on the upward part, where it points down.) You can find proofs of all these statements here.
