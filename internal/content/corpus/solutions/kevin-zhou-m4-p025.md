---
id: kevin-zhou-m4-p025
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p025
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[3] Problem 25. Consider a pendulum whose length adiabatically changes from L to L/2.
(a) If the initial (small) amplitude was θ0, find the final amplitude using the adiabatic theorem.
(b) Give a physical interpretation of the adiabatic invariant.
(c) When quantum mechanics was being invented, it was proposed that the energy in a pendulum’s
oscillation was always a multiple of ℏω, where ω is the angular frequency. At the first Solvay
conference of 1911, Lorentz asked whether this condition would be preserved upon slow changes
in the length of the pendulum, and Einstein said yes. Reproduce Einstein’s analysis.
Solution. (a) Using the small angle approximation, we have
E =
1
2
mv2
+
1
2
mgLθ2
and the adiabatic invariant is
I
pdx = L
I
pdθ = mL
I
v dθ.
On the other hand, from conservation of energy, we know that v(θ) is an ellipse with semimajor
and semiminor axes
p
2E/m and
p
2E/mgL, so
I
pdx ∝ mL
p
E/m
p
E/mgL = E
s
L
g
.
The total energy is E = mgLθ2
0/2, so
I
pdx ∝ θ2
0L3/2
g1/2
31
Kevin Zhou Physics Olympiad Handouts
which implies that when L halves, the amplitude becomes 23/4θ0. Since we kept track of
factors of g, this derivation also tells us what happens to the amplitude if g is slowly changed.
The most famous literary example of a pendulum with changing length appears in Edgar
Allan Poe’s short story, The Pit and the Pendulum. In the story, the narrator is strapped to
a table, and sees a pendulum above him slowly moving and lengthening, bringing its razor
edge toward him. Poe describes the pendulum’s amplitude as initially small, but “increasing
inexorably”. Ths is partly true. We found above that the angular amplitude scales as L−3/4,
so the linear amplitude scales as L1/4, and the max speed scales as ωL1/4 ∝ L−1/4. But then
if the pendulum starts by moving harmlessly slowly, it just gets even slower.
(b) As for the case of a mass on a spring, we can add a third dimension and let the pendulum
oscillate in a horizontal circle. Then the adiabatic invariant is simply
I
Lz dθ = 2πLz ∝ Lz
which is the angular momentum in the z-direction.
(c) Given the way we did part (a), this is immediate. The adiabatic invariant is
E
s
L
g
=
E
ω
.
Therefore, E/ω remains an integer multiple of ℏ under adiabatic change.
