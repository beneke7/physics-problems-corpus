---
id: solution-document-kevin-zhou-m7sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-m7-ex001, kevin-zhou-m7-ex002, kevin-zhou-m7-ex003, kevin-zhou-m7-ex008, kevin-zhou-m7-ex009, kevin-zhou-m7-ex010, kevin-zhou-m7-ex011, kevin-zhou-m7-ex014, kevin-zhou-m7-ex017, kevin-zhou-m7-ex018, kevin-zhou-m7-p002, kevin-zhou-m7-p003, kevin-zhou-m7-p006, kevin-zhou-m7-p013, kevin-zhou-m7-p019, kevin-zhou-m7-p023, kevin-zhou-m7-p026, kevin-zhou-m7-p031]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Mechanics VII: Fluids
The fundamental material is covered in chapters 15 and 16 of Halliday, Resnick, and Krane, and at
a somewhat higher level in chapter 9 of Wang and Ricardo, volume 1. For interesting discussion,
see chapters II-40 and II-41 of the Feynman lectures. For a much more advanced introduction
which uses vector calculus heavily, see chapters 2–5 and 12–15 of Physics of Continuous Matter by
Lautrup. There is a total of 88 points.
1 Fluid Statics
Idea 1
In equilibrium, the pressure in a static fluid varies with height as
dP
dy
= −ρg.
This always holds in equilibrium. For instance, if we squeeze a sealed container of fluid,
increasing the pressure locally, then this pressure increase must propagate throughout the
entire fluid to maintain dP/dy = −ρg. This is Pascal’s principle.
Idea 2: Archimedes’ Principle
An object in a fluid experiences an upward buoyant force due to the different pressures on its
top and bottom sides. The force is equal in magnitude to the weight of the fluid that would
fill the volume of the immersed portion of the object.
This can be surprisingly tricky, so we’ll begin with some conceptual questions.
Example 1
A large rock is tied to a balloon filled with air. Both are placed in a lake. As the balloon
sinks, how do the air pressure in the balloon, the average density of the balloon, air, and
rock system, and magnitude of the net force on the system vary?
Solution
For simplicity, we ignore the elastic force in the balloon itself. Then for the balloon to be in
equilibrium, its pressure must match that of the water pressure, so the air pressure in the
balloon increases. As the balloon sinks, the rock stays the same volume but the balloon is
squeezed smaller, so the density of the system increases. Finally, since the density of water is
very approximately constant, the buoyant force on the system is decreasing since its volume is
decreasing, so the net force is increasing; the system accelerates downward faster and faster.
[1] Problem 1 (HRK). The average human body floats in water. SCUBA divers wear weights and a
flotation vest that can fill with a varying amount of air to establish neutral buoyancy. A diver is
originally neutrally buoyant at a certain depth. How should the diver manipulate the amount of
air in their flotation vest to move lower, then stay there at neutral buoyancy?
1Kevin Zhou Physics Olympiad Handouts
Solution. To move lower, the amount of air should be decreased. To stay at neutral buoyancy,
the amount of air should be increased. In fact, the amount of air in the vest should end up greater
than the original amount, because at a lower point, the same amount of air would be squeezed to a
smaller volume, making the vest less buoyant.
[2] Problem 2. A beaker contains liquid water at its freezing point and has a big ice cube floating in
it, also at its freezing point. If the ice cube
(a) is solid ice,
(b) contains a small metal ball, or
(c) contains a lot of olive oil (which will float on the water in a thin layer),
then how does the fluid level change when the cube melts? In all cases, neglect the density of air.
Solution. (a) The water level does not change. The ice cube creates a “hole” in the water that
it sits in, and when it melts it exactly fills this hole.
(b) Initially the metal ball displaces its weight in water, which is large, but after the ice cube
melts it falls to the bottom and only displaces its volume in water. So the water level goes
down.
(c) Initially, the oil displaces its weight in water, but after the ice cube melts it sits on top, thereby
occupying its whole volume. Since the oil is less dense than water, the fluid level goes up.
(Specifically, the water level goes down, and an oil layer sits on top of it, at a height greater
than the original water level.) Note that the answer would be different if there was only a little
olive oil, because in that case the oil would coalesce into a few drops on the water surface. In
that case each drop displaces its weight, so that the water level stays the same.
As a sidenote, if we accounted for the density of air, then the answer to part (a) would actually be
that the water level goes up a tiny bit. The reason is that part of the ice cube poking out above
the water surface experiences an extra buoyant force from the air itself, which means the ice cube
is not as deep in the water as one would expect. So when it melts, it slightly more than fills the
hole, causing the water level to go up.
[2] Problem 3. Consider a pair of scales with identical vessels in which there are equal quantities of
water.
In the left-hand vessel you suspend a very light ping-pong ball on a thin, light wire attached to the
base of the vessel. In the right-hand vessel you suspend a ping-pong ball filled with lead, again by
a light thin wire. Do the scales stay level, go down on the left, or go down on the right?
Solution. The ball on the right experiences an upward buoyant force, so it exerts a downward
force on the water. As for the ball on the left, it has no effect whatsoever on the force on the scale,
because this force is simply equal to the weight of all the water. So the scales go down on the right.
2Kevin Zhou Physics Olympiad Handouts
This is an incredibly classic problem; it appeared on the first-ever physics Olympiad, held in
Moscow in 1939.
[2] Problem 4 (BAUPC). Two trapezoidal containers, connected by a tube as shown, hold water.
Assume the containers do not undergo thermal expansion.
(a) If the water in container A is heated, causing it to expand, will water flow through the tube?
If so, in which direction?
(b) What if the water in container B is heated instead?
Solution. (a) The pressure at the bottom of each container is P = ρgh = mgh/V , where h is
the height of the water level above the bottom, and V and m are the volume and mass of
water in the container. When the water in container A is heated, m stays the same, while
V/h increases because the container gets wider. Thus, the pressure at the bottom of container
A will decrease, and water will flow from B to A.
(b) In this case, V/h decreases in container B because the container gets narrower. Then the
pressure at the bottom of container B will increase, so water will flow from B to A again.
As a cross-check, we can consider what happens when all the water is heated. Then ρ is the same
everywhere, and all that matters is the relative heights. Due to the shapes of the containers, the
final water height in container B is higher, so water flows from B to A, as expected.
[2] Problem 5 (MPPP 85). A solid cube of volume Vi and density ρi is fastened to one end of a cord,
the other end of which is attached to a light bucket containing water, of density ρw = ρi/10.
The system is in equilibrium.
(a) Find the volume Vw of the water in the bucket.
(b) What would happen if more water were poured into the bucket?
(c) What would happen if some or all of the water evaporated?
3Kevin Zhou Physics Olympiad Handouts
Solution. (a) There is a buoyant force of ρwVi on the block, which pushes the block up and
the bucket down. In equilibrium, the tension in the cord T must balance against the weight
of the block and the buoyant force: T = (ρiVi − ρwVi)g. Similarly for the water/bucket,
T = (ρwVw + ρwVi)g. Equating the two gets
ρwVw = ρiVi − 2ρwVi
which implies Vw = 8Vi.
(b) The effective weight on the left side won’t change, but the bucket will be heavier. If the
final volume of water Vf is less than 10Vi, where Vf = 10Vi is when the system will be in
equilibrium if the block is out of the water, then the system will be in equilibrium at some
point with the block partially submerged. Once Vf > 10Vi, the bucket will just keep falling.
(c) The cube will fall until it hits the bottom of the bucket (the amount of evaporation doesn’t
matter), and then the system will be stuck there since the cube can’t pass through the bucket.
Example 2
A perfectly spherical, nonrotating planet is covered with water. Geological activity causes a
small underwater mountain to form, made of rock that is denser than water. Does the ocean
surface above this mountain become higher or lower?
Solution
Systems minimize their energy in equilibrium. This means that in hydrostatic equilibrium,
the surface of the water is an equipotential. Since the gravitational field of the mountain
decreases the gravitational potential near it, the water surface is higher near the mountain.
Example 3
Robert Boyle is best known for Boyle’s law, but he also invented a remarkably simple perpetual
motion machine, called the perpetual vase.
Since the volume of the vase is much greater than the neck, the pressure in the neck cannot
possibly hold up all of the water in the vase. Thus, the water will flow through the neck and
fall back into the vase, causing perpetual motion. Why doesn’t this work?
Solution
This is an example of the hydrostatic paradox. Most of the upward force on the water is
not provided by the pressure in the water in the neck, but from the normal force from
the walls; each piece of wall provides enough normal force to hold up all of the water
above it. (Of course, ultimately each piece of the glass is held in place by internal forces
4Kevin Zhou Physics Olympiad Handouts
with other pieces of the glass, which ultimately are balanced by whatever is holding the glass.)
Thus, the water in the neck only supports the water directly above it. That’s precisely what
is balanced by the heightened pressure in the neck, so the water doesn’t start moving. (There
have been many more attempts at fluid-based perpetual motion, as you can see here.)
[2] Problem 6. Below is another perpetual motion machine, proposed centuries ago.
The balls are less dense than water. The balls on the left are pulled downward by gravity, while the
balls on the right are pushed upward by the buoyant force.
(a) Why doesn’t this work?
(b) Would it work if the balls and chain were replaced with a flexible tube of constant thickness?
Solution. (a) Let the balls have volume V , and the column have height h. The positive work
done on a ball by the buoyant force, as it climbs the length of the column, is
Wup = F ∆x = (ρgV )h.
On the other hand, it costs work to insert the ball into the column at the bottom,
Win = P ∆V = (ρgh)V.
Thus, the energy you get from letting a ball go all the way up is just the energy you put in
by pushing the ball in at the bottom, so there’s no free energy.
What this means in practice is that if you actually set up the system, it will start moving a
bit until the first ball hits the bottom of the column, and then it won’t be able to go in. If you
push it in, then the chain will start going around, but only at a constant speed, until friction
slows it down.
(b) In this case, the objection raised in part (a) doesn’t hold. The tube can just slide in at the
bottom, so that Win = 0. However, the machine still doesn’t work because now the buoyant
force vanishes, so Wup = 0 too. The point is that the buoyant force is only ρgV if the entirety
of the object with volume V is surrounded by water. Since the tube just goes right through
the bottom of the column, there’s no water present to push up on the bottom of the tube,
and thus no buoyant force.
5Kevin Zhou Physics Olympiad Handouts
[2] Problem 7 (HRK). A fluid is rotating at constant angular velocity ω about the vertical axis of
a cylindrical container. Defining z = 0 to be the water level at the cylinder’s axis, show that the
liquid surface is the paraboloid
z =
ω2r2
2g
.
Since a paraboloid perfectly focuses incoming light which is parallel to its axis, a rotating fluid can
be used as a telescope, as was first pointed out by Isaac Newton. Such liquid-mirror telescopes are
cheap, but have the disadvantage that they can only point up. Alternatively, one can gradually
cool molten glass in a rotating container so that it solidifies into a paraboloidal lens.
Solution. Work in the frame rotating with the fluid, where it is static. Balancing the pressure and
centrifugal force on a cylindrical shell of thickness dr, at radius r and height h, gives
dP(2πrh) = ω2
r(ρ(2πrhdr)) =⇒
dP
dr
= ρω2
r.
On the other hand, we also know that in hydrostatic equilibrium, the pressure obeys
dP
dz
= −ρg.
The pressure has to stay the same along the surface, so
dP
dr
+
dP
dz
dz
dr
= 0.
We thus have dz/dr = ω2r/g, and integrating gives the desired result.
[3] Problem 8.  W 1 0USAPhO 2013, problem A4. In order to make measurements, print out the
problem before starting.
2 Fluid Mechanics
Next we’ll consider some situations involving fluids and other objects, where the fluids can be
treated at least quasistatically but the objects must be treated dynamically.
Idea 3
The buoyant force can be regarded as acting at the center of gravity of the fluid displaced by
the submerged part of a floating object, called the center of buoyancy. A floating configuration
is stable if, when the configuration is slightly rotated, the buoyant force provides a restoring
torque about the center of mass.
[2] Problem 9 (Kalda). A hemispherical container is placed upside-down on a smooth horizontal
surface. Water is poured in through a small hole at the top. At the moment the container fills,
water starts leaking from between the table and the edge of the container.
Find the mass of the container if the water has density ρ and the hemisphere has radius R.
6Kevin Zhou Physics Olympiad Handouts
Solution. Note that right when the water is full, the normal force between the ground and the
container vanishes. Thus, the weight of the container and water is balanced by the normal force on
the water. However, this is just ρgR(πR2), so we have

