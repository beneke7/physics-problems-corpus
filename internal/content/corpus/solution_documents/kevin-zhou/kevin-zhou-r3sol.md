---
id: solution-document-kevin-zhou-r3sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/R3Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-r3-p009, kevin-zhou-r3-p016, kevin-zhou-r3-p017, kevin-zhou-r3-p022, kevin-zhou-r3-p023]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/R3Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Relativity III: Fields
Relativity in electromagnetism is covered in chapter 5 of Purcell and then sprinkled in throughout the
rest of the book, notably in sections 6.7 and 9.7, and appendix H. For a more advanced discussion,
see chapter 3 of A First Course in General Relativity by Schutz for tensors, and chapter 12 of
Griffiths and chapters I-34, II-13, and II-25 through II-28 of the Feynman lectures for relativistic
electromagnetism. For a brief taste of general relativity, see chapter 14 of Morin, and chapter II-42
of the Feynman lectures. For a great, accessible introduction to tests of general relativity, see Was
Einstein Right? by Will. There is a total of 90 points.
1 Electromagnetic Field Transformations
Idea 1: Field Transformations
If the electromagnetic field is (E,B) in one reference frame, then in a reference frame moving
with velocity v with respect to this frame, the components of the field parallel to v are
E′
∥ = E∥, B′
∥ = B∥
while the components perpendicular are
E′
⊥ = γ(E⊥ + v × B⊥), B′
⊥ = γ

B⊥ −
v
c2
× E⊥

.
As alluded to in R2, this is the transformation rule for the components of a rank 2
antisymmetric tensor.
Under these transformations, Maxwell’s equations remain true in all inertial frames, and the
Lorentz force transforms properly as well. Furthermore, a Lorentz transformation does not
change the total amount of charge in a system, where total charge is defined by Gauss’s law
via the electric flux through a surface containing the system.
Remark
There are many ways of deriving the field transformations. The tensor method alluded to
above is the mathematically cleanest, but the conceptually clearest is to think about how
some simple setups must Lorentz transform, if Maxwell’s equations are to remain true. For
example, boosting a capacitor increases the charge density on the plates because of length
contraction, which is why E′
⊥ contains γE⊥. (Further examples are given in chapter 5 of
Purcell, which is essential reading for this section.) Another method is to demand that the
Lorentz force obeys the transformation of three-force derived in R2.
[4] Problem 1. Basic facts about the electric and magnetic fields of a moving charge.
(a) Show that the field of a point charge q at the origin moving with constant velocity v is
E =
q
4πϵ0r2
1 − v2
(1 − v2 sin2
θ)3/2
r̂
in units where c = 1, and θ is the angle from v. In particular, the field is still radial.
1

Kevin Zhou Physics Olympiad Handouts
(b) Verify that the charge of this moving charge is still q. It may be useful to consult the integral
table in appendix K of Purcell.
(c) Argue that the magnetic field of this point charge must be exactly
B =
v
c2
× E.
(d) Verify thatthe previous resultis correctin nonrelativistic electromagnetism (i.e. using Coulomb’s
law and the Biot–Savart law).
The result of part (a), first found by Heaviside in 1888, implies that the field lines and equipotential
surfaces of a moving charge contract by a factor of γ in the direction of motion. In fact, this was
what inspired Lorentz and Fitzgerald to propose length contraction in the first place! It’s hard to
measure the Coulomb field of a relativistic electron, so this prediction was first verified in 2022.
Solution. For concreteness, let the charge be moving along the z direction, and let the primed
frame be the rest frame of the charge.
(a) By rotational symmetry, it suffices to show this holds in the xz plane. Consider the point
(x,z,t) = (rsinθ,rcosθ,0)
Lorentz transforming to the primed frame, this point corresponds to
(x′
,z′
,t′
) = (rsinθ,γrcosθ,t′
)
where the value of t′ is irrelevant since the charge is at rest in this frame. By Coulomb’s law,
the electric field at that point is
E′
x =
q
4πϵ0
x′
((x′)2 + (z′)2)3/2
, E′
z =
q
4πϵ0
z′
((x′)2 + (z′)2)3/2
.
Applying the field transformations, the field in the original frame is
Ex = γEx′ =
q
4πϵ0
γrsinθ
r3(sin2
θ + γ2 cos2 θ)3/2
, Ez = E′
z =
q
4πϵ0
γrcosθ
r3(sin2
θ + γ2 cos2 θ)3/2
.
This is a radial field, as desired, and rewriting sin2
θ + γ2 cos2 θ = γ2(1 − v2 sin2
θ) and
simplifying gives the desired result.
(b) The electric flux through a unit sphere surrounding the charge must still be q/ϵ0, so we need
to show that
1 =
1
4π
Z
1 − v2
(1 − v2 sin2
θ)3/2
dΩ.
Setting up spherical coordinates as usual, the dϕ integral gives 2π, leaving
1 − v2
2
Z π
0
sinθdθ
(1 − v2 sin2
θ)3/2
=
1 − v2
2
−cosθ
(1 − v2)
p
1 − v2 sin2
θ
π
0
= 1
as desired, where we used equation (K.15) from Purcell.
(c) We know B′ = 0, and using the field transformations immediately gives the result.
2

Kevin Zhou Physics Olympiad Handouts
(d) Applying Coulomb’s law, we have
v × E
c2
= (µ0ϵ0)
qv
4πϵ0r2
ẑ × r̂ =
µ0
4π
qv sinθ
r2
φ̂
which is precisely what the Biot–Savart law predicts.
[3] Problem 2 (Purcell 5.29). Two protons are moving antiparallel to each other, along lines separated
by a distance r, with the same speed v in the lab frame, as shown.
Consider the moment the protons are a distance r apart.
(a) Show that the three-force experienced by each proton due to the electric field of the other is
F =
γe2
4πϵ0r2
.
(b) Compute the three-force experienced by one of the protons by transforming to its rest frame,
computing the force there, then transforming back to the lab frame. In particular, show that
this is not equal to the result of part (a).
(c) Show that the discrepancy is resolved if the magnetic three-force is also included.
Recall from R2 that the Lorentz three-force is F = q(E + v × B). You will also have to use the
three-force transformation laws you derived there.
Solution. (a) Using part (a) of problem 1 gives
eE =
e2
4πϵ0r2
1 − v2
(1 − v2)3/2
=
γe2
4πϵ0r2
as desired.
(b) In the rest frame of one proton, we have
F′
= eE′
=
e2
4πϵ0r2
1 − v′2
(1 − v′2)3/2
, v′
=
2v
1 + v2
.
Simplifying a bit yields
F′
=
e2
4πϵ0r2
1 + v2
1 − v2
.
Using our result from R2 that transverse forces are redshifted,
F =
F′
γ
=
γe2
4πϵ0r2
(1 + v2
).
This is more than the result we found in part (a).
3

