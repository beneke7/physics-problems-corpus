---
id: "kevin-zhou-t1-p024"
difficulty_level: 5
source: "kevin-zhou"
native_id: "KZ-T1-P024"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t1-p024"
topic: [thermodynamics, mechanics]
subtopic: [kinetic-theory, transport-phenomena, thermal-conductivity, viscosity]
math_tools: [probability-statistics]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T1-P024

[5] Problem 24. In this problem, we consider a simple kinetic theory model for “transport” in a
    sparse gas. Two parallel plates are at a distance L from each other. The space between the plates is
    filled with a gas of density ρ, with molecule of mass m. Assume that the gas density is low enough
    to neglect collisions between gas molecules, and that all radiation effects can be neglected.
      (a) Suppose the two plates are held at temperatures T + ∆T and T , where ∆T ≪ T . Assume
          that when gas molecules bounce from a plate, they instantly obtain the plate’s temperature.
          Estimate the heat flux per area P/A (in units of W/m2 ) between the plates. (This determines
          the thermal conductivity, to be defined in T2.)
      (b) Suppose the top plate moves with a transverse speed v∥ parallel to itself, while the bottom
          plate is still, and mv∥2 ≪ kB T . Assume that when gas molecules bounce from a plate, they

                                                      16


   Kevin Zhou                                                                Physics Olympiad Handouts


         obtain that plate’s transverse speed. Estimate the force per area F/A on each plate. (This
         determines the viscosity, as defined in M7.)
   Both the thermal conductivity and viscosity are associated with the transport of conserved quantities
   (energy and transverse momentum, respectively) through the gas. Now, above we have neglected
   collisions entirely, which is unrealistic for most gases unless they are extremely sparse. However,
   it’s possible to get some rough estimates for what happens in the presence of collisions.
     (c) Let σ be the cross-sectional area of a gas molecule. Estimate the mean free path d of a gas
         molecule.

    (d) Our previous analysis held when L ≪ d. Now suppose, more realistically, that L ≫ d.
        Estimate P/A and F/A in the steady state. (Hint: consider a set of imaginary planes that
        are spaced by a distance d, and consider the heat/momentum flow between pairs of adjacent
        planes; for such pairs, collisions can be neglected.)

     (e) Suppose a gas molecule begins at the top plate, and both plates have temperature T . Again
         assuming that L ≫ d, estimate the typical time it takes before the gas molecule hits the
         bottom plate. (Hint: model the position of the particle as a sum of random steps, and recall
         the facts about variance in P2.)


                   01h
   For a clear discussion of the ideas of this problem, see sections 7.3 and 7.4 of The Art of Insight.
