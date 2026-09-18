---
id: solution-ocr-kevin-zhou-e1sol-ex005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-ex005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 5
Consider two uniformly charged spherical balls with radii $a _ { i }$, both with charge $q$, and their centers separated by a distance $r > a _ { 1 } + a _ { 2 }$. What is the net force of the first on the second?

Solution
It might seem obvious that the answer is $q ^ { 2 } / 4 \pi \epsilon _ { 0 } r ^ { 2 }$, with no dependence on $a _ { 1 }$ and $a _ { 2 }$. In fact, if you've done any orbital mechanics, you've almost certainly assumed that the force between two spherical bodies (such as the Earth and Sun) is $G m _ { 1 } m _ { 2 } / r ^ { 2 }$, which is equivalent.

This has a simple but slightly tricky proof. By the shell theorem, we can set $a _ { 1 } = 0$, replacing the first ball with a point charge, because this produces the same field at the second ball. But the force on the second ball depends on the electric field at every point on it, which


seems to require doing an integral. To avoid this, we use Newton's third law, which tells us it's equivalent to compute the force on the first ball. To compute that, we may set $a _ { 2 } = 0$ by the shell theorem again. This reduces us to the case of two point charges, giving the answer.

Example 6: Purcell 1.28
Consider a point charge $q$. Draw any imaginary sphere of radius $R$ around the charge. Show that the average of the electric field over the surface of the sphere is zero.

Solution
Imagine placing a uniform surface charge $\sigma$ on the sphere. Then the average of the point charge's electric field over the sphere times $4 \pi R ^ { 2 } \sigma$ is the total force of the point charge on the charged sphere. But this is equal in magnitude to the force of the charged sphere on the point charge, which must be zero by the shell theorem. Thus the average field over the sphere has to vanish.
[3] Problem 8 (Purcell 1.28). Some extensions of the previous example.

(a) Show that if the charge $q$ is instead outside the sphere, a distance $r > R$ from its center, the average electric field over the surface of the sphere is the same as the electric field at the center of the sphere.
(b) Show that for any overall neutral charge distribution contained within a sphere of radius $R$, the average electric field over the interior of the sphere is $- \mathbf { p } / 4 \pi \epsilon _ { 0 } R ^ { 3 }$ where $\mathbf { p }$ is the total dipole moment.

Solution. The same Newton's third law trick will work for both parts.

(a) Let the desired answer be $\mathbf { E } _ { \text {avg } }$ and let the charge $q$ be at r. Now imagine a charge $Q$ is uniformly distributed over the surface of the sphere. The force of the charge $q$ on the distributed charge $Q$ is precisely $\mathbf { F } _ { q Q } = Q \mathbf { E } _ { \text {avg } }$. But we also know that
$$
\mathbf { F } _ { q Q } = - \mathbf { F } _ { Q q } = - \frac { k Q q } { r ^ { 2 } } \hat { \mathbf { r } }
$$
by Newton's third law and the shell theorem. Therefore we have
$$
\mathbf { E } _ { \mathrm { avg } } = - \frac { k q } { r ^ { 2 } } \hat { \mathbf { r } }
$$
which is precisely the electric field at the center of the sphere due to $q$. (Note that $\hat { \mathbf { r } }$ points from the center of the sphere to the charge $q$.)
(b) Let the desired answer be $\mathbf { E } _ { \text {avg } }$. Now imagine a charge $Q$ is uniformly distributed over the volume of the sphere. The force of the charge distribution (with charge density $\rho ( \mathbf { x } )$ ) on the distributed charge $Q$ is precisely $\mathbf { F } _ { q Q } = Q \mathbf { E } _ { \text {avg } }$. But we also know that
$$
\mathbf { F } _ { q Q } = - \mathbf { F } _ { Q q } = - \int \rho ( \mathbf { r } ) \mathbf { E } _ { Q } ( \mathbf { r } ) d ^ { 3 } \mathbf { r }
$$

where $\mathbf { E } _ { Q }$ is the field due to $Q$. Now, this field is easy to find, as it is just the field of a uniformly charged sphere, so

$$
\mathbf { E } _ { Q } = \frac { k Q } { R ^ { 3 } } \mathbf { r }
$$

as shown in problem 1. Putting this in the integral, we have

$$
Q \mathbf { E } _ { \mathrm { avg } } = - \frac { k Q } { R ^ { 3 } } \int \rho ( \mathbf { r } ) \mathbf { r } d ^ { 3 } \mathbf { r }
$$

so by the definition of the dipole moment,

$$
\mathbf { E } _ { \mathrm { avg } } = - \frac { k } { R ^ { 3 } } \int \rho ( \mathbf { r } ) \mathbf { r } d ^ { 3 } \mathbf { r } = - \frac { k \mathbf { p } } { R ^ { 3 } }
$$

as desired.
Idea 5
The integral $\int d \mathbf { S }$ over a surface with a fixed boundary is independent of the surface.
We proved this in the surface tension section of M2 using a mechanical argument. For a proof using vector calculus, see problem 1.62 of Griffiths.

[3] Problem 9. A hemispherical shell of radius $R$ has uniform charge density $\sigma$ and is centered at the origin. Find the electric field at the origin. (Hint: combine the previous two ideas.)
Solution. Place a point charge $q$ at the origin. To find the magnitude of the field, we will compute the force on the hemisphere divided by $q$. The force on the hemisphere is
$$
\int \frac { q } { 4 \pi \epsilon _ { 0 } R ^ { 2 } } \sigma d \mathbf { S } = \frac { q \sigma } { 4 \pi \epsilon _ { 0 } R ^ { 2 } } \int d \mathbf { S }
$$
By idea 5, we can replace the surface of integration with a flat disk, so $\left| \int d \mathbf { S } \right| = \pi R ^ { 2 }$. Thus, the force is $F = q \sigma / 4 \epsilon _ { 0 }$, so the field is
$$
E = \frac { \sigma } { 4 \epsilon _ { 0 } } .
$$
[3] Problem 10. A point charge $q$ is placed a distance $a / 2$ above the center of a square of charge density $\sigma$ and side length $a$. Find the force of the square on the point charge.
Solution. Don't worry if you found this one quite hard, because its solution uses a unique trick. It's equivalent to find the force of the point charge on the square. Set up coordinates so that the square is in the $x y$ plane, and its center is the origin. Then we have
$$
\mathbf { F } = \sigma \int \mathbf { E } d S
$$
where the surface integral is over the square. On the other hand, we know that $\mathbf { F }$ is along the $\hat { \mathbf { z } }$ direction by symmetry, so
$$
F = \mathbf { F } \cdot \hat { \mathbf { z } } = \sigma \int E _ { z } d S
$$
Now, since $d \mathbf { S }$ is parallel to $\hat { \mathbf { z } }$, this is in fact the same thing as
$$
F = \sigma \int \mathbf { E } \cdot d \mathbf { S }
$$

where the integral is just the electric flux through the square! By symmetry, this flux is $q / 6 \epsilon _ { 0 }$, so

$$
F = \frac { \sigma q } { 6 \epsilon _ { 0 } } .
$$

I've never seen this idea used anywhere else, and I generally try to avoid covering single-use tricks. But this one is particularly nice, and it'll be necessary to set up a related discussion later.
