---
id: kevin-zhou-r2-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r2-p016
solution_type: author
source_document: solution-document-kevin-zhou-r2sol
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R2Sol.pdf."
---

[4] Problem 16. A rocket of initial mass M0 starts from rest and propels itself forward along the x
axis by emitting photons backward.
(a) Show that the final velocity of the rocket relative to the initial frame is
v
c
=
x2 − 1
x2 + 1
= tanh(logx), x =
M0
Mf
where Mf is the final rest mass of the rocket. (Hint: for this part, no integration is needed.)
(b) More generally, show that if the rocket fuel comes out at a speed u relative to the rocket,
v
c
=
x2u/c − 1
x2u/c + 1
= tanh((u/c)logx)
where x is defined as above. (Hint: to avoid nasty differential equations, relate dm and dv.)
(c) Show that this reduces to the nonrelativistic rocket equation in the limit u/c → 0.
(d) Show that in the limit v/c → 0, the result of part (a) also reduces to the nonrelativistic
rocket equation with exhaust speed c. Why does this work, given that photons are the most
relativistic possible things?
14
Kevin Zhou Physics Olympiad Handouts
Solution. (a) We see that the four momentum goes from (M0,0) to (γMf,γMfv). Since the
difference is given by photons, we must have
−γMfv = γMf − M0 =⇒ γMf(1 + v) = M0 =⇒
1 + v
1 − v
= x2
.
Solving for v and restoring c, we have
v
c
=
x2 − 1
x2 + 1
as desired.
(b) The reason part (a) didn’t require integration is that all the emitted photons have the same
speed in the original frame, because light always travels at c. But in this case, the emitted
fuel will have varying speed in the original frame, depending on when it was emitted.
Since our variable x is in terms of mass, it’s useful to relate the decrease in mass dm of the
rocket with its increase in speed dv. Let’s consider the very first instant the rocket is on. The
decrease in the rocket’s energy is dm (the kinetic energy it picks up is proportional to dv2,
which is negligible). All of this energy must be in the fuel, which is traveling with speed u,
which means the mass of the fuel dmf obeys
dm = γu dmf.
The momentum carried by this bit of fuel is
dp = γuudmf = udm.
This is equal to the momentum change of the rocket, dp = mdv. So combining everything,
−
dm
m
=
dv
u
.
This is exactly the same as the first half of the derivation of the ordinary rocket equation.
This equation holds as long as we’re working in the momentarily comoving frame of the rocket;
the difference in relativity is that, as we saw in R1, the velocity does not directly add. Instead,
rapidity ϕ = tanh−1
(v) adds, so that −dm/m = dϕ/u, which gives a final ϕ = ulogx.
If you don’t remember this fact, we can get the same result with relativistic velocity addition.
If the rocket has speed v in the original frame, then after accelerating by dv in its momentarily
comoving frame, it ends up with speed
v′
=
v + dv
1 + v dv
≈ v + dv − v2
dv = v + (1 − v2
)dv
in the original frame. Therefore, in general we have
−
dm
m
=
1
u
dv
1 − v2
and integrating both sides gives
logx =
1
u
Z v
0
dv
1 − v2
=
1
2u
Z v
0
dv
1 − v
+
dv
1 + v
=
1
2u
log
1 + v
1 − v
.
Solving for v gives the result.
15
Kevin Zhou Physics Olympiad Handouts
(c) We can use the approximation
x2u/c
= e(2u/c)logx
≈ 1 +
2u
c
logx
to arrive at
v
c
≈
(2u/c)logx
2
≈
u
c
logx.
In other words, v = ulogx which is precisely the nonrelativistic rocket equation. (Here we
have implicitly assumed that (u/c)logx is small, which is equivalent to assuming that the
rocket doesn’t get to relativistic speeds. If u/c is nonrelativistic, this should be true for any
reasonable value of x.)
(d) At first glance, this shouldn’t make any sense. When u/c → 1, the rocket fuel is always moving
extremely relativistically, so how can we take the nonrelativistic limit? But pressing on, let’s
consider the limit v/c → 0. This corresponds to x → 1, so
v ≈
(x − 1)(x + 1)
2
c ≈ (x − 1)c =
M0 − Mf
Mf
c.
On the other hand, the nonrelativistic rocket equation gives
v = ulog
M0
Mf
= clog
M0
Mf
= clog

