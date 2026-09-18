---
id: kevin-zhou-notes-phy-ex033
source: kevin-zhou-notes
native_id: "phy Example 033"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex033
topic: [statistical-mechanics]
subtopic: [thermodynamics, extensivity]
math_tools: [euler-theorem, legendre-transforms]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3237-3346"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. In most cases, the energy and entropy are extensive. This implies that

                                    E(λS, λV, λN ) = λE(S, V, N ).

Differentiating at λ = 1, we find
                                         E = T S − pV + µN.


Taking the total differential, we have the Gibbs–Duhem equation,
                                       S dT − V dp + N dµ = 0.
We also see that the grand canonical potential is Φ = −pV , which provides an easy way to calculate
 the pressure. Note that if we performed one further Legendre transformation from V to p, we would
 get a potential that is identically zero! This makes sense, as with no extensive variables left, our
“system” would have no characteristics independent of the bath. As such, the potential Φ + pV is
 not useful. Another useful insight is that µ = G/N , so the chemical potential measures the Gibbs
 free energy per molecule.

3.2     Thermodynamics
At this point, we start over with thermodynamics. For simplicity, we’ll consider gases whose only
thermodynamic variables are pressure, volume, and temperature.
  • The point of thermodynamics is to describe a system with many degrees of freedom in terms
    of only its macroscopically observable quantities, which we call the thermodynamic variables.
    Historically this approach was taken by necessity, and it continues to be useful today because
    of its simplicity. It gives only partial information, but this limited information is often exactly
    what we want to know in practice anyway.
  • Thermodynamics is a kind of predecessor to the modern idea of effective field theory and the
    renormalization group. As described in the notes on Statistical Field Theory, it can be derived
    from microscopic physics by applying statistical mechanics and successive coarse grainings until
    only macroscopic information remains. But thermodynamics also stands on its own; to a large
    extent, its validity is independent of what the microscopic physics is.
  • The Zeroth Law states that thermal equilibrium between systems exists, and is transitive.
    This means that we can assign systems a temperature T (p, V ) so that systems with the same
    temperature are in equilibrium. The equation T = T (p, V ) is called an equation of state. At
    this stage, T can be replaced by f (T ) for any monotonic f .
  • The First Law tells us that energy is a state function. Work is the subset of energy transfers
    due to macroscopically observable changes in macroscopic quantities, such as volume. All other
    energy transfer is called heat, so
                                           dE = d̄Q + d̄W
      where the d̄ indicates an inexact differential. (Here ‘exact’ is used in the same sense as in the
      theory of differential forms, as all terms above can be regarded as one-forms on the space of
      thermodynamic variables.)
  • The Second Law tells us that it’s impossible to transfer heat from a colder body to a warmer
    body without any other effects.
  • A Carnot cycle is a process involving an ideal gas that extracts heat QH from a hot reservoir
    and performs work W and dumps heat QL to a cold reservoir. We define the efficiency
                                                      W
                                                 η=      .
                                                      QH
      By construction, the Carnot cycle is reversible. Then by the Second Law, no cycle can have
      greater efficiency.


 • By composing two Carnot cycles, we have the constraint

                              (1 − η(T1 , T3 )) = (1 − η(T1 , T2 ))(1 − η(T2 , T3 ))

    where T is the temperature. Therefore

                                                               f (T2 )
                                           1 − η(T1 , T2 ) =           .
                                                               f (T1 )

    For simplicity, we make the choice f (T ) = T , thereby fixing the definition of temperature. (In
    statistical mechanics, this choice is forced by the definition S = kB log Ω.)

 • Under this choice, the Carnot cycle satisfies QH /TH + QC /TC = 0. Since any reversible process
   can be decomposed into infinitesimal Carnot cycles,
                                               I
                                                  d̄Q
                                                      =0
                                                   T
                                                R
   for any reversible cycle. This implies that d̄Q/T is independent of path, as long as we only
   use reversible paths, so we can define a state function
                                                        Z A
                                                               d̄Q
                                               S(A) =              .
                                                          0     T

 • Again using the Second Law, we have the Clausius inequality
                                          I
                                             d̄Q
                                                 ≤0
                                              T
    for any cycle. In particular, suppose we have an irreversible adiabatic path from A to B and
    a reversible path back. Then the Clausius inequality says S(B) ≥ S(A), which is the usual
    statement of the Second Law.

 • The Third Law tells us that S/N goes to zero as T goes to zero; this means that heat capacities
   must go to zero. Another equivalent statement is that it takes infinitely many steps to get to
   T = 0 via isothermal and adiabatic processes.

 • In statistical mechanics, the Third Law simply says that the log-degeneracy of the ground state
   can’t be extensive. For example, in a system of N spins in zero field, one might think that the
   ground state has degeneracy 2N . But in reality, arbitrarily weak interactions always break the
   degeneracy.

Note. Reversible and irreversible processes. For reversible processes only, we have

                                   d̄Qrev = T dS,      d̄Wrev = −p dV.

For example, in the process of free expansion, the volume and entropy change, even though there is
no heat or work. Now, for a reversible process the First Law gives dE = T dS − p dV . Since both
sides are state functions, this must be true for all processes, though the individual terms will no
longer describe heat or work! We’ll ignore this subtlety below and think of all changes as reversible.


