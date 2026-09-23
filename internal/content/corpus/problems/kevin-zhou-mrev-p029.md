---
id: "kevin-zhou-mrev-p029"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-MRev-P029"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-mrev-p029"
topic: [mechanics]
subtopic: [fluid-dynamics, navier-stokes-equation, scaling-symmetry]
math_tools: [vector-calculus, dimensional-analysis]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/MRev.txt"
source_url: "sources/kevin_zhou/site/handouts/MRev.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[3] Problem 29. [A] The Navier–Stokes equation, governing the velocity v(x, t) of an incompressible
    fluid of density ρ and dynamic viscosity µ, are
                                      ∂v               1    µ
                                         + (v · ∇)v = − ∇P + ∇2 v.
                                      ∂t               ρ    ρ
    Let’s consider a fixed fluid, with a given ρ and µ, and see how potential solutions to this equation
    behave under symmetry transformations.

     (a) Given a velocity v(x, t), we can define a time-reversed velocity profile v′ (x, t) = −v(x, −t).
         If we replace v with v′ in the above equation, then the ∂v/∂t term stays the same, because
         both the sign of the velocity and the sign of the time derivative get flipped. Show that among
         the other three terms, two of them stay the same and one flips sign, and interpret your result.

    We can schematically describe the above transformation as “t → −t and v → −v”. Next, we’ll
    consider a scaling, which simultaneously takes x → λx and t → λ2 t.

     (b) Find how this scaling affects v, P , time derivatives, and space derivatives.

     (c) Show that under this scaling, all the terms in the Navier–Stokes equation scale as λ−n , for
         some integer n. This shows that the Navier–Stokes equation has scale symmetry: if something
         can happen in a fluid, then it can also happen at a scale 2 times larger and 4 times slower.

    Remarkably, part (c) explains why there aren’t many additional terms in the Navier–Stokes equation!
    In principle there must be terms with more time or space derivatives, since the microscopic dynamics
    of a fluid are very complex. However, all such terms would be suppressed by more than λ−n as
    we scale a solution up, which means that they wouldn’t have any significant effect on macroscopic
    scales. The Navier–Stokes equation contains precisely the terms that remain relevant.