1 +
M0 − Mf
Mf

≈
M0 − Mf
Mf
c
which matches.
Why does this work? The first half of the derivation in part (b) gives precisely the same result
as the ordinary rocket equation; the only thing that matters is how much momentum you get
from the fuel per energy spent. In the nonrelativistic limit, this ratio is p/E ≈ p/mc2 = u/c2.
When we apply the nonrelativistic rocket equation to relativistic fuel, we’re implicitly assuming
p/E = u/c2 for all speeds u, but this is actually true in relativity, because the factors of γ
cancel out! For example, for photons we indeed have p/E = 1/c.
Thus, the only step where we actually need relativity is the velocity addition in the second
half of part (b), but this effect is negligible as long as v/c is small, no matter how big u/c is.
[3] Problem 17 (Cahn). An empty box of total mass M and perfectly reflecting walls is at rest in
the lab frame. Then N photons are introduced into the box, each with angular frequency ω0 in a
standing wave configuration; one can think of these photons as continually bouncing back and forth
with velocity ±cx̂, with zero total momentum.
(a) State what the rest mass Mtot of the system will be when the photons are present.
(b) Consider the momentum of the system in an inertial frame moving along the x axis with speed
v ≪ c. Using the first order Doppler shift and assuming that at any moment, half the photons
are moving left and half the photons are moving right, show that p = Mtotv. This provides a
dynamical explanation of exactly how photons contribute to the inertia of an object.
(c) Unfortunately, it is not true that half the photons are moving right at any given time. Show
that the fraction of photons moving to the right is modified by an amount of order v/c, and
find the total momentum accounting for this effect.
16
Kevin Zhou Physics Olympiad Handouts
(d) [A] The analysis of part (b) is nice and neat, and you can sometimes find it in textbooks. But
part (c) shows that this simple analysis is wrong! What’s going on? (This requires considering
the stress-energy tensor, which is beyond the scope of Olympiad physics.)
Solution. (a) Since E = mc2, the rest mass is
Mtot = M +
Nℏω0
c2
.
(b) Since v ≪ c, we will use the equation p = Mtotv. We clearly have momentum Mv from the
box itself. Meanwhile, the photons are Doppler shifted, so their total momentum is
pγ =
N
2
ℏω0
c
(1 + v/c) −
N
2
ℏω0
c
(1 − v/c) =
Nvℏω0
c2
.
Dividing the momentum by v, we find the same result as in part (a).
(c) The fraction of photons moving to the right/left is (1 ± v/c)/2, which implies that
pγ =
N
2
ℏω0
c
(1 + v/c)2
−
N
2
ℏω0
c
(1 − v/c)2
=
2Nvℏω0
c2
.
This appears to ruin the conclusion of part (b), and there is no other first-order effect to fix it.
Now we resolve the paradox. For simplicity, we’ll analyze the system only at first order in v/c.
There are numerous other effects at second order, such as the relativistic corrections to the Doppler
shift and momentum, but these will complicate the analysis without adding much insight.
The resolution is very subtle, so to warm up, let’s consider a simpler situation. In R3, you will
learn that the charge density and current density can be combined into a four-vector Jµ = (ρ,J).
If you integrate J0 over all of space, you get the total electric charge Q. And it can be shown that
whenever you integrate the zeroth component of a four-vector over all space, you get a Lorentz
scalar. That is, the total charge is the same in all frames.
However, this isn’t always true if you don’t integrate over all of space. For example, suppose
we had a segment of wire with a perfectly steady current flowing through it. In the wire’s frame,
it’s neutral, and each new charge enters the left end as another charge exits the right end. But
in a frame with a velocity along the wire, the loss of simultaneity effect implies that the wire has
a net charge! That is, “the amount of charge on the wire” is not a Lorentz scalar. (This insight
is essential to solving many of the problems in R3.) The amount of charge in a system is only
necessarily a Lorentz scalar when there’s no current flowing through it.
The same subtlety applies to energy and momentum. The total four-momentum of an isolated
system (i.e. through which no external energy or momentum enters or leaves) is indeed a four-vector.
That’s why, for all the collision problems in this problem set, we could treat the four-momenta of
particles long before or after the collision as four-vectors. But the photons in the box are not a closed
system, because they are constantly interacting with the box, and as a result their four-momentum
is not a four-vector. That’s why the total momentum of the photons, in a frame where the box is
moving, is not what we expect. However, the total momentum of the photons and box together is
exactly what we expect, i.e. it is precisely Mtotv in the nonrelativistic limit. The rest of the solution
will show this explicitly.
17
Kevin Zhou Physics Olympiad Handouts
To do this properly, we must introduce the stress-energy tensor Tµν, which is analogous to pµ
in the same way that Jµ is analogous to Q. Concretely, in a one-dimensional universe with only x
and t directions, it is
Tµν
=

