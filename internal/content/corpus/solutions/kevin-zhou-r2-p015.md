---
id: kevin-zhou-r2-p015
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r2-p015
solution_type: author
source_document: solution-document-kevin-zhou-r2sol
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R2Sol.pdf."
---

[3] Problem 15. Consider a cube of initial mass m and side length L in free space. In the lab frame,
the cube has an initial velocity v0 ≪ c to the right, and plane electromagnetic waves of intensity I
(in units of W/m2) approach the cube from the left and right, striking two faces of it head on. Find
the displacement of the cube after a long time, for three cases:
(a) The left and right faces of the cube are perfectly black, and emit negligible thermal radiation.
(This is the easiest case, but it’s actually extremely unrealistic; can you see why?)
(b) The left and right faces of the cube are perfectly black. In addition, they are kept in thermal
12
Kevin Zhou Physics Olympiad Handouts
equilibrium with each other, and emit thermal radiation so that the mass-energy of the cube
stays constant in the cube’s frame.
(c) The cube is perfectly reflective.
For simplicity, you may always work to lowest order in v/c.
Solution. We’ll set c = 1 for convenience, and expand everything to lowest order in v. There are
many ways to do this problem, though each one requires some careful bookkeeping. For instance,
you can do it like example 6, by transforming between the lab and cube frames. For variety, I’ll
present a slightly different method here.
(a) This can be done without leaving the lab frame. Since the cube is running into one of the
beams and directly away from the other, the rate of momentum transfer from each beam is
multiplied by 1 + v and 1 − v, respectively. Then we have
dp
dt
= −2IL2
v.
Integrating both sides with respect to time, using p0 ≈ mv0, we get mv0 = 2IL2∆x, so that
∆x =
mv0
2IL2
.
The reason this is unrealistic is that during this process, the cube will absorb an incredible
amount of energy. The velocity decays on the characteristic time m/(2IL2), which means that
during this time, the cube absorbs a total energy of order m, which is enough to change its
rest mass by a significant amount! The above result is still correct, because it only uses the
fact that the initial momentum is mv0 and the final momentum is zero, but any real object
would either get extremely hot and start emitting energy, or reflect away the energy. Those
are the cases we consider in the next two parts.
(b) We start by working in the cube frame. In this frame, the light beam coming in from the right
has its intensity enhanced by two powers of 1+v. To see this, I find it helpful to imagine the
light beam as made of discrete photons.
Suppose that in the lab frame, each photon had frequency f, and they happened to be spaced
a wavelength λ = 1/f apart. In the cube frame, each photon incoming from the right has
frequency f′ =
p
(1 + v)/(1 − v)f ≈ (1 + v)f. In addition, the spacing between them is now
1/f′, so the rate at which they hit the cube is enhanced by another factor of 1+v. Therefore,
the cube sees an incoming intensity I′ ≈ (1 + 2v)I.
Of course, this isn’t exactly how photons work, but the transformation of intensity doesn’t
depend on exactly what the beam is made of, so this has to be the right answer in general.
Similarly, the cube sees an incoming intensity of (1 − 2v)I from the left.
So, if the cube didn’t emit any radiation, then in its own frame, its energy E′ and momentum
p′ satisfy
dE′
dt
= 2IL2
,
dp′
dt
= −4IL2
v.
Transforming back to the lab frame using the Lorentz transformations at first order in v,
dp
dt
≈
dp′
dt
+ v
dE′
dt
= −2IL2
v
13
Kevin Zhou Physics Olympiad Handouts
where we neglected time dilation since it’s second order in v. This is as we found in part (a).
Now let’s add on the radiation emission. In the cube frame, an equal intensity I is emitted
from both sides, so that
dE′
dt
= 0,
dp′
dt
= −4IL2
v.
Transforming back to the lab frame, we have
dp
dt
= −4IL2
v
from which we conclude
∆x =
mv0
4IL2
.
This is smaller than in part (a), which makes sense. Thermal radiation by itself can’t change
the cube’s velocity in any frame. However, by removing energy, it reduces the cube’s inertia
(or rather, prevents the inertia from increasing), making it easier to slow down.
(c) In this case, a similar argument to the above gives
dE′
dt
= 0,
dp′
dt
= −8IL2
v.
We now get twice the force as before, since the photon momenta get flipped upon reflection.
Going back to the lab frame,
dp
dt
= −8IL2
v, ∆x =
mv0
8IL2
.
Of course, it is also possible to get this answer by using the result of example 6 twice.
