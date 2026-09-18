---
id: physicscup-2024-p1
problem: physicscup-2024-p1
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Nick Hartmann
solution_source_url: https://physicscup.ee/wp-content/uploads/2024/01/PhysicsCup_24_P1_Hartmann.pdf
selection_note: "Selected over the top-ranked Karan solution (6 pp with a table of contents, multi-phase analysis and a uniqueness-theorem appendix) as a shorter, more elegant LaTeX-compiled write-up (3 pp) that follows Kalda's hints directly via the superconductor/added-mass analogy. Kalda's comment: the solutions of Hartmann and Maksimović 'show a good theoretical and data analysis parts and are therefore also published, earning both of them 0.1 bonus.'"
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2024-p1-sol-1.png]
---

## Solution
*Student solution by Nick Hartmann, transcribed faithfully from the LaTeX source. The competition published no official solution. Notation: $\rho_W$ is the density of water, $\rho_c$ the cylinder density, $D=2R$ the cylinder diameter, $H$ its height; $v_0$, $v_1$ are the cylinder speeds just before and just after hitting the water. The author works throughout via the analogy between an irrotational ideal-flow velocity field and the field around a superconductor.*

### 1. Added mass of a thin disk of radius $R$

Following the given hints, we first calculate the added mass of a thin disk of radius $R$. As suggested, we compute the magnetic polarizability of a superconducting ellipsoid. The magnetic susceptibility of an ideal diamagnet is $\chi=-1$. The velocity field of the liquid can be mapped to the magnetic field of the superconductor, since the field is curl- and divergence-free and tangential to the surface of the body. The kinetic energy of the water is then given by the energy of the magnetic field.

If we place the superconductor into a homogeneous magnetic field $\vec B_0(\vec r)$, due to surface currents a field $\vec B_s(\vec r)$ is created, which is homogeneous inside the superconductor and compensates the external field inside the superconductor. We need the kinetic energy of the fluid in the rest frame, where we subtract the velocity field relative to the body, which is identified with $\vec B_0(\vec r)$.

We would need to exclude the energy of the magnetic field inside the superconductor, but since we take the limit of a thin disk, this contribution also vanishes.

Following the hint, we assume that a homogeneously polarized ellipsoid creates a homogeneous field inside itself. (There are multiple ways to show this, e.g. by brute-force calculation of the volume integral over all infinitesimal magnetic dipole contributions. We take this as given.)

We obtain the field energy by
$$ E_m = \tfrac{1}{2}\,\vec m\cdot\vec B_0, \tag{1} $$
which can be depicted by turning small magnets in the body, which needs an energy of $\vec m_0\cdot\vec B(t)$ per magnet. The magnetization scales with the magnetic field, so we get a factor $1/2$ if we integrate from $0$ to $B_0$. The magnetic moment of the ellipsoid is given by
$$ \vec m = V_{\text{ellipsoid}}\,\vec M = \tfrac{4}{3}\pi R^2 h\,\vec M, \tag{2} $$
where $h$ is the height; in the limit of small $h$ the ellipsoid becomes a thin disk of radius $R$.

We have to calculate $\vec B_0$ for a given constant magnetization $\vec M = M\hat e_z$ of the ellipsoid. Since the magnetic field is homogeneous, we simply choose the center of the ellipsoid. Consider all points with distance $r$ to the axis of the magnetization through the center of the ellipsoid. The surface density of the magnetization $J(r)=M\,d(r)$ can be evaluated by calculating the thickness $d$:
$$ \left(\frac{r}{R}\right)^2 + \left(\frac{z}{h}\right)^2 = 1 \quad\Leftrightarrow\quad d(r)=2z=2h\sqrt{1-\left(\frac{r}{R}\right)^2}. \tag{3} $$

Ampère's law in differential form gives us the magnetization current density, where we assume that now the thin disk has a magnetization $\vec J = J(r)\delta(z)\hat e_z$:
$$ \vec j_m = \vec\nabla\times\vec J. \tag{4} $$
The curl for a vector field $\vec A = f\!\left(\sqrt{x^2+y^2}\right)\delta(z)\hat e_z$ with only $z$-components is given by $\vec\nabla\times\vec A = \frac{\partial A_z}{\partial y}\hat e_x - \frac{\partial A_z}{\partial x}\hat e_y = \frac{\partial f(r)}{\partial r}(-\hat e_\phi)\delta(z)$. Then
$$ \vec j_m(r) = -\frac{\partial}{\partial r}J(r)\,\hat e_\phi = \frac{2hM\delta(z)}{R}\,\frac{r/R}{\sqrt{1-(r/R)^2}}\,\hat e_\phi. \tag{5} $$

This result shows that we can think of the magnetization as realized by ring currents around the center of the disk. But we know that the magnetic field in the center of a ring current in the $xy$-plane with radius $r$ is given by $\vec B = B\hat e_z$ with
$$ B = \frac{\mu_0 I}{2r}. \tag{6} $$
If we now integrate over all contributing ring currents (i.e. the current density), we obtain the result
$$ B_0 = \int_0^R \frac{\mu_0 j_m(r)}{2r}\,\mathrm dr = \frac{\mu_0 Mh}{R}\int_0^1 \frac{1}{\sqrt{1-x^2}}\,\mathrm dx \stackrel{x=\sin\theta}{=} \frac{\mu_0 Mh}{R}\int_0^{\pi/2}\mathrm d\theta = \frac{\mu_0\pi Mh}{2R} = \frac{3}{8}\frac{\mu_0 m}{R^3}. \tag{7} $$
$$ E_m = \tfrac{1}{2}\,\vec m\cdot\vec B_0 = \frac{1}{\mu_0}\,\frac{1}{2}\,\frac{8}{3}\,R^3 B_0^2. \tag{8} $$

