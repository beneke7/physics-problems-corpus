---
id: "kevin-zhou-e4-p022"
source: "kevin-zhou"
native_id: "KZ-E4-P022"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e4-p022"
topic: [electromagnetism, relativity]
subtopic: [ampere-law, magnetic-pinch-effect, lorentz-contraction]
math_tools: [vector-calculus, algebra]
format: "open-ended"
kind: "problem"
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

Example 7: Griffiths 5.40

        Since parallel currents attract, the currents within a single wire should contract. To estimate
        this, consider a long wire of radius r. Suppose the atomic nuclei are fixed and have uniform
        density, while the electrons move along the wire with speed v. Furthermore, assume that the
        electrons contract, filling a cylinder of radius r′ < r with uniform negative charge density,
        and that the wire is overall neutral. Find r′ .

        Solution
       The contraction of the electrons produces an overall inward electric field, and hence an
       outward electric force on each electron, which balances the radially inward magnetic force.
       Specifically, equilibrium occurs when E = vB.

       Let the charge densities of the nuclei and electrons be ρ+ and ρ− . The magnetic field at
       radius s ≤ r′ is found by Ampere’s law, which gives
                                                                   µ0 ρ− vs
                                   (2πs)B = µ0 (ρ− v)(πs2 ), B =            .
                                                                       2
       The electric field at this radius is found by Gauss’s law, which gives
                                         1                             1
                              (2πs)E =      (ρ+ + ρ− )πs2 ,      E=       (ρ+ + ρ− )s.
                                         ϵ0                           2ϵ0
        Note that both E and B are proportional to s. Then E = vB can be satisfied at all s simul-
        taneously, which confirms that our assumption that ρ+ and ρ− were uniform is self-consistent.

        Plugging these results into E = vB yields
                                                                   v2
                                     ρ+ + ρ− = ρ− (ϵ0 µ0 v 2 ) = ρ− 2 .
                                                                   c
       This can be written in terms of the Lorentz factor of special relativity,
                                                                1
                                       ρ− = −γ 2 ρ+ ,     γ=p            .
                                                             1 − v 2 /c2
        Since the wire is overall neutral, ρ− r′2 + ρ+ r2 = 0, so
                                                          r
                                                     r′ = .
                                                          γ


                                                         14


    Kevin Zhou                                                               Physics Olympiad Handouts



       For nonrelativistic motion, the contraction is extremely small. (However, in plasmas, where
       the positive charges are also free to move, this so-called pinch effect can be very significant.)
