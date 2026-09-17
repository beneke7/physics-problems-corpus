---
id: usapho-2020-a3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2020-a3
solution_type: official
source_document: solution-document-usapho-2020-s
source_pdf: cache/phoxiv/usapho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2020_S.pdf."
---

Question A3
Spin Cycle
Cosmonaut Carla is preparing for the Intergalactic 5000 race. She practices for her race on her
handy race track of radius R, carrying a stopwatch with her. Her racecar maintains a constant
speed v during her practices. For this problem, you can assume that v > 0.1c, where c is the speed
of light.
a. How much time elapses on Carla’s stopwatch with each revolution?
Solution
From time dilation, her clock ticks slower by a factor γ. Therefore, each revolution takes
2πR
γv
=
2πR
p
1 − v2/c2
v
when measured by Carla’s stopwatch.
Carla decides to do a fun experiment during her training. She places two stationary clocks
down: Clock A at the center of the race track, i.e. the origin; and Clock B at a point on the race
track denoted as (R,0). She then begins her training.
For parts (b) through (d), we define Carla’s inertial reference frame (CIRF) as an inertial
reference frame in which Carla is momentarily at rest, and which has the same origin of coordinates
as the lab frame. Thus, CIRF is a new inertial frame each moment. The times on the clocks and
stopwatch are all calibrated such that they all read 0 in CIRF when she passes by Clock B for the
first time.
b. In the lab frame (the reference frame of the clocks, which are at rest), what is the offset between
Clock A and Clock B?
Solution
Carla’s motion is perpendicular to the displacement between Clock A and Clock B when
they are synchronized in CIRF. Therefore, the simultaneous synchronization in CIRF is
also simultaneous in the lab frame. Thus, the offset is 0.
To understand why this offset is 0, you can also imagine placing an lightbulb halfway
between the two clocks and having it send a light pulse at some known time. In both
Carla’s frame and the lab frame, the light pulse reaches the two clocks simultaneously.
c. If Carla’s stopwatch measures an elapsed time τ, what does Clock A measure in CIRF?
Solution
By symmetry, the speed at which the center clock ticks according to CIRF cannot change.
In one revolution, Carla’s stopwatch measures
2πR
√
1−v2/c2
v , while the center clock measures
2πR
v . Then,
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part A 8
tA(τ) =
τ
p
1 − v2/c2
.
d. If Carla’s stopwatch measures an elapsed time τ, what does Clock B measure in CIRF?
Solution
The readings on Clock B and on Clock A are not necessarily identical once Carla moves
through the circle (because her motion becomes more parallel with the displacement between
the two clocks, and thus simultaneity is lost).
Suppose Carla is at (Rcosθ,Rsinθ), so her velocity is given by (−v sinθ,v cosθ). Suppose
we place a light bulb between the two clocks and having it propagate a light pulse. In the
lab frame, the light pulse reaches the two clocks simultaneously. In CIRF, the math is a
little more complicated.
We first rotate our lab coordinates so that â = −sinθx̂ + cosθŷ, and b̂ = cosθx̂ + sinθŷ.
We now give the coordinates of the clocks and bulb in the rotated lab frame: Clock A,
(a,b) = (0,0); Clock B, (a,b) = (−Rsinθ,Rcosθ); bulb, (a,b) = (−Rsinθ,Rcosθ)/2. In
the lab frame, a light pulse is emitted at
t = 0,a = −(R/2)sinθ,b = (R/2)cosθ.
The light pulse reaches Clock A at
t = R/2,a = 0,b = 0,
and Clock B at
t = R/2,a = −Rsinθ,b = Rcosθ.
Under a Lorentz tranformation from the lab frame to CIRF, we have that the light pulse
reaches Clock A at t0 = γR/2 and Clock B at t0 = γR/2 + γvRsinθ. Thus, Clock B reads
the same time as Clock A with offset γvRsinθ in the reference frame moving at va = v,
vb = 0. Note that Clock A ticks slower by a factor of γ in this frame. Therefore, the time
on clock B is vRsinθ behind the time on clock A.
Then,
tB(τ) = tA(τ) − vRsinθ =
τ
p
1 − v2/c2
− vRsinθ.
(This is the answer we expect from the rear clock ahead effect!) Finally, we use that θ = ωτ
and ω = 2π
T , where T is the period in Carla’s frame. Then,
tB(τ) =
τ
p
1 − v2/c2
−
vR
c2
sin
vτ
R
p
1 − v2/c2
!
.
Copyright c 2020 American Association of Physics Teachers
2020 USAPhO Part B 9
Part B