M +
2
3
πR3
ρ

g = ρgπR3
, M =
ρπR3
3
.
Note that the atmosphere has a negligible effect here, because if all atmospheric effects are accounted
for, the net effect is just a tiny buoyant force on the container and water.
[2] Problem 10 (MPPP 89). A thin-walled hemispherical shell of mass m and radius R is pressed
against a smooth vertical wall.
It is filled with water through a small aperture at its top, with total mass M. Find the minimum
magnitude of the force that has to be applied to the shell to keep the liquid in place.
Solution. We consider the system of the water and shell. The external force F exerted must
counteract the vertical force of gravity, and the horizontal force of the hydrostatic pressure from
the wall. First, vertical force balance gives
Fy = (M + m)g.
Evaluating horizontal force balance is slightly trickier. However, note that by symmetry, the average
pressure at the part of the wall touching the water is precisely the pressure at the vertical center of
the hemisphere, so
Fx = PA = (ρgR)(πR2
) = πR3
ρg =
3
2
Mg.
Thus, the total force needed is
F =
q
F2
x + F2
y = g
r
13
4
M2 + 2Mm + m2.
Note that we ignored the effect of the atmosphere in this question, which would be tiny in any case;
one can tell that it should be ignored since the problem statement never specified the density of air.
Technically, we should verify that the torques can be balanced too, by choosing an appropriate
point to apply the force F. Take the origin O to be the center of the hemisphere, so that the radial
pressure of the curved part produces no torque. The applied force needs to cancel the torques from
gravity and the pressure from the wall. It turns out there always exists a point of application for F
that does this, but showing it explicitly is messy and unenlightening. In this problem, you’re just
meant to see intuitively that torque can be balanced.
7Kevin Zhou Physics Olympiad Handouts
[3] Problem 11.  W 1 0USAPhO 2004, problem A2.
[3] Problem 12.  W 1 0USAPhO 2002, problem A4. Be careful with this one!
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
8Kevin Zhou Physics Olympiad Handouts
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
9Kevin Zhou Physics Olympiad Handouts
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
10Kevin Zhou Physics Olympiad Handouts
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
11Kevin Zhou Physics Olympiad Handouts
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
12Kevin Zhou Physics Olympiad Handouts
barn is moving, so the flow isn’t steady and Bernoulli’s principle doesn’t apply. Second, even
if the barn were moving slowly, so that the flow were almost steady, the barn’s motion would
still be doing work on the air, and this changes Bernoulli’s principle because it is ultimately
a restatement of energy conservation. So in either case, the reasoning fails. When obstacles
are present, Bernoulli’s principle should always be invoked in the frame of the obstacles.
Example 8: JEE 2020
When a train enters a narrow tunnel, your ears pop because of the pressure change. Find
the pressure change, assuming the air has constant density ρ, the atmospheric pressure is P0,
the train speed is v, and the cross-sectional areas of the train and tunnel are At and A0.
Solution
We work in the reference frame of the train. In this frame, the air in the tunnel begins
moving towards the train at speed v. When it gets to the train, it has to speed up to speed
vf because it flows through a smaller area A0 − At, and this causes its pressure to decrease
by Bernoulli’s principle. Specifically, we have
A0v = (A0 − At)vf, Pf +
1
2
ρv2
f = P0 +
1
2
ρv2
which gives a pressure drop of
Pf − P0 = −
1
2
ρv2

1
(1 − At/A0)2
− 1

