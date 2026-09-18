---
id: solution-ocr-kevin-zhou-m3sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m3-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 7
Three balls of mass $M$ are initially at rest. Then an explosion occurs, giving the system a fixed total kinetic energy. What is the maximum possible fraction of this energy that one ball can carry by itself?

Solution
Suppose we want to maximize the energy of the first ball, and let $p _ { 0 }$ be the magnitude of its final momentum. Since the total momentum is zero, the other two balls also have a total momentum of magnitude $p _ { 0 }$. As shown in the above idea, the energy of those two balls is minimized if they travel at the same speed. Therefore, the optimal scenario is to have the first ball come out with speed $v _ { 0 }$ and have both of the other two come out the other direction with equal speed $v _ { 0 } / 2$. Then the first ball has 2/3 of the total energy.

This is the simplest possible "optimal collision" problem; we'll see more in R2. Many can be solved with the basic idea that some of the outgoing masses should have the same velocity.
[1] Problem 18 (Morin 5.23). A tennis ball with mass $m _ { 2 }$ sits on top of a basketball with a mass $m _ { 1 } \gg m _ { 2 }$. The bottom of the basketball is a height $h$ above the ground. When the balls are dropped, how high does the tennis ball bounce?

Solution. Right after the basketball hits the ground, it has velocity $v = \sqrt { 2 g h }$ upwards, and the tennis ball has velocity $v$ downwards. In an elastic collision the relative velocity is reversed, and the basketball's velocity barely changes because it's heavy, so the final velocity of the tennis ball after the collision must be $3 v$ upward. This multiplies its energy by 9, so it bounces to a height $9 h$.
[3] Problem 19 (PPP 46). A Newton's cradle consists of three suspended steel balls of masses $m _ { 1 }$, $m _ { 2 }$, and $m _ { 3 }$ arranged in that order with their centers in a horizontal line. The ball of mass $m _ { 1 }$ is drawn aside in their common plane until its center has been raised by $h$ and is then released. If all collisions are elastic, how should $m _ { 2 }$ be chosen so that the ball of mass $m _ { 3 }$ rises to the greatest possible height, and what is this height? (Neglect all but the first two collisions.)

Solution. The ball of mass $m _ { 1 }$ has speed $v = \sqrt { 2 g h }$ once it hits the ball of mass $m _ { 2 }$. By applying the result of example 6 twice, the speed of mass $m _ { 3 }$ after the first two collisions is

$$
v ^ { \prime } = \frac { 2 m _ { 1 } } { m _ { 1 } + m _ { 2 } } \frac { 2 m _ { 2 } } { m _ { 2 } + m _ { 3 } } v
$$

which means the final height is

$$
h ^ { \prime } = \left( \frac { 4 m _ { 1 } m _ { 2 } } { \left( m _ { 1 } + m _ { 2 } \right) \left( m _ { 2 } + m _ { 3 } \right) } \right) ^ { 2 } h .
$$

By some basic calculus, this is maximized when

$$
m _ { 2 } = \sqrt { m _ { 1 } m _ { 3 } }
$$


in which case
$$
h ^ { \prime } = \left( \frac { 2 } { 1 + \sqrt { m _ { 3 } / m _ { 1 } } } \right) ^ { 4 } h .
$$
For a wide range of $m _ { 3 } / m _ { 1 }$, this is pretty close to perfect efficiency. (Transferring 100\% of the energy would yield $h ^ { \prime } = \left( m _ { 1 } / m _ { 3 } \right) h$.)
