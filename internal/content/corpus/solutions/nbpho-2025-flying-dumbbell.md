---
id: nbpho-2025-flying-dumbbell
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2025-flying-dumbbell
solution_type: official
source_document: solution-document-nbpho-2025-s
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2025_S.pdf."
---

1. FLYıNG DUMBBELL (10 points) — Solution
by Jaan Kalda, grading schemes by Author 2.
i) (2 points)Free oscillations of the dumbbell
take place around the centre of mass, i.e. the
centre of the rod. Therefore, we need the
stiffness of a half of the rod. This stiffness
is expressed as k = Y π
2 d2
/l. We also need
the mass of the ball m = 4
3πr3
ρ. The oscil‐
lation angular frequency ω =
√
k/m, hence
the period
T = 2π
√
m
k
= 4π
r
d
√
2ρrl
3Y
≈ 0.64ms.
ii) (2 points)The easiest way to estimate is to
notice that a compressed ball is essentially a
compression wave in steel, so the period is
on the order of a wave with wave length 2r.
Knowing that the sound speed cs =
√
Y /ρ,
we obtain τ ∼ 2r/cs = 2r
√
ρ/Y = 4μs. Al‐
ternatively,onecanapproximatetheballasa
springofstiffnessκ ∼ Y r andmass∼ m,and
obtain a similar result with τ ∼ 2π
√
m/κ.
iii) (2 points) When the dumbbell with axis
perpendicular to the wall approaches with
velocity ⃗ v = −vx̂, the front ball impacts
the wall first. Since the impact time (τ ≈
4 µs) is much shorter than the oscillation
period (T ≈ 0.64 ms), the front ball’s velocity
changes almost instantaneously from −v to
+v, while the rear ball continues with velo‐
city −v. Since the balls have equal masses,
the centre of mass remains stationary. The
dumbbell then oscillates about this station‐
ary centre of mass, with the front ball’s velo‐
city following a half‐period sinusoidal oscil‐
lation, changing from +v to −v over a time
interval of T/2. When the velocity reaches
−v,thefrontballimpactsthewallagain,and
its velocity changes instantaneously from −v
to +v. After this second impact, both balls
move away from the wall, with the same ve‐
locity+v,sothedumbbellasawholedeparts
with velocity +v.
t
v
iv) (2 points) During the impact, the front
ball velocity becomes opposite, so the centre
of mass stops (as the rear ball moves still
with its old speed). After the collision, the
front ball obtains a component v cosα along
its axis, and v sinα perpendicular to it. The
former initiates oscillations of period T, and
the latter — a rotation at angular speed
Ω = v sinα/(l/2) = 2v sinα/l
. The ball will hit the wall twice if the rota‐
tion is slow, and only once if the rotation is
fast enough; let us study this in more details.
By time t ≪ 1/Ω, the rotation angle is Ωt,
and the distance of the farthest point of the
ballfromtherotationcentreisl/2−asin(ωt),
where the oscillation amplitude can be ob‐
tainedfromtheenergyconservationlaw,a =
v cosα
√
m/k = v cosα/ω. So, the distance
from the wall of the closest point of the ball
is
l
2
cosα −
[
l
2
− asin(ωt)
]
cos(α + Ωt) ≈
≈
l
2
Ωtsinα + acosαsinωt =
= vtsin2
α +
v
ω
cos2
αsinωt =
=
v
ω
ssin2
α +
v
ω
cos2
αsins, s ≡ ωt.
If this expression becomes negative, there
will be a second collision. So, the cross‐over
value of α = α0 is such that the expression
becomes never negative, hence
tan2
α0 = −min
sins
s
≈ 0.217,
hence
α0 = arctan
√
0.217 ≈ 25°.
Ifwedividethisexpressionbycorresponding
v) (2 points)Using the results of the previous
task, the angular speed after the initial col‐
lision is Ω = 2v sinα/l. The dumbbell ro‐
tates around its centre of mass, longitudinal
oscillations decay by the time of the second
collision. It rotates until the other ball will
hit the wall. At the moment of the second
collision, the velocity of the ball is v sinα,
and its projection to the surface normal of
thewallis−v sin2
α. Duringthesecondcolli‐
sion,thatcomponentsreversessign,andasa
result, both balls have now x‐directional ve‐
locity component v sin2
α. Hence, this is also
the speed of the centre of mass —‐ the speed
with which the dumbbell departs from the
wall.
Grading: (preliminary)
• i)
• explaining that oscillation is symmetric
around centre of the rod (invoking New‐
ton’s third law suffices as well) 0.5pts
• expressing stiffness of half‐rod 0.5pts
• minor mistake made in stiffness expres‐
sion −0.2pts
• mass of the ball m = 4
3πr3
ρ 0.2pts
• Realising that the system can be treated as
a spring 0.3pts
• oscillation period T = 2π
√m
k 0.3pts
• final answer 0.2pts
• ii)
• Solution 1:
• Realise compressed ball is essentially a
compression wave 0.5pts
• Formula for speed of sound 0.5pts
• Relation between time, radius and speed
0.5pts
• Final answer 0.5pts
• Solution 2:
• Realise the ball can be thought of as a
spring 0.5pts
• Estimate spring constant 0.5pts
• Relation between spring constant and time
or frequency 0.5pts
• Final answer 0.5pts
• iii)
• 2 hits 0.4pts
• velocity of front ball flips almost instantan‐
eously 0.4pts
• centre of mass stays at rest 0.4pts
• sinusoidal movement of front ball 0.4pts
• constant velocity −v of front ball after
second hit 0.4pts
• iv)
• Realise it behaves as in previous question
(balls at velocity ‐v and v, CM at rest), but
it now also rotates and oscillates around
centre of mass 0.5pts
• Expression for the angular speed of rota‐
tion 0.3pts
• Expression of the amplitude of oscillations
0.2pts
• Realise the difference in interaction is that
if the first ball bounces once or twice
0.2pts
• Formulaforthedistanceofthefrontballto
the wall over time 0.3pts
• Realise that if the distance is over 0 for all
t > 0 the first ball does not hit the wall
twice 0.2pts
• Finding the critical angle given this condi‐
tion 0.3pts
• v)
• Realise that the dumbbell rotates around
its centre of mass (after first collision)
0.2pts
• Realise that the longitudinal oscillations
have decayed by the time of the second
collision 0.4pts
• Expression for velocity of ball v sinα0.5pts
• Expression for the component of velo‐
city of ball in direction of surface normal
v sin2
α 0.5pts
• Realise the component of velocity of
second ball in direction of surface nor‐
mal is also v sin2
α 0.2pts
• Realise the speed of the centre of mass
v sin2
α 0.2pts
