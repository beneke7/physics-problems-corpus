---
id: kevin-zhou-e5-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e5-ex004
solution_type: author
source_document: solution-document-kevin-zhou-e5sol
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E5Sol.pdf."
---

Example 4
A square, rigid loop of wire has resistance R, sides of length s, and negligible mass. Point
masses of mass M are attached at each corner. The top edge of the square loop is mounted
so it is horizontal, and the loop may rotate as a frictionless pendulum about a fixed axis
passing through this edge. Initially the pendulum is at rest at θ = 0, and a uniform magnetic
field B points horizontally through the loop. The magnetic field is then quickly rotated to
the vertical direction, as shown.
Describe the subsequent evolution.
Solution
The rotation of the magnetic field provides a sharp impulse that causes the pendulum to
start swinging. Letting ϕ be the angle of the field to the horizontal,
E = −
d(Bxs2)
dt
= −Bs2 d(cosϕ)
dt
and the torque about the axis of rotation is
τ = (IsBy)s = −
s4B2
R
sinϕ
d(cosϕ)
dt
.
The total impulse delivered is
L =
Z
τ dt =
s4B2
R
Z π/2
0
sin2
ϕdϕ =
π
4
s4B2
R
which causes an initial angular velocity ω = L/(2Ms2).
12
Kevin Zhou Physics Olympiad Handouts
After the pendulum begins swinging, the presence of the magnetic field causes an effective
drag force. To see this, note that now we have
E = −Bs2 d(sinθ)
dt
which implies
τ = Is2
B cosθ = −
s4B2
R
cos2
θ
dθ
dt
.
Therefore, the τ = Iα equation is
2Ms2 d2θ
dt2
= −2Mgs sinθ −
B2s4
R
cos2
θ
dθ
dt
.
If we take the small angle approximation, then we recover ordinary damped harmonic oscil-
lations, as covered in M4.
[3] Problem 11.  W 1 0USAPhO 2009, problem A1.
[3] Problem 12.  m 1 0USAPhO 1999, problem B2.
[3] Problem 13 (Purcell). A dynamo is a generator that works as follows: a conductor is driven
through a magnetic field, inducing an electromotive force in a circuit of which that conductor is
part. The source of the magnetic field is the current that is caused to flow in that circuit by that
electromotive force. An electrical engineer would call it a self-excited dynamo. One of the simplest
dynamos conceivable is shown below.
It has only two essential parts. One part is a solid metal disk and axle which can be driven in
rotation. The other is a two-turn “coil” which is stationary but is connected by sliding contacts, or
“brushes”, to the axle and to the rim of the revolving disk.
(a) Exactly one of the two devices pictured is, at least potentially, a dynamo. Which one?
A dynamo like the one above has a certain critical speed ω0. If the disk revolves with an angular
velocity less than ω0, nothing happens. Only when that speed is attained is the induced E enough
to make the current enough to make the magnetic field enough to induce an E of that magnitude.
The critical speed can depend only on the size and shape of the conductors, the conductivity σ, and
the constant µ0. Let d be some characteristic dimension expressing the size of the dynamo, such as
the radius of the disk in our example.
13
Kevin Zhou Physics Olympiad Handouts
(b) Show by a dimensional argument that ω0 must be given by a relation of the form ω0 = K/µ0σd2
where K is some dimensionless numerical factor that depends only on the arrangement and
relative size of the parts of the dynamo.
(c) Demonstrate this result again by using physical reasoning that relates the various quantities
in the problem (R, E, E, I, B, etc.). You can ignore all numerical factors in your calculations
and absorb them into the constant K.
For a dynamo of modest size made wholly of copper, the critical speed would be practically unattain-
able. It is ferromagnetism that makes possible the ordinary DC generator by providing a magnetic
field much stronger than the current in the coils, unaided, could produce. For an Earth-sized
dynamo, however, the critical speed is much smaller. The Earth’s magnetic field is produced by a
nonferromagnetic dynamo involving motions in the fluid metallic core.
Solution. (a) We claim that the second device is a dynamo. Say a current is flowing that starts
at the top contact point, flows down through the rod, then flows through the disk into the
other contact point, then flows back. One can check that due to the wires, the magnetic field
in the disk is pointing down. Now, as the charge passes into the disk, it has some tangential
velocity due to the rotation, and in the first case, the qv × B force is pointing opposed to
the flow of current, and in the second case, it is pointing in the same direction as the current.
Therefore, a current is sustainable only in the second one.
As you can see, it’s not too hard to work out the answer from scratch using the right-hand
rule. But in the Indian physics exam system, people are expected to answer problems like
these in seconds, by memorizing additional rules that only work in special cases (such as
“Fleming’s right-hand rule” for generators, and “Fleming’s left-hand rule” for motors). I
wouldn’t recommend doing that; understanding the general principle that produces an answer
is much more important than remembering the answer itself.
(b) This is very routine; all you need to do is find the dimensions of σ,d,µ0 and verify that the
given combination is the only one that works.
(c) The key point is that there is resistance, which could hinder charge movement. The resistance
goes like R ∼ 1/σd, so we have V = IR, or Ed ∼ I/σd, so E ∼ I/σd2. We have B ∼ µ0I/d,
and E = vB ∼ (ω0d)µ0I/d. Therefore,
I/σd2
∼ ω0µ0I,
or ω0 ∼ 1/µ0σd2, as desired.
The coupling of motors and generators is a fascinating subject. A crude model of the power grid can
be obtained by combining problems 6 and 13 (and also making all the currents AC). For example,
when you start a washing machine in your house, AC power is used to start rotating the drum,
which produces a back emf that ultimately slows down the rotation of a generator in a power plant.
That generator’s power is carefully adjusted to produce a reliable 60.0 Hz output frequency.
In reality, the power grid is comprised of many independent generators distributed across thou-
sands of miles. Since they are all connected, they all rotate at roughly the same frequency; any
slightly slower ones will be sped up by the rest. This massive entity is sometimes called “the world’s
largest machine”.
[3] Problem 14.  ^ 1 0USAPhO 2023, problem B1. A nice problem on a particular kind of motor,
which reviews almost everything covered above in this problem set.
14
Kevin Zhou Physics Olympiad Handouts
[3] Problem 15 (MPPP 178). In general, a magnet moving near a conductor is slowed down by
induction effects. Suppose that inside a long vertical, thin-walled, brass tube a strong permanent
magnet falls very slowly due to these effects, taking a time t to go from the top to the bottom.
(a) Let the magnet have mass m, and let the tube have resistivity ρ, thickness r, and length
L. Suppose both the magnet and tube have radius approximately R0, and let the magnet’s
length also be of order R0. Let the typical magnetic fields produced at the magnet’s surface
have magnitude B0. Find an estimate for t, up to dimensionless constants.
(b) If the experiment is repeated with a copper tube of the same length but a larger diameter, the
magnet takes a time t′ to fall through. How long does it take for the magnet to fall through
the tubes if they are fitted inside each other? Neglect the mutual inductance of the tubes.
Solution. (a) The magnetic flux through a horizontal slice of the tube near the magnet changes
by order B0R2 when the magnet moves through a distance of about R0, so
E ∼
B0R2
0
R0/v
∼ B0vR0.
This flux change mostly happens in a vertical section of tube of length about R0. The resistance
of this section of tube is
R ∼ ρ
R0
rR0
∼
ρ
r
.
Therefore, the power dissipated is
P ∼
E2
R
∼
B2
0v2R2
0r
ρ
.
In the steady state, this balances the rate of dissipation of gravitational potential energy,
P ∼ mgv. Combining these gives
v ∼
mgρ
R2
0B2
0r
.
This gives the estimate
t ∼
L
v
∼
LR2
0B2
0r
mgρ
.
This is a pretty rough estimate; for a quantitative treatment, see this paper.
(b) Assuming the tubes contain independent eddy currents, we can think of them as just two
resistors in parallel. In parallel, the inverse resistivity 1/ρ adds. But t ∝ 1/ρ, which means t
adds. Thus, the new time is simply t+t′. (This is a bit slick, but if you’re concerned about its
correctness you can also just run through the derivation in part (a) twice to get the result.)
Remark
In this problem set, we presented motional emf first, and emf from a changing magnetic
flux second. But historically, it went the other way around, as described here. Maxwell was
aware of Faraday’s experiments, which stated that E = −dΦ/dt for stationary loops. He then
demanded that this remain true for moving loops, and deduced that there must be a force
per charge of v × B. That is, Maxwell used Faraday’s law to derive the Lorentz force! This
is a reminder that the process of discovery is messy. When new physics is being found, the
15
Kevin Zhou Physics Olympiad Handouts
very same fact could be a law, a derived result, or simply true by definition, depending on
where you start from. And it’s not clear which it’ll end up being until the dust settles.
3 Inductance
Idea 4: General Inductance
Consider a set of loops with fluxes Φi and currents Ii. By linearity, they are related by
Φi =
X
j
LijIj
where the Lij are called the coefficients of inductance. It can be shown that Lij = Lji, and
we call this quantity the mutual inductance of loops i and j. The corresponding emfs are
Ei =
X
j
Lij
˙ Ij.
In contrast with capacitance, we’re usually concerned with the self-inductance Li = Lii of
single loops; these inductors provide an emf of L ˙ I each. However, mutual inductance can
also be important, as we’ll see in E6.
Remark
The inductance coefficients are similar to the capacitance coefficients in E2, but more useful.
For capacitors, we are typically interested in configurations with one positive and one negative
plate, and the capacitance of this object is related to all of the capacitance coefficients
in a complicated way, as we saw in E2. But most inductors just use self-inductance, so
the inductance we care about is simply one of the coefficients, Lii. Moreover, the “mutual
inductance” coefficients Lij are also in the right form to be directly used, since they tell us
how current changes in one part of the circuit impact emfs elsewhere.
A more general way to describe the difference is that E and ˙ I are directly measurable and
controllable quantities, while the Q and V (i.e. the voltage relative to infinity) that the
capacitance coefficients relate are less so.
Idea 5
The energy stored in a magnetic field is
U =
1
2µ0
Z
B2
dV
which implies the energy stored in an inductor is
U =
1
2
LI2
where L is the self-inductance.
16
Kevin Zhou Physics Olympiad Handouts
Example 5
Compute the self-inductance of a cylindrical solenoid of radius R, length H ≫ R, and n turns
per length.
Solution
One straightforward way to do this is to use the magnetic field energy. We have
U =
1
2µ0
(µ0nI)2
(πR2
H)
and setting this equal to LI2/2 gives
L = πµ0n2
R2
H = µ0N2 πR2
H
where N is the total number of turns.
We can also try to use the definition of inductance directly, Φ = LI. But it’s hard to imagine
a surface bounded by the solenoid wires; as we saw in problem 10, even the case N = 2 is
tricky! Instead it’s better to use the form E = L ˙ I. We can then compute the emf across each
turn of the solenoid individually, then add them together.
To compute the emf across one turn, we can replace it with a circular loop; this is valid
because the emf ultimately comes from the local electric field, which shouldn’t change too
much if we deform the loop in this way. Then
|Eloop| =
dΦ
dt
= (µ0n ˙ I)(πR2
).
The inductance is hence
L =
NEloop
˙ I
= (µ0nN)(πR2
) = µ0N2 πR2
H
as expected.
Example 6
Find the outward pressure at the walls of the solenoid in the previous example.
Solution
An outward pressure exists because of the Lorentz force of the axial magnetic field of the
solenoid acting on the circumferential currents at the walls. The force per length acting on a
wire is IB, and the pressure is this quantity times the turns per length, so naively
P = (µ0nI)(nI).
However, this is off by a factor of 2. To see why, consider a small Amperian rectangle
17
Kevin Zhou Physics Olympiad Handouts
that straddles the surface of the solenoid. The currents near this rectangle contribute axial
magnetic fields of µ0nI/2 inside and −µ0nI/2 outside. Thus, the currents due to the entire
rest of the solenoid contribute µ0nI/2 both inside and outside. Since a wire can’t exert a
force on itself, only the latter field matters, so the true answer is
P =
1
2
µ0n2
I2
=
B2
2µ0
.
Remark: Electromagnetic Stress
The above example is like the one in E1, where we showed that the inward pressure
on a conductor’s surface due to electrostatic forces is ϵ0E2/2. In fact, there’s a general
principle behind both: electric and magnetic fields carry a tension per unit area (i.e. a
negative pressure) of magnitude ϵ0E2/2 or B2/2µ0 along their directions, and a repulsion
per unit area (i.e. a positive pressure) ϵ0E2/2 or B2/2µ0 perpendicular to their directions.
Charges and currents, such as at the walls of a solenoid or the plates of a capacitor, cause
discontinuities in E or B across them, leading to a net force on them.
This isn’t mentioned in introductory electromagnetism books because the proper treatment
of anisotropic pressure requires tensors. However, more advanced books will introduce the
Maxwell stress tensor, from which the results above can be read off.
The great experimentalist Michael Faraday was a huge fan of these results. He viewed
field lines as physical objects, which he called “lines of force”, that carried tension along
their lengths and repelled each other. But you can’t take this picture too literally, as
the number of field lines is proportional to E or B, while the stress is proportional to E2 or B2.
These days, we don’t ascribe so much importance to field lines. The fundamental object is
the field itself, and field lines are a secondary construction that often just adds mathematical
complication. For example, the field of a dipole is simple, but it’s not so simple to solve
for the corresponding field lines. And in R3, we’ll show how fields transform between
frames, which implies that the very existence of a field line can depend on the reference frame.
Things get even more complicated in dynamic situations. Faraday viewed induction as a
result of “cutting” magnetic field lines, and even suggested that light waves propagated along
them like waves on a string. Those ideas don’t really line up with the actual math, but
Faraday’s field line is still useful in some contexts. For instance, in plasma physics, field lines
can be used to visualize magnetic reconnection.
Remark
Recall the example in E1 involving the force between two spherical balls of charge. There,
we got the answer using a slightly tricky argument, where Newton’s third law allowed us to
use the shell theorem twice. But the idea of electromagnetic stress provides a straightforward
alternative proof which also works for more general situations.
18
Kevin Zhou Physics Olympiad Handouts
Suppose the two balls lie above and below the xy plane, and additional external forces
hold them both at rest. Consider as a system everything at z > 0, which includes
the second ball and a lot of empty space. The only external forces on this system are
from the attractive ϵE2/2 pressure at the xy plane, and the force F which holds the
second ball in place. Since the momentum of the system is constant, these forces must
cancel. Thus, to compute F we only need to know the electric field on the xy plane, for
which we can clearly apply the shell theorem to both balls, replacing them with point charges.
The general idea is that electromagnetic forces on objects can be determined solely by the
electromagnetic fields in the space around them. You can use this to find shorter solutions
to some problems in E1.
