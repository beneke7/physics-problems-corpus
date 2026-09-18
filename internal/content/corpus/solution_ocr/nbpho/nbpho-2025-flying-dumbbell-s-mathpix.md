---
id: solution-ocr-nbpho-2025-flying-dumbbell-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2025-flying-dumbbell]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix PDF API Markdown conversion; split from the full 2025 booklet; grading-only material omitted from canonical display."
---
# 1. Flying dumbbell (10 points) — Solution by Jaan Kalda

i) (2 points) Free oscillations of the dumbbell take place around the centre of mass, i.e. the centre of the rod. Therefore, we need the stiffness of a half of the rod. This stiffness is expressed as $k = Y \frac { \pi } { 2 } d ^ { 2 } / l$. We also need the mass of the ball $m = \frac { 4 } { 3 } \pi r ^ { 3 } \rho$. The oscillation angular frequency $\omega = \sqrt { k / m }$, hence the period

$$
T = 2 \pi \sqrt { \frac { m } { k } } = 4 \pi \frac { r } { d } \sqrt { \frac { 2 \rho r l } { 3 Y } } \approx 0.64 \mathrm {~ms} .
$$

ii) (2 points) The easiest way to estimate is to notice that a compressed ball is essentially a compression wave in steel, so the period is on the order of a wave with wave length $2 r$. Knowing that the sound speed $c _ { s } = \sqrt { Y / \rho }$, we obtain $\tau \sim 2 r / c _ { s } = 2 r \sqrt { \rho / Y } = 4 \mu \mathrm {~s}$. Alternatively, one can approximate the ball as a spring of stiffness $\kappa \sim Y r$ and mass $\sim m$, and obtain a similar result with $\tau \sim 2 \pi \sqrt { m / \kappa }$.
iii) (2 points) When the dumbbell with axis perpendicular to the wall approaches with velocity $\vec { v } = - v \hat { x }$, the front ball impacts the wall first. Since the impact time $( \tau \approx$ $4 \mu \mathrm {~s} )$ is much shorter than the oscillation period ( $T \approx 0.64 \mathrm {~ms}$ ), the front ball's velocity changes almost instantaneously from $- v$ to $+ v$, while the rear ball continues with velocity $- v$. Since the balls have equal masses, the centre of mass remains stationary. The dumbbell then oscillates about this stationary centre of mass, with the front ball's velocity following a half-period sinusoidal oscillation, changing from $+ v$ to $- v$ over a time interval of $T / 2$. When the velocity reaches $- v$, the front ball impacts the wall again, and its velocity changes instantaneously from $- v$ to +v. After this second impact, both balls move away from the wall, with the same velocity $+ v$, so the dumbbell as a whole departs with velocity $+ v$.
![](../../../figures/solution-ocr/cf54b60c1399cf5711144962.jpg)
iv) (2 points) During the impact, the front ball velocity becomes opposite, so the centre of mass stops (as the rear ball moves still with its old speed). After the collision, the front ball obtains a component $v \cos \alpha$ along its axis, and $v \sin \alpha$ perpendicular to it. The former initiates oscillations of period $T$, and the latter - a rotation at angular speed

$$
\Omega = v \sin \alpha / ( l / 2 ) = 2 v \sin \alpha / l
$$

The ball will hit the wall twice if the rotation is slow, and only once if the rotation is fast enough; let us study this in more details. By time $t \ll 1 / \Omega$, the rotation angle is $\Omega t$, and the distance of the farthest point of the ball from the rotation centre is $l / 2 - a \sin ( \omega t )$, where the oscillation amplitude can be obtained from the energy conservation law, $a =$ $v \cos \alpha \sqrt { m / k } = v \cos \alpha / \omega$. So, the distance from the wall of the closest point of the ball is

$$
\begin{gathered}
\frac { l } { 2 } \cos \alpha - \left[ \frac { l } { 2 } - a \sin ( \omega t ) \right] \cos ( \alpha + \Omega t ) \approx \\
\approx \frac { l } { 2 } \Omega t \sin \alpha + a \cos \alpha \sin \omega t = \\
= v t \sin ^ { 2 } \alpha + \frac { v } { \omega } \cos ^ { 2 } \alpha \sin \omega t = \\
= \frac { v } { \omega } s \sin ^ { 2 } \alpha + \frac { v } { \omega } \cos ^ { 2 } \alpha \sin s , \quad s \equiv \omega t
\end{gathered}
$$

If this expression becomes negative, there will be a second collision. So, the cross-over value of $\alpha = \alpha _ { 0 }$ is such that the expression becomes never negative, hence

$$
\tan ^ { 2 } \alpha _ { 0 } = - \min \frac { \sin s } { s } \approx 0.217 ,
$$

hence

$$
\alpha _ { 0 } = \arctan \sqrt { 0.217 } \approx 25 ^ { \circ } .
$$

If we divide this expression by corresponding v) (2 points) Using the results of the previous task, the angular speed after the initial collision is $\Omega = 2 v \sin \alpha / l$. The dumbbell rotates around its centre of mass, longitudinal oscillations decay by the time of the second collision. It rotates until the other ball will hit the wall. At the moment of the second collision, the velocity of the ball is $v \sin \alpha$, and its projection to the surface normal of the wall is $- v \sin ^ { 2 } \alpha$. During the second collision, that components reverses sign, and as a result, both balls have now $x$-directional velocity component $v \sin ^ { 2 } \alpha$. Hence, this is also the speed of the centre of mass -- the speed with which the dumbbell departs from the wall.
