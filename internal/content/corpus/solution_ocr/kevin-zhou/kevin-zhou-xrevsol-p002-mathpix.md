---
id: solution-ocr-kevin-zhou-xrevsol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/XRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-xrev-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 2. Let $n$ be the local density of a gas of particles. If this density is nonuniform, it will tend to be smoothed out by diffusion, which produces a particle current
$$
\mathbf { J } = - D \nabla n
$$
with units of particles per second per unit area. This is a continuity equation, as explained in T2, and $D$ is called the diffusion coefficient. In addition, we know from M7 and T1 that each particle in such a gas will experience a drag force from the others. As a result, when a constant force F is applied to one, its terminal velocity satisfies $\mathbf { F } = \mu \mathbf { v }$.
    (a) Suppose the particles are placed inside a potential $V ( \mathbf { r } )$. Write down the contribution to the particle current due to the resulting force, neglecting diffusion.
    (b) In thermal equilibrium, the particle current produced by the force, which pulls the particles to lower potential, balances the particle current produced by diffusion, which spreads them out. Assuming the temperature is $T$, find a relation between $D$ and $\mu$.

Solution. (a) The force is $\mathbf { F } = - \nabla V$, which means $\mathbf { v } = - ( \nabla V ) / \mu$. The particle current is

$$
\mathbf { J } = n \mathbf { v } = - \frac { n } { \mu } \nabla V .
$$


(b) By setting the sum of the two currents to zero,
$$
\frac { n } { \mu } \nabla V = - D \nabla n .
$$
Rearranging gives
$$
\frac { 1 } { \mu D } \nabla V = - \nabla ( \log n ) .
$$
On the other hand, we know that $n ( \mathbf { r } ) \propto e ^ { - V ( \mathbf { r } ) / k _ { B } T }$ because the steady state must obey the Boltzmann distribution. Then we have $\log n = - V / k _ { B } T +$ const , which means
$$
k _ { B } T = \mu D .
$$
This result is also derived in IPhO 2023, problem 1, which you can see for comparison.

Remark
The result of problem 2 is called the Einstein relation, and is one of the four major results Einstein derived in his "annus mirabilis" of 1905, the others being special relativity and $E = m c ^ { 2 }$, and explaining the photoelectric effect with photons. So why is this result so important? It's because at the time, it was not yet completely accepted that matter was made of atoms. As you saw in T1, the size of a single atom often drops out of kinetic theory calculations. At the time, many took this to mean that atoms were a fictitious calculational tool, like how one does integrals by summing over intervals of length $\Delta x$, then gets a result independent of this fiducial length by taking $\Delta x \rightarrow 0$.

But doesn't the number of atoms $N$ appear all the time in basic thermodynamics, like the ideal gas law? Yes, but always in the combination $n R = N k _ { B }$. Thus, information about the size of a single atom is equivalent to information about $k _ { B }$. Einstein's relation is useful


because it explicitly gives us $k _ { B }$ in terms of the separately directly measurable quantities $D$, $\mu$, and $T$. It was one of the first unique, quantitative predictions of kinetic theory.
[4] Problem 3 (Physics Cup 2018). Estimate the mean free path of a heavy black sphere of mass $m$ and radius $R$ in vacuum at temperature $T$. Here, we define the mean free path as the typical distance it takes for the velocity vector of the sphere to turn by an angle $\pi / 2$. Assume that $k _ { B } T R \gtrsim \hbar c$. (Hint: for a random walk where steps of size $a$ are taken per time $\tau$, the average overall displacement after time $t \gg \tau$ is approximately $a \sqrt { t / \tau }$.)
Solution. By the equipartition theorem, the typical speed $v _ { 0 }$ of the sphere satisfies
$$
m v _ { 0 } ^ { 2 } \sim k _ { B } T .
$$
The velocity vector is rotated by impulses from the photons, as they are absorbed or emitted by the sphere. Thus, we need to estimate the rate of collisions as well as the typical impulse of each one. The typical energy of a photon in blackbody radiation of temperature $T$ is $E \sim k _ { B } T$ by the equipartition theorem again, which means each absorption or emission changes the velocity of the sphere by
$$
\Delta v = \frac { \Delta p } { m } = \frac { E } { m c } \sim \frac { k _ { B } T } { m c } .
$$
On the other hand, we have
$$
v _ { 0 } \sim \sqrt { \frac { k _ { B } T } { m } }
$$
which is much larger than $\Delta v$ since we are assuming the sphere is heavy. Using the provided hint, the number of photons required to change the velocity significantly is order
$$
N \sim \left( \frac { v _ { 0 } } { \Delta v } \right) ^ { 2 } \sim \frac { m c ^ { 2 } } { k _ { B } T } .
$$
Now we need to find the rate at which photons are absorbed or emitted. In equilibrium, these two rates will be equal, so we can focus on emission, which is easier to handle. The power emitted from the sphere is
$$
P = 4 \pi R ^ { 2 } \sigma T ^ { 4 }
$$
and we already know the photons emitted have typical energy $k _ { B } T$, so the time per photon is
$$
\tau \sim \frac { k _ { B } T } { P } \sim \frac { k _ { B } } { \sigma R ^ { 2 } T ^ { 3 } } .
$$
Combining our results, the mean free path is
$$
\lambda \sim v _ { 0 } N \tau \sim \frac { k _ { B } ^ { 1 / 2 } m ^ { 1 / 2 } c ^ { 2 } } { \sigma R ^ { 2 } T ^ { 7 / 2 } } .
$$
Incidentally, you might wonder how we used the assumption $k _ { B } T R \gtrsim \hbar c$. This assumption is equivalent to saying that the wavelength of a typical photon is smaller than the size of the sphere itself. We used this implicitly by thinking of the photons as little bullets hitting the sphere. If it weren't true, then we would have to account for their wave nature.
