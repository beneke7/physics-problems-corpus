---
id: solution-ocr-usapho-2010-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2010-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

A thin plank of mass $M$ and length $L$ rotates about a pivot at its center. A block of mass $m \ll M$ slides on the top of the plank. The system moves without friction. Initially, the plank makes an angle $\theta _ { 0 }$ with the horizontal, the block is at the upper end of the plank, and the system is at rest. Throughout the problem you may assume that $\theta \ll 1$, and that the physical dimensions of the block are much, much smaller than the length of the plank.
![](../../../figures/solution-ocr/27da1c9ab4292d37bcf82d79.jpg)

Let $x$ be the displacement of the block along the plank, as measured from the pivot, and let $\theta$ be the angle between the plank and the horizontal. You may assume that centripetal acceleration of the block is negligible compared with the linear acceleration of the block up and down the plank.

a. For a certain value of $\theta _ { 0 } , x = k \theta$ throughout the motion, where $k$ is a constant. What is this value of $\theta _ { 0 }$ ? Express your answer in terms of $M , m$, and any fundamental constants that you require.
b. Given that $\theta _ { 0 }$ takes this special value, what is the period of oscillation of the system? Express your answer in terms of $M , m$, and any fundamental constants that you require.
c. Determine the maximum value of the ratio between the centripetal acceleration of the block and the linear acceleration of the block along the plank, writing your answer in terms of $m$ and $M$, therefore justifying our approximation.

## Solution

a. The moment of inertia of the plank about its pivot is
$$
I = \frac { 1 } { 12 } M L ^ { 2 }
$$
and it is acceptable to simply write this down. The magnitude of the torque on the plank is
$$
\tau = m g x \cos \theta \approx m g x
$$
so the angular acceleration is
$$
\alpha = - \frac { m g } { I } x .
$$

We may neglect the rotational inertia of the block, since $m \ll M$. Next, the linear acceleration of the block is

$$
a = - g \sin \theta \approx - g \theta .
$$

It looks like we've derived two copies of the simple harmonic oscillator equation. However, the position of the block determines the linear restoring force for the plank, while the angular position of the plank determines the linear restoring force for the board. Hence the general solution will not look anything like simple harmonic motion; instead the block will most likely fall off the plank. The block and plank will only oscillate together for one special value of $\theta _ { 0 }$.
To find this special value, suppose $x = k \theta$ throughout. Then

$$
k = \frac { L } { 2 \theta _ { 0 } } .
$$

Differentiating, we have $a = k \alpha$. Using these to eliminate $x$ and $a$ above, we have

$$
\alpha = - \frac { g } { k } \theta , \quad \alpha = - \frac { m g k } { I } \theta .
$$

This is only self-consistent if the coefficients are equal, so

$$
\frac { g } { k } = \frac { m g k } { I } \Rightarrow \theta _ { 0 } = \sqrt { \frac { 3 m } { M } } .
$$

b. Referring to one of our previous equations,
$$
\omega ^ { 2 } = \frac { g } { k } = \frac { 2 g } { L } \sqrt { \frac { 3 m } { M } }
$$
and the period of the motion is
$$
T = \frac { 2 \pi } { \omega } .
$$
One can trivially simplify to get an explicit expression for $T$, though this isn't necessary.
c. The centripetal acceleration is
$$
a _ { c } = x \left( \frac { d \theta } { d t } \right) ^ { 2 } = x \theta _ { 0 } ^ { 2 } \omega ^ { 2 } \sin ^ { 2 } \omega t .
$$
Now $a = - x \omega ^ { 2 }$, so the ratio is
$$
\frac { a _ { c } } { a } = \theta _ { 0 } ^ { 2 } \sin ^ { 2 } \omega t \leq \theta _ { 0 } ^ { 2 } = \frac { 3 m } { M }
$$
which is indeed always small. If we did account for the centripetal acceleration, then there still would be a value for $\theta _ { 0 }$ where the block and plank oscillate together, but the motion would not be precisely simple harmonic, and the equations would be too complicated to solve.
