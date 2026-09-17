---
id: solution-document-kevin-zhou-e4sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-e4-ex002, kevin-zhou-e4-ex005, kevin-zhou-e4-ex006, kevin-zhou-e4-p011, kevin-zhou-e4-p014, kevin-zhou-e4-p018, kevin-zhou-e4-p020, kevin-zhou-e4-p021, kevin-zhou-e4-p022]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/E4Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Electromagnetism IV: Lorentz Force
The problems here mostly use material covered in previous problem sets, though chapter 5 of Purcell
covers relativistic field transformations. For further interesting physical examples, see chapter II-29
of the Feynman lectures. There is a total of 84 points.
1 Electrostatic Forces
Idea 1: Lorentz Force
A charge q in an electromagnetic field experiences the force
F = q(E + v × B).
In particular, a stationary wire carrying current I in a magnetic field experiences the force
F = I
Z
ds × B.
Example 1: PPP 183
A small charged bead can slide on a circular, frictionless insulating ring. A point-like electric
dipole is fixed at the center of the circle with the dipole’s axis lying in the plane of the circle.
Initially the bead is in the plane of symmetry of the dipole, as shown.
Ignoring gravity, how does the bead move after it is released? How would the bead move if
the ring weren’t there?
Solution
Set up spherical coordinates so that the dipole is in the ẑ direction. Then
V (r,θ) =
kpcosθ
r2
.
Since the ring fixes r, the potential on the ring is just proportional to cosθ, which is in turn
proportional to z. But a potential linear in z is equivalent to a uniform downward field, so
the bead oscillates like the mass of a pendulum, with amplitude π/2.
1Kevin Zhou Physics Olympiad Handouts
The answer remains the same when the ring is removed! Conservation of energy states that
kqpcosθ
r2
+
1
2
mv2
= 0.
Let N be the normal force. Then accounting for radial forces gives
N + q
∂V
∂r
=
mv2
r
.
However, plugging in our conservation of energy result for v2 shows that N = 0, so the ring
doesn’t actually do anything, and it may be removed without effect.
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

1
2
CV 2

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

4 +
2
√
2

≈
kq2
√
2a
+ 2

1
2
mv2
1

.
2Kevin Zhou Physics Olympiad Handouts
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

1
2
Mv2
2

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
3Kevin Zhou Physics Olympiad Handouts
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

m −
m2
m + M

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
[3] Problem 5.  m 1 0USAPhO 2008, problem B2. You may ignore part (c), which was removed in the
final version of the exam, though you can also do it for extra practice.
[3] Problem 6.  ^ 1 0USAPhO 2019, problem B1.
[5] Problem 7.  h 1 0IPhO 2004, problem 1. A nice question on the dynamics of a multi-part system.
2 The Lorentz Force
4Kevin Zhou Physics Olympiad Handouts
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
5Kevin Zhou Physics Olympiad Handouts
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
6Kevin Zhou Physics Olympiad Handouts
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
7Kevin Zhou Physics Olympiad Handouts
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
8Kevin Zhou Physics Olympiad Handouts
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
[3] Problem 11. An electron beam is accelerated from rest by applying an electric field E for a time
t, and subsequently guided by magnetic fields. These magnetic fields are produced with a series of
coils, which carry currents Ii.
Now suppose the apparatus is repurposed to shoot proton beams. Suppose a proton beam is
accelerated from rest by applying an electric field E for a time t (in the opposite direction). Let an
electron have mass m and a proton have mass M. Assume the voltages involved are small enough
that both the electron and proton are nonrelativistic.
(a) Find the currents I′
i needed so that the proton follows the same trajectory the electron did.
(b) How does the answer change if relativistic corrections are accounted for?
Solution. (a) The electron and proton have the same momentum p, and we have
dp
dt
= qvB ∼ qvI
since B ∝ I. Now, the magnetic field can only rotate the particle’s momentum. Suppose at
some moment it is curving in a trajectory with radius of curvature r, and speed v. Then it
has instantaneous angular velocity ω = v/r along the circle tangent to its trajectory, so
dp
dt
= ωp.
Hence we have
qvI ∼
v
r
p
and since r is the same for both the electron and proton, we have the scaling
I ∝
p
q
.
By construction, the electron and the proton have the same momentum p, so we have I ∝ 1/q.
That is, to accommodate the proton, we just have the flip the sign of the currents, I′
i = −Ii.
9Kevin Zhou Physics Olympiad Handouts
(b) Every step in the solution to part (a) still works with relativity accounted for (the change of
p = mv to p = γmv doesn’t matter, because we never used p = mv), so the answer is the
same: we just flip the currents.
[5] Problem 12.  h 1 0IPhO 2000, problem 2. A solid question on the Lorentz force with real-world
relevance. Requires a little relativity, namely the expressions for relativistic momentum/energy.
[4] Problem 13.  T 1 0IPhO 1996, problem 2. An elegant problem on particles in a magnetic field.
(There’s a deeper principle behind the solution to this problem; see R3 for more discussion.)
3 Magnetic Moments
[3] Problem 14. Consider a current loop I in the xy plane in a constant magnetic field B.
(a) Show that the net force on the loop is zero.
(b) Show that the torque is
τ = m × B
where the magnetic moment is
m = IAẑ
where A is the area of the loop. For simplicity, you can show this in the case where the current
loop is a square of side length L, whose sides are aligned with the x and y axes. (The proof
for a general loop shape requires some vector calculus, but you can attempt it for a challenge.
You’ll need the double cross product identity, a × (b × c) + b × (c × a) + c × (a × b) = 0.)
Solution. (a) We see that
F = I
I
ds × B = I
I
ds

