---
id: solution-document-kevin-zhou-r2sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-r2-ex005, kevin-zhou-r2-ex007, kevin-zhou-r2-ex008, kevin-zhou-r2-ex009, kevin-zhou-r2-ex010, kevin-zhou-r2-p001, kevin-zhou-r2-p003, kevin-zhou-r2-p005, kevin-zhou-r2-p010, kevin-zhou-r2-p015, kevin-zhou-r2-p016, kevin-zhou-r2-p025]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/R2Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Relativity II: Dynamics
For relativistic dynamics, see chapter 12 of Morin or chapter 13 of Kleppner and Kolenkow. For a
deeper explanation of four-vectors, see chapter 2 of A First Course in General Relativity by Schutz.
There is a total of 83 points.
1 Energy and Momentum
Idea 1
The relativistic generalizations of energy and momentum are
E = γmc2
, p = γmv.
These quantities are conserved, and m is defined as the rest mass. Note that m is not
conserved in inelastic processes, while E is conserved; this is precisely the opposite of what
happens nonrelativistically. The relativistic energy E automatically counts all contributions
to the energy, including internal energy and rest energy mc2.
[4] Problem 1. A few useful facts about energy and momentum, for future reference.
(a) Recalling the definition of the four-velocity from R1, show that
(E/c,p) = muµ
where uµ is the four-velocity. Setting c = 1 below, this shows pµ = (E,p) is a four-vector.
(b) Let’s check the Lorentz transformation properties of pµ explicitly. Let S′ be the frame moving
to the right with velocity vx̂ with respect to the frame S. If a particle has velocity ux̂ in
frame S, write E′ and p′ in frame S′ in terms of E and p.
(c) Show that the norm of the four-momentum is
pµ
pµ = E2
− |p|2
= m2
.
This is a very useful result that can simplify the solutions to many problems below, especially
ones that simply ask for a final mass m. In this case one can often compute a single four-
momentum and find its norm to get the answer.
(d) The expressions in idea 1 for E and p don’t work for photons, since γ is infinite and m is zero.
Instead, show that for a photon we have pµ = ℏkµ.
(e) A system’s center of mass frame is the one where its momentum is zero. For a system with
total energy E and momentum p, show that the center of mass has velocity v = p/E.
(f) In Newtonian mechanics, the kinetic energy K of an object with fixed mass m satisfies
dK = v · dp. Show that this also holds in relativity, assuming the rest mass m is fixed.
(g) As we’ll discuss in more detail below, the force three-vector is defined as F = dp/dt in
relativistic mechanics. Show that dK = F · dx, continuing to assume that m is fixed.
1

Kevin Zhou Physics Olympiad Handouts
Solution. (a) We saw in R1 that uµ = (γc,γv). Multiplying by m gives the desired result
muµ
= (γmc,γmv) = (E/c,p).
(b) In the frame S′, the particle has speed (u − v)/(1 − uv), corresponding to Lorentz factor
γ′
=

1 −
(u − v)2
(1 − uv)2
 −1/2
= (1 − uv)γuγv.
Thus, the boosted values of E and p are
E′
= γ′
m = γv(E − vp), p′
= γ′
m(u − v)/(1 − uv) = γv(p − vE).
These are exactly the expected Lorentz transformation properties.
(c) We compute the norm E2 − p2 = γ2m2 − γ2m2v2 = γ2m2(1 − v2) = m2.
(d) This follows directly from the de Broglie relations E = ℏω and p = ℏk.
(e) In this frame, p′ = 0. Then using the result of part (b), we have p − vE = 0 where v is the
velocity of the center of mass in the original frame. Therefore, v = p/E.
(f) Starting with E2 = p2 + m2 and taking the differential of both sides,
2E dE = 2p · dp.
Solving for dE, we have
dE =
p
E
· dp = v · dp
where we used part (e). Since K and E are the same up to a constant, we have dK = v · dp.
(g) We have F · dx = (Fdt) · (dx/dt) = v · dp = dK using part (f).
Remark
The result of part (e) is equivalent to saying that momentum p is always associated with the
motion of energy Ev. This is a very general statement, which also holds at the differential
level: momentum density is equal to energy flux density. One example of this was given
in E7, where it was noted that the electromagnetic momentum density p was equal to the
Poynting vector S, in units where c = 1.
Idea 2
In relativistic dynamics problems, it is almost always better to work with energy and mo-
mentum than velocity; one typically shouldn’t even mention velocities unless the problem
asks for or gives them.
We’ll start with some very simple problems to warm up, setting c = 1 throughout.
2

Kevin Zhou Physics Olympiad Handouts
Example 1: KK 13.5
A particle of mass m and speed v collides and sticks to a stationary particle of mass M. Find
the final speed of the composite particle.
Solution
The total four momentum is (E,p) = (γm + M,γmv), so the final speed is
vf =
p
E
=
γmv
γm + M
=
v
1 + (M/m)
√
1 − v2
.
Example 2: Morin 12.2
Two photons of energy E collide at an angle θ and create a particle of mass M. What is M?
Solution
The total four-momentum is
pµ
= (2E,E(1 + cosθ),E sinθ).
The mass is just the norm of the four-momentum, so
M =
q
4E2 − E2(1 + cosθ)2 − E2 sin2
θ = E
√
2 − 2cosθ = 2E sin(θ/2).
[1] Problem 2 (Morin 12.4). A stationary mass MA decays into masses MB and MC. What are the
energies of these two masses?
Solution. In the lab frame, the momenta of the masses B and C adds to zero, so p2
B = p2
C, so
E2
B − M2
B = E2
C − M2
C.
We also know that EB + EC = MA, so simplifying gives
EB − EC =
M2
B − M2
C
MA
.
Therefore, we conclude
EB =
M2
A + M2
B − M2
C
2MA
, EC =
M2
A − M2
B + M2
C
2MA
.
[1] Problem 3. An atom has mass m when in an excited state. It is initially at rest, and then decays
back into its ground state, emitting a photon in the process. These two states differ in energy by
∆. What is the photon’s energy?
Solution. To do this properly, we have to remember that all of the energy of a system at rest
contributes to its mass; therefore, the mass of the atom in its ground state is m − ∆. The final
four-momentum of the atom is (m − Eγ,Eγ), and squaring this gives
(m − ∆)2
= (m − Eγ)2
− E2
γ.
3

