---
id: kevin-zhou-notes-phy-ex091
source: kevin-zhou-notes
native_id: "phy Example 091"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex091
topic: [quantum-mechanics]
subtopic: [atomic-structure]
math_tools: [angular-momentum]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13201-13223"
archive_layer: reference_notes
source_role: explanatory_example
---
Example.      Nitrogen. We start with the electron configuration 1s2 2s2 2p3 , which has degeneracy
 6

 3 = 20. This requires a more systematic approach. The general approach is like that of Clebsch–
Gordan decomposition. We sort the states by the (ML , MS ) values. A highest pair (i.e. a state
annihilated by L+ and S+ ) must be the doubly stretched/highest weight state of a 2S+1 L multiplet.
We then cross out the other (ML , MS ) values in this multiplet and repeat the process. Furthermore,
since we’re focusing on highest weight states, we need only consider states with ML , MS ≥ 0.
    In this case, the relevant (ML , MS ) values are

                      1 × (2, 1/2),   2 × (1, 1/2),   1 × (0, 3/2),   3 × (0, 1/2)


where the prefactor indicates the multiplicity. The first state is hence the highest weight state of a
2 D multiplet. Crossing this multiplet out leaves


                              1 × (1, 1/2),   1 × (0, 3/2),   2 × (0, 1/2).

The first state left over is the highest weight state of a 2 P multiplet. Finally we are left with a 4 S
multiplet. The dimensions are 10 + 6 + 4, which add up to 20 as expected.

