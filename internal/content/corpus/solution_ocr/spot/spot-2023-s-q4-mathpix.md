---
id: solution-ocr-spot-2023-s-q4
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2023-q4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
4. The energy transferred by an electromagnetic wave per unit time per unit surface area is given by the Poynting vector

$$
\mathbf { S } = \frac { 1 } { \mu _ { 0 } } \mathbf { E } \times \mathbf { B } ,
$$

where the direction of the vector $\mathbf { S }$ is the direction of energy transfer.

(a) Show the volume density of the linear momentum of an electromagnetic wave is
$$
\mathbf { p } _ { V } = \frac { 1 } { c ^ { 2 } \mu _ { 0 } } \mathbf { E } \times \mathbf { B } ,
$$
where $c$ is the speed of light.

We now consider a "paradox" regarding the conservation of angular momentum. Two long, coaxial cylindrical shells, shown in the figure, both have length $l$. The inner one has radius $a$ and electric charge $+ Q$ uniformly distributed along its surface, while the outer one has radius $b > a$ and electric charge $- Q$ uniformly distributed over its surface.

The cylinders are made of the same material, having mass per unit area equal to $\sigma$. Between them, there is another long solenoid with radius $R ( a < R < b )$ that is also coaxial with the two cylinders. The solenoid has $n$ turns per unit length and carries an electric current $I$.


![](../../../figures/solution-ocr/2704f646a9fc89a43b1f0a80.jpg)
The solenoid is held fixed in space, but the cylindrical shells can freely and independently rotate around their common axis. Initially, all parts of the system are at rest. When the current in the solenoid is gradually reduced to zero, the cylinders begin to rotate.

(b) Find the final angular velocities of each of the cylinders, giving their magnitude and orientation.
(c) Since no external force acts on the system, the net angular momentum should be conserved. Where did the extra angular momentum come from? Support your answer with equations.

Solution: Adapted from Romanian Masters of Physics 2017 T1.

(a) The momentum of the photons in the electromagnetic wave is
$$
\delta p = \frac { \delta E } { c } = \frac { S \delta A \delta t } { c }
$$
where $c$ is the speed of light. Therefore,
$$
p _ { V } = \frac { \delta p } { \delta V } = \frac { S \delta A \delta t } { c \delta A \delta l } = \frac { S } { c \frac { \delta l } { \delta t } } = \frac { S } { c ^ { 2 } } .
$$
In vector form,
$$
\mathbf { p } _ { V } = \frac { 1 } { c ^ { 2 } \mu _ { 0 } } \mathbf { E } \times \mathbf { B } = \varepsilon _ { 0 } \mathbf { E } \times \mathbf { B } .
$$
    1 - Expression for momentum of a photon
    1 - Correct interpretation of relationship to Poynting vector
(b) The current through the solenoid produces inside it a magnetic field given by
$$
\mathbf { B } = \mu _ { 0 } n I \hat { \mathbf { z } } , \quad r < R .
$$

When the current decreases, the magnetic field strength decreases, inducing an electric field in accordance with Faraday's law:

$$
\mathbf { E } \cdot 2 \pi r \hat { \boldsymbol { \phi } } = - \frac { d } { d t } ( \mathbf { B } \cdot \mathbf { A } ) .
$$

If $r < R$, then $\mathbf { A } = \pi r ^ { 2 } \hat { \mathbf { z } }$, and

$$
\mathbf { E } = - \frac { 1 } { 2 } \mu _ { 0 } n \frac { d I } { d t } r \hat { \boldsymbol { \phi } }
$$

If $r > R$, then $\mathbf { A } = \pi R ^ { 2 } \hat { \mathbf { z } }$, and

$$
\mathbf { E } = - \frac { 1 } { 2 } \mu _ { 0 } n \frac { d I } { d t } \frac { R ^ { 2 } } { r } \hat { \boldsymbol { \phi } } .
$$

The torque on the inner cylinder is