.
We neglected the change in density of the air, which is a good approximation when the train
is much slower than the speed of sound. We’ll treat fluid flow with changing density in T3.
Example 9
A whirly tube is a long, narrow, flexible tube that produces musical tones when swung. Model
a whirly tube as a cylinder of length L, rotated about one end with angular velocity ω. For
simplicity, neglect gravity. What is the speed of the air when it shoots out the other end?
Solution
The air is slowly sucked from all directions around the entry hole, and shot out at the exit
hole. Applying Bernoulli’s principle between a point near the entry hole, and the exit hole,
Patm ≈ Patm +
1
2
ρv2
out.
But that implies vout ≈ 0, which doesn’t make sense. The problem is that Bernoulli’s
principle applies to steady flows, and this situation is definitely not steady: by the time the
air goes through the tube, the tube has rotated by a significant amount.
13Kevin Zhou Physics Olympiad Handouts
Instead, we apply Bernoulli’s principle in a reference frame rotating with the tube. The
centrifugal force gives an additional term, turning it into
P +
1
2
ρv2
−
1
2
ρω2
r2
= const.
Applying Bernoulli’s principle between the same two points gives
Patm ≈ Patm +
1
2
ρv2
−
1
2
ρω2
L2
from which we conclude v = ωL. Transforming back to the original reference frame, the exit
speed of the air is
p
v2 + (ωL)2 =
√
2ωL.
Example 10
A big fan produces a stream of air with speed v. If the atmospheric pressure in the room is
Patm, what’s the pressure P in the middle of the fan’s air stream?
Solution
This question frequently appears in middle school physics lessons. Obviously, if we apply
Bernoulli’s principle to the air before and after it goes through the fan, we get
P +
1
2
ρv2
= Patm
so that the pressure is lower than atmospheric pressure. Easy, right? But it’s wrong!
The air in the stream is traveling forward with constant velocity, exposed to the rest
of the air in the room, which has atmospheric pressure. If there actually was such a
pressure difference, the fan’s air stream would be compressed by the air in the room, until
it reached atmospheric pressure again. If you look back carefully at the above examples,
you’ll see this is always the case: air can only be at a different pressure if it’s confined
away from the atmosphere at large (e.g. in a train tunnel or a whirly tube), or if it’s
actively being accelerated (e.g. when it flies into or over a barn, in which case the pressure
difference is precisely what causes the force). The other case where you can maintain
a pressure difference is when the air is moving extremely quickly, which will be discussed in T3.
So the correct answer is that P = Patm. But why doesn’t Bernoulli’s principle work? Because
it’s a statement of energy conservation, and the fan itself is doing work on the air to get it
moving. The correct statement would be
Patm +
1
2
ρv2
= Patm + w
where w is the work done by the fan per unit volume of air.
[2] Problem 15 (HRK). A siphon is a device for removing liquid from a container that cannot be
tipped. An example of a siphon, with constant cross-section, is shown below.
14Kevin Zhou Physics Olympiad Handouts
The tube must initially be filled, but once this has been done the liquid will flow until its level drops
below the tube opening at A. The liquid has density ρ and negligible viscosity.
(a) With what speed does the liquid emerge from the tube at C?
(b) What is the pressure of the liquid at the topmost point B?
(c) What is the maximum possible h1 so that the siphon can operate?
(d) Would the siphon still work if h2 were slightly negative? How negative can it be, for the
siphon to keep on working?
Solution. (a) Applying Bernoulli’s principle between the surface of the water and point C gives
1
2
ρv2
= ρg(h2 + d)
which implies
v =
p
2g(h2 + d).
(b) By continuity the speed v in the tube is constant. Applying Bernoulli’s principle between
points B and C gives
Patm = PB + ρg(h1 + h2 + d)
which gives
PB = Patm − ρg(h1 + h2 + d).
(c) For the siphon to just barely work, the flow speed v should be tiny, so h2 + d ≈ 0. The
highest value of h1 is when the pressure is zero at point B, since pressure can’t be negative, so
h1 ≤ Patm/ρg. (If we start with this maximum possible value of h1 but then increase h2 + d
above zero, then the siphon will stop working, because the water flow will break up along the
exit tube.)
(d) Yes. It is still energetically favorable for water to flow through the siphon as long as point C is
below the surface of the water. As mentioned above, the siphon works as long as h2 + d > 0.
15Kevin Zhou Physics Olympiad Handouts
[2] Problem 16 (HRK). Consider a uniform U-tube with a diaphragm shown below.
(a) Suppose the diaphragm is opened and the liquid begins to flow from left to right. Show that
applying Bernoulli’s principle yields a contradiction.
(b) Explain why Bernoulli’s principle doesn’t apply if the diaphragm has a very wide opening.
(c) Explain why Bernoulli’s principle doesn’t apply if the diaphragm has a tiny opening.
Solution. (a) Since the pressures and velocities at points 1 and 3 are the same, Bernoulli’s
principle would imply the heights are also the same, which is false.
(b) Bernoulli’s principle is just energy conservation, applied to water moving along a streamline.
In this case, the liquid just oscillates back and forth, with point 1 and point 3 alternating
periodically in height. Bernoulli’s principle can’t be applied between points 1 and 3 because
water never moves all the way from point 1 to point 3; it just wiggles back and forth.
(c) In this case, viscous effects are not negligible. Energy is dissipated to heat, so Bernoulli’s
principle doesn’t apply.
But what if we used a very nonviscous fluid? In that case, you would still lose energy, but
to turbulence; the flow pattern after the diaphragm’s opening would look like the setup of
problem 17. Energy in turbulent eddies eventually dissipates to heat, so we again lose energy
and Bernoulli’s principle doesn’t apply.
But what if the diaphragm is also shaped like a smooth curve, to prevent turbulence? In that
case, you don’t lose energy, but the flow isn’t steady. The fluid continually accelerates as it
goes through the diaphragm; in the long run the heights of points 1 and 3 alternate, as in
part (b). Fluid does go all the way from point 1 to point 3, but Bernoulli’s principle can’t be
applied because the flow isn’t steady.
[2] Problem 17 (HRK). A stream of fluid of density ρ with speed v1 passes abruptly from a cylindrical
pipe of cross-sectional area a1 into a wider cylindrical pipe of cross-sectional area a2 as shown.
16Kevin Zhou Physics Olympiad Handouts
The jet will mix with the surrounding fluid, forming a turbulent region where the pressure is
approximately P1. Further to the right, the flow becomes almost uniform again, with average speed
v2 and pressure P2.
(a) By considering force and momentum, show that
P2 − P1 = ρv2(v1 − v2).
(b) Show from Bernoulli’s principle that in a gradually widening pipe we would instead get
P2 − P1 =
1
2
ρ(v2
1 − v2
2).
(c) Find the loss of pressure due to the abrupt enlargement of the pipe. Can you draw an analogy
with elastic and inelastic collisions in particle mechanics?
Solution. (a) Let’s consider the fluid in the region bounded by the two shaded circles. After a
small time dt, this fluid moves to the right, and some of the fluid originally traveling at v1
ends up traveling at v2. The rate of change in momentum is
∆p
∆t
= (v2 − v1)
∆m
∆t
= ρv2a2(v2 − v1).
This must be equal to the net force on the fluid, which has three contributions:
• A leftward force P2a2 from the fluid on its right side.
• A rightward force P1a1 from the fluid on its left side.
• A rightward force P1(a2 − a1) from the vertical part of the wall.
This is a net rightward force of (P1 − P2)a2. Equating these expressions and dividing by a2
gives the desired result.
(b) This is simply a direct application of Bernoulli’s principle.
(c) The extra loss of pressure is the difference,
∆P =
1
2
ρ(v1 − v2)2
.
As in an inelastic collision, the loss of energy (reflected in the loss of pressure, which is
essentially like elastic potential energy) goes as the square of the relative speed.
17Kevin Zhou Physics Olympiad Handouts
[2] Problem 18 (PPP 49). A bucket with a hole in the bottom is held below a faucet. When the
bucket is empty, the hole is plugged, and the faucet is turned on, the bucket fills with water in time
T1. When the bucket is full, the faucet is turned off, and the hole is opened, the bucket empties in
time T2. If both the hole and faucet are open, what ratio of T1/T2 can cause the bucket to overflow?
Solution. Let water come out of the faucet at a volumetric flow rate of V̇ , so that the bucket with
area A and height h0 will be filled in time T1 = Ah0/V̇ .
When the hole at the bottom with effective area a is open, water will flow out at a speed of
v =
√
2gh, giving a volumetric flow rate of −a
√
2gh, where h is the water depth. Then
d
dt
(Ah) = A
dh
dt
= −a
p
2gh,
−
Z 0
h0
dh
√
2gh
=
Z T2
0
a
A
dt,
s
2h0
g
=
a
A
T2.
To overflow the water bucket, the faucet needs to add water faster than the plug drains water when
the bucket is almost full. The overflow condition is then
V̇ =
Ah0
T1
> a
p
2gh0.
Plugging in our result for T2 gives
T1
T2
<
1
2
.
This differs from the naive answer T1/T2 = 1 because the rate of emptying depends on the current
water height. This also implies that all those elementary school questions about filling and emptying
a bucket simultaneously are wrong. For example, you might have once been asked, “if a bucket can
be filled in 2 minutes and drains in 3 minutes, how long does it take to fill if the drain is open?” If
we were working with sand, then the correct answer would be 6 minutes (for reasons noted in P1),
but for real water, the true answer is that it never fills up all the way.
[4] Problem 19. This problem is about the subtle phenomenon of vena contracta. An incompressible
fluid of density ρ is flowing through a tube of area A1, which suddenly contracts to area A2 ≪ A1.
Naively, the flow looks as shown at left below.
18Kevin Zhou Physics Olympiad Handouts
(a) Argue by energy conservation that v2 ≈
p
2(P1 − P2)/ρ.
(b) Argue that the net force on the fluid shown in the picture is approximately (P1 −P2)A2. Then
argue by momentum conservation that v2 ≈
p
(P1 − P2)/ρ.
(c) The resolution of the paradox is that in part (a), we’re actually solving for the final speed of
the water, and in part (b), we’re actually solving for the horizontal component of the velocity.
So the resolution has to be that the fluid does not exit through the orifice purely horizontally.
Instead, it contracts as it exits, as shown at right above, eventually shrinking to a minimum
area A3, at which point the flow actually is horizontal. Assume for simplicity that P1 ≫ P3.
Show that the final area is A3 ≈ A2/2, so that the hole is effectively only half its size.
(d) Even assuming ideal fluid flow satisfying Bernoulli’s principle, the result above for A3 is not
exact, but is instead off by about 20% for the sudden opening shown above. Is the true value
of A3 higher or lower than A2/2?
(e) How could the shape of the orifice be modified so that A3 is almost exactly A2/2? How could
the orifice be modified so that the water comes out perfectly straight?
Solution. (a) Applying Bernoulli’s principle,
1
2
ρ(v2
2 − v2
1) = P1 − P2.
Since A1v1 = A2v2 and A2 ≪ A1, we have v2
2 − v2
1 ≈ v2
2, so the desired equation follows.
(b) Taking a tube bounded by A1 and A2 and apply F = dp/dt to the fluid within it. The pressure
at the walls is approximately P1 everywhere, so the force cancels out except at the area A2.
The net force is
F ≈ (P1 − P2)A2.
On the other hand, the rate of change of momentum is (dm/dt)v2 = ρA2v2
2, where we again
use v1 ≪ v2, giving the result.
(c) Neglecting P3, Bernoulli’s principle gives
1
2
ρv2
3 ≈ P1.
To use momentum conservation, apply F = dp/dt to a tube bounded by A1 and A3, giving
F ≈ P1A2,
dp
dt
= ρA3v2
3
which gives us
A3
A2
ρv2
3 ≈ P1.
Combining these equations gives A3/A2 ≈ 1/2 as desired.
(d) In reality, the pressure on the right wall is not precisely P1, but instead slightly lower near
the hole because the fluid has nonzero speed there. So the net force is actually larger than
expected, so A3 > A2/2. (Actually calculating this amount exactly would be rather difficult.)
19Kevin Zhou Physics Olympiad Handouts
(e) We can force the net force to be almost exactly (P1 − P2)A2 with a “Borda mouthpiece.”
This works because by construction, the fluid in the parts jutting out to the right is almost
perfectly at rest.
On the other hand, if we wanted the water to come out perfectly straight, we could simply
make a curved mouthpiece that perfectly follows the path the water would have taken if it
weren’t there, and end it once the water reaches its final area A3. At that point, it will come
out of the hole straight.
Remark
Vena contracta is too subtle for introductory textbooks, but it makes a big practical difference.
For example, if you estimate how long it takes water in a bucket to empty through a hole
using Torricelli’s law, you’ll be off by up to a factor of 2 if you don’t include vena contracta!
And Halliday, Resnick, and Krane don’t consider it in their example titled “thrust on a
rocket”, getting a thrust which is also off. Of course, real plumbers and rocket scientists are
perfectly aware of vena contracta, and carefully design nozzles and drains to account for it.
For further discussion, see this paper.
4 Fluid Systems
Now we put it all together and consider complex mechanical systems with moving fluids.
Idea 7
If a fluid is moving in a complex way, it’s usually difficult to say anything by directly
considering the flow. Instead, it’s easier to apply conservation laws.
Example 11
A fluid of density ρ flowing with a fast velocity v1 and height h1 can undergo a “hydraulic
jump”, where the height of the fluid increases to h2. At the same time, the fluid flow slows
down and becomes turbulent.
This phenomenon is very common in everyday life. For example, it happens whenever you
turn on the water faucet in a sink; the hydraulic jump occurs on a circle centered on the
20Kevin Zhou Physics Olympiad Handouts
faucet. Find the final height h2.
Solution
During this process, the bulk kinetic energy of the water is not conserved, because it is
converted to turbulent motion. However, the horizontal momentum of the water is approxi-
mately conserved. Consider a stream of water of width w flowing in the x direction, where
the hydraulic jump occurs at x = 0. By mass conservation,
v1h1 = v2h2
where v2 is the final speed. Now we consider a fixed subset of the water encompassing the
hydraulic jump. The atmospheric pressure does not yield a net horizontal force on the water,
so we focus on the pressure in excess of atmospheric pressure. The total excess pressure force
on the left end is
Fℓ =
Z h1
0
ρghwdh =
1
2
ρgwh2
1.
Therefore, we have total force
F =
1
2
ρgw(h2
1 − h2
2).
On the other hand, the mass of water that flows through the hydraulic jump per unit time
is ρh1wv1, and its velocity decreases by v1 − v2, so
dp
dt
= −ρh1wv1(v1 − v2) = ρwv1v2(h1 − h2)
where we used mass conservation. Equating F = dp/dt and simplifying gives
g(h1 + h2) = 2v1v2.
Applying mass conservation again leads to a quadratic in h2,
h2
2 + h1h2 −
2v2
1h1
g
= 0
and the physically relevant positive solution is the answer,
h2 = −
h1
2
+
s
h2
1
4
+
2h1v2
1
g
.
For v2
1 > gh1, we have h2 > h1 and an ordinary hydraulic jump. For v2
1 < gh1, you might
expect a “reverse” hydraulic jump to occur, but this is impossible by the second law of
thermodynamics. In a hydraulic jump, some of the kinetic energy of laminar flow energy
is converted to turbulent flow, which is essentially heat; thus the reverse can’t happen.
So in addition to deriving h2, we’ve found the minimum v1 for a hydraulic jump to be possible!
Note that this conservation law approach doesn’t tell us about how far a fluid will flow before
it undergoes a hydraulic jump. That would require understanding the fluid flow in detail,
accounting for turbulence and viscosity, which is generally analytically intractable. For more
on this subject, see sections 26.1 and 26.2 of Lautrup.
21Kevin Zhou Physics Olympiad Handouts
[3] Problem 20 (PPP 70). A tanker full of liquid is at rest on a frictionless horizontal road.
A small vertical outlet pipe at the rear of the tanker is opened. Describe qualitatively how the
tanker will move (a) immediately afterward, and (b) after a long time. Assume that the water
always falls out of the cart with zero horizontal velocity in the cart’s frame.
Solution. (a) The total horizontal momentum of the tanker and liquid is conserved, and is initially
zero, so the center of mass of the tanker and liquid cannot move horizontally. When water
starts to flow out, it comes out on the tanker’s left side. Thus, the tanker has to initially
move to the right.
(b) However, it’s impossible for the tanker to always move to the right. If that were the case,
then after a long time, when the water has all left, both the tanker and all of the water will
be moving to the right, violating momentum conservation. Thus, at some point the tanker
has to turn around, and its final velocity is to the left. (However, if the draining process
was so violent that the water started sloshing around, then the tanker would jerk back and
forth, which would screw up the above argument. We’re implicitly assuming that the draining
process is slow, so that the water still inside the tanker moves with it.)
By the way, it’s worth thinking about the forces that make the tanker move. These forces must
be due to water pressure. When the water starts flowing towards the drain, it has a higher velocity
near the drain, and thus a lower pressure by Bernoulli’s principle. Thus, the total pressure force
on the tanker’s left wall is lower than that on its right wall, which is why the tanker starts moving
to the right. On the other hand, when there’s only a thin layer of water left, the part of the water
to the right of the drain will have a big leftward horizontal velocity. That leftward momentum is
transferred to the tanker near the drain, where the water is forced to turn around and fall down
vertically; that’s why the tanker starts moving to the left near the end. If you’re interested in seeing
more, there’s a complete analysis here which even includes explicit expressions for the tanker’s
position over time.
[3] Problem 21 (PPP 74). A jet of water strikes a horizontal gutter of semicircular cross-section
obliquely, as shown.
The jet lies in the vertical plane that contains the center-line of the gutter. Assume the angle is
relatively shallow, so that the water hits the gutter smoothly, and doesn’t splatter. Find the ratio
of the quantities of water flowing out at the two ends of the gutter as a function of the angle of
incidence α of the jet.
22Kevin Zhou Physics Olympiad Handouts
Solution. Let the original water jet have area A0 and speed v. Let v1 be the speed of the stream
to the right, and let A1 be its area. Similarly define v2 and A2. First, we claim that
v = v1 = v2.
This follows directly from Bernoulli’s principle. The incoming jet has atmospheric pressure, because
it’s exposed to the air, and so do the two streams. Since they have the same pressures, they have
the same speeds. (Of course, this wouldn’t be true if energy was dissipated. For instance, if the
water jet were fast and directed straight down, water would splatter everywhere.)
Next, conservation of mass gives
A0 = A1 + A2.
Conservation of horizontal momentum gives
ρA0v2
sinα = ρA1v2
− ρA2v2
which implies
A0 sinα = A1 − A2.
Combining this with mass conservation gives
A1 =
1 + sinα
2
A0, A2 =
1 − sinα
2
A0.
Since the speeds are the same, the ratio of flow rates is just the ratio of areas,
A1
A2
=
1 + sinα
1 − sinα
.
[3] Problem 22 (NBPhO 2005). A water pump consists of a vertical tube of cross-sectional area S1
topped with a cylindrical rotating tank of radius r. All the vessels are filled with water; there are
holes of total cross-sectional area S2 ≪ S1 along the perimeter of the tank, which are open for the
operating regime of the pump. The height of the tank from the water surface of the reservoir is
h. An electric engine keeps the vessel rotation at angular velocity ω. The water density is ρ, the
atmospheric pressure is p0, and the saturated vapor pressure is pk. Inside the tank there are metal
blades, which make the water rotate with the tank.
(a) Find the pressure p2 at the perimeter of the tank when all the holes are closed.
(b) For the rest of the problem, we suppose the holes are opened. Find the velocity v2 of the
water jets with respect to the ground.
23Kevin Zhou Physics Olympiad Handouts
(c) If the tank rotates too fast, the water pressure at some point will become lower than pk. As
you’ll see in T3, this will cause “cavitation”, i.e. the water will start boiling, lowering the
pump’s efficiency. Find the highest cavitation-free angular speed ωmax.
(d) If the power of the electric engine is P, what is the theoretical upper limit of the mass pumped
per unit time, assuming S2 can be freely adjusted?
Solution. See the official solutions as usual. This setup is called a centrifugal pump. There are
typos in the final answers to the first and third parts; the correct answers are:
p2 = p0 − ρgh + ρω2
r2
/2
v2 =
p
2(ω2r2 − gh)
ωm =
√
2
r
s
gh +

