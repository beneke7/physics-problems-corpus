---
id: solution-ocr-usapho-2011-s-a4
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2011-a4]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A4

In this problem we consider a simplified model of the electromagnetic radiation inside a cubical box of side length $L$. In this model, the electric field has spatial dependence

$$
E ( x , y , z ) = E _ { 0 } \sin \left( k _ { x } x \right) \sin \left( k _ { y } y \right) \sin \left( k _ { z } z \right)
$$

where one corner of the box lies at the origin and the box is aligned with the $x , y$, and $z$ axes. Let $h$ be Planck's constant, $k _ { B }$ be Boltzmann's constant, and $c$ be the speed of light.

a. The electric field must be zero everywhere at the sides of the box. What condition does this impose on $k _ { x } , k _ { y }$, and $k _ { z }$ ? (Assume that any of these may be negative, and include cases where one or more of the $k _ { i }$ is zero, even though this causes $E$ to be zero.)
b. In the model, each permitted value of the triple $\left( k _ { x } , k _ { y } , k _ { z } \right)$ corresponds to a quantum state. These states can be visualized in a state space, which is a notional three-dimensional space with axes corresponding to $k _ { x } , k _ { y }$, and $k _ { z }$. How many states occupy a volume $s$ of state space, if $s$ is large enough that the discreteness of the states can be ignored?
c. Each quantum state, in turn, may be occupied by photons with frequency $\omega = \frac { f } { 2 \pi } = c | \mathbf { k } |$, where
$$
| \mathbf { k } | = \sqrt { k _ { x } ^ { 2 } + k _ { y } ^ { 2 } + k _ { z } ^ { 2 } }
$$
In the model, if the temperature inside the box is $T$, no photon may have energy greater than $k _ { B } T$. What is the shape of the region in state space corresponding to occupied states?
d. As a final approximation, assume that each occupied state contains exactly one photon. What is the total energy of the photons in the box, in terms of $h , k _ { B } , c , T$, and the volume of the box $V$ ? Again, assume that the temperature is high enough that there are a very large number of occupied states. (Hint: divide state space into thin regions corresponding to photons of the same energy.)

Note that while many details of this model are extremely inaccurate, the final result is correct except for a numerical factor.

## Solution


a. The boundary conditions require $\sin \left( k _ { x } L \right) = 0$, so that
$$
k _ { x } L = n _ { x } \pi
$$
for any integer $n _ { x }$, with similar conditions for $k _ { y }$ and $k _ { z }$.
b. In the abstract state space, the states are spaced a distance $\pi / L$ apart. Each can therefore be thought of as occupying volume $\pi ^ { 3 } / L ^ { 3 }$, and the number of states in the volume $s$ is
$$
N = \frac { L ^ { 3 } s } { \pi ^ { 3 } } .
$$
c. A photon's energy is $E = \hbar \omega = \hbar c | \mathbf { k } |$, where $\hbar = h / 2 \pi$. Thus the occupied states obey
$$
\hbar c | \mathbf { k } | \leq k _ { B } T .
$$
This corresponds to a ball of radius $k _ { \max } = k _ { B } T / \hbar c$ in state space centered at the origin.
d. Naively, we would have to perform a triple integral over state space. However, the energy of a photon depends only on its distance |k| from the origin in state space. Hence we can integrate over spherical shells. Consider a shell bounded by radii $k$ and $k + d k$. The volume of this region is
$$
d s = 4 \pi k ^ { 2 } d k .
$$
Each state in this region contains a single photon with energy $\hbar c k$, so the shell yields energy
$$
d E = \hbar c k \frac { L ^ { 3 } } { \pi ^ { 3 } } d s = \frac { 4 } { \pi ^ { 2 } } \hbar c L ^ { 3 } k ^ { 3 } d k
$$
From our work above, $k$ ranges from zero to $k _ { \max }$, so the total energy is
$$
E = \frac { 4 } { \pi ^ { 2 } } \hbar c L ^ { 3 } \int _ { 0 } ^ { k _ { \max } } k ^ { 3 } d k = \frac { \hbar c L ^ { 3 } } { \pi ^ { 2 } } k _ { \max } ^ { 4 }
$$
Substituting $V = L ^ { 3 }$ and $h = 2 \pi \hbar$, this simplifies to
$$
E = \frac { 8 \pi k _ { B } ^ { 4 } } { h ^ { 3 } c ^ { 3 } } V T ^ { 4 }
$$
Note that everything has come out right, including the $T ^ { 4 }$ factor seen in the Stefan-Boltzmann law, though the numerical prefactor is wrong.


## STOP: Do Not Continue to Part B

If there is still time remaining for Part A, you should review your work for Part A, but do not continue to Part B until instructed by your exam supervisor.


## Part B
