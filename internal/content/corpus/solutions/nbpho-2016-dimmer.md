---
id: nbpho-2016-dimmer
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2016-dimmer
solution_type: official
source_document: solution-document-nbpho-2016-s
source_pdf: cache/phoxiv/nbpho/2016_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2016_S.pdf."
---

4. Dimmer
i) Denote ω = 2πf. Adding an imagin-
ary component to the voltages u = Uejωt
and uC = UCej(ωt+φ)
(with j being the
imaginary unit), there is a relation uC =
uzC/(R + zC), where the capacitor’s imped-
ance zC = 1/(jωC). Calculating, we get
k ≡ zC/(R + zC) = 1/(jωRC +
1) = 1/
[√
1 + (ωRC)2 × ej arctan(ωRC)
]
.
Therefore UC = U|k| = U/
√
1 + (2πfRC)2
and φ = argk = −arctan(2πfRC). (The an-
swerscouldalsobeobtainedbyanalyzingavector
diagram.)
ii) Thediacstartstoconductwhenthevoltageon
the capacitor rises to Ub. This voltage is then ap-
plied to the series connection of Rt and the diac,
whose voltage has dropped to Ud. Therefore the
currentthroughthediacis(Ub−Ud)/Rt andthe
inequality is RtIt < Ub − Ud.
iii) At t0, the voltage on the capacitor becomes
larger than Ub. Thus, UC sin(2πft0 + φ) = Ub
and t0 = [arcsin(Ub/UC) − φ]/(2πf).
iv) The lamp is lit at phase 2πft0 and turned
off at phase π. The power is proportional to the
voltage squared, giving the ratio
r =
∫π
0
sin2
αdα
∫π
2πft0
sin2
αdα
.
Because
∫
sin2
αdα =
∫ 1−cos(2α)
2 dα = α
2 −
sin(2α)
4 , we get
r =
(
π
2 − sin(2π)
4
)
−
(
0
2 − sin(0)
4
)
(
π
2 − sin(2π)
4
)
−
(
2πft0
2 − sin(4πft0)
4
)
=
1
1 − 2ft0 + sin(4πft0)
2π
.
