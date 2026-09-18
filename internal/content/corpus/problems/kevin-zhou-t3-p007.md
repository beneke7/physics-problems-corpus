---
id: "kevin-zhou-t3-p007"
source: "kevin-zhou"
native_id: "KZ-T3-P007"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-t3-p007"
topic: [thermodynamics]
subtopic: [phase-transitions, clausius-clapeyron-equation, thermodynamic-potentials]
math_tools: [partial-derivatives, calculus]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T3.txt"
source_url: "sources/kevin_zhou/site/handouts/T3.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

# KZ-T3-P007

[3] Problem 7. [A] In this exercise you’ll find a quicker, more advanced derivation of the Clausius–
    Clapeyron equation.

     (a) The Gibbs free energy is defined as G = U + P V − T S. Show that for reversible processes,

                                                dG = V dP − S dT.

         Two phases can only be in thermodynamic equilibrium if they have the same Gibbs free energy
         per molecule. Otherwise, turning one phase to the other would reduce the Gibbs free energy,
         which turns out to be equivalent to increasing the entropy of the universe. (For more details,
         see section 16.5 of Blundell and Blundell.)

     (b) Suppose that the Gibbs free energies per molecule G/N for two phases are equal at temperature
         T0 and pressure P0 . Derive the Clausius–Clapeyron equation by demanding this is also true
         at temperature T0 + dT and P0 + dP .


                                                      6


    Kevin Zhou                                                            Physics Olympiad Handouts


       Remark: Thermodynamic Potentials

       You might sometimes see the Clausius–Clapeyron equation written in terms of a difference in
       enthalpy ∆H rather than a latent heat. The enthalpy is the state function H = U + P V , so

                                            dH = V dP + d̄Q.

       This is useful because many lab experiments happen at constant pressure, dP = 0, leaving
       dH = d̄Q. That is, only heat changes the enthalpy, so the latent heat of a phase transition
       must be the difference in enthalpies of the two phases, L = ∆H. That in turn is useful
       because enthalpy is a state function, so given a new phase transition you can calculate L by
       just looking up the enthalpy values for each of the phases in a table.

       We’ve now covered all the classic “thermodynamic potentials”. As we just saw, the
       enthalpy H is useful for bookkeeping heat. As we saw in T2, the Helmholtz free en-
       ergy F is minimized in thermodynamic equilibrium, given constant temperature and
       volume. (This is the relative of the statement that the system’s internal energy U is
       minimized in equilibrium, given constant entropy and volume, which is just the usual
       statement of mechanical equilibrium.) And as we saw in the problem above, the Gibbs free en-
       ergy G is minimized in thermodynamic equilibrium, given constant temperature and pressure.

       More generally, what’s going on is that the number of possibly useful potentials doubles
       every time we add another pair of “thermodynamic conjugate variables”. Before learning
       about thermodynamics, we just had U . When we learned about temperature and entropy,
       we additionally cared about F . And now upon accounting for pressure and volume, we have
       H and G. If we had another pair, such as magnetization and external magnetic field, we
       could define 4 more potentials, which would each be useful in different situations.
