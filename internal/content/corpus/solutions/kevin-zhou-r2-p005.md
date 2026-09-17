---
id: kevin-zhou-r2-p005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r2-p005
solution_type: author
source_document: solution-document-kevin-zhou-r2sol
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R2Sol.pdf."
---

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
[3] Problem 6.  W 1 0USAPhO 2002, problem A2.
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

c2
/E +
1
m
(1 − cosθ)
−1
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
[3] Problem 9.  W 1 0USAPhO 2017, problem A4. However, to make it a little harder, solve part (a)
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
q
2Emp + m2
p ,0

because the total spatial momentum vanishes by definition. On the other hand, we also know
that the reaction can just barely happen when both the proton and pion are produced at rest
in the center of mass frame, with a final four-momentum of (mp + mπ,0). Hence we have
q
2Emp + m2
p = mp + mπ
and plugging in the numbers gives E = 145MeV. As expected, this is a little bit more than
the mass-energy of the pion, because the final system inevitably has some kinetic energy too.
