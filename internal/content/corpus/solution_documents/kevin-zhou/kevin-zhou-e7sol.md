---
id: solution-document-kevin-zhou-e7sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-e7-ex003, kevin-zhou-e7-p001, kevin-zhou-e7-p018, kevin-zhou-e7-p019, kevin-zhou-e7-p027]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/E7Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Electromagnetism VII: Electrodynamics
Chapter 9 of Purcell covers electromagnetic waves, and appendix H covers radiation by charges. For
a pedagogical introduction with solved examples, see recitation 8 and recitation 9 of the MIT OCW
8.03 lectures. For more technical coverage, not necessarily relevant to the Olympiad, see chapters 7,
8, 10, 11 of Griffiths. For some lighter reading, see chapters I-28, I-32, II-18, II-20, II-21, and II-24
of the Feynman lectures. There is a total of 85 points.
1 More Nonlinear Circuit Elements
In this section we consider some more subtle applications of nonlinear circuit elements. First, we
consider complex problems that use relatively familiar circuit elements.
[3] Problem 1. The setup below at left is called the Cockcroft–Walton voltage multiplier. It was used
in 1932 to power the first particle accelerator.
The four capacitors begin uncharged, and all have capacitance C. All four diodes are ideal. The
voltage Vi(t) alternates between V and −V . The output voltage is V0.
(a) To warm up, consider the simpler setup shown at right above. Suppose the applied voltage
Vi begins at −V . Describe how V0 changes each time the applied voltage switches sign.
(b) Now consider the full setup, shown at left above. After a long time, what is V0?
Solution. Since everything in this problem is ideal, the diodes let an arbitrary amount of current
through whenever the potential difference across them is positive. In other words, they make sure
the potential difference across them is zero or negative.
(a) When the applied voltage becomes −V , the potential at the right plate of C1 is lowered. This
causes current to flow through D1, until the potential of that plate is nonnegative. When the
applied voltage switches from −V to V , the potential on the right plate of C1 is raised. This
causes current to flow through D2, until the potential on the right plate of C2 is at least as
high as that on the right plate of C1. (We don’t have to worry much about the left plates;
these are connected to ground, so they just automatically pick up opposite charges to the
right plates.) Thus, the potentials on these right plates evolve as follows.
1. Vi = −V . This switches the potentials to (−V,0), which means current flows through
D1 until they are (0,0).
2. Vi = V . This switches the potentials to (2V,0). Current flows through D2 until they are
(V,V ).
1Kevin Zhou Physics Olympiad Handouts
3. Vi = −V . This switches the potentials to (−V,V ), so current flows through D1 until
they are (0,V ).
4. Vi = V . This switches the potentials to (2V,V ), so current flows through D2 until they
are (3V/2,3V/2).
The process continues similarly for more steps. The output voltage begins at zero, then
becomes V for two steps, then 3V/2, then 7V/4, then 15V/8, and so on, asymptotically
approaching 2V . So this setup is a voltage doubler.
(b) The actual sequence of events is complicated, but the full setup is essentially two copies of
the reduced setup. After a long time, the output voltage is 4V . For a neat animation of how
this works, using the fluid flow analogy for circuits, see this video.
[3] Problem 2 (NBPhO 2017). A Zener diode is connected to a source of alternating current as shown.
The inductance L of the inductor is such that LωI0 ≫ V1,V2 where V1 and V2 are the breakdown
voltages, and V1 > V2. The I(V ) characteristic of the Zener diode is shown above. Assume that a
long time has passed since the current source was first turned on.
(a) Find the average current through the inductor.
(b) Find the peak-to-peak amplitude of the current changes ∆I in the inductor.
[4] Problem 3. NBPhO 2016, problem 4. A rather complicated problem involving several exotic
circuit elements.
Next, we consider some qualitatively new behavior that can emerge from less familiar circuit elements,
such as amplification, hysteresis, and instability.
Idea 1
Tunnel diodes are a variant of diodes, whose I(V ) rises, falls, and rises again. That is, they
have a region with negative differential resistance, dI/dV < 0. This allows them to amplify
signals, as we’ll see below, and also can make them unstable.
Example 1: NBPhO 2003
The circuit below, containing a tunnel diode, acts as a simple amplifier.
2Kevin Zhou Physics Olympiad Handouts
Here, R = 10Ω and E = 0.25V. If a small signal voltage Vin(t) is applied across the input,
then an amplified and shifted version of the signal appears across the output. Find the
amplification factor.
Solution
When a constant emf E is applied, Kirchhoff’s laws give
E = I0R + V (I0)
where V (I) is the voltage characteristic of the diode.
By plotting E − IR on the graph above, we find I0 at the intersection. (Notice the x-axis
label: it is common to write a decimal point as a comma in Eastern Europe.) Now consider
the effect of applying the signal voltage, which changes the current by ∆I,
E + Vin = (I0 + ∆I)R + V (I0 + ∆I).
Since the signal voltage is small, we can Taylor expand the voltage characteristic, giving
Vin = ∆I(R + V ′
(I0)).
This in turn tells us that
Vout = (I0 + ∆I)R = V 0
out +
R
R + V ′(I0)
Vin.
3Kevin Zhou Physics Olympiad Handouts
In other words, the change in Vout is just Vin, times the amplification factor
R
R + V ′(I0)
=
10
10 − 103(0.016)
= −
5
3
where we read V ′(I0) off the graph by drawing a tangent. The intuition here is that the
circuit is like a voltage divider, but the tunnel diode acts like a negative resistance. If we
had V ′(I0) close to −R, for example, the amplification factor would have been huge. Since
V ′(I0) is more negative than −R, the signal ends up flipped.
[4] Problem 4. NBPhO 2020, problem 2. A comprehensive problem on the measurement and dynam-
ics of tunnel diodes, which will give you a deeper understanding of negative resistance.
Solution. See the official solutions as usual. For more about stabilizing circuits with negative
differential resistance, see problem 82 of Kalda’s circuits handout.
Idea 2
Op amps have four terminals, and output a voltage across the last two equal to the voltage
across the first two, times a very large gain. Like tunnel diodes, op amps can be unstable:
increasing the input increases the output, but this in turn could increase the input again.
Thus, in practice, the output and input are always wired together in a way that produces
negative feedback, with changes in the output acting to decrease the input. In this case, one
can think of an op amp as a tool that tries to set the input voltages equal to each other.
The internals are somewhat complicated, consisting of a lot of resistors and transistors. In
general, to analyze setups with multiple complex circuit elements like these, it’s better to
treat them as black boxes than to try to intuit what’s going on at the level of individual
subelements, or electric and magnetic fields. (Of course, engineers do need to understand
circuit elements at these level to design them in the first place!)
[3] Problem 5.  W 1 0USAPhO 2016, problem A2. This problem is a nice introduction to op amps.
Idea 3
In some nonlinear circuit elements, the function I(V ) is multivalued. This indicates hysteresis:
given V , the actual value of I depends on the history of the system. The same goes for when
V (I) is multivalued.
[5] Problem 6.  h 1 0IPhO 2016, problem 2. This problem illustrates the previous idea with a thyristor.
Print out the official answer sheet and record your answers on it.
4Kevin Zhou Physics Olympiad Handouts
2 Displacement Current
Idea 4
In general, Ampere’s law is
∇ × B = µ0J + µ0ϵ0
∂E
∂t
.
This is sometimes written in terms of a “displacement current” density Jd, where
∇ × B = µ0(J + Jd), Jd = ϵ0
∂E
∂t
.
In integral form, for a surface S bounded by a closed curve C,
I
C
B · ds = µ0
Z
S
(J + Jd) · dS = µ0I + µ0ϵ0
dΦE
dt
.
[2] Problem 7 (Griffiths 7.34). A fat wire of radius a carries a constant current I uniformly distributed
over its cross section. A narrow gap in the wire, of width w ≪ a, forms a parallel plate capacitor.
Find the magnetic field in the gap, at a distance s < a from the axis.
Solution. The field in that region is E = σ/ϵ0, so the displacement current density is dσ/dt =
I/(πa2), so we might as well assume that there is no gap. We see then that by Ampere’s law that
B · 2πs = µ0(s2
/a2
)I, B(s) =
µ0I
2π
s
a2
.
[3] Problem 8 (Purcell 9.3). A half-infinite wire carries constant current I from negative infinity to
the origin, where it builds up at a point charge with increasing q. Consider the circle shown below.
Calculate the integral
R
B · ds about this circle in three ways.
(a) Use the integrated form of Ampere’s law, integrating over a surface which does not intersect
the wire.
(b) Do the same, with a surface that does intersect the wire.
(c) Apply the Biot–Savart law to the current and displacement current.
5Kevin Zhou Physics Olympiad Handouts
Solution. Define coordinates such that the z axis is anti-parallel to the wire, and use spherical
coordinates (r,θ,ϕ) with respect to this choice of the z axis (we won’t need θ, so the choice of x
and y axes is unimportant).
(a) Consider the surface r = R and 0 ≤ θ ≤ θ0 where we redefine the θ in the problem to θ0.
Note that E = q
4πϵ0R2 r̂, so the displacement current at this surface is Jd = I
4πR2 r̂. We have
Z
B · ds =
Z
µ0Jd · dS
where the second integral is over the surface we just defined. Note that the surface area of
this surface is 2πR2(1 − cosθ0), so we have
Z
B · ds = µ0I
1 − cosθ0
2
.
(b) Instead use the surface θ0 ≤ θ ≤ π, and account for the current that pierces the surface. In
the end, we get
µ0I − µ0I
1 + cosθ0
2
= µ0I
1 − cosθ0
2
,
which is what we got before.
(c) Since the displacement current is spherically symmetric, it doesn’t produce any magnetic field
at all, as we saw in an example in E3. So we consider just the wire.
Note that all the contributions from the infinitesimal pieces point in the ϕ̂ direction, so we
see that the field is
B =
µ0I
4π
Z −bcotθ0
−∞
bdz
(b2 + z2)3/2
=
µ0I
4πb
Z −cotθ0
−∞
dk
(1 + k2)3/2
=
µ0I
4πb
(1 − cosθ0).
Thus, the integral is Z
B · ds =
µ0I
2
(1 − cosθ0)
just as found in the previous parts.
In the previous problem, you should have found that the effect of the displacement current, in the
Biot–Savart law, simply cancelled out everywhere. In fact, this cancellation is very general.
Idea 5
In any situation where J is constant, whether or not ρ is constant, Maxwell’s equations are
satisfied by applying Coulomb’s law to ρ and the Biot–Savart law to J. You can include
displacement currents in the Biot–Savart integral too, but their contributions perfectly cancel.
To see why, note that
∇ × Jd = ϵ0∇ ×
∂E
∂t
= ϵ0
∂
∂t
(∇ × E) = −ϵ0
∂2B
∂t2
where we used Faraday’s law. When the currents are constant, the magnetic fields
are also constant, so the right-hand side vanishes. Then ∇ × Jd = 0. However, this
6Kevin Zhou Physics Olympiad Handouts
means that Jd can always be written as a superposition of radial, spherically symmet-
ric currents, and as we saw in the previous problem, such currents produce no magnetic fields.
This explains why we were able to get away with using Coulomb’s law and the Biot–Savart
law on previous problem sets, even in situations which were not exactly electrostatic or
magnetostatic – all of these situations were “quasistatic”. In general, the displacement
current only matters in non-quasistatic situations involving rapid changes in J, and hence
rapid changes in E and B. These are exactly the cases where significant electromagnetic
radiation is produced, which is why radiation is covered in the last half of this problem set.
For more about this subtle point, see section 9.2 of Purcell, this paper and this paper.
Example 2: MPPP 190
A parallel plate capacitor is charged and positioned above a compass as shown.
The capacitor is discharged slowly when the tops of the plates are joined using a small
conducting rod. Which way is the compass needle deflected during the discharge process?
Solution
Since the discharge is slow, the situation is quasistatic. (It would only be non-quasistatic
in the case where the discharge time was comparable to the time it would take for
light to cross the capacitor, a situation which is almost never achieved for RC circuits.)
Then we know the magnetic field due to the displacement current cancels out every-
where, so only the current I in the rod matters. This current moves left to right, so by
a straightforward application of the right-hand rule, we find that the compass is deflected east.
Things get more subtle if one insists on considering the displacement current anyway. A
naive, incorrect argument would be to say that there is a total displacement current I going
right to left inside the capacitor, and since this displacement current is closer than the current
in the rod, it produces a larger magnetic field, deflecting the compass west. The problem
with this reasoning is that it has ignored the displacement current due to the changes in the
substantial fringe fields of the capacitor. When these are accounted for, the magnetic fields
due to the displacement current cancel, as argued generally above.
[3] Problem 9 (Griffiths 7.36). An alternating current I = I0 cos(ωt) flows down a long straight wire
7Kevin Zhou Physics Olympiad Handouts
along the ẑ axis and returns along a coaxial conducting tube of radius a.
(a) By neglecting displacement current, show that the electric field in the tube is
E(r) =
µ0I0ω
2π
sin(ωt)log
a
r
ẑ.
(b) Assuming this expression for the electric field holds, find the amplitude Id of the total dis-
placement current, and compute the ratio Id/I0.
(c) These results are approximately correct as long as Id/I0 ≪ 1. Show that this corresponds to
requiring that the speed-of-light travel time from the wire to the tube is much shorter than
the current’s oscillation period.
By contrast, when Id/I0 isn’t small, this solution wouldn’t be approximately correct. Instead, we
would have to consider the magnetic fields induced by the changing electric fields associated with
the displacement current, and then the displacement currents due to the changes in those magnetic
fields, and so on. The full solution would contain a propagating electromagnetic wave.
Solution. (a) Consider a rectangular Amperian loop with height z, with sides at radius r and
radius s0 > a. The electric field vanishes at the outer side, so the electric field Ez(r) obeys
Ez(r) = −
1
z
dΦB
dt
= −
1
z
d
dt
Z a
r
µ0I
2πr′
z dr′
=
µ0I0ω
2π
sin(ωt)log
a
r
,
as desired.
(b) Note that Jd(r) = ϵ0
µ0I0ω2
2π cos(ωt)log(a/r)ẑ. Thus, the amplitude is
Id =
ω2I
2πc2
Z a
0
log(a/r)2πrdr =
ω2Ia2
4c2
.
(c) The ratio goes as Id/I0 ∼ ω2a2/c2, so Id is significant once 1/ω ∼ a/c. Up to constants, these
are the period and the speed of light travel time, as desired.
By the way, you might be wondering why this problem uses a cylindrical geometry, while the
geometries of a spherical or infinite parallel-plane capacitor are more symmetric. Things go wrong
in those cases because you need some path for the current to get from one plate to the other. For
the spherical case, you can only maintain the symmetry if the current flows radially in a spherically
symmetric manner. But in such cases, the magnetic field is always just zero by symmetry and
Gauss’s law, as we argued in E3, which ruins the point of the problem. In the parallel plate case,
you could imagine the current goes from one plate to another “at infinity”, but, as we saw in a
similar problem in E1, the precise way you define what’s happening at infinity will affect the answer!
The general lesson is that cylindrical geometries are often nice for demonstrating theoretical points,
because they are infinite in one direction (so you can have the current return there) but not others
(so you can still unambiguously define the potential to be “zero far away”). In fact, as you get
further in physics, nice setups become increasingly rare, and it will often be the case that only one
setup works for demonstrating a point without technical complications.
8Kevin Zhou Physics Olympiad Handouts
[3] Problem 10. [A] Consider an infinite thin solenoid which initially carries no current, and a loop
of wire around this solenoid of enormous radius, say one light year. At some moment, a current is
suddenly made to flow through the solenoid. (This cannot be done by simply attaching a battery
somewhere, because it will take a long time for the current to turn on throughout the solenoid. So
instead, consider a situation where many batteries arranged around the solenoid are all attached in
at once, which can be achieved by machines which have synchronized their clocks beforehand.)
A magnetic field is hence quickly produced in the solenoid, so by Faraday’s law,
E = −
dΦB
dt
there should quickly be an emf in the loop of wire. But this seems to violate locality, because the
motion of charges in the solenoid is quickly affecting the motion of charges in the wire loop, which
is very far away. What’s going on? Could there be something wrong with Faraday’s law?
Solution. Faraday’s law is fine. It is completely compatible with relativity – after all, the fact that
Maxwell’s equations obey the postulates of relativity is how we discovered it in the first place!
The real resolution is that both E and ΦB remain zero for about a year. At the moment the
current is switched on, the changing current produces a pulse of outward-moving, radially symmetric
electromagnetic radiation. This radiation has a downward-pointing magnetic field and tangential-
pointing electric field. The downward-pointing magnetic field exactly cancels the flux from the
upward-pointing solenoid field, so that ΦB is exactly zero until the pulse passes by the wire. (In
terms of field lines, each magnetic field line going up through the solenoid returns downward. The
downwardly returning field lines move outward at speed c.) As the pulse passes by the wire, ΦB
starts to change. Accordingly, an emf appears at the very same moment, due to the tangential
electric field in the pulse.
So Faraday’s law is always satisfied, but in quite a subtle way! Because of subtleties like this,
people sometimes advocate teaching electromagnetism without this “flux rule”, but it really is quite
useful in practice.
[3] Problem 11 (Griffiths 7.64). [A] Setting µ0 = ϵ0 = 1, Maxwell’s equations read
∇ · E = ρe, ∇ × E = −
∂B
∂t
, ∇ · B = 0, ∇ × B = Je +
∂E
∂t
where ρe and Je are the electric charge density and electric current density.
(a) Show that Maxwell’s equations ensure the conservation of electric charge,
ρ̇e = −∇ · Je.
This is the continuity equation, and we saw versions of it for other conserved quantities in T2.
(b) Generalize Maxwell’s equations to include a magnetic charge density ρm and a magnetic
current density Jm. Fix the signs by demanding that magnetic charge is conserved.
(c) Check that the resulting equations are invariant under the duality transformation

