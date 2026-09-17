---
id: kevin-zhou-notes-phy-ex075
source: kevin-zhou-notes
native_id: "phy Example 075"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex075
topic: [quantum-physics]
subtopic: [path-integrals, harmonic-oscillator]
math_tools: [calculus, gaussian-integrals]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8884-8922"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The harmonic oscillator with frequency ω. This is somewhat delicate since some choices
of (x0 , x, t) give infinitely many branches, or no branches at all. However, assuming we have chosen
a set with exactly one branch, we can show
                                             mω
                         S(x, x0 , t) =            ((x2 + x2 ) cos(ωt) − 2xx0 ).
                                          2 sin(ωt) 0

To find µ, note that we may write the second variation as

                                               m d2
                                Z                          
                                                           2
                          δS = dτ δx(τ ) −              +ω      δx(τ )
                                               2 dτ 2

by integration by parts; hence we just need the number of negative eigenvalues of the operator
above, where the boundary conditions are δx(0) = δx(t) = 0. The eigenfunctions are of the form
sin(nπτ /t) for positive integer n with eigenvalue (nπ/t)2 − ω 2 . Therefore the number of negative
eigenvalues depends on the value of t, but for sufficiently small t there are none.
   Applying the Van Vleck formula gives the exact propagator,
                                    r
                                          mω
                     K(x, x0 , t) =                exp(iS(x, x0 , t)/ℏ), t < π/ω.
                                      2πiℏ sin(ωt)

Setting t = −iℏβ and simplifying gives the partition function

                                                    e−βℏω/2
                                             Z=
                                                   1 − e−βℏω
which, of course, matches the results from standard statistical mechanics. But path integrals really
get interesting when the problem can’t be solved exactly, such as when the oscillator’s potential
has a small quartic perturbation. In that case the Euclidean action can be expanded perturbatively
in that additional term, which yields a diagrammatic expansion for the full partition function in
terms of correlation functions for the unperturbed oscillator. For further discussion, see the notes
on Quantum Field Theory.
165 6. Path Integrals


