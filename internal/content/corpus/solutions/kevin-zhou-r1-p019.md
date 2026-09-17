---
id: kevin-zhou-r1-p019
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r1-p019
solution_type: author
source_document: solution-document-kevin-zhou-r1sol
source_pdf: sources/kevin_zhou/site/handouts/R1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R1Sol.pdf."
---

[2] Problem 19. Show explicitly that the norm of the displacement four-vector is invariant under
Lorentz transformations, i.e. that
(∆s)2
= ∆s · ∆s = (∆t)2
− (∆x)2
− (∆y)2
− (∆z)2
is Lorentz invariant. Since all four-vectors transform the same way, this proves it for all of them.
Solution. Plugging in the Lorentz transformations, we have
(∆s′
)2
= (∆t′
)2
− (∆x′
)2
− (∆y′
)2
− (∆z′
)2
= γ2
(∆t − v∆x)2
− γ2
(∆x − v∆t)2
− (∆y)2
− (∆z)2
= γ2
(1 − v2
)(∆t)2
− γ2
(1 − v2
)(∆x)2
− (∆y)2
− (∆z)2
= (∆t)2
− (∆x)2
− (∆y)2
− (∆z)2
as desired.
Example 3
Find a four-vector representing the velocity of a particle with position x(t).
Solution
Just as multiplying an ordinary vector with a rotational invariant produces another vector,
multiplying or dividing a four-vector with a Lorentz invariant gives another four-vector. In
this case, the appropriate four-vector is found by dividing displacement by the proper time
experienced by the particle,
uµ
=
dxµ
dτ
= γ
dxµ
dt
= (γ,γv)
19
Kevin Zhou Physics Olympiad Handouts
where v = dx/dt is the spatial velocity and γ = 1/
√
1 − v2 as usual. Since its spatial part
reduces to the spatial velocity in the limit of low speeds, it is the relativistic generalization
of the spatial velocity. Finally, we define the four-momentum as pµ = muµ = (E,p), where
E = γm and p = γmv are the relativistic energy and momentum.
