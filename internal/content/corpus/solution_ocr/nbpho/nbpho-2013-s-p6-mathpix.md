---
id: solution-ocr-nbpho-2013-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2013-sphere-and-cylinder]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 6. SPHERE AND CYLINDER (7 points)

i) (2 points) Since no energy is lost due to friction on sliding, the change in potential energy $\Delta E _ { p } = m g H$ is transformed to kinetic energy consisting of both translational and rotational motion. Taking into account the rolling condition $v = \omega r$, we have

$$
\begin{aligned}
\Delta E _ { p } & = E _ { k } = \frac { 1 } { 2 } m v ^ { 2 } + \frac { 1 } { 2 } I \omega ^ { 2 } \\
& = \frac { 1 } { 2 } m v ^ { 2 } + \frac { 1 } { 2 } k m v ^ { 2 } = \frac { 1 } { 2 } ( 1 + k ) m v ^ { 2 } ,
\end{aligned}
$$

where general expression $I = k m r ^ { 2 }$ for moment of inertia is used. Therefore, $v ^ { 2 } =$ $2 g H / ( 1 + k )$.

On the other hand, the bodies travel distance $x = H / \sin \alpha$ along the slope with a constant acceleration $a _ { \| }$directed parallel to the surface. Let's express $a _ { \| }$from the equation $v ^ { 2 } = 2 a _ { \| } x$ :

$$
a _ { \| } = g \sin \alpha / ( 1 + k ) .
$$

The times are now easy to calculate as $t =$ $v / a _ { \| }$, giving

$$
t = \sqrt { 1 + k } \left( \frac { 2 H } { g \sin ^ { 2 } \alpha } \right) ^ { \frac { 1 } { 2 } } .
$$

Replacing $k _ { s } = \frac { 2 } { 5 }$ for sphere and $k _ { c } = \frac { 1 } { 2 }$ for cylinder, we find that the sphere is faster by a relative factor

$$
\gamma = \sqrt { \frac { 1 + k _ { c } } { 1 + k _ { s } } } - 1 = \sqrt { \frac { 15 } { 14 } } - 1 \approx 0.035 .
$$

ii) (2.5 points) As found in previous subpart, the acceleration's parallel component to the slope $a _ { \| }$is smaller than the contribution by gravity $g \sin \alpha$. The difference is contributed by the friction force $F _ { f } = m g \sin \alpha - m a \| _ { \text {. } }$. Sliding starts, if the necessary friction reaches the maximal value $F _ { \text {max } } = \mu N = \mu m g \cos \alpha$. Equating the two expressions gives

$$
\begin{gathered}
m g \sin \alpha - m g \sin \alpha / ( 1 + k ) = \mu m g \cos \alpha , \\
\tan \alpha = \mu \frac { 1 + k } { k } .
\end{gathered}
$$

For the cylinder the limiting angle is $\alpha _ { 0 } =$ $\arctan ( 3 \mu )$.
iii) (2.5 points) When the maximal friction force is reached, the motion goes into rolling and sliding mode, where the total force component along the surface is given by the difference of gravity and friction:

$$
F _ { \| } = m g \sin \alpha - F _ { \max } = m g \sin \alpha - \mu m g \cos \alpha .
$$

We note that the acceleration in this mode does not depend on the moment of inertia any more.

Calculating the limiting angle of slipping mode also for the sphere $\alpha _ { \text {sph } } = \arctan \left( \frac { 7 } { 2 } \mu \right) >$


$\alpha _ { 0 }$ shows that for all angles larger than $\alpha _ { m } = \alpha _ { \text {sph } }$ both bodies are in the slipping mode and thus have equal accelerations and arrival times.
