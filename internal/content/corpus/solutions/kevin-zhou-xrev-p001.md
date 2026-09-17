---
id: kevin-zhou-xrev-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-xrev-p001
solution_type: author
source_document: solution-document-kevin-zhou-xrevsol
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/XRevSol.pdf."
---

[3] Problem 1. A photon of energy E bounces between two mirrors separated by a distance L.
(a) If the mirrors are slowly moved together to a distance L/2, find the final energy E by consid-
ering the blueshift the photon experiences at every collision.
(b) Check this result agrees with the adiabatic theorem.
(c) Using your result, infer the value of γ for a one-dimensional photon gas. Can you also infer
the value of γ for a d-dimensional photon gas?
Solution. (a) If the left mirror has speed v, then the Doppler shift factor on every reflection is
1 + 2v/c, so ∆E = (2v/c)E because E = ℏω. We also have ∆x = −(2x/c)v, which implies
∆E
∆x
= −
E
x
.
Treating this as a differential equation dE/dx = −E/x shows that Ex is conserved. (Note that
the adiabatic theorem works fine in this case, because the photon is always moving quickly
relative to the walls, so every collision has a small effect.)
Another valid, equivalent approach would be to note that the energy gets an overall Doppler
shift of (1 + 2v/c)N where N is the number of collisions with the moving wall, and compute
N directly.
(b) The adiabatic invariant is I
pdx =
E
c
(2L) ∝ Ex
giving the same result, using E = pc.
(c) The pressure exerted by each photon is
P =
∆p
∆t
=
2E/c
2L/c
=
E
x
.
Therefore, Px2 is constant which gives γ = 2. This is exactly as expected, since Cv = kB.
In d dimensions, much of the same reasoning holds. The quantity Ex is still invariant,
where x is the side length of, say, a cube. However, the pressure is now P ∝ E/V . Then
PV x = PV 1+1/d is constant, so γ = 1 + 1/d. For example, when d = 3 we have γ = 4/3, as
we also found in T1 and T2 in different ways.
Note that the reasoning here works equally well if you don’t know about photons, because
electromagnetic waves redshift and blueshift in the same way. By using this reasoning, i.e. by
thinking about how successive Doppler shifts change the frequency of light, Wien was able to
derive the original form of Wien’s displacement law.
1
Kevin Zhou Physics Olympiad Handouts
