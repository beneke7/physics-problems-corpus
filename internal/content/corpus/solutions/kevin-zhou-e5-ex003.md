---
id: kevin-zhou-e5-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e5-ex003
solution_type: author
source_document: solution-document-kevin-zhou-e5sol
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E5Sol.pdf."
---

Example 3
A flat metal spiral, with a constant distance h between coils, and N ≫ 1 total turns is placed
in a uniformly growing magnetic field B(t) = αt perpendicular to the plane of the spiral.
Find the emf induced between points A and C.
Solution
In theory, you can imagine connecting A and C and finding the flux through the resulting
loop, but this is hard to visualize. A better way is to imagine turning the spiral into N
concentric circles, connected in series. Then the emf is the sum of the emfs through each,
E =
N X
k=1
π(kh)2
α ≈ πh2
α
Z N
0
dkk2
=
π
3
h2
N3
α.
To see why this is valid, remember that the emfs are due to a nonconservative electric field,
integrated along the length of the loop. Deforming it into a bunch of concentric circles doesn’t
significantly change E·ds along it, because N is large, so it doesn’t change the answer much.
9
Kevin Zhou Physics Olympiad Handouts
Remark: EMF vs. Voltage
We mentioned earlier in E2 that we often care about electromotive forces, which just
mean any forces that act on charges to push them around a circuit. The force due to a
nonconservative electric field is another example.
When nonconservative electric fields are in play, the idea of “voltage” breaks down entirely,
because you can’t define it consistently. However, electrical engineers use a more pragmatic
definition of voltage: to them, voltage is just whatever a voltmeter displays. In other words,
what they call voltage is what we call electromotive force. This tends to lead to long and bitter
semantic disputes, along with rather nonintuitive results, as you’ll see below. For example, the
“voltage” can be different for different voltmeters even if they are connected at the same points!
Despite this trouble, we’ll go along with the standard electrical engineer nomenclature and
refer to these emfs as voltages in later problem sets. For example, Kirchhoff’s loop rule should
properly say that the sum of the voltage drops along a loop is not zero, but rather −dΦ/dt.
But it is conventional to move it to the other side and call it a “voltage drop” of dΦ/dt.
Remark
When we apply Faraday’s law, we often use Ampere’s law (without the extra displacement
current term) to calculate the magnetic field. This is not generally valid, but works if the
currents are in the slowly changing “quasistatic” regime, which means radiation effects are
negligible. All the problems below assume this, but we’ll see more subtle examples in E7.
[2] Problem 8 (Purcell 7.6). An infinite cylindrical solenoid has radius R and n turns per unit length.
The current grows linearly with time, according to I(t) = Ct. Assuming the electric field is
cylindrically symmetric and purely tangential, find the electric field everywhere.
Solution. Note that B = µ0nI in the solenoid, so that the flux through a loop of radius r varies as
dΦB
dt
= µ0nCπ ×
(
r2 r < R
R2 r > R
.
By assumption, the electric field is
E = E(r)ϕ̂
and the emf is 2πrE, so we conclude
E(r) =
1
2
µ0nC ×
(
r r < R
R2/r r > R
.
Note that we had to assume E = E(r)ϕ̂. It’s impossible to derive that from Maxwell’s equations,
because it’s not true in general; as discussed in E1, you can get different results if you had different
boundary conditions (such as the solenoid being inside a giant capacitor) or different initial conditions
(such as somebody shining electromagnetic radiation on the solenoid using a flashlight). But this is
the solution you get if none of that “extra” stuff is around.
10
Kevin Zhou Physics Olympiad Handouts
[2] Problem 9 (Purcell 7.4). Two voltmeters are attached around a solenoid with magnetic flux Φ.
Find the readings on the two voltmeters in terms of dΦ/dt, paying attention to the signs.
Solution. Let the resistance of each resistor be R. The current in the center loop with the two
resistors is I0 = (dΦ/dt)/(2R), and the emf across each resistor is E0 = I0R = (1/2)dΦ/dt.
Each voltmeter is connected across one resistor. Now consider the loop formed by one voltmeter’s
wires, and the half of the center loop closest to it. Neither of these loops encloses the solenoid, so
the integral of E · ds around each of them is zero. Thus, the emf across the resistor is balanced by
the emf across the voltmeter, so each voltmeter reads ±E0.
The subtlety is in the signs. Suppose that dΦ/dt is positive, as indicated in the diagram. Then
the induced current in the top resistor is rightward, which means the right end of the resistor is at
lower potential, which means the top voltmeter reads −E0. But the induced current in the bottom
resistor is leftward, so by similar reasoning, the bottom voltmeter reads E0. So different voltmeters,
with the same probes connected at the same points, can give different results!
[2] Problem 10 (Purcell 7.28). [A] Consider the loop of wire shown below.
Suppose we want to calculate the flux of B through this loop. Two surfaces bounded by the loop
are shown above. Which, if either, is the correct surface to use? If each of the two turns in the loop
are approximately circles of radius R, then what is the flux? Generalize to an N-turn coil.
Solution. Remember that in the definition of the magnetic flux, one needs to define a normal
vector dS. This is arbitrary, since for any point on a surface there are two normal vectors which
point in opposite directions. Applying Faraday’s law requires making a consistent choice.
11
Kevin Zhou Physics Olympiad Handouts
However, some surfaces are nonorientable, which means it is impossible to define the normal
vector on the surface continuously. Concretely, what happens is that if we draw a normal vector
at some point (arbitrarily picking up or down), and continuously extend this definition around
the surface, we come back to the same point but with the normal vector pointing in the opposite
direction. The surface on the right, which is a Mobius strip, has exactly this problem. For this
reason, we can’t define the flux through it at all! In order to apply Faraday’s law (or Gauss’s law,
etc.) we always have to use orientable surfaces like the one on the left. Thankfully, for any closed
loop, an orientable surface whose boundary is the loop always exists; it’s called a Seifert surface.
The flux through the left surface is about 2πR2B. In general, for N turns, we would get a flux
of about NπR2B, though this gets hard to visualize in terms of surfaces.
