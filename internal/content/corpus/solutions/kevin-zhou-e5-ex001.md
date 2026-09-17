---
id: kevin-zhou-e5-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e5-ex001
solution_type: author
source_document: solution-document-kevin-zhou-e5sol
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E5Sol.pdf."
---

Example 1
A wire is bent into an arbitrary shape in the xy plane, so that its ends are at distances R1
and R2 from the z-axis. The wire is rotated about the z-axis with angular velocity ω, in a
uniform magnetic field B ẑ. Find the emf across the wire.
Solution
The emf is motional emf due to the magnetic force, so
E =
Z
(v × B) · dr.
The main point of this problem is to get you acquainted with some methods for manipulating
vectors. First, we’ll use components. Placing the origin along the axis of rotation, we have
v = ω × r = ωẑ × (xx̂ + yŷ) = ω(xŷ − yx̂)
for a point on the wire at r. Evaluating the cross product with the magnetic field,
v × B = ωB(xŷ − yx̂) × ẑ = ωB(xx̂ + yŷ) = ωBr.
Therefore, we have
E = ωB
Z
r · dr =
ωB
2
Z R2
R1
d(r2
) =
ωB(R2
2 − R2
1)
2
1
Kevin Zhou Physics Olympiad Handouts
which is independent of the wire’s detailed shape.
Now let’s solve the question again without components. Here it’s useful to apply the double
cross product, or “BAC-CAB” rule,
a × (b × c) = b(a · c) − c(a · b).
If you want to show this for yourself, note that both sides are linear in a, b, and c, so it’s
enough to prove it for all combinations of unit vectors they could be; this just follows from
casework. We can now simplify the emf integrand as
(ω × r) × B = −B × (ω × r) = −ω(B · r) + r(B · ω).
The first term is zero since r lies in the xy plane, while the second term is ωBr. The rest of
the solution follows as above.
For problems that are essentially two-dimensional, there’s not much difference in efficiency
between the two methods, so you should use whatever you’re more comfortable with. On the
other hand, for problems with three-dimensional structure, components tend to get clunky.
Example 2: Purcell 7.2
A conducting rod is pulled to the right at speed v while maintaining a contact with two rails.
A magnetic field points into the page.
An induced emf will cause a current to flow in the counterclockwise direction around the loop.
Now, the magnetic force qu × B is perpendicular to the velocity u of the moving charges, so
it can’t do work on them. However, the magnetic force certainly looks like it’s doing work.
What’s going on here? Is the magnetic force doing work or not? If not, then what is? There
is definitely something doing work because the wire will heat up.
Solution
A perfectly analogous question is to imagine a block sliding down a ramp with friction, at a
constant velocity. Heat is produced, so something is certainly doing work. We might suspect
it’s the normal force, because it has a horizontal component along the block’s direction of
horizontal travel. However, it also has a vertical component opposite the block’s direction of
2
Kevin Zhou Physics Olympiad Handouts
vertical travel, so it of course performs no work. All it does is redirect the block’s velocity;
the ultimate source of energy is gravity.
Similarly, in this case, the current does not flow purely down the page, but also has a
rightward component because it is carried along with the rod. Just like the normal force in
the ramp example, the magnetic force is perpendicular to the velocity, and does no work. It
simply redirects the velocity created by whatever is pulling the rod to the right, which is the
ultimate source of energy.
[2] Problem 1 (Purcell). [A] Derive the result of idea 1 using the Lorentz force law as follows.
(a) Let the loop be C and let v be the velocity of each point on the loop. Argue that after a time
dt, the change in flux is
dΦ =
I
C
B · ((vdt) × ds).
(b) Using the identity a · (b × c) = −c · (b × a), show that
dΦ
dt
= −
I
C
(v × B) · ds
and use this to conclude the result.
Solution. (a) Consider a piece ds of the loop, and consider its motion over a time dt. The piece
moves by vdt, so we can construct a surface whose boundary is the new loop by considering
the original surface, and appending these infinitesimal ds by vdt parallelograms to it. The
amount of flux going through an infinitesimal parallelograms is B · (vdt × ds). Integrating
over the entire loop yields the desired result.
(b) Combining the previous parts, we have
dΦ = −
I
C
(vdt × B) · ds.
Dividing by dt yields the desired result.
You might also be wondering how to prove this identity. Note that a·(b×c) is the volume of
the parallelepiped (i.e. a three-dimensional parallelogram) whose edges are a, b, and c. That’s
because the volume is the product of the area of the base and the height. Considering b and
c to form the base gives a base area |b × c|, and taking the dot product with a accounts for
the height. The expression c · (b × a) computes the same volume, up to a sign, with a and b
forming the base. The correct sign can be found by considering a simple case, like the cube,
and appropriately applying the right hand rule.
[3] Problem 2 (PPP 167). A homogeneous magnetic field B is perpendicular to a track inclined at
an angle α to the horizontal. A frictionless conducting rod of mass m and length ℓ straddles the
two rails as shown.
3
Kevin Zhou Physics Olympiad Handouts
How does the rod move, after being released from rest, if the circuit is closed by (a) a resistor of
resistance R, (b) a capacitor of capacitance C, or (c) a coil of inductance L? In all cases, neglect the
self-inductance of the closed loop formed, i.e. neglect the flux that its current puts through itself.
Solution. Suppose the speed of the rod is v down the plane, and the current is I going from the
side closer to the reader, to the side farther. By Newton’s second law, we have
mv̇ = mg sinα − IℓB.
The motional emf is E = ℓvB, where positive E works to increase I. Thus, we have Ė = ℓBv̇, so
m
ℓB
Ė = mg sinα − IℓB.
All that differs between the three parts is the expression for E.
(a) Here we have E = IR, so
m
ℓB
R ˙ I = mg sinα − IℓB.
The solution to this is a decaying exponential that starts at 0 and asymptotes to If = mg sinα
ℓB .
The velocity of the rod is v = IR/ℓB, so the terminal velocity is
vf =
Rmg sinα
ℓ2B2
.
(b) Here we have E = Q/C where Q̇ = I, so Ė = I/C. Thus,
m
ℓBC
I = mg sinα − IℓB,
which implies the current is constant, and equal to
I =
mg sinα
ℓB + m
ℓBC
.
Note that
ℓBv̇ = Ė =
I
C
.
This implies that the motion is uniformly accelerated, with acceleration
a =
mg sinα
m + ℓ2B2C
.
4
Kevin Zhou Physics Olympiad Handouts
(c) Here E = L ˙ I, so
m
ℓB
L¨ I = mg sinα − IℓB.
This is a simple harmonic motion equation with a shifted origin. Explicitly solving, using the
usual techniques of M1, gives the general solution
I(t) =
mg sinα
ℓB
+ I0 cos(ωt + ϕ), ω2
=
ℓ2B2
mL
.
The initial conditions are I(0) = 0 and ˙ I(0) = 0 since v(0) = 0, so the particular solution is
I(t) =
mg sinα
ℓB
(1 − cos(ωt)).
Now, Faraday’s law states that ℓBẋ = L ˙ I, and since x(0) = 0 and I(0) = 0, integrating gives
x(t) =
L
ℓB
I =
mgLsinα
ℓ2B2
(1 − cos(ωt)).
[3] Problem 3.  m 1 0USAPhO 2006, problem B1.
Solution. Note that there are two minor typos in the official solution, as noted here. There should
be no +D term in B(ii), and for B(v) there are multiple times.
[3] Problem 4 (PPP 168). One end of a conducting horizontal track is connected to a capacitor of
capacitance C charged to voltage V0. The inductance of the assembly is negligible. The system is
placed in a uniform vertical magnetic field B, as shown.
A frictionless conducting rod of mass m, length ℓ, and resistance R is placed perpendicularly onto
the track. The capacitor is charged so that the rod is repelled from the capacitor when the switch is
turned. This arrangement is known as a railgun. Neglect self-inductance throughout this problem.
(a) What is the maximum velocity of the rod, and what is the maximum possible efficiency?
(b) At the end of this process, the rail is moving to the right. Therefore, by momentum conserva-
tion, something must have experienced a force towards the left. What is it? Answer this in
both the case where the magnetic field is the same everywhere, and when it only overlaps the
rails, as shown above.
Solution. (a) Let I be the downward current in the rod, and let q be the charge on the capacitor.
We see that q̇ = −I, and Kirchhoff’s loop rule gives
q
C
− IR = E = vℓB.
5
Kevin Zhou Physics Olympiad Handouts
Taking the derivative and plugging in v̇ = IℓB/m gives
˙ I = −