E′
B′

=

cosθ sinθ
−sinθ cosθ

E
B

,

ρ′
e
ρ′
m

=

cosθ sinθ
−sinθ cosθ

ρe
ρm

which rotates electricity into magnetism with angle θ.
9Kevin Zhou Physics Olympiad Handouts
(d) Write down the Lorentz force law for a particle with electric and magnetic charge, using the
fact that it should be invariant under the duality transformation above.
Solution. (a) Taking the time derivative of Gauss’s law gives
ρ̇e = ∇ · Ė.
By taking the divergence of Ampere’s law, we have
∇ · (∇ × B) = ∇ · Je + ∇ · Ė.
The left-hand side vanishes, because the divergence of a curl of any vector field is always zero.
We thus have
0 = ∇ · Je + ρ̇e
as desired.
(b) Almost by definition, we will want to have ∇·B = ρm. By symmetry we want something like
∇ × E = −
∂B
∂t
± Jm.
By enforcing that the divergence of the right side is zero, we learn that it is
∇ × E = −
∂B
∂t
− Jm.
(c) The equations can be written succinctly as
∇ ·

E
B

=

ρe
ρm

.
Applying the rotation matrix to both sides shows that the Gauss’s laws are satisfied in the
primed setup. Similarly, the other two can be written as
∇ ×

