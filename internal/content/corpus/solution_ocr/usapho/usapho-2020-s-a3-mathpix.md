---
id: solution-ocr-usapho-2020-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2020-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A3
Spin Cycle
Cosmonaut Carla is preparing for the Intergalactic 5000 race. She practices for her race on her handy race track of radius $R$, carrying a stopwatch with her. Her racecar maintains a constant speed $v$ during her practices. For this problem, you can assume that $v > 0.1 c$, where $c$ is the speed of light.
a. How much time elapses on Carla's stopwatch with each revolution?

Solution
From time dilation, her clock ticks slower by a factor $\gamma$. Therefore, each revolution takes

$$
\frac { 2 \pi R } { \gamma v } = \frac { 2 \pi R \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } { v }
$$

when measured by Carla's stopwatch.

Carla decides to do a fun experiment during her training. She places two stationary clocks down: Clock A at the center of the race track, i.e. the origin; and Clock B at a point on the race track denoted as $( R , 0 )$. She then begins her training.

For parts (b) through (d), we define Carla's inertial reference frame (CIRF) as an inertial reference frame in which Carla is momentarily at rest, and which has the same origin of coordinates as the lab frame. Thus, CIRF is a new inertial frame each moment. The times on the clocks and stopwatch are all calibrated such that they all read 0 in CIRF when she passes by Clock $B$ for the first time.
b. In the lab frame (the reference frame of the clocks, which are at rest), what is the offset between Clock $A$ and Clock $B$ ?

Solution
Carla's motion is perpendicular to the displacement between Clock $A$ and Clock $B$ when they are synchronized in CIRF. Therefore, the simultaneous synchronization in CIRF is also simultaneous in the lab frame. Thus, the offset is 0.

To understand why this offset is 0, you can also imagine placing an lightbulb halfway between the two clocks and having it send a light pulse at some known time. In both Carla's frame and the lab frame, the light pulse reaches the two clocks simultaneously.
c. If Carla's stopwatch measures an elapsed time $\tau$, what does Clock A measure in CIRF?

Solution
By symmetry, the speed at which the center clock ticks according to CIRF cannot change. In one revolution, Carla's stopwatch measures $\frac { 2 \pi R \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } { v }$, while the center clock measures $\frac { 2 \pi R } { v }$. Then,


$$
t _ { A } ( \tau ) = \frac { \tau } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } }
$$

d. If Carla's stopwatch measures an elapsed time $\tau$, what does Clock B measure in CIRF?

## Solution

The readings on Clock B and on Clock A are not necessarily identical once Carla moves through the circle (because her motion becomes more parallel with the displacement between the two clocks, and thus simultaneity is lost).
Suppose Carla is at $( R \cos \theta , R \sin \theta )$, so her velocity is given by $( - v \sin \theta , v \cos \theta )$. Suppose we place a light bulb between the two clocks and having it propagate a light pulse. In the lab frame, the light pulse reaches the two clocks simultaneously. In CIRF, the math is a little more complicated.
We first rotate our lab coordinates so that $\hat { \mathbf { a } } = - \sin \theta \hat { \mathbf { x } } + \cos \theta \hat { \mathbf { y } }$, and $\hat { \mathbf { b } } = \cos \theta \hat { \mathbf { x } } + \sin \theta \hat { \mathbf { y } }$. We now give the coordinates of the clocks and bulb in the rotated lab frame: Clock A, $( a , b ) = ( 0,0 )$; Clock B, $( a , b ) = ( - R \sin \theta , R \cos \theta )$; bulb, $( a , b ) = ( - R \sin \theta , R \cos \theta ) / 2$. In the lab frame, a light pulse is emitted at

$$
t = 0 , a = - ( R / 2 ) \sin \theta , b = ( R / 2 ) \cos \theta .
$$

The light pulse reaches Clock A at

$$
t = R / 2 , a = 0 , b = 0 ,
$$

and Clock B at

$$
t = R / 2 , a = - R \sin \theta , b = R \cos \theta .
$$

Under a Lorentz tranformation from the lab frame to CIRF, we have that the light pulse reaches Clock $A$ at $t ^ { \prime } = \gamma R / 2$ and Clock $B$ at $t ^ { \prime } = \gamma R / 2 + \gamma v R \sin \theta$. Thus, Clock $B$ reads the same time as Clock $A$ with offset $\gamma v R \sin \theta$ in the reference frame moving at $v _ { a } = v$, $v _ { b } = 0$. Note that Clock $A$ ticks slower by a factor of $\gamma$ in this frame. Therefore, the time on clock $B$ is $v R \sin \theta$ behind the time on clock $A$.

Then,

$$
t _ { B } ( \tau ) = t _ { A } ( \tau ) - v R \sin \theta = \frac { \tau } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } - v R \sin \theta
$$

(This is the answer we expect from the rear clock ahead effect!) Finally, we use that $\theta = \omega \tau$ and $\omega = \frac { 2 \pi } { T }$, where $T$ is the period in Carla's frame. Then,

$$
t _ { B } ( \tau ) = \frac { \tau } { \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } - \frac { v R } { c ^ { 2 } } \sin \left( \frac { v \tau } { R \sqrt { 1 - v ^ { 2 } / c ^ { 2 } } } \right) .
$$


## Part B