1
RC
+
ℓ2B2
Rm

I.
The initial condition is I(0) = q/RC, so
I(t) =
q
RC
exp

−t

1
RC
+
ℓ2B2
Rm

.
Thus, integrating v̇ = IℓB/m and using v(0) = 0 gives
v(t) =
qℓB
RCm

1
RC
+
ℓ2B2
Rm
−1 
1 − exp

−t

1
RC
+
ℓ2B2
Rm

=
V0ℓBC
m + B2ℓ2C

1 − exp

−t

1
RC
+
ℓ2B2
Rm

.
Thus, the rod continually accelerates, asymptotically reaching a maximum speed of
vmax =
V0ℓBC
m + B2ℓ2C
.
The efficiency is the fraction of the initial energy converted to kinetic energy
η =
mv2
max/2
CV 2
0 /2
=
m
C
ℓ2B2C2
(m + B2ℓ2C)2
=
1
(p + 1/p)2
where p =
√
m √
CBℓ
. Thus, by the AM-GM inequality, the maximum efficiency is 1/4.
(b) Momentum is conserved in both cases. When the magnetic field is uniform, it overlaps the
left end of the circuit. The current in the rod implies a return current in the left end, and
thus an opposite Lorentz force on it. If the circuit is held in place, the compensating leftward
momentum goes to the Earth; if it isn’t held in place, the whole circuit recoils to the left.
Now suppose the magnetic field is as shown in the figure, i.e. it doesn’t overlap the left part of
the circuit. (It does overlap the rails, but that doesn’t produce a leftward Lorentz force and so
is irrelevant.) To see how momentum is conserved, we need to remember that in electrostatics
and magnetostatics, forces are ultimately between charges and currents. We get used to using
the Lorentz force law with a given magnetic field, but that magnetic field has to be produced
by some current. That current, in turn, can feel a force due to the magnetic field produced
by the current in the railgun.
If the magnetic field were the same everywhere, then we could place the currents sourcing
them very far away, and thus ignore this effect. (For example, the railgun could be between
two distant, infinite uniform sheets of current.) But if the magnetic field is nonhomogeneous,
as it is in this case, there must be current nearby. For example, the sudden decrease of the
magnetic field shown in the figure above could be achieved by having an infinite sheet of
current, which is cut perpendicularly by the rails, with surface current density pointing up
the page.
Finally, the current through the rail creates a magnetic field at the current sheet that points
into the page. And that implies a Lorentz force to the left, precisely balancing the rightward
6
Kevin Zhou Physics Olympiad Handouts
Lorentz force on the rail. Momentum is thus conserved; to see explicitly how Newton’s third
law holds up, see problem 5.50 of Griffiths.
Incidentally, you might have heard the electromagnetic field can also carry momentum. Be-
cause of this, in general we shouldn’t think of charges and currents interacting with each other,
since their momentum won’t be conserved; Newton’s third law won’t hold in general. Instead,
charges and currents interact with the field, and the field then interacts with other charges
and currents. However, we didn’t need that subtlety for this problem, because there is no
electromagnetic momentum at play. We’ll see setups where it does matter in E7.
[3] Problem 5.  m 1 0USAPhO 2012, problem B2.
Idea 2
Not all motional emfs can be found using E = −dΦ/dt. Sometimes, for more complex
geometries where there is no clear “loop”, it’s easier to go back to the Lorentz force law.
