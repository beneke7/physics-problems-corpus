---
id: solution-ocr-kevin-zhou-e1sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 9
Since Newton's law of gravity is so similar to Coulomb's law, the results we've seen so far should have analogues in Newtonian gravity. What are they? For example, what's the gravitational Gauss's law?

Solution
The fundamental results to compare are

$$
F = - \frac { G m _ { 1 } m _ { 2 } } { r ^ { 2 } } , \quad F = \frac { q _ { 1 } q _ { 2 } } { 4 \pi \epsilon _ { 0 } r ^ { 2 } }
$$

where the minus sign indicates that the gravitational force is attractive, while the electrostatic force between like charges is repulsive. Then we can transform a question involving (only positive) electric charges to one involving masses if we map

$$
q \rightarrow m , \quad \frac { 1 } { 4 \pi \epsilon _ { 0 } } \rightarrow - G , \quad \mathbf { E } \rightarrow \mathbf { g } .
$$

Thus, while electrostatics is described by

$$
\nabla \times \mathbf { E } = 0 , \quad \nabla \cdot \mathbf { E } = \frac { \rho } { \epsilon _ { 0 } } , \quad \oint \mathbf { E } \cdot d \mathbf { S } = \frac { Q } { \epsilon _ { 0 } } ,
$$

the gravitational field is described by

$$
\nabla \times \mathbf { g } = 0 , \quad \nabla \cdot \mathbf { g } = - 4 \pi G \rho _ { m } , \quad \oint \mathbf { g } \cdot d \mathbf { S } = - 4 \pi G M
$$

where $\rho _ { m }$ is the mass density. Similarly, the potential energy can be written in two ways,

$$
U = \frac { 1 } { 2 } \int \rho _ { m } ( \mathbf { r } ) \phi ( \mathbf { r } ) d ^ { 3 } \mathbf { r } = - \frac { 1 } { 8 \pi G } \int | \mathbf { g } ( \mathbf { r } ) | ^ { 2 } d ^ { 3 } \mathbf { r }
$$

where $\phi ( \mathbf { x } )$ is the gravitational potential. This result was first written down by Maxwell.

Remark
Here's a philosophical question: is potential energy "real"? You likely think the answer is obvious, but about half of your friends probably think the opposite answer is obviously correct! In fact, in the 1700s, there was a lively debate over whether the ideas of kinetic energy and momentum, which at the time were given various other names, were worthwhile. Which one of the two was the true measure of motion? In our modern language, proponents of energy pointed out that the momentum always vanished in the center of mass frame, which made it "trivial", while supporters of momentum replied that kinetic energy was clearly not conserved in even the simplest of cases, like inelastic collisions.

In the 1800s, thermodynamics was developed, allowing the energy seemingly lost in inelastic collisions to be accounted for as internal energy. But there still remained the problem that


kinetic energy was lost in simple situations, such as when balls are thrown upward. By the mid-1800s, the modern language that "kinetic energy is converted to potential energy" was finally standardized, but it was still common to read in textbooks that potential energy was fake, a mathematical trick used to patch up energy conservation. After all, potential energy has some suspicious qualities. If a ball has lots of potential energy, you can't see or feel it, or even know it's there by considering the ball alone. It doesn't seem to be located anywhere in space, and its amount is arbitrary, as a constant can always be added.

In the late 1800s, a revolution in physics answered some of these questions. Maxwell and his successors recast electromagnetism as a theory of fields, and showed that the dynamics of charges and currents were best understood by allowing the fields themselves to carry energy and momentum. We'll cover this in detail in E7, but for now, it implies that electrostatic potential energy is fundamentally stored in the field, with a density of $\epsilon _ { 0 } E ^ { 2 } / 2$. This implies that its location and total amount are directly measurable.

Maxwell believed that the dynamics of fields emerged from the microscopic motions and elastic deformations of an all-pervading ether, in the same way that, say, a fluid's velocity field emerges from the average motion of fluid molecules. This makes it manifestly positive, so he was disturbed to find that the energy density of a gravitational field is negative! He therefore concluded that gravity could not be described as a vector field.

A few decades later, the arrival of special relativity answered some questions and reopened others. On one hand, it demolished Maxwell's vision of the ether. On the other hand, it finally answered the question of whether all kinds of potential energy are "real", and it got rid of the freedom to add arbitrary constants. That's because in special relativity, the total energy of a system at rest is related to its mass by $E = m c ^ { 2 }$, and the mass is directly measurable. This finally puts thermal energy, elastic potential energy, and field energy on an equal footing.

