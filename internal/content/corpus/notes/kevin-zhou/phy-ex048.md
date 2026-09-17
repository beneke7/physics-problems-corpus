---
id: kevin-zhou-notes-phy-ex048
source: kevin-zhou-notes
native_id: "phy Example 048"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex048
topic: [continuum-mechanics]
subtopic: [fluid-statics, atmosphere]
math_tools: [hydrostatics, thermodynamics]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "5161-5177"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The homentropic atmosphere. In the lower part of the atmosphere, called the tro-
posphere, the air is typically well-mixed by adiabatic convection, and thus obeys the polytropic
equation of state p ∝ ργ . The pressure potential is
                                                           γ
                                       w = cp T,   cp =       R.
                                                          γ−1
Therefore, we have the constant
                                            Φ∗ = gz + cp T
which implies the temperature varies linearly with height. This is a good model for z ≲ 10 km
but breaks down for higher z, where we must account for additional effects such as solar heating.
The “Standard Atmosphere” model takes T (z) to be piecewise linear, with different gradients in the
mesosphere, stratosphere, and troposphere. The model then infers p(z) from hydrostatic equilibrium
and the ideal gas law,
                                                 g z dz ′
                                                  Z          
                                 p(z) = p0 exp −                .
                                                 R 0 T (z ′ )