E
B

=

0 −1
1 0

∂t

∂tE + Je
∂tB + Jm

.
Again, the result is clear by applying the rotation transformation.
(d) We see that F = qe(E + v × B) + qm(B − v × E). We see that
F′
= (qe cosθ + qm sinθ)[(Ecosθ + Bsinθ) + v × (Bcosθ − Esinθ)]
+ (qm cosθ − qe sinθ)[(Bcosθ − Esinθ) − v × (Ecosθ + Bsinθ)]
= qeE(cos2
θ + sin2
θ) + v × B(cos2
θ + sin2
θ)
+ qmB(sin2
θ + cos2
θ) + v × (−E)(sin2
θ + cos2
θ) = F
as desired.
10Kevin Zhou Physics Olympiad Handouts
Remark
The peculiar name of Jd is because Maxwell thought of it as a literal displacement of a
jelly-like ether. In that era, all electromagnetic quantities, such as fields, charges, currents,
polarizations, and magnetizations, were thought to reflect properties of a mechanical ether,
such as local strains, displacements, and rotations. However, making this picture precise was
known to be difficult even before the advent of relativity, which rendered ether obsolete. The
best way to understand why physicists abandoned ether models is to have a look at their
daunting complexity. For a nice overview, with diagrams, see chapter 4 of The Maxwellians.
3 Field Energy and Momentum
Idea 6
The Poynting vector
S =
E × B
µ0
gives the flux density of the energy of an electromagnetic field. That is, the flux of S into a
closed surface is the rate of change of energy within that surface.
[3] Problem 12.  m 1 0USAPhO 2010, problem B2.
[3] Problem 13.  m 1 0USAPhO 2013, problem B2.
Remark
It’s unlikely that you’ll see any examples besides the ones in the above two problems, because
in almost all other setups, the Poynting vector depends sensitively on the fringe fields, which
are very hard to calculate. (For some work in this direction, see Energy transfer in electrical
circuits: A qualitative account.) In any case, the examples above illustrate the important point
that the energy of a circuit does not flow along the wire, carried by the charges; instead it
flows into circuit elements from the sides. This was an important early clue of the importance
of the electromagnetic field.
Remark
As proven in Poynting’s theorem, the Poynting vector indeed tells us about the net flow of
energy. However, this would remain true if we added a constant vector to it, or more generally
any divergence-free vector field, since these wouldn’t change the net flow. So which option
is the “correct” one? According to everything we’ve learned so far, there’s no absolute way
to choose, and we just use the Poynting vector because it’s the simplest option. However, in
general relativity, the flow of energy directly influences the curvature of spacetime, so there
is an unambiguous correct answer, which is indeed the Poynting vector.
11Kevin Zhou Physics Olympiad Handouts
Example 3
Consider two charges q, at positions rx̂ and rŷ respectively, both moving with speed v towards
the origin. Show that the magnetic forces between them are not equal and opposite. That
is, electromagnetic forces do not obey Newton’s third law.
Solution
In order to find the B field produced by each charge at the location of the other, we use the
Biot–Savart law and the right-hand rule. Then we use the Lorentz force and the right-hand
rule again to find the magnetic forces on each charge.
For example, the B field produced by the first charge at the location of the second is along
−ẑ. Then the magnetic force on the second charge is parallel to x̂. The magnetic force on
the first charge is parallel to ŷ. And the forces are definitely nonzero, so they can’t be equal
and opposite.
To explain this, we recall that the point of Newton’s third law is just momentum conservation. This
still holds, as long as one remembers that the field carries momentum of its own. (If we want to
save some version of Newton’s third law, we could say that the real action-reaction pairs are the
forces between the charges and the field, not the charges with each other. But the real lesson is
that Newton’s third law is not fundamental, momentum conservation is.)
Idea 7
The momentum density of the electromagnetic field is
p =
S
c2
.
In other words, momentum density and energy flux density are just proportional. As you
will see in R2, this is true in general in relativity. The angular momentum density is r × p.
For an explicit derivation that these definitions ensure the total momentum and angular
momentum are conserved, see section 8.2 of Griffiths. (You might think the definitions come
out of nowhere; the straightforward way to find them is to apply Noether’s theorem, as you
will learn in a more advanced class.)
Remark
We have already seen an example of electromagnetic field momentum at work. Back in E4,
you found that in the presence of a magnetic monopole, the mechanical angular momentum
L of a point charge was not conserved, but L − qgr̂ was. In fact, this second term turns
out to be exactly the angular momentum of the field, so this conservation law is simply the
conservation of total angular momentum. (If you’d like to verify this explicitly, it’s easiest
to use spherical coordinates with the monopole at the origin and the charge along the z-axis,
but be warned, it’s fairly messy.)
[3] Problem 14 (Griffiths). A long coaxial cable of length ℓ consists of an inner conductor of radius
a and an outer conductor of radius b. The inner conductor carries a uniform charge per unit length
12Kevin Zhou Physics Olympiad Handouts
λ, and a steady current I to the right; the outer conductor has the opposite charge and current.
(a) Find the electromagnetic momentum stored in the fields.
(b) In part (a) you should have found that the fields contain a nonzero momentum directed along
the cable. However, this is puzzling because it appears that no net mass is transported along
the cable. How is this paradox resolved? (Hint: it doesn’t make sense to consider the cable in
isolation, as nothing would be keeping the current going. Consider attaching a battery across
the left end and a resistor across the right end.)
Solution. (a) Set up the obvious cylindrical coordinates, with ẑ directed to the right. In between
the tubes the fields are
E =
1
2πϵ0
λ
s
ŝ, B =
µ0
2π
I
s
ϕ̂,
and they are zero everywhere else. Therefore, the momentum is
R
ϵ0(E × B)dV or
p = ẑ
µ0Iλ
4π2
Z b
a
1
s2
ℓ2πsds =
µ0Iλℓ
2π
log(b/a)ẑ.
(b) As this process goes on, the battery loses energy and the resistor gains energy (i.e. heats
up). Since E = mc2, that means the resistor is gaining mass while the battery is losing mass.
Thus, the momentum reflects the fact that the center of mass of the system is going to the
right. (This is a concrete example of the statement of idea 7, i.e. that momentum is always
accompanied by the flow of energy.)
You might also wonder about the momentum and kinetic energy carried by the electrons
themselves; however, as described in a remark at the end of E5, for typical circuits this is
negligible compared to the momentum and energy carried by the fields.
[3] Problem 15. In the early 20th century, physicists sought to explain the E = mc2 rest energy in
terms of electromagnetic field energy. As a concrete example, model a charged particle as a uniform
spherical shell of radius a and charge q.
(a) Find the radius a so that the total field energy equals the rest energy associated with the
electron mass m. Up to an O(1) factor, this quantity is called the classical electron radius.
(b) If the shell moves with a small speed v, we expect to have p = mv, where p is the total field
momentum. Show that instead, we have p = (4/3)mv. You may use the result
B =
v
c2
× E
which we will prove in R3. Many complicated ideas were put forth to explain this infamous
“4/3 problem”, as recounted in chapter II-28 of the Feynman lectures.
For more about the “radius” of an electron, see this blog post. For a modern discussion of the
resolution of the 4/3 problem, see this paper.
Solution. (a) The electrostatic energy of a uniform spherical shell of radius a is
U =
1
2
qV =
q2
8πϵ0a
where the factor of 1/2 avoids double counting the energy. Setting U = mc2 gives
a =
q2
8πϵ0mc2
.
13Kevin Zhou Physics Olympiad Handouts
(b) Note that
S =
1
µ0
E × (v × E)/c2
.
Set up spherical coordinates where v ∥ ẑ. Letting k = 1/(4πϵ0), we then have
Z
E × (v × E)dV =
Z
v(E2
) − E(v · E)

