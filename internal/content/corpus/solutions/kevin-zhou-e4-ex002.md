---
id: kevin-zhou-e4-ex002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e4-ex002
solution_type: author
source_document: solution-document-kevin-zhou-e4sol
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E4Sol.pdf."
---

Example 2
A parallel plate capacitor with separation d and area A is attached to a battery of voltage V .
One plate moves towards the other with uniform speed v. Verify that energy is conserved.
Solution
The capacitance is C = Aϵ0/d. The power supplied by the battery is
Pbatt = IV = V
dQ
dt
= V 2 dC
dt
.
On the other hand, the rate of change of the energy stored in the capacitor is
Pcap =
d
dt

1
2
CV 2

=
1
2
V 2 dC
dt
.
At first glance, there seems to be a problem. But then we remember that there is an attractive
force between the plates, so the plates do work on whatever is moving them together,
Pmech = Fv =
QE
2
v =
QV
2d
v =
1
2
CV 2 v
d
=
1
2
V 2 dC
dt
.
where E is the electric field inside the capacitor. Thus, Pbatt = Pcap + Pmech as required.
Technically there’s energy in the magnetic field too, but it’s smaller than the electric field
energy by v2/c2, and thus negligible unless you’re moving the plates so fast that relativity
comes into play. Most problems in this problem set ignore such relativistic effects.
[2] Problem 1 (PPP 193). Two positrons are at opposite corners of a square of side a. The other two
corners of the square are occupied by protons. All particles have charge q, and the proton mass M
is much larger than the positron mass m. Find the approximate speeds of the particles much later.
Solution. The idea is that since the positrons are so light, they will be extremely far away before
the protons hardly move. Let v1 be their final speed. Then, energy conservation tells us that
kq2
a

4 +
2
√
2

≈
kq2
√
2a
+ 2

1
2
mv2
1

.
2
Kevin Zhou Physics Olympiad Handouts
Solving for v1 yields
v1 =
r
kq2
am
(4 + 1/
√
2).
The speed of the protons can be calculated by assuming that the positrons didn’t even exist, since
by the time the protons move appreciably, the positrons are long gone away to a very far distance.
Therefore, energy conservation again tells us that the final speed v2 of the protons obeys
kq2
√
2a
≈ 2

1
2
Mv2
2

, v2 =
s
kq2
√
2aM
.
[3] Problem 2 (PPP 114). A small positively charged ball of mass m is suspended by an insulating
thread of negligible mass. Another positively charged small ball is moved very slowly from a large
distance until it is in the original position of the first ball. As a result, the first ball rises by h.
How much work has been done?
Solution. Let r be the final separation of the balls, and let L be the length of the string. By the
inscribed angle theorem,
h
r
= sinθ
where θ is half the angle of the string to the vertical. Now let the balls have charges q and Q. To
avoid introducing a variable for the tension, we apply force balance perpendicular to the string, so
kqQ
r2
cosθ = mg sin2θ = 2mg sinθcosθ
from which we conclude
kqQ
r
= 2mgrsinθ = 2mgh.
Furthermore, one of the balls has been raised by a height h during the process. Thus, the total
work done is 3mgh . It’s neat how all the other lengths drop out in the final answer!
[3] Problem 3 (PPP 71). Two small beads slide without friction, one on each of two long horizontal
parallel fixed rods a distance d apart.
The masses of the beads are m and M and they carry charges q and Q. Initially, the larger mass
M is at rest and the other one is far away approaching it at a speed v0. For what values of v0 does
the smaller bead ever get to the right of the larger bead?
3
Kevin Zhou Physics Olympiad Handouts
Solution. When v0 is just large enough for the small bead to get to the right of the big bead, when
both beads end up side-to-side, the small bead’s velocity should be just a bit greater than that of
the big bead for it to get past. This means the minimum possible value vm of v0 should be just
large enough to provide enough energy so that both beads can move together at some velocity v,
1
2
mv2
m =
kqQ
d
+
1
2
(m + M)v2
.
Since the total horizontal momentum is conserved,
mvm = (m + M)v.
Thus, we have
1
2

m −
m2
m + M

