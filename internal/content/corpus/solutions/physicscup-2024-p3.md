---
id: physicscup-2024-p3
problem: physicscup-2024-p3
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Luka Passek-Kumerički
solution_source_url: https://physicscup.ee/wp-content/uploads/2024/P3-best-solutions/Problem3LukaPassek-Kumericki.pdf
selection_note: "Selected as the top-ranked candidate (LaTeX-compiled, 4 pp). Kalda's comment: a nice solution with the sphere's magnetization derived from the electric-magnetic equivalence based on the electric field inside a homogeneously magnetized ball. Self-contained: includes an appendix proving the uniform internal / dipole external field of a magnetized sphere."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2024-p3-sol-1.png]
---

## Solution
*Student solution by Luka Passek-Kumerički, transcribed faithfully from the LaTeX source. The competition published no official solution. Notation: $\mathbf{m}$ is the magnet's moment, $\mathbf{M}$ a magnetization, $\chi_m$ the magnetic susceptibility, $\mathbf{H}$ the auxiliary field, $t$ the plate thickness, $\rho$ in the final part the material density (and $\rho,\hat\rho$ the cylindrical radial coordinate in the appendix). The figure is the author's diagram.*

In the presence of the magnetic field of the permanent magnet, the scrap pieces will be magnetized. The interaction of the induced magnetization with the magnet's field will produce a force since the field is inhomogenous. The interaction energy of a magnetic dipole $\mathbf{m}$ in an external field $\mathbf{B}$ is $-\mathbf{m}\cdot\mathbf{B}$. If we denote the magnet's field $\mathbf{B}_0$, the force in the $z$ direction can be calculated as
$$ F_z = -\int_V \frac{\partial}{\partial z}\left(-d\mathbf{m}\cdot\mathbf{B}_0\right) = \int_V M\,\frac{\partial B_0}{\partial z}\,dV \tag{1} $$
where the integration is over the volume $V$ of the scrap particle and $M$ is its magnetization.

For finding the field of the permanent spherical magnet and the magnetization of the spherical particles the following fact will be used: the field outside of a homogeneously magnetized spherical magnet is equal to that of an ideal magnetic dipole of magnetic moment equal to that of the sphere and is homogenous inside it where it is identically equal
$$ \tfrac{2}{3}\mu_0 M \tag{2} $$
The proof is given in the appendix.

Let the magnetic moment of the permanent magnet be $\mathbf{m} = -m\hat z$ and let its center be the origin of the coordinate system. Its field is then given as
$$ \mathbf{B}_0(\mathbf{r}) = \frac{\mu_0}{4\pi}\frac{1}{r^3}\left[3(\mathbf{m}\cdot\hat r)\cdot\hat r - \mathbf{m}\right] \tag{3} $$
The exact form is not of deciding importance but what is important is that is falls of as $1/r^3$ and that it is directed in the same direction as the magnetic moment everywhere on the symmetry axis.

Since the particles are small with respect to their distance from the magnet and because the particles directly under the magnet will get lifted the easiest, we may take only the lowest terms in the expansion of $\mathbf{B}_0$ around the position of the particles in this limit. In fact, in calculating the magnetization, we will keep only the first term — we will regard the magnetizing field to be homogenous.

We presume that the field at the particle's position is well bellow the values needed for saturation so that the relative permeability can be taken to be independent of the field strength. In other words, we presume constant permeability. The magnetization $\mathbf{M}$ is then related to the total field as
$$ \mathbf{M} = \chi_m \mathbf{H} = \frac{\chi_m}{\mu_0(1+\chi_m)}\mathbf{B} \tag{4} $$
Because of linearity we may therefore assume that due to the small size of the particles the contributions to total magnetization from higher order terms in $\mathbf{B}_0$ are negligible.

The magnetization of a sphere due to a homogenous field can be calculated using the fact that the field due to the magnetization of a homogeneously magnetized sphere is homogenous as well. Obviously, the induced magnetization will be homogenous. The total field is therefore the sum of the external field and the field due to magnetization (Eq. 2)
$$ \mathbf{B} = \mathbf{B}_0 + \tfrac{2}{3}\mu_0\mathbf{M} \tag{5} $$
Using eq. 4 we arrive at
$$ M_{\mathrm{sph}} = \frac{3\chi_m}{3+\chi_m}\frac{B_0}{\mu_0} \approx 3\frac{B_0}{\mu_0} \tag{6} $$
where we have approximated using the fact that $\chi_m \gg 1$ in ferromagnetic materials.