dV
= (kq)2
ẑ
Z ∞
a
Z π
0
Z 2π
0

v/r4
− v cos2
θ/r4

r2
sinθdϕdθdr
= 2π(kq)2
v
Z ∞
a
1
r2
Z π
0
(sinθ − cos2
θsinθ)dθdr
= 2π(kq)2
v
Z ∞
a
4
3
dr
r2
=
8
3
(kq)2πv
a
.
The momentum is then
p =
1
c4µ0
8
3

q
4πϵ0
2
πv
a
=
4
3
1
c2
q2
8πϵ0a
v =
4
3
mv
as stated.
[3] Problem 16 (Griffiths 8.6). A charged parallel plate capacitor is placed in a uniform magnetic
field as shown.
(a) Find the electromagnetic momentum in the space between the plates.
(b) Now a resistive wire is connected between the plates, along the z-axis, so that the capacitor
slowly discharges. The current through the wire will experience a magnetic force; show the
total impulse equals the stored momentum.
(c) Alternatively, suppose we slowly reduced the magnetic field. Show that the total impulse
delivered to the plates equals the stored momentum.
This calculation is standard and given in many textbooks, but it is actually completely wrong: we
have ignored the fringe field, and when it is included the total electromagnetic momentum is half
of what was naively calculated in part (a). The answer in part (b) is correct, but the other half of
the impulse corresponds to a change in non-electromagnetic “hidden momentum”. The most basic
example of hidden momentum is covered in example 12.12 of Griffiths. For a detailed analysis of
the hidden momentum in this setup, see this paper.
14Kevin Zhou Physics Olympiad Handouts
Solution. (a) Using the standard formula,
p = ϵ0(E × B)Ad = ϵ0EBAdŷ.
(b) If Q′ is the charge on the plates at any given moment, the impulse j is
j =
Z ∞
0
I(ℓ × B)dt = −(dŷ)
Z 0
Q
B dQ′
.
Performing the integral, the total impulse is
j = BQdŷ = ϵ0EBAdŷ
in agreement with part (a).
(c) By Faraday’s law, a nonconservative electric field is generated in the setup, which pushes
the plates with a net force. Note that when the situation is symmetric, the electric field is
E′ = (1/2)Ḃdŷ at the bottom plate, and −E′ at the top plate. So the total impulse is
j =
Z ∞
0
(QE′
) + ((−Q)(−E′
))dt =
Z ∞
0
ḂQdŷdt = BQdŷ = ϵ0EBAdŷ
in agreement with parts (a) and (b). The answer is the same if the setup were asymmetric,
i.e. if the fields had been E′ + E0 and −E′ + E0 at the top and bottom plates, because E0
would not contribute to the net force.
[3] Problem 17.  m 1 0USAPhO 2004, problem B2. (The official solution is off by a sign in the last
part. This classic setup also appears on USAPhO 2020, problem A1, and INPhO 2020, problem 2.
However, the official solution to USAPhO 2020, problem A1 has factor of 2 errors.)
4 Electromagnetic Waves
Idea 8
Maxwell’s equations have propagating wave solutions of the form
E = E0ei(k·r−ωt)
, B = B0ei(k·r−ωt)
where E and B are in phase, perpendicular in direction, and have magnitudes E0 = cB0.
The propagation direction k is along E × B, and the wave speed is
c =
ω
k
=
1
√
µ0ϵ0
.
Example 4
Verify explicitly that in the absence of charges and currents, the electromagnetic field above
satisfies Maxwell’s equations.
15Kevin Zhou Physics Olympiad Handouts
Solution
First let’s consider Gauss’s law, ∇ · E = 0. Splitting everything explicitly into components,
∇ · E = e−iωt

