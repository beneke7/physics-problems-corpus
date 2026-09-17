---
id: kevin-zhou-r1-p022
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-p022
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

[3] Problem 22. Four-vectors provide a quick derivation of the relativistic Doppler effect. Given a
plane wave, define kµ = (ω,k). Then the plane wave is proportional to eiϕ, where the phase is
ϕ = ωt − k · x = k · x.
Since the phase ϕ is Lorentz invariant, and we know xµ is a four-vector, kµ is a four-vector as well.
(a) Show that for light, kµkµ = 0.
(b) Consider a light ray with angular frequency ω traveling along the x axis, and an observer
moving with speed v along the x-axis. Use an explicit Lorentz transformation to find the
angular frequency ω′ the observer sees, thus rederiving the longitudinal Doppler shift for light.
(c) Now it’s easy to go further. Repeat the previous part for a light ray traveling at an arbitrary
angle θ to the x axis. You can do this using either an explicit Lorentz transformation, or just
properties of four-vectors.
(d) The angle θ has different values in the source’s frame and the observer’s frame. In part (c),
we defined it in the source’s frame, but the most common form of the result defines θ in the
observer’s frame. To get this formula, repeat part (c), but now suppose we’re already in the
observer’s frame, where the source moves with velocity −vx̂, and the light ray is traveling at
an angle θ to the x-axis. Find the relationship between ω′ and ω.
22
Kevin Zhou Physics Olympiad Handouts
The answer to part (d) is also the final result of USAPhO 2021, problem A2. For more on the
relativistic Doppler effect, see section 11.8.2 of Morin. (By the way, now that we have the four-vector
formalism set up, it’s not that much harder to compute the Doppler effect for waves that travel at
general speeds. You probably won’t need that result, but it’s an example of something that’s fairly
annoying to derive without four-vectors.)
Solution. (a) For plane waves ω = vk, where v = c for light. Thus the norm is ω2 − k2 = 0.
(b) Setting c = 1 now, a light ray traveling along the x axis has kµ = (ω,ω,0,0). Applying a
boost along the x axis, the new angular frequency is
ω′
= (k′
)0
= γ(ω − vω) =
r
1 − v
1 + v
ω
which is precisely the longitudinal Doppler effect. The vω term above is just what we would
expect from Galilean physics, while the relativistic factor of γ modifies the effect to second
order in v.
(c) For variety, we’ll do this part with four-vectors. We have
kµ
= (ω,ω cosθ,ω sinθ,0), vµ
= (γ,γv,0,0)
and by slightly modifying part (a) of problem 20, we have
ω′
= k · v = γω − γωv cosθ =
1 − v cosθ
√
1 − v2
ω.
(d) In this case, let vµ be the four-velocity of the source. In the observer’s frame,
kµ
= (ω′
,ω′
cosθ,ω′
sinθ,0), vµ
= (γ,−γv,0,0)
and the angular frequency measured in the source’s frame is
ω = k · v = γω′
+ γω′
v cosθ =
1 + v cosθ
√
1 − v2
ω′
.
Rearranging, we conclude that
ω′
=
√
1 − v2
1 + v cosθ
ω
which differs from the result of part (c) by second-order terms.
Example 6: Woodhouse 6.6
Four distant stars Si are observed. Let θij denote the observed angle between the directions
to Si and Sj. Show that the ratio
(1 − cosθ12)(1 − cosθ34)
(1 − cosθ13)(1 − cosθ24)
is independent of the motion of the observer.
23
Kevin Zhou Physics Olympiad Handouts
Solution
This Oxford undergraduate exam question is too technical to be relevant to Olympiads, but
it shows how four-vectors can be essential. The θij depend on the motion of the observer
because of the aberration effect in problem 10. That is, when you Lorentz transform to a
moving observer’s frame, it changes the direction of the incoming light. A direct attack on the
question would thus require applying the full, four-dimensional Lorentz transformations to
four vectors with arbitrary orientations, which would be a nightmare. Here’s an alternative:
let kµ
i be the wave vectors of an incoming photon from each star. Then
ki · kj = ωiωj − ki · kj = ωiωj(1 − cosθij)
where we used ωi = |ki|. Therefore, the ratio is
(k1 · k2)(k3 · k4)/ω1ω2ω3ω4
(k1 · k3)(k2 · k4)/ω1ω2ω3ω4
=
(k1 · k2)(k3 · k4)
(k1 · k3)(k2 · k4)
which is manifestly independent of frame.
[4] Problem 23. In this problem we’ll construct a four-vector aµ for the acceleration of a particle,
and use it to derive the Lorentz transformation of the ordinary three-vector acceleration a = dv/dt.
(a) Explain why aµ = duµ/dτ is a four-vector, and why u · a is always zero.
(b) Show that when v = vx̂, the components of aµ are
aµ
= (γ4
vax,γ4
ax,γ2
ay,γ2
az)
where γ = 1/
√
1 − v2 as usual.
(c) Let the particle have three-acceleration a′ in its momentary rest frame S′, i.e. the inertial
frame that, at a given moment, has the same velocity as the particle. Show that a·a = −|a′|2.
(d) By Lorentz transforming to S and using part (b), show that the acceleration in frame S is
a = (a′
x/γ3
,a′
y/γ2
,a′
z/γ2
).
As you can see, transformations of three-vector quantities can get quite nasty!
Solution. (a) We know that uµ is a four-vector, and dτ is Lorentz invariant, so duµ/dτ = aµ is
a four-vector. Next, we know from an example that u · u is constant, so
d
dτ
(u · u) = 2u · a = 0.
(b) The four-velocity will be (γ,γv). Since dτ = dt/γ, we have aµ = duµ/dτ = γduµ/dt, and
dγ
dt
= (1 − v2
)−3/2
(−1/2)(−2vax) = γ3
vax.
Here we used the fact that instantaneous acceleration in the y and z components doesn’t
change the magnitude of the speed, and thus won’t change γ. Then we have
aµ
= γ
d
dt
(γ,γv) = γ(γ3
vax,γ3
axv2
+ γax,γay,γaz) = (γ4
vax,γ4
ax,γ2
ay,γ2
az).
24
Kevin Zhou Physics Olympiad Handouts
(c) This follows immediately because aµ′
= (0,a′
x,a′
y,a′
z) in this frame.
(d) Applying a Lorentz transformation to aµ′
, we have
aµ
= (γ(0 + va′
x),γ(a′
x + 0),a′
y,a′
z) = (γ4
vax,γ4
ax,γ2
ay,γ2
az)
We therefore read off the desired result,
a = (a′
x/γ3
,a′
y/γ2
,a′
z/γ2
).
Of course, in the low velocity limit we recover a′
i = ai, as expected from Galilean relativity.
Remark
We can rewrite a lot of our results in terms of three-vectors. First, the Lorentz transformations
for general v are, using the same notation as in idea 1,
t′
= γ(t − v · r), r′
= r − γvt + (γ − 1)(v̂ · r)v̂.
The velocity addition formula for general v and u′ is, using the same notation as in idea 2,
u =
1
1 + v · u′