Kevin Zhou Physics Olympiad Handouts
Solving for Eγ gives
Eγ = ∆ −
∆2
2m
.
It’s a bit lower than the obvious answer, because of the kinetic energy of the recoiling atom. For
nuclei decaying and emitting gamma rays, this difference can be measured with nuclear spectroscopy.
[2] Problem 4.   W 1 0USAPhO 2012, problem A1.
[2] Problem 5. A particle with mass M and energy E moves towards a detector when it suddenly
decays and emits a photon in its direction of motion. The detector measures a photon angular
frequency of ω. What was the photon’s angular frequency in the rest frame of the decaying particle?
Solution. It’s not hard to solve this using four-momentum conservation, but a nice alternative is
to use the Doppler shift formula from R1. Letting p be the particle’s momentum in the lab frame,
ω = ω′
r
1 + v
1 − v
= ω′
s
E + p
E − p
= ω′ E + p
p
E2 − p2
= ω′ E + p
M
.
Thus, the answer is
ω′
=
M
E +
√
E2 − M2
ω.
If you solve the problem a different way, you might get the equivalent answer
ω′
=
E −
√
E2 − M2
M
ω.
[3] Problem 6.   W 1 0USAPhO 2002, problem A2.
Now let’s try some more involved problems.
Example 3: Woodhouse 7.5
A particle of rest mass m moves with velocity u and collides elastically with a second particle,
also of rest mass m, which is initially at rest. After the collision, the particles have velocities
v and w. Show that if θ is the angle between v and w, then
cosθ =
(1 −
√
1 − v2)(1 −
√
1 − w2)
vw
.
Solution
First, a remark: in Newtonian mechanics, you learn that in an inelastic collision, the kinetic
energy is dissipated into microscopic thermal motion. This often leads students to ask: if we
keep track of the motion of all particles in detail, then are all collisions actually perfectly
elastic? According to particle physics, the answer is no. You really can lose kinetic energy
by converting it to mass-energy, in collisions which change the identity of the particles or
produce new particles. Therefore, at particle colliders, we say a collision is elastic if the
particles that come out are precisely the same as the ones that came in. For this example,
that means the final particles still have rest mass m.
4

Kevin Zhou Physics Olympiad Handouts
Conservation of energy and momentum imply
1 + γu = γv + γw, γuu = γvv + γww.
To get an expression with cosθ, we take the norm squared of the momentum equation,
γ2
uu2
= γ2
vv2
+ γ2
ww2
+ 2γvγwvwcosθ.
This can be substantially simplified by noting that γ2
uu2 = γ2
u − 1, giving
2vwγvγw cosθ = γ2
u − γ2
v − γ2
w + 1.
The appearance of so many squares motivates us to square both sides of the energy equation,
1 + 2γu + γ2
u = γ2
v + γ2
w + 2γvγw.
Using this to simplify the right-hand side of the previous equation,
2vwγvγw cosθ = 2γvγw − 2γu = 2(γvγw − γv − γw + 1) = 2(γv − 1)(γw − 1)
where in the second step we used conservation of energy. After solving for cosθ, we get the
desired result. This was a bit of a slog, but it’s representative of the hardest calculations
you’ll ever have to do for special relativity problems.
As a check on that result, note that in the nonrelativistic limit we get cosθ = 0, indicating
a 90◦ angle, which you saw in M3. At relativistic speeds, the opening angle gets smaller,
which is a manifestation of the “beaming” effect you saw in R1. This is a familiar effect,
commonly observed in particle physics experiments.
[3] Problem 7 (Morin 12.6). A ball of mass M and energy E collides head-on elastically with a
stationary ball of mass m. Show that the final energy of mass M is
E′
=
2mM2 + E(m2 + M2)
2Em + m2 + M2
.
This problem is a little messy, but you can save yourself some trouble by noting that E′ = E must
be a root of the equation you get for E′.
Solution. Let the answer be x. The final momentum is (E + m,p), split between PM = (x,pM)
and Pm. Now, Pm = (E + m,p) − (x,pM), so taking the norm squared, we see that
m2
= (E + m − x)2
− (
p
E2 − M2 −
p
x2 − M2)2
=⇒ m2
= (E2
+ m2
+ x2
+ 2Em − 2Ex − 2mx) − E2
+ M2
− x2
+ M2
+ 2
p
(E2 − M2)(x2 − M2)
=⇒ 0 = 2Em − 2Ex − 2mx + 2M2
+ 2
p
(E2 − M2)(x2 − M2)
=⇒ (E2
− M2
)(x2
− M2
) = (mx + Ex − Em − M2
)2
.
This is manifestly a quadratic in x, and we know that one root is x = E, so applying Vieta’s
formulas and some tedious algebra reveals that
x =
2mM2 + E(m2 + M2)
2Em + m2 + M2
5

Kevin Zhou Physics Olympiad Handouts
as desired.
[3] Problem 8 (Morin 12.7). In Compton scattering, a photon collides with a stationary electron.
(a) If the photon scatters at an angle θ, show that the resulting wavelength λ′ is given in terms
of the original wavelength λ by
λ′
= λ +
h
mc
(1 − cosθ)
where m is the mass of the electron.
(b) While Compton scattering can occur for photons of any frequency, it is usually used in reference
to X-rays, which have very high frequencies. Why?
Solution. (a) The original momentum of the system is (E + m,E,0) where E is the original
energy of the photon. Let x be the new energy of the photon. Then Pγ = (x,xcosθ,xsinθ),
and Pm = (E + m,E,0) − x(1,cosθ,sinθ). Taking the norm squared, we see that
m2
= (E + m − x)2
− (E − xcosθ)2
− x2
sin2
θ
=⇒ 0 = 2Em − 2Ex − 2mx + 2Excosθ
=⇒ x =
Em
m + E(1 − cosθ)
= c2

