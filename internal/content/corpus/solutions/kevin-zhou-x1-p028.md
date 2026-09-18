---
id: kevin-zhou-x1-p028
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x1-p028
solution_type: author
source_document: solution-document-kevin-zhou-x1sol
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X1Sol.pdf."
---

[3] Problem 28. In this problem we’ll consider the energy of the conducting electrons in a solid at low
temperatures. Model a solid as a cubical box of volume V = L3 with periodic boundary conditions.
(a) Suppose there are N ≫ 1 electrons in total. If the temperature is low enough, they will fill all
of the quantum states up to energy µ = EF , where EF is called the Fermi energy. Show that
EF =
h2
2me

3N
8πV
 2/3
where me is the mass of the electron. Be careful to account for the fact that an electron’s
spin can have two possible values.
(b) A sodium crystal has one conduction electron per atom. (The rest of the electrons are bound
to individual atoms, and don’t matter for the purposes of this problem.) The density and
molar mass are
ρ = 0.971 × 103
kg/m3
, M = 0.023kg/mol.
Find N/V and EF , and use this to evaluate the typical speed vF of an electron.
(c) Find a rough estimate for the temperature range at which the above results apply. Is it
satisfied for typical solids at room temperature?
Solution. (a) In a cubical box with periodic boundary conditions, the wavenumbers satisfy
ki = 2π
L ni where ni can also be a negative integer. As seen in the example, the number of
states is 4
3π(
√
2meEF )3(2πℏ/L)−3, but we multiply that by 2 due to the two spin states of
the electron, so that the number of states with energy at most EF is
N =
8
3
π(2meEF )3/2

2πℏ
L
 −3
.
24
Kevin Zhou Physics Olympiad Handouts
Solving for EF gives the answer,
EF =
h2
2me

3N
8πV
 2/3
.
(b) If NA is Avogadro’s number, then the mass of each atom is ma = M/NA, which gives an
atom number density of ρ/ma. Since there’s one conduction electron per atom, we have
N/V = ρ/ma = NAρ/M, which gives us N/V = 2.5 × 1028 m−3. Putting this into our
previous formula gives EF = 5.0 × 10−19 J. The typical speed vF satisfies
EF ∼
1
2
mev2
F
which gives vF ∼ 106 m/s, or on the order of 1% of the speed of light! This verifies a statement
made in E4 about electrical conduction in solids.
(c) The condition is kBT ≪ EF , which corresponds to T ≪ 4 × 104 K. This is easily satisfied for
a solid at room temperature. In fact, any solid would melt before it got to this temperature!
So the model we’ve developed in this problem is good for any conductor within which the
interactions of conduction electrons with ions or other electrons are negligible.
