---
id: kalda-circuits-idea16
source: kalda
handout: circuits
section: "Circuits with resistors, batteries, ammeters and voltmeters"
kind: idea
meta_technique: [smart-coordinates]
example_problems: [kalda-circuits-pr15]
status: stable
---

For planar circuits, instead of the method of loop currents, the method of streamfunction can be used. Each face (the empty area between wires) of the circuit is assigned a streamfunction value: $i$-th face is assigned a value $\psi_{i}$ which is to be found using the Kirchoff's voltage laws. The current in a wire separating $i$-th and $j$-th face is found as $I_{i j}=\psi_{i}-\psi_{j}$; the sign of $I_{i j}$ here is chosen so that if we move along the direction of $I_{i j}$, the $i$-th face remains to our left hand.
