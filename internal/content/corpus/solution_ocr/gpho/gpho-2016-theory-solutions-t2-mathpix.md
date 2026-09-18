---
id: solution-ocr-gpho-2016-theory-solutions-t2
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2016_theory_solutions.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [gpho-2016-t2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Problem T2. Gravitational waves (10 points) Part A. Dipole radiation (2.4 points)

For the sake of convenience, let us denote $k = \frac { 1 } { 4 \pi \epsilon _ { 0 } }$
i. (1.4 pts) The total dipole moment can be expressed as $\vec { d } = - \vec { r } _ { 1 } e + \vec { r } _ { 2 } Z e$, (0.2 pts) where $\vec { r } _ { 1 }$ and $\vec { r } _ { 2 }$ are the position vectors of the electron and nucleus respectively. Then $\ddot { \vec { d } } = - \ddot { \overrightarrow { r _ { 1 } } } e + \ddot { \overrightarrow { r _ { 2 } } } Z e = - \frac { \vec { F } } { m } e - \frac { \vec { F } } { m _ { 1 } } Z e$,
(0.1 pts) but because the mass of the nucleus $m _ { 1 }$ is much larger than $m$, we can neglect the second term. Then

$$
\begin{equation*}
| \ddot { \vec { d } } | = \left| - \frac { \vec { F } } { m } e \right| = \frac { k Z e ^ { 3 } } { m r ^ { 2 } } \tag{0.3pts}
\end{equation*}
$$

$$
\begin{equation*}
P _ { e d } = \frac { \ddot { \vec { d } } ^ { 2 } } { 4 \pi \epsilon _ { 0 } c ^ { 3 } } = \left( \frac { k Z e ^ { 3 } } { m r ^ { 2 } } \right) ^ { 2 } \frac { 1 } { 6 \pi \epsilon _ { 0 } c ^ { 3 } } \tag{0.2pts}
\end{equation*}
$$

We can express $\lambda$ as $\lambda = \frac { c } { f } = \frac { 2 \pi r c } { v }$. (0.2 pts) We get $v$ from the relation $\frac { m v ^ { 2 } } { r } = k \frac { Z e ^ { 2 } } { r ^ { 2 } }$, then $v = e \sqrt { \frac { k Z } { m r } }$.
(0.3 pts) Finally

$$
\begin{equation*}
\lambda = \frac { 2 \pi r c } { v } = \frac { 2 \pi r c } { e } \sqrt { \frac { m r } { k Z } } \tag{0.1pts}
\end{equation*}
$$

ii. (1 pt) We know that $\vec { d } _ { g } = \sum _ { i } \vec { r } _ { i } m _ { i }$. Let us recall that the distance to centre of mass is

$$
\begin{equation*}
\vec { r } _ { c m } = \frac { \sum _ { i } \vec { r } _ { i } m _ { i } } { \sum _ { i } m _ { i } } . \tag{0.3pts}
\end{equation*}
$$

Then

$$
\vec { d } _ { g } = \sum _ { i } \vec { r } _ { i } m _ { i } = \vec { r } _ { c m } \sum _ { i } m _ { i }
$$

(0.2 pts) (Equivalently one can notice that $\dot { \overrightarrow { d _ { g } } } = \sum _ { i } \vec { v } _ { i } m _ { i }$ the net momentum.) $\vec { r } _ { c m }$ is constant because there aren't any external forces acting on the system. (0.3 pts)
This means that $\ddot { \overrightarrow { d _ { g } } } = 0$ and $P _ { g d } = 0$. (0.2 pts)

Part B. Quadrupole radiation (7.6 points)
i. (1 pt) The force acting on one of the stars is

$$
F = G \frac { M ^ { 2 } } { 4 R ^ { 2 } } = \frac { M v ^ { 2 } } { R }
$$

(0.6 pts) From here we can express the star's speed $v$. We can express the star's angular speed from the relation $\omega = \frac { v } { R }$. (0.2 pts)

$$
\omega = \frac { v } { R } = \frac { 1 } { 2 } \sqrt { \frac { G M } { R ^ { 3 } } }
$$

(0.2 pts)
ii. (0.8 pts) The dimensions for $A$ need to be

$$
\begin{equation*}
\mathrm { W } \frac { 1 } { \mathrm {~kg} ^ { 2 } \mathrm {~m} ^ { 4 } } = \frac { \mathrm { kgm } ^ { 2 } } { \mathrm {~s} ^ { 3 } } \frac { 1 } { \mathrm {~kg} ^ { 2 } \mathrm {~m} ^ { 4 } } = \frac { 1 } { \mathrm {~s} ^ { 3 } \mathrm {~m} ^ { 2 } \mathrm {~kg} } \tag{0.2pts}
\end{equation*}
$$

$A$ can only consist of the gravitational constant $G$, speed of light $c$ and angular velocity $\omega$. (0.2 pts) We can write a system of equations for every unit, m, s and kg. If we take the power of $G , c$ and $\omega$ to be $a , b$ and $c$ respectively, we can write out for metres

$$
\begin{equation*}
3 a + b = - 2 , \tag{0.1pts}
\end{equation*}
$$

for seconds

$$
\begin{equation*}
- 2 a - b - c = - 3 , \tag{0.1pts}
\end{equation*}
$$

and finally for kilograms

$$
\begin{equation*}
- a = - 1 . \tag{0.1pts}
\end{equation*}
$$

Solving the equations we get $a = 1 , b = - 5$ and $c = 6$, which means that

$$
\begin{equation*}
A = G \frac { \omega ^ { 6 } } { c ^ { 5 } } \tag{0.1pts}
\end{equation*}
$$

iii. (0.8 pts) The solution for this subquestion is the same as for the previous one. The units for $K$ are

$$
\begin{equation*}
\frac { \mathrm { W } } { \mathrm {~m} ^ { 2 } } = \frac { \mathrm { kg } } { \mathrm {~s} ^ { 3 } } \tag{0.2pts}
\end{equation*}
$$

$K$ can only depend on $G , c$ and $\omega$, (0.2 pts) if we take their powers to be $a , b$ and $c$ respectively, we can write out for metres

$$
\begin{equation*}
3 a + b = 0 \tag{0.1pts}
\end{equation*}
$$

for seconds

$$
\begin{equation*}
- 2 a - b - c = - 3 \tag{0.1pts}
\end{equation*}
$$

and finally for kilograms

$$
\begin{equation*}
- a = 1 \tag{0.1pts}
\end{equation*}
$$

Solving the equations we get $a = - 1 , b = 3$ and $c = 2$, which means that

$$
\begin{equation*}
K = \frac { c ^ { 3 } \omega ^ { 2 } } { G } \tag{0.1pts}
\end{equation*}
$$


iv. (1 pt) The flux at distance $L$ is $S = \frac { P _ { q g } } { 4 \pi L ^ { 2 } }$, (0.4 pts) on the other hand we can express flux as $S = K h _ { 0 } ^ { 2 }$. This means that

$$
\begin{equation*}
K h _ { 0 } ^ { 2 } = \frac { P _ { q g } } { 4 \pi L ^ { 2 } } = \frac { A M ^ { 2 } R ^ { 4 } } { 4 \pi L ^ { 2 } } \tag{0.4pts}
\end{equation*}
$$

and finally

$$
\begin{equation*}
h _ { 0 } = \sqrt { \frac { A M ^ { 2 } R ^ { 4 } } { K 4 \pi L ^ { 2 } } } = \sqrt { \frac { G \omega ^ { 6 } } { c ^ { 5 } } \frac { G } { c ^ { 3 } \omega ^ { 2 } } \frac { M ^ { 2 } R ^ { 4 } } { 4 \pi L ^ { 2 } } } = \frac { G \omega ^ { 2 } M R ^ { 2 } } { 2 \sqrt { \pi } c ^ { 4 } L } = \frac { G ^ { 2 } M ^ { 2 } } { 8 \sqrt { \pi } c ^ { 4 } L R } \tag{0.2pts}
\end{equation*}
$$

v. (1 pt) At distance $R _ { s }$ from the black hole, it takes all the energy $m c ^ { 2 }$ for an object to overcome the potential energy $- G \frac { M m } { R _ { s } }$. This means that

$$
m c ^ { 2 } = G \frac { M m } { R _ { s } } .
$$

(0.7 pts) (If non-relativistic energy $m c ^ { 2 } / 2$ is used, deduct 0.3 pts.) From here we can express $R _ { s }$

$$
R _ { s } = \frac { G M } { c ^ { 2 } }
$$

(0.1 pts) This answer is 2 times smaller than the correct one, which means that

$$
R _ { s } = \frac { 2 G M } { c ^ { 2 } }
$$

(0.2 pts)
vi. (1.5 pts) We can estimate the mass of the black holes by finding the orbital frequency and then using the expression we found in the first subquestion (Kepler's III law). (0.3 pts) The strain is maximal when the orbital radius for the black holes is $R _ { s }$. (0.3 pts) Reading from the graph, we get that the orbital period is $T \approx 0.006 \mathrm {~s}$ (0.3 pts)

$$
\begin{equation*}
\omega = \frac { 1 } { 2 } \sqrt { \frac { G M } { R _ { s } ^ { 3 } } } ; \tag{0.2pts}
\end{equation*}
$$

substituting $R _ { s }$ we obtain

$$
\begin{equation*}
\omega = \frac { 1 } { 2 } \sqrt { G M \frac { c ^ { 6 } } { 8 G ^ { 3 } M ^ { 3 } } } = \frac { c ^ { 3 } } { 2 \sqrt { 2 } G M } \tag{0.2pts}
\end{equation*}
$$

The mass of a black hole is

$$
\begin{equation*}
M = \frac { c ^ { 3 } } { 2 \sqrt { 2 } \omega G } = 1.45 \times 10 ^ { 32 } \mathrm {~kg} = 72 \mathrm { M } _ { \odot } \tag{0.2pts}
\end{equation*}
$$

In reality the masses of the black holes were $36 \mathrm { M } _ { \odot }$ and $29 \mathrm { M } _ { \odot }$, where $M _ { \odot }$ is the mass of Sun.
vii. (1.5 pts) As mentioned previously the maximal strain is when the black hole's orbital radius is $R _ { s }$, reading from the graph we get that the strain is $h _ { 0 } \approx 0.9 \times 10 ^ { - 21 }$. (0.4 pts) Then, using the result of question iv,

$$
\begin{equation*}
h _ { 0 } = \frac { G ^ { 2 } M ^ { 2 } } { 8 \sqrt { \pi } c ^ { 4 } L R _ { s } } ; \tag{0.4pts}
\end{equation*}
$$

Substituting $R _ { s }$ we obtain

$$
\begin{equation*}
h _ { 0 } = \frac { G ^ { 2 } M ^ { 2 } } { 8 \sqrt { \pi } c ^ { 4 } L } \frac { c ^ { 2 } } { 2 G M } = \frac { G M } { 16 \sqrt { \pi } c ^ { 2 } L } \tag{0.3pts}
\end{equation*}
$$

The distance to the black hole is

$$
\begin{equation*}
L = \frac { G M } { 16 \sqrt { \pi } c ^ { 2 } h _ { 0 } } ; \tag{0.2pts}
\end{equation*}
$$

numerically

$$
L = 4.21 \times 10 ^ { 24 } \mathrm {~m} .
$$

(0.2 pts)
This can be also expressed in megaparsecs, $L = 136 \mathrm { Mpc }$. In reality, the distance was $L = 410 \mathrm { Mpc } \pm 170 \mathrm { Mpc }$.