c2
/E +
1
m
(1 − cosθ)
 −1
.
Now, λ = hc/x = λ + λC(1 − cosθ) where λC = h/mc.
(b) The wavelength shift is independent of frequency, and since c = fλ the frequency shift (which
is what we measure directly) is larger if the frequency begins large. The energy loss for visible
photons is hardly noticeable, while it is very large for X-rays.
Indeed, for such photons we usually talk about Thomson scattering (as in E7) which does
not change the frequency of the photon at all. At the level of relativistic dynamics, Thomson
scattering is nothing more than the low-frequency limit of Compton scattering. Incidentally,
at even higher frequencies, the result has more subtle corrections due to quantum field theory
effects, and the cross section is given by the Klein–Nishina formula.
[3] Problem 9.   W 1 0USAPhO 2017, problem A4. However, to make it a little harder, solve part (a)
without assuming Eb is small.
6

Kevin Zhou Physics Olympiad Handouts
2 Optimal Collisions
These collision problems are conceptually simple, but somewhat more mathematically challenging.
Idea 3
The minimum energy configuration of a system of particles with fixed total momentum is
the one where they all move with the same velocity. This is easiest to show by boosting to
the center of mass frame (i.e. the frame with zero total momentum) and then boosting back.
Example 4: KK 14.3
A high energy photon (γ ray) collides with a proton at rest. A neutral pi meson is produced
according to the reaction
γ + p → p + π0
.
What is the minimum energy the γ ray must have for this reaction to occur? The rest mass
of a proton is 938MeV and the rest mass of a neutral pion is 135MeV.
Solution
The total four-momentum is (E +mp,E) where E is the energy of the γ ray in the lab frame.
This four-momentum has norm 2Emp + m2
p. Crucially, the norms of four-momenta don’t
change upon changing frames, so the total four-momentum in the center of mass frame is
 q
2Emp + m2
p ,0

because the total spatial momentum vanishes by definition. On the other hand, we also know
that the reaction can just barely happen when both the proton and pion are produced at rest
in the center of mass frame, with a final four-momentum of (mp + mπ,0). Hence we have
q
2Emp + m2
p = mp + mπ
and plugging in the numbers gives E = 145MeV. As expected, this is a little bit more than
the mass-energy of the pion, because the final system inevitably has some kinetic energy too.
Example 5
Two photons of angular frequencies ω1 and ω2 collide head-on. Under what conditions can
an electron-positron pair be created?
Solution
The naive answer is to say the energy present must exceed the rest energy,
ℏω1 + ℏω2 ≥ 2me.
However, this is incorrect because the electron and positron will inevitably have kinetic
energy, since the photons initially have a net momentum. The lowest total kinetic energy
7

Kevin Zhou Physics Olympiad Handouts
is achieved when the electron and positron come out with the same velocity, which is the
velocity of the center of mass frame of the photons.
The total four-momentum of the photons is
(ℏ(ω1 + ω2),ℏ(ω1 − ω2))
in the lab frame, and (Ecm,0) in the center of mass frame. Therefore,
E2
cm = ℏ2
((ω1 + ω2)2
− (ω1 − ω2)2
) = 4ℏ2
ω1ω2.
In the center of mass frame, the electron and positron can be produced at rest, so the
condition is Ecm ≥ 2me, which means
ℏ
√
ω1ω2 ≥ me.
[3] Problem 10. In a particle collider, a proton of mass m is given kinetic energy E and collided with
an initially stationary proton.
(a) What is the minimum E required to produce a proton-antiproton pair, p+p → p+p+p+p?
(b) How about N proton-antiproton pairs, where N = 1 in part (a)?
The scaling behavior of the answer you found in part (b) is the reason many particle colliders use
two beams going in opposite directions, even though managing two beams precisely enough to
collide them at the desired points is technically challenging.
Solution. (a) Keep in mind that here, E stands for kinetic energy. (This is an annoying conven-
tion used in some older sources.) The total relativistic energy is γm = E + m.
Now, let p be the momentum of the moving proton. The total four momentum is then
pµ
= (E + 2m,p).
We end up with four particles of mass m. From the idea above, the threshold energy is
minimized when all of these particles have the same velocity, so they each have pi = p/4.
Then the final four-momentum is
pµ
= 4(
p
m2 + p2/16,p/4).
Setting the two expressions for p0 equal, we have
p
16m2 + p2 = E + 2m.
Squaring both sides and eliminating p using (E + m)2 = p2 + m2 gives
2Em = 12m2
, E = 6m.
With this result in mind, the Bevatron at Berkeley was designed to accelerate protons to a
kinetic energy of 6.6m. It discovered the antiproton in 1955, and won the 1959 Nobel prize.
8

Kevin Zhou Physics Olympiad Handouts
(b) Now we have 2N + 2 particles of mass m at the end, which have pi = p/(2N + 2). Now we
instead have
pµ
= (2N + 2)(
p
m2 + (p/(2N + 2))2, p/(2N + 2))
and setting the energies equal again gives
p
(2N + 2)2m2 + E2 + 2Em = E + 2m
and solving gives
E = (2N2
+ 4N)m.
In other words, the energy required scales up quadratically in the mass-energy of the stuff
you want to create!
[3] Problem 11 (MPPP 196). Two ultrarelativistic particles with negligible rest mass collide with
oppositely directed momenta p1 and p2 elastically, where p1 > p2. Find the minimum possible angle
between their velocities after the collision.
Solution. Let q1,q2 be the two new momenta of the new (still ultra-relativistic) particles. We see
that q1 + q2 = (p1 − p2)x̂ ≡ d and q1 + q2 = p1 + p2 ≡ 2a (energy).
d
q1 q2 π − θ
A
The point A lies on an ellipse with foci at the endpoints of d, and it is equivalent to maximize
the angle at vertex A of the above triangle. This occurs when when A is on the perpendicular
bisector of d. Doing some basic geometry, we find that in this case, the angle between the velocities
is
θ = π − 2sin−1

