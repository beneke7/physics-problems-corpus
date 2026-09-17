---
id: kevin-zhou-p2-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p004
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[3] Problem 4. We say X is normally distributed if
p(x) ∝ e−a(x−b)2
for some a > 0. For simplicity, let’s shift X so that it’s centered about x = 0, so
p(x) ∝ e−ax2
.
You may use the result given in P1,
Z ∞
−∞
e−x2
dx =
√
π.
Find the constant of proportionality in p(x), the mean, and the standard deviation.
Solution. Let p(x) = ke−ax2
. We fix the constant k by demanding normalization,
Z ∞
−∞
ke−ax2
dx =
Z ∞
−∞
k
√
a
e−u2
du = 1.
Using the provided integral, we conclude
k =
r
a
π
.
The mean is clearly zero, since the distribution is symmetric about that point. Thus, we have
varX = ⟨X2
⟩ =
r
a
π
Z ∞
−∞
x2
e−ax2
dx =
1
a
√
π
Z ∞
−∞
u2
e−u2
du.
This remaining integral can be evaluated using integration by parts,
Z ∞
−∞
u2
e−u2
du = −
1
2
ue−u2 ∞
−∞
+
1
2
Z ∞
−∞
e−u2
du = 0 +
√
π
2
from which we conclude
varX =
1
a
√
π
√
π
2
, σ =
1
√
2a
.
3
Kevin Zhou Physics Olympiad Handouts
Remark
As you saw in problem 4, normal distributions are characterized entirely by their mean
and standard deviation. Moreover, the central limit theorem roughly states that the sum
of many independent random variables is approximately normally distributed. As a result,
final experimental results are often approximately normally distributed, which means we can
describe them with only the mean and standard deviation. That is the reason why the next
part of this problem set will focus on calculating standard deviations (i.e. uncertainties).
