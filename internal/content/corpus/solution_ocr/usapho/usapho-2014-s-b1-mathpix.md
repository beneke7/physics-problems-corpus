---
id: solution-ocr-usapho-2014-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2014_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2014-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

A block of mass $M$ has a hole drilled through it so that a ball of mass $m$ can enter horizontally and then pass through the block and exit vertically upward. The ball and block are located on a frictionless surface; the block is originally at rest.
![](../../../figures/solution-ocr/d15d211f5f1ce7be353e3bd3.jpg)

a. Consider the scenario where the ball is traveling horizontally with a speed $v _ { 0 }$. The ball enters the block and is ejected out the top of the block. Assume there are no frictional losses as the ball passes through the block, and the ball rises to a height much higher than the dimensions of the block. The ball then returns to the level of the block, where it enters the top hole and then is ejected from the side hole. Determine the time $t$ for the ball to return to the position where the original collision occurs in terms of the mass ratio $\beta = M / m$, speed $v _ { 0 }$, and acceleration of free fall $g$.

## Solution

After the collision, the ball and block have the same horizontal velocity $v _ { 1 }$. Since the horizontal momentum is conserved,

$$
v _ { 1 } = \frac { m } { m + M } v _ { 0 } .
$$

Let $v _ { 2 }$ be the vertical component of the velocity of the ball immediately after the collision. Since there are no frictional losses, conservation of energy yields

$$
\frac { 1 } { 2 } m v _ { 0 } ^ { 2 } = \frac { 1 } { 2 } M v _ { 1 } ^ { 2 } + \frac { 1 } { 2 } m \left( v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 } \right) .
$$

Since the ball rises to a height much higher than the height of the block, the gravitational potential energy is negligible, so we have ignored it. This assumption also means we can ignore the duration of the collision itself in our calculations below.
Plugging in our result for $v _ { 1 }$,

$$
m v _ { 0 } ^ { 2 } - ( M + m ) \left( \frac { m } { m + M } \right) ^ { 2 } v _ { 0 } ^ { 2 } = m v _ { 2 } ^ { 2 } \Rightarrow v _ { 2 } = \sqrt { \frac { M } { m + M } } v _ { 0 } .
$$

The time spent by the ball in the air is

$$
t _ { 1 } = 2 v _ { 2 } / g .
$$


The distance traveled horizontally by the ball while it is in the air is

$$
x = v _ { 1 } t _ { 1 } = \frac { 2 v _ { 1 } v _ { 2 } } { g } = \frac { 2 v _ { 0 } ^ { 2 } } { g } \sqrt { \frac { m ^ { 2 } M } { ( m + M ) ^ { 3 } } } .
$$

The ball then falls back into the block and is ejected horizontally.
Since energy and momentum are conserved from before the first collision and after the second, the final horizontal velocity $v _ { 3 }$ of the ball is given by the result for a perfectly elastic collision,

$$
v _ { 3 } = v _ { 0 } \frac { m - M } { m + M }
$$

as can be derived from the conservation laws. Note that $v _ { 3 }$ is positive for $m > M$. Thus if $\beta \leq 1$, the time $t$ is infinite; the ball never returns to its starting position.
Assuming that $\beta > 1$, the ball must move a distance $x$ towards its original collision point, where we have neglected the time taken for the collisions themselves. Thus the time for the ball to return to its original position horizontally is

$$
t _ { 2 } = - \frac { x } { v _ { 3 } } = \frac { 2 v _ { 0 } } { g } \sqrt { \frac { m ^ { 2 } M } { ( M + m ) ( M - m ) ^ { 2 } } } .
$$

The total time since the first collision is

$$
t = t _ { 1 } + t _ { 2 } = \frac { 2 v _ { 0 } } { g } \sqrt { \frac { M } { m + M } } \left( \frac { M } { M - m } \right) = \frac { 2 v _ { 0 } } { g } \sqrt { \frac { \beta } { 1 + \beta } } \left( \frac { \beta } { \beta - 1 } \right)
$$

where $\beta > 1$.
b. Now consider friction. The ball has moment of inertia $I = \frac { 2 } { 5 } m r ^ { 2 }$ and is originally not rotating. When it enters the hole in the block it rubs against one surface so that when it is ejected upwards the ball is rolling without slipping. To what height does the ball rise above the block?

## Solution

As before, we have

$$
v _ { 1 } = \frac { m } { m + M } v _ { 0 } .
$$

Let $v _ { 4 }$ be the vertical velocity of the ball after the collision; it is less than $v _ { 2 }$ due to the friction force $f$. Friction slows the ball down with an impulse given by

$$
\Delta p = f \Delta t = m \left( v _ { 2 } - v _ { 4 } \right)
$$

while increasing the angular momentum by

$$
\Delta L = \tau \Delta t = r f \Delta t = r \Delta p .
$$


We also know that $\Delta L = I \omega = I v _ { 4 } / r$, so

$$
I v _ { 4 } / r = m r \left( v _ { 2 } - v _ { 4 } \right) \quad \Rightarrow \quad v _ { 4 } = \frac { v _ { 2 } } { 1 + 2 / 5 } .
$$

The vertical velocity of the ball will take it to a height

$$
h = \frac { v _ { 4 } ^ { 2 } } { 2 g } = \frac { v _ { 0 } ^ { 2 } } { 2 g } \frac { 1 } { ( 1 + 2 / 5 ) ^ { 2 } } \frac { M } { m + M } = \frac { v _ { 0 } ^ { 2 } } { 2 g } \frac { 25 } { 49 } \frac { \beta } { 1 + \beta } .
$$