The magnetization of a thin plate due to a homogenous field can also be taken to be homogenous up to first order and the field is effectively unchanged within it by the magnetization's field. To see why we may regard the process of magnetization as an iterative process. The external field $\mathbf{B}_0$ induces homogenous magnetization $M_0 = \chi_m B_0/\mu_0(1+\chi_m) \approx B_0/\mu_0$ which in turn produces the field $\mathbf{B}_1$ in addition to $\mathbf{B}_0$, which then induces magnetization $\mathbf{M}_1$ and so on[^1]. The total field will be $\mathbf{B} = \sum_{n=0}^{\infty}\mathbf{B}_n$ and the total magnetization $\mathbf{M} = \sum_{n=0}^{\infty}\mathbf{M}_n$. We will however show that in the case of a thin plate only the $M_0$ term is appreciable.

[^1]: Courtesy of linearity.

Since $\mathbf{M}_0$ is homogenous, its effect is that of a surface current density $\mathbf{K}_0$ along the edge of the plate,
$$ \mathbf{K}_0 = \mathbf{M}_0\times\hat n \;\Rightarrow\; K_0 \approx M_0 \tag{7} $$
The field this current produces is of order $\mu_0 K_0 = \mu_0 M_0 = B_0$ very close to the edge but at any appreciable distance from the edge with respect to the width $t$ of the plate, the surface current looks like a line current of magnitude $I = K_0 t = M_0 t$ which produces a negligible field within the plate for small enough $t$. The term $M_1$ will therefore be a very thin ring of magnetization of magnitude of the same order as $M_0$ which produces a comparatively extremely small field in the neighbourhood of the edge. It is therefore expected that the total magnetization $\mathbf{M}$ will differ somewhat from $\mathbf{M}_0$ only in a very thin ring around the edge of the plate. For thin enough plates we can therefore disregard the higher order contributions to $M$ than $M_0$ when calculating the force.
$$ M_{\mathrm{plt}} \approx \frac{B_0}{\mu_0} \tag{8} $$

It remains to determine $\frac{\partial B_0}{\partial z}$. Again, we may take only the first order contribution in the expansion of $\frac{\partial B_0}{\partial z}$ around the position of the particle $\mathbf{r}_0 = -r_0\hat z$. Because of azimuthal symmetry in the permanent magnet's field $\frac{\partial B_0}{\partial z}$ will be in the $-\hat z$ direction and its magnitude will be proportional to $\frac{m}{r^4}$. From eq. 3 it can be calculated to be
$$ \frac{\partial B_0}{\partial z}\bigg|_{r_0} = -\frac{6\mu_0 m}{4\pi r_0^4}\hat z \tag{9} $$
The field at $\mathbf{r}_0$,
$$ \mathbf{B}_0(r_0) = -\frac{\mu_0 m}{2\pi r_0^3}\hat z \tag{10} $$

Using eq. 1, the force on a sphere under the magnet is then
$$ F_z = \int_V M\cdot\frac{\partial B_0}{\partial z}\,dV = \int_V \frac{3}{\mu_0}\left(\frac{\mu_0 m}{2\pi r_0^3}\right)\left(\frac{6\mu_0 m}{4\pi r_0^4}\right)dV \tag{11} $$
$$ \Rightarrow \left(\frac{dF_z}{dV}\right)_{\mathrm{sph}} = \frac{9\mu_0 m^2}{4\pi^2 r_0^7} \tag{12} $$
The force on a plate (the only difference being 3 times smaller magnetization),
$$ \left(\frac{dF_z}{dV}\right)_{\mathrm{plt}} = \frac{3\mu_0 m^2}{4\pi^2 r_0^7} \tag{13} $$
In order to lift the particles, the force per volume needs to be equal to $\rho g$, where $\rho$ is the material's density and $g$ is gravitational acceleration.
$$ \left(\frac{dF_z}{dV}\right)_{\mathrm{sph}}(-b\hat z) = \left(\frac{dF_z}{dV}\right)_{\mathrm{plt}}(-a\hat z) \tag{14} $$
$$ \frac{3}{b^7} = \frac{1}{a^7} \tag{15} $$
$$ \boxed{\; b = \sqrt[7]{3}\,a \;} \tag{16} $$

## Appendix

In order to prove that the magnetic field inside the magnetized ball of homogenous magnetization $\mathbf{M}$ is homogeneous we are going to take inspiration form an analogous electrostatic problem. Firstly, since $\nabla\cdot\mathbf{B} = 0$, we have $\nabla\cdot\mathbf{H} = -\nabla\cdot\mathbf{M}$ where $\mathbf{H}$ is the auxiliary field. Also, because $\nabla\times\mathbf{H} = 0$, as there aren't any free currents, we conclude, by analogy with electrostatics, that the field $\mathbf{H}$ is a field analogous to $\mathbf{E}$ with $-\nabla\cdot\mathbf{M}$ being its source density analogous to charge density. Furthermore, we may introduce a potential $\phi_h$ of the field, $\mathbf{H} = -\nabla\phi_h$. In the case of our sphere, the only points where $\nabla\cdot\mathbf{M}$ doesn't vanish are on the ball's surface where via Gauss' law we find an effective source surface density $\hat n\cdot\mathbf{M}$. The problem is analogous to a homogeneously polarized ball of polarization $\mathbf{P}$ if we simply replace $\mathbf{H}\leftrightarrow\mathbf{E}$ and $\mathbf{M}\leftrightarrow\mathbf{P}$. This inspires us to find $\mathbf{H}$ inside the sphere via the famous displaced homogeneously charged balls trick.

