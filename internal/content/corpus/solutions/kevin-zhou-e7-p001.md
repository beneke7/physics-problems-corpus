---
id: kevin-zhou-e7-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e7-p001
solution_type: author
source_document: solution-document-kevin-zhou-e7sol
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E7Sol.pdf."
---

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
1
Kevin Zhou Physics Olympiad Handouts
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
2
Kevin Zhou Physics Olympiad Handouts
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
3
Kevin Zhou Physics Olympiad Handouts
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
4
Kevin Zhou Physics Olympiad Handouts
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
5
Kevin Zhou Physics Olympiad Handouts
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
6
Kevin Zhou Physics Olympiad Handouts
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
7
Kevin Zhou Physics Olympiad Handouts
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
8
Kevin Zhou Physics Olympiad Handouts
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
9
Kevin Zhou Physics Olympiad Handouts
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
10
Kevin Zhou Physics Olympiad Handouts
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
11
Kevin Zhou Physics Olympiad Handouts
