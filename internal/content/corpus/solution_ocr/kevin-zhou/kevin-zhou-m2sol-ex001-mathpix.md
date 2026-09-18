---
id: solution-ocr-kevin-zhou-m2sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
Six blocks are attached in a horizontal line with rigid rods, and placed on a table with coefficient of friction $\mu$. The blocks have mass $m$ and the leftmost block is pulled with a force $F$ so the blocks slide to the left. Find the tension force in the rod in the middle.

Solution
There are six objects here and five rods, each with a different tension, so a direct analysis would involve solving a system of six equations. Instead, first consider the entire set of six blocks as one object; we can do this because the rigid rods force them to move as one. The total mass is $6 m$, and applying Newton's second law gives

$$
F - 6 m g \mu = 6 m a , \quad a = \frac { F } { 6 m } - \mu g .
$$

Next, consider the rightmost three blocks as one object. Their total mass is $3 m$, and their acceleration is the same acceleration $a$ we computed above. This system experiences two horizontal force: tension and friction. Newton's second law gives

$$
T - 3 m g \mu = 3 m a
$$

and solving for $T$ gives

$$
T = \frac { F } { 2 } .
$$


This is intuitive, because the differences of any two adjacent tension forces are the same; that's the amount of tension that needs to be spent to accelerate each block. So the middle rod, which has to accelerate only half the blocks, has half the tension.

The reason we could ignore the tension forces in the other four rods is that the only thing they do is ensure the blocks move with the same acceleration. Once we assume this is the case, the specific values of the tensions don't matter; we can just zoom out and forget them. It's just like how within each block there is also an internal tension which keeps it together, but we rarely need to worry about its details.

Idea 3
To handle a problem where something is just about to slip on something else, set the frictional force to the maximal value $\mu N$ and assume slipping is not yet occurring, so the two objects move as one. The same idea holds for problems which ask for the minimal force needed to make something move, or the minimal force needed to keep something from moving.

[1] Problem 1 (KK 2.7). A block of mass $M _ { 1 }$ sits on a block of mass $M _ { 2 }$ on a frictionless table. The coefficient of friction between the blocks is $\mu$. Find the maximum horizontal force that can be applied to (a) block 1 or (b) block 2 so that the blocks will not slip on each other.
Solution. Let the horizontal force be $F$. In both cases the friction is maximal, $f = \mu M _ { 1 } g$, and the blocks move together, so $a = F / \left( M _ { 1 } + M _ { 2 } \right)$.
    (a) The bottom block experiences only the force $f = M _ { 2 } a$, so
$$
\mu M _ { 1 } g = M _ { 2 } a , \quad F = \mu g \left( M _ { 1 } + M _ { 2 } \right) \frac { M _ { 1 } } { M _ { 2 } }
$$
    (b) The top block experiences only the force $f = M _ { 1 } a$, so
$$
\mu M _ { 1 } g = M _ { 1 } a , \quad F = \mu g \left( M _ { 1 } + M _ { 2 } \right) .
$$
[2] Problem 2 (KK 2.28). A car, which can be treated as a point particle, enters a turn of radius $R$.
![](../../../figures/solution-ocr/fe6471a5ba18c1a6ad6ea33b.jpg)
The road is banked at angle $\theta$, and the coefficient of friction between the wheels and road is $\mu$. Find the maximum and minimum speeds for the car to stay on the road without skidding sideways.
Solution. Let $N$ be the normal force, and let $f$ be the friction force (defined to be positive if it's pointing up the hill). We see that $N \cos \theta + f \sin \theta = m g$, and $N \sin \theta - f \cos \theta = m v ^ { 2 } / R$. Therefore,
$$
\frac { v ^ { 2 } } { g R } = \frac { N \sin \theta - f \cos \theta } { N \cos \theta + f \sin \theta } .
$$
Since $- N \mu \leq f \leq N \mu$, we have
$$
\frac { v _ { \min } ^ { 2 } } { g R } = \frac { \sin \theta - \mu \cos \theta } { \cos \theta + \mu \sin \theta } , \quad \frac { v _ { \max } ^ { 2 } } { g R } = \frac { \sin \theta + \mu \cos \theta } { \cos \theta - \mu \sin \theta } .
$$

These formulas give nonsensical results for $\mu > \tan \theta$ or $\mu > \cot \theta$. In these cases, it would be more correct to say that if $\mu \geq \tan \theta$, then $v _ { \min } = 0$, and if $\mu \geq \cot \theta$, there is no maximum speed.

Usually, we are in the regime where $\mu \geq \tan \theta$, in which case $v _ { \text {min } } = 0$ and banking the turn increases $v _ { \text {max } }$. Another benefit is that it helps align the direction of the gravitational and centrifugal force with the height of the car, making the turn more comfortable; you get less of a sideways pull along your seat. For this reason, banked turns are very common in highways. In highway engineering, this trick is called superelevation.

[2] Problem 3 (KK 2.19). A "pedagogical machine" is illustrated in the sketch below.
![](../../../figures/solution-ocr/38823dbc318b345a0d800971.jpg)
All surfaces are frictionless. What force $F$ must be applied to $M _ { 1 }$ to keep $M _ { 3 }$ from rising or falling?
Solution. By considering all the masses as one system, we see that $a = \frac { F } { M _ { 1 } + M _ { 2 } + M _ { 3 } }$. We see that the tension $T = M _ { 3 } g$, and $T = M _ { 2 } a$, so
$$
\left. M _ { 3 } g = M _ { 2 } a \Longrightarrow \frac { F } { M _ { 1 } + M _ { 2 } + M _ { 3 } } = \frac { M _ { 3 } } { M _ { 2 } } g \Longrightarrow \right\rvert \, F = \left( M _ { 1 } + M _ { 2 } + M _ { 3 } \right) \frac { M _ { 3 } } { M _ { 2 } } g .
$$
[3] Problem 4. USAPhO 2017, problem A1.

## 2 Balancing Torques

Idea 4
A static rigid body will remain static as long as the total force on it vanishes, and the total torque vanishes, where the torque about the origin is

$$
\boldsymbol { \tau } = \sum _ { i } \mathbf { r } _ { i } \times \mathbf { F } _ { i }
$$

where $\mathbf { r } _ { i }$ is the point of application of force $\mathbf { F } _ { i }$. If the total force vanishes, the total torque doesn't depend on where the origin is, because shifting the origin by a changes the torque by

$$
\Delta \boldsymbol { \tau } = \sum _ { i } \mathbf { a } \times \mathbf { F } _ { i } = \mathbf { a } \times \left( \sum _ { i } \mathbf { F } _ { i } \right) = 0 .
$$

The origin should usually be chosen to set as many torques as possible to zero.
