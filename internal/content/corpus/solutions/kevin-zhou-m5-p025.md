---
id: kevin-zhou-m5-p025
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m5-p025
solution_type: author
source_document: solution-document-kevin-zhou-m5sol
source_pdf: sources/kevin_zhou/site/handouts/M5Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M5Sol.pdf."
---

[2] Problem 25. A circular pendulum consists of a point mass m on a string of length ℓ, which is
made to rotate in a horizontal circle. By using only the equation τ = dL/dt about an origin of your
choice, compute the angular frequency if the string makes a constant angle θ with the horizontal.
Solution. Of course, this would be easier with Newton’s second law, but we solve the problem
using torques to show the general technique, which will be useful when studying precession in M8.
We consider the angular momentum about the fixed top end of the string,
L = |r × p| = mvℓ = mℓ2
ω cosθ
where ω is the angular velocity of the circular motion. The angular momentum points at an angle
θ to the vertical. Its vertical component stays the same, while its horizontal component Lsinθ
rotates in a circle, so
dL
dt
= ωLsinθ = mℓ2
ω2
cosθsinθ.
We equate this to the magnitude of the torque due to gravity,
τ = |r × F| = mgℓcosθ.
We thus conclude that
ω =
r
g
ℓsinθ
.
As a check, in the limit of small oscillations θ → π/2, we get ω =
p
g/ℓ. This makes sense because
in this case, we can project in one direction to recover ordinary pendulum motion.
