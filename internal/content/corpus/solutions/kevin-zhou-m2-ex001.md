---
id: kevin-zhou-m2-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex001
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

Example 1
Six blocks are attached in a horizontal line with rigid rods, and placed on a table with
coefficient of friction µ. The blocks have mass m and the leftmost block is pulled with a force
F so the blocks slide to the left. Find the tension force in the rod in the middle.
Solution
There are six objects here and five rods, each with a different tension, so a direct analysis
would involve solving a system of six equations. Instead, first consider the entire set of six
blocks as one object; we can do this because the rigid rods force them to move as one. The
total mass is 6m, and applying Newton’s second law gives
F − 6mgµ = 6ma, a =
F
6m
− µg.
Next, consider the rightmost three blocks as one object. Their total mass is 3m, and their
acceleration is the same acceleration a we computed above. This system experiences two
horizontal force: tension and friction. Newton’s second law gives
T − 3mgµ = 3ma
and solving for T gives
T =
F
2
.
1
Kevin Zhou Physics Olympiad Handouts
This is intuitive, because the differences of any two adjacent tension forces are the same;
that’s the amount of tension that needs to be spent to accelerate each block. So the middle
rod, which has to accelerate only half the blocks, has half the tension.
The reason we could ignore the tension forces in the other four rods is that the only thing
they do is ensure the blocks move with the same acceleration. Once we assume this is the
case, the specific values of the tensions don’t matter; we can just zoom out and forget them.
It’s just like how within each block there is also an internal tension which keeps it together,
but we rarely need to worry about its details.
Idea 3
To handle a problem where something is just about to slip on something else, set the frictional
force to the maximal value µN and assume slipping is not yet occurring, so the two objects
move as one. The same idea holds for problems which ask for the minimal force needed to
make something move, or the minimal force needed to keep something from moving.
[1] Problem 1 (KK 2.7). A block of mass M1 sits on a block of mass M2 on a frictionless table. The
coefficient of friction between the blocks is µ. Find the maximum horizontal force that can be
applied to (a) block 1 or (b) block 2 so that the blocks will not slip on each other.
Solution. Let the horizontal force be F. In both cases the friction is maximal, f = µM1g, and the
blocks move together, so a = F/(M1 + M2).
(a) The bottom block experiences only the force f = M2a, so
µM1g = M2a, F = µg(M1 + M2)
M1
M2
(b) The top block experiences only the force f = M1a, so
µM1g = M1a, F = µg(M1 + M2).
[2] Problem 2 (KK 2.28). A car, which can be treated as a point particle, enters a turn of radius R.
The road is banked at angle θ, and the coefficient of friction between the wheels and road is µ. Find
the maximum and minimum speeds for the car to stay on the road without skidding sideways.
Solution. Let N be the normal force, and let f be the friction force (defined to be positive if it’s
pointing up the hill). We see that N cosθ+f sinθ = mg, and N sinθ−f cosθ = mv2/R. Therefore,
v2
gR
=
N sinθ − f cosθ
N cosθ + f sinθ
.
Since −Nµ ≤ f ≤ Nµ, we have
v2
min
gR
=
sinθ − µcosθ
cosθ + µsinθ
,
v2
max
gR
=
sinθ + µcosθ
cosθ − µsinθ
.
2
Kevin Zhou Physics Olympiad Handouts
These formulas give nonsensical results for µ > tanθ or µ > cotθ. In these cases, it would be more
correct to say that if µ ≥ tanθ, then vmin = 0, and if µ ≥ cotθ, there is no maximum speed.
Usually, we are in the regime where µ ≥ tanθ, in which case vmin = 0 and banking the turn
increases vmax. Another benefit is that it helps align the direction of the gravitational and centrifugal
force with the height of the car, making the turn more comfortable; you get less of a sideways pull
along your seat. For this reason, banked turns are very common in highways. In highway engineering,
this trick is called superelevation.
[2] Problem 3 (KK 2.19). A “pedagogical machine” is illustrated in the sketch below.
All surfaces are frictionless. What force F must be applied to M1 to keep M3 from rising or falling?
Solution. By considering all the masses as one system, we see that a = F
M1+M2+M3
. We see that
the tension T = M3g, and T = M2a, so
M3g = M2a =⇒
F
M1 + M2 + M3
=
M3
M2
g =⇒ F = (M1 + M2 + M3)
M3
M2
g.
[3] Problem 4.   W 1 0USAPhO 2017, problem A1.
2 Balancing Torques
Idea 4
A static rigid body will remain static as long as the total force on it vanishes, and the total
torque vanishes, where the torque about the origin is
τ =
X
i
ri × Fi
where ri is the point of application of force Fi. If the total force vanishes, the total torque
doesn’t depend on where the origin is, because shifting the origin by a changes the torque by
∆τ =
X
i
a × Fi = a ×
X
i
Fi
!
= 0.
The origin should usually be chosen to set as many torques as possible to zero.
