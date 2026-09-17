---
id: kevin-zhou-notes-phy-ex083
source: kevin-zhou-notes
native_id: "phy Example 083"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex083
topic: [quantum-mechanics]
subtopic: [spin]
math_tools: [linear-algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "10054-10110"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Combining spin and spatial degrees of freedom for the electron. We must work in the
tensor product space with basis |r, m⟩. Wavefunctions are of the form

                                              ψ(r, m) = ⟨r, m|ψ⟩

which is often written in the notation
                                                             
                                                       ψs (r)
                                                     ψs−1 (r)
                                              ψ(r) = 
                                                             
                                                         ..   
                                                         .   
                                                            ψ−s (r)

which has a separate wavefunction for each spin component, or equivalently, a spinor for every
position in space. The inner product is
                                        XZ
                               ⟨ϕ|ψ⟩ =      d3 r ϕ∗ (r, m)ψ(r, m).
                                                m

In the case of the electron, the Hamiltonian is the sum of the spatial and spin Hamiltonians we
have considered before,
                                     1                                          g
                            H=         (p − qA)2 + qϕ − µ · B,               µ = µσ.
                                    2m                                          2
187 7. Angular Momentum


This is called the Pauli Hamiltonian and the resulting evolution equation is the Pauli equation. In
practice, it looks like two separate Schrodinger equations, for the two components of ψ, which are
coupled by the µ · B term.
   The Pauli equation arises from expanding the Dirac equation to order (v/c)2 . The Dirac
equation also fixes g = 2. Further terms can be systematically found using the Foldy–Wouthuysen
transformation, as described here. At order (v/c)4 , this recovers the fine structure corrections we
will consider below.

Note. The probability current in this case can be defined as we saw earlier,
                                                         1
                                 J = Re ψ † vψ,    v=      (−iℏ∇ − qA) .
                                                         m
Mathematically, J is not unique, as it remains conserved if we add any divergence-free vector field;
in particular, we can add any curl. But the physically interesting question is which possible J
is relevant when we perform a measurement. Performing a measurement of abstract “probability
current” is meaningless, in the sense that there do not exist detectors that couple to it. However,
in the case of a spinless charged particle, we can measure the electric current, and experiments
indicate it is Jc = eJ where J is defined as above; this gives J preference above other options.
    However, when the particle has spin, the situation is different. By a classical analogy, we would
expect to regard M = ψ † µψ as a magnetization. But a magnetization gives rise to a bound current
Jb = ∇ × M, so we expect to measure the electric current

                                         Jc = eJ + ∇ × (ψ † µψ).

This can be derived from quantum field theory, and matches what is seen experimentally. For
instance, without the second term, magnetic fields could not arise from spin alignment, though they
certainly do in ferromagnets.

