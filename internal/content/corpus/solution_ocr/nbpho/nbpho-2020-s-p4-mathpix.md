---
id: solution-ocr-nbpho-2020-s-p4
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2020-drone]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
4. Drone (9 points) - Solution by Taavet Kalda, grading schemes by Oleg Košik, Jānis Cimurs, and Joonas Kalda.
i) (2 points) Let the mass of the cuboid be $M$. There are three forces acting on the drone: the resultant of friction and the normal force $\vec { F } _ { f }$, rope tension $\vec { T }$ directed along the rope, and gravitational acceleration $M \vec { g }$ directed vertically down from the centre of the cuboid. Since the cuboid is sliding with constant speed, the three forces must balance each other out. The only way for this to be possible is if the vectorial extensions of the forces intersect in one point, $O$.

One can prove this by contradiction. If the forces don't intersect in a single point, one needs only consider the torque around one of the intersection points to see that there is non-zero torque and that the forces aren't in equilibrium.

If the normal force is $\boldsymbol { N }$, then the frictional force is $N \mu$ so the resultant $\vec { F } _ { f } = N \hat { y } -$ $N \mu \hat { x }$. Therefore, $\vec { F } _ { f }$ is always directed at an angle $\alpha = \arctan \mu$ with respect to the vertical.

Since the starting point and direction of the forces of gravity and tension are known, one can reconstruct the position of $\boldsymbol { O }$ and $\vec { F } _ { f }$. Because $\mu = \tan \alpha$, one can conveniently measure $\mu$ as the ratio of the horizontal and vertical projection of $\vec { F } _ { f } : \mu \approx 0.659$.
![](../../../figures/solution-ocr/59af3790d50abc227ad8ea5a.jpg)
ii) (2 points) Consider the system made up of the cuboid and the drone. Once again, there are three forces acting on this system: gravitational force $( M + m ) \vec { g }$, friction $\vec { F } _ { f }$, and the force $\overrightarrow { \boldsymbol { F } }$ keeping drone afloat. The thrust for the drone is directed along the symmetry axis of the drone. Since the forces are in equilibrium, their extensions must intersect in one point $\boldsymbol { O } ^ { \prime }$. Owing to the last part, $\boldsymbol { O } ^ { \prime }$ can be found by intersecting the frictional force and the thrusting force. Since gravitational force is vertical, we can find the horizontal projection of the centre of mass. If $x _ { 1 }$ and $x _ { 2 }$ are the horizontal distances from $\boldsymbol { O } ^ { \prime }$ to the centres of the cuboid and drone respectively, then

$$
\frac { x _ { 1 } } { x _ { 2 } } = \frac { M } { m } .
$$

From the figure we measure $x _ { 1 } / x _ { 2 } = 0.796$ and so
![](../../../figures/solution-ocr/d6a992fa89ea5f685dfed648.jpg)

Grading for i) and ii)
Solutions that use force balance and torque balance in i) and force balance in ii):
i) correctly identifying all forces acting on cuboid - 0.2 pts;
use that $\mu = \frac { F _ { f } } { N }$, where $F _ { f }$ is friction force and $N$ is normal force - $\mathbf { 0 . 2 }$ pts; writing force balance equations using angles - 0.4 pts;
writing torque balance equation - $\mathbf { 0 . 4 }$ pts; deriving $\mu$ - $\mathbf { 0 . 4 }$ pts;
numerical result with high enough precision - 0.4 pts; (error within 5\% - 0.4pts, error within 10\% - 0.2pts)
ii) correctly identifying all forces acting on drone - $\mathbf { 0 . 2 }$ pts;
writing force balance equations using angles - 0.6 pts;
combining with equations form part i) and deriving $\boldsymbol { M } \boldsymbol { - } \mathbf { 0 . 8 }$ pts;
numerical result with high enough precision - 0.4 pts; (error within 5\% - 0.4pts, error within 10\% - 0.2pts)

Remark. Solutions that assume that cuboid is linear, get 0 for precision for both parts i) and ii), but there are no deductions for deriving $\mu$ and $M$.

Solutions that use point $O$ in $\boldsymbol { i }$ ):
Correctly identifying all forces acting on cuboid - 0.2 pts;
Use fact that vectorial extensions intersect at one point or another way to take into account torque balance for point $\boldsymbol { O } - \mathbf { 0 . 8 }$ pts;
Use that $\mu = \tan \alpha$ or $\mu = \frac { F _ { f } } { N }$, where $F _ { f }$ is friction force and $N$ is normal force - $\mathbf { 0 . 2 }$ pts; Deriving $\boldsymbol { \mu }$ - $\mathbf { 0 . 4 }$ pts;
Numerical result with high enough precision - 0.4 pts.

Solutions that use point $O$ ' in ii):
Correctly identifying all forces acting on system - $\mathbf { 0 . 2 }$ pts;
Use fact that vectorial extensions intersect at one point or another way to take into account torque balance for point $\boldsymbol { O } ^ { \prime } - \mathbf { 0 . 8 ~ p t s }$;
Use torque balance for gravitational forces - 0.4 pts;
Express formula for mass $M - \mathbf { 0 . 2 }$ pts;
Numerical result with high enough precision - 0.4 pts.
iii) (2 points) Imagine a pocket of air with fixed mass moving around in the atmosphere. Let the pocket's volume be $\boldsymbol { V } = \boldsymbol { V } ( \boldsymbol { z } )$. In an adiabatic atmosphere, $p V ^ { \gamma } =$ const, where $\gamma = c _ { p } / c _ { v } = 1.39$. Now, $p V \propto T$ and $\rho \propto V ^ { - 1 }$, so

$$
p V ^ { \gamma } \propto V ^ { \gamma - 1 } T \propto \rho ^ { 1 - \gamma } T = \text { const. }
$$

Hence,

$$
\rho ( z ) = \rho _ { 0 } \left( \frac { T ( z ) } { T ( 0 ) } \right) ^ { \frac { 1 } { \gamma - 1 } } = \rho _ { 0 } \left( 1 - \frac { g z } { c _ { p } T _ { 0 } } \right) ^ { \frac { 1 } { \gamma - 1 } } .
$$
