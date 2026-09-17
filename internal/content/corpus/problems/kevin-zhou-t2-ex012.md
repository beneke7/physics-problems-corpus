---
id: "kevin-zhou-t2-ex012"
source: "kevin-zhou"
native_id: "KZ-T2-EX012"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex012"
topic: [thermodynamics]
subtopic: [heat-transfer, conduction, continuity-equation]
math_tools: [calculus, differential-equations]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T2.txt"
source_url: "sources/kevin_zhou/site/handouts/T2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T2-EX012

    Example 12

    Find the steady state heat flow through a rectangular slab of area A and thickness d, whose
    left and right ends are held at temperature T and T + ∆T .

    Solution
    By the argument in the above idea, in the steady state the energy density within the slab
    is constant, so ∂ 2 T /∂x2 = 0 and the temperature gradient is uniform. In this steady state,
    heat simply flows uniformly through the slab, without accumulating anywhere in it, just
    like current flows uniformly through a resistor. (Since this “internal” steady state is often
    reached quickly, in many problems it is just assumed to hold, without being explicitly stated.)

    Therefore, the temperature gradient is just ∆T /d everywhere in the slab, so

                                                       κA∆T
                                         P = JA =           .
                                                         d
    This is the key equation for heat conduction problems.

    Remark: Continuity Equations

    We can generalize the results above to three dimensions. In this case, the flux of heat is
    described by a vector,
                                          J = −κ ∇T.
    The conservation of energy equation becomes
                                       ∂u
                                          = −∇ · J = κ ∇2 T.
                                       ∂t
    The first equality here is known as a continuity equation, and it is the general way that the


                                                  19
    Kevin Zhou                                                                Physics Olympiad Handouts



       density of a conserved quantity is related to a flow. For example, the continuity equation for
       fluids, which we saw in one-dimensional form in M7, is written in three dimensions as
                                                  ∂ρ
                                                     = −∇ · (ρv)
                                                  ∂t
       and expresses conservation of mass. The continuity equation for charge, which we’ll see in
       E4, is very similar,
                                               ∂ρ
                                                  = −∇ · J
                                               ∂t
       where ρ is a charge density and J is a current density.