∂
∂x
(E0,xeik·r
) +
∂
∂y
(E0,yeik·r
) +
∂
∂z
(E0,zeik·r
)

= e−iωt

E0,x
∂
∂x
eik·r
+ E0,y
∂
∂y
eik·r
+ E0,z
∂
∂z
eik·r

= ei(k·r−ωt)
(iE0,xkx + iE0,yky + iE0,zkz)
= ik · E = 0
since k is perpendicular to E0. This is another example of a lesson we saw in M4. Namely,
when everything is a complex exponential, differentiation is very easy. For an complex
exponential in time, eiωt, differentiation with respect to time is just multiplication by iω.
Similarly, for a field which is a complex exponential in space, eik·r, the divergence (∇·)
becomes (ik·).
By similar reasoning, Gauss’s law for magnetism is satisfied. Next, we check Ampere’s law,
∇ × B = µ0ϵ0
∂E
∂t
.
By the same logic as above, the curl becomes (ik×), while the time derivative becomes
multiplication by −iω, giving
ik × B = (−iω)µ0ϵ0E.
Because k, E, and B are all mutually perpendicular, the directions of both sides match. Then
all that remains is to check the magnitudes,
kB0 = ωµ0ϵ0E0.
By plugging in results from above, this reduces to
c2
=
1
µ0ϵ0
which matches what we said above. (Or, if we didn’t know what c was, this logic would
have been a way to derive it, as Maxwell did.) The verification of Faraday’s law is similar.
Note that the displacement current term was essential; it wouldn’t have been possible to get
electromagnetic wave solutions without it.
[3] Problem 18. Consider the energy and momentum of the electromagnetic wave in idea 8.
(a) Show that the spatial average of the energy density is ϵ0E2
0/2. (Be careful with factors of 2.)
(b) Compute the spatial average of the momentum density ⟨p⟩ using idea 7.
(c) Confirm that E = pc for an electromagnetic wave.
Solution. The key pitfall here is that we have to take into account the fact that for all nonlinear
quantities such as these, we need to look only at the real part of the above formulas.
16Kevin Zhou Physics Olympiad Handouts
(a) The energy is u = 1
2ϵ0
(E2 + c2B2). The average value of E2 is E2
0/2 by the usual cos2(kx)
averaging trick, and the average value of B2 is B2
0/2. There are two terms, so the average of
their sum is ϵ0E2
0/2.
(b) It’s ⟨ϵ0E × B⟩. Again the product has the spatial form cos2(kx), so the averaging over space
gives a factor of 1/2, giving ϵ0E2
0/2c.
(c) This is equivalent to showing that the energy density is equal to the momentum density times
c, which is indeed true from our results above.
[3] Problem 19. The intensity of sunlight at noon is approximately 1kW/m2.
(a) Compute the rms magnetic field strength.
(b) Compute the radiation pressure acting on a mirror lying on the ground.
(c) In terms of the Lorentz force, how is this pressure exerted on the particles in the mirror?
Solution. (a) Note that the intensity is the Poynting vector. We have ⟨S⟩ = c
µ0
B2
rms, so
Brms ≈ 2 × 10−6
T.
(b) We get a factor of 2 because the radiation bounces off the mirror, giving
P =
2S
c
= 7 × 10−6
Pa.
(c) The basic idea is that the particles are accelerated in the direction of E, and thus feel a force
in the direction (v × B) ∥ (E × B) ∥ S.
However, making this more quantitative is more subtle. For an ideal free particle, a is in
phase with E, which means v is 90◦ out of phase with E. Since B is in phase with E, the
magnetic force v×B has time dependence of the form cos(ωt)sin(ωt), which averages to zero.
On the other hand, suppose the particle is attached to a damped harmonic oscillator, and ω
is at the resonant angular frequency. Then from M4 results, v is instead in phase with E,
which means the magnetic force has time dependence cos2(ωt), which doesn’t average to zero.
The point is, you need some kind of other force at play to produce a phase shift between a and
E, or else the force averages to zero. And this makes perfect sense from an energy conservation
standpoint: a nonzero average force means momentum is taken out of the radiation, which
means part of it is absorbed. This is only possible if the absorbed energy goes somewhere
else, e.g. in the damped harmonic oscillator case it is dissipated by the damping force.
This raises yet another question: how it is possible for an isolated charge to scatter radiation,
in Thomson or Compton scattering? The reason is that there is another force at play, namely
the radiation reaction force acting on the particle. You can read more about this subtle force
in section 11.2 of Griffiths.
[3] Problem 20 (Purcell 9.7). Consider the sum of two oppositely-traveling electromagnetic waves,
with electric fields
E1 = E0 cos(kz − ωt)x̂, E2 = E0 cos(kz + ωt)x̂.
17Kevin Zhou Physics Olympiad Handouts
(a) Write down the magnetic field.
(b) Draw plots of the energy density U(z,t) for ωt ∈ {0,π/4,π/2,3π/4,π}.
(c) Plot the Poynting vector for the same values of ωt, and convince yourself that it describes
how the energy sloshes back and forth.
Solution. (a) The answer is
B =
E0
c
(cos(kz − ωt) − cos(kz + ωt))ŷ =
2E0
c
sin(kz)sin(ωt)ŷ.
(b) For the purposes of the following plots and calculations, we set k = ω = E0 = B0 = c = µ0 =
ϵ0 = 1. In these units, we have E = cos(z − t) + cos(z + t) = 2cos(z)cos(t) and therefore
U = (E2 + B2)/2 = 2(sin2
(z)sin2
(t) + cos2(z)cos2(t)). Plotting this gives
−π π
1
2
ωt = 0
z
−π π
ωt = π/4
−π π
ωt = π/2
−π π
ωt = 3π/4 U
for 0, π/4, π/2, and 3π/4 respectively, while the result for π is the same as for 0.
(c) The Poynting vector is proportional to sin(z)cos(z)sin(t)cos(t)ẑ, which is in turn proportional
to sin(2z)sin(2t)ẑ. The plot of this at the same times as above is:
−π π
−1
1
ωt = 0
z
−π
ωt = π/4
π
−π π
ωt = π/2
π
ωt = 3π/4
−π
Sz
Idea 9: Larmor Formula
An accelerating charge produces electromagnetic radiation, with power
P =
q2a2
6πϵ0c3
.
We’ll derive it properly in R3, but a lot of it can be motivated with the techniques of P1.
The power could only depend on q, ϵ0, µ0, and properties of the particle’s motion. The
only combinations of the first three parameters that get rid of the electromagnetic units
are q2/ϵ0 and 1/
√
ϵ0µ0 = c. Since energy is proportional to the electric and magnetic
fields squared, and these fields are proportional to q, the answer must be proportional to q2/ϵ0.
Radiation can’t result from uniform velocity, by Lorentz invariance; another way to see this
is that with only v and c, there is no way to write down an expression for power with the
right units! The next simplest option is radiation from acceleration, from which the most
general result is P = (q2a2/ϵ0c3)f(v/c). The fact that acceleration is squared is also natural,
18Kevin Zhou Physics Olympiad Handouts
because acceleration is a vector, so this is the simplest way to get a rotationally invariant
result. The proper derivation shows that f(0) = 1/6π. When v/c is substantial, there are
relativistic corrections, which we will consider in R3.
[2] Problem 21 (Purcell H.2). A common classical model of an electron in an atom is to imagine
it is a mass on a spring, where the spring force is due to the atomic nucleus. Suppose that such
an electron, with charge e, is vibrating in simple harmonic motion with angular frequency ω and
amplitude A.
(a) Find the average rate of energy loss by radiation.
(b) If no energy is supplied to make up the loss, how long will it take the oscillator’s energy to
fall to 1/e of its initial value?
Numerically, this is an extremely small time, so classical models of the atom are not realistic. We
will see in X1 that in quantum mechanics this problem is solved because in the ground state the
electron does not move around the atom, but rather occupies a standing wave.
Solution. (a) The average value of a2 is A2ω4/2, giving
⟨P⟩ =
e2A2ω4
12πϵ0c3
.
(b) If m is the mass of the electron, then the energy of the system is E = 1
2mω2A2. We see that
Ė = −
e2ω4
12πϵ0c3
2
mω2
E = −
e2ω2
6mπϵ0c3
E.
This is an exponential decay, with characteristic time
t =
6mπϵ0c3
e2ω2
.
[3] Problem 22 (Purcell H.3). A plane electromagnetic wave with angular frequency ω and electric
field amplitude E0 is incident on an atom. As in problem 21, we model the electron as a simple
harmonic oscillator, with mass m and natural angular frequency ω0.
(a) First suppose that ω ≫ ω0. Argue that in this case, the “spring” force on the electron can be
neglected. Find the average power radiated by the electron, and show that it is equal to the
power incident on a disc of area
σ =
8π
3