Kevin Zhou Physics Olympiad Handouts
(c) The extra three-force due to the magnetic field adds to the electric force,
evB = ev2
E =
γe2
4πϵ0r2
v2
where we used part (c) of problem 1. This is exactly the missing piece.
Remark
In problem 1, we found that the electric field of a uniformly moving charge in special
relativity is exactly radial, even though the field is no longer spherically symmetric. But why?
Mechanically, the fact that the field is radial in the charge’s rest frame just means
z/x = Ez/Ex. When we Lorentz transform, z is Lorentz contracted by a factor of γ, while
Ex is enhanced by a factor of γ, so we still have the equality of ratios z′/x′ = E′
z/E′
x.
But there’s a deeper point of view. Suppose two particles of charge ±q and mass m orbit
each other with speed v and separation r. If we didn’t know the answer to this problem, we
might naively guess the electric field “lags behind” the particles, e.g. pointing to where the
particle used to be according to a speed of light delay, then we would expect it to be tilted
away from the radial direction by an angle ∼ v. However, this would make the particles
spiral in or out, breaking angular momentum conservation.
More precisely, the angular momentum of the charges is actually not quite conserved, because
they emit electromagnetic radiation, which carries away angular momentum. However, this
effect is quite small. To estimate it, recall from E7 that P ∼ q2a2, where we set ϵ0 = c = 1.
This energy loss corresponds to a “radiation reaction” force Frad acting backwards on each
particle. Using P ∼ Fradv and a = v2/r, and eliminating a, we have
Frad ∼
q2v3
r2
.
So the leading nonradial force is O(v3) smaller than the Coulomb force. This means there
cannot possibly be an O(v) “lag” effect, as described in the previous paragraph.
We also learn something else. In earlier handouts, we considered many problems where
charges interacted directly via the Coulomb force, without having to think about what the
electric and magnetic fields were. Is it possible to do something similar, accounting for
relativistic corrections? This is an important question, since simulating particles interacting
directly with each other is much faster than simulating fields.
The answer is that it’s possible up to O(v2) corrections, as described by the Darwin
Lagrangian. But at O(v3) the radiation reaction force shows up, and that force is associated
with exciting radiation in the field, which doesn’t exist in a particle description. (Simi-
lar logic holds for gravity, though in that case the radiation reaction force shows up at O(v5).)
People once tried to guess velocity-dependent forces to fit data, including Weber for electro-
magnetism and Gerber for gravity. However, this only works up to some point, and there
are many possibilities to guess. The benefit of a field theory (Maxwell’s electromagnetism or
4

Kevin Zhou Physics Olympiad Handouts
general relativity) is that it’s a simple starting point, from which one can compute all forces.
[3] Problem 3 (Purcell 5.24). In the rest frame of a particle with charge q, another particle with
charge q is approaching with relativistic velocity v. Assume that both particles are extremely
massive, and hence their velocities are nearly constant. The second particle passes a minimum
distance b from the first.
(a) Show that the impulse acquired by each particle is perpendicular to v with magnitude
q2/2πϵ0vb. (Hint: you can avoid doing a nasty integral by using Gauss’s law.)
(b) If the particles have mass m, roughly how large does m have to be for the above result to be
a good approximation?
Solution. (a) Let the stationary particle be at the origin, and let the velocity of the moving
particle be along the x-axis. Then the impulse experienced by the moving particle is
J =
Z
F dt =
q
v
Z ∞
−∞
Ez(x,b)dx.
On the other hand, suppose we consider the electric flux through an infinite cylinder of radius
b, oriented along the x-axis. Then
Φ =
Z
E · dS = 2πb
Z ∞
−∞
Ez(x,b)dx.
Therefore, we conclude
J =
q
v
Φ
2πb
=
q2
2πϵ0vb
.
The great thing about this derivation is that exactly the same reasoning applies to the impulse
experienced by the stationary charge. It can be written as a similar integral, except that
Ez(x,b) is now the electric field of a moving charge. But the impulse is the exactly the same in
magnitude because the Gauss’s law argument still works. That’s good to know, as it ensures
momentum is conserved.
(b) First off, we’ve ignored magnetic forces, even though the particles will pick up transverse
velocity and hence begin to feel them. Since magnetic forces are small compared to electric
forces when the (transverse) speeds of the charges are nonrelativistic, we should require
J ≪ mc
to be safe. Now, given this assumption, we can focus on the electric forces. Here we have
assumed the charges don’t move transversely during the whole process. The final transverse
velocity is of order J/m, and the total time the interaction takes is of order b/v, so we need
J
m
b
v
≪ b
which simplifies to
J ≪ mv.
Since this is strictly stronger than the other condition, this is the only one we really need. In
other words, this kind of calculation only works if the transverse speed J/m the charges pick
up is small compared to the original speed, i.e. if the angular deflection is small.
5

Kevin Zhou Physics Olympiad Handouts
[3] Problem 4.   m 1 0USAPhO 2014, problem B2. This isn’t the clearest of problems, but it introduces
and justifies the Galilean field transformations we first saw in E4.
[3] Problem 5 (Purcell 5.30). Consider an infinite wire oriented along x̂ with linear charge density λ
and current I. Show that under a Lorentz boost along x̂, (λ,I) transforms like (ct,x).
Solution. This can get kind of complicated if you think about a completely general set of charges
in the wire. On the other hand, we already know that the way electromagnetic fields transform
doesn’t depend on what makes the fields, and we know that Maxwell’s equations relate the fields
to the charge density and current. Thus, the transformation of (λ,I) shouldn’t depend on precisely
what’s responsible for the λ and I, so we can take a concrete choice that’s easy to work with. (As
you’ve seen throughout the relativity handouts, this kind of argument is common and very useful!)
Specifically, let’s suppose the wire is built entirely out of point charges of linear number density
n and charge q moving with velocity ux̂. Then we have
λ = nq, I = nqu.
Now we move to a frame moving to the right with speed v. In this frame, the charges are moving
with speed
u′
=
u − v
1 − uv
and, by applying length contraction, the linear number density is
n′
=
γu′
γu
n =
s
1 − u2
1 − u′2 n = (1 − uv)γvn.
Putting things together, we have
λ′
= n′
q = (1 − uv)γvnq, I′
= n′
qu′
= (u − v)γvnq.
Writing this in terms of the unprimed quantities, we conclude
λ′
= γv(λ − vI), I′
= γv(I − vλ)
which is precisely the desired result.
[2] Problem 6 (Purcell 6.22). A neutral wire carries current I. A stationary charge q is nearby; the
Lorentz force on this charge is zero. Verify this remains true in a frame moving parallel to the wire
with velocity v, by using the Lorentz transformations of the fields.
Solution. Applying the transformations of problem 5, in that frame we have
λ′
= −γvvI, I′
= γvI.
In other words, the wire picks up a net charge. The electric and magnetic forces are
qE =
γvvIq
2πrϵ0
, qvB =
µ0γvvIq
2πr
which balance because µ0ϵ0 = 1, in our units where c = 1.
6

