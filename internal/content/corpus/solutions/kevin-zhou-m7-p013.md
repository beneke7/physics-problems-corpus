---
id: kevin-zhou-m7-p013
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-p013
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

[3] Problem 13. A long log with square cross section and density ρl floats in water with density ρw.
If α = ρl/ρw, then when α ≪ 1, the log will float stably with one of its sides parallel to the water.
(a) As α is increased, show that once α > (3−
√
3)/6, this orientation becomes unstable. (Hint: to
keep the calculations short, choose a good coordinate system and work to the lowest relevant
order everywhere.)
(b) How do you think the stable orientation of the log varies as α continues to increase? In
particular, what it is when α = 1/2, or when α ≈ 1?
Finding the stable orientation of the log for general values of α is quite complicated, but you can
play with a nice simulation here; you can also use this to check your answer.
Solution. For simplicity, we’ll set the side length of the log to 1.
(a) The task reduces to finding how the center of mass and center of buoyancy move after an
infinitesimal rotation dθ. For simplicity, we align the coordinate system with the log and place
the origin at the center of mass CM.
CM
CB α −
dθ
2
α +
dθ
2
1
dθ
+y
The fraction of the log submerged is α. To compute the coordinates of the center of buoyancy
CB we split it into two pieces as shown above. Then
xB =
1
α

1
6
·
dθ
2
+ 0 ·

α −
dθ
2

=
dθ
12α
and
yB =
1
2
−
α
2
+ O(dθ).
where y is positive downward. For neutral stability, (xB,yB) must lie on a vertical line from
the center of mass, which implies xB/yB = dθ, so
1
12α

1
2
−
α
2
−1
= 1.
This is a quadratic equation with solution α = (3 −
√
3)/6.
8
Kevin Zhou Physics Olympiad Handouts
(b) Of course, there’s always some stable equilibrium, corresponding to the orientation where the
center of mass of the system is as low as possible. When α = 1/2, it’s fairly intuitive that
the log stably sits at a 45◦ angle, with a corner facing directly down. And when α ≈ 1, the
result is the same as in the low density case: the log sits with a side parallel to the water
surface. However, it’s much less intuitive for other values of the density. As you can see in
the linked simulation, the equilibrium orientation can actually be at any angle, depending on
the density!
This is a subtle and unintuitive result. In fact, an entire paper has been written on this
problem, which you can see if you want more details.
Remark
Some Olympiad questions involving oscillating fluids, which are more subtle. These questions
are often impossible to solve exactly, because one must keep track of the entire motion of the
water to know how much kinetic and potential energy are in play. In M4, you solved IPhO
1984, problem 2, which only asked for an order of magnitude estimate. Physics Cup 2018,
problem 4 considers a V -shaped container, where the calculation can be done exactly.
[4] Problem 14. @ 1 0EuPhO 2022, problem 1. A nice fluid oscillations problem which can be solved
nearly exactly without too much trouble.
Solution. See the official solutions as usual. It’s interesting that here, the water’s potential and
kinetic energy get multiplied by the exact same factor, resulting in an oscillation period that doesn’t
depend on the cylinder’s exact dimensions. For a generic container geometry, the two won’t precisely
match, but they will change the oscillation frequency by a comparable amount in opposite directions.
Idea 4: Added Mass
When an object moves through water, it effectively has extra inertia because it forces water
to move as well. This is the “added mass” ∆m (or “virtual mass”), mentioned in M4. For
example, it turns out that in water of density ρ,
∆m = ρ ×

 
 
(2π/3)R3 sphere of radius R,
πR2L cylinder of radius R,length L ≫ R,moving perpendicular to axis,
(8/3)R3 thin disc of radius R,moving along its axis of symmetry.
Example 4
Derive the expression for the added mass of a sphere.
Solution
Consider a spherical object of radius a moving uniformly with speed v0 through water of
density ρ. The object forces the water to move: the water ahead of it has to get out of the
way, while the water behind it needs to fill the space it leaves behind. By the ideas of M4,
the total kinetic energy of the water is (∆m)v2
0/2, where ∆m is the added mass.
9
Kevin Zhou Physics Olympiad Handouts
It turns out the fluid’s velocity field v(r) has to satisfy ∇·v = 0, reflecting the incompressibility
of water, and ∇ × v = 0, reflecting the absence of vorticity. It also has to go to zero far
from the sphere, and have zero relative normal velocity at the sphere itself. These differential
equations and boundary conditions yield a unique solution. The methods for finding the
solution are standard, and typically taught in an undergraduate electromagnetism course,
but since they’re outside the Olympiad syllabus, I’ll just display the answer. The velocity is
v(r) =
v0a3
2r3
(2cosθr̂ + sinθ θ̂)
in polar coordinates, where we placed the origin at the center of the sphere and aligned the
ẑ axis with its direction of motion. If you’ve done E1, you might notice this is just like
the electric dipole field; this coincidence isn’t too surprising because that field satisfies the
similar equations ∇ · E = 0 and ∇ × E = 0, which are quite restrictive.
Now, to derive the added mass, we just have to carry out the kinetic energy integral, which
is easiest in spherical coordinates,
K =
Z
ρv2
2
dV
=
ρv2
0a6
8
Z ∞
a
r2 dr
r6
Z 2π
0
dϕ
Z π
0
(sinθdθ)(4cos2
θ + sin2
θ)
=
ρv2
0a6
8

