---
id: kevin-zhou-notes-phy-ex016
source: kevin-zhou-notes
native_id: "phy Example 016"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex016
topic: [classical mechanics]
subtopic: [action-angle variables, adiabatic invariants]
math_tools: [calculus, Hamiltonian mechanics]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1114-1207"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. Action-angle variables for a general one-dimensional system. Let

                                                  p2
                                            H=       + V (x).
                                                  2m
The value of H is the total energy E, so the action variable I must satisfy

                                             θ̇ = ω = dE/dI

where the period of the motion is 2π/ω. Now, by conservation of energy
                                          r
                                            m     dq
                                     dt =     p           .
                                            2 E − V (q)
23 1. Classical Mechanics


Integrating over a single orbit, we have
      r I                     I √                           I p                      I
 2π      m          dq                 d p                d                        d
    =         p             =      2m     E − V (q) dq =       2m(E − V (q)) dq =      p dq.
 ω        2      E − V (q)            dE                 dE                       dE

Note that by pulling the d/dE out of the integral, we neglected the change in phase space area due
to the change in the endpoints of the path, because this contribution is second order in dE.
   Therefore, we have the nice results
                                        I                  I
                                      1                 d
                                I=         p dq, T =          p dq.
                                     2π                dE
We can thus calculate T without finding a closed-form expression for θ, which can be convenient.
For completeness, we can also determine θ, by
                                              Z            Z
                                       dE d             d
                              θ = ωt =           p dq =      p dq.
                                       dI dE            dI
Here the value of θ determines the upper bound on the integral, and the derivative acts on the
integrand.
We now turn to adiabatic invariants.

 • Consider a situation where the Hamiltonian depends on a parameter λ(t) that changes slowly.
   Then energy is not conserved; taking H(q(t), p(t), λ(t)) = E(t) and differentiating, we have
                                                      ∂H
                                               Ė =      λ̇.
                                                      ∂λ
    However, certain “adiabatic invariants” are approximately conserved.

 • We claim that in the case
                                                p2
                                         H=        + V (q; λ(t))
                                               2m
    the adiabatic invariant is simply the action variable I. Since I is always evaluated on an orbit
    of the Hamiltonian at a fixed time, it is only a function of E and λ, so
                                             ∂I        ∂I
                                        I˙ =      Ė +      λ̇.
                                             ∂E λ      ∂λ E
    These two contributions are due to the nonconservation of energy, and from the change in the
    shape of the orbits at fixed energy, respectively.

 • When λ is constant, E = E(I) as before, so
                                        ∂I    1     T (λ)
                                            =     =       .
                                        ∂E λ ω(λ)    2π
    As for the second term, we have
                                        I                      I
                            ∂I      1       ∂p         1           ∂p ∂H
                                 =               dq =                          dt′
                            ∂λ E   2π       ∂λ E      2π           ∂λ E ∂p λ,q

    where we applied Hamilton’s equations, and neglected a higher-order term from the change in
    the endpoints.
24 1. Classical Mechanics


  • To simplify the integrand, take H(q, p(q, λ, E), λ) = E and differentiate with respect to λ at
    fixed E. Then
                            ∂H      ∂q      ∂H       ∂p     ∂H
                                         +                +          = 0.
                             ∂q λ,p ∂λ E    ∂p λ,q ∂λ E     ∂λ q,p,E
    By construction, the first term is zero. Then we conclude that
                                                    I
                                       ∂I         1    ∂H
                                             =−             dt′ .
                                       ∂λ E      2π    ∂λ E
    Finally, combining this with our first result, we conclude
                                                     Z             
                                             ∂H          ∂H       ′    λ̇
                                I˙ = T (λ)          −          dt         .
                                             ∂λ E        ∂λ E         2π

    Taking the time average of I˙ and noting that the change in λ is slow compared to the period
                                                        ˙ = 0 and I is an adiabatic invariant.
    of the motion, the two quantities above cancel, so ⟨I⟩