Kevin Zhou Physics Olympiad Handouts
[3] Problem 7 (Purcell 6.69). Two very long sticks each have uniform linear proper charge density λ.
One stick is stationary in the lab frame, while the other moves to the left with speed v, as shown.
They are 2r apart, and a stationary point charge q lies midway between them. Find the Lorentz
three-force on the charge in the lab frame, and also in the frame of the bottom stick, and verify the
forces relate properly.
Solution. Let upward-pointing forces be denoted with a positive sign. In the lab frame, we only
have an electric force. The charge on the bottom stick is length contracted, so
F = q

γλ
2πϵ0r
−
λ
2πϵ0r

=
qλ
2πϵ0r
(γ − 1).
In the frame of the bottom stick, the bottom stick has charge density λ, while the top stick has
λ′
= γλ, I′
= γvλ
where I′ is directed to the right. Now the charge experiences both an electric and a magnetic force.
The electric force is
F′
E = −
qλ
2πϵ0r
(γ − 1)
by the same logic as in the lab frame. The magnetic force is
F′
B = qvB =
µ0γv2qλ
2πr
=
qλ
2πϵ0r
(γv2
).
The sum of the two is
F′
=
qλ
2πϵ0r
(γv2
− γ + 1) =
qλ
2πϵ0r

1 −
1
γ

=
F
γ
exactly as expected.
Remark: Are Wires Neutral?
The classic example in problem 6 starts by assuming the wire is neutral in the lab frame.
But in problem 5, you showed that if a current-carrying wire is neutral in one reference
frame, then it’s not neutral in other reference frames. So how do we know which frame a real
wire is neutral in? Is it the lab frame, the frame where the current vanishes, or something else?
It actually depends on the details, so for concreteness, let’s consider two very long, parallel
wires, connected at one end by a battery and at the other end by a resistor. Before current
starts flowing, the whole system is neutral. So if the wires picked up a net charge density,
the battery would have to have a large compensating charge, which would make it blow
up. Or, to say it another way, if a net charge appears in the rest of the system, it pulls a
7

Kevin Zhou Physics Olympiad Handouts
compensating charge out of the battery, so the battery keeps the wires net neutral. You can
then show that in a boosted frame, the wires stay net neutral, as expected.
But this argument only shows that the wires have opposite charge densities ±λ in the lab
frame. Can we show that λ = 0? Actually, we can’t, because it’s not true! As briefly
discussed in a problem in E2, wires in circuits do carry charges in the lab frame, even if
everything is ideal. One simple way to see this here is to note that the wires are at different
electrical potentials. That’s only possible if there’s an electric field between them, which is
created by the charge densities carried by the wires.
[3] Problem 8. The vectors E and B cannot go into four-vectors, as they transform among each other,
but rather fit together into an antisymmetric rank two tensor. As a result, there is a different set
of associated invariant quantities.
(a) Show that under the relativistic field transformations, the quantities E · B and E2 − B2 are
both invariant. (Hint: this can be done using vector notation, using E⊥ · E∥ = B⊥ · B∥ = 0.)
These are the two basic invariants, out of which all other invariants can be constructed.
(b) Suppose that in an inertial frame, E is zero at a given point and B is nonzero. Is it possible
to find an inertial frame where B is zero at that point?
(c) Recall from E7 that, in units where ϵ0 = µ0 = 1, the energy density of the electromagnetic
field is E = E2/2 + B2/2, and the Poynting vector is S = E × B. Show that E2 − |S|2 is
invariant. (Hint: don’t use the field transformations for this part.)
Solution. (a) Plugging in the transformations, we have
E′
· B′
= E′
⊥ · B′
⊥ + E′
∥B′
∥ = γ2
(E⊥ + v × B⊥) · (B⊥ − v × E⊥) + E∥B∥.
The cross terms vanish, since v × V is always perpendicular to V, leaving
E′
· B′
= γ2
(1 − v2
)E⊥ · B⊥ + E∥B∥ = E · B
as desired. As for the other quantity, we have
E′2
− B′2
= E′2
∥ + E′
⊥ · E′
⊥ − B′2
∥ − B′
⊥ · B′
⊥
= E2
∥ + γ2
(E⊥ + v × B⊥)2
− B2
∥ − γ2
(B⊥ − v × E⊥)2
= E2
∥ + γ2
(E⊥ · E⊥ + v2
B⊥ · B⊥) − B2
∥ − γ2
(B⊥ · B⊥ + v2
E⊥ · E⊥)
= E2
∥ + E⊥ · E⊥ − B2
∥ − B⊥ · B⊥
= E2
− B2
as desired, where in the third equality the cross-terms canceled.
(b) This is impossible, because then E2 − B2 would have different signs in the two frames.
8

Kevin Zhou Physics Olympiad Handouts
(c) If we plugged in the field transformations, the algebra would get extremely messy. Instead,
we use the hint that this invariant can be constructed out of the ones found in part (a), so
E2
− |S|2
=

1
2
E2
+
1
2
B2
 2
− |E × B|2
=

1
2
E2
+
1
2
B2
 2
+ (E · B)2
− E2
B2
=

1
2
E2
−
1
2
B2
 2
+ (E · B)2
.
This is constructed out of the invariants in part (a), so it is invariant as well.
Remark: Is Magnetism Real?
Purcell’s electromagnetism textbook is exceptional because it shows that a force like
magnetism must exist, if one believes Coulomb’s law and relativity. The idea is simple. We
know how forces transform between frames, and given some reasonable assumptions, can
also deduce how electric fields transform between frames. If electric fields were all there
were, then electric forces would have to transform just like three-forces, but they don’t. So
there must be some other force to make up the difference, and it turns out to be precisely
the magnetic force. We saw an example of this in problem 2.
It is important not to misunderstand this beautiful idea. Many people, upon reading such
arguments, believe that magnetism “doesn’t exist” because it’s “all just electric fields”.
Sometimes people even say that magnetic forces are a “mistake” caused by “forgetting
about” relativistic corrections. This is all totally backwards. Sometimes time dilation in one
frame can be explained in terms of length contraction in another, but that doesn’t mean
that length contraction doesn’t exist, or is a mistake – it’s perfectly real in that particular
frame. (Furthermore, while you can always get rid of the magnetic force on one particle at
one moment by going to that particle’s rest frame, there are plenty of situations where you
can’t remove the magnetic field, as we saw in problem 8!)
The real lesson of relativity isn’t that magnetic fields are a mistake, it’s that electric and
magnetic fields are as intertwined as space and time, as you can see from their transformation
properties. Just as space and time combine into a four-vector, electric and magnetic fields
combine, in an equal footing, into the electromagnetic field tensor.
Remark: Electromagnetism in Covariant Form
Problem 5 is a first step to showing that Jµ = (ρ,J) is a four-vector, where ρ is the charge
density and J is the current density. Note that the continuity equation for charge, as
mentioned in T2, can be simply written in four-vector notation as
∂µJµ
= 0.
As another example, you can show that the four-current of a single charged particle q is
Jµ = quµ. We can go even further and write the whole of electromagnetism in terms of
9

