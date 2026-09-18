---
id: physicscup-2023-p3
problem: physicscup-2023-p3
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Chung Wang Lam
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2023/PC3-best/Wang.pdf
selection_note: "Selected as the most concise of the top-rated solutions (LaTeX-compiled, 2 pp, flux-tube + incompressibility scaling argument). Kalda's comment grouped it with the joint-best solutions: \"All these solutions are clear and well-written.\""
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2023-p3-sol-1.png, physicscup-2023-p3-sol-2.png]
---

## Solution
*Student solution by Chung Wang Lam, transcribed faithfully from the LaTeX source. The competition published no official solution. The figures are the author's TikZ diagrams. ($\Phi_B$ denotes the magnetic flux; $B_i$, $B_f$ are the initial and final fields; $E_0$, $E$ the initial and final stored energies.)*

Consider a flux tube connecting the two spherical magnets. Its surface is parallel to the magnetic field lines, so the flux across any cross-section of the flux tube is a constant $\Phi_B$. Because of the symmetry of the system with respect to the line joining the centres of the spheres together, the flux tube is a solid of revolution about that line. We only care about the flux tubes that connect the two magnets because they are the ones that change the most significantly during the movement of the spheres and contribute to the force $F$.

![A flux tube of constant flux $\Phi_B$ connecting the two magnets; by symmetry it is a solid of revolution about the line of centres.](../../../../../sources/physicscup/figures/physicscup-2023-p3-sol-1.png)

At the initial state, the flux tubes are of the length $\sim R$. As the spheres are separated, they are stretched to a new length which is $\sim L$ (ignore the size of the spheres as $L \gg R$). However, as the particles in the fluid must move along the field lines (i.e. move parallel to them), and the liquid is incompressible, the total mass enclosed in a flux tube must be constant, so its total volume should not change. Hence, any cross-sectional area is multiplied by a factor of $\sim R/L$. By the constant magnetic flux, we have:

![Stretching of the flux tube from length $\sim R$ to $\sim L$ as the magnets are pulled apart; the dipole moments (arrows) stay parallel to the axis.](../../../../../sources/physicscup/figures/physicscup-2023-p3-sol-2.png)

$$ (A)B_i = \Phi_B \approx \left(A\cdot\frac{R}{L}\right)B_f \quad\Rightarrow\quad B_f \sim B_i\left(\frac{L}{R}\right) $$

Then, consider the energy inside the flux tubes. The volume of the tubes haven't changed, but the magnetic field has increased by a factor. Since $E \propto B^2$, so the final energy is given by

$$ E \sim E_0 \cdot \left(\frac{L}{R}\right)^2 $$

Where $E_0$ is the initial energy in the gap between the two spheres. But what is the initial energy? We can estimate it by considering that the intial magnetic field in the gap is of the order $\mu_0 m/R^3$ and the initial volume is $\sim R^3$.

$$ E_0 \approx \frac{B^2 V}{2\mu_0} \sim \frac{\mu_0^2 m}{R^3} \quad\Rightarrow\quad E\sim\frac{\mu_0 m^2 L^2}{R^5} $$

As the increased in the stored magnetic field energy is the major contribution to the force, we can write $F = -\mathrm{d}E/\mathrm{d}L$ to estimate the magnetic force magnitude to be approximately:

$$ \boxed{\;F \sim \frac{\mu_0 m^2 L}{R^5}\;} $$

---
*Re-derivation check (consistent): the flux-conservation + incompressibility chain reproduces the boxed result. Constant flux through a tube whose cross-section shrinks by $\sim R/L$ gives $B_f\sim B_i(L/R)$; the volume is preserved, so the stored energy $E\propto B^2 V$ grows by $(L/R)^2$. With the gap field $B_i\sim\mu_0 m/R^3$ and volume $\sim R^3$, the initial energy is $E_0\sim B_i^2 R^3/\mu_0\sim(\mu_0 m/R^3)^2 R^3/\mu_0=\mu_0 m^2/R^3$ (the author writes the intermediate as $\mu_0^2 m/R^3$, an evident typo for $\mu_0 m^2/R^3$; the final $E$ is correct). Hence $E\sim(\mu_0 m^2/R^3)(L/R)^2=\mu_0 m^2 L^2/R^5$, and $|{-\mathrm{d}E/\mathrm{d}L}|\sim\mu_0 m^2 L/R^5$, matching the box (order-of-magnitude only, as the problem requests an estimate). Dimensions check: $[\mu_0 m^2 L/R^5]=(\mathrm{T\,m/A})(\mathrm{A\,m^2})^2(\mathrm m)/\mathrm m^5=\mathrm{T\,A\,m^2}=\mathrm N$.*
