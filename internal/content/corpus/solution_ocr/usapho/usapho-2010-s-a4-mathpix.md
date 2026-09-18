---
id: solution-ocr-usapho-2010-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2010-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A4

The energy radiated by the Sun is generated primarily by the fusion of hydrogen into helium-4. In stars the size of the Sun, the primary mechanism by which fusion takes place is the proton-proton chain. The chain begins with the following reactions:

$$
\begin{gather*}
2 \mathrm { p } \rightarrow \mathbf { X } _ { 1 } + \mathrm { e } ^ { + } + \mathbf { X } _ { 2 } ( 0.42 \mathrm { MeV } )  \tag{A4-1}\\
\mathrm { p } + \mathbf { X } _ { 1 } \rightarrow \mathbf { X } _ { 3 } + \gamma ( 5.49 \mathrm { MeV } ) \tag{A4-2}
\end{gather*}
$$

Copyright ©2010 American Association of Physics Teachers


The amounts listed in parentheses are the total kinetic energy carried by the products, including gamma rays. p is a proton, $\mathrm { e } ^ { + }$is a positron, $\gamma$ is a gamma ray, and $\mathbf { X } _ { 1 } , \mathbf { X } _ { 2 }$, and $\mathbf { X } _ { 3 }$ are particles for you to identify.

The density of electrons in the Sun's core is sufficient that the positron is annihilated almost immediately, releasing an energy $x$ :

$$
\begin{equation*}
\mathrm { e } ^ { + } + \mathrm { e } ^ { - } \rightarrow 2 \gamma ( x ) \tag{A4-3}
\end{equation*}
$$

Subsequently, two major processes occur simultaneously. The "pp I branch" is the single reaction

$$
\begin{equation*}
2 \mathbf { X } _ { 3 } \rightarrow { } ^ { 4 } \mathrm { He } + 2 \mathbf { X } _ { 4 } ( y ) , \tag{A4-4}
\end{equation*}
$$

which releases an energy $y$. The "pp II branch" consists of three reactions:

$$
\begin{gather*}
\mathbf { X } _ { 3 } + { } ^ { 4 } \mathrm { He } \rightarrow \mathbf { X } _ { 5 } + \gamma  \tag{A4-5}\\
\mathbf { X } _ { 5 } + \mathrm { e } ^ { - } \rightarrow \mathbf { X } _ { 6 } + \mathbf { X } _ { 7 } ( z )  \tag{A4-6}\\
\mathbf { X } _ { 6 } + \mathbf { X } _ { 4 } \rightarrow 2 { } ^ { 4 } \mathrm { He } \tag{A4-7}
\end{gather*}
$$

where $z$ is the energy released in step A4-6.

a. Identify $\mathbf { X } _ { 1 }$ through $\mathbf { X } _ { 7 }$. $\mathbf { X } _ { 2 }$ and $\mathbf { X } _ { 7 }$ are neutral particles of negligible mass. It is useful to know that the first few elements, in order of atomic number, are H, He, Li, Be, B, C, N, O.
b. The mass of the electron is $0.51 \mathrm { MeV } / \mathrm { c } ^ { 2 }$, the mass of the proton is $938.27 \mathrm { MeV } / \mathrm { c } ^ { 2 }$, and the mass of the helium-4 nucleus is $3727.38 \mathrm { MeV } / \mathrm { c } ^ { 2 }$. Find the energy released during the production of one helium-4 nucleus, including the kinetic energy of all products and all energy carried by gamma rays.
c. Find the unknown energies $x$ and $y$ above.
d. Step (A4-6) does not proceed as follows because there is insufficient energy.
$$
\mathbf { X } _ { 5 } \rightarrow \mathbf { X } _ { 6 } + \mathrm { e } ^ { + } + \mathbf { X } _ { 7 }
$$
What constraint does this fact place on $z$ ?
e. In which of the reaction steps is the energy carried by any given product the same every time the step occurs? Assume that the kinetic energy carried in by the reactants in each step is negligible, and that the products are in the ground state.

## Solution

a. We know that in all nuclear processes, total charge is conserved, lepton number (electrons plus neutrinos minus positrons minus antineutrinos), and baryon number (neutrons plus protons) are conserved. As $X _ { 2 }$ is a neutral particle of negligible mass, $X _ { 1 }$ must have charge +1 and contain two baryons. Thus it is ${ } ^ { 2 } \mathrm { H } . X _ { 2 }$ is then a neutral particle with lepton number +1 and is an electron neutrino.
Similar reasoning shows that $X _ { 3 }$ is ${ } ^ { 3 } \mathrm { He } , X _ { 4 }$ is a proton (i.e. $\left. { } ^ { 1 } \mathrm { H } \right) , X _ { 5 }$ is ${ } ^ { 7 } \mathrm { Be } , X _ { 6 }$ is ${ } ^ { 7 } \mathrm { Li }$, and $X _ { 7 }$ is an electron neutrino.

b. The overall reaction (not including gamma rays) is
$$
4 \mathrm { p } + 2 \mathrm { e } ^ { - } \rightarrow { } ^ { 4 } \mathrm { He } + 2 \nu _ { e }
$$
as can be seen from conservation considerations or by combining the given reactions. The energy released is the difference in mass between the reactants and the products; using the given values, this is 26.72 MeV .
c. $x$ is simply twice the mass of the electron, 1.02 MeV. To compute $y$, note that we can sum the other known energies to obtain the result from the previous problem:
$$
2 ( 0.42 \mathrm { MeV } + 5.49 \mathrm { MeV } + 1.02 \mathrm { MeV } ) + y = 26.72 \mathrm { MeV }
$$
where the factor of 2 arises because two ${ } ^ { 3 } \mathrm { He }$ are produced in the course of the combined reaction. Solving, $y = 12.86 \mathrm { MeV }$.
d. The forbidden reaction produces an energy of $z - 2 ( 0.51 \mathrm { MeV } )$, as it differs from the naturally occurring one by the consumption of one fewer electron and the production of an additional positron. Since it is forbidden, $z < 1.02 \mathrm { MeV }$.
e. Reactions with two products have a single set of product energies, while those with three or more products produce a spectrum of output energies. Students may quote this result; alternatively, observe that in a two-product reaction the conservation of momentum and of energy give two equations in the two unknowns, fixing their values, whereas there are insufficient equations in the case of three or more products.
The reactions with only two products are (A4-2), (A4-3), (A4-5), (A4-6), and (A4-7).


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