p1 − p2
p1 + p2

= 2cos−1

p1 − p2
p1 + p2

.
An alternative equivalent answer is
θ = cos−1

1 −
8p1p2
(p1 + p2)2

which also works when p1 < p2.
[3] Problem 12.   h 1 0IPhO 2003, problem 3A.
[4] Problem 13.   r 1 0APhO 2007, problem 3B. A comprehensive relativistic dynamics problem.
3 Relativistic Systems
9

Kevin Zhou Physics Olympiad Handouts
Idea 4
The truly nonintuitive part of the result E = mc2 is that changes in internal energy cause
changes in mass. As a simple example, if you take a box of gas and heat it up, it’ll have
more mass than before, in every sense: the system will have more inertia, it’ll have more
momentum and kinetic energy when moving, it’ll be heavier, and it’ll exert more gravitational
force on other objects. Some of the questions below illustrate how this can occur.
[3] Problem 14. The facts that E = γmc2 and p = γmv are conserved are fundamentally new results
of relativity, so the logically cleanest way to set up the theory is to simply make these postulates,
without any further justification. But this certainly isn’t the most convincing way, if you don’t
already believe that relativity is true.
The most striking new result is the huge rest energy E = mc2. Throughout his life, Einstein came
up with many derivations of this result, starting from more familiar postulates. In this problem,
we’ll cover Baierlein’s simplified version of Einstein’s 1946 derivation of E = mc2. Specifically, we
will prove that when the energy content of a body at rest decreases by ∆E, its mass decreases by
∆E/c2. The result then follows if one assumes that a zero-mass object has no rest energy.
Consider an object of mass M at rest, and suppose it emits photons with equal and opposite
momenta pγ upward and downward simultaneously. Let m be the final mass of the object.
(a) Now consider the same process in a frame moving with speed v ≪ c to the left. By using
conservation of momentum in the x direction, show that
M = m +
2pγ
c
.
Don’t use the relativistic momentum formula here, because we’re trying to imagine we don’t
already know relativity. Just use the fact that at v ≪ c the Galilean formula works.
(b) Using energy conservation, conclude the desired result.
(c) The derivation also works if one considers a frame moving upward with speed v ≪ c. Carry
out this analysis.
(d) The physicist Hans Ohanian has claimed that all of Einstein’s derivations of E = mc2, including
this one, were inadequate. What do you think?
Solution. (a) The initial momentum is Mv. After emitting the photons, the body still has the
same speed, so its final momentum is mv. Using Galilean velocity addition, the photons are
emitted at a slight angle in this frame, contributing momentum 2pγv/c.
(b) Since the speeds are low, the mv2/2 and Mv2/2 contributions to the energy are second order
and hence negligible. Energy 2pγc goes into photons, so an equal amount must have come
out of rest energy. But the change in mass is 2pγ/c, so ∆E = ∆M c2.
Finally, assuming that the rest energy of a particle goes to zero as its mass does to zero, which
seems reasonable, gives E = Mc2.
(c) Initially, the mass M has momentum downwards of Mv, and after the photons are emitted,
the mass m has momentum mv which is made up for by the photons of different momenta
due to Doppler shifting. Since energy and momenta are proportional to frequency, which is
10

Kevin Zhou Physics Olympiad Handouts
proportional to 1 ± v/c, the difference in the momenta of the photons is pγ(2v/c) so we get
M = m+2pγ/c. For energy, we have 1
2Mv2 +∆E = 1
2mv2 +pγc(1+v/c+1−v/c), and with
second order v terms we have ∆E = 2pγc = ∆Mc2. The rest will be the same as above.
(d) This is a very subjective question, so opinions will vary. Here’s my personal opinion.
Special relativity contains nonrelativistic mechanics as a special case. Therefore, there is no
need to motivate any of the results of special relativity using arguments from nonrelativistic
physics – relativity stands on its own. Instead one can derive the results of nonrelativistic
physics by taking limits of the results of special relativity. (It’s just like quantum mechanics:
you don’t derive Schrodinger’s equation from F = ma, you derive F = ma as a limiting
behavior of Schrodinger’s equation.) Because of this, there is absolutely nothing illogical
about simply defining E = γmc2. We then believe it because it reduces to results we already
know about (E = mv2/2 in the nonrelativistic limit) and also produces new verified predictions
(nuclear power works).
(It’s also worth noting that in nonrelativistic physics, the definition of energy simply follows
from it being the conserved quantity associated with time translations. If we continue to
define energy that way in special relativity, we automatically get E = γmc2. So it’s not like
E = γmc2 is some ad hoc, independent assumption on top of what we assumed in R1.)
Given the above, what is the point of trying to derive the rest energy expression at all? It’s
just to make people more comfortable with the new ideas of relativity. In physics you can
often derive the same result in multiple ways. The rest energy follows automatically from the
full framework of relativity, but it also follows by using part of the framework of relativity
and part of the framework of nonrelativistic physics. This is useful if you’re trying to explain
why rest energy makes sense, to people who don’t already believe in it: you get to the result
using fewer unfamiliar assumptions, and possibly only ones that have already been tested
experimentally. That’s why arguments like these were important historically, when scientists
were first grappling with relativity, and pedagogically, when students first encounter relativity.
A derivation using this kind of “hybrid” framework is necessarily weaker. For example, we
had to make the somewhat random assumption above that a zero-mass object has no rest
energy. You could argue that the only way to deduce that is to start with E = mc2, making
the argument “circular”. But that doesn’t really matter. The point of such a derivation is
just to provide motivation, by explaining something new and unfamiliar in terms of things
that are more believable. If you find the result that a zero-mass object has no rest energy
believable, then the derivation works for you.
Example 6: USAPhO 2023 B2
A spaceship of mass m is propelled by light produced by lasers on Earth, with total power
P. The light evenly impacts a sail on the spaceship, and reflects directly backwards. If the
spaceship starts near Earth at rest, how long will it take, in the Earth’s frame, to accelerate
the spaceship to a speed vf?
11