The equivalent source distribution is achieved in a superposition of two infinitesimally displaced uniformly charged balls of opposite source (charge) densities of magnitude $M/d$ where $d$ is the displacement which is in the direction $\mathbf{M}$ and which points from the center of the ball of negative source density to the center of the ball with positive source density. The two source densities cancel at points inside both balls and for small $d$ only a thin layer of source density remains on the surface. If we regard only a small segment of area at the surface whose radius vector from the ball's center closes an angle $\theta$ with the vertical direction along which $\mathbf{M}$ is directed (Fig. 1b), it is easy to see that its surface source density is
$$ \frac{\cos\theta\,dA}{A}\frac{Md}{d} = \cos\theta\,M = \hat n\cdot\mathbf{M} \tag{17} $$
The field produced inside the balls can be found via Gauss' law,
$$ H_+ = \frac{1}{4\pi}\frac{M}{d}r_1\pi\frac{4}{3}\Big/\Big(\frac{r_1^3}{3}\Big) = \frac{4\pi M}{3d}\mathbf{r}_1 \tag{18} $$
$$ H_- = -\frac{4\pi M}{3d}\mathbf{r}_2 \tag{19} $$

![Figure 1: (a) the two infinitesimally displaced source balls (positive and negative); a field point at vector distances $r_1$ and $r_2$ from their centers. (b) a small surface segment of area $A$, slab thickness $d$, whose radius vector makes angle $\theta$ with the magnetization direction.](../../sources/physicscup/figures/physicscup-2024-p3-sol-1.png)

where $H_+$ and $H_-$ are the fields produced by the positive and negative source ball respectively and $r_1$ and $r_2$ are the distances of a point from the centers of the positive and negative ball respectively (Fig. 1a).
$$ \mathbf{r}_1 = (z - d/2)\hat z + \rho\hat\rho \tag{20} $$
$$ \mathbf{r}_2 = (z + d/2)\hat z + \rho\hat\rho \tag{21} $$
The total field is then
$$ \mathbf{H} = H_+ + H_- = -\frac{M}{3}\hat z \tag{22} $$
In the limit of $d = 0$, the $\mathbf{H}$ field is homogenous everywhere inside the magnetized ball and the magnetic field $\mathbf{B}$ is
$$ \mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M}) = \tfrac{2}{3}\mu_0\mathbf{M} \tag{23} $$
A potential $\phi_h$ corresponding to the field inside the ball is
$$ \phi_h = \frac{Mz}{3} = \frac{\mathbf{M}\cdot\mathbf{r}}{3} = \frac{\mathbf{m}\cdot\mathbf{r}}{4\pi R^3} \tag{24} $$
where $\mathbf{r}$ is the radius vector from the center, $m = 4R^3\pi M/3$ is the total magnetic moment of the ball and $R$ is the radius of the ball. On the surface of the ball this potential corresponds to the potential produced by a dipole $\mathbf{m}$ in the center
$$ \phi_h = \frac{\mathbf{m}\cdot\mathbf{r}}{4\pi r^3} \tag{25} $$
But by analogy with electrostatics, this potential solves the Laplace equation $\nabla^2\phi_h = 0$ outside the ball so it must be the potential produced by the ball outside of it. Since outside $\mathbf{B} = \mu_0\mathbf{H}$, the ball produces a field equal to that of a single magnetic dipole at its center outside.

---
*Re-derivation check (consistent): the result rests purely on a scaling argument. For both shapes $M\propto B_0\propto m/r_0^3$ (eq. 6, 8) and $\partial_z B_0\propto m/r_0^4$ (eq. 9), so the lifting force density is $dF_z/dV\propto m^2/r_0^7$ for each. The sphere gets the extra factor $3$ in $M$ relative to the plate (eq. 6 vs. 8), giving $(dF_z/dV)_{\mathrm{sph}}/(dF_z/dV)_{\mathrm{plt}} = 3$ at equal $r_0$ (eq. 12/13). Lifting requires $dF_z/dV=\rho g$, so the heights satisfy $3/b^7 = 1/a^7$, i.e. $b = 3^{1/7}a \approx 1.170\,a$ — the magnet lifts the spheres from a slightly greater height, matching the author's boxed result. The internal-field factor $\tfrac23\mu_0 M$ and the dipole exterior (appendix) reproduce the standard uniformly-magnetized-sphere result.*
</content>
</invoke>
