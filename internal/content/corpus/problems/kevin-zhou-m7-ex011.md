---
id: "kevin-zhou-m7-ex011"
source: "kevin-zhou"
native_id: "KZ-M7-EX011"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m7-ex011"
topic: [mechanics]
subtopic: [fluids, fluid-dynamics, hydraulic-jump]
math_tools: [calculus, algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M7.txt"
source_url: "sources/kevin_zhou/site/handouts/M7.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 11

  A fluid of density ρ flowing with a fast velocity v1 and height h1 can undergo a “hydraulic
  jump”, where the height of the fluid increases to h2 . At the same time, the fluid flow slows
  down and becomes turbulent.

  This phenomenon is very common in everyday life. For example, it happens whenever you
  turn on the water faucet in a sink; the hydraulic jump occurs on a circle centered on the
  faucet. Find the final height h2 .

  Solution
  During this process, the bulk kinetic energy of the water is not conserved, because it is
  converted to turbulent motion. However, the horizontal momentum of the water is approxi-
  mately conserved. Consider a stream of water of width w flowing in the x direction, where
  the hydraulic jump occurs at x = 0. By mass conservation,

                                           v1 h1 = v2 h2

  where v2 is the final speed. Now we consider a fixed subset of the water encompassing the
  hydraulic jump. The atmospheric pressure does not yield a net horizontal force on the water,
  so we focus on the pressure in excess of atmospheric pressure. The total excess pressure force
  on the left end is                   Z h1
                                                       1
                                  Fℓ =       ρghw dh = ρgwh21 .
                                         0             2
  Therefore, we have total force
                                             1
                                        F = ρgw(h21 − h22 ).
                                             2
  On the other hand, the mass of water that flows through the hydraulic jump per unit time
  is ρh1 wv1 , and its velocity decreases by v1 − v2 , so
                           dp
                              = −ρh1 wv1 (v1 − v2 ) = ρwv1 v2 (h1 − h2 )
                           dt
  where we used mass conservation. Equating F = dp/dt and simplifying gives

                                       g(h1 + h2 ) = 2v1 v2 .

                                                14
    Kevin Zhou                                                             Physics Olympiad Handouts

       Applying mass conservation again leads to a quadratic in h2 ,

                                                          2v12 h1
                                          h22 + h1 h2 −           =0
                                                            g
       and the physically relevant positive solution is the answer,
                                                     s
                                                h1      h21 2h1 v12
                                       h2 = − +            +        .
                                                2        4      g

       For v12 > gh1 , we have h2 > h1 and an ordinary hydraulic jump. For v12 < gh1 , you might
       expect a “reverse” hydraulic jump to occur, but this is impossible by the second law of
       thermodynamics. In a hydraulic jump, some of the kinetic energy of laminar flow energy
       is converted to turbulent flow, which is essentially heat; thus the reverse can’t happen.
       So in addition to deriving h2 , we’ve found the minimum v1 for a hydraulic jump to be possible!

       Note that this conservation law approach doesn’t tell us about how far a fluid will flow before
       it undergoes a hydraulic jump. That would require understanding the fluid flow in detail,
       accounting for turbulence and viscosity, which is generally analytically intractable. For more
       on this subject, see sections 26.1 and 26.2 of Lautrup.