p0 − pk
ρ
− gh

S1
S2
2
µ = P/2gh
[3] Problem 23. A helicopter with length scale ℓ and density ρh can hover using power P, in air of
density ρa. Find a rough estimate for P in terms of the given parameters. (For a nice followup
discussion of lift, see section 3.6 of The Art of Insight.)
Solution. Helicopters push themselves upward by pushing air downward. We need
dp
dt
∼ ρhℓ3
g
to support the aircraft, while considering the rate of air pushed downward gives
dp
dt
∼
dm
dt
v ∼ ρaℓ2
v2
where v is the velocity of the air. By comparing both sides,
v ∼
s
ρhℓg
ρa
.
The power needed goes into putting kinetic energy into the air,
P ∼
dm
dt
v2
∼ ρaℓ2
v3
∼
s
ℓ7g3ρ3
h
ρa
.
The only thing that might be surprising is the dependence on ρa, where more energy is required
if the air is thinner. (This is why helicopters have trouble rescuing people from Mount Everest.)
The reason is that thinner air needs to be pushed down faster to get the same lift, but this requires
more power because energy is quadratic in speed. Also, note that this problem couldn’t have been
solved by dimensional analysis alone, since two densities were present.
24Kevin Zhou Physics Olympiad Handouts
Example 12: Kalda 82
A water turbine consists of a large number of paddles that could be considered as light flat
boards with length ℓ, that are at one end attached to a rotating axis. The paddles’ free ends
are positions on the surface of an imaginary cylinder that is coaxial with the turbine’s axis.
A stream of water with velocity v and flow rate µ (kg/s) is directed on the turbine such that
it only hits the edges of the paddles.
Find the maximum possible power that can be extracted.
Solution
Let vt be the speed of the edge of the turbine. In time dt, the amount of mass of water that
collides with the turbine is
dm =
µ
v
(v − vt)dt.
The horizontal force on the paddle is
F =
dp
dt
=
dm
dt
∆v =
µ
v
(v − vt)2
so the power delivered to the turbine is
P = Fvt =
µvt
v
(v − vt)2
.
Maximizing this by setting dP/dvt = 0 gives vt = v/3, so the maximum power is 4µv2/27.
This is 8/27 of the total power in the incoming water.
[3] Problem 24. Air of constant density ρ and wind speed vi is heading directly towards a windmill
of area A. When the wind gets to the windmill blades, it is traveling forward with speed vf. Well
after it leaves the vicinity of the blades, it has speed vo. The design of the windmill, such as the
shape and speed at which its blades turn, can be adjusted to set the value of vf.
(a) Find the power going from the wind to the turbine by using energy conservation, assuming
that there are no extraneous energy losses, e.g. to turbulence.
(b) Find the power going from the wind to the turbine by considering the force of the windmill
on the air and using momentum conservation, again assuming no extraneous energy losses.
(c) Find an upper bound on the ratio of the wind power that can be harvested by the windmill,
to the amount of wind power that would pass through it if it weren’t running.
This result is called the Betz limit.
25Kevin Zhou Physics Olympiad Handouts
Solution. (a) Since there’s nowhere else for the energy to go, the power must be the rate of
change of the wind’s energy. The mass flow rate is µ = ρAvf, so
P =
1
2
µ(v2
i − v2
o) =
1
2
ρAvf(vi − vo)(vi + vo).
(b) The (negative) power on the wind is Fvf where F is the rate of change of momentum of the
wind. Ideally, all of this power goes to the windmill, so
P = Fvf = µ(vi − vo)vf = ρAv2
f(vi − vo).
(c) By comparing these equations, we find vf = (vi + vo)/2, which allows us to eliminate vf.
Plugging this back in gives
P =
1
4
ρA(vi + vo)2
(vi − vo)
which can then be maximized with respect to vo. Setting the derivative to zero gives vo = vi/3
and thus P = (8/27)ρAv3
i . If the windmill were not running, the rate at which wind energy
flows through it is (ρAvi)v2
i /2, which means the maximum fraction harvested is 16/27.
[5] Problem 25.  T 1 0GPhO 2017, problem 2. A very tricky composite fluids/mechanics problem.
5 Wet Water
So far we’ve mostly ignored viscosity and turbulence, an unrealistic limit that some refer to as “dry
water”. Now we’ll consider some problems involving real, wet water.
Idea 8
When the velocity of a flow is not uniform, there is a drag force
F = ηA
dv
dy
which tries to make the velocity more uniform. Here, η is the (dynamic) viscosity. Also,
when fluid flows next to a wall, the fluid right next to the wall is approximately at rest.
Example 13: HRK
Prairie dogs live in large colonies in complex interconnected burrow systems. They face the
problem of maintaining a sufficient air supply to their burrows to avoid suffocation. They
avoid this by building conical earth mounds about some of their many burrow openings. How
does this air conditioning scheme work?
Solution
Because of viscous effects, the wind speed is small near the ground, and hence grows with
height. By Bernoulli’s principle, this means the pressure at the top of a mound is slightly
lower than the pressure at an opening without a mound. This difference in pressure drives
air flow through the burrows.
26Kevin Zhou Physics Olympiad Handouts
Example 14
If you’ve used a standard garden hose, you might have noticed that the water shoots higher
if you partially block the outlet with your finger. Why does this happen?
Solution
The water company provides water to your house at a fixed pressure Patm + ∆P. Thus,
naively the water should always shoot equally far, because Bernoulli’s principle says the exit
speed is v =
p
2∆P/ρ, corresponding to a peak height ∆P/ρg, independent of the area of
the hole. (There is a vena contracta effect, as mentioned in problem 19, but this also doesn’t
depend on the area.)
The resolution is that for a typical long, thin garden hose, viscous losses dominate. As you’ll
see in problem 26, a higher mass flow rate leads to a higher drop in pressure. When you
partially block the outlet, you’re simply decreasing the flow rate, so that viscosity has a
smaller effect, allowing the water to get closer to the maximum possible height ∆P/ρg.
In plumbing, the quantity ∆P/ρg is called the “pressure head”, and effects like viscosity
give rise to “head loss”. Unfortunately, for most realistic pipes it is intractable to calculate
the head loss, because the water flow is turbulent. Instead, the amount of head loss is
parametrized by the so-called Darcy friction factor, whose values are tabulated in references.
Example 15
If you stir a cup of coffee, around how long does it take the rotational motion to settle down?
Solution
The rotational motion stops because of viscous drag against the walls. For concreteness, let’s
suppose the coffee has density ρ, viscosity η, and is in a mug of radius R and height H ≫ R
(so most of the drag comes from the vertical wall of the mug). The angular momentum is
L ∼ Iω ∼ ρR4
Hω.
The damping torque due to viscous forces is
τ ∼ RF ∼ ηA
dv
dr
R
and since the drag is from the vertical wall, A ∼ HR. Estimating the velocity gradient dv/dr
is a little trickier. As mentioned above, the coffee right next to the wall has zero velocity,
while the coffee slightly inward from the wall has speed v ∼ Rω. The velocity transitions
between these two values in a thin “boundary layer”.
Finding the exact thickness of this boundary layer would require solving complicated
differential equations, but it suffices to use dimensional analysis. Note that R and H can’t
possibly play a role, since the layer is so thin it doesn’t “see” the shape of the mug. The
fluid properties η and ρ surely matter. Perhaps more subtly, ω matters. If the fluid weren’t
27Kevin Zhou Physics Olympiad Handouts
spinning, but rather were uniformly translating in a plane, then the boundary layer would
just grow over time until it was the size of the whole fluid. That’s what we saw in problem 26,
where the velocity changes gradually along the whole pipe radius R. The boundary layer
doesn’t grow to the whole mug’s size here, because the velocity it’s trying to match is
constantly changing over the timescale 1/ω.
Using dimensional analysis, we thus conclude the boundary layer has thickness
∆r ∼
r
η
ρω
.
The damping torque is
τ ∼ η (HR)
Rω
∆r
R ∼
p
ρηω3 HR3
so the timescale for damping is
T ∼
L
τ
∼
r
ρ
ηω
R.
Numerically, if we use the rough estimates
ρ ∼ 103
kg/m3
, ω ∼ 10s−1
, R ∼ 0.1m, η ∼ 10−3
Pas
where η is the value for room temperature water, then we get the reasonable results
∆r ∼ 0.3mm, T ∼ 30s.
[3] Problem 26. Water flows through a cylindrical pipe of radius R and length L ≫ R, across which
a pressure difference ∆P is applied.
(a) If the flow is slow, viscous effects dominate. By balancing forces on a cylinder of fluid, show
that
v(r) =
∆P
4ηL
(R2
− r2
).
Then show that the total mass flux is
dm
dt
=
ρπR4∆P
8ηL
.
This is called Poiseuille’s law.
(b) If the flow is very fast, the flow is turbulent. Viscous effects are negligible, and the work
done by the pressure difference is dissipated by turbulence into internal energy. Find a rough
estimate of the mass flow rate.
Solution. (a) We see −η(2πrL)dv/dr = πr2∆P, so
dv/dr = −
∆P
2ηL
r.
28Kevin Zhou Physics Olympiad Handouts
Integrating and using the fact that v(R) = 0 yields the desired result. Now, the mass flux is
dm/dt =
Z R
0
(2πrdr)ρv(r)
= 2πρ
∆P
4ηL
Z R
0
(R2
− r2
)rdr
=
ρπR4∆P
8ηL
as desired.
(b) We perform dimensional analysis, leaving µ out because viscosity is negligible. The parameters
of the problem are ∆P, L, R, and ρ, which is one more than the number of independent
dimensions. However, we can note that the flow rate ought to stay the same if we connect
two identical pipes in series, with the same pressure drop ∆P across each one. This implies
that the mass flow rate only depends on the ratio ∆P/L, i.e. the pressure gradient. Carrying
out dimensional analysis as usual gives
dm
dt
∝
r
ρR5∆P
L
.
[4] Problem 27. When a spherical object of radius R moves with velocity v through a fluid of viscosity
η and density ρ, it experiences a drag force.
(a) Apply dimensional analysis to constrain the possible forms of the drag force F. You should
find there is one dimensionless quantity inversely proportional to η, in accordance with the
Buckingham Pi theorem of P1. This dimensionless quantity is called the Reynolds number,
and it determines what kind of drag dominates.
(b) It turns out that F ∝ v at low velocities and F ∝ v2 at high velocities. Using this information,
find the form of the drag force in both cases. (For reference below: the answers are
F = 6πηRv, F =
1
2
CdρAv2
where Cd is a dimensionless drag coefficient, which is about 1/2 for a sphere. The drag
coefficient depends strongly on the shape of the object, being much smaller for streamlined
shapes, and weakly on the velocity.)
(c) Hot water has density ρ = 103 kg/m3 and viscosity η = 0.3 × 10−3 Pas. (Room temperature
water has about 3 times the viscosity.) For an object of radius 1cm, find the characteristic
velocity that divides the two types of drag.
(d) The two cases correspond to flow patterns as shown below.
29Kevin Zhou Physics Olympiad Handouts
In the latter case, a region of turbulent flow is created. Using this picture, explain why the
drag force is proportional to v2.
(e) The results above apply to both liquids and gases. In a gas, the relevant quantities are the
mass m of the gas molecules, their typical speed u, their number density n, and radius r (which
determines how often they collide with each other). Use dimensional analysis to constrain the
possible forms of the viscosity η. How do you think η scales with n?
Drag is nicely discussed throughout The Art of Insight; see sections 3.5, 5.3.2, and 8.3.1.2.
Solution. (a) By running a standard dimensional analysis, we find the most general expression
with the right dimensions of force is
F = ηRv f

