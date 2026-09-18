---
id: kevin-zhou-e7-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e7-ex003
solution_type: author
source_document: solution-document-kevin-zhou-e7sol
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E7Sol.pdf."
---

Example 3
Consider two charges q, at positions rx̂ and rŷ respectively, both moving with speed v towards
the origin. Show that the magnetic forces between them are not equal and opposite. That
is, electromagnetic forces do not obey Newton’s third law.
Solution
In order to find the B field produced by each charge at the location of the other, we use the
Biot–Savart law and the right-hand rule. Then we use the Lorentz force and the right-hand
rule again to find the magnetic forces on each charge.
For example, the B field produced by the first charge at the location of the second is along
−ẑ. Then the magnetic force on the second charge is parallel to x̂. The magnetic force on
the first charge is parallel to ŷ. And the forces are definitely nonzero, so they can’t be equal
and opposite.
To explain this, we recall that the point of Newton’s third law is just momentum conservation. This
still holds, as long as one remembers that the field carries momentum of its own. (If we want to
save some version of Newton’s third law, we could say that the real action-reaction pairs are the
forces between the charges and the field, not the charges with each other. But the real lesson is
that Newton’s third law is not fundamental, momentum conservation is.)
Idea 7
The momentum density of the electromagnetic field is
p =
S
c2
.
In other words, momentum density and energy flux density are just proportional. As you
will see in R2, this is true in general in relativity. The angular momentum density is r × p.
For an explicit derivation that these definitions ensure the total momentum and angular
momentum are conserved, see section 8.2 of Griffiths. (You might think the definitions come
out of nowhere; the straightforward way to find them is to apply Noether’s theorem, as you
will learn in a more advanced class.)
Remark
We have already seen an example of electromagnetic field momentum at work. Back in E4,
you found that in the presence of a magnetic monopole, the mechanical angular momentum
L of a point charge was not conserved, but L − qgr̂ was. In fact, this second term turns
out to be exactly the angular momentum of the field, so this conservation law is simply the
conservation of total angular momentum. (If you’d like to verify this explicitly, it’s easiest
to use spherical coordinates with the monopole at the origin and the charge along the z-axis,
but be warned, it’s fairly messy.)
[3] Problem 14 (Griffiths). A long coaxial cable of length ℓ consists of an inner conductor of radius
a and an outer conductor of radius b. The inner conductor carries a uniform charge per unit length
12
Kevin Zhou Physics Olympiad Handouts
λ, and a steady current I to the right; the outer conductor has the opposite charge and current.
(a) Find the electromagnetic momentum stored in the fields.
(b) In part (a) you should have found that the fields contain a nonzero momentum directed along
the cable. However, this is puzzling because it appears that no net mass is transported along
the cable. How is this paradox resolved? (Hint: it doesn’t make sense to consider the cable in
isolation, as nothing would be keeping the current going. Consider attaching a battery across
the left end and a resistor across the right end.)
Solution. (a) Set up the obvious cylindrical coordinates, with ẑ directed to the right. In between
the tubes the fields are
E =
1
2πϵ0
λ
s
ŝ, B =
µ0
2π
I
s
ϕ̂,
and they are zero everywhere else. Therefore, the momentum is
R
ϵ0(E × B)dV or
p = ẑ
µ0Iλ
4π2
Z b
a
1
s2
ℓ2πsds =
µ0Iλℓ
2π
log(b/a)ẑ.
(b) As this process goes on, the battery loses energy and the resistor gains energy (i.e. heats
up). Since E = mc2, that means the resistor is gaining mass while the battery is losing mass.
Thus, the momentum reflects the fact that the center of mass of the system is going to the
right. (This is a concrete example of the statement of idea 7, i.e. that momentum is always
accompanied by the flow of energy.)
You might also wonder about the momentum and kinetic energy carried by the electrons
themselves; however, as described in a remark at the end of E5, for typical circuits this is
negligible compared to the momentum and energy carried by the fields.
[3] Problem 15. In the early 20th century, physicists sought to explain the E = mc2 rest energy in
terms of electromagnetic field energy. As a concrete example, model a charged particle as a uniform
spherical shell of radius a and charge q.
(a) Find the radius a so that the total field energy equals the rest energy associated with the
electron mass m. Up to an O(1) factor, this quantity is called the classical electron radius.
(b) If the shell moves with a small speed v, we expect to have p = mv, where p is the total field
momentum. Show that instead, we have p = (4/3)mv. You may use the result
B =
v
c2
× E
which we will prove in R3. Many complicated ideas were put forth to explain this infamous
“4/3 problem”, as recounted in chapter II-28 of the Feynman lectures.
For more about the “radius” of an electron, see this blog post. For a modern discussion of the
resolution of the 4/3 problem, see this paper.
Solution. (a) The electrostatic energy of a uniform spherical shell of radius a is
U =
1
2
qV =
q2
8πϵ0a
where the factor of 1/2 avoids double counting the energy. Setting U = mc2 gives
a =
q2
8πϵ0mc2
.
13
Kevin Zhou Physics Olympiad Handouts
(b) Note that
S =
1
µ0
E × (v × E)/c2
.
Set up spherical coordinates where v ∥ ẑ. Letting k = 1/(4πϵ0), we then have
Z
E × (v × E)dV =
Z
v(E2
) − E(v · E)

