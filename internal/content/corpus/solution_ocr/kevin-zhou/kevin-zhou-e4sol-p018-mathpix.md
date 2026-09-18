---
id: solution-ocr-kevin-zhou-e4sol-p018
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e4-p018]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 18. A point charge of mass $m$ and charge $q$ is released from rest at the origin in the fields $\mathbf { E } = E _ { 0 } \hat { \mathbf { x } } , \mathbf { B } = B _ { 0 } \hat { \mathbf { y } }$. Find its position as a function of time by solving the differential equations given by Newton's second law, $\mathbf { F } = m \mathbf { a }$.

Solution. We will assume non-relativistic motion throughout. Note that the motion is solely in the $x z$ plane, since the electric and magnetic forces are in that plane. Newton's second law gives

$$
\begin{aligned}
\ddot { x } & = \frac { q } { m } \left( E _ { 0 } - B _ { 0 } \dot { z } \right) , \\
\ddot { z } & = \frac { q } { m } B _ { 0 } \dot { x } .
\end{aligned}
$$

Taking the time derivative of the first equation and plugging in into the second, we find

$$
\dddot { x } = - \frac { q ^ { 2 } B _ { 0 } ^ { 2 } } { m ^ { 2 } } \dot { x } ,
$$

and along with the initial condition that $\dot { x } ( 0 ) = 0$, we see that

$$
\dot { x } = v _ { 0 } \sin ( \omega t )
$$

where $v _ { 0 }$ is some yet to be determined velocity, and $\omega \equiv q B _ { 0 } / m$. Integrating, and using the initial condition that $x ( 0 ) = 0$, we see that

$$
x ( t ) = \frac { v _ { 0 } } { \omega } ( 1 - \cos ( \omega t ) ) .
$$

We also know that

$$
\ddot { z } = \omega \dot { x } = \omega v _ { 0 } \sin ( \omega t ) .
$$

Integrating twice and using the fact that $z ( 0 ) = \dot { z } ( 0 ) = 0$, we see that

$$
z ( t ) = v _ { 0 } t - \frac { v _ { 0 } } { \omega } \sin ( \omega t ) .
$$

All that is to be found now is $v _ { 0 }$. Plugging our $x$ and $z$ into the first equation, we see that

$$
v _ { 0 } \omega \cos ( \omega t ) = \frac { q } { m } \left( E _ { 0 } - B _ { 0 } v _ { 0 } ( 1 - \cos ( \omega t ) ) \right) \Longrightarrow v _ { 0 } = E _ { 0 } / B _ { 0 } .
$$


Thus, our final solution is

$$
\begin{aligned}
& x ( t ) = \frac { v _ { 0 } } { \omega } ( 1 - \cos ( \omega t ) ) , \\
& z ( t ) = v _ { 0 } t - \frac { v _ { 0 } } { \omega } \sin ( \omega t )
\end{aligned}
$$

where $v _ { 0 } = E _ { 0 } / B _ { 0 }$ and $\omega = q B _ { 0 } / m$.
Notice that while naively one might have thought the motion would be along E, on average the particle actually moves along $\mathbf { E } \times \mathbf { B }$. This is actually quite general. For example, it remains true even if there's a bit of friction; the steady state velocity turns out to be along $\mathbf { E } \times \mathbf { B }$.

The same reasoning applies to weather systems. People talk about "low pressure" and "high pressure" regions, but wouldn't the wind just go along the pressure gradient to even it out? That doesn't happen because the Coriolis force deflects the wind sideways. In this case, the pressure gradient is acting like E, and the Coriolis force behaves like a magnetic field $\mathbf { B } \| \boldsymbol { \omega } \| \hat { \mathbf { z } }$. The net effect is that in the steady state, wind tends to move along lines of constant pressure, not perpendicular to them. So a low pressure system stays low pressure but spins around.

[3] Problem 19 (Wang). Two identical particles of mass $m$ and charge $q$ are placed in the $x y$ plane with a uniform magnetic field $B \hat { \mathbf { z } }$. The particles have paths $\mathbf { r } _ { 1 } ( t )$ and $\mathbf { r } _ { 2 } ( t )$. Neglect relativistic effects, but account for the interaction between the charges.
    (a) Write down a differential equation describing the evolution of the separation $\mathbf { r } = \mathbf { r } _ { 1 } - \mathbf { r } _ { 2 }$.
    (b) Suppose that the initial conditions have been set up so that the particles orbit each other in a circle in the $x y$ plane, with constant separation $d$. What is the smallest $d$ for which this motion is possible?

Solution. (a) The equations of motion for the two particles are

$$
m \ddot { \mathbf { r } } _ { 1 } = \frac { q ^ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 3 } } \mathbf { r } + q \dot { \mathbf { r } } _ { 1 } \times \mathbf { B } , \quad m \ddot { \mathbf { r } } _ { 2 } = - \frac { q ^ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 3 } } \mathbf { r } + q \dot { \mathbf { r } } _ { 2 } \times \mathbf { B } .
$$

Subtracting the two, the separation between the particles evolves as

$$
m \ddot { \mathbf { r } } = \frac { q ^ { 2 } } { 2 \pi \epsilon _ { 0 } r ^ { 3 } } \mathbf { r } + q \dot { \mathbf { r } } \times \mathbf { B } .
$$


(b) Note that since $\mathbf { B }$ is along the $\hat { \mathbf { z } }$ direction, and $\mathbf { v } = \boldsymbol { \omega } \times \mathbf { r }$ where $\boldsymbol { \omega }$ is also along the $\hat { \mathbf { z } }$ direction, all three vector terms in the above equation are parallel. So we have
$$
\left( \frac { q ^ { 2 } } { 2 \pi \epsilon _ { 0 } r ^ { 3 } } + q \omega B + m \omega ^ { 2 } \right) \mathbf { r } = 0
$$
Setting the term in parentheses to zero, and noting that the separation $\mathbf { r }$ has magnitude $d$,
$$
\omega = \frac { - ( q B / m ) \pm \sqrt { ( q B / m ) ^ { 2 } - 2 q ^ { 2 } / \pi m \epsilon _ { 0 } d ^ { 3 } } } { 2 }
$$
where $\omega _ { c } = q B / m$ is the usual cyclotron angular frequency. For this equation to have a solution, the discriminant must be nonnegative, so
$$
\frac { q ^ { 2 } B ^ { 2 } } { m ^ { 2 } } \geq \frac { 2 q ^ { 2 } } { \pi m \epsilon _ { 0 } d ^ { 3 } }
$$

which gives
$$
d \geq \left( \frac { 2 m } { \pi \epsilon _ { 0 } B ^ { 2 } } \right) ^ { 1 / 3 } .
$$
For smaller $d$, the charges will always fly apart, either due to electrostatic repulsion if they're slow, or the angular momentum barrier if they're fast.
