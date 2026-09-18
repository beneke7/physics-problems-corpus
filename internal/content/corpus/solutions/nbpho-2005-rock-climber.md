---
id: nbpho-2005-rock-climber
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2005-rock-climber
solution_type: official
source_document: solution-document-nbpho-2005-s
source_pdf: cache/phoxiv/nbpho/2005_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2005_S.pdf."
---

1. Rock Climber
1) In the case of falling, the acceleration should not exceed 5g, which
means that σ(ε)
m
− g < 5g. Maximum strain is the solution of the fol-
lowingequationσ(ε) = 6gm = 6×9.8m
s2 ×80kg = 4.7kN. According
to the graph, ε = 0.315; hence, l < 0.315(L + H) + L
2) In the case of falling, the climber reaches the lowest point, when its
velocity become zero. This means that the energy absorbed by the rope
becomesequal to the change of the potential energy:
E = mg(2L + x),
where x = l − L. Energy absorbed by the rope is given by
E =

σ(ε)dx =

σ(ε)(L + H)dε = (L + H)

σ(ε)dε.
We know that the maximal value is ε = 0.315, which makes it possible
to calculate the integral numerically, as the area under the graph.
S(ε) =
  0.31
0
σ(ε)dε ≈ 564.8N
Thus,
(L + H)S(ε) = mg(2L + x) = mg(2L + ε(L + H)),
hence
L =
H(mgε − S(ε))
S(ε) − mg(ε + 2)
≈ 5.08m.
So, the new carabiner mustbe anchored within next L = 5.08m.