× B = 0,
as desired.
(b) The magnetic moment of the square is
m = IL2
ẑ.
The torque on a side of the square is
τ =
Z
r × dF = I
Z
s × (ds × B).
In particular, it’s useful to pair the two sides parallel to the x axis. These have opposite
currents and differ only by a translation ∆r = Lŷ, so adding their contributions gives a torque
τ = −I
Z L
0
(Lŷ) × (x̂dx × B) = −IL(ŷ × (x̂ × B))
Z L
0
dx = −IL2
(ŷ × (x̂ × B)).
Similarly, the torques due to the other two sides add up to
τ = IL2
(x̂ × (ŷ × B)).
10Kevin Zhou Physics Olympiad Handouts
Manually performing the cross products, we have
−ŷ × (x̂ × B) = −Byx̂, x̂ × (ŷ × B) = Bxŷ.
Adding these together gives exactly the desired result, τ = m × B.
For completeness, we display a fully general, vector calculus solution, valid for any loop shape.
We note that along the full, closed loop, the fundamental theorem of calculus implies
I
d(s × (s × B)) = 0
simply because the closed loop integral of d(anything) is the net change in (anything) along
the loop, which is zero. Expanding with the product rule gives
I
ds × (s × B) + s × (ds × B) = 0.
Using these results and the double cross product identity, the torque is
τ = I
I
s × (ds × B)
= −I
I
ds × (B × s) − I
I
B × (s × ds)
= −τ − IB ×
I
s × ds

