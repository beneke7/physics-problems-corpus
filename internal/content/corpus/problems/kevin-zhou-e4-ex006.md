---
id: "kevin-zhou-e4-ex006"
source: "kevin-zhou"
native_id: "KZ-E4-EX006"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e4-ex006"
topic: [electromagnetism]
subtopic: [resistivity, conduction, drude-model]
math_tools: [differential-equations, algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E4.txt"
source_url: "sources/kevin_zhou/site/handouts/E4.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

Example 6: The Drude Model

         Model a conductor as a set of electrons, of charge q, mass m, and number density n, which are
         completely free. Assume that in every small time interval dt, each electron has a probability
         dt/τ of hitting a lattice ion, which randomizes the direction of its velocity. Under these
         assumptions, compute the resistivity of the material.

         Solution
         First, suppose the electrons have some average momentum ⟨p⟩. In time dt, a fraction dt/τ of
         them hit a lattice ion, which gives them zero average final momentum. Then the new average




                                                        12
Kevin Zhou                                                              Physics Olympiad Handouts



  momentum is (1 − dt/τ )⟨p⟩, which implies the exponential decay

                                           d⟨p⟩    ⟨p⟩
                                                =−     .
                                            dt      τ
  On the other hand, if there is an applied field, a force term appears on the right,

                                        d⟨p⟩    ⟨p⟩
                                             =−     + qE
                                         dt      τ
  since F = dp/dt for each individual electron. In the steady state,

                                            ⟨p⟩ = qEτ.

  The current density is
                                                nq⟨p⟩   nq 2 τ
                                  J = nq⟨v⟩ =         =        E.
                                                 m       m
  Thus, the resistivity in the Drude model is
                                                   m
                                             ρ=          .
                                                  nq 2 τ
  We can also compute the typical drift velocity,
                                              qEτ    E
                                         v=       =     .
                                               m    nqρ
  For realistic values, v is a literal snail’s pace; the electrons always move very slowly. But a
  current can get started in a circuit much faster, because when a battery is attached, each
  moving electron pushes on the next one along the wire. This wave of motion travels much
  faster than the electrons themselves.

  Remark: The Drude–Sommerfeld Model
  Above we tacitly assumed there was a given probability of collision per unit time, but that’s
  not right: when a particle flies through a medium, there is instead a given probability of
  collision per unit length it travels. These are equivalent for electrons moving at constant
  speed, but intuitively, we would expect electrons to have to accelerate starting from rest after
  each collision, in which case the two differ. To estimate this quickly, note that if the typical
                        ℓ, the kinetic energy picked up between collisions is mv 2 /2
  collision distance is √                                                          √ ∼ qEℓ, giving
  typical speed v ∝ E. The analogue of Ohm’s law would then be I ∝ V , completely
  contrary to observation!

  The resolution is that electrons in solids really do effectively move with almost constant speed,
  even after collisions. This is a quantum mechanical effect, as explained in X1. The Pauli
  exclusion principle implies the electrons in the conductor have to occupy different quantum
  states, and the high density of electrons requires most of them to always have extremely high
  speeds, on the order of 1% of the speed of light! The drift velocity is merely the tiny amount
  by which their velocities are shifted on average.



                                                  13
    Kevin Zhou                                                                   Physics Olympiad Handouts
