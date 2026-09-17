---
id: kevin-zhou-r3-p009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r3-p009
solution_type: author
source_document: solution-document-kevin-zhou-r3sol
source_pdf: sources/kevin_zhou/site/handouts/R3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R3Sol.pdf."
---

[4] Problem 9. Consider an electromagnetic wave of the form
E(z,t) = E0 cos(kz − ωt)x̂, B(z,t) = B0 cos(kz − ωt)ŷ.
As usual, you may work in units where c = 1.
(a) What do Maxwell’s equations imply about the relation between E0 and B0, and k and ω?
(b) Now consider a frame moving with velocity v along the ẑ direction. Show that the electromag-
netic wave continues to have the same basic functional form for E′(z′,t′) and B′(z′,t′), but
with new parameters E′
0, B′
0, k′, and ω′. Using these results, show that the energy density of
the wave is smaller by a factor of (1 − v)/(1 + v).
(c) The energy of a photon in an electromagnetic wave of angular frequency ω is E = ℏω. Show
that for a finite-sized electromagnetic wave, the initial and boosted frames agree on the number
of photons. This was one of the hints Einstein used to conclude light was made of photons.
(d) Now consider another question Einstein pondered: what does the light wave look like if we
try to “catch up” with it, taking v → c? Is this consistent with the invariants of problem 8?
Solution. (a) From E7, we know that E0 = B0 and k = ω.
(b) The electromagnetic field only has perpendicular components. Using the field transformations,
E′
(z′
,t′
) = γ(E0 cos(kz − ωt) − vB0 cos(kz − ωt))x̂.
In units where c = 1, we have E0 = B0 for an electromagnetic wave, so this simplifies to
E′
(z′
,t′
) = γ(1 − v)E0 cos(kz − ωt)x̂.
Repeating the reasoning for the magnetic field, we conclude
E′
0 = γ(1 − v)E0, B′
0 = γ(1 − v)B0
which still obeys E′
0 = B′
0 as expected. Thus, the energy density is reduced by a factor of
γ2
(1 − v)2
=
1 − v
1 + v
as stated. To find k′ and ω′, we can simply apply the Lorentz transformations,
kz − ωt = k(γ(z′
+ vt′
)) − ω(γ(t′
+ vz′
)) = γ(k − ωv)z′
− γ(ω − kv)t′
.
This indicates that E′(z′,t′) is still a plane wave proportional to cos(k′z′ − ω′t′), where
k′
= γ(k − ωv), ω′
= γ(ω − kv)
which is of course just the statement that (ω,k) is a four-vector, derived in R1. Using the
fact that ω = k, we conclude
k′
= ω′
= γ(1 − v)ω =
r
1 − v
1 + v
ω
which is of course just the usual Doppler shift.
11
Kevin Zhou Physics Olympiad Handouts
(c) The number of photons is the ratio of the total energy in the wave to the energy of each
photon. Since the energy of each photon is reduced by a factor of
p
(1 − v)/(1 + v) in the
boosted frame, we need to show that the total energy of the wave is reduced by the same
factor. This results from the combination of two effects.
First, we know the energy density is reduced by the factor (1−v)/(1+v). Second, the wavenum-
ber is reduced by a factor of
p
(1 − v)/(1 + v), which means the wavelength is increased by p
(1 + v)/(1 − v). Since the number of wavelengths contained in the wave is the same in
every reference frame, this means the volume of the wave is increased by
p
(1 + v)/(1 − v).
Multiplying these factors gives the desired result.
(d) In this case we have E′
0,B′
0,ω′,k′ → 0, so the light wave disappears! That is, you can never
“catch up” to a light wave. This result is completely compatible with the invariants from part
(a) of problem 8, which both vanish for a plane electromagnetic wave. The invariant in part
(c) vanishes as well, since E = |S| for a plane wave.
Idea 2
If a uniformly moving point charge suddenly stops moving, then the field outside a spherical
shell, centered at the charge when it stopped moving, expanding at speed c, is precisely that
calculated in problem 1. The same occurs if the point charge suddenly changes its velocity;
information about the change only propagates at c.
[1] Problem 10 (Purcell 5.18). In the figure below, you see an electron at time t = 0 and the associated
electric field at that instant.
(a) Describe what has been going on, as quantitatively as you can.
(b) Where was the electron at the time t = −0.75ns?
Solution. (a) Clearly, the particle isn’t moving at t = 0. Since there’s a kink in the field lines
at r = 15cm, it must have quickly stopped at t = −r/c = −0.5ns, since the speed of light is
c = 30cm/ns. We also see that the field lines outside this shell are straight, and point towards
the location x = 12cm. This implies that shortly before the charge stopped, it was moving
with constant velocity v = |x/t| = 24cm/ns = 0.8c.
12
Kevin Zhou Physics Olympiad Handouts
(b) By combining the results from (a), it must have been at x = −(24cm/ns)(0.25ns) = −6cm.
[2] Problem 11 (Purcell 5.19). People often wonder what would happen if an electric charge instantly
appeared or vanished. However, this is impossible, because as discussed in E7, Maxwell’s equa-
tions imply that charge must be conserved. Assuming otherwise will just lead to mathematical
contradictions, like 0 = 1.
Here’s a related scenario that actually can happen. We consider two highly relativistic particles
with opposite charge approaching the origin.
They collide at the origin at time t = 0 and remain there as a neutral entity. Sketch the field lines
at some time t > 0.
Solution. Before the charges collide, we have a kind of distorted dipole field. After they collide,
we still have a dipole field at r > ct, with the positive charge on the right and the negative charge
on the left. For r < ct the field is zero, and at the shell r ≈ ct there is a thin shell that connects up
the field lines. This transverse pulse of radiation steadily moves outward over time.
Some crackpots claim that particle annihilation is impossible because that would imply the electric
field has to “instantly vanish”, contradicting relativity. As you can see, that’s not the case. A
spherical shell, corresponding to a pulse of radiation, travels outward at the speed of light. The
electric field only vanishes inside the expanding shell.
[3] Problem 12. Work through the derivation of the Larmor formula in Appendix H of Purcell.
13
Kevin Zhou Physics Olympiad Handouts
[3] Problem 13 (Purcell H.4). The Larmor formula only applies to particles moving nonrelativistically.
To get a result valid for faster particles, we can simply transform into an inertial frame F′ where
the particle is nonrelativistic, apply the Larmor formula, then transform back to the lab frame.
(a) Consider a relativistic electron moving perpendicularly to a magnetic field B. Defining the
radiation power as Prad = dE/dt, find P′
rad, the power in a frame instantaneously comoving
with the electron.
(b) Argue that in this context, Prad = P′
rad, and conclude that
Prad =
γ2v2e4B2
6πϵ0m2c3
.
Thus, the power increases rapidly as v → c. Incidentally, a “relativistic” way to write the
general result is
Prad =
q2
6πϵ0c3