.
Now, s × ds = 2dA, because as s moves a little along the loop it sweeps out a small triangle
of area. Thus we have 2τ = 2IA × B, giving the result.
Idea 3
The force on a small magnetic dipole m in a static magnetic field B is
F = ∇(m · B)
where the gradient acts only on B. As in problem 14, this can be shown relatively eas-
ily for a square loop, and requires some tricky vector calculus for a general current distribution.
From this, we can see that both the force and torque on a magnetic dipole can be found by
differentiating the potential energy
U = −m · B.
In addition, by a vector calculus identity, the force is equivalent to
F = (m · ∇)B + m × (∇ × B).
The second term vanishes if the situation is magnetostatic, and there are no currents right
on top of the dipole itself. This leaves the first term, which is relatively easy to evaluate.
All of these results also hold for electric dipoles in an electrostatic field, if we replace m with
p and B with E. In more general situations, things get much more subtle; we have to account
for the “hidden” momentum, to be discussed in R3.
11Kevin Zhou Physics Olympiad Handouts
Remark
The expression for the potential energy above is notoriously subtle. Here’s the problem: we
know the Lorentz force on a charge is qv × B, which means magnetic fields never do work.
So how can they be associated with a nonzero potential energy?
There are two levels of explanation. First, suppose the magnetic dipole is made of charges
moving in a loop. When such a current loop is placed in a magnetic field, and moved
or rotated, mechanical work can be done on the loop. But at the same time, there will
be an induced emf in the loop, which speeds up or slows down the current. The work
done by these two effects perfectly cancels, so that the energy of the loop stays constant.
For this kind of dipole, the expression for U doesn’t indicate the total energy, but only
the “mechanical” potential energy, in the sense that differentiating it gives the right forces
and torques. (Some furtherdiscussion of this point is in chapterII-15 of the Feynman lectures.)
On the other hand, the magnetic dipole moment of a common bar magnet doesn’t come from
charges moving in a loop! Instead, it comes from the intrinsic magnetic dipole moments of
the unpaired electrons in the magnet. These kinds of dipole moments aren’t composed of
any moving subcomponents; they are an elementary and immutable property of the electron,
like its mass or charge. In these cases, U = −m · B really is the total energy, and the
magnetic field can do work. You won’t hear much about these elementary dipole moments in
introductory books, because they can only be properly understood by combining relativity
and quantum mechanics, but they’re responsible for most magnetic phenomena.
Example 5
If a magnet is held over a table, it can pick up a paper clip. If the paper clip is removed, it
can pick up another paper clip just as well, and this process can seemingly continue forever
without any effect on the magnet. Since the magnet does work on each paper clip, doesn’t
this mean a permanent magnet is an infinite energy source?
Solution
This is the kind of question that makes magnets feel so mysterious. They’re basically the
only everyday example of a long range force besides gravity (in fact, Kepler once thought
the Sun acted on the planets like a giant magnet), and as such they’ve inspired countless
attempts at perpetual motion machines. For centuries, many people have spent years of
their lives trying to get elaborations of this example to work.
To see why this doesn’t work for a bar magnet, just replace the word “magnet” with “charge”.
It’s true that a positive charge can attract a negative charge to it. And if the negative
charge is then removed, the positive charge can then attract another negative charge to
it. But conservation of energy isn’t violated, because the force from the positive charge
is conservative: the work it does on the negative charge to draw it close is precisely the
opposite of the work an external agent needs to do to pull it away. The force of a magnet on
a paper clip is also conservative.
12Kevin Zhou Physics Olympiad Handouts
It’s also interesting to consider a slightly different case. Unlike a bar magnet, an electromagnet
(i.e. a magnet created by moving current in a loop) can be turned on and off with the flick
of a switch. Therefore, we might suspect that the following is a perpetual motion machine:
1. Turn on the electromagnet, which costs energy E0.
2. Use it to lift a paper clip, increasing its potential energy by mgh.
3. Turn off the electromagnet, which costs energy E0, while holding the paper clip.
4. Move the paper clip away; we’ve managed to raise it higher for free.
To see the problem, note that the attractive force between the magnet and paper clip arises
because the magnet induces a magnetic dipole moment in the paper clip, leading to a (m·∇)B
force. As the paper clip moves toward the magnet, its own dipole moment causes a changing
magnetic flux through the electromagnet, and thus an emf against the current. Therefore, it
costs extra energy to keep the current in the electromagnet steady. Since the qv×B Lorentz
force doesn’t do work, that energy must be precisely mgh, so nothing comes for free.
Remark
A compass needle is essentially a small magnetic dipole, whose dipole moment points towards
the end painted red. We can also approximate the Earth’s magnetic field as a dipole field.
Since the tangential component of this dipole field points north, the red end of the compass
points towards the geographic north pole, which is the Earth’s magnetic south pole.
By the way, a cheap compass calibrated to work in America or Europe won’t work well in
Australia. The reason is that the Earth’s magnetic field also has a radial component, which
acts to tip the compass needle up or down. The needle needs to be appropriately weighted
to stay horizontal, so that it can freely rotate, but the side that needs to be weighted differs
between the hemispheres.
[3] Problem 15 (Griffiths 6.23). A familiar toy consists of donut-shaped permanent magnets which
slide frictionlessly on a vertical rod.
13Kevin Zhou Physics Olympiad Handouts
Treat the magnets as dipoles with mass md and dipole moment m, with directions as shown above.
(a) If you put two back-to-back magnets on the rod, the upper one will “float”. At what height
z does it float?
(b) If you now add a third magnet parallel to the bottom one as shown, find the ratio x/y of the
two heights, using only a scientific calculator. (Answer: 0.85.)
Solution. (a) We know that the field from a magnetic dipole is
B =
µ0m
4πr3

2cosθr̂ + sinθθ̂

.
Along the z-axis, this reduces to
Bz =
µ0m
2πz3
.
The force on the upper magnet must balance gravity, so
−
µ0m2
2π
d
dz

1
z3

− mdg = 0
which yields
z =

3µ0m2
2πmdg
1/4
.
(b) The net force on the middle magnet comes from the field from the top and bottom magnets,
along with gravity,
3µ0m2
2π

1
x4
−
1
y4

= mdg.
Similarly, the top magnet, experiences forces from the bottom and middle magnets,
3µ0m2
2π

1
y4
−
1
(y + x)4

= mdg.
Putting these two equations together yields
1
x4
−
1
y4
=
1
y4
−
1
(y + x)4
.
Defining α = x/y, we then need to solve
α =

(1 + α)4
2(1 + α)4 − 1
1/4
.
14Kevin Zhou Physics Olympiad Handouts
We solve this using iteration, as introduced in P1. That is, we guess a reasonable value like
α = 0.5, then repeatedly plug in

(1 + Ans)4
2(1 + Ans)4 − 1
1/4
which yields x/y = 0.85.
[3] Problem 16 (PPP 89). Two identical small bar magnets are placed on opposite ends of a rod of
length L as shown.
(a) Show that the torques the magnets exert on each other are not equal and opposite.
(b) Suppose the rod is pivoted at its center, and the magnets are attached to the rod so that
they can spin about their centers. If the magnets are released, the result of part (a) implies
that they will begin spinning. Explain how this can be consistent with energy and angular
momentum conservation, treating the latter quantitatively.
Solution. (a) Referring to the dipole fields computed in E1, the field at D due to C is twice
that at C due to D, so they can’t possibly cancel. Worse, the directions of the torques are
the same (both out of the page).
(b) Energy is conserved because there is an energy density B2/2µ0 stored in the magnetic field of
the two magnets. As the rotational kinetic energy of the system increases, the energy stored
in the field decreases to compensate.
Angular momentum conservation holds for a different reason. While electromagnetic fields
can store angular momentum too, they don’t in this particular case. Instead, the answer is
something more familiar. The magnets also exert forces on each other, so a force from the
rod is necessary to keep the magnets in place. This implies the magnets exert a torque on the
rod, which begins spinning in the opposite direction. Thus, angular momentum is conserved.
To show this quantitatively, set up coordinates with the origin at the center of the rod, and
the z-axis pointing out of the page. The total torque on the two magnets is
τ0 =
3µ0
4π
m2
L3
ẑ
where m is the magnetic moment of each magnet. This is the rate of change of their spin
angular momentum. Next, we consider forces. The force on magnet C due to D is
FCD = (mC · ∇)BD = m
∂BD
∂x
= m
∂
∂x

