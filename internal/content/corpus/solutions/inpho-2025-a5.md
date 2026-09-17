---
id: inpho-2025-a5
source: inpho
language: en
solution_language: en
translated: false
problem: inpho-2025-a5
solution_type: official
source_document: solution-document-inpho-2025-s
source_pdf: cache/phoxiv/inpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/inpho/2025_S.pdf."
---

5. Metalens
A metasurface is a two-dimensional, ultra-thin optical structure consisting of an array of nanospaced
optical nano-elements (also known as meta-atoms) on a ﬂat surface (typically an ultra-thin glass
plate). The primary function of the nano-elements is to locally introduce a phase shift ϕ(⃗ r) to the
wave, incident at position ⃗ r. This function, ϕ(⃗ r), is called the phase proﬁle of the metasurface.
Metalens has a circular metasurface with a circularly symmetric phase proﬁle function, ϕ(r), which
depends on the distance r of the point from the center of the metalens (see ﬁgure below). This
type of metalens can be used for focusing incoming parallel rays to a point. Unlike normal lenses,
the metalens will look just like an ultrathin circular disc.
r
Metalens
x
y
z
Consider two homogeneous media of refractive indices n1 and n2 separated by a metalens as shown
in the ﬁgure below. Suppose a beam of plane wave is incident at point Q (at distance r from the
pole P) on the metasurface at an angle of θ1 from medium 1. Assume that the rays falling at Q
are in the plane containing PQ and the axis of the lens (x-z plane). These rays will be refracted
at an angle θ2 in the medium 2. The angle of refraction θ2 depends on r. Thus, the modiﬁed law
of refraction for the metasurface can be written as
n1 sinθ1 − n2 sinθ2 = f (r)
Similarly, the rays falling at Q′, at a distance r′, will be refracted by an angle θ′
2.
θ1
θ1
θ2
θ′
2
r′
r
Metalens
n1 n2
P
Q
Q′
x
z
Medium 1 Medium 2
(a) [8 marks] Find f(r) in terms of ϕ(r) and ko, the wave number of the incoming wave in a
vacuum. To determine f(r), assume two rays in x-z plane incident at an angle θ1 at two
inﬁnitesimally close points, r and r+∆r, are refracted by the same angle θ2. You don’t need
to derive the exact functional form of ϕ(r) for this part.
Solution:
Page 22 INPhO 2025 Questions Last four digits of Roll No.:
A
B
A’
B’
θ1
θ2
∆r r
O
θ1
θ2
x
z
Consider two rays, which are close to each other, incident locally on metalens. The ray
OA is incident at an angle θ1 at r and exits in medium 2 at an angle θ2. Similarly the
ray BB′ exits in medium 2 at an angle of θ2 from r + ∆r. The rays being very close to
each other have a plane wavefront. Let wavefront AB propagate to A’B’ in time t. Let
ψA,ψB,ψA′ and ψB′ be phases at points A,B,A′ and B′ respectively. Then
ψA′ − ψA = k2∆rsinθ2 − ωt + ϕ(r)
ψB′ − ψB = k1∆rsinθ1 − ωt + ϕ(r + ∆r)
Since these two phase diﬀerences must be equal, we get
k2∆rsinθ2 − k1∆rsinθ1 = ϕ(r + ∆r) − ϕ(r)
n2 sinθ2 − n1 sinθ1 =
1
k0
ϕ(r + ∆r) − ϕ(r)
∆r
→
1
k0
dϕ(r)
dr
Alternate solution:
Time interval for the wavefront to travel from A to A′ is equal to the time taken by the
wavefront to travel from B to B′.
τAA′ + τA′ = τBB′ + τB′ (5.1)
where τBB′ is the time it takes for point B on the wavefront (traveling at speed v1 )
to reach point B’ , and τAA′ is the time it takes the transmitted portion of that same
wavefront (traveling a speed v2 ) to reach point A’ from point A. The time delays due to
the metasurface at points A and B’ are τA and τB , respectively. From ﬁgure
τAA′ =
1
c
∆rn2 sinθ2
τBB′ =
1
c
∆rn1 sinθ1
τA =
ϕA
cko
=
ϕ(r)
cko
τ′
B =
ϕA
cko
=
ϕ(r + ∆r)
cko
Substituting above terms in Eq.5.1, we get
∆rsinθ2 +
Φ(r)
ko
= ∆rsinθ1 +
Φ(r + ∆r)
k0
Page 23 INPhO 2025 Questions
Simplifying:
Φ(r + ∆r) − Φ(r)
∆r
=
1
k0
dΦ
dr
This gives the relation:
1
k0
dΦ
dr
= n2 sinθ2 − n1 sinθ1
(b) [4 marks] Derive an expression for the phase proﬁle ϕ(r), to convert a plane wavefront to
spherical wavefront, with light being focused to a point F on the axis (see ﬁgure below),
which is at a distance f from the pole P.
Metalens
n1 n2
P
f
F
x
z
Solution: From the previous part
n2 sinθ2 − n1 sinθ1 =
1
ko
dϕ
dr
From the above ﬁgure, the ray arriving at r (with θ1 = 0) must bend by an angle
θ2 = sin−1

r √
f2+r2

. Thus,
n2r
p
(f2 + r2)
− 0 =
1
ko
dϕ
dr
Simplifying above equation, we get
ϕ(r) = ±k2(
p
(r2 + f2) − f)
where k2 = kon2
(c) [3 marks] Consider a metalens whose phase proﬁle is obtained in part (b). For the paraxial
approximation, derive an expression for the lens equation, having object distance u and image
distance being v, with focal length f (see ﬁgure below).
Solution: We know that
n2 sinθ2 − n1 sinθ1 =
1
ko
dϕ
dr
For paraxial rays, we can use small angle approximation, sinθ1 = r/u and then above
H B C S E
Page 24 INPhO 2025 Questions Last four digits of Roll No.:
Metalens
n1
n2
P
v u
x
z
equation becomes
n2θ2 − n1θ1 =
1
ko
dϕ
dr
We know that
1
k0
dϕ
dr
=
n2r
p
(r2 + f2)
For paraxial approximation, we get
1
k0
dϕ
dr
=
n2r
p
(r2 + f2)
≈ n2
r
f
Using these approximations, we get
n1
u
+
n2
v
=
n2
f
If n1 = n2, then the above equation becomes
1
u
+
1
v
=
1
f
(5.2)
**** END OF THE QUESTION PAPER ****