1
m
dpµ
dτ
2
which clearly reduces to the Larmor formula in the nonrelativistic limit.
(c) This radiation is also called synchrotron radiation. Qualitatively, how does its angular distri-
bution differ from radiation from an accelerating nonrelativistic charge?
Solution. (a) In the frame comoving with the electron, it’s not relativistic, so we can just apply
the Larmor formula,
P′
rad =
e2a′2
6πϵ0c3
.
In this frame, the only force is the electric force, so
a′
=
eE′
m
=
eγvB
m
.
Putting it together, we conclude
P′
rad =
e4γ2v2B2
6πϵ0m2c3
.
(b) We have P′
rad = dE′/dt′. Now, in the primed frame, the electron is just accelerating trans-
versely, with no component along the unprimed frame’s v. Thus, when we Lorentz transform
back to the unprimed frame, we simply get dE = γdE′ and dt = γdt′. The γ factors cancel
out, giving the desired result.
(c) In the primed frame, the radiation power comes out with a wide angular distribution, but
none of it comes out along the direction of motion of the charge, and most of it comes out
roughly transverse to the motion. But when we boost back to the original frame, where
the charge is moving very quickly, the radiation’s direction gets a big component along the
charge’s direction of motion. Thus, almost all the radiation is “beamed” in a narrow cone
along the charge’s motion (as we saw in R1), though there still is zero radiation intensity
exactly along the charge’s direction.
14
Kevin Zhou Physics Olympiad Handouts
Remark: Gravitoelectromagnetism
As mentioned in E1, there’s a close analogy between electrostatic fields, which are sourced
by charge density ρe, and gravitational fields, which are sourced by energy density ρ. If you
apply the analogy and run the same arguments as in Purcell, you would expect there to be
a “gravitomagnetic” field, which is sourced by momentum density J = ρv. That’s indeed
correct! In the theory of gravitoelectromagnetism, the gravitoelectric and gravitomagnetic
fields Eg and Bg satisfy
∇ · Eg = 4πGρ, ∇ · Bg = 0, ∇ × Eg = −Ḃg, ∇ × Bg = 4πGJ + Ėg
under one common convention. Given this definition, the force on a point mass is
F = m(Eg + 4v × Bg).
From this you can draw some interesting conclusions. For example:
• Two masses moving parallel to each other will have an extra attraction due to the
gravitomagnetic force.
• A rotating object will produce a gravitomagnetic field which can cause gyroscopes to
precess; this is called the Lense–Thirring, or frame dragging effect, which has been
measured by satellites such as Gravity Probe B. (There is also a significantly larger
“geodetic” effect caused by the curvature of spacetime around the Earth, but this isn’t
captured within gravitoelectromagnetism.)
• A cylinder which starts to rotate will induce a gravitoelectric field inside, by Faraday’s
law. This will cause masses inside the cylinder to start rotating a small amount in the
same direction as the cylinder. (This is also sometimes called frame dragging.)
Now you might be puzzled by two things: first, how does gravitoelectromagnetism relate
to general relativity, and second, why is there an extra 4 in the force? Well, the truth is
that Purcell’s arguments don’t really work for gravity. These arguments crucially depend on
electric charge Q =
R
ρe dx being Lorentz invariant, which in our more sophisticated language
was necessary to ensure jµ = (ρe,ρev) is a four-vector. However, the total energy E =
R
ρdx
is not Lorentz invariant – instead it’s itself a component of a four-vector. Thus, (ρ,ρv) isn’t
a four-vector, so none of the arguments really work: the theory of gravitoelectromagnetism
is just not Lorentz invariant at all.
Instead, gravitoelectromagnetism is properly derived as a limiting case of general relativity,
valid when all the masses involved are moving slowly, v ≪ c. The fact that general relativity
is a theory of a rank 2 tensor field, the metric gµν, is responsible for the extra factors of 2
above. Even though it’s only approximately true, gravitoelectromagnetism is a very useful
tool for analyzing precision tests of general relativity, since it’s much easier to calculate with.
However, there’s also a lot of nonsense written about gravitomagnetism, both on the internet
and in low-quality academic journals. The problem is that the effects are very small, which
means they usually don’t matter, but they’re also a bit subtle, which makes it easy to make a
15
Kevin Zhou Physics Olympiad Handouts
mistake and overestimate their importance. For example, many have tried to use gravitomag-
netism to explain the anomalous rotation of galaxies (typically ascribed to dark matter), even
though, using just the basic equations above, you can show that the gravitomagnetic force is
(v/c)2 times smaller than the usual gravitational force. Since galaxies rotate at v/c ∼ 10−3,
the effect is about 106 times too small to fix the problem.
2 Charges in Fields
[5] Problem 14.  T 1 0IPhO 1991, problem 2. A problem on the subtle relativistic “hidden momentum”.
Solution. See the official solutions. There’s a minor typo, as noted here, though it doesn’t affect
any answers. This remarkably subtle effect was discovered in the 1960s by Shockley and James;
Shockley also won a Nobel prize for the transistor. For nice further discussion, see this paper.
Idea 3: Scalar and Vector Potentials
In E1, we learned about the electric (or “scalar”) potential ϕ(x), which obeys E = −∇ϕ.
More generally, the scalar potential can depend on both space and time, as can the vector
potential A(x,t), and these two quantities yield the electric and magnetic fields by
E = −∇ϕ −
∂A
∂t
, B = ∇ × A.
Olympiad problems rarely require thinking about the vector potential, but it’s essential to
formulate the following idea.
Idea 4: Canonical Momentum
Noether’s theorem yields a conserved quantity for every symmetry. If a system is symmetric
under time translations, then its energy is conserved. Spatial translational symmetry yields
momentum conservation, and rotational symmetry yields angular momentum conservation.
We won’t prove Noether’s theorem, but we’ll illustrate it for a nonrelativistic particle of mass
m and charge q. First, if ϕ and A are both time-independent, then the conserved energy is
E =
1
2
mv2
+ qϕ.
This is quite familiar. Note that A doesn’t appear because in this case, the only role of A is
to determine the magnetic field, which does no work.
As for space-translational symmetry, if ϕ and A are both space-independent, then the con-
served momentum, called the “canonical” momentum, is
p = mv + qA.
This is less familiar, so let’s check it explicitly. Since we have assumed ϕ and A are both
space-independent, we simply have B = 0 and E = −∂A/∂t, so
dp
dt
= ma − qE = 0
16
Kevin Zhou Physics Olympiad Handouts
as desired. This tells us that qA is like a “potential momentum”, similar to how qϕ is a
potential energy. (Since the canonical momentum is such an important property, it is usually
denoted by p whenever it’s in play, while the Newtonian “mechanical”/“kinetic” momentum
is demoted to π = mv.) However, in this case, the tool of canonical momentum doesn’t tell
us much we didn’t already know.
Canonical momentum becomes useful in situations with only partial translational symmetry.
For example, suppose that ϕ and A are both independent of x, but not y and z. Then
the fields can be quite complicated, as can the particle’s motion, but px will still be conserved!
In addition, the canonical momentum is the building block used for more complex situations.
For example, if ϕ and A are both invariant under rotations about the z-axis, then
Jz = (r × p) · ẑ
is conserved. Moreover, the adiabatic invariant of M4 must be written in terms of the
canonical momentum. For example, for periodic motion along the x-axis, it is
I =
I
px dx
while for periodic circular motion in the xy plane, it is
I =
I
Jz dθ.
Finally, though all the following problems will assume the particles are nonrelativistic, the
results above go through unchanged in relativistic mechanics provided that π = mv is
replaced with the relativistic momentum γmv.
[4] Problem 15. Let’s check some of the statements made above in a simple case. Consider a situation
with zero electric field and a constant uniform magnetic field B = Bẑ.
(a) Show that this situation can be described with
ϕ = 0, A =
B
2
(xŷ − yx̂) =
Br
2
θ̂
which is symmetric under translations along the z-axis and rotations about the z-axis.
(b) The symmetries of this problem tell us that pz and Jz are conserved. Conservation of pz = πz
is obvious, because there are no forces in the z-direction. As for Jz, find an explicit expression
for it, in terms of the ordinary angular momentum Lz, B, and r.
Back in E4, we encountered IPhO 1996, problem 2, which instructs the reader to solve a tricky
problem by pulling out a magical conserved quantity; it’s just Jz. Next, let’s suppose the magnetic
field’s magnitude varies in time, corresponding to
ϕ = 0, A =
B(t)r
2
θ̂.
Of course, the changing magnetic field is accompanied by an induced electric field, as E = −∂A/∂t.
17
Kevin Zhou Physics Olympiad Handouts
(c) Suppose that B is initially equal to B0, and the particle is orbiting in a circle of radius r0
about the z-axis. The field is slowly changed to B1. What is the new radius r1 of the orbit?
(d) What if instead the field is very quickly changed to B1?
(e) Even more generally, let’s suppose the field is B = B(r,t)ẑ, which can depend on both time
and the distance r to the z-axis. Assuming the field changes slowly, find a compact expression
for Jz in terms of r, the value of B at the particle’s radius, and Bav, the average value of
B within the circle formed by the particle. This will immediately yield the answer to the
“betatron” example in E4.
Solution. (a) This follows immediately from evaluating the curl of A, either in Cartesian or
cylindrical coordinates.
(b) The z-component of the canonical angular momentum is
Jz = (r × (mv + qA)) · ẑ = Lz +
qBr2
2
.
(c) Because the field is slowly changed, the particle remains in a circular orbit centered on the
z-axis, so we can simply use the conservation of Jz to find the answer. It is
Jz = −mvr +
qBr2
2
where the minus sign is because the two contributions to Jz have opposite signs. On the other
hand, for circular motion we have mv2/r = qvB, which tells us that the two terms are simply
proportional to each other. So in this case, we just have
Jz = −
qBr2
2
and the answer to the question is
r1 = r0
p
B0/B1.
We could also have gotten to this conclusion using the adiabatic theorem, but it’s not any
different, since here I = 2πJz. And of course, you can also derive it directly using Newton’s
laws, in a manner similar to the betatron example in E4.
(d) When the field is quickly changed, the particle simply receives a sharp impulse. The final
orbit is still a circle, but it won’t be centered on the z-axis. Conservation of Jz during the
impulse gives
m∆v =
qr0 ∆B
2
=
qr0
2
(B1 − B0)
which of course can also be deduced by Newton’s laws. The final speed is
v′
=
qB0r0
m
+ ∆v =
qr0
m
B0 + B1
2
which is related to the final radius by v′ = qB1r1/m. We thus conclude
r1 = r0
B0 + B1
2B1
.
For a more challenging problem which uses similar ideas, see Physics Cup 2017, problem 3.
18
Kevin Zhou Physics Olympiad Handouts
(e) In this case, we have
Jz = −mvr + qrAθ
where Aθ is independent of θ. To evaluate this, we note that
Aθ =
1
2π
Z 2π
0
Aθ dθ =
1
2πr
I
C
A · dr =
ΦB(r)
2πr
=
r
2
Bav(r).
where C is the particle’s momentary circular orbit, and we used Stokes’ theorem and then the
definition of Bav. We still have mvr = qB(r)r2, so
Jz = qr2

−B +
Bav
2

.
If the quantity in parentheses doesn’t vanish, then conservation of Jz implies that r has to
change as the field is changed. As we found in E4 using Newton’s laws, r can stay the same
if B = Bav/2, in which case Jz simply vanishes.
