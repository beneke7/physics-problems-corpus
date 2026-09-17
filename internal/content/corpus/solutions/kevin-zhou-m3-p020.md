---
id: kevin-zhou-m3-p020
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m3-p020
solution_type: author
source_document: solution-document-kevin-zhou-m3sol
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M3Sol.pdf."
---

[3] Problem 20. Here’s a variety problem involving some “clean” mathematical results. All three
parts can be solved without lengthy calculation.
(a) Consider n identical balls confined to a line. Assuming all collisions are perfectly elastic, what
is the maximum number of collisions that could happen? Assume no triple collisions happen.
(b) A billiard ball hits an identical billiard ball initially at rest in a perfectly elastic collision. Show
that the balls exit at a right angle to each other.
(c) A mass M collides elastically with a stationary mass m. If M > m, show that the maximum
possible angle of deflection of M is sin−1
(m/M).
Solution. (a) When two identical balls collide, they simply swap velocities. Thus, we can imagine
the balls as passing through one another, and we want the maximum number of times two
balls can pass through each other. All n(n − 1)/2 pairs can pass through each other, as long
as the ith ball on the right has the ith smallest rightward velocity.
(b) Let the initial velocity be v, and the final velocities be v1 and v2. By momentum conservation,
v1 +v2 = v. By energy conservation, v2
1 +v2
2 = v2. By the law of cosines, this is only possible
if v1 and v2 are orthogonal.
(c) Let v be the initial speed. Recall that in the center of mass frame, the mass M can only
change the direction, but not the magnitude, of its velocity. In this frame, the speed of the
mass M is v′ = mv/(m + M). Thus, the possible final velocities lie on a circle of radius v′.
Now let’s transform back to the lab frame. In this frame, it’s still true that the possible final
velocities lie on a circle of radius v′, but the center of this circle is now at the center of mass
velocity vc = Mv/(m + M).
From the diagram above, the final velocity that maximizes the angle θ of deflection yields
sinθ =
v′
vc
=
m
M
which is the desired result.
21
Kevin Zhou Physics Olympiad Handouts
[3] Problem 21 (PPP 72). Beads of equal mass m are strung at equal distances d along a long,
horizontal, infinite wire. The beads are initially at rest but can move without friction. The first
bead is continuously accelerated towards the right by a constant force F.
After some time, a “shock wave” of moving beads will propagate towards the right.
(a) Find the speed of the shock wave, assuming all collisions are completely inelastic.
(b) Do the same, assuming all collisions are completely elastic. What is the average speed of the
accelerated bead in this case?
If you’re having trouble visualizing this, try plotting all the masses’ positions x(t) over time.
Solution. (a) In the steady state, a large clump of particles will be moving towards the right. If
the steady state speed is v0, then collisions occur at time intervals d/v0, so the momentum of
the blob must grow at rate (mv0)(v0/d) as new beads join it. This must be equal to F, and
solving gives
v0 =
r
Fd
m
.
(b) By basic kinematics, the speed of the first, accelerated bead the moment before it hits the
next bead is
v1 =
r
2Fd
m
.
At the moment of collision, the first bead loses all its velocity to the second. The second
bead moves towards the third with velocity v1 and gives its velocity to the third, and so on,
creating a shock front with velocity v1.
In the meantime, the first bead is still accelerating. After another time interval, it hits the
second bead, which is now where the third bead originally was, and the same phenomenon
happens again, creating another bead with velocity v1 just behind the leading one. So after a
long time, we build up a shock front of beads traveling with speed v1.
On the other hand, the first bead keeps uniformly accelerating between zero speed and v1, so
its average speed is just v1/2. Evidently, the shock wave separates from the first bead over
time.
[3] Problem 22.  ^ 1 0USAPhO 2019, problem A1.
[3] Problem 23.  m 1 0USAPhO 2009, problem B1.
Example 8: MPPP 42
There are N identical tiny discs lying on a table, equally spaced along a semicircle, with total
mass M. Another disc D of mass m is very precisely aimed to bounce off all of the discs in
turn, then exit opposite the direction it came.
22
Kevin Zhou Physics Olympiad Handouts
In the limit N → ∞, what is the minimal value of M/m for this to be possible? Given this
value, what is the ratio of the final and initial speeds of the disc?
Solution
The reason there is a lower bound on M is that, by problem 20(c), there is a maximal angle
that each tiny disc can deflect the disc D. For large N, the deflection is π/N for each disc, so
π
N
= sin−1 M/N
m
≈
M
Nm
which implies that M/m ≥ π.
To see how much energy is lost in each collision, work in the center of mass frame and consider
the first collision. In this frame, the disc D is initially approximately still, and the tiny disc
comes in horizontally with speed v. To maximize the deflection angle in the table’s frame, the
tiny disc should rebound vertically, as this provides the maximal vertical impulse to the disc D.
Thus, going back to the table’s frame, where the disc D has speed v, the tiny disc scatters
with speed
√
v2 + v2 =
√
2v. By conservation of energy,
∆

1
2
mv2

= −
1
2
M
N
(
√
2v)2
.
This simplifies to
∆v
v
= −
π
N
which means that after N collisions, we have the cute result
vf
vi
=

1 −
π
N
N
≈ e−π
where in the last step we used a result from P1.
23
Kevin Zhou Physics Olympiad Handouts
Example 9: NBPhO 2003.1
A spherical volleyball of radius r and mass m is inflated with excess pressure ∆P. If it
is dropped from the ceiling and hits the ground, estimate how long the subsequent elastic
collision takes.
Solution
Answering this question requires making a simplified physical model of how the collision
occurs. Let’s say that when the volleyball hits the ground, it will keep going straight down,
deforming the part that touches the ground into a flat circular face. Specifically, when the
ball has moved a distance y into the ground, the flat face has area
A = π
p
r2 − (r − y)2
2
= πy(2r − y) ≈ 2πry
where we assumed that y ≪ r at all times, which is reasonable as long as the ball’s initial
speed is not enormous. As a result, the pressure of the volleyball exerts a force
F = 2πr∆P y
on the ground. This assumes the pressure inside the volleyball remains uniform, and that
the rest of the volleyball stays approximately spherical, which is again reasonable as long as
the initial speed is not huge.
Assuming the initial velocity is not too small, gravity is negligible during the collision, so
during the collision the force on the volleyball is effectively that of an ideal spring. The
collision lasts for half a period, giving
τ = π
r
m
keff
=
r
πm
2r∆P
.
If we plug in realistic numbers, the result is of order 10ms, which is plausible.
5 Continuous Systems
Example 10
As shown in M2, a hanging chain takes the form of a catenary. Suppose you pull the chain
down in the middle. How does the center of mass of the chain move? Does the answer depend
on how hard you pull?
Solution
No matter how hard you pull, or in what direction, the height of the center of mass always
goes up! This is because this quantity measures the total gravitational potential energy of
the chain. If you pull a chain in equilibrium, in any direction whatsoever, you will do work
on it. So this raises its potential energy, and hence the center of mass.
24
Kevin Zhou Physics Olympiad Handouts
Another way of saying this is that the equilibrium position, without the extra pull you supply,
is already in the lowest energy state, and hence already has the lowest possible center of mass.
Changing this shape in any way raises the center of mass.