v2
m =
kqQ
d
, vm =
r
2kqQ
d
m + M
mM
.
[2] Problem 4 (PPP 192). Classically, a conductor is made of nuclei of positive charge fixed in place,
and electrons that are free to move.
(a) Consider a solid conductor in a gravitational field g. Argue that the electric field inside the
conductor is not zero; find out what it is.
(b) Now suppose a positron is placed at the center of a hollow spherical conductor in a gravitational
field g. Find its initial acceleration.
Solution. (a) We usually argue that the electric field has to vanish to keep the electrons from
accelerating. In this case, the electric field has to be nonzero, because otherwise the electrons
will fall down. Specifically, there is a downward electric field of magnitude mg/e, where e > 0
is the magnitude of the electron charge and m is the electron mass. This comes out to about
6 × 10−11 V/m, which is quite small.
You might wonder how the forces on the positive ions are balanced, since they experience both
downward gravitational and electrical forces. The answer is that they’re locked into a lattice,
and held up by internal stresses within the lattice. These ultimately come from whatever is
keeping the conductor as a whole from falling, such as a normal force from the ground.
(b) The electric field found in part (a) also exists in a cavity, as one can argue from the uniqueness
theorem. So the positron has an initial downward acceleration of 2g. (We had to specify
the positron was at the center, or else it would have an additional acceleration due to charge
induction, which we could compute using image charges.)
[3] Problem 5.   m 1 0USAPhO 2008, problem B2. You may ignore part (c), which was removed in the
final version of the exam, though you can also do it for extra practice.
[3] Problem 6.   ^ 1 0USAPhO 2019, problem B1.
[5] Problem 7.   h 1 0IPhO 2004, problem 1. A nice question on the dynamics of a multi-part system.
2 The Lorentz Force
4
Kevin Zhou Physics Olympiad Handouts
Idea 2
Some questions below will involve special relativity. The Lorentz force law as written in
idea 1 is still valid as long as F is interpreted as dp/dt, where the relativistic momentum is
p = γmv, γ =
1
p
1 − v2/c2
.
The relativistic energy is also modified to
E = γmc2
= mc2
+
1
2
mv2
+ ....
We will return to this subject in more detail in R2, but for now this is all you need.
Example 3: Kalda 163
A beam of electrons, of mass m and charge q, is emitted with a speed v almost parallel to
a uniform magnetic field B. The initial velocities of the electrons have an angular spread
of α ≪ 1, but after a distance L the electrons converge again. Neglecting the interaction
between the electrons, what is L?
Solution
Consider an electron initially traveling at an angle α to the magnetic field. This electron
has a speed v∥ = v cosα ≈ v parallel to the field, which is unchanged by the magnetic force.
Instead, the magnetic force causes the perpendicular component v⊥ to rotate about the B
axis, so that the electron spirals along the field lines.
The acceleration of the electron has magnitude
a⊥ =
F
m
=
qv⊥B
m
and v⊥ goes through a circle in velocity space of circumference 2πv⊥. After one such circle,
the total perpendicular displacement is zero, so the beam refocuses. Thus we have
L =
2πv⊥
a
v∥ ≈
2πmv
qB
.
Since the quantity α dropped out, this setup acts like a magnetic “lens”.
Example 4: Griffiths 7.50
In a “betatron”, electrons move in circles in a magnetic field. When the magnetic field is
slowly increased, the accompanying electric field will impart tangential acceleration.
5
Kevin Zhou Physics Olympiad Handouts
Suppose the field always has the same spatial profile B(r,t) = B0(r)f(t). For what B0(r) is
it possible for an electron to start at rest in zero magnetic field, and then move in a circle of
constant radius as the field is increased?
Solution
The electrons experience a tangential force
ṗ = qE = q
Φ̇B
2πr
=
qr
2
Ḃav
where Bav is the average field over the orbit. Since the particles start from rest in zero field,
we can integrate this to find
p =
qr
2
Bav.
On the other hand, the standard result for cyclotron motion is p = qrB, which means we
must have B = Bav/2, i.e. the field at any radius is half the average magnetic field inside,
B(r) =
1
2
1
πr2
Z r
0
B(r′
)(2πr′
)dr′
.
This rearranges slightly to give
r2
B(r) =
Z r
0
r′
B(r′
)dr′
.
Differentiating both sides with respect to r, we have
2rB(r) + r2
B′
(r) = rB(r)
which simplifies to
dB
B
= −
dr
r
which means the field profile should be B0(r) ∝ 1/r. (Of course, a real betatron might differ
since it only needs to obey B = Bav/2 at the radii where electrons will be orbiting.)
[3] Problem 8 (Griffiths 5.17). In the lab frame, a large parallel plate capacitor with uniform surface
charge σ on the upper plate and −σ on the lower is moving with a constant speed v as shown.
6
Kevin Zhou Physics Olympiad Handouts
(a) Find the magnetic field between the plates and also above and below them.
(b) Find the magnetic force per unit area on the upper plate, including its direction.
(c) Assuming σ is fixed, what happens to the force per unit area between the plates in the limit
v → c? You don’t need to know anything about relativity to do this.
Solution. (a) Let x̂ be the direction of the velocity. Let ŷ point into the page, and let ẑ point
up. The magnetic field due to the top plane is −1
2µ0σvŷ above the top plane and 1
2µ0σvŷ
below the top plane. Similarly for the bottom plane, we have 1
2µ0σvŷ above and −1
2µ0σvŷ
below. Thus, the magnetic field is µ0σvŷ between the plates, and zero outside.
(b) The force per unit area (i.e. pressure) is σvx̂× 1
2µ0σvŷ = 1
2µ0σ2v2ẑ. The factor of 1/2 is there
since it only feels a force due to the contribution of the other plate; this is the essentially the
same 1/2 as we found for the pressure on a conductor in E1.
(c) The net attractive pressure is
σ2
2ϵ0
−
µ0σ2v2
2
=
σ2
2ϵ0
(1 − v2
/c2
)
which goes to zero as v → c.
You don’t need to know relativity to get this result, but we can also derive it using relativity,
as covered in R1 and R2. To do this, let the plates have area A in the lab frame. In the
plates’ rest frame, they have area A0 = γA (due to length contraction in the lab frame) and
hence charge density σ0 = σ/γ. In this frame, the total force is F0 ∝ σ2
0A0 = σ2A/γ. Finally,
the Lorentz transformation of force gives F = F0/γ = σ2A/γ2 in the lab frame, so a pressure
P ∝ σ2/γ2, matching what we found above. (Though if we had instead fixed σ0, we would
get P ∝ σ2
0, independent of velocity.)
[3] Problem 9. NBPhO 2012, problem 7. An elegant Lorentz force problem with wires. (For a similar
but more difficult setup, try IPhO 2020, problem 1B.)
[4] Problem 10 (Purcell 6.35/INPhO 2008.6). Consider the arrangement shown below.
7
Kevin Zhou Physics Olympiad Handouts
The force between capacitor plates is balanced against the force between parallel wires carrying
current in the same direction. A voltage alternating sinusoidally with angular frequency ω is applied
to the parallel-plate capacitor C1 and also to the capacitor C2, and the current is equal to the
current through the rings. Assume that s ≪ a and h ≪ b.
Suppose the weights of both sides are adjusted to balance without any applied voltage, and C2
is adjusted so that the time-averaged downward forces on both sides are equal. Show that
1
√
µ0ϵ0
=
√
2π aω
r
b
h
C2
C1
.
The left-hand side is equal to c, as we’ll show in E7, so this setup measures the speed of light.
Solution. It can be a little tricky to read the diagram. The key point is that the triangles are
conductors. They represent the fulcrum of a see-saw, but they also allow the voltage to be applied
across the capacitors on the left and right. The charge buildup on the capacitors on the left causes
them to attract, while the current flowing through the circular wires on the right causes them to
attract as well.
Let a current I flow on in the right-hand side. Since h ≪ b, the magnetic field created by the
bottom circular loop at a point on the top circular loop is approximately the same as that created
by an infinite wire, B = µ0I/2πh. Thus, the force between the wires is
F = (2πbI)
µ0I
2πh
=
µ0bI2
h
.
This force oscillates over time. The charge on the capacitor C2 is
Q2(t) = C2E0 cos(ωt)
so that
⟨I2
(t)⟩ = C2
2E2
0ω2
⟨sin2
(ωt)⟩ =
C2
2E2
0ω2
2
.
8
Kevin Zhou Physics Olympiad Handouts
Thus, the average force on the right is
⟨F⟩ =
µ0C2
2E2
0ω2b
2h
.
On the left-hand side, the force between the plates is, by a result in E1,
F =
1
2
ϵ0E2
(πa2
)
where E is the electric field inside the plates, and we have
⟨E2
(t)⟩ =
1
s2
⟨E2
(t)⟩ =
E2
0
2s2
.
Combining these results and eliminating s, since it doesn’t appear in the final result,
⟨F⟩ =
C2
1E2
0
4πa2ϵ0
.
Equating the averaged forces gives
µ0C2
2ω2b
h
=
C2
1
2πa2ϵ0
,
which is equivalent to the desired result.
