---
id: solution-ocr-kevin-zhou-erevsol-p028
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/ERevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-erev-p028]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 28. [A] Electromagnetism is symmetric under charge conjugation $C$, parity $P$, and time reversal $T$. Explicitly, this means the following: suppose there are charge and current densities $\rho ( \mathbf { r } , t )$ and $\mathbf { J } ( \mathbf { r } , t )$, which then produce fields $\mathbf { E } ( \mathbf { r } , t )$ and $\mathbf { B } ( \mathbf { r } , t )$. A test charge $q$ is acted on by these fields, taking a path $\mathbf { x } ( t )$. Under one of these symmetry transformation, all of these quantities can be changed, but the new fields should still obey Maxwell's equations, and the path of the test charge should still obey Newton's second law, $m \mathbf { a } = q ( \mathbf { E } + \mathbf { v } \times \mathbf { B } )$.

(a) Under charge conjugation, the signs of all charges are flipped. What are the new charge and current densities $\rho ^ { \prime } ( \mathbf { r } , t )$ and $\mathbf { J } ^ { \prime } ( \mathbf { r } , t )$ ? What are the new fields $\mathbf { E } ^ { \prime } ( \mathbf { r } , t )$ and $\mathbf { B } ^ { \prime } ( \mathbf { r } , t )$ ? The path of the test charge is still $\mathbf { x } ^ { \prime } ( t ) = \mathbf { x } ( t )$. Verify it still obeys Newton's second law.
(b) Under time reversal, everything at time $t$ now occurs at time $- t$. For example, $\rho ^ { \prime } ( \mathbf { r } , t ) =$ $\rho ( \mathbf { r } , - t )$. Verify the test charge's new path still obeys Newton's second law.
(c) Under parity, everything at position $\mathbf { x }$ is mapped to $- \mathbf { x }$. For example, the new path of the test charge is $\mathbf { x } ^ { \prime } ( t ) = - \mathbf { x } ( t )$. Verify its new path still obeys Newton's second law.
(d) The Poynting vector $\mathbf { S } = ( \mathbf { E } \times \mathbf { B } ) / \mu _ { 0 }$ describes the energy flow in the electromagnetic field. How does it transform under $C , P$, and $T$ ?
(e) In quantum field theory, one important but subtle quantity is the "theta term",
$$
\int d t \int d \mathbf { r } \mathbf { E } ( \mathbf { r } , t ) \cdot \mathbf { B } ( \mathbf { r } , t )
$$
where the integrals are over all time and all space. Does the theta term stay the same under $C$, or $P$, or $T$ ? How about the combined transformations $C P$ and $C P T$ ?

Solution. (a) If the charge is flipped, then the current density is flipped too, because currents are made of moving charges. Since the fields are proportional to charge and current density, both the electric and magnetic field are flipped. Thus,

$$
\rho ^ { \prime } ( \mathbf { r } , t ) = - \rho ( \mathbf { r } , t ) , \quad \mathbf { J } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { J } ( \mathbf { r } , t ) , \quad \mathbf { E } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { E } ( \mathbf { r } , t ) , \quad \mathbf { B } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { B } ( \mathbf { r } , t ) .
$$

The acceleration of the test charge stays the same. Meanwhile, the force on it stays the same too, because the fields flip and its own charge flips, $q \rightarrow - q$. Thus, Newton's second law is still satisfied.

(b) The charge density is simply moved to a flipped time,
$$
\rho ^ { \prime } ( \mathbf { r } , t ) = \rho ( \mathbf { r } , - t ) .
$$
On the other hand, the current also has its sign flipped, because currents are due to moving charges, and these charges have their velocity flipped,
$$
\mathbf { J } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { J } ( \mathbf { r } , - t ) .
$$
In a quasistatic situation, we know that $\mathbf { E }$ is sourced by $\rho$ and $\mathbf { B }$ is sourced by $\mathbf { J }$, so
$$
\mathbf { E } ^ { \prime } ( \mathbf { r } , t ) = \mathbf { E } ( \mathbf { r } , - t ) , \quad \mathbf { B } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { B } ( \mathbf { r } , - t ) .
$$
Since the path of the test charge has flipped, its velocity has flipped while its acceleration stays the same,
$$
\mathbf { x } ^ { \prime } ( t ) = \mathbf { x } ( - t ) , \quad \mathbf { v } ^ { \prime } ( t ) = - \mathbf { v } ( - t ) , \quad \mathbf { a } ^ { \prime } ( t ) = \mathbf { a } ( - t ) .
$$
Therefore, we need the Lorentz force to stay the same. Indeed, $\mathbf { E }$ hasn't flipped sign, while $\mathbf { v } \times \mathbf { B }$ has flipped sign twice.