e2
4πϵ0mc2
2
.
This is the Thomson scattering cross section. To an electromagnetic wave, each electron looks
like it has this area.
(b) Now suppose ω ≪ ω0, yielding Rayleigh scattering, which describes the scattering of visible
light by air. In this case, show that σ ∝ ω4. This sharp frequency dependence explains why
the sky is blue.
19Kevin Zhou Physics Olympiad Handouts
(c) Explain the meaning of the common phrase “red sky at night, sailor’s delight; red sky in
morning, sailor’s warning”. (Hint: in the cultures where this saying is used, weather patterns
usually move from west to east.)
For some further discussion of Rayleigh scattering, see section 9.4 of The Art of Insight. For more
about colors in the atmosphere, see this nice video.
Solution. (a) As seen in M4, the amplitude of a driven harmonic oscillator is
A =
F0/m
p
(ω2
0 − ω2)2 + (bω/m)2
.
Here, b = 0 and since ω ≫ ω0, we have A = eE0/mω2. Putting this into our answer in part
(a) of the previous problem gets
⟨P⟩ =
e2ω4
12πϵ0c3
e2E2
0
m2ω4
=
e4E2
0
12πϵ0m2c3
.
Since for electromagnetic radiation, ⟨S⟩ = 1
2ϵ0cE2
0 so ⟨P⟩ = σ⟨S⟩, we can put this in the above
expression to get
σ =
e4E2
0
12πϵ0m2c3
2
ϵ0cE2
0
=
8π
3

e2
4πϵ0mc2
2
.
(b) Now, our expression for A will be eE0/mω2
0, which modifies the answer to
σ =
8π
3