−
µ0m
4π
ŷ
x3
x=−L

=
3µ0
4π
m2
L4
ŷ.
This produces a torque on the rod, about its pivot point, of
τ1 = −
1
2
3µ0
4π
m2
L3
ẑ.
15Kevin Zhou Physics Olympiad Handouts
The force on magnet D due to magnet C is equal and opposite, and therefore provides an
equal torque τ2 on the rod. Therefore, the total rate of change of angular momentum is
τ0 + τ1 + τ2 = 0.
In introductory textbooks, you might have read that angular momentum is conserved as
a consequence of the strong form of Newton’s third law, which is that forces are equal
and opposite, and always directed along the line separating two particles. As we’ve just
seen, this isn’t actually necessary: here we have an example of a force which isn’t directed
along the separation, but angular momentum is still conserved. In E7 we’ll see even more
exotic examples, where even the weak form of Newton’s third law (i.e. that forces are equal
and opposite) breaks down, but momentum remains conserved anyway, as a consequence of
electromagnetic fields carrying away the excess momentum. Generally speaking, the deeper
you get into physics, the less important Newton’s laws become, while conservation laws remain
as important as ever.
4 Point Charges
In this section we’ll give a sampling of classic problems involving just point charges in fields; these
will be a bit more mathematically advanced than the others in this problem set.
[3] Problem 17. A point charge q of mass m is released from rest a distance d from a grounded
conducting plane. Find the time until the point charge hits the plane. (Hint: use Kepler’s laws.)
Solution. This is an incredibly classic problem, which has been appearing in various forms on
competitions for decades. By using image charges, we see that the particle always experiences a
force
F =
kq2
4z2
directly towards the plane, where z is its separation from the plane. Let the particle impact the
plane at point O.
This force has the form of an inverse-square law. In particular, we would get the exact same
result if the force were always directed towards O (rather than always directed towards the plane),
F = −
kq2
4r2
r̂.
But in this case, the problem is perfectly analogous to the central force of gravity, where O serves
as the location of the Sun, and one of the foci of the charge’s orbit. In particular, releasing the
charge from near rest and waiting for it to hit the plane corresponds to performing the first half of
an extremely eccentric elliptic orbit.
The trick is now to use Kepler’s third law. If the charge had performed a circular orbit of radius
d about O, then
kq2
4d2
=
mv2
d
= mω2
d
which gives a period of
T =
2π
ω
= 4π
s
md3
kq2
.
16Kevin Zhou Physics Olympiad Handouts
We can use Kepler’s third law to find the period of the eccentric elliptic orbit the charge actually
follows. This orbit has semimajor axis d/2, so it has period
T′
=
T
2
√
2
.
The actual path of the charge is only the first half of this orbit, so the answer is
T′
2
=
T
4
√
2
=
π
√
2
s
md3
kq2
.
Of course, the problem can also be solved by directly integrating the differential equation. If you
do it that way, you’ll get the same integral as in a similar example, given in P1.
[3] Problem 18. A point charge of mass m and charge q is released from rest at the origin in the fields
E = E0 x̂, B = B0 ŷ. Find its position as a function of time by solving the differential equations
given by Newton’s second law, F = ma.
Solution. We will assume non-relativistic motion throughout. Note that the motion is solely in
the xz plane, since the electric and magnetic forces are in that plane. Newton’s second law gives
ẍ =
q
m
(E0 − B0ż),
z̈ =
q
m
B0ẋ.
Taking the time derivative of the first equation and plugging in into the second, we find
...
x = −
q2B2
0
m2
ẋ,
and along with the initial condition that ẋ(0) = 0, we see that
ẋ = v0 sin(ωt)
where v0 is some yet to be determined velocity, and ω ≡ qB0/m. Integrating, and using the initial
condition that x(0) = 0, we see that
x(t) =
v0
ω
(1 − cos(ωt)).
We also know that
z̈ = ωẋ = ωv0 sin(ωt).
Integrating twice and using the fact that z(0) = ż(0) = 0, we see that
z(t) = v0t −
v0
ω
sin(ωt).
All that is to be found now is v0. Plugging our x and z into the first equation, we see that
v0ω cos(ωt) =
q
m
(E0 − B0v0(1 − cos(ωt))) =⇒ v0 = E0/B0.
17Kevin Zhou Physics Olympiad Handouts
Thus, our final solution is
x(t) =
v0
ω
(1 − cos(ωt)),
z(t) = v0t −
v0
ω
sin(ωt)
where v0 = E0/B0 and ω = qB0/m.
Notice that while naively one might have thought the motion would be along E, on average the
particle actually moves along E × B. This is actually quite general. For example, it remains true
even if there’s a bit of friction; the steady state velocity turns out to be along E × B.
The same reasoning applies to weather systems. People talk about “low pressure” and “high
pressure” regions, but wouldn’t the wind just go along the pressure gradient to even it out? That
doesn’t happen because the Coriolis force deflects the wind sideways. In this case, the pressure
gradient is acting like E, and the Coriolis force behaves like a magnetic field B ∥ ω ∥ ẑ. The
net effect is that in the steady state, wind tends to move along lines of constant pressure, not
perpendicular to them. So a low pressure system stays low pressure but spins around.
[3] Problem 19 (Wang). Two identical particles of mass m and charge q are placed in the xy plane
with a uniform magnetic field Bẑ. The particles have paths r1(t) and r2(t). Neglect relativistic
effects, but account for the interaction between the charges.
(a) Write down a differential equation describing the evolution of the separation r = r1 − r2.
(b) Suppose that the initial conditions have been set up so that the particles orbit each other in
a circle in the xy plane, with constant separation d. What is the smallest d for which this
motion is possible?
Solution. (a) The equations of motion for the two particles are
mr̈1 =
q2
4πϵ0r3
r + qṙ1 × B, mr̈2 = −
q2
4πϵ0r3
r + qṙ2 × B.
Subtracting the two, the separation between the particles evolves as
mr̈ =
q2
2πϵ0r3
r + qṙ × B.
(b) Note that since B is along the ẑ direction, and v = ω×r where ω is also along the ẑ direction,
all three vector terms in the above equation are parallel. So we have

