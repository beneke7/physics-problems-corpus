---
id: solution-ocr-kevin-zhou-mrevsol-p029
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-mrev-p029]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 29. [A] The Navier-Stokes equation, governing the velocity $\mathbf { v } ( \mathbf { x } , t )$ of an incompressible fluid of density $\rho$ and dynamic viscosity $\mu$, are

$$
\frac { \partial \mathbf { v } } { \partial t } + ( \mathbf { v } \cdot \nabla ) \mathbf { v } = - \frac { 1 } { \rho } \nabla P + \frac { \mu } { \rho } \nabla ^ { 2 } \mathbf { v } .
$$

Let's consider a fixed fluid, with a given $\rho$ and $\mu$, and see how potential solutions to this equation behave under symmetry transformations.

(a) Given a velocity $\mathbf { v } ( \mathbf { x } , t )$, we can define a time-reversed velocity profile $\mathbf { v } ^ { \prime } ( \mathbf { x } , t ) = - \mathbf { v } ( \mathbf { x } , - t )$. If we replace v with v ${ } ^ { \prime }$ in the above equation, then the $\partial \mathbf { v } / \partial t$ term stays the same, because both the sign of the velocity and the sign of the time derivative get flipped. Show that among the other three terms, two of them stay the same and one flips sign, and interpret your result.

We can schematically describe the above transformation as " $t \rightarrow - t$ and $\mathbf { v } \rightarrow - \mathbf { v }$ ". Next, we'll consider a scaling, which simultaneously takes $\mathbf { x } \rightarrow \lambda \mathbf { x }$ and $t \rightarrow \lambda ^ { 2 } t$.

(b) Find how this scaling affects $\mathbf { v } , P$, time derivatives, and space derivatives.
(c) Show that under this scaling, all the terms in the Navier-Stokes equation scale as $\lambda ^ { - n }$, for some integer $n$. This shows that the Navier-Stokes equation has scale symmetry: if something can happen in a fluid, then it can also happen at a scale 2 times larger and 4 times slower.

Remarkably, part (c) explains why there aren't many additional terms in the Navier-Stokes equation! In principle there must be terms with more time or space derivatives, since the microscopic dynamics of a fluid are very complex. However, all such terms would be suppressed by more than $\lambda ^ { - n }$ as we scale a solution up, which means that they wouldn't have any significant effect on macroscopic scales. The Navier-Stokes equation contains precisely the terms that remain relevant.

Solution. (a) The other term on the left-hand side gets two sign flips, because it has two powers of v. On the right-hand side, the fluid properties $\rho$ and $\mu$ stay the same, as does the pressure $P$, so the $\nabla P$ term is unchanged, while the $\nabla ^ { 2 } \mathbf { v }$ term flips sign. The interpretation is that viscosity is the only effect in the equations that cares about the direction of time, because it arises from dissipation and thus has a direction set by the second law of thermodynamics. In the absence of viscosity, the dynamics of a fluid are time reversal symmetric.

(b) Since $\mathbf { v }$ is a distance per time, it must scale as $\mathbf { v } \rightarrow \lambda ^ { - 1 } \mathbf { v }$. The spatial derivative transforms in the opposite way as the space: if a configuration gets stretched out, then its change per length is smaller, so its derivative gets smaller. Thus we conclude $\nabla \rightarrow \lambda ^ { - 1 } \nabla$, and by similar reasoning $\partial / \partial t \rightarrow \lambda ^ { - 2 } \partial / \partial t$.
Pressure is the tricky one. You can find it by thinking about how pressure emerges in kinetic theory, or by dimensional analysis: $P / \rho$ is a speed squared, and $\rho$ is fixed, so $P \rightarrow \lambda ^ { - 2 } P$.
(c) By plugging in our results to part (b), it's straightforward to show $n = 3$.
