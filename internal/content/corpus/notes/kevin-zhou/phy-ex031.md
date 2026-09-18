---
id: kevin-zhou-notes-phy-ex031
source: kevin-zhou-notes
native_id: "phy Example 031"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex031
topic: [statistical-mechanics]
subtopic: [canonical-ensemble, energy-fluctuations]
math_tools: [cumulants, partition-functions]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3119-3153"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. For noninteracting systems, the partition functions multiply. Another useful property
is that the partition function is similar to the cumulant generating function for the energy,
                                                         X e−(β−γ)En
                               f (γ) = log⟨eγE ⟩ = log                    .
                                                          n
                                                                   Z

The cumulants are the derivatives of f evaluated at γ = 0. Only the numerator contributes to this
term, and since it contains only (β − γ) we can differentiate with respect to β instead,
                                                          ∂ n (log Z)
                                  f (n) (γ)|γ=0 = (−1)n               .
                                                              ∂β n


As an explicit example,
                                         ∂ log Z               ∂ 2 log Z
                               ⟨E⟩ = −           ,   var E =             .
                                           ∂β                     ∂β 2
However, since var E = −∂⟨E⟩/∂β, we have

                                          var E = kB T 2 CV

which is a relative of the fluctuation-dissipation theorem. Moreover, all cumulants of the energy
can be found by differentiating ⟨E⟩, so they are all extensive. Then in the thermodynamic limit
the system has a definite energy and the canonical and microcanonical ensembles coincide. (This
doesn’t hold when we’re applying the canonical ensemble to a small system, like a single atom.)
   To see this another way, note that
                                             X
                                        Z=       Ω(Ei )e−βEi
                                              Ei

where we are now summing over energies instead of states. But in the thermodynamic limit, the
two factors in the sum are rapidly rising and falling, so they are dominated by the maximum term,
which has fixed energy.
