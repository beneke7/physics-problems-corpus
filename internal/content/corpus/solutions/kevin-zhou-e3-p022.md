---
id: kevin-zhou-e3-p022
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e3-p022
solution_type: author
source_document: solution-document-kevin-zhou-e3sol
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E3Sol.pdf."
---

[2] Problem 22. A toroidal solenoid is created by wrapping N turns of wire around a torus with a
rectangular cross section. The height of the torus is h, and the inner and outer radii are a and b.
(a) In the ideal case, the magnetic field vanishes everywhere outside the toroid, and is purely
tangential inside the toroid. Find the magnetic field inside the toroid.
(b) There is another small contribution to the magnetic field due to the winding effect mentioned
above. Roughly what does the resulting extra magnetic field look like? If you didn’t want
this additional field, how would you design the solenoid to get rid of it?
Solution. (a) Applying Ampere’s law on a circular loop gives B(r)(2πr) = µ0NI, so
B(r) =
µ0NI
2πr
.
22
Kevin Zhou Physics Olympiad Handouts
(b) Note that the twisting of the wire adds an effective small current in the tangential direction.
This looks like a current loop, so, e.g. it produces a magnetic field pointing vertically through
the toroid’s hole. We can remove it by using a bunch of current loops instead of a single
winding wire, or by using counterwinding: after winding the wire around the toroid once
clockwise, wind it around again counterclockwise.
[3] Problem 23 (Purcell 6.63). A number of simple facts about the fields of solenoids can be found
by using superposition. The idea is that two solenoids of the same diameter, and length L, if joined
end to end, make a solenoid of length 2L. Two semi-infinite solenoids butted together make an
infinite solenoid, and so on.
Prove the following facts.
(a) In the finite-length solenoid shown at left above, the magnetic field on the axis at the point
P2 at one end is approximately half the field at the point P1 in the center. (Is it slightly more
than half, or slightly less than half?)
(b) In the semi-infinite solenoid shown at right above, the field line FGH, which passes through
the very end of the winding, is a straight line from G out to infinity.
(c) The flux through the end face of the semi-infinite solenoid is half the flux through the coil at
a large distance back in the interior.
(d) Any field line that is a distance r0 from the axis far back in the interior of the coil exits from
the end of the coil at a radius r1 =
√
2r0, assuming
√
2r0 is less than the solenoid radius.
Solution. (a) Let B1 and B2 be the fields at these points, respectively. Note that B1 is close to
the ideal value µ0nI, but smaller because the solenoid is not infinite. Now glue two of these
solenoids together end-to-end, and consider the field at the center of this new, bigger solenoid.
23
Kevin Zhou Physics Olympiad Handouts
By superposition, it is 2B2, but also, it is close to µ0nI, and it is slightly closer to µ0nI than
B1 is, since the combined solenoid is longer. Therefore, B2 is slightly more than half of B1.
(b) Let G′ be the reflection of G in the axis. Say the field line GH comes out at an angle θ. Then,
at G′, it also comes out with an angle θ. Now, making a copy and rotating 180◦ and flipping
the current direction, the field at G becomes one pointing at θ above the horizontal (coming
from G at the original), and one at angle π−θ to the horizontal (coming from G′ in the copy).
Therefore, the field there would be non-zero right outside the solenoid, unless θ = 0, in which
case the fields cancel.
(c) Do the same procedure as in (a), and the flux at the glue points gets doubled to what it was
originally. However, now we have an infinite solenoid, so double the flux through the end is
equal to the flux in the middle.
(d) Note that (c) holds even if we take a constant disk of radius a as our surface to take the flux
over. Note that the flux through the disk at the edge with radius r is the same as at the
middle with radius r0 (same field lines). However, if we draw a disk of radius r at the middle,
it will have twice the flux as it did at the top, or twice the flux as with r0. However, here in
the middle, the magnetic field is essentially constant, so the areas must be twice each other,
so πr2 = 2πr2
0, or r =
√
2r0.
[3] Problem 24 (MPPP 160). Two infinite parallel wires, a distance d apart, carry electric currents
along the z-axis with equal magnitudes but opposite directions. We can find the shape of the
magnetic field lines with a neat trick, which only works for “two-dimensional” setups like this one,
where the fields lie in the xy plane and don’t depend on z.
(a) Argue that if we rotated B by 90◦ in the xy plane at each point, it would produce a valid
electrostatic field E. (Hint: consider rotating the B field of each wire individually.)
(b) Argue that the field lines of B are the same as the equipotentials of this artificial E, and use
this to find the field lines.
This trick is also useful for fluids in two dimensions, where it swaps vortices with sources and sinks.
Solution. (a) First, we can get the intuition using a single wire. In this case,
B =
µ0I
2πr
θ̂
in cylindrical coordinates. Upon a 90◦ rotation, θ̂ turns into r̂, giving
E =
µ0I
2πr
r̂
which is a valid electrostatic field, as it’s simply the electric field of an charged wire. So by
superposition, rotating the B field of the two wires would also give a valid electrostatic field.
(Of course, this isn’t really physically meaningful, since electric and magnetic fields don’t even
have the same units. It’s just a mathematical trick.)
We can also prove the correspondence more generally. The key criterion for a valid magne-
tostatic field is ∇ · B = 0, which for such two-dimensional setups is ∂xBx + ∂yBy = 0. Now,
when we rotate by 90◦, we define an electric field by Ex = By and Ey = −Bx, which implies
∂xEy −∂yEx = 0. But in such a two-dimensional setup, this is equivalent to ∇×E = 0, which
is the condition to have a valid electrostatic field.
24
Kevin Zhou Physics Olympiad Handouts
(b) The field lines of B are always parallel to B. Now, this artificial E is always perpendicular to
B, and equipotentials are always perpendicular to E, so the equipotentials follow the magnetic
field lines.
On the other hand, we know precisely what the potential is in this problem. By integrating
the 1/r field, the potential is proportional to logr, so
V (r) ∝ log(r+) − log(r−) = log(r+/r−)
where r+ and r− are the distances to the two wires. So the equipotentials have constant
r+/r−. We’ve already found, when investigating the method of images for spheres in E2, that
this implies the equipotentials are circles, specifically circles of Apollonius. So the magnetic
field lines are circles!
[2] Problem 25 (IPhO 1996). Two straight, long conductors C+ and C−, insulated from each other,
carry current I in the positive and the negative ẑ direction respectively. The cross sections of the
conductors are circles of diameter D in the xy plane, with a distance D/2 between the centers.
The current in each conductor is uniformly distributed. Find the magnetic field in the space between
the conductors.
Solution. The answer is a uniform field By = 6µ0I/((2π + 3
√
3)D). See the official solutions of
IPhO 1996, problem 1(e).
[3] Problem 26 (MPPP 157). A regular tetrahedron is made of a wire with constant resistance per
unit length. A long, straight wire sends current I into one vertex, and another long, straight wire
removes it from another vertex, as shown.
Find the magnetic field at the center of the tetrahedron.
Solution. The long straight wires contribute nothing. By symmetry C and D are at the same
potential, so IDC = 0. Then the current from A to B just splits up into three branches, which have
resistances RACB = RADB = 2RAB. Therefore, the currents are
IAB =
1
2
I, IAC = IAD = ICB = IDB =
1
4
I.
25
Kevin Zhou Physics Olympiad Handouts
The field at O due to the current along AD is directed along the vector
− − →
CB. Similarly, the magnetic
field due to the current along AC is directed along
− − →
BD, and so on. By repeating this reasoning for
all five contributions, we find that the magnetic field at O is proportional to
2
− − →
DC +
− − →
BD +
− − →
CB +
− − →
AD +
− →
CA = 2
− − →
DC +
− − →
CD +
− − →
CD = 0
so there is no field at O.
[5] Problem 27.   h 1 0APhO 2013, problem 1. A neat question on a cylindrical RC circuit that uses
many of the techniques we’ve covered so far.
26
