---
id: kevin-zhou-mrev-p029
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-mrev-p029
solution_type: author
source_document: solution-document-kevin-zhou-mrevsol
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/MRevSol.pdf."
---

[3] Problem 29. [A] The Navier–Stokes equation, governing the velocity v(x,t) of an incompressible
fluid of density ρ and dynamic viscosity µ, are
∂v
∂t
+ (v · ∇)v = −
1
ρ
∇P +
µ
ρ
∇2
v.
Let’s consider a fixed fluid, with a given ρ and µ, and see how potential solutions to this equation
behave under symmetry transformations.
(a) Given a velocity v(x,t), we can define a time-reversed velocity profile v′(x,t) = −v(x,−t).
If we replace v with v′ in the above equation, then the ∂v/∂t term stays the same, because
both the sign of the velocity and the sign of the time derivative get flipped. Show that among
the other three terms, two of them stay the same and one flips sign, and interpret your result.
We can schematically describe the above transformation as “t → −t and v → −v”. Next, we’ll
consider a scaling, which simultaneously takes x → λx and t → λ2t.
(b) Find how this scaling affects v, P, time derivatives, and space derivatives.
(c) Show that under this scaling, all the terms in the Navier–Stokes equation scale as λ−n, for
some integer n. This shows that the Navier–Stokes equation has scale symmetry: if something
can happen in a fluid, then it can also happen at a scale 2 times larger and 4 times slower.
19
Kevin Zhou Physics Olympiad Handouts
Remarkably, part (c) explains why there aren’t many additional terms in the Navier–Stokes equation!
In principle there must be terms with more time or space derivatives, since the microscopic dynamics
of a fluid are very complex. However, all such terms would be suppressed by more than λ−n as
we scale a solution up, which means that they wouldn’t have any significant effect on macroscopic
scales. The Navier–Stokes equation contains precisely the terms that remain relevant.
Solution. (a) The other term on the left-hand side gets two sign flips, because it has two powers
of v. On the right-hand side, the fluid properties ρ and µ stay the same, as does the pressure
P, so the ∇P term is unchanged, while the ∇2v term flips sign. The interpretation is that
viscosity is the only effect in the equations that cares about the direction of time, because it
arises from dissipation and thus has a direction set by the second law of thermodynamics. In
the absence of viscosity, the dynamics of a fluid are time reversal symmetric.
(b) Since v is a distance per time, it must scale as v → λ−1v. The spatial derivative transforms
in the opposite way as the space: if a configuration gets stretched out, then its change per
length is smaller, so its derivative gets smaller. Thus we conclude ∇ → λ−1∇, and by similar
reasoning ∂/∂t → λ−2∂/∂t.
Pressure is the tricky one. You can find it by thinking about how pressure emerges in kinetic
theory, or by dimensional analysis: P/ρ is a speed squared, and ρ is fixed, so P → λ−2P.
(c) By plugging in our results to part (b), it’s straightforward to show n = 3.
20
