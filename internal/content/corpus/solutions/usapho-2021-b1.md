---
id: usapho-2021-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2021-b1
solution_type: official
source_document: solution-document-usapho-2021-s
source_pdf: cache/phoxiv/usapho/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2021_S.pdf."
---

Question B1
Disk Jockey
A disk of uniform mass density, mass M, and radius R sits at rest on a frictionless floor. The disk
is attached to the floor by a frictionless pivot at its center, which keeps the center of the disk in
place, but allows the disk to rotate freely. An ant of mass m 
 M is initially standing on the edge
of the disk; you may give your answers to leading order in m/M.
a. The ant walks an angular displacement θ along the edge of the disk. Then it walks radially
inward by a distance h 
 R, tangentially through an angular displacement −θ, then back to its
starting point on the disk. Assume the ant walks with constant speed v.
h
θ
Through what net angle does the disk rotate throughout this process, to leading order in h/R?
Solution
During the first leg of the trip, the disk has angular velocity
ω = −
2mv
MR
by conservation of angular momentum. Thus, the disk rotates through an angle
φ1 = −
2mv
MR
θR
v
= −
2mθ
M
to leading order in m/M. (Here we have neglected the fact that the disk rotates under the
ant as it is walking, somewhat reducing the distance it has to walk; this changes the answer
only to higher order in m/M. The exact answer is a more complicated function of m/M.
By going to “leading order”, we mean we are expanding that exact answer in a series in
m/M, such as with the binomial theorem, and keeping only the first nonzero term.)
When the ant is moving radially, ω = 0, so no rotation occurs. On the last leg of the trip,
the disk has angular velocity
ω =
2mv(R − h)
MR2
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 2
which means the disk rotates through an angle
φ2 =
2mv(R − h)
MR2
θ(R − h)
v
=
2mθ
M

1 −
h
R
2
.
The net rotation is
φ1 + φ2 =
2mθ
M

1 −
h
R
2
− 1
!
≈ −
4m
M
hθ
R
.
The sign is not important since it is convention-dependent. (Solutions that were not fully
approximated were also accepted; however, not approximating early dramatically increases
the amount of work you have to do.)
Incidentally, you might have thought the answer had to be zero, by angular momentum
conservation. After all, when a system has zero total linear momentum, its center of mass
can’t move. But this problem shows that systems with zero total angular momentum can
perform net rotations, which is the reason, e.g. that a falling cat can always land on its feet.
In more advanced physics, this would be described by saying the constraint on the disc’s
motion coming from angular momentum conservation is not holonomic.
b. Now suppose the ant walks with speed v along a circle of radius r, tangent to its starting point.
r
Through what net angle does the disk rotate?
Solution
There are many ways to do this problem, so we’ll give a selection, starting with a straight-
forward solution and then considering some increasingly elegant solutions.
First solution: The overall rotation angle of the disk is
φ =
Z
ω dt =
2
MR2
Z
Ldt =
2m
MR2
Z
r × vdt
where we again work to leading order in m/M, and r and v are the position and velocity
of the ant. The coordinates of a point on the circle are given by
(rsinθ,(R − r) + rcosθ).
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 3
If the speed of the ant is v, the velocity is given by
(v cosθ,−v sinθ).
To evaluate the angular momentum, note that
|v × r| = vrcos2
θ + vrsin2
θ + v(R − r)cosθ = vr + v(R − r)cosθ.
Thus, we have
L = mv r + (R − r)cosθ

.
Plugging this into the time integral above,
φ =
Z
2mv
MR2

r + (R − r)cos θ(t)

dt.
Changing this to an integral over θ using dθ = v dt/r,
φ =
Z 2π
0
2mr
MR2

r + (R − r)cos θ(t)

