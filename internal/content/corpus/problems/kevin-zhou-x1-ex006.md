---
id: "kevin-zhou-x1-ex006"
source: "kevin-zhou"
native_id: "KZ-X1-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-ex006"
topic: [quantum-physics, astrophysics]
subtopic: [phonons, fermi-statistics, pauli-exclusion, dark-matter]
math_tools: [dimensional-analysis, algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/X1.txt"
source_url: "sources/kevin_zhou/site/handouts/X1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

## Problem Statement

[5] Problem 26.    01h APhO 2002, problem 1. This useful problem covers the other common example
    of a quantized bosonic field. In the above problems, we quantized the electromagnetic field to get
    photons. Here, we quantize a displacement field to get phonons.

       Idea 7
       In problems 24 and 25, we handled a system of bosons (specifically photons) by considering
       the modes the photons could occupy, then calculating how many photons were in each mode.
       This was the easiest route. If we had instead fixed the number of photons, then counted
       the ways they could be distributed among the modes, the combinatorics would have been a
       complete nightmare, because multiple photons can occupy the same mode.

       Fermions, which obey the Pauli exclusion principle, are simpler, because no two can be in
       the same state. For instance, if there are n noninteracting fermions in a system, then the
       lowest energy state of the whole system consists of having one fermion occupy the lowest
       energy state, the second occupy the second-lowest energy state, and so on. (Accounting for
       interactions makes the problem much more complicated, because it means the energy of a
       state depends on whether other states are occupied. However, you can explain a surprising
       amount while completely neglecting interactions.)

       Example 6: Tremaine–Gunn Bound

       Suppose all of the dark matter in the galaxy is composed of a single kind of fermionic particle,
       of mass m. The escape velocity of the galaxy is of order vesc ∼ 10−3 c, and the dark matter
       density near Earth is ρ ∼ 0.3 GeV/(c2 cm3 ). What’s the minimum possible value of m?

       Solution
       The reason there’s a minimum possible value of m is that, as m gets smaller, we need more
       dark matter particles. But the Pauli exclusion principle tells us that if we want to add more
       particles, they need to have higher and higher energy, and at some point the particles will
       have so much energy they won’t be bound to the galaxy at all.

                                                      14


    Kevin Zhou                                                                   Physics Olympiad Handouts

       To get a rough estimate, let’s suppose the galaxy has length scale L, so that we need at least
       N ∼ ρL3 /m dark matter particles. They need to have energy less than E0 ∼ mvesc  2 . Plugging

       this into the final result of example 2 and dropping all numeric factors gives

                                              ρL3   m3 vesc
                                                        3 L3
                                                  ≲
                                               m       ℏ3
       which yields the bound
                                                          1/4
                                                  ρ ℏ3

                                        m≳         3
                                                                ∼ 10 eV/c2 .
                                                  vesc
       A few decades ago, neutrinos were leading dark matter candidates, since they are light
       fermionic particles that interact very weakly with ordinary matter. But we now know that
       the neutrino mass is well below this bound, so that nice idea doesn’t work. On the other
       hand, dark matter could still be composed of bosonic particles of much lighter mass.
