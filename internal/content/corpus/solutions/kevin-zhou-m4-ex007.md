---
id: kevin-zhou-m4-ex007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-ex007
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

Example 7
Two blocks of mass m are connected with a spring of spring constant k and relaxed length
L. Initially, the blocks are at rest at positions x1(0) = 0 and x2(0) = L. At time t = 0, the
block on the right is hit, giving it a velocity v0. Find x1(t) and x2(t).
Solution
The equations of motion are
m ¨ x1 = k(x2 − x1 − L)
m ¨ x2 = k(x1 + L − x2).
The system must have two normal modes. The obvious one is when the two masses oscillate
20
Kevin Zhou Physics Olympiad Handouts
oppositely, x1 = −x2. The other one is when the two masses move parallel to each other,
x1 = x2, and this normal mode formally has zero frequency. The initial condition is the
superposition of these two modes.
We can show this a bit more formally. Define the normal mode amplitudes u and v as
x1 =
u − v
2
, x2 =
u + v
2
.
Solving for u and v, we find
u = x1 + x2, v = x2 − x1.
Using the equations of motion for x1 and x2, we have the equations of motion
ü = 0, mv̈ = −2k(v − L)
which just verifies that the normal modes are independent, with angular frequency zero and
ω =
p
2k/m respectively. We can fit the initial condition if
u(0) = L, v(0) = L, u̇(0) = v0, v̇(0) = v0.
The normal mode amplitudes are then
u(t) = L + v0t, v(t) = L +
v0
ω
sinωt.
Plugging this back in gives
x1(t) =
v0t
2
−
v0
2ω
sinωt, x2(t) = L +
v0t
2
+
v0
2ω
sinωt.
Each mass is momentarily stationary at time intervals of 2π/ω, though neither mass ever
moves backwards. If you didn’t know about normal modes, you could also arrive at this
conclusion by playing around with the equations; you could see that they decouple when you
add and subtract them, for instance.
[3] Problem 21 (Morin 4.10). Three springs and two equal masses lie between two walls, as shown.
The spring constant k of the two outside springs is much larger than the spring constant κ ≪ k of
the middle spring. Let x1 and x2 be the positions of the left and right masses, respectively, relative
to their equilibrium positions. If the initial positions are given by x1(0) = a and x2(0) = 0, and if
both masses are released from rest, show that
x1(t) ≈ acos((ω + ϵ)t)cos(ϵt), x2(t) ≈ asin((ω + ϵ)t)sin(ϵt)
where ω =
p
k/m and ϵ = (κ/2k)ω. Explain qualitatively what the motion looks like. This is an
21
Kevin Zhou Physics Olympiad Handouts
example of beats, which result from the superposition of two oscillations of nearly equal frequencies;
we will see more about them in W3.
Solution. The equations of motion are
mẍ1 = −kx1 − κ(x1 − x2)
mẍ2 = −kx2 − κ(x2 − x1).
Again define y1 = x1 + x2 and y2 = x1 − x2. Adding and subtracting the two EOMs tells us that
mÿ1 = −ky1
mÿ2 = −(k + 2κ)y2.
The initial conditions are y1(0) = y2(0) = a and ẏ1(0) = ẏ2(0) = 0. The solution is
y1(t) = acos(
p
k/mt)
y2(t) = acos(
p
(k + 2κ)/mt).
Solving for x1 and x2, we see that
x1(t) = acos
p
k/m +
p
(k + 2κ)/m
2
t
!
cos −
p
k/m +
p
(k + 2κ)/m
2
t
!
x2(t) = asin
p
k/m +
p
(k + 2κ)/m
2
t
!
sin −
p
k/m +
p
(k + 2κ)/m
2
t
!
.
The result follows from the binomial theorem, which tells us that
p
k/m +
p
(k + 2κ)/m
2
≈ ω + ϵ, −
p
k/m +
p
(k + 2κ)/m
2
≈
p
k/m
κ/k
2
= ϵ.
We have an envelope curve of acos(ϵt) and asin(ϵt), and a very high frequency oscillation that
matches the envelope. What this looks like is energy gradually sloshing back and forth between the
masses. If the second mass begins still, it will gradually pick up energy, until the first mass becomes
still. Then the process repeats in reverse.
Note that without the weak spring in the middle, we would have two normal modes of equal
frequency, while adding the spring causes the frequencies to split apart. This is a very common
phenomenon in physics, known as “avoided crossing”. For this reason, you will rarely see two acoustic
modes of exactly equal frequency in a room, or two electromagnetic modes of equal frequency inside
a conducting cavity, or two quantum states of the same energy, unless there’s a symmetry at play.
[3] Problem 22 (KK 10.11). Two identical particles are hung between three identical springs.
Neglect gravity. The masses are connected as shown to a dashpot which exerts a force bv, where v
is the relative velocity of its two ends, which opposes the motion.
22
Kevin Zhou Physics Olympiad Handouts
(a) Find the equations of motion for x1 and x2.
(b) Show that the equations of motion can be solved in terms of the variables y1 = x1 + x2 and
y2 = x1 − x2.
(c) Show that if the masses are initially at rest and mass 1 is given an initial velocity v0, the
motion of the masses after a sufficiently long time is
x1(t) = x2(t) =
v0
2ω
sinωt
and evaluate ω.
Solution. (a) The equations of motion are
Mẍ1 = −kx1 − k(x1 − x2) − b(ẋ1 − ẋ2),
Mẍ2 = −kx2 − k(x2 − x1) − b(ẋ2 − ẋ1).
(b) Adding the two tells us that
Mÿ1 = −ky1
and subtracting tells us that
Mÿ2 = −3ky2 − 2bẏ2.
(c) Let us solve for y1. The initial condition is y1(0) = 0 and ẏ1(0) = v0. Thus,
y1(t) =
v0
ω0
sin(ω0t)
where ω0 =
p
k/M. After a very long time, y2 goes to 0, since it is damped. Thus, after a
long time we have x1 = x2 = y1/2, giving
x1 = x2 =
v0
2ω0
sin(ω0t)
for ω = ω0.