Kevin Zhou Physics Olympiad Handouts
four-vectors and tensors. Maxwell’s equations can be written as
∂µFµν
= Jν
.
The invariant quantities found in problem 8 can be written in terms of the field strength
tensor as FµνFµν and ϵµνρσFµνFρσ where ϵµνρσ is the Levi–Civita symbol. These are the
only two ways to “contract all the indices” to get a scalar.
Remark: Elegant Notation
Sometimes people dislike the index notation above because of all the little Greek letters
floating around. If you only want to deal with vectors, vector notation is often better. It
hides all the indices, at the cost of requiring you to introduce special symbols like · and × to
specify the vector operations you want to do. The reason we don’t use a vector-like notation
for tensors is because there are too many operations you can do with them (e.g. “contract the
3rd index of a rank 4 tensor with the 1st index of a rank 2 tensor”) to define separate symbols
for each one; indices are just more efficient. On the other hand, if you only work with totally
antisymmetric tensors, then there are only a few possible operations, and one can use the
elegant, index-free “differential form” notation. In this notation, Maxwell’s equations are
d ⋆ F = J
where d is called the exterior derivative, ⋆ is the Hodge dual, and the fact that the electro-
magnetic fields are derivatives of potentials is expressed as
F = dA.
So is this the best, most true formulation of Maxwell’s equations? Well, as Feynman once
pointed out, you can easily do better. For example, you can define the “unworldliness”
U = |F − ma|2
+ (∇ · E − ρ/ϵ0)2
+ ....
Then all physical laws can be expressed in terms of the amazingly simple equation
U = 0.
But this doesn’t actually help, because to use the equation for anything, you need to plug in
the definition of U, and then you’re back to where you were before. In general, more elegant
notation is often more brittle: it only works well in a smaller set of situations. (For example,
with differential form notation, you just can’t write down the stress-energy tensor of the
electromagnetic field, because that’s symmetric rather than antisymmetric.) Index notation
is great because it works as long as indices are contracted in pairs, which holds as long as
you’re dealing with laws that are independent of coordinate system. In general, there’s no
need to be ideological about notation; it’s just a tool, and we should use the best tool for
each job. If anyone tells you that their preferred alternative notation for vectors or tensors
will revolutionize physics, keep your hand on your wallet.
10

Kevin Zhou Physics Olympiad Handouts
[4] Problem 9. Consider an electromagnetic wave of the form
E(z,t) = E0 cos(kz − ωt)x̂, B(z,t) = B0 cos(kz − ωt)ŷ.
As usual, you may work in units where c = 1.
(a) What do Maxwell’s equations imply about the relation between E0 and B0, and k and ω?
(b) Now consider a frame moving with velocity v along the ẑ direction. Show that the electromag-
netic wave continues to have the same basic functional form for E′(z′,t′) and B′(z′,t′), but
with new parameters E′
0, B′
0, k′, and ω′. Using these results, show that the energy density of
the wave is smaller by a factor of (1 − v)/(1 + v).
(c) The energy of a photon in an electromagnetic wave of angular frequency ω is E = ℏω. Show
that for a finite-sized electromagnetic wave, the initial and boosted frames agree on the number
of photons. This was one of the hints Einstein used to conclude light was made of photons.
(d) Now consider another question Einstein pondered: what does the light wave look like if we
try to “catch up” with it, taking v → c? Is this consistent with the invariants of problem 8?
Solution. (a) From E7, we know that E0 = B0 and k = ω.
(b) The electromagnetic field only has perpendicular components. Using the field transformations,
E′
(z′
,t′
) = γ(E0 cos(kz − ωt) − vB0 cos(kz − ωt))x̂.
In units where c = 1, we have E0 = B0 for an electromagnetic wave, so this simplifies to
E′
(z′
,t′
) = γ(1 − v)E0 cos(kz − ωt)x̂.
Repeating the reasoning for the magnetic field, we conclude
E′
0 = γ(1 − v)E0, B′
0 = γ(1 − v)B0
which still obeys E′
0 = B′
0 as expected. Thus, the energy density is reduced by a factor of
γ2
(1 − v)2
=
1 − v
1 + v
as stated. To find k′ and ω′, we can simply apply the Lorentz transformations,
kz − ωt = k(γ(z′
+ vt′
)) − ω(γ(t′
+ vz′
)) = γ(k − ωv)z′
− γ(ω − kv)t′
.
This indicates that E′(z′,t′) is still a plane wave proportional to cos(k′z′ − ω′t′), where
k′
= γ(k − ωv), ω′
= γ(ω − kv)
which is of course just the statement that (ω,k) is a four-vector, derived in R1. Using the
fact that ω = k, we conclude
k′
= ω′
= γ(1 − v)ω =
r
1 − v
1 + v
ω
which is of course just the usual Doppler shift.
11

Kevin Zhou Physics Olympiad Handouts
(c) The number of photons is the ratio of the total energy in the wave to the energy of each
photon. Since the energy of each photon is reduced by a factor of
p
(1 − v)/(1 + v) in the
boosted frame, we need to show that the total energy of the wave is reduced by the same
factor. This results from the combination of two effects.
First, we know the energy density is reduced by the factor (1−v)/(1+v). Second, the wavenum-
ber is reduced by a factor of
p
(1 − v)/(1 + v), which means the wavelength is increased by p
(1 + v)/(1 − v). Since the number of wavelengths contained in the wave is the same in
every reference frame, this means the volume of the wave is increased by
p
(1 + v)/(1 − v).
Multiplying these factors gives the desired result.
(d) In this case we have E′
0,B′
0,ω′,k′ → 0, so the light wave disappears! That is, you can never
“catch up” to a light wave. This result is completely compatible with the invariants from part
(a) of problem 8, which both vanish for a plane electromagnetic wave. The invariant in part
(c) vanishes as well, since E = |S| for a plane wave.
Idea 2
If a uniformly moving point charge suddenly stops moving, then the field outside a spherical
shell, centered at the charge when it stopped moving, expanding at speed c, is precisely that
calculated in problem 1. The same occurs if the point charge suddenly changes its velocity;
information about the change only propagates at c.
[1] Problem 10 (Purcell 5.18). In the figure below, you see an electron at time t = 0 and the associated
electric field at that instant.
(a) Describe what has been going on, as quantitatively as you can.
(b) Where was the electron at the time t = −0.75ns?
Solution. (a) Clearly, the particle isn’t moving at t = 0. Since there’s a kink in the field lines
at r = 15cm, it must have quickly stopped at t = −r/c = −0.5ns, since the speed of light is
c = 30cm/ns. We also see that the field lines outside this shell are straight, and point towards
the location x = 12cm. This implies that shortly before the charge stopped, it was moving
with constant velocity v = |x/t| = 24cm/ns = 0.8c.
12

