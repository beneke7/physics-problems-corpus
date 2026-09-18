---
id: solution-ocr-usapho-2023-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2023-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A1

## Circus Act

In this problem we consider a small ball bouncing back and forth between two points. In all parts below, the acceleration of gravity is $g$, collisions are perfectly elastic, air resistance is negligible, and the impact points are at the same height. The diagrams are not drawn to scale.

a. Consider a ball bouncing between two inclined planes, which each make an angle $\theta < 90 ^ { \circ }$ to the horizontal. The ball has speed $v _ { 0 }$ at the impact points, which are separated by a distance $D$.
    i. The ball can bounce back and forth along the same path, as shown.
![](../../../figures/solution-ocr/e12990c9b7db1ee090b98e48.jpg)
For what values of $\theta$ is this motion possible? For these values, what is $v _ { 0 }$ ?

## Solution

To go back and forth on the same path, the ball must impact the plane normally, which means that $\theta$ is the angle of its velocity to the vertical. The range of the ball is

$$
D = \frac { v _ { 0 } ^ { 2 } \sin \left( 2 \left( 90 ^ { \circ } - \theta \right) \right) } { g } = \frac { v _ { 0 } ^ { 2 } \sin 2 \theta } { g }
$$

which implies

$$
v _ { 0 } = \sqrt { \frac { g D } { \sin 2 \theta } } .
$$

Evidently, the motion is possible for any $\theta$.

ii. The ball can also take one trajectory while traveling to the right, and a separate trajectory when traveling back. Let $\phi \neq 0$ be the angle between the paths at the impact points.
![](../../../figures/solution-ocr/c7c263a1d0ff7122a3997c6a.jpg)
For what values of $\theta$ and $\phi$ is this motion possible? For these values, what is $v _ { 0 }$ ?


## Solution

The two paths have the same initial speed and the same range, which means the initial angles of the velocity to the horizontal must be $\pi / 4 \pm \phi / 2$. Since the initial and final angles to the normal are equal in the collision, the angle of the planes to the horizontal must be $\theta = 45 ^ { \circ }$. Given this, $\phi$ can take any value in the range $0 < \phi < 90 ^ { \circ }$.
Considering the range yields

$$
D = \frac { v _ { 0 } ^ { 2 } \sin \left( 2 \left( 45 ^ { \circ } + \phi / 2 \right) \right) } { g } = \frac { v _ { 0 } ^ { 2 } \cos \phi } { g }
$$

from which we find

$$
v _ { 0 } = \sqrt { \frac { g D } { \cos \phi } } .
$$

As expected, this reduces to the answer above as $\phi \rightarrow 0$, and becomes infinite as $\phi \rightarrow 90 ^ { \circ }$.

b. Now suppose the ball bounces within a hemispherical well of radius of curvature $R$. As in part a.ii, it alternates between two distinct paths, with flight times $t _ { 1 }$ and $t _ { 2 } \neq t _ { 1 }$.
![](../../../figures/solution-ocr/0da6f417ef73d6eb16792cd8.jpg)
Find all of the possible values of $R$, in terms of $t _ { 1 }$ and $t _ { 2 }$.

## Solution

From the previous question we know that the slope of the wall $\theta = \frac { \pi } { 4 }$ at the collision points. So $D = R \sqrt { 2 }$.
$x$ displacement with $t _ { 1 }$ is

$$
\begin{equation*}
v _ { 0 } \cos \left( \frac { \pi } { 4 } - \phi / 2 \right) t _ { 1 } = R \sqrt { 2 } \tag{A1-1}
\end{equation*}
$$

$y$-component of velocity in the upper point is 0

$$
v _ { 0 } \sin \left( \frac { \pi } { 4 } + \phi / 2 \right) - g \frac { t _ { 2 } } { 2 } = 0
$$

transforms into

$$
\begin{equation*}
v _ { 0 } \cos \left( \frac { \pi } { 4 } - \phi / 2 \right) = g \frac { t _ { 2 } } { 2 } \tag{A1-2}
\end{equation*}
$$

Dividing (A1-1) by (A1-2) we get

$$
R = \frac { g t _ { 1 } t _ { 2 } } { 2 \sqrt { 2 } } .
$$


Only one $R$ satisfies this, so the answer is unique.

c. Finally, suppose the well has a sinusoidal shape, described by $y ( x ) = - L \sin ( 2 x / L )$. The ball takes two distinct paths with flight times $t _ { 1 }$ and $t _ { 2 } \neq t _ { 1 }$, and the horizontal distance between the impact points is less than $\pi L$. Find all of the possible values of $L$, in terms of $t _ { 1 }$ and $t _ { 2 }$.

## Solution

The slope of the wall $\theta = \frac { \pi } { 4 }$ at the collision points. So $z _ { x } ^ { \prime } = - 1$ for one end and there is a symmetric point on the other point of collision. $- 2 \cos \frac { 2 x } { L } = - 1$ has solutions $x = \pm \frac { \pi L } { 6 }$. So we got two possible values of $L$.


i. Case of $x = \frac { \pi L } { 6 }$ corresponds to $D = \frac { \pi L } { 2 } - \frac { \pi L } { 3 } = \frac { \pi L } { 6 }$
$$
v _ { 0 } \cos \left( \frac { \pi } { 4 } - \phi / 2 \right) t _ { 1 } = \frac { \pi L } { 6 }
$$
and
$$
v _ { 0 } \cos \left( \frac { \pi } { 4 } - \phi / 2 \right) = g \frac { t _ { 2 } } { 2 } .
$$
Combining these two we get
$$
L _ { a } = \frac { 3 g t _ { 1 } t _ { 2 } } { \pi }
$$
ii. Case of $x = - \frac { \pi L } { 6 }$ corresponds to $D = \frac { \pi L } { 2 } + \frac { \pi L } { 3 } = \frac { 5 \pi L } { 6 }$
$$
v _ { 0 } \cos \left( \frac { \pi } { 4 } - \phi / 2 \right) t _ { 1 } = \frac { 5 \pi L } { 6 }
$$
and
$$
v _ { 0 } \cos \left( \frac { \pi } { 4 } - \phi / 2 \right) = g \frac { t _ { 2 } } { 2 } .
$$
Combining these two we get
$$
L _ { b } = \frac { 3 g t _ { 1 } t _ { 2 } } { 5 \pi }
$$