u S
S σ

where the components have the following meanings.
• T00 = u is the energy density.
• T01 = S is the momentum density, i.e. what we must integrate over space to get momentum.
We call this S because it coincides with the Poynting vector for a light wave.
• T10 is the current of energy in the x direction. For example, a particle of mass m and velocity
v would have T10 = mv. It turns out that in general T10 = T01.
• T11 is the current of x-momentum in the x direction, i.e. it has units of momentum per time.
Physically, a flow of momentum is equivalent to a pressure.
Upon a Lorentz transformation, the stress energy tensor transforms differently from a four-vector.
For a four-vector we would have

x′
t′

= γ

1 −v
−v 1

x
t

but for the stress-energy tensor we have

u′ S′
S′ σ′

= γ2

1 −v
−v 1

u S
S σ

1 −v
−v 1

.
Expanding to first order in v, we have
S′
= (u + σ)v + O(v2
).
The momentum of the photons is found by integrating S′, giving
pγ =
Z L/γ
0
S′
dx = L(u + σ)v + O(v2
).
The first term, Luv, is just what we would naively expect by transforming the four-momentum
of the photons as a four-vector, and it’s the answer we find in part (b). The pressure exerted by
the walls yields the additional contribution vLσ. The energy density in the rest frame is simply
u = Nℏω0/L, while the pressure exerted by the walls is σ = Nℏω0/L. Summing the terms gives
pγ = 2Nvℏω0
just as we found more directly in part (c).
Now we’re in a position to see where the extra momentum is. The walls of the box cause a
constant current of x-momentum to flow rightward through the photons. Hence the internal forces
of the box must have an equal and opposite current of x-momentum leftward. Thus, by the same
argument as above, in the primed frame pbox contains a contribution −Lσv which precisely cancels
the unwanted Lσv contribution in the photons. Hence the total momentum is indeed
ptot = Mv + Nℏω0v
as it must be. For a similar setup, see this paper, which considers a capacitor containing an
electromagnetic field, modeled classically instead of in terms of photons.
18
Kevin Zhou Physics Olympiad Handouts
Remark
In Newtonian mechanics, we know that for an isolated system, ptot = MtotvCM. In relativity,
however, the idea of a “center of mass” no longer makes any sense. For example, suppose
a particle with mass m decays into two photons. Each of the photons has no mass, so the
center of mass is no longer defined! You can always define the mass of an overall system as p
E2
tot − p2
tot, and this quantity remains equal to m, but it’s no longer the sum of the masses
of the individual parts. Since you can’t break the mass of the system into parts, you can’t
sum over the parts to define a center of mass.
However, you can still define a “center of energy”,
xCE =
P
i xiEi
P
i Ei
where Ei is the energy of particle i. It turns out that in relativity, we always have
ptot =
Etot
c2
vCE
which is called the “center of energy theorem”. (Specifically, it comes from applying Noether’s
theorem to the symmetry of Lorentz boosts.) Of course, this reduces to ptot = MtotvCM in
the nonrelativistic limit, since in that case almost all the energy is rest energy, E = mc2.
4 Relativistic Dynamics
The previous questions could be solved by just using momentum and energy conservation. In this
section we’ll consider some deeper problems, which require considering the detailed dynamics.
Idea 5
In relativity, the force four-vector is defined as
fµ
=
dpµ
dτ
.
There’s a bit of a subtlety here. In relativity, the invariant mass of a system can change
when it absorbs energy. For example, putting a system on the stove gives it energy but not
momentum, thereby changing m =
p
E2 − p2. That’s a perfectly valid four-force, but it
feels strange to call it a “force”.
Thus, we often restrict to “pure” four-forces, which don’t change the invariant mass. Since
dm2
dτ
=
d
dτ
(p · p) = 2mu · f
this corresponds to demanding f · u = 0. For a pure force, fµ = maµ.
19
Kevin Zhou Physics Olympiad Handouts
There’s another common definition of force, with three-vectors. Since three-accelerations
transform in a rather complicated way, as we saw in R1, we define the three-force as
F =
dp
dt
.
The three-force doesn’t directly tell us how the energy changes over time, so it’s only a useful
concept for pure forces. Both F and fµ are common, but they are different even for pure
forces (Fi and fi differ by a factor of γ), so you should carefully track which is being used.
[4] Problem 18. In this problem, we’ll derive some properties of the three-force and four-force. For
reference, see section 12.5 of Morin.
(a) Show that for a particle traveling along the x̂ direction,
F = m(γ3
ax,γay,γaz).
This is the relativistic three-vector analogue of F = ma, but it implies that force is no longer
parallel to acceleration, which will be important in the problems below.
(b) Now let S′ be the momentary rest frame of that particle. In this frame, since the particle
is at rest, the nonrelativistic expression F′ = ma′ holds. By using the transformation of
acceleration derived in R1, show that
F = (F′
x,F′
y/γ,F′
z/γ).
So transverse forces are reduced, while longitudinal forces are unchanged. Since we derived this
using Lorentz transformations alone, it applies to all kinds of forces, including electromagnetic
forces, or the tension force from a string.
(c) Show that the components of the four-force are
fµ
=

