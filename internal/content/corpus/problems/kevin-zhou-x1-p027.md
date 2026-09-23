---
id: "kevin-zhou-x1-p027"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-X1-P027"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-x1-p027"
topic: [quantum-physics, statistical-mechanics]
subtopic: [fermi-dirac-distribution, fermi-energy, electrons-in-solids]
math_tools: [algebra, integration]
format: "open-ended"
kind: "problem"
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

[2] Problem 27. Consider a system with many noninteracting fermions, and many quantum states.
    Each quantum state can be either empty or occupied by a fermion. We want to find the probability
    that a given quantum state, of energy E, is occupied.

      (a) To put a fermion in this state, we need to remove a fermion from some other state. Suppose
          the energy released by doing this, suitably averaged, is µ. (This is the chemical potential, and
          it depends on the temperature, the number of fermions, and the number of states and their
          energies.) Using the Boltzmann distribution, show that the probability of occupancy is
                                                                    1
                                              ⟨n⟩ =                          .
                                                         e(E−µ)/kB T + 1
          This is the Fermi–Dirac distribution.

     (b) Sketch ⟨n⟩ as a function of E for small but nonzero temperature, as well as the limit attained
         for zero temperature.

[3] Problem 28. In this problem we’ll consider the energy of the conducting electrons in a solid at low
    temperatures. Model a solid as a cubical box of volume V = L3 with periodic boundary conditions.

      (a) Suppose there are N ≫ 1 electrons in total. If the temperature is low enough, they will fill all
          of the quantum states up to energy µ = EF , where EF is called the Fermi energy. Show that
                                                                           2/3
                                                    h2

                                                                    3N
                                              EF =
                                                   2me              8πV

          where me is the mass of the electron. Be careful to account for the fact that an electron’s
          spin can have two possible values.

     (b) A sodium crystal has one conduction electron per atom. (The rest of the electrons are bound
         to individual atoms, and don’t matter for the purposes of this problem.) The density and
         molar mass are
                                ρ = 0.971 × 103 kg/m3 , M = 0.023 kg/mol.
          Find N/V and EF , and use this to evaluate the typical speed vF of an electron.

                                                          15


    Kevin Zhou                                                             Physics Olympiad Handouts

      (c) Find a rough estimate for the temperature range at which the above results apply. Is it
          satisfied for typical solids at room temperature?
