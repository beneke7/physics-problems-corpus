---
id: kevin-zhou-x1-p025
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p025
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

[4] Problem 25. The final result of the problem above is correct dimensionally, but has incorrect
numerical factors because of the crude approximations made. In this problem we’ll do a more
careful analysis to get the right result. This question is self-contained, but background from T1
and T2 will be helpful.
(a) Consider a quantum mode that can support photons of energy E. The mode can be occupied
by any whole number of photons. Thus, using the Boltzmann distribution, the probability of
having n photons is
pn ∝ e−nE/kBT
.
Show that the expected number of photons in the mode is
⟨n⟩ =
1
eE/kBT − 1
.
This is the Bose–Einstein distribution.
(b) Sketch ⟨n⟩ as a function of E. How does it behave at high and low E, and do those results
make physical sense?
(c) Using the Bose–Einstein distribution, show that the total energy is
U =
L3ℏ
π2c3
Z ∞
0
dω
ω3
eℏω/kBT − 1
where ω is the angular frequency. You’ll have to multiply by a factor of two, because there
are two independent photon polarizations for each mode we found above. (Note that if we
open the box, the photons will fly out, and the frequency distribution of the emitted light will
be given by the integrand; this yields Planck’s law for blackbody radiation.)
(d) [A] Using an appropriate substitution, show that U is a dimensionful constant times the
dimensionless integral Z ∞
0
dx
x3
ex − 1
.
To evaluate this integral, expand the denominator as a power series, integrate each term
individually, and use the fact that the Riemann zeta function obeys
ζ(s) =
∞ X
n=1
1
ns
, ζ(4) =
π4
90
.
When the smoke clears, you should find that
U =
π2
15
(kBT)4 L3
(ℏc)3
.
Solution. (a) We see that
⟨n⟩ =
P
n ne−nE/kBT
P
n e−nE/kBT
=
eE/kBT /(eE/kBT − 1)2
eE/kBT /(eE/kBT − 1)
=
1
eE/kBT − 1
,
as desired.
20
Kevin Zhou Physics Olympiad Handouts
(b) ⟨n⟩ as a function of E looks like this:
⟨n⟩
kBT
E
For modes with low E, we have ⟨n⟩ ≈ kBT/E ≫ 1, so the energy stored in this mode is
approximately ⟨n⟩E ≈ kBT. That makes physical sense: in this limit where there are lots
of photons, their discreteness doesn’t matter, so the mode can be treated classically, getting
energy kBT by the equipartition theorem.
For modes with high E, we have ⟨n⟩ ≈ e−E/kBT ≪ 1. This also makes sense, because in this
limit there isn’t enough thermal energy to significantly excite the modes.
(c) The logic is exactly the same as part (c) of the previous problem, but instead of saying that
some modes have 1 photon and others have 0 photons, we just assign the proper ⟨n⟩ photons
to every mode. Then
U =
Z
⟨n⟩E dN =
1
2π2

L
ℏc
 3 Z ∞
0
⟨n⟩E3
dE.
As stated, we multiply by a factor of 2 to account for the two polarizations per mode. We
also change variables from E to ω using E = ℏω. This gives
U =
L3ℏ
π2c3
Z ∞
0
dω
ω3
eℏω/kBT − 1
just as desired.
(d) Now we substitute x = ℏω/kBT, where dx = ℏdω/kBT.
U =
L3ℏ
π2c3
Z ∞
0

kBT
ℏ
dx

(kBTx/ℏ)3
ex − 1
=
(kBT)4L3
π2c3ℏ3
Z ∞
0
dx
x3
ex − 1
.
We can rearrange the integral into
I =
Z ∞
0
dx
x3
ex − 1
=
Z ∞
0
e−x
x3 1
1 − e−x
dx.
Recognizing 1/(1 − e−x) as a geometric series
P∞
n=0(e−x)n, we can represent the integral as
I =
Z ∞
0
∞ X
n=0
x3
e−(n+1)x
dx.
21
Kevin Zhou Physics Olympiad Handouts
We can reindex this since the only instance of n is n + 1, so we can start the summation at
n = 1. Since we can integrate this term by term, we can change the order of the integral and
summation, then integrate by parts to get
I =
∞ X
n=1
Z ∞
0
x3
e−nx
dx =
∞ X
n=1
Z ∞
0
(3x2
dx)

e−nx
n

=
∞ X
n=1
Z ∞
0
(6xdx)

e−nx
n2

=
∞ X
n=1
Z ∞
0
(6dx)

e−nx
n3

=
∞ X
n=1
6
n4
= 6ζ(4).
Putting this into our original expression gets
U =
π2k4
B
15c3ℏ3
L3
T4
.
[5] Problem 26.   h 1 0APhO 2002, problem 1. This useful problem covers the other common example
of a quantized bosonic field. In the above problems, we quantized the electromagnetic field to get
photons. Here, we quantize a displacement field to get phonons.
Solution. See the official solutions. But they’re badly formatted, so I’ll also list the answers here.
(a) mẌn = S(Xn+1 − Xn) − S(Xn − Xn−1)
(b) ω2 = (4S/m)sin2
(ka/2), k = π/L,2π/L,...,Nπ/L, ωmax = 2
p
S/m
(c) ℏω/(eℏω/kBT − 1)
(d) (L/π)∆k modes
(e) N modes, with
ET =
2N
π
Z ωmax
0
ℏω
eℏω/kBT − 1
dω
p
ω2
max − ω2
(f) It grows linearly in T for small T, then asymptotes to NkB = R.
Idea 7
In problems 24 and 25, we handled a system of bosons (specifically photons) by considering
the modes the photons could occupy, then calculating how many photons were in each mode.
This was the easiest route. If we had instead fixed the number of photons, then counted
the ways they could be distributed among the modes, the combinatorics would have been a
complete nightmare, because multiple photons can occupy the same mode.
Fermions, which obey the Pauli exclusion principle, are simpler, because no two can be in
the same state. For instance, if there are n noninteracting fermions in a system, then the
lowest energy state of the whole system consists of having one fermion occupy the lowest
energy state, the second occupy the second-lowest energy state, and so on. (Accounting for
interactions makes the problem much more complicated, because it means the energy of a
state depends on whether other states are occupied. However, you can explain a surprising
amount while completely neglecting interactions.)
22
Kevin Zhou Physics Olympiad Handouts
