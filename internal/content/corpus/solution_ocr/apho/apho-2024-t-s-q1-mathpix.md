---
id: solution-ocr-apho-2024-t-s-q1
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2024_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2024-t-q1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Geometry of Water Fountain

Part A: Uniformly Distributed Holes on the Surface of the Hemisphere

A. 1 Given the radius of the hemisphere is small compared to the range, that we can treat all the
[0.5pt] different water sprouts emanate from a point source at the center of the hemisphere at the same initial velocity but at different angles $\theta$. Note that the distribution of the holes on the surface of the hemisphere is uniform.

Consider the motion in $x$ - and $y$-directions with coordinate $( x , y )$ as indicated in the Fig. 1.
Horizontal motion - no acceleration

$$
\begin{equation*}
x = x ( t ) = \left( v _ { o } \cos \theta \right) t \tag{1.1}
\end{equation*}
$$

Vertical motion - 'particle' in free fall under gravity, $g$

$$
\begin{equation*}
y = y ( t ) = h + \left( v _ { o } \sin \theta \right) t - \frac { 1 } { 2 } g t ^ { 2 } \tag{1.2}
\end{equation*}
$$


A. 2

Equation of water trajectory (or path of the projectile) is obtained by eliminating time $t$ from equations (1.1) and (1.2). [0.1pt]

Using Eq. (1.1), we get $t = \frac { x } { v _ { 0 } \cos \theta }$ and substituting $t$ in Eq.(1.2) we obtain

$$
\begin{align*}
y & = h + x \frac { \sin \theta } { \cos \theta } - \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \frac { 1 } { \left( \cos ^ { 2 } \theta \right) }  \tag{1.3}\\
& = h + x \tan \theta - \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \left( \sec ^ { 2 } \theta \right) \tag{1.4}
\end{align*}
$$

Using trigonometry identity: $\sec ^ { 2 } \theta = 1 + \tan ^ { 2 } \theta$, thus we write:
(1.5)
or

$$
\begin{equation*}
y ^ { \prime } = y - h = x \tan \theta - \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) \tag{1.6}
\end{equation*}
$$

The equation of water trajectory is given by Eq. (1.5) (with reference to the ground) or Eq. (1.6) with reference to the base of the hemisphere.


A. 3

We rewrite the trajectory equation in the form of quadratic function in $\tan \theta$
[0.2pt]

$$
\begin{equation*}
\left( \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \right) \tan ^ { 2 } \theta - x \tan \theta + \left( y ^ { \prime } + \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \right) = 0 \tag{1.7}
\end{equation*}
$$

[0.5pt]
where $y ^ { \prime } = y - h$.
Let $\tan \theta = u$, thus we express Eq. (1.7) as a quadratic function in $u$ :

$$
\begin{equation*}
a u ^ { 2 } + b u + c = 0 \tag{1.8}
\end{equation*}
$$

[0.3pt]
where

$$
\begin{equation*}
a = \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } , \quad b = - x , \quad c = y ^ { \prime } + \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } . \tag{1.9}
\end{equation*}
$$

The quadratic equation Eq.(1.8) must have a real solution for $u$, i.e

$$
\begin{equation*}
u = \frac { - b \pm \sqrt { b ^ { 2 } - 4 a c } } { 2 a } \tag{1.10}
\end{equation*}
$$

[0.2pt]
Or the discriminant is non-negative, i.e. $b ^ { 2 } - 4 a c \geq 0$, which gives.
[0.2pt]

$$
\begin{equation*}
x ^ { 2 } - 4 \left( \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \right) \left( y ^ { \prime } + \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \right) \geq 0 \tag{1.11}
\end{equation*}
$$

[0.4pt]
Re-arranging Eq.(1.11) for y' to get

$$
\begin{equation*}
- y ^ { \prime } \geq \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } - \frac { v _ { o } ^ { 2 } } { 2 g } \tag{1.12}
\end{equation*}
$$


or

$$
\begin{equation*}
y ^ { \prime } \leq \frac { v _ { o } ^ { 2 } } { 2 g } - \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \tag{1.13}
\end{equation*}
$$

[0.2pt]

The water trajectory follows the inequality in (1.13) and the envelop of different water trajectories with different launch angles follow the parabolic equation:

$$
\begin{equation*}
y ^ { \prime } = \frac { v _ { o } ^ { 2 } } { 2 g } - \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \tag{1.14}
\end{equation*}
$$

[0.2pt]

Or

$$
\begin{equation*}
y = h + \frac { v _ { o } ^ { 2 } } { 2 g } - \frac { g x ^ { 2 } } { 2 v _ { o } ^ { 2 } } \tag{1.15}
\end{equation*}
$$

[0.3pt]

The sketch of the envelop of water trajectory is shown below:
![](../../../figures/solution-ocr/35bb597667ef33c43a933945.jpg)
[0.5pt]


A. 4
[1.0pt] Recall the trajectory Eq. (1.5) and set $y = 0$ to obtain the horizontal range $x = R$ :

$$
\begin{align*}
& 0 = h + R \tan \theta - \frac { g R ^ { 2 } } { 2 v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right)  \tag{1.16}\\
& \frac { g } { 2 v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) R ^ { 2 } - ( \tan \theta ) R - h = 0
\end{align*}
$$

which is a quadratic equation

$$
\begin{equation*}
a ^ { \prime } R ^ { 2 } + b ^ { \prime } R + c ^ { \prime } = 0 \tag{1.18}
\end{equation*}
$$

with

$$
\begin{equation*}
a ^ { \prime } = \frac { g } { 2 v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) , \quad b ^ { \prime } = - \tan \theta , c = h . , \tag{1.19}
\end{equation*}
$$

The solution of Eq. (1.18) is the range of the water trajectory on the ground.

$$
\begin{align*}
R & = \frac { - b { } ^ { \prime } \pm \sqrt { b ^ { \prime 2 } - 4 a ^ { \prime } c ^ { \prime } } } { 2 a ^ { \prime } }  \tag{1.20}\\
R & = \frac { \tan \theta \pm \sqrt { \tan ^ { 2 } \theta + 4 \frac { g } { 2 v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) h } } { \frac { g } { v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) }
\end{align*}
$$


A. 5
[0.5pt] Letting $h = 0$ in Eq.(1.21) gives

$$
\begin{align*}
& R = \frac { \tan \theta \pm \sqrt { \tan ^ { 2 } \theta } } { \frac { g } { v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) }  \tag{1.22}\\
& R = \frac { 2 \tan \theta } { \frac { g } { v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) } = \frac { 2 \tan \theta } { \frac { g } { v _ { o } ^ { 2 } } \left( \sec ^ { 2 } \theta \right) }  \tag{1.23}\\
& = \frac { v _ { o } ^ { 2 } } { g } 2 \sin \theta \cos \theta = \frac { v _ { o } ^ { 2 } } { g } \sin 2 \theta
\end{align*}
$$


Part B: Non-Uniformly Distributed Holes on the Surface of the Hemisphere
B. 1
[1.0pt] Recall the range from (A.4) above (Eq. (1.21))

$$
\begin{equation*}
R = R ( \theta ) = \frac { \tan \theta \pm \sqrt { \tan ^ { 2 } \theta + 4 \frac { g } { 2 v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) h } } { \frac { g } { v _ { o } ^ { 2 } } \left( 1 + \tan ^ { 2 } \theta \right) } \tag{1.21}
\end{equation*}
$$

Let

$$
\begin{equation*}
\frac { d R } { d \theta } = R ^ { \prime } ( \theta ) \tag{1.25}
\end{equation*}
$$

and thus

$$
\begin{equation*}
d R = R ^ { \prime } ( \theta ) d \theta . \tag{1.26}
\end{equation*}
$$

There is no need to determine the R' explicitely. Answers can be left in R'. Consider an annulus (or ring) water on the ground with radius $R$ and thickness $d R$ where the element area of annulus $d A _ { W }$ is given by

$$
\begin{align*}
d A _ { W } & = 2 \pi R \times d R  \tag{1.27}\\
& = 2 \pi R R ^ { \prime } ( \theta ) d \theta
\end{align*}
$$


B. 2