e2
4πϵ0mc2
2
ω4
ω4
0
.
In other words, higher frequencies are scattered much more. The atmosphere scatters most
of the blue light from the Sun, and some of it hits your eyes, making the sky look blue.
You might wondering why the sky doesn’t look violet, because the spectrum of the sky actually
peaks in the violet range. It has to do with the physiology of human color vision. Your eyes
contain three types of “cones”, which are most sensitive to blue, green, and red. To detect
color, your brain looks at how much each cone is excited. Referring to the graphic here, pure
blue light excites the blue cone a lot, and the green and red cones a little. Pure violet light
excites the blue cone a moderate amount, doesn’t excite the green cone, and excites the red
cone a small amount, due to a quirk of physiology. (That’s why the color wheel wraps around,
so that violet ends up feeling similar to red, even though they’re as far apart in wavelength
as possible.) When you account for the total excitation of the cones, due to the full spectrum
of the sky, the net result is that the blue cone is excited a lot, and the green and red cones
are each excited a little, so the result looks blue.
(c) See this nice explanation for details.
[3] Problem 23.  m 1 0USAPhO 2016, problem B2.
20Kevin Zhou Physics Olympiad Handouts
Remark
We noted in M7 that clouds are visible because the radiation scattered by a small droplet of
n water molecules grows as n2. To understand why, note that each of the molecules performs
independent Rayleigh scattering, as computed above. For separated molecules, the energy
scattered just adds. However, for nearby molecules the electromagnetic waves scattered
interfere constructively, so the amplitude grows as n and hence the energy scattered as n2.
This quadratic enhancement breaks down once the droplets exceed the wavelength λ of the
light. This means the maximum possible enhancement is larger for larger wavelengths, acting
against the ω4 dependence of Rayleigh scattering. This is why clouds are white, not blue.
Radiation pressure can also have mechanical effects.
Example 5: NBPhO 2018.6
A laser pointer of power P is directed at a glass cube, with refractive index n >
√
2. The
surface of the cube has an anti-reflective coating, so there is no partial reflection when light
enters or exits it; the laser pointer only refracts. What is the maximum force the laser pointer
can exert on the cube?
Solution
The force is due to a change in momentum of the light. The greatest possible force is attained
if the direction of the light is reversed, which can occur as shown, in the limit α → 90◦.
Assuming n >
√
2, we then have θr < 45◦, and then the laser internally reflects when it hits
the top surface of the cube. It exits in the opposite direction it came in.
If the laser pointer has power P, then the momentum of the laser beam per time is P/c. The
momentum is reversed, so the force is 2P/c.
[3] Problem 24 (IZhO 2022). In 2018, the Nobel Prize in physics was awarded to Arthur Ashkin
for the creation of the “laser tweezer”, a device that allows one to hold and move transparent
microscopic objects with the help of light. In one such device, a parallel beam of light from a laser
21Kevin Zhou Physics Olympiad Handouts
passes through a converging lens L and hits a microparticle M, which can also be considered a
converging lens. Point F is the common focus of L and M.
The light intensity in the beam is I = 1.00µW/cm2, the beam radius is R = 1.00cm, and the focal
length of the lens L is F = 10.0cm. Ignore the absorption and reflection of light.
(a) Calculate the force acting on the microparticle, in the setup shown at left above.
(b) Next, the left half of the lens L is covered by a diaphragm, as shown at right above. Calculate
the force acting on the microparticle in the transverse direction of the beam.
Solution. See the official solutions of IZhO 2022.
[3] Problem 25 (Feynman). In one proposed means of space propulsion, a spaceship of mass 103 kg
carries a thin sheet of area 100m2. The sheet is made of highly reflective plastic film, and can be
used as a solar radiation pressure “sail”. The spaceship travels in a circular orbit of radius r, which
is initially equal to the Earth’s orbit radius, where the intensity of sunlight is 1400W/m2. Assume
the spaceship is moving nonrelativistically and the gravitational effect of the Earth is negligible.
(a) Find the angle at which the sail should be pointed to maximize dr/dt.
(b) Assuming the sail is pointed this way, find the numeric value of dr/dt.
(c) If this continues for a very long time, then r will grow as r ∝ tn. Find the value of n.
Solution. (a) Since E = −GMm/2r, increasing radius as fast as possible is the same as imparting
the most energy to the spaceship; in other words, we want to maximize F · v. The velocity
is almost purely tangential, so only the tangential component of the force contributes to the
power.
Let the normal vector of the sail be at an angle θ to the radial direction. To find the net
force on the sail, we can think of the reflection process in two steps: absorbing the light and
reemitting it. Absorbing the light yields an outward radial force F. Reemitting it yields a
force F of the same magnitude, directed at an angle 2θ to the radial direction.
Only the second force can contribute to the power, so
P = F · v = Fv sin2θ.
Finally, since the radial area covered by the sail is Acosθ, we have F = I(Acosθ)/c, so
P =
2IAv
c
sinθcos2
θ.
22Kevin Zhou Physics Olympiad Handouts
Setting the derivative to zero, the maximum is at θ = sin−1
(1/
√
3) = 35.3◦, giving power
Pmax = β
IAv
c
, β =
4
3
√
3
≈ 0.77.
Strictly speaking, the answer is very slightly different, by corrections of order v/c, since the
spaceship is moving, but we’ll neglect this here.
(b) The power is
P =
dE
dt
=
GMm
2r2
dr
dt
.
We also know from force balance that
GMm
r2
=
mv2
r
since the radial force from the sail is negligible, and combining these results gives
dr
dt
=
βIA
c
2r
mv
=
2βIA
mωc
where ω = 2π/(1year) is the angular velocity of the Earth. Plugging in the numbers gives
dr/dt = 3.6m/s.
(c) We have
dr
dt
∝
Ir
v
∝
(1/r2)r
1/
√
r
=
1
√
r
.
Separating and integrating gives t ∝ r3/2 in the long run (i.e. when the contribution from the
initial condition is negligible), so n = 2/3.
Finally, we’ll consider electromagnetic wave propagation in transmission lines.
[4] Problem 26 (Griffiths 7.62, Crawford 4.8). A certain transmission line is constructed from two
thin metal ribbons, of width w, a very small distance h ≪ w apart. The current travels down one
strip and back along the other. In each case it spreads out uniformly over the surface of the ribbon.
(a) Find the capacitance per unit length C, and the inductance per unit length L.
(b) Argue that the speed of propagation of electromagnetic waves through this transmission line
is of order 1/
√
LC, and evaluate this quantity.
(c) Repeat the first two parts for a coaxial transmission line, consisting of two cylinders of radii
a < b with the same axis of symmetry.
(d) Repeat the first two parts for a parallel-wire transmission line, consisting of two wires of radius
r whose axes are a distance D ≫ r apart.
You should find that in all cases, 1/
√
LC is the same, yielding the same speed for electromagnetic
waves. This actually holds for transmission lines with conductors of any shape, though the general
proof requires some vector calculus.
Solution. Suppose the length is ℓ.
23Kevin Zhou Physics Olympiad Handouts
(a) We have C = ϵ0wℓ/h, so C = ϵ0w/h. Similarly, L = µ0h
w ℓ, so L = µ0h/w.
(b) The timescale to propagate a unit length is 1/
√
LC, which means the typical speed is 1/
√
LC.
This also follows from dimensional analysis.
(c) The capacitance of two coaxial cylinders can be found by giving the inner cylinder a charge
Q and using C = Q/V , where
V =
Z
E ds =
Z b
a
(Q/ℓ)
2πϵ0r
dr =
Q/ℓ
2πϵ0
log(b/a)
and therefore
C =
2πϵ0
log(b/a)
.
To find the inductance for a transmission line setup, the current will flow parallel to the axis,
so by Ampere’s law the field inside the region is B = µ0I/2πr, and using L = Φ/I where Φ
will be the flux going around the inner cylinder will give
Φ =
Z b
a
ℓ
µ0I
2πr
dr =
µ0Iℓ
2π
log

