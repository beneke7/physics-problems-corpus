---
id: kevin-zhou-w3-p014
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w3-p014
solution_type: author
source_document: solution-document-kevin-zhou-w3sol
source_pdf: sources/kevin_zhou/site/handouts/W3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W3Sol.pdf."
---

[4] Problem 14. Consider water with depth D and density ρ. A shallow water wave (i.e. one with
wavelength much greater than D) travels along the x-direction with height h(x,t) ≪ D relative to
the water level. It turns out that the water has a horizontal velocity v(x,t) which is approximately
independent of height, and negligible vertical velocity. Even though the water is moving, the
hydrostatic pressure formula still works because the water’s vertical acceleration is negligible.
(a) Find a relation between the derivatives of h(x,t) and v(x,t) using conservation of mass. Using
this result, show that the phase velocity vw of the water waves obeys v ≪ vw.
(b) Find a relation between the derivatives of h(x,t) and v(x,t) using force and momentum.
(c) Combining these results, find the phase velocity vw of shallow water waves.
Now let’s consider what happens when a shallow water wave created at sea approaches the shore,
and the depth D slowly decreases.
(d) Explain why waves always arrive at the shore moving perpendicular to the shoreline.
(e) If the depth is gradually halved, by what factor is the height of the wave multiplied? This
phenomenon is known as shoaling.
Solution. (a) Consider the region between x and x + dx. The rate that water flows into this
region must equal the rate of change of its volume due to the change in height. Then
AD(v(x) − v(x + dx)) = A
dh
dt
dx.
That is, we have
−D
∂v
∂x
=
∂h
∂t
.
For a sinusoidal wave, a derivative with respect to x gives a factor of k and a derivative
with respect to t gives a factor of ω. So we have Dkv ∼ ωh, and since vw = ω/k, we have
v ∼ vwh/D ≪ vw.
11
Kevin Zhou Physics Olympiad Handouts
(b) Consider the horizontal forces on the fixed piece of water that, at some moment, is between
x and x+dx. This water has atmospheric pressure at its upper surface, so the net horizontal
force on it due to hydrostatic pressure is
F =
1
2
ρgℓ (D + h(x))2
− (D + h(x + dx))2

≈ −ρgDℓ
∂h
∂x
dx
where we used h ≪ D, and let ℓ be the length of the water in the transverse direction.
This must be equal to the rate of change of momentum of this piece of water, which is
dp
dt
= ρℓDdx
dv
dt
= ρℓDdx

∂v
∂t
+ v
∂v
∂x

.
In the second step, we used the idea of the “convective derivative”. That is, the chunk of
water originally at x at time t will move to x′ = x + v(x,t)dt after a time dt, at which point
its velocity will be v(x′,t + dt) = v(x,t) + ((∂v/∂t) + v(∂v/∂x))dt, so the acceleration of the
water has two terms.
Now, the rough sizes of these two terms are ωv and kv2, so the second term is smaller by a
factor of v/vw. We thus neglect it, and conclude that
−g
∂h
∂x
=
∂v
∂t
.
(c) Combining the results of the last two parts, we have
∂2h
∂t2
= −D
∂2v
∂x∂t
= gD
∂2h
∂x2
which is just the ideal wave equation with wave velocity vw =
√
gD. (This is both the phase
velocity and the group velocity.)
(d) The wave speed is proportional to
√
D, so the waves slow down as they approach the shore.
So by Snell’s law, they refract towards the normal direction.
(e) Note that nothing is adding or subtracting energy from the wave, and that the number of
periods of the wave stays the same. Thus, the amount of energy in each period of the wave
stays the same. (We could get the same result by identifying an adiabatic invariant, as
discussed in M4. In this case, it is called the wave action.)
The gravitational and kinetic energy are equal on average, so for simplicity we’ll consider the
former. For a wave of wavelength λ, height h, and width ℓ, the gravitational potential energy
of one period is
E ∼ ρgλℓh2
.
The frequency of the wave stays the same, so λ is proportional to the wave speed,
E ∝ vh2
∝
√
Dh2
.
Thus, when D is halved, h increases by a factor of 21/4. This is known as Green’s law.
Eventually, h becomes comparable to D and our expressions break down.
12
Kevin Zhou Physics Olympiad Handouts
Remark
Textbooks commonly say that liquids can’t support transverse waves, because they don’t
support shear stresses. But the waves considered in problem 14 are clearly transverse. This
is possible because the textbook statement only applies to the internal forces of water alone.
At the surface of the water, gravity provides the transverse restoring force; that’s why these
waves are also commonly called “gravity waves”.
