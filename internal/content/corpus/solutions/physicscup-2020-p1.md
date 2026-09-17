---
id: physicscup-2020-p1
problem: physicscup-2020-p1
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Johanes Suhardjo
solution_source_url: https://physicscup.ee/wp-content/uploads/2019/12/Suhardjo.pdf
selection_note: "Selected as the most machine-readable + elegant of the published solutions (LaTeX-compiled, 3 pp). Kalda's comment: not among the very fastest, but a very nice discussion about which approximations are valid."
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Johanes Suhardjo (LaTeX source transcribed faithfully; the competition published no official solution).*

Due to the uniform electric field $E$, each metal sphere is polarized with uniform polarization. One way to see this: consider two spheres of uniform, opposite charge density separated by a small distance — the field inside is uniform and cancels the external field. The field produced is $E = \rho a/3\varepsilon_0$, with $a$ the separation. Thus the polarization (dipole moment per unit volume) is $3\varepsilon_0 E$.

In the problem there are two spheres, and the field of one affects the other. Since the separation $L$ is much larger than the radius $R$, we keep only leading terms. The field of a uniformly polarized sphere is exactly that of a dipole outside the sphere (because, by the first paragraph, the field of a uniformly charged sphere equals that of a point charge at its centre). The dipole field in polar coordinates is
$$ \vec E_{\text{dip}} = \frac{p}{4\pi\varepsilon_0 r^3}\left(2\cos\theta\,\hat r + \sin\theta\,\hat\theta\right). $$

The dipole moment induced by the uniform field is $4\pi\varepsilon_0 R^3 E$, so it produces a field of order $\beta^3 E$ at the other sphere, with $\beta = R/L$. This in turn induces further surface charges (the field is no longer uniform, but since $\beta \ll 1$ we approximate it as uniform, and the induced polarization as uniform). The field produced by this newly induced dipole at the other sphere is of order $\beta^6$ and is neglected (if $L$ is not $\gg R$ one must iterate). So at each sphere we keep only the external field and the dipole field of the other sphere; for the induced charge we keep only the charge induced by the external field and the one induced by the dipole field.

Since the total charge is zero, the net force on the system vanishes, so the oscillation is driven by torque. Consider the potential energy of a dipole in a field (minimum when aligned). Let $\theta$ be the angle between the rod and the external field. At $\theta = 0$ both the first dipoles (induced by the external field) and the second dipoles (induced by the first dipoles' field) align with the external field — an equilibrium. At $\theta = \pi/2$ the system is also in equilibrium, but the first dipoles' field opposes the external field, so the total induced dipole is slightly smaller. The potential energy is lower when the total induced dipole is larger, so the **stable** equilibrium is $\theta = 0$ ($\theta = \pi/2$ is unstable).

For small $\theta$, the magnitude of the dipole field is approximated by
$$ E_{\text{dip}} = \frac{2p}{4\pi\varepsilon_0 r^3} = \frac{R^3}{L^3}\,2E, $$
with $E$ the external field. Its direction: the $\theta$-component is $E_\theta = E_r\,\theta/2$, so the resultant field makes angle $\theta/2$ with the rod, i.e. angle $\varphi = 3\theta/2$ with the external field. The first induced dipole is aligned with the external field, so it produces no torque. The second induced dipole makes angle $\varphi$ with the external field, so the torque is
$$ \tau = -2E p_0 \sin\varphi, $$
where the factor 2 counts the two spheres and $p_0 = 4\pi\varepsilon_0 R^3 E_{\text{dip}} = 8\pi\varepsilon_0 E R^6/L^3$. (Note the dipole field is the same at angle $\theta$ and $\pi-\theta$.) The equation of motion is therefore
$$ \left(\frac{L}{2}\right)^2 2M\,\frac{d^2\theta}{dt^2} = -\frac{24\pi\varepsilon_0 E^2 R^6}{L^3}\,\theta, $$
and finally
$$ \boxed{\;\omega^2 = \frac{48\pi\varepsilon_0 E^2 R^6}{M L^5}.\;} $$

### Additional discussion (validity of the approximations)
Following the first hint, there should be no torque from the dipole–dipole interaction (Newton's third law). Yet approximating one dipole's field as uniform at the other sphere appears to give a torque, since that field makes angle $\varphi = 3\theta/2$ with the other dipole. The resolution: the field is *not* uniform — the outer part of the sphere feels a smaller field, giving zero net torque on the system. This raises a worry: if the uniform-field approximation gives the wrong dipole–dipole torque, can we still trust it for the torque from the external field?

The difference of the dipole field is of order $\beta^4$, so the surface-charge correction is of the same order — small, but large enough to matter for the (delicate) dipole–dipole torque. We must show it does *not* spoil the external-field torque. Use the method of images: a dipole at distance $s$ from a neutral conducting sphere, at angle $\alpha$, modelled as charges $\pm q$ separated by $d$. Each induces an image at $b = R^2/s$, forming an image dipole of direction $\beta$ and separation $d'$. Matching for the two charges,
$$ b + \frac{d'}{2}\cos\beta = \frac{R^2}{s + \frac{d}{2}\cos\alpha}, \qquad b - \frac{d'}{2}\cos\beta = \frac{R^2}{s - \frac{d}{2}\cos\alpha}, $$
so (with $d,d'$ small)
$$ d'\cos\beta = -\frac{R^2}{s^2}\,d\cos\alpha. \tag{1} $$
From the geometry,
$$ \frac{d'\sin\beta}{b} = \frac{d\sin\alpha}{s}. \tag{2} $$
Combining gives $\beta = -\alpha$ and $d' = dR^2/s^2$ (each charge induces an image of opposite sign, so the image dipole direction is $-\alpha$). The image charges give an image dipole
$$ p' = \frac{R}{s}\,qd\,\frac{R^2}{s^2}\;\Rightarrow\; p' = \frac{R^3}{s^3}\,p, $$
plus a point charge $Q = -qRd\cos\alpha/s^2 = -pR\cos\alpha/s^2$ at the image position (the image charges differ in magnitude), and $-Q$ at the centre to keep the sphere neutral.

We need not compute the full surface-charge distribution to get the external-field torque: it is the same as the force acting on the image dipole and image charges. In the oscillation, $\theta = \alpha$, and the torque on one sphere is
$$ \tau = E Q b\sin\theta - E p'\sin 2\theta \approx -3Ep\,\frac{R^3}{L^3}\,\theta. $$
Because a uniform field exerts the same torque on two widely separated point charges as on a dipole, this torque is exactly the same as that obtained from the uniform-field approximation — so the external-field torque is unaffected (whereas the dipole–dipole torque was not). Remarkably this holds even when $L$ is not $\gg R$ (one still needs $L \gg R$ only to neglect higher-order charges). Thus the approximation used for the equation of motion is justified.

---
*Re-derivation check (consistent): the moment of inertia of two masses $M$ at $\pm L/2$ is $I = 2M(L/2)^2 = ML^2/2$; with restoring coefficient $\kappa = 24\pi\varepsilon_0 E^2 R^6/L^3$, $\omega^2 = \kappa/I = 48\pi\varepsilon_0 E^2 R^6/(ML^5)$, matching the author's boxed result.*
