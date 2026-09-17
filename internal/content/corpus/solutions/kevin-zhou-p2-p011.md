---
id: kevin-zhou-p2-p011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-p011
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

[2] Problem 11. A student launches a projectile with speed v = 5±0.1m/s in gravitational accelera-
tion g = 9.81±0.01m/s2. The resulting range is d = 1.5±0.02m. Given that the launch angle was
less than 45◦, find the launch angle, with uncertainty, assuming all uncertainties are independent.
7
Kevin Zhou Physics Olympiad Handouts
Solution. From the projectile range equation d = v2 sin(2θ)/g, we get
θ =
1
2
arcsin

dg
v2

= 18.03◦
.
Now write sin(2θ) = gd/v2. By the results of problem 10, the uncertainty of the right-hand side is
dg
v2
s
∆d
d
2
+

∆g
g
2
+

2∆v
v
2
= 0.0248.
The uncertainty of the left-hand side is 2cos(2θ)∆θ by the tangent line approximation, so we have
∆θ = 0.015 rad = 0.9◦. Thus, the final result should be written as
θ = 18.0◦
± 0.9◦
where we removed a superfluous significant figure.
