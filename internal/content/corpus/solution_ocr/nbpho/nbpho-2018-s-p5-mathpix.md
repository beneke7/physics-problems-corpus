---
id: solution-ocr-nbpho-2018-s-p5
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2018-magnetic-billiard]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 5. MAGNETIC BILLIARD

i) After the first collision, let the velocities of the first and second ball be $v _ { 1 }$ and $v _ { 2 }$ respectively. Applying the conservation of energy gives $\frac { m v ^ { 2 } } { 2 } = \frac { m v _ { 1 } ^ { 2 } } { 2 } + \frac { m v _ { 2 } ^ { 2 } } { 2 }$ or $v ^ { 2 } = v _ { 1 } ^ { 2 } + v _ { 2 } ^ { 2 }$. Conservation of momentum yields $m v = m v _ { 1 } + m v _ { 2 }$ or $v = v _ { 1 } + v _ { 2 }$. Combining the two equations gives $v ^ { 2 } = v _ { 2 } ^ { 2 } + \left( v - v _ { 2 } \right) ^ { 2 } = v ^ { 2 } - 2 v v _ { 2 } + 2 v _ { 2 } ^ { 2 }$ and $v _ { 2 } = 0 ; v$. Since the first solution corresponds to the case when the collision doesn't happen, the speed of the second ball must be $v _ { 2 } = v$.
ii) The balls experience Lorentz force due to the external magnetic field. Since the Lorentz force is perpendicular to the line of motion and constant in magnitude, the balls move along a circular orbit. Equating the Lorentz force with centrifugal force gives $\frac { m v ^ { 2 } } { R } = q v B$. Thus, $R = \frac { m v } { q B }$ and $\omega = \frac { v } { R } = \frac { q B } { m }$. This means that one of the charges moves along the orbit clockwise and the other anticlockwise.

After each collision, one of the balls moves at speed $v$ while the other one is at rest. The moving ball travels a part of the full cyclotron period (either clockwise or anticlockwise, depending on the charge) before making a headon collision with the ball at rest. The momentum is given over to the first ball and the previously moving ball stays at rest and the motion starts once again. During the subsequent collisions, the balls start drifting in one direction as can be seen in the figure.
![](../../../figures/solution-ocr/1565e9f092e424f32f0af564.jpg)
iii) The average velocity of the balls is equal to the average speed of the collision points. From the figure, it can be seen that the direction of the average velocity is $\pi - \alpha$ clockwise from the initial direction of the incoming ball, where $\alpha = \arctan \frac { 2 r } { R }$. The collision point moves by $d = r \cos \alpha$ between two subsequent collisions.


In between the two collisions, one of the balls moves $2 \pi - 2 \alpha$ along a cyclotron orbit. The time taken is then $t = \frac { 2 \pi - 2 \alpha } { \omega } = \frac { 2 m } { q B } \left( \pi - \arctan \frac { 2 r } { R } \right)$ and the average velocity is

$$
\begin{aligned}
v _ { a v g } & = \frac { d } { t } = \frac { r \omega \cos \alpha } { 2 ( \pi - \alpha ) } = \frac { v r R } { R \sqrt { 4 r ^ { 2 } + R ^ { 2 } } ( \pi - \alpha ) } = \\
& = \frac { v } { \sqrt { 4 + \frac { R ^ { 2 } } { r ^ { 2 } } } \left( \pi - \arctan \frac { 2 r } { R } \right) } .
\end{aligned}
$$

iv) Let the velocities of the two balls at any moment of time be $\vec { v } _ { 1 }$ and $\vec { v } _ { 2 }$. The velocity of the centre of mass is then $\vec { v } _ { C M } = \frac { \vec { v } _ { 1 } + \vec { v } _ { 2 } } { 2 }$. The equation of motion of the system is

$$
q \vec { v } _ { 1 } \times \vec { B } - \vec { F } + q \vec { v } _ { 2 } \times \vec { B } + \vec { F } = m \dot { \vec { v } } _ { 1 } + m \dot { \vec { v } } _ { 2 } ,
$$

where $\vec { F }$ is the force between the two balls, either the elastic forces during a collision or the electrostatic forces. Then

$$
\begin{gathered}
q \left( \vec { v } _ { 1 } + \vec { v } _ { 2 } \right) \times \vec { B } = m \frac { \mathrm {~d} } { \mathrm {~d} t } \left( \vec { v } _ { 1 } + \vec { v } _ { 2 } \right) , \\
q \vec { v } _ { C M } \times \vec { B } = m \frac { \mathrm {~d} } { \mathrm {~d} t } \vec { v } _ { C M } .
\end{gathered}
$$

This means that the centre of mass of the system undergoes cyclotronic motion with a radius of $R = \frac { m v } { q B }$. Because every collision point can only be located where the center of mass is, the collision points must also be limited to the same circle. Thus, the maximum distance between any two collisions is $2 R = \frac { 2 m v } { q B }$