b
a

and therefore
L =
µ0
2π
log

b
a

.
Thus we get 1/
√
LC = c.
(d) The capacitance can be foundsimilarly (factors of2 appearbecause the negative charge/opposing
current will contribute to the E and B fields too),
V =
Z D
r
2Q/ℓ
2πϵ0r
dr, C =
πϵ0
log(D/r)
.
ΦB =
Z D
r
2µ0I
2πr
dr, L =
µ0
π
log

D
r

.
This gives 1/
√
LC = c.
[4] Problem 27. In this problem, we treat electromagnetic wave propagation through a transmission
line using a “lumped element” approach, where the line is replaced with discrete capacitors and
inductors, as shown. (This is an example of a network synthesis, mentioned in E6.)
(a) Calculate the characteristic impedance Z0(ω) of the entire network, as shown below.
L/2 L/2 L/2 L/2
C C V0 ··· = Z0 V0
24Kevin Zhou Physics Olympiad Handouts
(b) The diagram below shows two adjacent sections of the ladder.
··· ···
In In+1
Vn Vn+1
Find the ratio of the complex voltage amplitudes Vn+1/Vn.
(c) The AC driving attempts to create electromagnetic waves which travel through the network,
to the right. It turns out that above a certain critical angular frequency ωc, waves will not
travel through the ladder network. Find ωc. (Hint: this can be done using either the result of
part (a) or part (b).)
(d) For angular frequencies ω ≪ ωc, waves travel through the ladder with a constant speed. Find
this speed, assuming each segment of the ladder has physical length ℓ. (Hint: the speed of a
wave obeys v = dω/dk.)
(e) You should have found in one of the earlier parts that the impedance of this infinite network
can be a real number, even though it’s made of parts which all have imaginary impedance.
That sounds strange, but what’s even stranger is that we should be able to handle this infinite
circuit by taking the limit of progressively larger finite circuits, just as we did for a similar
network of resistors in E2. But for any finite LC network, the impedance will be imaginary,
so the limit must be imaginary too! On one hand, we should trust the finite result because
all real circuits are finite. On the other hand, the real impedance we get for the infinite result
certainly can be measured in real life. So what’s going on?
Solution. (a) The impedance of the infinite ladder doesn’t change if we add another unit onto
the left. Let the inductor have impedance Z1/2 and let the capacitor have impedance Z2.
Then
Z1
2
+
1
1
Z2
+ 1
Z1/2+Z0
= Z0
which can be solved to give
Z0 =
p
(Z1/2)2 + Z1Z2.
Since we have Z1 = iωL and Z2 = 1/iωC, we have
Z0 =
r
L
C
−
ω2L2
4
.
(b) Each segment sees an impedance Z0 to its right, so
Vn = InZ0, Vn+1 = In+1Z0.
On the other hand, we also have
Vn − Vn+1 =
InZ1
2
+
In+1Z1
2
and solving these equations yields
Vn+1
Vn
=
Z0 − Z1/2
Z0 + Z1/2
=
p
L/C − ω2L2/4 − iωL/2
p
L/C − ω2L2/4 + iωL/2
=
p
4/ω2LC − 1 − i
p
4/ω2LC − 1 + i
.
25Kevin Zhou Physics Olympiad Handouts
(c) First we’ll find the critical angular frequency using part (b). When the square root is a real
number, the numerator and denominator have equal magnitudes, so |Vn+1| = |Vn|, indicating
wave propagation. When the square root is imaginary, the wave instead exponentially decays.
The cutoff is when
4/ω2
LC − 1 = 0
which gives
ωc =
2
√
LC
.
To derive the same conclusion using the result of part (a), note that the impedance Z0 becomes
real when ω < 2/
√
LC. How could one get a real impedance, which signals energy loss, if
there are no resistors anywhere in the circuit? It can only happen if the driver can create
electromagnetic waves, which then propagate through the network; since the network is infinite,
this energy never returns to the driver. Because waves can appear for ω < 2/
√
LC, we again
conclude that ωc = 2/
√
LC.
(d) In this limit, we have
Vn+1
Vn
≈
2/ω
√
LC − i
2/ω
√
LC + i
and so across each unit, there is a phase shift of
δ = ω
√
LC.
Since wavenumber is phase shift per distance, k = δ/ℓ = ω
√
LC/ℓ, which means
v =
dω
dk
=
ℓ
√
LC
.
That is, waves in a transmission line travel with a constant speed, as we already found in
problem 26. If we further plug in the L and C found in that problem, we would recover the
speed of light.
(e) For an ideal, finite LC network, the finite result is perfectly correct: the impedance is pure
imaginary. The network can’t absorb net energy, because in the steady state energy propagates
through the network, bounces off the other end, and comes back to the voltage source. However,
when we’re using transmission lines in practice, we put a load on the other end (i.e. a resistance)
that absorbs the incoming wave. This introduces a real impedance to the finite circuit, and
the limiting procedure works just fine, recovering a real impedance in the infinite limit.
But mathematically, in the infinite network analysis, we never needed to use the fact that a
real impedance was at the end, because there was no end. You get the infinite network either
by taking the limit of finite LC circuits, or by taking the limit of finite LC circuits terminated
by a resistor, so how do we mathematically choose which limit gives the right answer?
The resolution is that the former limit does not even exist: as the size of the LC network is
increased, the impedance keeps bouncing around, never settling down to a limit. Physically,
this is because the total length of the network is changing, which changes the phase shift
of the wave once it gets back to the voltage source. It’s analogous to trying to compute
lima→∞
Ra
0 eix dx.
26Kevin Zhou Physics Olympiad Handouts
To make the limit well-defined, we must introduce resistances. For example, we could add
a small resistance ∆r to every inductor, which is also perfectly realistic. Now the waves
gradually decay away, and in the infinite limit we get some impedance Z(∆r,ω). Finally,
taking the limit ∆r → 0 recovers the infinite result we derived earlier. It’s precisely the same
result as taking the infinite limit of LC networks terminated by resistors. We could also get
the same result by giving the capacitors the small resistance.
The general lesson is that in physics, the real world supplies “regulators” that make the
seemingly undefined limits well-defined. The miracle is that quite often, after we compute the
answer, we can remove the regulator to get a result that doesn’t depend on the regulator at all!
This is surprising to the mathematician, but natural to the physicist: it means the observable
behavior of real objects, which always come with many imperfections, doesn’t depend on the
fine details of how we choose to model them.
27
