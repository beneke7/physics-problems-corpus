---
id: solution-ocr-eupho-2019-t-s-t3
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2019_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2019-T3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 3 Water hose

To begin with, let us notice that the envelope of the trajectories of balls thrown from the origin with the same launching speed $v$ at different launching angles is a parabola (1 pt), and the focus of the parabola is the launching point (1 pt).

This fact can be proved as follows (the proof is not required from the contestants). The trajectory of the ball can be expressed parametrically as $x = v \cos \alpha t , y = v \sin \alpha t - \frac { 1 } { 2 } g t ^ { 2 }$. Upon eliminating $t$ we obtain

$$
y = x \tan \alpha - \frac { g } { 2 v ^ { 2 } } x ^ { 2 } \left( 1 + \tan ^ { 2 } \alpha \right) .
$$

We can consider this as an equation for finding the angle $\alpha$ to reach the point $( x , y )$ :

$$
g x ^ { 2 } \tan ^ { 2 } \alpha - 2 v ^ { 2 } x \tan \alpha + 2 v ^ { 2 } y + g x ^ { 2 } = 0 .
$$

The points at the envelope separate the points for which the solution to this equation does exist from the points for which the solution does not exist, hence for the envelope points the discriminant of the equation must be zero,

$$
v ^ { 4 } x ^ { 2 } = g x ^ { 2 } \left( 2 v ^ { 2 } y + g x ^ { 2 } \right) \Rightarrow y = \frac { v ^ { 2 } } { 2 g } - \frac { g x ^ { 2 } } { 2 v ^ { 2 } } .
$$

What we got is a parabola, and the position of the focus can be deduced from this formula. Alternatively, the position of the focus can be deduced from the fact that light rays parallel to the axis of a parabola converge after reflection from the parabolic shape into its focus. Indeed, the touching point of the envelope with a trajectory of a ball launched at $\alpha = 45 ^ { \circ }$ must lie at $y = 0$ as this launching angle is known to provide the longest flight distance. Hence, the envelope and the $x$-axis meet at 45°, so that a vertical beam hitting the envelope at $y = 0$ is reflected by the envelope into a horizontal line. The focus must lie on that reflected beam, i.e. at $y = 0$.

The parabolic trajectory of each water parcel must touch the envelope (1 pts). Using the knowledge that the launching angles of the water parcels were never less than 45°, we conclude that the touching point must lie at $y \geq 0$ (1 pt). This can be seen from the fact that a parcel launched at 45° will meet the envelope at $y = 0$,


and increasing the launching angle will raise the touching point.

There are many ways of proving it more rigorously. For instance, one can use the fact (proved below) that the launching velocity and the tangent to the envelope at the point $A$ where the trajectory and the envelope meet are perpendicular to each other: with $\alpha + \beta = 90 ^ { \circ }$ ( $\beta$ denotes the angle between the tangent and the horizon) we conclude that increasing $\alpha$ means decreasing $\beta$, hence raising $A$. To prove that $\alpha + \beta = 90 ^ { \circ }$, let a vertically up-directed beam be reflected from the trajectory at $A$ : it will go through the focus of the trajectory which means that if we continue it through the focus and let it be reflected a second time from the same trajectory, it will propagate vertically down. The trajectory and the envelope are tangent at $A$, so the first reflection was also a reflection from the envelope and the reflected beam must go through the focus of the envelope, i.e. the launching point $O$. Point $O$ lies on the trajectory, so the second reflection point must be $O$. As a result of the two reflections, the beam was diverted by 180° which means that the double sum of the incidence angles must have been 180°, and hence $2 \alpha + 2 \beta = 180 ^ { \circ }$.

The water parcels close to the origin are clearly yet to reach the envelope, and those parcels below the ground level have clearly passed the point where they touched the envelope. Since the parcels form a continuous curve, there must be at least one point $P$ which is exactly at the envelope 1 pts).

There are two ways of finding the position of the point $P$. The first approach is as follows. Notice that at $P$, the water curve is tangent to the envelope (1 pt). Hence, vertical line drawn through $P$ will be reflected by the water curve so that it will go through the focus $O$ (1 pt). So, we need to find by trial and error such a point $P$ on the upper segment of the water curve that the line $O P$ and a vertical line drawn through $P$ will form equal angles with the water curve at $P$ (finding the position of $P$ with a reasonable accuracy: 1 pt), see the figure below.

Alternatively, we can use the fact that for any point on a parabola, its distance from the focus plus its distance from a horizontal line is constant. So, for an arbitrary point $Q = ( x , y )$ on the envelope, $y + \sqrt { x ^ { 2 } + y ^ { 2 } } = 2 H$, where $H$ is a constant, and for any point beneath it, $y +$ $\sqrt { x ^ { 2 } + y ^ { 2 } } < 2 H$. Hence, among all the points at the water curve, the point $P$ has the largest value of $y + \sqrt { x ^ { 2 } + y ^ { 2 } }$ (2 pts). We can evaluate $y + \sqrt { x ^ { 2 } + y ^ { 2 } }$ for a series of points at the water curve and find the one with the largest value (finding the position of $P$ with a reasonable accuracy: 1 pt).
![](../../../figures/solution-ocr/98fe4249d5236c9e85e99646.jpg)

Once we have found the point $P$, we can easily find the height of the topmost point of the envelope due to the equality $y + \sqrt { x ^ { 2 } + y ^ { 2 } } = 2 H _ { P }$ : for the topmost point, $x = 0$ so that its $y$-coordinate $2 y = 2 H _ { P }$, hence $y = H _ { P }$; The topmost point of the envelope would be reached by a water parcel launched vertically, so $v ^ { 2 } = 2 g H _ { P }$, and $v = \sqrt { 2 g H _ { P } }$ (1 pt). From the figure we can find $2 H _ { P } =$ $\left( 3.3 + \sqrt { 10.8 ^ { 2 } + 3.3 ^ { 2 } } \right) \mathrm { m } \approx 14.6 \mathrm {~m}$ so that $v \approx 12 \mathrm {~m} / \mathrm { s } ( \mathbf { 1 } \mathbf { p t } )$.