dθ =
4m
M
πr2
R2
.
Of course, the problem could also be solved by parameterizing the ant’s path in a different
way, such as by using polar coordinates with the origin at the center of the disk. The way
we set it up here is the simplest, since it makes the integral easy. (For most students, the
hardest part was finding a compact expression for L. A common mistake was assuming
L = mvxr or a variant thereof.)
Second solution: The net effect on the disk of one ant going in the circular path is the
same as two ants going along the path, each with half the mass, and thus the same as four
ants each with a quarter the mass, and so on. By repeating this logic, we can thus replace
the ant with a ring of radius r and mass m of uniform density, which rotates around once.
Therefore, the rotation angle is
φ = 2π
Idisk
Iring
= 2π
mr2
MR2/2
=
4m
M
πr2
R2
.
This is very simple, though it’s a trick that only works for a circular trajectory.
Third solution: Starting from the first line of the first solution, we notice that
Z
r × vdt =
Z
r × dr = 2A
where A is the area of the ant’s trajectory. Thus, we have
φ =
4m
M
A
R2
=
4m
M
πr2
R2
.
This makes it clear why the answer had to be simple in general: the angle can only depend
on a geometric property of the ant’s trajectory, namely its area. This kind of phenomenon
occurs in many fields of physics, and is generally known as a geometric phase.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 4
Fourth solution: We can decompose the circle into a stack of thin rectangles. The effect
of a single ant going around the circle is the same as the effect of one ant going around
each rectangle. But by slightly generalizing your result in part (a), you can show that
the net rotation due to each rectangle is (4m/M)(dA/R2) where dA is the area of that
rectangle. Summing the areas gives the answer. Like the third solution, this works for any
ant trajectory, and it makes it clear why it was the area of the trajectory that mattered.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 5
Question B2
Hot Pocket
This question consists of two independent parts.
a. It’s winter and you want to keep warm. The temperature is T0 = 263 K outside and T1 = 290 K
in your room. You have started a fire, which acts as a hot reservoir at temperature T2 = 1800 K.
You want to add a small amount of heat dQ1 to your room. The simplest method would be to
extract heat −dQ2,dump = dQ1 from the fire and directly transfer it to your room. However, it
is possible to heat your room more efficiently. Suppose that you can exchange heat between any
pair of reservoirs. You cannot use any external source of work, such as the electrical grid, but
the work extracted from running heat engines can be stored and used without dissipation.
i. What is the minimum heat extraction −dQ2,min required by the laws of thermodynamics to
heat up the room by dQ1?
Solution
The second law of thermodynamics implies that, no matter what you do, you must have
dSuniverse ≥ 0, and if your process is to be as efficient as possible, we can assume it is
reversible, so
dSuniverse; reversible = 0.
If we do extract any work while allowing heat to transfer between reservoirs, we will
later use that work to transfer more heat. So in the entire process, there are only heat
transfers, and by conservation of energy,
dQ0 + dQ1 + dQ2 = 0.
The entropy change associated with each reversible heat transfer is dS = dQ/T, so our
assumption of zero entropy production becomes
dQ0
T0
+
dQ1
T1
+
dQ2
T2
= 0.
By combining these equations, we can eliminate dQ0 and solve for dQ2, giving
−dQ2;min =
T2
T1
T1 − T0
T2 − T0
dQ1.
For the provided numbers, this happens to be about 0.11dQ1. That is, a heat pump
can be much more efficient than direct heating. This problem was inspired by Jaynes,
E. T, “Note on thermal heating efficiency.”, American Journal of Physics 71.2 (2003):
180-182. (You can also solve the problem by considering an explicit procedure using
Carnot engines. But since Carnot engines are reversible, all such procedures will just
give the same answer.)
ii. Let the “efficiency gain” be the ratio G = dQ2,dump/dQ2,min. Assuming T1 is fixed at 298 K,
make a graph whose axes are T0 and T2, where T0 varies from 230 K to 290 K, and T2 varies
from 300 K to 2000 K. On the graph, sketch curves corresponding to gain G = 2, 5, and 12.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 6
Solution
Your graph should look qualitatively like this:
230 240 250 260 270 280 290
500
1,000
1,500
2,000
T0 [K]
T 2 [K] G = 2
G = 5
G = 12
The intuition for the curves is that the efficiency gain becomes high when T1 gets close
to T0, and it becomes low when T2 gets close to T0.
b. When the air at the bottom of a container is heated, it becomes less dense than the surrounding
air and rises. Simultaneously, cooler air falls downward. This process of net upward heat transfer
is known as convection.
Consider a closed, rectangular box of height h filled with air initially of uniform temperature T0.
Next, suppose the bottom of the box is heated so that the air there instantly reaches temperature
T0 +∆T. The hot parcel of air at the bottom rises upward until it hits the top of the box, where
its temperature is instantly reduced to T0.
You may neglect any heat transfer and friction between the parcel of air and the surrounding air,
and assume that the temperature difference is not too large. In addition, you may assume the
height h is small enough so that the pressure P0 and density ρ0 of the surrounding air are very
nearly constant throughout the container. More precisely, assume that ρ0gh/P0 
 ∆T/T0 
 1.
Express your answers in terms of P0, g, h, ∆T, and T0.
i. As a parcel of air moves upward, it accelerates. Find a rough estimate for the average speed
v0 during its upward motion.
Solution
The temperature of the air is higher than its surroundings by a fractional amount of
order ∆T/T. Thus, by the ideal gas law, the density is lower than its surroundings by a
fraction of order ∆T/T, which means the upward acceleration due to the buoyant force
is of order a = g ∆T/T. Since this is roughly uniformly accelerated motion, v2
0 ∝ ah,
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 7
which implies
v0 ∼
r
gh
∆T
T0
.
Note that because dP/dz = −ρg in hydrostatic equilibrium, the pressure of the sur-
rounding air varies between the bottom and top of the container, by a fractional amount
of order ρ0gh/P0. But since we assumed ρ0gh/P0 
 ∆T/T0, we can neglect this effect.
ii. In the steady state, warm parcels of air are continuously moving upward from the bottom, and
cold parcels of air are continuously moving downward from the top. Find a rough estimate
for the net rate of upward energy transfer per area.
Solution
The extra energy carried by a parcel of gas is
nCp∆T ∼ nR∆T ∼ P0V
∆T
T0
where V is the volume of the parcel. The net volume of warm air transported upward
per unit time is of order Av0, where A is the cross-sectional area of the box. Thus, the
average power per area is roughly
P0v0
∆T
T0
∼ P0
p
gh

∆T
T0
3/2
.
This is a simplified version of the mixing length theory of convection, which is essential
for modeling the interiors of stars.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 8
