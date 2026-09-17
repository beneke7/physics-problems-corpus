---
id: kevin-zhou-e5-p017
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e5-p017
solution_type: author
source_document: solution-document-kevin-zhou-e5sol
source_pdf: sources/kevin_zhou/site/handouts/E5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E5Sol.pdf."
---

[3] Problem 17. Consider a toroidal solenoid with a rectangular cross section of height h and width
w, N turns, and inner radius R.
(a) Find the self-inductance by considering the magnetic flux.
(b) Verify that the two formulas for energy given in idea 5 are consistent in this setup.
(c) Now suppose the current increases at a constant rate dI/dt. Find the magnitude of the electric
field at a height z above the center of the solenoid, assuming h,w ≪ R ≪ z. (Hint: write
down the divergence and curl of E in terms of Ḃ in general, and notice the similarities to the
equations for B in terms of J. This allows us to use the ideas of E3 by analogy.)
Solution. (a) Symmetry and Ampere’s law imply that the field inside is B = µ0NI
2πr pointing in
the ϕ̂ direction. Hence the flux through a single loop is
Φ =
µ0NIh
2π
log
R + w
R
.
The inductance is
L =
NΦ
I
=
µ0N2h
2π
log
R + w
R
.
19
Kevin Zhou Physics Olympiad Handouts
(b) Let’s compute the total energy of the magnetic field. The magnetic field outside the solenoid
is zero, and the magnetic field inside is B = µ0NI/2πr. Now consider cylindrical shells of
radius r, thickness dr, and volume dV = 2πrhdr. The field energy is
U =
Z
B2
2µ0
dV =
Z R+w
R
(µ0NI)2
2µ0(2πr)2
(2πrhdr) =
µ0N2I2h
4π
Z R+w
R
dr
r
=
µ0N2I2h
4π
log
R + w
R
.
Referring to the result of part (a), the expression U = LI2/2 yields the same result.
(c) We know Ḃ and want to find E, which in this problem is determined by the equations
∇ × E = −Ḃ, ∇ · E = 0.
But we already know how to solve problems of this form, because the equations that govern
the magnetic field in magnetostatic situations are
∇ × B = µ0J, ∇ · B = 0.
So if we formally define a current J′ by −Ḃ = µ0J′, and use the Biot–Savart law to solve for
the corresponding B′, then that quantity will be precisely the E we’re looking for.
Now, −Ḃ is localized within the toroid, so since we’re assuming the toroid is thin, we can
approximate J′ as a ring of current I′ = (Φ/I) ˙ I/µ0. The resulting magnetic field is
B′
=
µ0I′
2
R2
(z2 + R2)3/2
ẑ =
˙ I
2

µ0Nh
2π
log
R + w
R

R2
(z2 + R2)3/2
ẑ
and this is the electric field we’re looking for. (The sign isn’t determined since the problem
didn’t specify which way the current in the solenoid went, but this doesn’t affect the magnitude.)
We can use w ≪ R ≪ z to simplify more, giving an answer of
E ≈
µ0
˙ I
4π
NhwR
z3
.
Remark
In electromagnetism, we often have issues with divergences when we take idealized point
sources. For example, the voltage near a point charge can become arbitrarily high. Similarly,
the magnetic field diverges as you approach an idealized, infinitely-thin wire, which causes
the self-inductance of wire loops to diverge. Of course, the resolution is that you don’t
actually get an infinite magnetic field as you approach a wire. A real wire has finite thickness,
and its magnetic field instead goes to zero as you approach its center. (We didn’t run into
this problem for solenoids, because we modeled their wires as a uniform sheet of current,
whose magnetic field isn’t singular at all.) If a problem does involve a wire loop, it’ll often
circumvent this messy issue by just giving the self-inductance from the start.
[2] Problem 18. A loop of wire is bent into a long “stadium” shape, with two parallel straight edges
of approximate length ℓ/2 connected by semicircles of diameter d ≪ ℓ.
(a) Write down an integral expression for the self-inductance, neglecting the curved parts, and
show that it diverges.
20
Kevin Zhou Physics Olympiad Handouts
(b) Find a rough estimate for the self-inductance by taking the wire to have radius r ≪ d and
ignoring any flux through the wire itself.
Solution. (a) We see the flux to be
Φ =
Z d
0
µ0I
2π

1
x
+
1
d − x

ℓ
2
dx
which is infinite, because the integral of 1/x is logarithmically divergent.
(b) We replace the flux integral with
Φ =
Z d−r
r
µ0I
2π

1
x
+
1
d − x

ℓ
2
dx.
This gives an inductance of
L =
Φ
I
=
µ0ℓ
2π
log

d − r
r

≈
µ0ℓ
2π
log(d/r).
This still diverges in the r → 0 limit, as it should, but the presence of the logarithm means
that the inductance doesn’t depend that strongly on d, for realistic values. That’s why we
can often get away with not mentioning the details of the wire; you’ll get a similar answer as
long as it’s thin.
