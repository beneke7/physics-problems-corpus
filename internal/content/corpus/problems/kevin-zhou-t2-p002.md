---
id: "kevin-zhou-t2-p002"
source: "kevin-zhou"
native_id: "KZ-T2-P002"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-p002"
topic: [thermodynamics]
subtopic: [heat-capacity, real-gases, maxwell-relations]
math_tools: [partial-derivatives, calculus]
format: "open-ended"
kind: "problem"
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

# KZ-T2-P002

[3] Problem 2. [A] Let’s illustrate some consequences of the previous example.

     (a) For a monatomic ideal gas, we have U = (3/2)nRT and the equation of state P V = nRT .
         Evaluate CV and CP using the results above.
     (b) In a real gas, there are short-ranged attractive intermolecular forces. If they are relatively
         weak, they yield a small negative contribution to the energy, of the form
                                                   3      an2
                                                U = nRT −     .
                                                   2       V
         Explain qualitatively why the change in energy is proportional to n2 /V .
     (c) We will show in problem 4 that this modifies the equation of state to
                                                 an2
                                                    
                                             P + 2 V = nRT.
                                                 V
         Using these results, show that to first order in a, we have
                                         3                             2an2
                                     CV = nR,       CP − CV ≈ nR +          .
                                         2                              TV

                                                      4
    Kevin Zhou                                                                 Physics Olympiad Handouts


           Qualitatively explain why the new term has a positive sign.

         Idea 4: Equality of Mixed Partial Derivatives

         If we take two distinct partial derivatives of a state function f , then the order doesn’t matter,

                                             ∂ ∂f       ∂ ∂f
                                                      =          .
                                             ∂x y ∂y x ∂y x ∂x y

         If this identity doesn’t hold, it means that f is not actually a state function. Imposing this
         requirement for various choices of independent variables x and y yields a variety of nontrivial
         identities, collectively called Maxwell relations.
