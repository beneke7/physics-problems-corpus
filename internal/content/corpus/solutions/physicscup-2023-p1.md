---
id: physicscup-2023-p1
problem: physicscup-2023-p1
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Vlad-Ștefan Oros
solution_source_url: https://physicscup.ee/wp-content/uploads/2023/02/Vlad-Stefan.pdf
selection_note: "Top-ranked published solution (LaTeX-compiled; only ~4 pp of actual content behind a title + contents page). Kalda's comment: \"well written, good analysis of the process, including the analysis of the added mass.\""
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Vlad-Ștefan Oros, transcribed faithfully from the LaTeX source. The competition published no official solution. Notation: $r$ is the radial distance from the cylinder axis, $z$ the height above the container floor, $u$ the downward speed of the cylinder, $z_c$ the $z$-coordinate of the cylinder's base, and $v_r(r)$ the radial water velocity.*

### Qualitative description

Everything is radially symmetric about the cylinder axis, so we work in the two coordinates $r$ (radial distance from the axis) and $z$ (height above the floor). Viscosity is neglected, which lets us use energy conservation.

#### Beneath the cylinder

As it falls, the cylinder sets the water beneath and around it into motion.

- By incompressibility, the liquid beneath the cylinder acquires an outward radial velocity that carries away the water displaced by the descending cylinder. Let this radial velocity be $v_r(r)$ (it also depends on $z$, but that dependence is shown below to be negligible). Volume conservation for the water leaving a cylinder of radius $r$ and height $z_c$ beneath the solid cylinder gives
$$ \pi r^2 u = 2\pi r z_c\, v_r(r) \implies v_r(r) = \frac{r}{2z_c}u. \tag{1} $$
We know $\rho_w R \gg 10\rho_c h$, while $\rho_c > \rho_w$ and $h \ge z_c$, so $R \gg 10h > 10z_c$. Meanwhile $r\in[0,R]$, which means that for almost all[^1] values of $r$, $v_r(r) \gg u$.

[^1]: This means that the set of values of $r$ for which the above is false is quantitatively insignificant.

- What about the vertical water velocity and the $z$-dependence of $v_r$? The vertical velocity of the water is no larger than $u$ in magnitude — it is $-u$ exactly at the bottom edge of the cylinder and tapers to $0$ at $z=0$. The general incompressibility condition is
$$ \nabla\cdot\mathbf v = 0 \implies \frac{1}{r}\frac{\partial}{\partial r}(r v_r) + \frac{\partial}{\partial z}v_z = 0. \tag{2} $$
Integrating from $z=0$ to $z=z_c$,
$$ \frac{1}{r}\Delta(r v_r) = u, \tag{3} $$
where $\Delta(r v_r) = r v_r(r,z_c) - r v_r(r,0) = r\big(v_r(r,z_c)-v_r(r,0)\big)$. Hence the difference between the maximum and minimum values of $v_r$ at a given $r$ is $u$, which (as shown above) is almost always much smaller than $v_r$. So the variation of $v_r$ with $z$ is insignificant for the kinetic-energy estimate — as is the vertical water velocity.

By the above, the kinetic energy of the water beneath the cylinder is
$$ K_w = \int_0^R \rho_w (2\pi r z_c\, dr)\frac{v_r^2(r)}{2} = \frac{\rho_w \pi u^2}{4 z_c}\int_0^R r^3\, dr = \frac{\rho_w \pi R^4}{16 z_c}u^2. \tag{4} $$

#### In the rest of the water

The water outside the narrow space between the lower end of the cylinder and the floor is also set in motion. Its kinetic energy can be ascribed to an added mass, for which we can estimate an upper bound: since $H<R$, in order of magnitude the added mass is not greater than about $M_{\text{add}} \lesssim \rho_w \pi R^2 \cdot R = \rho_w \pi R^3$.[^2]

[^2]: This comes about for the following reason: the volume of water that is displaced has a cross-section area roughly equal to that of the cylinder, and its length cannot be much larger than the largest of $H$ and the rough linear size of the cross-section, which in this case is a circle of radius $R$ (if it were significantly larger than the second of the above, then a very thin disk passing through water would cause a long cylinder of water to move along with it, which is clearly false).

How does its kinetic energy compare to that of the water beneath the cylinder? The kinetic energy of this added mass is
$$ K_{\text{out}} = \frac{M_{\text{add}}u^2}{2} \lesssim \frac{\rho_w \pi R^3}{2}u^2, \tag{5} $$
so the ratio of the two kinetic energies is
$$ \frac{K_{\text{out}}}{K_w} \lesssim \frac{8 z_c}{R} \ll 1. \tag{6} $$
Hence the motion of the water outside the narrow space is insignificant.

