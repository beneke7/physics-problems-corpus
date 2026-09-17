---
id: kevin-zhou-notes-phy-ex037
source: kevin-zhou-notes
native_id: "phy Example 037"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex037
topic: [statistical-mechanics]
subtopic: [thermodynamics, ideal-gas]
math_tools: [partial-derivatives, integration]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3421-3438"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The entropy for one mole of an ideal gas. We have
                                                            
                         ∂S            ∂S           CV        ∂p
                 dS =          dT +            dV =    dT +        dV.
                         ∂T V          ∂V T          T        ∂T V

Using the ideal gas law, (∂p/∂T )|V = R/V , and integrating gives
                          Z           Z
                             CV         R
                      S=        dT +       dV = CV log T + R log V + const.
                             T          V
where we can do the integration easily since the coefficient of dT doesn’t depend on V , and vice versa.
The singular behavior for T → 0 is incompatible with the Third Law, as is the result CP = CV + R,
as all heat capacities must vanish for T → 0. These tensions are because Third Law is quantum
mechanical, and they indicate the classical model of the ideal gas must break down. A more careful
derivation starting from statistical mechanics, given below, can account for the dependence on N
and the unknown constant.