Kevin Zhou Physics Olympiad Handouts
(b) By combining the results from (a), it must have been at x = −(24cm/ns)(0.25ns) = −6cm.
[2] Problem 11 (Purcell 5.19). People often wonder what would happen if an electric charge instantly
appeared or vanished. However, this is impossible, because as discussed in E7, Maxwell’s equa-
tions imply that charge must be conserved. Assuming otherwise will just lead to mathematical
contradictions, like 0 = 1.
Here’s a related scenario that actually can happen. We consider two highly relativistic particles
with opposite charge approaching the origin.
They collide at the origin at time t = 0 and remain there as a neutral entity. Sketch the field lines
at some time t > 0.
Solution. Before the charges collide, we have a kind of distorted dipole field. After they collide,
we still have a dipole field at r > ct, with the positive charge on the right and the negative charge
on the left. For r < ct the field is zero, and at the shell r ≈ ct there is a thin shell that connects up
the field lines. This transverse pulse of radiation steadily moves outward over time.
Some crackpots claim that particle annihilation is impossible because that would imply the electric
field has to “instantly vanish”, contradicting relativity. As you can see, that’s not the case. A
spherical shell, corresponding to a pulse of radiation, travels outward at the speed of light. The
electric field only vanishes inside the expanding shell.
[3] Problem 12. Work through the derivation of the Larmor formula in Appendix H of Purcell.
13

Kevin Zhou Physics Olympiad Handouts
[3] Problem 13 (Purcell H.4). The Larmor formula only applies to particles moving nonrelativistically.
To get a result valid for faster particles, we can simply transform into an inertial frame F′ where
the particle is nonrelativistic, apply the Larmor formula, then transform back to the lab frame.
(a) Consider a relativistic electron moving perpendicularly to a magnetic field B. Defining the
radiation power as Prad = dE/dt, find P′
rad, the power in a frame instantaneously comoving
with the electron.
(b) Argue that in this context, Prad = P′
rad, and conclude that
Prad =
γ2v2e4B2
6πϵ0m2c3
.
Thus, the power increases rapidly as v → c. Incidentally, a “relativistic” way to write the
general result is
Prad =
q2
6πϵ0c3

1
m
dpµ
dτ
 2
which clearly reduces to the Larmor formula in the nonrelativistic limit.
(c) This radiation is also called synchrotron radiation. Qualitatively, how does its angular distri-
bution differ from radiation from an accelerating nonrelativistic charge?
Solution. (a) In the frame comoving with the electron, it’s not relativistic, so we can just apply
the Larmor formula,
P′
rad =
e2a′2
6πϵ0c3
.
In this frame, the only force is the electric force, so
a′
=
eE′
m
=
eγvB
m
.
Putting it together, we conclude
P′
rad =
e4γ2v2B2
6πϵ0m2c3
.
(b) We have P′
rad = dE′/dt′. Now, in the primed frame, the electron is just accelerating trans-
versely, with no component along the unprimed frame’s v. Thus, when we Lorentz transform
back to the unprimed frame, we simply get dE = γdE′ and dt = γdt′. The γ factors cancel
out, giving the desired result.
(c) In the primed frame, the radiation power comes out with a wide angular distribution, but
none of it comes out along the direction of motion of the charge, and most of it comes out
roughly transverse to the motion. But when we boost back to the original frame, where
the charge is moving very quickly, the radiation’s direction gets a big component along the
charge’s direction of motion. Thus, almost all the radiation is “beamed” in a narrow cone
along the charge’s motion (as we saw in R1), though there still is zero radiation intensity
exactly along the charge’s direction.
14

Kevin Zhou Physics Olympiad Handouts
Remark: Gravitoelectromagnetism
As mentioned in E1, there’s a close analogy between electrostatic fields, which are sourced
by charge density ρe, and gravitational fields, which are sourced by energy density ρ. If you
apply the analogy and run the same arguments as in Purcell, you would expect there to be
a “gravitomagnetic” field, which is sourced by momentum density J = ρv. That’s indeed
correct! In the theory of gravitoelectromagnetism, the gravitoelectric and gravitomagnetic
fields Eg and Bg satisfy
∇ · Eg = 4πGρ, ∇ · Bg = 0, ∇ × Eg = −Ḃg, ∇ × Bg = 4πGJ + Ėg
under one common convention. Given this definition, the force on a point mass is
F = m(Eg + 4v × Bg).
From this you can draw some interesting conclusions. For example:
• Two masses moving parallel to each other will have an extra attraction due to the
gravitomagnetic force.
• A rotating object will produce a gravitomagnetic field which can cause gyroscopes to
precess; this is called the Lense–Thirring, or frame dragging effect, which has been
measured by satellites such as Gravity Probe B. (There is also a significantly larger
“geodetic” effect caused by the curvature of spacetime around the Earth, but this isn’t
captured within gravitoelectromagnetism.)
• A cylinder which starts to rotate will induce a gravitoelectric field inside, by Faraday’s
law. This will cause masses inside the cylinder to start rotating a small amount in the
same direction as the cylinder. (This is also sometimes called frame dragging.)
Now you might be puzzled by two things: first, how does gravitoelectromagnetism relate
to general relativity, and second, why is there an extra 4 in the force? Well, the truth is
that Purcell’s arguments don’t really work for gravity. These arguments crucially depend on
electric charge Q =
R
ρe dx being Lorentz invariant, which in our more sophisticated language
was necessary to ensure jµ = (ρe,ρev) is a four-vector. However, the total energy E =
R
ρdx
is not Lorentz invariant – instead it’s itself a component of a four-vector. Thus, (ρ,ρv) isn’t
a four-vector, so none of the arguments really work: the theory of gravitoelectromagnetism
is just not Lorentz invariant at all.
Instead, gravitoelectromagnetism is properly derived as a limiting case of general relativity,
valid when all the masses involved are moving slowly, v ≪ c. The fact that general relativity
is a theory of a rank 2 tensor field, the metric gµν, is responsible for the extra factors of 2
above. Even though it’s only approximately true, gravitoelectromagnetism is a very useful
tool for analyzing precision tests of general relativity, since it’s much easier to calculate with.
However, there’s also a lot of nonsense written about gravitomagnetism, both on the internet
and in low-quality academic journals. The problem is that the effects are very small, which
means they usually don’t matter, but they’re also a bit subtle, which makes it easy to make a
15