q2
2πϵ0r3
+ qωB + mω2

r = 0.
Setting the term in parentheses to zero, and noting that the separation r has magnitude d,
ω =
−(qB/m) ±
p
(qB/m)2 − 2q2/πmϵ0d3
2
where ωc = qB/m is the usual cyclotron angular frequency. For this equation to have a
solution, the discriminant must be nonnegative, so
q2B2
m2
≥
2q2
πmϵ0d3
18Kevin Zhou Physics Olympiad Handouts
which gives
d ≥

2m
πϵ0B2
1/3
.
For smaller d, the charges will always fly apart, either due to electrostatic repulsion if they’re
slow, or the angular momentum barrier if they’re fast.
[4] Problem 20. [A] Consider a point charge of mass m and charge q in the field of a magnetic
monopole at the origin,
B =
g
r2
r̂.
In this problem we’ll investigate the strange motion that results.
(a) Argue that the speed v is constant.
(b) Show that the angular momentum L of the charge is not conserved, but that
V = L − qgr̂
is. The second term is the angular momentum stored in the fields of the charge and monopole.
(c) Show that the charge moves on the surface of a cone.
Solution. (a) The force is qv × B ⊥ v, so no work is done on the particle, so its speed remains
the same.
(b) Note that
˙ r̂ =
d
dt
r
r
=
ṙr − ṙr
r2
=
ṙr − rr·ṙ
r
r2
= (r̂ · r̂)
ṙ
r
−

r̂ ·
ṙ
r

r̂ = r̂ ×

ṙ
r
× r̂

=
1
r2
r × (ṙ × r̂).
We have L̇ = τ = r × (qṙ × (g/r2)r̂) = qg˙ r̂, so L − qgr̂ is conserved.
(c) Take coordinates so that V is directed along ẑ and the particle is instantaneously in the xz
plane. Now take the y-component of the above equation, to give Ly = 0. In components, this
tells us that xpz − zpx = 0, or in other words that ẋ/ż = x/z. By drawing similar triangles,
this implies that the particle is momentarily moving so that x/z is conserved. So in general
s/z is conserved, where s is the distance to the z-axis. This defines a cone.
In a typical trajectory, the charge spirals in towards the monopole along this cone, reaches
some minimum distance from it, then turns around and spirals out. In fact, if the cone is “cut
and unfolded” and laid flat, the trajectory is a straight line! In other words, it is a geodesic
on the cone. (Some aspects of this motion were covered in USAPhO 2026, problem A2.)
One can do problem 18 slickly using field transformations, an advanced subject we will cover in R3.
Idea 4: Field Transformations
If the electromagnetic field is (E,B) in one reference frame, then in a reference frame moving
with velocity v with respect to this frame, the components of the field parallel to v are
E′
∥ = E∥, B′
∥ = B∥
19Kevin Zhou Physics Olympiad Handouts
while the components perpendicular are
E′
⊥ = γ(E⊥ + v × B), B′
⊥ = γ

B⊥ −
v
c2
× E

