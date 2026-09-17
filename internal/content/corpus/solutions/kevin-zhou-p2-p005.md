---
id: kevin-zhou-p2-p005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p005
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[2] Problem 5. If two random variables X1 and X2 are independent, then
⟨X1X2⟩ = ⟨X1⟩⟨X2⟩.
Use this result to show that
var(X1 + X2) = var(X1) + var(X2)
which implies that the standard deviation “adds in quadrature”,
σX1+X2 =
q
σ2
X1
+ σ2
X2
.
This is an important result we’ll use many times below.
Solution. By definition, we have
var(X1 + X2) = ⟨(X1 + X2)2
⟩ − ⟨X1 + X2⟩2
Using the properties listed in problem 3,
var(X1 + X2) = ⟨X2
1⟩ + 2⟨X1X2⟩ + ⟨X2
2⟩ − ⟨X1⟩2
− 2⟨X1⟩⟨X2⟩ − ⟨X2⟩2
= var(X1) + var(X2) + 2(⟨X1X2⟩ − ⟨X1⟩⟨X2⟩)
When X1 and X2 are independent, the last term vanishes, giving
var(X1 + X2) = var(X1) + var(X2).
2 Uncertainty Propagation
Idea 2
When a physical quantity is measured in an experiment and reported as x±∆x, it is uncertain
what the true value of the quantity is. If the quantity has a probability distribution p(x),
then the reported uncertainty ∆x is essentially the standard deviation of p(x).
Remark
You can use intuition and experience to assign uncertainties to real measurements. For
example, if you’re using a clock that times only to the nearest second, you might take
∆t = 0.5s. If you’re using a good ruler, which has millimeter markings, you might take
4
Kevin Zhou Physics Olympiad Handouts
∆x = 0.5mm. Of course, the ultimate test is the results: if you assigned the uncertainties
right, your final uncertainty should encompass the true result most (but not all) of the time.
