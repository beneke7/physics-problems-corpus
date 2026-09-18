---
id: kevin-zhou-notes-phy-ex068
source: kevin-zhou-notes
native_id: "phy Example 068"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex068
topic: [quantum-physics, electromagnetism]
subtopic: [aharonov-bohm-effect, gauge-potential]
math_tools: [differential-equations, geometry-trigonometry]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7572-7627"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. A particle around a flux tube. Consider a particle constrained to lie on a ring of radius
r, through which a magnetic flux Φ passes. Then we can take
                                                     Φ
                                             Aϕ =
                                                    2πr
and the Hamiltonian is
                               (pϕ − qAϕ )2                     qΦ 2

                                               1
                            H=              =           −iℏ∂ϕ −      .
                                   2m         2mr2              2π
The energy eigenstates are still exponentials, of the form
                                                  1
                                           ψ=√        einϕ
                                                  2πr
where n ∈ Z since the wavefunction is single-valued. Plugging this in, the energy is

                                            ℏ2         Φ 2

                                     E=           n−
                                          2mr2        Φ0


where Φ0 = 2πℏ/q is the quantum of flux. Since generally Φ/Φ0 is not an integer, the presence
of the magnetic field affects the spectrum even though the magnetic field is zero everywhere the
wavefunction is nonzero!
   We can also look at this phenomenon in a slightly different way. Suppose we were to try to
gauge away the vector potential. Since
                                                           Φϕ
                                         A = ∇α,      α=
                                                           2π
we might try a gauge transformation with gauge scalar α. Then the wavefunction transforms as

                                        iqα              Φ
                              ψ → exp         ψ = exp      iϕ ψ.
                                         ℏ              Φ0

This is invalid unless Φ is a multiple of Φ0 , as it yields a non-single-valued wavefunction. This
reflects the fact that the spectrum really changes when Φ/Φ0 is not an integer; it is a physical
effect that can’t be gauged away. The constraint that ψ is single-valued is perfectly physical; it’s
just what we used to get the energy eigenstates when A is zero. The reason it restricts the gauge
transformations allowed is because the wavefunction wraps around the flux tube. This is a first
look at how topology appears in quantum mechanics. The general fact that an integer Φ/Φ0 has
no effect on the spectrum of a system is called the Byers–Yang theorem.

Note. Sometimes, these two arguments are mixed up, leading to claims that the flux through any
loop must be quantized in multiples of Φ0 . This is simply incorrect, but it is true for superconducting
loops if ψ is interpreted as the macroscopic wavefunction. This is because the energy of the
superconducting loop is minimized when Φ/Φ0 is an integer. (add more detail)

Note. It is also useful to think about how the energy levels move, i.e. the “spectral flow”. For zero
field, the |n = 0⟩ state sits at the bottom, while the states ±|n⟩ are degenerate. As the field is
increased, the energy levels shift around so that once the flux is Φ0 , the |n⟩ state has moved to the
energy level of the original |n + 1⟩ state.

