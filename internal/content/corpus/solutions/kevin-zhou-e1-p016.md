---
id: kevin-zhou-e1-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e1-p016
solution_type: author
source_document: solution-document-kevin-zhou-e1sol
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E1Sol.pdf."
---

[3] Problem 16. In this problem we’ll derive essential results about dipoles, which will be used later.
(a) Using the binomial theorem, derive the dipole potential given above, for a dipole made of a
pair of point charges ±q separated by distance d, oriented along the z-axis.
(b) Differentiate this result to find the dipole field,
E(r) =
p
4πϵ0r3
(2cosθr̂ + sinθ θ̂)
where the expression above is in spherical coordinates. (Hint: feel free to use the expression
for the gradient in spherical coordinates.)
(c) Show that this may also be written as
E(r) =
1
4πϵ0r3
(3(p · r̂)r̂ − p).
You don’t need to memorize these expressions, but it’s useful to remember what a dipole field
looks like, the fact that its magnitude is roughly p/4πϵ0r3, and the fact that the numeric
prefactor is 2 along the dipole’s axis and 1 perpendicular to it.
Solution. (a) Let the charges be at (0,0,0) and (0,0,d). Then
V (r,θ) =
q
4πϵ0r
−1 +
1
p
1 − 2(d/r)cosθ + (d/r)2
!
≈
qdcosθ
4πϵ0r2
.
(b) We use the definition E = −∇V , along with the gradient in spherical coordinates. Then
Er = −
∂V
∂r
=
p
4πϵ0r3
· 2cosθ
and
Eθ = −
1
r
∂V
∂θ
=
p
4πϵ0r3
· sinθ,
as desired.
(c) We see that p · r̂ = pcosθ and p = pẑ = p(r̂cosθ − θ̂sinθ). Thus,
3(p · r̂)r̂ − p = 3pcosθr̂ − p(r̂cosθ − θ̂ sinθ) = p(2cosθr̂ + sinθθ̂),
as desired.
[3] Problem 17.  m 1 0USAPhO 2002, problem B2.
[3] Problem 18.  m 1 0USAPhO 2009, problem B2. This essential problem introduces useful facts
about dipole-dipole interactions.
17
Kevin Zhou Physics Olympiad Handouts
Idea 8
The potential energy of a set of point charges is
U =
1
4πϵ0
X
i<j
qiqj
|ri − rj|
=
1
2
X
i
qiV (ri).
The sum over “i < j” indicates that we consider each pair of distinct point charges once.
We don’t include the energy of a single point charge due to its interaction with itself, which
would be infinite. For a continuous charge distribution, the analogous equations are
U =
1
2
Z
ρ(r)V (r)d3
r =
ϵ0
2
Z
|E(r)|2
d3
r.
Energy doesn’t obey the superposition principle, because it’s inherently quadratic, not linear.
