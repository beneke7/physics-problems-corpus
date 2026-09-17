---
id: kevin-zhou-e8-p022
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-p022
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

[5] Problem 22. Suppose the regions x < 0 and x > 0 are filled with material with permittivities
ϵ1 and ϵ2, both with permeability µ0. (As mentioned above, this is typical for most materials.)
We send in an incident wave from the left with electric field Eiei(ki·r−ωit). The wave will be both
transmitted and reflected at the interface, so the total electric field is
E =
(
Eiei(ki·r−ωit) + Erei(kr·r−ωrt) x < 0,
Etei(kt·r−ωtt) x > 0.
The angles with the normal are θi, θr, and θt as shown. Note that since light is a transverse wave,
all three electric field amplitudes above are perpendicular to their corresponding wavevector.
(a) We can decompose every field into a part perpendicular to the interface (i.e. containing just
the x-component), and a part parallel to the interface (containing the other components).
Using Maxwell’s equations, argue that at the interface, E∥ and B⊥ must be continuous. Also
show that for this setup, B∥ is also continuous.
(b) Argue that by continuity of E∥ at the interface, we must have
ωi = ωr = ωt.
(c) Further argue that k
∥
i = k
∥
r = k
∥
t , and thereby derive the laws of reflection and refraction,
θi = θr, n1 sinθi = n2 sinθt.
This result is very general, and holds for all kinds of waves as long as we define ni ∝ 1/vi.
(d) Now suppose the electric fields Ei, Er, and Et are polarized perpendicular to the page. Then
continuity of E∥ gives
Ei + Er = Et.
21
Kevin Zhou Physics Olympiad Handouts
Using continuity of B∥, show that
Er
Ei
=
n1 cosθi − n2 cosθt
n1 cosθi + n2 cosθt
,
Et
Ei
=
2n1 cosθi
n1 cosθi + n2 cosθt
.
These are the Fresnel equations for light polarized perpendicular to the plane, also called
“s-polarized” light.
(e) If n1 > n2, then total internal reflection occurs when
sinθi >
n2
n1
and the wave is totally reflected. Nonetheless, Et is nonzero in this regime. To make sense
of this, show that the x-component of kt is imaginary in this regime, indicating that the
“transmitted” wave does not propagate in the region x > 0, but rather exponentially decays.
Solution. (a) For B⊥, consider a thin Gaussian pillbox that straddles the interface. By Gauss’s
law for magnetism, the magnetic flux through it must be zero. In the limit of a very thin
pillbox, this ensures the continuity of B⊥.
For E∥, consider a thin Amperian loop that straddles the interface, and consider
H
E · ds. As
the width of the loop goes to zero, the magnetic flux through it goes to zero, so this integral
must be zero. Taking loops of various orientations, this ensures the continuity of E∥.
In general, E⊥ and B∥ need not be continuous, because we can have surface charges and
currents at the interface. But in this case, both sides have the same µ0, so there are no bound
surface currents, so B∥ is continuous.
(b) At the origin, x = y = z = 0, continuity of E∥ gives
E
∥
i e−iωit
+ E∥
re−iωrt
= E
∥
t e−iωtt
.
Since the waves all hit the interface at an angle, none of the parallel amplitudes here vanish.
Then the equation can only be satisfied if ωi = ωr = ωt, so that all three exponentials have
the same time dependence.
The deeper reason behind was mentioned in M4 and W1. The differential equation the field
obeys is linear, and has no explicit time dependence. Thus, it has solutions with uniform
frequency everywhere.
(c) At the interface, x = 0, continuity of E∥ at time t = 0 gives
E
∥
i eik
∥
i ·x
+ E∥
reik
∥
r·x
= E
∥
t eik
∥
t ·x
.
As in part (b), this can only be true in general if k
∥
i = k
∥
r = k
∥
t .
For concreteness, let the y-axis point out the page, so that ki · ŷ = 0. Then we also have
kr · ŷ = kt · ŷ = 0, which implies that all three wavevectors lie in the same plane, which
was implicitly assumed in the diagram above. Then equality of the z-components gives
ki sinθi = kr sinθr = kt sinθt.
In general, for an electromagnetic wave we have ω/k = v = c/n, so k = nω/c. In this case,
all the ω’s are the same, so plugging this in gives
n1 sinθi = n1 sinθr = n2 sinθt,
which is exactly what we want.
22
Kevin Zhou Physics Olympiad Handouts
(d) The continuity of B∥ gives
Bi cosθi − Br cosθr = Bt cosθt.
Since B = En/c, this means
Ein1 cosθi − Ern1 cosθr = Etn2 cosθt.
Now with the continuity of E∥ (Ei + Er = Et), and θi = θr, we have
Ein1 cosθi − Ern1 cosθi = Ein2 cosθt + Ern2 cosθt
which yields
Er
Ei
=
n1 cosθi − n2 cosθt
n1 cosθi + n2 cosθt
,
Et
Ei
=
2n1 cosθi
n1 cosθi + n2 cosθt
as desired.
(e) In part (c) we showed that (ki)y = (kt)y and (ki)z = (kt)z, but we also know that the
magnitudes of the wavevectors obey
kt =
ω
c
n2, ki =
ω
c
n1
so that kt = (n2/n1)ki. Solving for (kt)x, we have
(kt)2
x = k2
t − (kt)2
y − (kt)2
z =

ki
n2
n1
2
− k2
i sin2
θi.
Therefore, if sinθi > n2/n1, then (kt)2
x is negative, so that (kt)x is imaginary. This kind of
solution is called an evanescent wave.
Remark: Snell’s Law for Particles
Above, we found the angle of refraction using the conservation of kz at an interface. To
relate this to the wave speed, we used that fact that ω is conserved when a wave passes an
interface, so that |k| = ω/|v| ∝ 1/|v|.
However, we could also model light as a stream of nonrelativistic bullets, and the interface
as dividing two regions, each with constant potential energy. In that case, the analogue of
kz is pz, which is still conserved by translational symmetry. However, now the mass m is
conserved when the particles pass the interface, and we have |p| = m|v| ∝ |v|. This gives
the opposite dependence on wave velocity, so that now n/sinθ stays the same! Hundreds of
years ago, nobody could directly measure |v|, so both models were considered.
