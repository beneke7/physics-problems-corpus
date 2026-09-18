---
id: solution-ocr-spot-2026-s-q7
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2026_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [spot-2026-q7]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
7. In this question, we will learn more about the interaction between atoms and light. Let us consider a cavity of volume $V$ held at constant temperature $T$. Within this cavity is a "photon gas" in thermal equilibrium with the walls. We model these photons as ideal gas particles with a mean energy per photon of $\hbar \langle \omega \rangle$.
(a) Using arguments from Kinetic Particle Theory or otherwise, show that the power incident per unit area of cavity wall $\langle I \rangle$, due to the photons, can be written as
$$
\langle I \rangle = \frac { c } { 4 } \langle U \rangle
$$
where $\langle U \rangle$ is the energy density of the photon gas and $c$ is the speed of light.

Solution: Consider a small area $\mathrm { d } A$ on the cavity wall. In time $\mathrm { d } t$, the volume of particles hitting the wall at an angle $\theta$ with respect to the normal is $\mathrm { d } A c \cos \theta \mathrm {~d} t$. Note that we can use this because all photons, regardless of their frequencies (or energy), all travel at the same speed. Assuming isotropy, the proportion of particles moving at angle $\theta$ is $n \sin \theta \mathrm {~d} \theta / 2$ where $n$ is the number of particles per unit volume. Hence, the number of particles hitting the area per unit time per unit area is

$$
\frac { \mathrm { d } N } { \mathrm {~d} A \mathrm {~d} t } = \frac { 1 } { 2 } n c \cos \theta \sin \theta \mathrm {~d} \theta
$$

Integrating this across $\theta$ from 0 to $\pi / 2$ gives us $n c / 4$. This proves the desired relation upon multiplying both sides by the average energy per particle.

For a perfect blackbody at thermodynamic equilibrium at temperature $T$, the power incident per unit area per unit angular frequency $I ( \omega )$ is equal to the power emitted per unit area per unit angular frequency, given by the famous Planck's Law

$$
I ( \omega ) = \frac { \hbar \omega ^ { 3 } } { 4 \pi ^ { 2 } c ^ { 2 } } \frac { 1 } { e ^ { \hbar \omega / \left( k _ { B } T \right) } - 1 } = \frac { c } { 4 } U ( \omega )
$$

We now introduce a collection of atoms into the cavity. Each atom has a ground state $| a \rangle$ with energy $E _ { a }$ and an excited state $| b \rangle$ with energy $E _ { b }$, separated by $\Delta E = E _ { b } - E _ { a } = \hbar \Delta \omega$. The number of atoms in each of these states are $N _ { a }$ and $N _ { b }$ respectively. The atoms then interact with the photon gas, and Einstein identified three fundamental processes occuring:

a. Spontaneous emission: Atom naturally decays from $| b \rangle \rightarrow | a \rangle$ with rate $k _ { 1 }$, emitting a photon.
b. Stimulated emission: An incident photon triggers an atom to decay from $| b \rangle \rightarrow | a \rangle$ with rate $k _ { 2 }$, emitting a second, identical photon.
c. Stimulated absorption: An atom absorbs an incident photon gets excited from $| a \rangle \rightarrow | b \rangle$ with rate $k _ { 3 }$.
(b) The actual rates used by Einstein when he tackled this problem in 1917 are $\alpha N _ { b }$, $\beta U ( \Delta \omega ) N _ { a } , \gamma U ( \Delta \omega ) N _ { b }$, where $\alpha , \beta$ and $\gamma$ are new numerical constants he defined. Match these to the rate $k _ { 1,2,3 }$ corresponding to the 3 processes above and justify your choices fully with physics.

Solution: Spontaneous emission should not depend on the number of photons. Stimulated emission depends on the number density of photons with frequency matching the excitation frequency. Looking at the dependence on $N _ { a }$ and $N _ { b }$, we arrive at

$$
k _ { 1 } \rightarrow \alpha N _ { b } , \quad k _ { 2 } \rightarrow \gamma U ( \Delta \omega ) N _ { b } , \quad k _ { 3 } \rightarrow \beta U ( \Delta \omega ) N _ { a }
$$

(c) Given that the atoms are in thermal equilibrium with the bath of photons and by considering $\dot { N } _ { a }$ and $\dot { N } _ { b }$, show the following relationships
$$
\beta = \gamma \quad \text { and } \quad \alpha = \frac { \hbar \Delta \omega ^ { 3 } } { \pi ^ { 2 } c ^ { 3 } } \beta
$$

Solution: The population $N _ { a }$ and $N _ { b }$ must satisfy the Boltzmann distribution since it is in thermal equilibrium with the photons. We obtain

$$
\frac { N _ { b } } { N _ { a } } = e ^ { - \beta \hbar \Delta \omega }
$$

Next, we consider the steady-state condition

$$
\dot { N } _ { a } = \alpha N _ { b } + \gamma U ( \Delta \omega ) N _ { b } - \beta U ( \Delta \omega ) N _ { a } = 0
$$

(note that since $\dot { N } _ { a } + \dot { N } _ { b } =$ const., we just have $\dot { N } _ { b } = - \dot { N } _ { a } = 0$ and writing an equation for $\dot { N } _ { b }$ does not add new information). Substituting in the Boltzmann condition and solving for $U ( \Delta \omega )$, we find that

$$
U ( \Delta \omega ) = \frac { \alpha } { \beta e ^ { \hbar \Delta \omega / \left( k _ { B } T \right) } - \gamma } = \frac { \frac { \alpha } { \beta } } { e ^ { \hbar \Delta \omega / \left( k _ { B } T \right) } - \frac { \gamma } { \beta } }
$$

Finally, matching this with the expression for $U ( \Delta \omega )$ given by Planck's Law gives us the desired relationship

$$
\frac { \gamma } { \beta } = 1 , \quad \frac { \alpha } { \beta } = \frac { \hbar ^ { 2 } \omega ^ { 3 } } { \pi ^ { 2 } c ^ { 3 } }
$$

A LASER, Light Amplification by Stimulated Emission of Radiation, works by having population inversion, where most of the atoms are "pumped" into the excited energy level $| b \rangle$. Then any small number of photons can trigger larger and larger numbers of stimulated emission processes.