.
Remark: Galilean Field Transformations
The nonrelativistic limit of the field transformation is useful, but one has to be careful in
deriving it. You might think, what’s the need for care? Can’t we just send c → ∞, Taylor
expand the above expressions, and call it a day? The problem with this reasoning is that
there’s no such thing as setting c → ∞. You can’t change a fundamental constant, and
moreover this statement isn’t even dimensionally correct, as noted in P1. What we really
mean by the nonrelativistic limit is restricting our attention to some subset of possible
situations, within which relativistic effects don’t matter.
For example, if we have a bunch of point charges with typical speed v, then the nonrelativistic
limit is considering only situations where v/c is small. In other words, we are taking v/c → 0,
not c → ∞. Since the magnetic field of a point charge is v/c2 times the electric field, the
magnetic field ends up small. Now if we also consider boosts with small speeds v, then
expanding the field transformations to lowest order in v/c gives
E′
= E, B′
= B −
v
c2
× E.
This is the nonrelativistic limit for situations where E/B ≫ c, also called the electric limit.
However, there’s another possibility. Suppose that we have a bunch of current carrying,
approximately neutral wires. In this case, it’s the electric fields that are small, E/B ≪ c.
Using this in the transformations above, we arrive at the distinct result
B′
= B, E′
= E + v × B
which apply for situations where E/B ≪ c, also called the magnetic limit.
You might think we could improve the approximation by combining the two,
E′
= E + v × B, B′
= B −
v
c2
× E
but this isn’t self-consistent. For example, if you apply a Galilean boost with speed v, and
then a boost with speed −v, you don’t get back the same fields you started with! A sensible
Galilean limit is only possible if E/B ≫ c or E/B ≪ c, which are called the electric and
magnetic limits. It’s only in relativity that E and B can be treated on an equal footing.
By the way, whenever relativity or similarly subtle physics is involved, internet sources will
be generally poor. If you search for “Galilean electrodynamics”, the first result will be a
journal for papers that deny relativity. If you want to learn more, just read this classic paper.
[3] Problem 21. We can use the Galilean field transformations to solve problem 18.
20Kevin Zhou Physics Olympiad Handouts
(a) In the magnetic limit, show that the Lorentz force stays the same between frames, as it should.
Then use the field transformations to find an appropriate reference frame where the problem
becomes easy.
(b) In the electric limit, show that the Lorentz force stays the same up to terms that are order
(v/c)2 smaller, assuming B/E ∼ v/c2. (This is fine, since we’re taking the limit v/c → 0
anyway.) Then use the field transformations to find an appropriate reference frame where the
problem becomes easy.
(c) You should have found two distinct behaviors in parts (a) and (b). One of them should look
like what you found in problem 18, and the other should be very different. But the values of
E and B in problem 18 were arbitrary, so why didn’t you see the other type of behavior?
Solution. (a) Suppose a particle has velocity u in the original frame, so the force there is
F = q(E + u × B). The force in the boosted frame is F′ = q(E + v × B + (u − v) × B) = F.
We can find a frame where there’s no electric field, by letting E+v×B = 0. In this frame, the
particle just orbits in a circle. (Going back to the original frame just gives back the cycloid
we found earlier.)
(b) We use the same setup as (a). The boosted force is
F′
= q(E + (u − v) × (B − v × E/c2
)) = F + q

−v × B +
v × v × E
c2
−
u × v × E
c2

