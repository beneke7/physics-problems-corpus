---
id: kevin-zhou-r2-p025
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r2-p025
solution_type: author
source_document: solution-document-kevin-zhou-r2sol
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R2Sol.pdf."
---

[3] Problem 25. Consider a particle at the origin at time t = 0, with initial x-momentum p0 and
total energy E0. A constant three-force F acts on the particle in the −y direction.
(a) Calculate y(t). (Hint: don’t write down any equations containing γ, because it depends on
vx(t), which we don’t know yet.)
(b) Calculate x(t).
(c) Combine these results to get y(x). This is the path of a relativistic projectile.
Solution. We use the technique of example 8, setting c = 1 throughout.
(a) By the definition of three-force and the work-energy theorem,
px = p0, py = −Ft, E = E0 − Fy.
To find y(t), we use the fact that vy = py/E, so
dy
dt
= −
Ft
E0 − Fy
.
Separating and integrating, then using the initial condition gives
y2
−
2E0
F
y = t2
.
Solving the quadratic in y gives
y(t) =
E0
F
−
r
E2
0
F2
+ t2.
(b) Similarly, we have
dx
dt
=
px
E
=
p0
E0 − Fy
=
p0
p
E2
0 + F2t2
where we used the result of part (a). Separating and integrating,
x =
Z t
0
p0 dt
p
E2
0 + F2t2
.
Nondimensionalizing the integral, it can be performed with the hyperbolic trigonometric
substitution t = (E0/F)sinhθ, giving
x(t) =
p0
F
sinh−1 Ft
E0
.
28
Kevin Zhou Physics Olympiad Handouts
(c) To get y(x), we invert the above to get t(x) and plug it into our expression for y(t). We have
Ft
E0
= sinh
Fx
p0
and plugging this in gives
y(x) =
E0
F
(1 − cosh(Fx/p0c))
where we restored c in the last step. In other words, relativistic projectile motion follows an
inverted catenary! To check the nonrelativistic limit, we just note that
coshu = 1 +
u2
2
+ ...
which tells us that
y(x) ≈ −
1
2
E0
F

Fx
p0c
2
≈ −
1
2
mF
p2
0
x2
≈ −
1
2
F
mv2
0
x2
which is indeed the usual parabola.
[5] Problem 26.  h 1 0IPhO 1994, problem 1. A clean and neat relativistic dynamics problem. Print
out the custom answer sheets before starting.
Remark
Problem 26 is a nice model for mesons, particles composed of two quarks. It is a simple
version of the MIT “bag model”, which was one of the most important advances in the field
in the 1970s. The original paper has thousands of citations, and contains the answer to the
problem in figure 3.
Idea 7
In string theory, strings carry a constant tension T, in the sense that the force F = dp/dt
exerted on one piece of string by its neighbors is T in the momentary rest frame of that piece.
The strings may stretch or shrink freely, and have zero mass when they have zero length.
[3] Problem 27 (Morin 12.16). A simple exercise involving relativistic string.
(a) Two masses m are connected by a string of length ℓ and constant tension T. The masses are
released simultaneously, and they collide and stick together. What is the mass, M, of the
resulting blob?
(b) Consider this scenario from the point of view of a frame moving to the left at speed v.
The energy of the resulting blob must be γMc2. Show that you obtain the same result by
computing the work done on the two masses.
29
Kevin Zhou Physics Olympiad Handouts
Solution. (a) The total work done on the masses is ℓT, so by energy conservation this must
manifest as rest energy in the final blob, M = 2m + ℓT/c2.
(b) Let c = 1. The initial energy is 2γm, so we need to show that the work done is γℓT.
At first glance, this is puzzling, because the initial distance between the masses in this frame
is ℓ/γ. Therefore, naively applying W =
R
F dx, we have
W =
Z
T dx1 −
Z
T dx2 = T
Z
dx1 − dx2 = Tℓ/γ
which is wrong. The resolution is that we have assumed the masses are released simultaneously
in the original frame, which means they aren’t released simultaneously in this frame.
The mass on the left will start accelerating first, and after some time, the mass on the right
will accelerate. In the original frame, these two events have ∆x = ℓ and ∆t = 0. Thus,
applying the Lorentz transformation,
∆x′
= γ∆x = γℓ.
Suppose that after it starts experiencing the tension, the left mass moves a distance x0 before
it collides with the right mass. Then the above calculation shows that after the right mass
starts experiencing the tension, it moves a distance x0 − ∆x′ until collision. Thus,
W = T(x0 − (x0 − ∆x′
)) = γℓT
as desired.
[3] Problem 28 (Morin 12.37). Two equal masses are connected by a relativistic string with tension
T. The masses are constrained to move with speed v along parallel lines, as shown.
The constraints are then removed, and the masses are drawn together. They collide and make one
blob which continues to move to the right. Is the following reasoning correct?
The forces on the masses point in the y direction. Therefore, there is no change in
the momentum of the masses in the x direction. But the mass of the resulting blob is
greater than the sum of the initial masses (because they collide with some relative speed).
Therefore, the speed of the resulting blob must be less than v (to keep px constant), so
the whole apparatus slows down in the x direction.
If your answer is “no,” exactly what’s wrong about the reasoning above?
Solution. The reasoning is incorrect. To see this, we can consider working in the initial rest frame
of the system. In this frame, the masses just approach each other and collide, ending up at rest. So
in the original frame, the whole apparatus must keep going at the same speed as before.
30
Kevin Zhou Physics Olympiad Handouts
There are two ways to see what’s going on. First, consider just the top mass, and work throughout
in the original frame. Then the incorrect statement is the very first sentence: the three-force on the
top mass is not always in the y direction. Recall the relativistic transformation of the three-force
derived in problem 18. This tells us that if we align the x′ axis with the instantaneous motion of
the particle, then
F = (F′
x′,F′
y′/γ,F′
z′/γ).
Once the top mass gets moving, it has velocity components along both x and y, so the x′ axis must
be tilted accordingly. Upon applying this formula (i.e. redshifting the y′ component of the force),
we end up with a nonzero x component of the force, so the logic above fails.
Alternatively, we can consider the entire system, of the masses and string. In this case, the
statement that fails is the second parenthetical, “to keep px constant”. The issue here is that the
string itself has a linear mass density of T/c2, due to the energy stored in it in the stretching process,
and hence also carries momentum. This needs to be accounted for in the momentum conservation
equation, and gives the “missing” momentum we need. Note that this is totally compatible with
the previous paragraph; the force discussed there is precisely how this string momentum ends up
transferred to the masses.
