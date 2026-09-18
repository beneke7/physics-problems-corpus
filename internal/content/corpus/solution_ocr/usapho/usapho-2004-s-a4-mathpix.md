---
id: solution-ocr-usapho-2004-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2004_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2004-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
A4. Selecting the $y$-axis perpendicular to the ramp and the $x$-axis parallel to the ramp in the upward direction, the components of the gravitational acceleration are

$$
a _ { 1 } = - g \sin \theta \quad \text { and } \quad a _ { 1 } = - g \cos \theta
$$

where $\theta$ is the angle the ramp makes with the horizontal. The components of the initial velocity are

$$
v _ { n + 1 } = v _ { 0 } \cos \theta \quad \text { and } \quad v _ { 0 , r } = - v _ { 11 } \sin \theta .
$$

a. At each collision with the plane, the $x$-component of velocity does not change while the $y$ component reverses sign. At the start of the first bounce

$$
v _ { 0 : } = + v _ { 0 } \sin \theta .
$$

The $y$-displacement is given by

$$
v = v _ { 0 } + v _ { 0 \mathrm { y } } l + \frac { 1 } { 2 } a _ { 0 } t ^ { 2 } \quad ( \mathrm {~A} 4 - 1 )
$$

Let $y _ { 11 } = 0$ at $t = 0$, the start of the first bounce. Let $t = t _ { 1 }$ - the time when the ball returns to the ramp $y = 0$, at the end of the first bounce. Substituting these values into (A4-1)

$$
0 = v _ { \mathrm { u } } \sin \theta t _ { 1 } - \frac { 1 } { 2 } g \cos \theta t _ { 1 } ^ { 2 } .
$$

Solving for $t _ { 1 }$ and eliminating the initial time $t _ { 1 } = 0$,

$$
t _ { 1 } = \frac { 2 v _ { 0 } \sin \theta } { g \cos \theta } = \frac { 2 v _ { 0 } } { g } \tan \theta .
$$

The velocity at the end of the first bounce, as the ball is about to impact the ramp again, is

$$
\begin{aligned}
& v _ { v } = v _ { 0 v } + a _ { v } t = v _ { 0 } \sin \theta - g \cos \theta t = v _ { 0 } \sin \theta - g \cos \theta \frac { 2 v _ { 0 } \sin \theta } { g \cos \theta } = - v _ { 0 } \sin \theta . \\
& \text { the ramp the velocity reverses to become } \quad v _ { 0 v } = + v _ { 0 v } \sin \theta .
\end{aligned}
$$


Each bounce has the same $v _ { 0 }$, and $a _ { 3 }$, so each bounce takes the same amount of time $t _ { 1 }$.
Therefore the time for $N$ bounces is

$$
\begin{equation*}
t _ { v } = N t = N \frac { 2 v _ { 0 } \sin \theta } { g \cos \theta } = \frac { 2 N v _ { v } } { g } \tan \theta . \tag{A4-2}
\end{equation*}
$$

There is no impulse in the $x$-direction, so the $x$-equations hold continuously. At the end of the N'th bounce, the ball's velocity is perpendicular to the ramp. $v _ { \mathrm { v } } = 0$. Substituting this into the equation for the $x$-component of velocity.

$$
\begin{gathered}
v _ { 1 } = v _ { 01 } + a _ { 1 } t \\
0 = v _ { 0 } \cos \theta - g \sin \theta t _ { N } = v _ { 0 } \cos \theta - g \sin \theta \left( N \frac { 2 v _ { 0 } \sin \theta } { g \cos \theta } \right) .
\end{gathered}
$$

Dividing by $v _ { 0 } \cos \theta$,

$$
0 = 1 - \frac { 2 N \sin ^ { 2 } \theta } { \cos ^ { 2 } \theta } - 1 - 2 N \tan ^ { 2 } \theta
$$

Solving for $\tan \theta$

$$
\begin{equation*}
\tan \theta = \frac { 1 } { \sqrt { 2 N } } \tag{A4-3}
\end{equation*}
$$

b. The $x$-displacement is given by $\quad x = v _ { i n } t + \frac { 1 } { 2 } a t ^ { 2 }$.
The maximum displacement occurs at the end of the Nith bounce, time $t _ { N }$. Combining (A4-2) and (A4-3)

$$
t _ { N } = \frac { 2 N v _ { 0 } } { g } \tan \theta = \frac { 2 N v _ { 11 } } { g } \frac { 1 } { \sqrt { 2 N } } = \frac { v _ { 11 } } { g } \sqrt { 2 N } .
$$

Substituting this into the $x$-equation.

$$
x = \left( v _ { c } \cos \theta \right) \left( \frac { v _ { n } } { g } \sqrt { 2 N } \right) + \frac { 1 } { 2 } ( - g \sin \theta ) \left( \frac { v _ { 0 } } { g } \sqrt { 2 N } \right) ^ { 2 } = \frac { v _ { 0 } ^ { 2 } } { g } \cos \theta \sqrt { 2 N } - \frac { v _ { n } ^ { 2 } } { 2 g } 2 N \sin \theta
$$

Using the triangle to the right to determine $\cos \theta$ and $\sin \theta$

$$
\begin{gathered}
\cos \theta = \sqrt { \frac { 2 N } { 2 n + 1 } } \quad \sin \theta = \frac { 1 } { \sqrt { 2 N - 1 } } \\
x = \frac { v _ { 10 } ^ { 2 } } { g } \sqrt { \frac { 2 N } { 2 N + 1 } } \sqrt { 2 N } - \frac { v _ { 0 } ^ { 2 } } { 2 g } 2 N \frac { 1 } { \sqrt { 2 N + 1 } } = \frac { v _ { 10 } ^ { 2 } } { g } \frac { N } { \sqrt { 2 N + 1 } }
\end{gathered}
$$

![](../../../figures/solution-ocr/8e31f52f4d5dafbf1d34e459.jpg)


| AAPT | UNITED STATES PHYSICS TEAM |
| :--- | :--- |
| AIP | 2004 |

2004 Semi-Final Exam Part B - Solutions