Kevin Zhou Physics Olympiad Handouts
mistake and overestimate their importance. For example, many have tried to use gravitomag-
netism to explain the anomalous rotation of galaxies (typically ascribed to dark matter), even
though, using just the basic equations above, you can show that the gravitomagnetic force is
(v/c)2 times smaller than the usual gravitational force. Since galaxies rotate at v/c ∼ 10−3,
the effect is about 106 times too small to fix the problem.
2 Charges in Fields
[5] Problem 14.   T 1 0IPhO 1991, problem 2. A problem on the subtle relativistic “hidden momentum”.
Solution. See the official solutions. There’s a minor typo, as noted here, though it doesn’t affect
any answers. This remarkably subtle effect was discovered in the 1960s by Shockley and James;
Shockley also won a Nobel prize for the transistor. For nice further discussion, see this paper.
Idea 3: Scalar and Vector Potentials
In E1, we learned about the electric (or “scalar”) potential ϕ(x), which obeys E = −∇ϕ.
More generally, the scalar potential can depend on both space and time, as can the vector
potential A(x,t), and these two quantities yield the electric and magnetic fields by
E = −∇ϕ −
∂A
∂t
, B = ∇ × A.
Olympiad problems rarely require thinking about the vector potential, but it’s essential to
formulate the following idea.
Idea 4: Canonical Momentum
Noether’s theorem yields a conserved quantity for every symmetry. If a system is symmetric
under time translations, then its energy is conserved. Spatial translational symmetry yields
momentum conservation, and rotational symmetry yields angular momentum conservation.
We won’t prove Noether’s theorem, but we’ll illustrate it for a nonrelativistic particle of mass
m and charge q. First, if ϕ and A are both time-independent, then the conserved energy is
E =
1
2
mv2
+ qϕ.
This is quite familiar. Note that A doesn’t appear because in this case, the only role of A is
to determine the magnetic field, which does no work.
As for space-translational symmetry, if ϕ and A are both space-independent, then the con-
served momentum, called the “canonical” momentum, is
p = mv + qA.
This is less familiar, so let’s check it explicitly. Since we have assumed ϕ and A are both
space-independent, we simply have B = 0 and E = −∂A/∂t, so
dp
dt
= ma − qE = 0
16

Kevin Zhou Physics Olympiad Handouts
as desired. This tells us that qA is like a “potential momentum”, similar to how qϕ is a
potential energy. (Since the canonical momentum is such an important property, it is usually
denoted by p whenever it’s in play, while the Newtonian “mechanical”/“kinetic” momentum
is demoted to π = mv.) However, in this case, the tool of canonical momentum doesn’t tell
us much we didn’t already know.
Canonical momentum becomes useful in situations with only partial translational symmetry.
For example, suppose that ϕ and A are both independent of x, but not y and z. Then
the fields can be quite complicated, as can the particle’s motion, but px will still be conserved!
In addition, the canonical momentum is the building block used for more complex situations.
For example, if ϕ and A are both invariant under rotations about the z-axis, then
Jz = (r × p) · ẑ
is conserved. Moreover, the adiabatic invariant of M4 must be written in terms of the
canonical momentum. For example, for periodic motion along the x-axis, it is
I =
I
px dx
while for periodic circular motion in the xy plane, it is
I =
I
Jz dθ.
Finally, though all the following problems will assume the particles are nonrelativistic, the
results above go through unchanged in relativistic mechanics provided that π = mv is
replaced with the relativistic momentum γmv.
[4] Problem 15. Let’s check some of the statements made above in a simple case. Consider a situation
with zero electric field and a constant uniform magnetic field B = Bẑ.
(a) Show that this situation can be described with
ϕ = 0, A =
B
2
(xŷ − yx̂) =
Br
2
θ̂
which is symmetric under translations along the z-axis and rotations about the z-axis.
(b) The symmetries of this problem tell us that pz and Jz are conserved. Conservation of pz = πz
is obvious, because there are no forces in the z-direction. As for Jz, find an explicit expression
for it, in terms of the ordinary angular momentum Lz, B, and r.
Back in E4, we encountered IPhO 1996, problem 2, which instructs the reader to solve a tricky
problem by pulling out a magical conserved quantity; it’s just Jz. Next, let’s suppose the magnetic
field’s magnitude varies in time, corresponding to
ϕ = 0, A =
B(t)r
2
θ̂.
Of course, the changing magnetic field is accompanied by an induced electric field, as E = −∂A/∂t.
17

Kevin Zhou Physics Olympiad Handouts
(c) Suppose that B is initially equal to B0, and the particle is orbiting in a circle of radius r0
about the z-axis. The field is slowly changed to B1. What is the new radius r1 of the orbit?
(d) What if instead the field is very quickly changed to B1?
(e) Even more generally, let’s suppose the field is B = B(r,t)ẑ, which can depend on both time
and the distance r to the z-axis. Assuming the field changes slowly, find a compact expression
for Jz in terms of r, the value of B at the particle’s radius, and Bav, the average value of
B within the circle formed by the particle. This will immediately yield the answer to the
“betatron” example in E4.
Solution. (a) This follows immediately from evaluating the curl of A, either in Cartesian or
cylindrical coordinates.
(b) The z-component of the canonical angular momentum is
Jz = (r × (mv + qA)) · ẑ = Lz +
qBr2
2
.
(c) Because the field is slowly changed, the particle remains in a circular orbit centered on the
z-axis, so we can simply use the conservation of Jz to find the answer. It is
Jz = −mvr +
qBr2
2
where the minus sign is because the two contributions to Jz have opposite signs. On the other
hand, for circular motion we have mv2/r = qvB, which tells us that the two terms are simply
proportional to each other. So in this case, we just have
Jz = −
qBr2
2
and the answer to the question is
r1 = r0
p
B0/B1.
We could also have gotten to this conclusion using the adiabatic theorem, but it’s not any
different, since here I = 2πJz. And of course, you can also derive it directly using Newton’s
laws, in a manner similar to the betatron example in E4.
(d) When the field is quickly changed, the particle simply receives a sharp impulse. The final
orbit is still a circle, but it won’t be centered on the z-axis. Conservation of Jz during the
impulse gives
m∆v =
qr0 ∆B
2
=
qr0
2
(B1 − B0)
which of course can also be deduced by Newton’s laws. The final speed is
v′
=
qB0r0
m
+ ∆v =
qr0
m
B0 + B1
2
which is related to the final radius by v′ = qB1r1/m. We thus conclude
r1 = r0
B0 + B1
2B1
.
For a more challenging problem which uses similar ideas, see Physics Cup 2017, problem 3.
18

Kevin Zhou Physics Olympiad Handouts
(e) In this case, we have
Jz = −mvr + qrAθ
where Aθ is independent of θ. To evaluate this, we note that
Aθ =
1
2π
Z 2π
0
Aθ dθ =
1
2πr
I
C
A · dr =
ΦB(r)
2πr
=
r
2
Bav(r).
where C is the particle’s momentary circular orbit, and we used Stokes’ theorem and then the
definition of Bav. We still have mvr = qB(r)r2, so
Jz = qr2

−B +
Bav
2