### Calculation of the time

- We can express the potential energy of the system by treating the solid cylinder as a cylinder of density $\rho_c-\rho_w$ in a medium of constant density $\rho_w$. We find
$$ U = (\rho_c-\rho_w)\pi R^2 H g z_c \tag{7} $$
with respect to the state where the cylinder is in contact with the floor.

- The total kinetic energy of the system is
$$ K = K_w + K_{\text{add}} + K_{\text{cylinder}} = \frac{\rho_w \pi R^4}{16 z_c}u^2 + K_{\text{add}} + \frac{\rho_c \pi R^2 H}{2}u^2. \tag{8} $$
According to the above, $K_{\text{add}}$ is insignificant, and
$$ \frac{K_{\text{cylinder}}}{K_w} = \frac{8\rho_c z_c}{\rho_w R}\cdot\frac{H}{R} \ll 1, \tag{9} $$
so the only significant part of $K$ is $K_w$.

- Initially $z_c=h$ and $u=0$. Hence conservation of energy compels
$$ (\rho_c-\rho_w)\pi R^2 H g z_c + \frac{\rho_w \pi R^4}{16 z_c}u^2 = (\rho_c-\rho_w)\pi R^2 H g h $$
$$ \implies u = \frac{4}{R}\sqrt{\frac{\rho_c-\rho_w}{\rho_w}Hg}\,\sqrt{z_c(h-z_c)} $$
$$ \implies \frac{dz_c}{\sqrt{z_c(h-z_c)}} = -\frac{4}{R}\sqrt{\frac{\rho_c-\rho_w}{\rho_w}Hg}\,dt, \tag{10} $$
where I have used $u = -dz_c/dt$. Integrating this from $z_c=h$ to $z_c=0$, the time taken for the cylinder to fall to the floor is
$$ -\int_0^h \frac{dz_c}{\sqrt{z_c(h-z_c)}} = -\frac{4}{R}\sqrt{\frac{\rho_c-\rho_w}{\rho_w}Hg}\,T $$
$$ \implies \pi = \frac{4}{R}\sqrt{\frac{\rho_c-\rho_w}{\rho_w}Hg}\,T $$
$$ \implies \boxed{\,T = \frac{\pi R}{4}\sqrt{\frac{\rho_w}{\rho_c-\rho_w}\cdot\frac{1}{Hg}}.\,} \tag{11} $$
Interestingly, the time does not depend on $h$.

*Note:* The integral above can be calculated as follows. Let $u = \arcsin\sqrt{1-\frac{z_c}{h}}$. Then
$$ \sin u = \sqrt{1-\frac{z_c}{h}} \implies \cos u\, du = -\frac{1}{2h}\cdot\frac{1}{\sqrt{1-\frac{z_c}{h}}}\,dz_c \implies dz_c = -2h\sin u\cos u\, du. \tag{12} $$
Additionally, $\cos u = \sqrt{1-\sin^2 u} = \sqrt{\frac{z_c}{h}}$, so that, plugging the above into the integral, we get
$$ \int_0^h \frac{dz_c}{\sqrt{z_c(h-z_c)}} = -2\int_{z_c=0}^{z_c=h} du = -2\big(\arcsin(1-1) - \arcsin(1-0)\big) = 2\cdot\frac{\pi}{2} = \pi. \tag{13} $$

---
*Re-derivation check (consistent): from (4) and (7), energy conservation gives $u^2 = \frac{16 z_c(\rho_c-\rho_w)gH}{\rho_w R^2}(h-z_c)$, i.e. $u = \frac{4}{R}\sqrt{\frac{\rho_c-\rho_w}{\rho_w}Hg}\sqrt{z_c(h-z_c)}$ as in (10). Substituting $u=-dz_c/dt$ and using the standard integral $\int_0^h \frac{dz_c}{\sqrt{z_c(h-z_c)}}=\pi$ (the substitution in (12)–(13), or directly the arcsine antiderivative) yields $T=\frac{\pi R}{4}\sqrt{\frac{\rho_w}{(\rho_c-\rho_w)Hg}}$, reproducing the author's boxed (11); the $h$-independence follows because both the driving term and the integral scale the same way in $h$. The lubrication-flow and added-mass approximations (that $K_w$ dominates) are the author's, justified by $\rho_w R \gg 10\rho_c h$.*
