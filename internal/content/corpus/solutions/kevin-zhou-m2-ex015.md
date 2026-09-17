---
id: kevin-zhou-m2-ex015
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-ex015
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

Example 15
A spherical soap bubble of radius R and surface tension γ is in air with pressure P, and
contains air with pressure P + ∆P. Compute ∆P.
Solution
We use the result of the previous problem to conclude that the force of one hemisphere
on another is πR2∆P. This must be balanced by the surface tension force. By imagining
cutting the surface of the bubble in half, the surface tension force is γL where L is the total
length of the surface connecting the hemispheres.
At this point, we can write L = 2πR, giving
∆P =
2γ
R
.
This is called the Young–Laplace equation. However, in this particular case, this is not the
right answer. The reason is that we should actually take L = 4πR because the surface tension
is exerted at both the inside and outside surfaces of the bubble wall, and thus the answer is
∆P =
4γ
R
.
The increased pressure inside balances the surface tension, which wants to collapse the bubble.
If you’re confused about why L = 4πR, you can also think about it in terms of energy. Surface
tension arises from the fact that it costs energy to take soapy water and stretch it out into a
surface, because this breaks some of the attractive intermolecular bonds. The Young–Laplace
equation would give the correct answer for a ball of soapy water. But for a bubble of soapy
water, twice as much soapy water/air surface is created. So the energy cost is double, and
the force is double.
