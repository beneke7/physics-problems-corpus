---
id: kevin-zhou-p2-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p002
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[3] Problem 2. Consider an exponentially distributed quantity,
p(x) =
(
ae−ax x ≥ 0,
0 otherwise,
for some a > 0. Verify that the total probability is 1, and compute the mean and standard deviation.
Solution. First, to check normalization,
Z ∞
−∞
p(x)dx =
Z ∞
0
ae−ax
dx =
Z ∞
0
e−u
du = 1 − 0 = 1.
Now, the mean can be evaluated using integration by parts,
⟨x⟩ =
Z ∞
0
xae−ax
dx = −xe−ax
∞
0
+
Z ∞
0
e−ax
dx = 0 −
1
a
e−ax
∞
0
=
1
a
.
To calculate the standard deviation, we must evaluate
⟨x2
⟩ =
Z ∞
0
x2
ae−ax
dx = 0 +
Z ∞
0
(2x)e−ax
dx =
2
a
⟨x⟩ =
2
a2
.
We thus conclude
σX =
p
⟨X2⟩ − ⟨X⟩2 =
r
2
a2
−
1
a2
=
1
a
.
