---
id: usapho-2013-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2013-b1
solution_type: official
source_document: solution-document-usapho-2013-s
source_pdf: cache/phoxiv/usapho/2013_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2013_S.pdf."
---

Question B1
Shown below is the Blackbird, a vehicle built in 2009.
There is no source of stored energy such as a battery or gasoline engine; all of the power used
to move the car comes from the wind. The only important mechanism in the car is a gearbox that
can transfer power between the wheels and the propeller.
The Blackbird was driven both directly downwind and directly upwind, as shown below. In
each case the car remained exactly parallel (or anti-parallel) to the wind without turning. The
tests were conducted on level ground, in steady, uniform wind, and continued long enough to reach
the steady state.
~ vw
~ v
~ vw
~ v
Source: fasterthanthewind.org Downwind Upwind
When driving downwind, the builders claim that they were able to drive “faster than the wind”:
that is, with |~ v| > |~ vw|, so that the car experienced a relative headwind while traveling. Commenters
on the Internet claimed, often angrily, that this was physically impossible and that the Blackbird
was a hoax. Some commenters also claimed that the upwind case was physically impossible.
a. Consider first the downwind faster than the wind case.
• Is the motion actually possible as claimed? If not, offer a brief explanation!
• If the motion is possible, is power transferred from the propeller to the wheels or vice
versa?
• If the motion is possible, what ground speed is attained? For this question, suppose
that when transferring power in either direction between the propeller and the wheels,
a fraction α of the useful work is lost; let the wind speed be vw. Neglect all other losses
of energy.
b. Answer the previous questions for the upwind case.
Solution
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part B 11
Both modes are possible as claimed. The solution uses the idea of “center of mass (CoM)
power”, which we will review below for interested readers; the solution itself starts on the next
page. For simplicity, we will work in one dimension.
If a particle moves with speed v1 and experiences a force F, then the rate of change of its kinetic
energy is
P1 = Fv1.
Suppose this force is exerted by an interaction with a second particle, which moves with speed v0.
The rate of change of its kinetic energy is
P2 = −Fv2
by Newton’s third law, and the total is
P = P1 + P2 = Fv1 − Fv2 = Fvr
where vr is the relative velocity. If we move into a different reference frame, both P1 and P2 change,
but P stays the same, as all frames agree on the relative velocity.
This is straightforward, but it becomes more subtle when applied to a system more complicated
than a particle. The speed v becomes the speed of the point of application of the force, while the
power P must be generalized to include internal energy. We will write the energy of a system as
E = Ecm +Eint, where the “center of mass energy” Ecm = Mv2
cm/2 is the kinetic energy associated
with the motion of the CoM, and Eint accounts for everything else, such as the rotational energy
of a wheel or propeller.
As an example, consider an accelerating bicycle. The force that pushes the bicycle forward is
the friction force with the ground. However, if the wheels are rolling without slipping, then at
every moment, the relative velocity between the ground and the part of the wheel touching the
ground is exactly zero. Thus the power is zero, so E is constant. This is because the increase
in Ecm is compensated by a decrease in the chemical energy of the cyclist, accounted for in Eint.
Thus energy arguments appear to tell us nothing useful about the motion of the bicycle. Similarly,
energy arguments tell us nothing definite about the Blackbird’s wheels or propellers.
It is more useful here to use “center of mass power”. This concept is not covered in most
textbooks, but interested readers can consult section 13.5 of Halliday, Resnick, and Krane, 5th
edition. The idea behind CoM power is that the CoM of a system satisfies
F = Macm
where F is the total force on the system. This is essentially the same equation as we would have
for a single particle of mass m, so by the same proof of the work-kinetic energy theory for particles,
Pcm = Fvcm, Pcm =
dEcm
dt
.
The CoM power Pcm only contributes to the CoM energy. Crucially, it only depends on the velocity
of the center of mass, not on any other details of the system.
Now consider two systems interacting by a force F, whose centers of mass move at a relative
velocity of vr. By the same argument as above, the net CoM power is
Pcm = Fvr.
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part B 12
By conservation of energy, this change in CoM energy must be compensated by an opposite change
in the internal energy.
Now we turn to the analysis of the downwind case. We take all velocities to be positive. In the
steady state, the velocity of the Blackbird is constant, so the force F on the propeller is balanced
by a force −F on the wheels. For the system of the propellers and air, we have
Pcm = F(v − vw).
By energy conservation, the internal energy of the propellers and air must change at the rate
Pprop = F(vw − v).
Since we have assumed no extraneous energy losses, the internal energy of the air doesn’t increase
at all, so this is just the change in the internal energy of the propeller. By similar reasoning, the
internal energy of the wheels and ground must change at the rate
Pwheel = Fv
and again, since there are no extraneous energy losses, this is the rate of change of the internal
energy of the wheels.
Now we determine the sign of F. If the Blackbird moves downwind faster than the wind, v > vw,
then Pwheel and Pprop have opposite signs, with |Pwheel| > |Pprop|. Thus, the force F should be
positive, in the direction of the wind, so that Pwheel is positive and Pprop is negative. That is,
power is transferred from the wheels to the propeller. In general, power should always be
produced by the force with the larger relative velocity.
In the steady state the total internal energy of the Blackbird is constant, so
|Pprop| = (1 − α)Pwheel ⇒ v = vw/α.
With sufficiently low energy loss, any speed is possible.
The argument here is somewhat counterintuitive. A tempting (but incorrect) counterargument
is that, since the internal energy of the Blackbird ultimately comes from a decrease in the center-
of-mass energy of the air, which is slowed down by the propeller, the internal energy must always
be supplied by the propeller. One way to see this argument doesn’t work is to note that in the
reference frame where the air is still and the ground is moving, the same argument would suggest
that internal energy must always be supplied by the wheels. The point is that changes of center-
of-mass energy are completely different in different reference frames, as mentioned above. They
cannot be used to determine the direction of flow of internal energy, which does not depend on the
reference frame. In all frames, the force of the wind slows the rotation of the propeller, and hence
power must be transferred from the wheels to the propeller.
We now consider the upwind case. We’ll keep all the sign conventions the same, except we’ll
take v be the leftward speed of the Blackbird. Then
Pprop = F(v + vw), Pwheel = −Fv.
Since |Pprop| > |Pwheel|, power is transferred from the propeller to the wheels, and we again
have F > 0, i.e. in both cases the force on the propeller is in the direction of the wind, as expected.
The energy balance equation is
|Pwheel| = (1 − α)Pprop ⇒ v = vw