.
The extra terms are all second order in v/c.
We can now find a frame where there’s no magnetic field, by letting B − v × E/c2 = 0. In
this frame, the particle just accelerates straight along E. This indicates that in the original
frame, the particle is always going along E, while getting deflected a bit to the side by the
magnetic field.
(c) The reason is that the solution to problem 18 neglected relativistic effects. We found in that
problem that the characteristic velocity of the particle during the cycloid motion is v0 = E/B.
So relativity can only be consistently neglected in the magnetic limit, where v0 ≪ c. In the
electric limit, the particle necessarily becomes highly relativistic. This makes a difference
because in relativity, p = γmv > mv, but the magnetic force still is proportional to v, so it’s
harder for the magnetic force to turn the particle around.
As a followup, you might be wondering precisely what value of E/B separates two types
of behavior. It turns out to be precisely E/B = c, because when you use the exact field
transformations in idea 4, you can only transform the electric field away when E < cB, and
you can only transform the magnetic field away when E > cB.
In these two cases, you get circular and linear motion respectively, and the solution in the
original frame follows by boosting back using the Lorentz transformation. When E/B is small,
you get a cycloid solution, and as E/B increases, the trajectory gets more and more stretched
along the direction of E, until it gets infinitely long at E/B = c.
There are a number of other nice questions one can ask about the dynamics of point charges,
which use more advanced concepts such as “hidden” momentum, canonical momentum, or adiabatic
invariants. These ideas are collected in a section of R3.
21Kevin Zhou Physics Olympiad Handouts
5 Continuous Systems
Example 6: The Drude Model
Model a conductor as a set of electrons, of charge q, mass m, and number density n, which are
completely free. Assume that in every small time interval dt, each electron has a probability
dt/τ of hitting a lattice ion, which randomizes the direction of its velocity. Under these
assumptions, compute the resistivity of the material.
Solution
First, suppose the electrons have some average momentum ⟨p⟩. In time dt, a fraction dt/τ of
them hit a lattice ion, which gives them zero average final momentum. Then the new average
momentum is (1 − dt/τ)⟨p⟩, which implies the exponential decay
d⟨p⟩
dt
= −
⟨p⟩
τ
.
On the other hand, if there is an applied field, a force term appears on the right,
d⟨p⟩
dt
= −
⟨p⟩
τ
+ qE
since F = dp/dt for each individual electron. In the steady state,
⟨p⟩ = qEτ.
The current density is
J = nq⟨v⟩ =
nq⟨p⟩
m
=
nq2τ
m
E.
Thus, the resistivity in the Drude model is
ρ =
m
nq2τ
.
We can also compute the typical drift velocity,
v =
qEτ
m
=
E
nqρ
.
For realistic values, v is a literal snail’s pace; the electrons always move very slowly. But a
current can get started in a circuit much faster, because when a battery is attached, each
moving electron pushes on the next one along the wire. This wave of motion travels much
faster than the electrons themselves.
Remark: The Drude–Sommerfeld Model
Above we tacitly assumed there was a given probability of collision per unit time, but that’s
not right: when a particle flies through a medium, there is instead a given probability of
collision per unit length it travels. These are equivalent for electrons moving at constant
speed, but intuitively, we would expect electrons to have to accelerate starting from rest after
22Kevin Zhou Physics Olympiad Handouts
each collision, in which case the two differ. To estimate this quickly, note that if the typical
collision distance is ℓ, the kinetic energy picked up between collisions is mv2/2 ∼ qEℓ, giving
typical speed v ∝
√
E. The analogue of Ohm’s law would then be I ∝
√
V , completely
contrary to observation!
The resolution is that electrons in solids really do effectively move with almost constant speed,
even after collisions. This is a quantum mechanical effect, as explained in X1. The Pauli
exclusion principle implies the electrons in the conductor have to occupy different quantum
states, and the high density of electrons requires most of them to always have extremely high
speeds, on the order of 1% of the speed of light! The drift velocity is merely the tiny amount
by which their velocities are shifted on average.
[2] Problem 22. Consider Drude theory again, but now suppose there is also a fixed magnetic field
Bẑ. In this case, J is not necessarily parallel to E, but the relation between the two can be described
by the “tensor of resistivity”. That is, the components are related by
Ei =
X
j∈{x,y,z}
ρijJj.
Calculate the coefficients ρij. Express your answers in terms of the quantities
ρ0 =
m
nq2τ
, ω0 =
qB
m
as well as the parameter τ.
Solution. The Lorentz force expression says
d⟨p⟩
dt
= −
⟨p⟩
τ
+ q(E + v × B).
In the steady state, the left-hand side vanishes, so
⟨p⟩
qτ
= E +
1
m
⟨p⟩ × B.
Switching from ⟨p⟩ to J and using the variables defined gives
E = ρ0J − ρ0ω0τJ × ẑ.
From this, we can directly read off the components of the resistivity,
ρ =


ρ0 −ρ0ω0τ
ρ0ω0τ ρ0
ρ0