(c) The charge density is simply moved to a flipped position,
$$
\rho ^ { \prime } ( \mathbf { r } , t ) = \rho ( - \mathbf { r } , t ) .
$$
On the other hand, the current also has its sign flipped, because currents are due to moving charges, and these charges have their velocity flipped,
$$
\mathbf { J } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { J } ( - \mathbf { r } , t ) .
$$
In a quasistatic situation, we know that $\mathbf { E }$ is sourced by $\rho$ and $\mathbf { B }$ is sourced by $\mathbf { J }$, so
$$
\mathbf { E } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { E } ( - \mathbf { r } , t ) , \quad \mathbf { B } ^ { \prime } ( \mathbf { r } , t ) = \mathbf { B } ( - \mathbf { r } , t ) .
$$
The signs here are flipped from the time reversal case, because E and B are related to $\rho$ and J by spatial derivatives, which also flip sign. (If this is confusing, consider a few examples, like a solenoid or point charge!)
The remarkable feature of this result is that we usually think of $\mathbf { E }$ and $\mathbf { B }$ as vector fields, meaning they assign a direction to every point in space. Since directions reverse under parity, we would naively expect both of them to flip sign. The reason this doesn't happen is that B is not a true vector at all, but rather a different geometric object called an axial vector. The directions of axial vectors are determined by applying the right-hand rule, which means they transform differently under parity because a right hand is mapped to a left hand.
Since the path of the test charge has flipped, its velocity and acceleration have flipped,
$$
\mathbf { x } ^ { \prime } ( t ) = - \mathbf { x } ( t ) , \quad \mathbf { v } ^ { \prime } ( t ) = - \mathbf { v } ( t ) , \quad \mathbf { a } ^ { \prime } ( t ) = - \mathbf { a } ( t ) .
$$
As expected, the Lorentz force also flips sign, because E flips sign, and $\mathbf { v } \times \mathbf { B }$ flips sign due to the $\mathbf { v }$.
(d) Under charge conjugation, both E and B flip, so the Poynting vector stays the same. This tells us that energy is emitted by the motion of reversed charges in the same way as the original charges.
Under time reversal, only $\mathbf { B }$ flips, which means $\mathbf { S } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { S } ( \mathbf { r } , - t )$. That is, energy now flows in the opposite direction. The time reverse of energy flowing out is energy flowing in.
Under parity, only $\mathbf { E }$ flips, which means $\mathbf { S } ^ { \prime } ( \mathbf { r } , t ) = - \mathbf { S } ( - \mathbf { r } , t )$. This is just the expected way a vector transforms under parity; directions are flipped.
(e) Under charge conjugation, both E and B flip, so the theta term stays the same.
Under both parity and time reversal, one of the fields flips sign, so the integral of the fields flips sign. We thus say the theta term is odd under $P$ and $T$.
Under the combined transformation $C P$, there is still one sign flip. But under $C P T$, there are two sign flips, so the theta term stays the same.
In theoretical physics, the theta term is interesting because it does not stay the same under $C P$. This is a rather unusual feature, as most of the rest of the terms in the Standard Model's Lagrangian stay the same, or approximately the same, under $C P$. On the other hand, it is a famous theorem that in any relativistic quantum field theory, everything has to stay the same under $C P T$.


## Remark

In E7, you learned that an accelerating particle emits electromagnetic radiation, and therefore loses energy. But under time reversal, an accelerating particle is still accelerating, so it still should lose energy. How can this be consistent with time reversal symmetry, which says the particle should instead gain energy?

The resolution is that when you apply time reversal, you need to time reverse everything. Suppose a particle accelerates at time $t = 0$ and emits a burst of radiation, which exists for $t > 0$. The time reverse of this process has radiation moving towards the particle at time $t < 0$, until at $t = 0$ it hits the particle and gets absorbed. The reason this seems unrealistic has nothing to do with the laws of electromagnetism, which treat both scenarios as equally valid, and everything to do with the second law of thermodynamics.