$$
\tau = \mathbf { r } \times Q \mathbf { E } = - \frac { 1 } { 2 } \mu _ { 0 } n Q a ^ { 2 } \frac { d I } { d t } \hat { \mathbf { r } } \times \hat { \boldsymbol { \phi } } = - \frac { 1 } { 2 } \mu _ { 0 } n Q a ^ { 2 } \frac { d I } { d t } \hat { \mathbf { z } } .
$$

The final angular momentum of the inner cylinder is

$$
\Delta \mathbf { L } _ { a } = - \frac { 1 } { 2 } \mu _ { 0 } n Q a ^ { 2 } \Delta I \hat { \mathbf { z } } = \frac { 1 } { 2 } \mu _ { 0 } n Q a ^ { 2 } I \hat { \mathbf { z } }
$$

The moment of inertia of the cylinder is equal to

$$
J = m _ { a } a ^ { 2 } = 2 \pi l \sigma a ^ { 3 }
$$

and the final angular velocity is thus

$$
\omega _ { a } = \frac { \mu _ { 0 } n Q I } { 4 \pi l \sigma a }
$$

in the counterclockwise direction.
The torque on the outer cylinder is

$$
\tau = \mathbf { r } \times ( - Q ) \mathbf { E } = \frac { 1 } { 2 } \mu _ { 0 } n Q R ^ { 2 } \frac { d I } { d t } .
$$

The increase in angular momentum is

$$
\Delta L = \frac { 1 } { 2 } \mu _ { 0 } n Q R ^ { 2 } \Delta I \hat { \mathbf { z } } = - \frac { 1 } { 2 } \mu _ { 0 } n Q R ^ { 2 } I \hat { \mathbf { z } } .
$$

We know that the moment of inertia of the outer cylinder is

$$
J = m _ { b } b ^ { 2 } = 2 \pi l \sigma b ^ { 3 } ,
$$

therefore the final angular velocity is

$$
\omega _ { b } = \frac { \mu _ { 0 } n Q I R ^ { 2 } } { 4 \pi l \sigma b ^ { 3 } }
$$

clockwise.

1 - Correct usage of Faraday's Law
1 - Correct torque on inner and outer cylinder
1 - Correct angular momentum on inner and outer cylinder
1 - Correct angular velocity and direction of inner and outer cylinder

(c) In the region between the cylinders, there is an electric field, given by Gauss' law
$$
\mathbf { E } = \frac { Q } { 2 \pi \varepsilon _ { 0 } l r } \hat { \mathbf { r } } .
$$
When there is a current through the solenoid, there is a magnetic field inside it, so the linear momentum density of the fields is
$$
\mathbf { p } _ { V } = \varepsilon _ { 0 } \mathbf { E } \times \mathbf { B } = \frac { Q } { 2 \pi l r } \hat { \mathbf { r } } \times \mu _ { 0 } n I \hat { \mathbf { z } } = - \frac { \mu _ { 0 } n I Q } { 2 \pi l r } \hat { \boldsymbol { \phi } } .
$$
The angular momentum density of the fields is
$$
\ell _ { e m } = \mathbf { r } \times \mathbf { p } _ { V } = - \frac { \mu _ { 0 } n I Q } { 2 \pi l } \hat { \mathbf { r } } \times \hat { \boldsymbol { \phi } } = - \frac { \mu _ { 0 } n I Q } { 2 \pi l } \hat { \mathbf { z } }
$$
The total angular momentum of the fields is
$$
\mathbf { L } _ { e m } = \ell _ { e m } \cdot \pi \left( R ^ { 2 } - a ^ { 2 } \right) l = - \frac { 1 } { 2 } \mu _ { 0 } n I Q \left( R ^ { 2 } - a ^ { 2 } \right) \hat { \mathbf { z } }
$$
We see that from the previous part,
$$
\mathbf { L } _ { e m } = \mathbf { L } _ { a } + \mathbf { L } _ { b }
$$
which means that the field angular momentum is totally transformed into mechanical angular momentum of the cylinders.
1 - Correct application of Gauss' Law to find linear momentum density
1 - Correct angular momentum density
1 - Correct conclusion that EM field angular momentum is transformed into mechanical angular momentum

Q4 total: 9
