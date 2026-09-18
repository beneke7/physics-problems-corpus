---
id: solution-ocr-eupho-2020-t-s-t2
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2020_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2020-T2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## T2: Mechanical accelerator

![](../../../figures/solution-ocr/f965e8f699c1e96d672457bd.jpg)
Figure 2: Mechanical accelerator

Solution I. Part 1: Thread in contact with the cylinder. The velocity of the mass $P$ can be decomposed into longitudinal component $v _ { l }$ along the thread, and a transverse component $v _ { \perp }$ perpendicular to the thread:

$$
\vec { v } = v _ { l } \vec { e } _ { 1 } + v _ { \perp } \vec { e } _ { 2 }
$$

where the unit vectors $\vec { e } _ { 1 }$ and $\vec { e } _ { 2 }$ are parallel and perpendicular to the thread, respectively (see Fig. 2). Since the thread is inextensible, the longitudinal component is constant: $v _ { l } = - u$, i.e.

$$
\vec { v } = - u \vec { e } _ { 1 } + v _ { \perp } \vec { e } _ { 2 }
$$

The acceleration of $P$ is, respectively:

$$
\vec { a } = \frac { d \vec { v } } { d t } = - u \frac { d \vec { e } _ { 1 } } { d t } + v _ { \perp } \frac { d \vec { e } _ { 2 } } { d t } + \frac { d v _ { \perp } } { d t } \vec { e } _ { 2 }
$$


Vectors $\vec { e } _ { 1 }$ and $\vec { e } _ { 2 }$ form a coordinate system, which rotates as a rigid object with an angular velocity:

$$
\vec { \omega } = \frac { d \phi } { d t } \vec { e } _ { 3 }
$$

where $\vec { e } _ { 3 } = \vec { e } _ { 1 } \times \vec { e } _ { 2 }$ is a unit vector perpendicular to the plane of motion, i.e. along the cylinder axis, and $\phi$ is the angle between the thread and the X-axis. Therefore, the time derivatives of the basis vectors are:

$$
\frac { d \vec { e } _ { 1 } } { d t } = \vec { \omega } \times \vec { e } _ { 1 } = \frac { d \phi } { d t } \vec { e } _ { 2 }
$$

and

$$
\frac { d \vec { e } _ { 2 } } { d t } = \vec { \omega } \times \vec { e } _ { 2 } = - \frac { d \phi } { d t } \vec { e } _ { 1 }
$$

In this way, the acceleration of $P$ can be represented in terms of the angular velocity:

$$
\vec { a } = - v _ { \perp } \frac { d \phi } { d t } \vec { e } _ { 1 } + \left( - u \frac { d \phi } { d t } + \frac { d v _ { \perp } } { d t } \right) \vec { e } _ { 2 }
$$

The only force, acting on $P$, is the tension of the thread. Therefore, the component of the acceleration perpendicular to the tread, i.e. along $\vec { e } _ { 2 }$, is null:

$$
- u \frac { d \phi } { d t } + \frac { d v _ { \perp } } { d t } = 0
$$

After integration over time, we obtain a relationship between the transverse velocity, acquired by $P$, and the angle of rotation of the thread:

$$
v _ { \perp } = u \phi
$$

The end of the tread turns at a total angle of $2 \pi N$ until the tread detaches from the cylinder completely. Therefore, the transverse component of the velocity of $P$ at the moment of detachment is:

$$
v _ { \perp } = 2 \pi N u
$$

and the magnitude of velocity:

$$
v = \sqrt { v _ { l } ^ { 2 } + v _ { \perp } ^ { 2 } } = u \sqrt { ( 2 \pi N ) ^ { 2 } + 1 }
$$

Part 2: Thread detached fom the cylinder. This expression, however, still does not represent the maximum velocity attained by $P$. In the frame of reference of the free end of the thread, the mass continues to rotate about the end of the thread. The velocity of $P$, relative to Earth, reaches maximum in the moment when the thread reaches right angle with X-axis, i.e. the transverse component of velocity of $P$ aligns with $\vec { u }$ :

$$
v _ { \max } = u ( 2 \pi N + 1 )
$$

Solution II. Part 1: Thread in contact with the cylinder. Consider a point $Q$ on the end of the thread being pulled that coincided with $P$ at the moment when it touched the cylinder. Consider motion of the thread in a system of reference (SR), which rotates at angular speed $\omega = u / R$ around the center of the cylinder. In that SR the part of the thread in contact with the cylinder is at rest and the point $Q$ rotates around the cylinder with the angular velocity $\omega _ { Q } = - \omega$ (see the figure).

Since the middle part of the thread is at rest, energy of the mass $P$ is conserved. For the same reason, the velocity $v _ { P }$ of $P$ is perpendicular to the thread. Therefore the kinetic energy acquired by the mass in the rotating frame is equal to the decrease of its centrifugal potential energy:

$$
\frac { 1 } { 2 } m v _ { P } ^ { 2 } = - \frac { 1 } { 2 } m \omega ^ { 2 } R ^ { 2 } + \frac { 1 } { 2 } m \omega ^ { 2 } r ^ { 2 } = \frac { 1 } { 2 } m \omega ^ { 2 } l _ { P } ^ { 2 }
$$

where $l _ { P }$ is the length of the unwound part of the thread on the side of the mass $P$ (see the figure). Therefore, the mass $P$ rotates around the fixture point of the thread with a velocity:

$$
v _ { P } = \frac { u } { R } l _ { P }
$$

and a constant angular velocity:

$$
\omega _ { P } = \frac { u } { R } = \omega .
$$

