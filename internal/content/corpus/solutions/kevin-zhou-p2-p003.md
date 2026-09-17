---
id: kevin-zhou-p2-p003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p003
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[2] Problem 3. The purpose of subtracting ⟨X⟩2 in the variance is to make sure it doesn’t change
when a constant is added to x, since shifting something left or right on the number line shouldn’t
change its spread. Verify that for any constant c, varX = var(X + c).
2
Kevin Zhou Physics Olympiad Handouts
Solution. We have
var(X + c) = ⟨(X + c)2
⟩ − ⟨X + c⟩2
.
By the definition of the expectation value, we have
⟨A + B⟩ = ⟨A⟩ + ⟨B⟩, ⟨cA⟩ = c⟨A⟩
for any quantities A and B and any constant c. Thus,
var(X + c) = ⟨X2
⟩ + ⟨2Xc⟩ + ⟨c2
⟩ − ⟨X⟩2
− 2⟨X⟩⟨c⟩ − ⟨c⟩2
= varX
as desired.
