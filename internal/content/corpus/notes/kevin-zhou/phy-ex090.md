---
id: kevin-zhou-notes-phy-ex090
source: kevin-zhou-notes
native_id: "phy Example 090"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex090
topic: [quantum-mechanics]
subtopic: [atomic-structure]
math_tools: [angular-momentum]
format: explanation
kind: reference_example
has_solution: false
has_figure: true
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13171-13200"
archive_layer: reference_notes
source_role: explanatory_example
---
Example.    Carbon. We start with the electron configuration 1s2 2s2 2p2 , which has degeneracy
 6
  
 2 = 15. Now, since there are only two relevant electrons, we can have L = 0, 1, 2 and S = 0, 1,
with each L value represented once. Overall antisymmetry determines the S values, giving 1 S, 3 P ,
and 1 D. These have dimensions 1, 9, and 5, which add up to 15 as expected.
    Some of the low-lying atomic energy levels for carbon are shown below, where the energy is
measured in eV.
245 10. Atomic Physics




The electron configurations shown here are

         a = 2p2 ,   b = 2p3p,   c = 2p3d,   d = 2p4p,     e = 2s2p3 ,   f = 2p3s,   g = 2p4s

where 1s2 2s2 is implicit except in e.
   The lowest energy multiplet can be determined heuristically using the aufbau principle and Hund’s
rules, which are covered in the notes on Solid State Physics. For example, consistent with the aufbau
principle, the a = 2s2 2p2 configurations are all below the e = 2s2p3 configuration; evidently the 2s
state is lower in energy because it can penetrate the shielding. Within the a = 2s2 2p2 configuration,
we have three multiplets, and Hund’s rules account for their energy ordering.
   The first two of Hund’s rules account for the details of the exchange force, neglected in H0 . For
carbon, Hund’s first rule shows that 3 P a has the lowest energy. Hund’s third rule accounts for the
spin-orbit interaction, which is subdominant in this case; it can be used to determine the lowest
energy state within the 3 P a multiplet. Concretely this would be done by switching to the coupled
basis, just as for hydrogen, at which point one finds the ground state is 3 P0a .
   For atoms of higher Z, the splittings associated with Hund’s rules become larger; when they are
comparable to the splittings in H0 itself, exceptions to the aufbau principle occur.