Kevin Zhou Physics Olympiad Handouts
Solution
The spaceship is accelerated by the light, because light carries momentum. Consider a piece of
the beam with total momentum dpx in the Earth’s frame, which impacts the spaceship when
it has speed v. Lorentz transforming to the ship’s frame, this momentum is dp′
x = γ(1−v)dpx,
and it is flipped in sign upon reflection to −dp′
x. Lorentz transforming that final momentum
back to the Earth’s frame gives a final momentum −γ2(1 − v)2 dpx. Thus, the change in the
spaceship’s momentum is
dPx = 1 + γ2
(1 − v)2

dpx =
2
1 + v
dpx.
Considering the rate at which the beam impacts the spaceship gives dpx = P(1 − v)dt, so
dPx
dt
=
1 − v
1 + v
(2P).
On the other hand, using the definition of relativistic momentum gives
dPx
dt
=
mdv/dt
(1 − v2)3/2
.
Combining these results and separating and integrating yields
2Pt
m
=
Z vf
0
dv
(1 − v)2
√
1 − v2
.
Note that we implicitly assumed m was a constant, which is valid because the mirror is
perfectly reflective: the spaceship doesn’t absorb any energy, so its rest mass doesn’t change.
Carrying out the integral gives a somewhat messy final answer.
Remark
Based on the solution above, it would be natural to conclude that the amount of energy
required to accelerate to final speed vf is Pt, but that’s wrong. That would be the
energy required to run the laser for time t, but in reality, we can shut off the laser earlier;
we actually want the end of the laserpulse to reach the spaceship at time t in the Earth’s frame.
For small final speeds, this doesn’t matter much, but for a highly relativistic final speed it
makes a big difference. Several publications argued back and forth over the correct answer
to this puzzle. For a clear overview of the situation, see this paper.
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
Example 7
A circular pendulum consists of a mass m attached to a string of length L, with the other
end fixed. Suppose the mass rotates in a small circle of radius r ≪ L, with a nonrelativistic
velocity in the lab frame. Find the angular frequency of the oscillations in the lab frame, and
in a frame where the entire setup moves vertically with a relativistic speed v.
Solution
In the lab frame, this is a standard rotational mechanics problem. By the small angle
approximation, the horizontal component of the three-force is F⊥ = mgr/L. This is equal to
F⊥ = ma⊥ = mω2
r
from which we immediately conclude ω =
p
g/L. We can use the results of problem 18 to
find the answer in the other frame. The two effects are that the transverse force is redshifted,
and the force’s relation with acceleration is different,
F⊥ =
mgr
γL
, F⊥ = γma⊥ = γmω2
r.
Combining these results, we find
ω =
1
γ
r
g
L
.
Of course, γ is just the usual time dilation factor. We knew this had to be the answer, because
time dilation follows directly from the postulates of relativity, but now we can explicitly show
this is the right answer in this specific example. (With similar reasoning, you can show that
a mass-spring system oscillates slower, too.)
Remark
It’s important not to misunderstand the meaning of the above example. Like many old
physicists, Oleg Jefimenko decided one day that relativity had to be completely wrong. His
argument was along the lines of the previous example: he showed that length contraction
and time dilation could be derived dynamically in some simple cases, without the need to
switch frames. Therefore, they can’t be “real”.
This argument doesn’t make sense. It’s like saying energy can’t be real because you can solve
many mechanics problems with just F = ma, without needing to invoke energy conservation.
22

Kevin Zhou Physics Olympiad Handouts
In reality they’re both wonderful tools with complementary uses.
Furthermore, it turns out to be extremely difficult to derive the core results of relativistic
dynamics (such as the “transverse” and “longitudinal” masses, already measured by the
turn of the 20th century) without using relativistic assumptions. In the early 1900s, many
physicists tried to explain the dynamics of the electron solely in terms of its electromagnetic
fields. Since the field energy and field momentum of a moving point charge are infinite, it was
necessary to take a model of the electron with finite size, but there were many possibilities,
leading to many different expressions for the transverse mass, as well as persistent issues like
the 4/3 problem mentioned in E7.
Relativity circumvents all of these issues. If you accept the postulates of relativity, you don’t
need to care whether the electron is shaped like a sphere, an ellipsoid, a torus, or a dumbbell:
as long as its dynamics obey Lorentz symmetry, its four-momentum is a four-vector, and the
usual results follow. And that’s just as well, because with the advent of quantum mechanics,
we learned that the electron is not like any of these classical models. But the relativistic
result still holds, because our quantum theories obey the postulates of relativity too. This
flexibility comes about because, like thermodynamics, relativity isn’t so much a physical
theory, as it is a framework within which many theories can be formulated.
[3] Problem 19 (Morin 12.8). Consider a dumbbell made of two equal masses, m. The dumbbell
spins around, with its center pivoted at the end of a stick.
If the speed of the masses is v, then the energy of the system is 2γm. Treated as a whole, the system
is at rest. Therefore, the mass of the system must be 2γm. (Imagine enclosing it in a box, so that
you can’t see what’s going on inside.) Convince yourself that the system does indeed behave like
a mass of M = 2γm, by pushing on the stick (when the dumbbell is in the “transverse” position
shown in the figure) and showing that F = dp/dt = Ma.
Solution. Consider speeding up the system by dv to the left. The relativistic velocity addition
formula for u plus dv becomes
u + dv
1 + udv
c2
= (u + dv)(1 − udv/c2
) = u + dv(1 − u2
/c2
).
Let γu be 1/
√
1 − u2. Let γ′
u be the gamma factor for u + dv(1 − u2). One can easily check that
γ′
u = γ(1 + udv). Thus, the change in momentum due to the extra dv is
γm(1 + udv)(u + dv(1 − u2
)) − γmu = γmdv,
which is surprisingly what one would naively expect. Thus, the total change in momentum of the
system is simply dp = 2γmdv, so dp/dt = M dv/dt, as desired.
23

