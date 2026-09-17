---
id: kevin-zhou-m3-ex006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m3-ex006
solution_type: author
source_document: solution-document-kevin-zhou-m3sol
source_pdf: sources/kevin_zhou/site/handouts/M3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M3Sol.pdf."
---

Example 6
Two masses are constrained to a line. The mass m1 moves with velocity v1, and the mass m2
moves with velocity v2. The masses collide perfectly elastically. Find their speeds afterward.
Solution
The usual method is to directly invoke conservation of energy and momentum, which leads
to a quadratic equation. A slicker method is to work in the center of mass frame instead.
(This is useful for collision problems in general, and it’ll become even more useful for the
relativistic collisions covered in R2.)
18
Kevin Zhou Physics Olympiad Handouts
The center of mass of the system has speed
vCM =
m1v1 + m2v2
m1 + m2
.
Moreover, by momentum conservation, the center of mass never accelerates. Now we boost
into the frame moving with the center of mass. Since the total momentum is by definition
zero in the center of mass frame, the momenta of the particles cancel out. The only way for
this to remain true after the collision is if we multiply their velocities by the same number.
Energy is only conserved if this number is ±1, with the latter representing no collision at all.
Therefore, during an elastic collision, the velocities in the center of mass frame simply reverse.
(In the mid-1600s, Huygens started with this reasonable assumption and used it to derive
momentum and energy conservation!) Quantitatively, the initial velocities in that frame are
v1,CM = v1 − vCM, v2,CM = v2 − vCM.
The final velocities in that frame are
v′
1,CM = −v1 + vCM, v′
2,CM = −v2 + vCM.
Finally, going back to the original frame gives the final velocities
v′
1 = −v1 + 2vCM, v′
2 = −v2 + 2vCM.
There are many special cases we can check. For example, if m1 = m2, then the two masses
simply swap their velocities, as if they just passed through each other. As another check,
consider the case where the second mass is initially at rest, v2 = 0. Then
v′
1 = v1
m1 − m2
m1 + m2
, v′
2 = v1
2m1
m1 + m2
.
When m1 = m2, the first mass gives all its velocity to the second. When m2 is large, the first
mass just rebounds off with velocity −v1. When m1 is large, the first mass keeps on going
and the second mass picks up velocity 2v1. Finally, when m1 = m2/3, then the final speeds
are v′
1 = −v1/2 and v′
2 = v1/2, a nice result which is worth committing to memory.
Idea 6
The kinetic energy of a set of masses mi with total mass M can be decomposed as
X
i
1
2
miv2
i =
1
2
Mv2
CM +
X
i
1
2
mi(vi − vCM)2
where the first term is the “center of mass” contribution, and the second term is the amount
of kinetic energy in the center of mass frame. (This statement also holds for multidimensional
collisions, if the squares are replaced with squared vector magnitudes.) The first term can be
rewritten as P2/2M where P is the total momentum of the masses. Therefore, the kinetic
energy of a system of masses with fixed total momentum is minimized when the second term
19
Kevin Zhou Physics Olympiad Handouts
is zero, i.e. when all the masses are traveling with the same velocity. This implies, for instance,
that a totally inelastic collision dissipates the highest possible amount of kinetic energy.
