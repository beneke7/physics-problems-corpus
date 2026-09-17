---
id: kevin-zhou-x1-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p019
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

[2] Problem 19 (Insight 8.26). When helium is cooled to extremely cold temperatures, it becomes
a superfluid, an exotic type of liquid that can flow with zero dissipation. These strange properties
occur because quantum mechanical effects are large, making the quantum uncertainty in the position
of each helium atom on the same order as the separation between atoms.
(a) Superfluid helium has density ρ and a helium atom has mass m. Estimate the temperature T
at which helium becomes a superfluid. This is closely related to, but not quite the same thing
as Bose–Einstein condensation, a phase transition that bosons undergo at low temperatures.
15
Kevin Zhou Physics Olympiad Handouts
(b) Numerically evaluate T, using ρ ∼ 100kg/m3 and m ∼ 7 × 10−27 kg.
Solution. (a) The energy is of order kBT, so the momentum is of order p ∼
√
2mE ∼
√
mkBT.
This leads to a spread in position by the uncertainty principle of
∆x ∼
ℏ
p
∼
ℏ
√
mkBT
.
The volume per helium atom is m/ρ, giving a typical separation of (m/ρ)1/3. Setting this
equal to ∆x and solving for T gives
T ∼
ρ2/3ℏ2
kBm5/3
.
(b) Plugging in the numbers gives T ∼ 0.7K. The actual answer is 2.172K, so this isn’t bad for
such a rough estimate!
