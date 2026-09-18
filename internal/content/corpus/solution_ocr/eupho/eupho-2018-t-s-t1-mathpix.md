---
id: solution-ocr-eupho-2018-t-s-t1
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2018_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2018-T1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 1 Three balls

Let the ball $A$ is given an initial velocity $v$ along the axis $Y$, which is perpendicular to the rod. The total momentum of the system conserves, therefore the center-of-mass (CM) of the system moves with a constant velocity:

$$
v _ { \mathrm { CM } } = \frac { m v } { 3 m } = \frac { v } { 3 }
$$

along $Y$. In what follows, we will work in the CM frame of reference, which is an inertial system of reference. Therefore, in the CM frame the laws of conservation of energy, momentum, and the angular momentum hold true. The initial velocities of the three balls along $Y$ are:

$$
v _ { A } = \frac { 2 v } { 3 } , \quad v _ { B } = v _ { C } = - \frac { v } { 3 } .
$$

Correspondingly, the total kinetic energy of the balls is:

$$
E = \frac { m v ^ { 2 } } { 2 } \left( \frac { 4 } { 9 } + \frac { 1 } { 9 } + \frac { 1 } { 9 } \right) = \frac { m v ^ { 2 } } { 3 }
$$

and the total angular momentum with respect to the CM equals:

$$
L = m \frac { 2 v } { 3 } \ell - m \frac { v } { 3 } ( - \ell ) = m v \ell .
$$

In any moment the three balls form an isosceles triangle with an angle $2 \varphi$ at the top vertex. The distance between $A$ and $C$ is minimal when either $\varphi = 0$, or $\dot { \varphi } = 0$. For $\varphi = 0$, however, the laws of conservation are not consistent with the rigidity of the rods. Therefore, at the minimal distance $\dot { \varphi } = 0$, and in this particular instance the system behaves as a rigid body whose moment of inertia with respect to the CM can be obtained through:

$$
\begin{equation*}
I = \frac { L ^ { 2 } } { 2 E } = \frac { 3 } { 2 } m l ^ { 2 } . \tag{1}
\end{equation*}
$$

On the other hand, the moment of inertia $I$ could be found independently from geometric considerations. Although, $I$ could be found using the distances from the balls to the CM (medicentre of a triangle), it is more convenient to use this relatively unknown formula for the moment of inertia of a collection of point masses with respect to CM:

$$
I = \frac { \sum _ { i , j } m _ { i } m _ { j } \left( \mathbf { r } _ { i } - \mathbf { r } _ { j } \right) ^ { 2 } } { \sum _ { i } m _ { i } } .
$$

In our case:

$$
\begin{equation*}
I = \frac { m ^ { 2 } } { 3 m } \left( A B ^ { 2 } + B C ^ { 2 } + A C ^ { 2 } \right) = \frac { m } { 3 } \left( 2 \ell ^ { 2 } + d ^ { 2 } \right) . \tag{2}
\end{equation*}
$$

From (1) and (2), we obtain the minimal distance:

$$
d = \ell \sqrt { \frac { 5 } { 2 } } \approx 1.58 \ell
$$
