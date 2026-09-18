---
id: solution-ocr-kevin-zhou-x1sol-p028
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p028]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 28. In this problem we'll consider the energy of the conducting electrons in a solid at low temperatures. Model a solid as a cubical box of volume $V = L ^ { 3 }$ with periodic boundary conditions.
(a) Suppose there are $N \gg 1$ electrons in total. If the temperature is low enough, they will fill all of the quantum states up to energy $\mu = E _ { F }$, where $E _ { F }$ is called the Fermi energy. Show that
$$
E _ { F } = \frac { h ^ { 2 } } { 2 m _ { e } } \left( \frac { 3 N } { 8 \pi V } \right) ^ { 2 / 3 }
$$
where $m _ { e }$ is the mass of the electron. Be careful to account for the fact that an electron's spin can have two possible values.
(b) A sodium crystal has one conduction electron per atom. (The rest of the electrons are bound to individual atoms, and don't matter for the purposes of this problem.) The density and molar mass are
$$
\rho = 0.971 \times 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 } , \quad M = 0.023 \mathrm {~kg} / \mathrm { mol } .
$$
Find $N / V$ and $E _ { F }$, and use this to evaluate the typical speed $v _ { F }$ of an electron.
(c) Find a rough estimate for the temperature range at which the above results apply. Is it satisfied for typical solids at room temperature?

Solution. (a) In a cubical box with periodic boundary conditions, the wavenumbers satisfy $k _ { i } = \frac { 2 \pi } { L } n _ { i }$ where $n _ { i }$ can also be a negative integer. As seen in the example, the number of states is $\frac { 4 } { 3 } \pi \left( \sqrt { 2 m _ { e } E _ { F } } \right) ^ { 3 } ( 2 \pi \hbar / L ) ^ { - 3 }$, but we multiply that by 2 due to the two spin states of the electron, so that the number of states with energy at most $E _ { F }$ is

$$
N = \frac { 8 } { 3 } \pi \left( 2 m _ { e } E _ { F } \right) ^ { 3 / 2 } \left( \frac { 2 \pi \hbar } { L } \right) ^ { - 3 } .
$$


Solving for $E _ { F }$ gives the answer,
$$
E _ { F } = \frac { h ^ { 2 } } { 2 m _ { e } } \left( \frac { 3 N } { 8 \pi V } \right) ^ { 2 / 3 } .
$$
(b) If $N _ { A }$ is Avogadro's number, then the mass of each atom is $m _ { a } = M / N _ { A }$, which gives an atom number density of $\rho / m _ { a }$. Since there's one conduction electron per atom, we have $N / V = \rho / m _ { a } = N _ { A } \rho / M$, which gives us $N / V = 2.5 \times 10 ^ { 28 } \mathrm {~m} ^ { - 3 }$. Putting this into our previous formula gives $E _ { F } = 5.0 \times 10 ^ { - 19 } \mathrm {~J}$. The typical speed $v _ { F }$ satisfies
$$
E _ { F } \sim \frac { 1 } { 2 } m _ { e } v _ { F } ^ { 2 }
$$
which gives $v _ { F } \sim 10 ^ { 6 } \mathrm {~m} / \mathrm { s }$, or on the order of 1\% of the speed of light! This verifies a statement made in E4 about electrical conduction in solids.
(c) The condition is $k _ { B } T \ll E _ { F }$, which corresponds to $T \ll 4 \times 10 ^ { 4 } \mathrm {~K}$. This is easily satisfied for a solid at room temperature. In fact, any solid would melt before it got to this temperature! So the model we've developed in this problem is good for any conductor within which the interactions of conduction electrons with ions or other electrons are negligible.