Kevin Zhou Physics Olympiad Handouts
Idea 6
The Lorentz force is a three-force as defined in problem 18. That is, we have
F = q(E + v × B) =
dp
dt
and the force keeps the invariant mass fixed.
Example 8
A point charge q of mass m is initially at rest, and experiences a uniform electric field E.
What time t does it take the object to move a distance x?
Solution
In R1, we found x(t) for a uniformly accelerated rocket, which assumed a constant three-force
in the momentarily comoving frame. By contrast, here we have a constant three-force
F = qE in the lab frame. However, we showed in problem 18 that forces along the direction
of motion are the same in both frames, so these two problems are actually identical!
So we already know the answer to the problem, but it turns out that in the lab frame
perspective, there’s a slick alternative derivation that yields the result in one step. The trick
is to consider the energy and momentum. Recall from problem 1 that the three-force F obeys
F = dp/dt and F = dE/dx. Therefore, when the object reaches its destination,
E = m + Fx, p = Ft.
But we also know that E2 = p2 + m2, so plugging the results in and solving for t gives
t =
r
x2 +
2mx
F
which is compatible with our expression for x(t) back in R1. The reason this was so easy is
that momentum and energy behave simply in relativity, while position and velocity don’t.
Example 9
The LHC accelerates protons to an energy of E = 7TeV, and is a tunnel of radius R = 4.3km.
If the protons are kept in a circular orbit in the tunnel by a magnetic field of magnitude B,
find the required value of B. If the value of B is kept constant, what would be the radius of
a future collider which accelerates protons to an energy of 20TeV?
Solution
The centripetal force required is
F =
dp
dt
= ωp
24

Kevin Zhou Physics Olympiad Handouts
where ω is the angular velocity. The speed of the protons is very close to c, so the angular
velocity is ω ≈ c/R, and the momentum is p ≈ E/c. The deflecting force is qvB ≈ qcB, so
qcB ≈ ωp ≈
E
R
.
Therefore, we have
B =
E
qcR
=
7 × 1012
(3 × 108)(4.3 × 103)
T = 5.4T.
This is slightly lower than what is actually used, because magnets don’t take up the entire
tunnel. Since R ∝ E, the future collider would need a radius of
R′
=
20TeV
7TeV
R = 12km.
Remark
You might be wondering how to write the Lorentz force as a four-force. It certainly should
be possible, since we know electromagnetism is compatible with relativity (indeed, it led
us to relativity in the first place), but it seems challenging because electromagnetism is so
naturally written in terms of three-vectors. It turns out that the proper way to express the
electromagnetic field in relativity is to join the electric and magnetic fields together, making
them the components of an antisymmetric rank 2 tensor,
Fµν =




0 Ex Ey Ez
−Ex 0 −Bz By
−Ey Bz 0 −Bx
−Ez −By Bx 0




called the field strength tensor. Then the four-force is
fµ
= quνFµν
where uν is the four-velocity. Note that this ensures the rest mass of the particle is fixed, as
f · u = quµuνFµν
= −quµuνFνµ
= −f · u
using the antisymmetric property, so f · u = 0. (In fact, the requirement to keep the rest
mass fixed is quite restrictive, so this is one of the simplest possible relativistic force laws.)
[2] Problem 20.   W 1 0USAPhO 2013, problem A3. A warmup question using the above facts.
[3] Problem 21 (MPPP 192). An electron moving with speed v0 = 0.6c enters a homogeneous electric
field that is perpendicular to its velocity.
25

Kevin Zhou Physics Olympiad Handouts
When the electron leaves the field, its velocity makes an angle 45◦ with its initial direction.
(a) Find the speed v1 of the electron after it has crossed the electric field.
(b) Find the distance d shown above, if the strength of the electric field is E = 510kV/m.
Note that the rest energy of an electron is 510keV.
Solution. (a) Since we are working with three-forces here, we use F = dp/dt. This tells us that
the component of momentum px is unchanged. Since the velocity is at a 45◦ angle, so is the
momentum, so py = px. Thus, the momentum increases by a factor of
√
2. The momentum
per mass started at 0.6/0.8 = 3/4, so its now 3
4
√
2. Thus,
v1
p
1 − v2
1
=
3
√
2
4
=⇒
v2
1
(1 − v2
1)
=
9
8
=⇒ v1 =
3c
√
17
.
Note that this implies that vx has decreased, even though the electric 3-force had no x-
component. As we warned above, this is a manifestation of the fact that F is no longer
parallel to a in relativity.
(b) As we showed in problem 1, the basics of work still work the same in relativity. The amount
of work done on the electron is eEd, while the energy change is m∆γ, where
∆γ =
1
p
1 − 9/17
−
1
p
1 − 9/25
=
√
17
√
8
−
5
4
.
Plugging in the numbers gives d = 20.8cm.
[3] Problem 22 (MPPP 194). The trajectories of charged particles, moving in a homogeneous magnetic
field, can be seen by observing the tracks they leave in cloud chambers. Because the particles are
moving quickly, it is impossible to see the tracks being formed; instead, one must infer what
happened from the shapes of the tracks. Is it possible that, when a charged particle decays into
two other charged particles, the trail segments close to the decay point (before the particles have
started to slow down significantly) are arcs of circles that touch each other, as shown?
26

