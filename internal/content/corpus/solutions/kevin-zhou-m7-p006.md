---
id: kevin-zhou-m7-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m7-p006
solution_type: author
source_document: solution-document-kevin-zhou-m7sol
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M7Sol.pdf."
---

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
5
Kevin Zhou Physics Olympiad Handouts
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
6
Kevin Zhou Physics Olympiad Handouts
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
7
Kevin Zhou Physics Olympiad Handouts
[3] Problem 11.  W 1 0USAPhO 2004, problem A2.
[3] Problem 12.  W 1 0USAPhO 2002, problem A4. Be careful with this one!
