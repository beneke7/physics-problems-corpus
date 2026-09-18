---
id: solution-ocr-usapho-2016-s-b1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2016-b1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B1

A uniform solid spherical ball starts from rest on a loop-the-loop track. It rolls without slipping along the track. However, it does not have enough speed to make it to the top of the loop. From what height $h$ would the ball need to start in order to land at point P directly underneath the top of the loop? Express your answer in terms of $R$, the radius of the loop. Assume that the radius of the ball is very small compared to the radius of the loop, and that there are no energy losses due to friction.
![](../../../figures/solution-ocr/bdcc2bf225dec5ba830ca229.jpg)

## Solution

We fix the origin at $P$. Assume the ball leaves at an angle $\theta$ away from the vertical. At this point, the $x$ and $y$ coordinates are

$$
x = R \sin \theta , \quad y = R ( 1 + \cos \theta ) .
$$

By energy conservation, we have

$$
m g ( h - y ) = \frac { 1 } { 2 } m v ^ { 2 } + \frac { 1 } { 2 } I \omega ^ { 2 } = \frac { 1 } { 2 } m ( 1 + \beta ) v ^ { 2 }
$$

where $\beta = 2 / 5$, and we used the fact that the ball rolls without slipping.
Let $v$ be the speed of the ball when it leaves the loop. Then its velocity components at that moment are

$$
v _ { x } = - v \cos \theta , \quad v _ { y } = v \sin \theta .
$$

Assuming the ball impacts $P$ at time $t$,

$$
y = \frac { 1 } { 2 } g t ^ { 2 } - v _ { y } t , \quad x = - v _ { x } t .
$$

The second equation yields

$$
t = \frac { R } { v } \frac { \sin \theta } { \cos \theta }
$$


and plugging this into the first equation gives

$$
R + R \cos \theta = \frac { 1 } { 2 } g \left( \frac { R } { v } \frac { \sin \theta } { \cos \theta } \right) ^ { 2 } - v \sin \theta \frac { R } { v } \frac { \sin \theta } { \cos \theta }
$$

which simplifies to

$$
1 + \cos \theta = \frac { g R } { 2 v ^ { 2 } } \frac { \sin ^ { 2 } \theta } { \cos \theta } .
$$

Now, the ball leaves the surface when the normal component of the force of the loop on the ball just drops to zero. This happens when

$$
m g \cos \theta = m \frac { v ^ { 2 } } { R } \quad \Rightarrow \quad \frac { v ^ { 2 } } { g R } = \cos \theta
$$

and plugging this into the previous equation gives

$$
1 + \cos \theta = \frac { 1 } { 2 } \frac { 1 - \cos ^ { 2 } \theta } { \cos ^ { 2 } \theta } \quad \Rightarrow \quad 2 \cos ^ { 2 } \theta = 1 - \cos \theta
$$

This is a quadratic equation with solutions

$$
\cos \theta = \frac { - 1 \pm \sqrt { 1 + 8 } } { 4 } = - \frac { 1 } { 4 } \pm \frac { 3 } { 4 }
$$

Only the positive answer of $\cos \theta = 1 / 2$ is relevant here, though the negative answer is still physical!
Now that we know $\theta$, getting the final answer is straightforward. We combine the energy conservation equation and the condition

$$
m g \cos \theta = m \frac { v ^ { 2 } } { R }
$$

to find

$$
h = 1 + \left( \frac { 1 } { 2 } ( 1 + \beta ) + 1 \right) R \cos \theta = \frac { 37 } { 20 } R .
$$
