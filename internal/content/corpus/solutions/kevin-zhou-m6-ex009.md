---
id: kevin-zhou-m6-ex009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m6-ex009
solution_type: author
source_document: solution-document-kevin-zhou-m6sol
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M6Sol.pdf."
---

Example 9
An object quickly flies past a star of mass M, with nearly constant speed v, so that its
distance of closest approach is R. Estimate the angle by which the object is deflected.
26
Kevin Zhou Physics Olympiad Handouts
Solution
To solve this exactly, we could use properties of conics, or solve Newton’s second law in polar
coordinates. Here we’ll present a simpler rough estimate. Since the object is flying quickly,
its path is approximately a straight line. Most of the transverse impulse it experiences occurs
when it is at a distance of order R from the star, and we can approximate this as
∆p⊥ =
Z
F⊥ dt ∼ F⊥ ∆t ∼
GMm
R2
R
v
.
The small angle of deflection is thus
∆θ ≈
∆p⊥
mv
∼
GM
Rv2
.
The true answer in Newtonian gravity turns out to be 2GM/Rv2.
In Newtonian gravity, we can think of light as consisting of massless particles moving at
speed c, so we can find the deflection of light by setting v = c. However, in general relativity
the bending of light is actually twice as large, ∆θ = 4GM/Rc2. The observation of this
factor of 2 by Eddington during a solar eclipse was one of the first tests of general relativity,
but it’s pretty tricky; Einstein himself missed it in his original paper of the subject!
The 2 arises because in general relativity, for objects that don’t get too close to the Sun,
∆θ ≈
2GM
R

1
v2
+
1
c2

.
Roughly speaking, the first term comes from “temporal” curvature, and simply recovers the
Newtonian result. The second term is due to “spatial” curvature, which leads to an “angular
defect”: the circumference of a circle centered on the Sun is slightly less than 2πr. We could
neglect this effect in problem 5 because we were considering nonrelativistic particles, with
v ≪ c. But for light, the two effects contribute equally to the deflection.
Remark: Mercury’s Precession
Another famous prediction of general relativity is the perihelion precession of Mercury, i.e. the
fact that its orbit advances by a tiny angle ∆θ on each cycle. However, knowing only that
general relativity is a relativistic theory of gravity, we can estimate this angle by dimensional
analysis. The only dimensionful parameters are the strength of the Sun’s gravity GM, the
radius R of Mercury’s orbit, and the speed of light c. (Other parameters we might care about
can be expressed in terms of these; for instance, the speed of Mercury is v =
p
GM/R.) By
similar logic to the above problem, the only possible expression is
∆θ ∼
GM
Rc2
∼ 10−8
.
The true answer is larger by a factor of 6π/(1 − e2), where e ≈ 0.2 is the eccentricity.
27
Kevin Zhou Physics Olympiad Handouts
This discrepancy was known in Einstein’s time, and in textbooks it is usually described as
decisive evidence in favor of general relativity. As usual, the history is more complicated.
The precession is extremely tiny, and many other factors contribute to it. Even in the
1980s, people were arguing over whether the oblateness of the Sun could make a significant
difference. Fortunately, in the four decades since then, we have performed stringent tests of
general relativity, through extremely precise measurements of solar system orbits, gyroscopes
in satellites, and indirect and direct observations of gravitational waves. It turns out that
general relativity passes every test, and deviations from it must be extremely small.
5 Fictitious Forces
Idea 8
Consider an inertial frame and a rotating frame with angular velocity ω. For any vector V,
the time derivatives of V in these two frames are related by

dV
dt

in
=

dV
dt

rot
+ ω × V.
For example, when V is the position r, we have the familiar result
vin = vrot + ω × r.
Applying this equation to the velocity v, we find
ain = arot + 2ω × vrot + ω × (ω × r).
The two terms on the right correspond to the Coriolis and centrifugal forces,
Frot = F − 2mω × vrot − mω × (ω × r).
In the case where ω can change, we also have the azimuthal force −mω̇ × r. (If you prefer,
these forces can also be derived by working in components in polar coordinates, as shown in
chapter 11 of Wang and Ricardo, volume 1.)
Idea 9
Sometimes, the best way to deal with fictitious forces is to just avoid them by using an inertial
frame instead. This is especially true when the Coriolis force is not small; it’s straightforward
to treat it approximately if it’s small, but otherwise it’s quite complicated. If a problem
presents a situation in a rotating frame, there’s no reason you have to stay in that frame!
