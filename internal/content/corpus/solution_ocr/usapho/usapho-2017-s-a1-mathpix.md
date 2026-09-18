---
id: solution-ocr-usapho-2017-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2017-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

A pair of wedges are located on a horizontal surface. The coefficient of friction (both sliding and static) between the wedges is $\mu$, the coefficient of friction between the bottom wedge B and the horizontal surface is $\mu$, and the angle of the wedge is $\theta$. The mass of the top wedge A is $m$, and the mass of the bottom wedge B is $M = 2 m$. A horizontal force $F$ directed to the left is applied to the bottom wedge as shown in the figure.
![](../../../figures/solution-ocr/0d9c38383632972700ea2d1e.jpg)

Determine the range of values for $F$ so that the the top wedge does not slip on the bottom wedge. Express your answer(s) in terms of any or all of $m , g , \theta$, and $\mu$.

## Solution

Solution 1. Assume the block does not slip. Considering the horizontal forces on the entire system gives

$$
F - 3 \mu m g = 3 m a \quad \Rightarrow \quad a = \frac { F } { 3 m } - \mu g .
$$

When $F$ is small, the top wedge wants to slide downward, so static friction points up the ramp. Considering the horizontal and vertical forces on the block gives

$$
N \cos \theta + f \sin \theta = m g , \quad N \sin \theta - f \cos \theta = m a .
$$

When the minimal force is applied, the friction is maximal, $f = \mu N$. Eliminating $N$ gives

$$
m a = m g \frac { \sin \theta - \mu \cos \theta } { \cos \theta + \mu \sin \theta }
$$

and plugging in our first equation gives

$$
F _ { \min } = 3 m g \left( \mu + \frac { \sin \theta - \mu \cos \theta } { \cos \theta + \mu \sin \theta } \right) = 3 m g \frac { \left( 1 + \mu ^ { 2 } \right) \tan \theta } { 1 + \mu \tan \theta } .
$$

When $F$ is large, the top wedge wants to slide upward, so static friction points down the ramp, and

$$
N \cos \theta - f \sin \theta = m g , \quad N \sin \theta + f \cos \theta = m a .
$$

Now setting $f = \mu N$ gives

$$
F _ { \max } = 3 m g \left( \mu + \frac { \sin \theta + \mu \cos \theta } { \cos \theta - \mu \sin \theta } \right) = 3 m g \frac { 2 \mu + \left( 1 - \mu ^ { 2 } \right) \tan \theta } { 1 - \mu \tan \theta } .
$$

Therefore, naively the range of forces so that the block will not slip is

$$
F \in \left[ F _ { \min } , F _ { \max } \right] .
$$


However, to get full credit, students must account for two edge cases. First, when $\mu > \tan \theta$, no force is required at all to keep the block in place, so the minimum force is zero. Second, when $\mu > \cot \theta$, the block will not slip up under any circumstances, so there is no maximal force.

Solution 2. The problem can also be solved geometrically. In general, the no slip condition is

$$
\mu > \tan \phi
$$

where $\phi$ is the angle between the vertical and the normal to the plane. Working in the noninertial reference frame of the plane, the fictitious force due to the acceleration is equivalent to a tilting of the gravity vector by an angle

$$
\tan \beta = \frac { a } { g }
$$

where, as in solution 1,

$$
a = \frac { F } { 3 m } - \mu g .
$$

Then the top block will not slip as long as $| \theta - \beta | \leq \phi$. At the minimum acceleration $a _ { \min } , \beta = \theta - \phi$, and taking the tangent of both sides gives

$$
\frac { a _ { \min } } { g } = \frac { \tan \theta - \mu } { 1 + \mu \tan \theta } .
$$

This is only meaningful for $\tan \theta > \mu$, otherwise the answer is simply $a _ { \text {min } } = 0$. At the maximum acceleration $a _ { \text {max } } , \beta = \theta + \phi$, which gives

$$
\frac { a _ { \max } } { g } = \frac { \tan \theta + \mu } { 1 - \mu \tan \theta } .
$$

This is only meaningful for $\cot \theta > \mu$, otherwise the answer is simply $a _ { \max } = \infty$.
