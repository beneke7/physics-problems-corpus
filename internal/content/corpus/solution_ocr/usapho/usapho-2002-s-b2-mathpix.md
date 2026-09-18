---
id: solution-ocr-usapho-2002-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2002_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2002-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
B2. (5) a. If the charge $Q$ is uniformly distributed, the charge density is $\quad \rho = \frac { Q } { \frac { 4 } { 3 } \pi R ^ { 3 } }$. The charge in a sphere of radius $R / 2$ is

$$
q = \rho \frac { 4 } { 3 } \pi \left( \frac { R } { 2 } \right) ^ { 3 } = \frac { 1 } { 8 } \rho ^ { 4 } \pi R ^ { 3 } = \frac { 1 } { 3 } \frac { Q } { \frac { 4 } { 3 } \pi R ^ { 3 } } \frac { 4 } { 3 } \pi R ^ { 3 } = \frac { 1 } { 8 } Q .
$$

(10) b. The $x$-axis is totally outside the cavity. By Gauss's Law the field outside a spherical symmetric charge distribution of radius $R / 2$ centered on $z = R / 2$ is the same as that due to point charge at the center with the same total charge. So on the $x$-axis the field is the same as that due to uniform charge distribution of total charge $Q$ and radius $R$.
From Gauss's Law for a spherically symmetric charge distribution

$$
E = k \frac { Q _ { \text {enc } } } { R ^ { 2 } }
$$

where $k$ is Coulomb's constant and $Q _ { \text {enc } }$ is the total charge enclosed by a Gaussian sphere of radius $R$.
Outside the sphere

$$
Q _ { e n c } = Q
$$

For $| x | > R$

$$
E = k \frac { Q } { R ^ { 2 } } \quad \text { in a direction out from the origin. }
$$

Inside the sphere

$$
Q _ { \text {enc } } = \rho \frac { 4 } { 3 } \pi | x | ^ { 3 } = \frac { Q } { \frac { 4 } { 3 } \pi R ^ { 3 } } \frac { 4 } { 3 } \pi | x | ^ { 3 } = \frac { Q | x | ^ { 3 } } { R ^ { 2 } }
$$

For $| x | < R$

$$
E = k \frac { 1 } { x ^ { 2 } } \frac { Q | x | ^ { 3 } } { R ^ { 3 } } = k \frac { Q | x | } { R ^ { 3 } } \quad \text { in a direction out from the origin. }
$$

(10) c. The total field can be considered the sum of two terms. That due to:
a sphere of radius $R$ centered on the origin with uniformly distributed total charge $+ Q$.
a sphere of radius $R / 2$ centered on $z = R / 2$ with uniformly distributed total charge $- Q / 8$.
Outside the large sphere both fields are equal to those due to point charges at their centers.
For $| z | > R$

$$
E = k \frac { Q } { z ^ { 2 } } - k \frac { Q } { 8 ( z - R / 2 ) ^ { 2 } } \quad \text { out from the origin. }
$$

Inside the large sphere but outside the cavity, treat the cavity as a point charge at its center and the sphere as an extended distribution
For $- R < z < 0$

$$
E = k \frac { Q | z | } { R ^ { 3 } } - k \frac { Q } { 8 ( z - R / 2 ) ^ { 2 } } \quad \text { out from the origin. }
$$

Inside the cavity, treat both the sphere and cavities as extended charge distributions.

$$
\begin{array} { l l l }
0 < z < R / 2 & E = k \frac { Q z } { R ^ { 3 } } + k \frac { Q ( R / 2 - z ) } { 8 ( R / 2 ) ^ { 3 } } = k \frac { Q z } { R ^ { 3 } } + k \frac { Q ( R / 2 - z ) } { R ^ { 3 } } = k \frac { Q } { 2 R ^ { 2 } } & \text { out from the origin. } \\
R / 2 < z < R & E = k \frac { Q z } { R ^ { 3 } } - k \frac { Q ( z - R / 2 ) } { 8 ( R / 2 ) ^ { 3 } } = k \frac { Q z } { R ^ { 3 } } + k \frac { Q ( R / 2 - z ) } { R ^ { 3 } } = k \frac { Q } { 2 R ^ { 2 } } & \text { out from the origin. }
\end{array}
$$

(10) d. Outside the sphere, the electrostatic potential is the same as that due to a point charge of $+ Q$ at the origin and a point charge of $- Q / 8$ at $x = 0 , y = 0 , z = R / 2$.


Writing the distance from the origin as

$$
r = \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } }
$$

and the distance from at $x = 0 , y = 0 , z = R / 2$. as

$$
r ^ { \prime } = \sqrt { x ^ { 2 } + y ^ { 2 } + ( z - R / 2 ) ^ { 2 } } .
$$

The potential is

$$
V = k \frac { Q } { r } - k \frac { q } { r ^ { \prime } } = k \frac { Q } { \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } } } - k \frac { Q } { 8 \sqrt { x ^ { 2 } + y ^ { 2 } + ( z - R / 2 ) ^ { 2 } } }
$$

(10) e. In order to get the electrostatic potential in the form shown, expand $r ^ { \prime }$ in a binomial series.

$$
\begin{aligned}
& r ^ { \prime } = \sqrt { x ^ { 2 } + y ^ { 2 } + ( z - R / 2 ) ^ { 2 } } = \sqrt { x ^ { 2 } + y ^ { 2 } + z ^ { 2 } - z R + R ^ { 2 } / 4 } = \sqrt { r ^ { 2 } - z R + R ^ { 2 } / 4 } = r \sqrt { 1 - \frac { z R } { r ^ { 2 } } + \frac { R ^ { 2 } } { 4 r ^ { 2 } } } \\
& V = k \frac { Q } { r } - k \frac { q } { r ^ { \prime } } = k \frac { Q } { r } - k \frac { Q } { 8 r \sqrt { 1 - \frac { z R } { r ^ { 2 } } + \frac { R ^ { 2 } } { 4 r ^ { 2 } } } } = k \frac { Q } { r } - k \frac { Q } { 8 r } \left( 1 + \frac { 1 } { 2 } \frac { z R } { r ^ { 2 } } - \frac { 1 } { 2 } \frac { R ^ { 2 } } { 4 r ^ { 2 } } + \ldots \right) \approx k \left( \frac { 7 Q } { 8 r } - \frac { Q z R } { 16 r ^ { 3 } } + \ldots \right)
\end{aligned}
$$

Only terms of order $\frac { 1 } { r }$ and of order $\frac { 1 } { r ^ { 2 } } \left( \right.$ such as $\left. \frac { z } { r ^ { 3 } } \right)$ have been retained.
Comparing to the expression for $V$ given in 2Be
And with $z = \vec { r } \cdot \hat { k }$
Which gives

$$
\vec { b } \cdot \vec { r } = - \frac { Q z R } { 16 } = - \frac { Q ( \vec { r } \cdot \hat { k } ) R } { 16 } .
$$

(5) f. A point charge of $\frac { 7 } { 8 } Q$ at the origin and a dipole consisting of $- \frac { 1 } { 8 } Q$ at $( 0,0 , R / 2 )$ and $+ \frac { 1 } { 8 } Q$ at the origin.
