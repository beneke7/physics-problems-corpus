---
id: solution-ocr-usapho-2018-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2018-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A1

a. Suppose you drop a block of mass $m$ vertically onto a fixed ramp with angle $\theta$ with coefficient of static and kinetic friction $\mu$. The block is dropped in such a way that it does not rotate after colliding with the ramp. Throughout this problem, assume the time of the collision is negligible.
    i. Suppose the block's speed just before it hits the ramp is $v$ and the block slides down the ramp immediately after impact. What is the speed of the block right after the collision?

## Solution

During the collision, the block receives impulses from the normal force, friction, and gravity. Since the collision is very short, the impulse due to gravity is negligible. Let $p _ { N }$ and $p _ { F }$ be the magnitudes of the impulses from the normal force and friction force.
Since the block stays on the ramp after the collision, its final momentum is parallel to the ramp. Then the normal force must completely eliminate the block's initial momentum perpendicular to the ramp, so

$$
p _ { N } = m v \cos \theta .
$$

Since the block still moves after the collision,

$$
p _ { F } = \mu p _ { N } .
$$

The block's initial momentum parallel to the ramp is $m v \sin \theta$, so

$$
m v \sin \theta - p _ { F } = m u ,
$$

where $u$ is the final speed of the block. Solving for $u$ gives

$$
u = v ( \sin \theta - \mu \cos \theta ) .
$$


ii. What is the minimum $\mu$ such that the speed of the block right after the collision is 0?
Solution
We set $u = 0$ to obtain
$$
\mu = \tan \theta .
$$
Note that this is simply the no-slip condition for a block resting on an inclined plane! This is because in both cases, equality is achieved when the normal force and maximal friction force sum to a purely vertical force.
b. Now suppose you drop a sphere with mass $m$, radius $R$ and moment of inertia $\beta m R ^ { 2 }$ vertically onto the same fixed ramp such that it reaches the ramp with speed $v$.

i. Suppose the sphere immediately begins to roll without slipping. What is the new speed of the sphere in this case?

## Solution

If the sphere immediately begins to roll without slipping, we can calculate the frictional impulse independently of the normal impulse. We have

$$
m v \sin \theta - p _ { F } = m u .
$$

The frictional impulse is responsible for the sphere's rotation, so its angular momentum about its center of mass is $L = p _ { F } R$. But we also know that

$$
L = \beta m R ^ { 2 } \omega = \beta m R u .
$$

Then

$$
p _ { F } = \beta m u .
$$

Substituting into the previous expression gives

$$
m v \sin \theta = ( 1 + \beta ) m u \quad \Rightarrow \quad u = \frac { v \sin \theta } { 1 + \beta } .
$$

ii. What is the minimum coefficient of friction such that the sphere rolls without slipping immediately after the collision?

## Solution

As in part (a), the normal impulse is $p _ { N } = m v \cos \theta$ and the maximal frictional impulse is $p _ { F } = \mu p _ { N }$. From the previous part, we need

$$
p _ { F } = \frac { \beta m v \sin \theta } { 1 + \beta }
$$

and equating these expressions gives

$$
\mu = \frac { \beta \tan \theta } { 1 + \beta } .
$$