dV
= (kq)2
ẑ
Z ∞
a
Z π
0
Z 2π
0

v/r4
− v cos2
θ/r4

r2
sinθdϕdθdr
= 2π(kq)2
v
Z ∞
a
1
r2
Z π
0
(sinθ − cos2
θsinθ)dθdr
= 2π(kq)2
v
Z ∞
a
4
3
dr
r2
=
8
3
(kq)2πv
a
.
The momentum is then
p =
1
c4µ0
8
3

q
4πϵ0
 2
πv
a
=
4
3
1
c2
q2
8πϵ0a
v =
4
3
mv
as stated.
[3] Problem 16 (Griffiths 8.6). A charged parallel plate capacitor is placed in a uniform magnetic
field as shown.
(a) Find the electromagnetic momentum in the space between the plates.
(b) Now a resistive wire is connected between the plates, along the z-axis, so that the capacitor
slowly discharges. The current through the wire will experience a magnetic force; show the
total impulse equals the stored momentum.
(c) Alternatively, suppose we slowly reduced the magnetic field. Show that the total impulse
delivered to the plates equals the stored momentum.
This calculation is standard and given in many textbooks, but it is actually completely wrong: we
have ignored the fringe field, and when it is included the total electromagnetic momentum is half
of what was naively calculated in part (a). The answer in part (b) is correct, but the other half of
the impulse corresponds to a change in non-electromagnetic “hidden momentum”. The most basic
example of hidden momentum is covered in example 12.12 of Griffiths. For a detailed analysis of
the hidden momentum in this setup, see this paper.
14
Kevin Zhou Physics Olympiad Handouts
Solution. (a) Using the standard formula,
p = ϵ0(E × B)Ad = ϵ0EBAdŷ.
(b) If Q′ is the charge on the plates at any given moment, the impulse j is
j =
Z ∞
0
I(ℓ × B)dt = −(dŷ)
Z 0
Q
B dQ′
.
Performing the integral, the total impulse is
j = BQdŷ = ϵ0EBAdŷ
in agreement with part (a).
(c) By Faraday’s law, a nonconservative electric field is generated in the setup, which pushes
the plates with a net force. Note that when the situation is symmetric, the electric field is
E′ = (1/2)Ḃdŷ at the bottom plate, and −E′ at the top plate. So the total impulse is
j =
Z ∞
0
(QE′
) + ((−Q)(−E′
))dt =
Z ∞
0
ḂQdŷdt = BQdŷ = ϵ0EBAdŷ
in agreement with parts (a) and (b). The answer is the same if the setup were asymmetric,
i.e. if the fields had been E′ + E0 and −E′ + E0 at the top and bottom plates, because E0
would not contribute to the net force.
[3] Problem 17.   m 1 0USAPhO 2004, problem B2. (The official solution is off by a sign in the last
part. This classic setup also appears on USAPhO 2020, problem A1, and INPhO 2020, problem 2.
However, the official solution to USAPhO 2020, problem A1 has factor of 2 errors.)
4 Electromagnetic Waves
Idea 8
Maxwell’s equations have propagating wave solutions of the form
E = E0ei(k·r−ωt)
, B = B0ei(k·r−ωt)
where E and B are in phase, perpendicular in direction, and have magnitudes E0 = cB0.
The propagation direction k is along E × B, and the wave speed is
c =
ω
k
=
1
√
µ0ϵ0
.
Example 4
Verify explicitly that in the absence of charges and currents, the electromagnetic field above
satisfies Maxwell’s equations.
15
Kevin Zhou Physics Olympiad Handouts
Solution
First let’s consider Gauss’s law, ∇ · E = 0. Splitting everything explicitly into components,
∇ · E = e−iωt

∂
∂x
(E0,xeik·r
) +
∂
∂y
(E0,yeik·r
) +
∂
∂z
(E0,zeik·r
)

= e−iωt

E0,x
∂
∂x
eik·r
+ E0,y
∂
∂y
eik·r
+ E0,z
∂
∂z
eik·r

= ei(k·r−ωt)
(iE0,xkx + iE0,yky + iE0,zkz)
= ik · E = 0
since k is perpendicular to E0. This is another example of a lesson we saw in M4. Namely,
when everything is a complex exponential, differentiation is very easy. For an complex
exponential in time, eiωt, differentiation with respect to time is just multiplication by iω.
Similarly, for a field which is a complex exponential in space, eik·r, the divergence (∇·)
becomes (ik·).
By similar reasoning, Gauss’s law for magnetism is satisfied. Next, we check Ampere’s law,
∇ × B = µ0ϵ0
∂E
∂t
.
By the same logic as above, the curl becomes (ik×), while the time derivative becomes
multiplication by −iω, giving
ik × B = (−iω)µ0ϵ0E.
Because k, E, and B are all mutually perpendicular, the directions of both sides match. Then
all that remains is to check the magnitudes,
kB0 = ωµ0ϵ0E0.
By plugging in results from above, this reduces to
c2
=
1
µ0ϵ0
which matches what we said above. (Or, if we didn’t know what c was, this logic would
have been a way to derive it, as Maxwell did.) The verification of Faraday’s law is similar.
Note that the displacement current term was essential; it wouldn’t have been possible to get
electromagnetic wave solutions without it.
