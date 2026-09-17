---
id: "kevin-zhou-e3-ex003"
source: "kevin-zhou"
native_id: "KZ-E3-EX003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e3-ex003"
topic: [electromagnetism]
subtopic: [dc-circuits, conductivity, charge-density]
math_tools: [integration, vector-calculus]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E3.txt"
source_url: "sources/kevin_zhou/site/handouts/E3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 3

       Consider two long, coaxial cylindrical shells of radii a < b and length L. The volume between
       the two shells is filled with material with conductivity σ(r) = k/r. What is the resistance
       between the shells, and the charge density?

       Solution
       To find the resistance, we compute the current I when a voltage V is applied between the
       shells. By symmetry, in the steady state the current density must be
                                                         I
                                               J(r) =         r̂.
                                                       2πrL
       On the other hand, we also know that
                                                  Z b
                                                         I           I(b − a)
                                       Z
                                 V = E · dr =                   dr =
                                                    a 2πrLσ           2πkL
       from which we conclude
                                                      b−a
                                                 R=         .
                                                      2πkL
       Note that the radial electric field between the shells is constant, so
                                                         V
                                               E(r) =         r̂.
                                                       b−a


                                                    4
    Kevin Zhou                                                              Physics Olympiad Handouts



       To find the charge density, it’s quickest to use Gauss’s law in differential form in cylindrical
       coordinates. We use the form of the divergence derived in E1, giving

                                                     ϵ0 ∂(rEr )   ϵ0 V
                                    ρ = ϵ0 ∇ · E =              =       .
                                                     r ∂r         r b−a
       It might be surprising that ρ is nonzero. That’s because in most textbook examples the
       conductivity is uniform, so that ∇ · E = ∇ · (J/σ) = (∇ · J)/σ = 0. In that case there can
       only be charge on the surfaces of conductors.
