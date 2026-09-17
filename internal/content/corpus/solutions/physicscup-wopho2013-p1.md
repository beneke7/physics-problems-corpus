---
id: physicscup-wopho2013-p1
problem: physicscup-wopho2013-p1
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda
solution_source_url: https://physicscup.ee/archive/physics-cup-2013/
selection_note: "Jaan Kalda's official progressive hints (which lay out the intended short solution in full) plus the best-solution commentary, from the born-digital WoPhO-2013 'Problem 6' PDF. Contestants' full worked derivations were published only as appended (scanned/attached) submissions and are not transcribed here — consistent with the owner's commentary-only decision for the 2012 Physics Cup."
verification_status: unverified
figure_files: []
---

## Solution (official hints + editorial commentary)
*Jaan Kalda's progressive hints for WoPhO-2013 Problem 6 (= Physics Cup 2013 Problem 1), transcribed faithfully from the born-digital source PDF. These hints constitute the intended elegant solution method. The full worked contestant solutions were appended as separate submissions (Lars Dehlwes — 28-equation brute force; Hrishikesh Menon — Y-Δ transform; Nguyen Ho Nam — node potentials with mirror symmetry, etc.) and are NOT transcribed here.*

**Hint (after 1st week).** This problem has also a short solution which does not use brute force. How to be sure that you have found the short solution: using the method of that short solution, it is possible to solve also a modified problem, where the dodecahedron is replaced by an infinite honeycomb lattice (two wires are cut off in the same way as for this dodecahedron).

**Hint (after 2nd week).** As a first step, find the resistance between $B$ and $E$ when the segments $DA$ and $AB$ (together with the respective capacitors) are still present. This can be found in the same way as the resistance $r$ between two neighbouring nodes $P$ and $Q$ of an infinite square lattice of resistors $R$: consider the superposition of two current distributions. (i) current $I$ is driven into the node $P$ and driven out symmetrically at infinity; (ii) current is driven into the lattice at infinity, and out from the node $Q$. Due to symmetry, in both cases there is a current $I/4$ in the wire directly connecting $P$ and $Q$. For the superposition, current $I$ enters the circuit at $P$, and leaves from $Q$, and there is a current $I/4 + I/4 = I/2$ in the wire connecting $P$ and $Q$, i.e. $r = R\cdot(I/2)/I = R/2$.

**Hint (after 3rd week).** In the case of a dodecahedron, current $I$, if driven into a node $P$, cannot be driven out at infinity because the circuit is finite. However, there is still a way to drive it out from the nodes of the dodecahedron so that (i) the current distribution remains symmetric; (ii) for a superposition of two such current distributions of opposite polarities (when adding a current distribution with $I$ being driven out from a node $Q$), the external currents driven to and from all the nodes other than $P$ and $Q$ cancel out. Now, suppose you know the resistance $r$ between the nodes $B$ and $E$ for an uncut dodecahedron: between $B$ and $E$, the whole uncut dodecahedron is equivalent to a single resistor $r$. Next, notice that cutting out a resistor $R$ is mathematically equivalent to adding a parallel resistance $-R$ (a mathematician doesn't care that there are no negative resistances).

**Hint (after 4th week).** Notice that any calculations for a certain configuration of resistances can be carried over to the equivalent configuration of capacitors. Indeed, the overall impedance $Z = 1/iC\omega$ of a system of capacitors can be found according to the rules for resistors, with resistances being substituted by the impedances $Z_k = 1/iC_k\omega$. As for the method to drive out the current which is driven into the node $P$, you need to drive out equal amount from every node other than $P$.

### Editorial — best solutions
There were many good solutions, but none really stood above the others. The best-solution awards were given to those short solutions which were sent before the hints of the second week were made available. Highlighted approaches:

- **Jaemo Lim** — a very typical short solution.
- **Kristjan Kongas** — the same, but without turning to resistances or impedances.
- **David Schmidt / Efim Mazhnik** — solutions similar to the above.
- **Tudor Ciobanu** — a short solution more general than the others: the uncut dodecahedron is substituted by an equivalent Y-connection, which also makes it possible to compute the circuit with additional (possibly different) capacitors inserted between $B$–$D$, $B$–$E$ and/or $D$–$E$.
- **Lars Dehlwes** — solves a full system of 28 equations for the currents.
- **Hrishikesh Menon** — uses the Y-Δ transform (typically fewer calculations than loop currents or node potentials).
- **Nguyen Ho Nam** — brute force via node potentials (20 node unknowns vs 30 edges; mirror symmetry reduces the unknowns to 7).
