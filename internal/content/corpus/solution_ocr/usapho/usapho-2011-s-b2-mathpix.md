---
id: solution-ocr-usapho-2011-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2011-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question B2

A particle is constrained to move on the inner surface of a frictionless parabolic bowl whose crosssection has equation $z = k r ^ { 2 }$. The particle begins at a height $z _ { 0 }$ above the bottom of the bowl with a horizontal velocity $v _ { 0 }$ along the surface of the bowl. The acceleration due to gravity is $g$.
![](../../../figures/solution-ocr/7bf61ea2437ce7573dc0f509.jpg)
![](../../../figures/solution-ocr/59d58ce9bc9c41767bc2eeb7.jpg)

a. For a particular value of horizontal velocity $v _ { 0 }$, which we will name $v _ { h }$, the particle moves in a horizontal circle. What is $v _ { h }$ in terms of $g , z _ { 0 }$, and/or $k$ ?
b. Suppose that the initial horizontal velocity is now $v _ { 0 } > v _ { h }$. What is the maximum height reached by the particle, in terms of $v _ { 0 } , z _ { 0 } , g$ and/or $k$ ?
c. Suppose that the particle now begins at a height $z _ { 0 }$ above the bottom of the bowl with an initial velocity $v _ { 0 } = 0$.
    i. Assuming that $z _ { 0 }$ is small enough so that the motion can be approximated as simple harmonic, find the period of the motion in terms any or all of the mass of the particle $m , g , z _ { 0 }$, and/or $k$.
    ii. Assuming that $z _ { 0 }$ is not small, will the actual period of motion be greater than, less than, or equal to your simple harmonic approximation above? (You need not calculate the new value explicitly, but you should show some work to defend your answer.)

## Solution

a. Let the radius of the bowl at height $z _ { 0 }$ be $r _ { 0 }$ and let the angle made by the bowl's surface to the horizontal at that height be $\theta$.
Two forces act on the particle: the normal force and gravity. If the particle moves in a horizontal circle, the vertical components of these forces cancel, and the horizontal component of the normal force is the centripetal force. Then
$$
N \sin \theta = \frac { m v _ { h } ^ { 2 } } { r _ { 0 } } , \quad N \cos \theta = m g .
$$
Combining these,
$$
\tan \theta = \frac { v _ { h } ^ { 2 } } { g r _ { 0 } } .
$$
Now $\tan \theta$ is the slope of the bowl $d z / d r = 2 k r _ { 0 }$, so
$$
2 k r _ { 0 } = \frac { v _ { h } ^ { 2 } } { g r _ { 0 } }
$$

Using $z _ { 0 } = k r _ { 0 } ^ { 2 }$ and solving for $v _ { h }$ gives
$$
v _ { h } = \sqrt { 2 g z _ { 0 } }
$$
b. Let the maximum height be $z$, let the radius of the bowl at this point be $r$, and let the speed of the particle at this point be $v$. By conservation of energy,
$$
\frac { 1 } { 2 } m v _ { 0 } ^ { 2 } + m g z _ { 0 } = \frac { 1 } { 2 } m v ^ { 2 } + m g z .
$$
The two forces acting on the particle never exert a torque in the $z$-direction, so the $z$ component of the angular momentum is conserved. Furthermore, at both the initial and final heights, the velocity of the particle is perpendicular to the $z$-axis, so
$$
m v _ { 0 } r _ { 0 } = m v r \quad \Rightarrow \quad v = v _ { 0 } \frac { r _ { 0 } } { r } .
$$
Using the equation of the bowl,
$$
v = v _ { 0 } \sqrt { \frac { z _ { 0 } } { z } } .
$$
Using this to eliminate $v$ in the energy conservation equation, we find a quadratic in $z$,
$$
z ^ { 2 } - \left( \frac { v _ { 0 } ^ { 2 } } { 2 g } + z _ { 0 } \right) z + \frac { v _ { 0 } ^ { 2 } } { 2 g } z _ { 0 } = 0 .
$$
The roots of this quadratic sum to $z _ { 0 } + v _ { 0 } ^ { 2 } / 2 g$, and there is a root $z = z _ { 0 }$ corresponding to the initial condition, so the desired root is
$$
z = \frac { v _ { 0 } ^ { 2 } } { 2 g } .
$$
The two roots are equal when $v _ { 0 } = v _ { h }$, providing an alternate solution to part (a).
c. i. We present a force-based approach and an energy-based approach. In each case, let $r$ be the radial position of the particle, so that $z = k r ^ { 2 }$ is the height of the particle above the bottom of the bowl.
Let the angle of the bowl's surface to the horizontal be $\theta$. Because $z _ { 0 }$ is small,
$$
\sin \theta \approx \theta \approx \tan \theta = \frac { d z } { d r } = 2 k r
$$
and $\cos \theta \approx 1$. Moreover, since $z _ { 0 }$ is small, the centripetal acceleration is negligible, so we can consider only the tangential acceleration. Since the force tangential to the bowl is $m g \sin \theta$, this is $a = g \sin \theta$. The radial acceleration $a _ { r }$ is
$$
a _ { r } = - a \cos \theta = - g \cos \theta \sin \theta .
$$
Then in the small- $z$ approximation,
$$
a _ { r } \approx - g \tan \theta = - 2 k r g .
$$

This is simple harmonic motion with $\omega = \sqrt { 2 k g }$ and hence period

$$
T = \frac { 2 \pi } { \sqrt { 2 k g } }
$$

The energy-based approach begins with the total energy

$$
E = \frac { 1 } { 2 } m v ^ { 2 } + m g z .
$$

The velocity $v$ is given by

$$
v ^ { 2 } = \left( \frac { d r } { d t } \right) ^ { 2 } + \left( \frac { d z } { d t } \right) ^ { 2 } .
$$

Because $z$ is small, $\frac { d z } { d t } \ll \frac { d r } { d t }$, and we conclude that

$$
E = \frac { 1 } { 2 } m \left( \frac { d r } { d t } \right) ^ { 2 } + m g k r ^ { 2 }
$$

By conservation of energy,

$$
0 = \frac { d E } { d t } = m \frac { d r } { d t } \frac { d ^ { 2 } r } { d t ^ { 2 } } + 2 m g k r \frac { d r } { d t }
$$

which implies that

$$
0 = \frac { d ^ { 2 } r } { d t ^ { 2 } } + 2 k r g
$$

which is the same equation as before.

ii. The period is greater than the simple harmonic period. In the force-based approach, we found
$$
a _ { r } = - g \cos \theta \sin \theta
$$
and approximated it as
$$
a _ { r } = - g \tan \theta .
$$
Since $\cos \theta \sin \theta < \tan \theta$, this is an overestimate, so the period is actually larger.
In the energy-based approach, we dropped a positive term in the formula for the speed $v$ as expressed in terms of $\frac { d r } { d t }$. Therefore we overestimated $\frac { d r } { d t }$, and again the particle takes longer to reach the origin in reality than it does in the approximation.