For a velocity field we would obtain $E=\tfrac12 m_{\text{add}}v_0^2$; we now have to replace the energy per unit volume and unit of the field $\frac{1}{2\mu_0}$ in the case of the magnetic field by the corresponding term for a velocity field, namely the mass density $\tfrac12\rho$, in our case the density of water. We arrive at the final expression for the added mass of a thin disk of diameter $D=2R$ completely surrounded by water:
$$ m_{\text{add}} = \frac{8}{3}\rho_W R^3 = \frac{1}{3}\rho_W D^3. \tag{9} $$

### 2. Extract measurements from the video

Using the open-source software *Tracker* by Physlets, I measure the velocity before and after hitting the surface as well as the radius-to-height ratio of the cylinder. In Figure 1 I show some screenshots of the program. Since the frame rate is high, we can neglect the gravity acceleration of the mass and do just a linear fit to the height values. That this fit works sufficiently is seen in the lower plots.

The following results were obtained, where the error is roughly estimated by the fit or the hand-measurement of the height and width:
$$ v_0 = (8.36\pm0.08) \tag{10} $$
$$ v_1 = (5.5\pm0.5) \tag{11} $$
$$ H = (0.40\pm0.01) \tag{12} $$
$$ D = (0.98\pm0.01) \tag{13} $$
As already stated in the hint, the measurement of $v_1$ is quite complicated, since it is based only on 3 frames. This might result in a significant error on the result.

![Figure 1: Screenshots of the Tracker software. (a) shows the tracked points; for this the upper left edge of the cylinder was used. (b) shows the height and width measurement. (c) shows the linear fit for the velocity before hitting the water and (d) shows the fit for the velocity after hitting the water.](../../../../../sources/physicscup/figures/physicscup-2024-p1-sol-1.png)

### 3. Momentum conservation law

Finally, we apply the momentum conservation law. The momentum of the cylinder before it hits the water is $p_0 = m_c v_0$, where $m_c = \rho_c H\pi\left(\frac{D}{2}\right)^2$ is the mass of the cylinder. After the lower side of the cylinder (a thin disk) hits the water, also the momentum of the water that is now in motion has to be considered. As explained in the hint, the impact is plastic and the excess energy is carried away by a shock wave in the water. The energy-to-momentum ratio is given by the speed of sound in water, which is much higher than the cylinder speed. Thus it can be neglected. Also, only the space below the cylinder is covered by water, the upper half space is covered by air. Since air is significantly lighter than water, we can neglect the contribution and have to use only half of the added mass we obtained before. Note that this is, as explained in the other hints, only an approximation for the short times after the cylinder hits the water. Almost immediately, the water surface is not perfectly flat anymore and the cylinder gets more and more immersed. However, directly after the impact the momentum of the cylinder and the water that was set into motion by the impact can be calculated by
$$ p_1 = \left(m_c + \frac{m_{\text{add}}}{2}\right)v_1. $$

Using that the momentum is conserved, $p_0 = p_1$, we arrive at the following expression for the density of the cylinder:
$$ \boxed{\;\rho_c = \frac{2}{3\pi}\frac{D}{H}\,\rho_W\left(\frac{v_0}{v_1}-1\right)^{-1}.\;} \tag{14} $$

### 4. Result

Inserting the measured values we arrive at the final estimate of the density of the cylinder:
$$ \boxed{\;\rho_c = (1.0\pm0.2)\,\rho_W = (1.0\pm0.2)\ \mathrm{g/mm^3}.\;} \tag{15} $$
The error is estimated by Gaussian error propagation and $\rho_W\approx 1\ \mathrm{g/mm^3}$. As explained before, the error on the density estimate is very high due to the difficulty of measuring $v_1$.

---
*Re-derivation check (consistent): the added mass follows from $m_{\text{add}}=\tfrac{8}{3}\rho_W R^3=\tfrac{8}{3}\rho_W(D/2)^3=\tfrac13\rho_W D^3$, matching (9). Momentum conservation $m_c v_0=(m_c+m_{\text{add}}/2)v_1$ with $m_c=\rho_c\pi H D^2/4$ and $m_{\text{add}}/2=\tfrac16\rho_W D^3$ gives $\rho_c\tfrac{\pi H D^2}{4}(v_0/v_1-1)=\tfrac16\rho_W D^3$, i.e. $\rho_c=\tfrac{2}{3\pi}\tfrac{D}{H}\rho_W(v_0/v_1-1)^{-1}$, reproducing (14). Numerically, $v_0/v_1-1=8.36/5.5-1=0.520$, $\tfrac{2}{3\pi}=0.2122$, $D/H=2.45$, so $\rho_c=0.2122\times2.45/0.520\,\rho_W=1.00\,\rho_W$, reproducing (15). The superconductor/added-mass analogy and the homogeneous-internal-field lemma are the author's (taken as given per Kalda's hints).*