1
α
− 1

.
Again, with sufficiently low energy loss, any speed is possible.
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part B 13
Question B2
This problem concerns three situations involving the transfer of energy into a region of space by
electromagnetic fields. In the first case, that energy is stored in the kinetic energy of a charged
object; in the second and third cases, the energy is stored in an electric or magnetic field.
In general, whenever an electric and a magnetic field are at an angle to each other, energy
is transferred; for example, this principle is the reason electromagnetic radiation transfers energy.
The power transferred per unit area is given by the Poynting vector:
~ S =
1
µ0
~ E × ~ B
In each part of this problem, the last subpart asks you to verify that the rate of energy transfer
agrees with the formula for the Poynting vector. Therefore, you should not use the formula for the
Poynting vector before the last subpart!
a. A long, insulating cylindrical rod has radius R and carries a uniform volume charge density
ρ. A uniform external electric field E exists in the direction of its axis. The rod moves in the
direction of its axis at speed v.
i. What is the power per unit length P delivered to the rod?
ii. What is the magnetic field B at the surface of the rod? Draw the direction on a diagram.
iii. Compute the Poynting vector, draw its direction on a diagram, and verify that it agrees
with the rate of energy transfer.
b. A parallel plate capacitor consists of two discs of radius R separated by a distance d
 R.
