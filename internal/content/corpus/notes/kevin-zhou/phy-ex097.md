---
id: kevin-zhou-notes-phy-ex097
source: kevin-zhou-notes
native_id: "phy Example 097"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex097
topic: [quantum-mechanics]
subtopic: [cavity-qed]
math_tools: [perturbation-theory, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "14023-14064"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The AC Stark shift in a cavity QED system. Now we suppose that the atom is coupled
to an electromagnetic mode of a cavity. In other words, we now treat the electromagnetic field as
quantum as well. The Hamiltonian in the rotating wave approximation is
                                               1
                                  H = ωc a† a + ωa σz + g(a† σ− + aσ+ )
                                               2
261 11. Time Dependent Perturbation Theory


where g is the coupling strength. Note that under this convention, the zeroth and first states of the
atom are the excited and ground states, respectively, so that σz can enter with a positive sign. The
atom raising and lowering operators are σ+ = |e⟩⟨g| and σ− = |g⟩⟨e|.
   Letting the detuning be ∆ = ωc − ωa , we assume g, ∆ ≪ ωc , ωa . In the interaction picture,
                                                                    g †
              HI (t) = g(a† σ− ei∆t + aσ+ e−i∆t ),     U1 (t) = −     (a σ− ei∆t − aσ+ e−i∆t ).
                                                                    ∆
We choose to integrate over a time τ ≫ ∆−1 , which means ⟨HI (t)⟩ = 0. Thus,

                                       1                    g2
                             Heff (t) = ⟨[HI (t), U1 (t)]⟩ = [a† σ− , aσ+ ].
                                       2                    ∆
Using [a, a† ] = 1 and [σ+ , σ− ] = σz , the commutator simplifies as

                                  [a† σ− , aσ+ ] = −σz (a† a + 1/2) − 1/2.

Dropping the constant, we find

                                                     g2
                                      Heff (t) = −      σz (a† a + 1/2).
                                                     ∆
The new feature is the addition of the 1/2, which means the AC Stark shift occurs even in vacuum,
as a result of coupling to “vacuum fluctuations”. Of course, this system can also be treated exactly
without too much trouble, as is done in the notes on Optics. Our result corresponds to the O(g 2 )
part of the exact result.
                                                √
   Note that this computation only works if g n ≪ ∆ where n is the typical number of photons
in the mode, which is the analogue of demanding Ω ≪ ∆ in our previous calculation. If this isn’t
true, then there’s no choice of τ for which setting ⟨HI (t)⟩ = 0 but keeping the order g 2 n/∆ term
in Heff (t) are simultaneously good approximations. If τ is short, the former contribution ends up
more important than the latter, and if τ is long, the dynamics due to the latter contribution get
averaged out.