.
If the quantity in parentheses doesn’t vanish, then conservation of Jz implies that r has to
change as the field is changed. As we found in E4 using Newton’s laws, r can stay the same
if B = Bav/2, in which case Jz simply vanishes.
[2] Problem 16. Here’s another quick application of the conserved Jz identified in problem 15. As
discussed in E8, electron orbits can be modified in a magnetic field, leading to diamagnetism. Many
textbooks try to motivate this by considering forces on classical electrons, but such arguments don’t
actually work: it can be shown that for classical systems in thermal equilibrium, diamagnetic effects
always cancel out. A legitimate derivation requires some quantum mechanics.
In X1, we discussed how the electron orbits in a hydrogen atom have Lz = nℏ. Let’s suppose
the states n = ±1 are occupied, corresponding to electrons of charge q and mass m performing
a circular orbit of radius r in opposite directions. The magnetic moments associated with these
orbits cancel. But in the presence of a uniform magnetic field B = B ẑ, the quantization condition
becomes Jz = nℏ, and the magnetic moments no longer cancel.
Find an approximate expression for the net magnetic moment, in terms of q, m, r, and B.
Assume B is small, so that the magnetic force is small compared to the electrostatic force.
Solution. This problem was inspired by this paper. Following problem 15, we note that for the
n = 1 orbit,
Jz = Lz +
1
2
qBr′2
= ℏ
where r′ is the orbit radius when the magnetic field is on. In the absence of a magnetic field, we
have Lz = ℏ, so the change in Lz is
∆Lz = −
1
2
qBr′2
.
Since the magnetic field is weak, r′ ≈ r, and since ∆Lz is proportional to B, which is already small,
we can neglect the difference between r and r′. Finally, using a result from E5, we have
∆µz =
q
2m
∆Lz = −
q2Br2
4m
.
For the n = −1 orbit, the change in magnetic moment has the same sign, giving a total of
µz = −
q2Br2
2m
.
[2] Problem 17. Let’s consider one more simple application of canonical momentum. Suppose a point
charge of mass m and charge q experiences the uniform constant fields E = Ex̂ and B = Bŷ.
19

Kevin Zhou Physics Olympiad Handouts
(a) Write a corresponding ϕ and A which are independent of y and z.
(b) What are the associated conserved quantities?
Solution. (a) The simplest possible answer is ϕ = −Ex and A = −Bxẑ.
(b) The conserved quantities are py = mvy and pz = mvz − qBx. Conservation of py is trivial, as
there are no forces in the y-direction. As for pz, it’s conserved because
dpz
dt
= maz − qBvx
which is simply the z-component of the Lorentz force law, as we saw in the corresponding
problem in E4. So in this case the canonical momentum doesn’t tell you much new, though
in a more subtle situation, such as when the particle is relativistic, it can be useful.
By now, we’ve covered most of the applications of canonical momentum for point charges. When
it shows up on modern Olympiad problems, there’s generally a twist. For instance, we can replace
the point charge with an electric dipole, as illustrated in the following three tough questions.
[5] Problem 18.   T 1 0APhO 2001, problem 2. In the first part, you are meant to define the moment
of inertia as a scalar, I = mℓ2/2, even though it’s technically a tensor. As you’ll see, the difference
doesn’t matter, since the moment of inertia about the dipole’s axis vanishes.
[5] Problem 19.   h 1 0EuPhO 2022, problem 3.
[5] Problem 20. Physics Cup 2021, problem 1. This one requires more electromagnetism background.
Solution. See the official solutions here.
[5] Problem 21.   r 1 0GPhO 2017, problem 3. A problem on a “shock wave” hitting an electron.
Don’t be intimidated by the language; you don’t need to know anything about shock wave physics
to do this question.
3 Gravitational Fields
Idea 5
In classical mechanics, you’ve seen that a uniform gravitational field behaves a lot like the
fictitious force due to a uniform acceleration. The equivalence principle states that the two
behave exactly identically, in all possible contexts; it was one of the key ideas that led to the
development of general relativity.
[5] Problem 22. In this problem, we give one of the classic justifications for gravitational redshift,
the fact that photons redshift when moving against a gravitational field. Suppose that point B is a
height H above point A, in a gravitational field g. A set of electrons and positrons with total rest
mass M are converted into photons of frequency f at A. The photons fly upward to B, where they
are converted back into electrons and positrons. Assume throughout that g is small.
(a) Find the total mass M′ at B, and thus the frequency f′ of the photons measured at B.
Let’s explore some consequences of the result of part (a).
20

Kevin Zhou Physics Olympiad Handouts
(b) Since the frequencies of photons can be used as a clock, the fact that f ̸= f′ implies that
the gravitational potential causes time dilation. Show that times are dilated by a factor of
1 + ϕ/c2, where ϕ is the gravitational potential and ϕ/c2 ≪ 1.
(c) Suppose a photon bounces between the top and bottom walls of a vertical box, of height H.
If the photon has energy E at the bottom of the box, what is the time-averaged contribution
of the photon to the weight of the box?
(d) We can also derive the frequency shift using the equivalence principle. To confirm this, suppose
that two observers C and D begin at rest, with D a distance H to the right of C. At a certain
moment, both observers begin accelerating to the right with a small acceleration a. If C emits
light of frequency f (in C’s rest frame), show that D observes light of frequency f′.
The predicted frequency shift was observed in the 1959 Pound–Rebka experiment, where gamma
rays were transmitted from the top to the bottom of a tower.
(e) The tower’s height was 22.5m. What was the fractional change in energy of the photons?
(f) The gamma ray had energy 14keV. According to the energy-time uncertainty principle, what
is the minimum time needed to detect the effect?
Using your gravitational redshift results, it can be shown that a vertical system (such as an ideal
gas) in thermal equilibrium does not have uniform temperature. The argument starts as follows:
we put a box of photons into the system and let it come to thermal equilibrium with the gas, at
temperature T. We then consider moving the box upward.
(g) By filling in the rest of this argument, find an expression for dT/dz. This is called the Tolman
temperature gradient. How important is this effect for the problems in T1?
Solution. (a) By conservation of energy,
Mc2
= M′
c2
+ M′
gH
from which we conclude, using the fact that g is small, that
M′
= M

1 −
gH
c2

.
Each photon has its energy reduced by a factor of 1 − gH/c2, and since E = hf,
f′
= f

1 −
gH
c2

.
(b) If we measure time through the frequency of light, then
∆t′
= ∆t

1 +
gH
c2

again to lowest order in g. This is the desired result, since ϕ = gH. It implies that higher
clocks tick faster.
21

Kevin Zhou Physics Olympiad Handouts
(c) This is related to one of the questions in R2, though it’s a lot simpler because we’re working
in the frame of the box. In the presence of a gravitational field, the photon has a different
momentum at the bottom and the top of the box,
p =
E
c
, p′
=
E
c

1 −
gH
c2

.
In each round trip, the photon exerts an impulse J = 2p − 2p′ on the box, giving a time-
averaged force
F =
J
2H/c
=
(p − p′)c
H
=
E
c2
g.
In other words, the photon contributes ∆m = E/c2 to the “gravitational” mass of the box,
i.e. the quantity that determines its weight. But in a related question in R2, we found that
the photon contributes ∆m = E/c2 to the “inertial” mass of the box, i.e. the quantity that
determines its momentum for a given speed. The fact that the gravitational and inertial
masses are equal in this case is an example of the equivalence principle.
(d) Since the acceleration is small, it takes about a time H/c for the light to arrive at D. By this
time, D has picked up a velocity aH/c, so by the Doppler shift,
f′
= f
s
1 − aH/c2
1 + aH/c2
≈ f

1 −
aH
c2

