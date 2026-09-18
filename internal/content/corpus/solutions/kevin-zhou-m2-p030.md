---
id: kevin-zhou-m2-p030
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m2-p030
solution_type: author
source_document: solution-document-kevin-zhou-m2sol
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M2Sol.pdf."
---

[2] Problem 30. One can also derive the Young–Laplace equation using the principle of virtual work.
Suppose the bubble radius changes by dr. The energy of the bubble changes for two reasons: first,
34
Kevin Zhou Physics Olympiad Handouts
there is net ∆P dV work from the two pressure forces, and there is the γ dA surface tension energy
cost. By setting the net virtual work to zero, find ∆P.
Solution. The work done by the surface tension should be balanced by the work done by the
pressure difference. Noting that the total surface area is 8πR2, we have
∆P dV = ∆P d

4
3
πR3

= ∆P(4πR2
)dR = d(8πR2
γ) = 16πγRdR
from which we conclude
∆P =
4γ
R
.
Of course, one can generalize this to any other kind of energy. For example, if the bubble was
charged, it would grow due to electrostatic repulsion, and the new equilibrium radius could also be
found using virtual work.
[2] Problem 31 (Kalda). Consider two soap bubbles which have stuck together. The part of the soap
film that separates the interior of the first bubble from the outside air has radius of curvature R.
The part that separates the interior of the second bubble from the outside air has radius of curvature
2R. What is the radius of curvature Rsep of the part which separates the bubbles from each other?
Solution. The key is that the Young–Laplace equation should hold for every point on the surface
since the surface tension and pressure should balance for every infinitesimal surface element. The
gauge pressures (i.e. pressure above atmospheric pressure) inside the two bubbles are P1 = 4γ/R,
and P2 = 4γ/(2R). Thus the pressure difference between the two bubbles is ∆P = 2γ/R, and this
must be equal to 4γ/Rsep, which implies Rsep = 2R.
Remark
So far, we’ve only applied the Young–Laplace equation to spherical surfaces, which are
characterized by a single radius of curvature. More generally, a surface has two principal
radii of curvature R1 and R2 at each point. These are both equal to R for a sphere of radius
R, while for a cylinder of radius R, one is equal to R and the other is infinity. For general
surfaces, the Young–Laplace equation is
∆P = γ

1
R1
+
1
R2

where the Ri can each be positive or negative, depending on the direction of curvature.
[3] Problem 32 (MPPP 67). When a pipe bursts under pressure, it often splits “lengthwise” instead
of “across”. (One familiar example is the process of cooking a long, straight sausage.) The two
modes of splitting are shown as dotted lines below.
Explain this observation, assuming the thickness of the sausage skin is uniform, and hence can
support a constant surface tension before breaking. (Hint: model the sausage as a cylinder of length
35
Kevin Zhou Physics Olympiad Handouts
L capped by hemispheres of radius R ≪ L, and consider the surface tension needed to prevent the
two modes of splitting mentioned, once an excess pressure P builds up inside the sausage.)
Solution. Let the pressure difference from inside the sausage to outside be P. Cutting it across
so the cross section is a circle tells us that the surface tension γa will exert a force F = (2πr)γa on
each end since F = γℓ. Using the trick from example 14, it must balance the force F = πR2P, so
γa = PR/2.
Lengthwise, the cross section has perimeter 2L + 2πR ≈ 2L. If we apply the trick to each
half-cylinder, we find that the pressure force is F = (2RL)P, so balancing forces gives γL = PR.
Since this is a greater requirement on the surface tension, the sausage will break lengthwise, as we
observe in the kitchen.
