---
id: kevin-zhou-notes-phy-ex074
source: kevin-zhou-notes
native_id: "phy Example 074"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex074
topic: [quantum-physics, thermodynamics-and-statistical]
subtopic: [path-integrals, statistical-mechanics]
math_tools: [calculus, gaussian-integrals]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8849-8883"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Path integrals in quantum statistical mechanics. Since the density matrix is ρ = e−βH /Z,
we would like to compute the matrix elements of e−βH . This is formally identical to what we’ve
done before if we set t = −iℏβ. Substituting this in, we have
                                                                                                   
                             N/2 Z                            N −1                  2          
                           m                                  η X      m(x j+1 − x j )
  ⟨x|e−βH |x0 ⟩ = lim                 dx1 . . . dxN −1 exp −                            + V (xj ) 
                  N →∞ 2πℏη                                   ℏ             2η 2
                                                                      j=0
164 6. Path Integrals


where we have defined η = ℏβ/N , and ϵ = −iη. The relative sign between the kinetic and potential
terms has changed, so we have an integral for the Hamiltonian instead, and the integral is now
damped rather than oscillatory. Taking the continuum limit, the partition function is

                                                        1 βℏ
                                 Z      Z                Z         
                          Z = C dx0       Dx(u) exp −          H du
                                                        ℏ 0

where the path integral is taken over paths with x(0) = x(βℏ) = x0 . As a simple example, suppose
that the temperature is high, so βℏ is small. Then the particle can’t move too far from x(0) in the
short ‘time’ u = βℏ, so we can approximate the potential as constant,
                                                                 ! r
                                             1 βℏ m dx 2
            Z                Z                 Z                             Z
                   −βV (x0 )                                              m
     Z ≈ C dx0 e               Dx(u) exp −                     du =               dx0 e−βV (x0 )
                                             ℏ 0 2 du                   2πβℏ2

where the last step used the analytically continued free particle propagator. This is the result from
classical statistical mechanics, where Z is simply an integral of e−βH over phase space, but we can
now find corrections order by order in βℏ.