1
3a3

(2π)(4).
This yields a added mass of (2π/3)ρa3 = ρV/2, as stated above.
Remark
We won’t derive the added mass for other shapes, because it often requires advanced math-
ematical techniques, outside the Olympiad syllabus. (For this reason, IPhO 1995, problem
3, involving a partially submerged cylindrical buoy of mass m, simply asks you to assume a
added mass m/3.) If you’re interested in this subject, this paper compiles many exact results,
and this paper discusses the history and measurement of added mass. Furthermore, Physics
Cup 2019, problem 1 and Physics Cup 2024, problem 1 introduce slick methods to calculate
added mass for some special shapes.
Example 5
What is the initial upward acceleration of a spherical air bubble in water?
Solution
The upward buoyant force on the bubble is ρV g, and the mass of the bubble is negligible, so
if we didn’t know about added mass, we would be tempted to conclude the acceleration is
enormous. Instead, the buoyant force is used to move the added mass ρV/2 out of the way,
so the upward acceleration is 2g.
10
Kevin Zhou Physics Olympiad Handouts
Like most things in fluid dynamics, this isn’t an exact result. The usual expression for the
buoyant force assumes no motion at all, while the added mass derivation assumes uniform
motion, neither of which are true for an accelerating bubble. For the result above to be
accurate, the bubble has to be small, so that the pressure and flow fields have time to reach
a quasi-steady state, but not too small, so that we can still ignore viscous forces.
3 Fluid Dynamics
Idea 5: Continuity
In steady flow, the quantity ρAv is constant along tubes of streamlines.
Idea 6: Bernoulli’s Principle
For steady, nonviscous, incompressible flow, the quantity
P +
1
2
ρv2
+ ρgy
is constant along streamlines. Another version of Bernoulli’s principle, valid for compressible
flow, is given in T3. As explained there, the incompressible result here is applicable for
water flow, and for gas flow as long as the velocity is much less than the speed of sound.
You might be wondering how steady the flow has to be. Bernoulli’s principle is derived by
equating work done to kinetic energy, as water flows between two points on a streamline.
So you can apply Bernoulli’s principle between those two points if the flow is steady on the
timescale that it takes fluid to move from one to the other.
Example 6: HRK
A tank is filled with water to a height H. A small hole is punched in one of the walls at a
depth h below the water surface as shown.
Find the distance x from the foot of the wall at which the stream strikes the floor.
11
Kevin Zhou Physics Olympiad Handouts
Solution
The flow isn’t perfectly steady, but it’s close enough since the hole is small. We thus apply
Bernoulli’s principle along a streamline, where one point is at the water’s top surface, and
the other point is just outside the hole. Both points are at atmospheric pressure, because
they are directly exposed to the atmosphere. Since the hole is small compared to the tank,
the velocity at the first point is small by continuity, so we neglect it, giving
1
2
ρv2
= ρgh
which implies Torricelli’s law,
v =
p
2gh.
The time t to fall is t =
p
2(H − h)/g, so
x = vt = 2
p
h(H − h)
which incidentally is maximized at h = H/2.
Incidentally, Bernoulli himself was aware that the answer was different for a large hole, and
treated the general case in his 1738 book, Hydrodynamica. The method is to apply energy
conservation to all of the water at once (i.e. equating the rate of decrease of gravitational
potential energy to the rate of increase of total kinetic energy), rather than attempt to apply
it along streamlines. You can see this general analysis here.
Example 7
Why should you close your barn door during a storm?
Solution
The wind can flow into the barn, at which point it stops. By Bernoulli’s principle, this
increases its pressure by ρv2/2. This creates a net upward force on the roof, which can tear
it off the barn.
By the way, even if you do close the barn door, there’s a second effect that can still cause a
problem: the wind outside has to flow faster along the top to get around it, which decreases
its pressure, again creating a net upward force on the roof. This lift effect is very common
in real life. You probably already know it’s responsible for the lift on an airplane wing. But
it also caused my childhood trampoline to achieve liftoff during Hurricane Sandy, destroying
a backyard fence. And plumbers rely on it to make sewer pipes “self-clean”, by picking up
anything stuck to the bottom.
Incidentally, this example brings up a little puzzle about Bernoulli’s principle. We argued
that the air slows down when it enters the barn, so the pressure goes up. But in the reference
frame moving with the wind, the air speeds up when it enters the barn – so shouldn’t its
pressure go down? The issue with this reasoning is two-fold. First, in the wind’s frame, the
12
Kevin Zhou Physics Olympiad Handouts
barn is moving, so the flow isn’t steady and Bernoulli’s principle doesn’t apply. Second, even
if the barn were moving slowly, so that the flow were almost steady, the barn’s motion would
still be doing work on the air, and this changes Bernoulli’s principle because it is ultimately
a restatement of energy conservation. So in either case, the reasoning fails. When obstacles
are present, Bernoulli’s principle should always be invoked in the frame of the obstacles.