where we again work to lowest order in a.
(e) Plugging in the numbers, gH/c2 = 2.5 × 10−15.
(f) The change in energy is ∆E = h∆f, and the uncertainty principle says we need time
∆t ≳
h
∆E
∼
h
(2.5 × 10−15)(14keV)
= 10−4
s.
In the real experiment, Pound and Rebka used two identical samples of iron as the emitter
and receiver, and vibrated one of them vertically at a few tens of Hz. Whenever the relative
velocity was just enough to cancel out the gravitational redshift effect, absorption occurred.
Since the ∆t required was substantially lower than the period of the vibration, the vibration
didn’t mess up the experiment.
(g) Consider moving the box of photons up a distance dz. Because of gravitational redshift, the
photon energies are multiplied by (1 − g dz/c2), so the temperature of the box is multiplied
by the same factor. But the photons must still be in thermal equilibrium with the gas around
it (or else we could run a perpetual motion machine from the temperature difference), so
T + dT = (1 − g dz/c2
)T
from which we conclude that
dT
dz
= −
gT
c2
.
Moreover, this applies to any system, not just a gas. This argument won first place in the
2018 Gravity Research Foundation essay competition, along with a big cash prize.
22

Kevin Zhou Physics Olympiad Handouts
In Earth’s atmosphere, this temperature gradient is of order 10−13 K/m, and therefore com-
pletely negligible. On the other hand, for the cosmic microwave background, the redshifting
of photon temperature can accumulate over the entire history of the universe. That’s called
the Sachs–Wolfe effect, and it must be accounted for in cosmological studies.
[3] Problem 23. In this problem we consider the effects of relativity on a clock on the surface of the
Earth, which has mass M and radius R. It rotates about its axis in time T, as measured by an
observer at infinity who is at rest relative to the center of the planet.
(a) Consider a clock C that lies on the surface of the planet at a point on the equator. Compute
the time measured by the clock C after a single rotation of the planet, incorporating both
the ordinary time dilation effect in special relativity, and the additional effect of gravitational
time dilation. Which effect is bigger?
(b) Repeat part (a) for a clock C′ on a satellite orbiting the planet, in a circular orbit a height h
above the equator.
(c) Using the numbers M = 5.97 × 1024 kg, R = 6.4 × 106 m, and h = 2 × 107 m, estimate the
difference in time elapsed per day for the two clocks, counting only time dilation in special
relativity, or only the effect of gravitational time dilation.
This paper explains how the Global Positioning System accounts for both of these effects to work.
Solution. (a) The clock C always has speed v = 2πR/T, so if we only counted the time dilation
of special relativity,
TC = T
p
1 − (2πR/cT)2 ≈ T 1 −
1
2

2πR
cT
 2
!
.
It is also at a lower gravitational potential than a clock at infinity, so counting only gravitational
time dilation,
TC = T 1 + ∆ϕ/c2

= T 1 − GM/Rc2

.
In reality both effects occur, and at leading order they just add, giving
TC = T
p
1 − (2πR/cT)2 1 + ∆ϕ/c2

≈ T 1 −
1
2

2πR
cT
 2
−
GM
Rc2
!
.
The two effects are equal when v2 = 2GM/R, which describes escape velocity. Since the Earth
is rotating a lot slower than that, the gravitational time dilation effect is much larger.
(b) The clock C′ has speed v =
p
GM/(R + h) and potential ∆ϕ = −GM/(R + h), so
TC′ ≈ T

1 −
1
2
GM
(R + h)c2
−
GM
(R + h)c2

.
The gravitational time dilation effect is still larger, but only by a factor of 2.
(c) Plugging in the numbers, we have

2πR
cT
 2
= 2.4 × 10−12
,
GM
Rc2
= 7.0 × 10−10
,
GM
(R + h)c2
= 1.7 × 10−10
.
23

Kevin Zhou Physics Olympiad Handouts
If we just consider the special relativistic time dilation effect, the time difference per day is
T
2
GM
(R + h)c2
−

2πR
cT
 2
!
= 7µs.
If we consider just gravitational time dilation, the time difference per day is
T

GM
(R + h)c2
−
GM
Rc2

= −46µs.
So at this height, the gravitational effect dominates. This graphic gives a neat overview of
how the two effects vary as a function of height, and how they’ve been tested.
[4] Problem 24. @ 1 0IPhO 1995, problem 1. A straightforward problem on gravitational redshift.
Solution. See the official solutions, but note that there’s a numeric mistake in the very last subpart.
They should have written m0c2 = 3.752 × 109 eV and ∆f/f0 = 5.44 × 10−9.
[5] Problem 25.   h 1 0APhO 2014, problem 3. Gravitational lensing from the bending of light. Print
out the official answer sheets and record your answers on them.
[3] Problem 26. @ 1 0IPhO 2023, problem 2, parts C.1 through C.4. A neat problem on how the
Shapiro delay, a classic test of general relativity, can be used to measure neutron star masses.
Remark: Visualizing Relativity
You’ve probably heard that in general relativity, gravity is explained by the curvature of
spacetime. In other words, freely falling objects always move in straight lines through
spacetime; they only look like they’re accelerating downward because we are constantly being
accelerated upward. This is nicely illustrated here and explained in greater detail in this paper.
There is a common analogy for this involving picturing space as a distorted rubber sheet.
It’s a very bad analogy, because things will only accelerate towards the valleys in the sheets
if you have gravity pointing down the sheet. In other words, the analogy tries to explain
gravity by assuming you have spatial curvature and gravity. This misses the beautiful
key point of relativity, which is that the gravity can be explained by spacetime curvature alone.
The fact that freely falling objects move in straight lines means that an object sitting
on the surface of the Earth is actually being constantly accelerated. But this leads to a
common followup question: in this picture, the surfaces of America and India are constantly
accelerated in opposite directions, so why doesn’t the Earth tear itself apart? Indeed, in
special relativity this would make no sense. It’s only possible because of spacetime curvature.
This can be explained with a spatial curvature analogy. Consider two people walking
east, side by side, with one just north of the equator and the other south. In order to
stay a constant distance apart, the person walking on the north will constantly have to
bear to the left, while the person walking on the south will have to bear to the right,
because the Earth’s surface is spatially curved. Similarly, in a situation with spacetime cur-
vature, America and India need constant opposite accelerations to maintain the same distance.
24

Kevin Zhou Physics Olympiad Handouts
There’s a neat way to visualize this situation called the “river model”, which was rediscovered
and animated here. The basic idea is that we think of space as a river that is constantly
flowing towards the center of the Earth. Observers in America and India constantly need to
paddle in opposite directions against the river to stay in place. This is also a good way to think
about the event horizon of a black hole, which is where the river starts to flow faster than light.
I’ve mentioned three analogies about spacetime, so which of them is “correct”? None, really.
The analogies don’t tell us what spacetime is; they’re just different ways of talking about
the equations of general relativity. They each describe some aspects of the equations, while
failing to capture others. (Any analogy must fail to capture the full content of a theory,
because if it really were simpler and equivalent, that analogy would be the theory instead!)
In practice, you simply deploy each one whenever it’s valid and helpful.
25
