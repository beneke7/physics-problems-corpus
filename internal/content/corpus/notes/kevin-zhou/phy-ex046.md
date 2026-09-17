---
id: kevin-zhou-notes-phy-ex046
source: kevin-zhou-notes
native_id: "phy Example 046"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex046
topic: [statistical-mechanics]
subtopic: [paramagnetism, fermions]
math_tools: [fermi-dirac-statistics, sommerfeld-expansion]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "4515-4583"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Pauli paramagnetism. Paramagnetism results from dipoles aligning with an external
field, and Pauli paramagnetism is the alignment of spin. In a field B, electrons have energy
                                                                      |e|ℏ
                                 E = µB Bs,    s = ±1,         µB =
                                                                      2mc
where µB is the Bohr magneton. Then the occupancy numbers are
                         N↑   1                        N↓   1
                            = 3 f3/2 (zeβµB B ),          = 3 f3/2 (ze−βµB B ).
                         V   λ                         V   λ
The resulting magnetization is
                                         M = µB (N↑ − N↓ ).
85 3. Statistical Mechanics


In the high-temperature limit, z is small and f3/2 (z) ≈ z, so

                                  2µB V z
                          M=              sinh(βµB B) = µB N tanh(βµB B)
                                    λ3
where N = N↑ + N↓ . This is simply the classical result, as given by Maxwell–Boltzmann statistics.
One important feature is that the susceptibility χ = ∂M/∂B goes as 1/T , i.e. Curie’s law.
   In the low-temperature limit, we take the leading term in the Sommerfeld expansion, then expand
to first order in B, for
                                          M = µ2B g(EF )B.
Then at low temperatures, the susceptibility no longer obeys Curie’s law, but instead saturates to
a constant. To understand this result, note that only g(EF )∆E = g(EF )µB B electrons are close
enough to the Fermi surface to participate, and they each contribute magnetization µB .

Note. A textbook explanation for diamagnetism is that charged particles begin moving in circles
when a magnetic field is turned on, creating an opposing field. However, this explanation isn’t
actually right because of the Bohr–van Leeuwen theorem: the canonical partition function Z does
not depend on the external field, as can be seen by shifting p − eA to p in the integral, so there is
no magnetism in classical mechanics at thermal equilibrium!
    This conclusion can also be seen more explicitly. The particles must be in a finite box, say
with reflecting walls. Then the particles whose orbits hit the walls and bounce off effectively orbit
backwards. Since the magnetic moment is proportional to the area, this cancels the magnetic
moment of the bulk exactly. Working this out is significantly trickier than just considering Z,
because Z itself is less sensitive to boundary conditions, but it can be done.
    In quantum mechanics, the Bohr–van Leeuwen theorem does not hold. The partition function
isn’t an integral, so the first argument fails; we will instead find nontrivial dependence of Z on the
field. In terms of the energy levels, electron states near the boundary are much higher energy due
to the repulsive potential, so they are less relevant, though this is difficult to show.

Note. The Euler summation formula is
                           ∞                    Z ∞
                           X                                         1 ′
                                 h(n + 1/2) =           h(x) dx +      h (0) + . . . .
                                                0                   24
                           n=0

The idea behind the Euler summation formula is that one can approximate a smooth function by a
low-order polynomial (or a Taylor series with decreasing coefficients). To see the origin of the first
term, consider the formula for a unit interval,
                                              Z 1
                                   h(1/2) ≈       h(x) dx + . . . .
                                                    0

There is no correction term if h(x) is a first-order polynomial. The correction due to second-degree
terms in h(x) can be found by subtracting h′ (x) at the endpoints,
                                      Z 1
                           h(1/2) ≈       h(x) dx + c(h′ (0) − h′ (1)) + . . . .
                                        0

To find the value of c, consider h(x) = (x − 1/2)2 , which fixes c = 1/24. Telescoping the sum
gives the h′ (0)/24 term in the formula above. Generally, all higher correction terms will have odd
derivatives, because terms like (x − 1/2)2n+1 don’t contribute to the area.
86 3. Statistical Mechanics