Kevin Zhou Physics Olympiad Handouts
If so, identify which track belongs to the original particle. If not, explain why not.
Solution. Number the three tracks as 1, 2, and 3 starting from the inside, and let their radii be
r1 < r2 < r3. We know that even for relativistic motion, the momentum of a particle is p = qBr.
We can then use conservation of momentum and conservation of charge to investigate each case.
Case 1: Particle 1 decays, implying that a particle comes in along track 1, and particles leave
along tracks 2 and 3. The curvatures of the tracks imply
q1 > 0, q2 > 0, q3 > 0.
Conservation of charge and momentum imply
q1 = q2 + q3, q1r1 = q2r2 + q3r3.
By combining these equations, we may solve for r1 to find
r1 =
q2r2 + q3r3
q2 + q3
.
However, this is impossible because we know r1 is smaller than both r2 and r3.
Case 2: Particle 2 decays, which implies
q1 < 0, q2 < 0, q3 > 0.
Conservation of charge and momentum imply
q2 = q1 + q3, |q2r2| = |q1r1| − |q3r3|.
Being careful with minus signs, momentum conservation implies
−q2r2 = −q1r1 − q3r3.
Again solving for r1, we find
r1 =
q3r3 + (−q2)r2
q3 + (−q2)
which is a contradiction for the same reason as in case 1.
Case 3: Particle 3 decays, which implies
q1 < 0, q2 > 0, q3 < 0.
Conservation of charge and momentum imply
q3 = q1 + q2, |q3r3| = |q1r1| − |q2r2|.
Again being careful with minus signs, momentum conservation implies
−q3r3 = −q1r1 − q2r2.
Again solving for r1, we find
r1 =
q2r2 + (−q3)r3
q2 + (−q3)
which is again a contradiction. Thus, the series of tracks shown is impossible.
27

Kevin Zhou Physics Olympiad Handouts
[3] Problem 23.   W 1 0USAPhO 2006, problem A4.
[3] Problem 24.   ^ 1 0USAPhO 2022, problem B2. A nice problem on deriving the time dilation
formula for an electrostatic “clock”.
[3] Problem 25. Consider a particle at the origin at time t = 0, with initial x-momentum p0 and
total energy E0. A constant three-force F acts on the particle in the −y direction.
(a) Calculate y(t). (Hint: don’t write down any equations containing γ, because it depends on
vx(t), which we don’t know yet.)
(b) Calculate x(t).
(c) Combine these results to get y(x). This is the path of a relativistic projectile.
Solution. We use the technique of example 8, setting c = 1 throughout.
(a) By the definition of three-force and the work-energy theorem,
px = p0, py = −Ft, E = E0 − Fy.
To find y(t), we use the fact that vy = py/E, so
dy
dt
= −
Ft
E0 − Fy
.
Separating and integrating, then using the initial condition gives
y2
−
2E0
F
y = t2
.
Solving the quadratic in y gives
y(t) =
E0
F
−
r
E2
0
F2
+ t2.
(b) Similarly, we have
dx
dt
=
px
E
=
p0
E0 − Fy
=
p0
p
E2
0 + F2t2
where we used the result of part (a). Separating and integrating,
x =
Z t
0
p0 dt
p
E2
0 + F2t2
.
Nondimensionalizing the integral, it can be performed with the hyperbolic trigonometric
substitution t = (E0/F)sinhθ, giving
x(t) =
p0
F
sinh−1 Ft
E0
.
28

Kevin Zhou Physics Olympiad Handouts
(c) To get y(x), we invert the above to get t(x) and plug it into our expression for y(t). We have
Ft
E0
= sinh
Fx
p0
and plugging this in gives
y(x) =
E0
F
(1 − cosh(Fx/p0c))
where we restored c in the last step. In other words, relativistic projectile motion follows an
inverted catenary! To check the nonrelativistic limit, we just note that
coshu = 1 +
u2
2
+ ...
which tells us that
y(x) ≈ −
1
2
E0
F

Fx
p0c
 2
≈ −
1
2
mF
p2
0
x2
≈ −
1
2
F
mv2
0
x2
which is indeed the usual parabola.
[5] Problem 26.   h 1 0IPhO 1994, problem 1. A clean and neat relativistic dynamics problem. Print
out the custom answer sheets before starting.
Remark
Problem 26 is a nice model for mesons, particles composed of two quarks. It is a simple
version of the MIT “bag model”, which was one of the most important advances in the field
in the 1970s. The original paper has thousands of citations, and contains the answer to the
problem in figure 3.
Idea 7
In string theory, strings carry a constant tension T, in the sense that the force F = dp/dt
exerted on one piece of string by its neighbors is T in the momentary rest frame of that piece.
The strings may stretch or shrink freely, and have zero mass when they have zero length.
[3] Problem 27 (Morin 12.16). A simple exercise involving relativistic string.
(a) Two masses m are connected by a string of length ℓ and constant tension T. The masses are
released simultaneously, and they collide and stick together. What is the mass, M, of the
resulting blob?
(b) Consider this scenario from the point of view of a frame moving to the left at speed v.
The energy of the resulting blob must be γMc2. Show that you obtain the same result by
computing the work done on the two masses.
29

