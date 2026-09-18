---
id: "kevin-zhou-t2-p023"
source: "kevin-zhou"
native_id: "KZ-T2-P023"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t2-p023"
topic: [quantum-physics, statistical-mechanics]
subtopic: [einstein-coefficients, absorption-and-emission, planck-law]
math_tools: [differential-equations, probability-statistics]
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

# KZ-T2-P023

[3] Problem 23. Planck’s law can be used to understand atomic physics, as Einstein showed and as
    you will now show. Suppose we have a collection of two-state atoms encased inside a cavity, whose
    walls are blackbodies with temperature T . In equilibrium, there will be N1 atoms in the ground
    state and N2 atoms in the excited state, bathed in a photon gas of temperature T . Three physical
    processes can occur:

       1. Atoms in the excited state can each spontaneously decay with rate A.

                                                         17


    Kevin Zhou                                                                  Physics Olympiad Handouts


       2. Atoms in the ground state can absorb a photon. For each atom, the rate of this process is
          Bρ(f ) where ρ(f ) is the energy density of radiation at frequency f .

       3. Atoms in the excited state can undergo stimulated emission when interacting with a photon,
          in the process e + γ → g + γ + γ. For each atom, the rate of this process is B ′ ρ(f ).
    These three “Einstein coefficients” depend on the frequency, but not on the temperature.
     (a) Argue that ρ(f ) is proportional to I(f ) in Planck’s law. In fact,
                                                             c
                                                   I(f ) =     ρ(f )
                                                             4
          though you do not have to show this.

     (b) Write down an expression for dN2 /dt.

      (c) In the steady state, for any temperature, N2 /N1 must be given by the Boltzmann distribution.
          Using this, find A and B ′ in terms of B.
    This is an extraordinary result: one might have expected a difficult calculation to find each of
    A, B, and B ′ , but if you know one, then by thermodynamics you know them all. In particular,
    thermodynamics requires spontaneous emission to be possible, A ̸= 0.