The capacitor carries charge Q, and is being charged by a small, constant current I.
i. What is the power P delivered to the capacitor?
ii. What is the magnetic field B just inside the edge of the capacitor? Draw the direction
on a diagram. (Ignore fringing effects in the electric field for this calculation.)
iii. Compute the Poynting vector, draw its direction on a diagram, and verify that it agrees
with the rate of energy transfer.
c. A long solenoid of radius R has N turns of wire per unit length. The solenoid carries current
I, and this current is increased at a small, constant rate dI
dt .
i. What is the power per unit length P delivered to the solenoid?
ii. What is the electric field E just inside the surface of the solenoid? Draw its direction
on a diagram.
iii. Compute the Poynting vector, draw its direction on a diagram, and verify that it agrees
with the rate of energy transfer.
Solution
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part B 14
a. i. A length l of the rod has charge q = πR2lρ; the force on it is F = qE and the power
delivered is P = Fv. Combining these,
P = πR2
lρEv, P = πR2
ρEv.
ii. The length l of the rod moves past a point in a time t = l
v, so the current carried by the
rod is
I =
q
t
= πR2
ρv.
Applying Ampere’s law to a loop of radius R,
I
B · dl = µ0Ienc
2πRB = µ0πR2
ρv ⇒ B =
1
2
µ0Rρv
The field is circumferential as given by the right-hand rule.
iii. The electric and magnetic fields are perpendicular, so the Poynting vector has magnitude
S =
1
µ0
EB =
1
2
RρvE.
A quick application of the right hand rule indicates that it points inward along the
surface of the cylinder, as it ought. The cylinder has area per unit length 2πr, so the
rate of energy transfer per unit length is
P = 2πrS = πR2
ρvE
in agreement with the previous result.
b. i. The capacitance is given by the standard parallel-plate capacitor formula,
C =
 0πR2
d
.
The voltage on the capacitor is thus
V =
Q
C
=
Qd
 0πR2
and the power is
P = IV =
IQd
 0πR2
.
Students may choose instead to apply the formula for the volume energy density,
U =
1
2
 0E2
.
ii. Consider an Amperian loop encircling the edge of the capacitor, and use a flat Gaussian
surface through the center of the capacitor. The electric field here is perpendicular to
the surface and has magnitude
E =
V
d
=
Q
 0πR2
.
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part B 15
The electric flux through the surface is thus
φE = πR2
E =
Q
 0
.
This can also be determined directly using Gauss’s law and appropriate symmetries.
There is no current through the surface, so from Ampere’s law
I
B · dl = µ0 0
dφE
dt
2πRB = µ0
dQ
dt
⇒ B =
µ0I
2πR
The field is circumferential as given by the right-hand rule.
Note that we could instead use a curved Gaussian surface that avoids the center of the
capacitor and intersects one of the charging wires! In this case we have directly
I
B · dl = µ0I
and the calculation proceeds as before.
iii. The electric and magnetic fields are perpendicular, so again
S =
1
µ0
EB =
IQ
2 0π2R3
.
A quick application of the right hand rule indicates that it points inward along the edge
of the capacitor, as it ought. The area of this region is 2πRd, so the power delivered is
P = 2πRdS =
IQd
 0πR2
in agreement with the previous result.
c. i. Suppose that the solenoid has length l. The inductance is
L = µ0N2
πR2
l.
Students may quote this formula directly, or derive it as follows. Consider an Amperian
loop of length d intersecting the solenoid. This loop encloses Nd turns of wire, so from
Ampere’s law (remembering that the magnetic field exists entirely within the solenoid)
I
B · dl = µ0Ienc
Bd = µ0NdI ⇒ B = µ0NI
There are Nl loops, so the total flux is
Φ = NlBπR2
= µ0N2
IπR2
l
and since Φ = LI,
L = µ0N2
πR2
l
Copyright c 2013 American Association of Physics Teachers
2013 Semifinal Exam Part B 16
as quoted above.
The voltage across the inductor is thus
V = L
dI
dt
= µ0N2
πR2
l
dI
dt
and the power delivered is
P = IV = µ0N2
πR2
lI
dI
dt
or, dividing by l,
P = µ0N2
πR2
I
dI
dt
.
Students may choose instead to apply the formula for the volume energy density,
U =
1
2µ0