Here's the most modern view of energy conservation. All particles and their interactions are fundamentally described by relativistic quantum fields. A famous result called Noether's theorem implies that whenever such a theory is time-translationally symmetric, there is a conserved quantity which we call the energy. (The distinction between kinetic and potential energy becomes irrelevant; it's all just energy.) The density of energy in space can be computed from the state of the fields, but it doesn't need to be explained, as Maxwell imagined, by the internal motion of whatever the fields are made of. The fields are fundamental: they aren't made of anything; instead, they make up everything!

What happens when we throw gravity into the mix? As we'll discuss further in R3, it turns out that at nonrelativistic velocities, the dynamics of gravitating particles can be described by "gravitoelectromagnetism", a theory closely analogous to electromagnetism, where moving masses also source "gravitomagnetic" fields $\mathbf { B } _ { g }$, which result in $m \mathbf { v } \times \mathbf { B } _ { g }$ forces. But the situation gets much more subtle when we upgrade to full general relativity. Here, the notion of a gravitational field disappears completely, and is replaced by the curvature of spacetime, making it hard to define an energy density for it at all. For an accessible overview of the debate, see this paper. Ultimately, though, it doesn't matter that much, since it doesn't


impair our ability to use either Newtonian gravity or general relativity.

Example 10
For an infinite line of linear charge density $\lambda$, find the potential $V ( r )$ by dimensional analysis.

Solution
This example illustrates a famous subtlety of dimensional analysis. The only quantities in the problem with dimensions are $\lambda , \epsilon _ { 0 }$, and $r$. To get the electrical units to balance, we have

$$
V ( r ) = \frac { \lambda } { \epsilon _ { 0 } } f ( r )
$$

where $f ( r )$ is a dimensionless function. But there are no nontrivial dimensionless functions of a single dimensionful quantity $r$. The only possibilities are that $f ( r )$ is a dimensionless constant, or that $f ( r )$ is infinite. In the first case, the electric field would vanish, which can't be right. In the second case, it is unclear how to calculate the electric field at all.

In fact, the electric potential is infinite, if you insist on the usual convention of setting $V ( \infty ) = 0$. In that case, we have

$$
V ( r ) = \int _ { r } ^ { \infty } E ( r ) d r = \int _ { r } ^ { \infty } \frac { \lambda } { 2 \pi \epsilon _ { 0 } } \frac { d r } { r } = \infty
$$

for any $r$. But this is useless; to get a finite result we can actually work with, we need to subtract off an infinite constant from the potential. Equivalently, we need to set the potential to be zero at some finite distance $r = r _ { 0 }$. This is a very simple example of renormalization, which is an important concept in modern physics. We then have

$$
V ( r ) = \int _ { r } ^ { r _ { 0 } } E ( r ) d r = \frac { \lambda } { 2 \pi \epsilon _ { 0 } } \log \frac { r _ { 0 } } { r }
$$

which is perfectly consistent with dimensional analysis.
Notice that in the process of renormalization, a new dimensionful quantity $r _ { 0 }$ appeared out of nowhere. This phenomenon is known as dimensional transmutation. Nothing measurable depends on this new scale (e.g. the electric field is independent of $r _ { 0 }$ ), but you can't write down quantities like the potential without it.

## 4 Conductors

Idea 9
In electrostatic conditions, $\mathbf { E } = 0$ inside a conductor, which implies the conductor has constant electric potential $V$. This then implies that $\mathbf { E }$ is always perpendicular to a conductor's surface. By Gauss's law, the conductor has $\rho = 0$ everywhere inside, so all charge resides on the surface.


By example 7, the outward pressure on the charges at the surface of a conductor is $\sigma ^ { 2 } / 2 \epsilon _ { 0 }$.

Example 11
Is the charge density at the surface of a charged conductor usually greater at regions of higher or lower curvature?

Solution
We can't answer this question in general, because it is usually impossible to solve for the charge distribution of an irregularly shaped conductor. Charges at any point in the conductor will influence the charges everywhere else.

However, we can get some insight by considering the limiting case of a conductor made of two spheres of radii $R _ { 1 }$ and $R _ { 2 }$, connected by a very long rod. For the potential to be the same at both spheres, we must have $Q _ { 1 } / R _ { 1 } = Q _ { 2 } / R _ { 2 }$, so the charge is proportional to the radius, and the charge density is inversely proportional to the radius. Thus, there's generally higher charge density at sharper points of the conductor, provided that those points are sharp enough, or far enough away from the rest of the conductor for the charges on the rest of the conductor not to matter much. That's basically all we can say for sure.
[2] Problem 22. Is it possible for a single solid, isolated conductor with a positive total charge to have a negative surface charge density at any point on it? If not, prove it. If so, sketch an example.

Solution. No. Note that the surface of the conductor has a constant, positive potential. Now suppose there was a region with negative charge on the conductor, and consider a field line that ends on such a charge. It can't have come from infinity, because the potential at infinity is lower than that of the conductor. And it can't have come from elsewhere on the conductor, because the conductor is an equipotential. This yields a contradiction.

Idea 10: Existence and Uniqueness
Here's an important mathematical fact: suppose the function $\phi$ is defined on some volume $V$ with boundary $S$, and obeys $\nabla ^ { 2 } \phi = 0$ everywhere in $V$. Also suppose we specify either the value of $\phi$ or the value of $\nabla \phi \cdot \hat { \mathbf { n } }$ on every point of $S$, where $\hat { \mathbf { n } }$ is the normal vector to the surface; these are called Dirichlet and Neumann boundary conditions, respectively. Then there always exists a solution for $\phi$, and as long as at least one boundary condition is Dirichlet, the solution is unique. (If none are Dirichlet, we are free to add a constant to $\phi$.) A proof of this statement is given in section 2.4.2 here.

To translate this mathematical statement to something useful for physics, suppose $\phi$ is the electric potential in an electrostatic problem. This determines the electric field by $\mathbf { E } = - \nabla \phi$. The condition $\nabla ^ { 2 } \phi = 0$ is just equivalent to $\nabla \cdot \mathbf { E } = 0$, which implies $\rho = 0$ by Gauss's law. In addition, $\nabla \phi \cdot \hat { \mathbf { n } }$ is equal to $- \mathbf { E } \cdot \hat { \mathbf { n } }$. Finally, adding a constant to $\phi$ doesn't affect E.

Using these facts gives the following translation: suppose there is a volume $V$ containing no charge density, and either the electric potential or the outward electric field $\mathbf { E } \cdot \hat { \mathbf { n } }$ is specified


everywhere on its boundary $S$. Then there is a unique solution for E in $V$.