ρRv
η

.
In accordance with the Buckingham Pi theorem of P1, we can’t pin down the answer exactly;
we can only determine it up to an unknown function of Re = ρRv/η, the unique dimensionless
quantity in the problem. This quantity is called the Reynolds number; when it is low, viscosity
dominates.
(b) At low velocities, viscosity dominates, so we are in the low Reynolds number regime. The fact
that F ∝ v in this regime means that the function f must approach a constant,
lim
x→0
f(x) = c1.
This implies that F ∝ ηRv. At high velocities, we have a high Reynolds number. To get a
force F ∝ v2, we must have f(x) ∼ c2x as x → ∞, giving F ∝ ρR2v2.
This is an illustration of how dimensional analysis plus a few limiting cases lets us solve a
tricky problem. For intermediate velocities, of course, we would need to know the form of
f(x), which is quite complicated and in practice is found from simulations or experiments.
(c) One way of doing this is by noting that the characteristic velocity is when the forces are of
the same order,
6πηRv =
1
2
CdρAv2
≈
1
4
πρR2
v2
which gives
v =
24η
ρR
= 7.2 × 10−4
m/s
30Kevin Zhou Physics Olympiad Handouts
for hot water.
Since the Reynolds number Re is the only dimensionless quantity in the problem, the crossover
must correspond to some value for Re. Our rough estimate above corresponds to taking
Re = 24. (In reality, the crossover happens at Re ∼ 103, but unfortunately there’s no easy
way to deduce this from first principles; it was measured, not calculated.)
(d) In the ball’s frame, the average velocity of the water decreases significantly behind the ball,
due to the turbulent flow. Then by momentum conservation, the drag force on the ball is
F = dp/dt ∼ v(dm/dt) ∼ v(ρAv) ∝ v2.
(e) By a standard dimensional analysis, we have
η =
mu
r2
g(nr3
)
where g is an unknown function. Remarkably, we will see in T1 that for a sparse gas, η is
actually independent of n, corresponding to g being a constant.
Remark
Without knowing the answer to part (b) above, one might expect that the drag force can
depend on η, ρ, v, and the shape of the object. In the linear case, the drag force does not
depend on ρ. In the quadratic case, the drag force does not depend on η.
These differences can be understood by thinking of where the energy dissipated is going. In
the quadratic case, the fluid picks up macroscopic kinetic energy, in the form of a turbulent
flow pattern, which is why the drag force does not depend on η. In the linear case, the fluid
slows smoothly and hence does not pick up any macroscopic energy; instead the energy is
dissipated as heat. Since the macroscopic kinetic energy is not involved, the drag force does
not depend on ρ. (Of course, in the quadratic case the turbulent motion eventually stops; at
this point it has been converted to heat. The time it takes this to happen is set by η, but it
occurs well after the object has passed by and hence does not affect the drag force.)
Example 16
If raindrops fall, why don’t clouds fall?
Solution
This isn’t a stupid question! It’s actually a tough one, which stumped the ancient Greeks
and Romans. To give context, we’ll cover a bit of atmospheric physics, a topic we will
continue in T1 and T3. This is all a bit of a simplification of an interesting story, told in
more detail in chapter II-9 of the Feynman lectures.
First, it’s useful to review the water cycle. Sunlight directly warms up the ground, and the
ground thereby warms the air near the ground. Since warmer air at the same pressure is less
dense, it begins to rise by convection. This air also expands roughly adiabatically as it rises,
lowering its temperature. Warmer air can also hold more water, so if the original air was
moist, water vapor will condense into droplets as the air rises. (This last point is important,
31Kevin Zhou Physics Olympiad Handouts
because the condensation releases energy, partially counteracting the cooling of the rising air.
This keeps it warmer and hence lighter than its surroundings, allowing it to continue to rise.)
Now consider a droplet of radius r. Depending on the droplet size and velocity, the drag
force scales as r or r2, while the gravitational force scales as r3. The tiny water droplets in
clouds are thus carried upward with the ascending moist air, since the drag force dominates.
They fall down once they accrete into sufficiently large raindrops, where gravity dominates.
Incidentally, falling raindrops do not have the teardrop shape shown in typical illustrations.
Small raindrops are nearly spherical, because of surface tension. Large raindrops are squashed
by air resistance into a “hamburger” shape.
Example 17
Why can you see through both humid air and heavy rain, but not through fog or a cloud,
which contains droplets of intermediate size?
Solution
Let’s consider a fixed number of water molecules in a fixed volume. When they’re all
separated, we have humid air. As the molecules join into small droplets the amount of
electromagnetic radiation scattered by each droplet grows as n2 because of constructive
interference (as discussed in E7), which allows them to scatter a larger fraction of the light
that passes through them.
But for the very large droplets found in rain, the trend turns around. These droplets are
much larger than the wavelength of light, which means that we’re in the geometric optics
limit. They can scatter at most 100% of the light that falls on them, which scales as their
area. Since the volume goes as n, the area goes as n2/3.
We therefore conclude that
scattering
water molecule
∼
(
n small droplets in cloud/fog
n−1/3 large droplets in rain
so that clouds occupy a sweet spot, scattering the most light for a given amount of water.
The same applies for fog, which is simply a cloud that touches the ground.
6 Surface Tension
We now return to surface tension, first covered in M2, which we’ll see yet again in T3.
32Kevin Zhou Physics Olympiad Handouts
Example 18
A very thin, hollow glass tube of radius r is dipped vertically inside a container of water.
Find the equilibrium height of the water in the tube.
Solution
In M2, we considered problems that could be solved knowing only the “surface tension
of water” γ, which is the energy cost per unit area of having a water-air interface. But
in this problem there is also a water-glass interface, and the answer to the question
depends on precisely how water and glass interact. Specifically, you need to know the sur-
face tension coefficient γwg which determines the energy cost of having a water-glass interface.
Fortunately, it turns out you don’t need to know γwg if you know the contact angle θ, i.e. the
angle between the glass and water surface at the top of the meniscus, which is drawn as
acute in the diagram above. We’ll just treat θ as a given, but for an explanation of how θ is
determined, see T3 or section 5.5 of Lautrup.
Since the glass tube is very thin, surface tension determines the shape of the water-air
surface, so it is spherical since spheres minimize area. By some elementary geometry, one
can show that the radius of curvature of this sphere is R = r/cosθ.
We showed using force balance arguments in M2 that the pressure inside the curved water
surface is lower than atmospheric pressure by ∆P = 2γ/R. On the other hand, we also know
from Pascal’s principle that ∆P = ρgh. Equating the two gives
h =
2γ cosθ
ρgr
.
This is Jurin’s law.
Physics problems often assume that water and glass have zero contact angle. This implies
that water perfectly wets glass, i.e. that a droplet of water placed on a horizontal glass surface
will spread to cover it completely. We will follow this assumption below, though in practice,
glass tends to quickly get coated in a layer of impurities, leading to a nonzero contact angle.
33Kevin Zhou Physics Olympiad Handouts
Example 19: PPP 130
Water in a glass beaker forms a meniscus, as shown below.
Find the height h to which the meniscus rises above the flat water surface.
Solution
We consider all of the external horizontal forces acting on the water. The surface tension
force acting at the top of the meniscus is purely vertical, because water and glass have zero
contact angle. The other surface tension force acting on the flat part of the water is γ per
length. This balances the excess hydrostatic pressure (i.e. the pressure above atmospheric
pressure) at the wall, which is ρgh2/2 per unit length. Thus,
h =
r
2γ
ρg
.
We could have also gotten this with dimensional analysis, up to the prefactor.
Remark
You might be wondering how to compute the shape of the meniscus. There are two methods.
First, the pressure right above the water surface is Patm, so the pressure right below the water
surface can be determined from the radii of curvature of the surface, using the Young–Laplace
equation from M2. This pressure can also be computed from the height of the surface using
Pascal’s principle. Combining these two yields a differential equation for the shape with a
rather complicated solution, as explained in sections 5.6 and 5.7 of Lautrup. As you’ll see in
problem 33, you can also derive this result by considering force balance on the water.
Example 20: PPP 29
Water can rise to a height H in a certain capillary tube. Three “gallows” are made from this
tubing by bending it, and placed into a tank of water.
34Kevin Zhou Physics Olympiad Handouts
Note that H′ > H. For which tubes, if any, does water flow out of the other end?
Solution
Clearly no water can fall out of (a), because this would produce a perpetual motion machine.
The gallows (b) and (c) are a bit more subtle. Water will not fall out of a capillary tube
if its end is less than a height H below the free water surface; this follows from the same
derivation as Jurin’s law, with the surface tension acting to hold the water in the tube. So
water only falls out of (c).
[2] Problem 28. A soap bubble of radius R and surface tension γ has a small tube of radius r ≪ R
passing through its surface. If the air has density ρ, find the rate of decrease of R.
Solution. This is an adaptation of a 2006 Russian Olympiad question, with some unnecessary
assumptions removed. Let v be the speed of the air as it moves through the tube. Since the tube
is thin, the air speed is only significant in and near the tube itself. After the air exits the tube, it
spreads out, and before it enters the tube it gradually converges. Thus, within most of the bubble’s
volume, the air speed is negligible. The pressure at the outside of the tube is Patm, and the pressure
throughout most of the bubble is Patm + 4γ/R by the Young–Laplace equation from M2.
Thus, applying Bernoulli’s principle between a point near the middle of the bubble and a point
near the exit of the tube, we find
v =
s
2∆P
ρ
=
r
8γ
ρR
.
By mass conservation,
dR
dt
(4πR2
) = (πr2
)v
from which we conclude
dR
dt
= −
r2
R2
r
γ
2ρR
.
Technically, the true answer is a bit different because the air inside the bubble is under a slightly
higher pressure, and so slightly denser. But ∆P ≪ Patm for any bubble you can reasonably make,
so this isn’t a significant source of error.
[2] Problem 29 (PPP 63). Water is stuck between two parallel glass plates. The distance between
the plates is d, and the diameter of the trapped water disc is D ≫ d.
In terms of the surface tension γ of water, what is the force acting between the two plates? This
effect can cause wet glass plates to stick together.
35Kevin Zhou Physics Olympiad Handouts
Solution. If you imagine slicing the puddle of water along a diameter, then its boundaries with
the air are arcs of circles, since this minimizes the surface area. Since water perfectly wets glass,
these circles are tangent to the two glass plates, which mean they have radius of curvature d/2. In
addition, the surface of the water has radius of curvature D/2 in the orthogonal direction. Thus,
by the Young–Laplace equation,
∆P = γ

2
D
−
2
d

≈ −
2γ
d
.
This lowered pressure inside the water puddle causes a “suction” force between the two plates, of
magnitude
F = |∆P|A = π(D/2)2 2γ
d
=
γπD2
2d
.
[3] Problem 30 (NBPhO 2009). A soap film of thickness h = 1µm is formed inside a ring of diameter
D = 10cm, and the surface tension of the film is γ = 0.025N/m. If the film is broken at the center,
it will begin to fall apart; estimate the time needed for this to happen.
Solution. Like the helicopter question, this can’t be solved with pure dimensional analysis, because
there are four quantities (h, D, γ, and the density ρ). Instead, we need to think about the dynamics.
The edge of the break will expand outward, pulled by surface tension. This competes with the
inertia of the film itself, and the inertia per area only depends on the combination ρh. Thus, we
can perform dimensional analysis on the combinations ρh, D, and γ, giving
t ∼
s
ρh
γ
D ∼ 0.02s.
This is good enough for an estimate, but for completeness, we present a more precise solution below.
Assume the film is broken at the center, so the edge of the break will be an expanding circle
of radius r. The surface tension will provide a force of 4πrγ outwards, pulling on the mass that
was originally inside the circle of m = ρπr2h. Thus, by considering forces along the radial direction
(i.e. treating r as a generalized coordinate in the spirit of M4), we have Fr = dpr/dt, or
4πrγ =
dm
dt
v + m
dv
dt
= 2πrv2
ρh + πr2
ρh
dv
dt
.
Cleaning this up a bit, we have
v2
0 = v2
+
r
2
dv
dt
, v0 =
r
2γ
ρh
.
This equation tells us that the speed of the break quickly approaches v0 when r is small. Our result
for v0 is called the Taylor–Culick formula; you can see the constant speed in action in slow-motion
videos. Thus, the total time taken is
t ≈
D/2
v0
=
s
ρh
8γ
D ∼ 0.01s
where we used ρ ≈ 103 kg/m3, since soap films are mostly water.
36Kevin Zhou Physics Olympiad Handouts
If you want to be even more precise, we can also solve the differential equation exactly. We can
get rid of the t-dependence entirely by writing dv/dt = (dv/dr)(dr/dt) = v dv/dr, giving
v2
0 = v2
+
rv
2
dv
dr
.
Separating and integrating yields Z
dr
r
=
Z
dv
2
v
v2
0 − v2
.
The broken part starts with v = 0 and small radius r0. Then, integrating and simplifying gives
v(r) = v0
p
1 − (r0/r)4
which indicates that once r becomes larger than the tiny value r0, the velocity rapidly approaches v0,
as stated above. You can go a step further, integrating to find r(t), but the result is a hypergeometric
function, which isn’t very enlightening.
[2] Problem 31 (Eotvos 2018). A large sealed cylindrical container of water of density ρ and atmo-
spheric pressure contains an air bubble of volume V and surface tension γ. The cylinder is in zero
gravity, but then begins to rotate with angular velocity ω. If ω is sufficiently high, the bubble will
acquire a simple shape. Qualitatively describe it, and find the condition on ω for this to occur.
Solution. Working in the frame rotating with the container, the centrifugal force tries to push
water outward, which tends to compress the bubble (which contains no water) towards the axis of
rotation. Thus, in the limit of high ω, the bubble is shaped like a long cylinder.
For this shape to be achieved, the energy associated with the centrifugal force must dominate
over that associated with surface tension. So we must have
ρV ω2
r2
≫ γr2
where r ∼ V 1/3 is the characteristic length of the initial spherical bubble. This is equivalent to
ω ≫
p
γ/ρV . I thank Kai Wen Teo for translating this problem.
[3] Problem 32.  ^ 1 0USAPhO 2020, problem B1. A nice, slightly mathematically involved surface
tension problem with a real-world impact. This setup is discussed in detail in section 5.4 of Lautrup.
[4] Problem 33. @ 1 0IPhO 2023, problem 3, parts B and C. A nice problem on the shape of a
meniscus, which also explains why pieces of cereal clump together in a bowl of milk.
Example 21: IPhO 2022 3B
Slightly wet sand is much stronger than either dry sand or very wet sand, which allows the
construction of large structures like sand castles. Why is this, and how does the strength
depend on the typical size r of the sand grains?
Solution
When a pile of sand is dry, the only force keeping it in place is friction, which is weak. When
it’s very wet, it’s essentially just water, which will simply collapse. But when it’s slightly
wet, adjacent sand grains have a small layer of water connecting them. Since sand grains are
37Kevin Zhou Physics Olympiad Handouts
small, this implies a huge total surface area, and thus large surface tension effects.
There are actually two conceptually distinct components to the effect. First, the bit of water
connecting two sand grains will provide a surface tension force F ∼ γr. Second, as you
saw in problem 29, the water has a pressure lower by ∆P ∼ γ/r, leading to an attractive
pressure force (∆P)A ∼ γr. In either case, that means the force needed to displace a single
grain of sand scales with r. The number of sand grains in a fixed cross-sectional area scales
as 1/r2, so the weight a sand castle can bear scales as 1/r. Thus, fine-grained sand is stronger.
This is another example of the subtleties of granular media, first mentioned in M2. Neither
sand nor water are strong on their own, but they’re strong together. Water provides the
forces, while the sand provide the structure which lets those forces be effective.
38
