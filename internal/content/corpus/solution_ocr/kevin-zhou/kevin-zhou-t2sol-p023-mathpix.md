---
id: solution-ocr-kevin-zhou-t2sol-p023
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p023]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 23. Planck's law can be used to understand atomic physics, as Einstein showed and as you will now show. Suppose we have a collection of two-state atoms encased inside a cavity, whose walls are blackbodies with temperature $T$. In equilibrium, there will be $N _ { 1 }$ atoms in the ground state and $N _ { 2 }$ atoms in the excited state, bathed in a photon gas of temperature $T$. Three physical processes can occur:

1. Atoms in the excited state can each spontaneously decay with rate $A$.
2. Atoms in the ground state can absorb a photon. For each atom, the rate of this process is $B \rho ( f )$ where $\rho ( f )$ is the energy density of radiation at frequency $f$.
3. Atoms in the excited state can undergo stimulated emission when interacting with a photon, in the process $e + \gamma \rightarrow g + \gamma + \gamma$. For each atom, the rate of this process is $B ^ { \prime } \rho ( f )$.

These three "Einstein coefficients" depend on the frequency, but not on the temperature.

(a) Argue that $\rho ( f )$ is proportional to $I ( f )$ in Planck's law. In fact,
$$
I ( f ) = \frac { c } { 4 } \rho ( f )
$$
though you do not have to show this.
(b) Write down an expression for $d N _ { 2 } / d t$.
(c) In the steady state, for any temperature, $N _ { 2 } / N _ { 1 }$ must be given by the Boltzmann distribution. Using this, find $A$ and $B ^ { \prime }$ in terms of $B$.

This is an extraordinary result: one might have expected a difficult calculation to find each of $A , B$, and $B ^ { \prime }$, but if you know one, then by thermodynamics you know them all. In particular, thermodynamics requires spontaneous emission to be possible, $A \neq 0$.

Solution. (a) Here $\rho ( f )$ refers to the distribution of radiation energy inside the blackbody, while $I ( f )$ refers to the intensity of radiation escaping the blackbody if there were a hole. The reason these are proportional is that all electromagnetic radiation travels at the same speed; hence light of all frequencies will escape a blackbody at the same rate. (Note that this would not be true for an ideal gas, where higher-energy particles would escape at a higher rate.)


(b) Adding up the contributions from the three processes,
$$
\frac { d N _ { 2 } } { d t } = - A N _ { 2 } + B \rho ( f ) N _ { 1 } - B ^ { \prime } \rho ( f ) N _ { 2 } .
$$
(c) We know that in thermal equilibrium,
$$
\frac { N _ { 2 } } { N _ { 1 } } = e ^ { - h f / k _ { B } T } .
$$
Plugging this in above and setting $d N _ { 2 } / d t = 0$, we have
$$
\frac { A } { \rho ( f ) } = B e ^ { h f / k _ { B } T } - B ^ { \prime } .
$$
Using the given expression for $\rho ( f )$,
$$
A \frac { c ^ { 3 } } { 8 \pi h f ^ { 3 } } \left( e ^ { h f / k _ { B } T } - 1 \right) = B e ^ { h f / k _ { B } T } - B ^ { \prime } .
$$
The left-hand side goes to zero in the limit $T \rightarrow \infty$, which is physically reasonable. It is only possible for the right-hand side to do the same thing if
$$
B ^ { \prime } = B .
$$
Plugging this back in, we have
$$
A = \frac { 8 \pi h f ^ { 3 } } { c ^ { 3 } } B .
$$
