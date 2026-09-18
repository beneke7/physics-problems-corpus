---
id: solution-ocr-usapho-2003-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2003_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2003-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
B2. a. The field is spherically symmetric and radially oriented. Applying Gauss's Law to a sphere of radius $r$.

$$
\begin{gathered}
\oint \overrightarrow { \mathrm { E } } \cdot d \overrightarrow { \mathrm {~S} } = \frac { q _ { e r a i } } { \varepsilon _ { 0 } } \\
4 \pi r ^ { 2 } E ( r ) - \frac { \frac { 4 } { 3 } \pi r ^ { 3 } \rho } { \varepsilon _ { 0 } }
\end{gathered}
$$

Therefore

$$
\vec { E } ( r ) = \frac { \rho } { 3 \varepsilon _ { 0 } } \vec { r }
$$

b. Consider the small amount of fluid before it is replaced by the ball. It is in equilibrium. The electrostatic force $\vec { F } _ { E }$ on the small amount of fluid due to the field is balanced by a force exerted by the rest of the fluid which we shall call an electrostatic buoyant force $\vec { F } _ { B }$.

$$
\begin{gathered}
\vec { F } _ { B } + \vec { F } _ { E } = 0 \\
\vec { F } _ { B } = - \vec { F } _ { E } = - q \vec { E } - - ( \rho V ) \left( \frac { \rho } { 3 \varepsilon _ { 0 } } \vec { r } \right) = - \frac { \rho ^ { 2 } V } { 3 \varepsilon _ { 0 } } \vec { r }
\end{gathered}
$$

where $V$ is the volume. When the fluid is replaced by the ball, there is no longer an electrostatic force on it and the buoyant force $\vec { F } _ { B }$ is unbalanced and the net force acting on the ball. Using Newton's second law with $m = \delta V$,

$$
\begin{align*}
\delta V \vec { a } & = - \frac { \rho ^ { 2 } V } { 3 \varepsilon _ { 0 } } \vec { r } \\
\vec { a } & = - \frac { \rho ^ { 2 } } { 3 \varepsilon _ { 0 } \delta } \vec { r } . \tag{B2-1}
\end{align*}
$$

The motion is simple harmonic motion. Fxamining the initial conditions, the motion is onedimensional in the $x$ direction. $\vec { r } ( t ) = x ( t ) \hat { i }$.

$$
\begin{aligned}
a _ { x } = & - \left( \frac { \rho ^ { 2 } } { 3 \varepsilon _ { 0 } \delta } \right) x . \\
& \text { where } \quad \omega = \frac { \rho } { \sqrt { 3 \varepsilon _ { 0 } \delta } } ,
\end{aligned}
$$

and

$$
\vec { r } ( t ) = x _ { c } \hat { i } \cos \theta t ,
$$

c. Now the net force is

$$
\vec { F } = - \frac { p ^ { i } } { 3 \varepsilon _ { 0 } } \sqrt { r } + m g \hat { i }
$$

Since the ball is once again released from rest at $\vec { r } _ { 0 } = x _ { 0 } \hat { i }$, the motion is once again one-dimensional in the $x$ direction. $\vec { r } ( t ) = x ( t ) \hat { i }$ and

$$
m a _ { A } = - \frac { \rho ^ { 2 } } { 3 \varepsilon _ { 0 } } \left( \frac { m } { \delta } \right) x + m g = - m \omega ^ { 2 } \left( x - \frac { g } { \omega ^ { 2 } } \right)
$$

Letting $x ^ { \prime } = x - \frac { g } { \omega ^ { 2 } }$, and noting that $a _ { f } = a _ { 1 }$.

$$
a _ { c ^ { \prime } } = m \theta ^ { 2 } x ^ { \prime }
$$


i.e., $x ^ { \prime }$ undergoes simple harmonic motion with the same frequency. Again, examining the initial conditions, we must have

$$
x ^ { \prime } ( t ) = x ^ { \prime } ( 0 ) \cos \omega t = \left( x _ { 0 } - \frac { g } { \omega ^ { 2 } } \right) \cos \omega t
$$

ie.

$$
\begin{gathered}
x ( t ) = \left( x _ { 0 } - \frac { g } { \omega ^ { 2 } } \right) \cos \omega t + \frac { g } { \omega ^ { 2 } } \\
\vec { r } ( t ) = \left[ \left( x _ { 0 } - \frac { g } { \omega ^ { 2 } } \right) \cos \omega t + \frac { g } { \omega ^ { 2 } } \hat { i } \right.
\end{gathered}
$$

d. (j) Returning to equation (B2-1) $\quad \vec { a } = - \frac { \rho ^ { 2 } } { 3 \varepsilon _ { 0 } \dot { \theta } } \vec { r } = - \omega ^ { 2 } \vec { r } \quad$ where $\omega = \frac { \rho } { \sqrt { 3 \varepsilon _ { 0 } \delta } }$
Writing

$$
\vec { r } ( t ) = x ( t ) \hat { i } + y ( t ) \hat { j } + z ( t ) \hat { k }
$$

yields a separate simple harmonic motion equation for each component

$$
a _ { x } = - \omega ^ { 2 } x \quad a _ { y } = - \omega ^ { 2 } y \quad a _ { z } = - \omega ^ { 2 } z
$$

The direction of the ball's initial displacement is $\vec { r } _ { 0 } = x _ { 0 } \hat { i }$, and the direction of its initial velocity is $\vec { v } _ { u } = v _ { u } \hat { j }$. Examining these initial conditions, we must have

$$
x ( t ) = x _ { 0 } \cos \omega t \quad y ( t ) - \frac { \nu _ { 0 } } { \omega } \sin \omega t \quad z ( t ) = 0 .
$$

Eliminating $t$, we have

$$
\frac { x ( t ) ^ { 2 } } { x _ { 0 } ^ { 2 } } + \frac { \omega ^ { 2 } y ( t ) ^ { 2 } } { v _ { 0 } ^ { 2 } } = \cos ^ { 2 } \omega t + \sin ^ { 2 } t \omega t = 1 .
$$

Therefore the path is an ellipse.
(ii) The maximum radius reached by the ball is the semimajor axis of the ellipse, which is the greater of $x _ { 0 }$ and $\frac { v _ { 0 } } { ( D ) }$. Since we know that $x _ { 0 } < R$, we only need $\frac { v _ { 0 } } { \omega } < R$ for the ball to avoid the wall; that is, the ball can avoid the wall so long as $v _ { i n } < \omega R$.
(iii) Since $x , y$, and $z$ all oscillate at the same frequency, the orbit must be periodic with that frequency, i.e. with period $\frac { 2 \pi } { \omega } = 2 \pi \frac { \sqrt { 3 \varepsilon _ { 0 } \delta } } { \rho }$.