γ
dE
dt
,γF

.
Use the relativistic transformation of the four-force to rederive the result of part (b).
(d) The four-impulse is defined as
∆pµ
=
Z
fµ
dτ.
But you can also consider the Lorentz scalar
Z
fµ
dxµ.
This ought to be something nice and simple that you already know about. What is it?
Solution. (a) Using the chain rule and the definition of p,
F =
dp
dt
= γma + mv
dγ
dt
.
20
Kevin Zhou Physics Olympiad Handouts
Thus, the y and z components in the desired expression are correct, while the x component
(i.e. the part parallel to v itself) has an extra contribution due to the second term. We have
dγ
dt
=
dγ
dv
dv
dt
= γ3
vax
using a result from R1, so
Fx = γmax(1 + γ2
v2
) = mγ3
ax
as desired.
(b) We see that
F = m(γ3
ax,γay,γaz) = m(γ3
a′
x/γ3
,γa′
y/γ2
,γa′
z/γ2
) = (F′
x,F′
y/γ,F′
z/γ)
where we used F′ = ma′ in the last step.
(c) We just note that
d
dτ
=
dt
dτ
d
dt
= γ
d
dt
which gives
fµ
=
dpµ
dτ
= γ
dpµ
dt
=

γ
dE
dt
,γ
dp
dt

=

γ
dE
dt
,γF

.
In the primed frame of part (b), the components are
fµ′
= 0,F′

.
Applying a Lorentz transformation to the original frame, we have
fx
= γF′
x, fy
= F′
y, fz
= F′
z.
Since we know that fi = γFi, we find
Fx = F′
x, Fy = F′
y/γ, Fz = F′
z/γ
as desired.
(d) Using the chain rule, we have
I =
Z
fµ dxµ
dτ
dτ =
Z
f · udτ =
Z
1
2m
dm2
dτ
dτ = ∆m
so I gives the change in rest mass, which is of course a scalar, and just zero in most cases.
Remark
In popular science books and some older textbooks, relativistic dynamics is introduced using
the idea of relativistic mass, mr = γm. This definition implies the simple results E = mrc2
and p = mrv, so these books often say that relativistic dynamics is just like ordinary
dynamics, except that moving objects have more mass. This picture is misleading because it
breaks down once you go beyond one dimension: in problem 18, you showed that F is not
21
Kevin Zhou Physics Olympiad Handouts
even parallel to a, so there’s no definition of mass that recovers Newtonian mechanics. You
instead need separate “transverse” and “longitudinal” relativistic masses,
F = m⊥a⊥ + m∥a∥, m⊥ = γm, m∥ = γ3
m.
I think this picture is honestly more confusing than helpful, though. It’s better to avoid
talking about mass and acceleration too much, and focus more on momentum and energy.
