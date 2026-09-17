---
id: kevin-zhou-erev-p028
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-erev-p028
solution_type: author
source_document: solution-document-kevin-zhou-erevsol
source_pdf: sources/kevin_zhou/site/handouts/ERevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/ERevSol.pdf."
---

[3] Problem 28. [A] Electromagnetism is symmetric under charge conjugation C, parity P, and time
reversal T. Explicitly, this means the following: suppose there are charge and current densities
ρ(r,t) and J(r,t), which then produce fields E(r,t) and B(r,t). A test charge q is acted on by
these fields, taking a path x(t). Under one of these symmetry transformation, all of these quantities
can be changed, but the new fields should still obey Maxwell’s equations, and the path of the test
charge should still obey Newton’s second law, ma = q(E + v × B).
9
Kevin Zhou Physics Olympiad Handouts
(a) Under charge conjugation, the signs of all charges are flipped. What are the new charge and
current densities ρ′(r,t) and J′(r,t)? What are the new fields E′(r,t) and B′(r,t)? The path
of the test charge is still x′(t) = x(t). Verify it still obeys Newton’s second law.
(b) Under time reversal, everything at time t now occurs at time −t. For example, ρ′(r,t) =
ρ(r,−t). Verify the test charge’s new path still obeys Newton’s second law.
(c) Under parity, everything at position x is mapped to −x. For example, the new path of the
test charge is x′(t) = −x(t). Verify its new path still obeys Newton’s second law.
(d) The Poynting vector S = (E × B)/µ0 describes the energy flow in the electromagnetic field.
How does it transform under C, P, and T?
(e) In quantum field theory, one important but subtle quantity is the “theta term”,
Z
dt
Z
drE(r,t) · B(r,t)
where the integrals are over all time and all space. Does the theta term stay the same under
C, or P, or T? How about the combined transformations CP and CPT?
Solution. (a) If the charge is flipped, then the current density is flipped too, because currents
are made of moving charges. Since the fields are proportional to charge and current density,
both the electric and magnetic field are flipped. Thus,
ρ′
(r,t) = −ρ(r,t), J′
(r,t) = −J(r,t), E′
(r,t) = −E(r,t), B′
(r,t) = −B(r,t).
The acceleration of the test charge stays the same. Meanwhile, the force on it stays the same
too, because the fields flip and its own charge flips, q → −q. Thus, Newton’s second law is
still satisfied.
(b) The charge density is simply moved to a flipped time,
ρ′
(r,t) = ρ(r,−t).
On the other hand, the current also has its sign flipped, because currents are due to moving
charges, and these charges have their velocity flipped,
J′
(r,t) = −J(r,−t).
In a quasistatic situation, we know that E is sourced by ρ and B is sourced by J, so
E′
(r,t) = E(r,−t), B′
(r,t) = −B(r,−t).
Since the path of the test charge has flipped, its velocity has flipped while its acceleration
stays the same,
x′
(t) = x(−t), v′
(t) = −v(−t), a′
(t) = a(−t).
Therefore, we need the Lorentz force to stay the same. Indeed, E hasn’t flipped sign, while
v × B has flipped sign twice.
10
Kevin Zhou Physics Olympiad Handouts
(c) The charge density is simply moved to a flipped position,
ρ′
(r,t) = ρ(−r,t).
On the other hand, the current also has its sign flipped, because currents are due to moving
charges, and these charges have their velocity flipped,
J′
(r,t) = −J(−r,t).
In a quasistatic situation, we know that E is sourced by ρ and B is sourced by J, so
E′
(r,t) = −E(−r,t), B′
(r,t) = B(−r,t).
The signs here are flipped from the time reversal case, because E and B are related to ρ and
J by spatial derivatives, which also flip sign. (If this is confusing, consider a few examples,
like a solenoid or point charge!)
The remarkable feature of this result is that we usually think of E and B as vector fields,
meaning they assign a direction to every point in space. Since directions reverse under parity,
we would naively expect both of them to flip sign. The reason this doesn’t happen is that B
is not a true vector at all, but rather a different geometric object called an axial vector. The
directions of axial vectors are determined by applying the right-hand rule, which means they
transform differently under parity because a right hand is mapped to a left hand.
Since the path of the test charge has flipped, its velocity and acceleration have flipped,
x′
(t) = −x(t), v′
(t) = −v(t), a′
(t) = −a(t).
As expected, the Lorentz force also flips sign, because E flips sign, and v × B flips sign due
to the v.
(d) Under charge conjugation, both E and B flip, so the Poynting vector stays the same. This
tells us that energy is emitted by the motion of reversed charges in the same way as the
original charges.
Under time reversal, only B flips, which means S′(r,t) = −S(r,−t). That is, energy now
flows in the opposite direction. The time reverse of energy flowing out is energy flowing in.
Under parity, only E flips, which means S′(r,t) = −S(−r,t). This is just the expected way a
vector transforms under parity; directions are flipped.
(e) Under charge conjugation, both E and B flip, so the theta term stays the same.
Under both parity and time reversal, one of the fields flips sign, so the integral of the fields
flips sign. We thus say the theta term is odd under P and T.
Under the combined transformation CP, there is still one sign flip. But under CPT, there
are two sign flips, so the theta term stays the same.
In theoretical physics, the theta term is interesting because it does not stay the same under
CP. This is a rather unusual feature, as most of the rest of the terms in the Standard Model’s
Lagrangian stay the same, or approximately the same, under CP. On the other hand, it is a
famous theorem that in any relativistic quantum field theory, everything has to stay the same
under CPT.
11
Kevin Zhou Physics Olympiad Handouts
Remark
In E7, you learned that an accelerating particle emits electromagnetic radiation, and
therefore loses energy. But under time reversal, an accelerating particle is still accelerating,
so it still should lose energy. How can this be consistent with time reversal symmetry, which
says the particle should instead gain energy?
The resolution is that when you apply time reversal, you need to time reverse everything.
Suppose a particle accelerates at time t = 0 and emits a burst of radiation, which exists for
t > 0. The time reverse of this process has radiation moving towards the particle at time
t < 0, until at t = 0 it hits the particle and gets absorbed. The reason this seems unrealistic
has nothing to do with the laws of electromagnetism, which treat both scenarios as equally
valid, and everything to do with the second law of thermodynamics.
12