Since $\omega _ { P } = - \omega _ { Q }$, in the rotating SR the two ends of the thread will unwind symmetrically and the lengths of the two straight parts of the string will be equal at any moment of time. Therefore, at the moment of detachment:

$$
l _ { P } = \frac { 1 } { 2 } ( 2 \pi R N ) = \pi N R
$$

and the detachment velocity of $P$ is, respectively:

$$
v _ { P } = \pi N u
$$

When transforming the velocity of $P$ to the Earth's SR, the velocity $\vec { v } _ { P }$ should be added to the rotational velocity $\vec { \omega } \times \vec { r }$. It is easy to establish that the result for the transverse component of $P$ is:

$$
v _ { \perp } = 2 v _ { P } = 2 \pi N u
$$

Part 2: Thread detached from the cylinder. In that part we proceed exactly as in Part 2 of the first solution.

Solution III. Part 1: The thread in contact with the cylinder
Like in Solution I we decompose the velocity into longitudinal and transverse components, and come to the conclusion that the longitudinal component is $v _ { l } =$ $- u$. Afterwards, the acceleration of $P$ is expressed. In this case, however, we consider the longitudinal (centripetal) component of the acceleration:

$$
a _ { l } = - v _ { \perp } ^ { 2 } / l \equiv - v _ { \perp } \frac { d \phi } { d t }
$$

From the second Newton's law we obtain the tension $F$ of the thread:

$$
F = - m v _ { \perp } \frac { d \phi } { d t }
$$

The rate of change of the kinetic energy of the mass is equal to the power of the tension force:

$$
\frac { d E _ { k } } { d t } = F v _ { l } = + m v _ { \perp } \frac { d \phi } { d t } u
$$

Taking into account that:

$$
E _ { k } = \frac { 1 } { 2 } m \left( u ^ { 2 } + v _ { \perp } ^ { 2 } \right)
$$


and taking the first derivative from that expression, we obtain: $m v _ { \perp } d v _ { \perp } / d t = m v _ { \perp } d \phi / d t u$, or:

$$
\frac { d v _ { \perp } } { d t } = u \frac { d \phi } { d t }
$$

From that point on we proceed exactly as in the first solution.

| Grading scheme: T2 part 1, Solution I |  |
| :--- | :--- |
| $\vec { v }$ is decomposed into $v _ { l }$ and $v _ { \perp }$ | 1.0 p |
| By condition of inextensibility $v _ { l } = - u$ | 1.0 p |
| Components of acceleration in terms of $d \phi / d t$ | 2.0 p |
| The tension force is along the thread and $a _ { \perp } = 0$ | 1.0 p |
| Finding $d v _ { \perp } / d t = u \cdot d \phi / d t$ | 1.0 p |
| At the moment of detachment $v _ { \perp } = 2 \pi N u$ | 1.0 p |
| Final $v = u \sqrt { 1 + ( 2 \pi N ) ^ { 2 } }$ | 1.0 p |
| Total for part 1: | 8.0 p |


| Grading scheme: T2 part 1, Solution II |  |
| :--- | :--- |
| Introduction of rotational SR with angular velocity $\omega = u / R$ | 0.5 p |
| States that the wound string is at rest | 0.5 p |
| Showing that the energy of $P$ is conserved | 1.0 p |
| Showing that the centrifugal force has potential energy $E _ { P } = - m \omega ^ { 2 } r ^ { 2 } / 2$ | 1.0 p |
| Conservation of energy equation | 1.0 p |
| Proving that $l _ { P } = l _ { Q }$ | 0.5 p |
| Finding length $l _ { P } = \pi N R$ at the moment of release | 0.5 p |
| Finding $v _ { P } = \pi N u$ at the moment of release | 1.0 p |
| Rotational velocity of the non-inertial SR in point $\mathrm { P } \overrightarrow { v _ { \text {rot } } } = \vec { \omega } \times \vec { r }$ | 0.5 p |
| Finding $v _ { r o t \perp } = \pi N u$ | 0.5 p |
| Final velocity relative to Earth $v _ { \perp } = 2 \pi N u$ | 1 p |
| Total for part 1: | 8.0 p |


| Grading scheme: T2 part 1, Solution III |  |
| :--- | :--- |
| $\vec { v }$ is decomposed into $v _ { l }$ and $v _ { \perp }$ | 1.0 p |
| By condition of inextensibility $v _ { l } = - u$ | 1.0 p |
| Deriving $v _ { \perp } = l d \phi / d t$ | 0.5 p |
| Finding longitudinal acceleration $a _ { l } = v _ { \perp } ^ { 2 } / l$ | 0.5 p |
| Using Newton's second law $F = m a _ { l }$ | 0.5 p |
| Writing the kinetic energy $E _ { k } = m \left( u ^ { 2 } + \right. \left. v _ { \perp } ^ { 2 } \right) / 2$ | 0.5 p |
| Using the work-energy theorem $d E _ { k } / d t =$ Fu | 1.0 p |
| Deriving $d v _ { \perp } / d t = u d \phi / d t$ | 1.0 p |
| At the moment of detachment $v _ { \perp } = 2 \pi N u$ | 1.0 p |
| Final $v = u \sqrt { 1 + ( 2 \pi N ) ^ { 2 } }$ | 1.0 p |
| Total for part 1: | 8.0 p |


| Grading scheme: T2 part 2, both solutions |  |
| :--- | :--- |
| Position in which maximum speed is achieved | 1.0 p |
| Value of $v _ { \text {max } }$ | 1.0 p |
| Total for part 2 | 2.0 p |
