---
id: "kevin-zhou-t2-ex003"
source: "kevin-zhou"
native_id: "KZ-T2-EX003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-ex003"
topic: [thermodynamics]
subtopic: [heat-capacity, first-law, partial-derivatives, ideal-gas]
math_tools: [calculus, partial-derivatives]
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

# KZ-T2-EX003

   Example 3: Heat Capacities

   The heat capacities at constant volume and constant pressure are defined as

                                           ∂Q                  ∂Q
                                   CV =         ,       CP =        .
                                           ∂T V                ∂T P

   Find a formula for CP − CV in terms of P , V , T , and the internal energy U .

   Solution
   To avoid confusion, we again note that the partial derivative notation above does not imply
   that Q is a state function. It simply means that a small increment of heat transfer d̄Q can




                                                    3
    Kevin Zhou                                                               Physics Olympiad Handouts



       be related to small increments of P , V , and T , via

                                               ∂Q                ∂Q
                               d̄Q = CV dT +        dV = CP dT +      dP.
                                               ∂V T              ∂P T

       Now, to solve the problem itself, we apply the second identity derived in example 2, to get

                                                       ∂Q ∂V
                                          CP = CV +              .
                                                       ∂V T ∂T P

       To write this in terms of U , we use the first law of thermodynamics,

                                             d̄Q = dU + P dV.

       By expanding both d̄Q and dU in the differentials dV and dT , we read off

                                  ∂Q     ∂U               ∂Q     ∂U
                                       =      ,                =      + P.
                                  ∂T V   ∂T V             ∂V T   ∂V T

       The first result just tells us that CV can be equivalently defined as (∂U/∂T )|V . As for the
       second result, plugging it in gives an answer of
                                                             
                                                    ∂U          ∂V
                                       CP − CV =         +P           .
                                                    ∂V T        ∂T P

       This is actually quite intuitive. The extra heat we have to put in at constant pressure, when
       we allow the volume to change, comes from two sources. First, we have to make up for the
       energy lost to P dV work. Second, we have to make up for the energy intrinsically needed to
       expand the gas, by doing work against the attractive intermolecular forces between the gas
       molecules. (That second term is zero for an ideal gas by definition.) However, trying to show
       this result without the organizing framework of partial derivatives would be prone to error.
