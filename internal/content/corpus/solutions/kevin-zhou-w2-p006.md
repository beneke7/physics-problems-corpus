---
id: kevin-zhou-w2-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w2-p006
solution_type: author
source_document: solution-document-kevin-zhou-w2sol
source_pdf: sources/kevin_zhou/site/handouts/W2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W2Sol.pdf."
---

[3] Problem 6. The anti-reflection coating on your glasses consists of a thin layer of material whose
index of refraction is between that of air (n = 1) and glass (n = 1.5). The coating is designed to
eliminate the reflection of green light, λ = 550nm.
(a) Accounting for only the two most significant paths for the light, find the minimum possible
thickness of the coating, and its index of refraction. (You’ll need results for reflection and
transmission coefficients from W1 or E8, and a computer to numerically solve an equation.)
(b) Roughly how much does the next most significant path contribute to the reflected intensity?
Solution. (a) For a general interface, our results in W1 for r and t were
r =
v2 − v1
v1 + v2
, t =
2v2
v1 + v2
and using v = c/n, we have
r =
n1 − n2
n1 + n2
, t =
2n1
n1 + n2
.
You also derived these results in E8. From that more general derivation, you can see that
this only holds if the magnetic permeabilities on both sides are the same, which is indeed an
excellent approximation for everyday materials. (The analogous assumption made in the case
of a string in W1 is that the tension is the same on both sides.)
The two most significant paths are the path with an immediate reflection at the air-coating
interface and the path with the only reflection at the coating-glass interface. To eliminate
green light, we must arrange for the amplitudes of these paths to be equal, and for their phases
to be opposite. For the former, if we let the indices of refraction for air, the coating, and glass
be na = 1, n, and ng = 1.5 respectively, then we must have
na − n
na + n
=
2na
na + n
n − ng
n + ng
2n
n + na
.
Clearing denominators, we have
(n2
− n2
a)(n + ng) = 4n(ng − n)
and plugging in values and expanding gives
2n3
+ 11n2
− 14n − 3 = 0.
We can solve this numerically to get n = 1.22.
Now let’s find the thickness ℓ. Both reflections are at hard boundaries (low to high indices of
refraction), so the same π shift is applied to both paths. The geometric path length difference
is then 2ℓ, so destructive interference for the lowest possible ℓ occurs when
ℓ =
λ
4n
= 113nm.
7
Kevin Zhou Physics Olympiad Handouts
(b) The next most significant path has 3 reflections and 2 transmissions, so its amplitude is
A =
2na
na + n
n − ng
n + ng
n − na
n + na
n − ng
n + ng
2n
na + n
and the numerical value, using our previous answer, is A3 ≈ 0.001, which is the portion of the
original amplitude reflected. Thus, the intensity is reduced by a factor of 10−6.
[2] Problem 7 (NBPhO 2004). A thick glass plate is coated by a thin transparent film. The emission
spectrum of the system at normal incidence is as shown.
The refractive index of the film is n = 1.3. Find the thickness of the film.
