---
id: kevin-zhou-p1-ex019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex019
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 19
For ϵ ≪ 1, find a rough estimate for the leading term in the definite integral
I =
Z π/4
0
dθ
ϵ2 + sin2
θ
.
Solution
The integrand has a sharp peak near θ = 0 of height ∼ 1/ϵ2 and width θ ∼ ϵ, so I ∼ 1/ϵ.
If we also want to get the prefactor, we can approximate the integral by keeping only the
contribution from the peak. On the peak, we can use the small angle approximation,
I ≈
Z π/4
0
dθ
ϵ2 + θ2
≈
Z ∞
0
dθ
ϵ2 + θ2
=
π
2ϵ
where the second step followed because the integrand falls rapidly for θ ≳ ϵ.
Remark
The estimate above is right, but you might worry we’ve missed some important contribu-
tions, e.g. from the integration range away from the peak, or from applying the small angle
approximation within the integral. A more careful method is to split the integration range,
I =
Z δ
0
dθ
ϵ2 + sin2
θ
+
Z π/4
δ
dθ
ϵ2 + sin2
θ
= I1 + I2
where ϵ ≪ δ ≪ 1. Then we can apply approximations within I1 and I2 separately. First,
I1 =
Z δ
0
dθ
ϵ2 + θ2
+ O
 Z δ
0
θ4 dθ
(ϵ2 + θ2)2

=
1
ϵ
tan−1 δ
ϵ
+ O(δ)
where we accounted for the leading correction to the small angle approximation, and expanded
the integrand with the binomial theorem. Similarly, in the second case, expanding the
denominator for small ϵ gives
I2 =
Z π/4
δ
dθ
sin2
θ
+ O
Z π/4
δ
ϵ2
sin4
θ
!
= (cotδ − 1) + O(ϵ2
/δ3
).
We now can explicitly see how big the error terms are. To finish, we should check that we can
choose δ so that the error terms are reasonably small, and that the answer is independent of
the precise value of δ. Here, we take δ ∼
√
ϵ. Taylor expanding the arctangent and cotangent,
I1 =
π
2ϵ
−
1
δ
+ O(
√
ϵ), I2 =
1
δ
− 1 + O(
√
ϵ).
We thus conclude I = π/(2ϵ) − 1 + O(
√
ϵ), which is more accurate than the rough treatment
above, and has an estimate on the error. You probably won’t ever have to do anything this
intricate for an Olympiad, but this is the kind of reasoning you might informally do (much
more roughly than what’s written above) to check that your initial estimate is right.
46
Kevin Zhou Physics Olympiad Handouts