v +
u′
γ
+

1 −
1
γ

v̂(v̂ · u′
)

.
The first result of problem 23 is
aµ
= (γ4
a · u, γ4
(a + u × (u × a)))
and the second result, for the transformation of acceleration, is
a =
a′
γ2
−
v̂(v̂ · a′)(γ − 1)
γ3
.
As you can see, these aren’t very enlightening, and they don’t tend to be useful in solving
problems. The reason is that in relativity, there’s nothing special about three-vectors. For
concrete problems, you’ll typically either want to do everything in terms of four-vectors, or
descend all the way down to individual components – in which case you would align your
axes so that v points along one of them, rather than considering a completely general v.
On the other hand, you can get practice with three-vectors by staring at the above expressions
until you see how they reduce to the component forms we had earlier. If you do this, you’ll
learn how to translate just about any component expression into three-vector notation.
25
Kevin Zhou Physics Olympiad Handouts
5 Acceleration and Rapidity
Idea 5
The geometry of special relativity is much like ordinary geometry, except that the dot product
is replaced with an inner product, which has some minus signs. Lorentz transformations
can be thought of as “generalized rotations” which mix up time and space, just as ordinary
rotations mix up different spatial axes. The generalized angle is the rapidity ϕ = tanh−1
v.
[3] Problem 24 (Morin 11.27). In this problem, we’ll see the meaning of the rapidity more precisely.
(a) Show that a Lorentz transformation may be written as

x
t

=

coshϕ sinhϕ
sinhϕ coshϕ

x′
t′

.
(b) Show that the composition of Lorentz transformations with rapidity ϕ1 and ϕ2 is a Lorentz
transformation with rapidity ϕ1 + ϕ2. This makes rapidity extremely useful in kinematics
problems with multiple boosts, such as problems involving acceleration.
(c) An ordinary rotation of spatial axes has the form

x
y

=

cosθ −sinθ
sinθ cosθ

x′
y′

.
Show that a Lorentz transformation is essentially an ordinary rotation between space and
time, if we treat time as like “imaginary space” and the rotation as by an imaginary angle.
This was one of the ways the founders of relativity thought about it.
Solution. (a) The rapidity ϕ is defined by tanhϕ = v. Then using tanhϕ = sinhϕ/coshϕ and
cosh2
ϕ − sinh2
ϕ = 1, we have
sinhϕ = γv, coshϕ = γ.
On the other hand, the Lorentz transformations are
t = γ(t′
+ vx′
), x = γ(x′
+ vt′
)
which are exactly of the desired form.
(b) Explicitly, we have

coshϕ1 sinhϕ1
sinhϕ1 coshϕ1

coshϕ2 sinhϕ2
sinhϕ2 coshϕ2

=

A B
B A

where
A = coshϕ1 coshϕ2 + sinhϕ1 sinhϕ2, B = coshϕ1 sinhϕ2 + sinhϕ1 coshϕ2.
By using the hyperbolic trig sum rules, we have
A = cosh(ϕ1 + ϕ2), B = sinh(ϕ1 + ϕ2)
as desired.
26
Kevin Zhou Physics Olympiad Handouts
(c) Substituting θ = iϕ and y = it, the rotation becomes

x
it

=

cos(iϕ) −sin(iϕ)
sin(iϕ) cos(iϕ)

x′
it′

.
This can be converted to a transformation between (x,t) and (x′,t′),

x
t

=

cos(iϕ) −isin(iϕ)
−isin(iϕ) cos(iϕ)

x′
t′

=

coshϕ sinhϕ
sinhϕ coshϕ

x′
t′

.
Idea 6
The next few questions will deal with accelerating objects. In Newtonian mechanics, a
common strategy is to work in the accelerating frame of the object, but that’s not a good
idea at this stage of your education. (There’s nothing wrong with doing so, but it brings in
complications that one usually needs a course in general relativity to fully appreciate.)
Instead, we will describe accelerating objects using inertial frames. In principle we could do
everything in the lab frame, but it is also often useful to work in a momentarily comoving
frame, i.e. the inertial frame that, at some time t, moves with the same velocity as the object.
