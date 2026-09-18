---
id: solution-ocr-kevin-zhou-x1sol-p027
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p027]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 27. Consider a system with many noninteracting fermions, and many quantum states. Each quantum state can be either empty or occupied by a fermion. We want to find the probability that a given quantum state, of energy $E$, is occupied.
    (a) To put a fermion in this state, we need to remove a fermion from some other state. Suppose the energy released by doing this, suitably averaged, is $\mu$. (This is the chemical potential, and it depends on the temperature, the number of fermions, and the number of states and their energies.) Using the Boltzmann distribution, show that the probability of occupancy is
$$
\langle n \rangle = \frac { 1 } { e ^ { ( E - \mu ) / k _ { B } T } + 1 } .
$$
This is the Fermi-Dirac distribution.
    (b) Sketch $\langle n \rangle$ as a function of $E$ for small but nonzero temperature, as well as the limit attained for zero temperature.

Solution. (a) The two possibilities are being occupied and not occupied, and the former comes with a Boltzmann factor of $e ^ { - ( E - \mu ) / k _ { B } T }$. Thus,

$$
\langle n \rangle = \frac { e ^ { - ( E - \mu ) / k _ { B } T } } { 1 + e ^ { - ( E - \mu ) / k _ { B } T } } = \frac { 1 } { 1 + e ^ { ( E - \mu ) / k _ { B } T } } .
$$


(b) The graphs are shown below, for zero and nonzero $\mu$.
![](../../../figures/solution-ocr/0b7ddcdc72146254c67bb991.jpg)
![](../../../figures/solution-ocr/ef4cce5742b803261ae70d15.jpg)
As $T \rightarrow 0$, the form of $\langle n \rangle$ will start to look like a step function, $\theta ( \mu - E )$. This simply means that the fermions fill up the lowest energy states first, to minimize their total energy. The chemical potential is set by how many fermions there are in total.