.
When the electric field is in the ẑ direction, the magnetic field does nothing, which makes sense.
23Kevin Zhou Physics Olympiad Handouts
Example 7: Griffiths 5.40
Since parallel currents attract, the currents within a single wire should contract. To estimate
this, consider a long wire of radius r. Suppose the atomic nuclei are fixed and have uniform
density, while the electrons move along the wire with speed v. Furthermore, assume that the
electrons contract, filling a cylinder of radius r′ < r with uniform negative charge density,
and that the wire is overall neutral. Find r′.
Solution
The contraction of the electrons produces an overall inward electric field, and hence an
outward electric force on each electron, which balances the radially inward magnetic force.
Specifically, equilibrium occurs when E = vB.
Let the charge densities of the nuclei and electrons be ρ+ and ρ−. The magnetic field at
radius s ≤ r′ is found by Ampere’s law, which gives
(2πs)B = µ0(ρ−v)(πs2
), B =
µ0ρ−vs
2
.
The electric field at this radius is found by Gauss’s law, which gives
(2πs)E =
1
ϵ0
(ρ+ + ρ−)πs2
, E =
1
2ϵ0
(ρ+ + ρ−)s.
Note that both E and B are proportional to s. Then E = vB can be satisfied at all s simul-
taneously, which confirms that our assumption that ρ+ and ρ− were uniform is self-consistent.
Plugging these results into E = vB yields
ρ+ + ρ− = ρ−(ϵ0µ0v2
) = ρ−
v2
c2
.
This can be written in terms of the Lorentz factor of special relativity,
ρ− = −γ2
ρ+, γ =
1
p
1 − v2/c2
.
Since the wire is overall neutral, ρ−r′2 + ρ+r2 = 0, so
r′
=
r
γ
.
For nonrelativistic motion, the contraction is extremely small. (However, in plasmas, where
the positive charges are also free to move, this so-called pinch effect can be very significant.)
[2] Problem 23 (Griffiths 5.41). A current I flows to the right through a rectangular bar of conducting
material, in the presence of a uniform magnetic field B pointing out of the page, as shown.
24Kevin Zhou Physics Olympiad Handouts
(a) If the moving charges are positive, in what direction are they deflected by the magnetic field?
This deflection results in an accumulation of charge on the upper and lower surfaces of the
bar, which in turn produces an electric force to counteract the magnetic one. Equilibrium
occurs when the two exactly cancel. (This phenomenon is known as the Hall effect.)
(b) Find the resulting potential difference, called the Hall voltage, between the top and bottom
of the bar, in terms of B, the speed v of the charges, and the dimensions of the bar.
(c) How would the answer change if the moving charges were negative?
When measurements were performed in the early 20th century, some metals were found to have
positive moving charges! This “anomalous Hall effect” was solved by the quantum theory of solids,
as you can learn in any solid state physics textbook. (It is related to the strange behavior you will
see in problem 27.) Today, extensions of the Hall effect, such as the integer and fractional quantum
Hall effects, remain active areas of research, and could be used to build quantum computers. We’ll
return to these effects in X3.
Solution. (a) Using the right-hand rule, we find they are deflected down.
(b) The electric field is E = vB, so V = Et = vBt where t is the thickness, i.e. the length in the
direction perpendicular to both the current flow and to B. In equilibrium, the bottom is at a
higher potential.
(c) If the current stays the same, the charges move the other direction. Since both the charge
and velocity flip, the Lorentz force stays the same, so the charges are still deflected down.
Thus, the sign of the charge that accumulates on the bottom is flipped, so now the top is at a
higher potential. Hence measuring the Hall voltage can be used to find the sign of the charge
carriers in a material.
[3] Problem 24 (Zangwill 14.16). A conducting sphere of radius a is moving with speed v ≪ c parallel
to a straight wire which carries a current I. The distance between the wire and the center of the
sphere is d ≫ a.
Show that the force between the wire and the sphere scales as
F ∼
v2
c2
a3
d3
µ0I2
.
Is the force attractive or repulsive?
25Kevin Zhou Physics Olympiad Handouts
Solution. The Lorentz force v × B pushes on the charges of the sphere, causing the sphere to
develop an electric dipole moment, with more positive charge closer to the wire. Then, the motion
of the positive and negative charge causes a secondary Lorentz force. This force almost cancels out,
except that the magnetic field is stronger closer to the wire, so that we get a net attractive force.
Let’s make this more quantitative, dropping all constants in the process. The Lorentz force per
unit charge is
vB ∼
µ0Iv
d
.
This acts on the sphere in the same way as a uniform electric field, and we know from a problem in
E2 that this induces an electric dipole moment
p ∼ ϵ0a3
(vB) ∼
1
c2
a3Iv
d
where we used ϵ0µ0 = 1/c2. Since we only want to find out how the answerscales, we can approximate
the charge distribution on the sphere as a pair of opposite charges ±q separated by distance a,
where p ∼ qa. Then the net force on those charges is
F ∼ qv

dB
dr
a

∼ pv
dB
dr
∼ pv
µ0I
d2
∼
v2
c2
a3
d3
µ0I2
as desired. If you want to, it wouldn’t be too hard to find the constant of proportionality.
Notice that the force is of order v2/c2. This implies that it cannot be found self-consistently
using the Galilean field transformations discussed above. For example, we could use the magnetic
limit to conclude that in the sphere’s frame, there is a radial electric field v × B. Then we would
get the right answer by considering the force this field exerts on the polarized sphere. However,
things start to break down when we think more carefully. For instance, how can there be a radial
electric field if the wire is neutral? Doesn’t that violate Gauss’s law? And what about the equal
and opposite force on the wire? In the sphere’s frame, the sphere can only produce an electric field,
and the wire is neutral, so the force vanishes!
The problem is that at this order, genuine relativistic effects come into play. As you’ll see in R3,
the relativistic “loss of simultaneity” effect discussed in R1 implies that in the sphere’s frame, the
wire actually has a nonzero charge density. This accounts for both of the paradoxes above.
[3] Problem 25.  m 1 0USAPhO 1997, problem B1. A nice problem on the dynamics of a plasma.
(Note that the assumption made in part (e) is somewhat arbitrary, without much physical meaning.
It’s just made to make part (f) a bit simpler.)
[3] Problem 26.  ^ 1 0USAPhO 2019, problem A3. This is a tough but useful problem. The first half
derives the so-called Child–Langmuir law, covered in problem 2.53 of Griffiths.
[3] Problem 27.  ^ 1 0USAPhO 2022, problem B3. About the weird behavior of electrons in solids.
26