[1.0pt] Number of holes in on the elemental area of annulus $d A _ { H }$, on the hemisphere, of radius $r$ at angle $\theta$ with angular width $d \theta$ is
$$
\begin{equation*}
d A _ { H } = \rho ( \theta ) \times 2 \pi ( \mathrm { r } \cos \theta ) \mathrm { r } \mathrm {~d} \theta \tag{1.29}
\end{equation*}
$$
In order the water sprouts to spray uniformly on the ground $d A _ { W } \sim d A _ { H }$ such that
$$
\begin{equation*}
d A _ { H } = \rho ( \theta ) \times 2 \pi ( \mathrm { r } \cos \theta ) \mathrm { rd } \theta \sim 2 \pi \mathrm { RR } / ( \theta ) \mathrm { d } \theta \sim \mathrm { dA } _ { \mathrm { W } } \tag{1.30}
\end{equation*}
$$
And to ensure the expression is independent of $\rho ( \theta )$, we express
$$
\begin{equation*}
\rho ( \theta ) \sim \frac { R ( \theta ) R \prime ( \theta ) } { r ^ { 2 } \cos \theta } \tag{1.31}
\end{equation*}
$$
where $R ( \theta )$ and $R ^ { \prime } ( \theta )$ are given by Eq. (1.21) and Eq.(1.25), respectively.
If the distribution of the holes on the hemisphere follows Eq. (1.31), then the water spray on the ground will be uniform (independent of angle). The condition set for angle $\theta$ does not affect the general expression in (1.31).

B. 3

[2.0pt] When $h = 0$, the range become simple to estimate, namely from Eq. (1.24) we have
$$
\begin{equation*}
R ( \theta ) = \frac { v _ { o } ^ { 2 } } { g } \sin 2 \theta \tag{0.2pt}
\end{equation*}
$$
and
$$
\begin{align*}
& \frac { d R ( \theta ) } { d \theta } = \frac { 2 v _ { o } ^ { 2 } } { g } \cos 2 \theta  \tag{1.32}\\
& d R = \frac { 2 v _ { o } ^ { 2 } } { g } \cos 2 \theta d \theta
\end{align*}
$$
Consider an annulus (or ring) water on the ground with radius $R$ and thickness $d R$ where the element area of annulus $d A _ { W }$ is given by
$$
\begin{align*}
d A _ { W } & = 2 \pi R \times d R \\
& = 2 \pi \left( \frac { v _ { o } ^ { 2 } } { g } \sin 2 \theta \right) \left( \frac { 2 v _ { o } ^ { 2 } } { g } \cos 2 \theta \right) d \theta  \tag{1.34}\\
& = 2 \pi \left( \frac { v _ { o } ^ { 2 } } { g } \right) ^ { 2 } 2 \sin 2 \theta \cos 2 \theta d \theta  \tag{1.35}\\
& = 2 \pi \left( \frac { v _ { o } ^ { 2 } } { g } \right) ^ { 2 } \sin 4 \theta d \theta
\end{align*}
$$
[0.1pt]
Thus, elemental area of water annulus $d A _ { W }$ follows
$$
\begin{equation*}
d A _ { W } \propto \sin 4 \theta d \theta \tag{1.37}
\end{equation*}
$$
[0.1pt]
Recall from B. 2 the number of holes in on the elemental area of annulus $d A _ { H }$, on the hemisphere, of radius $r$ at angle $\theta$ with angular width $d \theta$ is

$$
\begin{equation*}
d A _ { H } = \rho ( \theta ) \times 2 \pi ( \mathrm { r } \cos ( \theta ) ) \mathrm { rd } \theta \sim \rho ( \theta ) \cos ( \theta ) \mathrm { d } \theta . \tag{0.1pt}
\end{equation*}
$$

In order the water sprouts to spray uniformly on the ground $d A _ { W } \propto d A _ { H }$ such that

$$
\begin{equation*}
d A _ { H } \sim \rho ( \theta ) \cos \theta d \theta \sim \sin 4 \theta d \theta . \tag{1.38}
\end{equation*}
$$

And to ensure the expression is independent of $\rho ( \theta )$, we express

$$
\begin{equation*}
\rho ( \theta ) \sim \frac { \sin ( 4 \theta ) } { \cos ( \theta ) } . \tag{1.39}
\end{equation*}
$$

If the distribution of the holes per unit area on the hemisphere follows Eq. (1.39), then the water sprayed on the ground will be uniform (independent of angle). The condition set on the angle only to avoid duplication of water hitting the same area for $0 ^ { o } < \theta \leq 45 ^ { o }$ or $45 ^ { o } < \theta < 90 ^ { o }$.