Kevin Zhou Physics Olympiad Handouts
Solution. (a) The total work done on the masses is ℓT, so by energy conservation this must
manifest as rest energy in the final blob, M = 2m + ℓT/c2.
(b) Let c = 1. The initial energy is 2γm, so we need to show that the work done is γℓT.
At first glance, this is puzzling, because the initial distance between the masses in this frame
is ℓ/γ. Therefore, naively applying W =
R
F dx, we have
W =
Z
T dx1 −
Z
T dx2 = T
Z
dx1 − dx2 = Tℓ/γ
which is wrong. The resolution is that we have assumed the masses are released simultaneously
in the original frame, which means they aren’t released simultaneously in this frame.
The mass on the left will start accelerating first, and after some time, the mass on the right
will accelerate. In the original frame, these two events have ∆x = ℓ and ∆t = 0. Thus,
applying the Lorentz transformation,
∆x′
= γ∆x = γℓ.
Suppose that after it starts experiencing the tension, the left mass moves a distance x0 before
it collides with the right mass. Then the above calculation shows that after the right mass
starts experiencing the tension, it moves a distance x0 − ∆x′ until collision. Thus,
W = T(x0 − (x0 − ∆x′
)) = γℓT
as desired.
[3] Problem 28 (Morin 12.37). Two equal masses are connected by a relativistic string with tension
T. The masses are constrained to move with speed v along parallel lines, as shown.
The constraints are then removed, and the masses are drawn together. They collide and make one
blob which continues to move to the right. Is the following reasoning correct?
The forces on the masses point in the y direction. Therefore, there is no change in
the momentum of the masses in the x direction. But the mass of the resulting blob is
greater than the sum of the initial masses (because they collide with some relative speed).
Therefore, the speed of the resulting blob must be less than v (to keep px constant), so
the whole apparatus slows down in the x direction.
If your answer is “no,” exactly what’s wrong about the reasoning above?
Solution. The reasoning is incorrect. To see this, we can consider working in the initial rest frame
of the system. In this frame, the masses just approach each other and collide, ending up at rest. So
in the original frame, the whole apparatus must keep going at the same speed as before.
30

Kevin Zhou Physics Olympiad Handouts
There are two ways to see what’s going on. First, consider just the top mass, and work throughout
in the original frame. Then the incorrect statement is the very first sentence: the three-force on the
top mass is not always in the y direction. Recall the relativistic transformation of the three-force
derived in problem 18. This tells us that if we align the x′ axis with the instantaneous motion of
the particle, then
F = (F′
x′,F′
y′/γ,F′
z′/γ).
Once the top mass gets moving, it has velocity components along both x and y, so the x′ axis must
be tilted accordingly. Upon applying this formula (i.e. redshifting the y′ component of the force),
we end up with a nonzero x component of the force, so the logic above fails.
Alternatively, we can consider the entire system, of the masses and string. In this case, the
statement that fails is the second parenthetical, “to keep px constant”. The issue here is that the
string itself has a linear mass density of T/c2, due to the energy stored in it in the stretching process,
and hence also carries momentum. This needs to be accounted for in the momentum conservation
equation, and gives the “missing” momentum we need. Note that this is totally compatible with
the previous paragraph; the force discussed there is precisely how this string momentum ends up
transferred to the masses.
Example 10: Right Angle Lever Paradox
In 1909, Lewis and Tolman found one of the first relativistic paradoxes. Consider a rigid
lever in static equilibrium, with both arms of length L, experiencing the forces shown at left.
In a frame where the lever moves to the right with speed v, one of the lever arms will be
contracted to L/γ, as shown at right. In addition, by the results of problem 18, the vertical
external forces will be redshifted to F/γ. This implies a net torque of
τ = FL −
F
γ
L
γ
= FLv2
.
The paradox is, given that τ = dL/dt, why doesn’t the lever rotate?
Solution
The resolution is that, in the frame shown at right, the angular momentum of the lever is
constantly increasing. The horizontal forces are continually doing equal and opposite work
on the lever, resulting in a upward flow of energy of rate Fv in the vertical arm. As explained
below problem 1, in relativity, energy flow is equal to momentum density, so the total upward
31

Kevin Zhou Physics Olympiad Handouts
momentum in the vertical arm is FLv. Therefore,
dL
dt
=
dx
dt
(FLv) = FLv2
exactly as expected.
Remark: Relativistic Torque
The resolution of the right angle lever paradox is very controversial, with dozens of papers
written on the subject, so we should discuss what it even means to “resolve” a paradox. As
long as we believe relativity is self-consistent, we already know what’s going to happen: the
lever won’t rotate. Everything the lever does is determined by F = dp/dt alone, so if it looks
like angular momentum considerations give a different answer, that just means we haven’t
formulated the latter correctly. The reason there are so many different resolutions out there
is just that people choose different ways to define torque and angular momentum.
The solution above is the standard one, and its implicit definition of angular momentum can
be motivated by Noether’s theorem. That’s a reasonable choice, since it’s a specific output
of a useful and general theorem, and we thereby know for sure that it’s conserved for isolated
systems. Unfortunately, explaining the definition takes some advanced math.
We define the angular momentum density tensor
Mµνρ
(x) = xµ
Tνρ
(x) − xν
Tµρ
(x)
where the right-hand side contains the stress-energy tensor, from the solution to problem 17.
The total angular momentum is an antisymmetric rank 2 tensor,
Jµν
(t) =
Z
dxMµν0
(x).
Noether’s theorem states that it is this quantity that is conserved for an isolated system, due
to symmetry under rotations and boosts. More specifically, the three spatial components
Jxy, Jyz, and Jzx just make up ordinary angular momentum, e.g. for a single point particle
they would assemble into the vector r×p = r×(γmv). And the other components J0x, J0y
and J0z have to do with the center of mass motion.
If there is an external four-force per unit proper volume fµ(x), which in terms of the stress-
energy tensor implies ∂µTµν = fν, the rate of change of angular momentum is
dJµν
dt
= τµν
, τµν
=
Z
dxxµ
fν
(x) − xν
fµ
(x)
which looks quite similar to the Newtonian expression. The component of this equation
relevant to this paradox is dJxy/dt = τxy, where
Jxy
=
Z
dxxTy0
− yTx0
, τxy
=
X
k
x(k)
F(k)
y − y(k)
F(k)
x
32

Kevin Zhou Physics Olympiad Handouts
where the index k sums over the four forces, and the Ti0 stand for the density of momentum
in the i direction. From this point on, the solution proceeds as above.
There is something a bit strange here, though. In the lever’s rest frame, the angular momen-
tum is zero, so if Jµν were a tensor, it would have to be zero in all frames, but instead it
rises to arbitrarily high values in the other frame. The reason is that when there are external
torques, Jµν isn’t a tensor at all, just like how the four-momentum wasn’t a four-vector in the
solution to problem 17. That’s one of the reasons there’s a controversy: there just doesn’t
exist any definition that has all the nice properties one might want.
33
