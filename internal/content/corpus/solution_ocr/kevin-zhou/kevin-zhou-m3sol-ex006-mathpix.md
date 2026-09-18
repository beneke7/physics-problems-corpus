---
id: solution-ocr-kevin-zhou-m3sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m3-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 6
Two masses are constrained to a line. The mass $m _ { 1 }$ moves with velocity $v _ { 1 }$, and the mass $m _ { 2 }$ moves with velocity $v _ { 2 }$. The masses collide perfectly elastically. Find their speeds afterward.

Solution
The usual method is to directly invoke conservation of energy and momentum, which leads to a quadratic equation. A slicker method is to work in the center of mass frame instead. (This is useful for collision problems in general, and it'll become even more useful for the relativistic collisions covered in R2.)


The center of mass of the system has speed

$$
v _ { \mathrm { CM } } = \frac { m _ { 1 } v _ { 1 } + m _ { 2 } v _ { 2 } } { m _ { 1 } + m _ { 2 } } .
$$

Moreover, by momentum conservation, the center of mass never accelerates. Now we boost into the frame moving with the center of mass. Since the total momentum is by definition zero in the center of mass frame, the momenta of the particles cancel out. The only way for this to remain true after the collision is if we multiply their velocities by the same number. Energy is only conserved if this number is ±1, with the latter representing no collision at all.

Therefore, during an elastic collision, the velocities in the center of mass frame simply reverse. (In the mid-1600s, Huygens started with this reasonable assumption and used it to derive momentum and energy conservation!) Quantitatively, the initial velocities in that frame are

$$
v _ { 1 , \mathrm { CM } } = v _ { 1 } - v _ { \mathrm { CM } } , \quad v _ { 2 , \mathrm { CM } } = v _ { 2 } - v _ { \mathrm { CM } } .
$$

The final velocities in that frame are

$$
v _ { 1 , \mathrm { CM } } ^ { \prime } = - v _ { 1 } + v _ { \mathrm { CM } } , \quad v _ { 2 , \mathrm { CM } } ^ { \prime } = - v _ { 2 } + v _ { \mathrm { CM } } .
$$

Finally, going back to the original frame gives the final velocities

$$
v _ { 1 } ^ { \prime } = - v _ { 1 } + 2 v _ { \mathrm { CM } } , \quad v _ { 2 } ^ { \prime } = - v _ { 2 } + 2 v _ { \mathrm { CM } } .
$$

There are many special cases we can check. For example, if $m _ { 1 } = m _ { 2 }$, then the two masses simply swap their velocities, as if they just passed through each other. As another check, consider the case where the second mass is initially at rest, $v _ { 2 } = 0$. Then

$$
v _ { 1 } ^ { \prime } = v _ { 1 } \frac { m _ { 1 } - m _ { 2 } } { m _ { 1 } + m _ { 2 } } , \quad v _ { 2 } ^ { \prime } = v _ { 1 } \frac { 2 m _ { 1 } } { m _ { 1 } + m _ { 2 } } .
$$

When $m _ { 1 } = m _ { 2 }$, the first mass gives all its velocity to the second. When $m _ { 2 }$ is large, the first mass just rebounds off with velocity $- v _ { 1 }$. When $m _ { 1 }$ is large, the first mass keeps on going and the second mass picks up velocity $2 v _ { 1 }$. Finally, when $m _ { 1 } = m _ { 2 } / 3$, then the final speeds are $v _ { 1 } ^ { \prime } = - v _ { 1 } / 2$ and $v _ { 2 } ^ { \prime } = v _ { 1 } / 2$, a nice result which is worth committing to memory.

Idea 6
The kinetic energy of a set of masses $m _ { i }$ with total mass $M$ can be decomposed as

$$
\sum _ { i } \frac { 1 } { 2 } m _ { i } v _ { i } ^ { 2 } = \frac { 1 } { 2 } M v _ { \mathrm { CM } } ^ { 2 } + \sum _ { i } \frac { 1 } { 2 } m _ { i } \left( v _ { i } - v _ { \mathrm { CM } } \right) ^ { 2 }
$$

where the first term is the "center of mass" contribution, and the second term is the amount of kinetic energy in the center of mass frame. (This statement also holds for multidimensional collisions, if the squares are replaced with squared vector magnitudes.) The first term can be rewritten as $P ^ { 2 } / 2 M$ where $P$ is the total momentum of the masses. Therefore, the kinetic energy of a system of masses with fixed total momentum is minimized when the second term


is zero, i.e. when all the masses are traveling with the same velocity. This implies, for instance, that a totally inelastic collision dissipates the highest possible amount of kinetic energy.
